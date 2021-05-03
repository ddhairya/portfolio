import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import brandlogo from "../assets/images/logo.png";
import styled from "styled-components";
import GlobalStyle from "../assets/styles/global";


const Style = styled.div`
.brandlogo{
    
}

`;



const Navigation = () => {
    return(

        <GlobalStyle>
            <Style>
                <Navbar bg="light" expand="lg">
                    <div>
                        <Navbar.Brand href="/portfolio/">
                            <img className='brandlogo' src={brandlogo} alt="knowledge" />
                            <span className='brandtitle'> knowλεδγε | egdelwΩνκ</span>
                        </Navbar.Brand>
                        
                    </div>
                    
                </Navbar>
                <p class='title'>Hello</p>
            </Style>
        </GlobalStyle>

    )    
}


export default Navigation;