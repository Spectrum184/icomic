import type { NextRequest } from "next/server";
import { userAgents } from "@/utils/userAgent";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const src = searchParams.get("src");
    const providers = ["nettruyennew.com", "truyenqq.com.vn", "nettruyenco.vn"];

    if (!src) throw new Error("Hello");

    const response = await fetch(`${src}`, {
      headers: {
        referer: `https://${providers[Math.floor(Math.random() * 3)]}`,
        "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)],
      },
    });

    if (!response.ok) {
      throw new Error("Image not found");
    }

    const imageBlob = await response.blob();
    return new Response(imageBlob, { headers: { "Content-Type": "image/jpeg" } });
  } catch (error) {
    return new Response("Internal Server Error!", { status: 500 });
  }
}
