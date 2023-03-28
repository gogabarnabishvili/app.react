import { StyleJoinBtn } from "./StyleJoinButton";

const JoinBtn = (props) => {
    return (
        <StyleJoinBtn type={props.type} onClick={props.onClick}>
            {props.text}
        </StyleJoinBtn>
    );
};
export default JoinBtn;
