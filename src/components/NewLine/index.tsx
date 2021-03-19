import React from "react"

interface NewLineProps {
    text: string
}


export default ({text}: NewLineProps): any  => {
    if(text && text.length > 0){
        const splitedText: Array<string> = text.split('\n')
        if(splitedText && splitedText.length > 0){
            return splitedText.map((item: string, idx: number): any => {
                return <p key={idx}>{item}</p>
            })
        }
        return <p>{text}</p>
    }
    return <p>{text}</p>
}