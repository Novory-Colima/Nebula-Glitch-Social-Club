export const nebulaVertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float uTime;
  
  void main() {
    vUv = uv;
    vPosition = position;
    
    // Add some subtle organic movement to the background plane itself if needed
    vec3 pos = position;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

export const nebulaFragmentShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;

  // Simple noise function
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  // Fractal Brownian Motion
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < 5; ++i) {
      v += a * noise(p);
      p = rot * p * 2.0 + shift;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 st = gl_FragCoord.xy / uResolution.xy;
    st.x *= uResolution.x / uResolution.y;

    // Center coordinates
    vec2 p = st - vec2(0.5 * (uResolution.x / uResolution.y), 0.5);

    // Mouse influence
    vec2 mouse = uMouse / uResolution;
    mouse.x *= uResolution.x / uResolution.y;
    mouse -= vec2(0.5 * (uResolution.x / uResolution.y), 0.5);
    
    float mouseDist = length(p - mouse);
    float influence = smoothstep(0.5, 0.0, mouseDist);

    // Time-based nebula generation
    vec2 q = vec2(0.);
    q.x = fbm(p + 0.00 * uTime);
    q.y = fbm(p + vec2(1.0));

    vec2 r = vec2(0.);
    r.x = fbm(p + 1.0 * q + vec2(1.7, 9.2) + 0.15 * uTime);
    r.y = fbm(p + 1.0 * q + vec2(8.3, 2.8) + 0.126 * uTime);

    float f = fbm(p + r);

    // Color palette based on Volt Green (#CCFF00) and Obsidian (#030303)
    vec3 color = mix(vec3(0.01, 0.01, 0.01), vec3(0.04, 0.04, 0.04), clamp((f*f)*4.0, 0.0, 1.0));
    
    // Add subtle green/ultraviolet highlights based on noise and mouse
    vec3 highlight = vec3(0.8, 1.0, 0.0); // Volt Green approx
    vec3 uvLight = vec3(1.0, 0.0, 1.0);   // Magenta approx
    
    color = mix(color, highlight, clamp(length(q), 0.0, 1.0) * influence * 0.5);
    color = mix(color, uvLight, clamp(length(r.x), 0.0, 1.0) * influence * 0.2);
    
    // Ambient subtle glow
    color += vec3(0.02, 0.05, 0.0) * f * 0.5;

    gl_FragColor = vec4(color, 1.0);
  }
`;
