"use server"

import { CreatedReachOutParams } from "../../../types"
import { connectedToDB } from "../database"
import  User  from "../database/models/user.model"
import { handleError } from "../utils"
import { Reachout} from "../database/models/reachOut.model"

export const createReachOut =  async ({reachout, userId, path}:CreatedReachOutParams) => {
      try{
          await connectedToDB();

          const host = await User.findById(userId);
          if(!host) {
            throw new Error("Host not found")
          }
          const newReachOut = await Reachout.create({
               ...reachout, category:reachout.categoryId, host:userId
          })

          return JSON.parse(JSON.stringify(newReachOut));
      } catch (error) {
        handleError(error)
      }
}