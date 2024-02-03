// fragmentShader.glsl
#version 300 es

precision mediump float;

in vec2 vUv;

uniform vec3 color; // Uniform for color
uniform sampler2D textTexture; // Texture containing the text

out vec4 outColor;

void main() {
    outColor = texture(textTexture, vUv) * vec4(color, 1.0);
}
