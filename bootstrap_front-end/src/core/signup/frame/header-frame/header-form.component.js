import { text } from "../../../../lib/common/text";

export function HeaderFormComponent({RegField}){
    return(
        <div>{text(RegField)}</div>
    )
}