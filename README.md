# gsap-pixi-plugin
Based on https://github.com/noprotocol/gsap-pixi-plugin

```
import 'AframePlugin'

const el = document.querySeletor('.elements')

el.addEventListener('materialtextureloaded', () => {
  TweenLite.to(el, 1, {
    alpha: 0, // material must be loaded
    color: '#fff' // use (new THREE.Color(color))

    x: 10, // translate
    y: 10,
    z: 10,

    rotation: 90, // rotate X,Y,Z
    rotationX: 10,
    rotationY: 10,
    rotationZ: 10,

    scale: 0, // if 0 -> .0001
    scaleX: 10,
    scaleY: 10,
    scaleZ: 10,
  })
})
```


