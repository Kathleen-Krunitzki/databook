import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { Console } from 'console'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import CardInfo from '../components/CardInfo'
import CardName from '../components/CardName'
import { charactersInfo } from '../utils'

interface ICharactersProps {
  id: number,
  name: string,
  image: string,
  isActive: boolean;
}

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
  imageInfo: string,
}

export default function Home() {
  const [characters, setCharacters] = useState<ICharactersProps[]>(charactersInfo)
  const [character, setCharacter] = useState<IInfoProps>(charactersInfo[0])

  function select(id: number) {
    const select = characters.map((item) =>
      item.id === id ? { ...item, isActive: true } : { ...item, isActive: false }
    )
    setCharacters(select)
    setCharacter(charactersInfo[id - 1])
  }

  return (
    <>
      <Head>
        <title>Databook</title>
      </Head>

      <Flex h='100vh' bgImage="url('/images/paisagem.jpg')" bgPos='center' bgRepeat='no-repeat' bgSize='100% 100%' align='center' justify='center' flexDirection='column'>
        <Image src='/images/logo.png' w='40' />
        <Flex>
          <CardInfo name={character.name} village={character.village} hp={character.hp} attack={character.attack} defense={character.defense} velocity={character.velocity} skillOne={character.skillOne} skillTwo={character.skillTwo} image={character.imageInfo} color={character.color} />
          <Flex direction='column' mt='10' ml='4'>
            {characters.map((item) => (
              <CardName key={item.id} id={item.id} image={item.image} name={item.name} isActive={item.isActive} onSelect={select} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}