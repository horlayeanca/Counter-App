import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {}

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex w-full h-screen justify-center">
          <h1 className="flex justify-center items-center text-3xl text-red-600 font-bold">
            Oops.. Something went wrong.
          </h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
