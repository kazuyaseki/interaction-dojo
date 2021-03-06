window.onload = () => {
  var scene = new THREE.Scene();

  // PerspectiveCamera は人間の目と同じ世界の捉え方らしい
  // 3Dで作るなら基本これでいいっぽい。
  // 2Dでマリオとか作りたいならOrthographicCameraを使った方が良い
  var camera = new THREE.PerspectiveCamera(
    75, // Field of view
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.1, // Near clipping pane
    1000 // Far clipping pane
  );

  // Reposition the camera
  camera.position.set(5, 5, 0);

  // Point the camera at a given coordinate
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  var renderer = new THREE.WebGLRenderer({ antialias: true });

  // Size should be the same as the window
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Set a near white clear color (default is black)
  renderer.setClearColor(0xeeeeee);

  // Append to the document
  document.body.appendChild(renderer.domElement);

  // Render the scene/camera combination
  renderer.render(scene, camera);

  // A mesh is created from the geometry and material, then added to the scene
  var plane = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0x222222, wireframe: true })
  );
  plane.rotateX(Math.PI / 2);
  scene.add(plane);

  // これ足すとマウスでぐるぐる動かせるようになる
  var controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', function() {
    renderer.render(scene, camera);
  });
};
