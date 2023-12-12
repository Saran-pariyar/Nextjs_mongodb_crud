import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

//checks if model named Topic already exists or not in mongoose application
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;