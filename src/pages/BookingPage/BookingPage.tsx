import BookingHero from "components/BookingHero/BookingHero";
import Footer from "components/Footer/Footer";
import BookingForm from "components/Form/Form";

const BookingPage = () => {

    const submitBook = (...args: any): void => {
        
        const newBooking = args[0]
                
        alert(`Your order ${newBooking} is confirmed`)
       
    }   
   
    return (<div>
        <BookingHero />
        <BookingForm submit={submitBook} />
        <Footer/>
        </div>);
}
 
export default BookingPage;