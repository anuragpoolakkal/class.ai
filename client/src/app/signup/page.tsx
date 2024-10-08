"use client";
import serverURL from '@/utils/utils';
import axios from 'axios';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem("token")) {
                // window.location.href = "/chat";
            }
        }
    }, [])

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const signup = async () => {
        const config = {
            method: "POST",
            url: `${serverURL}/users/signup`,
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": `application/json`,
            },
            data: {
                "name": name,
                "email": email,
                "password": password,
            }
        };

        axios(config)
            .then((response) => {
                toast.success("Account created!");
                window.location.href = "/login";
            })
            .catch((error) => {
                toast.error("Something went wrong!");
            });
    }

    return (
        <main className="w-screen h-screen bg-base-100 flex p-2 overflow-hidden">
            <div className='flex flex-col text-white p-10 max-w-[30vw] bg-primary h-full rounded-md'>
                <p className="mb-10">Class.AI</p>
                <p className="text-2xl font-semibold mb-2">
                    Welcome to Class.AI!
                </p>
                <p className="opacity-70">Welcome back! Please login to your account to continue.</p>
            </div>
            <div className="animate-fade-in-bottom flex flex-col w-full h-full ml-2 rounded-md p-10">
                <p className="font-bold text-xl mb-3">Sign Up</p>
                <p className="mb-5">Have an account? <Link href={'/login'}><label htmlFor="createchatbot_modal" className="btn btn-sm">Login</label></Link></p>
                <p className="text-sm mb-1">Full Name</p>
                <input className="input input-bordered mb-5 max-w-xs" placeholder="Full Name" type="text" onChange={(x) => setName(x.target.value)} value={name} />
                <p className="text-sm mb-1">Email</p>
                <input className="input input-bordered mb-5 max-w-xs" placeholder="Email" type="text" onChange={(x) => setEmail(x.target.value)} value={email} />
                <p className="text-sm mb-1">Password</p>
                <input className="input input-bordered mb-5 max-w-xs" placeholder="Password" type="password" onChange={(x) => setPassword(x.target.value)} value={password} />
                <button className="btn btn-primary max-w-xs" onClick={() => signup()}>Create account</button>
            </div>
            <ToastContainer />
        </main>
    )
}