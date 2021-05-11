import React from "react";
import { Jumbotron, CardColumns, Card } from "react-bootstrap";

const data = [
    {
        title: "Data Back Up after Window is crashed using CMD / DOS",
        id:1
    },
    {
        title: "Data Back Up after Window is crashed using CMD / DOS",
        id:2
    },
    {
        title: "Data Back Up after Window is crashed using CMD / DOS",
        id:3
    },
    {
        title: "Data Back Up after Window is crashed using CMD / DOS",
        id:4
    },
    {
        title: "Data Back Up after Window is crashed using CMD / DOS",
        id:5
    }
]

const BlogItem = (item) => {
    return(
        <a key={item.id} href="https://ddhairya.wordpress.com/2021/05/10/data-back-up-after-window-is-crashed-using-cmd-dos/">
        <Card >
            <Card.Header className="tileHeader">{item.title}</Card.Header>
            <Card.Body >
                <blockquote className="blockquote mb-0">
                    <p className="tileBody">
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.{' '}
                    </p>
                    <footer className="blockquote-footer">
                        Someone famous in <cite title="Source Title">Source Title</cite>
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