import {Jumbotron, Card} from "react-bootstrap";
import python from "../assets/images/projects/python.png";
import ProjectCard from "../components/ProjectCard";

const project1 = [python, python]
const Project = () => {

    return ( 
        <Jumbotron>
            <ProjectCard cardTitile = "Python - Automation" cardText = "Ipsum Loream" slidingImg = {project1}/>
        </Jumbotron>
    );
}
 
export default Project;