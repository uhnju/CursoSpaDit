import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

function Page1 () {

    const navigate = useNavigate()

    const handlePagina2 = () => {
        navigate('/page2')
    }

    return(
        <>        
        <h1 className="mb-3">Hola Mundo 1</h1>

        <Button variant="primary" onClick={() => handlePagina2()}>Ir a página 2</Button>
        </>
    )

}

export default Page1