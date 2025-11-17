/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Footer = () => {
    return (
        <div className='w-screen h-[550px] bg-[#444546] border-t flex flex-col justify-between items-center px-20 py-10'>
            <div className='flex justify-between items-center'>
                {/* form */}
                <div className='w-[315px]'>
                    <form>
                        <h1 className='text-white text-xl'>JOIN OUR MAILING LIST</h1>
                        <div className='w-[315px] flex flex-col gap-4 mt-4 pt-4 border-t border-white/70'>
                            {/* name */}
                            <div className='w-full flex gap-3 justify-between'>
                                <input type="text" name='first-name' id='first-name' placeholder='First Name' className='bg-white text-base w-[50%] h-10 rounded-[5px] px-3 outline-none' />
                                <input type="text" name='last-name' id='last-name' placeholder='Last Name' className='bg-white text-base w-[50%] h-10 rounded-[5px] px-3 outline-none' />
                            </div>
                            {/* email */}
                            <div>
                                <input type="text" name='email' id='email' placeholder='Email address*' className='bg-white text-base w-full h-10 rounded-[5px] px-3 outline-none' />
                            </div>
                            {/* agreement */}
                            <div>
                                <label className='text-white text-[14px] tracking-wide '>
                                    <input type="checkbox" name="agreement" id="agreement" />
                                    {" "}I agree to receive marketing messages from IngramSpark and consent to the IngramSpark's privacy policy and terms of use.*
                                </label>
                                <p className='text-[11px] text-[#c5c5c5] mt-1.5'>This site is protected by reCAPTCHA and the Google {" "}
                                    <a href="#" className='decoration-1 underline text-white/80'>Privacy Policy</a> and {" "}
                                    <a href='#' className='decoration-1 underline text-white/80'>Terms of Service</a> apply.</p>
                            </div>
                            {/* submit button */}
                            <button className='w-full h-[48px] bg-[#f7c743] hover:bg-[#eeb928]/90 transition duration-100 rounded-[5px] mt-1.5 text-[25px] cursor-pointer'>Submit</button>
                        </div>
                    </form>
                    <p className='text-[11px] text-[#c5c5c5] mt-2'>By clicking the "submit" button, you are agreeing to receive future marketing e-mail messages from IngramSpark.</p>
                </div>
                {/* quick links */}
                <div></div>
            </div>

            <div></div>
        </div>
    )
}

export default Footer