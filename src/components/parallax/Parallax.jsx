/* eslint-disable react/prop-types */
import {useRef} from "react";
import "./parallax.scss";
import {motion, useScroll, useTransform} from "framer-motion";
const Parallax=()=>{
    const ref=useRef(null);
    const {scrollYProgress}=useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });
    const yBg=useTransform(scrollYProgress, [0, 1], ["-100%", "120%"]);
    return (
        <div className="parallax-items">
            <img id="section-divider" src="./wavesOpacity.svg" alt="divider" />
            <div className="wrapper">
                <motion.div className="text" initial={{opacity: 0}} whileInView={{opacity: 1, transition:{duration: 0.5, type: "spring", stiffness: 100}}} style={{y: yBg}} ref={ref}>
                    <h2>Welcome to the crib</h2>
                    <h2>Create Explore and Conqure</h2>
                </motion.div>
            </div>
            <motion.img 
                initial={{ x: 150, y: 300, opacity: 0 }}
                animate={{ x: 150, y: -200, opacity: [0, 0.5, 0] }}
                transition={{ duration: 3, delay: 1, repeat: Infinity }}
                id="arrow1"
                src="./arrow1.png"
                alt="arrow1 pic"
            />
            <motion.img 
                initial={{ x: 400, y: 300, opacity: 0 }}
                animate={{ x: 400, y: -200, opacity: [0, 0.5, 0] }}
                transition={{ duration: 3, delay: 2.5, repeat: Infinity }}
                id="arrow2"
                src="./arrow2.png"
                alt="arrow2 pic"
            />
            <motion.img 
                initial={{ x: 1000, y: 300, opacity: 0 }}
                animate={{ x: 1000, y: -200, opacity: [0, 0.5, 0] }}
                transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
                id="arrow3"
                src="./arrow3.png"
                alt="arrow3 pic"
            />
            <motion.img 
                initial={{ x: 1200, y: 300, opacity: 0 }}
                animate={{ x: 1200, y: -200, opacity: [0, 0.5, 0] }}
                transition={{ duration: 3, delay: 1.5, repeat: Infinity }}
                id="arrow4"
                src="./arrow2.png"
                alt="arrow2 pic"
            />
        </div>
    );
}
export default Parallax;