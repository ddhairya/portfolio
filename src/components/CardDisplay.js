import { Card, Image } from "react-bootstrap";
import pin from "../assets/images/pin.png";


const CardDisplay = (item) => {
    return ( 
        <a key={item.id} href={item.url}>
            <Card >
                <Card.Header className="tileHeader">
                    <Image className="pinImage" src={pin} alt="pin" /> <span className="tileHeaderText"> {item.title} </span>
                </Card.Header>
                <Card.Body >
                    <blockquote className="blockquote mb-0">
                        <p className="tileBody">
                            {item.body}
                        </p>
                        <footer className="blockquote-footer">
                            <cite title="Source Title">{item.year} </cite> last updated year 
                        </footer>
                    </blockquote>            
                </Card.Body>
            </Card>
        </a>
     );
}
 
export default CardDisplay;