import { Navbar, Nav, NavLink, Image } from 'react-bootstrap';
import brandlogowhite from "../assets/images/logo_white.png";
import brandlogoblack from "../assets/images/logo_black.png";
import GitHubBlack from "../assets/images/github_black.png";
import GitHubCyan from "../assets/images/github_cyan.png";
import LinkedinCyan from "../assets/images/in_cyan.png";
import WordpressBlack from "../assets/images/wordpress_black.png";
import WordpressCyan from "../assets/images/wordpress_cyan.png";
import navlogo from "../assets/images/menu.png";
import AdminWhite from "../assets/images/admin_white.png";
import LinkedinBlack from "../assets/images/in_black.png";
import styled from "styled-components";
import GlobalStyle from "../assets/styles/global";
import {MouseOverOut} from "../components/GlobalFun";


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
                <Navbar collapseOnSelect fixed='top'  expand="lg">                    
                    <Navbar.Brand href="/portfolio/" 
                        onMouseOver = {() => MouseOverOut(brandlogoblack, "brandlogo")}
                        onMouseOut = {() => MouseOverOut(brandlogowhite, "brandlogo")}
                    >
                        <Image className='brandlogo' id='brandlogo' src={brandlogowhite} alt="knowledge" />
                        <span className='brandtitle'>κνΩwλεδγε </span>      
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto justify-content-center">
                        <Nav.Link href="/portfolio/" className="menuTitle">Home</Nav.Link>
                        <Nav.Link href="/portfolio/" className="menuTitle">About Me</Nav.Link>
                        <Nav.Link href="/portfolio/" className="menuTitle"><Image className="adminLogin" alt="admin" src={AdminWhite}/></Nav.Link>
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