import { Card, Text, Flex, Avatar, Group } from '@mantine/core';
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";

export default function ProfileSettings() {
  return (
    <Card  className='!bg-elementBackground !border !border-grayBorder/50 !p-1 ' >
        <Link href={'/hr/settings'}>      
        <Flex direction ='row' justify="space-between">
            <Group>
            <Avatar radius={4} src="https://r2.erweima.ai/imgcompressed/img/compressed_95f6dc695351dbb5cf511ee473897718.webp"/>
            <Flex direction='column'>
                <Text className='!text-sm'>Donnie Treutel</Text>
                <Text className='!text-xs !text-writingGray'>work@fluixity.com</Text>
            </Flex >
            </Group>
            <Group mr='5' align='center'><IoSettingsOutline size='18' /></Group>
        </Flex>
        </Link>
    </Card>

  )
}
