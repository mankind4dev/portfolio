import { technologies } from "../constants"
import { SectionWrapper } from "../hoc"
import { BallCanvas } from "./canvas"
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion"
import { styles } from "../styles";


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Specialization</p> 
        <h2 className={styles.sectionHeadText}>My Frameworks.</h2>
      </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technologies) => (
        <div className="w-28 h-28" key={technologies.name}>
          <BallCanvas icon={technologies.icon} />
        </div>
      ))}
    </div>
    </>
  )
}



export default SectionWrapper(Tech, "")