import React from "react";
import {
  Card,
  Text,
  Avatar,
  Flex,
  Group,
  Stack,
  Pill,
  Button,
  Drawer,
  Divider,
  Title,
} from "@mantine/core";
import { AiOutlineCloseSquare } from "react-icons/ai";

export default function CandidateDrawer({ opened: any, close: any }) {
  return (
    <Drawer
      size="lg"
      position="right"
      opened={opened}
      onClose={close}
      withCloseButton={false} 
      styles={{
        body: {
          backgroundColor: "#020617",
          minHeight: "100vh",
          borderLeft: "1px solid rgba(148, 163, 184, 0.3)",
        },
      }}
    >
      <Stack className="bg-darkBackground " gap="5">
        
        <Flex justify="space-between" className="mb-5">
          <Group>
            <Pill className="bg-lightGreen text-black rounded-md">
              score 9.2
            </Pill>
            <Pill className="bg-darkGreen rounded-md">AI Interviewed</Pill>
          </Group>
          <Group className="text-writingGray text-2xl">
            <AiOutlineCloseSquare onClick={close} />
          </Group>
        </Flex>

        <Flex justify="space-between">
          <Group>
            <Avatar
              size="xl"
              src="https://r2.erweima.ai/imgcompressed/img/compressed_95f6dc695351dbb5cf511ee473897718.webp"
            />

            <Stack gap="0">
              <Text className="text-mintGreen text-sm">Good match</Text>
              <Text>Chris Noel</Text>
              <Text className="text-writingGray text-sm">Title</Text>
            </Stack>
          </Group>
          <Flex align="center">
            <Button className="bg-lightPurple">Download CV</Button>
          </Flex>
        </Flex>

        <Stack gap="3">
          <Text className="text-sm text-writingGray">Describtion</Text>
          <Text className="text-xs text-writingGray">
            “Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.”
          </Text>
        </Stack>

        <Card
          bg="transparent"
          c="white"
          p="xs"
          style={{ border: "1px solid rgba(148, 163, 184, 0.3)" }}
        >
          <Flex justify="space-between">
            <Stack gap="0">
              <Text className="text-writingGray text-xs">Location</Text>
              <Text className="text-xs">Riyadh, Saudia Arabia</Text>
            </Stack>
            <Stack gap="0">
              <Text className="text-writingGray text-xs">Emai</Text>
              <Text className="text-xs">chrisnoel@gmail.com</Text>
            </Stack>
            <Stack gap="0">
              <Text className="text-writingGray text-xs">Phone</Text>
              <Text className="text-xs">+972 656 254</Text>
            </Stack>
            <Stack gap="0">
              <Text className="text-writingGray text-xs">Salary(SAR)</Text>
              <Text className="text-xs">15,000</Text>
            </Stack>
          </Flex>
        </Card>

        <Stack gap="0">
          <Text>Skills</Text>
          <Flex justify="space-between">
            <Pill className="px-2 bg-midGray rounded-md">
              Hiring a supervisor
            </Pill>
            <Pill className="px-2 bg-midGray rounded-md">
              Hiring a <supervisor></supervisor>
            </Pill>
            <Pill className="px-2 bg-midGray rounded-md">
              Hiring a supervisor
            </Pill>
            <Pill className="px-2 bg-midGray rounded-md">
              Hiring a supervisor
            </Pill>
          </Flex>
        </Stack>

        <Stack gap="0">
          <Text>Skills</Text>
          <Flex justify="space-between">
            <Pill className="px-2 bg-midGray rounded-md">
              Hiring a supervisor
            </Pill>
            <Pill className="px-2 bg-midGray rounded-md">
              Hiring a supervisor
            </Pill>
            <Pill className="px-2 bg-midGray rounded-md">
              Hiring a supervisor
            </Pill>
            <Pill className="px-2 bg-midGray rounded-md">
              Hiring a supervisor
            </Pill>
          </Flex>
        </Stack>

        <Divider color="#334155" size="xs" mt="md" />

        <Stack gap="0">
          <Text className="text-2xl">Chris work experience</Text>
          <Group gap="3">
            <Text className="text-xl">Company name - Position title</Text>
            <Text className="text-writingGray text-sm">
              Full-time Jan 2023 - Jan 2024
            </Text>
          </Group>
          <Text className="text-writingGray text-sm">
            Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </Text>

          <Text className="text-writingGray text-sm">
            Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </Text>
        </Stack>
        <Divider color="midGray" size="xs" mt="md" />

        <Stack gap="0">
          <Group gap="3">
            <Text className="text-xl">Company name - Position title</Text>
            <Text className="text-writingGray text-sm">
              Full-time Jan 2023 - Jan 2024
            </Text>
          </Group>
          <Text className="text-writingGray text-sm">
            Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </Text>
          <Text className="text-writingGray text-sm">
            Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </Text>
          <Text className="text-writingGray text-sm">
            Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </Text>
        </Stack>
      </Stack>
    </Drawer>
  );
}
