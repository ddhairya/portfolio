import styled from "styled-components";

const Style = styled.div`
    .brandlogo{
        width:64px;
    }
    .brandtitle{
        height:64px;
        font-size: 36px;
        font-weight:500;
        vertical-align: top;
        padding-left: 5px;
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
        }
    }
`;

export default Style;
