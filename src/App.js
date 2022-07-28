import React from "react";
import Content from "./components/Content/content";

import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

export default function App() {
    return (
        <React.Fragment>
            <Header/>
            <Content/>
            <Footer/>
        </React.Fragment>
    )
}