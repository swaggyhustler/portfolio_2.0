import "./technologies.scss";
import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
const Technologies=()=>{
    const ref=useRef(null);
    const {scrollYProgress}=useScroll({
        target: ref,
        offset:["start start", "end start"]
    });
    const variant={
        initial:{opacity: 0, x: -10, y: -10},
        animate: {opacity: 1,x: 0,  y: 0, transition: {staggerChildren: 0.035}},
        
    }
    var title="Technologies Familiar With";
    const xBg=useTransform(scrollYProgress, [0, 1], ["-300px", "1200px"]);
    const xBgOpp=useTransform(scrollYProgress, [0, 1], ["300px", "-1200px"]);
    return (
        <div className="technologies">
            <motion.div className="logos" style={{x: xBg}}>
                <img id="logo1" src="./js_logo.png" alt="Javascript" />
                <img id="logo2" src="./java_logo.png" alt="java" />
                <img id="logo3" src="./python_logo.png" alt="python" />
            </motion.div>
            <div className="title">
                <motion.h1 className="title-content" initial="initial" whileInView="animate" viewport={{once:true}} variants={variant} >
                    {title.split("").map((char, i)=>{ 
                        return <motion.span variants={variant} key={i}>{char===" "?"\u00A0":char}</motion.span>
                })}
                </motion.h1>
            </div>
            <motion.div className="logos" style={{x: xBgOpp}}>
                <img id="logo4" src="./react_logo.png" alt="react" />
                <img id="logo5" src="./sql_logo.png" alt="sql" />
                <img id="logo6" src="./MERN_logo.png" alt="mern" />
            </motion.div>
        </div>
    );
}

export default Technologies;