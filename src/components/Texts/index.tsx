import { Text } from '@chakra-ui/react'
import '@fontsource/roboto/300.css'

interface TextosProps {
    text?: string
}

export function Textos({ text }: TextosProps) {
    return (
        <Text
            as="p"
            fontFamily={'roboto'}
            fontSize={['10px', '12px', '14px', '16px', '20px']}>
            {text}
        </Text>
    )
}