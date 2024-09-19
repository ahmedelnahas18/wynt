import {
  Card,
  Text,
  Flex,
  Group,
  Stack,
  Pill,
  Divider,
  Button,
} from "@mantine/core";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { IoAlertCircleOutline } from "react-icons/io5";
import Link from "next/link";

export default function JobCard() {
  const id = 123
  return (
    <Card
    className='bg-elementBackground p-4 border border-lightGray/50'    >
      <Flex direction="row" justify="space-between">
        <Stack gap="0">
          <Text>Hiring a supervisor</Text>
          <Text className='text-writingGray'>Deadline: 12/08/2024</Text>
        </Stack>
        <BsThreeDotsVertical size="20" />
      </Flex>
      <Flex>
        <Group gap="5" className='text-writingGray'>
          <GoPerson />
          <Text>52</Text>
        </Group>
        <Pill 
        className='bg-lightGreen text-black m-4 rounded-md'>
          score 9.2
        </Pill>
      </Flex>
      <Card
      className='bg-transparent m-0 p-3 border border-lightGray/50'
      >
        <Flex justify="space-between" direction="row">
          <Stack gap="0">
            <Text className='text-sm text-writingGray'>
              Contract type
            </Text>
            <Text>Part-time</Text>
          </Stack>
          <Stack gap="0">
            <Text className='text-sm text-writingGray'>
              Contract period
            </Text>
            <Text>1 year</Text>
          </Stack>
          <Stack gap="0">
            <Text className='text-sm text-writingGray'>
              location
            </Text>
            <Text>Remote</Text>
          </Stack>
        </Flex>
      </Card>
      <Flex direction="column" className=' text-writingGray'>
        <Text  className='text-sm my-1' >
          Description
        </Text>
        <Text size="sm">
          “Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum”
        </Text>
      </Flex>
      <Divider m="sm" color="#334155" />

      <Group className='text-writingGray' gap="0">
        <Text mr="5" size="sm">
          Hiring Status
        </Text>
        <IoAlertCircleOutline />
      </Group>

      <Flex direction="row" justify="center" className='mt-2'>
        <Pill 
        className='bg-midGray px-1 rounded-md'>
          All Candidates (568)
        </Pill>
        <Divider variant="dashed" mt="9" w="40" color="#334155" />
        <Pill className='bg-midGray px-1 rounded-md'>
          Shortlisted (13)
        </Pill>
        <Divider variant="dashed" mt="9" w="40" color="#334155" />
        <Pill className='bg-midGray px-1 rounded-md'>
          Ready for interview (6)
        </Pill>
      </Flex>

      <Text 
      className='text-writingGray text-sm m-2'>
        Applicants
      </Text>
      <Flex>
        <Link href={`/hr/jobs/${id}`}>
        <Button 
        className='my-2 bg-lightPurple'>
          View applicants
        </Button>
        </Link>
      </Flex>
    </Card>
  );
}
