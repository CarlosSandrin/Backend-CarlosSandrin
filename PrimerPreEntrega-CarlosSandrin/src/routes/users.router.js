import express from "express";
import { UsersModel } from "../Models/users.model";

export const usersRouter = express.Router();
usersRouter.get("/", async (req, res) => {
  try {
    const users = await UsersModel.find({});
    return res.status(200).json({
      status: "success",
      msg: "listado de usuarios",
      data: users,
    });
  } catch (e) {
    console.log(e);
    return (
      res.status(500),
      json({
        status: "error",
        msg: "algo salio mal :(",
        data: {},
      })
    );
  }
});
