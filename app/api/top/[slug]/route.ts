import { Comics, Status } from "@/utils/ComicApi";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
    const status = searchParams.get("status") ? `${searchParams.get("status")}` : "all";

    let result = null;
    switch (params.slug) {
      case "weekly":
        result = await Comics.getTopWeeklyComics(status as Status, page);
        break;

      case "monthly":
        result = await Comics.getTopMonthlyComics(status as Status, page);
        break;

      case "daily":
        result = await Comics.getTopDailyComics(status as Status, page);
        break;

      case "chapter":
        result = await Comics.getTopChapterComics(status as Status, page);
        break;

      case "follow":
        result = await Comics.getTopFollowComics(status as Status, page);
        break;

      case "comment":
        result = await Comics.getTopCommentComics(status as Status, page);
        break;

      default:
        result = await Comics.getTopAllComics(status as Status, page);
        break;
    }

    return Response.json(result, { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error!", { status: 500 });
  }
}
