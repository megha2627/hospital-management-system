import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  doctorName: {
    type: String,
    required: true
  },
  feedback: {
    type: String,
    required: true
  }
});

const Feedback = mongoose.model("Feedback", feedbackSchema); 
export default Feedback;
