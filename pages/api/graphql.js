import fetch from "node-fetch";

const GRAPHQL_ENDPOINT = "https://countries.trevorblades.com/";

export default async function handler(req, res) {
  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: `internal error: ${error.message}` });
  }
}
