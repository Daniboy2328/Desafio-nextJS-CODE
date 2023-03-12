import { HStack, Stack, Box, Image, Button, Input, Text } from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import '@fontsource/roboto-mono/700.css'

export default function Home() {
    return (

        <Stack
            width={'100vw'}
            height={'100vh'}
            justifyContent={'flex-start'}
            alignItems={'center'}
        >
            <Text
                fontFamily={'roboto'}
                fontSize={'36px'}
                fontWeight={'light'}>
                TABELA DE FUNCIONÁRIOS
            </Text>


            <Box
                width={'1344px'}
                height={'624px'}
                borderRadius={'30px'}
                bg={'#1E1E1E'}
                shadow={'inset 0px 0px 15px #B300FF'}>
                <TableContainer fontFamily={'roboto'}
                    fontSize={'20px'}
                    fontWeight={'light'}>
                    <Table variant='simple' size='sm'>
                        <Thead>
                            <Tr>
                                <Th>To convert</Th>
                                <Th>into</Th>
                                <Th isNumeric>multiply by</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td isNumeric>25.4</Td>
                            </Tr>
                            <Tr>
                                <Td>feet</Td>
                                <Td>centimetres (cm)</Td>
                                <Td isNumeric>30.48</Td>
                            </Tr>
                            <Tr>
                                <Td>yards</Td>
                                <Td>metres (m)</Td>
                                <Td isNumeric>0.91444</Td>
                            </Tr>
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th>To convert</Th>
                                <Th>into</Th>
                                <Th isNumeric>multiply by</Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>

            </Box>


        </Stack>
    )
}
