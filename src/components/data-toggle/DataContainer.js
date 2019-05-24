import React from 'react';

export default class DataContainer extends React.Component {

    state = { isComponentVisible: true }

    handleToggle = (e) => {
        this.setState({
            isComponentVisible: !this.state.isComponentVisible
        })
    }

    render() {
        const { children } = this.props
        return (
            // TODO: Comunicar entre componentes usando rxjs
            <div>
                <div style={{ visibility: this.state.isComponentVisible ? 'visible' : 'hidden' }}>{children}</div>
                <button onClick={this.handleToggle}>Form {this.state.isComponentVisible ? 'invisible' : 'visible'}</button>
            </div>
        );
    }

}