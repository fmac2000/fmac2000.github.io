/* global AFRAME, THREE */

// Fmac shader

// Near impossible to add this but here x
// http://glslsandbox.com/e#59252.0
// https://glitch.com/edit/#!/aframe-simpler-shader
// https://shaderfrog.com/app/view/4301

AFRAME.registerShader('fmacshader', {
  schema: {
    color: {type: 'color', is: 'uniform'},
    time: {type: 'time', is: 'uniform'}
  },

  vertexShader: `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,
  fragmentShader: `
#extension GL_OES_standard_derivatives : enable

precision highp float;
varying vec2 vUv;
uniform float time;
uniform vec2 resolution;
void main() {
    vec2 p = vUv.xy * 0.025;
    vec3 col;
    for (int j = 0; j < 3; j++) {
        p.x += ((0.05 / 2.0) * sin(2.0 * 10. * p.y + (time * 0.0002) + cos((time / (15000. * 2.0)) * 2.0)));
        p.y += ((0.02 / 2.0) * cos(2.0 * 10. * p.x + (time * 0.00015) + sin((time / (10000. * 2.0)) * 2.0)));
        p.x += ((0.05 / 3.0) * sin(3.0 * 10. * p.y + (time * 0.0002) + cos((time / (15000. * 3.0)) * 3.0)));
        p.y += ((0.02 / 3.0) * cos(3.0 * 10. * p.x + (time * 0.00015) + sin((time / (10000. * 3.0)) * 3.0)));
        p.x += ((0.05 / 4.0) * sin(4.0 * 10. * p.y + (time * 0.0002) + cos((time / (15000. * 4.0)) * 4.0)));
        p.y += ((0.02 / 4.0) * cos(4.0 * 10. * p.x + (time * 0.00015) + sin((time / (10000. * 4.0)) * 4.0)));
        p.x += ((0.05 / 5.0) * sin(5.0 * 10. * p.y + (time * 0.0002) + cos((time / (15000. * 5.0)) * 5.0)));
        p.y += ((0.02 / 5.0) * cos(5.0 * 10. * p.x + (time * 0.00015) + sin((time / (10000. * 5.0)) * 5.0)));
        p.x += ((0.05 / 6.0) * sin(6.0 * 10. * p.y + (time * 0.0002) + cos((time / (15000. * 6.0)) * 6.0)));
        p.y += ((0.02 / 6.0) * cos(6.0 * 10. * p.x + (time * 0.00015) + sin((time / (10000. * 6.0)) * 6.0)));
        p.x += ((0.05 / 7.0) * sin(7.0 * 10. * p.y + (time * 0.0002) + cos((time / (15000. * 7.0)) * 7.0)));
        p.y += ((0.02 / 7.0) * cos(7.0 * 10. * p.x + (time * 0.00015) + sin((time / (10000. * 7.0)) * 7.0)));
        p.x += ((0.05 / 8.0) * sin(8.0 * 10. * p.y + (time * 0.0002) + cos((time / (15000. * 8.0)) * 8.0)));
        p.y += ((0.02 / 8.0) * cos(8.0 * 10. * p.x + (time * 0.00015) + sin((time / (10000. * 8.0)) * 8.0)));
        p.x += ((0.05 / 9.0) * sin(9.0 * 10. * p.y + (time * 0.0002) + cos((time / (15000. * 9.0)) * 9.0)));
        p.y += ((0.02 / 9.0) * cos(9.0 * 10. * p.x + (time * 0.00015) + sin((time / (10000. * 9.0)) * 9.0)));
        p.x += ((0.05 / 10.0) * sin(10.0 * 10. * p.y + (time * 0.0002) + cos((time / (15000. * 10.0)) * 10.0)));
        p.y += ((0.02 / 10.0) * cos(10.0 * 10. * p.x + (time * 0.00015) + sin((time / (10000. * 10.0)) * 10.0)));
        p.x += ((0.05 / 11.0) * sin(11.0 * 10. * p.y + (time * 0.0002) + cos((time / (15000. * 11.0)) * 11.0)));
        p.y += ((0.02 / 11.0) * cos(11.0 * 10. * p.x + (time * 0.00015) + sin((time / (10000. * 11.0)) * 11.0)));
        p.x += ((0.05 / 12.0) * sin(12.0 * 10. * p.y + (time * 0.0002) + cos((time / (15000. * 12.0)) * 12.0)));
        p.y += ((0.02 / 12.0) * cos(12.0 * 10. * p.x + (time * 0.00015) + sin((time / (10000. * 12.0)) * 12.0)));
        p.x += ((0.05 / 13.0) * sin(13.0 * 10. * p.y + (time * 0.0002) + cos((time / (15000. * 13.0)) * 13.0)));
        p.y += ((0.02 / 13.0) * cos(13.0 * 10. * p.x + (time * 0.00015) + sin((time / (10000. * 13.0)) * 13.0)));
        p.x += ((0.05 / 14.0) * sin(14.0 * 10. * p.y + (time * 0.0002) + cos((time / (15000. * 14.0)) * 14.0)));
        p.y += ((0.02 / 14.0) * cos(14.0 * 10. * p.x + (time * 0.00015) + sin((time / (10000. * 14.0)) * 14.0)));
        p.x += ((0.05 / 15.0) * sin(15.0 * 10. * p.y + (time * 0.0002) + cos((time / (15000. * 15.0)) * 15.0)));
        p.y += ((0.02 / 15.0) * cos(15.0 * 10. * p.x + (time * 0.00015) + sin((time / (10000. * 15.0)) * 15.0)));
        p.x += ((0.05 / 16.0) * sin(16.0 * 10. * p.y + (time * 0.0002) + cos((time / (15000. * 16.0)) * 16.0)));
        p.y += ((0.02 / 16.0) * cos(16.0 * 10. * p.x + (time * 0.00015) + sin((time / (10000. * 16.0)) * 16.0)));
        p.x += ((0.05 / 17.0) * sin(17.0 * 10. * p.y + (time * 0.0002) + cos((time / (15000. * 17.0)) * 17.0)));
        p.y += ((0.02 / 17.0) * cos(17.0 * 10. * p.x + (time * 0.00015) + sin((time / (10000. * 17.0)) * 17.0)));
        p.x += ((0.05 / 18.0) * sin(18.0 * 10. * p.y + (time * 0.0002) + cos((time / (15000. * 18.0)) * 18.0)));
        p.y += ((0.02 / 18.0) * cos(18.0 * 10. * p.x + (time * 0.00015) + sin((time / (10000. * 18.0)) * 18.0)));
        p.x += ((0.05 / 19.0) * sin(19.0 * 10. * p.y + (time * 0.0002) + cos((time / (15000. * 19.0)) * 19.0)));
        p.y += ((0.02 / 19.0) * cos(19.0 * 10. * p.x + (time * 0.00015) + sin((time / (10000. * 19.0)) * 19.0)));
        p.x += ((0.05 / 20.0) * sin(20.0 * 10. * p.y + (time * 0.0002) + cos((time / (15000. * 20.0)) * 20.0)));
        p.y += ((0.02 / 20.0) * cos(20.0 * 10. * p.x + (time * 0.00015) + sin((time / (10000. * 20.0)) * 20.0)));
        p.x += ((0.05 / 21.0) * sin(21.0 * 10. * p.y + (time * 0.0002) + cos((time / (15000. * 21.0)) * 21.0)));
        p.y += ((0.02 / 21.0) * cos(21.0 * 10. * p.x + (time * 0.00015) + sin((time / (10000. * 21.0)) * 21.0)));
        p.x += ((0.05 / 22.0) * sin(22.0 * 10. * p.y + (time * 0.0002) + cos((time / (15000. * 22.0)) * 22.0)));
        p.y += ((0.02 / 22.0) * cos(22.0 * 10. * p.x + (time * 0.00015) + sin((time / (10000. * 22.0)) * 22.0)));
        p.x += ((0.05 / 23.0) * sin(23.0 * 10. * p.y + (time * 0.0002) + cos((time / (15000. * 23.0)) * 23.0)));
        p.y += ((0.02 / 23.0) * cos(23.0 * 10. * p.x + (time * 0.00015) + sin((time / (10000. * 23.0)) * 23.0)));
        p.x += ((0.05 / 24.0) * sin(24.0 * 10. * p.y + (time * 0.0002) + cos((time / (15000. * 24.0)) * 24.0)));
        p.y += ((0.02 / 24.0) * cos(24.0 * 10. * p.x + (time * 0.00015) + sin((time / (10000. * 24.0)) * 24.0)));
        p.x += ((0.05 / 25.0) * sin(25.0 * 10. * p.y + (time * 0.0002) + cos((time / (15000. * 25.0)) * 25.0)));
        p.y += ((0.02 / 25.0) * cos(25.0 * 10. * p.x + (time * 0.00015) + sin((time / (10000. * 25.0)) * 25.0)));
        float c = 20. * abs(p.x + p.y);
        if (j == 0) col.x = c;
        else if (j == 1) col.y = c;
        else col.z = c;
    }
    gl_FragColor = vec4(col, 1.);
}
`
});
