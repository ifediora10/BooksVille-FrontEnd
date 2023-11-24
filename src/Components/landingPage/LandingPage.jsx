import {Footer} from "./Footer.jsx";
import {KeyFeatures} from "./KeyFeatures.jsx";
import {Header} from "./Header.jsx";
import {Section} from "./Section.jsx";
import {Join} from "./Join.jsx";
import {WhyChooseUs} from "./WhyChooseUs.jsx";
import {Possibilities} from "./Possibilities.jsx";


export const LandingPage = () => {
    return (
        <div className=" m-auto">
            <Header/>
            <Section/>
            <KeyFeatures/>
            <Possibilities/>
            <WhyChooseUs/>
            <Join/>
            <Footer/>
        </div>
    )
}