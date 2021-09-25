// custom typefaces
import "typeface-montserrat"
import "typeface-play"
import "typeface-fira-sans"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import { wrapRootElement as wrap } from './root-wrapper'

export const wrapRootElement = wrap
