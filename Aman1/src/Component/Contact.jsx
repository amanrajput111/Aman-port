import React, { useState } from 'react';
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    console.log("Name is :", name);
    console.log("Email is :", email);
    console.log("Message is :", message);

    fetch("https://aman-wxd-byhp.onrender.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    })
      .then(res => res.text())
      .then(data => {
        console.log(data);
        alert("Message sent successfully");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(err => console.log(err));
  }

  return (
    <div
      id="contact"
      ref={ref}
      className={`py-20 bg-[#1f1f1f] transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6 py-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Get in <span className="text-fuchsia-600">touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg md:text-xl">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-[#2d2d2d] p-8 rounded-3xl shadow-lg border border-transparent hover:border-fuchsia-600/30 transition-colors">
            <form action="/submit" method="POST" className="space-y-6" onSubmit={submitHandler}>
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Your Name</label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#1a1a1a] text-white border-[#3d3d3d] focus:border-fuchsia-500 px-4 py-3 outline-none border-2 rounded-xl transition-colors"
                  type="text"
                  name="name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email Address</label>
                <input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1a1a1a] text-white border-[#3d3d3d] focus:border-fuchsia-500 px-4 py-3 outline-none border-2 rounded-xl transition-colors"
                  type="email"
                  name="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Your Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  rows="4"
                  className="w-full bg-[#1a1a1a] text-white border-[#3d3d3d] focus:border-fuchsia-500 px-4 py-4 outline-none border-2 rounded-xl transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-fuchsia-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-fuchsia-700 transition duration-300 active:scale-95 shadow-md border border-transparent hover:border-black"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-8 lg:ml-10 flex flex-col justify-center">
            <div className="flex items-start">
              <div className="text-fuchsia-500 text-3xl mr-6 mt-1">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-white">Location</h3>
                <p className="text-gray-400">Krishna Nagar, Lucknow</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-fuchsia-500 text-3xl mr-6 mt-1">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-white">Email</h3>
                <p className="text-gray-400">abhayrajput112005@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-fuchsia-500 text-3xl mr-6 mt-1">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-white">Phone</h3>
                <p className="text-gray-400">+91 8545887681</p>
              </div>
            </div>

            <div className="pt-8 border-t border-[#3d3d3d]">
              <h3 className="text-xl font-semibold mb-4 text-white">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/amanrajput111" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-[#2d2d2d] text-fuchsia-500 hover:bg-black hover:text-white transition duration-300 text-xl shadow-lg border border-transparent hover:border-fuchsia-400">
                  <FaGithub />
                </a>
                <a href="https://www.instagram.com/fd_abhii_x1?igsh=MXNzYXdqcGxwYWJqcg==" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-[#2d2d2d] text-fuchsia-500 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white transition duration-300 text-xl shadow-lg border border-transparent hover:border-fuchsia-400">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/aman-7724773a4" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-[#2d2d2d] text-fuchsia-500 hover:bg-blue-600 hover:text-white transition duration-300 text-xl shadow-lg border border-transparent hover:border-fuchsia-400">
                  <FaLinkedin />
                </a>
                <a href="https://www.facebook.com/share/1BF1Tn3hZB/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-[#2d2d2d] text-fuchsia-500 hover:bg-blue-700 hover:text-white transition duration-300 text-xl shadow-lg border border-transparent hover:border-fuchsia-400">
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
