import {useState, useRef, useEffect} from "react";
import "./sidebar.scss";
import Links from "./links/Links";
import ToogleButton from "./toogleButton/ToogleButton";
import {motion} from "framer-motion";

const variants={
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {type: "spring", stiffness: 20}
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
            delay: 0.5
        }
    }
}
const Sidebar=()=>{
    const [open, setOpen]=useState(false);
    const menuRef=useRef();
    useEffect(()=>{
        let handler=(e)=>{
            if(!menuRef.current.contains(e.target)){
                setOpen(false);
            }
        }
            document.addEventListener("mousedown", handler);
        return ()=>{
            document.removeEventListener("mousedown", handler);
        }
    }, []);
    return <motion.div className="sidebar" animate={open ? "open" : "closed"} ref={menuRef}>
        <motion.div className="bg" variants={variants}>
            <Links />
        </motion.div>
        <ToogleButton setOpen={setOpen} />
    </motion.div>
}

export default Sidebar;