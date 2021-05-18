import React from "react";
import { Jumbotron, CardColumns, Card, Image } from "react-bootstrap";
import pin from "../assets/images/pin.png";

const data = [
    {
        title: "Data Back Up after Window is crashed using CMD / DOS",
        id:1,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuereerat a ante.",
        url:"https://ddhairya.wordpress.com/2021/05/10/data-back-up-after-window-is-crashed-using-cmd-dos/",
        year:"2021",
    },
    {
        title: "Data Back Up after Window is crashed using CMD / DOS",
        id:2,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuereerat a ante.",
        url:"https://ddhairya.wordpress.com/2021/05/10/data-back-up-after-window-is-crashed-using-cmd-dos/",
        year:"2021",
    },
    {
        title: "Data Back Up after Window is crashed using CMD / DOS",
        id:3,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuereerat a ante.",
        url:"https://ddhairya.wordpress.com/2021/05/10/data-back-up-after-window-is-crashed-using-cmd-dos/",
        year:"2021",
    },
    {
        title: "Data Back Up after Window is crashed using CMD / DOS",
        id:4,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuereerat a ante.",
        url:"https://ddhairya.wordpress.com/2021/05/10/data-back-up-after-window-is-crashed-using-cmd-dos/",
        year:"2021",
    },
    {
        title: "Sophos",
        id:5,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuereerat a ante.",
        url:"https://ddhairya.wordpress.com/2021/05/10/data-back-up-after-window-is-crashed-using-cmd-dos/",
        year:"2021",
    }
]

const BlogItem = (item) => {
    return(
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
    )
}

const Blog = () => {
    return(                
        <Jumbotron > 
            <CardColumns>
                {data.map((item) => BlogItem(item))}
            </CardColumns>
        </Jumbotron>
        
    )
}


export default Blog