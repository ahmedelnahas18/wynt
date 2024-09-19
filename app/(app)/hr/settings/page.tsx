"use client";
import {
  Text,
  Stack,
  Divider,
  Group,
  Flex,
  Button,
  Tabs,
  Avatar,
  Center,
  Input,
} from "@mantine/core";
import Link from "next/link";
import { IoArrowBackSharp } from "react-icons/io5";
import { LuImagePlus } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { CiCreditCard2 } from "react-icons/ci";
import { MdOutlineAddCard } from "react-icons/md";
import { RxCalendar } from "react-icons/rx";
import { CiLogout } from "react-icons/ci";
import StyledTabs from "../../../components/styledTab";

export default function page() {
  return (
    <Stack c="white" gap="0">
      <Stack m="md" gap="0">
        <Link href={"/hr/home"}>
          <Group c="lightGray" gap="5">
            <IoArrowBackSharp />
            <Text className='text-writingGray'>Back to home</Text>
          </Group>
        </Link>
        <Text size="xl">Settings</Text>
        <Text className='text-writingGray text-sm'>
          Company, User, Security, Notification, Billing settings.
        </Text>
      </Stack>
      <Divider color="#334155" />

      <Group className='w-fit'><StyledTabs items={["personal", "Company"]} /></Group>

      <Flex align="center" m="lg" w="60%" justify="space-between">
        <Stack gap="0">
          <Text size="lg">Photo</Text>
          <Text className='text-writingGray text-sm'>
            Company, User, Security, Notification, Billing settings.
          </Text>
        </Stack>
        <Group>
          <Avatar
            size="xl"
            radius={4}
            src="https://r2.erweima.ai/imgcompressed/img/compressed_95f6dc695351dbb5cf511ee473897718.webp"
          />
          <Button className='bg-lightPurple hover:bg-hoverPurple/50'>
            <Group gap="5">
              <LuImagePlus />
              Upload image
            </Group>
          </Button>
        </Group>
      </Flex>

      <Center>
        <Divider color="#334155" w="97%" />
      </Center>

      <Stack m="lg" gap="md">
        <Flex>
          <Text w="30%">Full name</Text>
          <Input
            w="50%"
            placeholder="Enter full name"
            leftSection={<GoPerson size={16} />}
            rightSection={<FaRegEdit size={16} />}
            styles={{
              input: {
                backgroundColor: "#0F172A",
                color: "white",
                borderColor: "rgba(148, 163, 184, 0.3)",
              },
            }}
          />
        </Flex>
        <Flex>
          <Text w="30%">Email</Text>
          <Input
            w="50%"
            placeholder="Enter email"
            leftSection={<IoMailOutline size={16} />}
            rightSection={<FaRegEdit size={16} />}
            styles={{
              input: {
                backgroundColor: "#0F172A",
                color: "white",
                borderColor: "rgba(148, 163, 184, 0.3)",
              },
            }}
          />
        </Flex>
        <Flex>
          <Text w="30%">Password</Text>
          <Button className='bg-midGray/80  hover:bg-midGray'>
            <Group gap="5">
              <CiLock size="18" />
              Change password
            </Group>
          </Button>
        </Flex>
      </Stack>

      <Center>
        <Divider color="#334155" w="97%" />
      </Center>

      <Flex m='lg'>
          <Stack gap='0' w="30%">
          <Text >Billing</Text>
          <Text className='text-writingGray text-sm'>Billing info</Text>
          </Stack>
          <Stack w="50%">
          <Input
            w='100%'
            placeholder="Enter full name"
            leftSection={<CiCreditCard2 size={20} />}
            rightSection={<FaRegEdit size={16} />}
            styles={{
              input: {
                backgroundColor: "#0F172A",
                color: "white",
                borderColor: "rgba(148, 163, 184, 0.3)",
              },
            }}
          />
          <Flex justify='space-between'>
          <Input
            w='48%'
            placeholder="Enter full name"
            leftSection={<RxCalendar size={16} />}

            styles={{
              input: {
                backgroundColor: "#0F172A",
                color: "white",
                borderColor: "rgba(148, 163, 184, 0.3)",
              },
            }}
          />
          <Input
            w='48%'
            placeholder="Enter full name"
            leftSection={<Text size='xs'  c='lightGray'>CVC</Text>}
            styles={{
              input: {
                backgroundColor: "#0F172A",
                color: "white",
                borderColor: "rgba(148, 163, 184, 0.3)",
              },
            }}
          />
          </Flex>

          <Flex>
          <Button  className='bg-midGray/80  hover:bg-midGray'><Group gap='5'><MdOutlineAddCard size='18' />Add new card</Group></Button>
          </Flex>
          </Stack>
        </Flex>

        <Center>
        <Divider color="#334155" w="97%" />
      </Center>

      <Flex m='lg'>
      <Link href={"#"}>
          <Group c="lightGray" gap="5">
          <CiLogout />
            <Text c="lightGray">Logout</Text>
          </Group>
        </Link>
      </Flex>

    </Stack>
  );
}
