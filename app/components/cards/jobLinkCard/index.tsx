import {
  MantineProvider,
  Group,
  Flex,
  Button,
  Stack,
  Text,
  Collapse,
  Box,
  Grid,
  Card,
  Modal,
  CopyButton,
} from "@mantine/core";
import HiringJob from "../hiringJobCard";
import { CiLink } from "react-icons/ci";

export default function JobLinkCard({ opened, close }) {
  return (
    <Modal
      opened={opened}
      onClose={close}
      className="bg-elementBackground border border-grayBorder/50"
      withCloseButton={false}
      centered
      size="xl"
      padding={0}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <Card 
      className="w-full bg-[url('https://us.123rf.com/450wm/alonastep/alonastep1610/alonastep161000251/65039034-silver-confetti-celebration-isolated-on-black-background-falling-abstract-decoration-for-party.jpg')] bg-cover bg-center border border-grayBorder/50"
      >
        <Flex  direction="column" justify="center" align="center">
            <Group className='w-1/2 m-10'>
            <HiringJob />
            </Group>
          <Stack w="60%" align="center" gap="2">
            <Text className='text-2xl'>
              Hiring a supervisor is live!
            </Text>
            <Text ta="center" className='text-sm text-writingGray '>
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum
            </Text>            

            <CopyButton  value="#">
              {({ copied, copy }) => (
                <Button className='mt-2' color={copied ? "blue" : "teal"} onClick={copy}>
                  <Group gap='8'>
                <CiLink size="18" />
                  {copied ? "Copied url" : "Copy url"}
              </Group>
                  
                </Button>
              )}
            </CopyButton>

            <Text className='text-xs mt-1 text-writingGray'>
              This link will help candidates to be able to apply to the job.
            </Text>
          </Stack>
        </Flex>
      </Card>
    </Modal>
  );
}
