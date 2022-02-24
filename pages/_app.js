import React, { useState, useEffect } from "react";
import { Layout } from "../components";
import "../styles/globals.scss";
import Router from "next/router";
import { Loader } from "../components";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });
  return (
    <Layout>
      {loading && <Loader />}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
