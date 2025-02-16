import ItemBoard from "@/components/board/item-board/ItemBoard.tsx";

const Board = () => {
  return (
    <div className="flex gap-2 h-full p-2">
      <ItemBoard />
      <ItemBoard />
    </div>
  );
};

export default Board;
