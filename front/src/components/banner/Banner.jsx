import React from 'react'

const Banner = () => {
    return (
        <div className="m-5 sm:m-10 rounded-xl bg-cover bg-center flex items-center justify-end h-36 sm:h-96 bg-[url('https://p1.pxfuel.com/preview/918/349/310/office-work-business-workspace.jpg')]">
            <div className='text-center me-8 sm:me-28'>
                <p className='text-[12px] sm:text-[40px] font-medium text-white'>¡Publica tus productos!</p>
                <p className='text-[8px] sm:text-[20px] text-white'>Únete como vendedor</p>
                <button class="bg-black hover:bg-red-500 text-white font-bold py-1 px-2 sm:px-5 sm:py-2 my-2 sm:text-[20px] text-[8px] rounded-full">
                    Button
                </button>
            </div>
        </div>
    )
}

export default Banner