import {
  Group,
  Flex,
  Button,
  Stack,
  Text,
  Collapse,
  Box,
  Card,
  TextInput,
  Select,
  Checkbox
} from "@mantine/core";
import { IoMailOutline } from "react-icons/io5";
import { PiMoneyBold } from "react-icons/pi";
import DropZone from "../../dropZone";

export default function ApplyNowCard() {
  return (
    <Card className='border border-grayBorder/50 bg-elementBackground'>
      <Text className='text-2xl'>Apply now</Text>
      <Stack>
      <TextInput
        label="Email"
        placeholder="Enter your email"
        leftSection={<IoMailOutline />}
        styles={{
          input: {
            backgroundColor: "#0F172A",
            color: "white",
            borderColor: "rgba(148, 163, 184, 0.3)",
          },
          label: {
            marginBottom: "10px",
          },
        }}
      />
      <Select
        label="Current Salary (Optional)"
        description="Sharing your current salary helps Jobyfy find better job matches and calibrate the market with accurate salaries. This information is confidential and not shared with employers.  "
        placeholder="Enter your current salary"
        leftSection={<PiMoneyBold />}
        data={['']}
        styles={{
          input: {
            backgroundColor: "#0F172A",
            color: "white",
            borderColor: "rgba(148, 163, 184, 0.3)",
          },
          description: {
            marginBottom: "10px",
          },
        }}
      />
      <Select
        label="Expected Salary (Optional)"
        description="Sharing your current salary helps Jobyfy find better job matches and calibrate the market with accurate salaries. This information is confidential and not shared with employers.  "
        placeholder="Enter your current salary"
        leftSection={<PiMoneyBold />}
        data={['React', 'Angular', 'Vue', 'Svelte']}
        styles={{
          input: {
            backgroundColor: "#0F172A",
            color: "white",
            borderColor: "rgba(148, 163, 184, 0.3)",
          },
          description: {
            marginBottom: "10px",
          },
        }}
      />
      <Text >Upload Resume</Text>
        <Flex className='h-1/4'><DropZone /></Flex>
        <Checkbox label="By clicking this you agree that Jobify can recommend you to other companies and share your resume with them."/>
        <Button className='bg-lightPurple hover:bg-hoverPurple'>Submit</Button>
      </Stack>
    </Card>
  );
}
