import React, { PureComponent } from 'react'
import styled from 'styled-components'

const TabContent = styled.div`
  border-top: 1px solid #CECECE;
  padding: 1em;
  font-family: serif;
  line-height: 1.3;
  font-size: 1.5em;
  display: ${props => props.active ? 'block' : 'none'}
`

export default props => <TabContent {...props}>{props.content}</TabContent>
