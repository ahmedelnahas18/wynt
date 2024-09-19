import { Card, Text, Button, Group, Flex } from "@mantine/core";
import { SlEnergy } from "react-icons/sl";
import FirstJobImage from "./image";

export default function FirstJobCard() {
  return (
    <Card 
    className='p-lg bg-transparent w-1/3 border border-lightGray/50 rounded-md '    > 
      <Flex direction="row" align="center" style={{ position: "relative" }}>
        <Flex w="100%">
          <FirstJobImage />
        </Flex>
        <Flex m='-140' w="100%">
          <FirstJobImage />
        </Flex>
        <Flex w="100%">
          <FirstJobImage />
        </Flex>
      </Flex>

      <Text m='sm' ta='center' fw={600} style={{ fontSize: '30px' }}>Create your first job</Text>
      <Text mb='sm' ta='center'  size="sm" c="lightGray">
        Start getting applications today
      </Text>
      <Button mx="sm" my="sm" bg="darkGreen">
        <SlEnergy size={18} /> Create a new Job
      </Button>
    </Card>
  );
}
