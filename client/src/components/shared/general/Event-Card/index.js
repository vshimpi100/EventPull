import React from 'react';
import { Card, Icon, Image, Grid, Segment } from 'semantic-ui-react';
import './style.css';

function EventCard(props) {
    return (
        <Card fluid>
            <Card.Content>
                <Grid>
                    <Grid.Row className='padding'>
                        <Grid.Column width={1} verticalAlign='middle'>
                            <Grid textAlign='center'>
                                <Grid.Row className='padding'>
                                    <Icon link name='caret up' size='large' />
                                </Grid.Row>
                                <Grid.Row className='padding'>
                                    450
                            </Grid.Row>
                                <Grid.Row className='padding'>
                                    <Icon link name='caret down' size='large' />
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                        <Grid.Column width={2} verticalAlign='middle' textAlign='center'>
                            <Image src='https://via.placeholder.com/150' size='tiny' />
                        </Grid.Column>
                        <Grid.Column width={13} verticalAlign='middle'>
                            <Grid>
                                <Grid.Row className='padding'>
                                    <Grid.Column width={15}>
                                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Description>
                                    </Grid.Column>
                                    <Grid.Column width={1}>
                                        <Icon link name='external alternate' size='large' />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row className='padding' verticalAlign='middle'>
                                    <Grid.Column width={3}>
                                        <Icon className='info-icon' name='calendar alternate outline' size='large' />
                                        <Card.Description className='icon-description'>4/30</Card.Description>
                                    </Grid.Column>
                                    <Grid.Column width={3}>
                                        <Icon className='info-icon' name='map marker alternate' size='large' />
                                        <Card.Description className='icon-description'>4.8 mi</Card.Description>
                                    </Grid.Column>
                                    <Grid.Column width={3}>
                                        <Icon className='info-icon' name='dollar sign' size='large' />
                                        <Card.Description className='icon-description'>$299.99</Card.Description>
                                    </Grid.Column>
                                    <Grid.Column width={3}>
                                        <Icon className='info-icon' name='comment' size='large' />
                                        <Card.Description className='icon-description'>54</Card.Description>
                                    </Grid.Column>
                                    <Grid.Column width={4} textAlign='right'>
                                        <Card.Meta>
                                            <Card.Description className='icon-description'>zlmartin at 7:30pm</Card.Description>
                                        </Card.Meta>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Card.Content>
        </Card>
    )
}

export default EventCard;