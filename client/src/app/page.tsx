"use client";
import { useRouter } from "next/navigation";
export default function Home() {
	const router = useRouter();

	return (
		<main className="flex items-center w-[100vw] h-[100vh] overflow-hidden bg-gradient-to-tr from-[#dcd4ff] to-[#bdaeff]">
			<div className="backdrop-filter backdrop-blur-lg">
				<div className="flex">
					<h1 className="ml-20 relative text-black text-9xl font-bold">Class.AI</h1>
				</div>
				<p className="text-black mt-5 text-3xl ml-20">AI-Powered Educational Content Generator</p>
				<button className="btn btn-primary btn-lg ml-20 mt-10" onClick={() => router.push("/login")}>
					Log In
				</button>
			</div>
		</main>
	);
}
