import { useState } from "react";
import { Link } from "react-router";
import facebook from "../../assets/images/facebook.png"
import instagram from "../../assets/images/instagram.png"
import twitter from "../../assets/images/twitter.png"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Submitted:", formData);
    alert("Feedback submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-6 mt-10">
      <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 m-4">
        <h2 className="text-3xl font-bold mb-4 text-green-800 text-center pb-3">Contact Information</h2>
        <p className="text-lg text-gray-600 pb-1 font-bold">✉️ Email:</p>
        <p className="pl-10 text-gray-600">support@trackgo.com</p>
        <p className="pl-10 text-gray-600">careers@trackgo.com</p>
        <p className="pl-10 text-gray-600">alliances@trackgo.com</p>

        <p className="text-lg text-gray-600 pb-1 pt-3 font-bold">📞 Phone:</p>
        <p className="pl-10 text-gray-600">+123 456 7890</p>

        <p className="text-lg text-gray-600 pb-1 pt-3 font-bold">📍 Address:</p>
        <p className="pl-10 text-gray-600">TrackGo Office,</p>
        <p className="pl-10 text-gray-600">45 Railway Colony,</p>
        <p className="pl-10 text-gray-600">Station Road, New Delhi,</p>
        <p className="pl-10 text-gray-600">Delhi - 110001, India</p>

        <div className="flex flex-row space-x-2 pt-3 pl-10">
            <Link to="#"> <img src={instagram} alt="" className="w-7"/></Link>
            <Link to="#"> <img src={facebook} alt="" className="w-7"/></Link>
            <Link to="#"> <img src={twitter} alt="" className="w-7"/></Link>
        </div>
        
        <p className="mt-4 text-gray-600">For any inquiries, reach out to us. We are happy to assist you!</p>
      </div>

      {/* Feedback Form */}
      <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 m-4">
        <h2 className="text-3xl font-bold mb-4 text-green-800 text-center pb-3">Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-1 text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg outline-none focus:border-green-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-1 text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg outline-none focus:border-green-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-1 text-gray-600">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg outline-none focus:border-green-300"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded-lg text-xl font-bold hover:bg-green-700 transition"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;