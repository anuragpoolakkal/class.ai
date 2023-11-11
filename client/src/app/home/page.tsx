"use client";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { bgColors, proficiencyLevels } from "@/utils/utils";

export default function Home() {
	const [classes, setClasses] = useState([]);
	const [prompt, setPrompt] = useState("");
	const [proLevel, setProLevel] = useState(0);

	const router = useRouter();

	return (
		<>
			<Navbar />
			<main className="flex flex-col items-center w-full h-full">
				<div className="w-full h-full p-5 px-10">
					<p className="text-2xl my-4 mb-7 font-semibold">My classes</p>
					<div className="flex flex-wrap w-full">
						<div
							onClick={() => (document.getElementById("new_class_modal") as any).showModal()}
							className="hover:shadow-2xl duration-100 cursor-pointer border-2 flex flex-col min-h-[400px] min-w-[350px] mb-10 mr-10 rounded-3xl shadow-lg overflow-hidden"
						>
							<div className="flex flex-col items-center justify-center w-full h-full">
								<CiCirclePlus className="h-40 w-40 mb-2" />
								<p className="font-semibold text-xl">New Form</p>
							</div>
						</div>
					</div>
					{/* {classes?.map((class, index) => {
						return 
							<section
								key={index}
								translate="translateY(10px)"
								duration={(index * 0.075 + 0.5).toString() + "s"}
							>
								<div
									onClick={() => (window.location.href = "/editor/" + class?.data?.id)}
									className="hover:shadow-2xl duration-100 cursor-pointer border-2 flex flex-col h-full w-full mb-10 mr-10 rounded-3xl shadow-lg overflow-hidden"
								>
									<div
										style={{
											background: `linear-gradient(45deg, ${
												bgColors[class?.data?.title.toString().toLowerCase()[0]][0]
											}, ${bgColors[class?.data?.title.toString().toLowerCase()[0]][1]})`,
										}}
										className={"flex items-center justify-center w-full h-full opacity-50"}
									>
										<FiFileText
											style={{
												color: bgColors[class?.data?.title.toString().toLowerCase()[0]][1],
											}}
											className={"h-40 w-40 mb-2"}
										/>
									</div>
									<div className="p-5 h-auto">
										<p className="font-semibold text-lg">{class?.data?.title}</p>
										<p className="text-gray-500">No responses</p>
									</div>
								</div>
							</section>
						
					})} */}
				</div>
			</main>
			{/* Modals */}
			{/* New Class modal */}
			<dialog id="new_class_modal" className="modal">
				<div className="modal-box max-w-xl">
					<h3 className="flex items-center font-bold text-2xl">
						<FiPlusCircle className="mr-2" /> Create class
					</h3>
					<textarea value={prompt}
						onChange={(x) => setPrompt(x.target.value)}
						placeholder="Tell us about your class..."
						className="my-5 textarea textarea-bordered textarea-lg min-h-[250px] w-full max-w-3xl"
					></textarea>
					<h3 className="my-5 font-bold">Proficiency level</h3>
					<div className="row" style={{ marginBottom: "50px" }}>
						<input
							type="range"
							value={proLevel}
							min={0}
							max="4"
							className="range"
							step="0"
							onChange={(e) => setProLevel(parseInt(e.target.value))}
						/>
						<div className="w-full flex justify-between text-xs px-2">
							<span>{proficiencyLevels[0]}</span>
							<span>|</span>
							<span>|</span>
							<span>|</span>
							<span>{proficiencyLevels[4]}</span>
						</div>
					</div>
					<button className="btn w-full btn-primary" onClick={() => router.push("/class/[classId]")}>
						Create
					</button>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
			{/* New Class modal end */}
		</>
	);
}
