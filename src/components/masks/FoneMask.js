import React from 'react';

const foneMask = "(__)_____-____";

const numberizeValue = (value) => value.split("").map((value) => Number.isInteger(parseInt(value)) ? value : "").join("");
const makeIntegrity = (integrity) => {
    if ((integrity.indexOf("(") >= 0) && (integrity.indexOf(")") >= 0) && (integrity.indexOf("-") >= 0)) return integrity;
    let tokens = [{0:"("},{3:")"},{9:"-"}];
    tokens.forEach(value => {
        let key = Object.keys(value)[0];
        if (integrity.charAt(key) != value[key]) {
            let array = integrity.split("");
            array[key] = value[key];
            array[key-1] = "";
            integrity = array.join("");
        }
    });

    return integrity;
}

const FoneMask = (Input) =>

    class extends React.Component {

        state = {value: foneMask};

        constructor(props) {
            super(props);
        }

        setCursorPosition(input) {
            const { value } = input;
            let first_ = value.indexOf('_');
            if (first_ < 0) {
                first_ = value.length;
            }
            setTimeout(() => input.setSelectionRange(first_, first_),0);
        }

        maskerizeValue(value) {
            value += "___________";
            let start = 0;
            let i = 0;
            return "(" + [2,5,4].map((index) => {
                let result = value.substr(start, index + start);
                value = value.substr(index);
                return result+[")","-",""][i++];
            }).join("");
        }

        handleFocus = (e) => {
            let input = e.target;
            this.setCursorPosition(input);
        }

        handleChange = (e) => {
            let input = e.target;
            let { value } = input;
            value = makeIntegrity(value);
            input.value = this.maskerizeValue(numberizeValue(value));
            this.setCursorPosition(input);
            this.setState({value:value});
        }
        
        render() {
            let { value } = this.state;
            value = this.maskerizeValue(numberizeValue(value));
            const valueChange = this.props.valueChange || function() {};
            return (
                <Input {...this.props} value={value} valueChange={(e) => {this.handleChange(e); valueChange(e)}} onFocus={this.handleFocus}></Input>
            );

        }

    }


export default FoneMask;