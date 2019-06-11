import React from 'react';
import './generic-form.css'

export default class FormLine extends React.Component {

    render() {
        const nilF = () => {};
        const { label, type, name, value, onChange, validStyle } = this.props;
        
        var { onFocus, onBlur, valueChange } = this.props;
        valueChange = valueChange || nilF
        onFocus = onFocus || nilF
        onBlur = onBlur || nilF
        
        return (
            <div className="form-line grouping">
                <div className="label"><label htmlFor={name}>{label}:</label></div>
                <div className="component">
                    <input style={validStyle} type={type} name={name} value={value} onChange={(e) => {onChange(e); valueChange(e)}} 
                            onFocus={onFocus} onBlur={onBlur}/>
                </div>
            </div>
        );
    }

}