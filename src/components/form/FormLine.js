import React from 'react';
import './generic-form.css'

export default class FormLine extends React.Component {

    render() {
        const { label, type, name, value, onChange } = this.props;
        return (
            <div className="form-line grouping">
                <div className="label"><label htmlFor={name}>{label}:</label></div>
                <div className="component"><input type={type} name={name} value={value} onChange={onChange}/></div>
            </div>
        );
    }

}