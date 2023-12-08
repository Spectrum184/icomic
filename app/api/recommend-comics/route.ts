import { Comics } from "@/utils/ComicApi";

export async function GET() {
  try {
    return Response.json(await Comics.getRecommendComics(), { status: 200 });
  } catch (error) {
    console.log("errror", error);

    return new Response("Internal Server Error!", { status: 500 });
  }
}
