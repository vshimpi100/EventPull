import React, { Component } from "react";
import EventPanelDesktop from "../../components/desktop/shared/general/Event-Panel";
import API from "../../utils/API";
// import dummyData from '../../demo/demoEvents.json';

class Saved extends Component {
  state = {
    data: [],
    isAuthenticated: null
  };

  componentWillMount = () => {
      console.log("saved page state",this.state)
    if (this.props.user) {
      API.getUser(this.props.user.data._id).then(dbUser => {
        console.log("dbUser from saved", dbUser);
        this.setState({
          data: dbUser.data.saved,
          isAuthenticated: true
        });
      });
    } else {
      this.setState({
        isAuthenticated: false
      });
    }
  };

  handleView = width => {
    if (width <= 1024) {
      return <div />;
    } else {
      return (
        <section
          style={{ paddingTop: "117px", margin: "0px auto", width: "96%" }}
        >
          {!this.state.isAuthenticated ? (
            <h2 className="text-center">Please sign in to view saved events!</h2>
          ) : !this.state.data[0] ? (
            <h2 className="text-center">Click the heart on an event to save it to your profile!</h2>
          ) : (
            this.state.data.map(element => {
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
                  id={element._id}
                  upvotes={element.up}
                  downvotes={element.down}
                  handleVote={this.handleVote}
                  handleSave={this.handleSave}
                />
              );
            })
          )}
        </section>
      );
    }
  };

  render() {
    return <div>{this.handleView(this.props.windowWidth)}</div>;
  }
}

export default Saved;
