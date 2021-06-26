import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddService.css';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = (data, e) => {
        const bookData = {
            serviceTitle: data.serviceTitle,
            description: data.description,
            price: data.price,
            image: imageURL
        };
        const url = `https://sheltered-crag-04507.herokuapp.com/addCourse`
        console.log(bookData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-types': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
            .then(res => {
                console.log('server side response', res)
                e.target.reset()
            })
    };
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '0069b2d641d6702c507985600c84134f');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <section className="container-fluid row">
            <AdminSideBar></AdminSideBar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add Courses</h5>
                <form className="row g-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6 mt-3">
                        <label htmlFor="serviceTitle">Course Title</label>
                        <br />
                        <input name="serviceTitle" placeholder="Enter Title Name" ref={register} type="text" ClassName="form-control" id="serviceTitle" required />
                    </div>
                    <div className="col-md-6 mt-3">
                        <label htmlFor="description">Description</label>
                        <br />
                        <input name="description" placeholder="Enter Description" ref={register} type="text" ClassName="form-control" id="description" required />
                    </div>
                    <div className="col-md-6 mt-3">
                        <label htmlFor="price">Add Price</label>
                        <br />
                        <input name="price" placeholder="Price" ref={register} type="text" ClassName="form-control" id="price" required />
                    </div>
                    <div className="form-group mt-4">
                        <label for="exampleFormControlFile1">Upload a image</label>
                        <input type="file" className="form-control-file" onChange={handleImageUpload} id="exampleFormControlFile1" required />
                    </div>
                </form>
                <button type="submit" className="col-md-1 add-book-btn-input">Submit</button>
            </div>
        </section>
    );
};

export default AddService;