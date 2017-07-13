/*!
=> whale.js beta v1.0.8
=> Copyright 2017 José Gregorio | fb.com/JGMateran (zkreations team)
=> Licensed under MIT | github.com/zkreations/whale.css/blob/master/LICENSE
*/
;(function(){

	'use strict';

	var object = {},
		toString = object.toString,
		whale = function(){};

	var defaults = {
		item:'whale__item',
		panel:'whale__panel',

		active:'is-active',
		parent:'is-parent',

		button:'whale__button',

		window:{
			btn:'window__button',
			def:{
				width:600,
				height:400,
				centered:true
			}
		}
	};

	function forEach(item,callback){
		for (var i = 0; i < item.length; i++){
			if (false === callback.call(item[i],i,item[i])){ break; }
		}
	}

	function extend(item){
		for (var i = 1; i < arguments.length; i++){
			var extend = arguments[i];

			for (var name in extend){
				item[name] = extend[name];
			}
		}

		return item;
	}

	function overloadSetter(callback){
		return function(params,optional){
			if (params){
				if (optional){
					callback.call(this,params,optional);
				} else {
					for (var name in params){
						callback.call(this,name,params[name]);
					}
				}
			}
			return this;
		}
	}

	function trim(text){
		return text.trim();
	}

	function classHelper(element){
		return (" " + (element.getAttribute("class") || "") + " ").replace(/[\t\r\n\f]/g," ");
	}

	function hasClass(element,className){
		return -1 < classHelper(element).indexOf(className);
	}

	function addClass(element,className){
		var string = classHelper(element);

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
				(classHelper(element).replace(" " + trim(name) + " "," "))
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

	extend(whale,{
		extend:extend,
		forEach:forEach,
		trim:trim,

		hasClass:hasClass,
		addClass:addClass,
		removeClass:removeClass,
		toggleClass:toggleClass,

		overloadSetter:overloadSetter
	});

	forEach('String Function Number Array Object'.split(' '),function(index,name){
		whale['is' + name] = function(item){
			return '[object ' + name +']' === toString.call(item);
		}
	});

	whale.component = overloadSetter(function(name,constr){
		if (whale.isFunction(constr)){
			whale.components[name] = constr;
		}
	});

	whale.upgrate = function(name){
		var component = whale.components[name];

		if (component){
			var elements = document.querySelectorAll('.' + name);

			if (elements.length){
				forEach(elements,function(index,element){
					new component(element);
				});
			}
		}
	};

	whale.open = function(href,options){
		var str = '';

		for (var name in options){
			if (name !== 'centered'){
				str += name + '=' + options[name] + ',';
			}
		}

		str += (
			options.centered ?
				'left=' + ((screen.width - options.width) / 2) +
				',top=' + ((screen.height - options.height) / 2) :

				'left=0,right=0'
		);

		window.open(href,'',str)
	};

	whale.components = {
		'whale--menu':function(menu){
			forEach(menu.querySelectorAll('a'),function(index,a){
				var ul = a.parentNode.querySelector('ul');

				if (ul){
					addClass(a,defaults.parent);

					a.addEventListener('click',function(event){
						event.preventDefault();
						toggleClass.collection([a,ul],defaults.active);
					});
				}
			});
		},

		'whale--class':function(button){
			var attr__focus = button.getAttribute('data-focus'),
				attr__class = button.getAttribute('data-class') || defaults.active,
				attr__event = button.getAttribute('data-event'),
				whale__event = whale[attr__event + 'Class'],
				element = document.querySelector('#' + attr__focus);

			if (element){
				if (hasClass(element,attr__class)){
					addClass(button,defaults.active)
				} else {
					removeClass(button,defaults.active);
				}

				var callback = whale__event ?

				function(){
					whale__event.collection([element,button],attr__class);
				} :

				function(event){
					if (hasClass(element,attr__class)){
						removeClass(element,attr__class);
						removeClass(button,defaults.active);
					} else {
						addClass(element,attr__class);
						addClass(button,defaults.active);

						var callback = function(ev){
							if (ev !== event){
								removeClass(element,attr__class);
								removeClass(button,defaults.active);

								document.removeEventListener('click',callback);
							}
						};

						document.addEventListener('click',callback);
					}
				}

				button.addEventListener('click',function(event){
					event.preventDefault();
					callback(event);
				});
			}
		},

		'whale--tab':function(container){
			var actived = defaults.active,
				items = container.querySelectorAll('.' + defaults.item),
				panels = container.querySelectorAll('.' + defaults.panel);

			if (items.length){
				forEach(items,function(index,item){
					var href = item.href.split('#')[1],
						panel = container.querySelector('#' + href);

					if (panel){
						if (hasClass(panel,actived)){
							addClass(item,actived);
						}

						item.addEventListener('click',function(event){
							event.preventDefault();

							forEach([items,panels],function(index,collection){
								removeClass.collection(collection,actived);
							});

							addClass.collection([item,panel],actived);
						});
					}
				});
			}
		},

		'whale--window':function(container){
			forEach(container.querySelectorAll('.' + defaults.window.btn),function(index,button){
				var href = button.href;

				if (href){
					button.addEventListener('click',function(event){
						event.preventDefault();
						whale.open(href,defaults.window.def);
					});
				}
			});
		},

		'whale--group':function(container){
			var focus = container.getAttribute('data-focus'),
				element = document.querySelector('#' + focus),
				collection = container.querySelectorAll('.' + defaults.button),
				beforeClass = null;

			if (element){
				forEach(collection,function(index,button){
					var className = button.getAttribute('data-class');

					if (className){
						button.addEventListener('click',function(event){
							event.preventDefault();

							if (beforeClass){
								removeClass(element,beforeClass);
							}

							removeClass.collection(collection,defaults.active);
							addClass(button,defaults.active);

							addClass(element,(beforeClass = className));
						});
					}
				});
			}
		}
	};

	window.addEventListener('load',function(){
		for (var name in whale.components){
			whale.upgrate(name);
		}
	});

	window.whale = whale;

})();