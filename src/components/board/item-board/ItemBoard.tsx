import CardsTask from "@/components/board/cards-task/CardsTask.tsx";

const ItemBoard = () => {
  return (
    <div className="px-2 py-4 h-full flex flex-col gap-4 bg-slate-950 w-72 rounded-md border-2 border-slate-700">
      <div className="px-2 flex justify-between">
        <div>
          <h1 className="font-bold">Backlog</h1>
          <p className="text-sm text-gray-500">This item ...</p>
        </div>
        <div className="flex">
          <button className="font-bold text-lg">...</button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <CardsTask />
        <CardsTask />
        <CardsTask />
      </div>
    </div>
  );
};

export default ItemBoard;
