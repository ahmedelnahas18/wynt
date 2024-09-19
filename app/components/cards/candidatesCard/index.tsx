import { useDisclosure } from "@mantine/hooks";
import {
  Card,
  Text,
  Avatar,
  Flex,
  Group,
  Stack,
  Pill,
  Drawer,
} from "@mantine/core";
import { IoMail, IoCall } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import CandidateDrawer from "../../candidateDrawer";

export default function CandidateCard() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Flex className='w-full p-4'> 
      <CandidateDrawer opened={opened} close={close} />
      <Card
        onClick={open}
        className='bg-elementBackground border w-full border-lightGray/50'
      >
        <Text className='text-sm'>Applied to Job Name here</Text>
        <Flex mt="sm" justify="space-between">
          <Group>
            <Avatar
              size="lg"
              src="https://r2.erweima.ai/imgcompressed/img/compressed_95f6dc695351dbb5cf511ee473897718.webp"
            />

            <Stack gap="0">
              <Text>Chris Noel</Text>
              <Text className='text-writingGray'>Title</Text>
            </Stack>
          </Group>
          <Group>
            <IoMail />
            <IoCall />
            <BsThreeDotsVertical />
          </Group>
        </Flex>
        
        <Flex >
          <Pill 
          className='bg-lightGreen text-black my-3 round-md'>
            score 9.2
          </Pill>
          <Pill className='bg-darkGreen text-white m-3 round-md'>
            AI Interviewed
          </Pill>
        </Flex>

        <Card
        className='bg-transparent m-0 p-2 border border-lightGray/50'>
          <Flex justify='space-between'>
            <Stack gap="0">
              <Text
              className='text-sm text-writingGray'>
                Yrs of exp
              </Text>
              <Text>5</Text>
            </Stack>
            <Stack gap="0">
              <Text className='text-sm text-writingGray'>
                Salary(SAR)
              </Text>
              <Text>15,000</Text>
            </Stack>
            <Stack gap="0">
              <Text className='text-sm text-writingGray'>
                level
              </Text>
              <Text>senior</Text>
            </Stack>
            <Stack gap="0">
              <Text className='text-sm text-writingGray'>
                skills
              </Text>
              <Text c="lightGreen">Good match</Text>
            </Stack>
          </Flex>
        </Card>

      </Card>
    </Flex>
  );
}
