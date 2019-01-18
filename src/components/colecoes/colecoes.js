import React from "react"

const Colecoes = () => (
    <div>
            <ul className="collection">
                <li className="collection-item avatar">
                    <img src="https://react-materialize.github.io/img/yuna.jpg"  alt="" className="circle"></img>
                    <span className="title">Titulo</span>
                    <p>First line</p>
                    <p>second line</p>
                    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                </li>
                <li className="collection-item avatar">
                    <i className="material-icons circle">folder</i>
                    <span className="title">Titulo</span>
                    <p>Primeira linha</p>
                    <p>Segunda linha</p>
                    <a href="#!" className="secondary-content"><i className="material-icons">gradem</i></a>
                </li>
            </ul>
    </div>
)
export default Colecoes;