import { IPattern } from "../IPattern";
import { Pattern } from "../Pattern";

const headers: IPattern[]  = []

for (let i = 1; i <= 6; i++) {
    const newPatternHeader = new Pattern(/^#{2}\s?([^\n]+)/gm, 
    '<h2>{}</h2>')
}

export { headers }