import LabelInput from "../LabelInput/LabelInput";
import JoinBtn from "../joinButton/JoinButton";
import { FormBox, StyleForm } from "./StyleRegForm";
import { Stylelogo } from "../logo/StyleLogo";
const RegisterForm = () => {
    return (
        <FormBox>
            <StyleForm>
                <Stylelogo>G.B</Stylelogo>
                <LabelInput name="name" type="text" />
                <LabelInput name="password" type="password" />
                <LabelInput name="fast join in" type="radio" />
                <JoinBtn text="join" type="submit" />
                <JoinBtn text="register" type="button" />
            </StyleForm>
        </FormBox>
    );
};

export default RegisterForm;
