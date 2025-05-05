import { Fragment} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ActionBar, OutputData } from '@dit/spad-rdit_library'

const EjemploQueryDetalle = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  return (
    <>
      <ActionBar>
        <ActionBar.Item label="Volver" value="Volver" onClick={() => navigate(-1)} />
      </ActionBar>
      <h1>Detalle</h1>
      {
        Object.keys(state).map((key) => {
          return (
            <Fragment key={key}>
              <br />
              <OutputData literal={key} valor={state[key].value} />
            </Fragment>
          )
        })
      }
    </>
  )
}

export default EjemploQueryDetalle;