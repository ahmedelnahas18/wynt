"use client";
import { useState } from "react";
import { Text, Card, Group, Title, Flex } from "@mantine/core";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import CandidateCard from "../cards/candidatesCard";

const initialData = {
  "All-candidates": [
    {
      id: "1",
      name: "Chris",
      level: "Senior",
      score: "9.2",
      phone: "+96689090876",
      email: "Chrisno3l@bim.com",
      rating: 3,
    },
    {
      id: "4",
      name: "mohamed",
      level: "Senior",
      score: "1",
      phone: "+96689445488",
      email: "mohamed@bim.com",
      rating: 1,
    },
    {
      id: "7",
      name: "Chris",
      level: "Senior",
      score: "9.2",
      phone: "+96689090876",
      email: "Chrisno3l@bim.com",
      rating: 3,
    },
    {
      id: "10",
      name: "mohamed",
      level: "Senior",
      score: "1",
      phone: "+96689445488",
      email: "mohamed@bim.com",
      rating: 1,
    },
  ],
  Shortlisted: [
    {
      id: "2",
      name: "ahmed",
      level: "Senior",
      score: "8",
      phone: "+96541465465",
      email: "ahmed@gmail.com",
      rating: 4,
    },
    {
      id: "5",
      name: "khaled",
      level: "Senior",
      score: "8",
      phone: "+96541465465",
      email: "khaled@gmail.com",
      rating: 4,
    },
    {
      id: "8",
      name: "Chris",
      level: "Senior",
      score: "9.2",
      phone: "+96689090876",
      email: "Chrisno3l@bim.com",
      rating: 3,
    },
    {
      id: "11",
      name: "mohamed",
      level: "Senior",
      score: "1",
      phone: "+96689445488",
      email: "mohamed@bim.com",
      rating: 1,
    },
  ],
  Interviewed: [
    {
      id: "3",
      name: "john",
      level: "primary",
      score: "6",
      phone: "+9861554865",
      email: "john@gmail.com",
      rating: 1,
    },
    {
      id: "6",
      name: "mostafa",
      level: "primary",
      score: "7",
      phone: "+96645268627",
      email: "mostafa@gmail.com",
      rating: 5,
    },
    {
      id: "9",
      name: "Chris",
      level: "Senior",
      score: "9.2",
      phone: "+96689090876",
      email: "Chrisno3l@bim.com",
      rating: 3,
    },
    {
      id: "12",
      name: "mohamed",
      level: "Senior",
      score: "1",
      phone: "+96689445488",
      email: "mohamed@bim.com",
      rating: 1,
    },
  ],
};

export default function CandidatesDragDrop() {
  const [state, setState] = useState(initialData);

  const handleDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) return;

    const fromColumn = source.droppableId;
    const toColumn = destination.droppableId;
    const fromIndex = source.index;
    const toIndex = destination.index;

    const newState = { ...state };
    const [movedItem] = newState[fromColumn].splice(fromIndex, 1);
    newState[toColumn].splice(toIndex, 0, movedItem);

    setState(newState);
  };

  const columns = [
    { id: "All-candidates", title: "All candidates" },
    { id: "Shortlisted", title: "Shortlisted" },
    { id: "Interviewed", title: "Interviewed" },
  ];

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Flex m="sm">
          {columns?.map((column) => (
            <div
              key={column.id}
              className="w-1/3 m-4 border border-slate-700 rounded-2xl shadow-lg overflow-hidden"
            >
              <Title ta="center" p="sm" c="white" order={3}>
                {column.title}
              </Title>
              <Droppable droppableId={column.id}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{ minHeight: "10rem" }}
                  >
                    {state[column.id]?.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <Group
                            justify="center"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <Flex w="100%">
                              <CandidateCard />
                            </Flex>
                          </Group>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </Flex>
      </DragDropContext>
    </div>
  );
}
