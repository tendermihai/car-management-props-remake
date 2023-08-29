import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form"
import { findCarById, getAllCars, updatePutCar } from "../../services/cars-service";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom"

const Update = ({ page, id, setCars }) => {

    const [car, setCar] = useState()

    useEffect(() => {
        handleGetCarById();
    }, [id]);

    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm();

    const onSubmit = async (data) => {
        console.log(data)

        let obj = {
            Car: {
                maker: data.maker,
                model: data.model,
                year: data.year,
                price: data.price,
                color: data.color,
            },
        }
        await updatePutCar(id, obj);
        setCars(await getAllCars());
        page("home")
    }

    let handleGetCarById = async () => {
        let data = await findCarById(id);

        setCar(data[0]);
    }

    const handleCancel = () => {
        page("home");
    }

    return (
        <>

            <div className="col-md-9 personal-info">
                <h3>Update this car</h3>

                {car && (
                    <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label className="col-lg-3 control-label">Make:</label>
                            <div className="col-lg-8">
                                <input
                                    className="form-control make"
                                    type="text"
                                    name="maker"
                                    placeholder={car.maker}
                                    {...register("maker")}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-lg-3 control-label">Model:</label>
                            <div className="col-lg-8">
                                <input
                                    className="form-control model"
                                    type="text"
                                    name="model"
                                    placeholder={car.model}
                                    {...register("model")}
                                />
                                {errors.model && <span>{errors.model.message}</span>}
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-lg-3 control-label">Year:</label>
                            <div className="col-lg-8">
                                <input
                                    className="form-control year"
                                    type="text"
                                    name="year"
                                    placeholder={car.year}
                                    {...register("year")}
                                />
                                {errors.year && <span>{errors.year.message}</span>}
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-lg-3 control-label">Color:</label>
                            <div className="col-lg-8">
                                <input
                                    className="form-control color"
                                    type="text"
                                    name="color"
                                    placeholder={car.color}
                                    {...register("color")}
                                />
                                {errors.color && <span>{errors.color.message}</span>}
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-lg-3 control-label">Price:</label>
                            <div className="col-lg-8">
                                <input
                                    className="form-control price"
                                    type="text"
                                    name="price"
                                    placeholder={car.price}
                                    {...register("price")}
                                />
                                {errors.price && <span>{errors.price.message}</span>}
                            </div>
                        </div>
                        <button type="submit" className="editCar" onClick={onSubmit}>
                            Update
                        </button>
                        <button type="button" className="cancelEdit" onClick={handleCancel}>
                            Cancel
                        </button>
                    </form>
                )}

                {!car && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )}
            </div>
        </>
    )
}


export default Update;