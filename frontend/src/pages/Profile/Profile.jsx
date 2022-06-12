import React, { useContext, useState, useEffect } from "react";
import "./profile.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../context/Context";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function Profile() {
  const [file, setFile] = useState(null);
  const { user, dispatch } = useContext(Context);
  const location = useLocation()
  const path = location.pathname.split("/")[2];
  const PF = "http://localhost:5000/images/";
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [education, setEducation] = useState("");
  const [address, setAddress] = useState("");
  const [updateMode, setUpdateMode] = useState(false)
  const [success, setSuccess] = useState(false);


  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "icaaqwnn");

    data.append("cloud_name", "whats-up");
    fetch("  https://api.cloudinary.com/v1_1/whats-up/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  const [curr, setUser] = useState({});
  // console.log(path);
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("/users/" + path);
      setUser(res.data);
      setEmail(res.data.email);
      setContact(res.data.phone_no);
      setEducation(res.data.education);
      setAddress(res.data.address);
    };
    getUser();
  }, [path]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" })
    const updatedUser = {
      userId: user._id,
      email,
      contact: user.phone_no,
      education,
      address,
      profile: url,
    };
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data })
      window.location.replace("/profile/" + curr._id);
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" })
    }

  };


  return (
    <>
      <Navigation />
      {updateMode ? (
        <form className="settingsForm" onSubmit={handleSubmit}>
          <section className="image">
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card mb-4">
                    <h1 className="heading text-center py-4">Update Profile</h1>
                    <div className="card-body text-center">
                      <div className="settingPP">
                        <img className="profile-pic mb-4" src={url ? url : curr.profile} alt="avatar" />
                        <input
                          type="file"
                          className="mb-4 input-img"
                          onChange={(e) => setImage(e.target.files[0])}
                          id="upload"
                          hidden
                        ></input>
                        <label
                          for="upload"
                          className="label-img"
                          onClick={uploadImage}
                        >
                          <FontAwesomeIcon className="settingsPPIcon" icon={faUser} />
                        </label>
                      </div>
                      <h5 className="my-3">{curr.username}</h5>
                      <h6 className="uid">{curr._id}</h6>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8">
                  <div className="card mb-4">
                    <div className="card-body" style={{ paddingBottom: "0px" }}>
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Name</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{curr.username}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Email ID</p>
                        </div>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Contact No.</p>
                        </div>
                        <div className="col-sm-9">
                          <input
                            type="number"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Education Level</p>
                        </div>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            value={education}
                            onChange={(e) => setEducation(e.target.value)}
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Hospital Details</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">AIIMS</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Address</p>
                        </div>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Requests</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0"></p>
                        </div>
                      </div>
                      <hr />
                    </div>
                    {user._id === path ?
                      <button href="#" className="update-btn" onClick={() => setUpdateMode(true)} > Submit &nbsp;&nbsp;
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                      :
                      <></>
                    }

                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
      ) : (
        <section className="image">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-4">
                <div className="card mb-4">
                  <h1 className="heading text-center py-3">Update Profile</h1>
                  <div className="card-body text-center">
                    <img className="profile-pic mb-4" src={curr.profile} alt="avatar" />
                    <h5 className="my-3">{curr.username}</h5>
                    <h6 className="uid">{curr._id}</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card mb-4">
                  <div className="card-body" style={{ paddingBottom: "0px" }}>
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Name</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{curr.username}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Email ID</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{curr.email}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Contact No.</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{curr.phone_no}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Education Level</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{curr.education}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Hospital Details</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">AIIMS</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Address</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{curr.address}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Requests</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0"></p>
                      </div>
                    </div>
                    <hr />
                  </div>
                  {user._id === path ? (
                    <button href="#" className="update-btn" onClick={() => setUpdateMode(true)}>
                      {" "}
                      Edit &nbsp;&nbsp;
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                      />
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}

