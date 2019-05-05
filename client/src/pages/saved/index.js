import React, { Component } from 'react';
import EventPanelDesktop from '../../components/desktop/shared/general/Event-Panel';
import API from '../../utils/API';
// import dummyData from '../../demo/demoEvents.json';

class Saved extends Component {
    state = {
        data: []
    }

    componentDidUpdate=()=>{
        console.log("saved page props",this.props)
        // API.getUser(this.props.user._id)
        // .then(dbUser=>{
        //     console.log(dbUser)
        // })
    }

    handleView = (width) => {
        if (width <= 1024) {
            return (
                <div>

                </div>

            )
        } else {
            return (
                <section style={{ paddingTop: "117px", margin: '0px auto', width: '96%' }}>
                    {this.state.data.map(element => {
                        return (
                            <EventPanelDesktop
                                key={element.id}
                                title={element.title}
                                image={element.image}
                                date={element.date}
                                creator={element.creator}
                                date_created={element.created}
                                price={element.price}
                                comments={element.comments}
                                upvotes={element.up}
                                downvotes={element.down}
                                handleVote={this.handleVote}
                                handleSave={this.handleSave}
                            />
                        )
                    })}
                </section>
            )
        }
    }

    render() {
        return (
            <div>
                {this.handleView(this.props.windowWidth)}
            </div>
        );
    }
}

export default Saved;