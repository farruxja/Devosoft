
import React, { useEffect, useState } from "react";

const departments = ["all", "development", "design", "data", "management"];

export default function CareerModal({ jobs }) {
  const [selectedDept, setSelectedDept] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({});
  const [fileName, setFileName] = useState("");

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowModal(true);
    setStep(1);
    setForm({});
    setFileName("");
  };

  const handleNext = () => {
    if (validateStep()) setStep(step + 1);
  };
  const handlePrev = () => step > 1 && setStep(step - 1);

  const validateStep = () => {
    if (step === 1) {
      return form.firstName && form.lastName && form.email && form.phone;
    }
    if (step === 2) {
      return form.resume;
    }
    if (step === 3) {
      return form.experience && form.interest && form.qualification;
    }
    return false;
  };

  const handleSubmit = () => {
    if (validateStep()) {
      setShowModal(false);
      setShowConfirm(true);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, resume: file });
      setFileName(file.name);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input placeholder="First Name *" name="firstName" onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="input" required />
              <input placeholder="Last Name *" name="lastName" onChange={(e) => setForm({ ...form, lastName: e.target.value })} className="input" required />
            </div>
            <input placeholder="Email *" type="email" name="email" onChange={(e) => setForm({ ...form, email: e.target.value })} className="input" required />
            <input placeholder="Phone *" type="tel" name="phone" onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input" required />
            <input placeholder="Location" name="location" onChange={(e) => setForm({ ...form, location: e.target.value })} className="input" />
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <label className="block">
              <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" id="resumeUpload" />
              <div className="upload-box">{fileName || "Upload Resume *"}</div>
            </label>
            <input placeholder="LinkedIn Profile" type="url" name="linkedin" onChange={(e) => setForm({ ...form, linkedin: e.target.value })} className="input" />
            <input placeholder="Portfolio Website" type="url" name="portfolio" onChange={(e) => setForm({ ...form, portfolio: e.target.value })} className="input" />
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <input placeholder="Years of Experience *" type="number" name="experience" onChange={(e) => setForm({ ...form, experience: e.target.value })} className="input" required />
            <textarea placeholder="Why are you interested in this position? *" name="interest" onChange={(e) => setForm({ ...form, interest: e.target.value })} className="input" required />
            <textarea placeholder="What makes you a good fit? *" name="qualification" onChange={(e) => setForm({ ...form, qualification: e.target.value })} className="input" required />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center mb-8">
        {departments.map((dept) => (
          <button key={dept} className={`career-filter-btn mx-2 ${selectedDept === dept ? "active" : ""}`} onClick={() => setSelectedDept(dept)}>
            {dept === "all" ? "All Departments" : dept.charAt(0).toUpperCase() + dept.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs
          .filter((job) => selectedDept === "all" || job.department === selectedDept)
          .map((job) => (
            <div key={job.title} className="career-card">
              <div className="flex justify-between mb-2">
                <h4>{job.title}</h4>
                <span>{job.mode}</span>
              </div>
              <p>{job.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {job.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
              <button onClick={() => handleApplyClick(job)} className="gradient-btn mt-4">
                Apply Now
              </button>
            </div>
          ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedJob?.title}</h3>
              <p>{selectedJob?.department}</p>
              <button onClick={() => setShowModal(false)}>✖</button>
            </div>
            <div className="modal-body">
              <div className="steps-indicator">
                <div className={`step-circle ${step >= 1 ? "active" : ""}`}>1</div>
                <div className={`step-circle ${step >= 2 ? "active" : ""}`}>2</div>
                <div className={`step-circle ${step === 3 ? "active" : ""}`}>3</div>
              </div>
              {renderStep()}
            </div>
            <div className="modal-footer">
              {step > 1 && <button onClick={handlePrev}>Previous</button>}
              {step < 3 ? <button onClick={handleNext}>Next</button> : <button onClick={handleSubmit}>Submit Application</button>}
            </div>
          </div>
        </div>
      )}

      {/* Confirmation */}
      {showConfirm && (
        <div className="modal-overlay" onClick={() => setShowConfirm(false)}>
          <div className="modal text-center" onClick={(e) => e.stopPropagation()}>
            <i className="ri-check-line ri-3x text-green-500 mb-4"></i>
            <h3>Application Submitted!</h3>
            <p>We will get back to you soon.</p>
            <button onClick={() => setShowConfirm(false)} className="gradient-btn mt-4">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
