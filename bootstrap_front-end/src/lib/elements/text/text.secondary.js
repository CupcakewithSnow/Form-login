import { text } from '../../common/text'
import styled from 'styled-components'
import { THEME_SIZE, THEME_COLOR, spacing } from '../../theme'

export function TextSecondary(props) {
    return <Text>{text(props.tid, props.tvalue)}</Text>
}
const Text = styled.span`
    font-size: ${THEME_SIZE.FONT.SMALL};
    color: ${THEME_COLOR.TEXT_SECODARY};
    padding:${spacing(2)}
`;