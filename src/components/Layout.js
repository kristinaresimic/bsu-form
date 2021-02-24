import React, { useState } from 'react'
import { Navbar } from './Navbar.js';

export const Layout = (props) => {
    return (
        <div className="layout col-12   mx-auto">
            <div className="layout-content mt-3 mt-lg-5  col-12 col-md-11 col-lg-9 mx-auto  ">
                {props.children}
            </div>
            <div className="layout-bottom  mt-4 mb-5 ">
                <div className="layout-bottom-row">
                    <button style={{ display: props.backNo ? 'none' : null }} onClick={props.backClick} className="p1 border-0 my-auto c-white fw-500  mx-3">Back</button>
                    <button style={{ display: props.nextNo ? 'none' : null }} onClick={props.nextClick} className="p1 border-0 my-auto c-white  fw-500 mx-3 ">Next</button>
                    <button style={{ display: props.finish ? 'block' : 'none' }} onClick={props.finishClick} className="p1 border-0 my-auto c-white fw-500  mx-3 ">Finish</button>
              
                </div>
                <div className="layout-bottom-page ml-4 ">
                    <p onClick={props.one} className={props.page == "first" ? "h2 mx-1  c-main" : "p1 mx-1  c-main"}>1</p>
                    <p onClick={props.two} className={props.page == "second" ? "h2 mx-1  c-main" : "p1 mx-1  c-main"}>2</p>
                    <p onClick={props.three} className={props.page == "third" ? "h2 mx-1  c-main" : "p1 mx-1  c-main"}>3</p>
                    <p onClick={props.four} className={props.page == "fourth" ? "h2 mx-1  c-main" : "p1 mx-1  c-main"}>4</p>
                </div>
            </div>
        </div>
    )
}
