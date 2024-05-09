"use client";

import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import ZoomIn from "../../components/transitions";
import Image from "next/image";

export default function Home() {
	const [openCard, setOpenCard] = useState(false);

	return (
		<main className="relative flex justify-center items-center text-white font-poppins text-sm md:text-base w-screen min-h-screen">
			{/* Cover Page */}
			<section className="absolute top-0 left-0 w-full h-screen z-10">
				<Transition
					show={!openCard}
					leave="transition-all duration-[1500ms] delay-150 ease-in-out" leaveFrom="translate-y-0" leaveTo="-translate-y-full"
				>
					<div className="w-full h-screen bg-[url('/images/home-page.jpg')] bg-local bg-origin-padding bg-center bg-no-repeat bg-cover">
						<ZoomIn duration={3000} delay={500} from="scale-50 opacity-0">
							<div className="flex flex-col justify-center items-center h-full">
								<p className="text-base md:text-lg font-bold uppercase mb-3">The Wedding of</p>
								<p className="text-4xl md:text-5xl font-greatVibes tracking-wide">Alif &nbsp; & &nbsp; XXXX</p>
								<p className="text-xs md:text-sm mt-4 mb-[10%]">Sabtu, 29 Juni 2024</p>
								<p className="text-xs md:text-sm">Kepada Yth.</p>
								<p className="font-bold mt-3">Nama di Undangan</p>

								<ZoomIn duration={1500} delay={4000} from="opacity-0">
									<button className="flex gap-1 justify-center items-baseline bg-none border-white border-2 mt-2 py-2 px-4 hover:bg-white/30 transition-colors duration-150 delay-50 ease-in-out"
										onClick={() => setOpenCard(true)}>
										<FontAwesomeIcon icon={faHouse} className="text-xs md:text-sm" />
										Buka Undangan
									</button>
								</ZoomIn>
							</div>
						</ZoomIn>
					</div>
				</Transition>
			</section>

			{/* Main Page */}
			<section className="flex flex-col w-full min-h-screen overflow-y-scroll z-0">
				<div className="w-full h-screen relative">
					
				</div>
			</section>
		</main>
	);
}
