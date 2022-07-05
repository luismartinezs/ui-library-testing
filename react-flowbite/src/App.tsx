import React from "react";

import Form from "@/components/Form";
import List from "@/components/List";
import Card from "@/components/Card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingState from "@/components/LoadingState";
import ErrorState from "@/components/ErrorState";
import Buttons from "@/components/Buttons";
import Modal from "@/components/Modal";
import TextContent from "@/components/TextContent";
import SecondaryHeader from "@/components/SecondaryHeader";

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <SecondaryHeader />
      <div className="container mx-auto px-4 lg:px-0 max-w-2xl">
        <Form />
        <List />
        <Card />
        <LoadingState />
        <ErrorState />
        <Buttons />
        <Modal />
        <TextContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
