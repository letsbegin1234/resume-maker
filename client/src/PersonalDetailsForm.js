import React, { useState } from "react";
import axios from "axios";
import TextareaAutosize from "react-textarea-autosize";

function PersonalDetailsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [education, setEducation] = useState("");
  const [jobdesc, setJobdesc] = useState("");
  const [confbtn, setConfbtn] = useState("No");
  const [experience, setExperience] = useState("");
  const [projects, setProjects] = useState("");
  const [skills, setSkills] = useState("");
  const [extra, setExtra] = useState("");
  const [achievements, setAchievements] = useState("");
  const [comp, setComp] = useState("");
  const [step, setStep] = useState(1); // Current step/page

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    if (!name || !email) {
      // Check if Name or Email is empty
      alert("Name and Email are required fields.");
      setStep(2);
      return;
    }
    setStep(step + 1);
    try {
      const response = await axios.post(
        "https://resume-maker-backend.onrender.com/generate-sop",
        {
          name,
          email,
          mobile,
          linkedin,
          github,
          education,
          experience,
          projects,
          skills,
          extra,
          achievements,
          comp,
          jobdesc,
        }
      );
      console.log(response);

      nextStep(); // Proceed to the SOP display step
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form">
      {step === 1 && (
        <div className="item">
          <h2>Resume Generator</h2>
          <br />
          <p>
            Are you looking to create a standout resume that impresses potential
            employers? Look no further! Our Resume Generator Web Application is
            designed with you in mind.
            <br />
            It uses open AI api for creating the content. So you can tell it
            like a friend
          </p>
          <br />
          <p>
            Also get the resume according to the Job description you provided
          </p>
          <br />
          <button className="rightbtn" onClick={nextStep}>
            Start
          </button>
          <br />
        </div>
      )}
      {step === 2 && (
        <div className="item">
          <label>Enter your Name</label>
          <input
            type="text"
            value={name}
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
          />

          <button className="leftbtn" onClick={prevStep}>
            Previous
          </button>
          <button className="rightbtn" onClick={nextStep}>
            Next
          </button>
        </div>
      )}
      {step === 3 && (
        <div className="item">
          <label>Enter Your Email </label>
          <input
            type="email"
            value={email}
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="leftbtn" onClick={prevStep}>
            Previous
          </button>
          <button className="rightbtn" onClick={nextStep}>
            Next
          </button>
        </div>
      )}
      {step === 4 && (
        <div className="item">
          <label>
            Enter your Mobile Number
            <input
              type="text"
              placeholder="Your Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </label>
          <button className="leftbtn" onClick={prevStep}>
            Previous
          </button>
          <button className="rightbtn" onClick={nextStep}>
            Next
          </button>
        </div>
      )}
      {step === 5 && (
        <div className="item">
          <label>Enter your linkedIn Link</label>
          <input
            type="text"
            placeholder="linkedIn Link"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
          <br />
          <button className="leftbtn" onClick={prevStep}>
            Previous
          </button>
          <button className="rightbtn" onClick={nextStep}>
            Next
          </button>
        </div>
      )}
      {step === 6 && (
        <div className="item">
          <label>
            Enter your GitHub Link
            <input
              type="text"
              placeholder="github link"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
          </label>
          <button className="leftbtn" onClick={prevStep}>
            Previous
          </button>
          <button className="rightbtn" onClick={nextStep}>
            Next
          </button>
        </div>
      )}
      {step === 7 && (
        <div className="item">
          <label>
            Enter the Job description that you are applying for?
            <TextareaAutosize
              placeholder="Job Description"
              value={jobdesc}
              onChange={(e) => setJobdesc(e.target.value)}
              className="txtarea"
            />
          </label>
          <button className="leftbtn" onClick={prevStep}>
            Previous
          </button>
          <button className="rightbtn" onClick={nextStep}>
            Next
          </button>
        </div>
      )}
      {step === 8 && (
        <div className="item">
          <label>
            Enter Your Education details
            <TextareaAutosize
              placeholder="Education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="txtarea"
            />
          </label>
          <button className="leftbtn" onClick={prevStep}>
            Previous
          </button>
          <button className="rightbtn" onClick={nextStep}>
            Next
          </button>
        </div>
      )}
      {step === 9 && (
        <div className="item">
          <label>
            Enter your experience
            <TextareaAutosize
              placeholder="Experience "
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="txtarea"
            />
          </label>
          <button className="leftbtn" onClick={prevStep}>
            Previous
          </button>
          <button className="rightbtn" onClick={nextStep}>
            Next
          </button>
        </div>
      )}
      {step === 10 && (
        <div className="item">
          <label>
            Explain about Your Projects with links if possible
            <TextareaAutosize
              placeholder="Projects"
              value={projects}
              onChange={(e) => setProjects(e.target.value)}
              className="txtarea"
            />
          </label>
          <button className="leftbtn" onClick={prevStep}>
            Previous
          </button>
          <button className="rightbtn" onClick={nextStep}>
            Next
          </button>
        </div>
      )}
      {step === 11 && (
        <div className="item">
          <label>
            Enter your technical skills?
            <TextareaAutosize
              placeholder="Technical Skills "
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="txtarea"
            />
          </label>
          <button className="leftbtn" onClick={prevStep}>
            Previous
          </button>
          <button className="rightbtn" onClick={nextStep}>
            Next
          </button>
        </div>
      )}
      {step === 12 && (
        <div className="item">
          <label>
            Enter Your extracurriculars
            <TextareaAutosize
              placeholder="Extra Curriculars"
              value={extra}
              onChange={(e) => setExtra(e.target.value)}
              className="txtarea"
            />
          </label>
          <button className="leftbtn" onClick={prevStep}>
            Previous
          </button>
          <button className="rightbtn" onClick={nextStep}>
            Next
          </button>
        </div>
      )}
      {step === 13 && (
        <div className="item">
          <label>
            Enter Your Achievements
            <TextareaAutosize
              placeholder="Achievements "
              value={achievements}
              onChange={(e) => setAchievements(e.target.value)}
              className="txtarea"
            />
          </label>
          <button className="leftbtn" onClick={prevStep}>
            Previous
          </button>
          <button className="rightbtn" onClick={nextStep}>
            Next
          </button>
        </div>
      )}
      {step === 14 && (
        <div className="item">
          <label>
            Enter Your competetive programming ratings with links
            <TextareaAutosize
              placeholder="Competetive Programming "
              value={comp}
              onChange={(e) => setComp(e.target.value)}
              className="txtarea"
            />
          </label>
          <button className="leftbtn" onClick={prevStep}>
            Previous
          </button>
          <button className="rightbtn" onClick={nextStep}>
            Next
          </button>
        </div>
      )}

      {step === 15 && (
        <div className="item">
          <label>Are you sure want to Submit ?</label>
          <select value={confbtn} onChange={(e) => setConfbtn(e.target.value)}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <br />
          <button className="leftbtn" onClick={prevStep}>
            Previous
          </button>
          {confbtn === "Yes" && (
            <button className="rightbtn" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      )}

      {step === 16 && (
        <div className="item">
          <p>
            Dear <b>{name}</b> , Thank you for submitting your information! .
            Your Details has been successfully received. We have sent your
            resume to <b>{email}</b> .Have a Nice day.
          </p>
          <br />
          <p>
            Please Check Your Email : <b>{email}</b>
          </p>
          <br />
        </div>
      )}
    </div>
  );
}

export default PersonalDetailsForm;
