AFRAME.registerShader('shaderglsl', {
  schema: {
    color: {type: 'color', is: 'uniform'},
    timeMsec: {type: 'time', is: 'uniform'}
  },

  vertexShader: `
precision highp float;
uniform float time;
uniform vec2 resolution;
varying vec3 fPosition;
varying vec3 fNormal;

#ifdef GL_ES
precision mediump float;
#endif



void main() {
    vec2 p = gl_FragCoord.xy / resolution.x * .05;
    vec3 col;
    for(float j = 0.0; j < 3.0; j++){
        for(float i = 1.; i < 25.0; i++){
            p.x += (.5*(0.05 / (i + j) * sin(i * 10. * p.y + (time*0.2) + cos((time / (150. * i)) * i + j))));
            p.y += (1.5*(0.02 / (i + j)* cos(i * 10. * p.x + (time*0.15) + sin((time / (100. * i)) * i + j))));
        }
  
	for(float k = 2.; k < 20.0; k++){
		col[int(j)] = k*(abs(p.x + p.y));
	}
    }
    gl_FragColor = vec4(col, 1.);
}
`
});
