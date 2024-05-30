import Image from 'next/image'
import React from 'react'
import { ChangingImages, OnVisible } from './transitions'
import { AttendanceConfirmation, CountingDay, CustomLeftArrow, CustomRightArrow, Gallery, ImageForChangingImages, Messages } from './components'
import { TransitionChild } from '@headlessui/react'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faGift } from '@fortawesome/free-solid-svg-icons'

const enter = "transition-all duration-[3000ms] delay-[100ms] ease-in-out";

export default function FirstSection() {
    return (
        <div className="w-full h-screen md:h-[150vh] relative">
            <div className="flex flex-col items-center justify-end bg-black/10 text-white w-full h-full pb-20 md:pb-40 absolute top-0 left-0">
                <OnVisible>
                    <TransitionChild enter={enter} enterFrom="scale-0 translate-y-10" enterTo="scale-100 translate-y-0">
                        <div className="text-center w-full px-2 md:px-6 z-20">
                            <p className="font-average text-xl md:text-5xl uppercase tracking-[5.4px] md:tracking-[10px] drop-shadow-lg md:drop-shadow-xl">Alif & Indah</p>
                            <p className="font-cormorantUnicase text-sm md:text-2xl tracking-[3px] md:tracking-[6px] drop-shadow-md md:drop-shadow-lg my-3.5 md:my-5">Sabtu, 29 Juni 2024</p>
                            <p className="font-cormorantUnicase text-xs md:text-xl tracking-widest leading-5 drop-shadow-md md:drop-shadow-lg">"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."</p>
                            <p className="font-cormorantUnicase text-xs md:text-xl tracking-widest drop-shadow-md md:drop-shadow-lg">QS. Ar-Rum: 21-</p>
                        </div>
                    </TransitionChild>
                </OnVisible>

                <div className="absolute bottom-0 left-0 w-full h-60 md:h-96 mb-0 z-[15] bg-gradient-to-t from-[#D2D2D2] to-transparent" />
            </div>

            <ChangingImages>
                <ImageForChangingImages className="w-full h-screen md:h-[150vh]" src="first_1.jpg" alt="first_1.jpg" />
                <ImageForChangingImages className="w-full h-screen md:h-[150vh]" src="first_2.jpg" alt="first_2.jpg" objectPosition="bottom" />
            </ChangingImages>
        </div>
    )
}

export function SecondSection() {
    return (
        <div className="flex flex-col justify-center items-center bg-[#D2D2D2] w-full h-[75vh] md:h-[150vh] px-3 md:px-10 relative">
            <OnVisible className="w-full max-w-6xl">
                <TransitionChild enter={enter} enterFrom="scale-0" enterTo="scale-100">
                    <p className="text-[45px] md:text-[70px] font-black uppercase text-left leading-[1.1em] md:leading-[1] tracking-[1.3px] md:tracking-normal w-full">The <br/> Wedding</p>
                </TransitionChild>
                
                <TransitionChild enter={enter} enterFrom="translate-y-24 opacity-0" enterTo="translate-y-0 opacity-100">
                    <p className="font-cormorantUnicase text-xs md:text-[20px] text-center tracking-[1px] md:tracking-normal leading-[1.9em] md:leading-[44px] w-full my-6 px-0 md:px-6">
                        We have come to our new life, we want to share the joy of our marriage with all the families and friends. We write this invitation to invite all of you to share the joy with us on our wedding.
                    </p>
                </TransitionChild>
            </OnVisible>
            
            <OnVisible className="w-full max-w-6xl">
                <TransitionChild enter={enter} enterFrom="opacity-0" enterTo="opacity-100">
                    <div className="border-black border-t-2 border-b-2 py-[30px]">
                        <Slider
                            infinite={true}
                            focusOnSelect={true}
                            lazyLoad="anticipated"
                            autoplay={true}
                            autoplaySpeed={14000}
                            easing="in-out"
                            slidesToShow={4}
                            responsive={[{breakpoint: 484, settings: {
                                slidesToShow: 3,
                                arrows: false,
                            }}]}
                            speed={4000}
                            prevArrow={<CustomLeftArrow />}
                            nextArrow={<CustomRightArrow />}
                        >
                            {[1,2,3,4,5].map((i) => {
                                return (
                                    <div key={i} className="aspect-square relative">
                                        <Image src={`/images/second_${i}.jpg`} alt="gambar" fill={true} objectFit="cover" objectPosition="center"
                                            priority={true} className="border-2 md:border-4 border-[#D2D2D2]" />
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                </TransitionChild>
            </OnVisible>
        </div>
    )
}

export function ThirdSection() {
    return (
        <div className="flex flex-col justify-center w-full mx-auto px-2 md:px-12 py-5 md:py-10 relative">
            <OnVisible className="w-full max-w-6xl mx-auto px-2 md:px-4">
                <div className="flex justify-between">
                    <TransitionChild enter={enter} enterFrom="scale-0" enterTo="scale-100" className="md:w-1/2 my-6 md:my-9">
                        <p className="text-[45px] md:text-[70px] font-black uppercase text-left leading-[1.1em] md:leading-[1] tracking-[1.3px] md:tracking-normal w-full my-auto">Groom - <br/> Bride</p>
                    </TransitionChild>


                    {/* <TransitionChild enter={enter} enterFrom="scale-0" enterTo="scale-100">
                        <div className="flex justify-center items-center md:w-1/2">
                            <div className="font-bold text-gray-700 rounded-full bg-[#D2D2D2] flex items-center justify-center font-mono w-[100px] h-[100px] text-[24px] animate-spin">404</div>
                        </div>
                    </TransitionChild> */}
                </div>

                {/* <TransitionChild enter={enter} enterFrom="translate-y-24 opacity-0" enterTo="translate-y-0 opacity-100">
                    <div className="font-cormorantUnicase text-xs md:text-[20px] text-center tracking-[1px] md:tracking-normal leading-[1.9em] md:leading-[44px] my-6 md:my-9 w-full">
                        <p>
                            "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
                        </p>
                        <p className="mt-6 md:mt-12">- Maya Angelou</p>
                    </div>
                </TransitionChild> */}
            </OnVisible>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-6xl mx-auto px-2 md:px-4">
                <div className="font-cormorant text-[#020202] text-center mb-4">
                    <OnVisible>
                        <TransitionChild enter={enter} enterFrom="opacity-0 translate-y-12" enterTo="opacity-100 translate-y-0">
                            <div className="bg-white shadow-lg px-[5px] md:px-2 pt-[5px] md:pt-2 pb-[30px] md:pb-[50px]">
                                <div className="w-full aspect-square bg-gray-400 relative">
                                    <div className="absolute top-0 left-[7.5%] z-0 w-[85%] h-full
                                        shadow-[0_18px_24px_-12px_rgba(0,0,0.7)] md:shadow-[0_30px_35px_-12px_rgba(0,0,0,0.7)]"></div>
                                    <Image src="/images/alif_1.jpg" alt="alif_1.jpg" fill={true} objectFit="cover" objectPosition="bottom" priority={true} />
                                </div>
                            </div>
                        </TransitionChild>
                    </OnVisible>

                    <OnVisible>
                        <TransitionChild enter={enter} enterFrom="opacity-0 translate-y-12" enterTo="opacity-100 translate-y-0">
                            <div className="flex flex-col">
                                <p className="font-greatVibes text-[#585858] text-[32px] md:text-[40px] font-light tracking-[5px] mt-[12%] md:mt-[10%]">Alif</p>
                                <div className="flex items-center justify-center w-full h-20 md:h-28">
                                    <p className="font-bold md:font-semibold text-xl md:text-3xl tracking-[1px] max-w-64 md:max-w-96">Muhammad Alif Taufiqulhakim, S.tr.Stat.</p>
                                </div>
                                <div className="flex items-start justify-center w-full h-16 md:h-20">
                                    <p className="font-bold md:font-semibold md:text-xl leading-4 md:leading-6 max-w-72 md:max-w-96">
                                        Putra dari <br />
                                        Bapak Endro Budi Darmawanm S.E., M.Si. & Ibu Mas'amah, S.Sos., M.Si.
                                    </p>
                                </div>
                                <div className="mt-6 md:mt-12">
                                    <a className="font-average text-xs md:text-base leading-4 uppercase border-y border-[#020202] rounded-md md:rounded-[10px] px-4 md:px-8 py-3"
                                        href="https://instagram.com/young_lif18" target="_blank">
                                        <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                                        Instagram
                                    </a>
                                </div>
                            </div>
                        </TransitionChild>
                    </OnVisible>
                </div>
                <div className="font-cormorant text-[#020202] text-center mb-4">
                    <OnVisible>
                        <TransitionChild enter={enter} enterFrom="opacity-0 translate-y-12" enterTo="opacity-100 translate-y-0">
                            <div className="bg-white shadow-lg px-[5px] md:px-2 pt-[5px] md:pt-2 pb-[30px] md:pb-[50px]">
                                <div className="w-full aspect-square bg-gray-400 relative">
                                    <div className="absolute top-0 left-[7.5%] z-0 w-[85%] h-full
                                        shadow-[0_18px_24px_-12px_rgba(0,0,0.7)] md:shadow-[0_30px_35px_-12px_rgba(0,0,0,0.7)]"></div>
                                    <Image src="/images/indah_1.jpg" alt="indah_1.jpg" fill={true} objectFit="cover" objectPosition="bottom" priority={true} />
                                </div>
                            </div>
                        </TransitionChild>
                    </OnVisible>

                    <OnVisible>
                        <TransitionChild enter={enter} enterFrom="opacity-0 translate-y-12" enterTo="opacity-100 translate-y-0">
                            <div className="flex flex-col">
                                <p className="font-greatVibes text-[#585858] text-[32px] md:text-[40px] font-light tracking-[5px] mt-[12%] md:mt-[10%]">Indah</p>
                                <div className="flex items-center justify-center w-full h-20 md:h-28">
                                    <p className="font-bold md:font-semibold text-xl md:text-3xl tracking-[1px] max-w-64 md:max-w-96">Indah Suryani, S.Stat.</p>
                                </div>
                                <div className="flex items-start justify-center w-full h-16 md:h-20">
                                    <p className="font-bold md:font-semibold md:text-xl leading-4 md:leading-6 max-w-72 md:max-w-96">
                                        Putri dari <br />
                                        Bapak Sukar & Ibu Manis
                                    </p>
                                </div>
                                <div className="mt-6 md:mt-12">
                                    <a className="font-average text-xs md:text-base text-[#3C3C3C] leading-4 uppercase border-y border-[#020202] rounded-md md:rounded-[10px] px-4 md:px-8 py-3"
                                        href="https://instagram.com/ndhsury_06" target="_blank">
                                        <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                                        Instagram
                                    </a>
                                </div>
                            </div>
                        </TransitionChild>
                    </OnVisible>
                </div>
            </div>
        </div>
    )
}

export function FourthSection() {
    return (
        <div className="w-full h-screen md:h-[150vh]">
            <OnVisible>
                <TransitionChild enter={enter} enterFrom="scale-0 opacity-0" enterTo="scale-100 opacity-100">
                    <div className="w-full h-screen md:h-[150vh] relative">
                        <div className="flex flex-col justify-center items-center bg-black/25 font-average text-white text-center uppercase w-full h-full absolute top-0 left-0 z-30">
                            <p className="text-sm md:text-2xl leading-4 md:leading-6 tracking-[5.4px] md:tracking-[10px]">Save the date</p>
                            <div className="bg-white w-1 md:w-[5px] h-[15vh] md:h-[30vh] my-5" />
                            <p className="text-[60px] md:text-[98px] leading-[1.3em] md:leading-[100px] tracking-[4px] md:tracking-normal">29 <br/> JUNI <br/> 24</p>
                            <div className="bg-white w-1 md:w-[5px] h-[15vh] md:h-[30vh] my-5" />
                            <p className="text-sm md:text-2xl leading-4 md:leading-6 tracking-[5.4px] md:tracking-[10px]">Alif & Indah</p>
                        </div>

                        <ChangingImages>
                            <ImageForChangingImages className="w-full h-screen md:h-[150vh]" src="fourth_1.jpg" alt="fourth_1.jpg" />
                            <ImageForChangingImages className="w-full h-screen md:h-[150vh]" src="fourth_2.jpg" alt="fourth_2.jpg" />
                        </ChangingImages>
                    </div>
                </TransitionChild>
            </OnVisible>
        </div>
    );
}

export function FifthSection() {
    return (
        <div className="p-[10px] w-full max-w-6xl mx-auto">
            <div className="flex flex-col justify-between items-center space-y-5 w-full min-h-screen md:py-[15px]">
                <div className="bg-[#585858] w-full h-[1.5px] md:mb-[15px]" />
                    <div className="flex flex-col items-center space-y-5 w-full">                            
                        <OnVisible>
                            <TransitionChild enter={enter} enterFrom="opacity-0 translate-y-24" enterTo="opacity-100 translate-y-0">
                                <div className="flex flex-col items-center space-y-5 w-full">
                                    <p className="font-greatVibes text-[#585858] text-[28px] md:text-[70px] leading-[1.1em] md:leading-[1] tracking-[5.1px] md:tracking-[3px]">Counting Day</p>
                                    <CountingDay />
                                    <div className="pt-[15px] pb-[10px]">
                                        <a className="font-average text-xs md:text-base text-[#3C3C3C] leading-4 uppercase border-y border-[#020202] rounded-md md:rounded-[10px] px-4 md:px-8 py-3"
                                            href="https://www.google.com/calendar/render?action=TEMPLATE&text&details&dates&location" target="_blank">
                                            Save to calendar
                                        </a>
                                    </div>
                                </div>
                            </TransitionChild>
                        </OnVisible>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center w-full pt-5">
                            <OnVisible>
                                <TransitionChild enter={enter} enterFrom="opacity-0 translate-y-24" enterTo="opacity-100 translate-y-0">
                                    <div className="flex flex-col items-center text-[#585858] leading-[1.1em] w-full">
                                        <p className="text-[21px] md:text-[30px] font-semibold tracking-[0.4px] md:tracking-[4.7px] uppercase">Akad Nikah</p>
                                        <p className="font-average md:text-[25px] uppercase md:tracking-[1.8px] my-5 md:my-7">Sabtu, 29 Juni 2024</p>
                                        <p className="text-[15px] md:text-[20px] font-semibold -tracking-[0.5px] md:-tracking-[0.3px]">Pukul 08:00 - 08:30 WIB</p>
                                        <p className="font-average md:text-[20px] text-center mt-2 mb-5">
                                            Bertempat di<br/>
                                            Graha Larasati<br/>
                                            Jl. Taman Makam Pahlawan, Tempelan<br/>
                                            Kec. Blora, Kab. Blora
                                        </p>
                                        <div className="mt-[15px] mb-[10px] pt-[15px] pb-[10px]">
                                            <a className="font-average text-xs md:text-base text-[#3C3C3C] font-light leading-4 uppercase border-y border-[#020202] rounded-md md:rounded-[10px] px-4 md:px-8 py-3"
                                                href="https://maps.app.goo.gl/FahZ8LkSQp33Ho8W7" target="_blank">
                                                Google Maps
                                            </a>
                                        </div>
                                    </div>
                                </TransitionChild>
                            </OnVisible>
                            <OnVisible>
                                <TransitionChild enter={enter} enterFrom="opacity-0 translate-y-24" enterTo="opacity-100 translate-y-0">
                                    <div className="flex flex-col items-center text-[#585858] leading-[1.1em] w-full">
                                        <p className="text-[21px] md:text-[30px] font-semibold tracking-[0.4px] md:tracking-[4.7px] uppercase">Resepsi</p>
                                        <p className="font-average md:text-[25px] uppercase md:tracking-[1.8px] my-5 md:my-7">Sabtu, 29 Juni 2024</p>
                                        <p className="text-[15px] md:text-[20px] font-semibold -tracking-[0.5px] md:-tracking-[0.3px]">Pukul 11:00 - 13:00 WIB</p>
                                        <p className="font-average md:text-[20px] text-center mt-2 mb-5">
                                            Bertempat di<br/>
                                            Graha Larasati<br/>
                                            Jl. Taman Makam Pahlawan, Tempelan<br/>
                                            Kec. Blora, Kab. Blora
                                        </p>
                                        <div className="mt-[15px] mb-[10px] pt-[15px] pb-[10px]">
                                            <a className="font-average text-xs md:text-base text-[#3C3C3C] font-light leading-4 uppercase border-y border-[#020202] rounded-md md:rounded-[10px] px-4 md:px-8 py-3"
                                                href="https://maps.app.goo.gl/FahZ8LkSQp33Ho8W7" target="_blank">
                                                Google Maps
                                            </a>
                                        </div>
                                    </div>
                                </TransitionChild>
                            </OnVisible>
                        </div>
                    </div>
                <div className="bg-[#585858] w-full h-[1.5px] md:mt-[15px]" />
            </div>
        </div>
    )
}

export function SixthSection() {
    return (
        <div className="flex flex-col w-full">
            <OnVisible>
                <TransitionChild enter={enter} enterFrom="scale-0 opacity-0" enterTo="scale-100 opacity-100">
                    <div className="w-full relative">
                        <div className="grid place-items-center font-cormorantUnicase text-white text-xs md:text-[20px] font-light leading-[1.9em] md:leading-[44px] tracking-[1px] md:tracking-normal text-center w-full h-full absolute top-0 left-0 z-20">
                            <p>
                                "My heart beats faster as you take my hand, my love grows stronger as you touch my soul."
                                <br/><br/>
                                - A.C. Van Cherub -
                            </p>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full h-24 md:h-0 mb-0 z-[15] bg-gradient-to-t from-[#D2D2D2] to-transparent"></div>

                        <ChangingImages className="w-full">
                            <ImageForChangingImages className="w-full h-[33vh] md:h-[70vh]" src="sixth_1.jpg" alt="sixth_1.jpg" objectPosition="bottom" />
                            <ImageForChangingImages className="w-full h-[33vh] md:h-[70vh]" src="sixth_22.jpg" alt="sixth_2.jpg" />
                        </ChangingImages>
                    </div>
                </TransitionChild>
            </OnVisible>

            <Gallery />
        </div>
    )
}

export function SeventhSection() {
    return (
        <div className="flex flex-col space-y-[5px] w-full p-[10px] md:py-[6%]">
			<OnVisible>
				<TransitionChild enter="transition-all duration-[3000ms] delay-[100ms] ease-in-out" enterFrom="opacity-0 translate-y-24" enterTo="opacity-100 translate-y-0">
					<div className="w-full">
						<p className="font-greatVibes text-[#585858] text-[28px] md:text-[70px] leading-[1.1em] md:leading-none tracking-[5.1px] md:tracking-[3px] text-center font-light my-[5%]">Wedding Gift</p>
					</div>
				</TransitionChild>
			</OnVisible>


            <OnVisible>
				<TransitionChild enter="transition-all duration-[3000ms] delay-[100ms] ease-in-out" enterFrom="opacity-0 translate-y-24" enterTo="opacity-100 translate-y-0">
                    <div className="flex flex-col space-y-8 mx-[5%] md:mx-[7%]">
                        <FontAwesomeIcon icon={faGift} className="text-[#A8A8A8] text-[50px] text-center mt-5" />
                        <p className="font-cormorantUnicase text-[#020202] text-xs md:text-xl font-light text-center leading-[1.9em] md:leading-[44px] tracking-[1px] md:tracking-normal mb-[5%]">
                            Kehadiran dan doa restu Bapak/Ibu/Saudara/i merupakan anugerah terindah bagi kami. Namun, apabila Bapak/Ibu/Saudara/i tidak dapat hadir dan hendak memberikan tanda kasih kepada kami, dapat menggunakan fitur di bawah ini.
                        </p>
                        <button className="font-average text-xs md:text-base text-[#3C3C3C] leading-4 uppercase border-y border-[#020202] rounded-md md:rounded-[10px] w-max mx-auto px-4 md:px-8 py-3"
                            onClick={() => {}}>
                            <FontAwesomeIcon icon={faGift} className="mr-1" />
                            Kirim hadiah
                        </button>
                    </div>
                </TransitionChild>
            </OnVisible>
        </div>
    )
}

export function EighthSection({name="", userId=0}) {
    return (
        <div className="bg-[#E8E2E2] w-full">
            <div className="flex flex-col items-center space-y-5 bg-white rounded-b-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] max-w-4xl mx-auto mb-[25%] md:mb-[22%] p-[10px]">
                {/* <OnVisible>
                    <TransitionChild enter="transition-all duration-[3000ms] delay-[100ms] ease-in-out" enterFrom="opacity-0 translate-y-24" enterTo="opacity-100 translate-y-0">
                        <div className="w-full py-[5%] md:py-[10%]">
                            <p className="font-greatVibes text-[#585858] text-[28px] md:text-[70px] leading-[1.1em] md:leading-none tracking-[5.1px] md:tracking-[3px] text-center font-light">RSVP</p>
                        </div>
                    </TransitionChild>
                </OnVisible>

                <OnVisible>
                    <TransitionChild enter="transition-all duration-[3000ms] delay-[100ms] ease-in-out" enterFrom="opacity-0 translate-y-24" enterTo="opacity-100 translate-y-0">
                        <p className="font-cormorantUnicase text-[#020202] text-xs md:text-xl font-light text-center leading-[1.9em] md:leading-[44px] tracking-[1px] md:tracking-normal mb-[5%]">
                            Dimohon untuk mengisi konfirmasi kehadiran di bawah ini.
                        </p>
                    </TransitionChild>
                </OnVisible>

                <AttendanceConfirmation name={name} userId={userId} /> */}

                <OnVisible>
                    <TransitionChild enter={enter} enterFrom="opacity-0 translate-y-24" enterTo="opacity-100 translate-y-0">
                        <div className="w-full">
                            <p className="font-greatVibes text-[#585858] text-[28px] md:text-[70px] leading-[1.1em] md:leading-none tracking-[5.1px] md:tracking-[3px] text-center font-light my-[5%]">Wish</p>
                        </div>
                    </TransitionChild>
                </OnVisible>

                <OnVisible>
                    <TransitionChild enter={enter} enterFrom="opacity-0 translate-y-24" enterTo="opacity-100 translate-y-0">
                        <p className="font-cormorantUnicase text-[#020202] text-xs md:text-xl font-light text-center leading-[1.9em] md:leading-[44px] tracking-[1px] md:tracking-normal mb-[5%]">
                            Berikan ucapan dan doa untuk kami.
                        </p>
                    </TransitionChild>
                </OnVisible>

                <Messages />

                <OnVisible className="w-full">
                    <TransitionChild enter={enter} enterFrom="translate-y-24 opacity-0 rotate-180" enterTo="translate-y-0 opacity-100 rotate-0">
                        <div className="aspect-square w-full relative">
                            <div className="absolute top-0 left-0 z-40 shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.5)] md:shadow-[inset_0_4px_8px_0_rgba(0,0,0,0.5)] rounded-full w-full h-full" />
                            <div className="border-[8px] md:border-[24px] border-[#d4e0cf] rounded-full w-full h-full">
                                <div className="border-[12px] md:border-[32px] border-[#e9e6d5] rounded-full w-full h-full relative z-30">
                                    <Image src={`/images/eighth_1.jpg`} alt="eighth_1.jpg" fill={true} objectFit="cover" objectPosition="bottom"
                                        className="rounded-full z-20" />
                                    <div className="absolute top-0 left-0 z-40 shadow-[inset_0_8px_16px_0_rgba(0,0,0,0.7)] md:shadow-[inset_0_16px_32px_0_rgba(0,0,0,0.7)] rounded-full w-full h-full" />
                                </div>
                            </div>
                        </div>
                    </TransitionChild>
                </OnVisible>
            </div>
        </div>
    )
}

export function NinthSection() {
    return (
        <div className="flex justify-center items-end w-full h-screen bg-[url('/images/cover_1.jpg')] bg-local bg-origin-padding bg-center bg-no-repeat bg-cover pb-[10%] relative">
            <div className="absolute top-0 left-0 w-full h-60 md:h-96 mb-0 z-20 bg-gradient-to-b from-[#D2D2D2] via-[#D2D2D280] to-transparent" />
            <OnVisible>
                <TransitionChild enter="transition-all duration-[3000ms] delay-[500ms] ease-in-out" enterFrom="opacity-0 translate-y-24" enterTo="opacity-100 translate-y-0">
                    <div className="flex flex-col justify-end items-center font-cormorant text-white h-full">
                        <p className="font-roboto text-2xl md:text-4xl font-bold uppercase mb-7 md:mb-6">Thank You</p>
                        <p className="font-greatVibes text-[30px] md:text-[50px] font-normal tracking-wide">Alif & Indah</p>
                    </div>
                </TransitionChild>
            </OnVisible>
        </div>
    )
}