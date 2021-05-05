import { Navbar, Nav, NavLink, Image } from 'react-bootstrap';
import brandlogowhite from "../assets/images/logo_white.png";
import brandlogoblack from "../assets/images/logo_black.png";
import GitHubBlack from "../assets/images/github_black.png";
import GitHubCyan from "../assets/images/github_cyan.png";
import LinkedinCyan from "../assets/images/in_cyan.png";
import WordpressBlack from "../assets/images/wordpress_black.png";
import WordpressCyan from "../assets/images/wordpress_cyan.png";
import LinkedinBlack from "../assets/images/in_black.png";
import styled from "styled-components";
import GlobalStyle from "../assets/styles/global";




const Style = styled.div`
.brandlogo{
    
}
`;
//target.childNodes[0].attributes[1].nodeValue

const MouseOverOut = (img, id) => document.getElementById(id).src = img;
//const NavLink = () => {}
const SocialMedia = ({src, alt, href, id, hoverimg}) => {
    return(
        <a className="social_media_link" href={href}
            onMouseOver={() => MouseOverOut(hoverimg, id)}
            onMouseOut={() => MouseOverOut(src, id)} 
        >
            <Image id={id} className="social_media_icon" alt={alt} src={src}/>
        </a>
    )
}
const Navigation = () => {
    return(

        <GlobalStyle>
            <Style>
                <Navbar collapseOnSelect fixed='top'  expand="lg">                    
                    <Navbar.Brand href="/portfolio/" 
                        onMouseOver = {() => MouseOverOut(brandlogoblack, "brandlogo")}
                        onMouseOut = {() => MouseOverOut(brandlogowhite, "brandlogo")}
                    >
                        <Image className='brandlogo' id='brandlogo' src={brandlogowhite} alt="knowledge" />
                        <span className='brandtitle'>knowλεδγε | egdelwΩνκ</span> 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        </Nav>
                        <Nav className="ml">
                            <SocialMedia id="github" href="https://github.com/ddhairya" alt="GitHub" src={GitHubCyan} hoverimg={GitHubBlack}/>
                            <SocialMedia id="linked" href="https://github.com/ddhairya" alt="Linkedin" src={LinkedinCyan} hoverimg={LinkedinBlack}/>
                            <SocialMedia id="wordpress" href="https://github.com/ddhairya" alt="Wordpress" src={WordpressCyan} hoverimg={WordpressBlack}/>

                        </Nav>
                    </Navbar.Collapse>                    
                </Navbar>
            </Style>
        </GlobalStyle>

    )    
}


export default Navigation;