import React, { useState } from "react";
import { useEffect } from "react";
import { Jumbotron, CardColumns } from "react-bootstrap";
import CardDisplay from "../components/CardDisplay";



const Blog = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://ddhairya.github.io/json/blog.json')
            .then( res => res.json())
            .then( data => setBlogs(data.blogs))
            .catch( err => console.log(err))
    },[])
    return(                
        <Jumbotron > 
            {/* Load the data from the json server */}
            <CardColumns>
                {blogs.map((item) => CardDisplay(item))}
            </CardColumns>
            {/* Load the data from firestore */}
            
        </Jumbotron>
        
    )
}


export default Blog