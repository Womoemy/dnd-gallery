/* eslint-disable react/prop-types */
import { useState } from "react";
import { imageDB } from "../imageDB";
import {
  closestCenter,
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  rectSwappingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableImage = ({ image }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: image.id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex flex-col shadow-black/30"
    >
      <img
        className="max-w-full h-32 md:h-48 hover:cursor-move"
        src={image.url}
        alt={`image ${image.id}`}
      />
      <div className="absolute flex gap-1 py-1 mx-1 items-center">
        {image.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-3xl text-sm bg-gray-200 py-2 px-3 hover:cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const DragDropGallery = () => {
  const [images, setImages] = useState(imageDB);
  const [searchStr, setSearchStr] = useState("");

  const mouse = useSensor(MouseSensor);
  const touch = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  });
  const sensors = useSensors(mouse, touch);

  // Re-order images after drag and drop
  const onDragEnd = (e) => {
    const { active, over } = e;
    if (active.id === over.id) {
      return;
    }
    setImages((images) => {
      const oldIndex = images.findIndex((image) => image.id === active.id);
      const newIndex = images.findIndex((image) => image.id === over.id);
      return arrayMove(images, oldIndex, newIndex);
    });
  };

  const onFilterImages = images.filter((image) => {
    return (
      searchStr.toLowerCase() === "" ||
      image.tags.some((tag) => tag.toLowerCase().includes(searchStr))
    );
  });

  return (
    <div className="w-full h-full my-5 mx-auto bg-gray-50 px-3">
      <form className="md:flex items-center  justify-center p-2 mb-4">
        <div className="relative w-full lg:w-[500px] ">
          <input
            type="text"
            id="searchBar"
            value={searchStr}
            onChange={(e) => setSearchStr(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:outline-none focus:ring-blue-500 focus:border-blue-600 block w-full pl-10 p-2.5"
            placeholder="Search for images by tags..."
            required
          />
        </div>
      </form>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={onDragEnd}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <SortableContext items={images} strategy={rectSwappingStrategy}>
            {onFilterImages.map((image) => (
              <SortableImage key={image.id} image={image} />
            ))}
          </SortableContext>
        </div>
      </DndContext>
    </div>
  );
};
export default DragDropGallery;
