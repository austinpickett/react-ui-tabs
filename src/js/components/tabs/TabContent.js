import React, { PureComponent } from 'react'
import styled from 'styled-components'

const StyledTabContent = styled.div`
  border-top: 1px solid #CECECE;
  padding: 1em;
  font-family: serif;
  line-height: 1.3;
  font-size: 1.5em
`

export default class TabContent extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <StyledTabContent className="tab-content"
           style={{
             display: this.props.active ? 'block' : 'none'
           }}>
           {this.props.content}
      </StyledTabContent>
    )
  }
}
