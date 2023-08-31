import React from 'react';
import { FaRegStar } from 'react-icons/fa6';

const CardDetails = () => {
    return (
        <div className='p-4 xl:py-16 md:p-8 lg:p-16 xl:p-20'>
            <div className="flex flex-col md:flex-row">
                <div className="flex-none w-full md:w-1/2 lg:w-1/3 relative border border-current border-1 rounded-xl">
                    <img
                        src="https://devicer.cmsmasters.net/wp-content/uploads/2015/05/6.jpg"
                        alt=""
                        className="rounded-xl w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>
                <form className="flex-auto py-4 md:py-2 px-4 md:px-8 lg:px-10 space-y-4">
                    <div className="space-y-2.5">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-900">
                            Classic Utility Jacket
                        </h1>
                        <div className="text-base md:text-lg lg:text-xl font-semibold text-slate-700">$110.00</div>
                        <div className='flex flex-wrap text-slate-500'>
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                        </div>
                    </div>
                    <hr className="border-slate-300" />
                    <div>
                        <p className='text-justify'>
                            Suspendisse feugiat metus eget vestibulum aliquam. Vestibulum fringilla
                            vitae orci at egestas. Phasellus molestie ex eget diam accumsan luctus.
                            Sed dapibus metus at aliquam luctus. Mauris turpis nisi, egestas non enim
                            et, gravida rutrum mauris. Aenean sollicitudin pretium urna nec congue.
                            Sed eu metus faucibus, cursus lacus vel, consequat est.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6 text-sm font-medium">
                        <div className="flex-auto flex justify-center md:justify-start space-x-4">
                            <input
                                className="w-20 md:w-20 h-10 px-3 md:px-6 font-semibold rounded-xl bg-white border border-1 border-slate-400"
                                type="number"
                                placeholder='1'
                            />
                            <button className="w-48 md:w-auto h-10 px-6 font-semibold rounded-xl border border-slate-400 text-slate-900">
                                Añadir al carrito
                            </button>
                        </div>
                    </div>
                    <hr className="border-slate-300" />
                </form>
            </div>
        </div>
    );
};

export default CardDetails;
