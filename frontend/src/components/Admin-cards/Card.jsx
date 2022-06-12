import React, { useState, useMemo } from "react";
import "./cards.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Card({ item, s, u }) {

    const [decision, setDecision] = useState("");

    const handleSubmit = async (e) => {
        if (decision === "deny") {
            const updateRequest = {
                status: "closed",
            };
            try {
                await axios.put(`/requests/${u}`, updateRequest);
            } catch (err) {

            }
        } else if (decision === "accept") {
            if (s === "requested") {
                const updateRequest = {
                    status: "verified",
                };
                try {
                    await axios.put(`/requests/${u}`, updateRequest);
                } catch (err) {

                }
            } else {
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
                                    :<></> }
                                    {item.funded_doc != "" ? 
                                    <a className="doc-link" href={item.funded_doc} target="_blank">
                                        Prior Funds
                                    </a>
                                    :<></> }
                                    {item.attendance_record != "" ? 
                                    <a className="doc-link" href={item.attendance_record} target="_blank">
                                        Attendance Record
                                    </a>
                                    :<></> }
                                    {item.education_fee_record != "" ? 
                                    <a className="doc-link" href={item.education_fee_record} target="_blank">
                                        Fee Record
                                    </a>
                                    :<></> }
                                    {item.hospital_doc != "" ? 
                                    <a className="doc-link" href={item.hospital_doc} target="_blank">
                                        Hospital Documents
                                    </a>
                                    :<></> }
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-3 col-sm-12">
                            {(item.status === "requested" || item.status === "doc_uploaded") ?
                                <form className="admin-form" onSubmit={handleSubmit}>
                                    <input type="radio" name="decision" defaultValue="accept"
                                        onChange={(e) => setDecision(e.target.value)}
                                    />
                                    <label>Accept</label>
                                    &nbsp;&nbsp; <input type="radio" name="decision" defaultValue="deny"
                                        onChange={(e) => setDecision(e.target.value)}
                                    />
                                    <label>Deny</label>
                                    <button type="submit" className="apply-btn"><FontAwesomeIcon icon={faCircleArrowRight} /></button>
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