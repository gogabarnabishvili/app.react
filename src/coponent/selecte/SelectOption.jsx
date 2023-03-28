import { StyleSection, StyleOption } from "./StyleSelectOption";
const SectionOption = (props) => {
    return (
        <StyleSection>
            <StyleOption>{props.value}</StyleOption>
        </StyleSection>
    );
};
export default SectionOption;
