import { EOLConfig } from "./types/EOLConfigType"

const UnixLinuxNewMacEOL: EOLConfig = {
    name: "Unix/Linux/New Mac",
    description: "EOL character for the Unix, Linux and Mac (from Mac OS X (2001) onwards) Operating Systems",
    pattern: "\n"
}

const WindowsEOL: EOLConfig = {
    name: "Windows",
    description: "EOL character for the Windows Operating System",
    pattern: "\r\n"
}

const OldMacEOL: EOLConfig = {
    name: "Old Mac",
    description: "EOL character for the Mac (before Mac OS X (2001)) Operating System",
    pattern: "\r"
}

export {
    UnixLinuxNewMacEOL,
    WindowsEOL,
    OldMacEOL
}