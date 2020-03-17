import React, { Component } from "react";
import Satellite from "./satellitePass";
class SatsList extends Component {
  state = {
    openSat: null
  };

  render() {
    return (
      <React.Fragment>
        <div className="theSatList">
          {this.props.satellites.map(sat => (
            <Satellite
              key={sat.id}
              satData={sat}
              onChangeColor={this.changeColor}
              isOpen={this.props.openSat === sat.id ? true : false}
              onClickSat={this.props.handleClick}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
  // handleClick = satId => {
  //   if (this.state.openSat === satId) {
  //     this.setState({ openSat: "none" });
  //   } else {
  //     this.setState({ openSat: satId });
  //   }
  // };
  changeColor = satData => {
    setTimeout(() => {
      console.log("Finished waiting");
      newSats[index].styleClasses = ["satBody"];
      this.setState({ Satellites: newSats });
    }, 7000);
    let newSats = [...this.state.satellites];
    const index = newSats.indexOf(satData);
    newSats[index].styleClasses = ["satBody animate-me"];
    this.setState({ Satellites: newSats });
  };
}

export default SatsList;
