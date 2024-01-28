class DescriptiveStatistics {
    static centralTendency(array) {
      const mean = array.reduce((acc, val) => acc + val, 0) / array.length;
      const median = DescriptiveStatistics.calculateMedian(array);
      const mode = DescriptiveStatistics.calculateMode(array);
  
      return { mean, median, mode };
    }
  
    static dispersion(array) {
      const range = Math.max(...array) - Math.min(...array);
      const variance = DescriptiveStatistics.calculateVariance(array);
      const standardDeviation = Math.sqrt(variance);
      const coefficientOfVariation = (standardDeviation / DescriptiveStatistics.centralTendency(array).mean) * 100;
      const quartileRange = DescriptiveStatistics.calculateQuartileRange(array);
  
      return { range, variance, standardDeviation, coefficientOfVariation, quartileRange };
    }
  
    static calculateMedian(array) {
      const sortedArray = array.slice().sort((a, b) => a - b);
      const mid = Math.floor(sortedArray.length / 2);
      return sortedArray.length % 2 === 0 ? (sortedArray[mid - 1] + sortedArray[mid]) / 2 : sortedArray[mid];
    }
  
    static calculateMode(array) {
      const countMap = new Map();
      array.forEach((value) => countMap.set(value, (countMap.get(value) || 0) + 1));
  
      let mode;
      let maxCount = 0;
  
      countMap.forEach((count, value) => {
        if (count > maxCount) {
          maxCount = count;
          mode = value;
        }
      });
  
      return mode;
    }
  
    static calculateVariance(array) {
      const mean = DescriptiveStatistics.centralTendency(array).mean;
      const squaredDifferences = array.map((value) => Math.pow(value - mean, 2));
      return squaredDifferences.reduce((acc, val) => acc + val, 0) / array.length;
    }
  
    static calculateQuartileRange(array) {
      const firstQuartile = DescriptiveStatistics.calculateMedian(array.slice(0, Math.floor(array.length / 2)));
      const thirdQuartile = DescriptiveStatistics.calculateMedian(array.slice(Math.ceil(array.length / 2)));
  
      return thirdQuartile - firstQuartile;
    }
  }
  // Usage
  const array = [5, 3, 6, 8, 4, 10, 2, 9];
  const centralTendencyResults = DescriptiveStatistics.centralTendency(array);
  const dispersionResults = DescriptiveStatistics.dispersion(array);
  
  console.log('Central Tendency:', centralTendencyResults);
  console.log('Dispersion:', dispersionResults);