import React from "react";

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
    <div className="bg-white shadow overflow-hidden sm:rounded-lg my-4">
      <div className="border-t border-gray-200">
        <dl>
          {items.map((item) => (
            <div
              key={item.id}
              className={`${
                item.id % 2 === 0 ? "bg-white" : "bg-gray-50"
              } px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
            >
              <dt className="text-sm font-medium text-gray-500">{item.name}</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default List;
