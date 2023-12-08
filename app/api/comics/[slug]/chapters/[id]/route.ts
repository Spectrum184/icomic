import { Comics } from "@/utils/ComicApi";
import type { NextRequest } from "next/server";

export async function GET(_: NextRequest, { params }: { params: { slug: string; id: string } }) {
  try {
    const chapterId = params.id ? Number(params.id) : 1;
    return Response.json(await Comics.getChapter(params.slug, chapterId), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error!", { status: 500 });
  }
}
