import * as React from 'react'
import styled from 'styled-components'
import { Layout, Seo, } from '../components'


const CenterContainer = styled.div`
    height: 39rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 { font-size: 15rem; margin: 0 0 2rem 0; }
`

const NotFoundPage = () => (
  <Layout>
    <Seo title='404: Not found' />
    <CenterContainer>
        <h1>404</h1>
        <p>. . . not found . . .</p>
        {/* <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
    </CenterContainer>
    
  </Layout>
)

export default NotFoundPage
