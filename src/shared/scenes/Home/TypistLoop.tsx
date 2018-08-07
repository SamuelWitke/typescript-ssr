import * as  React from 'react'
interface Props {
  children: React.ReactNode
  interval: number
}
interface State {
  currentIndex: number
}
export default class TypistLoop extends React.Component<Props, State>{
  static defaultProps = {
    interval: 1000,
  }
  _timer: any;

  state = {
    currentIndex: 0,
  }

  componentWillUnmount() {
    if (this._timer) {
      clearTimeout(this._timer)
    }
  }

  onTypingDone = () => {
    this._timer = window.setTimeout(this.showNext, this.props.interval)
  }

  showNext = () => {
    const { children } = this.props
    this.setState(({ currentIndex }) => ({
      currentIndex: (currentIndex + 1) % React.Children.count(children),
    }))
  }

  render() {
    const { onTypingDone } = this
    const { currentIndex } = this.state
    const { children } = this.props
    return React.Children.map(
      children,
      (child: any, i) =>
        i === currentIndex && React.cloneElement(child, { onTypingDone }),
    )
  }
}
