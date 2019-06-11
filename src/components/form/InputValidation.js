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

        handleBlur = () => {
            this.setState({canApply: true, isValid: FunctionUtils.spreadCallBoolean(this.state.value, ...validationFunction) });
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
                        validStyle={canApply ? this.getStyle(isValid) : {}} onFocus={this.handleFocus} onBlur={this.handleBlur}></Input>
            );
        }

    }




export default InputValidation;