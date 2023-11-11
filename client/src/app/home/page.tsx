"use client";
import Navbar from "../components/Navbar";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import { FiFileText } from "react-icons/fi";
import { bgColors } from "@/utils/utils";

export default function Home() {
	const [classes, setClasses] = useState([]);
	return (
		<>
			<Navbar />
			<main className="flex flex-col items-center w-full h-full">
				<div className="w-full h-full p-5 px-10">
					<p className="text-2xl my-4 mb-7 font-semibold">My classes</p>
					<div className="flex flex-wrap w-full">
						<div className="flex flex-col items-center justify-center w-full h-full">
							<CiCirclePlus className="h-40 w-40 mb-2" />
							<p className="font-semibold text-xl">New Class</p>
						</div>
					</div>
					{classes?.map((class, index) => {
						return (
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
						);
					})}
				</div>
			</main>
		</>
	);
}
