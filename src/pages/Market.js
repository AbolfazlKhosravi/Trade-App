import React from "react";
import MarketHoom from "../components/HoomComponents/marketHoom";
import Layout from "../layout/layout";

const Market = () => {
  return (
    <Layout>
      <main className="  max-w-full 2xl:container mx-auto flex flex-col">
        <MarketHoom/>
      </main>
    </Layout>
  );
};

export default React.memo(Market);
