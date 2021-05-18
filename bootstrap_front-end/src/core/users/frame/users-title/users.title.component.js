import { text } from "../../../../lib/common/text";
import { TextSecondary, TextTitle } from "../../../../lib/elements/text";

export function UserTitleComponent(props) {
    const {
        tid
    } = props
    return (
        <TextTitle tid={text(tid)}/>
    )
}