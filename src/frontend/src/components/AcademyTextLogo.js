import React from "react";
import { motion } from "framer-motion";
import AcademyText from "./AcademyText";



//destructure motion

const spintransition = {
    loop: Infinity,
    duration: 5
}

const AcademyTextLogo = () => {
    // const [ rotate, setRotate ] = useState(false);
    return(
        <motion.div
            animate={{y:10,x:10, scale:1.3}}
            initial={{scale:-10}}
            transition={spintransition}
        >
            {<AcademyText />}
        </motion.div>


    );
};
export default AcademyTextLogo;