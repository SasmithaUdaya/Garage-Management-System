import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BackButton from "../../components/Support/BackButton";
import Spinner from "../../components/Support/spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import FeedbackCardFrCreate from "../../components/Support/FeeadBack/FeedbackCardFrCreate";
import StarRating from "../../components/Support/StarRating";
import toast from "react-hot-toast";

const CreateFeedback = () => {
  // Get current user from Redux store
  const currentUser = useSelector((state) => state.user.currentUser);
  const [feedback, setFeedback] = useState([]);
  const [Email, setEmail] = useState(currentUser ? currentUser.email : ""); // Default email to current user's email
  const [Description, setDescription] = useState("");
  const [Rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();





  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/feedback/getFeedbacks")
      .then((response) => {
        setFeedback(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching feedbacks:", error);
        setLoading(false);
      });
  }, []);

  // Function to handle form submission
  const handleSaveFeedback = async (e) => {
    e.preventDefault();
  
    if (!currentUser) {
      toast.error("You need to be logged in to submit feedback.");
      return;
    }
  
    const emailPattern = /^[^\s@]+@gmail\.com$/;
  
    if (!emailPattern.test(Email)) {
      toast.error("Please enter a valid email.");
      return;
    }
  
    if (Rating === 0) {
      toast.error("Please rate your experience.");
      return;
    }
  
    // Prepare the feedback data with user reference
    const data = {
      Email,
      Description,
      Rating,
      userRef: currentUser._id, // Add user ID
    };
  
    try {
      setLoading(true);
      await axios.post("http://localhost:3000/feedback/addFeedback", data);
      enqueueSnackbar("Feedback created successfully", {
        variant: "success",
      });
      toast.success("Created Successfully");
      setLoading(false);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      setLoading(false);
      enqueueSnackbar("Error", { variant: "error" });
      toast.error("An error occurred while submitting feedback.");
      console.error("Error saving feedback:", error);
    }
  };
  

  return (
    <div className="p-4">
      <div className="p-4 flex items-center">
        <BackButton />
        <span className="p-4"></span>
        <h1
          className="text-3xl my-4 italic"
          style={{
            fontWeight: "bold",
            background: "-webkit-linear-gradient(45deg, #e6b800, #c2c2a3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Feedback & Reviews
        </h1>
      </div>
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          {feedback.map((item, index) => (
            <FeedbackCardFrCreate key={index} feedback={item} />
          ))}
        </div>
        <div className="col-span-1">
          {loading ? <Spinner /> : ""}
          <div
            className="flex flex-col border-2 border-gray-600 rounded-xl w-[400px] p-4 mx-auto"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              position: "relative",
            }}
          >
            <h1
              style={{
                textAlign: "right",
                fontWeight: "bold",
                fontStyle: "italic",
                color: "#FFD700",
                fontSize: "2rem",
              }}
            >
              Your Feedback
            </h1>
            <div className="my-4">
              <label className="text-m mr-4 text-black">Email</label>
              <input
                type="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full"
              />
            </div>

            <div className="my-4">
              <label className="text-lg mr-4 text-black">Rate your experience..</label>
              <StarRating value={Rating} onChange={setRating} />
            </div>

            <div className="my-1">
              <label className="text-lg mr-4 text-black">Leave Your Feedback Here...</label>
              <input
                type="text"
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
                className="border-2 border-gray-500 px-4 py-6 w-full rounded"
              />
            </div>

            

            <button
              className="p-2 bg-yellow-500 m-4 rounded-xl relative bottom-1 right-1"
              style={{ width: "120px", height: "40px" }}
              onClick={handleSaveFeedback}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFeedback;
