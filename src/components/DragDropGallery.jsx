/* eslint-disable react/prop-types */
import { useState } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import { useContext } from "react";
// import { Navigate } from "react-router-dom";
import { imageDB } from "../imageDB";
import { 
    closestCenter, 
    DndContext,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    useSortable, 
    rectSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
// import SortableImage from "./ImageCard";


const SortableImage = ({ image }) => {
    const {
        attributes, 
        listeners, 
        setNodeRef, 
        transform, 
        transition,
    } = useSortable({id: image.id});
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
    )

} 

const DragDropGallery = () => {  
    // const { currentUser } = useContext(AuthContext);
    const [images, setImages] = useState(imageDB);

    const mouse = useSensor(MouseSensor),
        touch = useSensor(TouchSensor, {
            activationConstraint: {
                delay: 250,
                tolerance: 5,
            }
        });
    const sensors = useSensors(mouse, touch)

    // Re-order images after drag and drop
    const onDragEnd = (e) => {
        const { active, over } = e;
        if (active.id === over.id) {
            return;
        }
        setImages((images) => {
            const oldIndex = images.findIndex((image) => image.id === active.id)
            const newIndex = images.findIndex((image) => image.id === over.id)
            return arrayMove(images, oldIndex, newIndex);
        });
    };

    // if(!currentUser) {
    //     return <Navigate to="/login" replace />
    // } else {
    //     const mouse = useSensor(MouseSensor),
    //         touch = useSensor(TouchSensor, {
    //             activationConstraint: {
    //                 delay: 250,
    //                 tolerance: 5,
    //             }
    //         });
    //     const sensors = useSensors(mouse, touch)

    //     // Re-order images after drag and drop
    //     const onDragEnd = (e) => {
    //         const { active, over } = e;
    //         if (active.id === over.id) {
    //             return;
    //         }
    //         setImages((images) => {
    //             const oldIndex = images.findIndex((image) => image.id === active.id)
    //             const newIndex = images.findIndex((image) => image.id === over.id)
    //             return arrayMove(images, oldIndex, newIndex);
    //         });
    //     };
    //     return (
    //         <div className="w-full h-full my-5 mx-auto">
    //             <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
    //                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    //                     <SortableContext items={images} strategy={rectSortingStrategy}>
    //                         {images.map((image) => (
    //                             <SortableImage key={image.id} image={image} />
    //                         ))}    
    //                     </SortableContext>
    //                 </div>
    //             </DndContext>
    //         </div>
    //     )
    // }

    return (
        <div className="w-full h-full my-5 mx-auto">
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <SortableContext items={images} strategy={rectSortingStrategy}>
                        {images.map((image) => (
                            <SortableImage key={image.id} image={image} />
                        ))}    
                    </SortableContext>
                </div>
            </DndContext>
        </div>
    )
}
export default DragDropGallery;