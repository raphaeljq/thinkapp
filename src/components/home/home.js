// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Slider,Slide, Collapsible, CollapsibleItem ,Carousel, Card, CardTitle, Footer} from 'react-materialize';
import Container from "react-materialize/lib/Container";
import Rodape from '../rodape/rodape'

const Home = () => (
  <div>
    
  <Row>
    
    
    <Col className="offset-l2" m={12} s={12} l={8}>
    <Container>
      <img className="responsive-img" src="https://instagram.fmcp2-1.fna.fbcdn.net/vp/7638c2f0fd753b935999fa46fbdbdc1c/5CD9EF75/t51.2885-15/sh0.08/e35/s750x750/47584129_278485152864940_5166941180400665504_n.jpg?_nc_ht=instagram.fmcp2-1.fna.fbcdn.net"
/>    </Container>
</Col>
    
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
 <Rodape/>
 

  
  </div>
);

export default Home;