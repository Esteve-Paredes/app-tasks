import ItemBoard from "@/components/board/item-board/ItemBoard.tsx";
import { boardData } from "@/constants/board-data.ts";

const Board = () => {
  return (
    <div className="flex gap-2 h-full p-2">
      {boardData.map((itemBoard) => (
        <ItemBoard key={itemBoard.id} itemBoard={itemBoard} />
      ))}
    </div>
  );
};

export default Board;
