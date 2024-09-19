import { Card, Text, Button, Group, Flex } from '@mantine/core';

export default function FirstJobImage() {
  return (
    <Card 
    className='border border-lightGray/50 w-full bg-elementBackground'>
                <Flex  direction='column' >
                    <Card className='my-1 bg-midGray p-0 h-6 '></Card>
                    <Card className='my-1 bg-midGray p-0 h-5 '></Card>
                    <Card className='my-1 bg-midGray p-0 h-8 '></Card>
                    <Card className='my-1 bg-midGray p-0 h-3 '></Card>
                    <Card className='my-1 bg-midGray p-0 h-7 '></Card>

                </Flex>
            </Card>
  )
}
