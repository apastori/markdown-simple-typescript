import { BlockTokenType } from "../tokenization/BlockTokenType"

export interface IRuleTokenizer {
    getName(): BlockTokenType
    getOrderId(): number
    getRegex(): RegExp
    getLevel(): number
}