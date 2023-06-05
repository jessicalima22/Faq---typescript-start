import Faq from "../components/Faq";

export default function FaqPage () {
    return (
        <div className="grid justify-items-center bg-backgroundColor md:max-h-screen">
            <div className=" text-5xl font-notojp w-100 text-center leading-tight ">
                <p className="pt-6">Frequently Asked Questions </p>
            </div>
            <p className="w-textbox py-10 text-center font-semibold"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quisquam alias maxime dolorem, ...  </p>
            <Faq></Faq>
        </div>
    )
}