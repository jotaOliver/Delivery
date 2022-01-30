import React from "react";
import LocationInfo from "./Location/LocationInfo";
import Promotion from "./Products/Promotion";
import MoreOrders from "./Products/MoreOrders";

function Home() {
  return (
    <main>
      <LocationInfo />
      <Promotion />
      <MoreOrders />
    </main>
  );
}

export default Home;
