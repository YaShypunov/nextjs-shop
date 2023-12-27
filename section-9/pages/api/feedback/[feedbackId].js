import { buildFeedbackPath, extractFeedback } from ".";

const handler = (req, res) => {
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  const selectedFeedback = data.find((feedback) => feedback.id === feedbackId);

  if(selectedFeedback) {
    res.status(200).json({ feedback: selectedFeedback });
    return
  }

  res.status(404).json({ message: 'Feedback item not found!' });
};

export default handler;
