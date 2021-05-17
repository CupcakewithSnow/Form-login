import styled from 'styled-components'
import { text } from '../../common/text'
import { THEME_COLOR, THEME_SIZE } from '../../theme'

export function PendingEvent() {
    return (
        <EventPending tid='SIGNUP.SIGNUP_FORM.ACTION.PENDING'/>
    )
}
function EventPending(props) {
    return (
        <Text>{text(props.tid)}</Text>
    )
}
const Text = styled.span`
    font-size: ${THEME_SIZE.FONT.SMALL}
    color: ${THEME_COLOR.TEXT_SECODARY}
`