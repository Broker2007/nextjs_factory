"use client"

import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import 'animate.css';
import Image from "next/image";
import imageCarousel from '@/assets/Image_Carousel.png'
import arrow_right from "@/assets/arrow1.svg"
import arrow_left from "@/assets/arrow_left.svg"
import Accordion2 from "@/components/ui/Accordion2/Accordion2/Accordion2";
import MyButton from "@/components/ui/MyButton/MyButton";


const MyCarousel = ({ data }) => {
    const [slide, setSlide] = useState(0);
    const ref = useRef(null);
    const [numberRef,setNumberRef] = useState(null)
    const [windowSize, setWindowSize] = useState(getWindowSize());


    const [accorRef, setAccorRef] = useState(numberRef)



    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);
        if (windowSize.innerWidth >=1200){
            setNumberRef(500)
        }else{
            setNumberRef(410)
        }
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [slide]);


    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };
    console.log(accorRef)
    return (
        <div className="carousel" ref ={ref} style={{ height: accorRef}}>
            <div>
                {data.map((item, idx) => {
                    return (
                        <div className={slide === idx ? "slide animate__animated animate__zoomIn d-f jc-sp " : "slide slide-hidden animate__animated animate__fadeOutBottomRight"}>
                            <div className={"max_width750"}>
                                <p className={"text6"}>
                                    {item.action.title}
                                </p>
                                <p className={"text3"}>
                                    <Accordion2
                                        accordion_inf={item.action.accordion_inf}
                                        setAccorRef = {setAccorRef}
                                        accorRef = {accorRef}
                                        windowSize = {windowSize}
                                        boolSlide = {slide === idx}
                                    />
                                </p>
                            </div>
                            <Image src={item.src} className={"image_homepage image_block_none"}/>
                        </div>
                    );
                })}
                <div className={"arrow_parent d-f gap25"}>
                    <Image src={arrow_right}  onClick={prevSlide} className="arrow arrow-left" />

                    <Image
                        src={arrow_right}
                        onClick={nextSlide}
                        className="arrow arrow-right"
                    />
                </div>
            </div>
        </div>
    );
};

export default MyCarousel;