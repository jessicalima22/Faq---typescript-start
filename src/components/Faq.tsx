import Questions from "./Questions";

export default function Faq () {
    return(
        <main className=" bg-primary pt-5 pb-32">
            <div className="w-screen  flex ">
                <section className="ps-40">
                    <Questions question='What is Tailwind and how does it work?' answer='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'/>
                    <Questions question='How do I become a Data Scientist?' answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum.'/>
                    <Questions question='What are the key skills of a Data Scientist?' answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget.'/>
                    <Questions question='What is the best way to learn React?' answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare.'/>
                </section>
                <section className="ps-20">
                    <Questions question='How do I become a data Scientist?' answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex.'/>
                    <Questions question='What are the key skills of a Data Scientist?' answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque justo.'/>
                    <Questions question='What is the best way to learn React?' answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget pretium.'/>
                </section>
            </div>
        </main>

    )
}