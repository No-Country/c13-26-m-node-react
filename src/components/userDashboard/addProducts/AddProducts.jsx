

const AddProducts = () => {
	return (
		<main className='bg-white text-black min-h-screen flex justify-center 
		items-center flex-col font-poppins pb-10'>

<form className=' bg-white mb-5'>
            <h3 className="pt-3 pl-3 font-semibold text-center md:text-left">Add Products</h3>

            <div className="flex flex-row justify-center flex-wrap gap-4">
            <div className=' h-10 w-60 rounded-lg flex items-center px-4 my-6
            border-black border-2'>
                <input type="text" 
                name='name'
                placeholder='Name' 
                className='outline-none'/>
            </div>
            <div className='h-10 w-60 rounded-lg flex items-center px-4 my-6
            border-black border-2'>
                <input type="text"
                name='category' 
                placeholder='category' 
                className='outline-none'/>
            </div>
            </div>

            <div className="flex flex-row justify-center flex-wrap gap-4">
            <div className=' h-10 w-60 rounded-lg flex items-center px-4 my-6
            border-black border-2'>
                <input type="text" 
                name='imagen'
                placeholder='imagen' 
                className='outline-none'/>
            </div>
            <div className='h-10 w-60 rounded-lg flex items-center px-4 my-6
            border-black border-2'>
                <input type="text"
                name='precio' 
                placeholder='precio' 
                className='outline-none'/>
            </div>
            </div>

            <div className='h-10 w-72 rounded-lg flex items-center px-4 my-6
            border-black border-2 md:w-[500px] ml-12 md:ml-0'>
                <input type="text"
                name='descripcion' 
                placeholder='descripcion' 
                className='outline-none'/>
            </div>
        </form>

		</main>
	)
}

export default AddProducts