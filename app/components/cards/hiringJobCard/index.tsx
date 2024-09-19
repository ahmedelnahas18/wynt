  import {
  Group,
  Flex,
  Button,
  Stack,
  Text,
  Collapse,
  Box,
  Grid,
  Card,
  Avatar,
  Pill,
  Center,
  Divider,
  Modal,
} from "@mantine/core";

export default function HiringJob({ opened, close }) {
  return (
    <Card className=" w-full shadow-lightPurple/50 shadow-full-around p-4 bg-elementBackground">
      <Stack gap="0">
        <Flex>
          <Avatar
            radius={4}
            size="lg"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/214/517/small_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg"
          />
          <Stack justify="center" ml="sm" gap="0">
            <Text>Hiring a supervisor</Text>
            <Text className="text-writingGray text-sm">
              Deadline to apply: 12/08/2024
            </Text>
          </Stack>
        </Flex>

        <Card className="p-3 my-3 bg-transparent border border-grayBorder/50">
          <Flex gap="20" justify="space-around">
            <Stack gap="0">
              <Text className="text-sm text-writingGray">Location</Text>
              <Text>Remote</Text>
            </Stack>
            <Stack gap="0">
              <Text className="text-sm text-writingGray">Contract Type</Text>
              <Text>Part-time</Text>
            </Stack>
            <Stack gap="0">
              <Text className="text-sm text-writingGray">Contract Period</Text>
              <Text>1 Year</Text>
            </Stack>
          </Flex>
        </Card>
        <Stack className="mb-3" gap="5">
          <Text className=" text-sm">Required skills</Text>
          <Group>
            <Pill className="px-2 bg-midGray rounded-md">Adobe XD</Pill>
            <Pill className="px-2 bg-midGray rounded-md">Figma</Pill>
            <Pill className="px-2 bg-midGray rounded-md">Sketch</Pill>
            <Pill className="px-2 bg-midGray rounded-md">Framer</Pill>
          </Group>
        </Stack>

        <Center>
          <Divider w="98%" color="midGray" />
        </Center>

        <Flex>
          <Button className="bg-lightPurple hover:bg-hoverPurple">
            Apply now
          </Button>
        </Flex>
      </Stack>
    </Card>
  );
}
