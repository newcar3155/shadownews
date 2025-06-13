import fetch from "node-fetch";

// Optional: Use env var instead of hardcoding
const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT || "https://shadownews24.com/graphql/";

export default async function handler(req, res) {
  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: typeof req.body === "string" ? req.body : JSON.stringify(req.body),
    });

    const data = await response.text(); // or use .json() if the response is JSON
    res.status(response.status).send(data);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({ error: `internal error: ${error}` });
  }
}
