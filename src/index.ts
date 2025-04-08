import { MarkdownTokenizer } from "./tokenization/MarkdownTokenizer"
import { UnixLinuxNewMacEOL } from "./EOLConfigs"

console.log("MarkdownTokenizer")

const text: string = `#\t\t\tHeader1\t\t\t       
## Titulo2
   *\t\t*\t\t********
`

const text1: string = `   #\t\t\tHeaderespaciosadelante\t\t\t       
## Titulo2
 **\t\t*
`

const text2: string = `#         
`

console.log(new MarkdownTokenizer({ input: text, EOLConfig: UnixLinuxNewMacEOL }))

console.log(new MarkdownTokenizer({ input: text2, EOLConfig: UnixLinuxNewMacEOL }))