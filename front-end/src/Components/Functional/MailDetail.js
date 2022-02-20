import React, { Suspense, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import testingAPI from "../../api";

const Delete = async (endpoint, id) => {
    await fetch(testingAPI + "api/" + endpoint + `/${id}`, {
      method: "DELETE",
    });
  };

function MailDetail() {
    const [mail, setMail] = useState({})
const params = useParams();
const nav = useNavigate()
    useEffect(() => {
        const getMail = async() => {
            await fetch(testingAPI + 'api/mail/' + params.id)
            .then((res) => res.json())
            .then((data) => setMail(data) )
        }
        getMail();
    }, [])
    return(
        <div className="mail-detail">
        <h1>From: {mail.name}</h1>
        <h2>Email: {mail.email}</h2>
        <h2>Sent: {mail.createdAt}</h2>
        <h3>Message:</h3>
        <p>{mail.message}</p>

        <button
              className="delete"
              onClick={() => {
                  Delete("mail", mail.id)
                  nav('/admin')     
              }}
            >
              Delete?
            </button>

        </div>
    )
}

export default MailDetail; 