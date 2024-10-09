import { Pattern } from "../Pattern";

export const HeaderOne = new Pattern(
    /^#{1}\s([^\n]+)/gm, 
    '<h1>{}</h1>'
);