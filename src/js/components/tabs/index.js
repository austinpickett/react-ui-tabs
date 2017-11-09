import React, { Component } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

import Tab from './Tab'
import TabContent from './TabContent'

const TabContainer = styled.div`
  font-family: sans-serif;
  width: 75%;
`
const StyledTabs = styled.div`
  position: relative;
  width: 100%;
`

const StyledTabContents = styled.div`
  width: 100%;
`
const Title = styled.h1`
  font-family: serif;
  letter-spacing: .01em;
`

export default class Tabs extends Component {
	constructor(props) {
    super(props)

    this.state = {
      activeIndex: 0
    }

    this._handleTabClick = this._handleTabClick.bind(this)
  }

  _handleTabClick(e) {
    this.setState({
      activeIndex: [...e.target.parentElement.children].indexOf(e.target)
    })
  }

  render() {
    const tabs = [
      { name: 'Tab 1', content: '“A number of years ago, when I was a freshly-appointed instructor, I met, for the first time, a certain eminent historian of science. At the time I could only regard him with tolerant condescension.\
      \
      I was sorry of the man who, it seemed to me, was forced to hover about the edges of science. He was compelled to shiver endlessly in the outskirts, getting only feeble warmth from the distant sun of science- in-progress; while I, just beginning my research, was bathed in the heady liquid heat up at the very center of the glow.\
      \
      In a lifetime of being wrong at many a point, I was never more wrong. It was I, not he, who was wandering in the periphery. It was he, not I, who lived in the blaze.\
      \
      I had fallen victim to the fallacy of the \'growing edge;\' the belief that only the very frontier of scientific advance counted; that everything that had been left behind by that advance was faded and dead.\
      \
      But is that true? Because a tree in spring buds and comes greenly into leaf, are those leaves therefore the tree? If the newborn twigs and their leaves were all that existed, they would form a vague halo of green suspended in mid-air, but surely that is not the tree. The leaves, by themselves, are no more than trivial fluttering decoration. It is the trunk and limbs that give the tree its grandeur and the leaves themselves their meaning.\
      \
      There is not a discovery in science, however revolutionary, however sparkling with insight, that does not arise out of what went before. \'If I have seen further than other men,\' said Isaac Newton, \'it is because I have stood on the shoulders of giants.\'”' },
      { name: 'Tab 2', content: '\
      "The man who refuses to judge, who neither agrees nor disagrees, who declares that there are no absolutes and believes that he escapes responsibility, is the man responsible for all the blood that is now spilled in the world. Reality is an absolute, existence is an absolute, a speck of dust is an absolute and so is a human life. Whether you live or die is an absolute. Whether you have a piece of bread or not, is an absolute. Whether you eat your bread or see it vanish into a looter\'s stomach, is an absolute.\
      \
      There are two sides to every issue: one side is right and the other is wrong, but the middle is always evil. The man who is wrong still retains some respect for truth, if only by accepting the responsibility of choice. But the man in the middle is the knave who blanks out the truth in order to pretend that no choice or values exist, who is willing to sit out the course of any battle, willing to cash in on the blood of the innocent or to crawl on his belly to the guilty, who dispenses justice by condemning both the robber and the robbed to jail, who solves conflicts by ordering the thinker and the fool to meet each other halfway. In any compromise between food and poison, it is only death that can win. In any compromise between good and evil, it is only evil that can profit. In that transfusion of blood which drains the good to feed the evil, the compromise is the transmitting rubber tube."' },
    ]

    return (
      <TabContainer>
        <Title>Tabs in ReactJS</Title>
        <StyledTabs className='tabs'>
          {tabs.map((tab, index) =>
            <Tab key={ tab.name }
                 name={ tab.name }
                 onClick={ this._handleTabClick }
                 active={ this.state.activeIndex == index } />
          )}
        </StyledTabs>

        <div className="contents">
          {tabs.map((tab, index) =>
            <TabContent key={ tab.name }
                         content={ tab.content }
                         active={ this.state.activeIndex == index } />
          )}
        </div>
      </TabContainer>
    )
  }
}

Array.from(document.getElementsByClassName('tabs-container')).forEach(x => render(<Tabs />, x))
