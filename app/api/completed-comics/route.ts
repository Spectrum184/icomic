import { Comics } from "@/utils/ComicApi";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

    return Response.json(await Comics.getCompletedComics(page), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error!", { status: 500 });
  }
}
