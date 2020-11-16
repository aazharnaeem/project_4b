import React from 'react'
import './App.css'
import useWebAnimations, { bounce, lightSpeedInLeft, rotateIn, rotateInUpRight } from "@wellyshen/use-web-animations";
import Aestro from './images/astronaut.png'
const Animate = () => {
    const { ref, playstate, getAnimation } = useWebAnimations({

        keyframes: [
            { transform: 'translate(0,0)' },
            { transform: 'translate(90%,0)' },
            // { transform: 'rotate(0deg,)' },
            // { transform: 'rotate(360deg)' },


        ],
        timing: {
            duration: 7000,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out",
        },
        onReady: ({ playState, animate, animation }) => {
        },
        onUpdate: ({ playState, animate, animation }) => {
        },
        onFinish: ({ playState, animate, animation }) => {
        },
    })
    const play = () => {
        getAnimation().play()
    }
    const pause = () => {
        getAnimation().pause()
    }
    return (
        <div className='main'>
            <div className='mm'></div>
            <div ref={ref} className='astro' >
                <img src={Aestro} width='200px' />
            </div>

            <div className='mm'>
                <button onClick={play} >Play</button>
                <button onClick={pause} >Pause</button></div>
        </div>
    );
}
export default Animate