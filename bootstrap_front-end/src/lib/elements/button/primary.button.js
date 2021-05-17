import styled from 'styled-components'
import { text } from '../../common/text'
import { THEME_COLOR, THEME_SIZE } from '../../theme'
export function PrimaryButton(props){
    const{
        tvalue,
        type,
    } = props
    return(
        <Button type={type}>{text(tvalue)}</Button>
    )
}
    
const Button = styled.button`
    background:${THEME_COLOR.LIGH_BLUE};
    border-radius:${THEME_SIZE.RADIUS.BUTTON};
`