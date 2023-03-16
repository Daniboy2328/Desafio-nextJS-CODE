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

            <Box w={'1080px'}>
                <Text
                    fontFamily={'roboto'}
                    fontWeight={'300'}
                    fontSize={'20px'}>
                    Nome:
                </Text>
            </Box>

            <Input
                margin={'5'}
                height={'36px'}
                width={'1080px'}
                borderRadius={'20px'}
                bg={'#1E1E1E'}
                borderWidth={'0'}
                boxShadow={'inset 0px 0px 5px #B300FF'}
                _focus={{
                    boxShadow: "inset 0px 0px 5px #B300FF"
                }}
            />
            <Box w={'1080px'}>
                <Text
                    fontFamily={'roboto'}
                    fontWeight={'300'}
                    fontSize={'20px'}>
                    Email:
                </Text>
            </Box>

            <Input
                height={'36px'}
                width={'1080px'}
                borderRadius={'20px'}
                bg={'#1E1E1E'}
                borderWidth={'0'}
                boxShadow={'inset 0px 0px 5px #B300FF'}
                _focus={{
                    boxShadow: "inset 0px 0px 5px #B300FF"
                }}
            />
            <Box w={'1080px'}>
                <Text
                    fontFamily={'roboto'}
                    fontWeight={'300'}
                    fontSize={'20px'}>
                    Telefone:
                </Text>
            </Box>

            <Input
                height={'36px'}
                width={'1080px'}
                borderRadius={'20px'}
                bg={'#1E1E1E'}
                borderWidth={'0'}
                boxShadow={'inset 0px 0px 5px #B300FF'}
                _focus={{
                    boxShadow: "inset 0px 0px 5px #B300FF"
                }}
            />
            <Box w={'1080px'}>
                <Text
                    fontFamily={'roboto'}
                    fontWeight={'300'}
                    fontSize={'20px'}>
                    Assunto:
                </Text>
            </Box>

            <Textarea
                resize="vertical"
                height={'260px'}
                width={'1080px'}
                borderRadius={'20px'}
                bg={'#1E1E1E'}
                borderWidth={'0'}
                boxShadow={'inset 0px 0px 5px #B300FF'}
                _focus={{
                    boxShadow: "inset 0px 0px 5px #B300FF"
                }}
            />

        </Stack>


    )
}