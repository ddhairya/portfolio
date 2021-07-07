import {Carousel } from "react-bootstrap";

const ImageSlider = ({intTime, slidingImg}) =>  <Carousel>
                                                    {slidingImg.map((img , key)=> <Carousel.Item key={key} interval={2500}>
                                                                                        <img  className="  projectImage" src={img} alt="First slide" />
                                                                                    </Carousel.Item>
                                                                                )}
                                                </Carousel>
export default ImageSlider;