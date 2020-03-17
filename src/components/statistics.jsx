import React, { Component } from "react";
import Config from "../config.json";

class Stats extends Component {
  state = {};

  handleSendVector() {
    if (!this.props.autoPilot)
      alert("Would have POST the vecter - " + this.props.currentPass);
  }

  render() {
    return (
      <div className="statisticsPart">
        <button
          type="button"
          onClick={() => this.props.onChangeAutoPilot()}
          className={
            this.props.autoPilot
              ? "autoBut btn btn-success"
              : "autoBut btn btn-secondary"
          }
        >
          <img class="planeImage"></img>
          {this.props.autoPilot ? "AutoPilot" : "Manuel"}
        </button>

        <div className="rowOfData">
          <div className="passData">
            <h4 class="passSelected">
              חליפה מוצגת <br /> {this.props.currentPass}
            </h4>
            <div class="dropdown">
              <button
                class="btn btn-primary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
              >
                <span class="caret"></span>&nbsp; חליפות קודמות
              </button>
              <ul class="dropdown-menu">
                {this.props.lastPasses.map(pass => (
                  <li onClick={() => this.props.onChangeCurPass(pass)}>
                    <a>{pass}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <center>
            <div
              className={
                this.checkValidTCS()
                  ? "colOfData bg-success collumn"
                  : "colOfData bg-danger collumn"
              }
            >
              <h4 className="text-center">TCS</h4>
              <img
                className={
                  this.props.statistics.TCS.param1 > Config.maxValues.param1
                    ? "valid"
                    : "not-valid"
                }
              />
              <b>param1</b> : {this.props.statistics.TCS.param1}
              <br />
              <img
                className={
                  this.props.statistics.TCS.param2 > Config.maxValues.param2
                    ? "valid"
                    : "not-valid"
                }
              />
              <b>param2</b> : {this.props.statistics.TCS.param2}
              <br />
              <img
                className={
                  this.props.statistics.TCS.param3 > Config.maxValues.param3
                    ? "valid"
                    : "not-valid"
                }
              />
              <b>param3</b> : {this.props.statistics.TCS.param3}
            </div>

            <div
              className={
                this.checkValidGPS()
                  ? "colOfData bg-success collumn"
                  : "colOfData bg-danger collumn"
              }
            >
              <h4 className="text-center ">GPS</h4>
              <img
                className={
                  this.props.statistics.GPS.param1 > Config.maxValues.param4
                    ? "valid"
                    : "not-valid"
                }
              />
              <b>param1</b> : {this.props.statistics.GPS.param1} <br />
              <img
                className={
                  this.props.statistics.GPS.param2 > Config.maxValues.param5
                    ? "valid"
                    : "not-valid"
                }
              />
              <b>param2 : </b>
              {this.props.statistics.GPS.param2} <br />
              <img
                className={
                  this.props.statistics.GPS.param3 > Config.maxValues.param6
                    ? "valid"
                    : "not-valid"
                }
              />
              <b>param3 :</b> {this.props.statistics.GPS.param3} <br />
              <img
                className={
                  this.props.statistics.GPS.param4 > Config.maxValues.param7
                    ? "valid"
                    : "not-valid"
                }
              />
              <b>param4</b> : {this.props.statistics.GPS.param4}{" "}
            </div>

            <button
              type="button"
              onClick={() => this.handleSendVector()}
              className={
                this.props.autoPilot
                  ? "btn btn-secondary btn-lg sendVecButton disabled"
                  : "btn btn-primary btn-lg sendVecButton "
              }
            >
              שליחת וקטור
            </button>
          </center>
        </div>
      </div>
    );
  }
  checkValidTCS() {
    if (
      this.props.statistics.TCS.param1 > Config.maxValues.param1 &&
      this.props.statistics.TCS.param2 > Config.maxValues.param2 &&
      this.props.statistics.TCS.param3 > Config.maxValues.param3
    ) {
      return true;
    }
    return false;
  }
  checkValidGPS() {
    if (
      this.props.statistics.GPS.param1 > Config.maxValues.param4 &&
      this.props.statistics.GPS.param2 > Config.maxValues.param5 &&
      this.props.statistics.GPS.param3 > Config.maxValues.param6 &&
      this.props.statistics.GPS.param4 > Config.maxValues.param7
    ) {
      return true;
    }
    return false;
  }
}

export default Stats;
