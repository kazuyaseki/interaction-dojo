const linearScale = d3
  .scaleLinear()
  .domain([0, 100]) // 0% ~ 100%
  .range([0, 1]) // 実際に出力する値の最小値〜最大値
  .clamp(true); // linearScaleへの引数がrangeの最大値を超えちゃう場合に切り捨てする

const timeScale = d3
  .scaleTime()
  .domain([new Date(2016, 0, 1), new Date()])
  .range([0, 100]);

console.log(timeScale(new Date())); // 100 を返す　ドメイン内の最大数だから
console.log(timeScale.invert(50)); // 2016/1/1 と実行した時間の中間の時間を出力する
