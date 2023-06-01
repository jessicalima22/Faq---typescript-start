import { IconMinus } from "@tabler/icons-react"
import { IconPlus } from "@tabler/icons-react"
import { useState } from "react"

interface QuestionProps {
    question: string
    answer: string
}

export default function Questions (props: QuestionProps){
    const [open, setOpen] = useState (false)

    function whenOpen (){
        setOpen(!open)

    }


    return(
        <div className="p-3">
            <div className= {
                `p-4 text-sm font-black 
                min-w-98 max-w-sm font-notojp
                bg-secondary select-none 
                cursor-pointer flex justify-between`} 
                onClick={whenOpen}>
                {props.question}
                {open ? <IconMinus/> : <IconPlus/>}
                
            </div>
            {open && (
            <div className="p-4 max-w-sm">
                {props.answer}
            </div>
            )}
            

        </div>
    )
}