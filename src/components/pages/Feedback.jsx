import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Feedback = ({carts}) => {
  const [feedbackText, setFeedbackText] = useState("");

  const handleSendFeedback = () => {
    console.log(feedbackText);
    setFeedbackText("");
    alert("Feedback Sent")
  };

  return (
    <div className="mt-4 mx-20">
      <Navbar  carts={carts} />
      <div className="my-4">
        <img src="/assets/feedback.png" alt="" />
        <h1 className="mt-8 font-bold text-4xl">Send Feedback</h1>
        <div className="mt-8 mb-14">
          <textarea
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            placeholder="Write your Feedback"
            className="border-2 w-full h-48 p-4"
          ></textarea>
          <button
            onClick={handleSendFeedback}
            className="w-full p-6 bg-slate-900 text-white font-bold text-2xl my-2"
          >
            Send
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Feedback;
