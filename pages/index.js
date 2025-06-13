import Head from "next/head";
import Image from "next/image";
import { createGraphiQLFetcher } from "@graphiql/toolkit";
import { GraphiQL } from "graphiql";
import { useEffect, useState } from "react";

import styles from "../styles/Home.module.css";

// Updated default query to fetch countries data
const defaultQuery = /* GraphQL */ `
  {
    countries {
      code
      name
      emoji
    }
  }
`;

export default function Home() {
  const [fetcher, setFetcher] = useState();

  useEffect(() => {
    // Use local API proxy as GraphQL endpoint
    setFetcher(() => createGraphiQLFetcher({ url: "/api/graphql" }));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>GraphiQL with Public API Test</title>
        <meta name="description" content="Testing public GraphQL API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Testing Public GraphQL API with GraphiQL
        </h1>

        <p className={styles.description}>
          Try querying countries from a public GraphQL API.
        </p>

        {fetcher ? (
          <div
            style={{
              width: "100%",
              maxWidth: "1233px",
              height: "500px",
            }}
          >
            <GraphiQL fetcher={fetcher} defaultQuery={defaultQuery} />
          </div>
        ) : null}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
