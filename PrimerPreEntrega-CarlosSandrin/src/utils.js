import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { connect } from "mongoose";
export async function connectMongo() {
  try {
    await connect(
      "mongodb+srv://carlossandrin23:KSQEZoLvrl0Ws8GN@cluster0.bsdtxr5.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Conectado a Mongoose!");
  } catch (e) {
    console.log(e);
    throw "Error al conectarse a Mongoose";
  }
}
export default __dirname;
