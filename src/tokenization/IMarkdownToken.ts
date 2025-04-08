import { numberHeaders } from "../types/numberHeadersType"
import { BlockTokenType } from "./BlockTokenType"

interface MarkdownToken {
  // Core properties
  id: number
  type: BlockTokenType
  content?: string
  // Position tracking
  line: number
  //level for headings
  level?: number
}

export { MarkdownToken }