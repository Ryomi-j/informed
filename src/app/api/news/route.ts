import { NextResponse } from "next/server";
import { getJson } from "serpapi";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const keyword = searchParams.get("keyword");

    const options = {
      engine: "google_news",
      api_key: process.env.NEXT_PUBLIC_GOOGLE_NEWS_API_KEY,
      gl: "kr",
      hl: "ko",
      q: keyword,
    };

    const response = await getJson(options);
    return NextResponse.json(response.news_results || []);
  } catch (error) {
    console.error(error);
    
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
