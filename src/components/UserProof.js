import React, { useState, useEffect } from 'react';
import '../styles/checkbox.scss';
import '../styles/fileUpload.scss';

export const UserProof = (props) => {
    const [file, setFile] = useState(null);
    const [imgDisplay, setImgDisplay] = useState('none');
    const [infoDisplay, setInfoDisplay] = useState('flex');


    useEffect(() => {
        if (file) {
            setImgDisplay('flex');
            setInfoDisplay('none');
        } else {
            setImgDisplay('none');
            setInfoDisplay('flex');

        }
    })
    return (
        <div className=" col-12 col-sm-10 col-md-10 col-lg-6 col-xl-6 user-proof mt-5">
            <h5 className="h5 fw-700">{props.heading} </h5>
            <div className="col-12 user-proof-content mt-4">
                <p className="p1 m-0 p-0 ml-2 ">-{props.p1}</p>
                <p className="p1 m-0 p-0 ml-2"> - {props.p2}</p>
                <p className="p1 m-0 p-0 ml-2">- {props.p3}</p>
            </div>
            <div className=" ml-2 p-3">
                <div className="   d-flex align-items-center">
                    <div style={{
                        background: file ? 'white' : 'rgba(40, 49, 131, 0.3)'

                    }} className="user-proof-import  mb-4 d-flex flex-column justify-content-center align-items-center">
                        <div style={{ display: imgDisplay }} className="user-proof-import-img">
                            <img src={file} />
                        </div>
                        <div style={{ display: infoDisplay }} className="user-proof-import-info ">
                            <p className="p1 c-grey">
                                Insert your file here</p>
                        </div>
                    </div>
                    <div className="">
                                <input type="checkbox" id={props.checkboxName} name={props.checkboxName} value="Apple" />
                                <label for={props.checkboxName}></label>
                    </div>
                </div>
                <div className="user-proof-upload m-0 p-0 d-flex justify-content-space-around ">
                    <div className="fileUpload user-proof-upload-btn  d-flex justify-content-center align-items-center text-align-center">
                        <input type="file" className="upload p-0 m-0 p2" onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))} />
                        <span className="c-white p2">Browse</span>
                    </div>
                    <button onClick={() => setFile(null)} className="p2 user-proof-upload-btn border-0 c-white ml-4 p-0 m-0 ">Delete</button>
                </div>
            </div>
        </div>
    )
}