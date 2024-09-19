"use client";
import { ActionIcon, useMantineColorScheme, Card } from "@mantine/core";
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

import {
  Group,
  Flex,
  Button,
  Stack,
  Text,
  Collapse,
  Box,
  Grid,
} from "@mantine/core";

import Stats from "../../components/cards/statsCard";
import FirstJobCard from "../../components/cards/createFirstJobCard";
import JobCard from "../../components/cards/jobCard";
import CandidateCard from "../../components/cards/candidatesCard";
import { useDisclosure } from "@mantine/hooks";
import CollapsingCard from "../../components/cards/collapsingCard";

export default function Main() {
  const jobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const jobs = [];
  const stats = ["applicants", "jobPosted", "goodMatched"];
  const collapsingCards = [
    { title: "Recommended candidates ", card: <CandidateCard /> },
    { title: "Recent Jobs ", card: <JobCard />},
  ];
  return (

    <Flex direction="column" mih="100vh">
      <Flex direction="row" w="100%">
        {stats.map((stat, index) => (
          <Group w="33%" m="md">
            <Stats statType={stat} />
          </Group>
        ))}
      </Flex>

      {jobs.length === 0 && (
        <div class="flex flex-col flex-1 items-center justify-center">
          <FirstJobCard />
        </div>
      )}

      {jobs.length > 0 && collapsingCards.map((collapsingCard, index)=>(
        <Stack gap="0">
          <CollapsingCard  title={collapsingCard.title} card={collapsingCard.card}/>
        </Stack>
      ))}
    </Flex>
  );
}
