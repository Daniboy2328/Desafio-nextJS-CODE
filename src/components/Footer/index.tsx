import { HStack, Stack, Text, Box, Center, Grid, GridItem, Img, Link } from "@chakra-ui/react";
import '@fontsource/roboto/300.css';
import '@fontsource/saira/300.css';
import '@fontsource/roboto-mono/400.css'

export function Footer() {
    return (

        <Box
            bg='#1E1E1E'
            w='100%'
            height='120px'
            color='white'
            px={'0'}
            marginBottom='0'
        >
            <Grid
                templateColumns='repeat(3, 1fr)' w='100%' h='120px'
                alignItems={'center'}
                as="nav">


                <GridItem >
                    <Stack alignItems={'center'}>
                        <Text
                        lineHeight={'3'}
                        fontFamily={'roboto'}
                        fontSize={'14'}>
                            Categorias
                        </Text>
                        
                        <Text
                         lineHeight={'3'}
                         fontFamily={'roboto'}
                         fontSize={'14'}>  
                            Ação                         
                        </Text>
                        
                        <Text
                         lineHeight={'3'}
                         fontFamily={'roboto'}
                         fontSize={'14'}> 
                            Aventura                           
                        </Text>

                        <Text
                         lineHeight={'3'}
                         fontFamily={'roboto'}
                         fontSize={'14'}>   
                            Esportes                         
                        </Text>

                        <Text
                         lineHeight={'3'}
                         fontFamily={'roboto'}
                         fontSize={'14'}>   
                            Corrida                         
                        </Text>

                    </Stack>                   
                </GridItem>


                <GridItem>
                <Stack alignItems={'center'}>
                        <Text
                         lineHeight={'3'}
                         fontFamily={'roboto'}
                         fontSize={'14'}>
                            Contato
                        </Text>
                        
                        <Text
                         lineHeight={'3'}
                         fontFamily={'roboto'}
                         fontSize={'14'}>  
                            Email                         
                        </Text>
                        
                        <Text
                         lineHeight={'3'}
                         fontFamily={'roboto'}
                         fontSize={'14'}> 
                            Telefone                          
                        </Text>

                        <Text
                         lineHeight={'3'}
                         fontFamily={'roboto'}
                         fontSize={'14'}>   
                            Whatsapp                        
                        </Text>

                        <Text
                         lineHeight={'3'}
                         fontFamily={'roboto'}
                         fontSize={'14'}>   
                            Endereço                
                        </Text>

                    </Stack>                       
                </GridItem>


                <GridItem>
                <Stack alignItems={'center'}>
                        <Text
                         lineHeight={'3'}
                         fontFamily={'roboto'}
                         fontSize={'14'}>
                            Ajuda
                        </Text>
                        
                        <Text
                         lineHeight={'3'}
                         fontFamily={'roboto'}
                         fontSize={'14'}>  
                            Pagamento                         
                        </Text>
                        
                        <Text
                         lineHeight={'3'}
                         fontFamily={'roboto'}
                         fontSize={'14'}> 
                            Reembolso                           
                        </Text>

                        <Text
                         lineHeight={'3'}
                         fontFamily={'roboto'}
                         fontSize={'14'}>   
                            Duvidas Frequentes                         
                        </Text>

                        <Text
                         lineHeight={'3'}
                         fontFamily={'roboto'}
                         fontSize={'14'}>   
                            Atendimento                        
                        </Text>

                    </Stack>                      
                </GridItem>


            </Grid>
        </Box >
    )
}