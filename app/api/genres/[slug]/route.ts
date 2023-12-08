import { Comics, Status, allStatus } from "@/utils/ComicApi";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
    let status = searchParams.get("status") ? `${searchParams.get("status")}` : "all";

    if (!allStatus.includes(status)) status = "all";

    return Response.json(await Comics.getComicsByGenre(params.slug, page, status as Status), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error!", { status: 500 });
  }
}
