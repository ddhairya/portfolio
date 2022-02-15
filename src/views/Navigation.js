import { Navbar, Nav, Image } from 'react-bootstrap';
import brandlogowhite from "../assets/images/logo_white.png";
import brandlogoblack from "../assets/images/logo_black.png";
import GitHubBlack from "../assets/images/github_black.png";
import GitHubCyan from "../assets/images/github_cyan.png";
import LinkedinCyan from "../assets/images/in_cyan.png";
import WordpressBlack from "../assets/images/wordpress_black.png";
import WordpressCyan from "../assets/images/wordpress_cyan.png";
import navlogo from "../assets/images/menu.png";
import AdminBlack from "../assets/images/admin_black.png";
import LinkedinBlack from "../assets/images/in_black.png";
import styled from "styled-components";
import GlobalStyle from "../assets/styles/global";
import {MouseOverOut, CollapseToggleMenu} from "../components/GlobalFun";
import {Link} from "react-router-dom";


// Particular CSS
const Style = styled.div`
.navbar-toggler-icon{
    background-image: url(${navlogo})
}
`;


// Handle the social media
const SocialMedia = ({src, alt, href, id, hoverimg}) => <a className="social_media_link" href={href} 
                                                            onMouseOver={() => MouseOverOut(hoverimg, id)} 
                                                            onMouseOut={() => MouseOverOut(src, id)} 
                                                        >
                                                            <Image id={id} className="social_media_icon" alt={alt} src={src}/>
                                                        </a>
                                                    
const Navigation = () => {
    return(
        <GlobalStyle>
            <Style>
                <Navbar collapseOnSelect expand="lg">                       
                    <Navbar.Brand as={Link} to="/portfolio/" 
                        onMouseOver = {() => MouseOverOut(brandlogoblack, "brandlogo")}
                        onMouseOut = {() => MouseOverOut(brandlogowhite, "brandlogo")}
                    >
                        <Image className='brandlogo' id='brandlogo' src={brandlogowhite} alt="knowledge" />
                        <span className='brandtitle'>κνΩwλεδγε </span>      
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto justify-content-center">
                            <Nav.Link as={Link} eventkey="1" to="/portfolio/project" className="menuTitle">Projects</Nav.Link>
                            <a  href="https://ddhairya.wordpress.com/aboutme/" className="menuTitle hoverNone">About Me</a>
                            <Nav.Link as={Link} eventkey="3" to="/portfolio/admin" className="menuTitle"><Image className="adminLogin" alt="admin" src={AdminBlack}/></Nav.Link>
                        </Nav>
                        <Nav className="ml">
                            <div>
                                <SocialMedia id="github" href="https://github.com/ddhairya" alt="GitHub" src={GitHubCyan} hoverimg={GitHubBlack}/>
                                <SocialMedia id="linked" href="https://www.linkedin.com/in/ddhairya-pm-developer/" alt="Linkedin" src={LinkedinCyan} hoverimg={LinkedinBlack}/>
                                <SocialMedia id="wordpress" href="https://ddhairya.wordpress.com/" alt="Wordpress" src={WordpressCyan} hoverimg={WordpressBlack}/>
                            </div>
                        </Nav>
                    </Navbar.Collapse>                    
                </Navbar>
                
            </Style>
        </GlobalStyle>
    )    
}

export default Navigation;

