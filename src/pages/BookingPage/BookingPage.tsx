import BookingHero from "components/BookingHero/BookingHero";
import Footer from "components/Footer/Footer";
import BookingForm from "components/Form/Form";
import { ToastContainer, toast } from 'react-toastify';
import { normilizedMonth, normilizedTime } from "utils/normilizedMonth";
const BookingPage = () => {

    const submitBook = (...args: any): void => {

        const newBooking = args[0]

        console.log(newBooking);
        const { name, date, time, persons, dayPart } = newBooking
        const month = normilizedMonth(date.month)
        const hour = normilizedTime(time.hour)
        const minute = normilizedTime(time.minute)

        toast.success(`Dear, ${name}, The table for ${persons} persons are waiting for You ${month} ${date.day} ${date.year} year at ${hour} h ${minute} min ${dayPart}`, {
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

    return (<div>
        <ToastContainer
        />
        <BookingHero />
        <BookingForm submit={submitBook} />
        <Footer />
    </div>);
}

export default BookingPage;