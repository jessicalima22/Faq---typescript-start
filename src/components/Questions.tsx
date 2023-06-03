import { IconMinus } from "@tabler/icons-react"
import { IconPlus } from "@tabler/icons-react"


interface QuestionProps {
    question: string
    answer: string
    open: boolean
    id: number
    toggleVisibility: (id: number) => void
    
}

export default function Questions (props: QuestionProps){
    

    function whenOpen (){
        props.toggleVisibility(props.id)

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
                {props.open ? <IconMinus/> : <IconPlus/>}
                
            </div>
            {props.open && (
            <div className="p-4 max-w-sm">
                {props.answer}
            </div>
            )}
            

        </div>
    )
}