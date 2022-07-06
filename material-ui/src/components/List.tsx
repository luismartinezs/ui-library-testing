import React from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

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
    <Box mt={2}>
      <List>
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem disablePadding>
              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <ListItemText>{item.name}</ListItemText>
                <ListItemText>{item.description}</ListItemText>
              </Stack>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default BaseList;
