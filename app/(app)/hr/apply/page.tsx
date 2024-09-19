import {
  Group,
  Flex,
  Button,
  Stack,
  Text,
  Collapse,
  Box,
  Grid,
  Avatar,
  Card,
  Pill
} from "@mantine/core";
import ApplyNowCard from "../../../components/cards/applyNowCard";
import ApplicationRecived from "../../../components/cards/applicationRecivedCard";

export default function page() {
  return (
    <Flex >
      <Stack gap='15' 
      className='m-10 w-1/2'
      >
        <Group justify="space-between">
        <Flex align='center'>
          <Avatar
            radius={4}
            size="lg"
            src="https://static.vecteezy.com/system/resources/thumbnails/008/214/517/small_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg"
          />
          <Stack justify="center"className='ml-2' gap="0">
            <Text className='text-2xl' >Fluixity</Text>
            <Text className='text-sm text-writingGray'>Company size: 120-150</Text>
          </Stack>
        </Flex>
        <Text>Deadline to apply: 12/08/2024</Text>
      </Group>
      <Text className='text-2xl'>Expert Supervisor for working in MENA</Text>
      <Card w='fit-content' p='sm' c='white' bg='transparent' style={{ border: '1px solid rgba(148, 163, 184, 0.3)'}}>
        <Group gap='lg' >
          <Stack gap='0'>
            <Text className='text-sm text-writingGray'>Location</Text>
            <Text>Remote</Text>
          </Stack>
          <Stack gap='0'>
            <Text className='text-sm text-writingGray'>Contract Type</Text>
            <Text>Part-time</Text>
          </Stack>
          <Stack gap='0'>
            <Text className='text-sm text-writingGray'>Contract Period</Text>
            <Text>1 Year</Text>
          </Stack>
        </Group>
      </Card>
      <Text className='text-lg'>Job Overview</Text>
      <Text className='text-writingGray text-sm'>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</Text>
      <Text className='text-writingGray text-sm'>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</Text>
      <Text className='text-writingGray text-sm'>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</Text>

      <Text className='text-xl'>Required skills</Text>
      <Group>
          <Pill className='px-2 bg-midGray rounded-md'>
            Adobe XD
          </Pill>
          <Pill 
          className='px-2 bg-midGray rounded-md'>
            Figma
          </Pill>
          <Pill className='px-2 bg-midGray rounded-md'>
            Sketch
          </Pill>
          <Pill className='px-2 bg-midGray rounded-md'>
            Framer
          </Pill>
        </Group>
        <Text className='text-xl'>Required skills</Text>
      <Group>
          <Pill className='px-2 bg-midGray rounded-md'>
            Adobe XD
          </Pill>
          <Pill 
          className='px-2 bg-midGray rounded-md'>
            Figma
          </Pill>
          <Pill className='px-2 bg-midGray rounded-md'>
            Sketch
          </Pill>
          <Pill className='px-2 bg-midGray rounded-md'>
            Framer
          </Pill>
        </Group>
      </Stack>

      <Stack m='lg' align='center' w='50%'>
        {/* <Flex  w='80%'><ApplyNowCard /></Flex> */}
        <Flex  w='80%'><ApplicationRecived /></Flex>
      </Stack>
    </Flex>
  );
}
