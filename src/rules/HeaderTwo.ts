import { Pattern } from "../Pattern";

export const HeaderOne = new Pattern(
    /^#{2}\s?([^\n]+)/gm, 
    '<h2>{}</h2>'
);