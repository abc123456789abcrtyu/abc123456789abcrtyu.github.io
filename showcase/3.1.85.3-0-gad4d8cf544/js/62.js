(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[62],{98062:(i,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>Plugin});var n=e(57956),s=e(22819),a=e(97542),o=e(73339);class Plugin extends a.Y{constructor(){super(...arguments),this.name="plugin",this.data=new o.e}async init(i,t){[this.ses,this.sdk,this.pluginConfigDataModule]=await Promise.all([t.getModuleBySymbol(n.y.SES),t.getModuleBySymbol(n.y.SDK),t.getModuleBySymbol(n.y.PLUGIN_CONFIG_DATA_MODULE)]),i.pluginPolicies.enabled&&await this.loadConfigured(),t.market.register(this,o.e,this.data)}async loadConfigured(){if(this.pluginConfigDataModule.registryLoaded){const i=await this.pluginConfigDataModule.getConfiguredPlugins();if(this.log.debug("Combined configuration with registry data, loading plugins: "+JSON.stringify(i,void 0,2)),this.pluginConfigDataModule.pluginConfigData.disabled)return void this.log.debug("Cannot load plugins! Disabled by URL parameter.");for(const t of i)this.load(t)}}async fetchPlugin(i,t,e,n){n&&this.ses.freezeForStrict();const s=await this.ses.makeSecureEnvironment(i+""+(e?"-"+e:""),t,n);if(s){return[s,s.compartment.globalThis.plugin]}return null}unload(i){const t=i.id&&""!==i.id?i.id:"default",e={applicationKey:i.applicationKey,id:t},n=this.data.get(e);if(n){try{n.dispose()}catch(i){this.log.warn("An error occurred when disposing a plugin, it may be in a partially disposed state",i)}this.data.delete(e)}}async load(i){const{applicationKey:t,src:e,id:n,strict:s}=i,a=void 0===s||s,o=n||"default",l={applicationKey:t,id:o};if(this.data.get(l))return Promise.reject(`Plugin for ${t}-${o} already loaded.`);const[d,r]=await this.fetchPlugin(t,e,o,a)||[];d&&r&&this.initPlugin(d,r.factory,i)}async initPlugin(i,t,e){const n=t(),{applicationKey:a,id:o,config:l}=e;let d=()=>{};const r=n.onInit||n.init;if(r){class PluginConnector{constructor(i){this.sdk=i}connect(){return this.sdk.connectPlugin(a)}cancelConnecting(){}}class BundleMessengerFactoryFetcher{getFactory(i){return i.messengerFactory}}const i=await s.tK.connect(new PluginConnector(this.sdk),new BundleMessengerFactoryFetcher,window);r.call(n,i,l),d=()=>i.disconnect()}const c={applicationKey:a,id:o};this.data.set(c,n,(()=>{const t=n.onDestroy||n.dispose;null==t||t.call(n),d(),i.dispose()}))}dispose(){for(const[i,t]of this.data.plugins.entries())t.dispose();this.data.plugins.clear()}}}}]);