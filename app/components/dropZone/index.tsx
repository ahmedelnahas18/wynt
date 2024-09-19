"use client";
import { useState } from "react";
import { Group, Text, rem, Flex, Stack, Progress, Alert } from "@mantine/core";
import { MdDriveFolderUpload } from "react-icons/md";
import { MdUpload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Dropzone, DropzoneProps, MIME_TYPES } from "@mantine/dropzone";
import '@mantine/dropzone/styles.css';


export default function DropZone(props: Partial<DropzoneProps>) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleUpload = async (file: File) => {
    console.log("the file is: ", file)

    setUploading(true);
    setProgress(5);
    setUploadSuccess(true);

    const formData = new FormData();
    formData.append('file', file);


  };

  return (
    <Dropzone
      w='100%'
      bg='#00000000'
      h='100%'
      style={{
        border: '1px dashed rgba(148, 163, 184, 0.5)'
      }}
      onDrop={(files) => {
        if (files.length > 0) {
          handleUpload(files[0]);
        }
      }}
      onReject={(files) => console.log("rejected files", files)}
      maxSize={5 * 1024 ** 2}
      accept={[MIME_TYPES.pdf, MIME_TYPES.doc, MIME_TYPES.docx]}
      {...props}
    >
      <Flex
        justify="center"
        align="center"
        h="100%"
        w="100%"
        py='5%'
        direction="column"
      >
        <Stack justify="center" align="center" gap='0'>
          { !uploadSuccess &&
          <>
          <Dropzone.Accept>
            <MdUpload size="50" />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IoMdClose size="50" />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <MdDriveFolderUpload size="50" />
          </Dropzone.Idle>

          <Text mt='sm' size="xl">
            Drag or select to upload
          </Text>
          <Text className='text-writingGray text-sm'>
            File should not exceed 5mb
          </Text></>
          }

          {uploading && (
            <>
              <Progress
              w='80%'
                value={progress}
                size="lg"
                mt="md"
                label={`${Math.round(progress)}%`}
                color="blue"
              />
              <Text mt="sm">Uploading...</Text>
            </>
          )}

          {uploadSuccess && (
            <Alert color="green" mt="md" title="Success">
              File uploaded successfully!
            </Alert>
          )}
        </Stack>
      </Flex>
    </Dropzone>
  );
}
