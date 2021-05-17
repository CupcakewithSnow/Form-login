import { text } from "../../../../lib/common/text";

export function FooterFormComponent({FooterField}){
    return (
        <div>{text(FooterField)}</div>
    )
}