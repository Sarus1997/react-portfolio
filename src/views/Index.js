
import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import Tabs from "views/IndexSections/Tabs.js";
import Pagination from "views/IndexSections/Pagination.js";
import Typography from "views/IndexSections/Typography.js";
import JavaScript from "views/IndexSections/JavaScript.js";
import Other from "views/IndexSections/Other.js";
import Crudtest from "views/IndexSections/Crudtest.js";
import Examples from "views/IndexSections/Examples.js";
import Moretab from "views/IndexSections/Moretab.js";
import Bi101 from "views/IndexSections/Bi101.js";
import ItRoom from "views/IndexSections/ItRoom.js";

export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
        <Tabs />
        <Moretab />
          <Pagination />
          <Typography />
          <Crudtest />
          <JavaScript />
          <ItRoom />
          <Other />
          <Bi101 />
          <Examples/>
        </div>
        <Footer />
      </div>
    </>
  );
}
