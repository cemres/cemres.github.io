import { Icon } from "@iconify/react";

const textSizeClass = "text-2xl";

export const categories = [
  {
    name: "All",
    icon: <Icon icon="bx:food-menu" className={textSizeClass} />,
  },
  {
    name: "Fastfood",
    icon: <Icon icon="ic:round-fastfood" className={textSizeClass} />,
  },
  {
    name: "Salads",
    icon: <Icon icon="twemoji:green-salad" className={textSizeClass} />,
  },
  {
    name: "Desserts",
    icon: <Icon icon="ep:dessert" className={textSizeClass} />,
  },
  {
    name: "Drinks",
    icon: (
      <Icon icon="fluent:drink-to-go-20-filled" className={textSizeClass} />
    ),
  },
];
