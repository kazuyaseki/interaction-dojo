const linearScale = d3
  .scaleLinear()
  .domain([0, 100]) // 0% ~ 100%
  .range([0, 1]) // 実際に出力する値の最小値〜最大値
  .clamp(true); // linearScaleへの引数がrangeの最大値を超えちゃう場合に切り捨てする
