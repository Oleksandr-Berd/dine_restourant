import * as React from 'react';
import * as SC from './FormStyled';
import Dropdown from 'react-bootstrap/Dropdown';
import { useFormik } from 'formik';
import { useReducer, ChangeEvent } from 'react';
import { reducer, CounterActionType } from '../../utils/reducer';
import { toast } from 'react-toastify';

interface IValues {
    name: string,
    email: string,
    hour: number,
    minutes: number,
    day: number | null,
    month: number | null,
    year: number | null,
    dayPart: string,
}

interface IProps {
    submit: (object: object) => void;
}

const BookingForm: React.FC<IProps> = ({ submit }): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, { quantity: 1 });

    const incrementQuantity = (): void => dispatch({ type: CounterActionType.INCREMENT });
    const decrementQuantity = (): void => dispatch({ type: CounterActionType.DECREMENT });

    const formik = useFormik<IValues>({
        initialValues: {
            name: '',
            email: '',
            day: null,
            month: null,
            year: null,
            hour: 9,
            dayPart: "AM",
            minutes: 0,
            

        },
        onSubmit: (values) => {

            console.log(values);
        },
    });

    const { name, email, day, month, year, hour, minutes, dayPart } = formik.values;


    const handleValuesChange = (evt: ChangeEvent<HTMLInputElement>): void => {

        
        setTimeout(() => { formik.handleChange(evt) }, 300)

    }

    const handleTimeChange = (value: string | null): void => {
        if (value !== null) {
            formik.setFieldValue('dayPart', value);
        }
    };


    const handleSubmit = (evt: ChangeEvent<HTMLFormElement>): void => {
        evt.preventDefault()

        
        const values = Object.values(formik.values)

        const validationValues = values.slice(0, values.length -1)
       


        validationValues.every(el => el) ? submit({ name: name, email: email, date: { day: day, month: month, year: year }, time: { hour: hour, minute: minutes }, persons: state.quantity, dayPart: dayPart }) : toast.error('You need to fill all fields!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        
    }


    

    return (
        <SC.CommonContainer>
            <SC.StyledForm onSubmit={handleSubmit}>
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
                    <Dropdown onSelect={handleTimeChange}>
                        <SC.ToggleButton variant="success" id="dropdown-basic">
                            {dayPart}
                        </SC.ToggleButton>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="AM">AM</Dropdown.Item>
                            <Dropdown.Item eventKey="PM">PM</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </SC.DateContainer>

                <SC.QuantityContainer>
                    <SC.QuantityButton onClick={decrementQuantity} type='button'>-</SC.QuantityButton>
                    <span>{state.quantity} people</span>
                    <SC.QuantityButton onClick={incrementQuantity} type="button">+</SC.QuantityButton>
                </SC.QuantityContainer>

                <SC.SubmitButton type='submit' >make reservation</SC.SubmitButton>
            </SC.StyledForm>
        </SC.CommonContainer>
    );
};

export default BookingForm;
