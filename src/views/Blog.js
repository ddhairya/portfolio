import React, { useState } from "react";
import { useEffect } from "react";
import { Jumbotron, CardColumns } from "react-bootstrap";
import CardDisplay from "../components/CardDisplay";



const Blog = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://ddhairya.github.io/json/blog.json')
            .then( res => res.json())
            .then( data => {
                console.log(data)
                setBlogs(data)
            })
    },[])
    return(                
        <Jumbotron > 
            {/* Load the data from the json server */}
            <CardColumns>
                {blogs.map((item) => CardDisplay(item))}
            </CardColumns>
            {/* Load the data from firestore */}
            <CardColumns>
                {blogs.map((item) => CardDisplay(item))}
            </CardColumns>
        </Jumbotron>
        
    )
}


export default Blog