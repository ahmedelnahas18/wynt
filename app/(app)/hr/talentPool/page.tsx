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
  Title,
} from "@mantine/core";
import DropZone from "../../../components/dropZone";

export default function page() {
  return (
    <Flex justify="center" align="center" className="h-screen">
      <Card className="bg-elementBackground w-3/5 h-3/5 border border-lightGray/50">
        <Stack h="100%" align="center">
          <Flex gap="md" direction="column" justify="center" w="80%">
            <Text fw={400} style={{ fontSize: "28px" }} ta="center">
              Start uploading resumes to get AI insights
            </Text>
            <Text ta="center" className='text-writingGray text-xs w-11/12'>
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </Text>
          </Flex>
          <Flex className='w-3/5 h-full mb-5  '>
            <DropZone />
          </Flex>
        </Stack>
      </Card>
    </Flex>
  );
}
