import { Container, Row, Col, } from "react-bootstrap"
import '../style/project.css'
import { useEffect, useState } from "react"
import {projectsData, projectsNav} from '../utils/data'

const Project = () => {
    const [item, setItem] = useState({name: 'all'})
    const [userSelect, setUserSelect] = useState(0)
    const [project, setProject] = useState([])

    useEffect(() =>{
        if(item.name == 'all'){
            setProject(projectsData)
        }else{
            const newProject = projectsData.filter(
                (project) =>{
                    return project.category.toLowerCase() == item.name
                })
                setProject(newProject)
        }
    }, [item])

    const handleClick = (e, index) =>{
        setItem({name: e.target.textContent.toLowerCase()})
        setUserSelect(index)
    }



    const CardProject = ({item}) =>{
        return (
            <div className="card-wrapper">
                <a href={item.link}>
                    <img className="image-project" src={item.image} alt="" />
                </a>
                <a className="mt-1 py-1 project-title" href={item.link}>{item.name}</a>
                <p className="project-description">{item.description}</p>               
            </div>
        )
    }

  return (
    <section id="project" className="py-5">
        <Container >
            <div className="text-center">
                <h4 className="title-content text-uppercase">Projects</h4>
                <h2>Latest Project</h2>
                <p>These are a few of the projects I{"'"}ve been involved in, starting from when I first began learning web development up until now.</p>
            </div>

            <div className="link-wrapper">
                <ul className="d-flex justify-content-center mb-5 align-items-center">
                    {projectsNav.map((item, i) => { return (
                        <li onClick={(e) => handleClick(e, i)} key={i} className={`${userSelect === i  ? 'actives' : ''} link-project`}>
                           {item.name}
                        </li>
                    )
                    })}
                </ul>
            </div>
            <Row className="justify-content-center align-items-center project-container">
                {project.map((item) =>{
                    return (
                        <Col md={4} key={item.id} className="">
                            <CardProject item={item}/>    
                        </Col>
                    )                                
                })}
            </Row>
        </Container>
    </section>
  )
}

export default Project