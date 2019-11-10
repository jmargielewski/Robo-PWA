import React, { Component } from 'react';

interface IErrorBounderyProps {
  children: JSX.Element;
}
interface IErrorBounderyState {
  hasError: boolean;
}

class ErrorBoundary extends Component<IErrorBounderyProps, IErrorBounderyState> {
  constructor (props: IErrorBounderyProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch (error, info): void {
    this.setState({ hasError: true })
  }

  render(): JSX.Element {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
