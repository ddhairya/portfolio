import React from "react";
import { Jumbotron, CardColumns } from "react-bootstrap";
import CardDisplay from "../components/CardDisplay";
import useFetch from "../components/useFetch";



const Blog = () => {
    
    const { data: blogs, isLoading, error} = useFetch('https://ddhairya.github.io/json/blog.json')
    
    return(                
        <Jumbotron > 
            {/* Load the data from the json server */}
            {error && <div> {error} </div>}
            {isLoading && <div>Loading from github pages..</div>}
            {blogs && 
                <CardColumns>                
                    {blogs.map((item) => CardDisplay(item))}
                </CardColumns>
            }
            {/* Load the data from firestore */}
            
        </Jumbotron>
        
    )
}


export default Blog