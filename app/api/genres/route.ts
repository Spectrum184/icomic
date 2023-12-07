import { Comics } from "@/utils/ComicApi";

export async function GET() {
  try {
    return Response.json(await Comics.getGenres(), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error!", { status: 500 });
  }
}
