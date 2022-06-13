import React, { useState, useMemo, useRef, useEffect } from "react";
import "./cards.css";
import { Link } from "react-router-dom";
import axios from "axios";
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Card({ item, s, u }) {

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        const getUser = async () => {
          const res = await axios.get(`/users/${item.uid}`);
          setEmail(res.data.email);
          setPhone(res.data.phone_no)
        };
        getUser();
      }, []);

    const form = useRef();

    console.log(phone)

    const [decision, setDecision] = useState("");
    const [st, setStatus] = useState("");

    const handleSubmit = async (e) => {
        // emailjs.sendForm('service_drh1vjr', 'template_fuy3c0f', form.current, 'rhxW1IurDw92Ef1Zy')
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
        if (decision === "deny") {
            setStatus("closed");
            const updateRequest = {
                status: "closed",
            };
            try {
                await axios.put(`/requests/${u}`, updateRequest);
            } catch (err) {

            }
        } else if (decision === "accept") {
            if (s === "requested") {
                setStatus("requested");
                const updateRequest = {
                    status: "verified",
                };
                try {
                    await axios.put(`/requests/${u}`, updateRequest);
                } catch (err) {

                }
            } else {
                setStatus("approved");
                const updateRequest = {
                    status: "approved",
                };
                try {
                    await axios.put(`/requests/${u}`, updateRequest);
                } catch (err) {

                }
            }
        }
        window.location.replace("/");
    }

    const handleMsg = async () => {
        try {
          axios.post("/msg", {
            to: `${phone}`,
            message: "Your application status has been changed. Visit portal for further information.",
          });
        } catch (err) {
    
        }
      }

    return (
        <>
            <div className="single-card" style={{ backgroundColor: "white" }}>
                <div class="container">
                    <div class="row first-row">
                        <div class="col-md-1 col-sm-6">id)</div>
                        <div class="col-md-2 col-sm-6">
                            <Link to={`/profile/${item.uid}`}>
                                {<a href="/profile">{item.username}</a>}
                            </Link>
                        </div>
                        <div class="col-md-2 col-sm-6">{item.track}</div>
                        <div class="col-md-2 col-sm-6"><span >{item.category}</span></div>
                        <div class="col-md-2 col-sm-6">
                            <span style={{ color: "red" }}>{item.status}</span>
                        </div>
                        <div class="col-md-3 col-sm-6" style={{ fontSize: "13px" }}>
                            <span style={{ color: "gray" }}>
                                start date - end_date
                            </span>{" "}
                        </div>
                    </div>
                    <div class="row second-row">
                        <div class="col-md-9 col-sm-12">
                            <ul className="doc-list">
                                <li>
                                    {item.marksheet != "" ?
                                        <a className="doc-link" href={item.marksheet} target="_blank">
                                            Marksheet
                                        </a>
                                        : <></>}
                                    {item.funded_doc != "" ?
                                        <a className="doc-link" href={item.funded_doc} target="_blank">
                                            Prior Funds
                                        </a>
                                        : <></>}
                                    {item.attendance_record != "" ?
                                        <a className="doc-link" href={item.attendance_record} target="_blank">
                                            Attendance Record
                                        </a>
                                        : <></>}
                                    {item.education_fee_record != "" ?
                                        <a className="doc-link" href={item.education_fee_record} target="_blank">
                                            Fee Record
                                        </a>
                                        : <></>}
                                    {item.hospital_doc != "" ?
                                        <a className="doc-link" href={item.hospital_doc} target="_blank">
                                            Hospital Documents
                                        </a>
                                        : <></>}
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-3 col-sm-12">
                            {(item.status === "requested" || item.status === "doc_uploaded") ?
                                <form className="admin-form" ref={form} onSubmit={handleSubmit}>
                                    <input type="radio" name="decision" defaultValue="accept"
                                        onChange={(e) => setDecision(e.target.value)}
                                    />
                                    <label>Accept</label>
                                    &nbsp;&nbsp; <input type="radio" name="decision" defaultValue="deny"
                                        onChange={(e) => setDecision(e.target.value)}
                                    />
                                    <label>Deny</label>
                                    <input type="text" name="user_email" value={email} hidden/>
                                    <input type="text" name="user_name" value={item.username} hidden />
                                    <button type="submit" className="apply-btn" onClick={handleMsg}><FontAwesomeIcon icon={faCircleArrowRight} /></button>
                                </form>
                                :
                                <></>
                            }

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}