import {
    Group,
    Flex,
    Button,
    Stack,
    Text,
    Collapse,
    Box,
    TextInput,
    Select,
    Checkbox,Card
  } from "@mantine/core";
  import { FaCheckCircle } from "react-icons/fa";

export default function ApplicationRecived() {
  return (
    <Card className='border border-grayBorder/50 bg-elementBackground'>
      <Stack>
      <Flex justify='center'><FaCheckCircle color='green'  size='50' /></Flex>
      <Text ta='center'  className='text-2xl'>Application Received</Text>
    <Text ta='center' className='text-writingGray'>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum</Text>
    <Card className='border border-grayBorder/50 bg-midGray'>
      <Text>What’s next?</Text>
      <Text size='sm' c='lightGray'>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</Text>
    </Card>
      </Stack>
  </Card>
  )
}
