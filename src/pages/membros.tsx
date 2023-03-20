import { HStack, Stack, Heading, Text, Box, SimpleGrid } from "@chakra-ui/react";
import { Scrollbars } from 'react-custom-scrollbars';
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import '@fontsource/roboto-mono/400.css'
import { type } from "os";

type Membro = {
    id: number;
    name: string;
    email: string;
    aniversario: string;
    salario: string;
    cargo: string;
};

export default function Home() {
    const [membros, setMembros] = useState<Membro[]>([]);
    useEffect(() => {
        // obter membros
        axios.get<Membro[]>('http://localhost:3000/funcionarios')
            .then((resposta: AxiosResponse<Membro[]>) => {
                setMembros(resposta.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])

    return (
        <HStack
            as="main"
        >
            <Stack
                alignItems={'center'}
                as="section"
                width={'100%'}
                height={'841px'}
            >
                <Heading
                    fontFamily={'roboto'}
                    fontWeight={'500'}
                    fontSize={'48px'}
                    marginTop={'12'}
                    marginBottom={'12'}>
                    Membros
                </Heading>


                <Box
                    width='1300px'
                    height={'500px'}
                    overflow={'auto'}
                    sx={{ "&::-webkit-scrollbar": { width: "10px"}, 
                    "&::-webkit-scrollbar-track": { bg: "#1E1E1E", borderRadius: "5px" },
                    "&::-webkit-scrollbar-thumb": { bg: "#560B76", borderRadius: "5px" }}}
                >

                    <Stack 
                    alignItems={'center'}>
                        <SimpleGrid
                            w={'1280px'}
                            columns={3}
                            spacing={'20'}>
                            {membros.map((membro) =>
                                <Box
                                    bg='#1E1E1E'
                                    borderRadius={'20px'}
                                    shadow={'inset 0px 0px 5px #B300FF'}>
                                    <Stack padding={'3'}>
                                        <Text
                                            paddingY={'2'}
                                            fontFamily={'roboto'}
                                            fontWeight={'500'}
                                            fontSize={'16px'}>
                                            {membro.name}

                                        </Text>
                                        <Text
                                            paddingY={'2'}
                                            fontFamily={'roboto'}
                                            fontWeight={'500'}
                                            fontSize={'16px'}>
                                            {membro.email}

                                        </Text>
                                        <Text
                                            paddingY={'2'}
                                            fontFamily={'roboto'}
                                            fontWeight={'500'}
                                            fontSize={'16px'}>
                                            {membro.aniversario}

                                        </Text>
                                        <Text
                                            paddingY={'2'}
                                            fontFamily={'roboto'}
                                            fontWeight={'500'}
                                            fontSize={'16px'}>
                                            {membro.cargo}

                                        </Text>
                                    </Stack>
                                </Box>)}

                        </SimpleGrid>
                    </Stack>
                </Box>

            </Stack>
        </HStack >
    )
}
