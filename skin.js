// Garden Gnome Software - Skin
// Pano2VR 6.1.2/17873
// Filename: Googleskin.ggsk
// Generated 2022-06-28T09:29:30

function pano2vrSkin(player,base) {
	player.addVariable('opt_3d_preview', 2, true);
	player.addVariable('opt_3d_preview_1', 2, true);
	player.addVariable('UA_ID', 0, "UA-184152566-19");
	player.addVariable('UA_category', 0, "virtual tour");
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAxMDI2IDM5NSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB5PSIwcHgiIHZlcnNpb249IjEuMSIgaWQ9IkNhbWFkYV8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMC'+
			'AxMDI2IDM5NTsiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiMyNTRCNzI7fSYjeGQ7Cgkuc3Qxe2ZpbGw6IzVENUQ1RDt9JiN4ZDsKCS5zdDJ7ZmlsbDojMDA5NURCO30mI3hkOwoJLnN0M3tmaWxsOiMxMDcyQTI7fSYjeGQ7Cgkuc3Q0e2ZpbGw6IzAwQ0RDNDt9JiN4ZDsKCS5zdDV7ZmlsbDojQjJGMzU2O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHBhdGggZD0iTTczNy42LDE2OWgtODAuNWgtMjUuOGMtMTEuNSwwLTIxLDkuMi0yMS4xLDIwLjdjLTAuMywyNC44LDE4LjgsNDUsNDMsNDcuM2gzMy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjNS43LDAsMTAuMyw0LjYs'+
			'MTAuMywxMC4zdjMwLjZjMCwxMS4xLTksMjAuMi0yMC4yLDIwLjJINjI5Yy0yMy40LTEuMS00My43LTExLjgtNjItMzAuNGMtMTkuNi0xOS43LTI5LjQtNDMuNi0yOS40LTcxLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTI4LjQsOS42LTUxLjMsMjguOC02OC43YzE5LjItMTcuNCw0MS4yLTI2LjIsNjYtMjYuMmMxOC45LDAsMjcuMywwLjQsMzMuMSwwYzI2LjEtMS43LDU1LjYtMTAuOCw1Ni4xLTUwLjZjMC0xLDAtOC42LDAtMTYuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMTAuOS04LjktMTkuOC0xOS44LTE5LjhjMCwwLTg5LjgtMC42LTEwOS40LDUuMmMtMzEuNSw5LjMtNjAuOSwyMy04Ni41LD'+
			'Q3LjNjLTM2LjUsMzQuNy01NC44LDc3LjUtNTQuOCwxMjguNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsNTIuOCwxNy45LDk3LjYsNTMuOCwxMzQuMmMzNS45LDM2LjcsNzgsNTUsMTI2LjYsNTVjMzUuOSwwLDY2LjgtNi41LDkyLjktMTkuNmMxMS4xLTUuOSwxOS41LTEzLjUsMjguNi0yMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzkuMS05LjUsMTItMTkuNCwxMi0yOS44VjIzMHYtMTVWMTk1Qzc2NC4xLDE4MC4zLDc1Mi41LDE2OSw3MzcuNiwxNjl6IiBjbGFzcz0ic3QwIiBpZD0iWE1MSURfNTcwXyIvPgogIDxnIGlkPSJYTUxJRF81MzlfIj4KICAgPHBhdGggZD0iTTExMi4yLDIwOS4zbC0zMi4yLTQx'+
			'Yy0zLjQtNC42LTYuNy04LjUtMTAtMTEuOGMtMTcuNy0xNy42LTQ4LTUtNDgsMjAuMXYxODIuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCw4LjQsOC43LDEzLjIsMTYuNywxMy4yaDUuMmg1My42aDIuOGM1LDAsOS0xLjYsMTEuNy01LjNjMCwwLDAuNS0wLjcsMC41LTAuN2MxLjEtMiwxLjYtNC42LDEuNi03LjJWMjE4YzAtMi45LTAuNC01LjgtMS45LTguMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMTEyLDIwOS42LDExMi4zLDIwOS41LDExMi4yLDIwOS4zeiBNMTEyLDM2Ni4zTDExMiwzNjYuM0MxMTIsMzY2LjMsMTEyLDM2Ni4zLDExMiwzNjYuM0MxMTIsMzY2LjMsMTEyLDM2Ni4zLD'+
			'ExMiwzNjYuM3oiIGNsYXNzPSJzdDAiIGlkPSJYTUxJRF81NjdfIi8+CiAgIDxwYXRoIGQ9Ik0zNTQuOSwxNjguM2wtMzEuNyw0MWMtMC4xLDAuMi0wLjMsMC40LTAuNCwwLjZjLTEuNSwyLjQtMi44LDUuMy0yLjgsOC4ydjE0MC44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDMuMSwxLjMsNC44LDIuOCw3LjFjMCwwLDAuNCwwLjQsMC40LDAuNGMyLjYsMy44LDcuMiw1LjcsMTIuMyw1LjdoMi44SDM5Mmg1LjJjOC4xLDAsMTQuOS00LjgsMTQuOS0xMy4yVjE3Ny41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLTI1LjQtMzEuMS0zNy45LTQ4LjYtMTkuNUMzNjAuNywxNjAuOSwzNTcuOCwx'+
			'NjQuNCwzNTQuOSwxNjguM3oiIGNsYXNzPSJzdDAiIGlkPSJYTUxJRF81NjVfIi8+CiAgIDxwYXRoIGQ9Ik0zOTcuNCwxNmgtMzguN2MtNS40LDAtMTAuNywxLjgtMTUsNS4yYy03LjgsNi4yLTEzLjksMTIuNi0xMy45LDEyLjZsLTQ4LjEsNjMuNWwtNTMuNSw3MC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMi43LDMuNS04LjIsNS0xMC42LDQuNmMtMi40LDAuNC03LTEuMi05LjYtNC42bC01My4xLTcwLjNMMTA3LDMzLjhjMCwwLTUuOS02LjQtMTMuNi0xMi41Qzg5LDE3LjgsODMuNywxNiw3OC4zLDE2bC0zNy42LDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzI5LjMsMTYsMjAsMjUuMy'+
			'wyMCwzNi43djUyLjhsMCwxNi41YzAsOC41LDguNCwxNC4zLDE2LjQsMTEuNmMxNC45LTUsMzMuMS0wLjUsNDMuNCwxM2wzMi4xLDQxYzAuMSwwLjIsMC41LDAuNCwwLjYsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDAsMTEuNiwxNS44LDMwLjksNDIuNGMxOS4xLDI2LjMsMzEuNyw0My42LDM4LjMsNTEuOWMwLjEsMC4yLDEwLjksMTIuMywxNi45LDE1LjdjNiwzLjQsMTEuNiw1LjEsMTguOCw1LjFjMC40LDAsMC4xLDAsMC4xLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7czAuNiwwLDEsMGM3LjIsMCwxMy42LTEuNywxOS43LTUuMWM2LjEtMy40LDE2LjgtMTUuNSwxNi45LTE1Ljdj'+
			'Ni42LTguMywxOS4yLTI1LjYsMzguMi01MS45YzE5LjMtMjYuNiwzMC44LTQyLjQsMzAuOC00Mi40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjEtMC4yLDAuMi0wLjQsMC4zLTAuNWwzMS41LTQxYzEwLjMtMTMuMywyOC4zLTE3LjksNDMuMS0xMy4xYzcuOCwyLjUsMTUuOS0zLjMsMTUuOS0xMS41Vjg5LjVWMzMuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNDE1LDIzLjksNDA3LjEsMTYsMzk3LjQsMTZ6IiBjbGFzcz0ic3QwIiBpZD0iWE1MSURfNTQxXyIvPgogIDwvZz4KICA8ZyBpZD0iWE1MSURfMTI5XyI+CiAgIDxwYXRoIGQ9Ik03OTMsMTc5aC0xNnYtMTFoNDR2MTFoLTE1djQxaC'+
			'0xM1YxNzl6IiBjbGFzcz0ic3QxIiBpZD0iWE1MSURfNTM2XyIvPgogICA8cGF0aCBkPSJNODUwLjcsMTY3LjNjMTYuMSwwLDI3LjIsMTEuNiwyNy4yLDI2LjVjMCwxNS4zLTExLjEsMjcuMi0yNy4yLDI3LjJzLTI3LjItMTEuOS0yNy4yLTI3LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzgyMy41LDE3OSw4MzQuNSwxNjcuMyw4NTAuNywxNjcuM3ogTTg1MC43LDIwOS40YzguMiwwLDE0LTYuNywxNC0xNS42YzAtOC41LTUuOC0xNC45LTE0LTE0LjljLTguMiwwLTE0LDYuNC0xNCwxNC45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M4MzYuNiwyMDIuNyw4NDIuNSwyMDkuNCw4NTAuNywyMDku'+
			'NHoiIGNsYXNzPSJzdDEiIGlkPSJYTUxJRF81MzNfIi8+CiAgIDxwYXRoIGQ9Ik04ODYsMTY4aDEydjMyLjRjMCw0LjcsMy44LDguNiw4LjUsOC44YzUuNywwLjIsOS41LTIuNyw5LjUtOC40VjE2OGgxM3YzMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDExLjctOC41LDIwLTIxLjQsMjBjLTEzLjEsMC0yMS42LTguMy0yMS42LTIwVjE2OHoiIGNsYXNzPSJzdDEiIGlkPSJYTUxJRF8xMzNfIi8+CiAgIDxwYXRoIGQ9Ik05MzksMTY4aDE4LjFjNS4zLDAsNy44LDAuNCwxMC4xLDEuMmM1LjksMi4zLDkuNiw3LjYsOS42LDE1LjFjMCw1LjUtMi42LDExLjYtNy44LDE0LjImI3hkOyYjeGE7Ji'+
			'N4OTsmI3g5OyYjeDk7di0wLjRjMCwwLDAuNywxLDEuOSwzLjJsOS45LDE4LjdoLTEzLjlsLTkuMS0xOEg5NTJ2MThoLTEzVjE2OHogTTk1Ny43LDE5MmM0LjIsMCw2LjgtMi4zLDYuOC02LjZjMC0yLjctMC43LTQuNy0zLjEtNS43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMS4yLTAuNS0yLjgtMC43LTQuOS0wLjdIOTUydjEzSDk1Ny43eiIgY2xhc3M9InN0MSIgaWQ9IlhNTElEXzEzMF8iLz4KICA8L2c+CiAgPGcgaWQ9IlhNTElEXzExOF8iPgogICA8ZyBpZD0iWE1MSURfMTIwXyI+CiAgICA8cGF0aCBkPSJNODQ5LDI3OC42YzAsMCw2LjQsNy4yLDE2LjQsNy4yYzcuNCwwLDE0LjEtNS4z'+
			'LDE0LjEtMTMuMWMwLTguMi03LjMtMTIuNy0xNS4yLTEyLjdoLTUuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2wtMS40LTMuNmwxNS4xLTE4LjFjMS41LTIsMy4xLTMuNCwzLjEtMy40di0wLjJjMCwwLTEuNywwLjMtNSwwLjNoLTE1Yy0xLjMsMC0yLDAuNi0yLDEuOXY0LjFoLTZ2LTUuNmMwLTMsMi40LTUuNCw1LjQtNS40SDg4NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O3Y0bC0xOC40LDIwLjljNy44LDAuNCwxOS4zLDQuOCwxOS4zLDE3LjhjMCwxMC4yLTguOCwxOC44LTIwLjYsMTguOGMtMTIuNCwwLTIwLTguNC0yMC04LjRMODQ5LDI3OC42eiIgY2xhc3M9InN0MSIgaW'+
			'Q9IlhNTElEXzEyN18iLz4KICAgIDxwYXRoIGQ9Ik04OTIuOSwyNjQuNmMwLTE1LjcsOC4xLTM1LjcsMjcuMi0zNS43YzYuOCwwLDExLjMsMi41LDExLjMsMi41bC0yLjMsNS40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMC0zLjktMi4yLTktMi4yYy0xMi45LDAtMTkuNSwxMi45LTIwLjcsMjUuNGgwLjJjMi45LTQuOCw5LjMtNy41LDE1LjctNy41YzExLjIsMCwxOS4yLDguMSwxOS4yLDE5LjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwxMi44LTguNiwyMC43LTE5LjQsMjAuN0M5MDEuOCwyOTIuOCw4OTIuOSwyODAuNyw4OTIuOSwyNjQuNnogTTkxNS4yLDI4Ny4x'+
			'YzguMywwLDEzLjMtNi4zLDEzLjMtMTQuOWMwLTguNi01LjUtMTQuMi0xNC0xNC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy04LjMsMC0xNC45LDUuNS0xNC45LDEwLjVDODk5LjUsMjc2LjcsOTA1LjksMjg3LjEsOTE1LjIsMjg3LjF6IiBjbGFzcz0ic3QxIiBpZD0iWE1MSURfMTI0XyIvPgogICAgPHBhdGggZD0iTTk0Mi44LDI2MC44YzAtMTcuOCw1LjItMzEuOSwyMS4zLTMxLjlzMjEuNCwxNC4xLDIxLjQsMzEuOWMwLDE3LjktNS4zLDMyLTIxLjQsMzImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtTOTQyLjgsMjc4LjcsOTQyLjgsMjYwLjh6IE05NzkuMSwyNjAuOGMwLT'+
			'E0LjctMy4zLTI2LjItMTUtMjYuMmMtMTEuNywwLTE1LDExLjUtMTUsMjYuMmMwLDE0LjgsMy4zLDI2LjMsMTUsMjYuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0M5NzUuOCwyODcuMSw5NzkuMSwyNzUuNSw5NzkuMSwyNjAuOHoiIGNsYXNzPSJzdDEiIGlkPSJYTUxJRF8xMjFfIi8+CiAgIDwvZz4KICAgPGNpcmNsZSBjeT0iMjQwLjUiIHI9IjEwLjciIGNsYXNzPSJzdDEiIGlkPSJYTUxJRF8xMTlfIiBjeD0iMTAwOS4zIi8+CiAgPC9nPgogIDxwYXRoIGQ9Ik04MTEuNSwyODcuN2MwLjEtMC4xLDAuMy0wLjIsMC40LTAuM2MwLjEtMC4yLDAuMi0wLjQsMC4zLTAuNiYjeGQ7JiN4YTsm'+
			'I3g5OyYjeDk7QzgxMiwyODcsODExLjgsMjg3LjMsODExLjUsMjg3Ljd6IiBjbGFzcz0ic3QyIiBpZD0iWE1MSURfMTE3XyIvPgogIDxwYXRoIGQ9Ik01NjAuNSwzNTEuOGMtMTMuNS0xLjgtMjYuNC01LjQtMzguNy0xMC4zYy0yLjItMC45LTMuOSwyLTIuMSwzLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MzMy40LDI3LjEsNzUuOSw0My4zLDEyMi4xLDQzLjNjMzgsMCw3My41LTEwLjgsMTAzLjUtMjkuNWMtMjUuNSwxNS01NS4yLDIzLjctODcsMjMuN0M2MjIsMzgyLjYsNTg4LjMsMzcxLjIsNTYwLjUsMzUxLjh6IiBjbGFzcz0ic3QzIiBpZD0iWE1MSURfMTE2XyIvPgogIDxwYXRoIGQ9Ik04MTIsMj'+
			'g3LjNjLTAuMSwwLjEtMC4zLDAuMi0wLjQsMC4zYy0zMS40LDQwLTgwLjEsNjUuNy0xMzQuOSw2NS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTE3LjQsMC0zNC4yLTIuNi01MC4xLTcuNWMtMTQuOSw0LjctMzAuOCw3LjItNDcuMiw3LjJjLTYuNCwwLTEyLjYtMC41LTE4LjgtMS4zYzI3LjgsMTkuMyw2MS41LDMwLjcsOTcuOSwzMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMzEuOCwwLDYxLjUtOC43LDg3LTIzLjdjMTktMTEuOCwzNS44LTI2LjgsNDkuNy00NC4yYzcuMi05LDEzLjUtMTguNywxOS0yOC45QzgxMy40LDI4Ni4yLDgxMi43LDI4Ni44LDgxMiwyODcuM3oiIGNsYXNzPSJzdDIiIGlkPSJY'+
			'TUxJRF8xMTFfIi8+CiAgPHBhdGggZD0iTTY3NC42LDMyMS4zYy0xNC4zLDEwLjctMzAuNiwxOS4xLTQ4LjEsMjQuNmMxNS45LDQuOCwzMi43LDcuNSw1MC4xLDcuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzU0LjgsMCwxMDMuNS0yNS43LDEzNC45LTY1LjdjLTI5LjEsMjIuOS02NS44LDM2LjUtMTA1LjcsMzYuNUM2OTUuMSwzMjQuMiw2ODQuNywzMjMuMiw2NzQuNiwzMjEuM3oiIGNsYXNzPSJzdDQiIGlkPSJYTUxJRF84MV8iLz4KICA8cGF0aCBkPSJNODI4LjQsMjMzLjNjLTIuMS0yLjYtNS4zLTQuMy05LTQuM2MtMjEsMC01Ny43LDAtNTcuNywwYy0xNC44LDAtMjguNCw4LjgtMzMuOCwyMi42Ji'+
			'N4ZDsmI3hhOyYjeDk7JiN4OTtjLTEwLjgsMjcuNy0yOS41LDUxLjgtNTMuMyw2OS42YzEwLjEsMS45LDIwLjUsMi45LDMxLjIsMi45YzM5LjksMCw3Ni42LTEzLjcsMTA1LjctMzYuNWMwLDAsMC40LTAuMywwLjQtMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC43LTAuNSwxLjQtMS4xLDIuMS0xLjZjMC44LTEuNiwxLjctMy4xLDIuNS00LjdjNS45LTExLjgsMTAuNi0yNC4zLDE0LTM3LjRDODMxLjUsMjM5LjgsODMwLjUsMjM2LjEsODI4LjQsMjMzLjN6IiBjbGFzcz0ic3Q1IiBpZD0iWE1MSURfNzlfIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 13px;';
		hs+='height : 34px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_1.onclick=function (e) {
			player.openUrl("https:\/\/www.mgtour360.com.br\/","_blank");
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_1);
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgLTE3MiA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI1MTJweCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIHZlcnNpb249IjEuMSI+CiA8Zz4KICA8cGF0aCBkPSJNNDk2LjA1MjQ1NSwxMDIuNjcyMDU1IEw1MTAuMjU1NzM3LDExMi4xNDA5MDkgQzUwNS42NDU5LDExOC45MzEwNzUgNDk0LjYxOTY2OCwxMzAuNT'+
			'gwMjU4IDQ3NS41NTczNjgsMTMwLjU4MDI1OCBDNDUxLjg4NTIzMSwxMzAuNTgwMjU4IDQzNC4yNTU3MTksMTEyLjI2NTUgNDM0LjI1NTcxOSw4OC45NjcxMzMgQzQzNC4yNTU3MTksNjQuMTczNjg0MSA0NTIuMDcyMTE2LDQ3LjM1NDAwNzggNDczLjU2MzkyNSw0Ny4zNTQwMDc4IEM0OTUuMTgwMzIzLDQ3LjM1NDAwNzggNTA1Ljc3MDQ5LDY0LjU0NzQ1NDYgNTA5LjE5NjcyLDczLjgyOTQyNDIgTDUxMS4wNjU1NzQsNzguNTYzODUxNiBMNDU1LjM3Mzc1NiwxMDEuNjEzMDM4IEM0NTkuNjA5ODIzLDEwOS45NjA1ODEgNDY2LjIxMzEwMywxMTQuMTk2NjQ4IDQ3NS41NTczNjgsMTE0LjE5NjY0OCBD'+
			'NDg0LjkwMTYzMywxMTQuMTk2NjQ4IDQ5MS4zODAzMjMsMTA5LjU4NjgxMSA0OTYuMDUyNDU1LDEwMi42NzIwNTUgTDQ5Ni4wNTI0NTUsMTAyLjY3MjA1NSBaIE00NTIuMzgzNTkyLDg3LjY1ODkzNTkgTDQ4OS41NzM3NjUsNzIuMjA5NzUxNyBDNDg3LjUxODAyNiw2Ny4wMzkyNTg2IDQ4MS40MTMxMDcsNjMuMzYzODQ3OCA0NzQuMTI0NTgxLDYzLjM2Mzg0NzggQzQ2NC44NDI2MTIsNjMuMzYzODQ3OCA0NTEuOTQ3NTI2LDcxLjU4NjgwMDcgNDUyLjM4MzU5Miw4Ny42NTg5MzU5IEw0NTIuMzgzNTkyLDg3LjY1ODkzNTkgWiIgZmlsbD0iI0ZGMzAyRiIvPgogIDxwYXRoIGQ9Ik00MDcuNDA2NTMxLD'+
			'QuOTMxMDQ2MzIgTDQyNS4zNDc1MTksNC45MzEwNDYzMiBMNDI1LjM0NzUxOSwxMjYuNzgwMjU3IEw0MDcuNDA2NTMxLDEyNi43ODAyNTcgTDQwNy40MDY1MzEsNC45MzEwNDYzMiBMNDA3LjQwNjUzMSw0LjkzMTA0NjMyIFoiIGZpbGw9IiMyMEIxNUEiLz4KICA8cGF0aCBkPSJNMzc5LjEyNDU1Nyw1MC41OTMzNTI4IEwzOTYuNDQyNTk0LDUwLjU5MzM1MjggTDM5Ni40NDI1OTQsMTI0LjU5OTkyOSBDMzk2LjQ0MjU5NCwxNTUuMzExNDEyIDM3OC4zMTQ3MjEsMTY3Ljk1NzMxNiAzNTYuODg1MjA3LDE2Ny45NTczMTYgQzMzNi43MDE1OTYsMTY3Ljk1NzMxNiAzMjQuNTU0MDUxLDE1NC4zNzY5ODYg'+
			'MzIwLjAwNjUxLDE0My4zNTA3NTMgTDMzNS44OTE3NTksMTM2Ljc0NzQ3MyBDMzM4Ljc1NzMzNCwxNDMuNTM3NjM5IDM0NS42NzIwOSwxNTEuNTczNzA2IDM1Ni44ODUyMDcsMTUxLjU3MzcwNiBDMzcwLjY1MjQyNCwxNTEuNTczNzA2IDM3OS4xMjQ1NTcsMTQzLjAzOTI3OCAzNzkuMTI0NTU3LDEyNy4wOTE3MzIgTDM3OS4xMjQ1NTcsMTIxLjExMTQwNCBMMzc4LjUwMTYwNiwxMjEuMTExNDA0IEMzNzQuMzkwMTMsMTI2LjA5NTAxMSAzNjYuNTQwOTQ3LDEzMC41ODAyNTggMzU2LjU3MzczMSwxMzAuNTgwMjU4IEMzMzUuNzY3MTY5LDEzMC41ODAyNTggMzE2LjcwNDg2OSwxMTIuNDUyMzg1IDMxNi'+
			'43MDQ4NjksODkuMDkxNzIzMSBDMzE2LjcwNDg2OSw2NS42MDY0NzEzIDMzNS43NjcxNjksNDcuMjkxNzEyNiAzNTYuNTczNzMxLDQ3LjI5MTcxMjYgQzM2Ni40Nzg2NTIsNDcuMjkxNzEyNiAzNzQuMzkwMTMsNTEuNzE0NjY0NiAzNzguNTAxNjA2LDU2LjU3MzY4MjIgTDM3OS4xMjQ1NTcsNTYuNTczNjgyMiBMMzc5LjEyNDU1Nyw1MC41OTMzNTI4IEwzNzkuMTI0NTU3LDUwLjU5MzM1MjggWiBNMzgwLjM3MDQ1OSw4OS4wOTE3MjMxIEMzODAuMzcwNDU5LDc0LjM5MDA4MDEgMzcwLjU5MDEyOCw2My42NzUzMjMzIDM1OC4xMzExMDksNjMuNjc1MzIzMyBDMzQ1LjU0NzQ5OSw2My42NzUzMjMzIDMz'+
			'NC45NTczMzMsNzQuMzkwMDgwMSAzMzQuOTU3MzMzLDg5LjA5MTcyMzEgQzMzNC45NTczMzMsMTAzLjYwNjQ4MSAzNDUuNTQ3NDk5LDExNC4xMzQzNTIgMzU4LjEzMTEwOSwxMTQuMTM0MzUyIEMzNzAuNTkwMTI4LDExNC4xOTY2NDggMzgwLjM3MDQ1OSwxMDMuNjA2NDgxIDM4MC4zNzA0NTksODkuMDkxNzIzMSBMMzgwLjM3MDQ1OSw4OS4wOTE3MjMxIFoiIGZpbGw9IiMzNjg2RjciLz4KICA8cGF0aCBkPSJNMjE4LjIxNjMyLDg4Ljc4MDI0NzYgQzIxOC4yMTYzMiwxMTIuNzYzODYxIDE5OS41Mjc3OTEsMTMwLjM5MzM3MyAxNzYuNjAzMTk1LDEzMC4zOTMzNzMgQzE1My42Nzg1OTksMTMwLjM5Mz'+
			'M3MyAxMzQuOTkwMDY5LDExMi43MDE1NjUgMTM0Ljk5MDA2OSw4OC43ODAyNDc2IEMxMzQuOTkwMDY5LDY0LjY3MjA0NDggMTUzLjY3ODU5OSw0Ny4xMDQ4Mjc0IDE3Ni42MDMxOTUsNDcuMTA0ODI3NCBDMTk5LjUyNzc5MSw0Ny4xMDQ4Mjc0IDIxOC4yMTYzMiw2NC42NzIwNDQ4IDIxOC4yMTYzMiw4OC43ODAyNDc2IEwyMTguMjE2MzIsODguNzgwMjQ3NiBaIE0yMDAuMDI2MTUxLDg4Ljc4MDI0NzYgQzIwMC4wMjYxNTEsNzMuODI5NDI0MiAxODkuMTg2ODA0LDYzLjU1MDczMzEgMTc2LjYwMzE5NSw2My41NTA3MzMxIEMxNjQuMDE5NTg1LDYzLjU1MDczMzEgMTUzLjE4MDIzOCw3My44Mjk0MjQy'+
			'IDE1My4xODAyMzgsODguNzgwMjQ3NiBDMTUzLjE4MDIzOCwxMDMuNjA2NDgxIDE2NC4wMTk1ODUsMTE0LjAwOTc2MyAxNzYuNjAzMTk1LDExNC4wMDk3NjMgQzE4OS4xODY4MDQsMTE0LjAwOTc2MyAyMDAuMDI2MTUxLDEwMy42MDY0ODEgMjAwLjAyNjE1MSw4OC43ODAyNDc2IEwyMDAuMDI2MTUxLDg4Ljc4MDI0NzYgWiIgZmlsbD0iI0ZGMzAyRiIvPgogIDxwYXRoIGQ9Ik0zMDkuMTA0ODY3LDg4Ljk2NzEzMyBDMzA5LjEwNDg2NywxMTIuOTUwNzQ2IDI5MC40MTYzMzgsMTMwLjU4MDI1OCAyNjcuNDkxNzQyLDEzMC41ODAyNTggQzI0NC41NjcxNDYsMTMwLjU4MDI1OCAyMjUuODc4NjE3LDExMi'+
			'45NTA3NDYgMjI1Ljg3ODYxNyw4OC45NjcxMzMgQzIyNS44Nzg2MTcsNjQuODU4OTMwMiAyNDQuNTY3MTQ2LDQ3LjM1NDAwNzggMjY3LjQ5MTc0Miw0Ny4zNTQwMDc4IEMyOTAuNDE2MzM4LDQ3LjM1NDAwNzggMzA5LjEwNDg2Nyw2NC43OTY2MzUgMzA5LjEwNDg2Nyw4OC45NjcxMzMgTDMwOS4xMDQ4NjcsODguOTY3MTMzIFogTTI5MC44NTI0MDQsODguOTY3MTMzIEMyOTAuODUyNDA0LDc0LjAxNjMwOTUgMjgwLjAxMzA1Nyw2My43Mzc2MTg0IDI2Ny40Mjk0NDcsNjMuNzM3NjE4NCBDMjU0Ljg0NTgzNyw2My43Mzc2MTg0IDI0NC4wMDY0OSw3NC4wMTYzMDk1IDI0NC4wMDY0OSw4OC45NjcxMzMg'+
			'QzI0NC4wMDY0OSwxMDMuNzkzMzY2IDI1NC44NDU4MzcsMTE0LjE5NjY0OCAyNjcuNDI5NDQ3LDExNC4xOTY2NDggQzI4MC4wNzUzNTIsMTE0LjE5NjY0OCAyOTAuODUyNDA0LDEwMy43MzEwNzEgMjkwLjg1MjQwNCw4OC45NjcxMzMgTDI5MC44NTI0MDQsODguOTY3MTMzIFoiIGZpbGw9IiNGRkJBNDAiLz4KICA8cGF0aCBkPSJNNjYuNTkwMDUyNSwxMTIuMzI3Nzk0IEM0MC40ODg0MDY2LDExMi4zMjc3OTQgMjAuMDU1NjE0Niw5MS4yNzIwNTE1IDIwLjA1NTYxNDYsNjUuMTcwNDA1NiBDMjAuMDU1NjE0NiwzOS4wNjg3NTk4IDQwLjQ4ODQwNjYsMTguMDEzMDE2OCA2Ni41OTAwNTI1LDE4LjAxMz'+
			'AxNjggQzgwLjY2ODc0NDYsMTguMDEzMDE2OCA5MC45NDc0MzU3LDIzLjU1NzI4MDUgOTguNTQ3NDM3MywzMC42NTg5MjE2IEwxMTEuMDY4NzUyLDE4LjEzNzYwNyBDMTAwLjQ3ODU4NSw3Ljk4MzUwNjEzIDg2LjMzNzU5ODQsMC4yNTg5MTM5OTcgNjYuNTkwMDUyNSwwLjI1ODkxMzk5NyBDMzAuODMyNjY2NiwwLjI1ODkxMzk5NyAwLjc0NDEzNDQwOCwyOS40MTMwMTk2IDAuNzQ0MTM0NDA4LDY1LjE3MDQwNTYgQzAuNzQ0MTM0NDA4LDEwMC45Mjc3OTIgMzAuODMyNjY2NiwxMzAuMDgxODk3IDY2LjU5MDA1MjUsMTMwLjA4MTg5NyBDODUuOTAxNTMyOCwxMzAuMDgxODk3IDEwMC40Nzg1ODUsMTIz'+
			'LjcyNzc5NyAxMTEuODc4NTg4LDExMS44OTE3MjkgQzEyMy41OTAwNjcsMTAwLjE4MDI1MSAxMjcuMjAzMTgzLDgzLjczNDM0NDcgMTI3LjIwMzE4Myw3MC40MDMxOTM5IEMxMjcuMjAzMTgzLDY2LjIyOTQyMjMgMTI2LjcwNDgyMiw2MS45MzEwNjA2IDEyNi4xNDQxNjYsNTguNzU0MDEwNiBMNjYuNTkwMDUyNSw1OC43NTQwMTA2IEw2Ni41OTAwNTI1LDc2LjA3MjA0NzcgTDEwOS4wMTMwMTQsNzYuMDcyMDQ3NyBDMTA3Ljc2NzExMiw4Ni45MTEzOTQ3IDEwNC4zNDA4ODIsOTQuMzI0NTExMyA5OS4yOTQ5Nzg1LDk5LjM3MDQxNDIgQzkzLjE5MDA1OTIsMTA1LjUzNzYyOSA4My41MzQzMTksMTEyLj'+
			'MyNzc5NCA2Ni41OTAwNTI1LDExMi4zMjc3OTQgTDY2LjU5MDA1MjUsMTEyLjMyNzc5NCBMNjYuNTkwMDUyNSwxMTIuMzI3Nzk0IFoiIGZpbGw9IiMzNjg2RjciLz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 58px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 109px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_2);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_node_changenode = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_white_lower && hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_black && hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white && hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_customimage && hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_configloaded = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_white_lower && hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_black && hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white && hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview_1 = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 71px;';
		hs+='position : absolute;';
		hs+='top : 220px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white_lower=document.createElement('div');
		els=me._chevron_white_lower__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB2ZXJzaW9uPSIxLjAiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMC'+
			'AxMDAwIDEwMDA7Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEmI3hhOyYjeDk7JiN4OTtjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAmI3hhOyYjeDk7JiN4OTtTMS43LDQ3MywzNC45LDQzOS43eiIgY2xhc3M9InN0MCIv'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._chevron_white_lower__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white_lower";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,-1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white_lower.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white_lower.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white_lower.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white_lower.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateVisible == 0) {
					me._chevron_white_lower.style.visibility="hidden";
					me._chevron_white_lower.ggVisible=false;
				}
				else {
					me._chevron_white_lower.style.visibility=(Number(me._chevron_white_lower.style.opacity)>0||!me._chevron_white_lower.style.opacity)?'inherit':'hidden';
					me._chevron_white_lower.ggVisible=true;
				}
			}
		}
		me._chevron_white_lower.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white_lower.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white_lower.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=1;
				}
				else {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=0.6;
				}
			}
		}
		me._chevron_white_lower.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_white_lower);
		el=me._chevron_black=document.createElement('div');
		els=me._chevron_black__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB2ZXJzaW9uPSIxLjAiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMC'+
			'AxMDAwIDEwMDA7Ij4KIDxnPgogIDxwYXRoIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjcmI3hhOyYjeDk7JiN4OTtjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMFMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._chevron_black__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_black.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_black.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_black.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateVisible == 0) {
					me._chevron_black.style.visibility="hidden";
					me._chevron_black.ggVisible=false;
				}
				else {
					me._chevron_black.style.visibility=(Number(me._chevron_black.style.opacity)>0||!me._chevron_black.style.opacity)?'inherit':'hidden';
					me._chevron_black.ggVisible=true;
				}
			}
		}
		me._chevron_black.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=1;
				}
				else {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=0.4;
				}
			}
		}
		me._chevron_black.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_black);
		el=me._chevron_white=document.createElement('div');
		els=me._chevron_white__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB2ZXJzaW9uPSIxLjAiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMC'+
			'AxMDAwIDEwMDA7Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEmI3hhOyYjeDk7JiN4OTtjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAmI3hhOyYjeDk7JiN4OTtTMS43LDQ3MywzNC45LDQzOS43eiIgY2xhc3M9InN0MCIv'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._chevron_white__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateVisible == 0) {
					me._chevron_white.style.visibility="hidden";
					me._chevron_white.ggVisible=false;
				}
				else {
					me._chevron_white.style.visibility=(Number(me._chevron_white.style.opacity)>0||!me._chevron_white.style.opacity)?'inherit':'hidden';
					me._chevron_white.ggVisible=true;
				}
			}
		}
		me._chevron_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=1;
				}
				else {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=0.6;
				}
			}
		}
		me._chevron_white.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_white);
		el=me.__code=document.createElement('div');
		els=me.__code__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 68px;';
		hs+='height: 39px;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		el.appendChild(els);
		me.__code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__code.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me.__code);
		el=me._tt_ht_3d=document.createElement('div');
		els=me._tt_ht_3d__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); font-size: 15px; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 1px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) && 
				((me.hotspot.title != "")) && 
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview_1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d.style[domTransition]='';
				if (me._tt_ht_3d.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d.style.visibility=(Number(me._tt_ht_3d.style.opacity)>0||!me._tt_ht_3d.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d.ggVisible=true;
				}
				else {
					me._tt_ht_3d.style.visibility="hidden";
					me._tt_ht_3d.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((142-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node.appendChild(me._tt_ht_3d);
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style[domTransition]='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage__img.src = '';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_node.appendChild(me._ht_node_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_configloaded();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview_1();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_node_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node_mouseover(); });
	player.addListener('varchanged_opt_3d_preview_1', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview_1(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};