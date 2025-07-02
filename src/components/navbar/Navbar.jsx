import "./navbar.scss";
import {motion} from "framer-motion";
import Sidebar from "../sidebar/Sidebar.jsx";

const Navbar=()=>{
    const variants={
        visible:{
            opacity: 1, 
            scale: 1,
            y : 1,
            transition: {staggerChildren: 0.1, type: "spring", stiffness: 400, damping: 10}
        },
        hidden: {
            opacity: 0, scale: 0.5, y: -20
        },
    };
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span 
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 1}}
                    transition= {{ duration: 0.75, delay: 0.25, type: "spring", bounce: 0.5}}
                >
                    SwaggyHustler
                </motion.span>
                <motion.div className="socials" initial="hidden" animate="visible" variants={variants}>
                        <motion.a variants={variants} href="https://www.instagram.com/swaggyhustler/"><motion.img whileHover={{scale: 1.1, transition:{type: "spring", stiffness: 400, damping: 10}}} src="./instagram.png" alt="instagram" /></motion.a>
                        <motion.a variants={variants} href="https://www.linkedin.com/in/subhash-gedam/"><motion.img whileHover={{scale: 1.1, transition:{type: "spring", stiffness: 400, damping: 10}}} src="./linkedin.png" alt="linkedin" /></motion.a>
                        <motion.a variants={variants} href="https://github.com/swaggyhustler"><motion.img whileHover={{scale: 1.1, transition:{type: "spring", stiffness: 400, damping: 10}}} src="./github.png" alt="discord" /></motion.a>
                        <motion.a variants={variants} href="https://www.youtube.com/@subhashnaseer"><motion.img whileHover={{scale: 1.1, transition:{type: "spring", stiffness: 400, damping: 10}}} src="./youtube.png" alt="youtube" /></motion.a>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar;