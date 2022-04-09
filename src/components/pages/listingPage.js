import React from "react";
import Layout from "components/templates/authTemplate";
import CardGrid from "components/molecules/cardGrid";

const ListingPage = ({ data }) => {
  return (
    <Layout>
      <CardGrid data={data} />
    </Layout>
  );
};

export default ListingPage;
