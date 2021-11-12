/* eslint-disable @next/next/link-passhref */
import axios from "axios";
import Router from "next/router";
import React, { useState } from "react";
import { mainAPIURL } from "../config/api";
export default function Login() {
  const [formData, setFormData] = useState({
    user: {
      username: "",
      password: "",
    },
  });
  const submitUser = () => {
    if (formData.user.username == "") {
      alert("please fill your name");
    } else if (formData.user.password == "") {
      alert("please fill your password");
    } else {
      axios
        .post(mainAPIURL + "/api-token-auth", {
          username: formData.user.username,
          password: formData.user.password,
        })
        .then(
          (response) => {
            window.localStorage.setItem(
              "userToken",
              JSON.stringify(response.data.token)
            );
            Router.push({
              pathname: "/dashboard",
            });
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };
  const handleChange = (e) => {
    setFormData({
      user: {
        ...formData.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <figure className="h-screen flex bg-gray-100">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
        <blockquote className="text-2xl font-medium text-center">
          <p className="text-lg font-semibold">Welcome to Crew</p>
        </blockquote>
        <div className="text-primary m-6">
          <div className="flex items-center mt-3 justify-center">
            <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
              Login to your account
            </h1>
          </div>
          <div>
            <label className="text-left">Username:</label>
            <input
              name="username"
              type="text"
              value={formData.user.username}
              onChange={handleChange}
              placeholder="Username"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <label>Password:</label>
            <input
              name="password"
              type="password"
              value={formData.user.password}
              onChange={handleChange}
              placeholder="Password"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <div className="flex items-center mt-3 justify-center">
              <button
                id="submit"
                className={
                  "bg-blue-700 hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
                }
                value="Login"
                onClick={submitUser}
              >
                Login
              </button>
            </div>
          </div>
          <div className="flex items-center mt-3 justify-center">
            <button className={"justify-center text-blue-500 hover:underline"}>
              Need to register? Sign up for free
            </button>
          </div>
        </div>
      </div>
    </figure>
  );
}
