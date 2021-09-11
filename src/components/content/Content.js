import React, { useContext, } from 'react'
import StylesContext from '../../context/stylesContext'
import { MDXRenderer } from 'gatsby-plugin-mdx'


export const Content = ({ title, date, caption, body, }) => {
    const stylesContext = useContext(StylesContext)

    const { ArticleTitle, AuxInfo, Caption, ProfilePic, } = stylesContext


    return (
        <div style={{ marginTop: '25rem' }}>
        {/** */}
            
            <ArticleTitle>{title}</ArticleTitle>
            <AuxInfo style={{ marginBottom: '10rem', }}>{date}</AuxInfo>
            <div style={{ display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center', 
                marginBottom: '1rem', }}>
                <ProfilePic
                    alt='Michael P.'
                    src={require('./orange-bright.png')} />
                <AuxInfo>Michael P. McAuliffe</AuxInfo>                
            </div>
            
            <Caption>{caption}</Caption>
            
            <MDXRenderer>{body}</MDXRenderer>
        </div>
    )
}


//export default Titlebar
