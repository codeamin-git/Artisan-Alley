import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const Login = () => {
    const {signInUser} = useAuth()

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = data => {
        const {email, password} = data
        signInUser(email, password)
        .then(result => {
            toast.success('Logged in successfully')
            console.log(result.user);
            if (result.user) {
                navigate(from)
            }
        })
        .catch(error => {
            console.error(error)
            toast.error('Email or Password did not match!')
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form 
                    onSubmit={handleSubmit(onSubmit)}
                    className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                            {...register("email", { required: true })}
                            type="email" placeholder="your email" className="input input-bordered" required />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                            {...register("password", { required: true })}
                            type="password" placeholder="password" className="input input-bordered" required />
                            {errors.password && <span>This field is required</span>}
                        </div>
                        <p>Already have an account? <Link className='link text-blue-600' to='/register'>Register</Link></p>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#228B22] text-white">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;