import React, {Component} from "react";
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: error,
            errorInfo: info
        })
    };

    render() {
        //{ return this.state.hasError ? 'Somthing Went Wrong': this.props.children }
        if (this.state.errorInfo) {
            // Error path
            return (
              <div>
                <h2>Something went wrong.</h2>
                {/* <details style={{ whiteSpace: 'pre-wrap' }}>
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </details> */}
              </div>
            );
          }
          // Normally, just render children
          return this.props.children;
    }
}

export default ErrorBoundary;