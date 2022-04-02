import React from "react";

function SignIn() {
  return (
    <div className="flex flex-col bg-blue-400 h-screen">
      <h1 className="mx-auto p-5 border-2 border-black shadow-lg shadow-black text-4xl bg-white w-fit mt-10 ">Carver.Codes Admin Login Page</h1>
      <form className="my-auto mx-auto py-5 bg-white sm:w-2/4 sm:h-2/4 flex flex-col border-2 border-black shadow-xl shadow-black">
        <div className="my-auto flex flex-col">
          <label className="text-center text-4xl" htmlFor="username">
            Username
          </label>
          <input
            className=" text-2xl border-4 border-black w-2/4 mx-auto"
            id="username"
            name="username"
          />
          <label className="text-center text-4xl mt-5" htmlFor="password">
            Password
          </label>
          <input
            className="text-2xl border-4 border-black w-2/4 mx-auto"
            id="password"
            name="password"
            type="password"
          />
          <button
            className="text-2xl border-2 border-black bg-blue-400 w-fit mx-auto mt-5 p-5 rounded"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
