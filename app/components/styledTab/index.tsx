import React, { useState } from "react";
import { Tabs } from "@mantine/core";
import { useHover } from "@mantine/hooks";

export default function StyledTabs({ items }) {
  return (
    <Tabs
      className=""
      color="#4F46E5"
      className="bg-transparent"
      onTabChange={(value) => setSelectedTab(value)}
    >
      <Tabs.List className="bg-elementBackground rounded-md">
        {items.map((item, index) => (
          <Tabs.Tab className=" hover:bg-lightPurple" value={item}>
            {item}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  );
}
