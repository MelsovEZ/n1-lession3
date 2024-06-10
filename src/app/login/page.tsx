"use client";
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import {useAuth} from "../context/LoginContext";
import axiosInstance from "../utils/axios";
import "../globals.css";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const {setIsAuthenticated} = useAuth();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post("/auth/login", {
                username,
                password,
            });
            localStorage.setItem("authToken", response.data.token);
            setIsAuthenticated(true);
            router.push("/");
        } catch (error) {
            setError("Login failed. Please check your credentials.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <h2 className="text-3xl font-semibold mb-4">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">Username</label>
                        <input type="text" id="username"
                               className="form-input mt-1 p-1 block w-full h-10 rounded-md border-gray-300 shadow-sm"
                               placeholder="Enter your username" value={username}
                               onChange={(e) => setUsername(e.target.value)}
                               required/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input type="password" id="password"
                               className="form-input mt-1 p-1 block w-full h-10 rounded-md border-gray-300 shadow-sm"
                               placeholder="Enter your password" value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               required/>
                    </div>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <button type="submit" className="w-full bg-blue-500 text-white rounded-md py-2">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;