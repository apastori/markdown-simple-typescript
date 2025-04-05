import { numberHeaders } from "../types/numberHeadersType"
import { BlockTokenType } from "./BlockTokenType"

interface MarkdownToken {
  // Core properties
  type: BlockTokenType
  content?: string
  // Position tracking
  line: number
}

export { MarkdownToken }