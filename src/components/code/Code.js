import * as React from 'react'
import { useEffect, useContext, } from 'react'
import StylesProvider from '../../context/stylesContext'
import styled from 'styled-components'
import Highlight, { defaultProps } from 'prism-react-renderer'
import darkTheme from 'prism-react-renderer/themes/palenight'
import lightTheme from 'prism-react-renderer/themes/github'
import { copyToClipboard } from '../../utils/copy-to-clipboard'


export const Pre = styled.pre`
    text-align: left;
    margin: 1rem 0;
    padding: 0.5rem;
    overflow-x: auto;
    border-radius: 3px;
    font-family: 'Courier New', Courier, monospace;
    position: relative;

    > div {
        margin-bottom: .5rem;

        span:first-of-type { margin-right: 1rem; }
    }
    & .token-line {
        /* line-height: 1.3rem;
        height: 1.3rem; */
    }
    .copy-button {
        cursor: pointer;
    }

    @media (min-width: 1025px) {
        > div { margin-bottom: .75rem; }
    }
    @media (min-width: 1601px) {
        > div { margin-bottom: 1rem; }
    }
`

export const LineNo = styled.span`
    display: inline-block;
    width: 2rem;
    user-select: none;
    opacity: 0.3;
`

const CopyCode = styled.button`
    position: absolute;
    right: 0.25rem;
    border: 0;
    border-radius: 3px;
    margin: 0.25em;
    opacity: 0.3;

    &:hover { opacity: 1; }
`


const Code = ({ codeString, language }) => {
    const stylesProvider     = useContext(StylesProvider)
    const { isDarkTheme, }   = stylesProvider

    const handleClick = () => { copyToClipboard(codeString) }

    useEffect(() => { }, [isDarkTheme])


    return (
        <Highlight
            {...defaultProps}
            code={codeString}
            language={language}
            theme={isDarkTheme ? darkTheme : lightTheme} >

            {({
                className,
                style,
                tokens,
                getLineProps,
                getTokenProps,
            }) => (
                <Pre className={className} style={style}>
                    <CopyCode 
                        onClick={handleClick}
                        className='.copy-button'
                    >Copy</CopyCode>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            <LineNo>{i + 1}</LineNo>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </Pre>
            )}
        </Highlight>
    )
}

export default Code

// import Highlight, { defaultProps } from 'prism-react-renderer';
// import theme from 'prism-react-renderer/themes/nightOwl';
// import React from 'react';
// import {
//   LiveEditor,
//   LiveError,
//   LivePreview,
//   LiveProvider,
// } from 'react-live';
// import styled from 'styled-components';
// import { copyToClipboard } from '../utils/copy-to-clipboard';

// const Pre = styled.pre`
//   position: relative;
//   text-align: left;
//   margin: 1em 0;
//   padding: 0.5em;
//   overflow-x: auto;
//   border-radius: 3px;

//   & .token-line {
//     line-height: 1.3em;
//     height: 1.3em;
//   }
//   font-family: 'Courier New', Courier, monospace;
// `;

// const LineNo = styled.span`
//   display: inline-block;
//   width: 2rem;
//   user-select: none;
//   opacity: 0.3;
// `;

// const CopyCode = styled.button`
//   position: absolute;
//   right: 0.25rem;
//   border: 0;
//   border-radius: 3px;
//   margin: 0.25em;
//   opacity: 0.3;
//   &:hover {
//     opacity: 1;
//   }
// `;

// const Code = ({ codeString, language, ...props }) => {
//   if (props['react-live']) {
//     return (
//       <LiveProvider code={codeString} noInline={true} theme={theme}>
//         <LiveEditor />
//         <LiveError />
//         <LivePreview />
//       </LiveProvider>
//     );
//   }

//   const handleClick = () => {
//     copyToClipboard(codeString);
//   };

//   return (
//     <Highlight
//       {...defaultProps}
//       code={codeString}
//       language={language}
//       theme={theme}>
//       {({
//         className,
//         style,
//         tokens,
//         getLineProps,
//         getTokenProps,
//       }) => (
//         <Pre className={className} style={style}>
//           <CopyCode onClick={handleClick}>Copy</CopyCode>
//           {tokens.map((line, i) => (
//             <div {...getLineProps({ line, key: i })}>
//               <LineNo>{i + 1}</LineNo>
//               {line.map((token, key) => (
//                 <span {...getTokenProps({ token, key })} />
//               ))}
//             </div>
//           ))}
//         </Pre>
//       )}
//     </Highlight>
//   );
// };


// export default Code