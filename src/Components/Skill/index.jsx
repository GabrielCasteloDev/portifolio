import { motion } from "motion/react";
import "./Skill.css";

const Skill = ({skills, titulo}) => {
  return (
    <div className="skill">
      <h1>{titulo}</h1>
      <div className="outline"></div>
      <div className="skill-block">

        {skills.map((skill, index) => (

            <motion.img
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            alt={skill.alt}
            src={skill.src}
             />
        ))}

        

        
          
        
      </div>
    </div>
  );
};

export default Skill;

    
        