import styled from "styled-components";

const Style = styled.div`
    .brandlogo{
        width:64px;

        @media(max-width:578px){
            width: 32px;
        }
    }
    .brandtitle{
        height:64px;
        font-size: 36px;
        font-weight:600;
        vertical-align: top;
        padding-left: 1rem;

        @media(max-width:578px){
            font-size: 24px;
            font-weight:400;
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

        &:hover{
            color:black;
            text-decoration: underline;
            text-decoration-color: #06bcee;
        }
    }

    .navbar-toggler {
        padding: 0.1rem 0.2rem;
    }
    .social_media_icon{
        
    }
`;

export default Style;
