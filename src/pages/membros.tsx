import { HStack, Stack, Heading, Text, Box, Image, SimpleGrid, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import '@fontsource/roboto-mono/700.css'
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
                height={'100vh'}
            >
                <Heading
                    fontFamily={'roboto'}
                    fontWeight={'500'}
                    fontSize={'48px'}
                    marginTop={'12'}
                    marginBottom={'12'}>
                    Membros
                </Heading>

                <SimpleGrid columns={3} spacing={'20'}>
                {membros.map((membro) =>
                        <Box
                            bg='#1E1E1E'
                            borderRadius={'20px'}
                            width='360px'
                            height='210px'
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
        </HStack >
    )
}