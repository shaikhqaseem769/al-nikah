import pkg from "kafkajs";
const { Kafka } = pkg; // Correctly destructure `Kafka` from `kafkajs`

class KafkaConfig {
  constructor() {
    this.kafka = new Kafka({
      clientId: "nodejs-kafka",
      brokers: ["localhost:9092"],
      connectionTimeout: 1000, // Increase timeout
      retry: {
        retries: 1, // Increase number of retries
      },
    });
    this.producer = this.kafka.producer();
    this.consumer = this.kafka.consumer({ groupId: "test-group" });
  }

  async produce(topic, messages) {
    try {
      await this.producer.connect();
      await this.producer.send({
        topic,
        messages,
      });
    } catch (err) {
      console.log(err);
    } finally {
      await this.producer.disconnect();
    }
  }

  async consume(topic, callback) {
    try {
      await this.consumer.connect();
      await this.consumer.subscribe({
        topic: topic,
        fromBeginning: true,
      });

      await this.consumer.run({
        eachMessage: async ({ topic, partion, message }) => {
          const value = message.value.toString();
          callback(value);
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export default KafkaConfig;
