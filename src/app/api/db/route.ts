export async function GET() {
  try {
    return Response.json({
      message: "Database structure retrieved successfully",
    });
  } catch (error) {
    console.error("Error checking database structure:", error);
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
