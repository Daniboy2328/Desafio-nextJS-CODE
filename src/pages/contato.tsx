import { Stack, Text, Box, Input, Textarea } from "@chakra-ui/react";
import { Header } from "../components/Head";
import '@fontsource/roboto/300.css'



export default function Home() {
    return (

        <Stack
            height={'841px'}
            width={'100vw'}
            alignItems={'center'}>
            <Text
                fontFamily={'roboto'}
                fontSize={'56px'}
                fontWeight={'300'}
                padding={'10'}>
                Contato
            </Text>

            <Box w={['540px', '654px', '756px', '864px', '1080px']}>
                <Text
                    fontFamily={'roboto'}
                    fontWeight={'300'}
                    fontSize={'20px'}>
                    Nome:
                </Text>


                <Input
                    height={'36px'}
                    width={'100%'}
                    borderRadius={'20px'}
                    bg={'#1E1E1E'}
                    borderWidth={'0'}
                    boxShadow={'inset 0px 0px 5px #B300FF'}
                    _focus={{
                        boxShadow: "inset 0px 0px 5px #B300FF"
                    }}
                />
            </Box>
            <Box w={['540px', '654px', '756px', '864px', '1080px']}>
                <Text
                    fontFamily={'roboto'}
                    fontWeight={'300'}
                    fontSize={'20px'}>
                    Email:
                </Text>


                <Input
                    height={'36px'}
                    width={'100%'}
                    borderRadius={'20px'}
                    bg={'#1E1E1E'}
                    borderWidth={'0'}
                    boxShadow={'inset 0px 0px 5px #B300FF'}
                    _focus={{
                        boxShadow: "inset 0px 0px 5px #B300FF"
                    }} />
            </Box>
            <Box w={['540px', '654px', '756px', '864px', '1080px']}>
                <Text
                    fontFamily={'roboto'}
                    fontWeight={'300'}
                    fontSize={'20px'}>
                    Telefone:
                </Text>


                <Input
                    height={'36px'}
                    width={'100%'}
                    borderRadius={'20px'}
                    bg={'#1E1E1E'}
                    borderWidth={'0'}
                    boxShadow={'inset 0px 0px 5px #B300FF'}
                    _focus={{
                        boxShadow: "inset 0px 0px 5px #B300FF"
                    }} />
            </Box>
            <Box w={['540px', '654px', '756px', '864px', '1080px']}>
                <Text
                    fontFamily={'roboto'}
                    fontWeight={'300'}
                    fontSize={'20px'}>
                    Assunto:
                </Text>
            </Box>

            <Box
                w={['540px', '654px', '756px', '864px', '1080px']}>
                <Textarea
                    resize="vertical"
                    height={'260px'}
                    width={'100%'}
                    borderRadius={'20px'}
                    bg={'#1E1E1E'}
                    borderWidth={'0'}
                    boxShadow={'inset 0px 0px 5px #B300FF'}
                    _focus={{
                        boxShadow: "inset 0px 0px 5px #B300FF"
                    }} />
            </Box>

        </Stack>


    )
}