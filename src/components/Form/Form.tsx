import * as SC from "./FormStyled"

import Dropdown from 'react-bootstrap/Dropdown';
import { useFormik } from "formik";
import { QuantityButton } from './FormStyled';

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
        <SC.StyledForm>
            
            <SC.NameEmailInput type="text" placeholder="Name" />
            <SC.NameEmailInput type="email" placeholder="Email" />
            
            <SC.TitleContainer>
                <SC.Title>Pick a date</SC.Title>
            </SC.TitleContainer>
            <SC.DateContainer>
                <SC.DateInput type="number" min={1} max={12} placeholder="mm"/>
                <SC.DateInput type="number" min={1} max={31} placeholder="DD"/>
                <SC.DateInput type="number" min={2023} max={2025} placeholder="YYYY"/>
            </SC.DateContainer>
            <SC.TitleContainer>
                <SC.Title>Pick a time</SC.Title>
            </SC.TitleContainer>
            <SC.DateContainer>
                <SC.DateInput type="number" min={0} max={12} placeholder="09" />
                <SC.DateInput type="number" min={0} max={59} placeholder="00" />
                <Dropdown>
                    <SC.ToggleButton variant="success" id="dropdown-basic">
                        AM
                    </SC.ToggleButton>

                    <Dropdown.Menu>
                        <Dropdown.Item >AM</Dropdown.Item>
                        <Dropdown.Item >PM</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
               
            </SC.DateContainer>
            <SC.QuantityContainer>
                <SC.QuantityButton>-</SC.QuantityButton>
                <span>{peopleQuantity} people</span>
                <SC.QuantityButton>+</SC.QuantityButton>
            </SC.QuantityContainer>

            <SC.SubmitButton type="submit">make reservation</SC.SubmitButton>
        </SC.StyledForm>
    </SC.CommonContainer> );
}
 
export default BookingForm;