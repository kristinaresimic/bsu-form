import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import '../styles/phoneInput.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UserProof } from '../components/UserProof';
export const User = () => {
    const [value, setValue] = useState('en');
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="user ">
            <div className="mt-5">
                <h5 className="h5 fw-700">1.   Basic Details:</h5>
                <div className="ml-1 ">
                    <p className="p1 fw-500 col-xl-6">  Please provide the following details and
                documents in order to complete the KYC process. </p>
                    <div className="row col-12 col-md-12 col-lg-12  col-xl-10 m-0 p-0 mt-3 ml-4">
                        <input className="user-inp col-10 col-sm-6 col-md-5 col-lg-3 col-xl-3 p2 c-grey mr-4 mt-2" type="text" placeholder="First Name" />
                        <input className="user-inp col-10 col-sm-6 col-md-5 col-lg-3 col-xl-3 p2 c-grey mt-2  mr-4" type="text" placeholder="Last Name" />
                        <input className="user-inp col-10 col-sm-6 col-md-5 col-lg-3 col-xl-3 p2 c-grey  mt-2 mr-4" type="text" placeholder="E - mail" />
                        <input className="user-inp col-10 col-sm-6 col-md-5 col-lg-3 col-xl-3 p2 c-grey mt-2 mr-4" type="text" placeholder="Current Residence" />

                        <select className="user-inp col-10 col-sm-6 col-md-5 col-lg-3 col-xl-3 p2 mr-4 ml-0 c-grey mt-2">
                            <option className="p2" name="male" value=""> Gender</option>
                            <option className="p2" name="male"> Male</option>
                            <option className="p2" name="female">Female</option>
                        </select>
                        <PhoneInput
                            className="user-phone col-10 col-sm-6 col-md-5 col-lg-3 col-xl-3 p2 c-grey  mt-2 mr-4 "
                            placeholder="Enter phone number"
                            value={value}
                            onChange={setValue}
                            label="Phone number"
                            defaultCountry="US"
                        />
                        <div className=" user-inp d-flex col-10 col-sm-6 col-md-5 col-lg-3 col-xl-3 m-0 p-0 mt-2">
                            <DatePicker className="user-inp-date border-0 p2 c-grey  mr-4 pl-4 pl-lg-3" selected={startDate} onChange={date => setStartDate(date)} />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="user-proof  row mb-5">
                    <UserProof checkboxName="identity" heading="2.  Proof of identity" p1=" Upload one of the following documents: ID, Passport or Driving licence." p2="The document must include your: Full name, date of birth and a photo of yourself." p3="The photo should be clear and focused." />
                    <UserProof checkboxName="address" heading="3.  Proof of address" p1=" Upload one of the following documents: bank statement or utility bill." p2="Document must include your full name, adress and date." p3="Must be within 3 months from the current date." />
                </div>


            </div>

        </div>
    )
}

/* col- col-sm col-md col-lg col-xl

     <input className="user-inp col-10 col-sm-6 col-md-5 col-lg-3 col-xl-3 mr-4 p2 c-grey mt-2" type="text" placeholder="Date of Birth" />

*/