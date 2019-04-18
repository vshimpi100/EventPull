import React, { Component } from 'react'
import { Menu, Icon, Grid } from 'semantic-ui-react'
import './style.css';

export default class SortExplore extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu id="explore-sort" text>
        <Grid>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column width={8}>
              <Icon
                name='angle double right'
                size='small'
              />
            </Grid.Column>
            <Grid.Column width={2} textAlign='center'>
              <Menu.Item className='sort-header'>Sort:</Menu.Item>
            </Grid.Column>
            <Grid.Column width={4} textAlign='center'>
              <Icon
                name='star'
                className="sort-icon"
                size='small'
                active={activeItem === 'mostComments'}
                onClick={this.handleItemClick}
              />
              <Icon
                name='calendar alternate outline'
                className="sort-icon"
                size='small'
                active={activeItem === 'mostComments'}
                onClick={this.handleItemClick}
              />
              <Icon
                name='map marker alternate'
                className="sort-icon"
                size='small'
                active={activeItem === 'mostComments'}
                onClick={this.handleItemClick}
              />
              <Icon
                name='dollar sign'
                className="sort-icon"
                size='small'
                active={activeItem === 'mostComments'}
                onClick={this.handleItemClick}
              />
              <Icon
                name='comment'
                className="sort-icon"
                size='small'
                active={activeItem === 'mostComments'}
                onClick={this.handleItemClick}
              />
            </Grid.Column>
            <Grid.Column width={2} textAlign='center'>
              <Icon
                name='arrow alternate circle down outline'
                size='small'
                active={activeItem === 'mostComments'}
                onClick={this.handleItemClick}
              />
              <Icon
                name='arrow alternate circle up outline'
                size='small'
                active={activeItem === 'mostComments'}
                onClick={this.handleItemClick}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Menu>
    )
  }
}