"use server"

import { CreatedReachOutParams,UpdateReachOutParams, DeleteReachOutParams, GetAllReachOutsParams,GetReachOutsByUserParams,GetRelatedReachOutsByCategoryParams,} from "../../../types"
import { connectedToDB } from "../database"
import { revalidatePath } from 'next/cache'
import Category from '@/lib/database/models/category.model'
import  User  from "../database/models/user.model"
import { handleError } from "../utils"
import { Reachout} from "../database/models/reachOut.model"

const getCategoryByName = async (name: string) => {
  return Category.findOne({ name: { $regex: name, $options: 'i' } })
}

const populateReachOut = (query: any) => {
  return query
    .populate({ path: 'host', model: User, select: '_id firstName lastName' })
    .populate({ path: 'category', model: Category, select: '_id name' })
}
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


// CREATE


// GET ONE ReachOut BY ID
export async function getReachOutById(id: string) {
  try {
    await connectedToDB();

    const reachout = await populateReachOut(Reachout.findById(id))

    if (!reachout) throw new Error('ReachOut not found')

    return JSON.parse(JSON.stringify(reachout))
  } catch (error) {
    handleError(error)
  }
}

// UPDATE
export async function updateReachOut({ userId, reachout, path }: UpdateReachOutParams) {
  try {
    await connectedToDB();

    const reachoutToUpdate = await Reachout.findById(reachout._id)
    if (!reachoutToUpdate || reachoutToUpdate.host.toHexString() !== userId) {
      throw new Error('Unauthorized or reachout not found')
    }

    const updatedReachOut = await Reachout.findByIdAndUpdate(
      reachout._id,
      { ...reachout, category: reachout.categoryId },
      { new: true }
    )
    revalidatePath(path)

    return JSON.parse(JSON.stringify(updatedReachOut))
  } catch (error) {
    handleError(error)
  }
}


// DELETE
export async function deleteReachOut({ reachoutId, path }: DeleteReachOutParams) {
  try {
    await connectedToDB();

    const deletedReachOut = await Reachout.findByIdAndDelete(reachoutId)
    if (deletedReachOut) revalidatePath(path)
  } catch (error) {
    handleError(error)
  }
}

// GET ALL ReachOut
export async function getAllReachOuts({ query, limit = 6, page, category }: GetAllReachOutsParams) {
  try {
    await connectedToDB();

    const titleCondition = query ? { title: { $regex: query, $options: 'i' } } : {}
    const categoryCondition = category ? await getCategoryByName(category) : null
    const conditions = {
      $and: [titleCondition, categoryCondition ? { category: categoryCondition._id } : {}],
    }

    const skipAmount = (Number(page) - 1) * limit
    const reachoutsQuery = Reachout.find(conditions)
      .sort({ createdAt: 'desc' })
      .skip(skipAmount)
      .limit(limit)

    const reachouts = await populateReachOut(reachoutsQuery)
    const reachoutsCount = await Reachout.countDocuments(conditions)

    return {
      data: JSON.parse(JSON.stringify(reachouts)),
      totalPages: Math.ceil(reachoutsCount / limit),
    }
  } catch (error) {
    handleError(error)
  }
}

// GET ReachOut BY ORGANIZER
export async function getReachOutsByUser({ userId, limit = 6, page }: GetReachOutsByUserParams) {
  try {
    await connectedToDB();

    const conditions = { organizer: userId }
    const skipAmount = (page - 1) * limit

    const reachoutsQuery = Reachout.find(conditions)
      .sort({ createdAt: 'desc' })
      .skip(skipAmount)
      .limit(limit)

    const events = await populateReachOut(reachoutsQuery)
    const eventsCount = await Reachout.countDocuments(conditions)

    return { data: JSON.parse(JSON.stringify(events)), totalPages: Math.ceil(eventsCount / limit) }
  } catch (error) {
    handleError(error)
  }
}

// GET RELATED ReachOut: EVENTS WITH SAME CATEGORY
export async function getRelatedReachOutsByCategory({
  categoryId,
  reachoutId,
  limit = 3,
  page = 1,
}: GetRelatedReachOutsByCategoryParams) {
  try {
    await connectedToDB();

    const skipAmount = (Number(page) - 1) * limit
    const conditions = { $and: [{ category: categoryId }, { _id: { $ne: reachoutId } }] }

    const reachoutsQuery = Reachout.find(conditions)
      .sort({ createdAt: 'desc' })
      .skip(skipAmount)
      .limit(limit)

    const events = await populateReachOut(reachoutsQuery)
    const eventsCount = await Reachout.countDocuments(conditions)

    return { data: JSON.parse(JSON.stringify(events)), totalPages: Math.ceil(eventsCount / limit) }
  } catch (error) {
    handleError(error)
  }
}
