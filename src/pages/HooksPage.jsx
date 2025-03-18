import React from 'react';
import { Link } from 'react-router-dom';

const HooksPage = () => {
    return (
        <>
            <h1>Hooks Examples</h1>
            <ul>
                <li><Link to="/hooks/usestate">useState</Link></li>
                <li><Link to="/hooks/useeffect">useEffect</Link></li>
                <li><Link to="/hooks/usecontext">useContext</Link></li>
            </ul>
        </>
    );
};

export default HooksPage;
