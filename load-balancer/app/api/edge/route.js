export const runtime = "edge";

export async function GET() {
  return new Response(
    JSON.stringify({ status: "Edge function running", time: Date.now() }),
    { headers: { "Content-Type": "application/json" } }
  );
}
