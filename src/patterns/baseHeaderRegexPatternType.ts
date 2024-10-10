import { numberHeaders } from "./numberHeadersType";
import { baseHeaderRegexPattern } from "./baseHeaderRegexPattern";

type baseHeader = typeof baseHeaderRegexPattern;

export type baseHeaderRegexPattern = `/^#{${numberHeaders}}\s?([^\n]+)/gm`;