module.exports = function transform(arr) {
    if (!Array.isArray(arr)){
        throw new Error;
    }

    const result = [];


    for (let index = 0; index < arr.length; index++) {
        const currentValue = arr[index];

        switch(currentValue) {
            case '--discard-prev':
               if (result.length) {
                   result.pop();
               }
                break;
            case '--double-prev':
                if (index > 0) {
                    const prev = arr[index - 1];

                    result.push(prev);
                }
                break;
          case '--discard-next':
               if (index !== arr.length - 1) {
                index++;
               }
               break;
            case '--double-next':
                if (index + 1 !== arr.length) {
                   const next = arr[index + 1];

                    result.push(next);
                }
                break;
            default:
             result.push(currentValue);
        }
    }

    return result;
};
