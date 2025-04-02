import { numberHeadersStr } from "../../types/numberHeadersStrType"

export type headerTable = {
    [K in numberHeadersStr]: string;
}