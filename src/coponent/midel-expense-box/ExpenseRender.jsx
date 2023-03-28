import {
    StyleExpenseBox,
    StyleExpenseWraper,
    StyleRenderParagrap,
    StyleRenderSpan,
} from "./StyleExpensesRender";

const RenderExpensePost = (props) => {
    return (
        <StyleExpenseWraper>
            {props.item.map((e) => (
                <StyleExpenseBox>
                    <StyleRenderParagrap>
                        date:
                        <StyleRenderSpan>{e.data}</StyleRenderSpan>
                    </StyleRenderParagrap>
                    <StyleRenderParagrap>
                        type:
                        <StyleRenderSpan>{e.category}</StyleRenderSpan>
                    </StyleRenderParagrap>
                    <StyleRenderParagrap>
                        total:
                        <StyleRenderSpan>{e.total}</StyleRenderSpan>
                    </StyleRenderParagrap>
                </StyleExpenseBox>
            ))}
        </StyleExpenseWraper>
    );
};

export default RenderExpensePost;
