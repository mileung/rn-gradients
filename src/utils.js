export function normalizeIntervals(intervals, colors, gradientArrayLength) {
  if (intervals) {
    if (intervals.length !== colors.length) {
      throw new Error('intervals.length should be equal to colors.length');
    }
    if (!intervals.every((e, i, a) => !i || e > a[i - 1])) {
      throw new Error('Each consecutive interval must be greater than the previous one');
    }
  } else if (!intervals) {
    const { length } = colors;
    intervals = [...Array(length)].map((_, i) => i / (length - 1));
  }

  return intervals.map(num => num * (gradientArrayLength - 1));
}

// const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');
const DEG_PER_RAD = Math.PI / 180;
export const degToRad = deg => deg * DEG_PER_RAD;

export const getHypotenuse = (a, b) => Math.sqrt(a ** 2 + b ** 2);
