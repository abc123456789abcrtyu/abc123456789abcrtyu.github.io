(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[933],{58933:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>ZoomControls});var i=t(97542),a=t(57956),s=t(12250),n=t(11442),m=t(89553),h=t(32597),r=t(6667),d=t(25985),l=t(18596),c=t(23254),u=t(53954),g=t(49827),p=t(69505),w=t(31546),y=t(6739),b=t(33585),Z=t(61948),z=t(76609);class ZoomControls extends i.Y{constructor(){super(...arguments),this.name="zoom-controls",this.uhQuality={},this.config={enabled:!0,tiles:!0}}async init(e,o){if(this.config.enabled=!!e.enabled,this.config.tiles=!!e.tiles,this.config.tiles)try{this.sweepTilingModule=await o.getModuleBySymbol(a.y.SWEEP_PANO)}catch(e){this.log.debug(`Tiling not enabled for zoom controls - ${e}`)}this.config.enabled&&await this.registerControls(o),this.engine=o,this.cameraModule=await o.getModuleBySymbol(a.y.CAMERA),this.cameraData=await o.market.waitForData(d.M),this.viewmodeData=await o.market.waitForData(c.O),this.sweepData=await o.market.waitForData(u.Z),this.bindings.push(o.commandBinder.addBinding(b.bj,(async e=>this.zoomBy(e.step))),o.commandBinder.addBinding(b.KB,(async e=>this.zoomBy(-e.step))),o.commandBinder.addBinding(b.ob,(async()=>this.zoomTo(1))),o.commandBinder.addBinding(b.ts,(async e=>this.zoomTo(e.value))),o.commandBinder.addBinding(b._N,this.getMaxZoomAvailable.bind(this)))}async registerControls(e){e.getModuleBySymbol(a.y.INPUT).then((e=>{this.bindings.push(e.registerHandler(s.a,(e=>this.zoomByInput(this.scrollToZoomDelta(e))))),this.bindings.push(e.registerHandler(n.G,(e=>this.zoomByInput(this.pinchToZoomDelta(e))))),this.bindings.push(e.registerHandler(m.e,(e=>this.keyHandler(e))))}))}zoomTo(e){const o=this.cameraData.zoom();if(!this.validateViewmode())return o;const t=this.sweepData.currentSweepObject;if(this.config.tiles&&t&&this.checkTilingZoomLevels(e,t),(e=(0,g.uZ)(e,y.X.minZoom,y.X.maxHighResZoom))!==o){const o=(0,p.ZY)(this.cameraData.baseFovY/e),t=l.oR.near,i=l.oR.far;this.cameraModule.updateCameraProjection((new w.M).makePerspectiveFov(o,this.cameraData.aspect(),t,i))}return this.engine.broadcast(new Z.Z(e)),e}checkTilingZoomLevels(e,o){e>=y.X.highResThreshold&&this.zoomedSweep!==o?(this.zoomedSweep=o,this.sweepTilingModule.enableZooming(!0,o).then((e=>{e?this.uhQuality[o.id]=!0:(this.uhQuality[o.id]=!1,this.zoomedSweep=void 0)}))):e<y.X.highResThreshold&&this.zoomedSweep&&this.zoomedSweep===o&&(this.sweepTilingModule.enableZooming(!1,this.zoomedSweep),this.zoomedSweep=void 0)}getMaxZoom(e){return this.uhQuality[null!=e?e:"none"]?y.X.maxHighResZoom:y.X.maxZoom}zoomBy(e){const o=this.cameraData.zoom();return this.validateViewmode()?this.zoomTo(o+e):o}validateViewmode(){return this.viewmodeData.isInside()&&this.cameraData.canTransition()}scrollToZoomDelta(e){return-Math.sign(e.delta.y)*y.X.zoomStep}pinchToZoomDelta(e){return e.pinchDelta*(y.X.maxZoom-y.X.minZoom)}zoomByInput(e){const o=this.cameraData.zoom();if(!this.validateViewmode())return o;const t=this.sweepData.currentSweep,i=(0,g.uZ)(o+e,y.X.minZoom,this.getMaxZoom(t));return this.zoomTo(i)}keyHandler(e){if(e.state===r.M.DOWN)switch(e.key){case h.R.PLUSEQUALS:this.zoomByInput(y.X.zoomStep);break;case h.R.DASHUNDERSCORE:this.zoomByInput(-y.X.zoomStep);break;case h.R.OPENBRACKET:this.zoomTo(1)}}async getMaxZoomAvailable(){if(!this.sweepData.currentSweepObject)return y.X.maxZoom;const e=this.sweepData.currentSweepObject;return await this.sweepTilingModule.availableResolution(e,z.SL.ULTRAHIGH)>=z.SL.ULTRAHIGH?y.X.maxHighResZoom:y.X.maxZoom}}},6739:(e,o,t)=>{"use strict";t.d(o,{X:()=>i});const i={zoomStep:.1,minZoom:.7,maxZoom:2,maxHighResZoom:3,highResThreshold:1.1}}}]);