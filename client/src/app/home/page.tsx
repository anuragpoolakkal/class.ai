"use client";
import Navbar from "../components/Navbar";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="flex flex-col items-center w-full h-full">
				<div className="w-full h-full p-5 px-10">
					<p className="text-2xl my-4 mb-7 font-semibold">My classes</p>
					<div className="flex flex-wrap w-full">
						<div
							onClick={() => document.getElementById("my_modal_1").showModal()}
							className="hover:shadow-2xl duration-100 cursor-pointer border-2 flex flex-col min-h-[400px] min-w-[350px] mb-10 mr-10 rounded-3xl shadow-lg overflow-hidden"
						>
							<div className="flex flex-col items-center justify-center w-full h-full">
								<CiCirclePlus className="h-40 w-40 mb-2" />
								<p className="font-semibold text-xl">New Form</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
