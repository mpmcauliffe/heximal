import React, { useContext, } from 'react'
import StylesContext from '../../context/stylesContext'
import { MDXRenderer } from 'gatsby-plugin-mdx'


export const Titlebar = ({ title, date, caption, body, }) => {
    const stylesContext = useContext(StylesContext)

    const { ArticleTitle, ArticleDate, Caption, } = stylesContext


    return (
        <div>
        {/** */}
            <ArticleTitle>{title}</ArticleTitle>
            <ArticleDate>{date}</ArticleDate>
            <Caption>{caption}</Caption>
            <MDXRenderer>{body}</MDXRenderer>
        </div>
    )
}


//export default Titlebar
