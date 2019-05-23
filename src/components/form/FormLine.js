import React from 'react';
import './generic-form.css'

export default class FormLine extends React.Component {

    render() {
        const { label, type, name } = this.props;
        return (
            <div className="form-line grouping">
                <div className="label"><label htmlFor={name}>{label}:</label></div>
                <div className="component"><input type={type} name={name}/></div>
            </div>
        );
    }

}