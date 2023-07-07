import * as React from 'react';
import * as SC from './FormStyled';
import Dropdown from 'react-bootstrap/Dropdown';
import { useFormik } from 'formik';
import { useReducer, ChangeEvent } from 'react';
import { reducer, CounterActionType } from '../../utils/reducer';

interface IValues {
    name: string,
    email: string,
    hour: number,
    minutes: number,
    day: number,
    month: number,
    year: number,
}

const BookingForm = () => {
    const [state, dispatch] = useReducer(reducer, { quantity: 1 });

    const incrementQuantity = (): void => dispatch({ type: CounterActionType.INCREMENT });
    const decrementQuantity = (): void => dispatch({ type: CounterActionType.DECREMENT });

    const formik = useFormik<IValues>({
        initialValues: {
            name: '',
            email: '',
            day: 0,
            month: 0,
            year: 0,
            hour: 9,
            minutes: 0

        },
        onSubmit: (values) => {
            
            console.log(values);
        },
    });

    const { name, email, day, month, year, hour, minutes } = formik.values;


    const handleValuesChange = (evt: ChangeEvent<HTMLInputElement>): void => {
        setTimeout(() => { formik.handleChange(evt) }, 300)

    }

    const handleSubmit = (evt: ChangeEvent<HTMLInputElement>):void => {
    evt.preventDefault()
}



    return (
        <SC.CommonContainer>
            <SC.StyledForm>
                <SC.NameEmailInput type="text" placeholder="Name" name="name" onChange={handleValuesChange} />
                <SC.NameEmailInput type="email" placeholder="Email" name="email" onChange={handleValuesChange} />

                <SC.TitleContainer>
                    <SC.Title>Pick a date</SC.Title>
                </SC.TitleContainer>
                <SC.DateContainer>
                    <SC.DateInput type="number" min={1} max={12} placeholder="mm" name="month" onChange={handleValuesChange} />
                    <SC.DateInput type="number" min={1} max={31} placeholder="DD" name="day" onChange={handleValuesChange} />
                    <SC.DateInput type="number" min={2023} max={2025} placeholder="YYYY" name="year" onChange={handleValuesChange} />
                </SC.DateContainer>

                <SC.TitleContainer>
                    <SC.Title>Pick a time</SC.Title>
                </SC.TitleContainer>
                <SC.DateContainer>
                    <SC.DateInput type="number" min={0} max={12} placeholder="09" name="hour" onChange={handleValuesChange} />
                    <SC.DateInput type="number" min={0} max={59} placeholder="00" name="minutes" onChange={handleValuesChange} />
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
