"use client";
import React, { useState } from "react";
import {
  MantineProvider,
  Autocomplete,
  Menu,
  MenuItem,
  Text,
  Group,
  Button,
  Flex,
  Pill,
  Divider,
  Stack,
  Progress,
  Input,
  Textarea,
  Select,
  TagsInput,
  FileInput,
  Grid,
  Tabs,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { CiSearch } from "react-icons/ci";
import { MdLocationPin } from "react-icons/md";
import JobCard from "../../../components/cards/jobCard";
import StyledTabs from "../../../components/styledTab";

export default function Page() {
  const jobs = [1,2,3,4,5,6,7,8]
  return (
    <Stack p="md">
      <Text size="xl" c="white">
        All jobs (25)
      </Text>

      <Flex direction="row" justify="space-between">

        <StyledTabs items={["Open", "Closed", "Draft", "Arcive"]}/>

        <Autocomplete
          className='w-2/5 rounded-md'
          data={["data"]}
          leftSection={<CiSearch />}
          placeholder="Search by a job name"
          styles={{
            input: {
              backgroundColor: "#0F172A",
              borderColor: "rgba(148, 163, 184, 0.3)",
            },
          }}
        />
        <Select
          placeholder="Location"
          leftSection={<MdLocationPin />}
          data={["Onsite", "Remote"]}
          styles={{
            input: {
              backgroundColor: "#0F172A",
              color: "white",
              borderColor: "rgba(148, 163, 184, 0.3)",
            },
          }}
        />
      </Flex>

      <Grid>
      {jobs.map((job,index)=>(
        <Grid.Col key={index} span={4}>
        <JobCard />
      </Grid.Col>
      ))}
    </Grid>
    </Stack>
  );
}
