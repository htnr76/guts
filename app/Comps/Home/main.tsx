import About from "./about";
import Hero from "./hero";
import Material from "./material";
import Product from "./product";
import Services from "./services";

export default function HomeMain() {

    return (
        <>
            {/*Все компоненты для главной страницы*/}
            <Hero />
            <About />
            <Services />
            <Product />
            <Material />
        </>
    )
}