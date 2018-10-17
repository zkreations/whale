/*!
 * Whale v1.5.4
 * Copyright 2017-2018 zkreations
 * Developed by José Gregorio (fb.com/JGMateran)
 * Licensed under MIT (github.com/zkreations/whale/blob/master/LICENSE)
 */
var whale = function() {
    "use strict";
    function e(t, n) {
        return e.addElements(t, n)
    }
    function t(e, t) {
        for (var n = 0, a = e.length; a > n && !1 !== t.call(e[n], n, e[n]); n++);
        return e
    }
    function n(e) {
        return e.trim()
    }
    function a(e) {
        return (" " + (e.getAttribute("class") || "") + " ").replace(/[\t\r\n\f]/g, " ")
    }
    function s(e, t) {
        return -1 < a(e).indexOf(t)
    }
    function c(e, c) {
        var l = a(e);
        t(c.split(" "), function(t, a) {
            a = n(a), s(e, a) || (l += a + " ")
        }), e.setAttribute("class", n(l))
    }
    function l(e, s) {
        t(s.split(" "), function(t, s) {
            e.setAttribute("class", n(a(e).replace(" " + n(s) + " ", " ")))
        })
    }
    function i(e, n) {
        t(n.split(" "), function(t, n) {
            (s(e, n) ? l : c)(e, n)
        })
    }
    return e.extend = function(e) {
        var t, n, a, s, c = 1,
            l = arguments.length;
        for (c === l && (e = this, c--); l > c; c++)
            if (null != (t = arguments[c]))
                for (a in t) n = t[a], s = e[a], n !== s && (e[a] = n);
        return e
    }, t([c, l, i], function(e, n) {
        n.collection = function(e, a) {
            t(e, function(e, t) {
                n(t, a)
            })
        }
    }), e.components = {}, e.addElements = function(t, n) {
        var a;
        if (n) e.components[t] = n;
        else
            for (a in t) e.components[a] = t[a];
        return this
    }, e.extend({
        trim: n,
        forEach: t,
        hasClass: s,
        addClass: c,
        removeClass: l,
        toggleClass: i
    }), window.addEventListener("load", function() {
        var t, n = e.components;
        for (t in n)
            for (var a = 0, s = document.querySelectorAll("." + t), c = s.length, l = n[t]; c > a; a++) new l(s[a], a, t)
    }), e
}();
! function() {
    "use strict";

    function e(e) {
        var t = this.classes;
        whale.forEach(e.querySelectorAll("a"), function(e, n) {
            var a = n.parentNode,
                s = a.querySelectorAll("ul"),
                c = a.querySelectorAll("a"),
                l = document.createElement("span"),
                i = s[0];
            s.length && (whale.addClass(a, t.parent), whale.addClass(l, t.arrow), n.appendChild(l), n.addEventListener("click", function(e) {
                e.preventDefault(), whale.hasClass(i, t.active) ? (whale.removeClass.collection(s, t.active), whale.removeClass.collection(c, t.active)) : whale.addClass.collection([n, i], t.active)
            }))
        })
    }

    function t(e) {
        var t = this.classes,
            n = e.querySelectorAll("." + t.item),
            a = e.querySelectorAll("." + t.panel);
        n.length && whale.forEach(n, function(s, c) {
            var l = c.href.split("#")[1],
                i = e.querySelector("#" + l);
            i && (whale.hasClass(i, t.active) && whale.addClass(c, t.active), c.addEventListener("click", function(e) {
                e.preventDefault(), whale.forEach([n, a], function(e, n) {
                    whale.removeClass.collection(n, t.active)
                }), whale.addClass.collection([c, i], t.active)
            }))
        })
    }

    function n(e) {
        var t = this.classes,
            n = e.getAttribute(this.data.target),
            a = document.getElementById(n);
        e.addEventListener("click", function(n) {
            if (n.preventDefault(), whale.hasClass(a, t.active)) whale.removeClass.collection([e, a], t.active);
            else {
                whale.addClass.collection([e, a], t.active);
                var s = function(c) {
                    var l = c.target;
                    c === n || l === a || a.contains(l) || (whale.removeClass.collection([e, a], t.active), document.removeEventListener("click", s))
                };
                document.addEventListener("click", s)
            }
        })
    }

    function a(e) {
        var t = this.classes,
            n = e.querySelector("." + t.button),
            a = e.querySelector("." + t.content),
            s = t.active;
        whale.hasClass(a, s) && whale.addClass(n, s), n.addEventListener("click", function() {
            whale.toggleClass.collection([n, a], s)
        })
    }

    function s(e) {
        var t = this.defaults,
            n = t.width,
            a = t.height,
            s = "left=" + (screen.width - n) / 2 + ",top=" + (screen.height - a) / 2 + ",width=" + n + ",height=" + a;
        e.addEventListener("click", function(e) {
            e.preventDefault(), window.open(this.href, this.target, s)
        })
    }

    function c(e) {
        this.container = e, this.titles = e.querySelectorAll("." + this["const"].TITLE), this.collection = e.querySelectorAll("." + this["const"].CONTENT), this.prev = null, this.init()
    }
    e.prototype = {
        classes: {
            active: "is-active",
            parent: "is-parent",
            arrow: "is-arrow"
        }
    }, t.prototype.classes = {
        item: "wjs-item",
        panel: "wjs-panel",
        active: "is-active"
    };
    var l = n.prototype = {
            classes: {
                active: "is-active"
            },
            data: {
                target: "data-target"
            }
        },
        i = {};
    whale.forEach(["addClass", "removeClass", "toggleClass"], function(e, t) {
        i[t] = function(e) {
            var n, a = e.getAttribute(l.data.target),
                s = document.querySelectorAll("." + a);
            s && e.addEventListener("click", function() {
                n = whale[t], n(e, l.classes.active), n.collection(s, l.classes.active)
            })
        }
    }), a.prototype = {
        classes: {
            active: "is-active",
            content: "wjs-container",
            button: "wjs-button"
        }
    }, s.prototype = {
        defaults: {
            width: 600,
            height: 400
        }
    }, c.prototype.init = function() {
        var e = this;
        whale.forEach(e.titles, function(t, n) {
            var a = (e.collection[t], n.parentNode);
            a.classList.contains(e["const"].IS_ACTIVE) && (e.prev = a), n.addEventListener("click", function(t) {
                t.preventDefault(), console.log(a), e.prev && e.prev.classList.remove(e["const"].IS_ACTIVE), e.prev === a ? (a.classList.remove(e["const"].IS_ACTIVE), e.prev = null) : (a.classList.add(e["const"].IS_ACTIVE), e.prev = a)
            })
        })
    }, c.prototype["const"] = {
        TITLE: "accordion-title",
        CONTENT: "accordion-content",
        IS_ACTIVE: "is-active"
    }, whale.addElements(i).addElements({
        "wjs-menu": e,
        "wjs-tab": t,
        "wjs-spoiler": a,
        "wjs-outsite": n,
        "wjs-window": s,
        "wjs-accordion": c
    })
}();