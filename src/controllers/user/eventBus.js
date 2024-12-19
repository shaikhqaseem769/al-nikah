// eventBus.js (Shared EventEmitter)
import { EventEmitter } from "events";

class MyEmitter extends EventEmitter {}
const eventBus = new MyEmitter();

export default eventBus;
