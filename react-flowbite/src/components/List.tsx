import React from "react";

import { ListGroup } from "flowbite-react";

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

const List = () => {
  return (
    <div className="mt-4">
      <ListGroup>
        {items.map((item) => (
          <ListGroup.Item key={item.id}>
            <div className="flex space-x-2">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default List;
