import { Text } from '@chakra-ui/react'

interface TextosProps {
    text?: string
}

export function Textos({ text }: TextosProps) {
    return (
        <Text
            as="p"
            lineHeight={'100%'}
            fontFamily={'roboto'}
            fontSize='20px'>
            {text}
        </Text>
    )
}