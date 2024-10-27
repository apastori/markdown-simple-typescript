export interface IPattern {
    regex: RegExp,
    replacement: string,
    convert(raw: string): string
};