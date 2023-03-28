import styled from "styled-components";
import StyleDiv from "styled-components";
import bg from "./bgimage.jpg";
export const FormBox = styled.div`
    background: url(${bg}), no-repeat center;
    background-size: cover;
    width: 365px;
    height: 100vh;
`;
export const StyleForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 100%;
    height: 100%;
`;
