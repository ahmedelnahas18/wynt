"use client";
import {
  MantineProvider,
  Menu,
  MenuItem,
  Text,
  Group,
  Button,
  Flex,
  Pill,
  Divider,
  Stack,
  Progress,
  Input,
  Textarea,
  Select,
  TagsInput,
  FileInput,
  Modal
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { MdOutlinePersonSearch, MdOutlineWatchLater } from "react-icons/md";
import { FaCalendarAlt, FaAngleDown } from "react-icons/fa";
import { FaCircleCheck, FaLocationDot, FaRankingStar } from "react-icons/fa6";
import { CiCircleCheck, CiCircleAlert } from "react-icons/ci";
import { PiArticleBold, PiMoneyBold } from "react-icons/pi";
import { HiSwatch } from "react-icons/hi2";
import { GrDocumentUpload } from "react-icons/gr";
import { CgNotes } from "react-icons/cg";
import Link from "next/link";
import HiringJob from "../../../../components/cards/hiringJobCard";
import { useDisclosure } from '@mantine/hooks';
import JobLinkCard from "../../../../components/cards/jobLinkCard";

export default function Page() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
      <Stack p="sm" gap="" c="white">
        <JobLinkCard opened={opened} close={close} />
      <Flex>
        <Flex w="60%" direction="column">
          <Text style={{ fontSize: "25px" }}>
            Create your new project and publish it today
          </Text>
          <Text size="xs" c="lightGray">
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum
          </Text>
        </Flex>
        <Flex justify="center" direction="column" w="40%">
          <Progress
            mx="xl"
            size="lg"
            radius="xl"
            value={15}
            color="lightGreen"
            bg="darkGreen"
          />
        </Flex>
      </Flex>

      <Divider color="midGray" />
      
      <Stack gap='8'>
        <Flex direction="row" justify="space-between">

          <Flex w="49%" direction="column">
            <Text>Position name</Text>
            <Text  size="xs" c="lightGray">
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum
            </Text>
            <Input
            mt='5'
              placeholder="Enter position name"
              leftSection={<MdOutlinePersonSearch size={16} />}
              styles={{
                input: {
                  backgroundColor: "#0F172A",
                  color: "white",
                  borderColor: "rgba(148, 163, 184, 0.3)",
                },
              }}
            />
          </Flex>
          <Flex w="49%" direction="column">
            <Text>Deadline to apply</Text>
            <Text size="xs" c="lightGray">
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum
            </Text>
            <DateInput
            mt='5'
              leftSection={<FaCalendarAlt size={16} />}
              styles={{
                input: {
                  backgroundColor: "#0F172A",
                  color: "white",
                  borderColor: "rgba(148, 163, 184, 0.3)",
                },
              }}
              placeholder="Enter deadline to apply"
            />
          </Flex>
        </Flex>
        <Flex direction="row" justify="space-between">
          <Flex direction="column" w="32%">
            <Text>Location</Text>
            <Select
            mt='5'
              placeholder="Enter job location"
              leftSection={<FaLocationDot size={14} />}
              data={["Onsite", "Remote"]}
              styles={{
                input: {
                  backgroundColor: "#0F172A",
                  color: "white",
                  borderColor: "rgba(148, 163, 184, 0.3)",
                },
              }}
            />
          </Flex>
          <Flex direction="column" w="32%">
            <Text>Contract type</Text>
            <Select
            mt='5'
              placeholder="Enter contract type"
              leftSection={<PiArticleBold size={16} />}
              data={["Full-time", "Part-time"]}
              styles={{
                input: {
                  backgroundColor: "#0F172A",
                  color: "white",
                  borderColor: "rgba(148, 163, 184, 0.3)",
                },
              }}
            />
          </Flex>

          <Flex direction="column" w="32%">
            <Text>Contract period</Text>
            <Select
            mt='5'
              placeholder="Your email"
              leftSection={<MdOutlineWatchLater size={16} />}
              data={["1 Year", "2 Years", "5 Years", "Not specified"]}
              styles={{
                input: {
                  backgroundColor: "#0F172A",
                  color: "white",
                  borderColor: "rgba(148, 163, 184, 0.3)",
                },
              }}
            />
          </Flex>
        </Flex>
        <Flex direction="row" justify="space-between">
          <Flex w="49%" direction="column">
            <Text>Required skills</Text>
            <TagsInput
            mt='5'
              placeholder="Enter required skills"
              leftSection={<FaRankingStar size={16} />}
              styles={{
                input: {
                  backgroundColor: "#0F172A",
                  color: "white",
                  borderColor: "rgba(148, 163, 184, 0.3)",
                },
                pill: {
                  backgroundColor: "#94A3B8",
                  color: "white",
                  borderColor: "rgba(148, 163, 184, 0.3)",
                  borderRadius: "4px",
                },
              }}
            />
          </Flex>
          <Flex w="49%" direction="column">
            <Text>Required tools</Text>
            <TagsInput
            mt='5'
              placeholder="Enter required tools"
              leftSection={<HiSwatch size={16} />}
              styles={{
                input: {
                  backgroundColor: "#0F172A",
                  color: "white",
                  borderColor: "rgba(148, 163, 184, 0.3)",
                },
                pill: {
                  backgroundColor: "#94A3B8",
                  color: "white",
                  borderColor: "rgba(148, 163, 184, 0.3)",
                  borderRadius: "4px",
                },
              }}
            />
          </Flex>
        </Flex>
        <Flex direction="row" justify="space-between">
          <Flex w="49%" direction="column" >
            <Text>Salary</Text>
            <Text size="xs" c="lightGray">
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum
            </Text>
            <Select
            mt='5'
            data={["5,000-10,000","10,000-20,000","20,000-30,000",]}
              placeholder="Enter job salary"
              leftSection={<PiMoneyBold size={16} />}
              rightSection={<Group c='lightGray' ml='-160'>
                <Text style={{fontSize : '12px'}}>Currency: SAR</Text> 
                <Text style={{fontSize : '12px'}} c='lightPurple' size='sm'>Change</Text>
                <FaAngleDown />

              </Group>}

              styles={{
                input: {
                  backgroundColor: "#0F172A",
                  color: "white",
                  borderColor: "rgba(148, 163, 184, 0.3)",
                },
              }}
            />
          </Flex>
          <Flex w="49%" direction="column" >
            <Text>Upload resume</Text>
            <Text size="xs" c="lightGray">
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum
            </Text>
            <FileInput
            mt='5'
              placeholder="Upload resume"
              leftSection={<GrDocumentUpload size={16} />}
              styles={{
                input: {
                  backgroundColor: "#0F172A",
                  color: "white",
                  borderColor: "rgba(148, 163, 184, 0.3)",
                },
              }}
            />
          </Flex>
        </Flex>
        <Flex direction="row">
          <Flex direction="column" style={{ flexGrow: 1 }}>
            <Text>Job description</Text>
            
            <Textarea
            mt='5'
              placeholder="Enter job description"
              leftSection={
                <div
                  style={{ position: "absolute", top: "10px", left: "10px" }}
                >
                  <CgNotes size={16} />
                </div>
              }
              rightSection={
                <div
                  style={{ position: "absolute", top: "10px", left: "10px" }}
                >
                  <Button
                    ml="-80"
                    bg="transparent"
                    styles={{
                      root: {
                        border: `1px solid rgb(79, 70, 229, 0.6) `,
                      },
                    }}
                  >
                    Use AI
                  </Button>
                </div>
              }
              styles={{
                input: {
                  minHeight: "150px",
                  backgroundColor: "#0F172A",
                  color: "white",
                  borderColor: "rgba(148, 163, 184, 0.3)",
                },
              }}
            />
          </Flex>
        </Flex>
        <Flex direction="row">
          <Text>Let AI adding talent’s from Talent Pool</Text>
          <Group m='3'><CiCircleAlert /></Group>
        </Flex>
        <Flex direction="row">
          <Button className='bg-lightPurple hover:bg-hoverPurple'>
            <FaCircleCheck />
            <Text ml="5">Allow</Text>
          </Button>
          <Button
          className='mx-2 bg-midGray/70 hover:bg-midGray'
          
          >
            <CiCircleCheck />
            <Text ml="5">No</Text>
          </Button>
        </Flex>
      </Stack>
      <Divider color="midGray" />
      <Flex direction="row" justify='space-between'>
        <Button w="49%" className='bg-midGray/70 hover:bg-midGray '>
          Save for later
        </Button>
        <Button onClick={open} w="49%" className='bg-darkGreen/90 hover:bg-darkGreen'>
          Publish Job
        </Button>
      </Flex>
      
    </Stack>
  );
}
