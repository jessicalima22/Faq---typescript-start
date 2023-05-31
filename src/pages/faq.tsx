import Faq from "../components/Faq";

export default function FaqPage () {
    return (
        <div className="flex flex-col  items-center justify-center h-screen bg-backgroundColor ">
            <div className=" text-5xl font-notojp w-100 text-center leading-tight ">
                <p>Frequently Asked Questions </p>
                
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fuga molestias incidunt quos nobis, assumenda doloribus eos cum, porro ipsa at ducimus sequi, corporis et quasi voluptatem nostrum officiis aliquam?</p>
            <Faq></Faq>
        </div>
    )
}