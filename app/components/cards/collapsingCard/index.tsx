import React from "react";
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
import { useDisclosure } from "@mantine/hooks";
import CandidateCard from "../candidatesCard";

interface CollapsingCardProps {
  title: string;
  card: React.ReactNode;
}

export default function CollapsingCard({ title, card }: CollapsingCardProps) {
  const jobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div>
      <Flex m="md" c="white" direction="row" justify="space-between">
        <Text style={{ fontSize: "27px" }}>{title}</Text>
        <Button c="lightPurple" bg="transparent" onClick={toggle}>
          {opened ? "View Less" : "View More"}
        </Button>
      </Flex>

      <Grid mx="md" overflow="hidden">
        {jobs.slice(0, 3).map((job, index) => (
          <Grid.Col span={4} key={index}>
            {card}
          </Grid.Col>
        ))}
      </Grid>

      <Collapse in={opened}>
        <Grid m="md" overflow="hidden">
          {jobs.slice(3).map((job, index) => (
            <Grid.Col span={4} key={index + 3}>
              {card}
            </Grid.Col>
          ))}
        </Grid>
      </Collapse>
    </div>
  );
}
