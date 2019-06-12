

const getValidatePatternFunction = (pattern, patternMessage) => (value) => {
    if (!value || typeof(value) !== "string") return false;
    const match = value.match(pattern);
    return match ? "" : `O valor do campo ${value} não corresponde ao padrão ${patternMessage}`;
}

export default getValidatePatternFunction;