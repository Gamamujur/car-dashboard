import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../../App.css";
import Hero from "./sections/Hero";
import Service from "./sections/Service";
import WhyUs from "./sections/WhyUs";
import Testimonial from "./sections/Testimonial";
import Banner from "./sections/CTABanner";
import FAQ from "./sections/FrequentQuestion";
import Footer from "./sections/Footer";
import Offcanvas from "./sections/Offcanvas";


const LandingPage = () => {
    return (
        <div>
            <Hero />
            <Service/>
            <WhyUs/>
            <Testimonial/>
            <Banner/>
            <FAQ/>
            <Footer/>
            <Offcanvas/>
        </div>
    );
};

export default LandingPage;
