import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface IInfoProps {
    name: string,
    village: string,
    hp: number,
    attack: number,
    defense: number,
    velocity: number,
    skillOne: string,
    skillTwo: string,
    color: string,
    image: string,
}

export default function CardInfo({ name, village, hp, attack, defense, velocity, skillOne, skillTwo, color, image }: IInfoProps) {
    return (
        <Flex mt='10' w='300px' h='60vh' bgColor='secondary.200'>
            <Box>
                <Box bgColor={color} w='300px' h='50%' p='5'>
                    <Text fontWeight='700' color='secondary.200' mb='6px'>
                        {name}
                    </Text>
                    <Text fontSize='xs' py='0.5' px='1' bgColor='secondary.400' borderRadius='6' maxW='80px'>{village}</Text>
                    <Flex w='100%' justify='center' mt='5'>
                        <Image src={image} w='120px' h='300px' />
                    </Flex>
                </Box>
                <Box mt='135px' px='5'>
                    <Flex>
                        <Box w='50%'>
                            <Text fontWeight='700' mb='5px'>Status</Text>
                            <Text fontSize='xs' mb='5px'>HP: {hp}</Text>
                            <Text fontSize='xs' mb='5px'>Ataque: {attack}</Text>
                            <Text fontSize='xs' mb='5px'>Defesa: {defense}</Text>
                            <Text fontSize='xs' mb='5px'>Velocidade: {velocity}</Text>
                        </Box>
                        <Box w='50%'>
                            <Text fontWeight='700' mb='5px'>Habilidades</Text>
                            <Text fontSize='xs' mb='5px'>{skillOne}</Text>
                            <Text fontSize='xs' mb='5px'>{skillTwo}</Text>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    )
}