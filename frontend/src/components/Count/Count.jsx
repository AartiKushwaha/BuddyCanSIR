import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import "./count.css";

export default function Count() {

    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            const res = await axios.get("/requests")
            setRequests(res.data)
        }
        fetchRequests()
    }, [])

    function Foo() {
        var active_application = 0;
        requests.map((r) => {
            if (r.status === "requested" || r.status === "doc_uploaded") {
                active_application += 1;
            }
                console.log("wtf")
        })
        return <span className="notification">{active_application}</span>
    }

    return (
        <>
        <Foo />
        </>
    );
}