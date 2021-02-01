const Dog = require("../models/Dog")

import * as ResponseUtils from "./response.utils"
import * as SUT from "./handlers"
import { ERROR_MESSAGES } from "./constants"

describe("Handlers", () => {
  describe("getDogs", () => {
    it("should return the dogs as expected", async () => {
      // given ... the database returns the dogs as expected
      const dogs = [{ id: 1 }, { id: 2 }]
      const findDogSpy = jest.spyOn(Dog, "find").mockResolvedValue(dogs)

      const mockResult = {
        status: 200,
        body: dogs,
      }
      const okResponseSpy = jest.spyOn(ResponseUtils, "ok").mockReturnValue(mockResult)

      // when ... we get the dogs
      const request = {}
      const response = {}
      const result = await SUT.getDogs(request, response)

      // then ... it should return the response as expected
      expect(findDogSpy).toBeCalled()
      expect(okResponseSpy).toBeCalled()
      expect(result).toMatchObject(mockResult)
    })

    it("should return an Error with status code 500 if an expected error occurs", async () => {
      // given ... the database returns an unexpected error
      const findDogSpy = jest.spyOn(Dog, "find").mockRejectedValue(new Error("UNEXPECTED ERROR"))

      const mockResult = {
        status: 500,
        body: ERROR_MESSAGES.unknown,
      }
      const unknownResponseSpy = jest.spyOn(ResponseUtils, "unknown").mockReturnValue(mockResult)

      // when ... we get the dogs
      const request = {}
      const response = {}
      const result = await SUT.getDogs(request, response)

      // then ... it should return the response as expected
      expect(findDogSpy).toBeCalled()
      expect(unknownResponseSpy).toBeCalled()
      expect(result).toMatchObject(mockResult)
    })
  })
})
