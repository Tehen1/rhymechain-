import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

// Create a SQL client with the connection string
const sql = neon(process.env.DATABASE_URL!)
export const db = drizzle(sql)

// Helper function to execute raw SQL queries
export async function executeQuery<T = any>(query: string, params: any[] = []): Promise<T> {
  return sql(query, params) as Promise<T>
}
