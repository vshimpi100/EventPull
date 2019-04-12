import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import './style.css';

export default class SortExplore extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu id="explore-sort" text>
        <Menu.Item>
          <Icon
            name='angle double right'
          />
        </Menu.Item>
        <Menu.Item header>Sort:</Menu.Item>
        <Menu.Menu>
          <Menu.Item>
            <Icon
              name='star'
              active={activeItem === 'mostComments'}
              onClick={this.handleItemClick}
            />
          </Menu.Item>
          <Menu.Item>
            <Icon
              name='calendar alternate outline'
              active={activeItem === 'mostComments'}
              onClick={this.handleItemClick}
            />
          </Menu.Item>
          <Menu.Item>
            <Icon
              name='map marker alternate'
              active={activeItem === 'mostComments'}
              onClick={this.handleItemClick}
            />
          </Menu.Item>
          <Menu.Item>
            <Icon
              name='dollar sign'
              active={activeItem === 'mostComments'}
              onClick={this.handleItemClick}
            />
          </Menu.Item>
          <Menu.Item>
            <Icon
              name='comment'
              active={activeItem === 'mostComments'}
              onClick={this.handleItemClick}
            />
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu>
          <Menu.Item>
            <Icon
              name='arrow alternate circle down outline'
              active={activeItem === 'mostComments'}
              onClick={this.handleItemClick}
            />
          </Menu.Item>
          <Menu.Item>
            <Icon
              name='arrow alternate circle up outline'
              active={activeItem === 'mostComments'}
              onClick={this.handleItemClick}
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}