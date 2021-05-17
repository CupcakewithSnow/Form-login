import styled from 'styled-components'
import Link from 'next/link'
import {text} from '../../common/text'
import { THEME_SIZE, THEME_COLOR } from '../../theme'

export function LinkSecondary(props) {
    return <Text><Link href='/'><a>{text(props.tid, props.tvalue)}</a></Link></Text>
}
const Text = styled.span`
    font-size: ${THEME_SIZE.FONT.SMALL}
    color: ${THEME_COLOR.TEXT_SECODARY}
`