import Faq from "../components/Faq";

export default function FaqPage () {
    return (
        <div className="grid justify-center bg-backgroundColor ">
            <div className=" text-5xl font-notojp w-100 text-center leading-tight ">
                <p>Frequently Asked Questions </p>
            </div>
            <p className="w-textbox py-10 text-center font-semibold"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quisquam alias maxime dolorem, ...  </p>
            <Faq></Faq>
        </div>
    )
}