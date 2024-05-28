"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import FirstSection, { EighthSection, FifthSection, ForthSection, NinthSection, SecondSection, SeventhSection, SixthSection, ThirdSection } from "../components/sections";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from "react-notifications";

export default function User({params}) {
	const [openCard, setOpenCard] = useState(false);
	const [user, setUser] = useState({});

	useState(() => {
		fetch('http://localhost:3000/api/user?user='+params.slug, {method: 'GET'})
			.then((res) => {
				if (res.status == 200) {
					return res.json();
				} else {
					console.log('Error: '+res.json());
				}
			}).then((data) => {
				setUser(JSON.parse(data.data));
			});
	}, []);

	return (
		<main className="relative flex justify-center items-center bg-gray-50 font-roboto text-base md:text-lg w-full min-h-screen">
			{/* Cover Page */}
			<section className="absolute top-0 left-0 text-white w-full h-screen z-10">
				<Transition
					show={!openCard}
					leave="transition-all duration-[1500ms] delay-150 ease-in-out" leaveFrom="translate-y-0" leaveTo="-translate-y-full"
				>
					<div className="w-full h-screen bg-[url('/images/home-page.jpg')] bg-local bg-origin-padding bg-center bg-no-repeat bg-cover">
						<Transition
							appear={true} show={true}
							enter="transition-all duration-[3000ms] delay-[500ms] ease-in-out" enterFrom="scale-50 opacity-0" enterTo="scale-100 opacity-100"
						>
							<div className="flex flex-col justify-center items-center font-cormorant h-full">
								<p className="font-roboto text-lg md:text-base font-bold uppercase mb-7 md:mb-6">The Wedding of</p>
								<p className="font-greatVibes text-[30px] md:text-[50px] font-normal tracking-wide">Alif & Indah</p>
								<p className="md:text-lg mt-6 mb-[75%] md:mb-[8%]">Sabtu, 29 Juni 2024</p>
								<p className="">Kepada Yth.</p>
								<p className="font-bold mt-3">{user.name}{user.partner && ' & '+user.partner}</p>

								<button className="flex gap-1 justify-center items-baseline bg-none font-semibold border-white border-2 mt-2 py-2 px-6 hover:bg-white/30 transition-colors duration-150 delay-50 ease-in-out"
									onClick={() => setOpenCard(true)}>
									<FontAwesomeIcon icon={faEnvelopeOpen} className="text-sm md:text-base" />
									Buka Undangan
								</button>
							</div>
						</Transition>
					</div>
				</Transition>
			</section>

			{/* Main Page */}
			{openCard &&
				<section className="flex flex-col w-full min-h-screen z-0">
					<FirstSection />
					<SecondSection />
					<ThirdSection />
					<ForthSection />
					<FifthSection />
					<SixthSection />
					<SeventhSection />
					<EighthSection name={user.name} userId={user.id} />
					<NinthSection />	
				</section>
			}

			<div className="fixed bottom-0 left-0">
				<NotificationContainer />
			</div>
		</main>
	);
}