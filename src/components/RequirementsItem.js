import React from 'react';

export const RequirementsItem = (props) => {
    return (
        <div className="">
            <p className="h5 fw-700">{props.heading}</p>
            <p className="col-12 col-lg-9 col-md-12 col-xl-10 p1 fw-500 ml-3 pl-1">{props.paragraph}</p>
            <div >
                <div className="requirements-item ">
                    <ul className="requirements-item-top p-0 m-0">
                        <li className="p1 fw-500">{props.processor}</li>
                        <li className="p1 fw-500">{props.ram}</li>
                        <li className="p1 fw-500">{props.storage}</li>
                        <li className="p1 fw-500">{props.network}</li>
                        <li className="p1 fw-500">{props.server}</li>
                        <li className="p1 fw-500">{props.system}</li>
                    </ul>
                </div>

                <div className="requirements-part m-0 p-0 mt-5  ">
                    <label class="sq-radio d-flex align-items-center fw-500 p1">I can meet the selected requirements.
                        <input type="radio" checked="checked" name={props.radioName} />
                        <span class="checkmark"></span>
                    </label>
                    <label class="sq-radio d-flex align-items-center fw-500 p1">I would like Inery to set up the selected hardware requirements for me.
                        <input type="radio" name={props.radioName} />
                        <span class="checkmark"></span>
                    </label>
                </div>
            </div>
        </div>
    )
}