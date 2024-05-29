import { faClock } from "@fortawesome/free-regular-svg-icons";
import { Transition, TransitionChild } from "@headlessui/react";
import Image from "next/image";
import { useCallback, useState } from "react";
const { faChevronRight, faChevronLeft, faHeart, faXmark } = require("@fortawesome/free-solid-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");
import { NotificationManager } from "react-notifications";
import { OnVisible } from "./transitions";
import moment from 'moment';
import Slider from "react-slick";

import {
	TransformWrapper,
	TransformComponent,
	useControls,
  } from "react-zoom-pan-pinch";

export function CustomRightArrow(props) {
	const { className, style, onClick } = props;

	return <button onClick={() => onClick()} className="absolute right-5 top-[45%] z-50">
		<FontAwesomeIcon icon={faChevronRight} className="text-2xl text-white opacity-80" />
	</button>;
};

export function CustomLeftArrow(props) {
	const { className, style, onClick } = props;

	return <button onClick={() => onClick()} className="absolute left-5 top-[45%] z-50">
		<FontAwesomeIcon icon={faChevronLeft} className="text-2xl text-white opacity-80" />
	</button>;
};

export function ImageForChangingImages({className="w-full h-full", src="", alt="", objectPosition="center"}) {
	return (
		<div className={className}>
			<Image src={`/images/${src}`} alt={alt} fill={true} objectFit="cover" objectPosition={objectPosition} priority={true} />
		</div>
	);
}

export function ZoomControl() {
	const { zoomIn, zoomOut, resetTransform } = useControls();

	return (
		<div className="flex space-x-2 w-full justify-center">
			<button onClick={() => zoomIn()}>+</button>
			<button onClick={() => zoomOut()}>-</button>
			<button onClick={() => resetTransform()}>x</button>
		</div>
	)
}

export function Gallery() {
	const [currImg, setCurrImg] = useState(0);

	return (
		<div className="flex flex-col space-y-[5px] bg-[#D2D2D2] w-full p-[10px] md:py-[6%]">
			<OnVisible>
				<TransitionChild enter="transition-all duration-[3000ms] delay-[100ms] ease-in-out" enterFrom="opacity-0 translate-y-24" enterTo="opacity-100 translate-y-0">
					<div className="w-full">
						<p className="font-greatVibes text-[#585858] text-[28px] md:text-[70px] leading-[1.1em] md:leading-none tracking-[5.1px] md:tracking-[3px] text-center font-light my-[5%]">Gallery</p>
					</div>
				</TransitionChild>
			</OnVisible>

			<OnVisible>
				<TransitionChild enter="transition-all duration-[3000ms] delay-[100ms] ease-in-out" enterFrom="opacity-0" enterTo="opacity-100">
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mx-[5%] md:mx-[7%]">
						{[1,2,3,4,5,6].map((i) => {
							return (
								<button key={i} type="button" className="aspect-[2/3] relative overflow-hidden"
									onClick={() => setCurrImg(i)}>
									<Image key={i} src={`/images/gallery_${i}.jpg`} alt={`gallery_${i}.jpg`} fill={true} objectFit="cover" objectPosition="center" priority={true} />
								</button>
							)
						})}
					</div>
				</TransitionChild>
			</OnVisible>

			<Transition show={currImg !== 0}
				enter="transition-all duration-[1000ms] delay-[100ms] ease-in-out" enterFrom="scale-0 opacity-0" enterTo="scale-100 opacity-100"
				leave="transition-all duration-[1000ms] delay-[100ms] ease-in-out" leaveFrom="scale-100 opacity-100" leaveTo="scale-0 opacity-0"
			>
				<div className="fixed -top-1 left-0 z-50 w-screen max-w-screen h-screen max-h-screen">
					<div className="relative flex flex-col bg-black/75 w-full h-full">
						<div className="absolute top-0 right-0 z-[60] flex justify-end items-center space-x-2 md:space-x-4 w-auto px-5 md:px-10 py-3 md:py-6">
							<button onClick={() => setCurrImg(0)}>
								<FontAwesomeIcon icon={faXmark} className="text-white text-lg md:text-2xl md:font-bold" />
							</button>
						</div>
						<div className="pr-1.5 md:pr-4">
							<Slider
								initialSlide={currImg-1}
								infinite={true}
								lazyLoad="anticipated"
								easing="in-out"
								slidesToShow={1}
								speed={1000}
								prevArrow={<CustomLeftArrow />}
								nextArrow={<CustomRightArrow />}
							>
								{[1,2,3,4,5,6].map((i) => {
									return (
										<div key={i} className="w-full h-screen p-3 md:p-6">
											<div className="relative flex justify-center items-center w-full h-full mx-auto">
												<TransformWrapper
													initialScale={window.outerWidth >= 484 ? 0.4 : 1}
													minScale={window.outerWidth >= 484 ? 0.4 : 1}
													maxScale={2}
													centerOnInit={true}
												>
													<TransformComponent wrapperClass="max-h-full">
														<img src={`/images/gallery_${i}.jpg`} alt={`gallery_${i}.jpg`} 
															className="transition-transform duration-300 ease-in-out" />
													</TransformComponent>
												</TransformWrapper>
											</div>
										</div>
									);
								})}
							</Slider>
						</div>
					</div>
				</div>
			</Transition>
		</div>
	)
}

export function AttendanceConfirmation({name, userId}) {
	const [formData, setFormData] = useState({
		name: name,
		attendance: null,
		numberOfPeople: null,
	});

	useState(() => {
		fetch('http://localhost:3000/api/attendance?userId='+userId, {method: 'GET'})
			.then((res) => {
				if (res.status == 200) {
					return res.json();
				} else {
					console.log('Error: '+res.json());
				}
			}).then((data) => {
				const attendance = JSON.parse(data.data);
				setFormData({
					name: name,
					attendance: attendance.attendance == '1' ? 'true' : 'false',
					numberOfPeople: attendance.number_of_people
				});
			});
	}, []);

	const handleInput = useCallback((event) => {
		const fieldName = event.target.name;
		const fieldValue = event.target.value;

		setFormData((prevState) => ({
			...prevState,
			[fieldName]: fieldValue
		}));
	},[]);

	const handleSubmit = useCallback(() => {
		if (formData.attendance === null) {NotificationManager.error('Kehadiran harus diisi!',''); return;}
		if (formData.attendance == 'true' && formData.numberOfPeople === null) {NotificationManager.error('Jumlah orang harus diisi!',''); return;}

		fetch('http://localhost:3000/api/attendance', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				userId: userId,
				attendance: formData.attendance == 'true' ? 1 : 0,
				numberOfPeople: formData.numberOfPeople
		})}).then((res) => {
				return res.json();
			}).then((data) => {
				if (data.msg.includes('Berhasil')) {
					NotificationManager.success(data.msg);
				} else {
					NotificationManager.error(data.msg);
				}
			});
	}, [formData]);

	return (
		<OnVisible className="w-full mx-auto">
			<TransitionChild enter="transition-all duration-[3000ms] delay-[100ms] ease-in-out" enterFrom="opacity-0 translate-y-24" enterTo="opacity-100 translate-y-0">
				<div className="flex flex-col space-y-5 font-cormorant w-full max-w-lg mx-auto pb-5">
					<div className="flex flex-col space-y-[5px] md:space-y-[10px]">
						<label htmlFor="name">Nama<span className="text-red-600 ml-1">*</span></label>
						<input type="text" name="name" className={`${formData.name === "" ? 'bg-stone-100' : 'bg-white'} font-light text-[#606266] border border-[#B5B5B5] rounded-lg md:rounded-xl px-4 py-2
							focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-0
							transition-color ease-in-out duration-200 delay-50`} placeholder="Nama" value={formData.name} onChange={handleInput} disabled />
					</div>
					<div className="flex flex-col space-y-[5px] md:space-y-[10px]">
						<label htmlFor="attendance">Konfirmasi Kehadiran<span className="text-red-600 ml-1">*</span></label>
						<select name="attendance" className={`${formData.attendance === null ? 'bg-stone-100' : 'bg-white'} font-light text-[#606266] border border-[#B5B5B5] rounded-lg md:rounded-xl px-4 py-2
							focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-0
							transition-color ease-in-out duration-200 delay-50`} value={formData.attendance} onChange={handleInput}>
								<option disabled selected hidden>Kehadiran</option>
								<option value={true}>Hadir</option>
								<option value={false}>Tidak Hadir</option>
						</select>
					</div>
					<div className={`flex flex-col space-y-[5px] md:space-y-[10px]
						${formData.attendance != 'true' ? 'opacity-0' : 'opacity-100'} transition ease-in-out duration-300 delay-100`}>
						<label htmlFor="numberOfPeople">Jumlah<span className="text-red-600 ml-1">*</span></label>
						<select name="numberOfPeople" className={`${formData.numberOfPeople === null ? 'bg-stone-100' : 'bg-white'} font-light text-[#606266] border border-[#B5B5B5] rounded-lg md:rounded-xl px-4 py-2
							focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-0
							transition-color ease-in-out duration-200 delay-50`} value={formData.numberOfPeople} onChange={handleInput}
							disabled={formData.attendance != 'true'}>
								<option disabled selected hidden>Jumlah</option>
								<option value={1}>1 Orang</option>
								<option value={2}>2 Orang</option>
						</select>
					</div>
					<button className="bg-[#A6A6A6] text-white font-bold shadow-xl rounded-lg w-max mx-auto px-6 py-3"
						onClick={handleSubmit}>Submit Form</button>
				</div>
			</TransitionChild>
		</OnVisible>
	)
}

export function Messages() {
	const [formData, setFormData] = useState({
		name: "",
		message: "",
	});

	const [messages, setMessages] = useState([]);

	const refetch = useCallback(() => {
		fetch('http://localhost:3000/api/message', {method: 'GET'})
			.then((res) => {
				if (res.status == 200) {
					return res.json();
				} else {
					console.log('Error: '+res.json());
				}
			}).then((data) => {
				const messages = JSON.parse(data.data);
				setMessages(messages);
			});
	});

	useState(() => {
		refetch();
	}, []);

	const handleInput = useCallback((event) => {
		const fieldName = event.target.name;
		const fieldValue = event.target.value;

		setFormData((prevState) => ({
			...prevState,
			[fieldName]: fieldValue
		}));
	},[]);

	const handleSubmit = useCallback(() => {
		if (formData.name === "") {NotificationManager.error('Nama harus diisi!',''); return;}
		if (formData.message === "") {NotificationManager.error('Pesan harus diisi!',''); return;}

		fetch('http://localhost:3000/api/message', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: formData.name,
				message: formData.message,
		})}).then((res) => {
				return res.json();
			}).then((data) => {
				if (data.msg.includes('berhasil')) {
					setFormData({
						name: "",
						message: "",
					});
			
					refetch();

					NotificationManager.success(data.msg);
				} else {
					NotificationManager.error(data.msg);
				}
			});
	}, [formData]);

	return (
		<OnVisible className="w-full mx-auto">
			<TransitionChild enter="transition-all duration-[3000ms] delay-[100ms] ease-in-out" enterFrom="opacity-0 translate-y-24" enterTo="opacity-100 translate-y-0">
				<div className="flex flex-col border-[1.5px] border-stone-300 rounded-xl md:rounded-3xl w-full max-w-md mx-auto mb-[5%] md:mb-[10%] py-4 md:py-8">
					<div className="flex flex-col space-y-5 border-b-[1.5px] border-b-stone-300 px-4 md:px-8 pb-4 md:pb-6">
						<input type="text" name="name" className="bg-white text-sm md:text-base font-light text-[#606266] border border-stone-100 rounded-lg md:rounded-xl px-4 py-2
							focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-0
							transition-color ease-in-out duration-200 delay-50" placeholder="Nama" value={formData.name} onChange={handleInput} />
						<textarea type="text" name="message" className="bg-white text-sm md:text-base font-light text-[#606266] border border-stone-100 rounded-lg md:rounded-xl max-h-24 px-4 py-2
							focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-0
							transition-color ease-in-out duration-200 delay-50"
							placeholder="Pesan" value={formData.message} onChange={handleInput} />
						<button className="bg-amber-700 text-white text-sm md:text-base font-bold rounded-md md:rounded-lg w-max px-4 md:px-6 py-1.5 md:py-2"
							onClick={() => handleSubmit()}>
							Send
						</button>
					</div>
					<div className="flex flex-col max-h-80 overflow-y-auto">
						{messages.map((message) => {
							return (
								<div key={message.id} className="border-b-[1.5px] border-b-stone-300 px-5 md:px-10 pt-4 md:pt-6 pb-2 md:pb-3">
									<div className="flex items-start space-x-2 md:space-x-4">
										<div className="grid place-items-center bg-red-500 text-white rounded-full w-4 md:w-8 aspect-square mt-1 md:mt-2">
											<FontAwesomeIcon icon={faHeart} className="text-[10px] md:text-xl leading-none" />
										</div>
										<div className="flex flex-col grow text-xs md:text-sm lg:text-base">
											<p className="text-amber-700 font-bold leading-none">{message.name}</p>
											<p className="text-gray-500 leading-none mt-1 md:mt-2 mb-0.5 md:mb-1">{message.message}</p>
											<p className="text-blue-600 text-[10px] md:text-xs lg:text-sm font-light">
												<FontAwesomeIcon icon={faClock} className="mr-0.5" />
												{moment(message.created_at).fromNow()}
											</p>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</TransitionChild>
		</OnVisible>
	)
}