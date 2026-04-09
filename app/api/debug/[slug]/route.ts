import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const jsonPath = path.join(process.cwd(), "data", "posts.json");
  const posts = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
  const post523 = posts.find((p: { id: number }) => p.id === 523);
  const p523slug: string = post523?.slug ?? "";

  // Compare char codes to detect invisible differences
  const slugCodes = [...slug].map((c) => c.charCodeAt(0).toString(16));
  const p523Codes = [...p523slug].map((c) => c.charCodeAt(0).toString(16));

  // Try various normalizations
  const exactMatch = p523slug === slug;
  const nfcMatch = p523slug.normalize("NFC") === slug.normalize("NFC");
  const nfdMatch = p523slug.normalize("NFD") === slug.normalize("NFD");

  return Response.json({
    receivedSlug: slug,
    post523Slug: p523slug,
    exactMatch,
    nfcMatch,
    nfdMatch,
    slugLength: slug.length,
    p523Length: p523slug.length,
    // Show first 20 char codes of each
    slugCodes: slugCodes.slice(0, 20),
    p523Codes: p523Codes.slice(0, 20),
  });
}
