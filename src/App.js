import React from "react";
import Header from "./components/Header";
import data from "./data";
import Item from "./components/Item";

export default function App () {
    const journalData = data.map(item => {
        return (
            <Item 
                {...item}
            />);
    });

    return (
        <div>
            <Header />
            {journalData}
        </div>
    );
}