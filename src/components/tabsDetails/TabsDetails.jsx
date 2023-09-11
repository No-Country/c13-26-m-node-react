import React, { useState } from 'react';

const TabsDetails = () => {
    const [activeTab, setActiveTab] = useState('Tab 1');

    return (
        <div className="p-4 md:p-4">
            <div className="flex flex-col md:flex-row justify-center">
                <button
                    onClick={() => setActiveTab('Tab 1')}
                    className={`${activeTab === 'Tab 1'
                        ? 'border-b-2 border-blue-500 text-blue-500'
                        : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700'
                        } focus:outline-none mb-2 md:mb-0 md:mr-4`}
                >
                    Descripción
                </button>
                <button
                    onClick={() => setActiveTab('Tab 2')}
                    className={`${activeTab === 'Tab 2'
                        ? 'border-b-2 border-blue-500 text-blue-500'
                        : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700'
                        } focus:outline-none mb-2 md:mb-0 md:mr-4`}
                >
                    Información adicional
                </button>
                <button
                    onClick={() => setActiveTab('Tab 3')}
                    className={`${activeTab === 'Tab 3'
                        ? 'border-b-2 border-blue-500 text-blue-500'
                        : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700'
                        } focus:outline-none mb-2 md:mb-0 md:mr-4`}
                >
                    Reviews
                </button>
                <button
                    onClick={() => setActiveTab('Tab 4')}
                    className={`${activeTab === 'Tab 4'
                        ? 'border-b-2 border-blue-500 text-blue-500'
                        : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700'
                        } focus:outline-none mb-2 md:mb-0`}
                >
                    Información del vendedor
                </button>
            </div>
            <div className="m-4 sm:mx-20 text-center">
                <div className={`${activeTab === 'Tab 1' ? 'block' : 'hidden'} mx-auto w-full md:w-auto`}>
                    <p className='text-justify'>Aenean semper varius pellentesque. Quisque ornare ipsum vitae purus semper, ut fermentum sem tempus.
                    Aenean et nibh dui. Vivamus vel dolor sit amet nunc tincidunt congue sit amet nec enim. 
                    Phasellus finibus libero eu urna convallis, at fermentum ex mattis. Sed maximus ligula dignissim pretium euismod. 
                    Donec semper est eget magna mollis bibendum. Maecenas elit enim, venenatis nec nisl sit amet, 
                    scelerisque mattis est. Vivamus luctus volutpat tortor, ac venenatis metus laoreet id. 
                    Nam sollicitudin turpis at vestibulum porta. Nulla maximus augue eu felis molestie luctus.
                    Mauris quis mauris a elit mattis congue. Nam at laoreet libero, non aliquet sapien. 
                    Nulla at nunc ante.
                    </p>
                </div>
                <div className={`${activeTab === 'Tab 2' ? 'block' : 'hidden'} mx-auto w-full md:w-auto`}>
                    contenido tab 2
                </div>
                <div className={`${activeTab === 'Tab 3' ? 'block' : 'hidden'} mx-auto w-full md:w-auto`}>
                    contenido tab 3
                </div>
                <div className={`${activeTab === 'Tab 4' ? 'block' : 'hidden'} mx-auto w-full md:w-auto`}>
                    contenido tab 4
                </div>
            </div>
        </div>
    );
};

export default TabsDetails;
