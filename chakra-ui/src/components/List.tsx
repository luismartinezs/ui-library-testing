import React from "react";

import { ListItem, UnorderedList, Box } from "@chakra-ui/react";

const items = [
  {
    id: 1,
    name: "Item 1",
    description:
      "Sit velit culpa occaecat cupidatat. Duis est ipsum duis tempor eu mollit dolor quis dolor enim.",
  },
  {
    id: 2,
    name: "Item 2",
    description:
      "Sit velit culpa occaecat cupidatat. Duis est ipsum duis tempor eu mollit dolor quis dolor enim.",
  },
  {
    id: 3,
    name: "Item 3",
    description:
      "Sit velit culpa occaecat cupidatat. Duis est ipsum duis tempor eu mollit dolor quis dolor enim.",
  },
];

const BaseList = () => {
  return (
    <UnorderedList spacing={2} styleType="none">
      {items.map((item) => (
        <ListItem key={item.id}>
          <Box as="h3">{item.name}</Box>
          <Box as="p">{item.description}</Box>
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export default BaseList;
