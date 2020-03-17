import React, { Component } from "react";
import Stats from "./statistics";

class Satellite extends Component {
  state = {
    showMyComponent: 0,
    currentPass: 0,
    autoPilot: "none"
  };
  handleClick = e => {
    const target = e.target;
    if (target.id == "satData") {
      e.stopPropagation();
      this.props.onClickSat(this.props.satData.id);
    }
  };
  handleChangeCurPass = pass => {
    this.setState({ currentPass: pass });
  };
  handleChangeAutoPilot = () => {
    console.log(this.state.autoPilot);
    this.setState({ autoPilot: !this.state.autoPilot });
  };

  render() {
    if (this.state.autoPilot === "none") {
      if (this.props.satData.satName == "אופק 7") {
        this.state.autoPilot = false;
      } else {
        this.state.autoPilot = true;
      }
    }
    if (this.state.currentPass == 0) {
      this.state.currentPass = this.props.satData.lastPasses[0];
    }
    return (
      <div
        id="satData"
        onClick={this.handleClick}
        className={this.props.satData.styleClasses}
      >
        <div className="SatName" id="satData">
          {this.props.satData.satName}
        </div>
        <img id="satData" className={"genralSat sat" + this.props.satData.id} />

        <div className="SatPass">
          {
            this.props.satData.lastPasses[
              this.props.satData.lastPasses.length - 1
            ]
          }
        </div>

        <br />
        {this.props.isOpen ? (
          <Stats
            statistics={
              this.props.satData.statistics["pass" + this.state.currentPass]
            }
            lastPasses={this.props.satData.lastPasses}
            currentPass={this.state.currentPass}
            autoPilot={this.state.autoPilot}
            onChangeCurPass={this.handleChangeCurPass}
            onChangeAutoPilot={this.handleChangeAutoPilot}
          />
        ) : null}

        {/* <button
          onClick={() => this.props.onChangeColor(this.props.satData)}
          className="colorSat"
        >
          colorMe
        </button> */}
      </div>
    );
  }
}

export default Satellite;
