import { Comics } from "@/utils/ComicApi";
import type { NextRequest } from "next/server";

export async function GET(_: NextRequest, { params }: { params: { slug: string } }) {
  try {
    return Response.json(await Comics.getChapters(params.slug), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error!", { status: 500 });
  }
}
