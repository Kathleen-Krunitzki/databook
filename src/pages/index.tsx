import { Box, Flex, Image, Text } from '@chakra-ui/react'
import Head from 'next/head'
import CardName from '../components/CardName'

const names = [
  { image: '/images/naruto-face.png', name: 'Naruto' },
  { image: '/images/sasuke-face.png', name: 'Sasuke' },
  { image: '/images/kakashi-face.png', name: 'Kakashi' },
  { image: '/images/hinata-face.png', name: 'Hinata' },
  { image: '/images/shikamaru-face.png', name: 'Shikamaru' },
  { image: '/images/rocklee-face.png', name: 'Rock Lee' },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Teste</title>
      </Head>

      <Flex h='100vh' bgImage="url('/images/paisagem.jpg')" bgPos='center' bgRepeat='no-repeat' bgSize='100% 100%' align='center' justify='center' flexDirection='column'>
        <Image src='/images/logo.png' w='40' />
        <Flex>
          <Flex mt='10' w='300px' h='60vh' bgColor='secondary.200'>
            <Box>
              <Box bgColor='primary.100' w='300px' h='50%' p='5'>
                <Text fontWeight='700' color='secondary.200' mb='6px'>
                  Naruto
                </Text>
                <Text fontSize='xs' py='0.5' px='1' bgColor='secondary.400' borderRadius='6' maxW='80px'>Vila da Folha</Text>
                <Flex w='100%' justify='center' mt='5'>
                  <Image src='/images/naruto.png' w='95px' />
                </Flex>
              </Box>
              <Box mt='135px' px='5'>
                <Flex>
                  <Box w='50%'>
                    <Text fontWeight='700' mb='5px'>Status</Text>
                    <Text fontSize='xs' mb='5px'>HP: 35</Text>
                    <Text fontSize='xs' mb='5px'>Ataque: 55</Text>
                    <Text fontSize='xs' mb='5px'>Defesa: 40</Text>
                    <Text fontSize='xs' mb='5px'>Velocidade: 90</Text>
                  </Box>
                  <Box w='50%'>
                    <Text fontWeight='700' mb='5px'>Habilidades</Text>
                    <Text fontSize='xs' mb='5px'>Rasengan</Text>
                    <Text fontSize='xs' mb='5px'>Clones das Sombras</Text>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Flex>
          <Flex direction='column' mt='10' ml='4'>
            {names.map((item) => (
              <CardName image={item.image} name={item.name} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}