import {
    StyleTotalWrap,
    StyleTotalParagrap,
    StyleTotalSpan,
} from "./StyleTotal";

const TotalRender = (props) => {
    return props.item.map((e) => {
        <StyleTotalWrap>
            <StyleTotalParagrap>
                income :<StyleTotalSpan>{e.total.value}</StyleTotalSpan>
            </StyleTotalParagrap>
        </StyleTotalWrap>;
        <StyleTotalWrap>
            <StyleTotalParagrap>
                total :<StyleTotalSpan>{e.total}</StyleTotalSpan>
            </StyleTotalParagrap>
        </StyleTotalWrap>;
        <StyleTotalWrap>
            <StyleTotalParagrap>
                expenses :<StyleTotalSpan>{e.total}</StyleTotalSpan>
            </StyleTotalParagrap>
        </StyleTotalWrap>;
    });
};
export default TotalRender;
