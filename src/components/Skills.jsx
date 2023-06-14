import '../style/skills.css'
import { skills } from '../utils/data'


const Skills = () => {
  return (
    <section id="skills" className='py-5'>
        <div className="container">
          <h1 className='mb-5 title-content'>Tech Stack</h1>
          <div className="skill-wrapper mb-5">
            {skills.map((data, i) =>  (
              <img className='skill-image' key={i} src={data.image} alt={data.name} />
              )
            )}
          </div>
        </div>
    </section>
  )
}

export default Skills