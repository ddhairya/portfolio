import React, { useState } from "react";
import { Jumbotron, CardColumns, Image } from "react-bootstrap";
import CardDisplay from "../components/CardDisplay";
import useFetch from "../components/useFetch";
import GlobalStyle from "../assets/styles/global";
import firebaseCyan from "../assets/images/firebase.png";
import firebaseBlack from "../assets/images/firebase_black.png";
import LoadingEffect from "../components/LoadingEffect";


const Blog = () => {

    
    const [firebaseCont, setFirebase] = useState(false)
    const { data: blogs, isLoading, error} = useFetch('https://ddhairya.github.io/json/blog.json')
    
    const firebaseFun = () => {
        setFirebase(! firebaseCont)
        console.log("Clicked")
    }
    return( 
        <GlobalStyle>
        <Jumbotron > 
            {/* Load the data from the json server */}
            {error && <div className="errorMsg"> {error} </div>}
            
            {isLoading && <LoadingEffect/> }

            {blogs && 
                <CardColumns>                
                    {blogs.map((item) => CardDisplay(item))}
                </CardColumns>
            }
            {/* Load the data from firestore */}
            
            <div className="firebaseContainer" onClick={() => firebaseFun()}>
                <Image className="brandlogo" src={firebaseCyan}/> <span className="firebaseText">Click to load from <Image className="firebaseicon" src={firebaseBlack} /> firebase </span>
            </div>
            
            {firebaseCont && <LoadingEffect/>}
            
        </Jumbotron>
        </GlobalStyle>               
        
    )
}


export default Blog