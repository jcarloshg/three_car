import { Scene, Color, DirectionalLight, HemisphereLight, AxesHelper } from 'three';
import Car from '../objects/car/Car';

class Scene1 extends Scene {
	constructor() {
		super();
		this.background = new Color('skyblue').convertSRGBToLinear();
		this.create();
	}

	create() {

		this.car = new Car();

		const ambientLight = new HemisphereLight(0xffffbb, 0x080820, .5);
		const light = new DirectionalLight(0xffffff, 1.0);
		const helper = new AxesHelper(3);

		this.add(light, ambientLight, helper, this.car);
	}

	update() {
		this.car.update();
	}
}

export default Scene1;
