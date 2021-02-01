const Dog = require("../models/Dog")
import { validationResult } from "express-validator"

import { deleted, invalid, notFound, ok, unknown } from "./response.utils"

export const getDogs = async (request, response) => {
  try {
    const dogs = await Dog.find()
    return ok(response, dogs)
  } catch (error) {
    console.log(error)
    return unknown(response)
  }
}

export const getDogById = async (request, response) => {
  try {
    const dog = await Dog.findOne({ _id: request.params.id })

    if (!dog) {
      return notFound(response)
    }
    return ok(response, dog)
  } catch (error) {
    console.log(error)
    return unknown(response)
  }
}

export const deleteDogById = async (request, response) => {
  try {
    await Dog.deleteOne({ _id: request.params.id })
    return deleted(response)
  } catch (error) {
    console.log(error)
    return notFound(response)
  }
}

export const saveDog = async (request, response) => {
  try {
    const errors = validationResult(request)

    if (!errors.isEmpty()) {
      return invalid(response, { errors: errors.array() })
    }

    const dog = new Dog({
      name: request.body.name,
      breed: request.body.breed,
      age: request.body.age,
      characteristics: request.body.characteristics,
    })

    await dog.save()
    return ok(response, dog)
  } catch (error) {
    console.log(error)
    return unknown(response)
  }
}

export const updateDog = async (request, response) => {
  const errors = validationResult(request)

  // return errors if validation check not correct
  if (!errors.isEmpty()) {
    return invalid(response, { errors: errors.array() })
  }

  //go ahead and update dog
  try {
    const dog = await Dog.findOne({ _id: request.params.id }) //find the dog and update the fields

    if (request.body.name) {
      dog.name = request.body.name
    }

    if (request.body.breed) {
      dog.content = request.body.breed
    }
    if (request.body.age) {
      dog.age = request.body.age
    }

    if (request.body.characteristics) {
      dog.characteristics = request.body.characteristics
    }

    await dog.save()
    return ok(response, dog) //save the created dog instance
  } catch (error) {
    console.log(error)
    return notFound(response)
  }
}
