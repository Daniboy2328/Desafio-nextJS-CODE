import { HStack, Stack, Box, Image, Button, Input, Text, Link } from "@chakra-ui/react";
import '@fontsource/roboto-mono/700.css'

export default function Home() {
    return (
        <HStack as="main"
        >
            <Stack as="section"
                height={'100vh'}
                width={'50%'}
                justifyContent={'center'}>

                <HStack width={'100%'} justifyContent={'center'}>
                    <Image
                        boxSize='500px'
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
                height={'100vh'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Box
                    borderRadius={'30px'}
                    bg={'#1E1E1E'}
                    height={'440px'}
                    width={'400px'}>
                    <Stack
                        alignItems={'center'}
                        justifyContent={'space-evenly'}
                        height={'100%'}
                        width={'100%'}>

                        <Text
                            fontFamily={'roboto'}
                            fontSize={'48px'}
                            fontWeight={'500'}
                        >
                            LOGIN
                        </Text>

                        <Input
                            width={'364px'}
                            height={'54px'}
                            placeholder='Email'
                            _placeholder={{ color: 'white' }}
                            fontSize={'20px'}
                            fontFamily={'roboto'}
                            borderRadius={'20px'}
                            border={'none'}
                            shadow={'inset 0px 0px 4px #B300FF'}
                        >
                        </Input>

                        <Input
                            width={'364px'}
                            height={'54px'}
                            placeholder='Senha'
                            _placeholder={{ color: 'white' }}
                            fontSize={'20px'}
                            fontFamily={'roboto'}
                            borderRadius={'20px'}
                            border={'none'}
                            shadow={'inset 0px 0px 4px #B300FF'}
                        >
                        </Input>
                        <Link href={'/funcionarios'}>
                            <Button
                                width={'364px'}
                                height={'54px'}
                                borderRadius={'20px'}
                                bg={'#560B76'}
                                fontFamily={'roboto'}
                                fontSize={'40px'}
                                fontWeight='500'
                                shadow={'0px 5px 0px #411155'}
                                _hover={{ bg: '#560B76' }}
                                _active={{
                                    bg: '#411155',
                                    transform: 'scale(0.98)',
                                }}>
                                ENTRAR
                            </Button>
                        </Link>
                    </Stack>
                </Box>

            </Stack>
        </HStack >
    )
}
