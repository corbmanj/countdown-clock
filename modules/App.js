import React, {Component} from 'react'
import Clock from 'react-countdown-clock'

export default class App extends Component {
  state = {
    paused: true,
    timeLeft: 0,
    segments: [
        {time: 600, color: "#0e0"},
        {time: 240, color: "#e00"},
        {time: 60, color: "#00e"},
        {time: 120, color: "#e00"},
        {time: 60, color: "#00e"},
        {time: 120, color: "#e00"},
        {time: 60, color: "#00e"},
        {time: 240, color: "#e00"},
        {time: 60, color: "#00e"},
        {time: 240, color: "#e00"},
        {time: 60, color: "#00e"},
        {time: 120, color: "#e00"},
        {time: 60, color: "#00e"},
        {time: 120, color: "#e00"},
        {time: 60, color: "#00e"},
        {time: 240, color: "#e00"},
        {time: 60, color: "#00e"},
        {time: 240, color: "#e00"},
        {time: 60, color: "#00e"},
        {time: 120, color: "#e00"},
        {time: 60, color: "#00e"},
        {time: 120, color: "#e00"},
        {time: 60, color: "#00e"},
        {time: 240, color: "#e00"},
        {time: 600, color: "#0e0"}
    ],
    currentSegment: 0,
    segmentColor: "#0e0"
  }
  pauseClock = () => {
    this.setState({paused: !this.state.paused})
  }
  completeSegment = () => {
      if (this.state.currentSegment === this.state.segments.length) {
      } else {
          this.setState((prevState) => {
              console.log(prevState.currentSegment)
              return {
                  timeLeft: this.state.segments[prevState.currentSegment].time,
                  currentSegment: prevState.currentSegment + 1,
                  segmentColor: this.state.segments[prevState.currentSegment].color
              }
          })
      }
  }
  addSegment = () => {
      this.setState(prevState => {
          prevState.segments.push({time: 0, color: "#000"})
          return prevState
      })
  }
  removeSegment = () => {
      this.setState(prevState => {
          prevState.segments.pop()
          return prevState
      })
  }
  updateSegmentTime = (ev) => {
      ev.persist()
      this.setState(prevState => {
          prevState.segments[ev.target.name].time = ev.target.value
          return prevState
      })
  }
  updateSegmentColor = (ev) => {
      ev.persist()
      this.setState(prevState => {
          prevState.segments[ev.target.name].color = ev.target.value
          return prevState
      })
  }
  renderSegments = () => {
      const segments = this.state.segments.map((segment, index) => {
          return (
              <div key={index}>
                  {index < 9 ? '0' + Number(index + 1) : index + 1}.
                  <input type="number" name={index} style={{width: "50px"}} defaultValue={segment.time} onChange={this.updateSegmentTime}/>
                  s, color:
                  <input type="text" name={index} style={{width: "50px"}} defaultValue={segment.color} onChange={this.updateSegmentColor}/>
              </div>
          )
      })
      return segments
  }
  render() {
    return (
      <div className="flex">
        <button onClick={this.pauseClock} id="startPause">
            { this.state.paused ? 'Start' : 'Pause' }
        </button>
        <div>
          {this.renderSegments()}
            <div id="buttons">
                <button onClick={this.addSegment}>add segment</button>
                <button onClick={this.removeSegment}>remove segment</button>
            </div>
        </div>
        <div>
          <Clock seconds={this.state.timeLeft}
             color={this.state.segmentColor}
             alpha={0.9}
             size={300}
             onComplete={this.completeSegment}
             paused={this.state.paused}
          />
        </div>
      </div>
    )
  }
}
