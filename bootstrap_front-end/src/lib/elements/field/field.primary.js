import { text } from '../../common/text'
import { TextSecondary } from '../text'
import styled from 'styled-components'
import {THEME_COLOR,THEME_SIZE,spacing} from '../../theme'

export function FieldPrimary(props) {
    const {
        titleTid,
        onChange,
        onBlur,
        value,
        name,
        placeholderTid,
        error,
    } = props
    return (
        <Container>
            <Title tid={titleTid} />
            <Input
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                name={name}
                placeholder={text(placeholderTid)}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    )
}
const Container = styled.div`
    display:flex;
    flex-direction:column
`;
const Input = styled.input`
    background:${THEME_COLOR.LIGHT_GRAY};
    border-radius:${THEME_SIZE.RADIUS.FIELD};
    padding:${spacing(1),spacing(2)};
`;
const Title = styled(TextSecondary)`
    margin-bottom:${spacing(1)};
`;
const ErrorMessage = styled.span`
    color:${THEME_COLOR.ERROR};
    font-size:${THEME_SIZE.FONT.SMALL};
`;
