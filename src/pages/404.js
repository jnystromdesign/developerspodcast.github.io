import React from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <title>404 - sidan hittades inte</title>
      <h1>Sidan hittades inte</h1>
      <p>
        Åh nej{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        sidan kunde inte hittas
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
      </p>
    </Layout>
  );
};

export default NotFoundPage;
