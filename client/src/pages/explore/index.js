import React, { Component } from "react";
import SortMobile from "../../components/mobile/page-components/explore/Sort-Explore";
import SortDesktop from "../../components/desktop/page-components/explore/Sort-Explore"
import EventCardMobile from "../../components/mobile/shared/general/Event-Card";
import EventCardDesktop from "../../components/desktop/shared/general/Event-Card"
import windowSize from 'react-window-size';
import dummyData from '../../demo/demoEvents.json';

class Explore extends Component {

  state = {
    data: dummyData
  }

  handleSort = (sort_type, order) => {
    console.log(sort_type, order);
  }

  handleVote = (vote) => {
    console.log(vote);
  }

  handleSave = (saved_event, action) => {
    console.log(saved_event, action);
  }

  handleView = (width) => {
    if (width <= 1024) {
      return (
        <div>
          <SortMobile />
          <EventCardMobile />
        </div>

      )
    } else {
      return (
        <div style={{ paddingTop: "117px" }}>
          <SortDesktop
            sort={this.handleSort}
          />
          {this.state.data.map(element => {
            return (
              <section>
                <EventCardDesktop
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
              </section>
            )
          })}

        </div>
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

export default windowSize(Explore);
