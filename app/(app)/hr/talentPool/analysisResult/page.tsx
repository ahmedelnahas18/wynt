"use client";
import {
  Group,
  Text,
  Stack,
  Flex,
  Button,
  Divider,
  Select,
  Grid,
} from "@mantine/core";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { MdDriveFolderUpload } from "react-icons/md";
import CandidateCard from "../../../../components/cards/candidatesCard";

export default function page() {
  const jobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <Stack>
      <Flex m="md" justify="space-between">
        <Stack gap="0">
          <Text className="text-2xl">CV Analysis Results</Text>
          <Text className="text-writingGray text-sm">
            The results might not be accurate due to not linking CV Analysis to
            an active job or missing info{" "}
          </Text>
        </Stack>
        <Group>
          <Button className="bg-lightPurple">
            {" "}
            <Group gap="3">
              <GoPerson size="16" />
              Add candidate to a job
            </Group>
          </Button>
          <Button className="bg-midGray">
            <Group gap="3">
              <MdDriveFolderUpload size="16" />
              Upload Resumes
            </Group>
          </Button>
          <BsThreeDotsVertical size="18" />
        </Group>
      </Flex>

      <Divider />

      <Flex m="md" justify="space-between">
        <Text className="text-2xl">All Candidates (50)</Text>
        <Group>
          <Select
            placeholder="Skills"
            data={[""]}
            styles={{
              input: {
                backgroundColor: "#0F172A",
                color: "white",
                borderColor: "rgba(148, 163, 184, 0.3)",
              },
            }}
          />
          <Select
            placeholder="Job title"
            data={[""]}
            styles={{
              input: {
                backgroundColor: "#0F172A",
                color: "white",
                borderColor: "rgba(148, 163, 184, 0.3)",
              },
            }}
          />
        </Group>
      </Flex>

      <Grid m="sm" overflow="hidden">
        {jobs.map((job, index) => (
          <Grid.Col key={index} span={4}>
            <Flex justify="center">
              <CandidateCard />
            </Flex>
          </Grid.Col>
        ))}
      </Grid>

    </Stack>
  );
}
