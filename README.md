# gsap-aframe-plugin
Based on GSAP PIXI Plugin https://github.com/noprotocol/gsap-pixi-plugin

```
// html
<a-plane class="element" opacity="0" color="red" width="1" height="1" />
<a-entity class="element" opacity="1" color="black" width="1" height="1" position="2 0 2" />
```

```
// js
import 'AframePlugin'

const els = document.querySeletor('.element')

el.addEventListener('materialtextureloaded', () => {
  TweenLite.to(els, 1, {
    aframe: {
      alpha: 0, // material must be loaded
      color: '#fff' // use (new THREE.Color(color))

      x: 10, // translate
      y: 10,
      z: 10,

      rotation: 90, // rotate X,Y,Z in deg
      rotationX: 10,
      rotationY: 10,
      rotationZ: 10,

      scale: 0, // if 0 -> .0001
      scaleX: 10,
      scaleY: 10,
      scaleZ: 10,
    },

    ease: Expo.easeOut,
    onComplete: () => {},
    ... blah blah
  })
})
```


