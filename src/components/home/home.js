// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Slider,Slide, Collapsible, CollapsibleItem ,Carousel, Card, CardTitle} from 'react-materialize';

const Home = () => (
  <div>
  <Row >
    <Col l={2}></Col>
    <Col m={12} s={12} l={8} className="home__linha">
    <Slider>
      <Slide 
        src="https://instagram.fmcp2-1.fna.fbcdn.net/vp/338b9e29aeefd7dd07f793777a78b90d/5CB4C03F/t51.2885-15/sh0.08/e35/s640x640/46705555_279402092779777_5239452596165776602_n.jpg?_nc_ht=instagram.fmcp2-1.fna.fbcdn.net"
        
        >
        
      </Slide>
      <Slide
        src="https://instagram.fmcp2-1.fna.fbcdn.net/vp/7638c2f0fd753b935999fa46fbdbdc1c/5CD9EF75/t51.2885-15/sh0.08/e35/s750x750/47584129_278485152864940_5166941180400665504_n.jpg?_nc_ht=instagram.fmcp2-1.fna.fbcdn.net"
        >
        
      </Slide>
      <Slide
        src="https://instagram.fmcp2-1.fna.fbcdn.net/vp/fd1197c13babc6c7c0d0230f234c0203/5CB81698/t51.2885-15/sh0.08/e35/s750x750/47583610_1959457537508640_2149593437217144809_n.jpg?_nc_ht=instagram.fmcp2-1.fna.fbcdn.net"
        >
        
      </Slide>
      <Slide
        src="https://instagram.fmcp2-1.fna.fbcdn.net/vp/44a69a452a2d5ef8ba8924dfa87ed7e3/5CD726CA/t51.2885-15/sh0.08/e35/s640x640/47584954_2265166280385665_21744390351755697_n.jpg?_nc_ht=instagram.fmcp2-1.fna.fbcdn.net"
        >
        
      </Slide>
  
    </Slider>
    
    </Col>
  </Row>

  <Row>
      <Col s={12} m={8} l={6} className="s2 l3">
        <Card horizontal actions={[<a href='#'>This is a link</a>]}> 
           <Row className="valign-wrapper">
             <Col s={4}>
                <img src="https://react-materialize.github.io/img/yuna.jpg" alt="" class="circle responsive-img"/> 
             </Col>
             <Col s={8}>
             <span class="black-text">
                This is a square image. Add the "circle" class to it to make it appear circular.
              </span>
             </Col> 
            </Row>    
        </Card>
      </Col>
  </Row>    
  <Row>
      <Col s={12} m={8} l={6} className="s2 l3">
        <Card horizontal actions={[<a href='#'>This is a link</a>]}> 
           <Row className="valign-wrapper">
             <Col s={4}>
                <img src="https://react-materialize.github.io/img/yuna.jpg" alt="" class="circle responsive-img"/> 
             </Col>
             <Col s={8}>
             <span class="black-text">
                This is a square image. Add the "circle" class to it to make it appear circular.
              </span>
             </Col> 
            </Row>    
        </Card>
      </Col>
  </Row>    
  <Row>
      <Col s={12} m={8} l={6} className="s2 l3">
        <Card horizontal actions={[<a href='#'>This is a link</a>]}> 
           <Row className="valign-wrapper">
             <Col s={4}>
                <img src="https://react-materialize.github.io/img/yuna.jpg" alt="" class="circle responsive-img"/> 
             </Col>
             <Col s={8}>
             <span class="black-text">
                This is a square image. Add the "circle" class to it to make it appear circular.
              </span>
             </Col> 
            </Row>    
        </Card>
      </Col>
  </Row>    
  
  
 

  
  </div>
);

export default Home;