import CardsTask from "@/components/board/cards-task/CardsTask.tsx";
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
  handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDropToItemBoard: (event: React.DragEvent<HTMLDivElement>, boardId: number) => void;
  handleDragStart: (
    event: React.DragEvent<HTMLDivElement>,
    dataElement: Items,
    boardId: number
  ) => void;
  handleDragDropItem: (
    event: React.DragEvent<HTMLDivElement>,
    dataElement: Items,
    boardId: number
  ) => void;
}

const ItemBoard = ({
  itemBoard,
  handleDragOver,
  handleDropToItemBoard,
  handleDragStart,
  handleDragDropItem,
}: Props) => {
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
        onDrop={(event) => handleDropToItemBoard(event, itemBoard.id)}
      >
        {itemBoard.itemsBoard.map((itemCards) => (
          <CardsTask
            key={itemCards.id}
            boardId={itemBoard.id}
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
