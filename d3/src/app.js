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

// quantize scaleはドメインを rangeの数分に区切ってくれる
// 例えば下記の例だと0 ~ 33.3333が red, 33.3333 ~ 66.666がwhiteみたいに自動で区切る
// 多分パイチャートとか作る時に使うっぽい
const quantizeScale = d3
  .scaleQuantize() // quantize scaleはドメインを rangeの数分に区切ってくれる
  .domain([0, 100])
  .range(['red', 'white', 'green']); // 実際に出力する値の最小値〜最大値

console.log(quantizeScale(22));
console.log(quantizeScale(49));

const ordinalScale = d3
  .scaleOrdinal() // quantize scaleはドメインを rangeの数分に区切ってくれる
  .domain(['poor', 'good', 'great'])
  .range(['red', 'white', 'green']); // 実際に出力する値の最小値〜最大値

console.log(ordinalScale('poor')); // red 返す
console.log(ordinalScale('great')); // green 返す

d3.json('data/data.json', function(data) {
  var extent = d3.extent(data, function(d) {
    return d.age;
  });
  console.log(extent); // extentは最小値と最大値が入った配列くれる。大きさの基準はコールバックとして渡してるやつ依存

  var scale = d3
    .scaleLinear()
    .domain(extent)
    .range([0, 600]);

  var ages = d3.set(data, function(d) {
    return d.age;
  });
  console.log(ages.values());
});
