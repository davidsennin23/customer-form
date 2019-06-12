import React from 'react';
import FunctionUtils from '../../utils/FunctionUtls';

const isValidStyle = {
    border: "2px solid green",
}

const isInvalidStyle = {
    border: "2px solid red",
}

const InputValidation = (...validationFunction) => (Input) => 
    
    class extends React.Component {

        state = {isValid: true, canApply: false};

        handleFocus = (e) => {
            this.setState({canApply: false, isValid: false});
        }

        handleBlur = (e) => {
            const msg = FunctionUtils.spreadCallFirstString(this.state.value, ...validationFunction);
            console.log(msg);
            e.target.setCustomValidity(msg);
            this.setState({canApply: true, isValid: msg == "" });
        }

        getStyle = (isValid) => {
            if (isValid) {
                return isValidStyle;
            }
            return isInvalidStyle;
        }

        render() {
            const {isValid, canApply} = this.state;
            return (
                <Input {...this.props} valueChange={(e) => this.setState({value:e.target.value})} 
                        validStyle={{}} onFocus={this.handleFocus} onBlur={this.handleBlur}></Input>
            );
        }

    }

    // canApply ? this.getStyle(isValid) : {}


export default InputValidation;