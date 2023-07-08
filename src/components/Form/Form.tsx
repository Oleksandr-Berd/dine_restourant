import * as React from 'react';
import * as SC from './FormStyled';
import Dropdown from 'react-bootstrap/Dropdown';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useReducer, ChangeEvent } from 'react';
import { reducer, CounterActionType } from '../../utils/reducer';
import { toast } from 'react-toastify';
import { useMediaQuery } from 'usehooks-ts';

interface IValues {
    name: string,
    email: string,
    hour: number | null,
    minutes: number | string,
    day: number | null,
    month: number | null,
    year: number | null,
    dayPart: string,
}

interface IProps {
    submit: (object: object) => void;
}

const InputDataSchema = Yup.object().shape({

    name: Yup.string().min(3, "Name can't be so short").required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    day: Yup.number().positive().integer().min(1).max(31).required("Day is required"),
    month: Yup.number().positive().integer().min(1).max(12).required("Month is required"),
    year: Yup.number().positive().integer().min(2023).max(2026).required("Year is required"),
    hour: Yup.number().positive().integer().min(0).max(12).required("Hour is required"),
    minutes: Yup.number().positive().integer().min(0).max(59).required("Minutes is required"),

});

const BookingForm: React.FC<IProps> = ({ submit }): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, { quantity: 1 });

    const incrementQuantity = (): void => dispatch({ type: CounterActionType.INCREMENT });
    const decrementQuantity = (): void => dispatch({ type: CounterActionType.DECREMENT });

    const isTablet = useMediaQuery('(min-width:768px)');


    const formik = useFormik<IValues>({
        initialValues: {
            name: '',
            email: '',
            day: null,
            month: null,
            year: null,
            hour: null,
            dayPart: "AM",
            minutes: "",


        },
        validationSchema: InputDataSchema,
        onSubmit: (values, { resetForm }) => {

            console.log(values);
            resetForm()
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

        const validationValues = values.slice(0, values.length - 1)

        const initialValues = {
            name: '',
            email: '',
            day: null,
            month: null,
            year: null,
            hour: null,
            dayPart: "AM",
            minutes: "",


        }

        validationValues.every(el => el) ?
            submit({ name: name, email: email, date: { day: day, month: month, year: year }, time: { hour: hour, minute: minutes }, persons: state.quantity, dayPart: dayPart }) 
            : toast.error('You need to fill all fields!', {
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
        <SC.CommonContainer id='reserve'>
            <SC.StyledForm onSubmit={handleSubmit}>
                <SC.InputContainer>
                    <SC.NameEmailInput type="text" placeholder="Name" name="name" onChange={handleValuesChange} $filled={name.length > 0 ? "true" : "false"} $isError={formik.errors.name ? "true" : "false"} />
                    {formik.errors.name ? <SC.ErrorStyled>{formik.errors.name}</SC.ErrorStyled > : <SC.ErrorStyled style={{ color: "transparent" }}>error</SC.ErrorStyled>}
                </SC.InputContainer>
                <SC.InputContainer>
                    <SC.NameEmailInput type="email" placeholder="Email" name="email" onChange={handleValuesChange} $filled={email.length > 0 ? "true" : "false"} $isError={formik.errors.email ? "true" : "false"} />
                    {formik.errors.email ? <SC.ErrorStyled>{formik.errors.email}</SC.ErrorStyled> : <SC.ErrorStyled style={{ color: "transparent" }}>error</SC.ErrorStyled>}
                </SC.InputContainer>
                {isTablet ?

                    <SC.DateContainer>
                        <SC.TitleContainer>
                            <SC.Title>Pick a date</SC.Title>
                        </SC.TitleContainer>
                        <SC.DateInput type="number" min={1} max={12} placeholder="mm" name="month" onChange={handleValuesChange} $filled={month ? "true" : "false"} $isError={formik.errors.month ? "true" : "false"} />

                        <SC.DateInput type="number" min={1} max={31} placeholder="DD" name="day" onChange={handleValuesChange} $filled={day ? "true" : "false"} $isError={formik.errors.day ? "true" : "false"} />

                        <SC.DateInput type="number" min={2023} max={2025} placeholder="YYYY" name="year" onChange={handleValuesChange} $filled={year ? "true" : "false"} $isError={formik.errors.year ? "true" : "false"} />


                    </SC.DateContainer>
                    : <>
                        <SC.TitleContainer>
                            <SC.Title>Pick a date</SC.Title>
                        </SC.TitleContainer>
                        <SC.DateContainer>
                            <SC.DateInput type="number" min={1} max={12} placeholder="mm" name="month" onChange={handleValuesChange} $filled={month ? "true" : "false"} $isError={formik.errors.month ? "true" : "false"} />

                            <SC.DateInput type="number" min={1} max={31} placeholder="DD" name="day" onChange={handleValuesChange} $filled={day ? "true" : "false"} $isError={formik.errors.day ? "true" : "false"} />

                            <SC.DateInput type="number" min={2023} max={2025} placeholder="YYYY" name="year" onChange={handleValuesChange} $filled={year ? "true" : "false"} $isError={formik.errors.year ? "true" : "false"} />


                        </SC.DateContainer>
                    </>
                }

                {formik.errors.month ? <SC.ErrorStyled>{formik.errors.month}</SC.ErrorStyled > :
                    formik.errors.year ? <SC.ErrorStyled>{formik.errors.year} </SC.ErrorStyled> :
                        formik.errors.day ? <SC.ErrorStyled>{formik.errors.day}</SC.ErrorStyled >
                            :
                            <SC.ErrorStyled style={{ color: "transparent" }}>error</SC.ErrorStyled>}

                {isTablet ?
                    <SC.DateContainer>
                        <SC.TitleContainer style={{ marginTop: "28px" }}>
                            <SC.Title>Pick a time</SC.Title>
                        </SC.TitleContainer>
                        <SC.DateInput type="number" min={0} max={12} placeholder="09" name="hour" onChange={handleValuesChange} $filled={hour ? "true" : "false"} $isError={formik.errors.hour ? "true" : "false"} />
                        <SC.DateInput type="number" min={0} max={59} placeholder="00" name="minutes" onChange={handleValuesChange} $filled={minutes || minutes === 0 ? "true" : "false"} $isError={formik.errors.minutes ? "true" : "false"} />
                        <Dropdown onSelect={handleTimeChange}>
                            <SC.ToggleButton variant="success" id="dropdown-basic">
                                {dayPart}
                            </SC.ToggleButton>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="AM">AM</Dropdown.Item>
                                <Dropdown.Item eventKey="PM">PM</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </SC.DateContainer> : <>
                        <SC.TitleContainer style={{ marginTop: "28px" }}>
                            <SC.Title>Pick a time</SC.Title>
                        </SC.TitleContainer>
                        <SC.DateContainer>
                            <SC.DateInput type="number" min={0} max={12} placeholder="09" name="hour" onChange={handleValuesChange} $filled={hour ? "true" : "false"} $isError={formik.errors.hour ? "true" : "false"} />
                            <SC.DateInput type="number" min={0} max={59} placeholder="00" name="minutes" onChange={handleValuesChange} $filled={minutes || minutes === 0 ? "true" : "false"} $isError={formik.errors.minutes ? "true" : "false"} />
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
                    </>}

                {formik.errors.hour ? <SC.ErrorStyled>{formik.errors.hour}</SC.ErrorStyled > :
                    formik.errors.minutes ? <SC.ErrorStyled>{formik.errors.minutes} </SC.ErrorStyled> :
                        <SC.ErrorStyled style={{ color: "transparent" }}>error</SC.ErrorStyled>}
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
