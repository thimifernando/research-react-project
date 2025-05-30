import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const teamMembers = [
  { name: "Ms. Wishalya Tissera", role: "Supervisor",  img: process.env.PUBLIC_URL + "/wishalya.jpg" },
  { name: "Ms. Supipi Karunathilaka", role: "Co-supervisor", img: process.env.PUBLIC_URL + "/supipi.jpg" },
  { name: "Keshala G.P.", role: "Group Leader",  img: process.env.PUBLIC_URL + "/padumi.jpeg" },
  { name: "Fernando T.H", role: "Member", img: process.env.PUBLIC_URL + "/thimira.jpeg" },
  { name: "Tharindi J.A.S", role: "Member",  img: process.env.PUBLIC_URL + "/sachi.jpeg" },
  { name: "Amarasinghe A.A.S.U", role: "Member", img: process.env.PUBLIC_URL + "/shanu.jpeg" },
];

const technologies = [
  { name: "FastAPI", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Jupyter Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { name: "Flutter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Dart", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Google Colab", img: process.env.PUBLIC_URL + "/colab.jpeg" },
  { name: "Android", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
  { name: "VSCode", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];

const greenhouseBg =
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"; // Greenhouse background

function App() {
  // Section refs for scrolling
  const scopeRef = useRef(null);
  const problemRef = useRef(null);
  const objectiveRef = useRef(null);
  const milestonesRef = useRef(null);
  const documentsRef = useRef(null);
  const presentationsRef = useRef(null);
  const technologiesRef = useRef(null);
  const teamRef = useRef(null);

  // Scroll to section
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "#181c24", position: "sticky", top: 0, zIndex: 100 }}>
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#" onClick={() => scrollToSection(scopeRef)}>
            <img
              src={process.env.PUBLIC_URL + "/logo.jpeg"}
              alt="Logo"
              width="50"
              height="50"
              className="me-2"
              style={{ borderRadius: "50%" }}
            />
            <span style={{ color: "#baff39", fontWeight: 700 }}>Greeny</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
               
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => scrollToSection(problemRef)}
                  style={{
                    color: "white",        // Bootstrap "success" green
                    fontWeight: "bold",
                    fontSize: "20px",
                    textDecoration: "none",
                    cursor: "pointer"
                  }}>Problem</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => scrollToSection(objectiveRef)}
                  style={{
                    color: "white",        // Bootstrap "success" green
                    fontWeight: "bold",
                    fontSize: "20px",
                    textDecoration: "none",
                    cursor: "pointer"
                  }}>Objectives</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => scrollToSection(milestonesRef)}
                  style={{
                    color: "white",        // Bootstrap "success" green
                    fontWeight: "bold",
                    fontSize: "20px",
                    textDecoration: "none",
                    cursor: "pointer"
                  }}>Milestones</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => scrollToSection(documentsRef)}
                  style={{
                    color: "white",        // Bootstrap "success" green
                    fontWeight: "bold",
                    fontSize: "20px",
                    textDecoration: "none",
                    cursor: "pointer"
                  }}>Documents</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => scrollToSection(presentationsRef)}
                  style={{
                    color: "white",        // Bootstrap "success" green
                    fontWeight: "bold",
                    fontSize: "20px",
                    textDecoration: "none",
                    cursor: "pointer"
                  }}>Presentations</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => scrollToSection(technologiesRef)}
                  style={{
                    color: "white",        // Bootstrap "success" green
                    fontWeight: "bold",
                    fontSize: "20px",
                    textDecoration: "none",
                    cursor: "pointer"
                  }}>Technologies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => scrollToSection(technologiesRef)}
                  style={{
                    color: "white",        // Bootstrap "success" green
                    fontWeight: "bold",
                    fontSize: "20px",
                    textDecoration: "none",
                    cursor: "pointer"
                  }}>UI</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => scrollToSection(teamRef)}
                  style={{
                    color: "white",        // Bootstrap "success" green
                    fontWeight: "bold",
                    fontSize: "20px",
                    textDecoration: "none",
                    cursor: "pointer"
                  }}>Team</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Project Scope Section */}
      <section ref={scopeRef}
        className="py-5 text-center text-white"
        style={{
          background: `linear-gradient(rgba(34,139,34,0.7), rgba(0,0,0,0.5)), url('${greenhouseBg}') center/cover no-repeat`,
        }}
      >
        <div className="container">
          <h1 className="display-5 mb-3" style={{ color: "#baff39", textShadow: "2px 2px 8px #222" }}>
            Integrated Smart Green House System for Enhanced Chili Crop Management and Efficiency
          </h1>
          <p className="lead" style={{ fontWeight: 500 }}>
            Welcome to the Greeny Integrated Smart Greenhouse System.<br />
            In this study, an integrated smart greenhouse system has been successfully developed to enhance the management and efficiency of chili cultivation through the utilization of advanced IoT technologies coupled with artificial intelligence. The developed system provides real-time monitoring and automation of key agricultural processes, including automatic and real-time disease identification, weed detection in chili plants, and quality assessment. This system also allows for remote control of greenhouse conditions, including temperature, humidity, light, and watering. This research has provided solutions to some of the problems in the agricultural sector.
          </p>
        </div>
      </section>

      {/* Research Problem Section */}
      <section ref={problemRef}
        className="py-5"
        style={{
          background: "linear-gradient(90deg, #232526 0%, #414345 100%)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left: Text */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="mb-3 text-center text-md-start" style={{ color: "#fff700" }}>Research Problem</h2>
              <p className="lead text-white" style={{ textAlign: "justify" }}>
                Greenhouse farming is essential for boosting chili yields in Sri Lanka, yet issues like weed infestations, inconsistent quality, and inefficient climate control limit its success. This research introduces a mobile-based weed detection system to reduce manual labor and chemical usage. It also features a computer vision-based quality assessment tool to evaluate harvested chili by color, size, and defects—minimizing manual grading and meeting export standards. Additionally, an IoT-integrated smart greenhouse enables real-time, fault-tolerant control of water and temperature, improving productivity, sustainability, and profitability for all growers.
              </p>
            </div>
            {/* Right: Green Chili Farming Image */}
            <div className="col-md-6 text-center">
              {/* <img
                src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80"
                alt="Green Chili Farming"
                className="img-fluid rounded shadow mb-3"
                style={{ maxHeight: "160px", objectFit: "cover" }}
              /> */}
              <img
                  src={process.env.PUBLIC_URL + "/problem.png"}
                  alt="Green Chili Plants"
                  className="img-fluid rounded shadow"
                  style={{
                    width: "400px",
                    height:"300px",
                    objectFit: "cover",
                    marginLeft: "10px"
                  }}
                />
            </div>
          </div>
        </div>
      </section>

      {/* Research Objective Section */}
      <section ref={objectiveRef} className="py-5" style={{ background: "linear-gradient(90deg, #232526 0%, #baff39 100%)" }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left: Image */}
            <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
                  src={process.env.PUBLIC_URL + "/objective.png"}
                  alt="Green Chili Plants"
                  className="img-fluid rounded shadow"
                  style={{
                    width: "400px",
                    height:"300px",
                    objectFit: "cover",
                    marginLeft: "10px"
                  }}
                />
            </div>
            {/* Right: Objectives */}
            <div className="col-md-6">
              <h2 className="mb-3 text-center text-md-start" style={{ color: "#1b5e20" }}>Research Objective</h2>
              <ul className="lead mx-auto" style={{ maxWidth: 800, color: "#222", fontWeight: 500 }}>
                <li className="mb-2">
                  Identify the different types of disease and provide fertilizer recommendations.
                </li>
                <li className="mb-2">
                  Detect weeds in chili plants.
                </li>
                <li className="mb-2">
                  Measure color growth in chilies for quality assessment.
                </li>
                <li>
                  Understand the greenhouse environment and optimize water supply and temperature control.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section ref={milestonesRef} className="py-5" style={{ background: "#181c24" }}>
        <div className="container">
          <h3 className="text-center mb-5" style={{ color: "#baff39" }}>Milestones</h3>
          <div className="row">
            {/* 1 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm bg-dark text-white">
                <div className="card-body">
                  <span className="d-inline-block mb-3 rounded-circle" style={{ background: "#baff39", padding: 16 }}>
                    <i className="bi bi-check-circle-fill text-dark" style={{ fontSize: "2rem" }}></i>
                  </span>
                  <h4 className="mb-2" style={{ color: "#baff39" }}>2024-August</h4>
                  <div className="fw-bold">Project Proposal Report</div>
                  <p className="mb-0 small">
                    The proposal report for the project. Report includes the project and outlays all the plans and scope.
                  </p>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm bg-dark text-white">
                <div className="card-body">
                  <span className="d-inline-block mb-3 rounded-circle" style={{ background: "#baff39", padding: 16 }}>
                    <i className="bi bi-lightbulb-fill text-dark" style={{ fontSize: "2rem" }}></i>
                  </span>
                  <h4 className="mb-2" style={{ color: "#baff39" }}>2024-August</h4>
                  <div className="fw-bold">Project Proposal Presentation</div>
                  <p className="mb-0 small">
                    The proposal is formally presented.
                  </p>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm bg-dark text-white">
                <div className="card-body">
                  <span className="d-inline-block mb-3 rounded-circle" style={{ background: "#baff39", padding: 16 }}>
                    <i className="bi bi-list-check text-dark" style={{ fontSize: "2rem" }}></i>
                  </span>
                  <h4 className="mb-2" style={{ color: "#baff39" }}>2023-May</h4>
                  <div className="fw-bold">Project Checklists</div>
                  <p className="mb-0 small">
                    The Checklists provide a GitHub Repository and a MS Planner Report.
                  </p>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm bg-dark text-white">
                <div className="card-body">
                  <span className="d-inline-block mb-3 rounded-circle" style={{ background: "#baff39", padding: 16 }}>
                    <i className="bi bi-bar-chart-fill text-dark" style={{ fontSize: "2rem" }}></i>
                  </span>
                  <h4 className="mb-2" style={{ color: "#baff39" }}>2024-December</h4>
                  <div className="fw-bold">Progress Presentation 1</div>
                  <p className="mb-0 small">
                    The first progress presentation. The progress of the project was shared, and a prototype product was showcased to prove the concept.
                  </p>
                </div>
              </div>
            </div>
            {/* 5 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm bg-dark text-white">
                <div className="card-body">
                  <span className="d-inline-block mb-3 rounded-circle" style={{ background: "#baff39", padding: 16 }}>
                    <i className="bi bi-journal-text text-dark" style={{ fontSize: "2rem" }}></i>
                  </span>
                  <h4 className="mb-2" style={{ color: "#baff39" }}>2025-March</h4>
                  <div className="fw-bold">Research Paper</div>
                  <p className="mb-0 small">
                    A research paper was created utilizing all the knowledge gathered while conducting the research work.
                  </p>
                </div>
              </div>
            </div>
            {/* 6 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm bg-dark text-white">
                <div className="card-body">
                  <span className="d-inline-block mb-3 rounded-circle" style={{ background: "#baff39", padding: 16 }}>
                    <i className="bi bi-bar-chart-fill text-dark" style={{ fontSize: "2rem" }}></i>
                  </span>
                  <h4 className="mb-2" style={{ color: "#baff39" }}>2025-March</h4>
                  <div className="fw-bold">Progress Presentation 2</div>
                  <p className="mb-0 small">
                    The second progress presentation. The progress of the project was shared, and a more refined and near complete product was showcased.
                  </p>
                </div>
              </div>
            </div>
            {/* 7 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm bg-dark text-white">
                <div className="card-body">
                  <span className="d-inline-block mb-3 rounded-circle" style={{ background: "#baff39", padding: 16 }}>
                    <i className="bi bi-journal-bookmark-fill text-dark" style={{ fontSize: "2rem" }}></i>
                  </span>
                  <h4 className="mb-2" style={{ color: "#baff39" }}>2025-April</h4>
                  <div className="fw-bold">Final Report</div>
                  <p className="mb-0 small">
                    Describes the work carried out throughout the year in detail in an organized manner.
                  </p>
                </div>
              </div>
            </div>
            {/* 8 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm bg-dark text-white">
                <div className="card-body">
                  <span className="d-inline-block mb-3 rounded-circle" style={{ background: "#baff39", padding: 16 }}>
                    <i className="bi bi-globe text-dark" style={{ fontSize: "2rem" }}></i>
                  </span>
                  <h4 className="mb-2" style={{ color: "#baff39" }}>2025-June</h4>
                  <div className="fw-bold">Website Assessment</div>
                  <p className="mb-0 small">
                    This website. This was developed as a static website in an academic format summarizing the details of the project to give the viewer an overall idea of the project.
                  </p>
                </div>
              </div>
            </div>
            {/* 9 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm bg-dark text-white">
                <div className="card-body">
                  <span className="d-inline-block mb-3 rounded-circle" style={{ background: "#baff39", padding: 16 }}>
                    <i className="bi bi-mic-fill text-dark" style={{ fontSize: "2rem" }}></i>
                  </span>
                  <h4 className="mb-2" style={{ color: "#baff39" }}>2025-May</h4>
                  <div className="fw-bold">Final Presentation & Viva</div>
                  <p className="mb-0 small">
                    The final presentation and viva. The completed project details will be shared, and the completed product will be showcased.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section ref={documentsRef} className="py-5" style={{ background: "#181c24" }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: "#baff39" }}>Documents</h2>
          <div className="row">
            {/* 1 */}
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm bg-dark text-white">
                <div className="card-body d-flex flex-column align-items-center">
                  <span className="mb-3 rounded-circle" style={{ background: "#baff39", padding: 16 }}>
                    <i className="bi bi-file-earmark-text text-dark" style={{ fontSize: "2rem" }}></i>
                  </span>
                  <h5 className="mb-2">Topic Assessment</h5>
                  <p className="small mb-2">Submitted on 2024/06/25</p>
                  <a href="https://drive.google.com/file/d/1pAZUP_OJl23NaKwtxP5oF4-vM_GAgpZM/view?usp=sharing"
                    className="btn btn-success btn-sm rounded-pill px-3">
                    Download now
                  </a>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm bg-dark text-white">
                <div className="card-body d-flex flex-column align-items-center">
                  <span className="mb-3 rounded-circle" style={{ background: "#baff39", padding: 16 }}>
                    <i className="bi bi-file-earmark-text text-dark" style={{ fontSize: "2rem" }}></i>
                  </span>
                  <h5 className="mb-2">RETAF</h5>
                  <p className="small mb-2">Submitted on 2024/07/17</p>
                  <a href="https://drive.google.com/file/d/1U_LKylY1I_Miwa2AD7vaSIUisrhO2dmx/view?usp=sharing"
                    className="btn btn-success btn-sm rounded-pill px-3">
                    Download now
                  </a>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm bg-dark text-white">
                <div className="card-body d-flex flex-column align-items-center">
                  <span className="mb-3 rounded-circle" style={{ background: "#baff39", padding: 16 }}>
                    <i className="bi bi-file-earmark-text text-dark" style={{ fontSize: "2rem" }}></i>
                  </span>
                  <h5 className="mb-2">Project Proposal</h5>
                  <p className="small mb-2">Submitted on 2024/08/23</p>
                  <a href="https://drive.google.com/drive/folders/1TzZjjtjjjCdc8VjkZ615bYhAzRmqz95k?usp=sharing"
                    className="btn btn-success btn-sm rounded-pill px-3">
                    Download now
                  </a>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm bg-dark text-white">
                <div className="card-body d-flex flex-column align-items-center">
                  <span className="mb-3 rounded-circle" style={{ background: "#baff39", padding: 16 }}>
                    <i className="bi bi-list-check text-dark" style={{ fontSize: "2rem" }}></i>
                  </span>
                  <h5 className="mb-2">Check Lists</h5>
                  <p className="small mb-2">Submitted on 2024/12/08</p>
                  <a href="https://drive.google.com/drive/folders/1Sqa6YbUGzDfJHyOFHepEkBhPkRiUzjd_?usp=sharing"
                    className="btn btn-success btn-sm rounded-pill px-3">
                    Download now
                  </a>
                </div>
              </div>
            </div>
            {/* 5 */}
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm bg-dark text-white">
                <div className="card-body d-flex flex-column align-items-center">
                  <span className="mb-3 rounded-circle" style={{ background: "#baff39", padding: 16 }}>
                    <i className="bi bi-journal-text text-dark" style={{ fontSize: "2rem" }}></i>
                  </span>
                  <h5 className="mb-2">Research Paper</h5>
                  <p className="small mb-2">Submitted on 2025/03/07</p>
                  <a href="https://drive.google.com/file/d/1R7nFZ-hoyzanO9tPkwFh62wPXVZwLP_T/view?usp=sharing"
                    className="btn btn-success btn-sm rounded-pill px-3">
                    Download now
                  </a>
                </div>
              </div>
            </div>
            {/* 6 */}
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm bg-dark text-white">
                <div className="card-body d-flex flex-column align-items-center">
                  <span className="mb-3 rounded-circle" style={{ background: "#baff39", padding: 16 }}>
                    <i className="bi bi-journal-bookmark text-dark" style={{ fontSize: "2rem" }}></i>
                  </span>
                  <h5 className="mb-2">Research Logbook</h5>
                  <p className="small mb-2">Submitted on 2023/10/30</p>
                  <a href=""
                    className="btn btn-success btn-sm rounded-pill px-3">
                    Download now
                  </a>
                </div>
              </div>
            </div>
            {/* 7 */}
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm bg-dark text-white">
                <div className="card-body d-flex flex-column align-items-center">
                  <span className="mb-3 rounded-circle" style={{ background: "#baff39", padding: 16 }}>
                    <i className="bi bi-journal-bookmark-fill text-dark" style={{ fontSize: "2rem" }}></i>
                  </span>
                  <h5 className="mb-2">Final Report</h5>
                  <p className="small mb-2">Submitted on 2025/04/11</p>
                  <a href="https://drive.google.com/file/d/1VXsjEYoEnp8ai_1VhJChd2P_W4aqTRWr/view?usp=sharing"
                    className="btn btn-success btn-sm rounded-pill px-3">
                    Download now
                  </a>
                </div>
              </div>
            </div>
            {/* 8 */}
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm bg-dark text-white">
                <div className="card-body d-flex flex-column align-items-center">
                  <span className="mb-3 rounded-circle" style={{ background: "#baff39", padding: 16 }}>
                    <i className="bi bi-image text-dark" style={{ fontSize: "2rem" }}></i>
                  </span>
                  <h5 className="mb-2">Research Poster</h5>
                  <p className="small mb-2">Submitted on <br /></p>
                  <a href=""
                    className="btn btn-success btn-sm rounded-pill px-3">
                    Download now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presentations Section */}
      <section ref={presentationsRef} className="py-5" style={{ background: "#181c24" }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: "#baff39" }}>Presentations</h2>
          <div className="row">
            {/* 1 */}
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm bg-dark text-white">
                <div className="card-body d-flex flex-column align-items-center">
                  <span className="mb-3 rounded-circle" style={{ background: "#baff39", padding: 16 }}>
                    <i className="bi bi-easel-fill text-dark" style={{ fontSize: "2rem" }}></i>
                  </span>
                  <h5 className="mb-2">Project Proposal</h5>
                  <p className="small mb-2">Submitted on 2024/08/05</p>
                  <a href="https://docs.google.com/presentation/d/11b4AQvTyRRLv2osPJ8p213O5O1F_SCnH/edit?usp=sharing&ouid=114902495366408194908&rtpof=true&sd=true"
                    className="btn btn-success btn-sm rounded-pill px-3">
                    Download now
                  </a>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm bg-dark text-white">
                <div className="card-body d-flex flex-column align-items-center">
                  <span className="mb-3 rounded-circle" style={{ background: "#baff39", padding: 16 }}>
                    <i className="bi bi-bar-chart-fill text-dark" style={{ fontSize: "2rem" }}></i>
                  </span>
                  <h5 className="mb-2">Progress Presentation I</h5>
                  <p className="small mb-2">Submitted on 2024/12/04</p>
                  <a href="https://docs.google.com/presentation/d/1jfHd5kxIi1flezd3lxaTFQSek5U9gWUr/edit?usp=sharing&ouid=114902495366408194908&rtpof=true&sd=true"
                    className="btn btn-success btn-sm rounded-pill px-3">
                    Download now
                  </a>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm bg-dark text-white">
                <div className="card-body d-flex flex-column align-items-center">
                  <span className="mb-3 rounded-circle" style={{ background: "#baff39", padding: 16 }}>
                    <i className="bi bi-bar-chart-fill text-dark" style={{ fontSize: "2rem" }}></i>
                  </span>
                  <h5 className="mb-2">Progress Presentation II</h5>
                  <p className="small mb-2">Submitted on 2025/03/18</p>
                  <a href="https://docs.google.com/presentation/d/1POHi9weIZc8MdZ68nbxK-yiN0g1cO_5Q/edit?usp=sharing&ouid=114902495366408194908&rtpof=true&sd=true"
                    className="btn btn-success btn-sm rounded-pill px-3">
                    Download now
                  </a>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm bg-dark text-white">
                <div className="card-body d-flex flex-column align-items-center">
                  <span className="mb-3 rounded-circle" style={{ background: "#baff39", padding: 16 }}>
                    <i className="bi bi-easel-fill text-dark" style={{ fontSize: "2rem" }}></i>
                  </span>
                  <h5 className="mb-2">Final Presentation</h5>
                  <p className="small mb-2">Submitted on 2025/05/26</p>
                  <a href="https://docs.google.com/presentation/d/1DRa4kLYmcmL9lVOOsrx7ODrH1xEVPmSP/edit?usp=sharing&ouid=114902495366408194908&rtpof=true&sd=true"
                    className="btn btn-success btn-sm rounded-pill px-3">
                    Download now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Technologies Used Section */}
      <section ref={technologiesRef} className="py-5" style={{ background: "#181c24" }}>
        <div className="container">
          <h2 className="text-center" style={{ color: "#baff39", marginBottom: "5rem" }}>Technologies Used</h2>

          {/* Row 1 */}
          <div className="row justify-content-center">
          {/* FastAPI */}
          <div className="col-6 col-md-3 mb-4 text-center">
            <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
            alt="FastAPI"
            style={{
              width: "48px",
              height: "48px",
              objectFit: "contain",
              marginBottom: "10px",
              background: "#222",
              borderRadius: "12px",
              padding: "6px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
            />
            <div style={{ color: "#baff39", fontWeight: 500 }}>FastAPI</div>
          </div>
      

      {/* Jupyter Python */}
      <div className="col-6 col-md-3 mb-4 text-center">
        <img
          src={process.env.PUBLIC_URL + "/python.jpeg"}
          alt="Python"
          style={{
            width: "48px",
            height: "48px",
            objectFit: "contain",
            marginBottom: "10px",
            background: "#fff",
            borderRadius: "12px",
            padding: "6px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        />
        <div style={{ color: "#f7971e", fontWeight: 500 }}>Python</div>
      </div>

      {/* Flutter */}
      <div className="col-6 col-md-3 mb-4 text-center">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
          alt="Flutter"
          style={{
            width: "48px",
            height: "48px",
            objectFit: "contain",
            marginBottom: "10px",
            background: "#fff",
            borderRadius: "12px",
            padding: "6px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        />
        <div style={{ color: "#42a5f5", fontWeight: 500 }}>Flutter</div>
      </div>

      {/* Dart */}
      <div className="col-6 col-md-3 mb-4 text-center">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
          alt="Dart"
          style={{
            width: "48px",
            height: "48px",
            objectFit: "contain",
            marginBottom: "10px",
            background: "#fff",
            borderRadius: "12px",
            padding: "6px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        />
        <div style={{ color: "#0175c2", fontWeight: 500 }}>Dart</div>
      </div>
    </div>

    {/* Row 2 */}
    <div className="row justify-content-center">
      {/* MongoDB */}
      <div className="col-6 col-md-3 mb-4 text-center">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          alt="MongoDB"
          style={{
            width: "48px",
            height: "48px",
            objectFit: "contain",
            marginBottom: "10px",
            background: "#fff",
            borderRadius: "12px",
            padding: "6px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        />
        <div style={{ color: "#4caf50", fontWeight: 500 }}>MongoDB</div>
      </div>

      {/* Google Colab */}
      <div className="col-6 col-md-3 mb-4 text-center">
        <img
          src={process.env.PUBLIC_URL + "/colab.jpeg"}
          alt="Google Colab"
          style={{
            width: "48px",
            height: "48px",
            objectFit: "contain",
            marginBottom: "10px",
            background: "#fffde7",
            borderRadius: "12px",
            padding: "6px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        />
        <div style={{ color: "#f9ab00", fontWeight: 500 }}>Google Colab</div>
      </div>

      {/* Android */}
      <div className="col-6 col-md-3 mb-4 text-center">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
          alt="Android"
          style={{
            width: "48px",
            height: "48px",
            objectFit: "contain",
            marginBottom: "10px",
            background: "#fff",
            borderRadius: "12px",
            padding: "6px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        />
        <div style={{ color: "#a4c639", fontWeight: 500 }}>Android</div>
      </div>

      {/* VSCode */}
      <div className="col-6 col-md-3 mb-4 text-center">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          alt="VSCode"
          style={{
            width: "48px",
            height: "48px",
            objectFit: "contain",
            marginBottom: "10px",
            background: "#fff",
            borderRadius: "12px",
            padding: "6px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        />
        <div style={{ color: "#007acc", fontWeight: 500 }}>VSCode</div>
      </div>
    </div>
  </div>
</section>
{/* UI Section */}
<section className="py-5" style={{ background: "#12161e" }}>
  <div className="container">
    <h2 className="text-center mb-5" style={{ color: "#baff39" }}>User Interfaces</h2>

    <div className="row justify-content-center">
      {[
        "signin.jpg",
        "signup.jpg",
        "home.jpg",
        "weed detector.jpg",
        "weeds_results.jpg",
        "quality_detector.jpg",
        "quality_result.jpg",
        "quality_recommendation.jpg",
        "chili_leaf_prediction.jpg",
        "leaf_prediction.jpg",
        "disease_recommendation.jpg",
        "saved_recommendations.jpg",
      ].map((filename, index) => (
        <div key={index} className="col-6 col-md-3 mb-4 text-center">
          <img
            src={`${process.env.PUBLIC_URL}/${filename}`}
            alt={`UI Design ${index + 1}`}
            className="img-fluid rounded shadow"
            style={{
              objectFit: "cover",
              height: "700px",
              width: "100%",
              borderRadius: "12px",
              border: "2px solid #baff39",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Team Members Section */}
      <section
      ref={teamRef}
      className="py-5"
      style={{ background: "linear-gradient(90deg, #baff39 0%, #43cea2 100%)" }}
      >
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: "#185a9d" }}>Our Team</h2>
          
          {/* Two rows, each with 3 team members */}
          {[0, 3].map((startIdx) => (
            <div className="row justify-content-center mb-4" key={startIdx}>
              {teamMembers.slice(startIdx, startIdx + 3).map((member, idx) => (
                <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex align-items-stretch" key={idx}>
                  <div className="card border-0 shadow text-center h-100 w-100" style={{ background: "#fff" }}>
                    <img
                    src={member.img}
                    alt={member.name}
                    className="card-img-top rounded-circle mx-auto mt-4"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                      border: "4px solid #baff39",
                    }}
                    />
                    <div className="card-body">
                      <h5 className="card-title" style={{ color: "#43cea2" }}>{member.name}</h5>
                      <p style={{ fontSize: '14px', color: 'black', fontWeight: 'bold' }}>{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default App;
