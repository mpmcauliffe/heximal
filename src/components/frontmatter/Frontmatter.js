import * as React from 'react'
import { useContext, } from 'react'
import StylesContext from '../../context/stylesContext'


export const Frontmatter = ({ title, date, readTime, caption, body, }) => {
    const stylesContext = useContext(StylesContext)

    const { ArticleTitle, AuxInfo, Caption, ProfilePic, } = stylesContext


    return (
        <div>
        {/** */}
            
            <ArticleTitle>{title}</ArticleTitle>
            <AuxInfo style={{  }}>{date}</AuxInfo>
            <AuxInfo style={{ marginBottom: '10rem', }}>{readTime}</AuxInfo>
            <div style={{ display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center', 
                marginBottom: '1rem', }}>
                <ProfilePic
                    alt='Michael P.'
                    src={require('./orange-bright.png').default} />
                <AuxInfo>Michael P. McAuliffe</AuxInfo>                
            </div>
            
            <Caption>{caption}</Caption>
        </div>
    )
}


//export default Titlebar
