import { HStack, Stack, Text, Box, Center, Grid, GridItem, Img, Link, useMediaQuery } from "@chakra-ui/react";
import '@fontsource/roboto/400.css';
import '@fontsource/saira/300.css';
import { Textos } from "../Texts";

export function NavBar() {
    const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
    return (

        <Box
            bg='#560B76'
            w='100%'
            height='120px'
            color='white'
            px={'0'}
            py={'0'}
        >
            <Grid
                templateColumns='repeat(3, 1fr)' w='100%' h='120px'
                alignItems={'center'}
                as="nav">


                <GridItem>
                    {isLargerThan992 && <Link href={'/'}>
                        <Img marginLeft={'5'} boxSize={['36px', '43px', '54px', '58px', '72px']} src='/saideira_logo.png' alt='Logo Saideira' />
                    </Link>}

                </GridItem>


                <GridItem>
                    <HStack justifyContent={'center'}>
                        <Link href={'/'}>
                            <Text
                                fontFamily={'saira'}
                                fontSize= '72px'
                                as="p"
                            >
                                SAIDEIRA
                            </Text>
                        </Link>
                    </HStack>
                </GridItem>


                <GridItem>
                {isLargerThan992 && <HStack
                        spacing={'3.3vh'}
                        justifyContent={'flex-end'}
                        margin={'12'}>
                        <Link href="/contato">
                            <Textos text={"CONTATO"}></Textos>
                        </Link>
                        <Link href="/membros">
                            <Textos text={"MEMBROS"}></Textos>
                        </Link>

                        <Link href="/login">
                            <Textos
                                text={"LOGIN"}></Textos>
                        </Link>

                    </HStack>}
                    
                </GridItem>


            </Grid>
        </Box >
    )
}