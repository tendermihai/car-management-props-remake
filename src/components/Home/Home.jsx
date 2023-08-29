import React from "react";
import Card from "./Card"
import { Spinner } from "react-bootstrap";

const Home = ({ cars, page, setId }) => {

    const handleAddPage = () => {
        page("new-car");
    }

    const handleUpdatePage = () => {
        page('update-car')
    }





    return (
        <>
            <h1>Car Management</h1>
            <button className="addBtn" onClick={handleAddPage}>
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
                        return <Card car={item} page={handleUpdatePage} setId={setId} />;
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