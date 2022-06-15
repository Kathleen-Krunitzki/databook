import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface INamesProps {
    id: number;
    image: string;
    name: string;
    isActive?: boolean;
    onSelect: (id: number) => void;
}

export default function CardName({ image, name, isActive = false, onSelect, id }: INamesProps) {
    function handleSelect() {
        onSelect(id)
    }
    return (
        <Box w='180px' mb='2'>
            <Box w='100%' bgColor={isActive ? 'secondary.800' : 'secondary.700'} borderLeftRadius='25' cursor='pointer' onClick={handleSelect}>
                <Flex align='center' justify='space-between' px='5' py='2'>
                    <Image src={image} w='50px' h='50px' />
                    <Text color='secondary.200'>{name}</Text>
                </Flex>
            </Box>
        </Box>
    )
}