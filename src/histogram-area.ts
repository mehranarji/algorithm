const maxRectangularArea = (arr: Number[]) => {
    let maxArea = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let h = 1; h <= arr[i]; h++) {
            let w = 1;
            for (let k = i + 1; k < arr.length; k++) {
                if (h > arr[k]) {
                    break;
                }

                w++;
            }
            maxArea = Math.max(maxArea, w * h);
        }
    }

    return maxArea;
};

export default maxRectangularArea;
