import React from "react";
import { motion } from "framer-motion";
import AcademyText from "./AcademyText";



//destructure motion

const spintransition = {
    loop: Infinity,
    duration: 4
}

const AcademyTextLogo = () => {
    // const [ rotate, setRotate ] = useState(false);
    return(
        <motion.div
            animate={{y:10,x:10, scale:1.3}}
            initial={{scale: 0}}
            transition={spintransition}
        >
            {<AcademyText />}
        </motion.div>


    );
};
export default AcademyTextLogo;