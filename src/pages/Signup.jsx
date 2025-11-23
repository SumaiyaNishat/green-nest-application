import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const googleProvider = new GoogleAuthProvider();

const Signup = () => {
  const [user, setUser] = useState(null);
  const [passwordError, setPasswordError] = useState("");
  const [passwordShow, passwordSetShow] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name?.value;
    const photoURL = e.target.photoURL?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    console.log("signup function entered", { name, photoURL, email, password });

    if (!/[A-Z]/.test(password)) {
      setPasswordError("Must have an Uppercase letter in the password");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError("Must have a Lowercase letter in the password");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }
    setPasswordError("");

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateProfile(res.user,{
          displayName: name,
          photoURL: photoURL,
        }).then((res) =>{
          console.log(res);
          toast.success("Signup successfully")
        })
        .catch((e) => {
          toast.error(e.message);
        })
        console.log(res);
        toast.success("Signup successful");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const handleGoogleSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res);
        setUser(res.user);
        toast.success("Signup successfully");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-green-100">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register your Account
        </h2>
        <div className="card-body">
          <form onSubmit={handleSignup} className="space-y-2">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />

            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              className="input"
              placeholder="Photo URl"
            />

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

            {passwordError && (
              <p className="text-red-500 text-sm mb-2">{passwordError}</p>
            )}
            <button className="btn btn-neutral mt-4 w-full">Register</button>

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
              Already Have An Account ?{" "}
              <Link className="text-green-600" to="/auth/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
