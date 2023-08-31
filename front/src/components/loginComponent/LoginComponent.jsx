import { useState } from "react";
import validate from "./validate";

const LoginComponent = () => {

  const [inputs, setInputs]= useState({ 
    email: "",
    password: "",
  })

  const [error, setErrors] = useState({})

  const handleInputs = (event)=> {
    setInputs({
      ...inputs,
      [event.target.name] : event.target.value
    })
    setErrors(validate({
      ...inputs,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center items-center py-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
        Login
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
        <form className="space-y-6 sm:w-full w-screen px-10" action="#" method="POST">
          <div className="h-[80px]">
            <label htmlFor="email" className="block text-sm sm:text-base font-semibold leading-6 text-gray-900">
              Correo electrónico
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="rounded-xl block w-full border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:duration-300 focus:ring-gray-800 sm:text-sm sm:leading-6"
                value={inputs.email}
                onChange={(event)=>handleInputs(event)}
              />
              {error.email && <span className="text-red-400 text-sm font-medium">{error.email}</span>}
            </div>
          </div>

          <div className="h-[80px]">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm sm:text-base font-semibold leading-6 text-gray-900">
                Contraseña
              </label>
              <div className="text-xs">
                <a href="#" className="font-semibold text-gray-500 hover:text-gray-700 duration-200">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="rounded-xl block w-full border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:duration-300 focus:ring-gray-800 sm:text-sm sm:leading-6"
                value={inputs.password}
                onChange={(event)=>handleInputs(event)}
              />
              {error.password && <span className="text-red-400 text-sm font-medium">{error.password}</span>}
            </div>
          </div>

          <div className="pt-5">
            <button
              type="submit"
              className="rounded-xl flex w-full justify-center bg-gray-900 px-3 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
            >
              Ingresar
            </button>
          </div>

          <div>
            <p className="flex justify-center items-center gap-2 rounded-xl text-base font-semibold hover:bg-gray-200  cursor-pointer py-2 text-gray-900">
              Ingresar con <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1693401481/Google_gt8wpe.webp" alt="Google" className="w-16"/>
            </p>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default LoginComponent