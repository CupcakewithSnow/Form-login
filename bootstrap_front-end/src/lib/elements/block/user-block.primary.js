import {spacing} from '../../theme'
import styled from 'styled-components'
import { THEME_COLOR} from '../../theme'
export const UserBlockPrimary = styled.div`
    border-radius:${spacing(1)};
    border-bottom: ${spacing(1)} solid ${THEME_COLOR.LIGHT_GRAY};
    padding:${spacing(1)};
    cursor:pointer;
    &:hover{
        border-bottom:${spacing(1)} solid ${THEME_COLOR.LIGH_BLUE}
    }
    
`