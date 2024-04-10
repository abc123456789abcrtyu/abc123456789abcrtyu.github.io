(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[718],{15730:(t,e,a)=>{"use strict";a.r(e),a.d(e,{ArrayBufferDataStream:()=>r,BlobBuffer:()=>n,WebMWriter:()=>o});a(48764).Buffer;function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r=function(t){this.data=new Uint8Array(t),this.pos=0};r.prototype.seek=function(t){this.pos=t},r.prototype.writeBytes=function(t){for(var e=0;e<t.length;e++)this.data[this.pos++]=t[e]},r.prototype.writeByte=function(t){this.data[this.pos++]=t},r.prototype.writeU8=r.prototype.writeByte,r.prototype.writeU16BE=function(t){this.data[this.pos++]=t>>8,this.data[this.pos++]=t},r.prototype.writeDoubleBE=function(t){for(var e=new Uint8Array(new Float64Array([t]).buffer),a=e.length-1;a>=0;a--)this.writeByte(e[a])},r.prototype.writeFloatBE=function(t){for(var e=new Uint8Array(new Float32Array([t]).buffer),a=e.length-1;a>=0;a--)this.writeByte(e[a])},r.prototype.writeString=function(t){for(var e=0;e<t.length;e++)this.data[this.pos++]=t.charCodeAt(e)},r.prototype.writeEBMLVarIntWidth=function(t,e){switch(e){case 1:this.writeU8(128|t);break;case 2:this.writeU8(64|t>>8),this.writeU8(t);break;case 3:this.writeU8(32|t>>16),this.writeU8(t>>8),this.writeU8(t);break;case 4:this.writeU8(16|t>>24),this.writeU8(t>>16),this.writeU8(t>>8),this.writeU8(t);break;case 5:this.writeU8(8|t/4294967296&7),this.writeU8(t>>24),this.writeU8(t>>16),this.writeU8(t>>8),this.writeU8(t);break;default:throw new RuntimeException("Bad EBML VINT size "+e)}},r.prototype.measureEBMLVarInt=function(t){if(t<127)return 1;if(t<16383)return 2;if(t<2097151)return 3;if(t<268435455)return 4;if(t<34359738367)return 5;throw new RuntimeException("EBML VINT size not supported "+t)},r.prototype.writeEBMLVarInt=function(t){this.writeEBMLVarIntWidth(t,this.measureEBMLVarInt(t))},r.prototype.writeUnsignedIntBE=function(t,e){switch(void 0===e&&(e=this.measureUnsignedInt(t)),e){case 5:this.writeU8(Math.floor(t/4294967296));case 4:this.writeU8(t>>24);case 3:this.writeU8(t>>16);case 2:this.writeU8(t>>8);case 1:this.writeU8(t);break;default:throw new RuntimeException("Bad UINT size "+e)}},r.prototype.measureUnsignedInt=function(t){return t<256?1:t<65536?2:t<1<<24?3:t<4294967296?4:5},r.prototype.getAsDataArray=function(){if(this.pos<this.data.byteLength)return this.data.subarray(0,this.pos);if(this.pos==this.data.byteLength)return this.data;throw"ArrayBufferDataStream's pos lies beyond end of buffer"};var n=function(){var t=[],e=Promise.resolve();function a(t){return new Promise((function(e,a){var i=new FileReader;i.addEventListener("loadend",(function(){e(i.result)})),i.readAsArrayBuffer(t)}))}function i(t){return new Promise((function(e,i){t instanceof Uint8Array?e(t):t instanceof ArrayBuffer||ArrayBuffer.isView(t)?e(new Uint8Array(t)):t instanceof Blob?e(a(t).then((function(t){return new Uint8Array(t)}))):e(a(new Blob([t])).then((function(t){return new Uint8Array(t)})))}))}function r(t){var e=t.byteLength||t.length||t.size;if(!Number.isInteger(e))throw"Failed to determine size of element";return e}this.pos=0,this.length=0,this.seek=function(t){if(t<0)throw"Offset may not be negative";if(isNaN(t))throw"Offset may not be NaN";if(t>this.length)throw"Seeking beyond the end of file is not allowed";this.pos=t},this.write=function(a){var n={offset:this.pos,data:a,length:r(a)},o=n.offset>=this.length;this.pos+=n.length,this.length=Math.max(this.length,this.pos),e=e.then((function(){if(!o)for(var e=0;e<t.length;e++){var a=t[e];if(!(n.offset+n.length<=a.offset||n.offset>=a.offset+a.length)){if(n.offset<a.offset||n.offset+n.length>a.offset+a.length)throw new Error("Overwrite crosses blob boundaries");return n.offset==a.offset&&n.length==a.length?void(a.data=n.data):i(a.data).then((function(t){return a.data=t,i(n.data)})).then((function(t){n.data=t,a.data.set(n.data,n.offset-a.offset)}))}}t.push(n)}))},this.complete=function(a){return e=e.then((function(){for(var e=[],i=0;i<t.length;i++)e.push(t[i].data);return new Blob(e,{type:a})}))}},o=function(t){function e(t,e){var a,i="string"==typeof t&&/^data:image\/webp/.test(t)?t:t.toDataURL("image/webp",e);return!("string"!=typeof(a=i)||!a.match(/^data:image\/webp;base64,/i))&&window.atob(a.substring("data:image/webp;base64,".length))}function a(t){var e=t.indexOf("VP8 ");if(-1==e)throw"Failed to identify beginning of keyframe in WebP image";return e+="VP8 ".length+4,t.substring(e)}function o(t){this.value=t}function s(t){this.value=t}function f(t,e,a){if(Array.isArray(a))for(var r=0;r<a.length;r++)f(t,e,a[r]);else if("string"==typeof a)t.writeString(a);else if(a instanceof Uint8Array)t.writeBytes(a);else{if(!a.id)throw"Bad EBML datatype "+i(a.data);var n,d,u;if(a.offset=t.pos+e,t.writeUnsignedIntBE(a.id),Array.isArray(a.data))-1===a.size?t.writeByte(255):(n=t.pos,t.writeBytes([0,0,0,0])),d=t.pos,a.dataOffset=d+e,f(t,e,a.data),-1!==a.size&&(u=t.pos,a.size=u-d,t.seek(n),t.writeEBMLVarIntWidth(a.size,4),t.seek(u));else if("string"==typeof a.data)t.writeEBMLVarInt(a.data.length),a.dataOffset=t.pos+e,t.writeString(a.data);else if("number"==typeof a.data)a.size||(a.size=t.measureUnsignedInt(a.data)),t.writeEBMLVarInt(a.size),a.dataOffset=t.pos+e,t.writeUnsignedIntBE(a.data,a.size);else if(a.data instanceof s)t.writeEBMLVarInt(8),a.dataOffset=t.pos+e,t.writeDoubleBE(a.data.value);else if(a.data instanceof o)t.writeEBMLVarInt(4),a.dataOffset=t.pos+e,t.writeFloatBE(a.data.value);else{if(!(a.data instanceof Uint8Array))throw"Bad EBML datatype "+i(a.data);t.writeEBMLVarInt(a.data.byteLength),a.dataOffset=t.pos+e,t.writeBytes(a.data)}}}var d,u,h,w=!1,p=0,c=0,l=[],y=0,b=0,g={Cues:{id:new Uint8Array([28,83,187,107]),positionEBML:null},SegmentInfo:{id:new Uint8Array([21,73,169,102]),positionEBML:null},Tracks:{id:new Uint8Array([22,84,174,107]),positionEBML:null}},m={id:17545,data:new s(0)},B=[],U=new n(t.fileWriter||t.fd);function v(t){return t-d.dataOffset}function E(){u=function(){var t={id:21420,size:5,data:0},e={id:290298740,data:[]};for(var a in g){var i=g[a];i.positionEBML=Object.create(t),e.data.push({id:19899,data:[{id:21419,data:i.id},i.positionEBML]})}return e}();var t={id:357149030,data:[{id:2807729,data:1e6},{id:19840,data:"webm-writer-js"},{id:22337,data:"webm-writer-js"},m]},e={id:374648427,data:[{id:174,data:[{id:215,data:1},{id:29637,data:1},{id:156,data:0},{id:2274716,data:"und"},{id:134,data:"V_VP8"},{id:2459272,data:"VP8"},{id:131,data:1},{id:224,data:[{id:176,data:p},{id:186,data:c}]}]}]};d={id:408125543,size:-1,data:[u,t,e]};var a=new r(256);f(a,U.pos,[{id:440786851,data:[{id:17030,data:1},{id:17143,data:1},{id:17138,data:4},{id:17139,data:8},{id:17026,data:"webm"},{id:17031,data:2},{id:17029,data:2}]},d]),U.write(a.getAsDataArray()),g.SegmentInfo.positionEBML.data=v(t.offset),g.Tracks.positionEBML.data=v(e.offset),w=!0}function A(t){var e=new r(4);if(!(t.trackNumber>0&&t.trackNumber<127))throw"TrackNumber must be > 0 and < 127";return e.writeEBMLVarInt(t.trackNumber),e.writeU16BE(t.timecode),e.writeByte(128),{id:163,data:[e.getAsDataArray(),t.frame]}}function L(){if(0!=l.length){for(var t=0,e=0;e<l.length;e++)t+=l[e].frame.length;var a,i,n,o=new r(t+32*l.length),s=function(t){return{id:524531317,data:[{id:231,data:Math.round(t.timecode)}]}}({timecode:Math.round(y)});for(e=0;e<l.length;e++)s.data.push(A(l[e]));f(o,U.pos,s),U.write(o.getAsDataArray()),a=1,i=Math.round(y),n=s.offset,B.push({id:187,data:[{id:179,data:i},{id:183,data:[{id:247,data:a},{id:241,data:v(n)}]}]}),l=[],y+=b,b=0}}this.addFrame=function(i,r){w||(p=i.width||0,c=i.height||0,E());var n,o=e(i,t.quality);if(!o)throw"Couldn't decode WebP frame, does the browser support WebP?";(n={frame:a(o),duration:void 0===r?t.frameDuration:r}).trackNumber=1,n.timecode=Math.round(b),l.push(n),(b+=n.duration)>=5e3&&L()},this.complete=function(){var t,e,a,i;return w||E(),L(),t={id:475249515,data:B},f(e=new r(16+32*B.length),U.pos,t),U.write(e.getAsDataArray()),g.Cues.positionEBML.data=v(t.offset),a=new r(u.size),i=U.pos,f(a,u.dataOffset,u.data),U.seek(u.dataOffset),U.write(a.getAsDataArray()),U.seek(i),function(){var t=new r(8),e=U.pos;t.writeDoubleBE(y),U.seek(m.dataOffset),U.write(t.getAsDataArray()),U.seek(e)}(),U.complete("video/webm")},this.getWrittenSize=function(){return U.length},h={},[{quality:.95,fileWriter:null,fd:null,frameDuration:null,frameRate:null},t||{}].forEach((function(t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(h[e]=t[e])})),t=h,function(){if(!t.frameDuration){if(!t.frameRate)throw"Missing required frameDuration or frameRate setting";t.frameDuration=1e3/t.frameRate}}()}},20477:t=>{"use strict";t.exports=function(t,e,a,i){var r=self||window;try{try{var n;try{n=new r.Blob([t])}catch(e){(n=new(r.BlobBuilder||r.WebKitBlobBuilder||r.MozBlobBuilder||r.MSBlobBuilder)).append(t),n=n.getBlob()}var o=r.URL||r.webkitURL,s=o.createObjectURL(n),f=new r[e](s,a);return o.revokeObjectURL(s),f}catch(i){return new r[e]("data:application/javascript,".concat(encodeURIComponent(t)),a)}}catch(t){if(!i)throw Error("Inline worker is not supported");return new r[e](i,a)}}}}]);