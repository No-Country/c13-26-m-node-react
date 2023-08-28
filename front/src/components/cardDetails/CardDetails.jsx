import React from 'react'
import { FaRegStar } from "react-icons/fa6";
const CardDetails = () => {
    return (
        <div className='m-24 sm:flex justify-center'>
            <div className="flex font-sans sm:w-[200vh] sm:h-[60vh]">
                <div className="flex-none w-48 sm:w-[80vh] relative border border-current border-1 rounded-xl">
                    <img src="https://devicer.cmsmasters.net/wp-content/uploads/2015/05/6.jpg" alt="" className=" rounded-xl absolute inset-0 w-full h-full object-cover" loading="lazy" />
                </div>
                <form className="flex-auto py-2 ps-10 space-y-4">
                    <div className="space-y-2.5">
                        <h1 className="flex-auto sm:text-[40px] font-semibold text-slate-900">
                            Classic Utility Jacket
                        </h1>
                        <div className="text-lg font-semibold text-slate-700">
                            $110.00
                        </div>
                        <div className='flex flex-wrap text-slate-500'>
                            <FaRegStar/>
                            <FaRegStar/>
                            <FaRegStar/>
                            <FaRegStar/>
                            <FaRegStar/>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <p className='text-justify'>
                        Suspendisse feugiat metus eget vestibulum aliquam. Vestibulum fringilla vitae orci at egestas. Phasellus molestie ex eget diam accumsan luctus. Sed dapibus metus at aliquam luctus. Mauris turpis nisi, egestas non enim et, gravida rutrum mauris. Aenean sollicitudin pretium urna nec congue. Sed eu metus faucibus, cursus lacus vel, consequat est. 
                        </p>
                    </div>
                    
                    <div className="flex space-x-4 mb-6 text-sm font-medium">
                        <div className="flex-auto flex space-x-4">
                            <input className="h-10 w-20 px-6 font-semibold rounded-xl bg-white border border-1 border-slate-400" type="number" placeholder='1'/>
                            <button className="h-10 px-6 font-semibold rounded-xl border border-slate-400 text-slate-900" type="button">
                                Añadir al carrito
                            </button>
                        </div>
                    </div>
                    <hr/>
                </form>
            </div>
        </div >
    )
}

export default CardDetails