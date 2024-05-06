import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const SignUp = () => {

    
    const {createUser}=useContext(AuthContext);

    const handleSignUp = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);

        createUser(email,password)
        .then(result=>{
            const user =result.user;
            console.log(user);
        })
        .catch(error =>console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center pt-10 font-bold">SignUp</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="SignUp" />
                        </div>
                        <p className="text-center">Have an account Please <Link className="text-orange-500" to="/login"> Log In</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;