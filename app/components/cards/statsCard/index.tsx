import { Card, Text, Group, Flex, NavLink, Stack } from "@mantine/core";
import { GoPerson } from "react-icons/go";


export default function Stats({statType}) {
    statNumer=0
    statAnalysis='More 12 applicants compared to last month.'
  return (
    <Card className='w-full bg-elementBackground border border-lightGray/50'>
        {statType==='applicants' &&
        <Stack className='w-full'>
        <Group>
        <GoPerson />
        <Text>Applicants</Text>
        </Group>
        <Text className='text-4xl ' >{statNumer}</Text>
        <Text className='text-mintGreen text-sm'>{statAnalysis}</Text>
        </Stack>}

        {statType==='jobPosted' &&
        <Stack w='100%'>
        <Group>
        <GoPerson />
        <Text>Job Poste</Text>
        </Group>
        <Text className='text-4xl' >{statNumer}</Text>
        <Text className='text-mintGreen text-sm'>{statAnalysis}</Text>
        </Stack>}

        {statType==='goodMatched' &&
        <Stack w='100%'>
        <Group>
        <GoPerson />
        <Text>Candidates good matched</Text>
        </Group>
        <Text className='text-4xl' >{statNumer}</Text>
        <Text className='text-mintGreen text-sm'>{statAnalysis}</Text>
        </Stack>}
        
    </Card>
  )
}
