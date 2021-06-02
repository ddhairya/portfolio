import styled from "styled-components";

const Style = styled.div`
    .brandlogo{
        width:64px;

        @media(max-width:578px){
            width: 48px;
        }
    }
    .brandtitle{
        height:64px;
        font-size: 32px;
        font-weight:500;
        vertical-align: top;
        padding: 1rem;
        margin-right: 1rem;

        @media(max-width:578px){
            font-size: 30px;
            font-weight:500;
            padding-left: 0.2rem;
        }
    }
    .navbar {
        background-color: #ffce02;
        padding: 1rem;
    }
    .navbar-brand{
        text-decoration: none;
        color:white;
        align-items: center;
        &:hover{
            color:black;
            text-decoration: underline;
            text-decoration-color: #06bcee;
        }
    }
    .navbar-nav {
        align-items: center;
    }
    .navbar-toggler {
        padding: 0.1rem 0.2rem;
    }
    .menuTitle{
        font-family:'Oswald';
        color: white !important;
        font-size: 1.5rem;
        margin: 0.5rem;

        @media(max-width:578px){
            font-size: 1.5rem;
            margin: 0rem;
        }

        &:hover{
            color:#06bcee !important;
        }
    }
    .adminLogin{
        width:48px;
    }
    .social_media_icon{
        margin:1rem;

        @media(max-width:578px){
            width:48px;
            margin:1rem;
        }   
    }
    .content{
        margin-top:7rem;
        @media(max-width:578px){
          margin-top:6rem;
        }
        @media(min-width:992px){
            margin-top:8rem;
        }
    }
    .jumbotron {
        padding:2rem;
        background-color:transparent;
    }  
    .tileHeader{
        color:#06bcee !important;
        font-family:'Oswald';
        background-color: transparent;
        font-size:16px;
        padding:0.75rem 0.65rem;
        text-align: center;
        @media(max-width:578px){
            font-size:12px;
        }
    }
    .tileBody{
        color:black !important;
        font-family:'Omnes';
        font-size:15px;
    }
    .pinImage{
        width:24px;
        height:24px;
        position: absolute;
        left: 0;
        top: -1px;
    }
    .firebaseContainer{
        margin: 2rem 1rem;
        cursor:grab;
        @media(max-width:578px){
            margin: 2rem 0.5rem;
        }
    }
    .firebaseText{
        position: relative;
        left: -20px;
        background-color: #06bcee;
        border-radius: 30px;
        padding: 0.15rem 1rem;
        font-family: 'Oswald';
        @media(max-width:578px){
            left: -17px;
            padding: 0.15rem 0.5rem;
            border-radius: 10px;
        }
    }
    .firebaseicon{
        width:18px;
    }
    
`;

export default Style;
