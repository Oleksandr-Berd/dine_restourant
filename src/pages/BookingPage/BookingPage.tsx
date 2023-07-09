import BookingHero from "components/BookingHero/BookingHero";
import Footer from "components/Footer/Footer";
import BookingForm from "components/Form/Form";
import { ToastContainer, toast } from 'react-toastify';
import { normilizedMonth, normilizedTime } from "utils/normilizedMonth";

export interface IBooking {
    name: string;
    email: string;
    date: {
        day: number | null;
        month: number | null;
        year: number | null;
    };
    time: {
        hour: number | null;
        minute: number | string | null;
    };
    persons: number;
    dayPart: string;
}

const BookingPage = () => {
    const submitBook = (args: IBooking): void => {
        const { name, date, time, persons, dayPart } = args;

        const month = date.month !== null ? normilizedMonth(date.month) : '';
        const hour = time.hour !== null ? normilizedTime(time.hour) : '';
        const minute = typeof time.minute === 'number' ? normilizedTime(time.minute) : '';

        toast.success(
            `Dear, ${name}, The table for ${persons} persons is waiting for you on ${month} ${date.day} ${date.year} at ${hour} h ${minute} min ${dayPart}`,
            {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            }
        );
    };

    return (
        <div>
            <ToastContainer />
            <BookingHero />
            <BookingForm submit={submitBook} />
            <Footer />
        </div>
    );
};

export default BookingPage;
