import styled from 'styled-components'
import { text } from '../../common/text'
import { THEME_COLOR, THEME_SIZE } from '../../theme'

export function ErrorEvent(props) {
    return (
        <MessageError errorMessage={props.errorMessage}/>
    )
}
function MessageError(props) {
    return (
        <Text>{props.errorMessage}</Text>
    )
}
const Text = styled.span`
    font-size: ${THEME_SIZE.FONT.SMALL}
    color: ${THEME_COLOR.TEXT_SECODARY}
`