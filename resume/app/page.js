"use client";
import { useState } from "react";
import jsPDF from "jspdf";

export default function Home() {
  const [template, setTemplate] = useState("simple");
  const [form, setForm] = useState({
    name: "",
    skills: "",
    experience: "",
    intro: ""
  });
  const [improvedIntro, setImprovedIntro] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const improveText = async () => {
    const res = await fetch("/api/improve", {
      method: "POST",
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setImprovedIntro(data.intro);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text(`Name: ${form.name}`, 10, 10);
    doc.text(`Skills: ${form.skills}`, 10, 20);
    doc.text(`Experience: ${form.experience}`, 10, 30);
    doc.text(`Intro: ${improvedIntro || form.intro}`, 10, 40);
    doc.save("resume.pdf");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Resume Builder</h1>

      <select onChange={(e) => setTemplate(e.target.value)}>
        <option value="simple">Simple</option>
        <option value="modern">Modern</option>
      </select>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <textarea name="skills" placeholder="Skills" onChange={handleChange} />
      <textarea name="experience" placeholder="Experience" onChange={handleChange} />
      <textarea name="intro" placeholder="Write intro" onChange={handleChange} />

      <button onClick={improveText}>Improve with AI</button>
      <button onClick={downloadPDF}>Download PDF</button>

      <hr />

      <h2>Live Preview ({template} template)</h2>
      <div style={{
        border: "1px solid black",
        padding: 20,
        background: template === "modern" ? "#f3f3f3" : "white"
      }}>
        <h3>{form.name}</h3>
        <p><b>Intro:</b> {improvedIntro || form.intro}</p>
        <p><b>Skills:</b> {form.skills}</p>
        <p><b>Experience:</b> {form.experience}</p>
      </div>
    </div>
  );
}
