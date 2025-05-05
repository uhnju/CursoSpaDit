import { QueryForm, InputText, Utilidades } from '@dit/spad-rdit_library'
import { useNavigate } from 'react-router-dom'

const EjemploQueryForm = () => {
  const navigate = useNavigate()

  const formFields = [
    {
      component: InputText,
      props: { id: "USUARIO" },
      label: "Usuario ="
    },
    {
      component: InputText,
      props: { id: "MODULO" },
      label: "Módulo %"
    }
  ]

  interface Row {
    [key: string]: {
      value: string;
    };
  }

  const handleCellClick = (row: Row) => {
    // alert(JSON.stringify(row, null, 2));
    navigate("../EjemploQueryDetalle", { state: row })
  }

  return (
    <QueryForm
      title="Ejemplo de QueryForm"
      idForm="idForm"
      fields={formFields}
      searchEndpoint={Utilidades.getUrl("/wlpl/ADHT-AUDT/LogIntranetQuery")}
      configTable={{
        id: "idTableQuery",
        tableTitle: "Ejemplo de QueryForm"
      }}
      onClickCell={(row) => handleCellClick(row)}
    />
  )
}

export default EjemploQueryForm;