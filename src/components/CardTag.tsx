import { Item } from "@/types/interface";
import { FC } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface CardTagProps {
  item: Item;
}

const CardTag: FC<CardTagProps> = ({ item }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{item.name}</CardTitle>
        <CardDescription>Pole count: {item.count}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default CardTag;
export type { CardTagProps };
