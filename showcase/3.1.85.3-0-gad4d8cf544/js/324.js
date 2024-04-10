(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[324],{41375:(t,i,e)=>{"use strict";e.d(i,{i:()=>PluginConfigData});var n=e(10385),s=e(15637),a=e(67992),o=e(59279);class PluginConfigData extends a.V{constructor(){super(...arguments),this.name="available-plugin-data",this.availablePlugins=new s.v,this.lastSavedConfiguration=new n.d,this.strict=(0,o.eY)("sesStrict",null,"boolean"),this.disabled=(0,o.eY)("noPlugins",!1),this.manifestUrl=(0,o.eY)("manifestUrl")}add(t){this.availablePlugins.set(t.name,t)}}},14057:(t,i,e)=>{"use strict";e.r(i),e.d(i,{PluginConfigData:()=>n.i,default:()=>PluginConfigDataModule,getPluginMetadataUrl:()=>f,getPluginUrl:()=>d});var n=e(41375),s=e(97542),a=e(57956),o=e(3907);const r="0.0";function c(t){if(!t)return[];const i={[r]:l}["0.0"];if(!i)throw new Error(`[PluginConfigDeserializer] Data with version "${t.version}": not recognized.`);return i(t)}function l(t){return t["0.0"]}const u="0.0";function g(t){const i={[u]:h};if(!t)throw new Error("[PluginConfigSerializer] no data to serialize.");const e=i["0.0"];if(!e)throw new Error('[PluginConfigSerializer] Version "0.0" not recognized.');return e(t)}function h(t){return{[u]:t}}class ConfiguredPluginStore extends o.MU{constructor(t,i,e){super({queue:t,path:`${i}/api/v1/jsonstore/model/plugins/${e}`,batchUpdate:!0,deserialize:c,serialize:g})}}function d(t,i,e){return e+`${t}/${i}/${t}.js`}function f(t,i,e){return e+`${t}/${i}/plugin.json`}var p=e(44443);const m="unknown-app-key";class PluginConfigDataModule extends s.Y{constructor(){super(...arguments),this.name="plugin-config",this._registryLoaded=!1}get canOverrideStrict(){var t,i;return null===(i=null===(t=this._config)||void 0===t?void 0:t.pluginPolicies)||void 0===i?void 0:i.canDebug}get registryLoaded(){return this._registryLoaded}async init(t,i){if(this.queue=t.queue,this.pluginConfigData=new n.i,this._config=t,t.pluginPolicies.enabled){const e=(await i.getModuleBySymbol(a.y.API)).getApi(),n=await e.getAppKey("showcase","plugin");if(n instanceof Object){const i=n;await this.initializePluginRegistry(i,t),await this.setupConfigStore(t.baseUrl,t.modelId),this._registryLoaded=!0}}i.market.register(this,n.i,this.pluginConfigData)}saveConfig(t,i){const e=this.pluginConfigData.lastSavedConfiguration.values();this.log.debugInfo(`configuration for ${t.id} updated. ${JSON.stringify(e,void 0,2)}`),this.currentStore.update(e)}async setupConfigStore(t,i){this.currentStore=new ConfiguredPluginStore(this.queue,t,i);return this.currentStore.read().then((t=>{t||(t=[]),this.log.debugInfo(`Saved configuration data loaded for ${t.length} plugin(s). ${JSON.stringify(t,void 0,2)}`),this.pluginConfigData.lastSavedConfiguration.replace(t),this.pluginConfigData.lastSavedConfiguration.onElementChanged({onAdded:this.saveConfig.bind(this),onUpdated:this.saveConfig.bind(this)})})).catch((t=>this.log.error("Failed to load configured plugins: ",t)))}dispose(t){super.dispose(t),t.market.unregister(this,n.i),this.pluginConfigData=void 0}async initializePluginRegistry(t,i){const{manifestUrl:e,applicationKey:n}=this.getManifestUrl(t,i),s=await this.queue.get(e,{responseType:"json"}).catch((t=>(this.log.error(t),null)));if(null===s)throw new Error("Plugin manifest could not be found, please contact support.");await this.populateFromManifest(s,t,n)}getManifestUrl(t,i,e=!0){let n=t.manifestUrl,s=t.applicationKey;return this.pluginConfigData.manifestUrl&&((0,p.mM)(this.pluginConfigData.manifestUrl)||i.pluginPolicies.canDebug)&&(n=this.pluginConfigData.manifestUrl),n.match(/localhost/)&&e&&(i.pluginPolicies.canDebug||(s=m)),{manifestUrl:n,applicationKey:s}}async populateFromManifest(t,i,e){for(const n of t.filter((t=>{var i;return!(null===(i=t.versions[t.currentVersion].requiredPolicies)||void 0===i?void 0:i.length)}))){const t=n.meta||f(n.name,n.currentVersion,i.baseUrl),s=await this.queue.get(t,{responseType:"json"}).catch((t=>(this.log.error(t),null)));null!==s&&this.pluginConfigData.add({name:n.name,version:n.currentVersion,config:s.config||{},applicationKey:n.applicationKey||e||m,src:n.src||d(n.name,n.currentVersion,i.baseUrl),meta:t,enabled:!1,strict:this.canOverrideStrict&&null!==this.pluginConfigData.strict?this.pluginConfigData.strict:n.sesStrict})}}async getConfiguredPlugins(){const t=await this.currentStore.read()||[],i=[];return t.forEach((t=>{if(t.enabled){const e=this.pluginConfigData.availablePlugins.get(t.id);let n=!(e&&(!e||void 0!==e.strict))||e.strict;e||this.log.warn(`"${t.id}" plugin not found in current plugin manifest -- was it configured with a different one?`);const s={config:t.config||{},src:t.src||e.src,meta:t.meta||e.meta,id:t.id||e.name,strict:n,applicationKey:(null==e?void 0:e.applicationKey)||"FAKE_APP_KEY"};i.push(s)}})),i}}},3907:(t,i,e)=>{"use strict";e.d(i,{MU:()=>JsonStoreStore});var n,s=e(39880),a=e(44584);!function(t){t.GET="GET",t.POST="POST",t.PATCH="PATCH",t.PUT="PUT",t.DELETE="DELETE",t.OPTIONS="OPTIONS"}(n||(n={}));class ReadOnlyStore extends class Auth{constructor(){this._options={responseType:"json"}}get options(){const t=this._options;return t.headers=(0,a.m)(this.url,this._options.headers||{}),t}}{constructor(t){super(),this.config=t,this.url=t.path}async read(){const{deserialize:t}=this.config;let i=null;return this.config.cachedData&&this.config.cachedData.data?i=this.config.cachedData.data:(i=await this.config.queue.get(this.config.path,this.options),this.config.cachedData&&(this.config.cachedData.data=i)),t(i)}clearCache(){this.config.cachedData&&(this.config.cachedData.data=null)}}class JsonStoreStore extends ReadOnlyStore{constructor(t){super(t),this.config=t,this.acceptsPartial=!1,this.config.batchUpdate="batchUpdate"in this.config&&this.config.batchUpdate}async create(t){throw Error("Not implemented")}updateBatch(t,i){const{serialize:e}=this.config,s=[],a=[...new Set([...Object.keys(t),...Object.keys(i)])];for(const e of a){t[e]||i[e]||s.push(this.config.queue.delete(`${this.config.path}/${e}`,this.options))}const o=e(t,i),r=Object.assign(Object.assign({},this.options),{body:o});return s.push(this.config.queue.request(this.config.httpMethod||n.POST,this.config.path,r)),Promise.all(s)}updateInternal(t,i){const{serialize:e}=this.config,a=[],o=Object.assign({},this.options),r=Object.keys(t),c=Object.keys(i),l=(0,s.XN)(r.concat(c));for(const s in l){const r=l[s],c=t[r]||i[r];if(c){const t={};t[r]=c;const s={},l=i[r];l&&(s[r]=l);const u=e(t,s);o.body=u,a.push(this.config.queue.request(this.config.httpMethod||n.POST,this.config.path,o))}else a.push(this.config.queue.delete(`${this.config.path}/${r}`,this.options))}return Promise.all(a)}async update(t,i){this.clearCache(),await(this.config.batchUpdate?this.updateBatch(t,i||{}):this.updateInternal(t,i||{}))}async delete(t){throw Error("Not implemented")}}}}]);