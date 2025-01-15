import { sql } from "@vercel/postgres";

export async function GET() {
  try {
    const users = await sql`
      SELECT 
        id, 
        email, 
        name, 
        auth_provider, 
        created_at,
        last_login
      FROM users;
    `;

    return Response.json({
      message: "Users retrieved successfully",
      users: users.rows,
      count: users.rows.length,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
