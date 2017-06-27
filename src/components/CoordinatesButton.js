import React from 'react'

export default class CoordinatesButton extends React.Component {
  handleClick = (e) => {
    var coordinates = [e.screenX, e.screenY]
    return this.props.onReceiveCoordinates(coordinates)
  }

  render () {
    return (
      <button className="coordinates-button" onClick={this.handleClick}/>
    )
  }
}
