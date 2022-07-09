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
import { Popover, PopoverTrigger, PopoverContent } from "@/components/Popover";

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <SecondaryHeader />
      <Popover className="bg-red-500">
        <PopoverTrigger>Trigger</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
      <Form />
      <List />
      <Card />
      <LoadingState />
      <ErrorState />
      <Buttons />
      <Modal />
      <TextContent />
      <Footer />
    </div>
  );
}

export default App;
