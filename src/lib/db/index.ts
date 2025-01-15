import { createUserTables } from "./schema";
import { db } from "@vercel/postgres";

const client = await db.connect();

export const GET = async () => {
  try {
    await client.sql`BEGIN`;

    await createUserTables();

    await client.sql`COMMIT`;
    return Response.json({ message: "Database initialized successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    console.error(error);
    return Response.json(
      { error: "Failed to initialize database" },
      { status: 500 }
    );
  }
};
