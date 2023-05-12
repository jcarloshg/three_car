import { PerspectiveCamera, Vector3, WebGLRenderer, sRGBEncoding } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Scene1 from './scenes/Scene1';

export class App {
	constructor(container) {
		this.container = container;

		this.scene = new Scene1();

		// ## Camera's config
		this.camera = new PerspectiveCamera(35, this.container.clientWidth / this.container.clientHeight, 0.1, 10000);
		this.camera.position.set(10, 10, 10);
		this.camera.lookAt(new Vector3(0, 0, 0));

		const controls = new OrbitControls(this.camera, this.container);

		// ## Renderer's config
		this.renderer = new WebGLRenderer({
			antialias: true,
		})
		this.renderer.setPixelRatio(window.devicePixelRatio);

		// sRGBEncoding
		this.renderer.outputEncoding = sRGBEncoding;

		// ## Light's config
		this.renderer.physicallyCorrectLights = true;
		this.renderer.shadowMap.enabled = true;

		this.container.appendChild(this.renderer.domElement);
		this.onResize();
		this.render();
	}

	onResize() {
		this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
		this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
		this.camera.updateProjectionMatrix();
	}

	render() {
		this.renderer.render(this.scene, this.camera);

		// Updates here
		this.scene.update();

		this.renderer.setAnimationLoop(() => this.render());
	}
}
