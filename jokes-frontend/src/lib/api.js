const BASE_URL = "http://localhost:8080/api/jokes";

export async function fetchRandom(type = "any") {
  const url =
    type === "any"
      ? `${BASE_URL}/random`
      : `${BASE_URL}/${encodeURIComponent(type)}/random`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json(); // {id,type,setup,punchline}
}
