import React from "react";
import Card from "./Card"
import { Spinner } from "react-bootstrap";

const Home = ({ cars, page }) => {



    const handlePage = () => {



        page("new-car");
    }
    return (
        <>
            <h1>Car Management</h1>
            <button className="addBtn" onClick={handlePage}>
                Add a new car
            </button >
            <select name="sort" className="sort">
                <option value="sort">--Sort by--</option>
                <option value="year">Sort by year</option>
                <option value="model">Sort by model</option>
                <option value="price">Sort by price</option>
            </select>
            <div className="container-cards">
                {cars.length > 0 ? (
                    cars.map((item) => {
                        return <Card car={item} />;
                    })
                ) : (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )}
            </div>
        </>
    )
}

export default Home;