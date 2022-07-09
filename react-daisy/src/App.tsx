import React from "react";

import { Theme } from "react-daisyui";

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
import WidthWrapper from "@/components/WidthWrapper";

function App(): JSX.Element {
  return (
    <Theme dataTheme="dark">
      <Header />
      <SecondaryHeader />
      <WidthWrapper>
        <Form />
        <List />
        <Card />
        <LoadingState />
        <ErrorState />
        <Buttons />
        <Modal />
        <TextContent />
      </WidthWrapper>
      <Footer />
    </Theme>
  );
}

export default App;
