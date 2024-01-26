
// Set up the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create geometries
const boxGeometry = new THREE.BoxGeometry();
const coneGeometry = new THREE.ConeGeometry();
const cylinderGeometry = new THREE.CylinderGeometry();
const sphereGeometry = new THREE.SphereGeometry();
const torusGeometry = new THREE.TorusGeometry();

// Create materials with different colors
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
const coneMaterial = new THREE.MeshBasicMaterial({ color: 0xff00ff });
const cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const torusMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// Create mesh objects
const box = new THREE.Mesh(boxGeometry, boxMaterial);
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
const torus = new THREE.Mesh(torusGeometry, torusMaterial);

// Set varied positions
box.position.set(-3, 2, -5);
cone.position.set(2, -2, -3);
cylinder.position.set(0, 0, 0);
sphere.position.set(-2, 3, 5);
torus.position.set(3, -1, 2);

// Add objects to the scene
scene.add(box);
scene.add(cone);
scene.add(cylinder);
scene.add(sphere);
scene.add(torus);

// Add animation
const animate = function () {
    requestAnimationFrame(animate);

    // Rotate objects
    box.rotation.x += 0.02;
    box.rotation.y += 0.02;
    cone.rotation.x += 0.02;
    cone.rotation.y += 0.02;
    cylinder.rotation.x += 0.02;
    cylinder.rotation.y += 0.02;
    sphere.rotation.x += 0.02;
    sphere.rotation.y += 0.02;
    torus.rotation.x += 0.02;
    torus.rotation.y += 0.02;

    renderer.render(scene, camera);
};

// Set up camera position
camera.position.z = 10;

// Call the animate function
animate();
