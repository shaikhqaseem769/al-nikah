import mongoose from "mongoose";
import chai from "chai";
import User from "../models/user";

const expect = chai.expect;

describe("User Model Test", () => {
  // Connect to the database before running tests
  before(async () => {
    await mongoose.connect("mongodb://localhost:27017/testdb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  // Clean up the database after each test
  beforeEach(async () => {
    await User.deleteMany({});
  });

  // Close the database connection after all tests
  after(async () => {
    await mongoose.connection.close();
  });

  it("should create and save a user successfully", async () => {
    const userData = { name: "John Doe", email: "john@example.com" };
    const user = new User(userData);
    const savedUser = await user.save();

    expect(savedUser._id).to.exist;
    expect(savedUser.name).to.equal("John Doe");
    expect(savedUser.email).to.equal("john@example.com");
  });

  it("should fetch a user successfully", async () => {
    const userData = { name: "Jane Doe", email: "jane@example.com" };
    const user = new User(userData);
    await user.save();

    const fetchedUser = await User.findOne({ email: "jane@example.com" });

    expect(fetchedUser).to.exist;
    expect(fetchedUser.name).to.equal("Jane Doe");
    expect(fetchedUser.email).to.equal("jane@example.com");
  });
});
