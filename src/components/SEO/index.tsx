import React from "react";
import Head from "next/head";
import { SEO } from "../../../types/common";

const SEO: React.FC<SEO> = React.memo(function seo({ ...props }) {
  const {} = props;
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Head>
  );
});

export default SEO;
