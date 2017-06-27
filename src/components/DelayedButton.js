import React from 'react'

export default class DelayedButton extends React.Component {
  handleClick = (e) => {
    e.persist()
    var func = function () { this.props.onDelayedClick(e) }
    return setTimeout(func.bind(this), this.props.delay)
  }

  render () {
    return (
      <button className="delayed-button" onClick={this.handleClick}/>
    )
  }
}
