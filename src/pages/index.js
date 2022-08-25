import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <Navbar toggle={toggle}  isOpen={isOpen} />
        <Card />
        <Footer />
        </>
    );
}