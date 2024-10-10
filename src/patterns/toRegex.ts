export function toRegex(pattern: string, flags?: string): RegExp {
    try {
        return new RegExp(pattern, flags);
    } catch (e) {
        throw new Error(`Invalid regex pattern: ${pattern}`);
    }
};