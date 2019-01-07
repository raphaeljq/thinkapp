import React from 'react'

import {Collection, CollectionItem, Modal, Row, Col, Card, Button, Collapsible, CollapsibleItem} from 'react-materialize'
import img1 from '../../images/bia.jpg'
import img2 from '../../images/nyl.jpg'
import img3 from '../../images/monick.jpg'

const Programacao = () => (
<div>
    <Row>
        <Col s={6} l={12}>
            <Row>
                <span className="programacao__mes">Jan</span>
                <span className="programacao__dia"> 24</span>
            </Row>
            
        </Col>
        <Col>
            <h5>Rodada de workshops dia 01</h5>
            <h6>Na sala comunal da grinfindoria</h6>
        </Col>
    </Row>
    <Row>
      <Col s={12} m={8} l={6} className="s2 l3">
        <Card horizontal> 
              <Row className="valign-wrapper">
             <Col s={4}>
                <img src={img1} alt="" class="circle responsive-img"/> 
             </Col>
             <Col s={8}>
             <h5 className="light-green accent-2">Bia Liane</h5>
             <span class="black-text">
                Magias, poções e feitiços contra mal olhado.
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
                <img src={img2} alt="" class="circle responsive-img"/> 
             </Col>
             <Col s={8}>
             <h5 className="light-green accent-2">Nyl Barbosa</h5>
             <span class="black-text">
                Uma viagem na terra do ilusionismo e arquitetura dos sonhos
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
                <img src={img3} alt="" class="circle responsive-img"/> 
             </Col>
             <Col s={8}>
             <h5 className="light-green accent-2">Monick Quaresma</h5>
             <span class="black-text">
                Truques e especialidades mágicas ocultas
              </span>
             </Col> 
            </Row>    
        </Card>
      </Col>
  </Row> 
  <Row>
      <Col s={12} m={8} l={6} className="s2 l3">
     
      <Card horizontal actions={ 
          <Modal
            header=' Truques e especialidades mágicas ocultas'
            trigger={<a href='#'>Saiba mais</a>}>
            <Row>
                <Col s={6} l={12}>
                    <Row>
                        <Col className="programacao__mes">Jan </Col>
                        <Col className="programacao__dia"> 24</Col>
                        <Col> 14h00-18h00 </Col>
                    </Row>
                    <Row>
                        
                        
                    </Row>
                    
                </Col>
                <Col>
                    <h5 className="light-green accent-2">Descrição</h5>
                    <p>Truques e especialidades mágicas ocultas</p>
                </Col>
                
             </Row>
             <Row className="valign-wrapper">
             <h5 className="light-green accent-2">Facilitadora</h5>
             <Col s={12}>
                <img src={img3} alt="" class="circle responsive-img"/> 
             </Col>
             <Col s={12}>
             <h5>Monick Quaresma</h5>
             <span class="black-text">
                Truques e especialidades mágicas ocultas
              </span>
             </Col> 
            </Row>
          </Modal>
                }> 
           <Row className="valign-wrapper">
             <Col s={4}>
                <img src={img3} alt="" class="circle responsive-img"/> 
             </Col>
             <Col s={8}>
             <h5 className="light-green accent-2">Monick Quaresma</h5>
             <span class="black-text">
                Truques e especialidades mágicas ocultas
              </span>
             </Col> 
            </Row>    
        </Card>  
      </Col>
  </Row> 
</div>    
) ;

export default Programacao;