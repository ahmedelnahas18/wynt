import { MantineProvider, Menu,  MenuItem,  Text,  Group,  Button,  Flex,  Pill,  Card, Stack,} from "@mantine/core";
import Link from "next/link";

export default function PreMadeTemplateCard() {
  const buttons = [
    {
      title : "Supervisor",
      link : "#"
    },
    {
      title : "engineer",
      link : "#"
    },
    {
      title : "manager",
      link : "#"
    },
    {
      title : "tester",
      link : "#"
    },
  ]
  return (
    <Card
    className='px-52 bg-elementBackground border border-lightGray/50 '
    >
        <Text 
        className='my-2 text-4xl  '
        ta='center'>
            What are you hiring ?
        </Text>
        
        <Text 
        className='mb-7 text-writingGray'
         ta='center'>
        You can use one of our pre-made template to faster the process.
        </Text>
        <Flex justify='space-between' direction='row'>
            {
              buttons.map((button,index)=>(
                <Button className='bg-midGray hover:bg-lightGray'>{button.title}</Button>
              ))
            }

        </Flex>
        <Flex mt='sm' justify='space-between' direction='row'>
        {
              buttons.map((button,index)=>(
                <Button className='bg-midGray hover:bg-lightGray'>{button.title}</Button>
              ))
            }
        </Flex>
        <Link href="/hr/home/createJobManually">
        <Group justify='center'><Button className='my-8 bg-lightPurple hover:bg-hoverPurple'>Create Manually</Button></Group>
        </Link>
    </Card>
  )
}
