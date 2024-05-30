"use client";

import { Transition } from "@headlessui/react";import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-notifications/lib/notifications.css';

export default function Home() {
	return (
		<main className="relative flex justify-center items-center bg-gray-50 font-roboto text-base md:text-lg w-full min-h-screen">
			{/* Cover Page */}
			<section className="absolute top-0 left-0 text-white w-full h-screen z-10">
				<div className="w-full h-screen bg-[url('/images/cover_1.jpg')] bg-local bg-origin-padding bg-center bg-no-repeat bg-cover">
					<Transition
						appear={true} show={true}
						enter="transition-all duration-[3000ms] delay-[500ms] ease-in-out" enterFrom="scale-50 opacity-0" enterTo="scale-100 opacity-100"
					>
						<div className="flex flex-col justify-center items-center font-cormorant h-full">
							<p className="font-roboto text-lg md:text-base font-bold uppercase mb-7 md:mb-6">The Wedding of</p>
							<p className="font-greatVibes text-[30px] md:text-[50px] font-normal tracking-wide">Alif & Indah</p>
							<p className="md:text-xl mt-6 mb-[8%]">Sabtu, 29 Juni 2024</p>
						</div>
					</Transition>
				</div>
			</section>
		</main>
	);
}