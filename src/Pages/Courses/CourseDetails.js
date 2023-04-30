import React, { useEffect, useState } from 'react';
import {
    FaPause,
    FaStar,
    FaMale,
    FaTimes,
    FaVideo,
    FaBook,
    FaCertificate,
    FaGripLinesVertical,
    FaCalendarTimes,
    FaFacebookF,
    FaSkype,
    FaTwitter,
    FaLinkedin,
  } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';

const CourseDetails = () => {
    const [show, setShow] = useState("video-container");
    const [courses, setCourses] = useState([]);
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res=> res.json())
        .then(data=> setCourses(data))
    },[])
  const { courseId } = useParams();
  console.log(courseId);
  
  let details = courses?.find(course=> course?._id === courseId)
  console.log(details);
  // setData(details);
  // console.log(data)
  
  

  let video = "video-container show";
  let hide = "video-container";

  const handleShow = () => {
    setShow(video);
  };
  const handleHide = () => {
    setShow(hide);
  };

  return (
    <div className="">
      {/* <div className="top-banner text-start">
        <h1>Courses Details</h1>
        <p>
          Home // <span>Courses Details</span>
        </p>
      </div>
      <div className="row CourseDetails gx-5">
        <div className="col-md-8 col-12 details-image text-start">
          <div><h1>{courseTitle}</h1></div>
          <a onClick={handleShow} href="#" className="pause" id="videolink">
            <FaPause></FaPause>
          </a>
          <div id="videostory" className={show}>
            <span onClick={handleHide} className="close">
              &#10006;
            </span>
            <iframe
              width="875"
              height="480"
              src="https://www.youtube.com/embed/c06dTj0v0sM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <h1>{courseName}</h1>
          <div className="d-flex justify-content-between  align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <img className="instructor" src={courseInstructor} alt="" />
              <p className="p-0 m-0 mx-3 text-muted fs-5">
                By: <span className="text-dark">{courseInstructor}</span>
              </p>
              <p className="p-0 m-0  text-muted">||</p>
              <small className=" mx-3  text-muted">
                <span className="text-warning">286</span> Enrolled Students
              </small>
            </div>
            <div>
              <p className="p-0 m-0  text-muted">
                4.9{" "}
                <span className="text-success ms-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <FaStar /> (5,764 Rating)
              </p>
            </div>
          </div>
          <div className="buttons text-center">
            <button className="enroll btn rounded-pill mx-4 my-2 px-4 py-2 text-white fs-5 ">
              Description
            </button>
            <button className="enroll btn rounded-pill mx-4 my-2 px-4 py-2 text-white fs-5 ">
              Instructors
            </button>
            <button className="enroll btn rounded-pill mx-4 my-2 px-4 py-2 text-white fs-5 ">
              Reviews
            </button>
          </div>
          <div>
            <h2 className="fw-light fs-3">Description: </h2>
            <p>
            Course Description:
This course is designed to provide an in-depth understanding of nutrition for children and teach the basics of cooking healthy and delicious meals for kids. The course will cover the principles of nutrition, food groups, and dietary requirements for children of different ages.
<br />
Participants will learn how to prepare healthy and tasty meals that meet the nutritional needs of children. They will learn about food safety, kitchen hygiene, and the proper techniques for preparing and cooking food. Participants will also learn how to involve children in the cooking process to create a fun and engaging learning experience.
<br />
The course will cover a range of topics, including:
<ul>
    <li>The importance of a balanced diet for children</li>
    <li>Nutritional requirements for children of different ages</li>
    <li>Food groups and their role in a healthy diet</li>
    <li>Techniques for cooking healthy meals for children</li>
    <li>Strategies for introducing new and healthy foods to picky eaters</li>
    <li>Kitchen hygiene and food safety practices</li>
</ul>
<p>By the end of the course, participants will have the knowledge and skills necessary to prepare healthy and delicious meals for children that meet their nutritional needs. They will also have an understanding of the importance of involving children in the cooking process and the benefits it can have for their overall health and well-being.</p>
            </p>
          </div>
        </div>
        <div className="col-md-4 col-12 details-course-info">
          <h2 className="fs-1 fw-bold price m-4">${price}</h2>
          <hr className="w-75 m-auto" />
          <div className="d-flex justify-content-between  align-items-center fs-6 my-1 mt-3">
            <p>
              <span className="text-warning">
                <FaMale></FaMale>{" "}
              </span>{" "}
              Instructor
            </p>
            <p className="text-muted">{courseInstructor}</p>
          </div>
          <hr className="w-75 m-auto m-0 p-0" />
          <div className="d-flex justify-content-between  align-items-center fs-6 my-1 mt-3">
            <p>
              <span className="text-warning">
                <FaCalendarTimes></FaCalendarTimes>{" "}
              </span>{" "}
              Duration
            </p>
            <p className="text-muted">{courseDuration}</p>
          </div>
          <hr className="w-75 m-auto  m-0 p-0" />
          <div className="d-flex justify-content-between  align-items-center fs-6 my-1 mt-3">
            <p>
              <span className="text-warning">
                <FaVideo></FaVideo>{" "}
              </span>{" "}
              Lectures
            </p>
            <p className="text-muted">{courseLecture}</p>
          </div>
          <hr className="w-75 m-auto" />
          <div className="d-flex justify-content-between  align-items-center fs-6 my-1 mt-3">
            <p>
              <span className="text-warning">
                <FaGripLinesVertical></FaGripLinesVertical>{" "}
              </span>{" "}
              Level
            </p>
            <p className="text-muted">{courseLevel}</p>
          </div>
          <hr className="w-75 m-auto" />
          <div className="d-flex justify-content-between  align-items-center fs-6 my-1 mt-3">
            <p>
              <span className="text-warning">
                <FaBook></FaBook>{" "}
              </span>{" "}
              Language
            </p>
            <p className="text-muted">{courseLanguage}</p>
          </div>
          <hr className="w-75 m-auto" />
          <div className="d-flex justify-content-between  align-items-center fs-6 my-1 mt-3">
            <p>
              <span className="text-warning">
                <FaCertificate></FaCertificate>{" "}
              </span>{" "}
              Certificate
            </p>
            <p className="text-muted">{courseCertificate}</p>
          </div>
          <hr className="w-75 m-auto" />
          <Link to='/checkout'><button className="enroll btn rounded-pill px-5 py-3 text-white fs-5 m-5">
            Enroll Now
          </button></Link>

          <h3 className="mb-5">Share Course</h3>
          <div className="icon-social">
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaSkype />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaLinkedin />
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CourseDetails;