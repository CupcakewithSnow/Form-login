import styled from 'styled-components'
import { text } from '../../common/text'
import { THEME_COLOR, THEME_SIZE } from '../../theme'

export function LoadingEvent(props) {
    return (
        <EventLoading tid={props.tid} />
    )
}
function EventLoading(props) {
    return (
        <Text>{text(props.tid)}</Text>
    )
}
const Text = styled.span`
    font-size: ${THEME_SIZE.FONT.SMALL}
    color: ${THEME_COLOR.TEXT_SECODARY}
`