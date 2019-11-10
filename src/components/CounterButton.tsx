import React, { Component } from 'react';

interface ICounterButtonProps {
  color: string;
}

interface ICounterButtonState {
  count: number;
}

class CounterButton extends Component<ICounterButtonProps, ICounterButtonState> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  shouldComponentUpdate(nextProps, nextState): boolean {
    if (this.state.count !== nextState.count) {
      return true
    }
    return false
  }

  updateCount = (): void => {
    this.setState((state: ICounterButtonState): object => {
      return { count: state.count + 1 }
    });
  }

  render(): JSX.Element {
    return (
      <button id="counter" color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
