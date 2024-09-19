import React, { useState } from "react";
import { MantineProvider, Menu,  MenuItem,  Text,  Group,  Button,  Flex,  Pill,  Divider, Stack,} from "@mantine/core";
import { MdDarkMode, MdWbSunny } from "react-icons/md";
import getSidebarItems from "./sidebar-items";
import { SlEnergy } from "react-icons/sl";
import FreePlane from "../cards/freePlanCard";
import ProfileSettings from "../cards/profileSettingsCard";
import Link from "next/link";

export default function Sidebar({ opened }) {
  const sideItems = getSidebarItems();
  const [selectedItem, setSelectedItem] = useState();
  return (
    <MantineProvider>
      <Flex className='bg-darkBackground h-full'  direction="column" justify="space-between">
        <Stack gap="0">
          <Flex className='mb-8' justify='space-around' >
            <Text
            className='pt-3 pl-5 text-4xl font-bold'
            >
              Jobify
            </Text>
            <Pill className='!bg-darkPurple mt-6 !rounded-md  '  >
              Free trial
            </Pill>
          </Flex>
          <Menu>
            {sideItems.map((item, index) => (
              <div key={index}>
                <MenuItem
                  selected={selectedItem === index}
                  onClick={() => setSelectedItem(index)}
                  c={selectedItem === index ? "white" : "lightGray"}
                  bg={selectedItem === index ? "#0F172A" : "transparent"}
                  mb="sm"
                >
                  <Group>
                    {item.icon}
                    {item.label}
                  </Group>
                </MenuItem>
              </div>
            ))}
          </Menu>
          <Divider w="90%" mx="auto" color="#334155" />
          <Link href="/hr/home">
          <Flex >
            <Button 
            className='bg-midGray w-full m-3 hover:bg-lightGray'
             >
              <SlEnergy size={18} /> Create a new Job
            </Button>
          </Flex>
          </Link>
          
        </Stack>
        <Stack p="md">
          <FreePlane />
          <ProfileSettings />
        </Stack>
      </Flex>
    </MantineProvider>
  );
}
