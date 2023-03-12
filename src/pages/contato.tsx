import { Stack, Text, Box, Input} from "@chakra-ui/react";
import { Header } from "../components/Head";
export default function Home() {
    return (



        <Stack
            height={'100vh'}
            width={'100vw'}
            alignItems={'center'}>
            <Text
                fontFamily={'roboto'}
                fontSize={'56px'}
                fontWeight={'500'}
                padding={'10'}>
                Contato
            </Text>

            <Box w={'1080px'}>
                <Text
                    fontFamily={'roboto'}
                    fontWeight={'300'}
                    fontSize={'24px'}>
                    Nome:
                </Text>
            </Box>

            <Input
                margin={'5'}
                height={'36px'}
                width={'1080px'}
                borderRadius={'20px'}
                bg={'#1E1E1E'}
                border={'none'}
                shadow={'inset 0px 0px 5px #B300FF'}
            />
            <Box w={'1080px'}>
                <Text
                    fontFamily={'roboto'}
                    fontWeight={'300'}
                    fontSize={'24px'}>
                    Email:
                </Text>
            </Box>

            <Input
                height={'36px'}
                width={'1080px'}
                borderRadius={'20px'}
                bg={'#1E1E1E'}
                border={'none'}
                shadow={'inset 0px 0px 5px #B300FF'}
            />
            <Box w={'1080px'}>
                <Text
                    fontFamily={'roboto'}
                    fontWeight={'300'}
                    fontSize={'24px'}>
                    Telefone:
                </Text>
            </Box>

            <Input
                height={'36px'}
                width={'1080px'}
                borderRadius={'20px'}
                bg={'#1E1E1E'}
                border={'none'}
                shadow={'inset 0px 0px 5px #B300FF'}
            />
            <Box w={'1080px'}>
                <Text
                    fontFamily={'roboto'}
                    fontWeight={'300'}
                    fontSize={'24px'}>
                    Assunto:
                </Text>
            </Box>

            <Input
                height={'260px'}
                width={'1080px'}
                borderRadius={'20px'}
                bg={'#1E1E1E'}
                border={'none'}
                shadow={'inset 0px 0px 5px #B300FF'}
            />

        </Stack>

    )
}