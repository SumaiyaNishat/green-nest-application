import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router";
import { Leaf } from "lucide-react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [passwordShow, passwordSetShow] = useState(false);
  const {
    signInWithEmailAndPasswordFunc,
    signInWithEmailFunc,
    signoutUserFunc,
    sendPasswordResetEmailFunc,
    user,
    setUser,
  } = useContext(AuthContext);

  const emailRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        console.log(res);
        setUser(res.user);
        toast.success("Login successfully");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  const handleGoogleSignin = () => {
    signInWithEmailFunc()
      .then((res) => {
        console.log(res);
        setUser(res.user);
        toast.success("Login successfully");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  const handleForgetPassword = () => {
    console.log();
    const email = emailRef.current.value;
    sendPasswordResetEmailFunc(email).then((res) => {
      toast.success("check your email to reset password");
    });
  };

  return (
    <div>
      <title>Login</title>
      <div className="flex justify-center gap-5 min-h-screen items-center bg-green-100">
        <div className="hidden lg:flex w-1/2  items-center justify-center">
          <div className="max-w-md text-center px-8">
            <Leaf className="w-20 h-20 text-green-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-green-800 mb-3">
              Welcome back to GreenNest
            </h1>
            <p className="text-green-700 font-semibold">
              Grow with nature — nurture your indoor plants and bring life to
              your home...
            </p>
          </div>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className="font-semibold text-2xl text-center">
            Login your Account
          </h2>
          <div className="card-body">
            <form onSubmit={handleLogin} className="space-y-2">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                className="input"
                placeholder="Email"
              />

              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={passwordShow ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="******"
                />

                <span
                  onClick={() => passwordSetShow(!passwordShow)}
                  className="absolute right-[25px] top-[35px]  text-gray-800 cursor-pointer z-50"
                >
                  {passwordShow ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              <button
                type="button"
                className="hover:underline cursor-pointer"
                onClick={handleForgetPassword}
              >
                Forgot password?
              </button>

              <button className="btn btn-neutral mt-4 w-full">Login</button>

              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-16 bg-black/30"></div>
                <span className="text-sm text-black/70">or</span>
                <div className="h-px w-16 bg-black/30"></div>
              </div>

              {/* Google Signin */}
              <button
                type="button"
                onClick={handleGoogleSignin}
                className="flex items-center justify-center gap-3 bg-gray-200 text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-300 transition-colors cursor-pointer"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

              <p className="font-semibold text-center pt-5">
                Don't Have An Account ?{" "}
                <Link className="text-green-600" to="/auth/signup">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
