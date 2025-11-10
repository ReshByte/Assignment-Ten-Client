import React, { useState, use } from "react";
import { Link, useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa6";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

const Registration = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const displayName = event.target.displayName.value;
    const photoURL = event.target.photoURL.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain uppercase, lowercase letters and minimum 6 characters."
      );
      return;
    } else {
      setPasswordError("");
    }

    toast.loading("Creating user...", { id: "create-user" });

    createUser(email, password)
      .then((result) => {
        addUserTodb({ ...result.user, displayName, photoURL });
        updateUserProfile(displayName, photoURL);
        toast.success("User created successfully!", { id: "create-user" });
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message, { id: "create-user" });
      });
  };

  const handleGoogleSignIn = () => {
    toast.loading("Creating user...", { id: "create-user" });
    signInWithGoogle()
      .then((result) => {
        toast.success("User created successfully!", { id: "create-user" });
        addUserTodb(result.user);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message || error.error, { id: "create-user" });
      });
  };

  const addUserTodb = async (user) => {
    const userData = {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      email: user.email,
    };
    try {
      const res = await fetch("https://m10-cs.vercel.app/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card bg-base-100 border border-gray-200 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Register</h1>
        <form onSubmit={handleRegister}>
          <label className="label">Name</label>
          <input
            type="text"
            name="displayName"
            className="input rounded-full focus:border-0 focus:outline-gray-200"
            placeholder="Name"
          />
          <label className="label">PhotoURL</label>
          <input
            type="text"
            name="photoURL"
            className="input rounded-full focus:border-0 focus:outline-gray-200"
            placeholder="Photo URL"
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input rounded-full focus:border-0 focus:outline-gray-200"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input rounded-full focus:border-0 focus:outline-gray-200"
            placeholder="Password"
          />
          {passwordError && (
            <p className="text-red-500 mt-1 text-sm">{passwordError}</p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn text-white mt-4 rounded-full bg-linear-to-r from-pink-500 to-red-600">
            Register
          </button>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white rounded-full text-black border-[#e5e5e5] mt-3 flex items-center justify-center gap-2"
        >
          <FaGoogle />
          Login with Google
        </button>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link className="text-blue-500 hover:text-blue-800" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
