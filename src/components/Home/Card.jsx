import React from "react";


const Card = ({ car, page, setId }) => {

    const handleUpdatePage = (id) => {
        setId(id)
        page("update-car")
    };

    return (

        <>
            <div className="card-body p-4">
                <span
                    className="badge delete rounded-pill bg-primary float-md-end mb-3 mb-sm-0"
                >
                    Delete
                </span>
                <h5>{car.model}</h5>
                <div className="mt-3">
                    <span className="text-muted d-block">
                        <i className="fa fa-car" aria-hidden="true"></i>
                        ID: {car.id}
                    </span>
                    <span className="text-muted d-block">
                        <i className="fa fa-car" aria-hidden="true"></i>
                        Make: {car.maker}
                    </span>
                    <span className="text-muted d-block">
                        <i className="fa fa-car" aria-hidden="true"></i>
                        Model: {car.model}
                    </span>
                    <span className="text-muted d-block">
                        <i className="fa fa-car" aria-hidden="true"></i>
                        Year: {car.year}
                    </span>
                    <span className="text-muted d-block">
                        <i className="fa fa-car" aria-hidden="true"></i>
                        Color: {car.color}
                    </span>
                    <span className="text-muted d-block">
                        <i className="fa fa-car" aria-hidden="true"></i>
                        Price: {car.price}
                    </span>
                </div>
                <div className="mt-3">
                    <button
                        className="btn btn-primary btn-update"
                        id="id-${car.id}" onClick={() => handleUpdatePage(car.id)}
                    >
                        Update
                    </button>
                </div>
            </div>
        </>
    )
}


export default Card;