import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAuth from '../hooks/useAuth';

const Register = () => {
    const {createUser} = useAuth()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const {name,email,photo,password} = data;
        createUser(email,password)
        .then(result => {
            console.log(result.user);
            toast.success('Registered Successfully!')
        })
        .catch(error=>{
            console.error(error)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form 
                    onSubmit={handleSubmit(onSubmit)}
                    className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input 
                            {...register("name", { required: true })}
                            type="text" placeholder="your name" className="input input-bordered" required />
                            {errors.name && <span>This field is required</span>}
                        </div>
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
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input 
                            {...register("photo", { required: true })}
                            type="text" placeholder="photo URL" className="input input-bordered" required />
                            {errors.photo && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                            {...register("password", { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z]).+$/ })}
                            type="password" placeholder="password" className="input input-bordered" required />
                            {errors.password && <span role="alert" className="text-red-500">
                                {errors.password.type === "required" && "This field is required"}
                                {errors.password.type === "minLength" && "Password must be at least 6 characters"}
                                {errors.password.type === "pattern" && "Password must contain an uppercase and a lowercase"}
                            </span>}
                        </div>
                        <p>Already have an account? <Link className='link text-blue-600' to='/login'>Login</Link></p>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#228B22] text-white">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;