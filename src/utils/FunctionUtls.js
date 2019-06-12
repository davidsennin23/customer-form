
const FunctionUtils = {};

FunctionUtils.spreadCallBoolean = (value, ...functionArray) => {
    return functionArray.map((func) => func(value)).reduce((total, value) => total && value)
}

FunctionUtils.spreadCallFirstString = (value, ...functionArray) => {
    let string = "";
    functionArray.find(func=> (string = func(value)) != "");
    return string;
}

export default FunctionUtils;