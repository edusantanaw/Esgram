import { Request, Response } from "express";
import { user, client, follows, room } from "../../prisma/client";
import bcrypt from "bcrypt";
import { Token } from "../../provider/accessToken";

interface User {
  name: string;
  email: string;
  actualPassword: string;
  password: string;
  confirmPassword: string;
  bio: string;
}

const tokenPorvider = new Token();

export class UserController {

  async addFollow(req: Request, res: Response) {
    // follower user
    const id = req.params.id;
    // user token
    const userByToken = await tokenPorvider.getUserByToken(req);

    try {
      if (!id) throw "Id invalid!";
      if (!userByToken) throw "Token is missing!";

      const findUser = await user.findFirst({
        where: {
          id: id,
        },
      });
      if (!findUser) throw "User not found";
      if (!findUser.name) throw "User not found!";
      

      await follows.create({
        data: {
          followerId: findUser.id,
          followingId: userByToken.id,
        },
      });
      const verifyRoom =  await room.findFirst({
        where: {
          userRecId: userByToken.id
        }
      })
      if(!verifyRoom){
        await room.create({
          data: {
            userId: userByToken.id,
            userRecId: findUser.id
          }
        })
      }
      res.status(200).json("Following with success!");
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }

  async getAllUsers(req: Request, res: Response) {
    const users = await user.findMany();
    if (users.length === 0)
      return res.status(400).json({ error: "User not found!" });
    res.status(200).send(users);
  }
}
