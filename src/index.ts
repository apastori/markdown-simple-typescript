import { MarkdownTokenizer } from "./tokenization/MarkdownTokenizer"
import { UnixLinuxNewMacEOL } from "./EOLConfigs"

console.log("MarkdownTokenizer")

const text: string = "#          Header1\n## Titulo2"

console.log(new MarkdownTokenizer({ input: text, EOLConfig: UnixLinuxNewMacEOL }))