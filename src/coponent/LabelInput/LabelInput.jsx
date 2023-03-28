import { StyleLabel, StyleInput, StyleForm } from "./StyleLabelInput";
const LabelInput = (props) => {
    return (
        <StyleLabel name={props.name} id={props.id}>
            {props.text}
            <StyleInput
                text={props.text}
                name={props.name}
                type={props.type}
                id={props.id}
            ></StyleInput>
        </StyleLabel>
    );
};

export default LabelInput;
