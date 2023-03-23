import React, { useState } from 'react';
import { userSchema } from '../validations/ContactValidation';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
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
                            <input type="text" name="name" className="text-black pt-3 w-40 outline-none text-sm border-0 border-b border-gray-300 focus:w-full transition-all ease-in focus:ring-0 focus:border-blue-500 autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] peer" placeholder=" " />
                            <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 top-0 z-10 origin-[0] left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Enter your name</label>
                            <ValidationError prefix="Name" field="name" className="text-gray-600 mt-2" errors={state.errors} />
                        </div>
                        <div className="relative w-full">
                            <input type="text" id="floating_filled" className="pt-3 text-black w-40 outline-none text-sm border-0 border-b border-gray-300 focus:w-full transition-all ease-in focus:ring-0 focus:border-blue-500 autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] peer" placeholder=" " />
                            <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 top-0 z-10 origin-[0] left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Enter your email</label>
                            <ValidationError className="text-red-600 mt-2" field="email" prefix="Email" errors={state.errors} />
                        </div>
                    </div>
                    <div className="mt-12 relative text-sm flex flex-col">
                        <textarea type="text" id="floating_filled" className="absolute pt-6 text-black w-full h-12 outline-none text-sm border-0 border-b border-gray-300 focus:ring-0 focus:border-blue-500 autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] peer" placeholder="(ex. Hi How soon would you be available to discuss an open role?)." />
                        <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 top-0 z-10 origin-[0] left-0 peer-focus:text-blue-500 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Enter your message here...</label>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    <div className="mt-32 w-48 m-auto">
                        <button type="submit" disabled={state.submitting} className="w-48 h-12 rounded-lg text-black border border-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-300 hover:text-white hover:border-0 outline-none motion-safe:animate-bounce">Go Ahead</button>
                        <ValidationError errors={state.errors} />
                    </div>
                </form>
            </div>
        </div >
    );
}


export default Contact;


