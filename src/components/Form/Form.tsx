import * as React from 'react';
import * as SC from './FormStyled';
import Dropdown from 'react-bootstrap/Dropdown';
import { useFormik } from 'formik';
import { useReducer } from 'react';
import { reducer, CounterActionType } from '../../utils/reducer';

const BookingForm = () => {
    const [state, dispatch] = useReducer(reducer, { quantity: 1 });

    const incrementQuantity = () => dispatch({ type: CounterActionType.INCREMENT });
    const decrementQuantity = () => dispatch({ type: CounterActionType.DECREMENT });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            date: '',
            time: '',
            peopleQuantity: 1,
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const { peopleQuantity } = formik.values;

    return (
        <SC.CommonContainer>
            <SC.StyledForm>
                <SC.NameEmailInput type="text" placeholder="Name" />
                <SC.NameEmailInput type="email" placeholder="Email" />

                <SC.TitleContainer>
                    <SC.Title>Pick a date</SC.Title>
                </SC.TitleContainer>
                <SC.DateContainer>
                    <SC.DateInput type="number" min={1} max={12} placeholder="mm" />
                    <SC.DateInput type="number" min={1} max={31} placeholder="DD" />
                    <SC.DateInput type="number" min={2023} max={2025} placeholder="YYYY" />
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
                            <Dropdown.Item>AM</Dropdown.Item>
                            <Dropdown.Item>PM</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </SC.DateContainer>

                <SC.QuantityContainer>
                    <SC.QuantityButton onClick={decrementQuantity}>-</SC.QuantityButton>
                    <span>{state.quantity} people</span>
                    <SC.QuantityButton onClick={incrementQuantity}>+</SC.QuantityButton>
                </SC.QuantityContainer>

                <SC.SubmitButton type="submit">make reservation</SC.SubmitButton>
            </SC.StyledForm>
        </SC.CommonContainer>
    );
};

export default BookingForm;
