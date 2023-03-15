import React, { useState } from 'react';
import { userSchema } from '../validations/ContactValidation';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [isActive, setIsActive] = useState(false);
    const [state, handleSubmit] = useForm("xdovdodd");
    const textInput = React.useRef();
    const resetInput = () => (textInput.current.reset());

    const validateUser = async (event) => {
        if (event) {

            event.preventDefault();

        }
        try {
            let formData = {
                name: event.target[0].value,
                email: event.target[1].value,
                message: event.target[2].value,
            };
            const isValid = await userSchema.isValid(formData)

            if (isValid) {
                await handleSubmit(event)
                resetInput();
            }

        } catch (e) {

        }

    };




    return (
        <div className="px-6 py-8 sm:px-20 py-12">
            <div className="sm:w-1/2 m-auto">
                <p className="text-blue-600 text-5xl text-center font-bold">Keep In Touch<span className="text-orange-600">!</span></p>
                <p className="text-gray-200 text-center text-lg mt-4">Got a proposal, a suggestion, a question, or simply want to say hello? Do it now.</p>
            </div>
            <div className="w-5/6 sm:w-1/2 m-auto text-blue-400 mt-20">
                <form onSubmit={validateUser} ref={textInput}>
                    <div className="w-full sm:flex">
                        <div className="w-full relative mb-12 sm:mr-20">
                            <input type="text" id="floating_filled" className="text-black pt-5 w-40 outline-none text-sm border-0 border-b-2 border-gray-300 focus:w-full transition-all ease-in focus:ring-0 focus:border-blue-500 peer" placeholder=" " />
                            <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 top-0 z-10 origin-[0] left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Enter your name</label>
                            <ValidationError prefix="Name" field="name" errors={state.errors} />
                        </div>
                        <div className="relative w-full">
                            <input type="text" id="floating_filled" className="pt-5 text-black w-40 outline-none text-sm border-0 border-b-2 border-gray-300 focus:w-full transition-all ease-in focus:ring-0 focus:border-blue-500 peer" placeholder=" " />
                            <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 top-0 z-10 origin-[0] left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Enter your email</label>
                            <ValidationError className="text-red-600 mt-2" field="email" prefix="Email" errors={state.errors} />
                        </div>
                    </div>
                    <div className="mt-12 text-sm flex flex-col">
                        <label htmlFor="message" className="text-gray-400">Enter your message here...</label>
                        <textarea name="message" type="text" className="border-b border-b-gray-500 outline-none mt-2 text-black" placeholder="(ex. Hi How soon would you be available to discuss an open role?)." required="" />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    <div className="mt-16 w-48 m-auto">
                        <button type="submit" disabled={state.submitting} className="w-48 h-12 rounded-lg text-black border border-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-300 hover:text-white hover:border-0 outline-none motion-safe:animate-bounce">Go Ahead</button>
                        <ValidationError errors={state.errors} />
                    </div>
                </form>
            </div>
        </div >
    );
}


export default Contact;



//focus:-translate-y-2.5 transition-all ease-in

// <input type="name" name="name" className="border-b border-b-gray-500 text-black outline-none w-40 focus:w-full transition-all ease-in relative z-20 bg-transparent  focus:ring-0 focus:border-blue-600 peer required />
// <label htmlFor="name" className="text-gray-400 absolute top-0 sm:absolute left-0 focus:top-0">Enter your name</label>


{/*  */ }