import { useState, useEffect } from "react";
import { motion } from 'framer-motion';

const HeroSection = () => {
    const fullText = "Hi, I'm Tayyaba Rani";
    const [typedText, setTypedText] = useState(""); // stores what’s typed
    const [index, setIndex] = useState(0); // current char index

    useEffect(() => {
        // Only type if we haven't reached fullText length
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setTypedText((prev) => prev + fullText.charAt(index));
                setIndex((prev) => prev + 1);
            }, 100);

            // Cleanup the timeout
            return () => clearTimeout(timeout);
        }
    }, [index, fullText]);

    return (
        <div className="pt-72 pl-10 text-white">
            <h1 className="p-3 italic font-bold text-7xl">{typedText}</h1>
            <h2 className="p-3 italic text-4xl">Front-end Web Developer</h2>

            <div className="mt-10">
                <motion.a
                    href="/resume"
                    className="inline-block border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-gray-500 mr-8 text-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    //whileHover={{ scale: 1.1, backgroundColor: "#6B7280" }}
                    whileTap={{ scale: 0.95 }}
                >
                    Resume
                </motion.a>
                <motion.a
                    href="/portfolio"
                    className="inline-block border-white border-2 text-white font-semibold py-4 px-8 rounded-full hover:bg-gray-500 text-xl"
                     initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    //whileHover={{ scale: 1.1, backgroundColor: "#6B7280" }}
                    whileTap={{ scale: 0.95 }}
                >
                    Portfolio
                </motion.a>
            </div>
        </div>
    );
};

export default HeroSection;
