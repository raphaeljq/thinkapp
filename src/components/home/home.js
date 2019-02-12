// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Parallax, Slider,Slide, Collapsible, CollapsibleItem ,Carousel, Card, CardTitle, Footer} from 'react-materialize';
import Container from "react-materialize/lib/Container";
import Rodape from '../rodape/rodape'
import fundo from '../../images/fundo-1350.jpeg'
const Home = () => (
  <div>
  <Row>
    <header className="center-align">
      <h4>Titulo mais importante</h4>
      <h6>Design * Marketing Digital * Marca</h6>  
    </header>  
  </Row>  
  <Row>    
      <Parallax imageSrc={fundo} className="parallax-container responsive-img" />
  </Row>
  <Row>
      <Container>
        <Col className='l2 m2' s={12} m={8} l={8}><h3 className="header">Gestão</h3></Col>
      </Container>
  </Row>
  <Row>
      <Col l={2}></Col>
      <Col s={12} m={8} l={8} className="s2 l3">
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
    
  </Row>    
  
  <Row>
      <Container>
        <Col className='l2 m2' s={12} m={8} l={8}><h3 className="header">Posicionamento</h3></Col>
      </Container>
  </Row>
  <Row>
      <Col l={2}></Col>
      <Col s={12} m={8} l={8} className="s2 l3">
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
    
  </Row>    
  <Row>
      <Container>
        <Col className='l2 m2' s={12} m={8} l={8}><h3 className="header">Relacionamento</h3></Col>
      </Container>
  </Row>
  <Row>
    <Col l={2}></Col>
      <Col s={12} m={8} l={8} className="s2 l3">
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
    
  </Row>    
  <Row>
    <Col l={2}></Col>
      <Col s={12} m={8} l={8} className="s2 l3">
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
    
  </Row>
  <Row className="marg0">    
      <Parallax imageSrc={fundo} className="parallax-container responsive-img" />
  </Row>  
 <Rodape/>
 

  
  </div>
);

export default Home;