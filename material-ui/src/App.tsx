import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

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
      <Box sx={{ pt: { xs: 7, md: 8 } }}>
        <SecondaryHeader />
      </Box>
      <Container fixed component="main" sx={{ pt: 2 }}>
        <Form />
        <List />
        <Card />
        <LoadingState />
        <ErrorState />
        <Buttons />
        <Modal />
        <TextContent />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
