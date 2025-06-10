import React, { useRef, useEffect } from "react";
import profileImage from "../assets/images/mee.jpg";
import { motion } from 'framer-motion';
export const FadeUp = (delay) => {
    return {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 0.8,
                delay: delay,
                ease: "easeInOut",
            }
        }
    }
}
const AboutImage = () => {
    const imgRef = useRef(null); // 1. Create reference

    useEffect(() => {
        const img = imgRef.current;

        const handleMouseOver = () => {
            img.style.transform = "rotate(360deg)";
            img.style.transition = "transform 1s";
        };

        const handleMouseOut = () => {
            img.style.transform = "rotate(0deg)";
        };

        if (img) {
            img.addEventListener("mouseover", handleMouseOver);
            img.addEventListener("mouseout", handleMouseOut);
        }

        // Clean up on unmount
        return () => {
            if (img) {
                img.removeEventListener("mouseover", handleMouseOver);
                img.removeEventListener("mouseout", handleMouseOut);
            }
        };
    }, []);

    return (
        <div className="w-[500px] h-[500px] rounded-full border-2 ml-44 mt-24 mr-40 border-gray-500">
            <motion.img
                ref={imgRef} // 2. Attach reference
                src={profileImage}
                alt="Tayyaba"
                className="w-[500px] h-[500px] rounded-full profile-img"
                variants={FadeUp(1)}
                initial="initial"
                animate="animate"
            />
        </div>

    );
};

export default AboutImage;

