import * as SC from "./FormStyled"

import { useFormik } from "formik";

const BookingForm = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            date: "",
            time: "",
            peopleQuantity:1,
        }, onSubmit: (values) => {
            console.log(values);
        }
})
    const { peopleQuantity } = formik.values
    return (<SC.CommonContainer>
        <form>
            <SC.NameEmailInput type="text" placeholder="Name" />
            <SC.NameEmailInput type="email" placeholder="Email" />
            <h6>Pick a date</h6>
            <div>
                <SC.BookingInput type="number" min={1} max={12} placeholder="MM"/>
                <SC.BookingInput type="number" min={1} max={31} placeholder="DD"/>
                <SC.BookingInput type="number" min={2023} max={2025} placeholder="YYYY"/>
            </div>
            <div>
                <SC.BookingInput type="number" placeholder="09" />
                <SC.BookingInput type="number" placeholder="00" />
                <select>
                    <option value="AM"></option>
                    <option value="PM"></option>
                </select>
               
            </div>
            <div>
                <button>-</button>
                <span>{peopleQuantity}</span>
                <button>+</button>
            </div>

            <button type="submit">make reservation</button>
        </form>
    </SC.CommonContainer> );
}
 
export default BookingForm;