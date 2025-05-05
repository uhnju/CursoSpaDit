import { InputText, Button, Utilidades, axiosAPI } from "@dit/spad-rdit_library"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Form } from "react-bootstrap"

interface IHttpResponse {
    status: string;
    respuesta: {
        resultados: IHttpResultados[];
    }
}

interface IHttpResultados {
    [key: string]: {
        value: string;
    }
}

function Page2 () {

    const navigate = useNavigate()

    const [url, setUrl] = useState<string>(Utilidades.getUrl("/wlpl/SPAD-PLNR/JsonEjemploBackend", false))
    const [response, setResponse] = useState<IHttpResponse | null>(null)

    const volver = () => {
        navigate(-1)
    }

    const handleGet = async () => {
        await axiosAPI.get<IHttpResponse>(url)
        .then(response => {
            setResponse(response)
        })
        .catch(() => {
            setResponse(null)
        })
    }

    const handlePost = async () => {
        const formData = new FormData();
        formData.append("parametro", "valor")

        axiosAPI.post<IHttpResponse>(url, formData)
        .then(response => {
            setResponse(response)
        })
        .catch(() => {
            setResponse(null)
        })
    }

    return(
        <>
        <Button variant="link" className="mb-5" onClick={() => volver()}>&lt; Volver a la Página 1</Button>
        
        <h1 className="mb-3">Hola Mundo Página 2</h1>

        <Form.Label className="my-2">Test servicio javadit</Form.Label>

        <InputText id="urlTest" defaultValue={url} onChange={(e) => setUrl(e.target.value)} />
        <div className="py-3">
            <Button variant="primary" className="m-2" onClick={() => handleGet()}>GET</Button>
            <Button variant="primary" outline className="m-2" onClick={() => handlePost()}>POST</Button>
        </div>

        <h3>Respuesta:</h3>
        {
            response &&
            <pre>{JSON.stringify(response, null, 4)}</pre>
        }
        </>
    )

}

export default Page2