export interface IPattern {
    regex: RegExp,
    replacement: string,
    apply(raw: string): string
};