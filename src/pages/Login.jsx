import React, { useState } from "react";
import { Link } from "react-router";
import { Leaf } from "lucide-react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [user, setUser] = useState(null);
  const [passwordShow, passwordSetShow] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    // console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
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
    signInWithPopup(auth, googleProvider)
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

  const handleLogout = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        toast.success("Logout successfully");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  console.log(user);
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
            {user ? (
              <div className="text-center space-y-3">
                <img
                  src={user?.photoURL || "https://via.placeholder.com//88"}
                  className="h-20 w-20 rounded-full mx-auto"
                  alt=""
                />
                <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                <p className=" ">{user?.email}</p>
                <button onClick={handleLogout} className="btn">
                  Logout
                </button>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-2">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
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
                <div>
                  <Link to="" className="link link-hover">
                    Forgot password?
                  </Link>
                </div>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
