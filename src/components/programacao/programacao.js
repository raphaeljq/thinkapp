import React from 'react'

import {Collection, CollectionItem} from 'react-materialize'

const Programacao = () => (
<div>
    <Collection>
    <CollectionItem href='#'>
            <h5 className="indigo lighten-5">Teste 1</h5>
            <p>Primeira linha do primeiro teste</p>
    </CollectionItem>
    <CollectionItem href='#' >Alvin</CollectionItem>
    <CollectionItem href='#'>Alvin</CollectionItem>
    <CollectionItem href='#'>Alvin</CollectionItem>
    </Collection>
</div>    
) ;

export default Programacao;