import { HStack, Stack, Heading, Text, Box, Image, SimpleGrid, Button } from "@chakra-ui/react";
import '@fontsource/roboto-mono/700.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/300.css'


export default function Home() {
  return (
    <HStack
      as="main"
    >

      <Stack as="section"
        height={'841px'}
        width={'50%'}
        px={12}>

        <Heading
          fontFamily={'roboto'}
          fontWeight={'300'}
          fontSize={'50px'}
          marginTop={'12'}>

          Sempre dá tempo pra mais uma!
        </Heading>
        <Box width={'600px'}>
          <Text
            fontSize={'32px'}
            fontWeight={'300'}
            marginTop={'10'}>
            A melhor seleção de games para todas
            as plataformas com promoções diárias.
          </Text>
        </Box>
        <HStack width={'100%'} justifyContent={'center'}>
          <Image
            boxSize='500px'
            objectPosition='center'
            objectFit='cover'
            src='Gaming-amico.png'
            alt='Foto Gamer'
            alignItems={'center'}
          />
        </HStack>

      </Stack>
      <Stack
        as="section"
        width={'50%'}
        height={'841px'}
      >
        <Heading
          fontFamily={'roboto'}
          fontWeight={'300'}
          fontSize={'50px'}
          marginTop={'12'}
          marginBottom={'12'}>
          Descontos de Hoje!
        </Heading>

        <SimpleGrid columns={3} spacingY={'10'}>



          <Box bg='#1E1E1E' borderRadius={'20px'} width='160px' height='260px'>
            <Stack alignItems='center'>
              <Image
                src="/forza_horizon.jpg"
                width={'120px'}
                height={'150px'}
                margin={'3'}
                borderRadius={'10px'}
                shadow='0px 0px 10px #B300FF'
                objectFit="cover"
                objectPosition="center"
              />

              <Text
                fontFamily='roboto mono'
                fontWeight='700'
                fontSize='24px'
                lineHeight='3'>
                R$ 74,90
              </Text>

              <Button
                bg='#560B76'
                shadow='2px 3px 10px rgba(179, 0, 255, 0.26)'
                w='120px'
                h='32px'
                margin={'8px'}
                fontFamily='roboto'
                fontSize='16'
                fontWeight='300'>
                Ver Produto
              </Button>
            </Stack>
          </Box>



          <Box bg='#1E1E1E' borderRadius={'20px'} width='160px' height='260px'>
            <Stack alignItems='center'>
              <Image
                src="/cyberpunk_2077.png"
                width='120px'
                height='150px'
                margin='3'
                borderRadius='10px'
                shadow='0px 0px 10px #B300FF'
                objectFit="cover"
                objectPosition="center"
              />

              <Text
                fontFamily='roboto mono'
                fontWeight='700'
                fontSize='24px'
                lineHeight='3'>
                R$ 74,90
              </Text>

              <Button
                bg='#560B76'
                shadow='2px 3px 10px rgba(179, 0, 255, 0.26)'
                w='120px'
                h='32px'
                margin={'8px'}
                fontFamily='roboto'
                fontSize='16'
                fontWeight='300'>
                Ver Produto
              </Button>
            </Stack>

          </Box>



          <Box bg='#1E1E1E' borderRadius={'20px'} width='160px' height='260px'>
            <Stack alignItems='center'>
              <Image
                src="/God_of_War_Ragnarök_capa.jpg"
                width='120px'
                height='150px'
                margin='3'
                borderRadius='10px'
                shadow='0px 0px 10px #B300FF'

              />

              <Text
                fontFamily='roboto mono'
                fontWeight='700'
                fontSize='24px'
                lineHeight='3'>
                R$ 74,90
              </Text>

              <Button
                bg='#560B76'
                shadow='2px 3px 10px rgba(179, 0, 255, 0.26)'
                w='120px'
                h='32px'
                margin={'8px'}
                fontFamily='roboto'
                fontSize='16'
                fontWeight='300'>
                Ver Produto
              </Button>
            </Stack>

          </Box>



          <Box bg='#1E1E1E' borderRadius={'20px'} width='160px' height='260px'>
            <Stack alignItems='center'>
              <Image
                src="/spider_man.jpg"
                width='120px'
                height='150px'
                margin='3'
                borderRadius='10px'
                shadow='0px 0px 10px #B300FF'
                objectFit="cover"
                objectPosition="center"
              />

              <Text
                fontFamily='roboto mono'
                fontWeight='700'
                fontSize='24px'
                lineHeight='3'>
                R$ 74,90
              </Text>

              <Button
                bg='#560B76'
                shadow='2px 3px 10px rgba(179, 0, 255, 0.26)'
                w='120px'
                h='32px'
                margin={'8px'}
                fontFamily='roboto'
                fontSize='16'
                fontWeight='300'>
                Ver Produto
              </Button>
            </Stack>
          </Box>



          <Box bg='#1E1E1E' borderRadius={'20px'} width='160px' height='260px'>
            <Stack alignItems='center'>
              <Image
                src="/the_witcher.jpeg"
                width='120px'
                height='150px'
                margin='3'
                borderRadius='10px'
                shadow='0px 0px 10px #B300FF'
                objectFit="cover"
                objectPosition="center"
              />

              <Text
                fontFamily='roboto mono'
                fontWeight='700'
                fontSize='24px'
                lineHeight='3'>
                R$ 74,90
              </Text>

              <Button
                bg='#560B76'
                shadow='2px 3px 10px rgba(179, 0, 255, 0.26)'
                w='120px'
                h='32px'
                margin={'8px'}
                fontFamily='roboto'
                fontSize='16'
                fontWeight='300'>
                Ver Produto
              </Button>
            </Stack>
          </Box>



          <Box bg='#1E1E1E' borderRadius={'20px'} width='160px' height='260px'>
            <Stack alignItems='center'>
              <Image
                src="/hollow_knigt.jpg"
                width='120px'
                height='150px'
                margin='3'
                borderRadius='10px'
                shadow='0px 0px 10px #B300FF'
                objectFit="cover"
                objectPosition="center"
              />

              <Text
                fontFamily='roboto mono'
                fontWeight='700'
                fontSize='24px'
                lineHeight='3'>
                R$ 74,90
              </Text>

              <Button
                bg='#560B76'
                shadow='2px 3px 10px rgba(179, 0, 255, 0.26)'
                w='120px'
                h='32px'
                margin={'8px'}
                fontFamily='roboto'
                fontSize='16'
                fontWeight='300'>
                Ver Produto
              </Button>
            </Stack>
          </Box>



        </SimpleGrid>

      </Stack>
    </HStack >
  )
}
