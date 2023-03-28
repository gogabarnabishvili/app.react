import LabelInput from "../LabelInput/LabelInput";
import { StyleForm, FormBox, StyleJoinBtn } from "../Registration/StyleRegForm";
import { Stylelogo } from "../logo/StyleLogo";
import JoinBtn from "../joinButton/JoinButton";
const RegistrationPage = () => {
    return (
        <FormBox>
            <StyleForm>
                <Stylelogo>G.B</Stylelogo>
                <LabelInput name="name" type="text" id="name" />
                <LabelInput name="password" type="password" id="password" />
                <LabelInput name="email" type="email" id="email" />
                <JoinBtn text="finish" type="submit" />
            </StyleForm>
        </FormBox>
    );
};

export default RegistrationPage;
