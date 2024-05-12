"use client";
import { useState, useRef, useEffect } from "react";
import SocialButtons from "@/components/SocialButtons";

const CodingThemeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({ status: "", message: "" });
  const [commandHistory, setCommandHistory] = useState([]);
  const terminalRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setFormStatus({ status: "success", message: data.message });
        setCommandHistory((prevHistory) => [
          ...prevHistory,
          `> ${data.message}`,
        ]);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const error = await response.json();
        setFormStatus({ status: "error", message: error.error });
        setCommandHistory((prevHistory) => [
          ...prevHistory,
          `> ${error.error}`,
        ]);
      }
    } catch (error) {
      console.error(error);
      setFormStatus({ status: "error", message: "Something went wrong" });
      setCommandHistory((prevHistory) => [
        ...prevHistory,
        "> Something went wrong",
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.trim() !== "") {
        setCommandHistory((prevHistory) => [
          ...prevHistory,
          `> ${e.target.value}`,
        ]);
        e.target.value = "";
      }
    }
  };

  useEffect(() => {
    const terminalWindow = terminalRef.current;
    terminalWindow.scrollTop = terminalWindow.scrollHeight;
  }, [commandHistory]);

  return (
    <div className="flex w-screen h-full items-center flex-row max-sm:flex-col justify-center">
      <div className="w-1/2 max-sm:w-full p-8">
        <h2 className="text-4xl font-mono font-semibold mb-4">Contact Me</h2>
        <div className="w-full bg-black text-green-500 font-mono p-4">
          <div ref={terminalRef}>
            {commandHistory.map((command, index) => (
              <p key={index}>{command}</p>
            ))}
            <form onSubmit={handleSubmit} className="flex items-center w-full flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className="bg-black text-green-500 w-full font-mono p-4 border-white border-b outline-none flex-grow mr-2"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className="bg-black text-green-500 w-full font-mono p-4 border-white border-b outline-none flex-grow mr-2"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className="bg-black text-green-500 w-full font-mono p-4 border-white border-b outline-none flex-grow mr-2"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-green-500 text-2xl w-max p-4 text-black font-mono px-4 py-2 rounded"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-1/2 max-sm:w-full">
        <SocialButtons />
      </div>
    </div>
  );
};

export default CodingThemeForm;
