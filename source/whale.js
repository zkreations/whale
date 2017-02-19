/*!
=> whale.js v1.0.0
=> José Gregorio | fb.com/JGMateran
=> Copyright 2017 José Gregorio (zkreations contributors)
=> Licensed under MIT | github.com/zkreations/whale.css/blob/master/LICENSE
*/
(function(){

	'use strict';

	var whale = function(){}; // Palabra reservada del codigo

	/*
	 * @public
	 * Metodo trim de ECMAScript 5
	 */
	var trim = function(text){
		return text.trim();
	};

	/*
	 * @private
	 * Funcion de ayuda
	 * minificar codigo y eliminar redundancias del addClass, removeClass y hasClass
	 */
	var convert = function(element){
		return (" " + (element.getAttribute("class") || "") + " ").replace(/[\t\r\n\f]/g," ");
	};

	/*
	 * @private
	 * Funcion de ayuda
	 * Elimina la clase "active" de una collecion
	 */
	var clean = function(collection){
		forEach(collection,function(index,item){
			removeClass(item,'active');
		});
	};

	extend(whale,{
		trim:trim,
		extend:extend,
		forEach:forEach,
		isNull:isNull,
		hasClass:hasClass,
		addClass:addClass,
		removeClass:removeClass,
		toggleClass:toggleClass,

		/*
		 * @method
		 * Metodo para el menu multinivel
		 * whale.menu
		 */
		menu:function menu(element,optional){
			if (isNull(element)){ return menu; }

			forEach(element.querySelectorAll('a'),function(index,el){
				var span,
					ul = el.parentNode.querySelector('ul');

				if (!isNull(ul)){
					span = document.createElement('span');
					addClass(span,'arrow');
					el.appendChild(span);

					el.addEventListener('click',function(event){
						event.preventDefault();
						toggleClass.parentChild(el,ul);
					});
				}
			});
		},

		/*
		 * @method
		 * Metodo para los tabs
		 * whale.tabs
		 */
		tabs:function tabs(el){
			if (isNull(el)){ return tabs; }

			var tabs = el.querySelectorAll('.tab'),
				panels = el.querySelectorAll('.panel');

			forEach(tabs,function(index,tab){
				var id = tab.href.split("#")[1],
					panel = el.querySelector("#" + id);

				if (!isNull(panel)){
					if (hasClass(panel,'active')){
						addClass(tab,'active');
					}

					tab.addEventListener('click',function(event){
						event.preventDefault();

						clean(tabs);
						clean(panels);

						addClass(panel,'active');
						addClass(tab,'active');
					});
				}
			});
		},

		/*
		 * @method
		 * Hace lo que el metodo window.open pero con sintaxis moderna.
		 * Ademas solo se centra la ventana.
		 */
		open:function(_url,options){
			var string = (function(){
				var string = '';
				for (var name in options){
					var value = options[name];
					string += name + '=' + value + ',';
				}
				return string;
			})();

			string += 'left=' + ((screen.width - options.width) / 2) + ',top=' + ((screen.height - options.height) / 2);
			window.open(_url,"",string);
		},

		/*
		 * @method
		 * Toma una coleccion y le agrega
		 * la avertura de una ventana dependiendo
		 * de su href.
		 *
		 * @note la coleccion debe ser de etiquetas "a"
		 */
		social:function(collection,optional){
			forEach(collection,function(index,element){
				element.addEventListener('click',function(event){
					event.preventDefault();
					whale.open(this.href,optional);
				});
			});
		}
	});

	/*
	 * @public
	 * Devuelve "true" si es nulo.
	 */
	function isNull(item){
		return null == item;
	}

	/*
	 * @public
	 * Metodo extend.
	 */
	function extend(self){
		var i = 1,
			extend,
			length = arguments.length;

		for (; i < length; i++){
			extend = arguments[i];
			for (var name in extend){
				self[name] = extend[name];
			}
		}

		return self;
	}

	/*
	 * @public
	 * Metodo para recorrer array
	 */
	function forEach(self,callback){
		var i = 0,
			length = self.length;

		for (; i < length; i++){
			if (false === callback.call(self[i],i,self[i])){ break; }
		}

		return self;
	}

	/*
	 * @methods
	 * Metodos para las clases.
	 */
	function hasClass(element,className){
		return convert(element).indexOf(className) > -1;
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
	// Fin de los metodos de las clases

	/*
	 * @public
	 * Agrega las clase "active" al padre y "visible" al hijo
	 * whale.toggleClass.parentChild
	 */
	toggleClass.parentChild = function(parent,child){
		toggleClass(parent,'active');
		toggleClass(child,'visible');
	};

	window.whale = whale;

})();