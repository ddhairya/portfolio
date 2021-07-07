import { Card } from "react-bootstrap";
import ImageSlider from "../components/ImageSlider";


const ProjectCard = ({cardTitile, cardText, slidingImg}) => {
    return(
        <>
        <Card className="flex-row projectFlexDirCol">
                <Card.Body>
                    <Card.Title>{cardTitile}</Card.Title>
                    <Card.Text>{cardText}</Card.Text>
                </Card.Body>
                <ImageSlider intTime="3000" slidingImg = {slidingImg} />
        </Card>
        </>
    )
}

export default ProjectCard;

