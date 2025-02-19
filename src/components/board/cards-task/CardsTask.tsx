import * as React from "react";
import { Items } from "@/components/board/item-board/ItemBoard.tsx";

interface Props {
  item: Items;
  boardId: number;
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

const CardsTask = ({ item, boardId, handleDragStart, handleDragDropItem }: Props) => {
  return (
    <div
      id={item.id.toString()}
      draggable
      className="bg-slate-900 p-2 rounded-md border-2 border-slate-700 cursor-pointer"
      onDragStart={(event) => handleDragStart(event, item, boardId)}
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => handleDragDropItem(event, item, boardId)}
    >
      <div className="">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default CardsTask;
