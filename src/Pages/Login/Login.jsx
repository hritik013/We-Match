import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

const Login = () => {
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
    const { logIn, GoogleSignIn } = useContext(AuthContext)
    const toastInfo = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    }
    const [showpass, setShowPass] = useState(false)
    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);
        logIn(email, password)
            .then(res => {
                console.log(res.user)
                toast.success('logged in ', toastInfo)
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                console.log(err.message);
                return toast.error('Password or Email does not match please recheck', toastInfo)
            })
    }
    const handleGoogleLogin = () => {
        GoogleSignIn()
            .then(() => {
                toast.success('logged in ', toastInfo)
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                console.log(err)
                return toast.error(err.message, toastInfo)
            })

    }
    return (
        <div className="" >
            <div className="flex w-full flex-col justify-center min-h-[600px] items-center bg-white">
                <div className="border w-4/5 lg:w-1/3 py-8 lg:py-16 rounded ">
                    <h1 className="text-3xl font-semibold px-8 text-rose-400">Login to Continue</h1>
                    <form onSubmit={handleLogin}>
                        <div className="p-8 space-y-8 w-full">

                            <div className="border-b-2 border-gray-700">
                                <input className=" rounded  w-full border-none outline-none py-2 px-4" placeholder="Email" type="email" name="email" id="email" />
                            </div>
                            <div className=" w-full border-b-2 relative border-gray-700">
                                <input className="rounded w-full border-none outline-none py-2 pl-4 pr-8"
                                    type={showpass ? 'text' : 'password'} placeholder="password" name="password" id="password" />
                                <span onClick={() => setShowPass(!showpass)}
                                    className="absolute right-4 bottom-2 text-lg"> {showpass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />} </span>

                            </div>
                            <button type="submit" className="btn btn-error hover:bg-red-500 hover:text-white w-full">Login </button>
                        </div>
                        <p className="text-center">Dont have an account? <Link className="text-rose-500 font-semibold" to={'/register'}>Register here </Link></p>
                    </form>

                </div>
                <div className="flex flex-col gap-4 mt-6 justify-center items-center">
                    <div className="flex items-center gap-1">
                        <div className="border bg-slate-500 h-0.5 w-32"></div> <p>OR</p> <div className="border h-0.5 w-32 bg-slate-500"></div>
                    </div>
                    <button className="btn rounded-full btn-outline btn-error " onClick={handleGoogleLogin}> <FcGoogle />Login with Google </button>
                </div>
            </div>
        </div>
    );
};

export default Login;