import { db } from "@vercel/postgres";

const client = await db.connect();

export async function createUserTables() {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // auth_provider ENUM 생성
    await client.sql`
      DO $$ 
      BEGIN 
        IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'auth_provider') THEN
          CREATE TYPE auth_provider AS ENUM ('email', 'google', 'apple', 'facebook');
        END IF;
      END $$;
    `;

    // users 테이블 생성
    await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password TEXT,
        name VARCHAR(255),
        profile_image TEXT,
        auth_provider auth_provider NOT NULL,
        auth_provider_id TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        last_login TIMESTAMP WITH TIME ZONE
      );
    `;

    return true;
  } catch (error) {
    console.error("Error creating tables:", error);
    throw error;
  }
}
