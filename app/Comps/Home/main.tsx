import About from "./about";
import Hero from "./hero";
import Material from "./material";
import Product from "./product";
import Services from "./services";

export default function HomeMain() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Product />
            <Material />
        </>
    )
}