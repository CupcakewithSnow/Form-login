import { text } from '../../common/text'
import { TextSecondary } from '../text'
import { spacing } from '../../theme'
import styled from 'styled-components'
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
    background:#f3f3f3;
    border-radius:5px;
    padding:5px 10px;
`;
const Title = styled(TextSecondary)`
    margin-bottom:${spacing(1)};
`;
const ErrorMessage = styled.span`
    color:red;
    font-size:14px;
`;
