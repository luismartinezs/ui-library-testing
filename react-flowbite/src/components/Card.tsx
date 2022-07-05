import { Card } from "flowbite-react";

const BaseCard = () => {
  return (
    <div className="max-w-sm mt-4">
      <Card imgSrc="https://source.unsplash.com/random/400x200" imgAlt="random">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Card title
        </h3>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Nisi ullamco laboris ullamco amet ex sit nulla nostrud occaecat in
          incididunt ut in. Et cupidatat occaecat sit ipsum ad duis ex dolor
          dolore.
        </p>
      </Card>
    </div>
  );
};

export default BaseCard;
