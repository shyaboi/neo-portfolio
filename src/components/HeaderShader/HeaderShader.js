import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { vertexShader } from './vertexShader.js';
import { fragmentShader } from './fragmentShader.js';


const TextMesh = ({ text }) => {
  const mesh = useRef();
  const shaderMaterial = useMemo(() => new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      time: { value: 0.0 },
      // Add other uniforms like text texture, colors, etc.
    },
  }), []);

  useFrame((state, delta) => {
    shaderMaterial.uniforms.time.value += delta;
  });

  return (
    <mesh ref={mesh} material={shaderMaterial}>
      {/* Apply your mesh geometry here */}
    </mesh>
  );
};

const ShaderCanvas = ({ text }) => (
  <Canvas>
    <TextMesh text={text} />
  </Canvas>
);

export default ShaderCanvas;
