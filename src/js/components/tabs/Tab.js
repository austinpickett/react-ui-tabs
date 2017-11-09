import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Tab = styled.div`
  display: inline-block;
  padding: 1em 2em;
  cursor: pointer;
  border-top: 2px solid transparent;
  background: #FFF;
  position: relative;
  top: 2px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .1em;

  &.active {
    border: 1px solid #CECECE;
    border-top: 2px solid red;
    border-bottom: 2px solid #FFF;
  }
`

export default props => <Tab {...props}>{props.name}</Tab>
