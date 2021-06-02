import React, { useState } from "react";
import { Jumbotron, CardColumns, Image } from "react-bootstrap";
import CardDisplay from "../components/CardDisplay";
import useFetch from "../components/useFetch";
import GlobalStyle from "../assets/styles/global";
import firebaseCyan from "../assets/images/firebase.png";
import firebaseBlack from "../assets/images/firebase_black.png";
import LoadingEffect from "../components/LoadingEffect";
import firebase from "../model/Firebase";


const Blog = () => {
    
    const [firebaseLoading, setFirebaseLoading] = useState(false)
    const { data: blogs, isLoading, error} = useFetch('https://ddhairya.github.io/json/blog.json')
    const ref=firebase.firestore().collection('blogs');
    const [fireBlogs,setFireBlogs]=useState([])
   
    const firebaseFun = () => {
        setFirebaseLoading(true)
        ref.onSnapshot((querySnapshot) => {
            const item = []
            querySnapshot.forEach((blog) => {
                item.push(blog.data())
                // console.log(blog.data())
            });
            setFireBlogs(item)
            setFirebaseLoading(false)
            // console.log(fireBlogs)
        })
        
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
                <Image className="brandlogo" src={firebaseCyan}/> <span className="firebaseText">Load from firebase <Image className="firebaseicon" src={firebaseBlack} /> firestore </span>
            </div>
            
            {firebaseLoading && <LoadingEffect/>}
            {! firebaseLoading && 
                <CardColumns>
                    {fireBlogs.map((item) => CardDisplay(item))}
                </CardColumns>
            }
            
        </Jumbotron>
        </GlobalStyle>               
        
    )
}


export default Blog