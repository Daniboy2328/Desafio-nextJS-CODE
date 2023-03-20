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
      flexDirection={['column', 'column', 'column', 'row', 'row']}
    >

      <Stack as="section"
        height={'841px'}
        width={['100%', '100%', '100%', '50%', '50%']}
        px={12}>

        <Heading
          fontFamily={'roboto'}
          fontWeight={'300'}
          fontSize={['20px', '24px', '30px', '38px', '50px']}
          marginTop={'12'}>

          Sempre dá tempo pra mais uma!
        </Heading>
        <Box width={['300px', '500px', '600px', '500px', '600px']}>
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
            boxSize={['300px', '300px', '400px', '500px', '500px']}
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
        width={['100%', '100%', '100%', '50%', '50%']}
        height={['550px', '700px', '800px', '841px', '841px']}
        px={12}
      >
        <HStack
        justifyContent={'center'}>
          <Text
            fontFamily={'roboto'}
            fontWeight={'300'}
            fontSize={['20px', '24px', '30px', '38px', '50px']}
            marginTop={'12'}
            marginBottom={'12'}>
            Descontos de Hoje:
          </Text>
        </HStack>

        <SimpleGrid
          columns={3}
          spacingY={'10'}
          justifyItems={'center'}>



          <Box bg='#1E1E1E' borderRadius={'20px'}
            width={['80px', '96px', '120px', '128px', '160px']}
            height={['130px', '156px', '195px', '208px', '260px']}>
            <Stack alignItems='center'>
              <Image
                src="/forza_horizon.jpg"
                width={['60px', '72px', '90px', '96px', '120px']}
                height={['75px', '90px', '112px', '120px', '150px']}
                margin={'3'}
                borderRadius={'10px'}
                shadow='0px 0px 10px #B300FF'
                objectFit="cover"
                objectPosition="center"
              />

              <Text
                fontFamily='roboto mono'
                fontWeight='700'
                fontSize={['12px', '13px', '15px', '18px', '24px']}
                lineHeight='3'>
                R$ 74,90
              </Text>

              <Button
                bg='#560B76'
                shadow='2px 3px 10px rgba(179, 0, 255, 0.26)'
                w={['60px', '72px', '90px', '96px', '120px']}
                h={['16px', '18px', '22px', '25px', '32px']}
                margin={'8px'}
                fontFamily='roboto'
                fontSize='16'
                fontWeight='300'>
                Ver Produto
              </Button>
            </Stack>
          </Box>



          <Box bg='#1E1E1E' borderRadius={'20px'}
            width={['80px', '96px', '120px', '128px', '160px']}
            height={['130px', '156px', '195px', '208px', '260px']}>
            <Stack alignItems='center'>
              <Image
                src="/cyberpunk_2077.png"
                width={['60px', '72px', '90px', '96px', '120px']}
                height={['75px', '90px', '112px', '120px', '150px']}
                margin='3'
                borderRadius='10px'
                shadow='0px 0px 10px #B300FF'
                objectFit="cover"
                objectPosition="center"
              />

              <Text
                fontFamily='roboto mono'
                fontWeight='700'
                fontSize={['12px', '13px', '15px', '18px', '24px']}
                lineHeight='3'>
                R$ 74,90
              </Text>

              <Button
                bg='#560B76'
                shadow='2px 3px 10px rgba(179, 0, 255, 0.26)'
                w={['60px', '72px', '90px', '96px', '120px']}
                h='32px'
                margin={'8px'}
                fontFamily='roboto'
                fontSize='16'
                fontWeight='300'>
                Ver Produto
              </Button>
            </Stack>

          </Box>



          <Box bg='#1E1E1E' borderRadius={'20px'}
            width={['80px', '96px', '120px', '128px', '160px']}
            height={['130px', '156px', '195px', '208px', '260px']}>
            <Stack alignItems='center'>
              <Image
                src="/God_of_War_Ragnarök_capa.jpg"
                width={['60px', '72px', '90px', '96px', '120px']}
                height={['75px', '90px', '112px', '120px', '150px']}
                margin='3'
                borderRadius='10px'
                shadow='0px 0px 10px #B300FF'

              />

              <Text
                fontFamily='roboto mono'
                fontWeight='700'
                fontSize={['12px', '13px', '15px', '18px', '24px']}
                lineHeight='3'>
                R$ 74,90
              </Text>

              <Button
                bg='#560B76'
                shadow='2px 3px 10px rgba(179, 0, 255, 0.26)'
                w={['60px', '72px', '90px', '96px', '120px']}
                h='32px'
                margin={'8px'}
                fontFamily='roboto'
                fontSize='16'
                fontWeight='300'>
                Ver Produto
              </Button>
            </Stack>

          </Box>



          <Box bg='#1E1E1E' borderRadius={'20px'}
            width={['80px', '96px', '120px', '128px', '160px']}
            height={['130px', '156px', '195px', '208px', '260px']}>
            <Stack alignItems='center'>
              <Image
                src="/spider_man.jpg"
                width={['60px', '72px', '90px', '96px', '120px']}
                height={['75px', '90px', '112px', '120px', '150px']}
                margin='3'
                borderRadius='10px'
                shadow='0px 0px 10px #B300FF'
                objectFit="cover"
                objectPosition="center"
              />

              <Text
                fontFamily='roboto mono'
                fontWeight='700'
                fontSize={['12px', '13px', '15px', '18px', '24px']}
                lineHeight='3'>
                R$ 74,90
              </Text>

              <Button
                bg='#560B76'
                shadow='2px 3px 10px rgba(179, 0, 255, 0.26)'
                w={['60px', '72px', '90px', '96px', '120px']}
                h='32px'
                margin={'8px'}
                fontFamily='roboto'
                fontSize='16'
                fontWeight='300'>
                Ver Produto
              </Button>
            </Stack>
          </Box>



          <Box bg='#1E1E1E' borderRadius={'20px'}
            width={['80px', '96px', '120px', '128px', '160px']}
            height={['130px', '156px', '195px', '208px', '260px']}>
            <Stack alignItems='center'>
              <Image
                src="/the_witcher.jpeg"
                width={['60px', '72px', '90px', '96px', '120px']}
                height={['75px', '90px', '112px', '120px', '150px']}
                margin='3'
                borderRadius='10px'
                shadow='0px 0px 10px #B300FF'
                objectFit="cover"
                objectPosition="center"
              />

              <Text
                fontFamily='roboto mono'
                fontWeight='700'
                fontSize={['12px', '13px', '15px', '18px', '24px']}
                lineHeight='3'>
                R$ 74,90
              </Text>

              <Button
                bg='#560B76'
                shadow='2px 3px 10px rgba(179, 0, 255, 0.26)'
                w={['60px', '72px', '90px', '96px', '120px']}
                h='32px'
                margin={'8px'}
                fontFamily='roboto'
                fontSize='16'
                fontWeight='300'>
                Ver Produto
              </Button>
            </Stack>
          </Box>



          <Box bg='#1E1E1E' borderRadius={'20px'}
            width={['80px', '96px', '120px', '128px', '160px']}
            height={['130px', '156px', '195px', '208px', '260px']}>
            <Stack alignItems='center'>
              <Image
                src="/hollow_knigt.jpg"
                width={['60px', '72px', '90px', '96px', '120px']}
                height={['75px', '90px', '112px', '120px', '150px']}
                margin='3'
                borderRadius='10px'
                shadow='0px 0px 10px #B300FF'
                objectFit="cover"
                objectPosition="center"
              />

              <Text
                fontFamily='roboto mono'
                fontWeight='700'
                fontSize={['12px', '13px', '15px', '18px', '24px']}
                lineHeight='3'>
                R$ 74,90
              </Text>

              <Button
                bg='#560B76'
                shadow='2px 3px 10px rgba(179, 0, 255, 0.26)'
                w={['60px', '72px', '90px', '96px', '120px']}
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
