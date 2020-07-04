import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Highlight, { defaultProps, } from 'prism-react-renderer'
import StylesProvider from './src/context/StylesProvider'
import Code from './src/components/code/Code'
import theme from 'prism-react-renderer/themes/nightOwl'


const components = {
    // h2: ({ children }) => (
    //     <h2 style={{ color: 'rebeccapurple' }}>{children}</h2>
    //   ),
    //   'p.inlineCode': props => (
    //     <code {...props} style={{ backgroundColor: 'lightgrey' }}></code>
    //   ),
    pre: ({ children: { props } }) => {
        if (props.mdxType === 'code') {
            return (
                <Code
                    codeString={props.children.trim()}
                    language={props.className && props.className.replace('language-', '')}
                    {...props} />
            )
        }
    },
}
  

export const wrapRootElement = ({ element }) => (
    <StylesProvider>
        <MDXProvider components={components}>{element}</MDXProvider>
    </StylesProvider>
)
