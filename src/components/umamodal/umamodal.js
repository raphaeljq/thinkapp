import React from React

import {Collection, CollectionItem, Modal }from 'react-materialize'

const UmaModal = () => (
<Modal
            header=' Truques e especialidades mágicas ocultas'
            trigger={<a href='#'>Saiba mais</a>}>
            <Row>
        
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

)

export default UmaModal;