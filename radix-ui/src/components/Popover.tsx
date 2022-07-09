import * as PopoverPrimitive from "@radix-ui/react-popover";
import { withClassName } from "@/withClassName";

export const Popover = withClassName(PopoverPrimitive.Root, "popover w-20");
export const PopoverTrigger = withClassName(
  PopoverPrimitive.Trigger,
  "popover-trigger py-1 px-2 bg-secondary-500 text-white"
);
export const PopoverContent = withClassName(
  PopoverPrimitive.Content,
  "popover-content bg-primary-500 text-white py-1 px-2"
);
