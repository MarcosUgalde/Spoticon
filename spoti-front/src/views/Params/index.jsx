import Styled from './styles'
import Inputrange from "../../components/Rangeinput"

const ParamsInsertion = () => {
    return (
        <Styled.Body>
            <h1>Parámetros manuales</h1>
            <div>
                <Inputrange />
            </div>
            <button>Continuar</button>
        </Styled.Body>
    )
}

export default ParamsInsertion