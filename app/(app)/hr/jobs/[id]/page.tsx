"use client";
import { Text, Stack, Divider, Group, Flex, Button } from "@mantine/core";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { IoShareOutline, IoArrowBackSharp } from "react-icons/io5";
import Link from "next/link";
import CandidatesDragDrop from "../../../../components/candidatesDragDrop";
import FirstJobCard from "../../../../components/cards/createFirstJobCard";

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params: { id } }: Props) {
  // const jobs = []
  const jobs=[1,2,3,4,56,7,8]
  return (
    <Stack className='min-h-screen'>
       <Flex  m="sm" justify="space-between">
        <Stack  gap="0">
            <Link href={'#'}>
          <Group className='text-writingGray' gap='5'>
            <IoArrowBackSharp />
            <Text >Back to all jobs</Text>
          </Group>
            </Link>
          <Text className='text-2xl mt-3'>Project name goes here</Text>
          <Text className='text-writingGray text-sm ' >Deadline to apply 12 Aug 2024</Text>
        </Stack>
        <Group>
          <Button
            leftSection={<IoShareOutline size={16} />}
            className='bg-midGray'
          >
            Share
          </Button>
          <PiDotsThreeOutlineVerticalFill size={20} />
        </Group>
      </Flex>
      <Divider color="#475569" />


      {jobs.length >0 &&<CandidatesDragDrop />} 
      {jobs.length === 0 && (
        <div className="flex flex-col flex-1 items-center justify-center">
          <FirstJobCard  />
        </div>
      )}


    </Stack>
  );
}
