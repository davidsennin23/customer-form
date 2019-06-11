
const FunctionUtils = {};

FunctionUtils.spreadCallBoolean = (value, ...functionArray) => functionArray.map((func) => func(value)).reduce((total, value) => total && value)

export default FunctionUtils;