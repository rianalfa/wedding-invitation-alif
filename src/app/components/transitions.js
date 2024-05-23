import { Transition } from '@headlessui/react'
import React from 'react'
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';

export default function ZoomIn({duration=1000, delay=100, from="scale-0 opacity-0", children}) {
    return (
        <Transition
            appear={true} show={true}
            enter={`transition-all duration-[${duration}ms] delay-[${delay}ms] ease-in-out`} enterFrom={from} enterTo="scale-100 opacity-100"
        >
            {children}
        </Transition>
    )
}

export function OnVisible({children, className=""}) {
    const {ref, inView, entry} = useInView({
        threshold: 0,
        triggerOnce: true
    });

    return (
        <div ref={ref} className={`z-20 ${className}`}>
            <Transition show={inView}>
                {children}
            </Transition>
        </div>
    );
}

export function OnVisibleWithoutTransition({children, className=""}) {
    const {ref, inView, entry} = useInView({
        threshold: 0,
        triggerOnce: true
    });

    return (
        <div ref={ref} className={`z-20 ${className}`}>
            {inView && children}
        </div>
    );
}

export function ChangingImages({children, className=""}) {
    return (
        <div className={className}>
            <Slider
                arrows={false}
                draggable={false}
                swipeable={false}
                infinite={true}
                fade={true}
                autoplay={true}
                autoplaySpeed={10000}
                easing="in-out"
                slidesToShow={1}
                speed={5000}
                className="w-full h-full"
            >
                {children}
            </Slider>
        </div>
    );
}
