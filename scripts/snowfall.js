!function(){var n=[],t=0;function o(n,t){return Math.floor(Math.random()*(t-n+1))+n}function e(){var o,e=n.length;for(t+=.01,o=0;o<e;o++)i(n[o])}function i(n){var e,i,r=n.style,d=window.innerHeight;e=parseInt(r.border,10),i=parseInt(r.top,10),(i+=Math.cos(t)+1+e/2)>d?function(n){var t=n.style;t.top="0px",t.left=o(0,window.innerWidth)+"px"}(n):r.top=i+"px"}!function(){var t,i,r,d;for(i=0;i<100;i++)t=n[i]=(r=void 0,d=void 0,r=document.createElement("div"),(d=r.style).borderRadius="100%",d.border=o(1,4)+"px solid white",d.position="fixed",d.zIndex="999999",d.boxShadow="0 0 2px rgba(255,255,255,0.8)",d.top=o(0,window.innerHeight)+"px",d.left=o(0,window.innerWidth)+"px",r),document.body.appendChild(t);setInterval(e,33)}()}();