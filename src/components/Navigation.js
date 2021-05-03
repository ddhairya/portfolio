import Navbar from 'react-bootstrap/Navbar'
//import Nav from 'react-bootstrap/Nav'
import brandlogowhite from "../assets/images/logo_white.png";
import brandlogoblack from "../assets/images/logo_black.png";
import styled from "styled-components";
import GlobalStyle from "../assets/styles/global";



const Style = styled.div`
.brandlogo{
    
}
`;
//target.childNodes[0].attributes[1].nodeValue

var brandlogo = brandlogowhite;

const Navigation = () => {
    return(

        <GlobalStyle>
            <Style>
                <Navbar bg="light" expand="lg">
                    <div>
                        <Navbar.Brand href="/portfolio/" 
                            onMouseOver = { () => { document.getElementById("brandlogo").src = brandlogoblack;}}
                            onMouseOut = {() => { document.getElementById("brandlogo").src = brandlogowhite;}}
                        >
                            <img className='brandlogo' id='brandlogo' src={brandlogo} alt="knowledge" />
                            <span className='brandtitle'> knowλεδγε | egdelwΩνκ</span>
                        </Navbar.Brand>
                        
                    </div>                    
                </Navbar>
            </Style>
        </GlobalStyle>

    )    
}


export default Navigation;