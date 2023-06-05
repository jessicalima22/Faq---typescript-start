import { useState } from "react";
import Questions from "./Questions";
import peopleImage from "../../public/people.png"
import Image from "next/image";


export default function Faq () {

    const [active, setActive] = useState(0)

    function toggleVisibility (id:number) {
    if(id === active) {
        setActive(-1)
    } else {
        setActive (id)
    }
}

    return(
        <main className=" bg-primary pt-5 grid md:grid-cols-2 md:gap-2 md:grid-rows-4 md:max-h-[47%] grid-cols-1 grid-rows-[1fr_23%_minmax(20%,900px)]">
            <section className="ps-28 md:row-span-4 row-span-1">
                <Questions 
                    question='What is Tailwind and how does it work?' 
                    answer='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
                    toggleVisibility={toggleVisibility}
                    id = {0}
                    open = {active===0}
                    />
                <Questions 
                    question='How do I become a Data Scientist?' 
                    answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum.'
                    toggleVisibility={toggleVisibility}
                    id = {1}
                    open = {active===1}
                    />
                <Questions 
                    question='What are the key skills of a Data Scientist?' 
                    answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget.'
                    toggleVisibility={toggleVisibility}
                    id = {2}
                    open = {active===2}
                    />
                <Questions 
                    question='What is the best way to learn React?' 
                    answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare.'
                    toggleVisibility={toggleVisibility}
                    id = {3}
                    open = {active===3}
                    />
            </section>
            <section className="ps-28 md:row-span-2 row-span-1">
                <Questions 
                    question='How do I become a data Scientist?' 
                    answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex.'
                    toggleVisibility={toggleVisibility}
                    id = {4}
                    open = {active===4}
                    />
                <Questions 
                    question='What are the key skills of a Data Scientist?' 
                    answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque justo.'
                    toggleVisibility={toggleVisibility}
                    id = {5}
                    open = {active===5}
                    />
                <Questions 
                    question='What is the best way to learn React?' 
                    answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget pretium.'
                    toggleVisibility={toggleVisibility}
                    id = {6}
                    open = {active===6}
                    />
            </section>            
            <section className="grid justify-items-center ">
                <Image src={peopleImage} alt="people teaching"
                className="md:w-4/5 w-2/3"/>
            </section>
        </main>

    )
}