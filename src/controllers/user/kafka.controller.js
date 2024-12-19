import KafkaConfig from "./../../config.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
const kafkaConfig = new KafkaConfig();

// /opt/homebrew/opt/kafka/bin/zookeeper-server-start /opt/homebrew/etc/kafka/zookeeper.properties
// /opt/homebrew/opt/kafka/bin/kafka-server-start /opt/homebrew/etc/kafka/server.properties

const sendMessageTofka = asyncHandler(async (req, res) => {
  const { message, name } = req.body;
  const kafkaConfig = new KafkaConfig();
  const messages = [{ name: name, value: message }];

  kafkaConfig.produce("my-topic", messages);

  return res
    .status(201)
    .json(new ApiResponse(201, {}, "Message succefully send!"));
});

// Connect the producer when the application starts
(async () => {
  try {
    // Wait for the Kafka producer to connect
    await kafkaConfig.connectProducer(); // This should work now
    console.log("Kafka Producer connected successfully.");
  } catch (error) {
    console.error("Error connecting Kafka Producer:", error);
  }
})();

// Send user post to Kafka
const sendUserPost = asyncHandler(async (req, res) => {
  const { userId, postId } = req.body; // Get userId and postId from req.body
  await kafkaConfig.produceMessage("user-post-topic", { userId, postId });
  res.status(200).json({ message: "Message sent successfully!" });
});

const getCommentsForPosts = (userId, postId) => {
  // In a real application, you'd query a database.
  return [
    { commentId: 1, postId, userId, content: "This is a comment." },
    { commentId: 2, postId, userId, content: "This is another comment." },
  ];
};

const getCommentsForPost = asyncHandler(async (req, res) => {
  const { userId, postId } = req.body; // Extract userId and postId from request body
  const comments = getCommentsForPosts(userId, postId); // Fetch comments related to post
  res.status(200).json({ comments });
});

export { sendMessageTofka, sendUserPost, getCommentsForPost };
