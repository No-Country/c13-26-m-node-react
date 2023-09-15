import React from 'react'

const Banner = () => {
    return (
        <div className="m-5 sm:m-10 rounded-xl sm:bg-cover bg-center flex items-center justify-end h-48 sm:h-96 bg-[url('https://p1.pxfuel.com/preview/918/349/310/office-work-business-workspace.jpg')]">
            <div className='text-center me-[5%] sm:me-[10%]'>
                <p className='text-lg sm:text-[40px] sm:mb-4 font-medium text-white'>¡Publica tus productos!</p>
                <p className='text-sm sm:text-[20px] text-white'>Únete como vendedor</p>
                <button className="bg-black hover:bg-red-500 text-white font-medium py-1 px-2 sm:px-5 sm:py-2 my-2 sm:text-[20px] text-sm rounded-full">
                    Sign in
                </button>
            </div>
        </div>
    )
}

export default Banner