import { response } from "express"

import { ERROR_MESSAGES } from "./constants"

// ------------------------------------
// HTTP Responses
// ------------------------------------

export const ok = (response, data) => response.status(200).json(data)
export const created = (response, data) => response.status(201).json(data)
export const updated = (response, data) => ok(response, data)
export const accepted = (data) => response.status(202).json(data)
export const noContent = () => response.status(204)
export const deleted = (response) => noContent(response)
export const notFound = (response) => response.status(404).json(ERROR_MESSAGES.notFound)
export const invalid = (response, data = ERROR_MESSAGES.invalid) => response.status(400).json(data)
export const unknown = (response) => response.status(400).json(ERROR_MESSAGES.unknown)
