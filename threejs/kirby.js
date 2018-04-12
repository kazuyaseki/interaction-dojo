window.addEventListener('DOMContentLoaded', init);

function init() {
  const width = 960;
  const height = 540;

  // レンダラーを作成
  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    canvas: document.querySelector('#myCanvas')
  });
  renderer.setPixelRatio(window.devicePixelRatio); // スマホでも綺麗に見えるようにデバイスピクセル比をセット
  renderer.setSize(width, height);

  // レンダラの背景色を白に、透明度を100%に設定
  renderer.setClearColor(0xffffff, 0);

  // シーンを作成
  const scene = new THREE.Scene();

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  camera.position.set(0, 0, +500);

  // 箱を作成
  const geometry = new THREE.SphereGeometry(100, 32, 32);
  const material = new THREE.MeshBasicMaterial({
    color: 0xf29a9a,
    wireframe: true
  });
  const box = new THREE.Mesh(geometry, material);

  var curve = new THREE.EllipseCurve(
    0,
    0, // ax, aY
    50,
    25, // xRadius, yRadius
    0,
    2 * Math.PI, // aStartAngle, aEndAngle
    false, // aClockwise
    0 // aRotation
  );

  var points = curve.getPoints(50);
  var leftLegGeometry = new THREE.BufferGeometry().setFromPoints(points);
  var leftLegMaterial = new THREE.LineBasicMaterial({ color: 0xdd0e5b });

  var rightLegGeometry = new THREE.BufferGeometry().setFromPoints(points);
  var rightLegMaterial = new THREE.LineBasicMaterial({ color: 0xdd0e5b });

  // Create the final object to add to the scene
  var leftLegEllipse = new THREE.Line(leftLegGeometry, leftLegMaterial);
  leftLegEllipse.translateX(60);
  leftLegEllipse.translateY(-100);

  var rightLegEllipse = new THREE.Line(rightLegGeometry, rightLegMaterial);
  rightLegEllipse.translateX(-60);
  rightLegEllipse.translateY(-100);

  scene.add(box);
  scene.add(leftLegEllipse);
  scene.add(rightLegEllipse);

  // 平行光源
  const directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(1, 1, 2);
  // シーンに追加
  scene.add(directionalLight);

  // 初回実行
  renderer.render(scene, camera);

  // 初回実行
  tick();

  function tick() {
    requestAnimationFrame(tick);

    // 箱を回転させる
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;

    // レンダリング
    renderer.render(scene, camera);
  }
}
