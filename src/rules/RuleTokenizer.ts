import { BlockTokenType } from "../tokenization/BlockTokenType";
import { IRuleTokenizer } from "./IRuleTokenizer"

export class RuleTokenizer implements IRuleTokenizer {
    private readonly name: BlockTokenType
    private readonly orderId: number
    private readonly regex: RegExp[]
    private readonly level?: number | undefined
    constructor({ name, orderId, regex, level }: {
      name: BlockTokenType
      orderId: number
      regex: RegExp[]
      level?: number | undefined
    }) {
      this.name = name
      this.orderId = orderId
      this.regex = regex
      this.level = level
    }
    getName(): BlockTokenType {
      return this.name
    }
    getOrderId(): number {
      return this.orderId
    }
    getRegex(): RegExp[] {
      return this.regex
    }
    getLevel(): number {
      return (this.level ? this.level : 0)
    }
}
   