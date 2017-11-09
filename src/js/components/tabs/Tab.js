import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Tab = styled.div`
  display: inline-block;
  padding: 1em 2em;
  cursor: pointer;
  border: ${props => props.active ? '1px solid #CECECE' : 'none'};
  border-top: 2px solid ${props => props.active ? 'red' : 'transparent'};
  border-bottom: 1px solid ${props => props.active ? 'transparent' : '#CECECE'};
  background: #FFF;
  position: relative;
  top: 1px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .1em;
`

export default props => <Tab {...props}>{props.name}</Tab>
