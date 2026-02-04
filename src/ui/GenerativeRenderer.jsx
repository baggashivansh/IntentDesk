import { Tambo } from "@tambo-ai/react"
import { components } from "./ComponentRegistry"

export function GenerativeRenderer({ prompt }) {
  if (!prompt) return null

  return (
    <Tambo
      prompt={prompt}
      components={components}
    />
  )
}
