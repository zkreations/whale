/*!
=> whale.js beta v1.3.12
=> Copyright 2017 José Gregorio | fb.com/JGMateran (zkreations team)
=> Licensed under MIT | github.com/zkreations/whale.css/blob/master/LICENSE
*/
var whale = (function(){

	"use strict";

	function whale(name,constructor){
		return whale.addElements(name,constructor);
	}

	whale.extend = function(target){
		var options, option, name, original,
			i = 1,
			length = arguments.length;

		if (i === length){
			target = this;
			i--;
		}

		for (; i < length; i++){
			if ( (options = arguments[i]) != null ){
				for (name in options){
					option = options[name];
					original = target[name];

					if (option !== original){
						target[name] = option;
					}
				}
			}
		}

		return target;
	};

	function forEach(item,callback){
		var i = 0,
			length = item.length;

		for (; i < length; i++){
			if (false === callback.call(item[i],i,item[i])){
				break;
			}
		}

		return item;
	}

	function trim(string){
		return string.trim();
	}

	function convert(element){
		return (" " + (element.getAttribute("class") || "") + " ").replace(/[\t\r\n\f]/g," ");
	}

	function hasClass(element,className){
		return -1 < convert(element).indexOf(className);
	}

	function addClass(element,className){
		var string = convert(element);

		forEach(className.split(" "),function(index,name){
			name = trim(name);
			if (!hasClass(element,name)){
				string += name + " ";
			}
		});

		element.setAttribute("class",trim(string));
	}

	function removeClass(element,className){
		forEach(className.split(" "),function(index,name){
			element.setAttribute("class",trim(
				(convert(element).replace(" " + trim(name) + " "," "))
			));
		});
	}

	function toggleClass(element,className){
		forEach(className.split(" "),function(index,name){
			(hasClass(element,name) ? removeClass : addClass)(element,name);
		});
	}

	forEach([
		addClass,
		removeClass,
		toggleClass
	],function(index,callback){

		callback.collection = function(collection,className){
			forEach(collection,function(i,element){
				callback(element,className);
			});
		};

	});

	whale.components = {};

	whale.addElements = function(object,constructor){
		var name;

		if (constructor){
			whale.components[object] = constructor;
		} else {
			for (name in object){
				whale.components[ name ] = object[name];
			}
		}

		return this;
	};

	whale.extend({
		"trim":trim,
		"forEach":forEach,

		"hasClass":hasClass,
		"addClass":addClass,
		"removeClass":removeClass,
		"toggleClass":toggleClass
	});

	window.addEventListener("load",function(){
		var name,
			components = whale.components;

		for (name in components){
			var i = 0,
				elements = document.querySelectorAll("." + name),
				length = elements.length,
				constr = components[name];

			for (; i < length; i++){
				new constr(elements[i],i,name);
			}
		}
	});

	return whale;

})();

(function(){

	"use strict"

	function Menu(container){
		var classes = this.classes;

		whale.forEach(container.querySelectorAll("a"),function(index,a){
			var li = a.parentNode,
				uls = li.querySelectorAll("ul"),
				as = li.querySelectorAll("a"),
				ul = uls[0];

			if (uls.length){
				whale.addClass(li,classes.parent);

				a.addEventListener("click",function(event){
					event.preventDefault();

					if (whale.hasClass(ul,classes.active)){
						whale.removeClass.collection(uls,classes.active);
						whale.removeClass.collection(as,classes.active);
					} else {
						whale.addClass.collection([a,ul],classes.active);
					}
				});
			}
		});
	}

	Menu.prototype = {
		classes:{
			active:"is-active",
			parent:"is-parent"
		}
	};

	function Tab(container){
		var classes = this.classes,
			items = container.querySelectorAll("." + classes.item),
			panels = container.querySelectorAll("." + classes.panel);

		if (items.length){
			whale.forEach(items,function(index,item){
				var href = item.href.split("#")[1],
					panel = container.querySelector("#" + href);

				if (panel){
					if (whale.hasClass(panel,classes.active)){
						whale.addClass(item,classes.active);
					}

					item.addEventListener("click",function(event){
						event.preventDefault();

						whale.forEach([items,panels],function(index,collection){
							whale.removeClass.collection(collection,classes.active);
						});

						whale.addClass.collection([item,panel],classes.active);
					});
				}
			});
		}
	}

	Tab.prototype.classes = {
		item:"wjs-item",
		panel:"wjs-panel",
		active:"is-active"
	};

	function Outsite(element){
		var classes = this.classes,
			dataTarget = element.getAttribute(this.data.target),
			target = document.getElementById(dataTarget);

		element.addEventListener("click",function(event){
			event.preventDefault();

			if (whale.hasClass(target,classes.active)){
				whale.removeClass.collection([element,target],classes.active);
			} else {
				whale.addClass.collection([element,target],classes.active);

				var callback = function(ev){
					var tar = ev.target;
					if (ev !== event && tar !== target && tar.parentNode !== target){
						whale.removeClass.collection([element,target],classes.active);

						document.removeEventListener("click",callback);
					}
				};

				document.addEventListener("click",callback);
			}
		});
	}

	var defaults = Outsite.prototype = {
		classes:{
			active:"is-active"
		},

		data:{
			target:"data-target"
		}
	};

	var components = {};

	whale.forEach(["addClass","removeClass","toggleClass"],function(index,name){

		components[name] = function(element){
			var event,
				dataTarget = element.getAttribute(defaults.data.target),
				target = document.querySelectorAll("." + dataTarget);

			if (target){
				element.addEventListener("click",function(){
					event = whale[name];

					event(element,defaults.classes.active);
					event.collection(target,defaults.classes.active);
				});
			}
		};

	});

	function Spoiler(container){
		var classes = this.classes,
			button = container.querySelector("." + classes.button),
			content = container.querySelector("." + classes.content),
			active = classes.active;

		if (whale.hasClass(content,active)){
			whale.addClass(button,active);
		}

		button.addEventListener("click",function(){
			whale.toggleClass.collection([button,content],active);
		});
	}

	Spoiler.prototype = {
		classes:{
			active:"is-active",
			content:"wjs-container",
			button:"wjs-button"
		}
	};

	function Window(container){
		var defaults = this.defaults,
			width = defaults.width,
			height = defaults.height;

		var string = "left=" + ((screen.width - width) / 2) +
					 ",top=" + ((screen.height - height) / 2) +
					 ",width=" + width + ",height=" + height;


		container.addEventListener("click",function(event){
			event.preventDefault();
			window.open(this.href,this.target,string);
		});
	}

	Window.prototype = {
		defaults:{
			width:600,
			height:400
		}
	};

	whale.addElements(components)
		 .addElements({
		 	"wjs-menu":Menu,
		 	"wjs-tab":Tab,
		 	"wjs-spoiler":Spoiler,
		 	"wjs-outsite":Outsite,
		 	"wjs-window":Window
		 });

})();