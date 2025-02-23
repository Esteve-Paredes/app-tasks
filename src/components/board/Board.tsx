import ItemBoard, { Items } from "@/components/board/item-board/ItemBoard.tsx";
import { boardData } from "@/constants/board-data.ts";
import * as React from "react";
import { useState } from "react";

const Board = () => {
  const [board, setBoard] = useState(boardData);

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    data: Items,
    boardId: number
  ) => {
    event.dataTransfer.setData("dataElement", JSON.stringify({ ...data, boardId }));
  };

  const handleDragDropItem = (
    event: React.DragEvent<HTMLDivElement>,
    data: Items,
    boardId: number
  ) => {
    event.preventDefault();
    event.stopPropagation();

    const dataElement = JSON.parse(event.dataTransfer.getData("dataElement"));

    if (dataElement.boardId === boardId) {
      const indexBoard = board.findIndex((item) => item.id === boardId);

      if (indexBoard === -1) return;

      const updatedBoard = [...board];
      const newList = updatedBoard[indexBoard].itemsBoard.filter(
        (item) => item.id !== dataElement.id
      );

      const indexItem = updatedBoard[indexBoard].itemsBoard.findIndex(
        (item) => item.id === data.id
      );

      newList.splice(indexItem, 0, dataElement);

      updatedBoard[indexBoard].itemsBoard = newList;

      setBoard(updatedBoard);
    } else {
      //borra el item de la lista
      const indexBoard = board.findIndex((item) => item.id === dataElement.boardId);

      if (indexBoard === -1) return;

      const updatedBoard = [...board];
      const newList = updatedBoard[indexBoard].itemsBoard.filter(
        (item) => item.id !== dataElement.id
      );

      updatedBoard[indexBoard].itemsBoard = newList;

      setBoard(updatedBoard);

      //agregar el item a la lista destino
      const indexBoardDrop = board.findIndex((item) => item.id === boardId);

      if (indexBoardDrop === -1) return;

      const updatedBoardDrop = [...board];
      const newListDrop = updatedBoardDrop[indexBoardDrop].itemsBoard;

      const indexItem = newListDrop.findIndex((item) => item.id === data.id);

      if (indexItem === -1) return;

      newListDrop.splice(indexItem, 0, dataElement);

      updatedBoardDrop[indexBoardDrop].itemsBoard = newListDrop;

      setBoard(updatedBoardDrop);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDropToItemBoard = (event: React.DragEvent<HTMLDivElement>, boardId: number) => {
    event.preventDefault();

    const dataElement = JSON.parse(event.dataTransfer.getData("dataElement"));

    //sacar de la lista el item que se esta moviendo
    const indexBoard = board.findIndex((item) => item.id === dataElement.boardId);

    if (indexBoard === -1) return;

    const updatedBoard = [...board];

    const newList = updatedBoard[indexBoard].itemsBoard.filter(
      (item) => item.id !== dataElement.id
    );

    updatedBoard[indexBoard].itemsBoard = newList;

    setBoard(updatedBoard);

    //agregar el item a la lista destino
    const indexBoardDrop = board.findIndex((item) => item.id === boardId);

    if (indexBoardDrop === -1) return;

    const updatedBoardDrop = [...board];

    const newListDrop = updatedBoardDrop[indexBoardDrop].itemsBoard;

    newListDrop.push(dataElement);

    updatedBoardDrop[indexBoardDrop].itemsBoard = newListDrop;

    setBoard(updatedBoardDrop);
  };

  return (
    <div className="flex gap-2 h-full p-2">
      {board.map((itemBoard) => (
        <ItemBoard
          key={itemBoard.id}
          itemBoard={itemBoard}
          handleDragOver={handleDragOver}
          handleDropToItemBoard={handleDropToItemBoard}
          handleDragStart={handleDragStart}
          handleDragDropItem={handleDragDropItem}
        />
      ))}
    </div>
  );
};

export default Board;
