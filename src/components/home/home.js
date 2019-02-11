// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Slider,Slide, Collapsible, CollapsibleItem ,Carousel, Card, CardTitle} from 'react-materialize';
import Container from "react-materialize/lib/Container";

const Home = () => (
  <div>
    
  <Row>
    <Container>
    
    <Col m={12} s={12} l={12} className="home__linha">
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
    </Container>
  </Row>
  <Row>
      <Container>
        <Col className='l2 m2' s={12} m={8} l={8}><h3 className="header">Gestão</h3></Col>
      </Container>
  </Row>
  <Row>
    <Container>
      <Col s={12} m={12} l={12}>
        <Card horizontal actions={[<a href='#'>This is a link</a>]}> 
           <Row className="valign-wrapper">
             <Col s={6  }>
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
    </Container>
  </Row>    
  <Row>
    <Container>
      <div className="col s12 m12 l12">
            <div className="card-panel grey lighten-5 z-depth-1">
              <div className="row valign-wrapper">
                <div className="col s2">
                  <img src="images/yuna.jpg" alt="" className="circle responsive-img"/> 
                </div>
                <div className="col s10">
                  <span className="black-text">
                    This is a square image. Add the "circle" class to it to make it appear circular.
                  </span>
                </div>
              </div>
            </div>
        </div> 
    </Container> 
  </Row>
  <Row>
      <Container>
        <Col className='l2 m2' s={12} m={8} l={8}><h3 className="header">Posicionamento</h3></Col>
      </Container>
  </Row>
  <Row>
    <Container>
      <Col s={12} m={12} l={12}>
        <Card horizontal actions={[<a href='#'>This is a link</a>]}> 
           <Row className="valign-wrapper">
             <Col s={6  }>
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
    </Container>
  </Row>    
  <Row>
      <Container>
        <Col className='l2 m2' s={12} m={8} l={8}><h3 className="header">Relacionamento</h3></Col>
      </Container>
  </Row>
  <Row>
    <Container>
      <Col s={12} m={12} l={12}>
        <Card horizontal actions={[<a href='#'>This is a link</a>]}> 
           <Row className="valign-wrapper">
             <Col s={6  }>
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
    </Container>
  </Row>    
  
 

  
  </div>
);

export default Home;