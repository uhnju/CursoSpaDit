import React from 'react';
import { Link } from 'react-router-dom';

const ConceptsPage = () => {
    return (
        <>
            <h1>Conceptos Básicos de React</h1>
            <p>
                Aquí encontrarás ejemplos prácticos de los conceptos fundamentales de React. Haz clic en cualquiera de los ejemplos para explorarlos:
            </p>
            <ul>
                <li>
                    <Link to="/concepts/event-handling">
                        Manejo de eventos
                    </Link>
                </li>
                <li>
                    <Link to="/concepts/conditional-rendering">
                        Renderizado condicional
                    </Link>
                </li>
                <li>
                    <Link to="/concepts/list-rendering">
                        Renderizado de listas
                    </Link>
                </li>
                <li>
                    <Link to="/concepts/component-composition">
                        Composición de componentes
                    </Link>
                </li>
                <li>
                    <Link to="/concepts/props-vs-state">
                        Props vs State
                    </Link>
                </li>
            </ul>
            <p>
                Cada ejemplo incluye una explicación detallada y código para que puedas practicar y entender mejor los conceptos. ¡Explora libremente y aprende React!
            </p>
        </>
    );
};

export default ConceptsPage;
