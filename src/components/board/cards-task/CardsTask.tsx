import { Items } from "@/components/board/item-board/ItemBoard.tsx";

interface Props {
  item: Items;
  handleDragStart: (event: React.DragEvent<HTMLDivElement>, dataElement: Items) => void;
  handleDragDropItem: (event: React.DragEvent<HTMLDivElement>, dataElement: Items) => void;
}

const CardsTask = ({ item, handleDragStart, handleDragDropItem }: Props) => {
  return (
    <div
      id={item.id.toString()}
      draggable
      className="bg-slate-900 p-2 rounded-md border-2 border-slate-700 cursor-pointer"
      onDragStart={(event) => handleDragStart(event, item)}
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => handleDragDropItem(event, item)}
    >
      <div className="">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default CardsTask;
