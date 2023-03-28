import { Stylelogo } from "../logo/StyleLogo";
import { FormBox, StyleForm } from "../Registration/StyleRegForm";
import RenderExpensePost from "../midel-expense-box/ExpenseRender";
import LabelInput from "../LabelInput/LabelInput";
import JoinBtn from "../joinButton/JoinButton";
import SelectOpton from "../selecte/SelectOption";
import TotalRender from "../total/Total";
import { useState } from "react";
const postsInfoArr = [
    { id: 2, data: "20-20-20", category: "income", total: 20 },
    { id: 2, data: "20-20-20", category: "income", total: 20 },
    { id: 2, data: "20-20-20", category: "income", total: 20 },
];

const FilterSerch = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [minAmount, setMinAmount] = useState(undefined);
    const [maxAmount, setMaxAmount] = useState(undefined);
    const [selectedCategory, setSelectedCategory] = useState();

    const onSelectedDate = (date, dateString) => setSelectedDate(dateString);
    const onMinAmountChange = (e) => setMinAmount(e.target.value);
    const onMaxAmountChange = (e) => setMaxAmount(e.target.value);
    const onCategoryChange = (e) => setSelectedCategory(e.target.value);

    const onFiltersSubmit = () => {
        const minAmountInt = parseFloat(minAmount);
        const maxAmountInt = parseFloat(maxAmount);
        console.log({
            minAmountInt,
            maxAmountInt,
            selectedCategory,
            selectedDate,
        });
    };
    return (
        <FormBox>
            <StyleForm>
                <Stylelogo>G.B</Stylelogo>
                <LabelInput
                    type="date"
                    name="date"
                    text="date"
                    id="date"
                    onChange={onSelectedDate}
                />
                <LabelInput
                    type="radio"
                    text="expenses"
                    name="category"
                    id="expense"
                />
                <LabelInput
                    type="radio"
                    text="income"
                    name="category"
                    id="income"
                />

                <SelectOpton value="income" />
                <LabelInput
                    type="number"
                    text="maxamount"
                    name="maxamount"
                    id="maxamount"
                />
                <LabelInput
                    type="number"
                    text="minamount"
                    name="minamount"
                    id="minamount"
                />
                <JoinBtn type="button" text="serch" />

                <RenderExpensePost item={postsInfoArr} />
                <TotalRender item={postsInfoArr} />
            </StyleForm>
        </FormBox>
    );
};
export default FilterSerch;
