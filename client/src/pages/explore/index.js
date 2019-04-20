import React, { Component } from "react";
import Sort from "../../components/mobile/page-components/explore/Sort-Explore";
import EventCard from "../../components/mobile/shared/general/Event-Card";

class Explore extends Component {
  render() {
    return (
      <div className="content">
        <Sort />
        <EventCard />
      </div>
    );
  }
}

export default Explore;
