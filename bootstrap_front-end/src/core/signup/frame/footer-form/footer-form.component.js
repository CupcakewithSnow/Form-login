import { text } from "../../../../lib/common/text";
import { TextSecondary, LinkSecondary } from '../../../../lib/elements/text'
export function FooterFormComponent(props) {
    const {
        tvalueOne,
        tvalueTwo
    } = props
    return (
        <>
        <TextSecondary tid={text(tvalueOne)}></TextSecondary>
        <LinkSecondary tid={text(tvalueTwo)} />
        </>


    )
}