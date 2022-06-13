import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface INamesProps {
    image: string;
    name: string;
}

export default function CardName({ image, name }: INamesProps) {
    return (
        <Box w='180px' mb='2'>
            <Box w='100%' bgColor='secondary.700' borderLeftRadius='25'>
                <Flex align='center' justify='space-between' px='5' py='2'>
                    <Image src={image} w='50px' />
                    <Text color='secondary.200'>{name}</Text>
                </Flex>
            </Box>
        </Box>
    )
}