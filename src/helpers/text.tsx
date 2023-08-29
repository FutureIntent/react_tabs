
interface WhiteSpaceInterface {
    whitespace: (value: string) => boolean | string
}


export const checkWhitespaces = (value: string) => {
    return value.includes(' ');
}

export const whitespace: WhiteSpaceInterface = {
    whitespace: (value: string) => !checkWhitespaces(value) || 'Whitespaces are forbidden'
}


export const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
}