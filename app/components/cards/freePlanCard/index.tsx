import { Card, Text, Progress, Button } from "@mantine/core";

export default function FreePlane() {
  jobNumber=5
  return (
    <Card className='!bg-elementBackground !border !border-grayBorder/50'>
      <Text className='!text-lg !mb-2' >Free Plane</Text>
      <Progress className='!bg-darkGray' color='#4F46E5' value={jobNumber} />
      <Text className='!my-3 !text-xs !text-writingGray' >{jobNumber} job and CV Analysis available on your plan</Text>
      <Button className='bg-mintGreen hover:bg-lightMintGreen' >Upgrade now</Button>
    </Card>
  );
}
