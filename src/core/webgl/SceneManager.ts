import * as THREE from 'three';
import { nebulaVertexShader, nebulaFragmentShader } from './shaders';
import gsap from 'gsap';

export class SceneManager {
  private static instance: SceneManager;
  private scene: THREE.Scene;
  private camera: THREE.OrthographicCamera;
  private renderer: THREE.WebGLRenderer;
  private material: THREE.ShaderMaterial;
  private mesh: THREE.Mesh;
  private clock: THREE.Clock;
  private mouse: THREE.Vector2;
  private targetMouse: THREE.Vector2;
  
  private container: HTMLElement;
  private isInitialized = false;

  private constructor() {
    this.scene = new THREE.Scene();
    
    // Orthographic camera for full screen 2D shader
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // cap pixel ratio for perf
    
    this.clock = new THREE.Clock();
    this.mouse = new THREE.Vector2(0.5, 0.5);
    this.targetMouse = new THREE.Vector2(0.5, 0.5);

    const geometry = new THREE.PlaneGeometry(2, 2);
    
    this.material = new THREE.ShaderMaterial({
      vertexShader: nebulaVertexShader,
      fragmentShader: nebulaFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2() },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) }
      },
      transparent: true
    });

    this.mesh = new THREE.Mesh(geometry, this.material);
    this.scene.add(this.mesh);

    this.onWindowResize = this.onWindowResize.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.render = this.render.bind(this);
  }

  public static getInstance(): SceneManager {
    if (!SceneManager.instance) {
      SceneManager.instance = new SceneManager();
    }
    return SceneManager.instance;
  }

  public init(container: HTMLElement) {
    if (this.isInitialized) return;
    this.container = container;
    
    this.container.appendChild(this.renderer.domElement);
    this.renderer.domElement.style.position = 'absolute';
    this.renderer.domElement.style.top = '0';
    this.renderer.domElement.style.left = '0';
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.renderer.domElement.style.pointerEvents = 'none'; // let clicks pass through
    this.renderer.domElement.style.zIndex = '0'; // Behind content

    window.addEventListener('resize', this.onWindowResize);
    window.addEventListener('mousemove', this.onMouseMove);
    
    this.onWindowResize();
    this.render();
    
    this.isInitialized = true;
  }

  private onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    this.renderer.setSize(width, height);
    this.material.uniforms.uResolution.value.set(width, height);
  }

  private onMouseMove(event: MouseEvent) {
    // Normalize mouse coordinates (0 to 1)
    this.targetMouse.x = event.clientX;
    // Invert Y for WebGL (0 is bottom, height is top usually, but we pass raw pixels and normalize in shader)
    this.targetMouse.y = window.innerHeight - event.clientY;
  }

  private render() {
    requestAnimationFrame(this.render);

    const elapsedTime = this.clock.getElapsedTime();
    this.material.uniforms.uTime.value = elapsedTime;

    // Lerp mouse for smooth tracking
    this.mouse.lerp(this.targetMouse, 0.05);
    this.material.uniforms.uMouse.value.copy(this.mouse);

    this.renderer.render(this.scene, this.camera);
  }

  public destroy() {
    if (!this.isInitialized) return;
    window.removeEventListener('resize', this.onWindowResize);
    window.removeEventListener('mousemove', this.onMouseMove);
    if (this.container && this.renderer.domElement.parentNode === this.container) {
      this.container.removeChild(this.renderer.domElement);
    }
    this.renderer.dispose();
    this.isInitialized = false;
  }
}
