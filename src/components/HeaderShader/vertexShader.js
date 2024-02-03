export const vertexShader = `
#version 300 es

precision mediump float;

in vec3 position;
in vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float time;

out vec2 vUv;

void main() {
    vUv = uv;

    float wave = sin(position.x * 0.05 + time) * 0.5;
    vec3 pos = position;
    pos.y += wave;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;