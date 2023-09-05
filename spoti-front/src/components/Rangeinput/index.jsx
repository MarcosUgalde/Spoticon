import Styled from './styles'

const Inputrange = () => {
    return (
        
            <Styled.Input>
                <input type="range" id="instrumentalness" min="0" max="1" step="0.1" value="1"></input>
                <Styled.Labels>
                    <label htmlFor="instrumentalness" value="0">Instrumental</label>
                    <label htmlFor="instrumentalness" value="1">Vocal</label>
                </Styled.Labels>
            </Styled.Input>
        
    )
}

export default Inputrange