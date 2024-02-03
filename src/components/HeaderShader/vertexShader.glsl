// vertexShader.glsl
#version 300 es

precision mediump float;

in vec3 position;
in vec2 uv;

uniform mat4 modelViewMatrix; // Model-View matrix
uniform mat4 projectionMatrix; // Projection matrix
uniform float time; // Time uniform for animation

out vec2 vUv;

void main() {
    vUv = uv;

    // Create a simple wave effect by modifying the y position
    float wave = sin(position.x * 0.05 + time) * 0.5;
    vec3 pos = position;
    pos.y += wave; // Apply the wave effect

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
