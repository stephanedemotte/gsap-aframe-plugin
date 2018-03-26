var _gsScope = (typeof module !== "undefined" && module.exports && typeof global !== "undefined") ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {

  "use strict";

var AframePlugin = _gsScope._gsDefine.plugin({
    propName: 'aframe',
    priority: 0,
    API: 2,
    global: true,
    version: "1.0.0",
    // overwriteProps: ["alpha", "x", "y", "z", "scaleX", "scaleY", "scaleZ", "rotationX", "rotationY", "rotationZ"],
    init: function(target, values, tween) {
      const domEl = target
      target = target.object3D


      this._domEl = domEl
      this._modifiedValues = values

      for(const property in values) {
        let value = values[property]

        if(typeof value == 'function')
          value = value()

        if(['scale', 'scaleX', 'scaleY', 'scaleZ'].indexOf(property) !== -1 && value === 0)
          value = .0001

        switch (property) {
          case 'alpha':
            domEl.object3DMap.mesh.material.transparent = true
            this._addTween(domEl.object3DMap.mesh.material, "opacity", domEl.object3DMap.mesh.material.opacity, value, property)
            break
          case 'color':
            let matColor = domEl.object3DMap.mesh.material.color
            let color = new THREE.Color(value)
            this._addTween(matColor, "r", matColor.r, color.r, "colorR")
            this._addTween(matColor, "g", matColor.g, color.g, "colorG")
            this._addTween(matColor, "b", matColor.b, color.b, "colorB")
            this._overwriteProps.push("colorR", "colorG", "colorB")
            break
          case 'x':
            this._addTween(target.position, "x", target.position.x, value, property)
            break
          case 'y':
            this._addTween(target.position, "y", target.position.y, value, property)
            break
          case 'z':
            this._addTween(target.position, "z", target.position.z, value, property)
            break
          case 'scale':
            this._addTween(target.scale, "x", target.scale.x, value, "scaleX")
            this._addTween(target.scale, "y", target.scale.y, value, "scaleY")
            this._addTween(target.scale, "z", target.scale.z, value, "scaleZ")
            this._overwriteProps.push("scaleX", "scaleY", "scaleZ")
            break
          case 'scaleX':
            this._addTween(target.scale, "x", target.scale.x, value, property)
            break
          case 'scaleY':
            this._addTween(target.scale, "y", target.scale.y, value, property)
            break
          case 'scaleZ':
            this._addTween(target.scale, "z", target.scale.z, value, property)
            break
          case 'rotation':
            this._addTween(target.rotation, "x", target.rotation.x, THREE.Math.degToRad(value), "rotationX")
            this._addTween(target.rotation, "y", target.rotation.y, THREE.Math.degToRad(value), "rotationY")
            this._addTween(target.rotation, "z", target.rotation.z, THREE.Math.degToRad(value), "rotationZ")
            this._overwriteProps.push("rotationX", "rotationY", "rotationZ")
            break
          case 'rotationX':
            this._addTween(target.rotation, "x", target.rotation.x, THREE.Math.degToRad(value), property)
            break
          case 'rotationY':
            this._addTween(target.rotation, "y", target.rotation.y, THREE.Math.degToRad(value), property)
            break
          case 'rotationZ':
            this._addTween(target.rotation, "z", target.rotation.z, THREE.Math.degToRad(value), property)
            break
          default:
            console.warn('Property "' + property + '" is not supported by the Aframe Plugin')
        }

        if(property != 'scale' && property != 'rotation' && property != 'color')
          this._overwriteProps.push(property)
      }
      return true
    },

    // set: function(v) {
    //   this._super.setRatio.call(this, v);
    //   if(v !== 1) return

    //   for(const property in this._modifiedValues) {
    //     let value = this._modifiedValues[property]

    //     if(property == 'alpha')
    //       this._domEl.setAttribute('material', 'opacity', value);
    //   }
    // }

  })
}); if (_gsScope._gsDefine) { _gsScope._gsQueue.pop()(); }


//export to AMD/RequireJS and CommonJS/Node (precursor to full modular build system coming at a later date)
(function(name) {
	"use strict";
	var getGlobal = function() {
		return (_gsScope.GreenSockGlobals || _gsScope)[name];
	};
	if (typeof(module) !== "undefined" && module.exports) { //node
		require("gsap/TweenLite.js");
		module.exports = getGlobal();
	} else if (typeof(define) === "function" && define.amd) { //AMD
		define(["gsap/TweenLite"], getGlobal);
	}
}("PixiPlugin"));