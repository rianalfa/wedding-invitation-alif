import { Transition, TransitionChild } from '@headlessui/react'
import React from 'react'

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
