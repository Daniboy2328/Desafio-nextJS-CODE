import { HStack, Stack, Box, Image, Button, Input, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, ModalFooter, Table, Thead, Tbody, Tr, Th, Td, TableContainer, SimpleGrid, GridItem, Grid } from "@chakra-ui/react";
import { EditIcon, ViewIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

type Membro = {
    id: number;
    name: string;
    email: string;
    aniversario: string;
    salario: string;
    cargo: string;
};

import '@fontsource/roboto-mono'


export default function Admin() {
    const [membros, setMembros] = useState<Membro[]>([])
    const { isOpen: isOpenModal, onOpen: onOpenModal, onClose: onCloseModal } = useDisclosure()
    const [membroSelecionado, setMembroSelecionado] = useState<Membro | null>(null)
    const { isOpen: isOpenModal1, onOpen: onOpenModal1, onClose: onCloseModal1 } = useDisclosure()
    const { isOpen: isOpenModal2, onOpen: onOpenModal2, onClose: onCloseModal2 } = useDisclosure()
    const [formValues, setFormValues] = useState({
        id: "",
        name: "",
        email: "",
        aniversario: "",
        salario: "",
        cargo: "",
    });
    useEffect(() => {
        axios.get<Membro[]>('http://localhost:3000/funcionarios')
            .then((resposta: AxiosResponse<Membro[]>) => {
                setMembros(resposta.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])
    const formSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log(formValues);
        axios.post<Membro[]>(`http://localhost:3000/funcionarios`, {
            name: formValues.name,
            email: formValues.email,
            aniversario: formValues.aniversario,
            salario: formValues.salario,
            cargo: formValues.cargo,
        })
            .then(() => {
                alert('Membro atualizado!')
                onCloseModal();
                setFormValues({
                    id: "",
                    name: "",
                    email: "",
                    aniversario: "",
                    salario: "",
                    cargo: "",
                });
            })
            .catch(erro => {
                console.log(erro)
            })
    };
    const formSubmitUpdate = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log(formValues);
        axios.put<Membro[]>(`http://localhost:3000/funcionarios/${formValues.id}`, {
            name: formValues.name,
            email: formValues.email,
            aniversario: formValues.aniversario,
            salario: formValues.salario,
            cargo: formValues.cargo,
        })
            .then(() => {
                alert('Membro editado!')
                onCloseModal2();
            })
            .catch(erro => {
                console.log(erro)
            })
    };
    const excluir = (membroExcluido: Membro) => {
        axios.delete(`http://localhost:3000/funcionarios/${membroExcluido.id}`)
            .then(() => {
                const listaMembros = membros.filter(membro => membro.id !== membroExcluido.id)
                setMembros([...listaMembros])
            })
    }

    return (

        <>
            <Stack
                alignItems={'center'}
                height={'841px'}>


                <Grid
                    alignItems={'end'}
                    templateColumns="1fr 9fr 1fr"
                    w={'1344px'}>

                    <GridItem
                        justifyContent={'center'}>
                        <Button
                            margin={'6px'}
                            size='sm'
                            bg={'#560B76'}
                            onClick={() => {
                                onOpenModal();
                            }}>
                            <AddIcon />
                        </Button>

                    </GridItem>
                    <GridItem>
                        <HStack
                            justifyContent={'center'}>
                            <Text
                                fontFamily={'roboto'}
                                fontSize={'48px'}
                                fontWeight={'300'}
                                margin={'5'}>
                                TABELA DE FUNCIONÁRIOS
                            </Text>
                        </HStack>
                    </GridItem>
                    <GridItem>
                        <Text>

                        </Text>
                    </GridItem>
                </Grid>

                <Box
                    width={'1344px'}
                    height={'600px'}
                    borderRadius={'30px'}
                    bg={'#1E1E1E'}
                    shadow={'inset 0px 0px 15px #B300FF'}
                    overflow='auto'>

                    <TableContainer
                        padding={'3'}>
                        <Table
                            variant='unstyled'
                            size='sm'>
                            {membros.map((membro) =>
                                <Tbody>
                                    <Tr>
                                        <Td
                                            fontFamily={'roboto mono'}
                                            fontSize={'20px'}
                                            fontWeight={'400'}
                                        >
                                            {membro.name}
                                        </Td>

                                        <Td
                                            display={'flex'}
                                            justifyContent={'flex-end'}>
                                            <Button
                                                margin={'6px'}
                                                size='xs'
                                                bg={'#560B76'}
                                                onClick={() => {
                                                    setMembroSelecionado(membro);
                                                    onOpenModal1();
                                                }}>
                                                <ViewIcon />
                                            </Button>


                                            <Button
                                                margin={'6px'}
                                                size='xs'
                                                bg={'#560B76'}
                                                onClick={() => {
                                                    setMembroSelecionado(membro);
                                                    onOpenModal2();
                                                    setFormValues({ ...formValues, id: membro.id.toString() })
                                                }}

                                            >
                                                <EditIcon />
                                            </Button>

                                            <Button
                                                margin={'6px'}
                                                size='xs'
                                                bg={'#560B76'}
                                                onClick={() => excluir(membro)}
                                            >
                                                <CloseIcon />

                                            </Button>


                                        </Td>
                                    </Tr>
                                </Tbody>)}

                        </Table>
                    </TableContainer>

                </Box>

            </Stack>

            {/* Modal Create */}
            <Modal onClose={onCloseModal} isOpen={isOpenModal} isCentered>
                <ModalOverlay />
                <ModalContent bgGradient="linear(120deg, #1E1E1E 22%, #560B76 100%)" color="white">
                    <ModalHeader>Adicione um membro</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel htmlFor="nome">Nome:</FormLabel>
                            <Input
                                _placeholder={{ color: 'white' }}
                                fontSize={'20px'}
                                fontFamily={'roboto'}
                                borderRadius={'20px'}
                                bg={'#1E1E1E'}
                                borderWidth={'0'}
                                boxShadow={'inset 0px 0px 5px #B300FF'}
                                _focus={{
                                    boxShadow: "inset 0px 0px 5px #B300FF"
                                }}
                                id="nome"
                                placeholder={'Digite o nome...'}
                                value={formValues.name}
                                onChange={(event) =>
                                    setFormValues({ ...formValues, name: event.target.value })
                                }
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="email">Email:</FormLabel>
                            <Input
                                _placeholder={{ color: 'white' }}
                                fontSize={'20px'}
                                fontFamily={'roboto'}
                                borderRadius={'20px'}
                                bg={'#1E1E1E'}
                                borderWidth={'0'}
                                boxShadow={'inset 0px 0px 5px #B300FF'}
                                _focus={{
                                    boxShadow: "inset 0px 0px 5px #B300FF"
                                }}
                                id="email"
                                placeholder={'Digite o email...'}
                                value={formValues.email}
                                onChange={(event) =>
                                    setFormValues({ ...formValues, email: event.target.value })
                                }
                            />
                        </FormControl><FormControl>
                            <FormLabel color={'#FFFFFF'} htmlFor="aniversario">Aniversario:</FormLabel>
                            <Input
                                _placeholder={{ color: 'white' }}
                                fontSize={'20px'}
                                fontFamily={'roboto'}
                                borderRadius={'20px'}
                                bg={'#1E1E1E'}
                                borderWidth={'0'}
                                boxShadow={'inset 0px 0px 5px #B300FF'}
                                _focus={{
                                    boxShadow: "inset 0px 0px 5px #B300FF"
                                }}
                                id="aniversario"
                                placeholder={'Digite o aniversário...'}
                                value={formValues.aniversario}
                                onChange={(event) =>
                                    setFormValues({ ...formValues, aniversario: event.target.value })
                                }
                                type="date"
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="cargo">Cargo:</FormLabel>
                            <Input
                                _placeholder={{ color: 'white' }}
                                fontSize={'20px'}
                                fontFamily={'roboto'}
                                borderRadius={'20px'}
                                bg={'#1E1E1E'}
                                borderWidth={'0'}
                                boxShadow={'inset 0px 0px 5px #B300FF'}
                                _focus={{
                                    boxShadow: "inset 0px 0px 5px #B300FF"
                                }}
                                id="cargo"
                                placeholder={'Digite o cargo...'}
                                value={formValues.cargo}
                                onChange={(event) =>
                                    setFormValues({ ...formValues, cargo: event.target.value })
                                }
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="salario">Salario:</FormLabel>
                            <Input _placeholder={{ color: 'white' }}
                                fontSize={'20px'}
                                fontFamily={'roboto'}
                                borderRadius={'20px'}
                                bg={'#1E1E1E'}
                                borderWidth={'0'}
                                style={{

                                    boxShadow: "inset 0px 0px 5px #B300FF",
                                }}

                                id="salario"
                                placeholder={'Digite o salário...'}
                                value={formValues.salario}
                                onChange={(event) =>
                                    setFormValues({ ...formValues, salario: event.target.value })
                                }
                            />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='red' mr={'2'} onClick={onCloseModal}>Fechar</Button>
                        <Button colorScheme="green" onClick={formSubmit}>Enviar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>


            {/* //Modal View */}
            <Modal onClose={onCloseModal1} isOpen={isOpenModal1} isCentered>
                <ModalOverlay />
                <ModalContent bgGradient="linear(120deg, #1E1E1E 22%, #560B76 100%)" color="white">
                    <ModalHeader>Dados deste membro</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {membroSelecionado && (
                            <>
                                <Stack as='div' pb={'2'}>
                                    <Text fontSize={'18px'} fontWeight={'500'}>Nome:</Text>

                                    <Input _placeholder={{ color: 'white' }}
                                        fontSize={'20px'}
                                        fontFamily={'roboto'}
                                        borderRadius={'20px'}
                                        bg={'#1E1E1E'}
                                        borderWidth={'0'}
                                        style={{

                                            boxShadow: "inset 0px 0px 5px #B300FF",
                                        }}
                                        value={membroSelecionado.name}
                                    />
                                </Stack>
                                <Stack as='div' pb={'2'}>
                                    <Text fontSize={'18px'} fontWeight={'500'}>E-mail:</Text>
                                    <Input _placeholder={{ color: 'white' }}
                                        fontSize={'20px'}
                                        fontFamily={'roboto'}
                                        borderRadius={'20px'}
                                        bg={'#1E1E1E'}
                                        borderWidth={'0'}
                                        style={{

                                            boxShadow: "inset 0px 0px 5px #B300FF",
                                        }}
                                        value={membroSelecionado.email} />
                                </Stack>
                                <Stack as='div' pb={'2'}>
                                    <Text fontSize={'18px'} fontWeight={'500'}>Aniversário:</Text>
                                    <Input _placeholder={{ color: 'white' }}
                                        fontSize={'20px'}
                                        fontFamily={'roboto'}
                                        borderRadius={'20px'}
                                        bg={'#1E1E1E'}
                                        borderWidth={'0'}
                                        style={{

                                            boxShadow: "inset 0px 0px 5px #B300FF",
                                        }}
                                        value={membroSelecionado.aniversario} />
                                </Stack>
                                <Stack as='div' pb={'2'}>
                                    <Text fontSize={'18px'} fontWeight={'500'}>Cargo:</Text>
                                    <Input _placeholder={{ color: 'white' }}
                                        fontSize={'20px'}
                                        fontFamily={'roboto'}
                                        borderRadius={'20px'}
                                        bg={'#1E1E1E'}
                                        borderWidth={'0'}
                                        style={{

                                            boxShadow: "inset 0px 0px 5px #B300FF",
                                        }}
                                        value={membroSelecionado.cargo} />
                                </Stack>
                                <Stack as='div' pb={'2'}>
                                    <Text fontSize={'18px'} fontWeight={'500'}>Salário:</Text>
                                    <Input _placeholder={{ color: 'white' }}
                                        fontSize={'20px'}
                                        fontFamily={'roboto'}
                                        borderRadius={'20px'}
                                        bg={'#1E1E1E'}
                                        borderWidth={'0'}
                                        style={{

                                            boxShadow: "inset 0px 0px 5px #B300FF",
                                        }}
                                        value={membroSelecionado.salario} />
                                </Stack>
                            </>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='red'
                            onClick={onCloseModal1}>Fechar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            {/* //Modal Update */}

            <Modal onClose={onCloseModal2} isOpen={isOpenModal2} isCentered>
                <ModalOverlay />
                <ModalContent bgGradient="linear(120deg, #1E1E1E 22%, #560B76 100%)" color="white">
                    <ModalHeader>Editar Dados</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>

                        <FormControl>
                            {membroSelecionado && (
                                <Input
                                    _placeholder={{ color: 'white' }}
                                    fontSize={'20px'}
                                    fontFamily={'roboto'}
                                    borderRadius={'20px'}
                                    borderWidth={'0'}
                                    boxShadow={'inset 0px 0px 5px #B300FF'}
                                    _focus={{
                                        boxShadow: "inset 0px 0px 5px #B300FF"
                                    }}
                                    id="id"
                                    placeholder="Digite seu id"
                                    value={membroSelecionado.id}
                                    onChange={(event) =>
                                        setFormValues({ ...formValues, id: event.target.value })
                                    }
                                    type="hidden"
                                />)}
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="nome">Nome:</FormLabel>
                            {membroSelecionado && (
                                <Input
                                    _placeholder={{ color: 'white' }}
                                    fontSize={'20px'}
                                    fontFamily={'roboto'}
                                    borderRadius={'20px'}
                                    bg={'#1E1E1E'}
                                    borderWidth={'0'}
                                    boxShadow={'inset 0px 0px 5px #B300FF'}
                                    _focus={{
                                        boxShadow: "inset 0px 0px 5px #B300FF"
                                    }}
                                    id="nome"
                                    placeholder={membroSelecionado.name}
                                    value={formValues.name}
                                    onChange={(event) =>
                                        setFormValues({ ...formValues, name: event.target.value })
                                    }
                                />)}
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="email">Email:</FormLabel>
                            {membroSelecionado && (
                                <Input
                                    _placeholder={{ color: 'white' }}
                                    fontSize={'20px'}
                                    fontFamily={'roboto'}
                                    borderRadius={'20px'}
                                    bg={'#1E1E1E'}
                                    borderWidth={'0'}
                                    boxShadow={'inset 0px 0px 5px #B300FF'}
                                    _focus={{
                                        boxShadow: "inset 0px 0px 5px #B300FF"
                                    }}
                                    id="email"
                                    placeholder={membroSelecionado.email}
                                    value={formValues.email}
                                    onChange={(event) =>
                                        setFormValues({ ...formValues, email: event.target.value })
                                    }
                                />)}
                        </FormControl><FormControl>
                            <FormLabel htmlFor="aniversario">Aniversario:</FormLabel>
                            {membroSelecionado && (
                                <Input
                                    _placeholder={{ color: 'white' }}
                                    fontSize={'20px'}
                                    fontFamily={'roboto'}
                                    borderRadius={'20px'}
                                    bg={'#1E1E1E'}
                                    borderWidth={'0'}
                                    boxShadow={'inset 0px 0px 5px #B300FF'}
                                    _focus={{
                                        boxShadow: "inset 0px 0px 5px #B300FF"
                                    }}
                                    id="aniversario"
                                    placeholder={membroSelecionado.aniversario}
                                    value={formValues.aniversario}
                                    onChange={(event) =>
                                        setFormValues({ ...formValues, aniversario: event.target.value })
                                    }
                                    type="date"
                                />)}
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="cargo">Cargo:</FormLabel>
                            {membroSelecionado && (
                                <Input
                                    _placeholder={{ color: 'white' }}
                                    fontSize={'20px'}
                                    fontFamily={'roboto'}
                                    borderRadius={'20px'}
                                    bg={'#1E1E1E'}
                                    borderWidth={'0'}
                                    boxShadow={'inset 0px 0px 5px #B300FF'}
                                    _focus={{
                                        boxShadow: "inset 0px 0px 5px #B300FF"
                                    }}
                                    id="cargo"
                                    placeholder={membroSelecionado.cargo}
                                    value={formValues.cargo}
                                    onChange={(event) =>
                                        setFormValues({ ...formValues, cargo: event.target.value })
                                    }
                                />)}
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="salario">Salario:</FormLabel>
                            {membroSelecionado && (
                                <Input
                                    _placeholder={{ color: 'white' }}
                                    fontSize={'20px'}
                                    fontFamily={'roboto'}
                                    borderRadius={'20px'}
                                    bg={'#1E1E1E'}
                                    borderWidth={'0'}
                                    boxShadow={'inset 0px 0px 5px #B300FF'}
                                    _focus={{
                                        boxShadow: "inset 0px 0px 5px #B300FF"
                                    }}
                                    id="salario"
                                    placeholder={membroSelecionado.salario}
                                    value={formValues.salario}
                                    onChange={(event) =>
                                        setFormValues({ ...formValues, salario: event.target.value })
                                    }
                                />)}
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='red' mr={'2'} onClick={onCloseModal2}>Fechar</Button>
                        <Button colorScheme="green" onClick={formSubmitUpdate}>Enviar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            
        </>

    )
}
