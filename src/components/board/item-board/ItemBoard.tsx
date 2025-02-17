import CardsTask from "@/components/board/cards-task/CardsTask.tsx";
import { useState } from "react";
import * as React from "react";

export interface Items {
  id: number;
  title: string;
  description: string;
}

interface Props {
  itemBoard: {
    id: number;
    titleItemBoard: string;
    descriptionItemBoard: string;
    itemsBoard: Items[];
  };
}

const ItemBoard = ({ itemBoard }: Props) => {
  const [items, setItems] = useState(itemBoard.itemsBoard);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, data: Items) => {
    event.dataTransfer.setData("dataElement", JSON.stringify(data));
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const dataElement = JSON.parse(event.dataTransfer.getData("dataElement"));

    const newList = items.filter((item) => item.id !== dataElement.id);

    setItems([...newList, dataElement]);
  };

  const handleDragDropItem = (event: React.DragEvent<HTMLDivElement>, data: Items) => {
    event.preventDefault();
    event.stopPropagation();

    const dataElement = JSON.parse(event.dataTransfer.getData("dataElement"));

    if (dataElement.id === data.id) {
      return;
    }

    const newList = items.filter((item) => item.id !== dataElement.id);

    const index = items.findIndex((item) => item.id === data.id);

    newList.splice(index, 0, dataElement);

    setItems(newList);
  };

  return (
    <div className="px-2 py-4 h-full flex flex-col gap-4 bg-slate-950 w-72 rounded-md border-2 border-slate-700">
      <div className="px-2 flex justify-between">
        <div>
          <h1 className="font-bold">{itemBoard.titleItemBoard}</h1>
          <p className="text-sm text-gray-500">{itemBoard.descriptionItemBoard}</p>
        </div>
        <div className="flex">
          <button className="font-bold text-lg">...</button>
        </div>
      </div>
      <div
        id="container-drop"
        className="flex flex-col gap-2 h-full"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {items.map((itemCards) => (
          <CardsTask
            key={itemCards.id}
            item={itemCards}
            handleDragStart={handleDragStart}
            handleDragDropItem={handleDragDropItem}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemBoard;
