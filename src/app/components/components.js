import { faClock } from "@fortawesome/free-regular-svg-icons";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
const { faChevronRight, faChevronLeft, faXmark, faMagnifyingGlassMinus, faMagnifyingGlassPlus, faHeart } = require("@fortawesome/free-solid-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");
import ImgsViewer from "react-images-viewer";
import { NotificationManager } from "react-notifications";
import Slider from "react-slick";
import { OnVisible } from "./transitions";

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

export function ImageForChangingImages({className="w-full h-full", src="", alt=""}) {
	return (
		<div className={className}>
			<Image src={`/images/${src}`} alt={alt} fill={true} objectFit="cover" objectPosition="center" />
		</div>
	);
}

export function Gallery() {
	const maxImg = useRef(6);
	const [isOpen, setIsOpen] = useState(false);
	const [currImg, setCurrImg] = useState(0);
	const [zoomImage, setZoomImage] = useState(false);

	const openViewer = useCallback((num) => {
		if (num > maxImg.current) num = 0;
		if (num < 0) num = maxImg.current;
		setCurrImg(num);

		setIsOpen(true);
	}, []);

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
									onClick={() => openViewer(i)}>
									<Image key={i} src={`/images/${i}.jpg`} alt={`${i}.jpg`} fill={true} objectFit="cover" objectPosition="center" />
								</button>
							)
						})}
					</div>
				</TransitionChild>
			</OnVisible>

			<Dialog open={isOpen} onClose={() => setIsOpen(false)} className='relative z-50 transition'>
				<div className="fixed inset-0 flex justify-center items-center w-screen h-screen">
					<DialogPanel className="backdrop-blur-sm bg-black/80 w-full h-full p-3 md:p-5">
						{/* <div className="flex items-center h-full z-40">
							<button onClick={() => openViewer(currImg-1)}>
								<FontAwesomeIcon icon={faChevronLeft} className="text-xl md:text-3xl text-white drop-shadow-lg" />
							</button>
						</div>
						<div className="flex flex-col space-y-2 md:space-y-4 grow md:grow-0 md:w-3/4 lg:w-1/2 h-full">
							<div className="flex justify-end space-x-2 md:space-x-4 w-full z-40">
								<button onClick={() => setZoomImage(zoom => !zoom)}>
									<FontAwesomeIcon icon={zoomImage ? faMagnifyingGlassMinus : faMagnifyingGlassPlus} className="text-xl md:text-2xl text-white drop-shadow-md" />
								</button>
								<button onClick={() => setIsOpen(false)}>
									<FontAwesomeIcon icon={faXmark} className="text-xl md:text-2xl text-white drop-shadow-md" />
								</button>
							</div>

							<div className="flex justify-center items-center overflow-visible grow relative z-30">
								<Image src={`/images/${currImg}.jpg`} alt={`${currImg}.jpg`} fill={true} objectFit="contain" objectPosition="center"
									className="touch-manipulation transition ease-in-out duration-300 delay-100 z-[60]" />
							</div>
						</div>
						<div className="flex items-center h-full z-40">
							<button onClick={() => openViewer(currImg+1)}>
								<FontAwesomeIcon icon={faChevronRight} className="text-xl md:text-3xl text-white drop-shadow-lg" />
							</button>
						</div> */}
						<div className="flex justify-end items-center">
							<button onClick={() => setIsOpen(false)}>
								<FontAwesomeIcon icon={faXmark} className="text-xl md:text-2xl text-white drop-shadow-md" />
							</button>
						</div>

						<Slider
                            infinite={true}
                            focusOnSelect={true}
                            lazyLoad="progressive"
                            easing="in-out"
                            slidesToShow={1}
                            speed={1000}
                            prevArrow={<CustomLeftArrow />}
                            nextArrow={<CustomRightArrow />}
							className="h-full"
                        >
                            {[1,2,3,4,5,6,7].map((i) => {
                                return (
                                    <div key={i} className="h-screen relative cursor-grab">
                                        {/* <div className="w-full h-full bg-white border-x-2 md:border-x-4 border-[#D2D2D2]"></div> */}
                                        <Image src={`/images/${i}.jpg`} alt="gambar" fill={true} objectFit="contain" objectPosition="center"
											className="pb-12 md:pb-16" />
                                    </div>
                                );
                            })}
                        </Slider>
					</DialogPanel>
				</div>
			</Dialog>

			{/* <ImgsViewer imgs={[
				{src: '/images/1.jpg'},
				{src: '/images/2.jpg'},
				{src: '/images/3.jpg'},
				{src: '/images/4.jpg'},
				{src: '/images/5.jpg'},
				{src: '/images/6.jpg'},
			]} 	isOpen={isOpen}
				currImg={currImg}
				onClickPrev={() => openViewer(currImg-1)}
				onClickNext={() => openViewer(currImg+1)}
				onClose={() => setIsOpen(false)}
				backdropCloseable={true}
				imgCountSeparator=" of "
			/> */}
		</div>
	)
}

export function AttendanceConfirmation() {
	const [formData, setFormData] = useState({
		name: "",
		attendance: null,
		numberOfPeople: null,
	});

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
		if (formData.attendance === "") {NotificationManager.error('Kehadiran harus diisi!',''); return;}
		if (formData.numberOfPeople === "") {NotificationManager.error('Jumlah harus diisi!',''); return;}

		console.log(formData);
		setFormData({
			name: "",
			attendance: null,
			numberOfPeople: null,
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
							transition-color ease-in-out duration-200 delay-50`} placeholder="Nama" value={formData.name} onChange={handleInput} />
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
						${!formData.attendance ? 'opacity-0' : 'opacity-100'} transition ease-in-out duration-300 delay-100`}>
						<label htmlFor="numberOfPeople">Jumlah<span className="text-red-600 ml-1">*</span></label>
						<select name="numberOfPeople" className={`${formData.numberOfPeople === null ? 'bg-stone-100' : 'bg-white'} font-light text-[#606266] border border-[#B5B5B5] rounded-lg md:rounded-xl px-4 py-2
							focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-0
							transition-color ease-in-out duration-200 delay-50`} value={formData.numberOfPeople} onChange={handleInput}>
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

		console.log(formData);
		setFormData({
			name: "",
			message: null,
		});
	}, [formData]);

	return (
		<OnVisible className="w-full mx-auto">
			<TransitionChild enter="transition-all duration-[3000ms] delay-[100ms] ease-in-out" enterFrom="opacity-0 translate-y-24" enterTo="opacity-100 translate-y-0">
				<div className="flex flex-col border-[1.5px] border-stone-300 rounded-xl md:rounded-3xl w-full max-w-lg mx-auto py-4 md:py-8">
					<div className="flex flex-col space-y-5 border-b-[1.5px] border-b-stone-300 px-4 md:px-8 pb-4 md:pb-6">
						<input type="text" name="name" className="bg-white text-sm md:text-base font-light text-[#606266] border border-stone-100 rounded-lg md:rounded-xl px-4 py-2
							focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-0
							transition-color ease-in-out duration-200 delay-50" placeholder="Nama" value={formData.name} onChange={handleInput} />
						<textarea type="text" name="message" className="bg-white text-sm md:text-base font-light text-[#606266] border border-stone-100 rounded-lg md:rounded-xl max-h-24 px-4 py-2
							focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-0
							transition-color ease-in-out duration-200 delay-50"
							placeholder="Pesan" value={formData.message} onChange={handleInput} />
						<button className="bg-amber-700 text-white text-sm md:text-base font-bold rounded-md md:rounded-lg w-max px-4 md:px-6 py-1.5 md:py-2">
							Send
						</button>
					</div>
					<div className="flex flex-col max-h-80 overflow-y-auto">
						{[1,2,3,4,5,6].map((i) => {
							return (
								<div key={i} className="border-b-[1.5px] border-b-stone-300 px-5 md:px-10 pt-4 md:pt-6 pb-2 md:pb-3">
									<div className="flex items-start space-x-2 md:space-x-4">
										<div className="grid place-items-center bg-red-500 text-white rounded-full w-4 md:w-8 aspect-square mt-1 md:mt-2">
											<FontAwesomeIcon icon={faHeart} className="text-[10px] md:text-xl leading-none" />
										</div>
										<div className="flex flex-col grow text-xs md:text-sm lg:text-base">
											<p className="text-amber-700 font-bold leading-none">Nama {i}</p>
											<p className="text-gray-500 leading-none mt-1 md:mt-2 mb-0.5 md:mb-1">Ini pesan {i}</p>
											<p className="text-blue-600 text-[10px] md:text-xs lg:text-sm font-light">
												<FontAwesomeIcon icon={faClock} className="mr-0.5" />
												5 hari yang lalu
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