"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * jQuery Easing v1.4.0 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License.
 * Copyright В© 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/gdsmith/jquery-easing/master/LICENSE
*/

(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(['jquery'], function ($) {
            return factory($);
        });
    } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
        exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
})(function ($) {

    // Preserve the original jQuery "swing" easing as "jswing"
    $.easing['jswing'] = $.easing['swing'];

    var pow = Math.pow,
        sqrt = Math.sqrt,
        sin = Math.sin,
        cos = Math.cos,
        PI = Math.PI,
        c1 = 1.70158,
        c2 = c1 * 1.525,
        c3 = c1 + 1,
        c4 = 2 * PI / 3,
        c5 = 2 * PI / 4.5;

    // x is the fraction of animation progress, in the range 0..1
    function bounceOut(x) {
        var n1 = 7.5625,
            d1 = 2.75;
        if (x < 1 / d1) {
            return n1 * x * x;
        } else if (x < 2 / d1) {
            return n1 * (x -= 1.5 / d1) * x + .75;
        } else if (x < 2.5 / d1) {
            return n1 * (x -= 2.25 / d1) * x + .9375;
        } else {
            return n1 * (x -= 2.625 / d1) * x + .984375;
        }
    }

    $.extend($.easing, {
        def: 'easeOutQuad',
        swing: function swing(x) {
            return $.easing[$.easing.def](x);
        },
        easeInQuad: function easeInQuad(x) {
            return x * x;
        },
        easeOutQuad: function easeOutQuad(x) {
            return 1 - (1 - x) * (1 - x);
        },
        easeInOutQuad: function easeInOutQuad(x) {
            return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
        },
        easeInCubic: function easeInCubic(x) {
            return x * x * x;
        },
        easeOutCubic: function easeOutCubic(x) {
            return 1 - pow(1 - x, 3);
        },
        easeInOutCubic: function easeInOutCubic(x) {
            return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
        },
        easeInQuart: function easeInQuart(x) {
            return x * x * x * x;
        },
        easeOutQuart: function easeOutQuart(x) {
            return 1 - pow(1 - x, 4);
        },
        easeInOutQuart: function easeInOutQuart(x) {
            return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
        },
        easeInQuint: function easeInQuint(x) {
            return x * x * x * x * x;
        },
        easeOutQuint: function easeOutQuint(x) {
            return 1 - pow(1 - x, 5);
        },
        easeInOutQuint: function easeInOutQuint(x) {
            return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
        },
        easeInSine: function easeInSine(x) {
            return 1 - cos(x * PI / 2);
        },
        easeOutSine: function easeOutSine(x) {
            return sin(x * PI / 2);
        },
        easeInOutSine: function easeInOutSine(x) {
            return -(cos(PI * x) - 1) / 2;
        },
        easeInExpo: function easeInExpo(x) {
            return x === 0 ? 0 : pow(2, 10 * x - 10);
        },
        easeOutExpo: function easeOutExpo(x) {
            return x === 1 ? 1 : 1 - pow(2, -10 * x);
        },
        easeInOutExpo: function easeInOutExpo(x) {
            return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2;
        },
        easeInCirc: function easeInCirc(x) {
            return 1 - sqrt(1 - pow(x, 2));
        },
        easeOutCirc: function easeOutCirc(x) {
            return sqrt(1 - pow(x - 1, 2));
        },
        easeInOutCirc: function easeInOutCirc(x) {
            return x < 0.5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
        },
        easeInElastic: function easeInElastic(x) {
            return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
        },
        easeOutElastic: function easeOutElastic(x) {
            return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
        },
        easeInOutElastic: function easeInOutElastic(x) {
            return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1;
        },
        easeInBack: function easeInBack(x) {
            return c3 * x * x * x - c1 * x * x;
        },
        easeOutBack: function easeOutBack(x) {
            return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
        },
        easeInOutBack: function easeInOutBack(x) {
            return x < 0.5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
        },
        easeInBounce: function easeInBounce(x) {
            return 1 - bounceOut(1 - x);
        },
        easeOutBounce: bounceOut,
        easeInOutBounce: function easeInOutBounce(x) {
            return x < 0.5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2;
        }
    });
});
/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
/*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */
jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (!function (e) {
    function t(e) {
        var t = e.length,
            a = r.type(e);return "function" === a || r.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === a || 0 === t || "number" == typeof t && t > 0 && t - 1 in e;
    }if (!e.jQuery) {
        var r = function r(e, t) {
            return new r.fn.init(e, t);
        };r.isWindow = function (e) {
            return null != e && e == e.window;
        }, r.type = function (e) {
            return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? n[i.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
        }, r.isArray = Array.isArray || function (e) {
            return "array" === r.type(e);
        }, r.isPlainObject = function (e) {
            var t;if (!e || "object" !== r.type(e) || e.nodeType || r.isWindow(e)) return !1;try {
                if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (a) {
                return !1;
            }for (t in e) {}return void 0 === t || o.call(e, t);
        }, r.each = function (e, r, a) {
            var n,
                o = 0,
                i = e.length,
                s = t(e);if (a) {
                if (s) for (; i > o && (n = r.apply(e[o], a), n !== !1); o++) {} else for (o in e) {
                    if (n = r.apply(e[o], a), n === !1) break;
                }
            } else if (s) for (; i > o && (n = r.call(e[o], o, e[o]), n !== !1); o++) {} else for (o in e) {
                if (n = r.call(e[o], o, e[o]), n === !1) break;
            }return e;
        }, r.data = function (e, t, n) {
            if (void 0 === n) {
                var o = e[r.expando],
                    i = o && a[o];if (void 0 === t) return i;if (i && t in i) return i[t];
            } else if (void 0 !== t) {
                var o = e[r.expando] || (e[r.expando] = ++r.uuid);return a[o] = a[o] || {}, a[o][t] = n, n;
            }
        }, r.removeData = function (e, t) {
            var n = e[r.expando],
                o = n && a[n];o && r.each(t, function (e, t) {
                delete o[t];
            });
        }, r.extend = function () {
            var e,
                t,
                a,
                n,
                o,
                i,
                s = arguments[0] || {},
                l = 1,
                u = arguments.length,
                c = !1;for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != (typeof s === "undefined" ? "undefined" : _typeof(s)) && "function" !== r.type(s) && (s = {}), l === u && (s = this, l--); u > l; l++) {
                if (null != (o = arguments[l])) for (n in o) {
                    e = s[n], a = o[n], s !== a && (c && a && (r.isPlainObject(a) || (t = r.isArray(a))) ? (t ? (t = !1, i = e && r.isArray(e) ? e : []) : i = e && r.isPlainObject(e) ? e : {}, s[n] = r.extend(c, i, a)) : void 0 !== a && (s[n] = a));
                }
            }return s;
        }, r.queue = function (e, a, n) {
            function o(e, r) {
                var a = r || [];return null != e && (t(Object(e)) ? !function (e, t) {
                    for (var r = +t.length, a = 0, n = e.length; r > a;) {
                        e[n++] = t[a++];
                    }if (r !== r) for (; void 0 !== t[a];) {
                        e[n++] = t[a++];
                    }return e.length = n, e;
                }(a, "string" == typeof e ? [e] : e) : [].push.call(a, e)), a;
            }if (e) {
                a = (a || "fx") + "queue";var i = r.data(e, a);return n ? (!i || r.isArray(n) ? i = r.data(e, a, o(n)) : i.push(n), i) : i || [];
            }
        }, r.dequeue = function (e, t) {
            r.each(e.nodeType ? [e] : e, function (e, a) {
                t = t || "fx";var n = r.queue(a, t),
                    o = n.shift();"inprogress" === o && (o = n.shift()), o && ("fx" === t && n.unshift("inprogress"), o.call(a, function () {
                    r.dequeue(a, t);
                }));
            });
        }, r.fn = r.prototype = { init: function init(e) {
                if (e.nodeType) return this[0] = e, this;throw new Error("Not a DOM node.");
            }, offset: function offset() {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };return { top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0) };
            }, position: function position() {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) {
                        e = e.offsetParent;
                    }return e || document;
                }var t = this[0],
                    e = e.apply(t),
                    a = this.offset(),
                    n = /^(?:body|html)$/i.test(e.nodeName) ? { top: 0, left: 0 } : r(e).offset();return a.top -= parseFloat(t.style.marginTop) || 0, a.left -= parseFloat(t.style.marginLeft) || 0, e.style && (n.top += parseFloat(e.style.borderTopWidth) || 0, n.left += parseFloat(e.style.borderLeftWidth) || 0), { top: a.top - n.top, left: a.left - n.left };
            } };var a = {};r.expando = "velocity" + new Date().getTime(), r.uuid = 0;for (var n = {}, o = n.hasOwnProperty, i = n.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) {
            n["[object " + s[l] + "]"] = s[l].toLowerCase();
        }r.fn.init.prototype = r.fn, e.Velocity = { Utilities: r };
    }
}(window), function (e) {
    "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e();
}(function () {
    return function (e, t, r, a) {
        function n(e) {
            for (var t = -1, r = e ? e.length : 0, a = []; ++t < r;) {
                var n = e[t];n && a.push(n);
            }return a;
        }function o(e) {
            return m.isWrapped(e) ? e = [].slice.call(e) : m.isNode(e) && (e = [e]), e;
        }function i(e) {
            var t = f.data(e, "velocity");return null === t ? a : t;
        }function s(e) {
            return function (t) {
                return Math.round(t * e) * (1 / e);
            };
        }function l(e, r, a, n) {
            function o(e, t) {
                return 1 - 3 * t + 3 * e;
            }function i(e, t) {
                return 3 * t - 6 * e;
            }function s(e) {
                return 3 * e;
            }function l(e, t, r) {
                return ((o(t, r) * e + i(t, r)) * e + s(t)) * e;
            }function u(e, t, r) {
                return 3 * o(t, r) * e * e + 2 * i(t, r) * e + s(t);
            }function c(t, r) {
                for (var n = 0; m > n; ++n) {
                    var o = u(r, e, a);if (0 === o) return r;var i = l(r, e, a) - t;r -= i / o;
                }return r;
            }function p() {
                for (var t = 0; b > t; ++t) {
                    w[t] = l(t * x, e, a);
                }
            }function f(t, r, n) {
                var o,
                    i,
                    s = 0;do {
                    i = r + (n - r) / 2, o = l(i, e, a) - t, o > 0 ? n = i : r = i;
                } while (Math.abs(o) > h && ++s < v);return i;
            }function d(t) {
                for (var r = 0, n = 1, o = b - 1; n != o && w[n] <= t; ++n) {
                    r += x;
                }--n;var i = (t - w[n]) / (w[n + 1] - w[n]),
                    s = r + i * x,
                    l = u(s, e, a);return l >= y ? c(t, s) : 0 == l ? s : f(t, r, r + x);
            }function g() {
                V = !0, (e != r || a != n) && p();
            }var m = 4,
                y = .001,
                h = 1e-7,
                v = 10,
                b = 11,
                x = 1 / (b - 1),
                S = "Float32Array" in t;if (4 !== arguments.length) return !1;for (var P = 0; 4 > P; ++P) {
                if ("number" != typeof arguments[P] || isNaN(arguments[P]) || !isFinite(arguments[P])) return !1;
            }e = Math.min(e, 1), a = Math.min(a, 1), e = Math.max(e, 0), a = Math.max(a, 0);var w = S ? new Float32Array(b) : new Array(b),
                V = !1,
                C = function C(t) {
                    return V || g(), e === r && a === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), r, n);
                };C.getControlPoints = function () {
                return [{ x: e, y: r }, { x: a, y: n }];
            };var T = "generateBezier(" + [e, r, a, n] + ")";return C.toString = function () {
                return T;
            }, C;
        }function u(e, t) {
            var r = e;return m.isString(e) ? b.Easings[e] || (r = !1) : r = m.isArray(e) && 1 === e.length ? s.apply(null, e) : m.isArray(e) && 2 === e.length ? x.apply(null, e.concat([t])) : m.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, r === !1 && (r = b.Easings[b.defaults.easing] ? b.defaults.easing : v), r;
        }function c(e) {
            if (e) {
                var t = new Date().getTime(),
                    r = b.State.calls.length;r > 1e4 && (b.State.calls = n(b.State.calls));for (var o = 0; r > o; o++) {
                    if (b.State.calls[o]) {
                        var s = b.State.calls[o],
                            l = s[0],
                            u = s[2],
                            d = s[3],
                            g = !!d,
                            y = null;d || (d = b.State.calls[o][3] = t - 16);for (var h = Math.min((t - d) / u.duration, 1), v = 0, x = l.length; x > v; v++) {
                            var P = l[v],
                                V = P.element;if (i(V)) {
                                var C = !1;if (u.display !== a && null !== u.display && "none" !== u.display) {
                                    if ("flex" === u.display) {
                                        var T = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];f.each(T, function (e, t) {
                                            S.setPropertyValue(V, "display", t);
                                        });
                                    }S.setPropertyValue(V, "display", u.display);
                                }u.visibility !== a && "hidden" !== u.visibility && S.setPropertyValue(V, "visibility", u.visibility);for (var k in P) {
                                    if ("element" !== k) {
                                        var A,
                                            F = P[k],
                                            j = m.isString(F.easing) ? b.Easings[F.easing] : F.easing;if (1 === h) A = F.endValue;else {
                                            var E = F.endValue - F.startValue;if (A = F.startValue + E * j(h, u, E), !g && A === F.currentValue) continue;
                                        }if (F.currentValue = A, "tween" === k) y = A;else {
                                            if (S.Hooks.registered[k]) {
                                                var H = S.Hooks.getRoot(k),
                                                    N = i(V).rootPropertyValueCache[H];N && (F.rootPropertyValue = N);
                                            }var L = S.setPropertyValue(V, k, F.currentValue + (0 === parseFloat(A) ? "" : F.unitType), F.rootPropertyValue, F.scrollData);S.Hooks.registered[k] && (i(V).rootPropertyValueCache[H] = S.Normalizations.registered[H] ? S.Normalizations.registered[H]("extract", null, L[1]) : L[1]), "transform" === L[0] && (C = !0);
                                        }
                                    }
                                }u.mobileHA && i(V).transformCache.translate3d === a && (i(V).transformCache.translate3d = "(0px, 0px, 0px)", C = !0), C && S.flushTransformCache(V);
                            }
                        }u.display !== a && "none" !== u.display && (b.State.calls[o][2].display = !1), u.visibility !== a && "hidden" !== u.visibility && (b.State.calls[o][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], h, Math.max(0, d + u.duration - t), d, y), 1 === h && p(o);
                    }
                }
            }b.State.isTicking && w(c);
        }function p(e, t) {
            if (!b.State.calls[e]) return !1;for (var r = b.State.calls[e][0], n = b.State.calls[e][1], o = b.State.calls[e][2], s = b.State.calls[e][4], l = !1, u = 0, c = r.length; c > u; u++) {
                var p = r[u].element;if (t || o.loop || ("none" === o.display && S.setPropertyValue(p, "display", o.display), "hidden" === o.visibility && S.setPropertyValue(p, "visibility", o.visibility)), o.loop !== !0 && (f.queue(p)[1] === a || !/\.velocityQueueEntryFlag/i.test(f.queue(p)[1])) && i(p)) {
                    i(p).isAnimating = !1, i(p).rootPropertyValueCache = {};var d = !1;f.each(S.Lists.transforms3D, function (e, t) {
                        var r = /^scale/.test(t) ? 1 : 0,
                            n = i(p).transformCache[t];i(p).transformCache[t] !== a && new RegExp("^\\(" + r + "[^.]").test(n) && (d = !0, delete i(p).transformCache[t]);
                    }), o.mobileHA && (d = !0, delete i(p).transformCache.translate3d), d && S.flushTransformCache(p), S.Values.removeClass(p, "velocity-animating");
                }if (!t && o.complete && !o.loop && u === c - 1) try {
                    o.complete.call(n, n);
                } catch (g) {
                    setTimeout(function () {
                        throw g;
                    }, 1);
                }s && o.loop !== !0 && s(n), i(p) && o.loop === !0 && !t && (f.each(i(p).tweensContainer, function (e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100);
                }), b(p, "reverse", { loop: !0, delay: o.delay })), o.queue !== !1 && f.dequeue(p, o.queue);
            }b.State.calls[e] = !1;for (var m = 0, y = b.State.calls.length; y > m; m++) {
                if (b.State.calls[m] !== !1) {
                    l = !0;break;
                }
            }l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = []);
        }var f,
            d = function () {
                if (r.documentMode) return r.documentMode;for (var e = 7; e > 4; e--) {
                    var t = r.createElement("div");if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e;
                }return a;
            }(),
            g = function () {
                var e = 0;return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
                    var r,
                        a = new Date().getTime();return r = Math.max(0, 16 - (a - e)), e = a + r, setTimeout(function () {
                        t(a + r);
                    }, r);
                };
            }(),
            m = { isString: function isString(e) {
                    return "string" == typeof e;
                }, isArray: Array.isArray || function (e) {
                    return "[object Array]" === Object.prototype.toString.call(e);
                }, isFunction: function isFunction(e) {
                    return "[object Function]" === Object.prototype.toString.call(e);
                }, isNode: function isNode(e) {
                    return e && e.nodeType;
                }, isNodeList: function isNodeList(e) {
                    return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== a && (0 === e.length || "object" == _typeof(e[0]) && e[0].nodeType > 0);
                }, isWrapped: function isWrapped(e) {
                    return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e));
                }, isSVG: function isSVG(e) {
                    return t.SVGElement && e instanceof t.SVGElement;
                }, isEmptyObject: function isEmptyObject(e) {
                    for (var t in e) {
                        return !1;
                    }return !0;
                } },
            y = !1;if (e.fn && e.fn.jquery ? (f = e, y = !0) : f = t.Velocity.Utilities, 8 >= d && !y) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if (7 >= d) return void (jQuery.fn.velocity = jQuery.fn.animate);var h = 400,
            v = "swing",
            b = { State: { isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), isAndroid: /Android/i.test(navigator.userAgent), isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent), isChrome: t.chrome, isFirefox: /Firefox/i.test(navigator.userAgent), prefixElement: r.createElement("div"), prefixMatches: {}, scrollAnchor: null, scrollPropertyLeft: null, scrollPropertyTop: null, isTicking: !1, calls: [] }, CSS: {}, Utilities: f, Redirects: {}, Easings: {}, Promise: t.Promise, defaults: { queue: "", duration: h, easing: v, begin: a, complete: a, progress: a, display: a, visibility: a, loop: !1, delay: !1, mobileHA: !0, _cacheValues: !0 }, init: function init(e) {
                    f.data(e, "velocity", { isSVG: m.isSVG(e), isAnimating: !1, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {} });
                }, hook: null, mock: !1, version: { major: 1, minor: 2, patch: 2 }, debug: !1 };t.pageYOffset !== a ? (b.State.scrollAnchor = t, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");var x = function () {
            function e(e) {
                return -e.tension * e.x - e.friction * e.v;
            }function t(t, r, a) {
                var n = { x: t.x + a.dx * r, v: t.v + a.dv * r, tension: t.tension, friction: t.friction };return { dx: n.v, dv: e(n) };
            }function r(r, a) {
                var n = { dx: r.v, dv: e(r) },
                    o = t(r, .5 * a, n),
                    i = t(r, .5 * a, o),
                    s = t(r, a, i),
                    l = 1 / 6 * (n.dx + 2 * (o.dx + i.dx) + s.dx),
                    u = 1 / 6 * (n.dv + 2 * (o.dv + i.dv) + s.dv);return r.x = r.x + l * a, r.v = r.v + u * a, r;
            }return function a(e, t, n) {
                var o,
                    i,
                    s,
                    l = { x: -1, v: 0, tension: null, friction: null },
                    u = [0],
                    c = 0,
                    p = 1e-4,
                    f = .016;for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, n = n || null, l.tension = e, l.friction = t, o = null !== n, o ? (c = a(e, t), i = c / n * f) : i = f; s = r(s || l, i), u.push(1 + s.x), c += 16, Math.abs(s.x) > p && Math.abs(s.v) > p;) {}return o ? function (e) {
                    return u[e * (u.length - 1) | 0];
                } : c;
            };
        }();b.Easings = { linear: function linear(e) {
                return e;
            }, swing: function swing(e) {
                return .5 - Math.cos(e * Math.PI) / 2;
            }, spring: function spring(e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e);
            } }, f.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (e, t) {
            b.Easings[t[0]] = l.apply(null, t[1]);
        });var S = b.CSS = { RegEx: { isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi }, Lists: { colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"], transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"], transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"] }, Hooks: { templates: { textShadow: ["Color X Y Blur", "black 0px 0px 0px"], boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"], clip: ["Top Right Bottom Left", "0px 0px 0px 0px"], backgroundPosition: ["X Y", "0% 0%"], transformOrigin: ["X Y Z", "50% 50% 0px"], perspectiveOrigin: ["X Y", "50% 50%"] }, registered: {}, register: function register() {
                    for (var e = 0; e < S.Lists.colors.length; e++) {
                        var t = "color" === S.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";S.Hooks.templates[S.Lists.colors[e]] = ["Red Green Blue Alpha", t];
                    }var r, a, n;if (d) for (r in S.Hooks.templates) {
                        a = S.Hooks.templates[r], n = a[0].split(" ");var o = a[1].match(S.RegEx.valueSplit);"Color" === n[0] && (n.push(n.shift()), o.push(o.shift()), S.Hooks.templates[r] = [n.join(" "), o.join(" ")]);
                    }for (r in S.Hooks.templates) {
                        a = S.Hooks.templates[r], n = a[0].split(" ");for (var e in n) {
                            var i = r + n[e],
                                s = e;S.Hooks.registered[i] = [r, s];
                        }
                    }
                }, getRoot: function getRoot(e) {
                    var t = S.Hooks.registered[e];return t ? t[0] : e;
                }, cleanRootPropertyValue: function cleanRootPropertyValue(e, t) {
                    return S.RegEx.valueUnwrap.test(t) && (t = t.match(S.RegEx.valueUnwrap)[1]), S.Values.isCSSNullValue(t) && (t = S.Hooks.templates[e][1]), t;
                }, extractValue: function extractValue(e, t) {
                    var r = S.Hooks.registered[e];if (r) {
                        var a = r[0],
                            n = r[1];return t = S.Hooks.cleanRootPropertyValue(a, t), t.toString().match(S.RegEx.valueSplit)[n];
                    }return t;
                }, injectValue: function injectValue(e, t, r) {
                    var a = S.Hooks.registered[e];if (a) {
                        var n,
                            o,
                            i = a[0],
                            s = a[1];return r = S.Hooks.cleanRootPropertyValue(i, r), n = r.toString().match(S.RegEx.valueSplit), n[s] = t, o = n.join(" ");
                    }return r;
                } }, Normalizations: { registered: { clip: function clip(e, t, r) {
                        switch (e) {case "name":
                            return "clip";case "extract":
                            var a;return S.RegEx.wrappedValueAlreadyExtracted.test(r) ? a = r : (a = r.toString().match(S.RegEx.valueUnwrap), a = a ? a[1].replace(/,(\s+)?/g, " ") : r), a;case "inject":
                            return "rect(" + r + ")";}
                    }, blur: function blur(e, t, r) {
                        switch (e) {case "name":
                            return b.State.isFirefox ? "filter" : "-webkit-filter";case "extract":
                            var a = parseFloat(r);if (!a && 0 !== a) {
                                var n = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a = n ? n[1] : 0;
                            }return a;case "inject":
                            return parseFloat(r) ? "blur(" + r + ")" : "none";}
                    }, opacity: function opacity(e, t, r) {
                        if (8 >= d) switch (e) {case "name":
                            return "filter";case "extract":
                            var a = r.toString().match(/alpha\(opacity=(.*)\)/i);return r = a ? a[1] / 100 : 1;case "inject":
                            return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")";} else switch (e) {case "name":
                            return "opacity";case "extract":
                            return r;case "inject":
                            return r;}
                    } }, register: function register() {
                    9 >= d || b.State.isGingerbread || (S.Lists.transformsBase = S.Lists.transformsBase.concat(S.Lists.transforms3D));for (var e = 0; e < S.Lists.transformsBase.length; e++) {
                        !function () {
                            var t = S.Lists.transformsBase[e];S.Normalizations.registered[t] = function (e, r, n) {
                                switch (e) {case "name":
                                    return "transform";case "extract":
                                    return i(r) === a || i(r).transformCache[t] === a ? /^scale/i.test(t) ? 1 : 0 : i(r).transformCache[t].replace(/[()]/g, "");case "inject":
                                    var o = !1;switch (t.substr(0, t.length - 1)) {case "translate":
                                        o = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case "scal":case "scale":
                                        b.State.isAndroid && i(r).transformCache[t] === a && 1 > n && (n = 1), o = !/(\d)$/i.test(n);break;case "skew":
                                        o = !/(deg|\d)$/i.test(n);break;case "rotate":
                                        o = !/(deg|\d)$/i.test(n);}return o || (i(r).transformCache[t] = "(" + n + ")"), i(r).transformCache[t];}
                            };
                        }();
                    }for (var e = 0; e < S.Lists.colors.length; e++) {
                        !function () {
                            var t = S.Lists.colors[e];S.Normalizations.registered[t] = function (e, r, n) {
                                switch (e) {case "name":
                                    return t;case "extract":
                                    var o;if (S.RegEx.wrappedValueAlreadyExtracted.test(n)) o = n;else {
                                        var i,
                                            s = { black: "rgb(0, 0, 0)", blue: "rgb(0, 0, 255)", gray: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", red: "rgb(255, 0, 0)", white: "rgb(255, 255, 255)" };/^[A-z]+$/i.test(n) ? i = s[n] !== a ? s[n] : s.black : S.RegEx.isHex.test(n) ? i = "rgb(" + S.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (i = s.black), o = (i || n).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                                    }return 8 >= d || 3 !== o.split(" ").length || (o += " 1"), o;case "inject":
                                    return 8 >= d ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (8 >= d ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";}
                            };
                        }();
                    }
                } }, Names: { camelCase: function camelCase(e) {
                    return e.replace(/-(\w)/g, function (e, t) {
                        return t.toUpperCase();
                    });
                }, SVGAttribute: function SVGAttribute(e) {
                    var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return (d || b.State.isAndroid && !b.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e);
                }, prefixCheck: function prefixCheck(e) {
                    if (b.State.prefixMatches[e]) return [b.State.prefixMatches[e], !0];for (var t = ["", "Webkit", "Moz", "ms", "O"], r = 0, a = t.length; a > r; r++) {
                        var n;if (n = 0 === r ? e : t[r] + e.replace(/^\w/, function (e) {
                                return e.toUpperCase();
                            }), m.isString(b.State.prefixElement.style[n])) return b.State.prefixMatches[e] = n, [n, !0];
                    }return [e, !1];
                } }, Values: { hexToRgb: function hexToRgb(e) {
                    var t,
                        r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e = e.replace(r, function (e, t, r, a) {
                        return t + t + r + r + a + a;
                    }), t = a.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0];
                }, isCSSNullValue: function isCSSNullValue(e) {
                    return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e);
                }, getUnitType: function getUnitType(e) {
                    return (/^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                    );
                }, getDisplayType: function getDisplayType(e) {
                    var t = e && e.tagName.toString().toLowerCase();return (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                    );
                }, addClass: function addClass(e, t) {
                    e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t;
                }, removeClass: function removeClass(e, t) {
                    e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                } }, getPropertyValue: function getPropertyValue(e, r, n, o) {
                function s(e, r) {
                    function n() {
                        u && S.setPropertyValue(e, "display", "none");
                    }var l = 0;if (8 >= d) l = f.css(e, r);else {
                        var u = !1;if (/^(width|height)$/.test(r) && 0 === S.getPropertyValue(e, "display") && (u = !0, S.setPropertyValue(e, "display", S.Values.getDisplayType(e))), !o) {
                            if ("height" === r && "border-box" !== S.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var c = e.offsetHeight - (parseFloat(S.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingBottom")) || 0);return n(), c;
                            }if ("width" === r && "border-box" !== S.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var p = e.offsetWidth - (parseFloat(S.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingRight")) || 0);return n(), p;
                            }
                        }var g;g = i(e) === a ? t.getComputedStyle(e, null) : i(e).computedStyle ? i(e).computedStyle : i(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === r && (r = "borderTopColor"), l = 9 === d && "filter" === r ? g.getPropertyValue(r) : g[r], ("" === l || null === l) && (l = e.style[r]), n();
                    }if ("auto" === l && /^(top|right|bottom|left)$/i.test(r)) {
                        var m = s(e, "position");("fixed" === m || "absolute" === m && /top|left/i.test(r)) && (l = f(e).position()[r] + "px");
                    }return l;
                }var l;if (S.Hooks.registered[r]) {
                    var u = r,
                        c = S.Hooks.getRoot(u);n === a && (n = S.getPropertyValue(e, S.Names.prefixCheck(c)[0])), S.Normalizations.registered[c] && (n = S.Normalizations.registered[c]("extract", e, n)), l = S.Hooks.extractValue(u, n);
                } else if (S.Normalizations.registered[r]) {
                    var p, g;p = S.Normalizations.registered[r]("name", e), "transform" !== p && (g = s(e, S.Names.prefixCheck(p)[0]), S.Values.isCSSNullValue(g) && S.Hooks.templates[r] && (g = S.Hooks.templates[r][1])), l = S.Normalizations.registered[r]("extract", e, g);
                }if (!/^[\d-]/.test(l)) if (i(e) && i(e).isSVG && S.Names.SVGAttribute(r)) {
                    if (/^(height|width)$/i.test(r)) try {
                        l = e.getBBox()[r];
                    } catch (m) {
                        l = 0;
                    } else l = e.getAttribute(r);
                } else l = s(e, S.Names.prefixCheck(r)[0]);return S.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + r + ": " + l), l;
            }, setPropertyValue: function setPropertyValue(e, r, a, n, o) {
                var s = r;if ("scroll" === r) o.container ? o.container["scroll" + o.direction] = a : "Left" === o.direction ? t.scrollTo(a, o.alternateValue) : t.scrollTo(o.alternateValue, a);else if (S.Normalizations.registered[r] && "transform" === S.Normalizations.registered[r]("name", e)) S.Normalizations.registered[r]("inject", e, a), s = "transform", a = i(e).transformCache[r];else {
                    if (S.Hooks.registered[r]) {
                        var l = r,
                            u = S.Hooks.getRoot(r);n = n || S.getPropertyValue(e, u), a = S.Hooks.injectValue(l, a, n), r = u;
                    }if (S.Normalizations.registered[r] && (a = S.Normalizations.registered[r]("inject", e, a), r = S.Normalizations.registered[r]("name", e)), s = S.Names.prefixCheck(r)[0], 8 >= d) try {
                        e.style[s] = a;
                    } catch (c) {
                        b.debug && console.log("Browser does not support [" + a + "] for [" + s + "]");
                    } else i(e) && i(e).isSVG && S.Names.SVGAttribute(r) ? e.setAttribute(r, a) : e.style[s] = a;b.debug >= 2 && console.log("Set " + r + " (" + s + "): " + a);
                }return [s, a];
            }, flushTransformCache: function flushTransformCache(e) {
                function t(t) {
                    return parseFloat(S.getPropertyValue(e, t));
                }var r = "";if ((d || b.State.isAndroid && !b.State.isChrome) && i(e).isSVG) {
                    var a = { translate: [t("translateX"), t("translateY")], skewX: [t("skewX")], skewY: [t("skewY")], scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")], rotate: [t("rotateZ"), 0, 0] };f.each(i(e).transformCache, function (e) {
                        /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), a[e] && (r += e + "(" + a[e].join(" ") + ") ", delete a[e]);
                    });
                } else {
                    var n, o;f.each(i(e).transformCache, function (t) {
                        return n = i(e).transformCache[t], "transformPerspective" === t ? (o = n, !0) : (9 === d && "rotateZ" === t && (t = "rotate"), void (r += t + n + " "));
                    }), o && (r = "perspective" + o + " " + r);
                }S.setPropertyValue(e, "transform", r);
            } };S.Hooks.register(), S.Normalizations.register(), b.hook = function (e, t, r) {
            var n = a;return e = o(e), f.each(e, function (e, o) {
                if (i(o) === a && b.init(o), r === a) n === a && (n = b.CSS.getPropertyValue(o, t));else {
                    var s = b.CSS.setPropertyValue(o, t, r);"transform" === s[0] && b.CSS.flushTransformCache(o), n = s;
                }
            }), n;
        };var P = function P() {
            function e() {
                return s ? k.promise || null : l;
            }function n() {
                function e(e) {
                    function p(e, t) {
                        var r = a,
                            n = a,
                            i = a;return m.isArray(e) ? (r = e[0], !m.isArray(e[1]) && /^[\d-]/.test(e[1]) || m.isFunction(e[1]) || S.RegEx.isHex.test(e[1]) ? i = e[1] : (m.isString(e[1]) && !S.RegEx.isHex.test(e[1]) || m.isArray(e[1])) && (n = t ? e[1] : u(e[1], s.duration), e[2] !== a && (i = e[2]))) : r = e, t || (n = n || s.easing), m.isFunction(r) && (r = r.call(o, V, w)), m.isFunction(i) && (i = i.call(o, V, w)), [r || 0, n, i];
                    }function d(e, t) {
                        var r, a;return a = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
                            return r = e, "";
                        }), r || (r = S.Values.getUnitType(e)), [a, r];
                    }function h() {
                        var e = { myParent: o.parentNode || r.body, position: S.getPropertyValue(o, "position"), fontSize: S.getPropertyValue(o, "fontSize") },
                            a = e.position === L.lastPosition && e.myParent === L.lastParent,
                            n = e.fontSize === L.lastFontSize;L.lastParent = e.myParent, L.lastPosition = e.position, L.lastFontSize = e.fontSize;var s = 100,
                            l = {};if (n && a) l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, l.percentToPxHeight = L.lastPercentToPxHeight;else {
                            var u = i(o).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");b.init(u), e.myParent.appendChild(u), f.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                                b.CSS.setPropertyValue(u, t, "hidden");
                            }), b.CSS.setPropertyValue(u, "position", e.position), b.CSS.setPropertyValue(u, "fontSize", e.fontSize), b.CSS.setPropertyValue(u, "boxSizing", "content-box"), f.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                                b.CSS.setPropertyValue(u, t, s + "%");
                            }), b.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(S.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(S.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = L.lastEmToPx = (parseFloat(S.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u);
                        }return null === L.remToPx && (L.remToPx = parseFloat(S.getPropertyValue(r.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(t.innerWidth) / 100, L.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l;
                    }if (s.begin && 0 === V) try {
                        s.begin.call(g, g);
                    } catch (x) {
                        setTimeout(function () {
                            throw x;
                        }, 1);
                    }if ("scroll" === A) {
                        var P,
                            C,
                            T,
                            F = /^x$/i.test(s.axis) ? "Left" : "Top",
                            j = parseFloat(s.offset) || 0;s.container ? m.isWrapped(s.container) || m.isNode(s.container) ? (s.container = s.container[0] || s.container, P = s.container["scroll" + F], T = P + f(o).position()[F.toLowerCase()] + j) : s.container = null : (P = b.State.scrollAnchor[b.State["scrollProperty" + F]], C = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === F ? "Top" : "Left")]], T = f(o).offset()[F.toLowerCase()] + j), l = { scroll: { rootPropertyValue: !1, startValue: P, currentValue: P, endValue: T, unitType: "", easing: s.easing, scrollData: { container: s.container, direction: F, alternateValue: C } }, element: o }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, o);
                    } else if ("reverse" === A) {
                        if (!i(o).tweensContainer) return void f.dequeue(o, s.queue);"none" === i(o).opts.display && (i(o).opts.display = "auto"), "hidden" === i(o).opts.visibility && (i(o).opts.visibility = "visible"), i(o).opts.loop = !1, i(o).opts.begin = null, i(o).opts.complete = null, v.easing || delete s.easing, v.duration || delete s.duration, s = f.extend({}, i(o).opts, s);var E = f.extend(!0, {}, i(o).tweensContainer);for (var H in E) {
                            if ("element" !== H) {
                                var N = E[H].startValue;E[H].startValue = E[H].currentValue = E[H].endValue, E[H].endValue = N, m.isEmptyObject(v) || (E[H].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + H + "): " + JSON.stringify(E[H]), o);
                            }
                        }l = E;
                    } else if ("start" === A) {
                        var E;i(o).tweensContainer && i(o).isAnimating === !0 && (E = i(o).tweensContainer), f.each(y, function (e, t) {
                            if (RegExp("^" + S.Lists.colors.join("$|^") + "$").test(e)) {
                                var r = p(t, !0),
                                    n = r[0],
                                    o = r[1],
                                    i = r[2];if (S.RegEx.isHex.test(n)) {
                                    for (var s = ["Red", "Green", "Blue"], l = S.Values.hexToRgb(n), u = i ? S.Values.hexToRgb(i) : a, c = 0; c < s.length; c++) {
                                        var f = [l[c]];o && f.push(o), u !== a && f.push(u[c]), y[e + s[c]] = f;
                                    }delete y[e];
                                }
                            }
                        });for (var z in y) {
                            var O = p(y[z]),
                                q = O[0],
                                $ = O[1],
                                M = O[2];z = S.Names.camelCase(z);var I = S.Hooks.getRoot(z),
                                B = !1;if (i(o).isSVG || "tween" === I || S.Names.prefixCheck(I)[1] !== !1 || S.Normalizations.registered[I] !== a) {
                                (s.display !== a && null !== s.display && "none" !== s.display || s.visibility !== a && "hidden" !== s.visibility) && /opacity|filter/.test(z) && !M && 0 !== q && (M = 0), s._cacheValues && E && E[z] ? (M === a && (M = E[z].endValue + E[z].unitType), B = i(o).rootPropertyValueCache[I]) : S.Hooks.registered[z] ? M === a ? (B = S.getPropertyValue(o, I), M = S.getPropertyValue(o, z, B)) : B = S.Hooks.templates[I][1] : M === a && (M = S.getPropertyValue(o, z));var W,
                                    G,
                                    Y,
                                    D = !1;if (W = d(z, M), M = W[0], Y = W[1], W = d(z, q), q = W[0].replace(/^([+-\/*])=/, function (e, t) {
                                        return D = t, "";
                                    }), G = W[1], M = parseFloat(M) || 0, q = parseFloat(q) || 0, "%" === G && (/^(fontSize|lineHeight)$/.test(z) ? (q /= 100, G = "em") : /^scale/.test(z) ? (q /= 100, G = "") : /(Red|Green|Blue)$/i.test(z) && (q = q / 100 * 255, G = "")), /[\/*]/.test(D)) G = Y;else if (Y !== G && 0 !== M) if (0 === q) G = Y;else {
                                    n = n || h();var Q = /margin|padding|left|right|width|text|word|letter/i.test(z) || /X$/.test(z) || "x" === z ? "x" : "y";switch (Y) {case "%":
                                        M *= "x" === Q ? n.percentToPxWidth : n.percentToPxHeight;break;case "px":
                                        break;default:
                                        M *= n[Y + "ToPx"];}switch (G) {case "%":
                                        M *= 1 / ("x" === Q ? n.percentToPxWidth : n.percentToPxHeight);break;case "px":
                                        break;default:
                                        M *= 1 / n[G + "ToPx"];}
                                }switch (D) {case "+":
                                    q = M + q;break;case "-":
                                    q = M - q;break;case "*":
                                    q = M * q;break;case "/":
                                    q = M / q;}l[z] = { rootPropertyValue: B, startValue: M, currentValue: M, endValue: q, unitType: G, easing: $ }, b.debug && console.log("tweensContainer (" + z + "): " + JSON.stringify(l[z]), o);
                            } else b.debug && console.log("Skipping [" + I + "] due to a lack of browser support.");
                        }l.element = o;
                    }l.element && (S.Values.addClass(o, "velocity-animating"), R.push(l), "" === s.queue && (i(o).tweensContainer = l, i(o).opts = s), i(o).isAnimating = !0, V === w - 1 ? (b.State.calls.push([R, g, s, null, k.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, c())) : V++);
                }var n,
                    o = this,
                    s = f.extend({}, b.defaults, v),
                    l = {};switch (i(o) === a && b.init(o), parseFloat(s.delay) && s.queue !== !1 && f.queue(o, s.queue, function (e) {
                    b.velocityQueueEntryFlag = !0, i(o).delayTimer = { setTimeout: setTimeout(e, parseFloat(s.delay)), next: e };
                }), s.duration.toString().toLowerCase()) {case "fast":
                    s.duration = 200;break;case "normal":
                    s.duration = h;break;case "slow":
                    s.duration = 600;break;default:
                    s.duration = parseFloat(s.duration) || 1;}b.mock !== !1 && (b.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = u(s.easing, s.duration), s.begin && !m.isFunction(s.begin) && (s.begin = null), s.progress && !m.isFunction(s.progress) && (s.progress = null), s.complete && !m.isFunction(s.complete) && (s.complete = null), s.display !== a && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(o))), s.visibility !== a && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(e, s.delay) : e() : f.queue(o, s.queue, function (t, r) {
                    return r === !0 ? (k.promise && k.resolver(g), !0) : (b.velocityQueueEntryFlag = !0, void e(t));
                }), "" !== s.queue && "fx" !== s.queue || "inprogress" === f.queue(o)[0] || f.dequeue(o);
            }var s,
                l,
                d,
                g,
                y,
                v,
                x = arguments[0] && (arguments[0].p || f.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || m.isString(arguments[0].properties));if (m.isWrapped(this) ? (s = !1, d = 0, g = this, l = this) : (s = !0, d = 1, g = x ? arguments[0].elements || arguments[0].e : arguments[0]), g = o(g)) {
                x ? (y = arguments[0].properties || arguments[0].p, v = arguments[0].options || arguments[0].o) : (y = arguments[d], v = arguments[d + 1]);var w = g.length,
                    V = 0;if (!/^(stop|finish)$/i.test(y) && !f.isPlainObject(v)) {
                    var C = d + 1;v = {};for (var T = C; T < arguments.length; T++) {
                        m.isArray(arguments[T]) || !/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]) ? m.isString(arguments[T]) || m.isArray(arguments[T]) ? v.easing = arguments[T] : m.isFunction(arguments[T]) && (v.complete = arguments[T]) : v.duration = arguments[T];
                    }
                }var k = { promise: null, resolver: null, rejecter: null };s && b.Promise && (k.promise = new b.Promise(function (e, t) {
                    k.resolver = e, k.rejecter = t;
                }));var A;switch (y) {case "scroll":
                    A = "scroll";break;case "reverse":
                    A = "reverse";break;case "finish":case "stop":
                    f.each(g, function (e, t) {
                        i(t) && i(t).delayTimer && (clearTimeout(i(t).delayTimer.setTimeout), i(t).delayTimer.next && i(t).delayTimer.next(), delete i(t).delayTimer);
                    });var F = [];return f.each(b.State.calls, function (e, t) {
                        t && f.each(t[1], function (r, n) {
                            var o = v === a ? "" : v;return o === !0 || t[2].queue === o || v === a && t[2].queue === !1 ? void f.each(g, function (r, a) {
                                a === n && ((v === !0 || m.isString(v)) && (f.each(f.queue(a, m.isString(v) ? v : ""), function (e, t) {
                                    m.isFunction(t) && t(null, !0);
                                }), f.queue(a, m.isString(v) ? v : "", [])), "stop" === y ? (i(a) && i(a).tweensContainer && o !== !1 && f.each(i(a).tweensContainer, function (e, t) {
                                    t.endValue = t.currentValue;
                                }), F.push(e)) : "finish" === y && (t[2].duration = 1));
                            }) : !0;
                        });
                    }), "stop" === y && (f.each(F, function (e, t) {
                        p(t, !0);
                    }), k.promise && k.resolver(g)), e();default:
                    if (!f.isPlainObject(y) || m.isEmptyObject(y)) {
                        if (m.isString(y) && b.Redirects[y]) {
                            var j = f.extend({}, v),
                                E = j.duration,
                                H = j.delay || 0;return j.backwards === !0 && (g = f.extend(!0, [], g).reverse()), f.each(g, function (e, t) {
                                parseFloat(j.stagger) ? j.delay = H + parseFloat(j.stagger) * e : m.isFunction(j.stagger) && (j.delay = H + j.stagger.call(t, e, w)), j.drag && (j.duration = parseFloat(E) || (/^(callout|transition)/.test(y) ? 1e3 : h), j.duration = Math.max(j.duration * (j.backwards ? 1 - e / w : (e + 1) / w), .75 * j.duration, 200)), b.Redirects[y].call(t, t, j || {}, e, w, g, k.promise ? k : a);
                            }), e();
                        }var N = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting.";return k.promise ? k.rejecter(new Error(N)) : console.log(N), e();
                    }A = "start";}var L = { lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null },
                    R = [];f.each(g, function (e, t) {
                    m.isNode(t) && n.call(t);
                });var z,
                    j = f.extend({}, b.defaults, v);if (j.loop = parseInt(j.loop), z = 2 * j.loop - 1, j.loop) for (var O = 0; z > O; O++) {
                    var q = { delay: j.delay, progress: j.progress };O === z - 1 && (q.display = j.display, q.visibility = j.visibility, q.complete = j.complete), P(g, "reverse", q);
                }return e();
            }
        };b = f.extend(P, b), b.animate = P;var w = t.requestAnimationFrame || g;return b.State.isMobile || r.hidden === a || r.addEventListener("visibilitychange", function () {
            r.hidden ? (w = function w(e) {
                return setTimeout(function () {
                    e(!0);
                }, 16);
            }, c()) : w = t.requestAnimationFrame || g;
        }), e.Velocity = b, e !== t && (e.fn.velocity = P, e.fn.velocity.defaults = b.defaults), f.each(["Down", "Up"], function (e, t) {
            b.Redirects["slide" + t] = function (e, r, n, o, i, s) {
                var l = f.extend({}, r),
                    u = l.begin,
                    c = l.complete,
                    p = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },
                    d = {};l.display === a && (l.display = "Down" === t ? "inline" === b.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function () {
                    u && u.call(i, i);for (var r in p) {
                        d[r] = e.style[r];var a = b.CSS.getPropertyValue(e, r);p[r] = "Down" === t ? [a, 0] : [0, a];
                    }d.overflow = e.style.overflow, e.style.overflow = "hidden";
                }, l.complete = function () {
                    for (var t in d) {
                        e.style[t] = d[t];
                    }c && c.call(i, i), s && s.resolver(i);
                }, b(e, p, l);
            };
        }), f.each(["In", "Out"], function (e, t) {
            b.Redirects["fade" + t] = function (e, r, n, o, i, s) {
                var l = f.extend({}, r),
                    u = { opacity: "In" === t ? 1 : 0 },
                    c = l.complete;l.complete = n !== o - 1 ? l.begin = null : function () {
                    c && c.call(i, i), s && s.resolver(i);
                }, l.display === a && (l.display = "In" === t ? "auto" : "none"), b(this, u, l);
            };
        }), b;
    }(window.jQuery || window.Zepto || window, window, document);
}));

// Required for Meteor package, the use of window prevents export by Meteor
(function (window) {
    if (window.Package) {
        Materialize = {};
    } else {
        window.Materialize = {};
    }
})(window);

if (typeof exports !== 'undefined' && !exports.nodeType) {
    if (typeof module !== 'undefined' && !module.nodeType && module.exports) {
        exports = module.exports = Materialize;
    }
    exports.default = Materialize;
}

/*
 * raf.js
 * https://github.com/ngryman/raf.js
 *
 * original requestAnimationFrame polyfill by Erik MГ¶ller
 * inspired from paul_irish gist and post
 *
 * Copyright (c) 2013 ngryman
 * Licensed under the MIT license.
 */
(function (window) {
    var lastTime = 0,
        vendors = ['webkit', 'moz'],
        requestAnimationFrame = window.requestAnimationFrame,
        cancelAnimationFrame = window.cancelAnimationFrame,
        i = vendors.length;

    // try to un-prefix existing raf
    while (--i >= 0 && !requestAnimationFrame) {
        requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
        cancelAnimationFrame = window[vendors[i] + 'CancelRequestAnimationFrame'];
    }

    // polyfill with setTimeout fallback
    // heavily inspired from @darius gist mod: https://gist.github.com/paulirish/1579671#comment-837945
    if (!requestAnimationFrame || !cancelAnimationFrame) {
        requestAnimationFrame = function requestAnimationFrame(callback) {
            var now = +Date.now(),
                nextTime = Math.max(lastTime + 16, now);
            return setTimeout(function () {
                callback(lastTime = nextTime);
            }, nextTime - now);
        };

        cancelAnimationFrame = clearTimeout;
    }

    // export to window
    window.requestAnimationFrame = requestAnimationFrame;
    window.cancelAnimationFrame = cancelAnimationFrame;
})(window);

/**
 * Generate approximated selector string for a jQuery object
 * @param {jQuery} obj  jQuery object to be parsed
 * @returns {string}
 */
Materialize.objectSelectorString = function (obj) {
    var tagStr = obj.prop('tagName') || '';
    var idStr = obj.attr('id') || '';
    var classStr = obj.attr('class') || '';
    return (tagStr + idStr + classStr).replace(/\s/g, '');
};

// Unique Random ID
Materialize.guid = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return function () {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
}();

/**
 * Escapes hash from special characters
 * @param {string} hash  String returned from this.hash
 * @returns {string}
 */
Materialize.escapeHash = function (hash) {
    return hash.replace(/(:|\.|\[|\]|,|=)/g, "\\$1");
};

Materialize.elementOrParentIsFixed = function (element) {
    var $element = $(element);
    var $checkElements = $element.add($element.parents());
    var isFixed = false;
    $checkElements.each(function () {
        if ($(this).css("position") === "fixed") {
            isFixed = true;
            return false;
        }
    });
    return isFixed;
};

/**
 * Get time in ms
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @type {function}
 * @return {number}
 */
var getTime = Date.now || function () {
    return new Date().getTime();
};

/**
 * Returns a function, that, when invoked, will only be triggered at most once
 * during a given window of time. Normally, the throttled function will run
 * as much as it can, without ever going more than once per `wait` duration;
 * but if you'd like to disable the execution on the leading edge, pass
 * `{leading: false}`. To disable execution on the trailing edge, ditto.
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @param {function} func
 * @param {number} wait
 * @param {Object=} options
 * @returns {Function}
 */
Materialize.throttle = function (func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function later() {
        previous = options.leading === false ? 0 : getTime();
        timeout = null;
        result = func.apply(context, args);
        context = args = null;
    };
    return function () {
        var now = getTime();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
            context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
};

// Velocity has conflicts when loaded with jQuery, this will check for it
// First, check if in noConflict mode
var Vel;
if (jQuery) {
    Vel = jQuery.Velocity;
} else if ($) {
    Vel = $.Velocity;
} else {
    Vel = Velocity;
}

if (Vel) {
    Materialize.Vel = Vel;
} else {
    Materialize.Vel = Velocity;
}

(function ($) {

    // Add posibility to scroll to selected option
    // usefull for select for example
    $.fn.scrollTo = function (elem) {
        $(this).scrollTop($(this).scrollTop() - $(this).offset().top + $(elem).offset().top);
        return this;
    };

    $.fn.dropdown = function (options) {
        var defaults = {
            inDuration: 300,
            outDuration: 225,
            constrainWidth: true, // Constrains width of dropdown to the activator
            hover: false,
            gutter: 0, // Spacing from edge
            belowOrigin: false,
            alignment: 'left',
            stopPropagation: false
        };

        // Open dropdown.
        if (options === "open") {
            this.each(function () {
                $(this).trigger('open');
            });
            return false;
        }

        // Close dropdown.
        if (options === "close") {
            this.each(function () {
                $(this).trigger('close');
            });
            return false;
        }

        this.each(function () {
            var origin = $(this);
            var curr_options = $.extend({}, defaults, options);
            var isFocused = false;

            // Dropdown menu
            var activates = $("#" + origin.attr('data-activates'));

            function updateOptions() {
                if (origin.data('induration') !== undefined) curr_options.inDuration = origin.data('induration');
                if (origin.data('outduration') !== undefined) curr_options.outDuration = origin.data('outduration');
                if (origin.data('constrainwidth') !== undefined) curr_options.constrainWidth = origin.data('constrainwidth');
                if (origin.data('hover') !== undefined) curr_options.hover = origin.data('hover');
                if (origin.data('gutter') !== undefined) curr_options.gutter = origin.data('gutter');
                if (origin.data('beloworigin') !== undefined) curr_options.belowOrigin = origin.data('beloworigin');
                if (origin.data('alignment') !== undefined) curr_options.alignment = origin.data('alignment');
                if (origin.data('stoppropagation') !== undefined) curr_options.stopPropagation = origin.data('stoppropagation');
            }

            updateOptions();

            // Attach dropdown to its activator
            origin.after(activates);

            /*
        Helper function to position and resize dropdown.
        Used in hover and click handler.
      */
            function placeDropdown(eventType) {
                // Check for simultaneous focus and click events.
                if (eventType === 'focus') {
                    isFocused = true;
                }

                // Check html data attributes
                updateOptions();

                // Set Dropdown state
                activates.addClass('active');
                origin.addClass('active');

                var originWidth = origin[0].getBoundingClientRect().width;

                // Constrain width
                if (curr_options.constrainWidth === true) {
                    activates.css('width', originWidth);
                } else {
                    activates.css('white-space', 'nowrap');
                }

                // Offscreen detection
                var windowHeight = window.innerHeight;
                var originHeight = origin.innerHeight();
                var offsetLeft = origin.offset().left;
                var offsetTop = origin.offset().top - $(window).scrollTop();
                var currAlignment = curr_options.alignment;
                var gutterSpacing = 0;
                var leftPosition = 0;

                // Below Origin
                var verticalOffset = 0;
                if (curr_options.belowOrigin === true) {
                    verticalOffset = originHeight;
                }

                // Check for scrolling positioned container.
                var scrollYOffset = 0;
                var scrollXOffset = 0;
                var wrapper = origin.parent();
                if (!wrapper.is('body')) {
                    if (wrapper[0].scrollHeight > wrapper[0].clientHeight) {
                        scrollYOffset = wrapper[0].scrollTop;
                    }
                    if (wrapper[0].scrollWidth > wrapper[0].clientWidth) {
                        scrollXOffset = wrapper[0].scrollLeft;
                    }
                }

                if (offsetLeft + activates.innerWidth() > $(window).width()) {
                    // Dropdown goes past screen on right, force right alignment
                    currAlignment = 'right';
                } else if (offsetLeft - activates.innerWidth() + origin.innerWidth() < 0) {
                    // Dropdown goes past screen on left, force left alignment
                    currAlignment = 'left';
                }
                // Vertical bottom offscreen detection
                if (offsetTop + activates.innerHeight() > windowHeight) {
                    // If going upwards still goes offscreen, just crop height of dropdown.
                    if (offsetTop + originHeight - activates.innerHeight() < 0) {
                        var adjustedHeight = windowHeight - offsetTop - verticalOffset;
                        activates.css('max-height', adjustedHeight);
                    } else {
                        // Flow upwards.
                        if (!verticalOffset) {
                            verticalOffset += originHeight;
                        }
                        verticalOffset -= activates.innerHeight();
                    }
                }

                // Handle edge alignment
                if (currAlignment === 'left') {
                    gutterSpacing = curr_options.gutter;
                    leftPosition = origin.position().left + gutterSpacing;
                } else if (currAlignment === 'right') {
                    // Material icons fix
                    activates.stop(true, true).css({
                        opacity: 0,
                        left: 0
                    });

                    var offsetRight = origin.position().left + originWidth - activates.width();
                    gutterSpacing = -curr_options.gutter;
                    leftPosition = offsetRight + gutterSpacing;
                }

                // Position dropdown
                activates.css({
                    position: 'absolute',
                    top: origin.position().top + verticalOffset + scrollYOffset,
                    left: leftPosition + scrollXOffset
                });

                // Show dropdown
                activates.slideDown({
                    queue: false,
                    duration: curr_options.inDuration,
                    easing: 'easeOutCubic',
                    complete: function complete() {
                        $(this).css('height', '');
                    }
                }).animate({ opacity: 1 }, { queue: false, duration: curr_options.inDuration, easing: 'easeOutSine' });

                // Add click close handler to document
                setTimeout(function () {
                    $(document).on('click.' + activates.attr('id'), function (e) {
                        hideDropdown();
                        $(document).off('click.' + activates.attr('id'));
                    });
                }, 0);
            }

            function hideDropdown() {
                // Check for simultaneous focus and click events.
                isFocused = false;
                activates.fadeOut(curr_options.outDuration);
                activates.removeClass('active');
                origin.removeClass('active');
                $(document).off('click.' + activates.attr('id'));
                setTimeout(function () {
                    activates.css('max-height', '');
                }, curr_options.outDuration);
            }

            // Hover
            if (curr_options.hover) {
                var open = false;
                origin.off('click.' + origin.attr('id'));
                // Hover handler to show dropdown
                origin.on('mouseenter', function (e) {
                    // Mouse over
                    if (open === false) {
                        placeDropdown();
                        open = true;
                    }
                });
                origin.on('mouseleave', function (e) {
                    // If hover on origin then to something other than dropdown content, then close
                    var toEl = e.toElement || e.relatedTarget; // added browser compatibility for target element
                    if (!$(toEl).closest('.dropdown-content').is(activates)) {
                        activates.stop(true, true);
                        hideDropdown();
                        open = false;
                    }
                });

                activates.on('mouseleave', function (e) {
                    // Mouse out
                    var toEl = e.toElement || e.relatedTarget;
                    if (!$(toEl).closest('.dropdown-button').is(origin)) {
                        activates.stop(true, true);
                        hideDropdown();
                        open = false;
                    }
                });

                // Click
            } else {
                // Click handler to show dropdown
                origin.off('click.' + origin.attr('id'));
                origin.on('click.' + origin.attr('id'), function (e) {
                    if (!isFocused) {
                        if (origin[0] == e.currentTarget && !origin.hasClass('active') && $(e.target).closest('.dropdown-content').length === 0) {
                            e.preventDefault(); // Prevents button click from moving window
                            if (curr_options.stopPropagation) {
                                e.stopPropagation();
                            }
                            placeDropdown('click');
                        }
                        // If origin is clicked and menu is open, close menu
                        else if (origin.hasClass('active')) {
                            hideDropdown();
                            $(document).off('click.' + activates.attr('id'));
                        }
                    }
                });
            } // End else

            // Listen to open and close event - useful for select component
            origin.on('open', function (e, eventType) {
                placeDropdown(eventType);
            });
            origin.on('close', hideDropdown);
        });
    }; // End dropdown plugin

    $(document).ready(function () {
        $('.dropdown-button').dropdown();
    });
})(jQuery);
(function ($) {
    $.fn.collapsible = function (options, methodParam) {
        var defaults = {
            accordion: undefined,
            onOpen: undefined,
            onClose: undefined
        };

        var methodName = options;
        options = $.extend(defaults, options);

        return this.each(function () {

            var $this = $(this);

            var $panel_headers = $(this).find('> li > .collapsible-header');

            var collapsible_type = $this.data("collapsible");

            /****************
             Helper Functions
             ****************/

            // Accordion Open
            function accordionOpen(object) {
                $panel_headers = $this.find('> li > .collapsible-header');
                if (object.hasClass('active')) {
                    object.parent().addClass('active');
                } else {
                    object.parent().removeClass('active');
                }
                if (object.parent().hasClass('active')) {
                    object.siblings('.collapsible-body').stop(true, false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function complete() {
                            $(this).css('height', '');
                        } });
                } else {
                    object.siblings('.collapsible-body').stop(true, false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function complete() {
                            $(this).css('height', '');
                        } });
                }

                $panel_headers.not(object).removeClass('active').parent().removeClass('active');

                // Close previously open accordion elements.
                $panel_headers.not(object).parent().children('.collapsible-body').stop(true, false).each(function () {
                    if ($(this).is(':visible')) {
                        $(this).slideUp({
                            duration: 350,
                            easing: "easeOutQuart",
                            queue: false,
                            complete: function complete() {
                                $(this).css('height', '');
                                execCallbacks($(this).siblings('.collapsible-header'));
                            }
                        });
                    }
                });
            }

            // Expandable Open
            function expandableOpen(object) {
                if (object.hasClass('active')) {
                    object.parent().addClass('active');
                } else {
                    object.parent().removeClass('active');
                }
                if (object.parent().hasClass('active')) {
                    object.siblings('.collapsible-body').stop(true, false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function complete() {
                            $(this).css('height', '');
                        } });
                } else {
                    object.siblings('.collapsible-body').stop(true, false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function complete() {
                            $(this).css('height', '');
                        } });
                }
            }

            // Open collapsible. object: .collapsible-header
            function collapsibleOpen(object, noToggle) {
                if (!noToggle) {
                    object.toggleClass('active');
                }

                if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) {
                    // Handle Accordion
                    accordionOpen(object);
                } else {
                    // Handle Expandables
                    expandableOpen(object);
                }

                execCallbacks(object);
            }

            // Handle callbacks
            function execCallbacks(object) {
                if (object.hasClass('active')) {
                    if (typeof options.onOpen === "function") {
                        options.onOpen.call(this, object.parent());
                    }
                } else {
                    if (typeof options.onClose === "function") {
                        options.onClose.call(this, object.parent());
                    }
                }
            }

            /**
             * Check if object is children of panel header
             * @param  {Object}  object Jquery object
             * @return {Boolean} true if it is children
             */
            function isChildrenOfPanelHeader(object) {

                var panelHeader = getPanelHeader(object);

                return panelHeader.length > 0;
            }

            /**
             * Get panel header from a children element
             * @param  {Object} object Jquery object
             * @return {Object} panel header object
             */
            function getPanelHeader(object) {

                return object.closest('li > .collapsible-header');
            }

            // Turn off any existing event handlers
            function removeEventHandlers() {
                $this.off('click.collapse', '> li > .collapsible-header');
            }

            /*****  End Helper Functions  *****/

            // Methods
            if (methodName === 'destroy') {
                removeEventHandlers();
                return;
            } else if (methodParam >= 0 && methodParam < $panel_headers.length) {
                var $curr_header = $panel_headers.eq(methodParam);
                if ($curr_header.length && (methodName === 'open' || methodName === 'close' && $curr_header.hasClass('active'))) {
                    collapsibleOpen($curr_header);
                }
                return;
            }

            removeEventHandlers();

            // Add click handler to only direct collapsible header children
            $this.on('click.collapse', '> li > .collapsible-header', function (e) {
                var element = $(e.target);

                if (isChildrenOfPanelHeader(element)) {
                    element = getPanelHeader(element);
                }

                collapsibleOpen(element);
            });

            // Open first active
            if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) {
                // Handle Accordion
                collapsibleOpen($panel_headers.filter('.active').first(), true);
            } else {
                // Handle Expandables
                $panel_headers.filter('.active').each(function () {
                    collapsibleOpen($(this), true);
                });
            }
        });
    };

    $(document).ready(function () {
        $('.collapsible').collapsible();
    });
})(jQuery);
(function ($) {
    $(document).ready(function () {

        // Function to update labels of text fields
        Materialize.updateTextFields = function () {
            var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';
            $(input_selector).each(function (index, element) {
                var $this = $(this);
                if ($(element).val().length > 0 || $(element).is(':focus') || element.autofocus || $this.attr('placeholder') !== undefined) {
                    $this.siblings('label').addClass('active');
                } else if ($(element)[0].validity) {
                    $this.siblings('label').toggleClass('active', $(element)[0].validity.badInput === true);
                } else {
                    $this.siblings('label').removeClass('active');
                }
            });
        };

        // Text based inputs
        var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';

        // Add active if form auto complete
        $(document).on('change', input_selector, function () {
            if ($(this).val().length !== 0 || $(this).attr('placeholder') !== undefined) {
                $(this).siblings('label').addClass('active');
            }
            validate_field($(this));
        });

        // Add active if input element has been pre-populated on document ready
        $(document).ready(function () {
            Materialize.updateTextFields();
        });

        // HTML DOM FORM RESET handling
        $(document).on('reset', function (e) {
            var formReset = $(e.target);
            if (formReset.is('form')) {
                formReset.find(input_selector).removeClass('valid').removeClass('invalid');
                formReset.find(input_selector).each(function () {
                    if ($(this).attr('value') === '') {
                        $(this).siblings('label').removeClass('active');
                    }
                });

                // Reset select
                formReset.find('select.initialized').each(function () {
                    var reset_text = formReset.find('option[selected]').text();
                    formReset.siblings('input.select-dropdown').val(reset_text);
                });
            }
        });

        // Add active when element has focus
        $(document).on('focus', input_selector, function () {
            $(this).siblings('label, .prefix').addClass('active');
        });

        $(document).on('blur', input_selector, function () {
            var $inputElement = $(this);
            var selector = ".prefix";

            if ($inputElement.val().length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') === undefined) {
                selector += ", label";
            }

            $inputElement.siblings(selector).removeClass('active');

            validate_field($inputElement);
        });

        window.validate_field = function (object) {
            var hasLength = object.attr('data-length') !== undefined;
            var lenAttr = parseInt(object.attr('data-length'));
            var len = object.val().length;

            if (object.val().length === 0 && object[0].validity.badInput === false && !object.is(':required')) {
                if (object.hasClass('validate')) {
                    object.removeClass('valid');
                    object.removeClass('invalid');
                }
            } else {
                if (object.hasClass('validate')) {
                    // Check for character counter attributes
                    if (object.is(':valid') && hasLength && len <= lenAttr || object.is(':valid') && !hasLength) {
                        object.removeClass('invalid');
                        object.addClass('valid');
                    } else {
                        object.removeClass('valid');
                        object.addClass('invalid');
                    }
                }
            }
        };

        // Radio and Checkbox focus class
        var radio_checkbox = 'input[type=radio], input[type=checkbox]';
        $(document).on('keyup.radio', radio_checkbox, function (e) {
            // TAB, check if tabbing to radio or checkbox.
            if (e.which === 9) {
                $(this).addClass('tabbed');
                var $this = $(this);
                $this.one('blur', function (e) {

                    $(this).removeClass('tabbed');
                });
                return;
            }
        });

        // Textarea Auto Resize
        var hiddenDiv = $('.hiddendiv').first();
        if (!hiddenDiv.length) {
            hiddenDiv = $('<div class="hiddendiv common"></div>');
            $('body').append(hiddenDiv);
        }
        var text_area_selector = '.materialize-textarea';

        function textareaAutoResize($textarea) {
            // Set font properties of hiddenDiv

            var fontFamily = $textarea.css('font-family');
            var fontSize = $textarea.css('font-size');
            var lineHeight = $textarea.css('line-height');
            var padding = $textarea.css('padding');

            if (fontSize) {
                hiddenDiv.css('font-size', fontSize);
            }
            if (fontFamily) {
                hiddenDiv.css('font-family', fontFamily);
            }
            if (lineHeight) {
                hiddenDiv.css('line-height', lineHeight);
            }
            if (padding) {
                hiddenDiv.css('padding', padding);
            }

            // Set original-height, if none
            if (!$textarea.data('original-height')) {
                $textarea.data('original-height', $textarea.height());
            }

            if ($textarea.attr('wrap') === 'off') {
                hiddenDiv.css('overflow-wrap', 'normal').css('white-space', 'pre');
            }

            hiddenDiv.text($textarea.val() + '\n');
            var content = hiddenDiv.html().replace(/\n/g, '<br>');
            hiddenDiv.html(content);

            // When textarea is hidden, width goes crazy.
            // Approximate with half of window size

            if ($textarea.is(':visible')) {
                hiddenDiv.css('width', $textarea.width());
            } else {
                hiddenDiv.css('width', $(window).width() / 2);
            }

            /**
             * Resize if the new height is greater than the
             * original height of the textarea
             */
            if ($textarea.data('original-height') <= hiddenDiv.height()) {
                $textarea.css('height', hiddenDiv.height());
            } else if ($textarea.val().length < $textarea.data('previous-length')) {
                /**
                 * In case the new height is less than original height, it
                 * means the textarea has less text than before
                 * So we set the height to the original one
                 */
                $textarea.css('height', $textarea.data('original-height'));
            }
            $textarea.data('previous-length', $textarea.val().length);
        }

        $(text_area_selector).each(function () {
            var $textarea = $(this);
            /**
             * Instead of resizing textarea on document load,
             * store the original height and the original length
             */
            $textarea.data('original-height', $textarea.height());
            $textarea.data('previous-length', $textarea.val().length);
        });

        $('body').on('keyup keydown autoresize', text_area_selector, function () {
            textareaAutoResize($(this));
        });

        // File Input Path
        $(document).on('change', '.file-field input[type="file"]', function () {
            var file_field = $(this).closest('.file-field');
            var path_input = file_field.find('input.file-path');
            var files = $(this)[0].files;
            var file_names = [];
            for (var i = 0; i < files.length; i++) {
                file_names.push(files[i].name);
            }
            path_input.val(file_names.join(", "));
            path_input.trigger('change');
        });

        /****************
         *  Range Input  *
         ****************/

        var range_type = 'input[type=range]';
        var range_mousedown = false;
        var left;

        $(range_type).each(function () {
            var thumb = $('<span class="thumb"><span class="value"></span></span>');
            $(this).after(thumb);
        });

        var showRangeBubble = function showRangeBubble(thumb) {
            var paddingLeft = parseInt(thumb.parent().css('padding-left'));
            var marginLeft = -7 + paddingLeft + 'px';
            thumb.velocity({ height: "30px", width: "30px", top: "-30px", marginLeft: marginLeft }, { duration: 300, easing: 'easeOutExpo' });
        };

        var calcRangeOffset = function calcRangeOffset(range) {
            var width = range.width() - 15;
            var max = parseFloat(range.attr('max'));
            var min = parseFloat(range.attr('min'));
            var percent = (parseFloat(range.val()) - min) / (max - min);
            return percent * width;
        };

        var range_wrapper = '.range-field';
        $(document).on('change', range_type, function (e) {
            var thumb = $(this).siblings('.thumb');
            thumb.find('.value').html($(this).val());

            if (!thumb.hasClass('active')) {
                showRangeBubble(thumb);
            }

            var offsetLeft = calcRangeOffset($(this));
            thumb.addClass('active').css('left', offsetLeft);
        });

        $(document).on('mousedown touchstart', range_type, function (e) {
            var thumb = $(this).siblings('.thumb');

            // If thumb indicator does not exist yet, create it
            if (thumb.length <= 0) {
                thumb = $('<span class="thumb"><span class="value"></span></span>');
                $(this).after(thumb);
            }

            // Set indicator value
            thumb.find('.value').html($(this).val());

            range_mousedown = true;
            $(this).addClass('active');

            if (!thumb.hasClass('active')) {
                showRangeBubble(thumb);
            }

            if (e.type !== 'input') {
                var offsetLeft = calcRangeOffset($(this));
                thumb.addClass('active').css('left', offsetLeft);
            }
        });

        $(document).on('mouseup touchend', range_wrapper, function () {
            range_mousedown = false;
            $(this).removeClass('active');
        });

        $(document).on('input mousemove touchmove', range_wrapper, function (e) {
            var thumb = $(this).children('.thumb');
            var left;
            var input = $(this).find(range_type);

            if (range_mousedown) {
                if (!thumb.hasClass('active')) {
                    showRangeBubble(thumb);
                }

                var offsetLeft = calcRangeOffset(input);
                thumb.addClass('active').css('left', offsetLeft);
                thumb.find('.value').html(thumb.siblings(range_type).val());
            }
        });

        $(document).on('mouseout touchleave', range_wrapper, function () {
            if (!range_mousedown) {

                var thumb = $(this).children('.thumb');
                var paddingLeft = parseInt($(this).css('padding-left'));
                var marginLeft = 7 + paddingLeft + 'px';

                if (thumb.hasClass('active')) {
                    thumb.velocity({ height: '0', width: '0', top: '10px', marginLeft: marginLeft }, { duration: 100 });
                }
                thumb.removeClass('active');
            }
        });

        /**************************
         * Auto complete plugin  *
         *************************/
        $.fn.autocomplete = function (options) {
            // Defaults
            var defaults = {
                data: {},
                limit: Infinity,
                onAutocomplete: null,
                minLength: 1
            };

            options = $.extend(defaults, options);

            return this.each(function () {
                var $input = $(this);
                var data = options.data,
                    count = 0,
                    activeIndex = -1,
                    oldVal,
                    $inputDiv = $input.closest('.input-field'); // Div to append on

                // Check if data isn't empty
                if (!$.isEmptyObject(data)) {
                    var $autocomplete = $('<ul class="autocomplete-content dropdown-content"></ul>');
                    var $oldAutocomplete;

                    // Append autocomplete element.
                    // Prevent double structure init.
                    if ($inputDiv.length) {
                        $oldAutocomplete = $inputDiv.children('.autocomplete-content.dropdown-content').first();
                        if (!$oldAutocomplete.length) {
                            $inputDiv.append($autocomplete); // Set ul in body
                        }
                    } else {
                        $oldAutocomplete = $input.next('.autocomplete-content.dropdown-content');
                        if (!$oldAutocomplete.length) {
                            $input.after($autocomplete);
                        }
                    }
                    if ($oldAutocomplete.length) {
                        $autocomplete = $oldAutocomplete;
                    }

                    // Highlight partial match.
                    var highlight = function highlight(string, $el) {
                        var img = $el.find('img');
                        var matchStart = $el.text().toLowerCase().indexOf("" + string.toLowerCase() + ""),
                            matchEnd = matchStart + string.length - 1,
                            beforeMatch = $el.text().slice(0, matchStart),
                            matchText = $el.text().slice(matchStart, matchEnd + 1),
                            afterMatch = $el.text().slice(matchEnd + 1);
                        $el.html("<span>" + beforeMatch + "<span class='highlight'>" + matchText + "</span>" + afterMatch + "</span>");
                        if (img.length) {
                            $el.prepend(img);
                        }
                    };

                    // Reset current element position
                    var resetCurrentElement = function resetCurrentElement() {
                        activeIndex = -1;
                        $autocomplete.find('.active').removeClass('active');
                    };

                    // Remove autocomplete elements
                    var removeAutocomplete = function removeAutocomplete() {
                        $autocomplete.empty();
                        resetCurrentElement();
                        oldVal = undefined;
                    };

                    $input.off('blur.autocomplete').on('blur.autocomplete', function () {
                        removeAutocomplete();
                    });

                    // Perform search
                    $input.off('keyup.autocomplete focus.autocomplete').on('keyup.autocomplete focus.autocomplete', function (e) {
                        // Reset count.
                        count = 0;
                        var val = $input.val().toLowerCase();

                        // Don't capture enter or arrow key usage.
                        if (e.which === 13 || e.which === 38 || e.which === 40) {
                            return;
                        }

                        // Check if the input isn't empty
                        if (oldVal !== val) {
                            removeAutocomplete();

                            if (val.length >= options.minLength) {
                                for (var key in data) {
                                    if (data.hasOwnProperty(key) && key.toLowerCase().indexOf(val) !== -1) {
                                        // Break if past limit
                                        if (count >= options.limit) {
                                            break;
                                        }

                                        var autocompleteOption = $('<li></li>');
                                        if (!!data[key]) {
                                            autocompleteOption.append('<img src="' + data[key] + '" class="right circle"><span>' + key + '</span>');
                                        } else {
                                            autocompleteOption.append('<span>' + key + '</span>');
                                        }

                                        $autocomplete.append(autocompleteOption);
                                        highlight(val, autocompleteOption);
                                        count++;
                                    }
                                }
                            }
                        }

                        // Update oldVal
                        oldVal = val;
                    });

                    $input.off('keydown.autocomplete').on('keydown.autocomplete', function (e) {
                        // Arrow keys and enter key usage
                        var keyCode = e.which,
                            liElement,
                            numItems = $autocomplete.children('li').length,
                            $active = $autocomplete.children('.active').first();

                        // select element on Enter
                        if (keyCode === 13 && activeIndex >= 0) {
                            liElement = $autocomplete.children('li').eq(activeIndex);
                            if (liElement.length) {
                                liElement.trigger('mousedown.autocomplete');
                                e.preventDefault();
                            }
                            return;
                        }

                        // Capture up and down key
                        if (keyCode === 38 || keyCode === 40) {
                            e.preventDefault();

                            if (keyCode === 38 && activeIndex > 0) {
                                activeIndex--;
                            }

                            if (keyCode === 40 && activeIndex < numItems - 1) {
                                activeIndex++;
                            }

                            $active.removeClass('active');
                            if (activeIndex >= 0) {
                                $autocomplete.children('li').eq(activeIndex).addClass('active');
                            }
                        }
                    });

                    // Set input value
                    $autocomplete.off('mousedown.autocomplete touchstart.autocomplete').on('mousedown.autocomplete touchstart.autocomplete', 'li', function () {
                        var text = $(this).text().trim();
                        $input.val(text);
                        $input.trigger('change');
                        removeAutocomplete();

                        // Handle onAutocomplete callback.
                        if (typeof options.onAutocomplete === "function") {
                            options.onAutocomplete.call(this, text);
                        }
                    });

                    // Empty data
                } else {
                    $input.off('keyup.autocomplete focus.autocomplete');
                }
            });
        };
    }); // End of $(document).ready

    /*******************
     *  Select Plugin  *
     ******************/
    $.fn.material_select = function (callback) {
        $(this).each(function () {
            var $select = $(this);

            if ($select.hasClass('browser-default')) {
                return; // Continue to next (return false breaks out of entire loop)
            }

            var multiple = $select.attr('multiple') ? true : false,
                lastID = $select.attr('data-select-id'); // Tear down structure if Select needs to be rebuilt

            if (lastID) {
                $select.parent().find('span.caret').remove();
                $select.parent().find('input').remove();

                $select.unwrap();
                $('ul#select-options-' + lastID).remove();
            }

            // If destroying the select, remove the selelct-id and reset it to it's uninitialized state.
            if (callback === 'destroy') {
                $select.removeAttr('data-select-id').removeClass('initialized');
                $(window).off('click.select');
                return;
            }

            var uniqueID = Materialize.guid();
            $select.attr('data-select-id', uniqueID);
            var wrapper = $('<div class="select-wrapper"></div>');
            wrapper.addClass($select.attr('class'));
            if ($select.is(':disabled')) wrapper.addClass('disabled');
            var options = $('<ul id="select-options-' + uniqueID + '" class="dropdown-content select-dropdown ' + (multiple ? 'multiple-select-dropdown' : '') + '"></ul>'),
                selectChildren = $select.children('option, optgroup'),
                valuesSelected = [],
                optionsHover = false;

            var label = $select.find('option:selected').html() || $select.find('option:first').html() || "";

            // Function that renders and appends the option taking into
            // account type and possible image icon.
            var appendOptionWithIcon = function appendOptionWithIcon(select, option, type) {
                // Add disabled attr if disabled
                var disabledClass = option.is(':disabled') ? 'disabled ' : '';
                var optgroupClass = type === 'optgroup-option' ? 'optgroup-option ' : '';
                var multipleCheckbox = multiple ? '<input type="checkbox"' + disabledClass + '/><label></label>' : '';

                // add icons
                var icon_url = option.data('icon');
                var classes = option.attr('class');
                if (!!icon_url) {
                    var classString = '';
                    if (!!classes) classString = ' class="' + classes + '"';

                    // Check for multiple type.
                    options.append($('<li class="' + disabledClass + optgroupClass + '"><img alt="" src="' + icon_url + '"' + classString + '><span>' + multipleCheckbox + option.html() + '</span></li>'));
                    return true;
                }

                // Check for multiple type.
                options.append($('<li class="' + disabledClass + optgroupClass + '"><span>' + multipleCheckbox + option.html() + '</span></li>'));
            };

            /* Create dropdown structure. */
            if (selectChildren.length) {
                selectChildren.each(function () {
                    if ($(this).is('option')) {
                        // Direct descendant option.
                        if (multiple) {
                            appendOptionWithIcon($select, $(this), 'multiple');
                        } else {
                            appendOptionWithIcon($select, $(this));
                        }
                    } else if ($(this).is('optgroup')) {
                        // Optgroup.
                        var selectOptions = $(this).children('option');
                        options.append($('<li class="optgroup"><span>' + $(this).attr('label') + '</span></li>'));

                        selectOptions.each(function () {
                            appendOptionWithIcon($select, $(this), 'optgroup-option');
                        });
                    }
                });
            }

            options.find('li:not(.optgroup)').each(function (i) {
                $(this).click(function (e) {
                    // Check if option element is disabled
                    if (!$(this).hasClass('disabled') && !$(this).hasClass('optgroup')) {
                        var selected = true;

                        if (multiple) {
                            $('input[type="checkbox"]', this).prop('checked', function (i, v) {
                                return !v;
                            });
                            selected = toggleEntryFromArray(valuesSelected, i, $select);
                            $newSelect.trigger('focus');
                        } else {
                            options.find('li').removeClass('active');
                            $(this).toggleClass('active');
                            $newSelect.val($(this).text());
                        }

                        activateOption(options, $(this));
                        $select.find('option').eq(i).prop('selected', selected);
                        // Trigger onchange() event
                        $select.trigger('change');
                        if (typeof callback !== 'undefined') callback();
                    }

                    e.stopPropagation();
                });
            });

            // Wrap Elements
            $select.wrap(wrapper);
            // Add Select Display Element
            var dropdownIcon = $('<span class="caret"><i class="fa fa-chevron-down" aria-hidden="true"></i></span> ');

            // escape double quotes
            var sanitizedLabelHtml = label.replace(/"/g, '&quot;');

            var $newSelect = $('<input type="text" class="select-dropdown" readonly="true" ' + ($select.is(':disabled') ? 'disabled' : '') + ' data-activates="select-options-' + uniqueID + '" value="' + sanitizedLabelHtml + '" data-beloworigin="true"/>');
            $select.before($newSelect);
            $newSelect.before(dropdownIcon);

            $newSelect.after(options);
            // Check if section element is disabled
            if (!$select.is(':disabled')) {
                $newSelect.dropdown({ 'hover': false });
            }

            // Copy tabindex
            if ($select.attr('tabindex')) {
                $($newSelect[0]).attr('tabindex', $select.attr('tabindex'));
            }

            $select.addClass('initialized');

            $newSelect.on({
                'focus': function focus() {
                    if ($('ul.select-dropdown').not(options[0]).is(':visible')) {
                        $('input.select-dropdown').trigger('close');
                        $(window).off('click.select');
                    }
                    if (!options.is(':visible')) {
                        $(this).trigger('open', ['focus']);
                        var label = $(this).val();
                        if (multiple && label.indexOf(',') >= 0) {
                            label = label.split(',')[0];
                        }

                        var selectedOption = options.find('li').filter(function () {
                            return $(this).text().toLowerCase() === label.toLowerCase();
                        })[0];
                        activateOption(options, selectedOption, true);

                        $(window).off('click.select').on('click.select', function () {
                            multiple && (optionsHover || $newSelect.trigger('close'));
                            $(window).off('click.select');
                        });
                    }
                },
                'click': function click(e) {
                    e.stopPropagation();
                }
            });

            $newSelect.on('blur', function () {
                if (!multiple) {
                    $(this).trigger('close');
                    $(window).off('click.select');
                }
                options.find('li.selected').removeClass('selected');
            });

            options.hover(function () {
                optionsHover = true;
            }, function () {
                optionsHover = false;
            });

            // Add initial multiple selections.
            if (multiple) {
                $select.find("option:selected:not(:disabled)").each(function () {
                    var index = this.index;

                    toggleEntryFromArray(valuesSelected, index, $select);
                    options.find("li:not(.optgroup)").eq(index).find(":checkbox").prop("checked", true);
                });
            }

            /**
             * Make option as selected and scroll to selected position
             * @param {jQuery} collection  Select options jQuery element
             * @param {Element} newOption  element of the new option
             * @param {Boolean} firstActivation  If on first activation of select
             */
            var activateOption = function activateOption(collection, newOption, firstActivation) {
                if (newOption) {
                    collection.find('li.selected').removeClass('selected');
                    var option = $(newOption);
                    option.addClass('selected');
                    if (!multiple || !!firstActivation) {
                        options.scrollTo(option);
                    }
                }
            };

            // Allow user to search by typing
            // this array is cleared after 1 second
            var filterQuery = [],
                onKeyDown = function onKeyDown(e) {
                    // TAB - switch to another input
                    if (e.which == 9) {
                        $newSelect.trigger('close');
                        return;
                    }

                    // ARROW DOWN WHEN SELECT IS CLOSED - open select options
                    if (e.which == 40 && !options.is(':visible')) {
                        $newSelect.trigger('open');
                        return;
                    }

                    // ENTER WHEN SELECT IS CLOSED - submit form
                    if (e.which == 13 && !options.is(':visible')) {
                        return;
                    }

                    e.preventDefault();

                    // CASE WHEN USER TYPE LETTERS
                    var letter = String.fromCharCode(e.which).toLowerCase(),
                        nonLetters = [9, 13, 27, 38, 40];
                    if (letter && nonLetters.indexOf(e.which) === -1) {
                        filterQuery.push(letter);

                        var string = filterQuery.join(''),
                            newOption = options.find('li').filter(function () {
                                return $(this).text().toLowerCase().indexOf(string) === 0;
                            })[0];

                        if (newOption) {
                            activateOption(options, newOption);
                        }
                    }

                    // ENTER - select option and close when select options are opened
                    if (e.which == 13) {
                        var activeOption = options.find('li.selected:not(.disabled)')[0];
                        if (activeOption) {
                            $(activeOption).trigger('click');
                            if (!multiple) {
                                $newSelect.trigger('close');
                            }
                        }
                    }

                    // ARROW DOWN - move to next not disabled option
                    if (e.which == 40) {
                        if (options.find('li.selected').length) {
                            newOption = options.find('li.selected').next('li:not(.disabled)')[0];
                        } else {
                            newOption = options.find('li:not(.disabled)')[0];
                        }
                        activateOption(options, newOption);
                    }

                    // ESC - close options
                    if (e.which == 27) {
                        $newSelect.trigger('close');
                    }

                    // ARROW UP - move to previous not disabled option
                    if (e.which == 38) {
                        newOption = options.find('li.selected').prev('li:not(.disabled)')[0];
                        if (newOption) activateOption(options, newOption);
                    }

                    // Automaticaly clean filter query so user can search again by starting letters
                    setTimeout(function () {
                        filterQuery = [];
                    }, 1000);
                };

            $newSelect.on('keydown', onKeyDown);
        });

        function toggleEntryFromArray(entriesArray, entryIndex, select) {
            var index = entriesArray.indexOf(entryIndex),
                notAdded = index === -1;

            if (notAdded) {
                entriesArray.push(entryIndex);
            } else {
                entriesArray.splice(index, 1);
            }

            select.siblings('ul.dropdown-content').find('li:not(.optgroup)').eq(entryIndex).toggleClass('active');

            // use notAdded instead of true (to detect if the option is selected or not)
            select.find('option').eq(entryIndex).prop('selected', notAdded);
            setValueToInput(entriesArray, select);

            return notAdded;
        }

        function setValueToInput(entriesArray, select) {
            var value = '';

            for (var i = 0, count = entriesArray.length; i < count; i++) {
                var text = select.find('option').eq(entriesArray[i]).text();

                i === 0 ? value += text : value += ', ' + text;
            }

            if (value === '') {
                value = select.find('option:disabled').eq(0).text();
            }

            select.siblings('input.select-dropdown').val(value);
        }
    };
})(jQuery);
(function ($) {

    var methods = {
        init: function init(options) {
            var defaults = {
                onShow: null,
                swipeable: false,
                responsiveThreshold: Infinity // breakpoint for swipeable
            };
            options = $.extend(defaults, options);
            var namespace = Materialize.objectSelectorString($(this));

            return this.each(function (i) {

                var uniqueNamespace = namespace + i;

                // For each set of tabs, we want to keep track of
                // which tab is active and its associated content
                var $this = $(this),
                    window_width = $(window).width();

                var $active,
                    $content,
                    $links = $this.find('li.tab a'),
                    $tabs_width = $this.width(),
                    $tabs_content = $(),
                    $tabs_wrapper,
                    $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length,
                    $indicator,
                    index = 0,
                    prev_index = 0,
                    clicked = false,
                    clickedTimeout,
                    transition = 300;

                // Finds right attribute for indicator based on active tab.
                // el: jQuery Object
                var calcRightPos = function calcRightPos(el) {
                    return Math.ceil($tabs_width - el.position().left - el[0].getBoundingClientRect().width - $this.scrollLeft());
                };

                // Finds left attribute for indicator based on active tab.
                // el: jQuery Object
                var calcLeftPos = function calcLeftPos(el) {
                    return Math.floor(el.position().left + $this.scrollLeft());
                };

                // Animates Indicator to active tab.
                // prev_index: Number
                var animateIndicator = function animateIndicator(prev_index) {
                    if (index - prev_index >= 0) {
                        $indicator.velocity({ "right": calcRightPos($active) }, { duration: transition, queue: false, easing: 'easeOutQuad' });
                        $indicator.velocity({ "left": calcLeftPos($active) }, { duration: transition, queue: false, easing: 'easeOutQuad', delay: 90 });
                    } else {
                        $indicator.velocity({ "left": calcLeftPos($active) }, { duration: transition, queue: false, easing: 'easeOutQuad' });
                        $indicator.velocity({ "right": calcRightPos($active) }, { duration: transition, queue: false, easing: 'easeOutQuad', delay: 90 });
                    }
                };

                // Change swipeable according to responsive threshold
                if (options.swipeable) {
                    if (window_width > options.responsiveThreshold) {
                        options.swipeable = false;
                    }
                }

                // If the location.hash matches one of the links, use that as the active tab.
                $active = $($links.filter('[href="' + location.hash + '"]'));

                // If no match is found, use the first link or any with class 'active' as the initial active tab.
                if ($active.length === 0) {
                    $active = $(this).find('li.tab a.active').first();
                }
                if ($active.length === 0) {
                    $active = $(this).find('li.tab a').first();
                }

                $active.addClass('active');
                index = $links.index($active);
                if (index < 0) {
                    index = 0;
                }

                if ($active[0] !== undefined) {
                    $content = $($active[0].hash);
                    $content.addClass('active');
                }

                // append indicator then set indicator width to tab width
                if (!$this.find('.indicator').length) {
                    $this.append('<li class="indicator"></li>');
                }
                $indicator = $this.find('.indicator');

                // we make sure that the indicator is at the end of the tabs
                $this.append($indicator);

                if ($this.is(":visible")) {
                    // $indicator.css({"right": $tabs_width - ((index + 1) * $tab_width)});
                    // $indicator.css({"left": index * $tab_width});
                    setTimeout(function () {
                        $indicator.css({ "right": calcRightPos($active) });
                        $indicator.css({ "left": calcLeftPos($active) });
                    }, 0);
                }
                $(window).off('resize.tabs-' + uniqueNamespace).on('resize.tabs-' + uniqueNamespace, function () {
                    $tabs_width = $this.width();
                    $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length;
                    if (index < 0) {
                        index = 0;
                    }
                    if ($tab_width !== 0 && $tabs_width !== 0) {
                        $indicator.css({ "right": calcRightPos($active) });
                        $indicator.css({ "left": calcLeftPos($active) });
                    }
                });

                // Initialize Tabs Content.
                if (options.swipeable) {
                    // TODO: Duplicate calls with swipeable? handle multiple div wrapping.
                    $links.each(function () {
                        var $curr_content = $(Materialize.escapeHash(this.hash));
                        $curr_content.addClass('carousel-item');
                        $tabs_content = $tabs_content.add($curr_content);
                    });
                    $tabs_wrapper = $tabs_content.wrapAll('<div class="tabs-content carousel"></div>');
                    $tabs_content.css('display', '');
                    $('.tabs-content.carousel').carousel({
                        fullWidth: true,
                        noWrap: true,
                        onCycleTo: function onCycleTo(item) {
                            if (!clicked) {
                                var prev_index = index;
                                index = $tabs_wrapper.index(item);
                                $active.removeClass('active');
                                $active = $links.eq(index);
                                $active.addClass('active');
                                animateIndicator(prev_index);
                                if (typeof options.onShow === "function") {
                                    options.onShow.call($this[0], $content);
                                }
                            }
                        }
                    });
                } else {
                    // Hide the remaining content
                    $links.not($active).each(function () {
                        $(Materialize.escapeHash(this.hash)).hide();
                    });
                }

                // Bind the click event handler
                $this.off('click.tabs').on('click.tabs', 'a', function (e) {
                    if ($(this).parent().hasClass('disabled')) {
                        e.preventDefault();
                        return;
                    }

                    // Act as regular link if target attribute is specified.
                    if (!!$(this).attr("target")) {
                        return;
                    }

                    clicked = true;
                    $tabs_width = $this.width();
                    $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length;

                    // Make the old tab inactive.
                    $active.removeClass('active');
                    var $oldContent = $content;

                    // Update the variables with the new link and content
                    $active = $(this);
                    $content = $(Materialize.escapeHash(this.hash));
                    $links = $this.find('li.tab a');
                    var activeRect = $active.position();

                    // Make the tab active.
                    $active.addClass('active');
                    prev_index = index;
                    index = $links.index($(this));
                    if (index < 0) {
                        index = 0;
                    }
                    // Change url to current tab
                    // window.location.hash = $active.attr('href');

                    // Swap content
                    if (options.swipeable) {
                        if ($tabs_content.length) {
                            $tabs_content.carousel('set', index, function () {
                                if (typeof options.onShow === "function") {
                                    options.onShow.call($this[0], $content);
                                }
                            });
                        }
                    } else {
                        if ($content !== undefined) {
                            $content.show();
                            $content.addClass('active');
                            if (typeof options.onShow === "function") {
                                options.onShow.call(this, $content);
                            }
                        }

                        if ($oldContent !== undefined && !$oldContent.is($content)) {
                            $oldContent.hide();
                            $oldContent.removeClass('active');
                        }
                    }

                    // Reset clicked state
                    clickedTimeout = setTimeout(function () {
                        clicked = false;
                    }, transition);

                    // Update indicator
                    animateIndicator(prev_index);

                    // Prevent the anchor's default click action
                    e.preventDefault();
                });
            });
        },
        select_tab: function select_tab(id) {
            this.find('a[href="#' + id + '"]').trigger('click');
        }
    };

    $.fn.tabs = function (methodOrOptions) {
        if (methods[methodOrOptions]) {
            return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if ((typeof methodOrOptions === "undefined" ? "undefined" : _typeof(methodOrOptions)) === 'object' || !methodOrOptions) {
            // Default to "init"
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + methodOrOptions + ' does not exist on jQuery.tabs');
        }
    };

    $(document).ready(function () {
        $('ul.tabs').tabs();
    });
})(jQuery);
(function ($, Vel) {
    'use strict';

    var _defaults = {
        opacity: 0.84,
        inDuration: 250,
        outDuration: 250,
        ready: undefined,
        complete: undefined,
        dismissible: true,
        startingTop: '1%',
        endingTop: '1%'
    };

    /**
     * @class
     *
     */

    var Modal = function () {
        /**
         * Construct Modal instance and set up overlay
         * @constructor
         * @param {jQuery} $el
         * @param {Object} options
         */
        function Modal($el, options) {
            _classCallCheck(this, Modal);

            // If exists, destroy and reinitialize
            if (!!$el[0].M_Modal) {
                $el[0].M_Modal.destroy();
            }

            /**
             * The jQuery element
             * @type {jQuery}
             */
            this.$el = $el;

            /**
             * Options for the modal
             * @member Modal#options
             * @prop {Number} [opacity=0.84] - Opacity of the modal overlay
             * @prop {Number} [inDuration=250] - Length in ms of enter transition
             * @prop {Number} [outDuration=250] - Length in ms of exit transition
             * @prop {Function} ready - Callback function called when modal is finished entering
             * @prop {Function} complete - Callback function called when modal is finished exiting
             * @prop {Boolean} [dismissible=true] - Allow modal to be dismissed by keyboard or overlay click
             * @prop {String} [startingTop='4%'] - startingTop
             * @prop {String} [endingTop='10%'] - endingTop
             */
            this.options = $.extend({}, Modal.defaults, options);

            /**
             * Describes open/close state of modal
             * @type {Boolean}
             */
            this.isOpen = false;

            this.$el[0].M_Modal = this;
            this.id = $el.attr('id');
            this.openingTrigger = undefined;
            this.$overlay = $('<div class="modal-overlay"></div>');

            Modal._increment++;
            Modal._count++;
            this.$overlay[0].style.zIndex = 1000 + Modal._increment * 2;
            this.$el[0].style.zIndex = 1000 + Modal._increment * 2 + 1;
            this.setupEventHandlers();
        }

        _createClass(Modal, [{
            key: "getInstance",


            /**
             * Get Instance
             */
            value: function getInstance() {
                return this;
            }

            /**
             * Teardown component
             */

        }, {
            key: "destroy",
            value: function destroy() {
                this.removeEventHandlers();
                this.$el[0].removeAttribute('style');
                if (!!this.$overlay[0].parentNode) {
                    this.$overlay[0].parentNode.removeChild(this.$overlay[0]);
                }
                this.$el[0].M_Modal = undefined;
                Modal._count--;
            }

            /**
             * Setup Event Handlers
             */

        }, {
            key: "setupEventHandlers",
            value: function setupEventHandlers() {
                this.handleOverlayClickBound = this.handleOverlayClick.bind(this);
                this.handleModalCloseClickBound = this.handleModalCloseClick.bind(this);

                if (Modal._count === 1) {
                    document.body.addEventListener('click', this.handleTriggerClick);
                }
                this.$overlay[0].addEventListener('click', this.handleOverlayClickBound);
                this.$el[0].addEventListener('click', this.handleModalCloseClickBound);
            }

            /**
             * Remove Event Handlers
             */

        }, {
            key: "removeEventHandlers",
            value: function removeEventHandlers() {
                if (Modal._count === 0) {
                    document.body.removeEventListener('click', this.handleTriggerClick);
                }
                this.$overlay[0].removeEventListener('click', this.handleOverlayClickBound);
                this.$el[0].removeEventListener('click', this.handleModalCloseClickBound);
            }

            /**
             * Handle Trigger Click
             * @param {Event} e
             */

        }, {
            key: "handleTriggerClick",
            value: function handleTriggerClick(e) {
                var $trigger = $(e.target).closest('.modal-trigger');
                if (e.target && $trigger.length) {
                    var modalId = $trigger[0].getAttribute('href');
                    if (modalId) {
                        modalId = modalId.slice(1);
                    } else {
                        modalId = $trigger[0].getAttribute('data-target');
                    }
                    var modalInstance = document.getElementById(modalId).M_Modal;
                    if (modalInstance) {
                        modalInstance.open($trigger);
                    }
                    e.preventDefault();
                }
            }

            /**
             * Handle Overlay Click
             */

        }, {
            key: "handleOverlayClick",
            value: function handleOverlayClick() {
                if (this.options.dismissible) {
                    this.close();
                }
            }

            /**
             * Handle Modal Close Click
             * @param {Event} e
             */

        }, {
            key: "handleModalCloseClick",
            value: function handleModalCloseClick(e) {
                var $closeTrigger = $(e.target).closest('.modal-close');
                if (e.target && $closeTrigger.length) {
                    this.close();
                }
            }

            /**
             * Handle Keydown
             * @param {Event} e
             */

        }, {
            key: "handleKeydown",
            value: function handleKeydown(e) {
                // ESC key
                if (e.keyCode === 27 && this.options.dismissible) {
                    this.close();
                }
            }

            /**
             * Animate in modal
             */

        }, {
            key: "animateIn",
            value: function animateIn() {
                var _this2 = this;

                // Set initial styles
                $.extend(this.$el[0].style, {
                    display: 'block',
                    opacity: 0
                });
                $.extend(this.$overlay[0].style, {
                    display: 'block',
                    opacity: 0
                });

                // Animate overlay
                Vel(this.$overlay[0], { opacity: this.options.opacity }, { duration: this.options.inDuration, queue: false, ease: 'easeOutCubic' });

                // Define modal animation options
                var enterVelocityOptions = {
                    duration: this.options.inDuration,
                    queue: false,
                    ease: 'easeOutCubic',
                    // Handle modal ready callback
                    complete: function complete() {
                        if (typeof _this2.options.ready === 'function') {
                            _this2.options.ready.call(_this2, _this2.$el, _this2.openingTrigger);
                        }
                    }
                };

                // Bottom sheet animation
                if (this.$el[0].classList.contains('bottom-sheet')) {
                    Vel(this.$el[0], { bottom: 0, opacity: 1 }, enterVelocityOptions);

                    // Normal modal animation
                } else {
                    Vel.hook(this.$el[0], 'scaleX', 0.7);
                    Vel(this.$el[0], { opacity: 1, scaleX: 1 }, enterVelocityOptions);
                }
            }

            /**
             * Animate out modal
             */

        }, {
            key: "animateOut",
            value: function animateOut() {
                var _this3 = this;

                // Animate overlay
                Vel(this.$overlay[0], { opacity: 0 }, { duration: this.options.outDuration, queue: false, ease: 'easeOutQuart' });

                // Define modal animation options
                var exitVelocityOptions = {
                    duration: this.options.outDuration,
                    queue: false,
                    ease: 'easeOutCubic',
                    // Handle modal ready callback
                    complete: function complete() {
                        _this3.$el[0].style.display = 'none';
                        // Call complete callback
                        if (typeof _this3.options.complete === 'function') {
                            _this3.options.complete.call(_this3, _this3.$el);
                        }
                        _this3.$overlay[0].parentNode.removeChild(_this3.$overlay[0]);
                    }
                };

                // Bottom sheet animation
                if (this.$el[0].classList.contains('bottom-sheet')) {
                    Vel(this.$el[0], { bottom: '-100%', opacity: 0 }, exitVelocityOptions);

                    // Normal modal animation
                } else {
                    Vel(this.$el[0], { opacity: 0, scaleX: 0.7 }, exitVelocityOptions);
                }
            }

            /**
             * Open Modal
             * @param {jQuery} [$trigger]
             */

        }, {
            key: "open",
            value: function open($trigger) {
                if (this.isOpen) {
                    return;
                }

                this.isOpen = true;
                var body = document.body;
                body.style.overflow = 'hidden';
                this.$el[0].classList.add('open');
                body.appendChild(this.$overlay[0]);

                // Set opening trigger, undefined indicates modal was opened by javascript
                this.openingTrigger = !!$trigger ? $trigger : undefined;

                if (this.options.dismissible) {
                    this.handleKeydownBound = this.handleKeydown.bind(this);
                    document.addEventListener('keydown', this.handleKeydownBound);
                }

                this.animateIn();

                return this;
            }

            /**
             * Close Modal
             */

        }, {
            key: "close",
            value: function close() {
                if (!this.isOpen) {
                    return;
                }

                this.isOpen = false;
                this.$el[0].classList.remove('open');
                document.body.style.overflow = '';

                if (this.options.dismissible) {
                    document.removeEventListener('keydown', this.handleKeydownBound);
                }

                this.animateOut();

                return this;
            }
        }], [{
            key: "init",
            value: function init($els, options) {
                var arr = [];
                $els.each(function () {
                    arr.push(new Modal($(this), options));
                });
                return arr;
            }
        }, {
            key: "defaults",
            get: function get() {
                return _defaults;
            }
        }]);

        return Modal;
    }();

    /**
     * @static
     * @memberof Modal
     */


    Modal._increment = 0;

    /**
     * @static
     * @memberof Modal
     */
    Modal._count = 0;

    Materialize.Modal = Modal;

    $.fn.modal = function (methodOrOptions) {
        // Call plugin method if valid method name is passed in
        if (Modal.prototype[methodOrOptions]) {
            // Getter methods
            if (methodOrOptions.slice(0, 3) === 'get') {
                return this.first()[0].M_Modal[methodOrOptions]();

                // Void methods
            } else {
                return this.each(function () {
                    this.M_Modal[methodOrOptions]();
                });
            }

            // Initialize plugin if options or no argument is passed in
        } else if ((typeof methodOrOptions === "undefined" ? "undefined" : _typeof(methodOrOptions)) === 'object' || !methodOrOptions) {
            Modal.init(this, arguments[0]);
            return this;

            // Return error if an unrecognized  method name is passed in
        } else {
            $.error("Method " + methodOrOptions + " does not exist on jQuery.modal");
        }
    };
})(jQuery, Materialize.Vel);
(function ($) {
    $.fn.tooltip = function (options) {
        var timeout = null,
            margin = 5;

        // Defaults
        var defaults = {
            delay: 350,
            tooltip: '',
            position: 'bottom',
            html: false
        };

        // Remove tooltip from the activator
        if (options === "remove") {
            this.each(function () {
                $('#' + $(this).attr('data-tooltip-id')).remove();
                $(this).removeAttr('data-tooltip-id');
                $(this).off('mouseenter.tooltip mouseleave.tooltip');
            });
            return false;
        }

        options = $.extend(defaults, options);

        return this.each(function () {
            var tooltipId = Materialize.guid();
            var origin = $(this);

            // Destroy old tooltip
            if (origin.attr('data-tooltip-id')) {
                $('#' + origin.attr('data-tooltip-id')).remove();
            }

            origin.attr('data-tooltip-id', tooltipId);

            // Get attributes.
            var allowHtml, tooltipDelay, tooltipPosition, tooltipText, tooltipEl, backdrop;
            var setAttributes = function setAttributes() {
                allowHtml = origin.attr('data-html') ? origin.attr('data-html') === 'true' : options.html;
                tooltipDelay = origin.attr('data-delay');
                tooltipDelay = tooltipDelay === undefined || tooltipDelay === '' ? options.delay : tooltipDelay;
                tooltipPosition = origin.attr('data-position');
                tooltipPosition = tooltipPosition === undefined || tooltipPosition === '' ? options.position : tooltipPosition;
                tooltipText = origin.attr('data-tooltip');
                tooltipText = tooltipText === undefined || tooltipText === '' ? options.tooltip : tooltipText;
            };
            setAttributes();

            var renderTooltipEl = function renderTooltipEl() {
                var tooltip = $('<div class="material-tooltip"></div>');

                // Create Text span
                if (allowHtml) {
                    tooltipText = $('<span></span>').html(tooltipText);
                } else {
                    tooltipText = $('<span></span>').text(tooltipText);
                }

                // Create tooltip
                tooltip.append(tooltipText).appendTo($('body')).attr('id', tooltipId);

                // Create backdrop
                backdrop = $('<div class="backdrop"></div>');
                backdrop.appendTo(tooltip);
                return tooltip;
            };
            tooltipEl = renderTooltipEl();

            // Destroy previously binded events
            origin.off('mouseenter.tooltip mouseleave.tooltip');
            // Mouse In
            var started = false,
                timeoutRef;
            origin.on({ 'mouseenter.tooltip': function mouseenterTooltip(e) {
                    var showTooltip = function showTooltip() {
                        setAttributes();
                        started = true;
                        tooltipEl.velocity('stop');
                        backdrop.velocity('stop');
                        tooltipEl.css({ visibility: 'visible', left: '0px', top: '0px' });

                        // Tooltip positioning
                        var originWidth = origin.outerWidth();
                        var originHeight = origin.outerHeight();
                        var tooltipHeight = tooltipEl.outerHeight();
                        var tooltipWidth = tooltipEl.outerWidth();
                        var tooltipVerticalMovement = '0px';
                        var tooltipHorizontalMovement = '0px';
                        var backdropOffsetWidth = backdrop[0].offsetWidth;
                        var backdropOffsetHeight = backdrop[0].offsetHeight;
                        var scaleXFactor = 8;
                        var scaleYFactor = 8;
                        var scaleFactor = 0;
                        var targetTop, targetLeft, newCoordinates;

                        if (tooltipPosition === "top") {
                            // Top Position
                            targetTop = origin.offset().top - tooltipHeight - margin;
                            targetLeft = origin.offset().left + originWidth / 2 - tooltipWidth / 2;
                            newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
                            tooltipVerticalMovement = '-10px';
                            backdrop.css({
                                bottom: 0,
                                left: 0,
                                borderRadius: '14px 14px 0 0',
                                transformOrigin: '50% 100%',
                                marginTop: tooltipHeight,
                                marginLeft: tooltipWidth / 2 - backdropOffsetWidth / 2
                            });
                        }
                        // Left Position
                        else if (tooltipPosition === "left") {
                            targetTop = origin.offset().top + originHeight / 2 - tooltipHeight / 2;
                            targetLeft = origin.offset().left - tooltipWidth - margin;
                            newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

                            tooltipHorizontalMovement = '-10px';
                            backdrop.css({
                                top: '-7px',
                                right: 0,
                                width: '14px',
                                height: '14px',
                                borderRadius: '14px 0 0 14px',
                                transformOrigin: '95% 50%',
                                marginTop: tooltipHeight / 2,
                                marginLeft: tooltipWidth
                            });
                        }
                        // Right Position
                        else if (tooltipPosition === "right") {
                            targetTop = origin.offset().top + originHeight / 2 - tooltipHeight / 2;
                            targetLeft = origin.offset().left + originWidth + margin;
                            newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

                            tooltipHorizontalMovement = '+10px';
                            backdrop.css({
                                top: '-7px',
                                left: 0,
                                width: '14px',
                                height: '14px',
                                borderRadius: '0 14px 14px 0',
                                transformOrigin: '5% 50%',
                                marginTop: tooltipHeight / 2,
                                marginLeft: '0px'
                            });
                        } else {
                            // Bottom Position
                            targetTop = origin.offset().top + origin.outerHeight() + margin;
                            targetLeft = origin.offset().left + originWidth / 2 - tooltipWidth / 2;
                            newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
                            tooltipVerticalMovement = '+10px';
                            backdrop.css({
                                top: 0,
                                left: 0,
                                marginLeft: tooltipWidth / 2 - backdropOffsetWidth / 2
                            });
                        }

                        // Set tooptip css placement
                        tooltipEl.css({
                            top: newCoordinates.y,
                            left: newCoordinates.x
                        });

                        // Calculate Scale to fill
                        scaleXFactor = Math.SQRT2 * tooltipWidth / parseInt(backdropOffsetWidth);
                        scaleYFactor = Math.SQRT2 * tooltipHeight / parseInt(backdropOffsetHeight);
                        scaleFactor = Math.max(scaleXFactor, scaleYFactor);

                        tooltipEl.velocity({ translateY: tooltipVerticalMovement, translateX: tooltipHorizontalMovement }, { duration: 350, queue: false }).velocity({ opacity: 1 }, { duration: 300, delay: 50, queue: false });
                        backdrop.css({ visibility: 'visible' }).velocity({ opacity: 1 }, { duration: 55, delay: 0, queue: false }).velocity({ scaleX: scaleFactor, scaleY: scaleFactor }, { duration: 300, delay: 0, queue: false, easing: 'easeInOutQuad' });
                    };

                    timeoutRef = setTimeout(showTooltip, tooltipDelay); // End Interval

                    // Mouse Out
                },
                'mouseleave.tooltip': function mouseleaveTooltip() {
                    // Reset State
                    started = false;
                    clearTimeout(timeoutRef);

                    // Animate back
                    setTimeout(function () {
                        if (started !== true) {
                            tooltipEl.velocity({
                                opacity: 0, translateY: 0, translateX: 0 }, { duration: 225, queue: false });
                            backdrop.velocity({ opacity: 0, scaleX: 1, scaleY: 1 }, {
                                duration: 225,
                                queue: false,
                                complete: function complete() {
                                    backdrop.css({ visibility: 'hidden' });
                                    tooltipEl.css({ visibility: 'hidden' });
                                    started = false;
                                }
                            });
                        }
                    }, 225);
                }
            });
        });
    };

    var repositionWithinScreen = function repositionWithinScreen(x, y, width, height) {
        var newX = x;
        var newY = y;

        if (newX < 0) {
            newX = 4;
        } else if (newX + width > window.innerWidth) {
            newX -= newX + width - window.innerWidth;
        }

        if (newY < 0) {
            newY = 4;
        } else if (newY + height > window.innerHeight + $(window).scrollTop) {
            newY -= newY + height - window.innerHeight;
        }

        return { x: newX, y: newY };
    };

    $(document).ready(function () {
        $('.tooltipped').tooltip();
    });
})(jQuery);

(function ($) {
    $(function () {
        var $siteNav = $('#slide-out');
        var wasMouse = true;
        var $mobileBtnCollapse = $('.slideNav-btn');

        function slideWrapper(arg) {
            if (arg) {
                $('.wrapper').addClass('right-slide');
            } else {
                $('.wrapper').removeClass('right-slide');
            }
        }

        function mousToggleNav(arg, moused) {

            if (!arg) return false;

            if (moused) {
                $(arg).on('mouseenter', function (event) {
                    if (wasMouse) {
                        if (!$(event.target).parents('li').hasClass('slideNav') && !$(event.target).hasClass('side-nav')) {
                            if ($siteNav.hasClass('small-fixed')) {
                                $siteNav.removeClass('small-fixed').addClass('big-fixed');
                                slideWrapper(true);
                            }
                        }

                        $siteNav.find('li').hover(function (event) {
                            event.preventDefault();
                            if (!$(this).hasClass('slideNav')) {
                                if ($siteNav.hasClass('small-fixed')) {
                                    $siteNav.removeClass('small-fixed').addClass('big-fixed');
                                    slideWrapper(true);
                                }
                            }
                        });
                    }
                });
            } else {
                $(arg).on('mouseleave', function (event) {
                    if (wasMouse) {
                        if ($siteNav.hasClass('big-fixed')) {
                            $siteNav.removeClass('big-fixed').addClass('small-fixed');
                            slideWrapper(false);
                        }
                    }
                });
            }
        }

        $siteNav.on('click', '.slideNav', function () {
            var eventObj = $(this);

            if ($(window).width() > 992) {
                if ($siteNav.hasClass('small-fixed')) {
                    $siteNav.removeClass('small-fixed').addClass('big-fixed');
                    eventObj.addClass('active');
                    slideWrapper(true);
                    wasMouse = false;
                } else if ($siteNav.hasClass('big-fixed') && !eventObj.hasClass('active')) {
                    $siteNav.off('mouseleave');
                    eventObj.addClass('active');
                } else if ($siteNav.hasClass('big-fixed') && eventObj.hasClass('active')) {
                    eventObj.removeClass('active');
                    $siteNav.removeClass('big-fixed').addClass('small-fixed');
                    slideWrapper(false);
                    wasMouse = true;

                    mousToggleNav($siteNav, false);
                }
            } else {
                slideWrapper(false);
                $siteNav.removeClass('active').addClass('small-fixed');
                $('.slideNav').removeClass('active');
            }
            event.preventDefault();
        });

        if ($(window).width() > 992) {
            mousToggleNav($siteNav, true);
            mousToggleNav($siteNav, false);
        }

        $mobileBtnCollapse.on('click', function (event) {
            event.preventDefault();

            if ($(window).width() < 993) {
                if (!$siteNav.hasClass('active')) {
                    $siteNav.addClass('big-fixed active');
                    slideWrapper(true);
                    $('.slideNav').addClass('active');
                } else {
                    slideWrapper(false);
                    $siteNav.removeClass('active').addClass('small-fixed');
                    $('.slideNav').removeClass('active');
                }
            }
        });
    });
})(jQuery);
(function ($) {
    $(function () {
        /*
    * ÐœÐµÑ‚Ð¾Ð´ Ð´Ð»Ñ Ð¼Ð¸Ð½Ð¸Ð¼Ð°Ð»ÑŒÐ½Ð¾Ð¹ Ð²Ñ‹ÑÐ¾Ñ‚Ñ‹ ÑÑ‚Ñ€.
    * */
        function minHeightPage() {
            var h_w = $(window).height();
            var h_s_h = $('.site-header').height();
            var h_s_f = $('.site-footer').outerHeight(true);

            if ($('body').height() < h_w) {
                $('.main').css('min-height', h_w - h_s_h - h_s_f);
            }
        }

        minHeightPage();

        $(document).on('click', function () {
            minHeightPage();
        });

        var checkboxBlock = $('.checkbox-block');

        $(checkboxBlock).on('click', function () {
            var inputChecked = $(this).find('input');
            if (inputChecked.prop('checked')) {
                inputChecked.prop("checked", false);
            } else {
                inputChecked.prop("checked", true);
            }
        });

        $(document).on('change', 'input:checked', function () {
            var checkedInput = $(this).attr('data-delivery-method');
            $('.delivery-method').addClass('hide');

            if ($('#' + checkedInput).hasClass('hide')) {
                $('#' + checkedInput).removeClass('hide');
            }
        });

        /*
    * page up button
    * */
        var pageUp = $('.page-up');

        window.onscroll = function () {
            var pageY = window.pageYOffset || document.documentElement.scrollTop;
            var innerHeight = document.documentElement.clientHeight;

            if (pageY > innerHeight) {
                pageUp.removeClass('hide');
            } else {
                pageUp.addClass('hide');
            }
        };

        pageUp.on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            return false;
        });

        /*
    * button propose changes
    * */
        var btnProposeChanges = $('.btn-propose-changes');

        btnProposeChanges.on('click', 'a.btn-times', function (event) {
            btnProposeChanges.addClass('hide');
        });

        // init components
        $('.modal').modal({
            startingTop: '4%', // Starting top style attribute
            endingTop: '10%'
        });
        $('.tooltipped').tooltip();
        $('.collapsible').collapsible();
        $('select').material_select();

        $('input.autocomplete').autocomplete({
            data: {
                "Apple": null,
                "Microsoft": null,
                "Google": 'https://placehold.it/250x250'
            },
            limit: 20,
            minLength: 1 // The minimum length of the input for the autocomplete to start. Default: 1.
        });

        $('.add-link').on('click', function (event) {
            event.preventDefault();
            var id = $(this).attr('href');

            if ($(id).hasClass('hide')) {
                $(id).removeClass('hide');
            } else {
                $(id).addClass('hide');
            }
        });
    });
})(jQuery);

(function ($) {
    jQuery.fn.tagNameLowerCase = function () {
        return this.prop("tagName").toLowerCase();
    };

    $(function () {
        var $news = $('.news');
        var arrayCardContent = $news.find('.card-content');
        var arrayCardAction = $news.find('.card-action');
        var indexCardContent = null;
        var elemsHeightMax = null;
        var defaultHeightIdx = 300;

        function childrenOuterHeight(elem, idx, minHeight) {
            elem.children().each(function (idx, elem) {
                elemsHeightMax += $(elem).outerHeight(true);

                if (elemsHeightMax > minHeight) {
                    return false;
                }

                // if ($(elem).tagNameLowerCase() === 'ul') {
                //     var heightContainer = null;
                //
                //     for (var i = 0; i <= idx; i++) {
                //         // console.log($($(arrayCardContent[idxElem]).children()[i]).height());
                //
                //         heightContainer += $($(arrayCardContent[idxElem]).children()[i]).outerHeight(true);
                //
                //
                //     }
                //
                //     console.log(heightContainer);
                // }
            });

            $(arrayCardContent[idx]).attr('data-default-height', elemsHeightMax).css('height', elemsHeightMax);
            $(arrayCardContent[idx]).siblings('.card-action').children('.expand').removeClass('hide');
        }

        function defaultCardContentHeight(cardContent) {
            cardContent.each(function (idx, elem) {
                console.log($(elem).outerHeight(true));

                if ($(elem).outerHeight(true) > defaultHeightIdx) {

                    if ($(window).width() > 767) {
                        childrenOuterHeight($(elem), idx, defaultHeightIdx);
                    } else {
                        childrenOuterHeight($(elem), idx, 300);
                    }
                }

                // $(arrayCardContent[idxElem])
                //     .parents('.card.horizontal')
                //     .attr('data-max-height', $(arrayCardContent[idxElem]).parents('.card.horizontal').height())
                //     .css('max-height', $(arrayCardContent[idxElem]).parents('.card.horizontal').height());
            });
        }

        function clickedLinkCardAction(elem, cardContentHeight) {
            var toCurtail = $('.toCurtail');

            if ($(elem).hasClass('expand')) {
                if ($('.toCurtail')) {
                    toCurtail.parent('.card-action').siblings('.card-content').animate({ 'height': cardContentHeight }, 600);
                    toCurtail.removeClass('toCurtail').addClass('expand');
                    // toCurtail.parents('.card.horizontal').css('max-height', cardHorizontalHeight);
                }

                // $(elem).parents('.card.horizontal').css('max-height', '100%');
                $(elem).parent('.card-action').siblings('.card-content').animate({ 'height': '100%' }, 600);
                $(elem).removeClass('expand').addClass('toCurtail');
            } else {
                $(elem).parent('.card-action').siblings('.card-content').animate({ 'height': cardContentHeight }, 600);
                $(elem).removeClass('toCurtail').addClass('expand');
                // $(elem).parents('.card.horizontal').css('max-height', cardHorizontalHeight);
            }
        }

        defaultCardContentHeight(arrayCardContent);

        arrayCardAction.on('click', 'a', function (event) {
            event.preventDefault();

            var dataDefaultHeight = $(this).offsetParent().prev().data('default-height');
            // var dataDefaultHeightCardHorizontal = $(this).parents('.card.horizontal').data('default-height');

            clickedLinkCardAction($(this), dataDefaultHeight);
        });

        $(window).resize(function () {
            elemsHeightMax = null;
            defaultCardContentHeight(arrayCardContent);
        });
    });
})(jQuery);
(function ($) {
    $(function () {
        var $calc = $('.calc');
        var $availability = $('.cth-availability');
        var $showHideBtn = $('.show-hide-btn');
        var $cartTableBody = $('.cart-table-body');

        $availability.each(function (idx, elem) {
            if ($(elem).children('span').is('span')) {
                if ($(elem).find('.fa-times').is('.fa-times')) {
                    $($calc[idx - 1]).addClass('disabled');
                }
            }
        });

        /*
    * Calc method
    * */

        $calc.find('input').val(0);
        $calc.find('.minus').addClass('disabled');

        function calc(elem, argument) {
            var $input = elem.siblings('input.input-calc');
            var inputCalcVal = $input.val();

            if (argument) {
                $input.val(+inputCalcVal + 1);
                $input.siblings('.minus').removeClass('disabled');
            } else if (!argument && +inputCalcVal > 1 && !elem.hasClass('btn-trash')) {
                $input.val(+inputCalcVal - 1);
            } else {
                $input.val(0);
                $input.siblings('.minus').addClass('disabled');
            }
        }

        $calc.on('click', 'a.minus', function () {
            var $this = $(this);
            calc($this, false);
        });

        $calc.on('click', 'a.plus', function () {
            var $this = $(this);
            calc($this, true);
        });

        $calc.on('click', 'a.btn-trash', function () {
            var $this = $(this);
            calc($this, false);
        });

        $showHideBtn.on('click', function (event) {
            event.preventDefault();

            if ($(window).width() > 767) {
                var thisParentWidth = $(this).parent('.cth-photo').outerWidth();
                var thisParentParentWidth = $(this).parent('.cth-photo').parent('.cart-table-body').outerHeight();
                var thisParentSiblingsMobileShow = $(this).parent('.cth-photo').siblings('.mobile-show').outerHeight();

                if ($(this).children('.fa').hasClass('fa-plus')) {
                    $(this).children('.fa-plus').removeClass('fa-plus').addClass('fa-minus');
                    $(this).parent('.cth-photo').parent('.cart-table-body').height(thisParentParentWidth + thisParentSiblingsMobileShow);
                    $(this).parent('.cth-photo').siblings('.mobile-show').css({
                        'display': 'block',
                        'left': thisParentWidth + 10,
                        'margin-top': thisParentParentWidth - 20
                    });
                } else {
                    $(this).children('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
                    $(this).parent('.cth-photo').parent('.cart-table-body').height('auto');
                    $(this).parent('.cth-photo').siblings('.mobile-show').removeAttr('style');
                }
            } else if ($(window).width() < 767) {
                if ($(this).children('.fa').hasClass('fa-plus')) {
                    $(this).children('.fa-plus').removeClass('fa-plus').addClass('fa-minus');
                    $(this).closest('.table-wrapper').siblings('.block-hide-show-mobile').css('display', 'block');
                } else {
                    $(this).children('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
                    $(this).closest('.table-wrapper').siblings('.block-hide-show-mobile').removeAttr('style');
                }
            }
        });

        function mobileTableProduct() {
            $cartTableBody.each(function () {
                var $tableWrapperPN = $('<div class="table-wrapper photo name"></div>');
                var $tableWrapperWSQ = $('<div class="table-wrapper weight size quantity"><div class="cart-table-heading"></div><div class="cart-table-body"></div></div>');
                var $blockShowHideTable = $('<div class="block-hide-show-mobile"></div>');
                var $photo = $(this).children('.cth-photo');
                var $name = $(this).children('.cth-name');
                var $attr = $(this).children('.cth-attr');
                var $size = $(this).children('.cth-size');
                var $quantity = $(this).children('.cth-quantity');
                var $priceRetail = $(this).children('.cth-price-retail');
                var $priceWholesale = $(this).children('.cth-price-wholesale');
                var $amount = $(this).children('.cth-amount');

                if ($(window).width() < 768) {
                    $tableWrapperPN.append($photo);
                    $tableWrapperPN.append($name);

                    $tableWrapperWSQ.children('.cart-table-heading').append('<div class="cth-attr">ÐÑ‚Ñ€Ð¸Ð±ÑƒÑ‚Ñ‹</div>');
                    $tableWrapperWSQ.children('.cart-table-heading').append('<div class="cth-quantity">ÐšÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾</div>');

                    $tableWrapperWSQ.children('.cart-table-body').append($attr);
                    $tableWrapperWSQ.children('.cart-table-body').append($quantity);

                    $blockShowHideTable.append($priceRetail);
                    $blockShowHideTable.append($priceWholesale);
                    $blockShowHideTable.append($tableWrapperWSQ);
                    $blockShowHideTable.append($amount);

                    $(this).prepend($tableWrapperPN);
                    $(this).append($blockShowHideTable);
                }
            });
        }

        mobileTableProduct();
    });
})(jQuery);
(function ($) {
    $(function () {

        var SelectCheckbox = {};

        SelectCheckbox.$this = $('.select-wrapper');
        SelectCheckbox.$inputSelectDorpdown = SelectCheckbox.$this.find('input.select-dropdown');
        SelectCheckbox.$ulSelectDorpdown = SelectCheckbox.$this.find('.multiple-select-dropdown');
        SelectCheckbox.$select = SelectCheckbox.$this.find('.initialized');

        SelectCheckbox.$inputSelectDorpdown.off('focus');

        // ÐœÐµÑ‚Ð¾Ð´ Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ¸ ÑÐ¾Ð±Ñ‹Ñ‚Ð¸Ð¹ Ñ‡ÐµÐºÐ±Ð¾ÐºÑÐ¾Ð²
        SelectCheckbox.checkboxed = function () {
            var _this = this;
            var $selectDropdownLi = _this.$ulSelectDorpdown.find('li');
            var selectDropdownShow = false;

            function methodForHandlingInputVal() {
                var inputSelectDropdawnVal = '';
                if ($(_this.$select.find('option')[0]).val() === 'all') {
                    $selectDropdownLi.each(function (idx, elem) {
                        if (!selectDropdownShow) {
                            if ($($selectDropdownLi[0]).hasClass('active')) {
                                _this.$inputSelectDorpdown.val('');
                            }
                        } else {
                            if ($(elem).find(':checkbox').prop('checked') && idx !== 0) {
                                inputSelectDropdawnVal += $(elem).find('span').text() + ', ';
                            }
                        }
                    });
                    _this.$inputSelectDorpdown.val(inputSelectDropdawnVal);
                }
            }

            methodForHandlingInputVal();

            $selectDropdownLi.on('click', function (event) {
                selectDropdownShow = true;

                if ($(this).index() > 0) {
                    $($selectDropdownLi[0]).removeClass('active');
                    $($selectDropdownLi[0]).find(':checkbox').removeAttr('checked');

                    methodForHandlingInputVal();
                } else if ($(this).index() === 0) {
                    if (!$(this).find(':checked').prop('checked')) {
                        $(this).siblings('li').find(':checkbox').removeAttr('checked');
                        $(this).siblings('li').removeClass('active');
                        _this.$inputSelectDorpdown.val('');
                    } else {
                        $(this).siblings('li').find(':checkbox').prop('checked', 'checked');
                        $(this).siblings('li').addClass('active');
                        methodForHandlingInputVal();
                    }
                }
            });
        };

        // Ð”Ð¾Ð±Ð°Ð²Ð»ÐµÐ½Ð¸Ðµ placeholder input ÐµÑÐ»Ð¸ ÐµÑÑ‚ÑŒ Ð¾Ð¿Ñ†Ð¸Ñ - all
        SelectCheckbox.inputPlaceholder = function () {
            var _this = this;
            var allOption = _this.forEachSelectOptions('all');

            if (allOption) {
                _this.$inputSelectDorpdown.attr('placeholder', allOption.text());
            }
        };

        // ÐœÐµÑ‚Ð¾Ð´ Ð²Ñ‹Ð±Ð¾Ñ€Ð° option Ð¿Ð¾ Ð·Ð°Ð´Ð´Ð°Ð½Ð¾Ð¼Ñƒ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸ÑŽ
        SelectCheckbox.forEachSelectOptions = function (arg) {
            var _this = this;
            var optionSelect = _this.$this.find('option');
            var elementOption;
            optionSelect.each(function (idx, elem) {
                if ($(elem).val() === arg) {
                    return elementOption = $(elem);
                }
            });
            return elementOption;
        };

        SelectCheckbox.cssStyleToSelect = function () {
            var _this = this;

            if (_this.$this.length > 0) {
                var lengthThis = _this.$this.length + 1;
                _this.$this.each(function (idx, elem) {
                    $(elem).css('z-index', lengthThis);

                    lengthThis--;
                });
            }
        };

        SelectCheckbox.init = function () {
            this.inputPlaceholder();
            this.checkboxed();
            this.cssStyleToSelect();
        };
        SelectCheckbox.init();
    });
})(jQuery);
;(function ($) {
    $(function () {
        var $tplModal = $('#priceModal');
        var $body = $('body');
        var modalHeigh = null;
        var heightBoolen = false;
        var idxScroll = 0;

        $(document).on('click', 'a.price-image', function (event) {
            // event.preventDefault();

            $tplModal.modal('open');

            $body.css('overflow-y', 'auto');

            var $arrayImg = $(this).find('.price-image-modal').clone().removeClass('hide');
            var $productName = $(this).find('.product-name').text();
            var $productModel = $(this).find('.product-model').clone();

            var $sliderFor = $arrayImg.clone().addClass('slider-for');
            var $sliderNav = $arrayImg.clone().addClass('slider-nav');

            $tplModal.find('.modal-title h2').empty().append($productName);
            $tplModal.find('.product-model').empty().append($productModel);
            $tplModal.find('.modal-content').empty().append($sliderFor);
            $tplModal.find('.modal-content').append($sliderNav);

            $sliderFor.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                asNavFor: $sliderNav,
                responsive: {
                    breakpoint: 767,
                    settings: {
                        arrows: false
                    }
                }
            });
            $sliderNav.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: $sliderFor,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                responsive: {
                    breakpoint: 767,
                    settings: {
                        arrows: false
                    }
                }
            });

            if ($tplModal.hasClass('open')) {
                modalHeigh = $tplModal.height();

                if (innerHeight < modalHeigh) {
                    heightBoolen = true;
                }

                window.onscroll = function () {
                    var pageY = window.pageYOffset || document.documentElement.scrollTop;
                    var innerHeight = document.documentElement.clientHeight;

                    if (heightBoolen) {
                        if (pageY > idxScroll) {
                            $tplModal.css({
                                'top': pageY - (modalHeigh - innerHeight),
                                'transition': 'top 0.5s ease, position 0.5s ease'
                            });
                        } else {
                            $tplModal.css({
                                'top': pageY,
                                'transition': 'top 0.5s ease, position 0.5s ease'
                            });
                        }
                    } else {
                        $tplModal.css({
                            'top': $(this).scrollTop() + (innerHeight - modalHeigh) / 2,
                            'transition': 'top 0.5s ease, position 0.5s ease'
                        });
                    }

                    idxScroll = pageY;
                };
            }
        });

        $(document).on('click', '.btn-close', function () {
            $body.removeAttr('style');
        });

        $(document).on('click', '.modal-overlay', function () {
            $body.removeAttr('style');
        });
    });
})(jQuery);
(function ($) {
    $.fn.fileUploader = function (filesToUpload, sectionIdentifier) {
        var fileIdCounter = 0;

        this.closest(".files").change(function (evt) {
            var output = [];

            console.log(this);

            for (var i = 0; i < evt.target.files.length; i++) {
                fileIdCounter++;
                var file = evt.target.files[i];
                var fileId = sectionIdentifier + fileIdCounter;

                filesToUpload.push({
                    id: fileId,
                    file: file
                });

                var removeLink = "<a class=\"removeFile\" href=\"#\" data-fileid=\"" + fileId + "\">&nbsp; &nbsp;<i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></a>";

                output.push("<li><strong>", escape(file.name), "</strong> ", removeLink, "</li> ");
            };

            $(this).children(".fileList").append(output.join(""));

            //reset the input to null - nice little chrome bug!
            evt.target.value = null;
        });

        $(this).on("click", ".removeFile", function (e) {
            e.preventDefault();

            var fileId = $(this).parent().children("a").data("fileid");

            // loop through the files array and check if the name of that file matches FileName
            // and get the index of the match
            for (var i = 0; i < filesToUpload.length; ++i) {
                if (filesToUpload[i].id === fileId) filesToUpload.splice(i, 1);
            }

            $(this).parent().remove();
        });

        this.clear = function () {
            for (var i = 0; i < filesToUpload.length; ++i) {
                if (filesToUpload[i].id.indexOf(sectionIdentifier) >= 0) filesToUpload.splice(i, 1);
            }

            $(this).children(".fileList").empty();
        };

        return this;
    };

    $(function () {
        var $navBlock = $('.company-profile .nav-block');
        var $addInput = $('.add-input');
        var $removeActualAddressModal = $('#removeActualAddress');
        var filesToUpload = [];
        var $removeActualAddress;

        $("#files1").fileUploader(filesToUpload, "files1");

        $(document).on('click', '.nav-remove', function (event) {
            event.preventDefault();

            if (!$(this).hasClass('nav-remove-input')) {
                $removeActualAddressModal.modal('open');
                $removeActualAddress = $(this);
            } else {
                console.log($(this).closest('.input-nav-wrapper').siblings('.input-nav-wrapper').length);
                if ($(this).closest('.input-nav-wrapper').siblings('.input-nav-wrapper').length >= 1) {
                    $(this).closest('.input-nav-wrapper').remove();
                } else {
                    $(this).addClass('disabled');
                }
            }

            // $(this).closest('.text-field').remove();
        });

        $removeActualAddressModal.on('click', '.btn-cancel-modal', function (event) {
            event.preventDefault();
            $removeActualAddressModal.modal('close');
        });

        $removeActualAddressModal.on('click', '.btn-remove-modal', function (event) {
            event.preventDefault();
            $removeActualAddressModal.modal('close');
            $removeActualAddress.closest('.text-field').remove();
        });

        $addInput.on('click', function (event) {
            event.preventDefault();
            var $inputNavWrap = $(this).siblings('.input-nav-wrapper');
            var $input = $inputNavWrap.find('input');
            var il = $input.length;
            var idx = il + 1;
            var newInput;
            var inputNavWrapTpl = '<div class="input-nav-wrapper">\n' + '<span class="nav-block">\n' + '<span class="nav-remove nav-remove-input"><i class="fa fa-trash-o" aria-hidden="true"></i></span>\n' + '</span>\n' + '</div>';

            if (!$($input[il - 1]).val()) {
                return false;
            }

            newInput = '<input id="' + $input.attr('id') + '-' + idx + '" ' + 'type="' + $input.attr('type') + '" ' + 'name="' + $input.attr('name') + '-' + idx + '" ' + 'class="' + $input.attr('class') + '" ' + 'value="">';

            $(this).before($(inputNavWrapTpl));

            $(this).siblings('.input-nav-wrapper').each(function (idx, elem) {
                if (!$(elem).children('input').is('input')) {
                    $(elem).prepend(newInput);
                }

                $(elem).find('.nav-block').removeClass('hide');
                $(elem).find('.nav-block').children().removeClass('disabled');
            });

            $(this).siblings('.input-nav-wrapper').each(function (idx, elem) {
                if ($(elem).children('input').attr('type') === 'tel') {
                    Inputmask({ "mask": "+38 (999) 999-99-99", "placeholder": "_" }).mask($(elem).children('input'));
                }
            });
        });

        // $navBlock.on('click', '.nav-remove-input', function( event ) {
        //     event.preventDefault();
        //
        //     $(this).closest('.input-nav-wrapper').remove();
        // });
    });
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXQuanMiXSwibmFtZXMiOlsiZmFjdG9yeSIsImRlZmluZSIsImFtZCIsIiQiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsImpRdWVyeSIsImVhc2luZyIsInBvdyIsIk1hdGgiLCJzcXJ0Iiwic2luIiwiY29zIiwiUEkiLCJjMSIsImMyIiwiYzMiLCJjNCIsImM1IiwiYm91bmNlT3V0IiwieCIsIm4xIiwiZDEiLCJleHRlbmQiLCJkZWYiLCJzd2luZyIsImVhc2VJblF1YWQiLCJlYXNlT3V0UXVhZCIsImVhc2VJbk91dFF1YWQiLCJlYXNlSW5DdWJpYyIsImVhc2VPdXRDdWJpYyIsImVhc2VJbk91dEN1YmljIiwiZWFzZUluUXVhcnQiLCJlYXNlT3V0UXVhcnQiLCJlYXNlSW5PdXRRdWFydCIsImVhc2VJblF1aW50IiwiZWFzZU91dFF1aW50IiwiZWFzZUluT3V0UXVpbnQiLCJlYXNlSW5TaW5lIiwiZWFzZU91dFNpbmUiLCJlYXNlSW5PdXRTaW5lIiwiZWFzZUluRXhwbyIsImVhc2VPdXRFeHBvIiwiZWFzZUluT3V0RXhwbyIsImVhc2VJbkNpcmMiLCJlYXNlT3V0Q2lyYyIsImVhc2VJbk91dENpcmMiLCJlYXNlSW5FbGFzdGljIiwiZWFzZU91dEVsYXN0aWMiLCJlYXNlSW5PdXRFbGFzdGljIiwiZWFzZUluQmFjayIsImVhc2VPdXRCYWNrIiwiZWFzZUluT3V0QmFjayIsImVhc2VJbkJvdW5jZSIsImVhc2VPdXRCb3VuY2UiLCJlYXNlSW5PdXRCb3VuY2UiLCJWZWxvY2l0eSIsImNvbnNvbGUiLCJsb2ciLCJlIiwidCIsImxlbmd0aCIsImEiLCJyIiwidHlwZSIsImlzV2luZG93Iiwibm9kZVR5cGUiLCJmbiIsImluaXQiLCJ3aW5kb3ciLCJuIiwiaSIsImNhbGwiLCJpc0FycmF5IiwiQXJyYXkiLCJpc1BsYWluT2JqZWN0IiwiY29uc3RydWN0b3IiLCJvIiwicHJvdG90eXBlIiwiZWFjaCIsInMiLCJhcHBseSIsImRhdGEiLCJleHBhbmRvIiwidXVpZCIsInJlbW92ZURhdGEiLCJhcmd1bWVudHMiLCJsIiwidSIsImMiLCJxdWV1ZSIsIk9iamVjdCIsInB1c2giLCJkZXF1ZXVlIiwic2hpZnQiLCJ1bnNoaWZ0IiwiRXJyb3IiLCJvZmZzZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJsZWZ0IiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsInNjcm9sbFRvcCIsImNsaWVudFRvcCIsInBhZ2VYT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsImNsaWVudExlZnQiLCJwb3NpdGlvbiIsIm9mZnNldFBhcmVudCIsInRvTG93ZXJDYXNlIiwic3R5bGUiLCJ0ZXN0Iiwibm9kZU5hbWUiLCJwYXJzZUZsb2F0IiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyTGVmdFdpZHRoIiwiRGF0ZSIsImdldFRpbWUiLCJoYXNPd25Qcm9wZXJ0eSIsInRvU3RyaW5nIiwic3BsaXQiLCJVdGlsaXRpZXMiLCJtIiwiaXNXcmFwcGVkIiwic2xpY2UiLCJpc05vZGUiLCJmIiwicm91bmQiLCJwIiwiYiIsInciLCJhYnMiLCJoIiwidiIsImQiLCJ5IiwiZyIsIlYiLCJTIiwiUCIsImlzTmFOIiwiaXNGaW5pdGUiLCJtaW4iLCJtYXgiLCJGbG9hdDMyQXJyYXkiLCJDIiwiZ2V0Q29udHJvbFBvaW50cyIsIlQiLCJpc1N0cmluZyIsIkVhc2luZ3MiLCJjb25jYXQiLCJkZWZhdWx0cyIsIlN0YXRlIiwiY2FsbHMiLCJkdXJhdGlvbiIsImVsZW1lbnQiLCJkaXNwbGF5Iiwic2V0UHJvcGVydHlWYWx1ZSIsInZpc2liaWxpdHkiLCJrIiwiQSIsIkYiLCJqIiwiZW5kVmFsdWUiLCJFIiwic3RhcnRWYWx1ZSIsImN1cnJlbnRWYWx1ZSIsIkhvb2tzIiwicmVnaXN0ZXJlZCIsIkgiLCJnZXRSb290IiwiTiIsInJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGUiLCJyb290UHJvcGVydHlWYWx1ZSIsIkwiLCJ1bml0VHlwZSIsInNjcm9sbERhdGEiLCJOb3JtYWxpemF0aW9ucyIsIm1vYmlsZUhBIiwidHJhbnNmb3JtQ2FjaGUiLCJ0cmFuc2xhdGUzZCIsImZsdXNoVHJhbnNmb3JtQ2FjaGUiLCJwcm9ncmVzcyIsImlzVGlja2luZyIsImxvb3AiLCJpc0FuaW1hdGluZyIsIkxpc3RzIiwidHJhbnNmb3JtczNEIiwiUmVnRXhwIiwiVmFsdWVzIiwicmVtb3ZlQ2xhc3MiLCJjb21wbGV0ZSIsInNldFRpbWVvdXQiLCJ0d2VlbnNDb250YWluZXIiLCJkZWxheSIsImRvY3VtZW50TW9kZSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsImlzRnVuY3Rpb24iLCJpc05vZGVMaXN0IiwianF1ZXJ5IiwiWmVwdG8iLCJ6ZXB0byIsImlzWiIsImlzU1ZHIiwiU1ZHRWxlbWVudCIsImlzRW1wdHlPYmplY3QiLCJ2ZWxvY2l0eSIsImFuaW1hdGUiLCJpc01vYmlsZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImlzQW5kcm9pZCIsImlzR2luZ2VyYnJlYWQiLCJpc0Nocm9tZSIsImNocm9tZSIsImlzRmlyZWZveCIsInByZWZpeEVsZW1lbnQiLCJwcmVmaXhNYXRjaGVzIiwic2Nyb2xsQW5jaG9yIiwic2Nyb2xsUHJvcGVydHlMZWZ0Iiwic2Nyb2xsUHJvcGVydHlUb3AiLCJDU1MiLCJSZWRpcmVjdHMiLCJQcm9taXNlIiwiYmVnaW4iLCJfY2FjaGVWYWx1ZXMiLCJjb21wdXRlZFN0eWxlIiwiaG9vayIsIm1vY2siLCJ2ZXJzaW9uIiwibWFqb3IiLCJtaW5vciIsInBhdGNoIiwiZGVidWciLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5IiwicGFyZW50Tm9kZSIsInRlbnNpb24iLCJmcmljdGlvbiIsImR4IiwiZHYiLCJsaW5lYXIiLCJzcHJpbmciLCJleHAiLCJSZWdFeCIsImlzSGV4IiwidmFsdWVVbndyYXAiLCJ3cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkIiwidmFsdWVTcGxpdCIsImNvbG9ycyIsInRyYW5zZm9ybXNCYXNlIiwidGVtcGxhdGVzIiwidGV4dFNoYWRvdyIsImJveFNoYWRvdyIsImNsaXAiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJwZXJzcGVjdGl2ZU9yaWdpbiIsInJlZ2lzdGVyIiwibWF0Y2giLCJqb2luIiwiY2xlYW5Sb290UHJvcGVydHlWYWx1ZSIsImlzQ1NTTnVsbFZhbHVlIiwiZXh0cmFjdFZhbHVlIiwiaW5qZWN0VmFsdWUiLCJyZXBsYWNlIiwiYmx1ciIsIm9wYWNpdHkiLCJ6b29tIiwicGFyc2VJbnQiLCJzdWJzdHIiLCJibGFjayIsImJsdWUiLCJncmF5IiwiZ3JlZW4iLCJyZWQiLCJ3aGl0ZSIsImhleFRvUmdiIiwiTmFtZXMiLCJjYW1lbENhc2UiLCJ0b1VwcGVyQ2FzZSIsIlNWR0F0dHJpYnV0ZSIsInByZWZpeENoZWNrIiwiZXhlYyIsImdldFVuaXRUeXBlIiwiZ2V0RGlzcGxheVR5cGUiLCJ0YWdOYW1lIiwiYWRkQ2xhc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJjbGFzc05hbWUiLCJyZW1vdmUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiY3NzIiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0V2lkdGgiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0QkJveCIsImdldEF0dHJpYnV0ZSIsImNvbnRhaW5lciIsImRpcmVjdGlvbiIsInNjcm9sbFRvIiwiYWx0ZXJuYXRlVmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJ0cmFuc2xhdGUiLCJza2V3WCIsInNrZXdZIiwic2NhbGUiLCJyb3RhdGUiLCJwcm9taXNlIiwibXlQYXJlbnQiLCJmb250U2l6ZSIsImxhc3RQb3NpdGlvbiIsImxhc3RQYXJlbnQiLCJsYXN0Rm9udFNpemUiLCJlbVRvUHgiLCJsYXN0RW1Ub1B4IiwicGVyY2VudFRvUHhXaWR0aCIsImxhc3RQZXJjZW50VG9QeFdpZHRoIiwicGVyY2VudFRvUHhIZWlnaHQiLCJsYXN0UGVyY2VudFRvUHhIZWlnaHQiLCJjcmVhdGVFbGVtZW50TlMiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwicmVtVG9QeCIsInZ3VG9QeCIsImlubmVyV2lkdGgiLCJ2aFRvUHgiLCJpbm5lckhlaWdodCIsIkpTT04iLCJzdHJpbmdpZnkiLCJheGlzIiwic2Nyb2xsIiwib3B0cyIsInoiLCJPIiwicSIsIk0iLCJJIiwiQiIsIlciLCJHIiwiWSIsIkQiLCJRIiwiUiIsInJlc29sdmVyIiwidmVsb2NpdHlRdWV1ZUVudHJ5RmxhZyIsImRlbGF5VGltZXIiLCJuZXh0IiwicHJvcGVydGllcyIsIm5hbWVzIiwiZWxlbWVudHMiLCJvcHRpb25zIiwicmVqZWN0ZXIiLCJjbGVhclRpbWVvdXQiLCJiYWNrd2FyZHMiLCJyZXZlcnNlIiwic3RhZ2dlciIsImRyYWciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJoaWRkZW4iLCJhZGRFdmVudExpc3RlbmVyIiwiaGVpZ2h0IiwibWFyZ2luQm90dG9tIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJvdmVyZmxvdyIsIlBhY2thZ2UiLCJNYXRlcmlhbGl6ZSIsImRlZmF1bHQiLCJsYXN0VGltZSIsInZlbmRvcnMiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwibm93IiwibmV4dFRpbWUiLCJvYmplY3RTZWxlY3RvclN0cmluZyIsIm9iaiIsInRhZ1N0ciIsInByb3AiLCJpZFN0ciIsImF0dHIiLCJjbGFzc1N0ciIsImd1aWQiLCJzNCIsImZsb29yIiwicmFuZG9tIiwic3Vic3RyaW5nIiwiZXNjYXBlSGFzaCIsImhhc2giLCJlbGVtZW50T3JQYXJlbnRJc0ZpeGVkIiwiJGVsZW1lbnQiLCIkY2hlY2tFbGVtZW50cyIsInBhcmVudHMiLCJpc0ZpeGVkIiwidGhyb3R0bGUiLCJmdW5jIiwid2FpdCIsImNvbnRleHQiLCJhcmdzIiwicmVzdWx0IiwidGltZW91dCIsInByZXZpb3VzIiwibGF0ZXIiLCJsZWFkaW5nIiwicmVtYWluaW5nIiwidHJhaWxpbmciLCJWZWwiLCJlbGVtIiwiZHJvcGRvd24iLCJpbkR1cmF0aW9uIiwib3V0RHVyYXRpb24iLCJjb25zdHJhaW5XaWR0aCIsImhvdmVyIiwiZ3V0dGVyIiwiYmVsb3dPcmlnaW4iLCJhbGlnbm1lbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0cmlnZ2VyIiwib3JpZ2luIiwiY3Vycl9vcHRpb25zIiwiaXNGb2N1c2VkIiwiYWN0aXZhdGVzIiwidXBkYXRlT3B0aW9ucyIsInVuZGVmaW5lZCIsImFmdGVyIiwicGxhY2VEcm9wZG93biIsImV2ZW50VHlwZSIsIm9yaWdpbldpZHRoIiwid2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJvcmlnaW5IZWlnaHQiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwiY3VyckFsaWdubWVudCIsImd1dHRlclNwYWNpbmciLCJsZWZ0UG9zaXRpb24iLCJ2ZXJ0aWNhbE9mZnNldCIsInNjcm9sbFlPZmZzZXQiLCJzY3JvbGxYT2Zmc2V0Iiwid3JhcHBlciIsInBhcmVudCIsImlzIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsV2lkdGgiLCJjbGllbnRXaWR0aCIsImFkanVzdGVkSGVpZ2h0Iiwic3RvcCIsIm9mZnNldFJpZ2h0Iiwic2xpZGVEb3duIiwib24iLCJoaWRlRHJvcGRvd24iLCJvZmYiLCJmYWRlT3V0Iiwib3BlbiIsInRvRWwiLCJ0b0VsZW1lbnQiLCJyZWxhdGVkVGFyZ2V0IiwiY2xvc2VzdCIsImN1cnJlbnRUYXJnZXQiLCJoYXNDbGFzcyIsInRhcmdldCIsInByZXZlbnREZWZhdWx0IiwicmVhZHkiLCJjb2xsYXBzaWJsZSIsIm1ldGhvZFBhcmFtIiwiYWNjb3JkaW9uIiwib25PcGVuIiwib25DbG9zZSIsIm1ldGhvZE5hbWUiLCIkdGhpcyIsIiRwYW5lbF9oZWFkZXJzIiwiZmluZCIsImNvbGxhcHNpYmxlX3R5cGUiLCJhY2NvcmRpb25PcGVuIiwib2JqZWN0Iiwic2libGluZ3MiLCJzbGlkZVVwIiwibm90IiwiY2hpbGRyZW4iLCJleGVjQ2FsbGJhY2tzIiwiZXhwYW5kYWJsZU9wZW4iLCJjb2xsYXBzaWJsZU9wZW4iLCJub1RvZ2dsZSIsInRvZ2dsZUNsYXNzIiwiaXNDaGlsZHJlbk9mUGFuZWxIZWFkZXIiLCJwYW5lbEhlYWRlciIsImdldFBhbmVsSGVhZGVyIiwicmVtb3ZlRXZlbnRIYW5kbGVycyIsIiRjdXJyX2hlYWRlciIsImVxIiwiZmlsdGVyIiwiZmlyc3QiLCJ1cGRhdGVUZXh0RmllbGRzIiwiaW5wdXRfc2VsZWN0b3IiLCJpbmRleCIsInZhbCIsImF1dG9mb2N1cyIsInZhbGlkaXR5IiwiYmFkSW5wdXQiLCJ2YWxpZGF0ZV9maWVsZCIsImZvcm1SZXNldCIsInJlc2V0X3RleHQiLCJ0ZXh0IiwiJGlucHV0RWxlbWVudCIsInNlbGVjdG9yIiwiaGFzTGVuZ3RoIiwibGVuQXR0ciIsImxlbiIsInJhZGlvX2NoZWNrYm94Iiwid2hpY2giLCJvbmUiLCJoaWRkZW5EaXYiLCJhcHBlbmQiLCJ0ZXh0X2FyZWFfc2VsZWN0b3IiLCJ0ZXh0YXJlYUF1dG9SZXNpemUiLCIkdGV4dGFyZWEiLCJmb250RmFtaWx5IiwibGluZUhlaWdodCIsInBhZGRpbmciLCJjb250ZW50IiwiaHRtbCIsImZpbGVfZmllbGQiLCJwYXRoX2lucHV0IiwiZmlsZXMiLCJmaWxlX25hbWVzIiwibmFtZSIsInJhbmdlX3R5cGUiLCJyYW5nZV9tb3VzZWRvd24iLCJ0aHVtYiIsInNob3dSYW5nZUJ1YmJsZSIsInBhZGRpbmdMZWZ0IiwiY2FsY1JhbmdlT2Zmc2V0IiwicmFuZ2UiLCJwZXJjZW50IiwicmFuZ2Vfd3JhcHBlciIsImlucHV0IiwiYXV0b2NvbXBsZXRlIiwibGltaXQiLCJJbmZpbml0eSIsIm9uQXV0b2NvbXBsZXRlIiwibWluTGVuZ3RoIiwiJGlucHV0IiwiY291bnQiLCJhY3RpdmVJbmRleCIsIm9sZFZhbCIsIiRpbnB1dERpdiIsIiRhdXRvY29tcGxldGUiLCIkb2xkQXV0b2NvbXBsZXRlIiwiaGlnaGxpZ2h0Iiwic3RyaW5nIiwiJGVsIiwiaW1nIiwibWF0Y2hTdGFydCIsImluZGV4T2YiLCJtYXRjaEVuZCIsImJlZm9yZU1hdGNoIiwibWF0Y2hUZXh0IiwiYWZ0ZXJNYXRjaCIsInByZXBlbmQiLCJyZXNldEN1cnJlbnRFbGVtZW50IiwicmVtb3ZlQXV0b2NvbXBsZXRlIiwiZW1wdHkiLCJrZXkiLCJhdXRvY29tcGxldGVPcHRpb24iLCJrZXlDb2RlIiwibGlFbGVtZW50IiwibnVtSXRlbXMiLCIkYWN0aXZlIiwidHJpbSIsIm1hdGVyaWFsX3NlbGVjdCIsIiRzZWxlY3QiLCJtdWx0aXBsZSIsImxhc3RJRCIsInVud3JhcCIsInJlbW92ZUF0dHIiLCJ1bmlxdWVJRCIsInNlbGVjdENoaWxkcmVuIiwidmFsdWVzU2VsZWN0ZWQiLCJvcHRpb25zSG92ZXIiLCJsYWJlbCIsImFwcGVuZE9wdGlvbldpdGhJY29uIiwic2VsZWN0Iiwib3B0aW9uIiwiZGlzYWJsZWRDbGFzcyIsIm9wdGdyb3VwQ2xhc3MiLCJtdWx0aXBsZUNoZWNrYm94IiwiaWNvbl91cmwiLCJjbGFzc2VzIiwiY2xhc3NTdHJpbmciLCJzZWxlY3RPcHRpb25zIiwiY2xpY2siLCJzZWxlY3RlZCIsInRvZ2dsZUVudHJ5RnJvbUFycmF5IiwiJG5ld1NlbGVjdCIsImFjdGl2YXRlT3B0aW9uIiwid3JhcCIsImRyb3Bkb3duSWNvbiIsInNhbml0aXplZExhYmVsSHRtbCIsImJlZm9yZSIsInNlbGVjdGVkT3B0aW9uIiwiY29sbGVjdGlvbiIsIm5ld09wdGlvbiIsImZpcnN0QWN0aXZhdGlvbiIsImZpbHRlclF1ZXJ5Iiwib25LZXlEb3duIiwibGV0dGVyIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibm9uTGV0dGVycyIsImFjdGl2ZU9wdGlvbiIsInByZXYiLCJlbnRyaWVzQXJyYXkiLCJlbnRyeUluZGV4Iiwibm90QWRkZWQiLCJzcGxpY2UiLCJzZXRWYWx1ZVRvSW5wdXQiLCJ2YWx1ZSIsIm1ldGhvZHMiLCJvblNob3ciLCJzd2lwZWFibGUiLCJyZXNwb25zaXZlVGhyZXNob2xkIiwibmFtZXNwYWNlIiwidW5pcXVlTmFtZXNwYWNlIiwid2luZG93X3dpZHRoIiwiJGNvbnRlbnQiLCIkbGlua3MiLCIkdGFic193aWR0aCIsIiR0YWJzX2NvbnRlbnQiLCIkdGFic193cmFwcGVyIiwiJHRhYl93aWR0aCIsIiRpbmRpY2F0b3IiLCJwcmV2X2luZGV4IiwiY2xpY2tlZCIsImNsaWNrZWRUaW1lb3V0IiwidHJhbnNpdGlvbiIsImNhbGNSaWdodFBvcyIsImVsIiwiY2VpbCIsImNhbGNMZWZ0UG9zIiwiYW5pbWF0ZUluZGljYXRvciIsImxvY2F0aW9uIiwiJGN1cnJfY29udGVudCIsIndyYXBBbGwiLCJjYXJvdXNlbCIsImZ1bGxXaWR0aCIsIm5vV3JhcCIsIm9uQ3ljbGVUbyIsIml0ZW0iLCJoaWRlIiwiJG9sZENvbnRlbnQiLCJhY3RpdmVSZWN0Iiwic2hvdyIsInNlbGVjdF90YWIiLCJpZCIsInRhYnMiLCJtZXRob2RPck9wdGlvbnMiLCJlcnJvciIsIl9kZWZhdWx0cyIsImRpc21pc3NpYmxlIiwic3RhcnRpbmdUb3AiLCJlbmRpbmdUb3AiLCJNb2RhbCIsIk1fTW9kYWwiLCJkZXN0cm95IiwiaXNPcGVuIiwib3BlbmluZ1RyaWdnZXIiLCIkb3ZlcmxheSIsIl9pbmNyZW1lbnQiLCJfY291bnQiLCJ6SW5kZXgiLCJzZXR1cEV2ZW50SGFuZGxlcnMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJoYW5kbGVPdmVybGF5Q2xpY2tCb3VuZCIsImhhbmRsZU92ZXJsYXlDbGljayIsImJpbmQiLCJoYW5kbGVNb2RhbENsb3NlQ2xpY2tCb3VuZCIsImhhbmRsZU1vZGFsQ2xvc2VDbGljayIsImhhbmRsZVRyaWdnZXJDbGljayIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCIkdHJpZ2dlciIsIm1vZGFsSWQiLCJtb2RhbEluc3RhbmNlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbG9zZSIsIiRjbG9zZVRyaWdnZXIiLCJlYXNlIiwiZW50ZXJWZWxvY2l0eU9wdGlvbnMiLCJjb250YWlucyIsImJvdHRvbSIsInNjYWxlWCIsImV4aXRWZWxvY2l0eU9wdGlvbnMiLCJoYW5kbGVLZXlkb3duQm91bmQiLCJoYW5kbGVLZXlkb3duIiwiYW5pbWF0ZUluIiwiYW5pbWF0ZU91dCIsIiRlbHMiLCJhcnIiLCJtb2RhbCIsInRvb2x0aXAiLCJtYXJnaW4iLCJ0b29sdGlwSWQiLCJhbGxvd0h0bWwiLCJ0b29sdGlwRGVsYXkiLCJ0b29sdGlwUG9zaXRpb24iLCJ0b29sdGlwVGV4dCIsInRvb2x0aXBFbCIsImJhY2tkcm9wIiwic2V0QXR0cmlidXRlcyIsInJlbmRlclRvb2x0aXBFbCIsImFwcGVuZFRvIiwic3RhcnRlZCIsInRpbWVvdXRSZWYiLCJzaG93VG9vbHRpcCIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsInRvb2x0aXBIZWlnaHQiLCJ0b29sdGlwV2lkdGgiLCJ0b29sdGlwVmVydGljYWxNb3ZlbWVudCIsInRvb2x0aXBIb3Jpem9udGFsTW92ZW1lbnQiLCJiYWNrZHJvcE9mZnNldFdpZHRoIiwiYmFja2Ryb3BPZmZzZXRIZWlnaHQiLCJzY2FsZVhGYWN0b3IiLCJzY2FsZVlGYWN0b3IiLCJzY2FsZUZhY3RvciIsInRhcmdldFRvcCIsInRhcmdldExlZnQiLCJuZXdDb29yZGluYXRlcyIsInJlcG9zaXRpb25XaXRoaW5TY3JlZW4iLCJib3JkZXJSYWRpdXMiLCJyaWdodCIsIlNRUlQyIiwidHJhbnNsYXRlWSIsInRyYW5zbGF0ZVgiLCJzY2FsZVkiLCJuZXdYIiwibmV3WSIsIiRzaXRlTmF2Iiwid2FzTW91c2UiLCIkbW9iaWxlQnRuQ29sbGFwc2UiLCJzbGlkZVdyYXBwZXIiLCJhcmciLCJtb3VzVG9nZ2xlTmF2IiwibW91c2VkIiwiZXZlbnQiLCJldmVudE9iaiIsIm1pbkhlaWdodFBhZ2UiLCJoX3ciLCJoX3NfaCIsImhfc19mIiwiY2hlY2tib3hCbG9jayIsImlucHV0Q2hlY2tlZCIsImNoZWNrZWRJbnB1dCIsInBhZ2VVcCIsIm9uc2Nyb2xsIiwicGFnZVkiLCJidG5Qcm9wb3NlQ2hhbmdlcyIsInRhZ05hbWVMb3dlckNhc2UiLCIkbmV3cyIsImFycmF5Q2FyZENvbnRlbnQiLCJhcnJheUNhcmRBY3Rpb24iLCJpbmRleENhcmRDb250ZW50IiwiZWxlbXNIZWlnaHRNYXgiLCJkZWZhdWx0SGVpZ2h0SWR4IiwiY2hpbGRyZW5PdXRlckhlaWdodCIsImlkeCIsIm1pbkhlaWdodCIsImRlZmF1bHRDYXJkQ29udGVudEhlaWdodCIsImNhcmRDb250ZW50IiwiY2xpY2tlZExpbmtDYXJkQWN0aW9uIiwiY2FyZENvbnRlbnRIZWlnaHQiLCJ0b0N1cnRhaWwiLCJkYXRhRGVmYXVsdEhlaWdodCIsInJlc2l6ZSIsIiRjYWxjIiwiJGF2YWlsYWJpbGl0eSIsIiRzaG93SGlkZUJ0biIsIiRjYXJ0VGFibGVCb2R5IiwiY2FsYyIsImFyZ3VtZW50IiwiaW5wdXRDYWxjVmFsIiwidGhpc1BhcmVudFdpZHRoIiwidGhpc1BhcmVudFBhcmVudFdpZHRoIiwidGhpc1BhcmVudFNpYmxpbmdzTW9iaWxlU2hvdyIsIm1vYmlsZVRhYmxlUHJvZHVjdCIsIiR0YWJsZVdyYXBwZXJQTiIsIiR0YWJsZVdyYXBwZXJXU1EiLCIkYmxvY2tTaG93SGlkZVRhYmxlIiwiJHBob3RvIiwiJG5hbWUiLCIkYXR0ciIsIiRzaXplIiwiJHF1YW50aXR5IiwiJHByaWNlUmV0YWlsIiwiJHByaWNlV2hvbGVzYWxlIiwiJGFtb3VudCIsIlNlbGVjdENoZWNrYm94IiwiJGlucHV0U2VsZWN0RG9ycGRvd24iLCIkdWxTZWxlY3REb3JwZG93biIsImNoZWNrYm94ZWQiLCJfdGhpcyIsIiRzZWxlY3REcm9wZG93bkxpIiwic2VsZWN0RHJvcGRvd25TaG93IiwibWV0aG9kRm9ySGFuZGxpbmdJbnB1dFZhbCIsImlucHV0U2VsZWN0RHJvcGRhd25WYWwiLCJpbnB1dFBsYWNlaG9sZGVyIiwiYWxsT3B0aW9uIiwiZm9yRWFjaFNlbGVjdE9wdGlvbnMiLCJvcHRpb25TZWxlY3QiLCJlbGVtZW50T3B0aW9uIiwiY3NzU3R5bGVUb1NlbGVjdCIsImxlbmd0aFRoaXMiLCIkdHBsTW9kYWwiLCIkYm9keSIsIm1vZGFsSGVpZ2giLCJoZWlnaHRCb29sZW4iLCJpZHhTY3JvbGwiLCIkYXJyYXlJbWciLCJjbG9uZSIsIiRwcm9kdWN0TmFtZSIsIiRwcm9kdWN0TW9kZWwiLCIkc2xpZGVyRm9yIiwiJHNsaWRlck5hdiIsInNsaWNrIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcnJvd3MiLCJmYWRlIiwiYXNOYXZGb3IiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiZG90cyIsImNlbnRlck1vZGUiLCJmb2N1c09uU2VsZWN0IiwiZmlsZVVwbG9hZGVyIiwiZmlsZXNUb1VwbG9hZCIsInNlY3Rpb25JZGVudGlmaWVyIiwiZmlsZUlkQ291bnRlciIsImNoYW5nZSIsImV2dCIsIm91dHB1dCIsImZpbGUiLCJmaWxlSWQiLCJyZW1vdmVMaW5rIiwiZXNjYXBlIiwiY2xlYXIiLCIkbmF2QmxvY2siLCIkYWRkSW5wdXQiLCIkcmVtb3ZlQWN0dWFsQWRkcmVzc01vZGFsIiwiJHJlbW92ZUFjdHVhbEFkZHJlc3MiLCIkaW5wdXROYXZXcmFwIiwiaWwiLCJuZXdJbnB1dCIsImlucHV0TmF2V3JhcFRwbCIsIklucHV0bWFzayIsIm1hc2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0FBUUEsQ0FBQyxVQUFVQSxPQUFWLEVBQW1CO0FBQ25CLE1BQUksT0FBT0MsTUFBUCxLQUFrQixVQUFsQixJQUFnQ0EsT0FBT0MsR0FBM0MsRUFBZ0Q7QUFDL0NELFdBQU8sQ0FBQyxRQUFELENBQVAsRUFBbUIsVUFBVUUsQ0FBVixFQUFhO0FBQy9CLGFBQU9ILFFBQVFHLENBQVIsQ0FBUDtBQUNBLEtBRkQ7QUFHQSxHQUpELE1BSU8sSUFBSSxRQUFPQyxNQUFQLHlDQUFPQSxNQUFQLE9BQWtCLFFBQWxCLElBQThCLFFBQU9BLE9BQU9DLE9BQWQsTUFBMEIsUUFBNUQsRUFBc0U7QUFDNUVBLGNBQVVMLFFBQVFN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RyxJQUExQixDQUErQixNQUEvQixNQUEyQyxLQUEvQyxFQUFzRDtBQUNsRDJkLG9CQUFVLEVBQUMsUUFBUSxxQkFBVCxFQUFnQyxlQUFlLEdBQS9DLEVBQVYsRUFBK0RDLElBQS9ELENBQW9FLzFCLEVBQUU4WixJQUFGLEVBQVF3RSxRQUFSLENBQWlCLE9BQWpCLENBQXBFO0FBQ0g7QUFDSixPQUpEO0FBS0gsS0F2Q0Q7O0FBeUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxHQXJGRDtBQXNGSCxDQWhKRCxFQWdKR2xlLE1BaEpIIiwiZmlsZSI6ImluaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBqUXVlcnkgRWFzaW5nIHYxLjQuMCAtIGh0dHA6Ly9nc2dkLmNvLnVrL3NhbmRib3gvanF1ZXJ5L2Vhc2luZy9cclxuICogT3BlbiBzb3VyY2UgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLlxyXG4gKiBDb3B5cmlnaHQgwqkgMjAwOCBHZW9yZ2UgTWNHaW5sZXkgU21pdGhcclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9nZHNtaXRoL2pxdWVyeS1lYXNpbmcvbWFzdGVyL0xJQ0VOU0VcclxuKi9cclxuXHJcbihmdW5jdGlvbiAoZmFjdG9yeSkge1xyXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0ZGVmaW5lKFsnanF1ZXJ5J10sIGZ1bmN0aW9uICgkKSB7XHJcblx0XHRcdHJldHVybiBmYWN0b3J5KCQpO1xyXG5cdFx0fSk7XHJcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0ZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRmYWN0b3J5KGpRdWVyeSk7XHJcblx0fVxyXG59KShmdW5jdGlvbigkKXtcclxuXHJcbi8vIFByZXNlcnZlIHRoZSBvcmlnaW5hbCBqUXVlcnkgXCJzd2luZ1wiIGVhc2luZyBhcyBcImpzd2luZ1wiXHJcbiQuZWFzaW5nWydqc3dpbmcnXSA9ICQuZWFzaW5nWydzd2luZyddO1xyXG5cclxudmFyIHBvdyA9IE1hdGgucG93LFxyXG5cdHNxcnQgPSBNYXRoLnNxcnQsXHJcblx0c2luID0gTWF0aC5zaW4sXHJcblx0Y29zID0gTWF0aC5jb3MsXHJcblx0UEkgPSBNYXRoLlBJLFxyXG5cdGMxID0gMS43MDE1OCxcclxuXHRjMiA9IGMxICogMS41MjUsXHJcblx0YzMgPSBjMSArIDEsXHJcblx0YzQgPSAoIDIgKiBQSSApIC8gMyxcclxuXHRjNSA9ICggMiAqIFBJICkgLyA0LjU7XHJcblxyXG4vLyB4IGlzIHRoZSBmcmFjdGlvbiBvZiBhbmltYXRpb24gcHJvZ3Jlc3MsIGluIHRoZSByYW5nZSAwLi4xXHJcbmZ1bmN0aW9uIGJvdW5jZU91dCh4KSB7XHJcblx0dmFyIG4xID0gNy41NjI1LFxyXG5cdFx0ZDEgPSAyLjc1O1xyXG5cdGlmICggeCA8IDEvZDEgKSB7XHJcblx0XHRyZXR1cm4gbjEqeCp4O1xyXG5cdH0gZWxzZSBpZiAoIHggPCAyL2QxICkge1xyXG5cdFx0cmV0dXJuIG4xKih4LT0oMS41L2QxKSkqeCArIC43NTtcclxuXHR9IGVsc2UgaWYgKCB4IDwgMi41L2QxICkge1xyXG5cdFx0cmV0dXJuIG4xKih4LT0oMi4yNS9kMSkpKnggKyAuOTM3NTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIG4xKih4LT0oMi42MjUvZDEpKSp4ICsgLjk4NDM3NTtcclxuXHR9XHJcbn1cclxuXHJcbiQuZXh0ZW5kKCAkLmVhc2luZyxcclxue1xyXG5cdGRlZjogJ2Vhc2VPdXRRdWFkJyxcclxuXHRzd2luZzogZnVuY3Rpb24gKHgpIHtcclxuXHRcdHJldHVybiAkLmVhc2luZ1skLmVhc2luZy5kZWZdKHgpO1xyXG5cdH0sXHJcblx0ZWFzZUluUXVhZDogZnVuY3Rpb24gKHgpIHtcclxuXHRcdHJldHVybiB4ICogeDtcclxuXHR9LFxyXG5cdGVhc2VPdXRRdWFkOiBmdW5jdGlvbiAoeCkge1xyXG5cdFx0cmV0dXJuIDEgLSAoIDEgLSB4ICkgKiAoIDEgLSB4ICk7XHJcblx0fSxcclxuXHRlYXNlSW5PdXRRdWFkOiBmdW5jdGlvbiAoeCkge1xyXG5cdFx0cmV0dXJuIHggPCAwLjUgP1xyXG5cdFx0XHQyICogeCAqIHggOlxyXG5cdFx0XHQxIC0gcG93KCAtMiAqIHggKyAyLCAyICkgLyAyO1xyXG5cdH0sXHJcblx0ZWFzZUluQ3ViaWM6IGZ1bmN0aW9uICh4KSB7XHJcblx0XHRyZXR1cm4geCAqIHggKiB4O1xyXG5cdH0sXHJcblx0ZWFzZU91dEN1YmljOiBmdW5jdGlvbiAoeCkge1xyXG5cdFx0cmV0dXJuIDEgLSBwb3coIDEgLSB4LCAzICk7XHJcblx0fSxcclxuXHRlYXNlSW5PdXRDdWJpYzogZnVuY3Rpb24gKHgpIHtcclxuXHRcdHJldHVybiB4IDwgMC41ID9cclxuXHRcdFx0NCAqIHggKiB4ICogeCA6XHJcblx0XHRcdDEgLSBwb3coIC0yICogeCArIDIsIDMgKSAvIDI7XHJcblx0fSxcclxuXHRlYXNlSW5RdWFydDogZnVuY3Rpb24gKHgpIHtcclxuXHRcdHJldHVybiB4ICogeCAqIHggKiB4O1xyXG5cdH0sXHJcblx0ZWFzZU91dFF1YXJ0OiBmdW5jdGlvbiAoeCkge1xyXG5cdFx0cmV0dXJuIDEgLSBwb3coIDEgLSB4LCA0ICk7XHJcblx0fSxcclxuXHRlYXNlSW5PdXRRdWFydDogZnVuY3Rpb24gKHgpIHtcclxuXHRcdHJldHVybiB4IDwgMC41ID9cclxuXHRcdFx0OCAqIHggKiB4ICogeCAqIHggOlxyXG5cdFx0XHQxIC0gcG93KCAtMiAqIHggKyAyLCA0ICkgLyAyO1xyXG5cdH0sXHJcblx0ZWFzZUluUXVpbnQ6IGZ1bmN0aW9uICh4KSB7XHJcblx0XHRyZXR1cm4geCAqIHggKiB4ICogeCAqIHg7XHJcblx0fSxcclxuXHRlYXNlT3V0UXVpbnQ6IGZ1bmN0aW9uICh4KSB7XHJcblx0XHRyZXR1cm4gMSAtIHBvdyggMSAtIHgsIDUgKTtcclxuXHR9LFxyXG5cdGVhc2VJbk91dFF1aW50OiBmdW5jdGlvbiAoeCkge1xyXG5cdFx0cmV0dXJuIHggPCAwLjUgP1xyXG5cdFx0XHQxNiAqIHggKiB4ICogeCAqIHggKiB4IDpcclxuXHRcdFx0MSAtIHBvdyggLTIgKiB4ICsgMiwgNSApIC8gMjtcclxuXHR9LFxyXG5cdGVhc2VJblNpbmU6IGZ1bmN0aW9uICh4KSB7XHJcblx0XHRyZXR1cm4gMSAtIGNvcyggeCAqIFBJLzIgKTtcclxuXHR9LFxyXG5cdGVhc2VPdXRTaW5lOiBmdW5jdGlvbiAoeCkge1xyXG5cdFx0cmV0dXJuIHNpbiggeCAqIFBJLzIgKTtcclxuXHR9LFxyXG5cdGVhc2VJbk91dFNpbmU6IGZ1bmN0aW9uICh4KSB7XHJcblx0XHRyZXR1cm4gLSggY29zKCBQSSAqIHggKSAtIDEgKSAvIDI7XHJcblx0fSxcclxuXHRlYXNlSW5FeHBvOiBmdW5jdGlvbiAoeCkge1xyXG5cdFx0cmV0dXJuIHggPT09IDAgPyAwIDogcG93KCAyLCAxMCAqIHggLSAxMCApO1xyXG5cdH0sXHJcblx0ZWFzZU91dEV4cG86IGZ1bmN0aW9uICh4KSB7XHJcblx0XHRyZXR1cm4geCA9PT0gMSA/IDEgOiAxIC0gcG93KCAyLCAtMTAgKiB4ICk7XHJcblx0fSxcclxuXHRlYXNlSW5PdXRFeHBvOiBmdW5jdGlvbiAoeCkge1xyXG5cdFx0cmV0dXJuIHggPT09IDAgPyAwIDogeCA9PT0gMSA/IDEgOiB4IDwgMC41ID9cclxuXHRcdFx0cG93KCAyLCAyMCAqIHggLSAxMCApIC8gMiA6XHJcblx0XHRcdCggMiAtIHBvdyggMiwgLTIwICogeCArIDEwICkgKSAvIDI7XHJcblx0fSxcclxuXHRlYXNlSW5DaXJjOiBmdW5jdGlvbiAoeCkge1xyXG5cdFx0cmV0dXJuIDEgLSBzcXJ0KCAxIC0gcG93KCB4LCAyICkgKTtcclxuXHR9LFxyXG5cdGVhc2VPdXRDaXJjOiBmdW5jdGlvbiAoeCkge1xyXG5cdFx0cmV0dXJuIHNxcnQoIDEgLSBwb3coIHggLSAxLCAyICkgKTtcclxuXHR9LFxyXG5cdGVhc2VJbk91dENpcmM6IGZ1bmN0aW9uICh4KSB7XHJcblx0XHRyZXR1cm4geCA8IDAuNSA/XHJcblx0XHRcdCggMSAtIHNxcnQoIDEgLSBwb3coIDIgKiB4LCAyICkgKSApIC8gMiA6XHJcblx0XHRcdCggc3FydCggMSAtIHBvdyggLTIgKiB4ICsgMiwgMiApICkgKyAxICkgLyAyO1xyXG5cdH0sXHJcblx0ZWFzZUluRWxhc3RpYzogZnVuY3Rpb24gKHgpIHtcclxuXHRcdHJldHVybiB4ID09PSAwID8gMCA6IHggPT09IDEgPyAxIDpcclxuXHRcdFx0LXBvdyggMiwgMTAgKiB4IC0gMTAgKSAqIHNpbiggKCB4ICogMTAgLSAxMC43NSApICogYzQgKTtcclxuXHR9LFxyXG5cdGVhc2VPdXRFbGFzdGljOiBmdW5jdGlvbiAoeCkge1xyXG5cdFx0cmV0dXJuIHggPT09IDAgPyAwIDogeCA9PT0gMSA/IDEgOlxyXG5cdFx0XHRwb3coIDIsIC0xMCAqIHggKSAqIHNpbiggKCB4ICogMTAgLSAwLjc1ICkgKiBjNCApICsgMTtcclxuXHR9LFxyXG5cdGVhc2VJbk91dEVsYXN0aWM6IGZ1bmN0aW9uICh4KSB7XHJcblx0XHRyZXR1cm4geCA9PT0gMCA/IDAgOiB4ID09PSAxID8gMSA6IHggPCAwLjUgP1xyXG5cdFx0XHQtKCBwb3coIDIsIDIwICogeCAtIDEwICkgKiBzaW4oICggMjAgKiB4IC0gMTEuMTI1ICkgKiBjNSApKSAvIDIgOlxyXG5cdFx0XHRwb3coIDIsIC0yMCAqIHggKyAxMCApICogc2luKCAoIDIwICogeCAtIDExLjEyNSApICogYzUgKSAvIDIgKyAxO1xyXG5cdH0sXHJcblx0ZWFzZUluQmFjazogZnVuY3Rpb24gKHgpIHtcclxuXHRcdHJldHVybiBjMyAqIHggKiB4ICogeCAtIGMxICogeCAqIHg7XHJcblx0fSxcclxuXHRlYXNlT3V0QmFjazogZnVuY3Rpb24gKHgpIHtcclxuXHRcdHJldHVybiAxICsgYzMgKiBwb3coIHggLSAxLCAzICkgKyBjMSAqIHBvdyggeCAtIDEsIDIgKTtcclxuXHR9LFxyXG5cdGVhc2VJbk91dEJhY2s6IGZ1bmN0aW9uICh4KSB7XHJcblx0XHRyZXR1cm4geCA8IDAuNSA/XHJcblx0XHRcdCggcG93KCAyICogeCwgMiApICogKCAoIGMyICsgMSApICogMiAqIHggLSBjMiApICkgLyAyIDpcclxuXHRcdFx0KCBwb3coIDIgKiB4IC0gMiwgMiApICooICggYzIgKyAxICkgKiAoIHggKiAyIC0gMiApICsgYzIgKSArIDIgKSAvIDI7XHJcblx0fSxcclxuXHRlYXNlSW5Cb3VuY2U6IGZ1bmN0aW9uICh4KSB7XHJcblx0XHRyZXR1cm4gMSAtIGJvdW5jZU91dCggMSAtIHggKTtcclxuXHR9LFxyXG5cdGVhc2VPdXRCb3VuY2U6IGJvdW5jZU91dCxcclxuXHRlYXNlSW5PdXRCb3VuY2U6IGZ1bmN0aW9uICh4KSB7XHJcblx0XHRyZXR1cm4geCA8IDAuNSA/XHJcblx0XHRcdCggMSAtIGJvdW5jZU91dCggMSAtIDIgKiB4ICkgKSAvIDIgOlxyXG5cdFx0XHQoIDEgKyBib3VuY2VPdXQoIDIgKiB4IC0gMSApICkgLyAyO1xyXG5cdH1cclxufSk7XHJcblxyXG59KTtcclxuLyohIFZlbG9jaXR5SlMub3JnICgxLjIuMykuIChDKSAyMDE0IEp1bGlhbiBTaGFwaXJvLiBNSVQgQGxpY2Vuc2U6IGVuLndpa2lwZWRpYS5vcmcvd2lraS9NSVRfTGljZW5zZSAqL1xyXG4vKiEgVmVsb2NpdHlKUy5vcmcgalF1ZXJ5IFNoaW0gKDEuMC4xKS4gKEMpIDIwMTQgVGhlIGpRdWVyeSBGb3VuZGF0aW9uLiBNSVQgQGxpY2Vuc2U6IGVuLndpa2lwZWRpYS5vcmcvd2lraS9NSVRfTGljZW5zZS4gKi9cclxuLyohIE5vdGUgdGhhdCB0aGlzIGhhcyBiZWVuIG1vZGlmaWVkIGJ5IE1hdGVyaWFsaXplIHRvIGNvbmZpcm0gdGhhdCBWZWxvY2l0eSBpcyBub3QgYWxyZWFkeSBiZWluZyBpbXBvcnRlZC4gKi9cclxualF1ZXJ5LlZlbG9jaXR5P2NvbnNvbGUubG9nKFwiVmVsb2NpdHkgaXMgYWxyZWFkeSBsb2FkZWQuIFlvdSBtYXkgYmUgbmVlZGxlc3NseSBpbXBvcnRpbmcgVmVsb2NpdHkgYWdhaW47IG5vdGUgdGhhdCBNYXRlcmlhbGl6ZSBpbmNsdWRlcyBWZWxvY2l0eS5cIik6KCFmdW5jdGlvbihlKXtmdW5jdGlvbiB0KGUpe3ZhciB0PWUubGVuZ3RoLGE9ci50eXBlKGUpO3JldHVyblwiZnVuY3Rpb25cIj09PWF8fHIuaXNXaW5kb3coZSk/ITE6MT09PWUubm9kZVR5cGUmJnQ/ITA6XCJhcnJheVwiPT09YXx8MD09PXR8fFwibnVtYmVyXCI9PXR5cGVvZiB0JiZ0PjAmJnQtMSBpbiBlfWlmKCFlLmpRdWVyeSl7dmFyIHI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbmV3IHIuZm4uaW5pdChlLHQpfTtyLmlzV2luZG93PWZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lJiZlPT1lLndpbmRvd30sci50eXBlPWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP2UrXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZT9uW2kuY2FsbChlKV18fFwib2JqZWN0XCI6dHlwZW9mIGV9LHIuaXNBcnJheT1BcnJheS5pc0FycmF5fHxmdW5jdGlvbihlKXtyZXR1cm5cImFycmF5XCI9PT1yLnR5cGUoZSl9LHIuaXNQbGFpbk9iamVjdD1mdW5jdGlvbihlKXt2YXIgdDtpZighZXx8XCJvYmplY3RcIiE9PXIudHlwZShlKXx8ZS5ub2RlVHlwZXx8ci5pc1dpbmRvdyhlKSlyZXR1cm4hMTt0cnl7aWYoZS5jb25zdHJ1Y3RvciYmIW8uY2FsbChlLFwiY29uc3RydWN0b3JcIikmJiFvLmNhbGwoZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsXCJpc1Byb3RvdHlwZU9mXCIpKXJldHVybiExfWNhdGNoKGEpe3JldHVybiExfWZvcih0IGluIGUpO3JldHVybiB2b2lkIDA9PT10fHxvLmNhbGwoZSx0KX0sci5lYWNoPWZ1bmN0aW9uKGUscixhKXt2YXIgbixvPTAsaT1lLmxlbmd0aCxzPXQoZSk7aWYoYSl7aWYocylmb3IoO2k+byYmKG49ci5hcHBseShlW29dLGEpLG4hPT0hMSk7bysrKTtlbHNlIGZvcihvIGluIGUpaWYobj1yLmFwcGx5KGVbb10sYSksbj09PSExKWJyZWFrfWVsc2UgaWYocylmb3IoO2k+byYmKG49ci5jYWxsKGVbb10sbyxlW29dKSxuIT09ITEpO28rKyk7ZWxzZSBmb3IobyBpbiBlKWlmKG49ci5jYWxsKGVbb10sbyxlW29dKSxuPT09ITEpYnJlYWs7cmV0dXJuIGV9LHIuZGF0YT1mdW5jdGlvbihlLHQsbil7aWYodm9pZCAwPT09bil7dmFyIG89ZVtyLmV4cGFuZG9dLGk9byYmYVtvXTtpZih2b2lkIDA9PT10KXJldHVybiBpO2lmKGkmJnQgaW4gaSlyZXR1cm4gaVt0XX1lbHNlIGlmKHZvaWQgMCE9PXQpe3ZhciBvPWVbci5leHBhbmRvXXx8KGVbci5leHBhbmRvXT0rK3IudXVpZCk7cmV0dXJuIGFbb109YVtvXXx8e30sYVtvXVt0XT1uLG59fSxyLnJlbW92ZURhdGE9ZnVuY3Rpb24oZSx0KXt2YXIgbj1lW3IuZXhwYW5kb10sbz1uJiZhW25dO28mJnIuZWFjaCh0LGZ1bmN0aW9uKGUsdCl7ZGVsZXRlIG9bdF19KX0sci5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgZSx0LGEsbixvLGkscz1hcmd1bWVudHNbMF18fHt9LGw9MSx1PWFyZ3VtZW50cy5sZW5ndGgsYz0hMTtmb3IoXCJib29sZWFuXCI9PXR5cGVvZiBzJiYoYz1zLHM9YXJndW1lbnRzW2xdfHx7fSxsKyspLFwib2JqZWN0XCIhPXR5cGVvZiBzJiZcImZ1bmN0aW9uXCIhPT1yLnR5cGUocykmJihzPXt9KSxsPT09dSYmKHM9dGhpcyxsLS0pO3U+bDtsKyspaWYobnVsbCE9KG89YXJndW1lbnRzW2xdKSlmb3IobiBpbiBvKWU9c1tuXSxhPW9bbl0scyE9PWEmJihjJiZhJiYoci5pc1BsYWluT2JqZWN0KGEpfHwodD1yLmlzQXJyYXkoYSkpKT8odD8odD0hMSxpPWUmJnIuaXNBcnJheShlKT9lOltdKTppPWUmJnIuaXNQbGFpbk9iamVjdChlKT9lOnt9LHNbbl09ci5leHRlbmQoYyxpLGEpKTp2b2lkIDAhPT1hJiYoc1tuXT1hKSk7cmV0dXJuIHN9LHIucXVldWU9ZnVuY3Rpb24oZSxhLG4pe2Z1bmN0aW9uIG8oZSxyKXt2YXIgYT1yfHxbXTtyZXR1cm4gbnVsbCE9ZSYmKHQoT2JqZWN0KGUpKT8hZnVuY3Rpb24oZSx0KXtmb3IodmFyIHI9K3QubGVuZ3RoLGE9MCxuPWUubGVuZ3RoO3I+YTspZVtuKytdPXRbYSsrXTtpZihyIT09cilmb3IoO3ZvaWQgMCE9PXRbYV07KWVbbisrXT10W2ErK107cmV0dXJuIGUubGVuZ3RoPW4sZX0oYSxcInN0cmluZ1wiPT10eXBlb2YgZT9bZV06ZSk6W10ucHVzaC5jYWxsKGEsZSkpLGF9aWYoZSl7YT0oYXx8XCJmeFwiKStcInF1ZXVlXCI7dmFyIGk9ci5kYXRhKGUsYSk7cmV0dXJuIG4/KCFpfHxyLmlzQXJyYXkobik/aT1yLmRhdGEoZSxhLG8obikpOmkucHVzaChuKSxpKTppfHxbXX19LHIuZGVxdWV1ZT1mdW5jdGlvbihlLHQpe3IuZWFjaChlLm5vZGVUeXBlP1tlXTplLGZ1bmN0aW9uKGUsYSl7dD10fHxcImZ4XCI7dmFyIG49ci5xdWV1ZShhLHQpLG89bi5zaGlmdCgpO1wiaW5wcm9ncmVzc1wiPT09byYmKG89bi5zaGlmdCgpKSxvJiYoXCJmeFwiPT09dCYmbi51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxvLmNhbGwoYSxmdW5jdGlvbigpe3IuZGVxdWV1ZShhLHQpfSkpfSl9LHIuZm49ci5wcm90b3R5cGU9e2luaXQ6ZnVuY3Rpb24oZSl7aWYoZS5ub2RlVHlwZSlyZXR1cm4gdGhpc1swXT1lLHRoaXM7dGhyb3cgbmV3IEVycm9yKFwiTm90IGEgRE9NIG5vZGUuXCIpfSxvZmZzZXQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdD90aGlzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOnt0b3A6MCxsZWZ0OjB9O3JldHVybnt0b3A6dC50b3ArKGUucGFnZVlPZmZzZXR8fGRvY3VtZW50LnNjcm9sbFRvcHx8MCktKGRvY3VtZW50LmNsaWVudFRvcHx8MCksbGVmdDp0LmxlZnQrKGUucGFnZVhPZmZzZXR8fGRvY3VtZW50LnNjcm9sbExlZnR8fDApLShkb2N1bWVudC5jbGllbnRMZWZ0fHwwKX19LHBvc2l0aW9uOmZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe2Zvcih2YXIgZT10aGlzLm9mZnNldFBhcmVudHx8ZG9jdW1lbnQ7ZSYmXCJodG1sXCI9PT0hZS5ub2RlVHlwZS50b0xvd2VyQ2FzZSYmXCJzdGF0aWNcIj09PWUuc3R5bGUucG9zaXRpb247KWU9ZS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGV8fGRvY3VtZW50fXZhciB0PXRoaXNbMF0sZT1lLmFwcGx5KHQpLGE9dGhpcy5vZmZzZXQoKSxuPS9eKD86Ym9keXxodG1sKSQvaS50ZXN0KGUubm9kZU5hbWUpP3t0b3A6MCxsZWZ0OjB9OnIoZSkub2Zmc2V0KCk7cmV0dXJuIGEudG9wLT1wYXJzZUZsb2F0KHQuc3R5bGUubWFyZ2luVG9wKXx8MCxhLmxlZnQtPXBhcnNlRmxvYXQodC5zdHlsZS5tYXJnaW5MZWZ0KXx8MCxlLnN0eWxlJiYobi50b3ArPXBhcnNlRmxvYXQoZS5zdHlsZS5ib3JkZXJUb3BXaWR0aCl8fDAsbi5sZWZ0Kz1wYXJzZUZsb2F0KGUuc3R5bGUuYm9yZGVyTGVmdFdpZHRoKXx8MCkse3RvcDphLnRvcC1uLnRvcCxsZWZ0OmEubGVmdC1uLmxlZnR9fX07dmFyIGE9e307ci5leHBhbmRvPVwidmVsb2NpdHlcIisobmV3IERhdGUpLmdldFRpbWUoKSxyLnV1aWQ9MDtmb3IodmFyIG49e30sbz1uLmhhc093blByb3BlcnR5LGk9bi50b1N0cmluZyxzPVwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvclwiLnNwbGl0KFwiIFwiKSxsPTA7bDxzLmxlbmd0aDtsKyspbltcIltvYmplY3QgXCIrc1tsXStcIl1cIl09c1tsXS50b0xvd2VyQ2FzZSgpO3IuZm4uaW5pdC5wcm90b3R5cGU9ci5mbixlLlZlbG9jaXR5PXtVdGlsaXRpZXM6cn19fSh3aW5kb3cpLGZ1bmN0aW9uKGUpe1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKTplKCl9KGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUsdCxyLGEpe2Z1bmN0aW9uIG4oZSl7Zm9yKHZhciB0PS0xLHI9ZT9lLmxlbmd0aDowLGE9W107Kyt0PHI7KXt2YXIgbj1lW3RdO24mJmEucHVzaChuKX1yZXR1cm4gYX1mdW5jdGlvbiBvKGUpe3JldHVybiBtLmlzV3JhcHBlZChlKT9lPVtdLnNsaWNlLmNhbGwoZSk6bS5pc05vZGUoZSkmJihlPVtlXSksZX1mdW5jdGlvbiBpKGUpe3ZhciB0PWYuZGF0YShlLFwidmVsb2NpdHlcIik7cmV0dXJuIG51bGw9PT10P2E6dH1mdW5jdGlvbiBzKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5yb3VuZCh0KmUpKigxL2UpfX1mdW5jdGlvbiBsKGUscixhLG4pe2Z1bmN0aW9uIG8oZSx0KXtyZXR1cm4gMS0zKnQrMyplfWZ1bmN0aW9uIGkoZSx0KXtyZXR1cm4gMyp0LTYqZX1mdW5jdGlvbiBzKGUpe3JldHVybiAzKmV9ZnVuY3Rpb24gbChlLHQscil7cmV0dXJuKChvKHQscikqZStpKHQscikpKmUrcyh0KSkqZX1mdW5jdGlvbiB1KGUsdCxyKXtyZXR1cm4gMypvKHQscikqZSplKzIqaSh0LHIpKmUrcyh0KX1mdW5jdGlvbiBjKHQscil7Zm9yKHZhciBuPTA7bT5uOysrbil7dmFyIG89dShyLGUsYSk7aWYoMD09PW8pcmV0dXJuIHI7dmFyIGk9bChyLGUsYSktdDtyLT1pL299cmV0dXJuIHJ9ZnVuY3Rpb24gcCgpe2Zvcih2YXIgdD0wO2I+dDsrK3Qpd1t0XT1sKHQqeCxlLGEpfWZ1bmN0aW9uIGYodCxyLG4pe3ZhciBvLGkscz0wO2RvIGk9cisobi1yKS8yLG89bChpLGUsYSktdCxvPjA/bj1pOnI9aTt3aGlsZShNYXRoLmFicyhvKT5oJiYrK3M8dik7cmV0dXJuIGl9ZnVuY3Rpb24gZCh0KXtmb3IodmFyIHI9MCxuPTEsbz1iLTE7biE9byYmd1tuXTw9dDsrK24pcis9eDstLW47dmFyIGk9KHQtd1tuXSkvKHdbbisxXS13W25dKSxzPXIraSp4LGw9dShzLGUsYSk7cmV0dXJuIGw+PXk/Yyh0LHMpOjA9PWw/czpmKHQscixyK3gpfWZ1bmN0aW9uIGcoKXtWPSEwLChlIT1yfHxhIT1uKSYmcCgpfXZhciBtPTQseT0uMDAxLGg9MWUtNyx2PTEwLGI9MTEseD0xLyhiLTEpLFM9XCJGbG9hdDMyQXJyYXlcImluIHQ7aWYoNCE9PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuITE7Zm9yKHZhciBQPTA7ND5QOysrUClpZihcIm51bWJlclwiIT10eXBlb2YgYXJndW1lbnRzW1BdfHxpc05hTihhcmd1bWVudHNbUF0pfHwhaXNGaW5pdGUoYXJndW1lbnRzW1BdKSlyZXR1cm4hMTtlPU1hdGgubWluKGUsMSksYT1NYXRoLm1pbihhLDEpLGU9TWF0aC5tYXgoZSwwKSxhPU1hdGgubWF4KGEsMCk7dmFyIHc9Uz9uZXcgRmxvYXQzMkFycmF5KGIpOm5ldyBBcnJheShiKSxWPSExLEM9ZnVuY3Rpb24odCl7cmV0dXJuIFZ8fGcoKSxlPT09ciYmYT09PW4/dDowPT09dD8wOjE9PT10PzE6bChkKHQpLHIsbil9O0MuZ2V0Q29udHJvbFBvaW50cz1mdW5jdGlvbigpe3JldHVyblt7eDplLHk6cn0se3g6YSx5Om59XX07dmFyIFQ9XCJnZW5lcmF0ZUJlemllcihcIitbZSxyLGEsbl0rXCIpXCI7cmV0dXJuIEMudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gVH0sQ31mdW5jdGlvbiB1KGUsdCl7dmFyIHI9ZTtyZXR1cm4gbS5pc1N0cmluZyhlKT9iLkVhc2luZ3NbZV18fChyPSExKTpyPW0uaXNBcnJheShlKSYmMT09PWUubGVuZ3RoP3MuYXBwbHkobnVsbCxlKTptLmlzQXJyYXkoZSkmJjI9PT1lLmxlbmd0aD94LmFwcGx5KG51bGwsZS5jb25jYXQoW3RdKSk6bS5pc0FycmF5KGUpJiY0PT09ZS5sZW5ndGg/bC5hcHBseShudWxsLGUpOiExLHI9PT0hMSYmKHI9Yi5FYXNpbmdzW2IuZGVmYXVsdHMuZWFzaW5nXT9iLmRlZmF1bHRzLmVhc2luZzp2KSxyfWZ1bmN0aW9uIGMoZSl7aWYoZSl7dmFyIHQ9KG5ldyBEYXRlKS5nZXRUaW1lKCkscj1iLlN0YXRlLmNhbGxzLmxlbmd0aDtyPjFlNCYmKGIuU3RhdGUuY2FsbHM9bihiLlN0YXRlLmNhbGxzKSk7Zm9yKHZhciBvPTA7cj5vO28rKylpZihiLlN0YXRlLmNhbGxzW29dKXt2YXIgcz1iLlN0YXRlLmNhbGxzW29dLGw9c1swXSx1PXNbMl0sZD1zWzNdLGc9ISFkLHk9bnVsbDtkfHwoZD1iLlN0YXRlLmNhbGxzW29dWzNdPXQtMTYpO2Zvcih2YXIgaD1NYXRoLm1pbigodC1kKS91LmR1cmF0aW9uLDEpLHY9MCx4PWwubGVuZ3RoO3g+djt2Kyspe3ZhciBQPWxbdl0sVj1QLmVsZW1lbnQ7aWYoaShWKSl7dmFyIEM9ITE7aWYodS5kaXNwbGF5IT09YSYmbnVsbCE9PXUuZGlzcGxheSYmXCJub25lXCIhPT11LmRpc3BsYXkpe2lmKFwiZmxleFwiPT09dS5kaXNwbGF5KXt2YXIgVD1bXCItd2Via2l0LWJveFwiLFwiLW1vei1ib3hcIixcIi1tcy1mbGV4Ym94XCIsXCItd2Via2l0LWZsZXhcIl07Zi5lYWNoKFQsZnVuY3Rpb24oZSx0KXtTLnNldFByb3BlcnR5VmFsdWUoVixcImRpc3BsYXlcIix0KX0pfVMuc2V0UHJvcGVydHlWYWx1ZShWLFwiZGlzcGxheVwiLHUuZGlzcGxheSl9dS52aXNpYmlsaXR5IT09YSYmXCJoaWRkZW5cIiE9PXUudmlzaWJpbGl0eSYmUy5zZXRQcm9wZXJ0eVZhbHVlKFYsXCJ2aXNpYmlsaXR5XCIsdS52aXNpYmlsaXR5KTtmb3IodmFyIGsgaW4gUClpZihcImVsZW1lbnRcIiE9PWspe3ZhciBBLEY9UFtrXSxqPW0uaXNTdHJpbmcoRi5lYXNpbmcpP2IuRWFzaW5nc1tGLmVhc2luZ106Ri5lYXNpbmc7aWYoMT09PWgpQT1GLmVuZFZhbHVlO2Vsc2V7dmFyIEU9Ri5lbmRWYWx1ZS1GLnN0YXJ0VmFsdWU7aWYoQT1GLnN0YXJ0VmFsdWUrRSpqKGgsdSxFKSwhZyYmQT09PUYuY3VycmVudFZhbHVlKWNvbnRpbnVlfWlmKEYuY3VycmVudFZhbHVlPUEsXCJ0d2VlblwiPT09ayl5PUE7ZWxzZXtpZihTLkhvb2tzLnJlZ2lzdGVyZWRba10pe3ZhciBIPVMuSG9va3MuZ2V0Um9vdChrKSxOPWkoVikucm9vdFByb3BlcnR5VmFsdWVDYWNoZVtIXTtOJiYoRi5yb290UHJvcGVydHlWYWx1ZT1OKX12YXIgTD1TLnNldFByb3BlcnR5VmFsdWUoVixrLEYuY3VycmVudFZhbHVlKygwPT09cGFyc2VGbG9hdChBKT9cIlwiOkYudW5pdFR5cGUpLEYucm9vdFByb3BlcnR5VmFsdWUsRi5zY3JvbGxEYXRhKTtTLkhvb2tzLnJlZ2lzdGVyZWRba10mJihpKFYpLnJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGVbSF09Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW0hdP1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtIXShcImV4dHJhY3RcIixudWxsLExbMV0pOkxbMV0pLFwidHJhbnNmb3JtXCI9PT1MWzBdJiYoQz0hMCl9fXUubW9iaWxlSEEmJmkoVikudHJhbnNmb3JtQ2FjaGUudHJhbnNsYXRlM2Q9PT1hJiYoaShWKS50cmFuc2Zvcm1DYWNoZS50cmFuc2xhdGUzZD1cIigwcHgsIDBweCwgMHB4KVwiLEM9ITApLEMmJlMuZmx1c2hUcmFuc2Zvcm1DYWNoZShWKX19dS5kaXNwbGF5IT09YSYmXCJub25lXCIhPT11LmRpc3BsYXkmJihiLlN0YXRlLmNhbGxzW29dWzJdLmRpc3BsYXk9ITEpLHUudmlzaWJpbGl0eSE9PWEmJlwiaGlkZGVuXCIhPT11LnZpc2liaWxpdHkmJihiLlN0YXRlLmNhbGxzW29dWzJdLnZpc2liaWxpdHk9ITEpLHUucHJvZ3Jlc3MmJnUucHJvZ3Jlc3MuY2FsbChzWzFdLHNbMV0saCxNYXRoLm1heCgwLGQrdS5kdXJhdGlvbi10KSxkLHkpLDE9PT1oJiZwKG8pfX1iLlN0YXRlLmlzVGlja2luZyYmdyhjKX1mdW5jdGlvbiBwKGUsdCl7aWYoIWIuU3RhdGUuY2FsbHNbZV0pcmV0dXJuITE7Zm9yKHZhciByPWIuU3RhdGUuY2FsbHNbZV1bMF0sbj1iLlN0YXRlLmNhbGxzW2VdWzFdLG89Yi5TdGF0ZS5jYWxsc1tlXVsyXSxzPWIuU3RhdGUuY2FsbHNbZV1bNF0sbD0hMSx1PTAsYz1yLmxlbmd0aDtjPnU7dSsrKXt2YXIgcD1yW3VdLmVsZW1lbnQ7aWYodHx8by5sb29wfHwoXCJub25lXCI9PT1vLmRpc3BsYXkmJlMuc2V0UHJvcGVydHlWYWx1ZShwLFwiZGlzcGxheVwiLG8uZGlzcGxheSksXCJoaWRkZW5cIj09PW8udmlzaWJpbGl0eSYmUy5zZXRQcm9wZXJ0eVZhbHVlKHAsXCJ2aXNpYmlsaXR5XCIsby52aXNpYmlsaXR5KSksby5sb29wIT09ITAmJihmLnF1ZXVlKHApWzFdPT09YXx8IS9cXC52ZWxvY2l0eVF1ZXVlRW50cnlGbGFnL2kudGVzdChmLnF1ZXVlKHApWzFdKSkmJmkocCkpe2kocCkuaXNBbmltYXRpbmc9ITEsaShwKS5yb290UHJvcGVydHlWYWx1ZUNhY2hlPXt9O3ZhciBkPSExO2YuZWFjaChTLkxpc3RzLnRyYW5zZm9ybXMzRCxmdW5jdGlvbihlLHQpe3ZhciByPS9ec2NhbGUvLnRlc3QodCk/MTowLG49aShwKS50cmFuc2Zvcm1DYWNoZVt0XTtpKHApLnRyYW5zZm9ybUNhY2hlW3RdIT09YSYmbmV3IFJlZ0V4cChcIl5cXFxcKFwiK3IrXCJbXi5dXCIpLnRlc3QobikmJihkPSEwLGRlbGV0ZSBpKHApLnRyYW5zZm9ybUNhY2hlW3RdKX0pLG8ubW9iaWxlSEEmJihkPSEwLGRlbGV0ZSBpKHApLnRyYW5zZm9ybUNhY2hlLnRyYW5zbGF0ZTNkKSxkJiZTLmZsdXNoVHJhbnNmb3JtQ2FjaGUocCksUy5WYWx1ZXMucmVtb3ZlQ2xhc3MocCxcInZlbG9jaXR5LWFuaW1hdGluZ1wiKX1pZighdCYmby5jb21wbGV0ZSYmIW8ubG9vcCYmdT09PWMtMSl0cnl7by5jb21wbGV0ZS5jYWxsKG4sbil9Y2F0Y2goZyl7c2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGd9LDEpfXMmJm8ubG9vcCE9PSEwJiZzKG4pLGkocCkmJm8ubG9vcD09PSEwJiYhdCYmKGYuZWFjaChpKHApLnR3ZWVuc0NvbnRhaW5lcixmdW5jdGlvbihlLHQpey9ecm90YXRlLy50ZXN0KGUpJiYzNjA9PT1wYXJzZUZsb2F0KHQuZW5kVmFsdWUpJiYodC5lbmRWYWx1ZT0wLHQuc3RhcnRWYWx1ZT0zNjApLC9eYmFja2dyb3VuZFBvc2l0aW9uLy50ZXN0KGUpJiYxMDA9PT1wYXJzZUZsb2F0KHQuZW5kVmFsdWUpJiZcIiVcIj09PXQudW5pdFR5cGUmJih0LmVuZFZhbHVlPTAsdC5zdGFydFZhbHVlPTEwMCl9KSxiKHAsXCJyZXZlcnNlXCIse2xvb3A6ITAsZGVsYXk6by5kZWxheX0pKSxvLnF1ZXVlIT09ITEmJmYuZGVxdWV1ZShwLG8ucXVldWUpfWIuU3RhdGUuY2FsbHNbZV09ITE7Zm9yKHZhciBtPTAseT1iLlN0YXRlLmNhbGxzLmxlbmd0aDt5Pm07bSsrKWlmKGIuU3RhdGUuY2FsbHNbbV0hPT0hMSl7bD0hMDticmVha31sPT09ITEmJihiLlN0YXRlLmlzVGlja2luZz0hMSxkZWxldGUgYi5TdGF0ZS5jYWxscyxiLlN0YXRlLmNhbGxzPVtdKX12YXIgZixkPWZ1bmN0aW9uKCl7aWYoci5kb2N1bWVudE1vZGUpcmV0dXJuIHIuZG9jdW1lbnRNb2RlO2Zvcih2YXIgZT03O2U+NDtlLS0pe3ZhciB0PXIuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZih0LmlubmVySFRNTD1cIjwhLS1baWYgSUUgXCIrZStcIl0+PHNwYW4+PC9zcGFuPjwhW2VuZGlmXS0tPlwiLHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzcGFuXCIpLmxlbmd0aClyZXR1cm4gdD1udWxsLGV9cmV0dXJuIGF9KCksZz1mdW5jdGlvbigpe3ZhciBlPTA7cmV0dXJuIHQud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx0Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24odCl7dmFyIHIsYT0obmV3IERhdGUpLmdldFRpbWUoKTtyZXR1cm4gcj1NYXRoLm1heCgwLDE2LShhLWUpKSxlPWErcixzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dChhK3IpfSxyKX19KCksbT17aXNTdHJpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGV9LGlzQXJyYXk6QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oZSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpfSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGUpe3JldHVyblwiW29iamVjdCBGdW5jdGlvbl1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKX0saXNOb2RlOmZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLm5vZGVUeXBlfSxpc05vZGVMaXN0OmZ1bmN0aW9uKGUpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlJiYvXlxcW29iamVjdCAoSFRNTENvbGxlY3Rpb258Tm9kZUxpc3R8T2JqZWN0KVxcXSQvLnRlc3QoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpKSYmZS5sZW5ndGghPT1hJiYoMD09PWUubGVuZ3RofHxcIm9iamVjdFwiPT10eXBlb2YgZVswXSYmZVswXS5ub2RlVHlwZT4wKX0saXNXcmFwcGVkOmZ1bmN0aW9uKGUpe3JldHVybiBlJiYoZS5qcXVlcnl8fHQuWmVwdG8mJnQuWmVwdG8uemVwdG8uaXNaKGUpKX0saXNTVkc6ZnVuY3Rpb24oZSl7cmV0dXJuIHQuU1ZHRWxlbWVudCYmZSBpbnN0YW5jZW9mIHQuU1ZHRWxlbWVudH0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihlKXtmb3IodmFyIHQgaW4gZSlyZXR1cm4hMTtyZXR1cm4hMH19LHk9ITE7aWYoZS5mbiYmZS5mbi5qcXVlcnk/KGY9ZSx5PSEwKTpmPXQuVmVsb2NpdHkuVXRpbGl0aWVzLDg+PWQmJiF5KXRocm93IG5ldyBFcnJvcihcIlZlbG9jaXR5OiBJRTggYW5kIGJlbG93IHJlcXVpcmUgalF1ZXJ5IHRvIGJlIGxvYWRlZCBiZWZvcmUgVmVsb2NpdHkuXCIpO2lmKDc+PWQpcmV0dXJuIHZvaWQoalF1ZXJ5LmZuLnZlbG9jaXR5PWpRdWVyeS5mbi5hbmltYXRlKTt2YXIgaD00MDAsdj1cInN3aW5nXCIsYj17U3RhdGU6e2lzTW9iaWxlOi9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxpc0FuZHJvaWQ6L0FuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLGlzR2luZ2VyYnJlYWQ6L0FuZHJvaWQgMlxcLjNcXC5bMy03XS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksaXNDaHJvbWU6dC5jaHJvbWUsaXNGaXJlZm94Oi9GaXJlZm94L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxwcmVmaXhFbGVtZW50OnIuY3JlYXRlRWxlbWVudChcImRpdlwiKSxwcmVmaXhNYXRjaGVzOnt9LHNjcm9sbEFuY2hvcjpudWxsLHNjcm9sbFByb3BlcnR5TGVmdDpudWxsLHNjcm9sbFByb3BlcnR5VG9wOm51bGwsaXNUaWNraW5nOiExLGNhbGxzOltdfSxDU1M6e30sVXRpbGl0aWVzOmYsUmVkaXJlY3RzOnt9LEVhc2luZ3M6e30sUHJvbWlzZTp0LlByb21pc2UsZGVmYXVsdHM6e3F1ZXVlOlwiXCIsZHVyYXRpb246aCxlYXNpbmc6dixiZWdpbjphLGNvbXBsZXRlOmEscHJvZ3Jlc3M6YSxkaXNwbGF5OmEsdmlzaWJpbGl0eTphLGxvb3A6ITEsZGVsYXk6ITEsbW9iaWxlSEE6ITAsX2NhY2hlVmFsdWVzOiEwfSxpbml0OmZ1bmN0aW9uKGUpe2YuZGF0YShlLFwidmVsb2NpdHlcIix7aXNTVkc6bS5pc1NWRyhlKSxpc0FuaW1hdGluZzohMSxjb21wdXRlZFN0eWxlOm51bGwsdHdlZW5zQ29udGFpbmVyOm51bGwscm9vdFByb3BlcnR5VmFsdWVDYWNoZTp7fSx0cmFuc2Zvcm1DYWNoZTp7fX0pfSxob29rOm51bGwsbW9jazohMSx2ZXJzaW9uOnttYWpvcjoxLG1pbm9yOjIscGF0Y2g6Mn0sZGVidWc6ITF9O3QucGFnZVlPZmZzZXQhPT1hPyhiLlN0YXRlLnNjcm9sbEFuY2hvcj10LGIuU3RhdGUuc2Nyb2xsUHJvcGVydHlMZWZ0PVwicGFnZVhPZmZzZXRcIixiLlN0YXRlLnNjcm9sbFByb3BlcnR5VG9wPVwicGFnZVlPZmZzZXRcIik6KGIuU3RhdGUuc2Nyb2xsQW5jaG9yPXIuZG9jdW1lbnRFbGVtZW50fHxyLmJvZHkucGFyZW50Tm9kZXx8ci5ib2R5LGIuU3RhdGUuc2Nyb2xsUHJvcGVydHlMZWZ0PVwic2Nyb2xsTGVmdFwiLGIuU3RhdGUuc2Nyb2xsUHJvcGVydHlUb3A9XCJzY3JvbGxUb3BcIik7dmFyIHg9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3JldHVybi1lLnRlbnNpb24qZS54LWUuZnJpY3Rpb24qZS52fWZ1bmN0aW9uIHQodCxyLGEpe3ZhciBuPXt4OnQueCthLmR4KnIsdjp0LnYrYS5kdipyLHRlbnNpb246dC50ZW5zaW9uLGZyaWN0aW9uOnQuZnJpY3Rpb259O3JldHVybntkeDpuLnYsZHY6ZShuKX19ZnVuY3Rpb24gcihyLGEpe3ZhciBuPXtkeDpyLnYsZHY6ZShyKX0sbz10KHIsLjUqYSxuKSxpPXQociwuNSphLG8pLHM9dChyLGEsaSksbD0xLzYqKG4uZHgrMiooby5keCtpLmR4KStzLmR4KSx1PTEvNioobi5kdisyKihvLmR2K2kuZHYpK3MuZHYpO3JldHVybiByLng9ci54K2wqYSxyLnY9ci52K3UqYSxyfXJldHVybiBmdW5jdGlvbiBhKGUsdCxuKXt2YXIgbyxpLHMsbD17eDotMSx2OjAsdGVuc2lvbjpudWxsLGZyaWN0aW9uOm51bGx9LHU9WzBdLGM9MCxwPTFlLTQsZj0uMDE2O2ZvcihlPXBhcnNlRmxvYXQoZSl8fDUwMCx0PXBhcnNlRmxvYXQodCl8fDIwLG49bnx8bnVsbCxsLnRlbnNpb249ZSxsLmZyaWN0aW9uPXQsbz1udWxsIT09bixvPyhjPWEoZSx0KSxpPWMvbipmKTppPWY7cz1yKHN8fGwsaSksdS5wdXNoKDErcy54KSxjKz0xNixNYXRoLmFicyhzLngpPnAmJk1hdGguYWJzKHMudik+cDspO3JldHVybiBvP2Z1bmN0aW9uKGUpe3JldHVybiB1W2UqKHUubGVuZ3RoLTEpfDBdfTpjfX0oKTtiLkVhc2luZ3M9e2xpbmVhcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sc3dpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuLjUtTWF0aC5jb3MoZSpNYXRoLlBJKS8yfSxzcHJpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuIDEtTWF0aC5jb3MoNC41KmUqTWF0aC5QSSkqTWF0aC5leHAoNiotZSl9fSxmLmVhY2goW1tcImVhc2VcIixbLjI1LC4xLC4yNSwxXV0sW1wiZWFzZS1pblwiLFsuNDIsMCwxLDFdXSxbXCJlYXNlLW91dFwiLFswLDAsLjU4LDFdXSxbXCJlYXNlLWluLW91dFwiLFsuNDIsMCwuNTgsMV1dLFtcImVhc2VJblNpbmVcIixbLjQ3LDAsLjc0NSwuNzE1XV0sW1wiZWFzZU91dFNpbmVcIixbLjM5LC41NzUsLjU2NSwxXV0sW1wiZWFzZUluT3V0U2luZVwiLFsuNDQ1LC4wNSwuNTUsLjk1XV0sW1wiZWFzZUluUXVhZFwiLFsuNTUsLjA4NSwuNjgsLjUzXV0sW1wiZWFzZU91dFF1YWRcIixbLjI1LC40NiwuNDUsLjk0XV0sW1wiZWFzZUluT3V0UXVhZFwiLFsuNDU1LC4wMywuNTE1LC45NTVdXSxbXCJlYXNlSW5DdWJpY1wiLFsuNTUsLjA1NSwuNjc1LC4xOV1dLFtcImVhc2VPdXRDdWJpY1wiLFsuMjE1LC42MSwuMzU1LDFdXSxbXCJlYXNlSW5PdXRDdWJpY1wiLFsuNjQ1LC4wNDUsLjM1NSwxXV0sW1wiZWFzZUluUXVhcnRcIixbLjg5NSwuMDMsLjY4NSwuMjJdXSxbXCJlYXNlT3V0UXVhcnRcIixbLjE2NSwuODQsLjQ0LDFdXSxbXCJlYXNlSW5PdXRRdWFydFwiLFsuNzcsMCwuMTc1LDFdXSxbXCJlYXNlSW5RdWludFwiLFsuNzU1LC4wNSwuODU1LC4wNl1dLFtcImVhc2VPdXRRdWludFwiLFsuMjMsMSwuMzIsMV1dLFtcImVhc2VJbk91dFF1aW50XCIsWy44NiwwLC4wNywxXV0sW1wiZWFzZUluRXhwb1wiLFsuOTUsLjA1LC43OTUsLjAzNV1dLFtcImVhc2VPdXRFeHBvXCIsWy4xOSwxLC4yMiwxXV0sW1wiZWFzZUluT3V0RXhwb1wiLFsxLDAsMCwxXV0sW1wiZWFzZUluQ2lyY1wiLFsuNiwuMDQsLjk4LC4zMzVdXSxbXCJlYXNlT3V0Q2lyY1wiLFsuMDc1LC44MiwuMTY1LDFdXSxbXCJlYXNlSW5PdXRDaXJjXCIsWy43ODUsLjEzNSwuMTUsLjg2XV1dLGZ1bmN0aW9uKGUsdCl7Yi5FYXNpbmdzW3RbMF1dPWwuYXBwbHkobnVsbCx0WzFdKX0pO3ZhciBTPWIuQ1NTPXtSZWdFeDp7aXNIZXg6L14jKFtBLWZcXGRdezN9KXsxLDJ9JC9pLHZhbHVlVW53cmFwOi9eW0Etel0rXFwoKC4qKVxcKSQvaSx3cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkOi9bMC05Ll0rIFswLTkuXSsgWzAtOS5dKyggWzAtOS5dKyk/Lyx2YWx1ZVNwbGl0Oi8oW0Etel0rXFwoLitcXCkpfCgoW0EtejAtOSMtLl0rPykoPz1cXHN8JCkpL2dpfSxMaXN0czp7Y29sb3JzOltcImZpbGxcIixcInN0cm9rZVwiLFwic3RvcENvbG9yXCIsXCJjb2xvclwiLFwiYmFja2dyb3VuZENvbG9yXCIsXCJib3JkZXJDb2xvclwiLFwiYm9yZGVyVG9wQ29sb3JcIixcImJvcmRlclJpZ2h0Q29sb3JcIixcImJvcmRlckJvdHRvbUNvbG9yXCIsXCJib3JkZXJMZWZ0Q29sb3JcIixcIm91dGxpbmVDb2xvclwiXSx0cmFuc2Zvcm1zQmFzZTpbXCJ0cmFuc2xhdGVYXCIsXCJ0cmFuc2xhdGVZXCIsXCJzY2FsZVwiLFwic2NhbGVYXCIsXCJzY2FsZVlcIixcInNrZXdYXCIsXCJza2V3WVwiLFwicm90YXRlWlwiXSx0cmFuc2Zvcm1zM0Q6W1widHJhbnNmb3JtUGVyc3BlY3RpdmVcIixcInRyYW5zbGF0ZVpcIixcInNjYWxlWlwiLFwicm90YXRlWFwiLFwicm90YXRlWVwiXX0sSG9va3M6e3RlbXBsYXRlczp7dGV4dFNoYWRvdzpbXCJDb2xvciBYIFkgQmx1clwiLFwiYmxhY2sgMHB4IDBweCAwcHhcIl0sYm94U2hhZG93OltcIkNvbG9yIFggWSBCbHVyIFNwcmVhZFwiLFwiYmxhY2sgMHB4IDBweCAwcHggMHB4XCJdLGNsaXA6W1wiVG9wIFJpZ2h0IEJvdHRvbSBMZWZ0XCIsXCIwcHggMHB4IDBweCAwcHhcIl0sYmFja2dyb3VuZFBvc2l0aW9uOltcIlggWVwiLFwiMCUgMCVcIl0sdHJhbnNmb3JtT3JpZ2luOltcIlggWSBaXCIsXCI1MCUgNTAlIDBweFwiXSxwZXJzcGVjdGl2ZU9yaWdpbjpbXCJYIFlcIixcIjUwJSA1MCVcIl19LHJlZ2lzdGVyZWQ6e30scmVnaXN0ZXI6ZnVuY3Rpb24oKXtmb3IodmFyIGU9MDtlPFMuTGlzdHMuY29sb3JzLmxlbmd0aDtlKyspe3ZhciB0PVwiY29sb3JcIj09PVMuTGlzdHMuY29sb3JzW2VdP1wiMCAwIDAgMVwiOlwiMjU1IDI1NSAyNTUgMVwiO1MuSG9va3MudGVtcGxhdGVzW1MuTGlzdHMuY29sb3JzW2VdXT1bXCJSZWQgR3JlZW4gQmx1ZSBBbHBoYVwiLHRdfXZhciByLGEsbjtpZihkKWZvcihyIGluIFMuSG9va3MudGVtcGxhdGVzKXthPVMuSG9va3MudGVtcGxhdGVzW3JdLG49YVswXS5zcGxpdChcIiBcIik7dmFyIG89YVsxXS5tYXRjaChTLlJlZ0V4LnZhbHVlU3BsaXQpO1wiQ29sb3JcIj09PW5bMF0mJihuLnB1c2gobi5zaGlmdCgpKSxvLnB1c2goby5zaGlmdCgpKSxTLkhvb2tzLnRlbXBsYXRlc1tyXT1bbi5qb2luKFwiIFwiKSxvLmpvaW4oXCIgXCIpXSl9Zm9yKHIgaW4gUy5Ib29rcy50ZW1wbGF0ZXMpe2E9Uy5Ib29rcy50ZW1wbGF0ZXNbcl0sbj1hWzBdLnNwbGl0KFwiIFwiKTtmb3IodmFyIGUgaW4gbil7dmFyIGk9cituW2VdLHM9ZTtTLkhvb2tzLnJlZ2lzdGVyZWRbaV09W3Isc119fX0sZ2V0Um9vdDpmdW5jdGlvbihlKXt2YXIgdD1TLkhvb2tzLnJlZ2lzdGVyZWRbZV07cmV0dXJuIHQ/dFswXTplfSxjbGVhblJvb3RQcm9wZXJ0eVZhbHVlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIFMuUmVnRXgudmFsdWVVbndyYXAudGVzdCh0KSYmKHQ9dC5tYXRjaChTLlJlZ0V4LnZhbHVlVW53cmFwKVsxXSksUy5WYWx1ZXMuaXNDU1NOdWxsVmFsdWUodCkmJih0PVMuSG9va3MudGVtcGxhdGVzW2VdWzFdKSx0fSxleHRyYWN0VmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgcj1TLkhvb2tzLnJlZ2lzdGVyZWRbZV07aWYocil7dmFyIGE9clswXSxuPXJbMV07cmV0dXJuIHQ9Uy5Ib29rcy5jbGVhblJvb3RQcm9wZXJ0eVZhbHVlKGEsdCksdC50b1N0cmluZygpLm1hdGNoKFMuUmVnRXgudmFsdWVTcGxpdClbbl19cmV0dXJuIHR9LGluamVjdFZhbHVlOmZ1bmN0aW9uKGUsdCxyKXt2YXIgYT1TLkhvb2tzLnJlZ2lzdGVyZWRbZV07aWYoYSl7dmFyIG4sbyxpPWFbMF0scz1hWzFdO3JldHVybiByPVMuSG9va3MuY2xlYW5Sb290UHJvcGVydHlWYWx1ZShpLHIpLG49ci50b1N0cmluZygpLm1hdGNoKFMuUmVnRXgudmFsdWVTcGxpdCksbltzXT10LG89bi5qb2luKFwiIFwiKX1yZXR1cm4gcn19LE5vcm1hbGl6YXRpb25zOntyZWdpc3RlcmVkOntjbGlwOmZ1bmN0aW9uKGUsdCxyKXtzd2l0Y2goZSl7Y2FzZVwibmFtZVwiOnJldHVyblwiY2xpcFwiO2Nhc2VcImV4dHJhY3RcIjp2YXIgYTtyZXR1cm4gUy5SZWdFeC53cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkLnRlc3Qocik/YT1yOihhPXIudG9TdHJpbmcoKS5tYXRjaChTLlJlZ0V4LnZhbHVlVW53cmFwKSxhPWE/YVsxXS5yZXBsYWNlKC8sKFxccyspPy9nLFwiIFwiKTpyKSxhO2Nhc2VcImluamVjdFwiOnJldHVyblwicmVjdChcIityK1wiKVwifX0sYmx1cjpmdW5jdGlvbihlLHQscil7c3dpdGNoKGUpe2Nhc2VcIm5hbWVcIjpyZXR1cm4gYi5TdGF0ZS5pc0ZpcmVmb3g/XCJmaWx0ZXJcIjpcIi13ZWJraXQtZmlsdGVyXCI7Y2FzZVwiZXh0cmFjdFwiOnZhciBhPXBhcnNlRmxvYXQocik7aWYoIWEmJjAhPT1hKXt2YXIgbj1yLnRvU3RyaW5nKCkubWF0Y2goL2JsdXJcXCgoWzAtOV0rW0Etel0rKVxcKS9pKTthPW4/blsxXTowfXJldHVybiBhO2Nhc2VcImluamVjdFwiOnJldHVybiBwYXJzZUZsb2F0KHIpP1wiYmx1cihcIityK1wiKVwiOlwibm9uZVwifX0sb3BhY2l0eTpmdW5jdGlvbihlLHQscil7aWYoOD49ZClzd2l0Y2goZSl7Y2FzZVwibmFtZVwiOnJldHVyblwiZmlsdGVyXCI7Y2FzZVwiZXh0cmFjdFwiOnZhciBhPXIudG9TdHJpbmcoKS5tYXRjaCgvYWxwaGFcXChvcGFjaXR5PSguKilcXCkvaSk7cmV0dXJuIHI9YT9hWzFdLzEwMDoxO2Nhc2VcImluamVjdFwiOnJldHVybiB0LnN0eWxlLnpvb209MSxwYXJzZUZsb2F0KHIpPj0xP1wiXCI6XCJhbHBoYShvcGFjaXR5PVwiK3BhcnNlSW50KDEwMCpwYXJzZUZsb2F0KHIpLDEwKStcIilcIn1lbHNlIHN3aXRjaChlKXtjYXNlXCJuYW1lXCI6cmV0dXJuXCJvcGFjaXR5XCI7Y2FzZVwiZXh0cmFjdFwiOnJldHVybiByO2Nhc2VcImluamVjdFwiOnJldHVybiByfX19LHJlZ2lzdGVyOmZ1bmN0aW9uKCl7OT49ZHx8Yi5TdGF0ZS5pc0dpbmdlcmJyZWFkfHwoUy5MaXN0cy50cmFuc2Zvcm1zQmFzZT1TLkxpc3RzLnRyYW5zZm9ybXNCYXNlLmNvbmNhdChTLkxpc3RzLnRyYW5zZm9ybXMzRCkpO2Zvcih2YXIgZT0wO2U8Uy5MaXN0cy50cmFuc2Zvcm1zQmFzZS5sZW5ndGg7ZSsrKSFmdW5jdGlvbigpe3ZhciB0PVMuTGlzdHMudHJhbnNmb3Jtc0Jhc2VbZV07Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3RdPWZ1bmN0aW9uKGUscixuKXtzd2l0Y2goZSl7Y2FzZVwibmFtZVwiOnJldHVyblwidHJhbnNmb3JtXCI7Y2FzZVwiZXh0cmFjdFwiOnJldHVybiBpKHIpPT09YXx8aShyKS50cmFuc2Zvcm1DYWNoZVt0XT09PWE/L15zY2FsZS9pLnRlc3QodCk/MTowOmkocikudHJhbnNmb3JtQ2FjaGVbdF0ucmVwbGFjZSgvWygpXS9nLFwiXCIpO2Nhc2VcImluamVjdFwiOnZhciBvPSExO3N3aXRjaCh0LnN1YnN0cigwLHQubGVuZ3RoLTEpKXtjYXNlXCJ0cmFuc2xhdGVcIjpvPSEvKCV8cHh8ZW18cmVtfHZ3fHZofFxcZCkkL2kudGVzdChuKTticmVhaztjYXNlXCJzY2FsXCI6Y2FzZVwic2NhbGVcIjpiLlN0YXRlLmlzQW5kcm9pZCYmaShyKS50cmFuc2Zvcm1DYWNoZVt0XT09PWEmJjE+biYmKG49MSksbz0hLyhcXGQpJC9pLnRlc3Qobik7YnJlYWs7Y2FzZVwic2tld1wiOm89IS8oZGVnfFxcZCkkL2kudGVzdChuKTticmVhaztjYXNlXCJyb3RhdGVcIjpvPSEvKGRlZ3xcXGQpJC9pLnRlc3Qobil9cmV0dXJuIG98fChpKHIpLnRyYW5zZm9ybUNhY2hlW3RdPVwiKFwiK24rXCIpXCIpLGkocikudHJhbnNmb3JtQ2FjaGVbdF19fX0oKTtmb3IodmFyIGU9MDtlPFMuTGlzdHMuY29sb3JzLmxlbmd0aDtlKyspIWZ1bmN0aW9uKCl7dmFyIHQ9Uy5MaXN0cy5jb2xvcnNbZV07Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3RdPWZ1bmN0aW9uKGUscixuKXtzd2l0Y2goZSl7Y2FzZVwibmFtZVwiOnJldHVybiB0O2Nhc2VcImV4dHJhY3RcIjp2YXIgbztpZihTLlJlZ0V4LndyYXBwZWRWYWx1ZUFscmVhZHlFeHRyYWN0ZWQudGVzdChuKSlvPW47ZWxzZXt2YXIgaSxzPXtibGFjazpcInJnYigwLCAwLCAwKVwiLGJsdWU6XCJyZ2IoMCwgMCwgMjU1KVwiLGdyYXk6XCJyZ2IoMTI4LCAxMjgsIDEyOClcIixncmVlbjpcInJnYigwLCAxMjgsIDApXCIscmVkOlwicmdiKDI1NSwgMCwgMClcIix3aGl0ZTpcInJnYigyNTUsIDI1NSwgMjU1KVwifTsvXltBLXpdKyQvaS50ZXN0KG4pP2k9c1tuXSE9PWE/c1tuXTpzLmJsYWNrOlMuUmVnRXguaXNIZXgudGVzdChuKT9pPVwicmdiKFwiK1MuVmFsdWVzLmhleFRvUmdiKG4pLmpvaW4oXCIgXCIpK1wiKVwiOi9ecmdiYT9cXCgvaS50ZXN0KG4pfHwoaT1zLmJsYWNrKSxvPShpfHxuKS50b1N0cmluZygpLm1hdGNoKFMuUmVnRXgudmFsdWVVbndyYXApWzFdLnJlcGxhY2UoLywoXFxzKyk/L2csXCIgXCIpfXJldHVybiA4Pj1kfHwzIT09by5zcGxpdChcIiBcIikubGVuZ3RofHwobys9XCIgMVwiKSxvO2Nhc2VcImluamVjdFwiOnJldHVybiA4Pj1kPzQ9PT1uLnNwbGl0KFwiIFwiKS5sZW5ndGgmJihuPW4uc3BsaXQoL1xccysvKS5zbGljZSgwLDMpLmpvaW4oXCIgXCIpKTozPT09bi5zcGxpdChcIiBcIikubGVuZ3RoJiYobis9XCIgMVwiKSwoOD49ZD9cInJnYlwiOlwicmdiYVwiKStcIihcIituLnJlcGxhY2UoL1xccysvZyxcIixcIikucmVwbGFjZSgvXFwuKFxcZCkrKD89LCkvZyxcIlwiKStcIilcIn19fSgpfX0sTmFtZXM6e2NhbWVsQ2FzZTpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKC8tKFxcdykvZyxmdW5jdGlvbihlLHQpe3JldHVybiB0LnRvVXBwZXJDYXNlKCl9KX0sU1ZHQXR0cmlidXRlOmZ1bmN0aW9uKGUpe3ZhciB0PVwid2lkdGh8aGVpZ2h0fHh8eXxjeHxjeXxyfHJ4fHJ5fHgxfHgyfHkxfHkyXCI7cmV0dXJuKGR8fGIuU3RhdGUuaXNBbmRyb2lkJiYhYi5TdGF0ZS5pc0Nocm9tZSkmJih0Kz1cInx0cmFuc2Zvcm1cIiksbmV3IFJlZ0V4cChcIl4oXCIrdCtcIikkXCIsXCJpXCIpLnRlc3QoZSl9LHByZWZpeENoZWNrOmZ1bmN0aW9uKGUpe2lmKGIuU3RhdGUucHJlZml4TWF0Y2hlc1tlXSlyZXR1cm5bYi5TdGF0ZS5wcmVmaXhNYXRjaGVzW2VdLCEwXTtmb3IodmFyIHQ9W1wiXCIsXCJXZWJraXRcIixcIk1velwiLFwibXNcIixcIk9cIl0scj0wLGE9dC5sZW5ndGg7YT5yO3IrKyl7dmFyIG47aWYobj0wPT09cj9lOnRbcl0rZS5yZXBsYWNlKC9eXFx3LyxmdW5jdGlvbihlKXtyZXR1cm4gZS50b1VwcGVyQ2FzZSgpfSksbS5pc1N0cmluZyhiLlN0YXRlLnByZWZpeEVsZW1lbnQuc3R5bGVbbl0pKXJldHVybiBiLlN0YXRlLnByZWZpeE1hdGNoZXNbZV09bixbbiwhMF19cmV0dXJuW2UsITFdfX0sVmFsdWVzOntoZXhUb1JnYjpmdW5jdGlvbihlKXt2YXIgdCxyPS9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2ksYT0vXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pO3JldHVybiBlPWUucmVwbGFjZShyLGZ1bmN0aW9uKGUsdCxyLGEpe3JldHVybiB0K3QrcityK2ErYX0pLHQ9YS5leGVjKGUpLHQ/W3BhcnNlSW50KHRbMV0sMTYpLHBhcnNlSW50KHRbMl0sMTYpLHBhcnNlSW50KHRbM10sMTYpXTpbMCwwLDBdfSxpc0NTU051bGxWYWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gMD09ZXx8L14obm9uZXxhdXRvfHRyYW5zcGFyZW50fChyZ2JhXFwoMCwgPzAsID8wLCA/MFxcKSkpJC9pLnRlc3QoZSl9LGdldFVuaXRUeXBlOmZ1bmN0aW9uKGUpe3JldHVybi9eKHJvdGF0ZXxza2V3KS9pLnRlc3QoZSk/XCJkZWdcIjovKF4oc2NhbGV8c2NhbGVYfHNjYWxlWXxzY2FsZVp8YWxwaGF8ZmxleEdyb3d8ZmxleEhlaWdodHx6SW5kZXh8Zm9udFdlaWdodCkkKXwoKG9wYWNpdHl8cmVkfGdyZWVufGJsdWV8YWxwaGEpJCkvaS50ZXN0KGUpP1wiXCI6XCJweFwifSxnZXREaXNwbGF5VHlwZTpmdW5jdGlvbihlKXt2YXIgdD1lJiZlLnRhZ05hbWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO3JldHVybi9eKGJ8YmlnfGl8c21hbGx8dHR8YWJicnxhY3JvbnltfGNpdGV8Y29kZXxkZm58ZW18a2JkfHN0cm9uZ3xzYW1wfHZhcnxhfGJkb3xicnxpbWd8bWFwfG9iamVjdHxxfHNjcmlwdHxzcGFufHN1YnxzdXB8YnV0dG9ufGlucHV0fGxhYmVsfHNlbGVjdHx0ZXh0YXJlYSkkL2kudGVzdCh0KT9cImlubGluZVwiOi9eKGxpKSQvaS50ZXN0KHQpP1wibGlzdC1pdGVtXCI6L14odHIpJC9pLnRlc3QodCk/XCJ0YWJsZS1yb3dcIjovXih0YWJsZSkkL2kudGVzdCh0KT9cInRhYmxlXCI6L14odGJvZHkpJC9pLnRlc3QodCk/XCJ0YWJsZS1yb3ctZ3JvdXBcIjpcImJsb2NrXCJ9LGFkZENsYXNzOmZ1bmN0aW9uKGUsdCl7ZS5jbGFzc0xpc3Q/ZS5jbGFzc0xpc3QuYWRkKHQpOmUuY2xhc3NOYW1lKz0oZS5jbGFzc05hbWUubGVuZ3RoP1wiIFwiOlwiXCIpK3R9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGUsdCl7ZS5jbGFzc0xpc3Q/ZS5jbGFzc0xpc3QucmVtb3ZlKHQpOmUuY2xhc3NOYW1lPWUuY2xhc3NOYW1lLnRvU3RyaW5nKCkucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIrdC5zcGxpdChcIiBcIikuam9pbihcInxcIikrXCIoXFxcXHN8JClcIixcImdpXCIpLFwiIFwiKX19LGdldFByb3BlcnR5VmFsdWU6ZnVuY3Rpb24oZSxyLG4sbyl7ZnVuY3Rpb24gcyhlLHIpe2Z1bmN0aW9uIG4oKXt1JiZTLnNldFByb3BlcnR5VmFsdWUoZSxcImRpc3BsYXlcIixcIm5vbmVcIil9dmFyIGw9MDtpZig4Pj1kKWw9Zi5jc3MoZSxyKTtlbHNle3ZhciB1PSExO2lmKC9eKHdpZHRofGhlaWdodCkkLy50ZXN0KHIpJiYwPT09Uy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJkaXNwbGF5XCIpJiYodT0hMCxTLnNldFByb3BlcnR5VmFsdWUoZSxcImRpc3BsYXlcIixTLlZhbHVlcy5nZXREaXNwbGF5VHlwZShlKSkpLCFvKXtpZihcImhlaWdodFwiPT09ciYmXCJib3JkZXItYm94XCIhPT1TLmdldFByb3BlcnR5VmFsdWUoZSxcImJveFNpemluZ1wiKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpe3ZhciBjPWUub2Zmc2V0SGVpZ2h0LShwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLFwiYm9yZGVyVG9wV2lkdGhcIikpfHwwKS0ocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoZSxcImJvcmRlckJvdHRvbVdpZHRoXCIpKXx8MCktKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJwYWRkaW5nVG9wXCIpKXx8MCktKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJwYWRkaW5nQm90dG9tXCIpKXx8MCk7cmV0dXJuIG4oKSxjfWlmKFwid2lkdGhcIj09PXImJlwiYm9yZGVyLWJveFwiIT09Uy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJib3hTaXppbmdcIikudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKXt2YXIgcD1lLm9mZnNldFdpZHRoLShwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLFwiYm9yZGVyTGVmdFdpZHRoXCIpKXx8MCktKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJib3JkZXJSaWdodFdpZHRoXCIpKXx8MCktKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJwYWRkaW5nTGVmdFwiKSl8fDApLShwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLFwicGFkZGluZ1JpZ2h0XCIpKXx8MCk7cmV0dXJuIG4oKSxwfX12YXIgZztnPWkoZSk9PT1hP3QuZ2V0Q29tcHV0ZWRTdHlsZShlLG51bGwpOmkoZSkuY29tcHV0ZWRTdHlsZT9pKGUpLmNvbXB1dGVkU3R5bGU6aShlKS5jb21wdXRlZFN0eWxlPXQuZ2V0Q29tcHV0ZWRTdHlsZShlLG51bGwpLFwiYm9yZGVyQ29sb3JcIj09PXImJihyPVwiYm9yZGVyVG9wQ29sb3JcIiksbD05PT09ZCYmXCJmaWx0ZXJcIj09PXI/Zy5nZXRQcm9wZXJ0eVZhbHVlKHIpOmdbcl0sKFwiXCI9PT1sfHxudWxsPT09bCkmJihsPWUuc3R5bGVbcl0pLG4oKX1pZihcImF1dG9cIj09PWwmJi9eKHRvcHxyaWdodHxib3R0b218bGVmdCkkL2kudGVzdChyKSl7dmFyIG09cyhlLFwicG9zaXRpb25cIik7KFwiZml4ZWRcIj09PW18fFwiYWJzb2x1dGVcIj09PW0mJi90b3B8bGVmdC9pLnRlc3QocikpJiYobD1mKGUpLnBvc2l0aW9uKClbcl0rXCJweFwiKX1yZXR1cm4gbH12YXIgbDtpZihTLkhvb2tzLnJlZ2lzdGVyZWRbcl0pe3ZhciB1PXIsYz1TLkhvb2tzLmdldFJvb3QodSk7bj09PWEmJihuPVMuZ2V0UHJvcGVydHlWYWx1ZShlLFMuTmFtZXMucHJlZml4Q2hlY2soYylbMF0pKSxTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY10mJihuPVMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXShcImV4dHJhY3RcIixlLG4pKSxsPVMuSG9va3MuZXh0cmFjdFZhbHVlKHUsbil9ZWxzZSBpZihTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0pe3ZhciBwLGc7cD1TLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0oXCJuYW1lXCIsZSksXCJ0cmFuc2Zvcm1cIiE9PXAmJihnPXMoZSxTLk5hbWVzLnByZWZpeENoZWNrKHApWzBdKSxTLlZhbHVlcy5pc0NTU051bGxWYWx1ZShnKSYmUy5Ib29rcy50ZW1wbGF0ZXNbcl0mJihnPVMuSG9va3MudGVtcGxhdGVzW3JdWzFdKSksbD1TLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0oXCJleHRyYWN0XCIsZSxnKX1pZighL15bXFxkLV0vLnRlc3QobCkpaWYoaShlKSYmaShlKS5pc1NWRyYmUy5OYW1lcy5TVkdBdHRyaWJ1dGUocikpaWYoL14oaGVpZ2h0fHdpZHRoKSQvaS50ZXN0KHIpKXRyeXtsPWUuZ2V0QkJveCgpW3JdfWNhdGNoKG0pe2w9MH1lbHNlIGw9ZS5nZXRBdHRyaWJ1dGUocik7ZWxzZSBsPXMoZSxTLk5hbWVzLnByZWZpeENoZWNrKHIpWzBdKTtyZXR1cm4gUy5WYWx1ZXMuaXNDU1NOdWxsVmFsdWUobCkmJihsPTApLGIuZGVidWc+PTImJmNvbnNvbGUubG9nKFwiR2V0IFwiK3IrXCI6IFwiK2wpLGx9LHNldFByb3BlcnR5VmFsdWU6ZnVuY3Rpb24oZSxyLGEsbixvKXt2YXIgcz1yO2lmKFwic2Nyb2xsXCI9PT1yKW8uY29udGFpbmVyP28uY29udGFpbmVyW1wic2Nyb2xsXCIrby5kaXJlY3Rpb25dPWE6XCJMZWZ0XCI9PT1vLmRpcmVjdGlvbj90LnNjcm9sbFRvKGEsby5hbHRlcm5hdGVWYWx1ZSk6dC5zY3JvbGxUbyhvLmFsdGVybmF0ZVZhbHVlLGEpO2Vsc2UgaWYoUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdJiZcInRyYW5zZm9ybVwiPT09Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdKFwibmFtZVwiLGUpKVMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXShcImluamVjdFwiLGUsYSkscz1cInRyYW5zZm9ybVwiLGE9aShlKS50cmFuc2Zvcm1DYWNoZVtyXTtlbHNle2lmKFMuSG9va3MucmVnaXN0ZXJlZFtyXSl7dmFyIGw9cix1PVMuSG9va3MuZ2V0Um9vdChyKTtuPW58fFMuZ2V0UHJvcGVydHlWYWx1ZShlLHUpLGE9Uy5Ib29rcy5pbmplY3RWYWx1ZShsLGEsbikscj11fWlmKFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXSYmKGE9Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdKFwiaW5qZWN0XCIsZSxhKSxyPVMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXShcIm5hbWVcIixlKSkscz1TLk5hbWVzLnByZWZpeENoZWNrKHIpWzBdLDg+PWQpdHJ5e2Uuc3R5bGVbc109YX1jYXRjaChjKXtiLmRlYnVnJiZjb25zb2xlLmxvZyhcIkJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBbXCIrYStcIl0gZm9yIFtcIitzK1wiXVwiKX1lbHNlIGkoZSkmJmkoZSkuaXNTVkcmJlMuTmFtZXMuU1ZHQXR0cmlidXRlKHIpP2Uuc2V0QXR0cmlidXRlKHIsYSk6ZS5zdHlsZVtzXT1hO2IuZGVidWc+PTImJmNvbnNvbGUubG9nKFwiU2V0IFwiK3IrXCIgKFwiK3MrXCIpOiBcIithKX1yZXR1cm5bcyxhXX0sZmx1c2hUcmFuc2Zvcm1DYWNoZTpmdW5jdGlvbihlKXtmdW5jdGlvbiB0KHQpe3JldHVybiBwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLHQpKX12YXIgcj1cIlwiO2lmKChkfHxiLlN0YXRlLmlzQW5kcm9pZCYmIWIuU3RhdGUuaXNDaHJvbWUpJiZpKGUpLmlzU1ZHKXt2YXIgYT17dHJhbnNsYXRlOlt0KFwidHJhbnNsYXRlWFwiKSx0KFwidHJhbnNsYXRlWVwiKV0sc2tld1g6W3QoXCJza2V3WFwiKV0sc2tld1k6W3QoXCJza2V3WVwiKV0sc2NhbGU6MSE9PXQoXCJzY2FsZVwiKT9bdChcInNjYWxlXCIpLHQoXCJzY2FsZVwiKV06W3QoXCJzY2FsZVhcIiksdChcInNjYWxlWVwiKV0scm90YXRlOlt0KFwicm90YXRlWlwiKSwwLDBdfTtmLmVhY2goaShlKS50cmFuc2Zvcm1DYWNoZSxmdW5jdGlvbihlKXsvXnRyYW5zbGF0ZS9pLnRlc3QoZSk/ZT1cInRyYW5zbGF0ZVwiOi9ec2NhbGUvaS50ZXN0KGUpP2U9XCJzY2FsZVwiOi9ecm90YXRlL2kudGVzdChlKSYmKGU9XCJyb3RhdGVcIiksYVtlXSYmKHIrPWUrXCIoXCIrYVtlXS5qb2luKFwiIFwiKStcIikgXCIsZGVsZXRlIGFbZV0pfSl9ZWxzZXt2YXIgbixvO2YuZWFjaChpKGUpLnRyYW5zZm9ybUNhY2hlLGZ1bmN0aW9uKHQpe3JldHVybiBuPWkoZSkudHJhbnNmb3JtQ2FjaGVbdF0sXCJ0cmFuc2Zvcm1QZXJzcGVjdGl2ZVwiPT09dD8obz1uLCEwKTooOT09PWQmJlwicm90YXRlWlwiPT09dCYmKHQ9XCJyb3RhdGVcIiksdm9pZChyKz10K24rXCIgXCIpKX0pLG8mJihyPVwicGVyc3BlY3RpdmVcIitvK1wiIFwiK3IpfVMuc2V0UHJvcGVydHlWYWx1ZShlLFwidHJhbnNmb3JtXCIscil9fTtTLkhvb2tzLnJlZ2lzdGVyKCksUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcigpLGIuaG9vaz1mdW5jdGlvbihlLHQscil7dmFyIG49YTtyZXR1cm4gZT1vKGUpLGYuZWFjaChlLGZ1bmN0aW9uKGUsbyl7aWYoaShvKT09PWEmJmIuaW5pdChvKSxyPT09YSluPT09YSYmKG49Yi5DU1MuZ2V0UHJvcGVydHlWYWx1ZShvLHQpKTtlbHNle3ZhciBzPWIuQ1NTLnNldFByb3BlcnR5VmFsdWUobyx0LHIpO1widHJhbnNmb3JtXCI9PT1zWzBdJiZiLkNTUy5mbHVzaFRyYW5zZm9ybUNhY2hlKG8pLG49c319KSxufTt2YXIgUD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtyZXR1cm4gcz9rLnByb21pc2V8fG51bGw6bH1mdW5jdGlvbiBuKCl7ZnVuY3Rpb24gZShlKXtmdW5jdGlvbiBwKGUsdCl7dmFyIHI9YSxuPWEsaT1hO3JldHVybiBtLmlzQXJyYXkoZSk/KHI9ZVswXSwhbS5pc0FycmF5KGVbMV0pJiYvXltcXGQtXS8udGVzdChlWzFdKXx8bS5pc0Z1bmN0aW9uKGVbMV0pfHxTLlJlZ0V4LmlzSGV4LnRlc3QoZVsxXSk/aT1lWzFdOihtLmlzU3RyaW5nKGVbMV0pJiYhUy5SZWdFeC5pc0hleC50ZXN0KGVbMV0pfHxtLmlzQXJyYXkoZVsxXSkpJiYobj10P2VbMV06dShlWzFdLHMuZHVyYXRpb24pLGVbMl0hPT1hJiYoaT1lWzJdKSkpOnI9ZSx0fHwobj1ufHxzLmVhc2luZyksbS5pc0Z1bmN0aW9uKHIpJiYocj1yLmNhbGwobyxWLHcpKSxtLmlzRnVuY3Rpb24oaSkmJihpPWkuY2FsbChvLFYsdykpLFtyfHwwLG4saV19ZnVuY3Rpb24gZChlLHQpe3ZhciByLGE7cmV0dXJuIGE9KHR8fFwiMFwiKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvWyVBLXpdKyQvLGZ1bmN0aW9uKGUpe3JldHVybiByPWUsXCJcIn0pLHJ8fChyPVMuVmFsdWVzLmdldFVuaXRUeXBlKGUpKSxbYSxyXX1mdW5jdGlvbiBoKCl7dmFyIGU9e215UGFyZW50Om8ucGFyZW50Tm9kZXx8ci5ib2R5LHBvc2l0aW9uOlMuZ2V0UHJvcGVydHlWYWx1ZShvLFwicG9zaXRpb25cIiksZm9udFNpemU6Uy5nZXRQcm9wZXJ0eVZhbHVlKG8sXCJmb250U2l6ZVwiKX0sYT1lLnBvc2l0aW9uPT09TC5sYXN0UG9zaXRpb24mJmUubXlQYXJlbnQ9PT1MLmxhc3RQYXJlbnQsbj1lLmZvbnRTaXplPT09TC5sYXN0Rm9udFNpemU7TC5sYXN0UGFyZW50PWUubXlQYXJlbnQsTC5sYXN0UG9zaXRpb249ZS5wb3NpdGlvbixMLmxhc3RGb250U2l6ZT1lLmZvbnRTaXplO3ZhciBzPTEwMCxsPXt9O2lmKG4mJmEpbC5lbVRvUHg9TC5sYXN0RW1Ub1B4LGwucGVyY2VudFRvUHhXaWR0aD1MLmxhc3RQZXJjZW50VG9QeFdpZHRoLGwucGVyY2VudFRvUHhIZWlnaHQ9TC5sYXN0UGVyY2VudFRvUHhIZWlnaHQ7ZWxzZXt2YXIgdT1pKG8pLmlzU1ZHP3IuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcInJlY3RcIik6ci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2IuaW5pdCh1KSxlLm15UGFyZW50LmFwcGVuZENoaWxkKHUpLGYuZWFjaChbXCJvdmVyZmxvd1wiLFwib3ZlcmZsb3dYXCIsXCJvdmVyZmxvd1lcIl0sZnVuY3Rpb24oZSx0KXtiLkNTUy5zZXRQcm9wZXJ0eVZhbHVlKHUsdCxcImhpZGRlblwiKX0pLGIuQ1NTLnNldFByb3BlcnR5VmFsdWUodSxcInBvc2l0aW9uXCIsZS5wb3NpdGlvbiksYi5DU1Muc2V0UHJvcGVydHlWYWx1ZSh1LFwiZm9udFNpemVcIixlLmZvbnRTaXplKSxiLkNTUy5zZXRQcm9wZXJ0eVZhbHVlKHUsXCJib3hTaXppbmdcIixcImNvbnRlbnQtYm94XCIpLGYuZWFjaChbXCJtaW5XaWR0aFwiLFwibWF4V2lkdGhcIixcIndpZHRoXCIsXCJtaW5IZWlnaHRcIixcIm1heEhlaWdodFwiLFwiaGVpZ2h0XCJdLGZ1bmN0aW9uKGUsdCl7Yi5DU1Muc2V0UHJvcGVydHlWYWx1ZSh1LHQscytcIiVcIil9KSxiLkNTUy5zZXRQcm9wZXJ0eVZhbHVlKHUsXCJwYWRkaW5nTGVmdFwiLHMrXCJlbVwiKSxsLnBlcmNlbnRUb1B4V2lkdGg9TC5sYXN0UGVyY2VudFRvUHhXaWR0aD0ocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUodSxcIndpZHRoXCIsbnVsbCwhMCkpfHwxKS9zLGwucGVyY2VudFRvUHhIZWlnaHQ9TC5sYXN0UGVyY2VudFRvUHhIZWlnaHQ9KHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKHUsXCJoZWlnaHRcIixudWxsLCEwKSl8fDEpL3MsbC5lbVRvUHg9TC5sYXN0RW1Ub1B4PShwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZSh1LFwicGFkZGluZ0xlZnRcIikpfHwxKS9zLGUubXlQYXJlbnQucmVtb3ZlQ2hpbGQodSl9cmV0dXJuIG51bGw9PT1MLnJlbVRvUHgmJihMLnJlbVRvUHg9cGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoci5ib2R5LFwiZm9udFNpemVcIikpfHwxNiksbnVsbD09PUwudndUb1B4JiYoTC52d1RvUHg9cGFyc2VGbG9hdCh0LmlubmVyV2lkdGgpLzEwMCxMLnZoVG9QeD1wYXJzZUZsb2F0KHQuaW5uZXJIZWlnaHQpLzEwMCksbC5yZW1Ub1B4PUwucmVtVG9QeCxsLnZ3VG9QeD1MLnZ3VG9QeCxsLnZoVG9QeD1MLnZoVG9QeCxiLmRlYnVnPj0xJiZjb25zb2xlLmxvZyhcIlVuaXQgcmF0aW9zOiBcIitKU09OLnN0cmluZ2lmeShsKSxvKSxsfWlmKHMuYmVnaW4mJjA9PT1WKXRyeXtzLmJlZ2luLmNhbGwoZyxnKX1jYXRjaCh4KXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgeH0sMSl9aWYoXCJzY3JvbGxcIj09PUEpe3ZhciBQLEMsVCxGPS9eeCQvaS50ZXN0KHMuYXhpcyk/XCJMZWZ0XCI6XCJUb3BcIixqPXBhcnNlRmxvYXQocy5vZmZzZXQpfHwwO3MuY29udGFpbmVyP20uaXNXcmFwcGVkKHMuY29udGFpbmVyKXx8bS5pc05vZGUocy5jb250YWluZXIpPyhzLmNvbnRhaW5lcj1zLmNvbnRhaW5lclswXXx8cy5jb250YWluZXIsUD1zLmNvbnRhaW5lcltcInNjcm9sbFwiK0ZdLFQ9UCtmKG8pLnBvc2l0aW9uKClbRi50b0xvd2VyQ2FzZSgpXStqKTpzLmNvbnRhaW5lcj1udWxsOihQPWIuU3RhdGUuc2Nyb2xsQW5jaG9yW2IuU3RhdGVbXCJzY3JvbGxQcm9wZXJ0eVwiK0ZdXSxDPWIuU3RhdGUuc2Nyb2xsQW5jaG9yW2IuU3RhdGVbXCJzY3JvbGxQcm9wZXJ0eVwiKyhcIkxlZnRcIj09PUY/XCJUb3BcIjpcIkxlZnRcIildXSxUPWYobykub2Zmc2V0KClbRi50b0xvd2VyQ2FzZSgpXStqKSxsPXtzY3JvbGw6e3Jvb3RQcm9wZXJ0eVZhbHVlOiExLHN0YXJ0VmFsdWU6UCxjdXJyZW50VmFsdWU6UCxlbmRWYWx1ZTpULHVuaXRUeXBlOlwiXCIsZWFzaW5nOnMuZWFzaW5nLHNjcm9sbERhdGE6e2NvbnRhaW5lcjpzLmNvbnRhaW5lcixkaXJlY3Rpb246RixhbHRlcm5hdGVWYWx1ZTpDfX0sZWxlbWVudDpvfSxiLmRlYnVnJiZjb25zb2xlLmxvZyhcInR3ZWVuc0NvbnRhaW5lciAoc2Nyb2xsKTogXCIsbC5zY3JvbGwsbyl9ZWxzZSBpZihcInJldmVyc2VcIj09PUEpe2lmKCFpKG8pLnR3ZWVuc0NvbnRhaW5lcilyZXR1cm4gdm9pZCBmLmRlcXVldWUobyxzLnF1ZXVlKTtcIm5vbmVcIj09PWkobykub3B0cy5kaXNwbGF5JiYoaShvKS5vcHRzLmRpc3BsYXk9XCJhdXRvXCIpLFwiaGlkZGVuXCI9PT1pKG8pLm9wdHMudmlzaWJpbGl0eSYmKGkobykub3B0cy52aXNpYmlsaXR5PVwidmlzaWJsZVwiKSxpKG8pLm9wdHMubG9vcD0hMSxpKG8pLm9wdHMuYmVnaW49bnVsbCxpKG8pLm9wdHMuY29tcGxldGU9bnVsbCx2LmVhc2luZ3x8ZGVsZXRlIHMuZWFzaW5nLHYuZHVyYXRpb258fGRlbGV0ZSBzLmR1cmF0aW9uLHM9Zi5leHRlbmQoe30saShvKS5vcHRzLHMpO3ZhciBFPWYuZXh0ZW5kKCEwLHt9LGkobykudHdlZW5zQ29udGFpbmVyKTtmb3IodmFyIEggaW4gRSlpZihcImVsZW1lbnRcIiE9PUgpe3ZhciBOPUVbSF0uc3RhcnRWYWx1ZTtFW0hdLnN0YXJ0VmFsdWU9RVtIXS5jdXJyZW50VmFsdWU9RVtIXS5lbmRWYWx1ZSxFW0hdLmVuZFZhbHVlPU4sbS5pc0VtcHR5T2JqZWN0KHYpfHwoRVtIXS5lYXNpbmc9cy5lYXNpbmcpLGIuZGVidWcmJmNvbnNvbGUubG9nKFwicmV2ZXJzZSB0d2VlbnNDb250YWluZXIgKFwiK0grXCIpOiBcIitKU09OLnN0cmluZ2lmeShFW0hdKSxvKX1sPUV9ZWxzZSBpZihcInN0YXJ0XCI9PT1BKXt2YXIgRTtpKG8pLnR3ZWVuc0NvbnRhaW5lciYmaShvKS5pc0FuaW1hdGluZz09PSEwJiYoRT1pKG8pLnR3ZWVuc0NvbnRhaW5lciksZi5lYWNoKHksZnVuY3Rpb24oZSx0KXtpZihSZWdFeHAoXCJeXCIrUy5MaXN0cy5jb2xvcnMuam9pbihcIiR8XlwiKStcIiRcIikudGVzdChlKSl7dmFyIHI9cCh0LCEwKSxuPXJbMF0sbz1yWzFdLGk9clsyXTtpZihTLlJlZ0V4LmlzSGV4LnRlc3Qobikpe2Zvcih2YXIgcz1bXCJSZWRcIixcIkdyZWVuXCIsXCJCbHVlXCJdLGw9Uy5WYWx1ZXMuaGV4VG9SZ2IobiksdT1pP1MuVmFsdWVzLmhleFRvUmdiKGkpOmEsYz0wO2M8cy5sZW5ndGg7YysrKXt2YXIgZj1bbFtjXV07byYmZi5wdXNoKG8pLHUhPT1hJiZmLnB1c2godVtjXSkseVtlK3NbY11dPWZ9ZGVsZXRlIHlbZV19fX0pO2Zvcih2YXIgeiBpbiB5KXt2YXIgTz1wKHlbel0pLHE9T1swXSwkPU9bMV0sTT1PWzJdO3o9Uy5OYW1lcy5jYW1lbENhc2Uoeik7dmFyIEk9Uy5Ib29rcy5nZXRSb290KHopLEI9ITE7aWYoaShvKS5pc1NWR3x8XCJ0d2VlblwiPT09SXx8Uy5OYW1lcy5wcmVmaXhDaGVjayhJKVsxXSE9PSExfHxTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbSV0hPT1hKXsocy5kaXNwbGF5IT09YSYmbnVsbCE9PXMuZGlzcGxheSYmXCJub25lXCIhPT1zLmRpc3BsYXl8fHMudmlzaWJpbGl0eSE9PWEmJlwiaGlkZGVuXCIhPT1zLnZpc2liaWxpdHkpJiYvb3BhY2l0eXxmaWx0ZXIvLnRlc3QoeikmJiFNJiYwIT09cSYmKE09MCkscy5fY2FjaGVWYWx1ZXMmJkUmJkVbel0/KE09PT1hJiYoTT1FW3pdLmVuZFZhbHVlK0Vbel0udW5pdFR5cGUpLEI9aShvKS5yb290UHJvcGVydHlWYWx1ZUNhY2hlW0ldKTpTLkhvb2tzLnJlZ2lzdGVyZWRbel0/TT09PWE/KEI9Uy5nZXRQcm9wZXJ0eVZhbHVlKG8sSSksTT1TLmdldFByb3BlcnR5VmFsdWUobyx6LEIpKTpCPVMuSG9va3MudGVtcGxhdGVzW0ldWzFdOk09PT1hJiYoTT1TLmdldFByb3BlcnR5VmFsdWUobyx6KSk7dmFyIFcsRyxZLEQ9ITE7aWYoVz1kKHosTSksTT1XWzBdLFk9V1sxXSxXPWQoeixxKSxxPVdbMF0ucmVwbGFjZSgvXihbKy1cXC8qXSk9LyxmdW5jdGlvbihlLHQpe3JldHVybiBEPXQsXCJcIn0pLEc9V1sxXSxNPXBhcnNlRmxvYXQoTSl8fDAscT1wYXJzZUZsb2F0KHEpfHwwLFwiJVwiPT09RyYmKC9eKGZvbnRTaXplfGxpbmVIZWlnaHQpJC8udGVzdCh6KT8ocS89MTAwLEc9XCJlbVwiKTovXnNjYWxlLy50ZXN0KHopPyhxLz0xMDAsRz1cIlwiKTovKFJlZHxHcmVlbnxCbHVlKSQvaS50ZXN0KHopJiYocT1xLzEwMCoyNTUsRz1cIlwiKSksL1tcXC8qXS8udGVzdChEKSlHPVk7ZWxzZSBpZihZIT09RyYmMCE9PU0paWYoMD09PXEpRz1ZO2Vsc2V7bj1ufHxoKCk7dmFyIFE9L21hcmdpbnxwYWRkaW5nfGxlZnR8cmlnaHR8d2lkdGh8dGV4dHx3b3JkfGxldHRlci9pLnRlc3Qoeil8fC9YJC8udGVzdCh6KXx8XCJ4XCI9PT16P1wieFwiOlwieVwiO3N3aXRjaChZKXtjYXNlXCIlXCI6TSo9XCJ4XCI9PT1RP24ucGVyY2VudFRvUHhXaWR0aDpuLnBlcmNlbnRUb1B4SGVpZ2h0O2JyZWFrO2Nhc2VcInB4XCI6YnJlYWs7ZGVmYXVsdDpNKj1uW1krXCJUb1B4XCJdfXN3aXRjaChHKXtjYXNlXCIlXCI6TSo9MS8oXCJ4XCI9PT1RP24ucGVyY2VudFRvUHhXaWR0aDpuLnBlcmNlbnRUb1B4SGVpZ2h0KTticmVhaztjYXNlXCJweFwiOmJyZWFrO2RlZmF1bHQ6TSo9MS9uW0crXCJUb1B4XCJdfX1zd2l0Y2goRCl7Y2FzZVwiK1wiOnE9TStxO2JyZWFrO2Nhc2VcIi1cIjpxPU0tcTticmVhaztjYXNlXCIqXCI6cT1NKnE7YnJlYWs7Y2FzZVwiL1wiOnE9TS9xfWxbel09e3Jvb3RQcm9wZXJ0eVZhbHVlOkIsc3RhcnRWYWx1ZTpNLGN1cnJlbnRWYWx1ZTpNLGVuZFZhbHVlOnEsdW5pdFR5cGU6RyxlYXNpbmc6JH0sYi5kZWJ1ZyYmY29uc29sZS5sb2coXCJ0d2VlbnNDb250YWluZXIgKFwiK3orXCIpOiBcIitKU09OLnN0cmluZ2lmeShsW3pdKSxvKX1lbHNlIGIuZGVidWcmJmNvbnNvbGUubG9nKFwiU2tpcHBpbmcgW1wiK0krXCJdIGR1ZSB0byBhIGxhY2sgb2YgYnJvd3NlciBzdXBwb3J0LlwiKX1sLmVsZW1lbnQ9b31sLmVsZW1lbnQmJihTLlZhbHVlcy5hZGRDbGFzcyhvLFwidmVsb2NpdHktYW5pbWF0aW5nXCIpLFIucHVzaChsKSxcIlwiPT09cy5xdWV1ZSYmKGkobykudHdlZW5zQ29udGFpbmVyPWwsaShvKS5vcHRzPXMpLGkobykuaXNBbmltYXRpbmc9ITAsVj09PXctMT8oYi5TdGF0ZS5jYWxscy5wdXNoKFtSLGcscyxudWxsLGsucmVzb2x2ZXJdKSxiLlN0YXRlLmlzVGlja2luZz09PSExJiYoYi5TdGF0ZS5pc1RpY2tpbmc9ITAsYygpKSk6VisrKX12YXIgbixvPXRoaXMscz1mLmV4dGVuZCh7fSxiLmRlZmF1bHRzLHYpLGw9e307c3dpdGNoKGkobyk9PT1hJiZiLmluaXQobykscGFyc2VGbG9hdChzLmRlbGF5KSYmcy5xdWV1ZSE9PSExJiZmLnF1ZXVlKG8scy5xdWV1ZSxmdW5jdGlvbihlKXtiLnZlbG9jaXR5UXVldWVFbnRyeUZsYWc9ITAsaShvKS5kZWxheVRpbWVyPXtzZXRUaW1lb3V0OnNldFRpbWVvdXQoZSxwYXJzZUZsb2F0KHMuZGVsYXkpKSxuZXh0OmV9fSkscy5kdXJhdGlvbi50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpe2Nhc2VcImZhc3RcIjpzLmR1cmF0aW9uPTIwMDticmVhaztjYXNlXCJub3JtYWxcIjpzLmR1cmF0aW9uPWg7YnJlYWs7Y2FzZVwic2xvd1wiOnMuZHVyYXRpb249NjAwO2JyZWFrO2RlZmF1bHQ6cy5kdXJhdGlvbj1wYXJzZUZsb2F0KHMuZHVyYXRpb24pfHwxfWIubW9jayE9PSExJiYoYi5tb2NrPT09ITA/cy5kdXJhdGlvbj1zLmRlbGF5PTE6KHMuZHVyYXRpb24qPXBhcnNlRmxvYXQoYi5tb2NrKXx8MSxzLmRlbGF5Kj1wYXJzZUZsb2F0KGIubW9jayl8fDEpKSxzLmVhc2luZz11KHMuZWFzaW5nLHMuZHVyYXRpb24pLHMuYmVnaW4mJiFtLmlzRnVuY3Rpb24ocy5iZWdpbikmJihzLmJlZ2luPW51bGwpLHMucHJvZ3Jlc3MmJiFtLmlzRnVuY3Rpb24ocy5wcm9ncmVzcykmJihzLnByb2dyZXNzPW51bGwpLHMuY29tcGxldGUmJiFtLmlzRnVuY3Rpb24ocy5jb21wbGV0ZSkmJihzLmNvbXBsZXRlPW51bGwpLHMuZGlzcGxheSE9PWEmJm51bGwhPT1zLmRpc3BsYXkmJihzLmRpc3BsYXk9cy5kaXNwbGF5LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSxcImF1dG9cIj09PXMuZGlzcGxheSYmKHMuZGlzcGxheT1iLkNTUy5WYWx1ZXMuZ2V0RGlzcGxheVR5cGUobykpKSxzLnZpc2liaWxpdHkhPT1hJiZudWxsIT09cy52aXNpYmlsaXR5JiYocy52aXNpYmlsaXR5PXMudmlzaWJpbGl0eS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpLHMubW9iaWxlSEE9cy5tb2JpbGVIQSYmYi5TdGF0ZS5pc01vYmlsZSYmIWIuU3RhdGUuaXNHaW5nZXJicmVhZCxzLnF1ZXVlPT09ITE/cy5kZWxheT9zZXRUaW1lb3V0KGUscy5kZWxheSk6ZSgpOmYucXVldWUobyxzLnF1ZXVlLGZ1bmN0aW9uKHQscil7cmV0dXJuIHI9PT0hMD8oay5wcm9taXNlJiZrLnJlc29sdmVyKGcpLCEwKTooYi52ZWxvY2l0eVF1ZXVlRW50cnlGbGFnPSEwLHZvaWQgZSh0KSl9KSxcIlwiIT09cy5xdWV1ZSYmXCJmeFwiIT09cy5xdWV1ZXx8XCJpbnByb2dyZXNzXCI9PT1mLnF1ZXVlKG8pWzBdfHxmLmRlcXVldWUobyl9dmFyIHMsbCxkLGcseSx2LHg9YXJndW1lbnRzWzBdJiYoYXJndW1lbnRzWzBdLnB8fGYuaXNQbGFpbk9iamVjdChhcmd1bWVudHNbMF0ucHJvcGVydGllcykmJiFhcmd1bWVudHNbMF0ucHJvcGVydGllcy5uYW1lc3x8bS5pc1N0cmluZyhhcmd1bWVudHNbMF0ucHJvcGVydGllcykpO2lmKG0uaXNXcmFwcGVkKHRoaXMpPyhzPSExLGQ9MCxnPXRoaXMsbD10aGlzKToocz0hMCxkPTEsZz14P2FyZ3VtZW50c1swXS5lbGVtZW50c3x8YXJndW1lbnRzWzBdLmU6YXJndW1lbnRzWzBdKSxnPW8oZykpe3g/KHk9YXJndW1lbnRzWzBdLnByb3BlcnRpZXN8fGFyZ3VtZW50c1swXS5wLHY9YXJndW1lbnRzWzBdLm9wdGlvbnN8fGFyZ3VtZW50c1swXS5vKTooeT1hcmd1bWVudHNbZF0sdj1hcmd1bWVudHNbZCsxXSk7dmFyIHc9Zy5sZW5ndGgsVj0wO2lmKCEvXihzdG9wfGZpbmlzaCkkL2kudGVzdCh5KSYmIWYuaXNQbGFpbk9iamVjdCh2KSl7dmFyIEM9ZCsxO3Y9e307Zm9yKHZhciBUPUM7VDxhcmd1bWVudHMubGVuZ3RoO1QrKyltLmlzQXJyYXkoYXJndW1lbnRzW1RdKXx8IS9eKGZhc3R8bm9ybWFsfHNsb3cpJC9pLnRlc3QoYXJndW1lbnRzW1RdKSYmIS9eXFxkLy50ZXN0KGFyZ3VtZW50c1tUXSk/bS5pc1N0cmluZyhhcmd1bWVudHNbVF0pfHxtLmlzQXJyYXkoYXJndW1lbnRzW1RdKT92LmVhc2luZz1hcmd1bWVudHNbVF06bS5pc0Z1bmN0aW9uKGFyZ3VtZW50c1tUXSkmJih2LmNvbXBsZXRlPWFyZ3VtZW50c1tUXSk6di5kdXJhdGlvbj1hcmd1bWVudHNbVF19dmFyIGs9e3Byb21pc2U6bnVsbCxyZXNvbHZlcjpudWxsLHJlamVjdGVyOm51bGx9O3MmJmIuUHJvbWlzZSYmKGsucHJvbWlzZT1uZXcgYi5Qcm9taXNlKGZ1bmN0aW9uKGUsdCl7ay5yZXNvbHZlcj1lLGsucmVqZWN0ZXI9dH0pKTt2YXIgQTtzd2l0Y2goeSl7Y2FzZVwic2Nyb2xsXCI6QT1cInNjcm9sbFwiO2JyZWFrO2Nhc2VcInJldmVyc2VcIjpBPVwicmV2ZXJzZVwiO2JyZWFrO2Nhc2VcImZpbmlzaFwiOmNhc2VcInN0b3BcIjpmLmVhY2goZyxmdW5jdGlvbihlLHQpe2kodCkmJmkodCkuZGVsYXlUaW1lciYmKGNsZWFyVGltZW91dChpKHQpLmRlbGF5VGltZXIuc2V0VGltZW91dCksaSh0KS5kZWxheVRpbWVyLm5leHQmJmkodCkuZGVsYXlUaW1lci5uZXh0KCksZGVsZXRlIGkodCkuZGVsYXlUaW1lcil9KTt2YXIgRj1bXTtyZXR1cm4gZi5lYWNoKGIuU3RhdGUuY2FsbHMsZnVuY3Rpb24oZSx0KXt0JiZmLmVhY2godFsxXSxmdW5jdGlvbihyLG4pe3ZhciBvPXY9PT1hP1wiXCI6djtyZXR1cm4gbz09PSEwfHx0WzJdLnF1ZXVlPT09b3x8dj09PWEmJnRbMl0ucXVldWU9PT0hMT92b2lkIGYuZWFjaChnLGZ1bmN0aW9uKHIsYSl7YT09PW4mJigodj09PSEwfHxtLmlzU3RyaW5nKHYpKSYmKGYuZWFjaChmLnF1ZXVlKGEsbS5pc1N0cmluZyh2KT92OlwiXCIpLGZ1bmN0aW9uKGUsdCl7XHJcbm0uaXNGdW5jdGlvbih0KSYmdChudWxsLCEwKX0pLGYucXVldWUoYSxtLmlzU3RyaW5nKHYpP3Y6XCJcIixbXSkpLFwic3RvcFwiPT09eT8oaShhKSYmaShhKS50d2VlbnNDb250YWluZXImJm8hPT0hMSYmZi5lYWNoKGkoYSkudHdlZW5zQ29udGFpbmVyLGZ1bmN0aW9uKGUsdCl7dC5lbmRWYWx1ZT10LmN1cnJlbnRWYWx1ZX0pLEYucHVzaChlKSk6XCJmaW5pc2hcIj09PXkmJih0WzJdLmR1cmF0aW9uPTEpKX0pOiEwfSl9KSxcInN0b3BcIj09PXkmJihmLmVhY2goRixmdW5jdGlvbihlLHQpe3AodCwhMCl9KSxrLnByb21pc2UmJmsucmVzb2x2ZXIoZykpLGUoKTtkZWZhdWx0OmlmKCFmLmlzUGxhaW5PYmplY3QoeSl8fG0uaXNFbXB0eU9iamVjdCh5KSl7aWYobS5pc1N0cmluZyh5KSYmYi5SZWRpcmVjdHNbeV0pe3ZhciBqPWYuZXh0ZW5kKHt9LHYpLEU9ai5kdXJhdGlvbixIPWouZGVsYXl8fDA7cmV0dXJuIGouYmFja3dhcmRzPT09ITAmJihnPWYuZXh0ZW5kKCEwLFtdLGcpLnJldmVyc2UoKSksZi5lYWNoKGcsZnVuY3Rpb24oZSx0KXtwYXJzZUZsb2F0KGouc3RhZ2dlcik/ai5kZWxheT1IK3BhcnNlRmxvYXQoai5zdGFnZ2VyKSplOm0uaXNGdW5jdGlvbihqLnN0YWdnZXIpJiYoai5kZWxheT1IK2ouc3RhZ2dlci5jYWxsKHQsZSx3KSksai5kcmFnJiYoai5kdXJhdGlvbj1wYXJzZUZsb2F0KEUpfHwoL14oY2FsbG91dHx0cmFuc2l0aW9uKS8udGVzdCh5KT8xZTM6aCksai5kdXJhdGlvbj1NYXRoLm1heChqLmR1cmF0aW9uKihqLmJhY2t3YXJkcz8xLWUvdzooZSsxKS93KSwuNzUqai5kdXJhdGlvbiwyMDApKSxiLlJlZGlyZWN0c1t5XS5jYWxsKHQsdCxqfHx7fSxlLHcsZyxrLnByb21pc2U/azphKX0pLGUoKX12YXIgTj1cIlZlbG9jaXR5OiBGaXJzdCBhcmd1bWVudCAoXCIreStcIikgd2FzIG5vdCBhIHByb3BlcnR5IG1hcCwgYSBrbm93biBhY3Rpb24sIG9yIGEgcmVnaXN0ZXJlZCByZWRpcmVjdC4gQWJvcnRpbmcuXCI7cmV0dXJuIGsucHJvbWlzZT9rLnJlamVjdGVyKG5ldyBFcnJvcihOKSk6Y29uc29sZS5sb2coTiksZSgpfUE9XCJzdGFydFwifXZhciBMPXtsYXN0UGFyZW50Om51bGwsbGFzdFBvc2l0aW9uOm51bGwsbGFzdEZvbnRTaXplOm51bGwsbGFzdFBlcmNlbnRUb1B4V2lkdGg6bnVsbCxsYXN0UGVyY2VudFRvUHhIZWlnaHQ6bnVsbCxsYXN0RW1Ub1B4Om51bGwscmVtVG9QeDpudWxsLHZ3VG9QeDpudWxsLHZoVG9QeDpudWxsfSxSPVtdO2YuZWFjaChnLGZ1bmN0aW9uKGUsdCl7bS5pc05vZGUodCkmJm4uY2FsbCh0KX0pO3ZhciB6LGo9Zi5leHRlbmQoe30sYi5kZWZhdWx0cyx2KTtpZihqLmxvb3A9cGFyc2VJbnQoai5sb29wKSx6PTIqai5sb29wLTEsai5sb29wKWZvcih2YXIgTz0wO3o+TztPKyspe3ZhciBxPXtkZWxheTpqLmRlbGF5LHByb2dyZXNzOmoucHJvZ3Jlc3N9O089PT16LTEmJihxLmRpc3BsYXk9ai5kaXNwbGF5LHEudmlzaWJpbGl0eT1qLnZpc2liaWxpdHkscS5jb21wbGV0ZT1qLmNvbXBsZXRlKSxQKGcsXCJyZXZlcnNlXCIscSl9cmV0dXJuIGUoKX19O2I9Zi5leHRlbmQoUCxiKSxiLmFuaW1hdGU9UDt2YXIgdz10LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8ZztyZXR1cm4gYi5TdGF0ZS5pc01vYmlsZXx8ci5oaWRkZW49PT1hfHxyLmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsZnVuY3Rpb24oKXtyLmhpZGRlbj8odz1mdW5jdGlvbihlKXtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2UoITApfSwxNil9LGMoKSk6dz10LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8Z30pLGUuVmVsb2NpdHk9YixlIT09dCYmKGUuZm4udmVsb2NpdHk9UCxlLmZuLnZlbG9jaXR5LmRlZmF1bHRzPWIuZGVmYXVsdHMpLGYuZWFjaChbXCJEb3duXCIsXCJVcFwiXSxmdW5jdGlvbihlLHQpe2IuUmVkaXJlY3RzW1wic2xpZGVcIit0XT1mdW5jdGlvbihlLHIsbixvLGkscyl7dmFyIGw9Zi5leHRlbmQoe30sciksdT1sLmJlZ2luLGM9bC5jb21wbGV0ZSxwPXtoZWlnaHQ6XCJcIixtYXJnaW5Ub3A6XCJcIixtYXJnaW5Cb3R0b206XCJcIixwYWRkaW5nVG9wOlwiXCIscGFkZGluZ0JvdHRvbTpcIlwifSxkPXt9O2wuZGlzcGxheT09PWEmJihsLmRpc3BsYXk9XCJEb3duXCI9PT10P1wiaW5saW5lXCI9PT1iLkNTUy5WYWx1ZXMuZ2V0RGlzcGxheVR5cGUoZSk/XCJpbmxpbmUtYmxvY2tcIjpcImJsb2NrXCI6XCJub25lXCIpLGwuYmVnaW49ZnVuY3Rpb24oKXt1JiZ1LmNhbGwoaSxpKTtmb3IodmFyIHIgaW4gcCl7ZFtyXT1lLnN0eWxlW3JdO3ZhciBhPWIuQ1NTLmdldFByb3BlcnR5VmFsdWUoZSxyKTtwW3JdPVwiRG93blwiPT09dD9bYSwwXTpbMCxhXX1kLm92ZXJmbG93PWUuc3R5bGUub3ZlcmZsb3csZS5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwifSxsLmNvbXBsZXRlPWZ1bmN0aW9uKCl7Zm9yKHZhciB0IGluIGQpZS5zdHlsZVt0XT1kW3RdO2MmJmMuY2FsbChpLGkpLHMmJnMucmVzb2x2ZXIoaSl9LGIoZSxwLGwpfX0pLGYuZWFjaChbXCJJblwiLFwiT3V0XCJdLGZ1bmN0aW9uKGUsdCl7Yi5SZWRpcmVjdHNbXCJmYWRlXCIrdF09ZnVuY3Rpb24oZSxyLG4sbyxpLHMpe3ZhciBsPWYuZXh0ZW5kKHt9LHIpLHU9e29wYWNpdHk6XCJJblwiPT09dD8xOjB9LGM9bC5jb21wbGV0ZTtsLmNvbXBsZXRlPW4hPT1vLTE/bC5iZWdpbj1udWxsOmZ1bmN0aW9uKCl7YyYmYy5jYWxsKGksaSkscyYmcy5yZXNvbHZlcihpKX0sbC5kaXNwbGF5PT09YSYmKGwuZGlzcGxheT1cIkluXCI9PT10P1wiYXV0b1wiOlwibm9uZVwiKSxiKHRoaXMsdSxsKX19KSxifSh3aW5kb3cualF1ZXJ5fHx3aW5kb3cuWmVwdG98fHdpbmRvdyx3aW5kb3csZG9jdW1lbnQpfSkpO1xyXG5cclxuLy8gUmVxdWlyZWQgZm9yIE1ldGVvciBwYWNrYWdlLCB0aGUgdXNlIG9mIHdpbmRvdyBwcmV2ZW50cyBleHBvcnQgYnkgTWV0ZW9yXHJcbihmdW5jdGlvbih3aW5kb3cpe1xyXG4gIGlmKHdpbmRvdy5QYWNrYWdlKXtcclxuICAgIE1hdGVyaWFsaXplID0ge307XHJcbiAgfSBlbHNlIHtcclxuICAgIHdpbmRvdy5NYXRlcmlhbGl6ZSA9IHt9O1xyXG4gIH1cclxufSkod2luZG93KTtcclxuXHJcbmlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcgJiYgIWV4cG9ydHMubm9kZVR5cGUpIHtcclxuICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGUuZXhwb3J0cykge1xyXG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gTWF0ZXJpYWxpemU7XHJcbiAgfVxyXG4gIGV4cG9ydHMuZGVmYXVsdCA9IE1hdGVyaWFsaXplO1xyXG59XHJcblxyXG4vKlxyXG4gKiByYWYuanNcclxuICogaHR0cHM6Ly9naXRodWIuY29tL25ncnltYW4vcmFmLmpzXHJcbiAqXHJcbiAqIG9yaWdpbmFsIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXJcclxuICogaW5zcGlyZWQgZnJvbSBwYXVsX2lyaXNoIGdpc3QgYW5kIHBvc3RcclxuICpcclxuICogQ29weXJpZ2h0IChjKSAyMDEzIG5ncnltYW5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG4gKi9cclxuKGZ1bmN0aW9uKHdpbmRvdykge1xyXG4gIHZhciBsYXN0VGltZSA9IDAsXHJcbiAgICB2ZW5kb3JzID0gWyd3ZWJraXQnLCAnbW96J10sXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxyXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUsXHJcbiAgICBpID0gdmVuZG9ycy5sZW5ndGg7XHJcblxyXG4gIC8vIHRyeSB0byB1bi1wcmVmaXggZXhpc3RpbmcgcmFmXHJcbiAgd2hpbGUgKC0taSA+PSAwICYmICFyZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW2ldICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xyXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1tpXSArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxuICB9XHJcblxyXG4gIC8vIHBvbHlmaWxsIHdpdGggc2V0VGltZW91dCBmYWxsYmFja1xyXG4gIC8vIGhlYXZpbHkgaW5zcGlyZWQgZnJvbSBAZGFyaXVzIGdpc3QgbW9kOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9wYXVsaXJpc2gvMTU3OTY3MSNjb21tZW50LTgzNzk0NVxyXG4gIGlmICghcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8ICFjYW5jZWxBbmltYXRpb25GcmFtZSkge1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgdmFyIG5vdyA9ICtEYXRlLm5vdygpLFxyXG4gICAgICAgIG5leHRUaW1lID0gTWF0aC5tYXgobGFzdFRpbWUgKyAxNiwgbm93KTtcclxuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2FsbGJhY2sobGFzdFRpbWUgPSBuZXh0VGltZSk7XHJcbiAgICAgIH0sIG5leHRUaW1lIC0gbm93KTtcclxuICAgIH07XHJcblxyXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjbGVhclRpbWVvdXQ7XHJcbiAgfVxyXG5cclxuICAvLyBleHBvcnQgdG8gd2luZG93XHJcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjYW5jZWxBbmltYXRpb25GcmFtZTtcclxufSh3aW5kb3cpKTtcclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZSBhcHByb3hpbWF0ZWQgc2VsZWN0b3Igc3RyaW5nIGZvciBhIGpRdWVyeSBvYmplY3RcclxuICogQHBhcmFtIHtqUXVlcnl9IG9iaiAgalF1ZXJ5IG9iamVjdCB0byBiZSBwYXJzZWRcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbk1hdGVyaWFsaXplLm9iamVjdFNlbGVjdG9yU3RyaW5nID0gZnVuY3Rpb24ob2JqKSB7XHJcbiAgdmFyIHRhZ1N0ciA9IG9iai5wcm9wKCd0YWdOYW1lJykgfHwgJyc7XHJcbiAgdmFyIGlkU3RyID0gb2JqLmF0dHIoJ2lkJykgfHwgJyc7XHJcbiAgdmFyIGNsYXNzU3RyID0gb2JqLmF0dHIoJ2NsYXNzJykgfHwgJyc7XHJcbiAgcmV0dXJuICh0YWdTdHIgKyBpZFN0ciArIGNsYXNzU3RyKS5yZXBsYWNlKC9cXHMvZywnJyk7XHJcbn07XHJcblxyXG5cclxuLy8gVW5pcXVlIFJhbmRvbSBJRFxyXG5NYXRlcmlhbGl6ZS5ndWlkID0gKGZ1bmN0aW9uKCkge1xyXG4gIGZ1bmN0aW9uIHM0KCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcbiAgICAgIC50b1N0cmluZygxNilcclxuICAgICAgLnN1YnN0cmluZygxKTtcclxuICB9XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgK1xyXG4gICAgICAgICAgIHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XHJcbiAgfTtcclxufSkoKTtcclxuXHJcbi8qKlxyXG4gKiBFc2NhcGVzIGhhc2ggZnJvbSBzcGVjaWFsIGNoYXJhY3RlcnNcclxuICogQHBhcmFtIHtzdHJpbmd9IGhhc2ggIFN0cmluZyByZXR1cm5lZCBmcm9tIHRoaXMuaGFzaFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuTWF0ZXJpYWxpemUuZXNjYXBlSGFzaCA9IGZ1bmN0aW9uKGhhc2gpIHtcclxuICByZXR1cm4gaGFzaC5yZXBsYWNlKCAvKDp8XFwufFxcW3xcXF18LHw9KS9nLCBcIlxcXFwkMVwiICk7XHJcbn07XHJcblxyXG5NYXRlcmlhbGl6ZS5lbGVtZW50T3JQYXJlbnRJc0ZpeGVkID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgdmFyICRlbGVtZW50ID0gJChlbGVtZW50KTtcclxuICAgIHZhciAkY2hlY2tFbGVtZW50cyA9ICRlbGVtZW50LmFkZCgkZWxlbWVudC5wYXJlbnRzKCkpO1xyXG4gICAgdmFyIGlzRml4ZWQgPSBmYWxzZTtcclxuICAgICRjaGVja0VsZW1lbnRzLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAoJCh0aGlzKS5jc3MoXCJwb3NpdGlvblwiKSA9PT0gXCJmaXhlZFwiKSB7XHJcbiAgICAgICAgICAgIGlzRml4ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaXNGaXhlZDtcclxufTtcclxuXHJcblxyXG4vKipcclxuICogR2V0IHRpbWUgaW4gbXNcclxuICogQGxpY2Vuc2UgaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZS9tYXN0ZXIvTElDRU5TRVxyXG4gKiBAdHlwZSB7ZnVuY3Rpb259XHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbnZhciBnZXRUaW1lID0gKERhdGUubm93IHx8IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbn0pO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIHdoZW4gaW52b2tlZCwgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBhdCBtb3N0IG9uY2VcclxuICogZHVyaW5nIGEgZ2l2ZW4gd2luZG93IG9mIHRpbWUuIE5vcm1hbGx5LCB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHdpbGwgcnVuXHJcbiAqIGFzIG11Y2ggYXMgaXQgY2FuLCB3aXRob3V0IGV2ZXIgZ29pbmcgbW9yZSB0aGFuIG9uY2UgcGVyIGB3YWl0YCBkdXJhdGlvbjtcclxuICogYnV0IGlmIHlvdSdkIGxpa2UgdG8gZGlzYWJsZSB0aGUgZXhlY3V0aW9uIG9uIHRoZSBsZWFkaW5nIGVkZ2UsIHBhc3NcclxuICogYHtsZWFkaW5nOiBmYWxzZX1gLiBUbyBkaXNhYmxlIGV4ZWN1dGlvbiBvbiB0aGUgdHJhaWxpbmcgZWRnZSwgZGl0dG8uXHJcbiAqIEBsaWNlbnNlIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vamFzaGtlbmFzL3VuZGVyc2NvcmUvbWFzdGVyL0xJQ0VOU0VcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuY1xyXG4gKiBAcGFyYW0ge251bWJlcn0gd2FpdFxyXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnNcclxuICogQHJldHVybnMge0Z1bmN0aW9ufVxyXG4gKi9cclxuTWF0ZXJpYWxpemUudGhyb3R0bGUgPSBmdW5jdGlvbihmdW5jLCB3YWl0LCBvcHRpb25zKSB7XHJcbiAgdmFyIGNvbnRleHQsIGFyZ3MsIHJlc3VsdDtcclxuICB2YXIgdGltZW91dCA9IG51bGw7XHJcbiAgdmFyIHByZXZpb3VzID0gMDtcclxuICBvcHRpb25zIHx8IChvcHRpb25zID0ge30pO1xyXG4gIHZhciBsYXRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiBnZXRUaW1lKCk7XHJcbiAgICB0aW1lb3V0ID0gbnVsbDtcclxuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XHJcbiAgfTtcclxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIG5vdyA9IGdldFRpbWUoKTtcclxuICAgIGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkgcHJldmlvdXMgPSBub3c7XHJcbiAgICB2YXIgcmVtYWluaW5nID0gd2FpdCAtIChub3cgLSBwcmV2aW91cyk7XHJcbiAgICBjb250ZXh0ID0gdGhpcztcclxuICAgIGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICBpZiAocmVtYWluaW5nIDw9IDApIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICB0aW1lb3V0ID0gbnVsbDtcclxuICAgICAgcHJldmlvdXMgPSBub3c7XHJcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcclxuICAgIH0gZWxzZSBpZiAoIXRpbWVvdXQgJiYgb3B0aW9ucy50cmFpbGluZyAhPT0gZmFsc2UpIHtcclxuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHJlbWFpbmluZyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcbn07XHJcblxyXG5cclxuLy8gVmVsb2NpdHkgaGFzIGNvbmZsaWN0cyB3aGVuIGxvYWRlZCB3aXRoIGpRdWVyeSwgdGhpcyB3aWxsIGNoZWNrIGZvciBpdFxyXG4vLyBGaXJzdCwgY2hlY2sgaWYgaW4gbm9Db25mbGljdCBtb2RlXHJcbnZhciBWZWw7XHJcbmlmIChqUXVlcnkpIHtcclxuICBWZWwgPSBqUXVlcnkuVmVsb2NpdHk7XHJcbn0gZWxzZSBpZiAoJCkge1xyXG4gIFZlbCA9ICQuVmVsb2NpdHk7XHJcbn0gZWxzZSB7XHJcbiAgVmVsID0gVmVsb2NpdHk7XHJcbn1cclxuXHJcbmlmIChWZWwpIHtcclxuICBNYXRlcmlhbGl6ZS5WZWwgPSBWZWw7XHJcbn0gZWxzZSB7XHJcbiAgTWF0ZXJpYWxpemUuVmVsID0gVmVsb2NpdHk7XHJcbn1cclxuXHJcbihmdW5jdGlvbiAoJCkge1xyXG5cclxuICAvLyBBZGQgcG9zaWJpbGl0eSB0byBzY3JvbGwgdG8gc2VsZWN0ZWQgb3B0aW9uXHJcbiAgLy8gdXNlZnVsbCBmb3Igc2VsZWN0IGZvciBleGFtcGxlXHJcbiAgJC5mbi5zY3JvbGxUbyA9IGZ1bmN0aW9uKGVsZW0pIHtcclxuICAgICQodGhpcykuc2Nyb2xsVG9wKCQodGhpcykuc2Nyb2xsVG9wKCkgLSAkKHRoaXMpLm9mZnNldCgpLnRvcCArICQoZWxlbSkub2Zmc2V0KCkudG9wKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcblxyXG4gICQuZm4uZHJvcGRvd24gPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgdmFyIGRlZmF1bHRzID0ge1xyXG4gICAgICBpbkR1cmF0aW9uOiAzMDAsXHJcbiAgICAgIG91dER1cmF0aW9uOiAyMjUsXHJcbiAgICAgIGNvbnN0cmFpbldpZHRoOiB0cnVlLCAvLyBDb25zdHJhaW5zIHdpZHRoIG9mIGRyb3Bkb3duIHRvIHRoZSBhY3RpdmF0b3JcclxuICAgICAgaG92ZXI6IGZhbHNlLFxyXG4gICAgICBndXR0ZXI6IDAsIC8vIFNwYWNpbmcgZnJvbSBlZGdlXHJcbiAgICAgIGJlbG93T3JpZ2luOiBmYWxzZSxcclxuICAgICAgYWxpZ25tZW50OiAnbGVmdCcsXHJcbiAgICAgIHN0b3BQcm9wYWdhdGlvbjogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgLy8gT3BlbiBkcm9wZG93bi5cclxuICAgIGlmIChvcHRpb25zID09PSBcIm9wZW5cIikge1xyXG4gICAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdvcGVuJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2xvc2UgZHJvcGRvd24uXHJcbiAgICBpZiAob3B0aW9ucyA9PT0gXCJjbG9zZVwiKSB7XHJcbiAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nsb3NlJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgIHZhciBvcmlnaW4gPSAkKHRoaXMpO1xyXG4gICAgICB2YXIgY3Vycl9vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcclxuICAgICAgdmFyIGlzRm9jdXNlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgLy8gRHJvcGRvd24gbWVudVxyXG4gICAgICB2YXIgYWN0aXZhdGVzID0gJChcIiNcIisgb3JpZ2luLmF0dHIoJ2RhdGEtYWN0aXZhdGVzJykpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gdXBkYXRlT3B0aW9ucygpIHtcclxuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ2luZHVyYXRpb24nKSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgY3Vycl9vcHRpb25zLmluRHVyYXRpb24gPSBvcmlnaW4uZGF0YSgnaW5kdXJhdGlvbicpO1xyXG4gICAgICAgIGlmIChvcmlnaW4uZGF0YSgnb3V0ZHVyYXRpb24nKSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgY3Vycl9vcHRpb25zLm91dER1cmF0aW9uID0gb3JpZ2luLmRhdGEoJ291dGR1cmF0aW9uJyk7XHJcbiAgICAgICAgaWYgKG9yaWdpbi5kYXRhKCdjb25zdHJhaW53aWR0aCcpICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICBjdXJyX29wdGlvbnMuY29uc3RyYWluV2lkdGggPSBvcmlnaW4uZGF0YSgnY29uc3RyYWlud2lkdGgnKTtcclxuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ2hvdmVyJykgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgIGN1cnJfb3B0aW9ucy5ob3ZlciA9IG9yaWdpbi5kYXRhKCdob3ZlcicpO1xyXG4gICAgICAgIGlmIChvcmlnaW4uZGF0YSgnZ3V0dGVyJykgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgIGN1cnJfb3B0aW9ucy5ndXR0ZXIgPSBvcmlnaW4uZGF0YSgnZ3V0dGVyJyk7XHJcbiAgICAgICAgaWYgKG9yaWdpbi5kYXRhKCdiZWxvd29yaWdpbicpICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICBjdXJyX29wdGlvbnMuYmVsb3dPcmlnaW4gPSBvcmlnaW4uZGF0YSgnYmVsb3dvcmlnaW4nKTtcclxuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ2FsaWdubWVudCcpICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICBjdXJyX29wdGlvbnMuYWxpZ25tZW50ID0gb3JpZ2luLmRhdGEoJ2FsaWdubWVudCcpO1xyXG4gICAgICAgIGlmIChvcmlnaW4uZGF0YSgnc3RvcHByb3BhZ2F0aW9uJykgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgIGN1cnJfb3B0aW9ucy5zdG9wUHJvcGFnYXRpb24gPSBvcmlnaW4uZGF0YSgnc3RvcHByb3BhZ2F0aW9uJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVwZGF0ZU9wdGlvbnMoKTtcclxuXHJcbiAgICAgIC8vIEF0dGFjaCBkcm9wZG93biB0byBpdHMgYWN0aXZhdG9yXHJcbiAgICAgIG9yaWdpbi5hZnRlcihhY3RpdmF0ZXMpO1xyXG5cclxuICAgICAgLypcclxuICAgICAgICBIZWxwZXIgZnVuY3Rpb24gdG8gcG9zaXRpb24gYW5kIHJlc2l6ZSBkcm9wZG93bi5cclxuICAgICAgICBVc2VkIGluIGhvdmVyIGFuZCBjbGljayBoYW5kbGVyLlxyXG4gICAgICAqL1xyXG4gICAgICBmdW5jdGlvbiBwbGFjZURyb3Bkb3duKGV2ZW50VHlwZSkge1xyXG4gICAgICAgIC8vIENoZWNrIGZvciBzaW11bHRhbmVvdXMgZm9jdXMgYW5kIGNsaWNrIGV2ZW50cy5cclxuICAgICAgICBpZiAoZXZlbnRUeXBlID09PSAnZm9jdXMnKSB7XHJcbiAgICAgICAgICBpc0ZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaHRtbCBkYXRhIGF0dHJpYnV0ZXNcclxuICAgICAgICB1cGRhdGVPcHRpb25zKCk7XHJcblxyXG4gICAgICAgIC8vIFNldCBEcm9wZG93biBzdGF0ZVxyXG4gICAgICAgIGFjdGl2YXRlcy5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgb3JpZ2luLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgdmFyIG9yaWdpbldpZHRoID0gb3JpZ2luWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG5cclxuICAgICAgICAvLyBDb25zdHJhaW4gd2lkdGhcclxuICAgICAgICBpZiAoY3Vycl9vcHRpb25zLmNvbnN0cmFpbldpZHRoID09PSB0cnVlKSB7XHJcbiAgICAgICAgICBhY3RpdmF0ZXMuY3NzKCd3aWR0aCcsIG9yaWdpbldpZHRoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFjdGl2YXRlcy5jc3MoJ3doaXRlLXNwYWNlJywgJ25vd3JhcCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gT2Zmc2NyZWVuIGRldGVjdGlvblxyXG4gICAgICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgdmFyIG9yaWdpbkhlaWdodCA9IG9yaWdpbi5pbm5lckhlaWdodCgpO1xyXG4gICAgICAgIHZhciBvZmZzZXRMZWZ0ID0gb3JpZ2luLm9mZnNldCgpLmxlZnQ7XHJcbiAgICAgICAgdmFyIG9mZnNldFRvcCA9IG9yaWdpbi5vZmZzZXQoKS50b3AgLSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgdmFyIGN1cnJBbGlnbm1lbnQgPSBjdXJyX29wdGlvbnMuYWxpZ25tZW50O1xyXG4gICAgICAgIHZhciBndXR0ZXJTcGFjaW5nID0gMDtcclxuICAgICAgICB2YXIgbGVmdFBvc2l0aW9uID0gMDtcclxuXHJcbiAgICAgICAgLy8gQmVsb3cgT3JpZ2luXHJcbiAgICAgICAgdmFyIHZlcnRpY2FsT2Zmc2V0ID0gMDtcclxuICAgICAgICBpZiAoY3Vycl9vcHRpb25zLmJlbG93T3JpZ2luID09PSB0cnVlKSB7XHJcbiAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IG9yaWdpbkhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGZvciBzY3JvbGxpbmcgcG9zaXRpb25lZCBjb250YWluZXIuXHJcbiAgICAgICAgdmFyIHNjcm9sbFlPZmZzZXQgPSAwO1xyXG4gICAgICAgIHZhciBzY3JvbGxYT2Zmc2V0ID0gMDtcclxuICAgICAgICB2YXIgd3JhcHBlciA9IG9yaWdpbi5wYXJlbnQoKTtcclxuICAgICAgICBpZiAoIXdyYXBwZXIuaXMoJ2JvZHknKSkge1xyXG4gICAgICAgICAgaWYgKHdyYXBwZXJbMF0uc2Nyb2xsSGVpZ2h0ID4gd3JhcHBlclswXS5jbGllbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgc2Nyb2xsWU9mZnNldCA9IHdyYXBwZXJbMF0uc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHdyYXBwZXJbMF0uc2Nyb2xsV2lkdGggPiB3cmFwcGVyWzBdLmNsaWVudFdpZHRoKSB7XHJcbiAgICAgICAgICAgIHNjcm9sbFhPZmZzZXQgPSB3cmFwcGVyWzBdLnNjcm9sbExlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKG9mZnNldExlZnQgKyBhY3RpdmF0ZXMuaW5uZXJXaWR0aCgpID4gJCh3aW5kb3cpLndpZHRoKCkpIHtcclxuICAgICAgICAgIC8vIERyb3Bkb3duIGdvZXMgcGFzdCBzY3JlZW4gb24gcmlnaHQsIGZvcmNlIHJpZ2h0IGFsaWdubWVudFxyXG4gICAgICAgICAgY3VyckFsaWdubWVudCA9ICdyaWdodCc7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0TGVmdCAtIGFjdGl2YXRlcy5pbm5lcldpZHRoKCkgKyBvcmlnaW4uaW5uZXJXaWR0aCgpIDwgMCkge1xyXG4gICAgICAgICAgLy8gRHJvcGRvd24gZ29lcyBwYXN0IHNjcmVlbiBvbiBsZWZ0LCBmb3JjZSBsZWZ0IGFsaWdubWVudFxyXG4gICAgICAgICAgY3VyckFsaWdubWVudCA9ICdsZWZ0JztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVmVydGljYWwgYm90dG9tIG9mZnNjcmVlbiBkZXRlY3Rpb25cclxuICAgICAgICBpZiAob2Zmc2V0VG9wICsgYWN0aXZhdGVzLmlubmVySGVpZ2h0KCkgPiB3aW5kb3dIZWlnaHQpIHtcclxuICAgICAgICAgIC8vIElmIGdvaW5nIHVwd2FyZHMgc3RpbGwgZ29lcyBvZmZzY3JlZW4sIGp1c3QgY3JvcCBoZWlnaHQgb2YgZHJvcGRvd24uXHJcbiAgICAgICAgICBpZiAob2Zmc2V0VG9wICsgb3JpZ2luSGVpZ2h0IC0gYWN0aXZhdGVzLmlubmVySGVpZ2h0KCkgPCAwKSB7XHJcbiAgICAgICAgICAgIHZhciBhZGp1c3RlZEhlaWdodCA9IHdpbmRvd0hlaWdodCAtIG9mZnNldFRvcCAtIHZlcnRpY2FsT2Zmc2V0O1xyXG4gICAgICAgICAgICBhY3RpdmF0ZXMuY3NzKCdtYXgtaGVpZ2h0JywgYWRqdXN0ZWRIZWlnaHQpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gRmxvdyB1cHdhcmRzLlxyXG4gICAgICAgICAgICBpZiAoIXZlcnRpY2FsT2Zmc2V0KSB7XHJcbiAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgKz0gb3JpZ2luSGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0IC09IGFjdGl2YXRlcy5pbm5lckhlaWdodCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSGFuZGxlIGVkZ2UgYWxpZ25tZW50XHJcbiAgICAgICAgaWYgKGN1cnJBbGlnbm1lbnQgPT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgZ3V0dGVyU3BhY2luZyA9IGN1cnJfb3B0aW9ucy5ndXR0ZXI7XHJcbiAgICAgICAgICBsZWZ0UG9zaXRpb24gPSBvcmlnaW4ucG9zaXRpb24oKS5sZWZ0ICsgZ3V0dGVyU3BhY2luZztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY3VyckFsaWdubWVudCA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgLy8gTWF0ZXJpYWwgaWNvbnMgZml4XHJcbiAgICAgICAgICBhY3RpdmF0ZXNcclxuICAgICAgICAgICAgLnN0b3AodHJ1ZSwgdHJ1ZSlcclxuICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgICBsZWZ0OiAwXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgdmFyIG9mZnNldFJpZ2h0ID0gb3JpZ2luLnBvc2l0aW9uKCkubGVmdCArIG9yaWdpbldpZHRoIC0gYWN0aXZhdGVzLndpZHRoKCk7XHJcbiAgICAgICAgICBndXR0ZXJTcGFjaW5nID0gLWN1cnJfb3B0aW9ucy5ndXR0ZXI7XHJcbiAgICAgICAgICBsZWZ0UG9zaXRpb24gPSAgb2Zmc2V0UmlnaHQgKyBndXR0ZXJTcGFjaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUG9zaXRpb24gZHJvcGRvd25cclxuICAgICAgICBhY3RpdmF0ZXMuY3NzKHtcclxuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgdG9wOiBvcmlnaW4ucG9zaXRpb24oKS50b3AgKyB2ZXJ0aWNhbE9mZnNldCArIHNjcm9sbFlPZmZzZXQsXHJcbiAgICAgICAgICBsZWZ0OiBsZWZ0UG9zaXRpb24gKyBzY3JvbGxYT2Zmc2V0XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNob3cgZHJvcGRvd25cclxuICAgICAgICBhY3RpdmF0ZXNcclxuICAgICAgICAgIC5zbGlkZURvd24oe1xyXG4gICAgICAgICAgICBxdWV1ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiBjdXJyX29wdGlvbnMuaW5EdXJhdGlvbixcclxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dEN1YmljJyxcclxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICQodGhpcykuY3NzKCdoZWlnaHQnLCAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuYW5pbWF0ZSgge29wYWNpdHk6IDF9LCB7cXVldWU6IGZhbHNlLCBkdXJhdGlvbjogY3Vycl9vcHRpb25zLmluRHVyYXRpb24sIGVhc2luZzogJ2Vhc2VPdXRTaW5lJ30pO1xyXG5cclxuICAgICAgICAvLyBBZGQgY2xpY2sgY2xvc2UgaGFuZGxlciB0byBkb2N1bWVudFxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2suJysgYWN0aXZhdGVzLmF0dHIoJ2lkJyksIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGhpZGVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrLicrIGFjdGl2YXRlcy5hdHRyKCdpZCcpKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBoaWRlRHJvcGRvd24oKSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHNpbXVsdGFuZW91cyBmb2N1cyBhbmQgY2xpY2sgZXZlbnRzLlxyXG4gICAgICAgIGlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIGFjdGl2YXRlcy5mYWRlT3V0KGN1cnJfb3B0aW9ucy5vdXREdXJhdGlvbik7XHJcbiAgICAgICAgYWN0aXZhdGVzLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICBvcmlnaW4ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2suJysgYWN0aXZhdGVzLmF0dHIoJ2lkJykpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGFjdGl2YXRlcy5jc3MoJ21heC1oZWlnaHQnLCAnJyk7IH0sIGN1cnJfb3B0aW9ucy5vdXREdXJhdGlvbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEhvdmVyXHJcbiAgICAgIGlmIChjdXJyX29wdGlvbnMuaG92ZXIpIHtcclxuICAgICAgICB2YXIgb3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIG9yaWdpbi5vZmYoJ2NsaWNrLicgKyBvcmlnaW4uYXR0cignaWQnKSk7XHJcbiAgICAgICAgLy8gSG92ZXIgaGFuZGxlciB0byBzaG93IGRyb3Bkb3duXHJcbiAgICAgICAgb3JpZ2luLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZSl7IC8vIE1vdXNlIG92ZXJcclxuICAgICAgICAgIGlmIChvcGVuID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBwbGFjZURyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIG9wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9yaWdpbi5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgLy8gSWYgaG92ZXIgb24gb3JpZ2luIHRoZW4gdG8gc29tZXRoaW5nIG90aGVyIHRoYW4gZHJvcGRvd24gY29udGVudCwgdGhlbiBjbG9zZVxyXG4gICAgICAgICAgdmFyIHRvRWwgPSBlLnRvRWxlbWVudCB8fCBlLnJlbGF0ZWRUYXJnZXQ7IC8vIGFkZGVkIGJyb3dzZXIgY29tcGF0aWJpbGl0eSBmb3IgdGFyZ2V0IGVsZW1lbnRcclxuICAgICAgICAgIGlmKCEkKHRvRWwpLmNsb3Nlc3QoJy5kcm9wZG93bi1jb250ZW50JykuaXMoYWN0aXZhdGVzKSkge1xyXG4gICAgICAgICAgICBhY3RpdmF0ZXMuc3RvcCh0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgaGlkZURyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIG9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYWN0aXZhdGVzLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSl7IC8vIE1vdXNlIG91dFxyXG4gICAgICAgICAgdmFyIHRvRWwgPSBlLnRvRWxlbWVudCB8fCBlLnJlbGF0ZWRUYXJnZXQ7XHJcbiAgICAgICAgICBpZighJCh0b0VsKS5jbG9zZXN0KCcuZHJvcGRvd24tYnV0dG9uJykuaXMob3JpZ2luKSkge1xyXG4gICAgICAgICAgICBhY3RpdmF0ZXMuc3RvcCh0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgaGlkZURyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIG9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ2xpY2tcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBDbGljayBoYW5kbGVyIHRvIHNob3cgZHJvcGRvd25cclxuICAgICAgICBvcmlnaW4ub2ZmKCdjbGljay4nICsgb3JpZ2luLmF0dHIoJ2lkJykpO1xyXG4gICAgICAgIG9yaWdpbi5vbignY2xpY2suJytvcmlnaW4uYXR0cignaWQnKSwgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICBpZiAoIWlzRm9jdXNlZCkge1xyXG4gICAgICAgICAgICBpZiAoIG9yaWdpblswXSA9PSBlLmN1cnJlbnRUYXJnZXQgJiZcclxuICAgICAgICAgICAgICAgICAhb3JpZ2luLmhhc0NsYXNzKCdhY3RpdmUnKSAmJlxyXG4gICAgICAgICAgICAgICAgICgkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZHJvcGRvd24tY29udGVudCcpLmxlbmd0aCA9PT0gMCkpIHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnRzIGJ1dHRvbiBjbGljayBmcm9tIG1vdmluZyB3aW5kb3dcclxuICAgICAgICAgICAgICBpZiAoY3Vycl9vcHRpb25zLnN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcGxhY2VEcm9wZG93bignY2xpY2snKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJZiBvcmlnaW4gaXMgY2xpY2tlZCBhbmQgbWVudSBpcyBvcGVuLCBjbG9zZSBtZW51XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG9yaWdpbi5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICBoaWRlRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrLicrIGFjdGl2YXRlcy5hdHRyKCdpZCcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfSAvLyBFbmQgZWxzZVxyXG5cclxuICAgICAgLy8gTGlzdGVuIHRvIG9wZW4gYW5kIGNsb3NlIGV2ZW50IC0gdXNlZnVsIGZvciBzZWxlY3QgY29tcG9uZW50XHJcbiAgICAgIG9yaWdpbi5vbignb3BlbicsIGZ1bmN0aW9uKGUsIGV2ZW50VHlwZSkge1xyXG4gICAgICAgIHBsYWNlRHJvcGRvd24oZXZlbnRUeXBlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIG9yaWdpbi5vbignY2xvc2UnLCBoaWRlRHJvcGRvd24pO1xyXG5cclxuXHJcbiAgICB9KTtcclxuICB9OyAvLyBFbmQgZHJvcGRvd24gcGx1Z2luXHJcblxyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuZHJvcGRvd24tYnV0dG9uJykuZHJvcGRvd24oKTtcclxuICB9KTtcclxufSggalF1ZXJ5ICkpO1xyXG4oZnVuY3Rpb24gKCQpIHtcclxuICAkLmZuLmNvbGxhcHNpYmxlID0gZnVuY3Rpb24ob3B0aW9ucywgbWV0aG9kUGFyYW0pIHtcclxuICAgIHZhciBkZWZhdWx0cyA9IHtcclxuICAgICAgYWNjb3JkaW9uOiB1bmRlZmluZWQsXHJcbiAgICAgIG9uT3BlbjogdW5kZWZpbmVkLFxyXG4gICAgICBvbkNsb3NlOiB1bmRlZmluZWRcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG1ldGhvZE5hbWUgPSBvcHRpb25zO1xyXG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICB2YXIgJHBhbmVsX2hlYWRlcnMgPSAkKHRoaXMpLmZpbmQoJz4gbGkgPiAuY29sbGFwc2libGUtaGVhZGVyJyk7XHJcblxyXG4gICAgICB2YXIgY29sbGFwc2libGVfdHlwZSA9ICR0aGlzLmRhdGEoXCJjb2xsYXBzaWJsZVwiKTtcclxuXHJcbiAgICAgIC8qKioqKioqKioqKioqKioqXHJcbiAgICAgIEhlbHBlciBGdW5jdGlvbnNcclxuICAgICAgKioqKioqKioqKioqKioqKi9cclxuXHJcbiAgICAgIC8vIEFjY29yZGlvbiBPcGVuXHJcbiAgICAgIGZ1bmN0aW9uIGFjY29yZGlvbk9wZW4ob2JqZWN0KSB7XHJcbiAgICAgICAgJHBhbmVsX2hlYWRlcnMgPSAkdGhpcy5maW5kKCc+IGxpID4gLmNvbGxhcHNpYmxlLWhlYWRlcicpO1xyXG4gICAgICAgIGlmIChvYmplY3QuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICBvYmplY3QucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIG9iamVjdC5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmplY3QucGFyZW50KCkuaGFzQ2xhc3MoJ2FjdGl2ZScpKXtcclxuICAgICAgICAgIG9iamVjdC5zaWJsaW5ncygnLmNvbGxhcHNpYmxlLWJvZHknKS5zdG9wKHRydWUsZmFsc2UpLnNsaWRlRG93bih7IGR1cmF0aW9uOiAzNTAsIGVhc2luZzogXCJlYXNlT3V0UXVhcnRcIiwgcXVldWU6IGZhbHNlLCBjb21wbGV0ZTogZnVuY3Rpb24oKSB7JCh0aGlzKS5jc3MoJ2hlaWdodCcsICcnKTt9fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICBvYmplY3Quc2libGluZ3MoJy5jb2xsYXBzaWJsZS1ib2R5Jykuc3RvcCh0cnVlLGZhbHNlKS5zbGlkZVVwKHsgZHVyYXRpb246IDM1MCwgZWFzaW5nOiBcImVhc2VPdXRRdWFydFwiLCBxdWV1ZTogZmFsc2UsIGNvbXBsZXRlOiBmdW5jdGlvbigpIHskKHRoaXMpLmNzcygnaGVpZ2h0JywgJycpO319KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRwYW5lbF9oZWFkZXJzLm5vdChvYmplY3QpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIC8vIENsb3NlIHByZXZpb3VzbHkgb3BlbiBhY2NvcmRpb24gZWxlbWVudHMuXHJcbiAgICAgICAgJHBhbmVsX2hlYWRlcnMubm90KG9iamVjdCkucGFyZW50KCkuY2hpbGRyZW4oJy5jb2xsYXBzaWJsZS1ib2R5Jykuc3RvcCh0cnVlLGZhbHNlKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgaWYgKCQodGhpcykuaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5zbGlkZVVwKHtcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMzUwLFxyXG4gICAgICAgICAgICAgIGVhc2luZzogXCJlYXNlT3V0UXVhcnRcIixcclxuICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY29tcGxldGU6XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2hlaWdodCcsICcnKTtcclxuICAgICAgICAgICAgICAgICAgZXhlY0NhbGxiYWNrcygkKHRoaXMpLnNpYmxpbmdzKCcuY29sbGFwc2libGUtaGVhZGVyJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRXhwYW5kYWJsZSBPcGVuXHJcbiAgICAgIGZ1bmN0aW9uIGV4cGFuZGFibGVPcGVuKG9iamVjdCkge1xyXG4gICAgICAgIGlmIChvYmplY3QuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICBvYmplY3QucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIG9iamVjdC5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmplY3QucGFyZW50KCkuaGFzQ2xhc3MoJ2FjdGl2ZScpKXtcclxuICAgICAgICAgIG9iamVjdC5zaWJsaW5ncygnLmNvbGxhcHNpYmxlLWJvZHknKS5zdG9wKHRydWUsZmFsc2UpLnNsaWRlRG93bih7IGR1cmF0aW9uOiAzNTAsIGVhc2luZzogXCJlYXNlT3V0UXVhcnRcIiwgcXVldWU6IGZhbHNlLCBjb21wbGV0ZTogZnVuY3Rpb24oKSB7JCh0aGlzKS5jc3MoJ2hlaWdodCcsICcnKTt9fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgb2JqZWN0LnNpYmxpbmdzKCcuY29sbGFwc2libGUtYm9keScpLnN0b3AodHJ1ZSxmYWxzZSkuc2xpZGVVcCh7IGR1cmF0aW9uOiAzNTAsIGVhc2luZzogXCJlYXNlT3V0UXVhcnRcIiwgcXVldWU6IGZhbHNlLCBjb21wbGV0ZTogZnVuY3Rpb24oKSB7JCh0aGlzKS5jc3MoJ2hlaWdodCcsICcnKTt9fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBPcGVuIGNvbGxhcHNpYmxlLiBvYmplY3Q6IC5jb2xsYXBzaWJsZS1oZWFkZXJcclxuICAgICAgZnVuY3Rpb24gY29sbGFwc2libGVPcGVuKG9iamVjdCwgbm9Ub2dnbGUpIHtcclxuICAgICAgICBpZiAoIW5vVG9nZ2xlKSB7XHJcbiAgICAgICAgICBvYmplY3QudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMuYWNjb3JkaW9uIHx8IGNvbGxhcHNpYmxlX3R5cGUgPT09IFwiYWNjb3JkaW9uXCIgfHwgY29sbGFwc2libGVfdHlwZSA9PT0gdW5kZWZpbmVkKSB7IC8vIEhhbmRsZSBBY2NvcmRpb25cclxuICAgICAgICAgIGFjY29yZGlvbk9wZW4ob2JqZWN0KTtcclxuICAgICAgICB9IGVsc2UgeyAvLyBIYW5kbGUgRXhwYW5kYWJsZXNcclxuICAgICAgICAgIGV4cGFuZGFibGVPcGVuKG9iamVjdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBleGVjQ2FsbGJhY2tzKG9iamVjdCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEhhbmRsZSBjYWxsYmFja3NcclxuICAgICAgZnVuY3Rpb24gZXhlY0NhbGxiYWNrcyhvYmplY3QpIHtcclxuICAgICAgICBpZiAob2JqZWN0Lmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZihvcHRpb25zLm9uT3BlbikgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBvcHRpb25zLm9uT3Blbi5jYWxsKHRoaXMsIG9iamVjdC5wYXJlbnQoKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICh0eXBlb2Yob3B0aW9ucy5vbkNsb3NlKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMub25DbG9zZS5jYWxsKHRoaXMsIG9iamVjdC5wYXJlbnQoKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogQ2hlY2sgaWYgb2JqZWN0IGlzIGNoaWxkcmVuIG9mIHBhbmVsIGhlYWRlclxyXG4gICAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICBvYmplY3QgSnF1ZXJ5IG9iamVjdFxyXG4gICAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGl0IGlzIGNoaWxkcmVuXHJcbiAgICAgICAqL1xyXG4gICAgICBmdW5jdGlvbiBpc0NoaWxkcmVuT2ZQYW5lbEhlYWRlcihvYmplY3QpIHtcclxuXHJcbiAgICAgICAgdmFyIHBhbmVsSGVhZGVyID0gZ2V0UGFuZWxIZWFkZXIob2JqZWN0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBhbmVsSGVhZGVyLmxlbmd0aCA+IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBHZXQgcGFuZWwgaGVhZGVyIGZyb20gYSBjaGlsZHJlbiBlbGVtZW50XHJcbiAgICAgICAqIEBwYXJhbSAge09iamVjdH0gb2JqZWN0IEpxdWVyeSBvYmplY3RcclxuICAgICAgICogQHJldHVybiB7T2JqZWN0fSBwYW5lbCBoZWFkZXIgb2JqZWN0XHJcbiAgICAgICAqL1xyXG4gICAgICBmdW5jdGlvbiBnZXRQYW5lbEhlYWRlcihvYmplY3QpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9iamVjdC5jbG9zZXN0KCdsaSA+IC5jb2xsYXBzaWJsZS1oZWFkZXInKTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIC8vIFR1cm4gb2ZmIGFueSBleGlzdGluZyBldmVudCBoYW5kbGVyc1xyXG4gICAgICBmdW5jdGlvbiByZW1vdmVFdmVudEhhbmRsZXJzKCkge1xyXG4gICAgICAgICR0aGlzLm9mZignY2xpY2suY29sbGFwc2UnLCAnPiBsaSA+IC5jb2xsYXBzaWJsZS1oZWFkZXInKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqKioqICBFbmQgSGVscGVyIEZ1bmN0aW9ucyAgKioqKiovXHJcblxyXG5cclxuICAgICAgLy8gTWV0aG9kc1xyXG4gICAgICBpZiAobWV0aG9kTmFtZSA9PT0gJ2Rlc3Ryb3knKSB7XHJcbiAgICAgICAgcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIGlmIChtZXRob2RQYXJhbSA+PSAwICYmXHJcbiAgICAgICAgICBtZXRob2RQYXJhbSA8ICRwYW5lbF9oZWFkZXJzLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciAkY3Vycl9oZWFkZXIgPSAkcGFuZWxfaGVhZGVycy5lcShtZXRob2RQYXJhbSk7XHJcbiAgICAgICAgaWYgKCRjdXJyX2hlYWRlci5sZW5ndGggJiZcclxuICAgICAgICAgICAgKG1ldGhvZE5hbWUgPT09ICdvcGVuJyB8fFxyXG4gICAgICAgICAgICAobWV0aG9kTmFtZSA9PT0gJ2Nsb3NlJyAmJlxyXG4gICAgICAgICAgICAkY3Vycl9oZWFkZXIuaGFzQ2xhc3MoJ2FjdGl2ZScpKSkpIHtcclxuICAgICAgICAgIGNvbGxhcHNpYmxlT3BlbigkY3Vycl9oZWFkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICByZW1vdmVFdmVudEhhbmRsZXJzKCk7XHJcblxyXG5cclxuICAgICAgLy8gQWRkIGNsaWNrIGhhbmRsZXIgdG8gb25seSBkaXJlY3QgY29sbGFwc2libGUgaGVhZGVyIGNoaWxkcmVuXHJcbiAgICAgICR0aGlzLm9uKCdjbGljay5jb2xsYXBzZScsICc+IGxpID4gLmNvbGxhcHNpYmxlLWhlYWRlcicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB2YXIgZWxlbWVudCA9ICQoZS50YXJnZXQpO1xyXG5cclxuICAgICAgICBpZiAoaXNDaGlsZHJlbk9mUGFuZWxIZWFkZXIoZWxlbWVudCkpIHtcclxuICAgICAgICAgIGVsZW1lbnQgPSBnZXRQYW5lbEhlYWRlcihlbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbGxhcHNpYmxlT3BlbihlbGVtZW50KTtcclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgLy8gT3BlbiBmaXJzdCBhY3RpdmVcclxuICAgICAgaWYgKG9wdGlvbnMuYWNjb3JkaW9uIHx8IGNvbGxhcHNpYmxlX3R5cGUgPT09IFwiYWNjb3JkaW9uXCIgfHwgY29sbGFwc2libGVfdHlwZSA9PT0gdW5kZWZpbmVkKSB7IC8vIEhhbmRsZSBBY2NvcmRpb25cclxuICAgICAgICBjb2xsYXBzaWJsZU9wZW4oJHBhbmVsX2hlYWRlcnMuZmlsdGVyKCcuYWN0aXZlJykuZmlyc3QoKSwgdHJ1ZSk7XHJcblxyXG4gICAgICB9IGVsc2UgeyAvLyBIYW5kbGUgRXhwYW5kYWJsZXNcclxuICAgICAgICAkcGFuZWxfaGVhZGVycy5maWx0ZXIoJy5hY3RpdmUnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgY29sbGFwc2libGVPcGVuKCQodGhpcyksIHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICQoJy5jb2xsYXBzaWJsZScpLmNvbGxhcHNpYmxlKCk7XHJcbiAgfSk7XHJcbn0oIGpRdWVyeSApKTtcclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gdXBkYXRlIGxhYmVscyBvZiB0ZXh0IGZpZWxkc1xyXG4gICAgTWF0ZXJpYWxpemUudXBkYXRlVGV4dEZpZWxkcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgaW5wdXRfc2VsZWN0b3IgPSAnaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0sIGlucHV0W3R5cGU9ZW1haWxdLCBpbnB1dFt0eXBlPXVybF0sIGlucHV0W3R5cGU9dGVsXSwgaW5wdXRbdHlwZT1udW1iZXJdLCBpbnB1dFt0eXBlPXNlYXJjaF0sIHRleHRhcmVhJztcclxuICAgICAgJChpbnB1dF9zZWxlY3RvcikuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgaWYgKCQoZWxlbWVudCkudmFsKCkubGVuZ3RoID4gMCB8fCAkKGVsZW1lbnQpLmlzKCc6Zm9jdXMnKSB8fCBlbGVtZW50LmF1dG9mb2N1cyB8fCAkdGhpcy5hdHRyKCdwbGFjZWhvbGRlcicpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICR0aGlzLnNpYmxpbmdzKCdsYWJlbCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCQoZWxlbWVudClbMF0udmFsaWRpdHkpIHtcclxuICAgICAgICAgICR0aGlzLnNpYmxpbmdzKCdsYWJlbCcpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnLCAkKGVsZW1lbnQpWzBdLnZhbGlkaXR5LmJhZElucHV0ID09PSB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJHRoaXMuc2libGluZ3MoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFRleHQgYmFzZWQgaW5wdXRzXHJcbiAgICB2YXIgaW5wdXRfc2VsZWN0b3IgPSAnaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0sIGlucHV0W3R5cGU9ZW1haWxdLCBpbnB1dFt0eXBlPXVybF0sIGlucHV0W3R5cGU9dGVsXSwgaW5wdXRbdHlwZT1udW1iZXJdLCBpbnB1dFt0eXBlPXNlYXJjaF0sIHRleHRhcmVhJztcclxuXHJcbiAgICAvLyBBZGQgYWN0aXZlIGlmIGZvcm0gYXV0byBjb21wbGV0ZVxyXG4gICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsIGlucHV0X3NlbGVjdG9yLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmKCQodGhpcykudmFsKCkubGVuZ3RoICE9PSAwIHx8ICQodGhpcykuYXR0cigncGxhY2Vob2xkZXInKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnbGFiZWwnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgICAgdmFsaWRhdGVfZmllbGQoJCh0aGlzKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBZGQgYWN0aXZlIGlmIGlucHV0IGVsZW1lbnQgaGFzIGJlZW4gcHJlLXBvcHVsYXRlZCBvbiBkb2N1bWVudCByZWFkeVxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgIE1hdGVyaWFsaXplLnVwZGF0ZVRleHRGaWVsZHMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEhUTUwgRE9NIEZPUk0gUkVTRVQgaGFuZGxpbmdcclxuICAgICQoZG9jdW1lbnQpLm9uKCdyZXNldCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdmFyIGZvcm1SZXNldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgICBpZiAoZm9ybVJlc2V0LmlzKCdmb3JtJykpIHtcclxuICAgICAgICBmb3JtUmVzZXQuZmluZChpbnB1dF9zZWxlY3RvcikucmVtb3ZlQ2xhc3MoJ3ZhbGlkJykucmVtb3ZlQ2xhc3MoJ2ludmFsaWQnKTtcclxuICAgICAgICBmb3JtUmVzZXQuZmluZChpbnB1dF9zZWxlY3RvcikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKCd2YWx1ZScpID09PSAnJykge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUmVzZXQgc2VsZWN0XHJcbiAgICAgICAgZm9ybVJlc2V0LmZpbmQoJ3NlbGVjdC5pbml0aWFsaXplZCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyIHJlc2V0X3RleHQgPSBmb3JtUmVzZXQuZmluZCgnb3B0aW9uW3NlbGVjdGVkXScpLnRleHQoKTtcclxuICAgICAgICAgIGZvcm1SZXNldC5zaWJsaW5ncygnaW5wdXQuc2VsZWN0LWRyb3Bkb3duJykudmFsKHJlc2V0X3RleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBZGQgYWN0aXZlIHdoZW4gZWxlbWVudCBoYXMgZm9jdXNcclxuICAgICQoZG9jdW1lbnQpLm9uKCdmb2N1cycsIGlucHV0X3NlbGVjdG9yLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQodGhpcykuc2libGluZ3MoJ2xhYmVsLCAucHJlZml4JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2JsdXInLCBpbnB1dF9zZWxlY3RvciwgZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgJGlucHV0RWxlbWVudCA9ICQodGhpcyk7XHJcbiAgICAgIHZhciBzZWxlY3RvciA9IFwiLnByZWZpeFwiO1xyXG5cclxuICAgICAgaWYgKCRpbnB1dEVsZW1lbnQudmFsKCkubGVuZ3RoID09PSAwICYmICRpbnB1dEVsZW1lbnRbMF0udmFsaWRpdHkuYmFkSW5wdXQgIT09IHRydWUgJiYgJGlucHV0RWxlbWVudC5hdHRyKCdwbGFjZWhvbGRlcicpID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBzZWxlY3RvciArPSBcIiwgbGFiZWxcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJGlucHV0RWxlbWVudC5zaWJsaW5ncyhzZWxlY3RvcikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgdmFsaWRhdGVfZmllbGQoJGlucHV0RWxlbWVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cudmFsaWRhdGVfZmllbGQgPSBmdW5jdGlvbihvYmplY3QpIHtcclxuICAgICAgdmFyIGhhc0xlbmd0aCA9IG9iamVjdC5hdHRyKCdkYXRhLWxlbmd0aCcpICE9PSB1bmRlZmluZWQ7XHJcbiAgICAgIHZhciBsZW5BdHRyID0gcGFyc2VJbnQob2JqZWN0LmF0dHIoJ2RhdGEtbGVuZ3RoJykpO1xyXG4gICAgICB2YXIgbGVuID0gb2JqZWN0LnZhbCgpLmxlbmd0aDtcclxuXHJcbiAgICAgIGlmIChvYmplY3QudmFsKCkubGVuZ3RoID09PSAwICYmIG9iamVjdFswXS52YWxpZGl0eS5iYWRJbnB1dCA9PT0gZmFsc2UgJiYgIW9iamVjdC5pcygnOnJlcXVpcmVkJykpIHtcclxuICAgICAgICBpZiAob2JqZWN0Lmhhc0NsYXNzKCd2YWxpZGF0ZScpKSB7XHJcbiAgICAgICAgICBvYmplY3QucmVtb3ZlQ2xhc3MoJ3ZhbGlkJyk7XHJcbiAgICAgICAgICBvYmplY3QucmVtb3ZlQ2xhc3MoJ2ludmFsaWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKG9iamVjdC5oYXNDbGFzcygndmFsaWRhdGUnKSkge1xyXG4gICAgICAgICAgLy8gQ2hlY2sgZm9yIGNoYXJhY3RlciBjb3VudGVyIGF0dHJpYnV0ZXNcclxuICAgICAgICAgIGlmICgob2JqZWN0LmlzKCc6dmFsaWQnKSAmJiBoYXNMZW5ndGggJiYgKGxlbiA8PSBsZW5BdHRyKSkgfHwgKG9iamVjdC5pcygnOnZhbGlkJykgJiYgIWhhc0xlbmd0aCkpIHtcclxuICAgICAgICAgICAgb2JqZWN0LnJlbW92ZUNsYXNzKCdpbnZhbGlkJyk7XHJcbiAgICAgICAgICAgIG9iamVjdC5hZGRDbGFzcygndmFsaWQnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBvYmplY3QucmVtb3ZlQ2xhc3MoJ3ZhbGlkJyk7XHJcbiAgICAgICAgICAgIG9iamVjdC5hZGRDbGFzcygnaW52YWxpZCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBSYWRpbyBhbmQgQ2hlY2tib3ggZm9jdXMgY2xhc3NcclxuICAgIHZhciByYWRpb19jaGVja2JveCA9ICdpbnB1dFt0eXBlPXJhZGlvXSwgaW5wdXRbdHlwZT1jaGVja2JveF0nO1xyXG4gICAgJChkb2N1bWVudCkub24oJ2tleXVwLnJhZGlvJywgcmFkaW9fY2hlY2tib3gsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgLy8gVEFCLCBjaGVjayBpZiB0YWJiaW5nIHRvIHJhZGlvIG9yIGNoZWNrYm94LlxyXG4gICAgICBpZiAoZS53aGljaCA9PT0gOSkge1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3RhYmJlZCcpO1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgJHRoaXMub25lKCdibHVyJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3RhYmJlZCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVGV4dGFyZWEgQXV0byBSZXNpemVcclxuICAgIHZhciBoaWRkZW5EaXYgPSAkKCcuaGlkZGVuZGl2JykuZmlyc3QoKTtcclxuICAgIGlmICghaGlkZGVuRGl2Lmxlbmd0aCkge1xyXG4gICAgICBoaWRkZW5EaXYgPSAkKCc8ZGl2IGNsYXNzPVwiaGlkZGVuZGl2IGNvbW1vblwiPjwvZGl2PicpO1xyXG4gICAgICAkKCdib2R5JykuYXBwZW5kKGhpZGRlbkRpdik7XHJcbiAgICB9XHJcbiAgICB2YXIgdGV4dF9hcmVhX3NlbGVjdG9yID0gJy5tYXRlcmlhbGl6ZS10ZXh0YXJlYSc7XHJcblxyXG4gICAgZnVuY3Rpb24gdGV4dGFyZWFBdXRvUmVzaXplKCR0ZXh0YXJlYSkge1xyXG4gICAgICAvLyBTZXQgZm9udCBwcm9wZXJ0aWVzIG9mIGhpZGRlbkRpdlxyXG5cclxuICAgICAgdmFyIGZvbnRGYW1pbHkgPSAkdGV4dGFyZWEuY3NzKCdmb250LWZhbWlseScpO1xyXG4gICAgICB2YXIgZm9udFNpemUgPSAkdGV4dGFyZWEuY3NzKCdmb250LXNpemUnKTtcclxuICAgICAgdmFyIGxpbmVIZWlnaHQgPSAkdGV4dGFyZWEuY3NzKCdsaW5lLWhlaWdodCcpO1xyXG4gICAgICB2YXIgcGFkZGluZyA9ICR0ZXh0YXJlYS5jc3MoJ3BhZGRpbmcnKTtcclxuXHJcbiAgICAgIGlmIChmb250U2l6ZSkgeyBoaWRkZW5EaXYuY3NzKCdmb250LXNpemUnLCBmb250U2l6ZSk7IH1cclxuICAgICAgaWYgKGZvbnRGYW1pbHkpIHsgaGlkZGVuRGl2LmNzcygnZm9udC1mYW1pbHknLCBmb250RmFtaWx5KTsgfVxyXG4gICAgICBpZiAobGluZUhlaWdodCkgeyBoaWRkZW5EaXYuY3NzKCdsaW5lLWhlaWdodCcsIGxpbmVIZWlnaHQpOyB9XHJcbiAgICAgIGlmIChwYWRkaW5nKSB7IGhpZGRlbkRpdi5jc3MoJ3BhZGRpbmcnLCBwYWRkaW5nKTsgfVxyXG5cclxuICAgICAgLy8gU2V0IG9yaWdpbmFsLWhlaWdodCwgaWYgbm9uZVxyXG4gICAgICBpZiAoISR0ZXh0YXJlYS5kYXRhKCdvcmlnaW5hbC1oZWlnaHQnKSkge1xyXG4gICAgICAgICR0ZXh0YXJlYS5kYXRhKCdvcmlnaW5hbC1oZWlnaHQnLCAkdGV4dGFyZWEuaGVpZ2h0KCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJHRleHRhcmVhLmF0dHIoJ3dyYXAnKSA9PT0gJ29mZicpIHtcclxuICAgICAgICBoaWRkZW5EaXYuY3NzKCdvdmVyZmxvdy13cmFwJywgJ25vcm1hbCcpXHJcbiAgICAgICAgICAgICAgICAgLmNzcygnd2hpdGUtc3BhY2UnLCAncHJlJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGhpZGRlbkRpdi50ZXh0KCR0ZXh0YXJlYS52YWwoKSArICdcXG4nKTtcclxuICAgICAgdmFyIGNvbnRlbnQgPSBoaWRkZW5EaXYuaHRtbCgpLnJlcGxhY2UoL1xcbi9nLCAnPGJyPicpO1xyXG4gICAgICBoaWRkZW5EaXYuaHRtbChjb250ZW50KTtcclxuXHJcblxyXG4gICAgICAvLyBXaGVuIHRleHRhcmVhIGlzIGhpZGRlbiwgd2lkdGggZ29lcyBjcmF6eS5cclxuICAgICAgLy8gQXBwcm94aW1hdGUgd2l0aCBoYWxmIG9mIHdpbmRvdyBzaXplXHJcblxyXG4gICAgICBpZiAoJHRleHRhcmVhLmlzKCc6dmlzaWJsZScpKSB7XHJcbiAgICAgICAgaGlkZGVuRGl2LmNzcygnd2lkdGgnLCAkdGV4dGFyZWEud2lkdGgoKSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaGlkZGVuRGl2LmNzcygnd2lkdGgnLCAkKHdpbmRvdykud2lkdGgoKS8yKTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBSZXNpemUgaWYgdGhlIG5ldyBoZWlnaHQgaXMgZ3JlYXRlciB0aGFuIHRoZVxyXG4gICAgICAgKiBvcmlnaW5hbCBoZWlnaHQgb2YgdGhlIHRleHRhcmVhXHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAoJHRleHRhcmVhLmRhdGEoJ29yaWdpbmFsLWhlaWdodCcpIDw9IGhpZGRlbkRpdi5oZWlnaHQoKSkge1xyXG4gICAgICAgICR0ZXh0YXJlYS5jc3MoJ2hlaWdodCcsIGhpZGRlbkRpdi5oZWlnaHQoKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoJHRleHRhcmVhLnZhbCgpLmxlbmd0aCA8ICR0ZXh0YXJlYS5kYXRhKCdwcmV2aW91cy1sZW5ndGgnKSkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEluIGNhc2UgdGhlIG5ldyBoZWlnaHQgaXMgbGVzcyB0aGFuIG9yaWdpbmFsIGhlaWdodCwgaXRcclxuICAgICAgICAgKiBtZWFucyB0aGUgdGV4dGFyZWEgaGFzIGxlc3MgdGV4dCB0aGFuIGJlZm9yZVxyXG4gICAgICAgICAqIFNvIHdlIHNldCB0aGUgaGVpZ2h0IHRvIHRoZSBvcmlnaW5hbCBvbmVcclxuICAgICAgICAgKi9cclxuICAgICAgICAkdGV4dGFyZWEuY3NzKCdoZWlnaHQnLCAkdGV4dGFyZWEuZGF0YSgnb3JpZ2luYWwtaGVpZ2h0JykpO1xyXG4gICAgICB9XHJcbiAgICAgICR0ZXh0YXJlYS5kYXRhKCdwcmV2aW91cy1sZW5ndGgnLCAkdGV4dGFyZWEudmFsKCkubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICAkKHRleHRfYXJlYV9zZWxlY3RvcikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciAkdGV4dGFyZWEgPSAkKHRoaXMpO1xyXG4gICAgICAvKipcclxuICAgICAgICogSW5zdGVhZCBvZiByZXNpemluZyB0ZXh0YXJlYSBvbiBkb2N1bWVudCBsb2FkLFxyXG4gICAgICAgKiBzdG9yZSB0aGUgb3JpZ2luYWwgaGVpZ2h0IGFuZCB0aGUgb3JpZ2luYWwgbGVuZ3RoXHJcbiAgICAgICAqL1xyXG4gICAgICAkdGV4dGFyZWEuZGF0YSgnb3JpZ2luYWwtaGVpZ2h0JywgJHRleHRhcmVhLmhlaWdodCgpKTtcclxuICAgICAgJHRleHRhcmVhLmRhdGEoJ3ByZXZpb3VzLWxlbmd0aCcsICR0ZXh0YXJlYS52YWwoKS5sZW5ndGgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdrZXl1cCBrZXlkb3duIGF1dG9yZXNpemUnLCB0ZXh0X2FyZWFfc2VsZWN0b3IsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGV4dGFyZWFBdXRvUmVzaXplKCQodGhpcykpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRmlsZSBJbnB1dCBQYXRoXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5maWxlLWZpZWxkIGlucHV0W3R5cGU9XCJmaWxlXCJdJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgZmlsZV9maWVsZCA9ICQodGhpcykuY2xvc2VzdCgnLmZpbGUtZmllbGQnKTtcclxuICAgICAgdmFyIHBhdGhfaW5wdXQgPSBmaWxlX2ZpZWxkLmZpbmQoJ2lucHV0LmZpbGUtcGF0aCcpO1xyXG4gICAgICB2YXIgZmlsZXMgICAgICA9ICQodGhpcylbMF0uZmlsZXM7XHJcbiAgICAgIHZhciBmaWxlX25hbWVzID0gW107XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmaWxlX25hbWVzLnB1c2goZmlsZXNbaV0ubmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgcGF0aF9pbnB1dC52YWwoZmlsZV9uYW1lcy5qb2luKFwiLCBcIikpO1xyXG4gICAgICBwYXRoX2lucHV0LnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKipcclxuICAgICogIFJhbmdlIElucHV0ICAqXHJcbiAgICAqKioqKioqKioqKioqKioqL1xyXG5cclxuICAgIHZhciByYW5nZV90eXBlID0gJ2lucHV0W3R5cGU9cmFuZ2VdJztcclxuICAgIHZhciByYW5nZV9tb3VzZWRvd24gPSBmYWxzZTtcclxuICAgIHZhciBsZWZ0O1xyXG5cclxuICAgICQocmFuZ2VfdHlwZSkuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciB0aHVtYiA9ICQoJzxzcGFuIGNsYXNzPVwidGh1bWJcIj48c3BhbiBjbGFzcz1cInZhbHVlXCI+PC9zcGFuPjwvc3Bhbj4nKTtcclxuICAgICAgJCh0aGlzKS5hZnRlcih0aHVtYik7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgc2hvd1JhbmdlQnViYmxlID0gZnVuY3Rpb24odGh1bWIpIHtcclxuICAgICAgdmFyIHBhZGRpbmdMZWZ0ID0gcGFyc2VJbnQodGh1bWIucGFyZW50KCkuY3NzKCdwYWRkaW5nLWxlZnQnKSk7XHJcbiAgICAgIHZhciBtYXJnaW5MZWZ0ID0gKC03ICsgcGFkZGluZ0xlZnQpICsgJ3B4JztcclxuICAgICAgdGh1bWIudmVsb2NpdHkoeyBoZWlnaHQ6IFwiMzBweFwiLCB3aWR0aDogXCIzMHB4XCIsIHRvcDogXCItMzBweFwiLCBtYXJnaW5MZWZ0OiBtYXJnaW5MZWZ0fSwgeyBkdXJhdGlvbjogMzAwLCBlYXNpbmc6ICdlYXNlT3V0RXhwbycgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjYWxjUmFuZ2VPZmZzZXQgPSBmdW5jdGlvbihyYW5nZSkge1xyXG4gICAgICB2YXIgd2lkdGggPSByYW5nZS53aWR0aCgpIC0gMTU7XHJcbiAgICAgIHZhciBtYXggPSBwYXJzZUZsb2F0KHJhbmdlLmF0dHIoJ21heCcpKTtcclxuICAgICAgdmFyIG1pbiA9IHBhcnNlRmxvYXQocmFuZ2UuYXR0cignbWluJykpO1xyXG4gICAgICB2YXIgcGVyY2VudCA9IChwYXJzZUZsb2F0KHJhbmdlLnZhbCgpKSAtIG1pbikgLyAobWF4IC0gbWluKTtcclxuICAgICAgcmV0dXJuIHBlcmNlbnQgKiB3aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmFuZ2Vfd3JhcHBlciA9ICcucmFuZ2UtZmllbGQnO1xyXG4gICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsIHJhbmdlX3R5cGUsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdmFyIHRodW1iID0gJCh0aGlzKS5zaWJsaW5ncygnLnRodW1iJyk7XHJcbiAgICAgIHRodW1iLmZpbmQoJy52YWx1ZScpLmh0bWwoJCh0aGlzKS52YWwoKSk7XHJcblxyXG4gICAgICBpZiAoIXRodW1iLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgIHNob3dSYW5nZUJ1YmJsZSh0aHVtYik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBvZmZzZXRMZWZ0ID0gY2FsY1JhbmdlT2Zmc2V0KCQodGhpcykpO1xyXG4gICAgICB0aHVtYi5hZGRDbGFzcygnYWN0aXZlJykuY3NzKCdsZWZ0Jywgb2Zmc2V0TGVmdCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignbW91c2Vkb3duIHRvdWNoc3RhcnQnLCByYW5nZV90eXBlLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHZhciB0aHVtYiA9ICQodGhpcykuc2libGluZ3MoJy50aHVtYicpO1xyXG5cclxuICAgICAgLy8gSWYgdGh1bWIgaW5kaWNhdG9yIGRvZXMgbm90IGV4aXN0IHlldCwgY3JlYXRlIGl0XHJcbiAgICAgIGlmICh0aHVtYi5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgIHRodW1iID0gJCgnPHNwYW4gY2xhc3M9XCJ0aHVtYlwiPjxzcGFuIGNsYXNzPVwidmFsdWVcIj48L3NwYW4+PC9zcGFuPicpO1xyXG4gICAgICAgICQodGhpcykuYWZ0ZXIodGh1bWIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBTZXQgaW5kaWNhdG9yIHZhbHVlXHJcbiAgICAgIHRodW1iLmZpbmQoJy52YWx1ZScpLmh0bWwoJCh0aGlzKS52YWwoKSk7XHJcblxyXG4gICAgICByYW5nZV9tb3VzZWRvd24gPSB0cnVlO1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgIGlmICghdGh1bWIuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgc2hvd1JhbmdlQnViYmxlKHRodW1iKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGUudHlwZSAhPT0gJ2lucHV0Jykge1xyXG4gICAgICAgIHZhciBvZmZzZXRMZWZ0ID0gY2FsY1JhbmdlT2Zmc2V0KCQodGhpcykpO1xyXG4gICAgICAgIHRodW1iLmFkZENsYXNzKCdhY3RpdmUnKS5jc3MoJ2xlZnQnLCBvZmZzZXRMZWZ0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ21vdXNldXAgdG91Y2hlbmQnLCByYW5nZV93cmFwcGVyLCBmdW5jdGlvbigpIHtcclxuICAgICAgcmFuZ2VfbW91c2Vkb3duID0gZmFsc2U7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2lucHV0IG1vdXNlbW92ZSB0b3VjaG1vdmUnLCByYW5nZV93cmFwcGVyLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHZhciB0aHVtYiA9ICQodGhpcykuY2hpbGRyZW4oJy50aHVtYicpO1xyXG4gICAgICB2YXIgbGVmdDtcclxuICAgICAgdmFyIGlucHV0ID0gJCh0aGlzKS5maW5kKHJhbmdlX3R5cGUpO1xyXG5cclxuICAgICAgaWYgKHJhbmdlX21vdXNlZG93bikge1xyXG4gICAgICAgIGlmICghdGh1bWIuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICBzaG93UmFuZ2VCdWJibGUodGh1bWIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG9mZnNldExlZnQgPSBjYWxjUmFuZ2VPZmZzZXQoaW5wdXQpO1xyXG4gICAgICAgIHRodW1iLmFkZENsYXNzKCdhY3RpdmUnKS5jc3MoJ2xlZnQnLCBvZmZzZXRMZWZ0KTtcclxuICAgICAgICB0aHVtYi5maW5kKCcudmFsdWUnKS5odG1sKHRodW1iLnNpYmxpbmdzKHJhbmdlX3R5cGUpLnZhbCgpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ21vdXNlb3V0IHRvdWNobGVhdmUnLCByYW5nZV93cmFwcGVyLCBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKCFyYW5nZV9tb3VzZWRvd24pIHtcclxuXHJcbiAgICAgICAgdmFyIHRodW1iID0gJCh0aGlzKS5jaGlsZHJlbignLnRodW1iJyk7XHJcbiAgICAgICAgdmFyIHBhZGRpbmdMZWZ0ID0gcGFyc2VJbnQoJCh0aGlzKS5jc3MoJ3BhZGRpbmctbGVmdCcpKTtcclxuICAgICAgICB2YXIgbWFyZ2luTGVmdCA9ICg3ICsgcGFkZGluZ0xlZnQpICsgJ3B4JztcclxuXHJcbiAgICAgICAgaWYgKHRodW1iLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgdGh1bWIudmVsb2NpdHkoeyBoZWlnaHQ6ICcwJywgd2lkdGg6ICcwJywgdG9wOiAnMTBweCcsIG1hcmdpbkxlZnQ6IG1hcmdpbkxlZnR9LCB7IGR1cmF0aW9uOiAxMDAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRodW1iLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgKiBBdXRvIGNvbXBsZXRlIHBsdWdpbiAgKlxyXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICAkLmZuLmF1dG9jb21wbGV0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgIC8vIERlZmF1bHRzXHJcbiAgICAgIHZhciBkZWZhdWx0cyA9IHtcclxuICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICBsaW1pdDogSW5maW5pdHksXHJcbiAgICAgICAgb25BdXRvY29tcGxldGU6IG51bGwsXHJcbiAgICAgICAgbWluTGVuZ3RoOiAxXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgZGF0YSA9IG9wdGlvbnMuZGF0YSxcclxuICAgICAgICAgICAgY291bnQgPSAwLFxyXG4gICAgICAgICAgICBhY3RpdmVJbmRleCA9IC0xLFxyXG4gICAgICAgICAgICBvbGRWYWwsXHJcbiAgICAgICAgICAgICRpbnB1dERpdiA9ICRpbnB1dC5jbG9zZXN0KCcuaW5wdXQtZmllbGQnKTsgLy8gRGl2IHRvIGFwcGVuZCBvblxyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiBkYXRhIGlzbid0IGVtcHR5XHJcbiAgICAgICAgaWYgKCEkLmlzRW1wdHlPYmplY3QoZGF0YSkpIHtcclxuICAgICAgICAgIHZhciAkYXV0b2NvbXBsZXRlID0gJCgnPHVsIGNsYXNzPVwiYXV0b2NvbXBsZXRlLWNvbnRlbnQgZHJvcGRvd24tY29udGVudFwiPjwvdWw+Jyk7XHJcbiAgICAgICAgICB2YXIgJG9sZEF1dG9jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgICAvLyBBcHBlbmQgYXV0b2NvbXBsZXRlIGVsZW1lbnQuXHJcbiAgICAgICAgICAvLyBQcmV2ZW50IGRvdWJsZSBzdHJ1Y3R1cmUgaW5pdC5cclxuICAgICAgICAgIGlmICgkaW5wdXREaXYubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICRvbGRBdXRvY29tcGxldGUgPSAkaW5wdXREaXYuY2hpbGRyZW4oJy5hdXRvY29tcGxldGUtY29udGVudC5kcm9wZG93bi1jb250ZW50JykuZmlyc3QoKTtcclxuICAgICAgICAgICAgaWYgKCEkb2xkQXV0b2NvbXBsZXRlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICRpbnB1dERpdi5hcHBlbmQoJGF1dG9jb21wbGV0ZSk7IC8vIFNldCB1bCBpbiBib2R5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRvbGRBdXRvY29tcGxldGUgPSAkaW5wdXQubmV4dCgnLmF1dG9jb21wbGV0ZS1jb250ZW50LmRyb3Bkb3duLWNvbnRlbnQnKTtcclxuICAgICAgICAgICAgaWYgKCEkb2xkQXV0b2NvbXBsZXRlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICRpbnB1dC5hZnRlcigkYXV0b2NvbXBsZXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCRvbGRBdXRvY29tcGxldGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICRhdXRvY29tcGxldGUgPSAkb2xkQXV0b2NvbXBsZXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIEhpZ2hsaWdodCBwYXJ0aWFsIG1hdGNoLlxyXG4gICAgICAgICAgdmFyIGhpZ2hsaWdodCA9IGZ1bmN0aW9uKHN0cmluZywgJGVsKSB7XHJcbiAgICAgICAgICAgIHZhciBpbWcgPSAkZWwuZmluZCgnaW1nJyk7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaFN0YXJ0ID0gJGVsLnRleHQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJcIiArIHN0cmluZy50b0xvd2VyQ2FzZSgpICsgXCJcIiksXHJcbiAgICAgICAgICAgICAgICBtYXRjaEVuZCA9IG1hdGNoU3RhcnQgKyBzdHJpbmcubGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgICAgIGJlZm9yZU1hdGNoID0gJGVsLnRleHQoKS5zbGljZSgwLCBtYXRjaFN0YXJ0KSxcclxuICAgICAgICAgICAgICAgIG1hdGNoVGV4dCA9ICRlbC50ZXh0KCkuc2xpY2UobWF0Y2hTdGFydCwgbWF0Y2hFbmQgKyAxKSxcclxuICAgICAgICAgICAgICAgIGFmdGVyTWF0Y2ggPSAkZWwudGV4dCgpLnNsaWNlKG1hdGNoRW5kICsgMSk7XHJcbiAgICAgICAgICAgICRlbC5odG1sKFwiPHNwYW4+XCIgKyBiZWZvcmVNYXRjaCArIFwiPHNwYW4gY2xhc3M9J2hpZ2hsaWdodCc+XCIgKyBtYXRjaFRleHQgKyBcIjwvc3Bhbj5cIiArIGFmdGVyTWF0Y2ggKyBcIjwvc3Bhbj5cIik7XHJcbiAgICAgICAgICAgIGlmIChpbWcubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgJGVsLnByZXBlbmQoaW1nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAvLyBSZXNldCBjdXJyZW50IGVsZW1lbnQgcG9zaXRpb25cclxuICAgICAgICAgIHZhciByZXNldEN1cnJlbnRFbGVtZW50ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgICRhdXRvY29tcGxldGUuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBSZW1vdmUgYXV0b2NvbXBsZXRlIGVsZW1lbnRzXHJcbiAgICAgICAgICB2YXIgcmVtb3ZlQXV0b2NvbXBsZXRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICRhdXRvY29tcGxldGUuZW1wdHkoKTtcclxuICAgICAgICAgICAgcmVzZXRDdXJyZW50RWxlbWVudCgpO1xyXG4gICAgICAgICAgICBvbGRWYWwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICRpbnB1dC5vZmYoJ2JsdXIuYXV0b2NvbXBsZXRlJykub24oJ2JsdXIuYXV0b2NvbXBsZXRlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUF1dG9jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8gUGVyZm9ybSBzZWFyY2hcclxuICAgICAgICAgICRpbnB1dC5vZmYoJ2tleXVwLmF1dG9jb21wbGV0ZSBmb2N1cy5hdXRvY29tcGxldGUnKS5vbigna2V5dXAuYXV0b2NvbXBsZXRlIGZvY3VzLmF1dG9jb21wbGV0ZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIC8vIFJlc2V0IGNvdW50LlxyXG4gICAgICAgICAgICBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgIHZhciB2YWwgPSAkaW5wdXQudmFsKCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERvbid0IGNhcHR1cmUgZW50ZXIgb3IgYXJyb3cga2V5IHVzYWdlLlxyXG4gICAgICAgICAgICBpZiAoZS53aGljaCA9PT0gMTMgfHxcclxuICAgICAgICAgICAgICAgIGUud2hpY2ggPT09IDM4IHx8XHJcbiAgICAgICAgICAgICAgICBlLndoaWNoID09PSA0MCkge1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBpbnB1dCBpc24ndCBlbXB0eVxyXG4gICAgICAgICAgICBpZiAob2xkVmFsICE9PSB2YWwpIHtcclxuICAgICAgICAgICAgICByZW1vdmVBdXRvY29tcGxldGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHZhbC5sZW5ndGggPj0gb3B0aW9ucy5taW5MZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGZvcih2YXIga2V5IGluIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWwpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEJyZWFrIGlmIHBhc3QgbGltaXRcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPj0gb3B0aW9ucy5saW1pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXV0b2NvbXBsZXRlT3B0aW9uID0gJCgnPGxpPjwvbGk+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhZGF0YVtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGVPcHRpb24uYXBwZW5kKCc8aW1nIHNyYz1cIicrIGRhdGFba2V5XSArJ1wiIGNsYXNzPVwicmlnaHQgY2lyY2xlXCI+PHNwYW4+Jysga2V5ICsnPC9zcGFuPicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGVPcHRpb24uYXBwZW5kKCc8c3Bhbj4nKyBrZXkgKyc8L3NwYW4+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkYXV0b2NvbXBsZXRlLmFwcGVuZChhdXRvY29tcGxldGVPcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodCh2YWwsIGF1dG9jb21wbGV0ZU9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIG9sZFZhbFxyXG4gICAgICAgICAgICBvbGRWYWwgPSB2YWw7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkaW5wdXQub2ZmKCdrZXlkb3duLmF1dG9jb21wbGV0ZScpLm9uKCdrZXlkb3duLmF1dG9jb21wbGV0ZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIC8vIEFycm93IGtleXMgYW5kIGVudGVyIGtleSB1c2FnZVxyXG4gICAgICAgICAgICB2YXIga2V5Q29kZSA9IGUud2hpY2gsXHJcbiAgICAgICAgICAgICAgICBsaUVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBudW1JdGVtcyA9ICRhdXRvY29tcGxldGUuY2hpbGRyZW4oJ2xpJykubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgJGFjdGl2ZSA9ICRhdXRvY29tcGxldGUuY2hpbGRyZW4oJy5hY3RpdmUnKS5maXJzdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gc2VsZWN0IGVsZW1lbnQgb24gRW50ZXJcclxuICAgICAgICAgICAgaWYgKGtleUNvZGUgPT09IDEzICYmIGFjdGl2ZUluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICBsaUVsZW1lbnQgPSAkYXV0b2NvbXBsZXRlLmNoaWxkcmVuKCdsaScpLmVxKGFjdGl2ZUluZGV4KTtcclxuICAgICAgICAgICAgICBpZiAobGlFbGVtZW50Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbGlFbGVtZW50LnRyaWdnZXIoJ21vdXNlZG93bi5hdXRvY29tcGxldGUnKTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDYXB0dXJlIHVwIGFuZCBkb3duIGtleVxyXG4gICAgICAgICAgICBpZiAoIGtleUNvZGUgPT09IDM4IHx8IGtleUNvZGUgPT09IDQwICkge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGtleUNvZGUgPT09IDM4ICYmXHJcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5kZXgtLTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGlmIChrZXlDb2RlID09PSA0MCAmJlxyXG4gICAgICAgICAgICAgICAgICBhY3RpdmVJbmRleCA8IChudW1JdGVtcyAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleCsrO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgJGFjdGl2ZS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgaWYgKGFjdGl2ZUluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgICRhdXRvY29tcGxldGUuY2hpbGRyZW4oJ2xpJykuZXEoYWN0aXZlSW5kZXgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vIFNldCBpbnB1dCB2YWx1ZVxyXG4gICAgICAgICAgJGF1dG9jb21wbGV0ZS5vZmYoJ21vdXNlZG93bi5hdXRvY29tcGxldGUgdG91Y2hzdGFydC5hdXRvY29tcGxldGUnKS5vbignbW91c2Vkb3duLmF1dG9jb21wbGV0ZSB0b3VjaHN0YXJ0LmF1dG9jb21wbGV0ZScsICdsaScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHRleHQgPSAkKHRoaXMpLnRleHQoKS50cmltKCk7XHJcbiAgICAgICAgICAgICRpbnB1dC52YWwodGV4dCk7XHJcbiAgICAgICAgICAgICRpbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgcmVtb3ZlQXV0b2NvbXBsZXRlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgb25BdXRvY29tcGxldGUgY2FsbGJhY2suXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Yob3B0aW9ucy5vbkF1dG9jb21wbGV0ZSkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgIG9wdGlvbnMub25BdXRvY29tcGxldGUuY2FsbCh0aGlzLCB0ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEVtcHR5IGRhdGFcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJGlucHV0Lm9mZigna2V5dXAuYXV0b2NvbXBsZXRlIGZvY3VzLmF1dG9jb21wbGV0ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICB9KTsgLy8gRW5kIG9mICQoZG9jdW1lbnQpLnJlYWR5XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqXHJcbiAgICogIFNlbGVjdCBQbHVnaW4gICpcclxuICAgKioqKioqKioqKioqKioqKioqL1xyXG4gICQuZm4ubWF0ZXJpYWxfc2VsZWN0ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAkKHRoaXMpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgdmFyICRzZWxlY3QgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgaWYgKCRzZWxlY3QuaGFzQ2xhc3MoJ2Jyb3dzZXItZGVmYXVsdCcpKSB7XHJcbiAgICAgICAgcmV0dXJuOyAvLyBDb250aW51ZSB0byBuZXh0IChyZXR1cm4gZmFsc2UgYnJlYWtzIG91dCBvZiBlbnRpcmUgbG9vcClcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIG11bHRpcGxlID0gJHNlbGVjdC5hdHRyKCdtdWx0aXBsZScpID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgbGFzdElEID0gJHNlbGVjdC5hdHRyKCdkYXRhLXNlbGVjdC1pZCcpOyAvLyBUZWFyIGRvd24gc3RydWN0dXJlIGlmIFNlbGVjdCBuZWVkcyB0byBiZSByZWJ1aWx0XHJcblxyXG4gICAgICBpZiAobGFzdElEKSB7XHJcbiAgICAgICAgJHNlbGVjdC5wYXJlbnQoKS5maW5kKCdzcGFuLmNhcmV0JykucmVtb3ZlKCk7XHJcbiAgICAgICAgJHNlbGVjdC5wYXJlbnQoKS5maW5kKCdpbnB1dCcpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAkc2VsZWN0LnVud3JhcCgpO1xyXG4gICAgICAgICQoJ3VsI3NlbGVjdC1vcHRpb25zLScrbGFzdElEKS5yZW1vdmUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gSWYgZGVzdHJveWluZyB0aGUgc2VsZWN0LCByZW1vdmUgdGhlIHNlbGVsY3QtaWQgYW5kIHJlc2V0IGl0IHRvIGl0J3MgdW5pbml0aWFsaXplZCBzdGF0ZS5cclxuICAgICAgaWYoY2FsbGJhY2sgPT09ICdkZXN0cm95Jykge1xyXG4gICAgICAgICRzZWxlY3QucmVtb3ZlQXR0cignZGF0YS1zZWxlY3QtaWQnKS5yZW1vdmVDbGFzcygnaW5pdGlhbGl6ZWQnKTtcclxuICAgICAgICAkKHdpbmRvdykub2ZmKCdjbGljay5zZWxlY3QnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciB1bmlxdWVJRCA9IE1hdGVyaWFsaXplLmd1aWQoKTtcclxuICAgICAgJHNlbGVjdC5hdHRyKCdkYXRhLXNlbGVjdC1pZCcsIHVuaXF1ZUlEKTtcclxuICAgICAgdmFyIHdyYXBwZXIgPSAkKCc8ZGl2IGNsYXNzPVwic2VsZWN0LXdyYXBwZXJcIj48L2Rpdj4nKTtcclxuICAgICAgd3JhcHBlci5hZGRDbGFzcygkc2VsZWN0LmF0dHIoJ2NsYXNzJykpO1xyXG4gICAgICBpZiAoJHNlbGVjdC5pcygnOmRpc2FibGVkJykpXHJcbiAgICAgICAgd3JhcHBlci5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuICAgICAgdmFyIG9wdGlvbnMgPSAkKCc8dWwgaWQ9XCJzZWxlY3Qtb3B0aW9ucy0nICsgdW5pcXVlSUQgKydcIiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnQgc2VsZWN0LWRyb3Bkb3duICcgKyAobXVsdGlwbGUgPyAnbXVsdGlwbGUtc2VsZWN0LWRyb3Bkb3duJyA6ICcnKSArICdcIj48L3VsPicpLFxyXG4gICAgICAgICAgc2VsZWN0Q2hpbGRyZW4gPSAkc2VsZWN0LmNoaWxkcmVuKCdvcHRpb24sIG9wdGdyb3VwJyksXHJcbiAgICAgICAgICB2YWx1ZXNTZWxlY3RlZCA9IFtdLFxyXG4gICAgICAgICAgb3B0aW9uc0hvdmVyID0gZmFsc2U7XHJcblxyXG4gICAgICB2YXIgbGFiZWwgPSAkc2VsZWN0LmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLmh0bWwoKSB8fCAkc2VsZWN0LmZpbmQoJ29wdGlvbjpmaXJzdCcpLmh0bWwoKSB8fCBcIlwiO1xyXG5cclxuICAgICAgLy8gRnVuY3Rpb24gdGhhdCByZW5kZXJzIGFuZCBhcHBlbmRzIHRoZSBvcHRpb24gdGFraW5nIGludG9cclxuICAgICAgLy8gYWNjb3VudCB0eXBlIGFuZCBwb3NzaWJsZSBpbWFnZSBpY29uLlxyXG4gICAgICB2YXIgYXBwZW5kT3B0aW9uV2l0aEljb24gPSBmdW5jdGlvbihzZWxlY3QsIG9wdGlvbiwgdHlwZSkge1xyXG4gICAgICAgIC8vIEFkZCBkaXNhYmxlZCBhdHRyIGlmIGRpc2FibGVkXHJcbiAgICAgICAgdmFyIGRpc2FibGVkQ2xhc3MgPSAob3B0aW9uLmlzKCc6ZGlzYWJsZWQnKSkgPyAnZGlzYWJsZWQgJyA6ICcnO1xyXG4gICAgICAgIHZhciBvcHRncm91cENsYXNzID0gKHR5cGUgPT09ICdvcHRncm91cC1vcHRpb24nKSA/ICdvcHRncm91cC1vcHRpb24gJyA6ICcnO1xyXG4gICAgICAgIHZhciBtdWx0aXBsZUNoZWNrYm94ID0gbXVsdGlwbGUgPyAnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiJyArIGRpc2FibGVkQ2xhc3MgKyAnLz48bGFiZWw+PC9sYWJlbD4nIDogJyc7XHJcblxyXG4gICAgICAgIC8vIGFkZCBpY29uc1xyXG4gICAgICAgIHZhciBpY29uX3VybCA9IG9wdGlvbi5kYXRhKCdpY29uJyk7XHJcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBvcHRpb24uYXR0cignY2xhc3MnKTtcclxuICAgICAgICBpZiAoISFpY29uX3VybCkge1xyXG4gICAgICAgICAgdmFyIGNsYXNzU3RyaW5nID0gJyc7XHJcbiAgICAgICAgICBpZiAoISFjbGFzc2VzKSBjbGFzc1N0cmluZyA9ICcgY2xhc3M9XCInICsgY2xhc3NlcyArICdcIic7XHJcblxyXG4gICAgICAgICAgLy8gQ2hlY2sgZm9yIG11bHRpcGxlIHR5cGUuXHJcbiAgICAgICAgICBvcHRpb25zLmFwcGVuZCgkKCc8bGkgY2xhc3M9XCInICsgZGlzYWJsZWRDbGFzcyArIG9wdGdyb3VwQ2xhc3MgKyAnXCI+PGltZyBhbHQ9XCJcIiBzcmM9XCInICsgaWNvbl91cmwgKyAnXCInICsgY2xhc3NTdHJpbmcgKyAnPjxzcGFuPicgKyBtdWx0aXBsZUNoZWNrYm94ICsgb3B0aW9uLmh0bWwoKSArICc8L3NwYW4+PC9saT4nKSk7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGZvciBtdWx0aXBsZSB0eXBlLlxyXG4gICAgICAgIG9wdGlvbnMuYXBwZW5kKCQoJzxsaSBjbGFzcz1cIicgKyBkaXNhYmxlZENsYXNzICsgb3B0Z3JvdXBDbGFzcyArICdcIj48c3Bhbj4nICsgbXVsdGlwbGVDaGVja2JveCArIG9wdGlvbi5odG1sKCkgKyAnPC9zcGFuPjwvbGk+JykpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgLyogQ3JlYXRlIGRyb3Bkb3duIHN0cnVjdHVyZS4gKi9cclxuICAgICAgaWYgKHNlbGVjdENoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgIHNlbGVjdENoaWxkcmVuLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBpZiAoJCh0aGlzKS5pcygnb3B0aW9uJykpIHtcclxuICAgICAgICAgICAgLy8gRGlyZWN0IGRlc2NlbmRhbnQgb3B0aW9uLlxyXG4gICAgICAgICAgICBpZiAobXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgICBhcHBlbmRPcHRpb25XaXRoSWNvbigkc2VsZWN0LCAkKHRoaXMpLCAnbXVsdGlwbGUnKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgYXBwZW5kT3B0aW9uV2l0aEljb24oJHNlbGVjdCwgJCh0aGlzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5pcygnb3B0Z3JvdXAnKSkge1xyXG4gICAgICAgICAgICAvLyBPcHRncm91cC5cclxuICAgICAgICAgICAgdmFyIHNlbGVjdE9wdGlvbnMgPSAkKHRoaXMpLmNoaWxkcmVuKCdvcHRpb24nKTtcclxuICAgICAgICAgICAgb3B0aW9ucy5hcHBlbmQoJCgnPGxpIGNsYXNzPVwib3B0Z3JvdXBcIj48c3Bhbj4nICsgJCh0aGlzKS5hdHRyKCdsYWJlbCcpICsgJzwvc3Bhbj48L2xpPicpKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE9wdGlvbnMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICBhcHBlbmRPcHRpb25XaXRoSWNvbigkc2VsZWN0LCAkKHRoaXMpLCAnb3B0Z3JvdXAtb3B0aW9uJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBvcHRpb25zLmZpbmQoJ2xpOm5vdCgub3B0Z3JvdXApJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICQodGhpcykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIC8vIENoZWNrIGlmIG9wdGlvbiBlbGVtZW50IGlzIGRpc2FibGVkXHJcbiAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2Rpc2FibGVkJykgJiYgISQodGhpcykuaGFzQ2xhc3MoJ29wdGdyb3VwJykpIHtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtdWx0aXBsZSkge1xyXG4gICAgICAgICAgICAgICQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsIHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBmdW5jdGlvbihpLCB2KSB7IHJldHVybiAhdjsgfSk7XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0b2dnbGVFbnRyeUZyb21BcnJheSh2YWx1ZXNTZWxlY3RlZCwgaSwgJHNlbGVjdCk7XHJcbiAgICAgICAgICAgICAgJG5ld1NlbGVjdC50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIG9wdGlvbnMuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgJG5ld1NlbGVjdC52YWwoJCh0aGlzKS50ZXh0KCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhY3RpdmF0ZU9wdGlvbihvcHRpb25zLCAkKHRoaXMpKTtcclxuICAgICAgICAgICAgJHNlbGVjdC5maW5kKCdvcHRpb24nKS5lcShpKS5wcm9wKCdzZWxlY3RlZCcsIHNlbGVjdGVkKTtcclxuICAgICAgICAgICAgLy8gVHJpZ2dlciBvbmNoYW5nZSgpIGV2ZW50XHJcbiAgICAgICAgICAgICRzZWxlY3QudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICd1bmRlZmluZWQnKSBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gV3JhcCBFbGVtZW50c1xyXG4gICAgICAkc2VsZWN0LndyYXAod3JhcHBlcik7XHJcbiAgICAgIC8vIEFkZCBTZWxlY3QgRGlzcGxheSBFbGVtZW50XHJcbiAgICAgIHZhciBkcm9wZG93bkljb24gPSAkKCc8c3BhbiBjbGFzcz1cImNhcmV0XCI+PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWRvd25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPiAnKTtcclxuXHJcbiAgICAgIC8vIGVzY2FwZSBkb3VibGUgcXVvdGVzXHJcbiAgICAgIHZhciBzYW5pdGl6ZWRMYWJlbEh0bWwgPSBsYWJlbC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XHJcblxyXG4gICAgICB2YXIgJG5ld1NlbGVjdCA9ICQoJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwic2VsZWN0LWRyb3Bkb3duXCIgcmVhZG9ubHk9XCJ0cnVlXCIgJyArICgoJHNlbGVjdC5pcygnOmRpc2FibGVkJykpID8gJ2Rpc2FibGVkJyA6ICcnKSArICcgZGF0YS1hY3RpdmF0ZXM9XCJzZWxlY3Qtb3B0aW9ucy0nICsgdW5pcXVlSUQgKydcIiB2YWx1ZT1cIicrIHNhbml0aXplZExhYmVsSHRtbCArJ1wiIGRhdGEtYmVsb3dvcmlnaW49XCJ0cnVlXCIvPicpO1xyXG4gICAgICAkc2VsZWN0LmJlZm9yZSgkbmV3U2VsZWN0KTtcclxuICAgICAgJG5ld1NlbGVjdC5iZWZvcmUoZHJvcGRvd25JY29uKTtcclxuXHJcbiAgICAgICRuZXdTZWxlY3QuYWZ0ZXIob3B0aW9ucyk7XHJcbiAgICAgIC8vIENoZWNrIGlmIHNlY3Rpb24gZWxlbWVudCBpcyBkaXNhYmxlZFxyXG4gICAgICBpZiAoISRzZWxlY3QuaXMoJzpkaXNhYmxlZCcpKSB7XHJcbiAgICAgICAgJG5ld1NlbGVjdC5kcm9wZG93bih7J2hvdmVyJzogZmFsc2V9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ29weSB0YWJpbmRleFxyXG4gICAgICBpZiAoJHNlbGVjdC5hdHRyKCd0YWJpbmRleCcpKSB7XHJcbiAgICAgICAgJCgkbmV3U2VsZWN0WzBdKS5hdHRyKCd0YWJpbmRleCcsICRzZWxlY3QuYXR0cigndGFiaW5kZXgnKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICRzZWxlY3QuYWRkQ2xhc3MoJ2luaXRpYWxpemVkJyk7XHJcblxyXG4gICAgICAkbmV3U2VsZWN0Lm9uKHtcclxuICAgICAgICAnZm9jdXMnOiBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgIGlmICgkKCd1bC5zZWxlY3QtZHJvcGRvd24nKS5ub3Qob3B0aW9uc1swXSkuaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgJCgnaW5wdXQuc2VsZWN0LWRyb3Bkb3duJykudHJpZ2dlcignY2xvc2UnKTtcclxuICAgICAgICAgICAgJCh3aW5kb3cpLm9mZignY2xpY2suc2VsZWN0Jyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIW9wdGlvbnMuaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdvcGVuJywgWydmb2N1cyddKTtcclxuICAgICAgICAgICAgdmFyIGxhYmVsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgaWYgKG11bHRpcGxlICYmIGxhYmVsLmluZGV4T2YoJywnKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgbGFiZWwgPSBsYWJlbC5zcGxpdCgnLCcpWzBdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb24gPSBvcHRpb25zLmZpbmQoJ2xpJykuZmlsdGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLnRleHQoKS50b0xvd2VyQ2FzZSgpID09PSBsYWJlbC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICB9KVswXTtcclxuICAgICAgICAgICAgYWN0aXZhdGVPcHRpb24ob3B0aW9ucywgc2VsZWN0ZWRPcHRpb24sIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgJCh3aW5kb3cpLm9mZignY2xpY2suc2VsZWN0Jykub24oJ2NsaWNrLnNlbGVjdCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICBtdWx0aXBsZSAmJiAob3B0aW9uc0hvdmVyIHx8ICRuZXdTZWxlY3QudHJpZ2dlcignY2xvc2UnKSk7XHJcbiAgICAgICAgICAgICAgJCh3aW5kb3cpLm9mZignY2xpY2suc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2NsaWNrJzogZnVuY3Rpb24gKGUpe1xyXG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJG5ld1NlbGVjdC5vbignYmx1cicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICghbXVsdGlwbGUpIHtcclxuICAgICAgICAgICQodGhpcykudHJpZ2dlcignY2xvc2UnKTtcclxuICAgICAgICAgICQod2luZG93KS5vZmYoJ2NsaWNrLnNlbGVjdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvcHRpb25zLmZpbmQoJ2xpLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgb3B0aW9ucy5ob3ZlcihmdW5jdGlvbigpIHtcclxuICAgICAgICBvcHRpb25zSG92ZXIgPSB0cnVlO1xyXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgb3B0aW9uc0hvdmVyID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQWRkIGluaXRpYWwgbXVsdGlwbGUgc2VsZWN0aW9ucy5cclxuICAgICAgaWYgKG11bHRpcGxlKSB7XHJcbiAgICAgICAgJHNlbGVjdC5maW5kKFwib3B0aW9uOnNlbGVjdGVkOm5vdCg6ZGlzYWJsZWQpXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleDtcclxuXHJcbiAgICAgICAgICB0b2dnbGVFbnRyeUZyb21BcnJheSh2YWx1ZXNTZWxlY3RlZCwgaW5kZXgsICRzZWxlY3QpO1xyXG4gICAgICAgICAgb3B0aW9ucy5maW5kKFwibGk6bm90KC5vcHRncm91cClcIikuZXEoaW5kZXgpLmZpbmQoXCI6Y2hlY2tib3hcIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBNYWtlIG9wdGlvbiBhcyBzZWxlY3RlZCBhbmQgc2Nyb2xsIHRvIHNlbGVjdGVkIHBvc2l0aW9uXHJcbiAgICAgICAqIEBwYXJhbSB7alF1ZXJ5fSBjb2xsZWN0aW9uICBTZWxlY3Qgb3B0aW9ucyBqUXVlcnkgZWxlbWVudFxyXG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5ld09wdGlvbiAgZWxlbWVudCBvZiB0aGUgbmV3IG9wdGlvblxyXG4gICAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZpcnN0QWN0aXZhdGlvbiAgSWYgb24gZmlyc3QgYWN0aXZhdGlvbiBvZiBzZWxlY3RcclxuICAgICAgICovXHJcbiAgICAgIHZhciBhY3RpdmF0ZU9wdGlvbiA9IGZ1bmN0aW9uKGNvbGxlY3Rpb24sIG5ld09wdGlvbiwgZmlyc3RBY3RpdmF0aW9uKSB7XHJcbiAgICAgICAgaWYgKG5ld09wdGlvbikge1xyXG4gICAgICAgICAgY29sbGVjdGlvbi5maW5kKCdsaS5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgdmFyIG9wdGlvbiA9ICQobmV3T3B0aW9uKTtcclxuICAgICAgICAgIG9wdGlvbi5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgIGlmICghbXVsdGlwbGUgfHwgISFmaXJzdEFjdGl2YXRpb24pIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5zY3JvbGxUbyhvcHRpb24pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIEFsbG93IHVzZXIgdG8gc2VhcmNoIGJ5IHR5cGluZ1xyXG4gICAgICAvLyB0aGlzIGFycmF5IGlzIGNsZWFyZWQgYWZ0ZXIgMSBzZWNvbmRcclxuICAgICAgdmFyIGZpbHRlclF1ZXJ5ID0gW10sXHJcbiAgICAgICAgICBvbktleURvd24gPSBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgLy8gVEFCIC0gc3dpdGNoIHRvIGFub3RoZXIgaW5wdXRcclxuICAgICAgICAgICAgaWYoZS53aGljaCA9PSA5KXtcclxuICAgICAgICAgICAgICAkbmV3U2VsZWN0LnRyaWdnZXIoJ2Nsb3NlJyk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBUlJPVyBET1dOIFdIRU4gU0VMRUNUIElTIENMT1NFRCAtIG9wZW4gc2VsZWN0IG9wdGlvbnNcclxuICAgICAgICAgICAgaWYoZS53aGljaCA9PSA0MCAmJiAhb3B0aW9ucy5pcygnOnZpc2libGUnKSl7XHJcbiAgICAgICAgICAgICAgJG5ld1NlbGVjdC50cmlnZ2VyKCdvcGVuJyk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBFTlRFUiBXSEVOIFNFTEVDVCBJUyBDTE9TRUQgLSBzdWJtaXQgZm9ybVxyXG4gICAgICAgICAgICBpZihlLndoaWNoID09IDEzICYmICFvcHRpb25zLmlzKCc6dmlzaWJsZScpKXtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENBU0UgV0hFTiBVU0VSIFRZUEUgTEVUVEVSU1xyXG4gICAgICAgICAgICB2YXIgbGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgICAgICAgbm9uTGV0dGVycyA9IFs5LDEzLDI3LDM4LDQwXTtcclxuICAgICAgICAgICAgaWYgKGxldHRlciAmJiAobm9uTGV0dGVycy5pbmRleE9mKGUud2hpY2gpID09PSAtMSkpIHtcclxuICAgICAgICAgICAgICBmaWx0ZXJRdWVyeS5wdXNoKGxldHRlcik7XHJcblxyXG4gICAgICAgICAgICAgIHZhciBzdHJpbmcgPSBmaWx0ZXJRdWVyeS5qb2luKCcnKSxcclxuICAgICAgICAgICAgICAgICAgbmV3T3B0aW9uID0gb3B0aW9ucy5maW5kKCdsaScpLmZpbHRlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS50ZXh0KCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHN0cmluZykgPT09IDA7XHJcbiAgICAgICAgICAgICAgICAgIH0pWzBdO1xyXG5cclxuICAgICAgICAgICAgICBpZiAobmV3T3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZU9wdGlvbihvcHRpb25zLCBuZXdPcHRpb24pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRU5URVIgLSBzZWxlY3Qgb3B0aW9uIGFuZCBjbG9zZSB3aGVuIHNlbGVjdCBvcHRpb25zIGFyZSBvcGVuZWRcclxuICAgICAgICAgICAgaWYgKGUud2hpY2ggPT0gMTMpIHtcclxuICAgICAgICAgICAgICB2YXIgYWN0aXZlT3B0aW9uID0gb3B0aW9ucy5maW5kKCdsaS5zZWxlY3RlZDpub3QoLmRpc2FibGVkKScpWzBdO1xyXG4gICAgICAgICAgICAgIGlmKGFjdGl2ZU9wdGlvbil7XHJcbiAgICAgICAgICAgICAgICAkKGFjdGl2ZU9wdGlvbikudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgICAgIGlmICghbXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgICAgICAgJG5ld1NlbGVjdC50cmlnZ2VyKCdjbG9zZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQVJST1cgRE9XTiAtIG1vdmUgdG8gbmV4dCBub3QgZGlzYWJsZWQgb3B0aW9uXHJcbiAgICAgICAgICAgIGlmIChlLndoaWNoID09IDQwKSB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZmluZCgnbGkuc2VsZWN0ZWQnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIG5ld09wdGlvbiA9IG9wdGlvbnMuZmluZCgnbGkuc2VsZWN0ZWQnKS5uZXh0KCdsaTpub3QoLmRpc2FibGVkKScpWzBdO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdPcHRpb24gPSBvcHRpb25zLmZpbmQoJ2xpOm5vdCguZGlzYWJsZWQpJylbMF07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGFjdGl2YXRlT3B0aW9uKG9wdGlvbnMsIG5ld09wdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEVTQyAtIGNsb3NlIG9wdGlvbnNcclxuICAgICAgICAgICAgaWYgKGUud2hpY2ggPT0gMjcpIHtcclxuICAgICAgICAgICAgICAkbmV3U2VsZWN0LnRyaWdnZXIoJ2Nsb3NlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFSUk9XIFVQIC0gbW92ZSB0byBwcmV2aW91cyBub3QgZGlzYWJsZWQgb3B0aW9uXHJcbiAgICAgICAgICAgIGlmIChlLndoaWNoID09IDM4KSB7XHJcbiAgICAgICAgICAgICAgbmV3T3B0aW9uID0gb3B0aW9ucy5maW5kKCdsaS5zZWxlY3RlZCcpLnByZXYoJ2xpOm5vdCguZGlzYWJsZWQpJylbMF07XHJcbiAgICAgICAgICAgICAgaWYobmV3T3B0aW9uKVxyXG4gICAgICAgICAgICAgICAgYWN0aXZhdGVPcHRpb24ob3B0aW9ucywgbmV3T3B0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQXV0b21hdGljYWx5IGNsZWFuIGZpbHRlciBxdWVyeSBzbyB1c2VyIGNhbiBzZWFyY2ggYWdhaW4gYnkgc3RhcnRpbmcgbGV0dGVyc1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IGZpbHRlclF1ZXJ5ID0gW107IH0sIDEwMDApO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICRuZXdTZWxlY3Qub24oJ2tleWRvd24nLCBvbktleURvd24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlRW50cnlGcm9tQXJyYXkoZW50cmllc0FycmF5LCBlbnRyeUluZGV4LCBzZWxlY3QpIHtcclxuICAgICAgdmFyIGluZGV4ID0gZW50cmllc0FycmF5LmluZGV4T2YoZW50cnlJbmRleCksXHJcbiAgICAgICAgICBub3RBZGRlZCA9IGluZGV4ID09PSAtMTtcclxuXHJcbiAgICAgIGlmIChub3RBZGRlZCkge1xyXG4gICAgICAgIGVudHJpZXNBcnJheS5wdXNoKGVudHJ5SW5kZXgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVudHJpZXNBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxlY3Quc2libGluZ3MoJ3VsLmRyb3Bkb3duLWNvbnRlbnQnKS5maW5kKCdsaTpub3QoLm9wdGdyb3VwKScpLmVxKGVudHJ5SW5kZXgpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgIC8vIHVzZSBub3RBZGRlZCBpbnN0ZWFkIG9mIHRydWUgKHRvIGRldGVjdCBpZiB0aGUgb3B0aW9uIGlzIHNlbGVjdGVkIG9yIG5vdClcclxuICAgICAgc2VsZWN0LmZpbmQoJ29wdGlvbicpLmVxKGVudHJ5SW5kZXgpLnByb3AoJ3NlbGVjdGVkJywgbm90QWRkZWQpO1xyXG4gICAgICBzZXRWYWx1ZVRvSW5wdXQoZW50cmllc0FycmF5LCBzZWxlY3QpO1xyXG5cclxuICAgICAgcmV0dXJuIG5vdEFkZGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFZhbHVlVG9JbnB1dChlbnRyaWVzQXJyYXksIHNlbGVjdCkge1xyXG4gICAgICB2YXIgdmFsdWUgPSAnJztcclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAwLCBjb3VudCA9IGVudHJpZXNBcnJheS5sZW5ndGg7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIHRleHQgPSBzZWxlY3QuZmluZCgnb3B0aW9uJykuZXEoZW50cmllc0FycmF5W2ldKS50ZXh0KCk7XHJcblxyXG4gICAgICAgIGkgPT09IDAgPyB2YWx1ZSArPSB0ZXh0IDogdmFsdWUgKz0gJywgJyArIHRleHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICB2YWx1ZSA9IHNlbGVjdC5maW5kKCdvcHRpb246ZGlzYWJsZWQnKS5lcSgwKS50ZXh0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGVjdC5zaWJsaW5ncygnaW5wdXQuc2VsZWN0LWRyb3Bkb3duJykudmFsKHZhbHVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxufSggalF1ZXJ5ICkpO1xyXG4oZnVuY3Rpb24gKCQpIHtcclxuXHJcbiAgdmFyIG1ldGhvZHMgPSB7XHJcbiAgICBpbml0IDogZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICB2YXIgZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgb25TaG93OiBudWxsLFxyXG4gICAgICAgIHN3aXBlYWJsZTogZmFsc2UsXHJcbiAgICAgICAgcmVzcG9uc2l2ZVRocmVzaG9sZDogSW5maW5pdHksIC8vIGJyZWFrcG9pbnQgZm9yIHN3aXBlYWJsZVxyXG4gICAgICB9O1xyXG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG4gICAgICB2YXIgbmFtZXNwYWNlID0gTWF0ZXJpYWxpemUub2JqZWN0U2VsZWN0b3JTdHJpbmcoJCh0aGlzKSk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGkpIHtcclxuXHJcbiAgICAgIHZhciB1bmlxdWVOYW1lc3BhY2UgPSBuYW1lc3BhY2UraTtcclxuXHJcbiAgICAgIC8vIEZvciBlYWNoIHNldCBvZiB0YWJzLCB3ZSB3YW50IHRvIGtlZXAgdHJhY2sgb2ZcclxuICAgICAgLy8gd2hpY2ggdGFiIGlzIGFjdGl2ZSBhbmQgaXRzIGFzc29jaWF0ZWQgY29udGVudFxyXG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgd2luZG93X3dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcblxyXG4gICAgICB2YXIgJGFjdGl2ZSwgJGNvbnRlbnQsICRsaW5rcyA9ICR0aGlzLmZpbmQoJ2xpLnRhYiBhJyksXHJcbiAgICAgICAgICAkdGFic193aWR0aCA9ICR0aGlzLndpZHRoKCksXHJcbiAgICAgICAgICAkdGFic19jb250ZW50ID0gJCgpLFxyXG4gICAgICAgICAgJHRhYnNfd3JhcHBlcixcclxuICAgICAgICAgICR0YWJfd2lkdGggPSBNYXRoLm1heCgkdGFic193aWR0aCwgJHRoaXNbMF0uc2Nyb2xsV2lkdGgpIC8gJGxpbmtzLmxlbmd0aCxcclxuICAgICAgICAgICRpbmRpY2F0b3IsXHJcbiAgICAgICAgICBpbmRleCA9IDAsXHJcbiAgICAgICAgICBwcmV2X2luZGV4ID0gMCxcclxuICAgICAgICAgIGNsaWNrZWQgPSBmYWxzZSxcclxuICAgICAgICAgIGNsaWNrZWRUaW1lb3V0LFxyXG4gICAgICAgICAgdHJhbnNpdGlvbiA9IDMwMDtcclxuXHJcblxyXG4gICAgICAvLyBGaW5kcyByaWdodCBhdHRyaWJ1dGUgZm9yIGluZGljYXRvciBiYXNlZCBvbiBhY3RpdmUgdGFiLlxyXG4gICAgICAvLyBlbDogalF1ZXJ5IE9iamVjdFxyXG4gICAgICAgIHZhciBjYWxjUmlnaHRQb3MgPSBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgcmV0dXJuIE1hdGguY2VpbCgkdGFic193aWR0aCAtIGVsLnBvc2l0aW9uKCkubGVmdCAtIGVsWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gJHRoaXMuc2Nyb2xsTGVmdCgpKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIEZpbmRzIGxlZnQgYXR0cmlidXRlIGZvciBpbmRpY2F0b3IgYmFzZWQgb24gYWN0aXZlIHRhYi5cclxuICAgICAgLy8gZWw6IGpRdWVyeSBPYmplY3RcclxuICAgICAgdmFyIGNhbGNMZWZ0UG9zID0gZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihlbC5wb3NpdGlvbigpLmxlZnQgKyAkdGhpcy5zY3JvbGxMZWZ0KCkpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gQW5pbWF0ZXMgSW5kaWNhdG9yIHRvIGFjdGl2ZSB0YWIuXHJcbiAgICAgIC8vIHByZXZfaW5kZXg6IE51bWJlclxyXG4gICAgICB2YXIgYW5pbWF0ZUluZGljYXRvciA9IGZ1bmN0aW9uKHByZXZfaW5kZXgpIHtcclxuICAgICAgICBpZiAoKGluZGV4IC0gcHJldl9pbmRleCkgPj0gMCkge1xyXG4gICAgICAgICAgJGluZGljYXRvci52ZWxvY2l0eSh7XCJyaWdodFwiOiBjYWxjUmlnaHRQb3MoJGFjdGl2ZSkgfSwgeyBkdXJhdGlvbjogdHJhbnNpdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcclxuICAgICAgICAgICRpbmRpY2F0b3IudmVsb2NpdHkoe1wibGVmdFwiOiBjYWxjTGVmdFBvcygkYWN0aXZlKSB9LCB7ZHVyYXRpb246IHRyYW5zaXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLCBkZWxheTogOTB9KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRpbmRpY2F0b3IudmVsb2NpdHkoe1wibGVmdFwiOiBjYWxjTGVmdFBvcygkYWN0aXZlKSB9LCB7IGR1cmF0aW9uOiB0cmFuc2l0aW9uLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xyXG4gICAgICAgICAgJGluZGljYXRvci52ZWxvY2l0eSh7XCJyaWdodFwiOiBjYWxjUmlnaHRQb3MoJGFjdGl2ZSkgfSwge2R1cmF0aW9uOiB0cmFuc2l0aW9uLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJywgZGVsYXk6IDkwfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gQ2hhbmdlIHN3aXBlYWJsZSBhY2NvcmRpbmcgdG8gcmVzcG9uc2l2ZSB0aHJlc2hvbGRcclxuICAgICAgaWYgKG9wdGlvbnMuc3dpcGVhYmxlKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd193aWR0aCA+IG9wdGlvbnMucmVzcG9uc2l2ZVRocmVzaG9sZCkge1xyXG4gICAgICAgICAgb3B0aW9ucy5zd2lwZWFibGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAvLyBJZiB0aGUgbG9jYXRpb24uaGFzaCBtYXRjaGVzIG9uZSBvZiB0aGUgbGlua3MsIHVzZSB0aGF0IGFzIHRoZSBhY3RpdmUgdGFiLlxyXG4gICAgICAkYWN0aXZlID0gJCgkbGlua3MuZmlsdGVyKCdbaHJlZj1cIicrbG9jYXRpb24uaGFzaCsnXCJdJykpO1xyXG5cclxuICAgICAgLy8gSWYgbm8gbWF0Y2ggaXMgZm91bmQsIHVzZSB0aGUgZmlyc3QgbGluayBvciBhbnkgd2l0aCBjbGFzcyAnYWN0aXZlJyBhcyB0aGUgaW5pdGlhbCBhY3RpdmUgdGFiLlxyXG4gICAgICBpZiAoJGFjdGl2ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAkYWN0aXZlID0gJCh0aGlzKS5maW5kKCdsaS50YWIgYS5hY3RpdmUnKS5maXJzdCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgkYWN0aXZlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICRhY3RpdmUgPSAkKHRoaXMpLmZpbmQoJ2xpLnRhYiBhJykuZmlyc3QoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJGFjdGl2ZS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgIGluZGV4ID0gJGxpbmtzLmluZGV4KCRhY3RpdmUpO1xyXG4gICAgICBpZiAoaW5kZXggPCAwKSB7XHJcbiAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJGFjdGl2ZVswXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgJGNvbnRlbnQgPSAkKCRhY3RpdmVbMF0uaGFzaCk7XHJcbiAgICAgICAgJGNvbnRlbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhcHBlbmQgaW5kaWNhdG9yIHRoZW4gc2V0IGluZGljYXRvciB3aWR0aCB0byB0YWIgd2lkdGhcclxuICAgICAgaWYgKCEkdGhpcy5maW5kKCcuaW5kaWNhdG9yJykubGVuZ3RoKSB7XHJcbiAgICAgICAgJHRoaXMuYXBwZW5kKCc8bGkgY2xhc3M9XCJpbmRpY2F0b3JcIj48L2xpPicpO1xyXG4gICAgICB9XHJcbiAgICAgICRpbmRpY2F0b3IgPSAkdGhpcy5maW5kKCcuaW5kaWNhdG9yJyk7XHJcblxyXG4gICAgICAvLyB3ZSBtYWtlIHN1cmUgdGhhdCB0aGUgaW5kaWNhdG9yIGlzIGF0IHRoZSBlbmQgb2YgdGhlIHRhYnNcclxuICAgICAgJHRoaXMuYXBwZW5kKCRpbmRpY2F0b3IpO1xyXG5cclxuICAgICAgaWYgKCR0aGlzLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAvLyAkaW5kaWNhdG9yLmNzcyh7XCJyaWdodFwiOiAkdGFic193aWR0aCAtICgoaW5kZXggKyAxKSAqICR0YWJfd2lkdGgpfSk7XHJcbiAgICAgICAgLy8gJGluZGljYXRvci5jc3Moe1wibGVmdFwiOiBpbmRleCAqICR0YWJfd2lkdGh9KTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgJGluZGljYXRvci5jc3Moe1wicmlnaHRcIjogY2FsY1JpZ2h0UG9zKCRhY3RpdmUpIH0pO1xyXG4gICAgICAgICAgJGluZGljYXRvci5jc3Moe1wibGVmdFwiOiBjYWxjTGVmdFBvcygkYWN0aXZlKSB9KTtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgfVxyXG4gICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUudGFicy0nK3VuaXF1ZU5hbWVzcGFjZSkub24oJ3Jlc2l6ZS50YWJzLScrdW5pcXVlTmFtZXNwYWNlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHRhYnNfd2lkdGggPSAkdGhpcy53aWR0aCgpO1xyXG4gICAgICAgICR0YWJfd2lkdGggPSBNYXRoLm1heCgkdGFic193aWR0aCwgJHRoaXNbMF0uc2Nyb2xsV2lkdGgpIC8gJGxpbmtzLmxlbmd0aDtcclxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XHJcbiAgICAgICAgICBpbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkdGFiX3dpZHRoICE9PSAwICYmICR0YWJzX3dpZHRoICE9PSAwKSB7XHJcbiAgICAgICAgICAkaW5kaWNhdG9yLmNzcyh7XCJyaWdodFwiOiBjYWxjUmlnaHRQb3MoJGFjdGl2ZSkgfSk7XHJcbiAgICAgICAgICAkaW5kaWNhdG9yLmNzcyh7XCJsZWZ0XCI6IGNhbGNMZWZ0UG9zKCRhY3RpdmUpIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBJbml0aWFsaXplIFRhYnMgQ29udGVudC5cclxuICAgICAgaWYgKG9wdGlvbnMuc3dpcGVhYmxlKSB7XHJcbiAgICAgICAgLy8gVE9ETzogRHVwbGljYXRlIGNhbGxzIHdpdGggc3dpcGVhYmxlPyBoYW5kbGUgbXVsdGlwbGUgZGl2IHdyYXBwaW5nLlxyXG4gICAgICAgICRsaW5rcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciAkY3Vycl9jb250ZW50ID0gJChNYXRlcmlhbGl6ZS5lc2NhcGVIYXNoKHRoaXMuaGFzaCkpO1xyXG4gICAgICAgICAgJGN1cnJfY29udGVudC5hZGRDbGFzcygnY2Fyb3VzZWwtaXRlbScpO1xyXG4gICAgICAgICAgJHRhYnNfY29udGVudCA9ICR0YWJzX2NvbnRlbnQuYWRkKCRjdXJyX2NvbnRlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICR0YWJzX3dyYXBwZXIgPSAkdGFic19jb250ZW50LndyYXBBbGwoJzxkaXYgY2xhc3M9XCJ0YWJzLWNvbnRlbnQgY2Fyb3VzZWxcIj48L2Rpdj4nKTtcclxuICAgICAgICAkdGFic19jb250ZW50LmNzcygnZGlzcGxheScsICcnKTtcclxuICAgICAgICAkKCcudGFicy1jb250ZW50LmNhcm91c2VsJykuY2Fyb3VzZWwoe1xyXG4gICAgICAgICAgZnVsbFdpZHRoOiB0cnVlLFxyXG4gICAgICAgICAgbm9XcmFwOiB0cnVlLFxyXG4gICAgICAgICAgb25DeWNsZVRvOiBmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgIGlmICghY2xpY2tlZCkge1xyXG4gICAgICAgICAgICAgIHZhciBwcmV2X2luZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgaW5kZXggPSAkdGFic193cmFwcGVyLmluZGV4KGl0ZW0pO1xyXG4gICAgICAgICAgICAgICRhY3RpdmUucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICRhY3RpdmUgPSAkbGlua3MuZXEoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICRhY3RpdmUuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGVJbmRpY2F0b3IocHJldl9pbmRleCk7XHJcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZihvcHRpb25zLm9uU2hvdykgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5vblNob3cuY2FsbCgkdGhpc1swXSwgJGNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBIaWRlIHRoZSByZW1haW5pbmcgY29udGVudFxyXG4gICAgICAgICRsaW5rcy5ub3QoJGFjdGl2ZSkuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkKE1hdGVyaWFsaXplLmVzY2FwZUhhc2godGhpcy5oYXNoKSkuaGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLy8gQmluZCB0aGUgY2xpY2sgZXZlbnQgaGFuZGxlclxyXG4gICAgICAkdGhpcy5vZmYoJ2NsaWNrLnRhYnMnKS5vbignY2xpY2sudGFicycsICdhJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBY3QgYXMgcmVndWxhciBsaW5rIGlmIHRhcmdldCBhdHRyaWJ1dGUgaXMgc3BlY2lmaWVkLlxyXG4gICAgICAgIGlmICghISQodGhpcykuYXR0cihcInRhcmdldFwiKSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xpY2tlZCA9IHRydWU7XHJcbiAgICAgICAgJHRhYnNfd2lkdGggPSAkdGhpcy53aWR0aCgpO1xyXG4gICAgICAgICR0YWJfd2lkdGggPSBNYXRoLm1heCgkdGFic193aWR0aCwgJHRoaXNbMF0uc2Nyb2xsV2lkdGgpIC8gJGxpbmtzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgLy8gTWFrZSB0aGUgb2xkIHRhYiBpbmFjdGl2ZS5cclxuICAgICAgICAkYWN0aXZlLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB2YXIgJG9sZENvbnRlbnQgPSAkY29udGVudFxyXG5cclxuICAgICAgICAvLyBVcGRhdGUgdGhlIHZhcmlhYmxlcyB3aXRoIHRoZSBuZXcgbGluayBhbmQgY29udGVudFxyXG4gICAgICAgICRhY3RpdmUgPSAkKHRoaXMpO1xyXG4gICAgICAgICRjb250ZW50ID0gJChNYXRlcmlhbGl6ZS5lc2NhcGVIYXNoKHRoaXMuaGFzaCkpO1xyXG4gICAgICAgICRsaW5rcyA9ICR0aGlzLmZpbmQoJ2xpLnRhYiBhJyk7XHJcbiAgICAgICAgdmFyIGFjdGl2ZVJlY3QgPSAkYWN0aXZlLnBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIE1ha2UgdGhlIHRhYiBhY3RpdmUuXHJcbiAgICAgICAgJGFjdGl2ZS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgcHJldl9pbmRleCA9IGluZGV4O1xyXG4gICAgICAgIGluZGV4ID0gJGxpbmtzLmluZGV4KCQodGhpcykpO1xyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcclxuICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2hhbmdlIHVybCB0byBjdXJyZW50IHRhYlxyXG4gICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJGFjdGl2ZS5hdHRyKCdocmVmJyk7XHJcblxyXG4gICAgICAgIC8vIFN3YXAgY29udGVudFxyXG4gICAgICAgIGlmIChvcHRpb25zLnN3aXBlYWJsZSkge1xyXG4gICAgICAgICAgaWYgKCR0YWJzX2NvbnRlbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICR0YWJzX2NvbnRlbnQuY2Fyb3VzZWwoJ3NldCcsIGluZGV4LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICBpZiAodHlwZW9mKG9wdGlvbnMub25TaG93KSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLm9uU2hvdy5jYWxsKCR0aGlzWzBdLCAkY29udGVudCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKCRjb250ZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgJGNvbnRlbnQuc2hvdygpO1xyXG4gICAgICAgICAgICAkY29udGVudC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Yob3B0aW9ucy5vblNob3cpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICBvcHRpb25zLm9uU2hvdy5jYWxsKHRoaXMsICRjb250ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICgkb2xkQ29udGVudCAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgISRvbGRDb250ZW50LmlzKCRjb250ZW50KSkge1xyXG4gICAgICAgICAgICAkb2xkQ29udGVudC5oaWRlKCk7XHJcbiAgICAgICAgICAgICRvbGRDb250ZW50LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJlc2V0IGNsaWNrZWQgc3RhdGVcclxuICAgICAgICBjbGlja2VkVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgY2xpY2tlZCA9IGZhbHNlOyB9LCB0cmFuc2l0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGluZGljYXRvclxyXG4gICAgICAgIGFuaW1hdGVJbmRpY2F0b3IocHJldl9pbmRleCk7XHJcblxyXG4gICAgICAgIC8vIFByZXZlbnQgdGhlIGFuY2hvcidzIGRlZmF1bHQgY2xpY2sgYWN0aW9uXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIH0sXHJcbiAgICBzZWxlY3RfdGFiIDogZnVuY3Rpb24oIGlkICkge1xyXG4gICAgICB0aGlzLmZpbmQoJ2FbaHJlZj1cIiMnICsgaWQgKyAnXCJdJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkLmZuLnRhYnMgPSBmdW5jdGlvbihtZXRob2RPck9wdGlvbnMpIHtcclxuICAgIGlmICggbWV0aG9kc1ttZXRob2RPck9wdGlvbnNdICkge1xyXG4gICAgICByZXR1cm4gbWV0aG9kc1sgbWV0aG9kT3JPcHRpb25zIF0uYXBwbHkoIHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKSk7XHJcbiAgICB9IGVsc2UgaWYgKCB0eXBlb2YgbWV0aG9kT3JPcHRpb25zID09PSAnb2JqZWN0JyB8fCAhIG1ldGhvZE9yT3B0aW9ucyApIHtcclxuICAgICAgLy8gRGVmYXVsdCB0byBcImluaXRcIlxyXG4gICAgICByZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQuZXJyb3IoICdNZXRob2QgJyArICBtZXRob2RPck9wdGlvbnMgKyAnIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS50YWJzJyApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAkKCd1bC50YWJzJykudGFicygpO1xyXG4gIH0pO1xyXG59KCBqUXVlcnkgKSk7XHJcbihmdW5jdGlvbigkLCBWZWwpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGxldCBfZGVmYXVsdHMgPSB7XHJcbiAgICBvcGFjaXR5OiAwLjg0LFxyXG4gICAgaW5EdXJhdGlvbjogMjUwLFxyXG4gICAgb3V0RHVyYXRpb246IDI1MCxcclxuICAgIHJlYWR5OiB1bmRlZmluZWQsXHJcbiAgICBjb21wbGV0ZTogdW5kZWZpbmVkLFxyXG4gICAgZGlzbWlzc2libGU6IHRydWUsXHJcbiAgICBzdGFydGluZ1RvcDogJzElJyxcclxuICAgIGVuZGluZ1RvcDogJzElJ1xyXG4gIH07XHJcblxyXG5cclxuICAvKipcclxuICAgKiBAY2xhc3NcclxuICAgKlxyXG4gICAqL1xyXG4gIGNsYXNzIE1vZGFsIHtcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0IE1vZGFsIGluc3RhbmNlIGFuZCBzZXQgdXAgb3ZlcmxheVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigkZWwsIG9wdGlvbnMpIHtcclxuXHJcbiAgICAgIC8vIElmIGV4aXN0cywgZGVzdHJveSBhbmQgcmVpbml0aWFsaXplXHJcbiAgICAgIGlmICghISRlbFswXS5NX01vZGFsKSB7XHJcbiAgICAgICAgJGVsWzBdLk1fTW9kYWwuZGVzdHJveSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogVGhlIGpRdWVyeSBlbGVtZW50XHJcbiAgICAgICAqIEB0eXBlIHtqUXVlcnl9XHJcbiAgICAgICAqL1xyXG4gICAgICB0aGlzLiRlbCA9ICRlbDtcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBPcHRpb25zIGZvciB0aGUgbW9kYWxcclxuICAgICAgICogQG1lbWJlciBNb2RhbCNvcHRpb25zXHJcbiAgICAgICAqIEBwcm9wIHtOdW1iZXJ9IFtvcGFjaXR5PTAuODRdIC0gT3BhY2l0eSBvZiB0aGUgbW9kYWwgb3ZlcmxheVxyXG4gICAgICAgKiBAcHJvcCB7TnVtYmVyfSBbaW5EdXJhdGlvbj0yNTBdIC0gTGVuZ3RoIGluIG1zIG9mIGVudGVyIHRyYW5zaXRpb25cclxuICAgICAgICogQHByb3Age051bWJlcn0gW291dER1cmF0aW9uPTI1MF0gLSBMZW5ndGggaW4gbXMgb2YgZXhpdCB0cmFuc2l0aW9uXHJcbiAgICAgICAqIEBwcm9wIHtGdW5jdGlvbn0gcmVhZHkgLSBDYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiBtb2RhbCBpcyBmaW5pc2hlZCBlbnRlcmluZ1xyXG4gICAgICAgKiBAcHJvcCB7RnVuY3Rpb259IGNvbXBsZXRlIC0gQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gbW9kYWwgaXMgZmluaXNoZWQgZXhpdGluZ1xyXG4gICAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gW2Rpc21pc3NpYmxlPXRydWVdIC0gQWxsb3cgbW9kYWwgdG8gYmUgZGlzbWlzc2VkIGJ5IGtleWJvYXJkIG9yIG92ZXJsYXkgY2xpY2tcclxuICAgICAgICogQHByb3Age1N0cmluZ30gW3N0YXJ0aW5nVG9wPSc0JSddIC0gc3RhcnRpbmdUb3BcclxuICAgICAgICogQHByb3Age1N0cmluZ30gW2VuZGluZ1RvcD0nMTAlJ10gLSBlbmRpbmdUb3BcclxuICAgICAgICovXHJcbiAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBNb2RhbC5kZWZhdWx0cywgb3B0aW9ucyk7XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogRGVzY3JpYmVzIG9wZW4vY2xvc2Ugc3RhdGUgb2YgbW9kYWxcclxuICAgICAgICogQHR5cGUge0Jvb2xlYW59XHJcbiAgICAgICAqL1xyXG4gICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy4kZWxbMF0uTV9Nb2RhbCA9IHRoaXM7XHJcbiAgICAgIHRoaXMuaWQgPSAkZWwuYXR0cignaWQnKTtcclxuICAgICAgdGhpcy5vcGVuaW5nVHJpZ2dlciA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy4kb3ZlcmxheSA9ICQoJzxkaXYgY2xhc3M9XCJtb2RhbC1vdmVybGF5XCI+PC9kaXY+Jyk7XHJcblxyXG4gICAgICBNb2RhbC5faW5jcmVtZW50Kys7XHJcbiAgICAgIE1vZGFsLl9jb3VudCsrO1xyXG4gICAgICB0aGlzLiRvdmVybGF5WzBdLnN0eWxlLnpJbmRleCA9IDEwMDAgKyBNb2RhbC5faW5jcmVtZW50ICogMjtcclxuICAgICAgdGhpcy4kZWxbMF0uc3R5bGUuekluZGV4ID0gMTAwMCArIE1vZGFsLl9pbmNyZW1lbnQgKiAyICsgMTtcclxuICAgICAgdGhpcy5zZXR1cEV2ZW50SGFuZGxlcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGRlZmF1bHRzKCkge1xyXG4gICAgICByZXR1cm4gX2RlZmF1bHRzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbml0KCRlbHMsIG9wdGlvbnMpIHtcclxuICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAkZWxzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgYXJyLnB1c2gobmV3IE1vZGFsKCQodGhpcyksIG9wdGlvbnMpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgSW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGVhcmRvd24gY29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRIYW5kbGVycygpO1xyXG4gICAgICB0aGlzLiRlbFswXS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcclxuICAgICAgaWYgKCEhdGhpcy4kb3ZlcmxheVswXS5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgdGhpcy4kb3ZlcmxheVswXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuJG92ZXJsYXlbMF0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuJGVsWzBdLk1fTW9kYWwgPSB1bmRlZmluZWQ7XHJcbiAgICAgIE1vZGFsLl9jb3VudC0tO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0dXAgRXZlbnQgSGFuZGxlcnNcclxuICAgICAqL1xyXG4gICAgc2V0dXBFdmVudEhhbmRsZXJzKCkge1xyXG4gICAgICB0aGlzLmhhbmRsZU92ZXJsYXlDbGlja0JvdW5kID0gdGhpcy5oYW5kbGVPdmVybGF5Q2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5oYW5kbGVNb2RhbENsb3NlQ2xpY2tCb3VuZCA9IHRoaXMuaGFuZGxlTW9kYWxDbG9zZUNsaWNrLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICBpZiAoTW9kYWwuX2NvdW50ID09PSAxKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlVHJpZ2dlckNsaWNrKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRvdmVybGF5WzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdmVybGF5Q2xpY2tCb3VuZCk7XHJcbiAgICAgIHRoaXMuJGVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVNb2RhbENsb3NlQ2xpY2tCb3VuZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgRXZlbnQgSGFuZGxlcnNcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlRXZlbnRIYW5kbGVycygpIHtcclxuICAgICAgaWYgKE1vZGFsLl9jb3VudCA9PT0gMCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVRyaWdnZXJDbGljayk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy4kb3ZlcmxheVswXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlT3ZlcmxheUNsaWNrQm91bmQpO1xyXG4gICAgICB0aGlzLiRlbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlTW9kYWxDbG9zZUNsaWNrQm91bmQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIFRyaWdnZXIgQ2xpY2tcclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcclxuICAgICAqL1xyXG4gICAgaGFuZGxlVHJpZ2dlckNsaWNrKGUpIHtcclxuICAgICAgbGV0ICR0cmlnZ2VyID0gICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5tb2RhbC10cmlnZ2VyJyk7XHJcbiAgICAgIGlmIChlLnRhcmdldCAmJiAkdHJpZ2dlci5sZW5ndGgpIHtcclxuICAgICAgICBsZXQgbW9kYWxJZCA9ICR0cmlnZ2VyWzBdLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgIGlmIChtb2RhbElkKSB7XHJcbiAgICAgICAgICBtb2RhbElkID0gbW9kYWxJZC5zbGljZSgxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbW9kYWxJZCA9ICR0cmlnZ2VyWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1vZGFsSW5zdGFuY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2RhbElkKS5NX01vZGFsO1xyXG4gICAgICAgIGlmIChtb2RhbEluc3RhbmNlKSB7XHJcbiAgICAgICAgICBtb2RhbEluc3RhbmNlLm9wZW4oJHRyaWdnZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBPdmVybGF5IENsaWNrXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZU92ZXJsYXlDbGljaygpIHtcclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXNtaXNzaWJsZSkge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIE1vZGFsIENsb3NlIENsaWNrXHJcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZU1vZGFsQ2xvc2VDbGljayhlKSB7XHJcbiAgICAgIGxldCAkY2xvc2VUcmlnZ2VyID0gICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5tb2RhbC1jbG9zZScpO1xyXG4gICAgICBpZiAoZS50YXJnZXQgJiYgJGNsb3NlVHJpZ2dlci5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBLZXlkb3duXHJcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZUtleWRvd24oZSkge1xyXG4gICAgICAvLyBFU0Mga2V5XHJcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3ICYmIHRoaXMub3B0aW9ucy5kaXNtaXNzaWJsZSkge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW5pbWF0ZSBpbiBtb2RhbFxyXG4gICAgICovXHJcbiAgICBhbmltYXRlSW4oKSB7XHJcbiAgICAgIC8vIFNldCBpbml0aWFsIHN0eWxlc1xyXG4gICAgICAkLmV4dGVuZCh0aGlzLiRlbFswXS5zdHlsZSwge1xyXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICB9KTtcclxuICAgICAgJC5leHRlbmQodGhpcy4kb3ZlcmxheVswXS5zdHlsZSwge1xyXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEFuaW1hdGUgb3ZlcmxheVxyXG4gICAgICBWZWwoXHJcbiAgICAgICAgdGhpcy4kb3ZlcmxheVswXSxcclxuICAgICAgICB7b3BhY2l0eTogdGhpcy5vcHRpb25zLm9wYWNpdHl9LFxyXG4gICAgICAgIHtkdXJhdGlvbjogdGhpcy5vcHRpb25zLmluRHVyYXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzZTogJ2Vhc2VPdXRDdWJpYyd9XHJcbiAgICAgICk7XHJcblxyXG5cclxuICAgICAgLy8gRGVmaW5lIG1vZGFsIGFuaW1hdGlvbiBvcHRpb25zXHJcbiAgICAgIGxldCBlbnRlclZlbG9jaXR5T3B0aW9ucyA9IHtcclxuICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLmluRHVyYXRpb24sXHJcbiAgICAgICAgcXVldWU6IGZhbHNlLFxyXG4gICAgICAgIGVhc2U6ICdlYXNlT3V0Q3ViaWMnLFxyXG4gICAgICAgIC8vIEhhbmRsZSBtb2RhbCByZWFkeSBjYWxsYmFja1xyXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mKHRoaXMub3B0aW9ucy5yZWFkeSkgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJlYWR5LmNhbGwodGhpcywgdGhpcy4kZWwsIHRoaXMub3BlbmluZ1RyaWdnZXIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIEJvdHRvbSBzaGVldCBhbmltYXRpb25cclxuICAgICAgaWYgKHRoaXMuJGVsWzBdLmNsYXNzTGlzdC5jb250YWlucygnYm90dG9tLXNoZWV0JykpIHtcclxuICAgICAgICBWZWwoXHJcbiAgICAgICAgICB0aGlzLiRlbFswXSxcclxuICAgICAgICAgIHtib3R0b206IDAsIG9wYWNpdHk6IDF9LFxyXG4gICAgICAgICAgZW50ZXJWZWxvY2l0eU9wdGlvbnMpO1xyXG5cclxuICAgICAgLy8gTm9ybWFsIG1vZGFsIGFuaW1hdGlvblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFZlbC5ob29rKHRoaXMuJGVsWzBdLCAnc2NhbGVYJywgMC43KTtcclxuICAgICAgICBWZWwoXHJcbiAgICAgICAgICB0aGlzLiRlbFswXSxcclxuICAgICAgICAgIHtvcGFjaXR5OiAxLCBzY2FsZVg6IDF9LFxyXG4gICAgICAgICAgZW50ZXJWZWxvY2l0eU9wdGlvbnNcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbmltYXRlIG91dCBtb2RhbFxyXG4gICAgICovXHJcbiAgICBhbmltYXRlT3V0KCkge1xyXG4gICAgICAvLyBBbmltYXRlIG92ZXJsYXlcclxuICAgICAgVmVsKFxyXG4gICAgICAgIHRoaXMuJG92ZXJsYXlbMF0sXHJcbiAgICAgICAgeyBvcGFjaXR5OiAwfSxcclxuICAgICAgICB7ZHVyYXRpb246IHRoaXMub3B0aW9ucy5vdXREdXJhdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNlOiAnZWFzZU91dFF1YXJ0J31cclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIERlZmluZSBtb2RhbCBhbmltYXRpb24gb3B0aW9uc1xyXG4gICAgICBsZXQgZXhpdFZlbG9jaXR5T3B0aW9ucyA9IHtcclxuICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLm91dER1cmF0aW9uLFxyXG4gICAgICAgIHF1ZXVlOiBmYWxzZSxcclxuICAgICAgICBlYXNlOiAnZWFzZU91dEN1YmljJyxcclxuICAgICAgICAvLyBIYW5kbGUgbW9kYWwgcmVhZHkgY2FsbGJhY2tcclxuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy4kZWxbMF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgIC8vIENhbGwgY29tcGxldGUgY2FsbGJhY2tcclxuICAgICAgICAgIGlmICh0eXBlb2YodGhpcy5vcHRpb25zLmNvbXBsZXRlKSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY29tcGxldGUuY2FsbCh0aGlzLCB0aGlzLiRlbCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLiRvdmVybGF5WzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy4kb3ZlcmxheVswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gQm90dG9tIHNoZWV0IGFuaW1hdGlvblxyXG4gICAgICBpZiAodGhpcy4kZWxbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdib3R0b20tc2hlZXQnKSkge1xyXG4gICAgICAgIFZlbChcclxuICAgICAgICAgIHRoaXMuJGVsWzBdLFxyXG4gICAgICAgICAge2JvdHRvbTogJy0xMDAlJywgb3BhY2l0eTogMH0sXHJcbiAgICAgICAgICBleGl0VmVsb2NpdHlPcHRpb25zXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgIC8vIE5vcm1hbCBtb2RhbCBhbmltYXRpb25cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBWZWwoXHJcbiAgICAgICAgICB0aGlzLiRlbFswXSxcclxuICAgICAgICAgIHtvcGFjaXR5OiAwLCBzY2FsZVg6IDAuN30sXHJcbiAgICAgICAgICBleGl0VmVsb2NpdHlPcHRpb25zXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9wZW4gTW9kYWxcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSBbJHRyaWdnZXJdXHJcbiAgICAgKi9cclxuICAgIG9wZW4oJHRyaWdnZXIpIHtcclxuICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XHJcbiAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICB0aGlzLiRlbFswXS5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgIGJvZHkuYXBwZW5kQ2hpbGQodGhpcy4kb3ZlcmxheVswXSk7XHJcblxyXG4gICAgICAvLyBTZXQgb3BlbmluZyB0cmlnZ2VyLCB1bmRlZmluZWQgaW5kaWNhdGVzIG1vZGFsIHdhcyBvcGVuZWQgYnkgamF2YXNjcmlwdFxyXG4gICAgICB0aGlzLm9wZW5pbmdUcmlnZ2VyID0gISEkdHJpZ2dlciA/ICR0cmlnZ2VyIDogdW5kZWZpbmVkO1xyXG5cclxuXHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzbWlzc2libGUpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZUtleWRvd25Cb3VuZCA9IHRoaXMuaGFuZGxlS2V5ZG93bi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd25Cb3VuZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYW5pbWF0ZUluKCk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsb3NlIE1vZGFsXHJcbiAgICAgKi9cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLiRlbFswXS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuXHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzbWlzc2libGUpIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duQm91bmQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmFuaW1hdGVPdXQoKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHN0YXRpY1xyXG4gICAqIEBtZW1iZXJvZiBNb2RhbFxyXG4gICAqL1xyXG4gIE1vZGFsLl9pbmNyZW1lbnQgPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBAc3RhdGljXHJcbiAgICogQG1lbWJlcm9mIE1vZGFsXHJcbiAgICovXHJcbiAgTW9kYWwuX2NvdW50ID0gMDtcclxuXHJcbiAgTWF0ZXJpYWxpemUuTW9kYWwgPSBNb2RhbDtcclxuXHJcbiAgJC5mbi5tb2RhbCA9IGZ1bmN0aW9uKG1ldGhvZE9yT3B0aW9ucykge1xyXG4gICAgLy8gQ2FsbCBwbHVnaW4gbWV0aG9kIGlmIHZhbGlkIG1ldGhvZCBuYW1lIGlzIHBhc3NlZCBpblxyXG4gICAgaWYgKE1vZGFsLnByb3RvdHlwZVttZXRob2RPck9wdGlvbnNdKSB7XHJcbiAgICAgIC8vIEdldHRlciBtZXRob2RzXHJcbiAgICAgIGlmIChtZXRob2RPck9wdGlvbnMuc2xpY2UoMCwzKSA9PT0gJ2dldCcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maXJzdCgpWzBdLk1fTW9kYWxbbWV0aG9kT3JPcHRpb25zXSgpO1xyXG5cclxuICAgICAgLy8gVm9pZCBtZXRob2RzXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHRoaXMuTV9Nb2RhbFttZXRob2RPck9wdGlvbnNdKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAvLyBJbml0aWFsaXplIHBsdWdpbiBpZiBvcHRpb25zIG9yIG5vIGFyZ3VtZW50IGlzIHBhc3NlZCBpblxyXG4gICAgfSBlbHNlIGlmICggdHlwZW9mIG1ldGhvZE9yT3B0aW9ucyA9PT0gJ29iamVjdCcgfHwgISBtZXRob2RPck9wdGlvbnMgKSB7XHJcbiAgICAgIE1vZGFsLmluaXQodGhpcywgYXJndW1lbnRzWzBdKTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgLy8gUmV0dXJuIGVycm9yIGlmIGFuIHVucmVjb2duaXplZCAgbWV0aG9kIG5hbWUgaXMgcGFzc2VkIGluXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkLmVycm9yKGBNZXRob2QgJHttZXRob2RPck9wdGlvbnN9IGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS5tb2RhbGApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG59KShqUXVlcnksIE1hdGVyaWFsaXplLlZlbCk7XHJcbihmdW5jdGlvbiAoJCkge1xyXG4gICAgJC5mbi50b29sdGlwID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgdmFyIHRpbWVvdXQgPSBudWxsLFxyXG4gICAgICBtYXJnaW4gPSA1O1xyXG5cclxuICAgICAgLy8gRGVmYXVsdHNcclxuICAgICAgdmFyIGRlZmF1bHRzID0ge1xyXG4gICAgICAgIGRlbGF5OiAzNTAsXHJcbiAgICAgICAgdG9vbHRpcDogJycsXHJcbiAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxyXG4gICAgICAgIGh0bWw6IGZhbHNlXHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBSZW1vdmUgdG9vbHRpcCBmcm9tIHRoZSBhY3RpdmF0b3JcclxuICAgICAgaWYgKG9wdGlvbnMgPT09IFwicmVtb3ZlXCIpIHtcclxuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAkKCcjJyArICQodGhpcykuYXR0cignZGF0YS10b29sdGlwLWlkJykpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdkYXRhLXRvb2x0aXAtaWQnKTtcclxuICAgICAgICAgICQodGhpcykub2ZmKCdtb3VzZWVudGVyLnRvb2x0aXAgbW91c2VsZWF2ZS50b29sdGlwJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgdG9vbHRpcElkID0gTWF0ZXJpYWxpemUuZ3VpZCgpO1xyXG4gICAgICAgIHZhciBvcmlnaW4gPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBEZXN0cm95IG9sZCB0b29sdGlwXHJcbiAgICAgICAgaWYgKG9yaWdpbi5hdHRyKCdkYXRhLXRvb2x0aXAtaWQnKSkge1xyXG4gICAgICAgICAgJCgnIycgKyBvcmlnaW4uYXR0cignZGF0YS10b29sdGlwLWlkJykpLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3JpZ2luLmF0dHIoJ2RhdGEtdG9vbHRpcC1pZCcsIHRvb2x0aXBJZCk7XHJcblxyXG4gICAgICAgIC8vIEdldCBhdHRyaWJ1dGVzLlxyXG4gICAgICAgIHZhciBhbGxvd0h0bWwsXHJcbiAgICAgICAgICAgIHRvb2x0aXBEZWxheSxcclxuICAgICAgICAgICAgdG9vbHRpcFBvc2l0aW9uLFxyXG4gICAgICAgICAgICB0b29sdGlwVGV4dCxcclxuICAgICAgICAgICAgdG9vbHRpcEVsLFxyXG4gICAgICAgICAgICBiYWNrZHJvcDtcclxuICAgICAgICB2YXIgc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgYWxsb3dIdG1sID0gb3JpZ2luLmF0dHIoJ2RhdGEtaHRtbCcpID8gb3JpZ2luLmF0dHIoJ2RhdGEtaHRtbCcpID09PSAndHJ1ZScgOiBvcHRpb25zLmh0bWw7XHJcbiAgICAgICAgICB0b29sdGlwRGVsYXkgPSBvcmlnaW4uYXR0cignZGF0YS1kZWxheScpO1xyXG4gICAgICAgICAgdG9vbHRpcERlbGF5ID0gKHRvb2x0aXBEZWxheSA9PT0gdW5kZWZpbmVkIHx8IHRvb2x0aXBEZWxheSA9PT0gJycpID9cclxuICAgICAgICAgICAgICBvcHRpb25zLmRlbGF5IDogdG9vbHRpcERlbGF5O1xyXG4gICAgICAgICAgdG9vbHRpcFBvc2l0aW9uID0gb3JpZ2luLmF0dHIoJ2RhdGEtcG9zaXRpb24nKTtcclxuICAgICAgICAgIHRvb2x0aXBQb3NpdGlvbiA9ICh0b29sdGlwUG9zaXRpb24gPT09IHVuZGVmaW5lZCB8fCB0b29sdGlwUG9zaXRpb24gPT09ICcnKSA/XHJcbiAgICAgICAgICAgICAgb3B0aW9ucy5wb3NpdGlvbiA6IHRvb2x0aXBQb3NpdGlvbjtcclxuICAgICAgICAgIHRvb2x0aXBUZXh0ID0gb3JpZ2luLmF0dHIoJ2RhdGEtdG9vbHRpcCcpO1xyXG4gICAgICAgICAgdG9vbHRpcFRleHQgPSAodG9vbHRpcFRleHQgPT09IHVuZGVmaW5lZCB8fCB0b29sdGlwVGV4dCA9PT0gJycpID9cclxuICAgICAgICAgICAgICBvcHRpb25zLnRvb2x0aXAgOiB0b29sdGlwVGV4dDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldEF0dHJpYnV0ZXMoKTtcclxuXHJcbiAgICAgICAgdmFyIHJlbmRlclRvb2x0aXBFbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdmFyIHRvb2x0aXAgPSAkKCc8ZGl2IGNsYXNzPVwibWF0ZXJpYWwtdG9vbHRpcFwiPjwvZGl2PicpO1xyXG5cclxuICAgICAgICAgIC8vIENyZWF0ZSBUZXh0IHNwYW5cclxuICAgICAgICAgIGlmIChhbGxvd0h0bWwpIHtcclxuICAgICAgICAgICAgdG9vbHRpcFRleHQgPSAkKCc8c3Bhbj48L3NwYW4+JykuaHRtbCh0b29sdGlwVGV4dCk7XHJcbiAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHRvb2x0aXBUZXh0ID0gJCgnPHNwYW4+PC9zcGFuPicpLnRleHQodG9vbHRpcFRleHQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIENyZWF0ZSB0b29sdGlwXHJcbiAgICAgICAgICB0b29sdGlwLmFwcGVuZCh0b29sdGlwVGV4dClcclxuICAgICAgICAgICAgLmFwcGVuZFRvKCQoJ2JvZHknKSlcclxuICAgICAgICAgICAgLmF0dHIoJ2lkJywgdG9vbHRpcElkKTtcclxuXHJcbiAgICAgICAgICAvLyBDcmVhdGUgYmFja2Ryb3BcclxuICAgICAgICAgIGJhY2tkcm9wID0gJCgnPGRpdiBjbGFzcz1cImJhY2tkcm9wXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICBiYWNrZHJvcC5hcHBlbmRUbyh0b29sdGlwKTtcclxuICAgICAgICAgIHJldHVybiB0b29sdGlwO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdG9vbHRpcEVsID0gcmVuZGVyVG9vbHRpcEVsKCk7XHJcblxyXG4gICAgICAgIC8vIERlc3Ryb3kgcHJldmlvdXNseSBiaW5kZWQgZXZlbnRzXHJcbiAgICAgICAgb3JpZ2luLm9mZignbW91c2VlbnRlci50b29sdGlwIG1vdXNlbGVhdmUudG9vbHRpcCcpO1xyXG4gICAgICAgIC8vIE1vdXNlIEluXHJcbiAgICAgICAgdmFyIHN0YXJ0ZWQgPSBmYWxzZSwgdGltZW91dFJlZjtcclxuICAgICAgICBvcmlnaW4ub24oeydtb3VzZWVudGVyLnRvb2x0aXAnOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICB2YXIgc2hvd1Rvb2x0aXAgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0QXR0cmlidXRlcygpO1xyXG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdG9vbHRpcEVsLnZlbG9jaXR5KCdzdG9wJyk7XHJcbiAgICAgICAgICAgIGJhY2tkcm9wLnZlbG9jaXR5KCdzdG9wJyk7XHJcbiAgICAgICAgICAgIHRvb2x0aXBFbC5jc3MoeyB2aXNpYmlsaXR5OiAndmlzaWJsZScsIGxlZnQ6ICcwcHgnLCB0b3A6ICcwcHgnIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVG9vbHRpcCBwb3NpdGlvbmluZ1xyXG4gICAgICAgICAgICB2YXIgb3JpZ2luV2lkdGggPSBvcmlnaW4ub3V0ZXJXaWR0aCgpO1xyXG4gICAgICAgICAgICB2YXIgb3JpZ2luSGVpZ2h0ID0gb3JpZ2luLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIHZhciB0b29sdGlwSGVpZ2h0ID0gdG9vbHRpcEVsLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIHZhciB0b29sdGlwV2lkdGggPSB0b29sdGlwRWwub3V0ZXJXaWR0aCgpO1xyXG4gICAgICAgICAgICB2YXIgdG9vbHRpcFZlcnRpY2FsTW92ZW1lbnQgPSAnMHB4JztcclxuICAgICAgICAgICAgdmFyIHRvb2x0aXBIb3Jpem9udGFsTW92ZW1lbnQgPSAnMHB4JztcclxuICAgICAgICAgICAgdmFyIGJhY2tkcm9wT2Zmc2V0V2lkdGggPSBiYWNrZHJvcFswXS5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgdmFyIGJhY2tkcm9wT2Zmc2V0SGVpZ2h0ID0gYmFja2Ryb3BbMF0ub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICB2YXIgc2NhbGVYRmFjdG9yID0gODtcclxuICAgICAgICAgICAgdmFyIHNjYWxlWUZhY3RvciA9IDg7XHJcbiAgICAgICAgICAgIHZhciBzY2FsZUZhY3RvciA9IDA7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRUb3AsIHRhcmdldExlZnQsIG5ld0Nvb3JkaW5hdGVzO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRvb2x0aXBQb3NpdGlvbiA9PT0gXCJ0b3BcIikge1xyXG4gICAgICAgICAgICAgIC8vIFRvcCBQb3NpdGlvblxyXG4gICAgICAgICAgICAgIHRhcmdldFRvcCA9IG9yaWdpbi5vZmZzZXQoKS50b3AgLSB0b29sdGlwSGVpZ2h0IC0gbWFyZ2luO1xyXG4gICAgICAgICAgICAgIHRhcmdldExlZnQgPSBvcmlnaW4ub2Zmc2V0KCkubGVmdCArIG9yaWdpbldpZHRoLzIgLSB0b29sdGlwV2lkdGgvMjtcclxuICAgICAgICAgICAgICBuZXdDb29yZGluYXRlcyA9IHJlcG9zaXRpb25XaXRoaW5TY3JlZW4odGFyZ2V0TGVmdCwgdGFyZ2V0VG9wLCB0b29sdGlwV2lkdGgsIHRvb2x0aXBIZWlnaHQpO1xyXG4gICAgICAgICAgICAgIHRvb2x0aXBWZXJ0aWNhbE1vdmVtZW50ID0gJy0xMHB4JztcclxuICAgICAgICAgICAgICBiYWNrZHJvcC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzE0cHggMTRweCAwIDAnLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDEwMCUnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiB0b29sdGlwSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogKHRvb2x0aXBXaWR0aC8yKSAtIChiYWNrZHJvcE9mZnNldFdpZHRoLzIpXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gTGVmdCBQb3NpdGlvblxyXG4gICAgICAgICAgICBlbHNlIGlmICh0b29sdGlwUG9zaXRpb24gPT09IFwibGVmdFwiKSB7XHJcbiAgICAgICAgICAgICAgdGFyZ2V0VG9wID0gb3JpZ2luLm9mZnNldCgpLnRvcCArIG9yaWdpbkhlaWdodC8yIC0gdG9vbHRpcEhlaWdodC8yO1xyXG4gICAgICAgICAgICAgIHRhcmdldExlZnQgPSAgb3JpZ2luLm9mZnNldCgpLmxlZnQgLSB0b29sdGlwV2lkdGggLSBtYXJnaW47XHJcbiAgICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZXMgPSByZXBvc2l0aW9uV2l0aGluU2NyZWVuKHRhcmdldExlZnQsIHRhcmdldFRvcCwgdG9vbHRpcFdpZHRoLCB0b29sdGlwSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgdG9vbHRpcEhvcml6b250YWxNb3ZlbWVudCA9ICctMTBweCc7XHJcbiAgICAgICAgICAgICAgYmFja2Ryb3AuY3NzKHtcclxuICAgICAgICAgICAgICAgIHRvcDogJy03cHgnLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzE0cHgnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTRweCcsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxNHB4IDAgMCAxNHB4JyxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzk1JSA1MCUnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiB0b29sdGlwSGVpZ2h0LzIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiB0b29sdGlwV2lkdGhcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBSaWdodCBQb3NpdGlvblxyXG4gICAgICAgICAgICBlbHNlIGlmICh0b29sdGlwUG9zaXRpb24gPT09IFwicmlnaHRcIikge1xyXG4gICAgICAgICAgICAgIHRhcmdldFRvcCA9IG9yaWdpbi5vZmZzZXQoKS50b3AgKyBvcmlnaW5IZWlnaHQvMiAtIHRvb2x0aXBIZWlnaHQvMjtcclxuICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gb3JpZ2luLm9mZnNldCgpLmxlZnQgKyBvcmlnaW5XaWR0aCArIG1hcmdpbjtcclxuICAgICAgICAgICAgICBuZXdDb29yZGluYXRlcyA9IHJlcG9zaXRpb25XaXRoaW5TY3JlZW4odGFyZ2V0TGVmdCwgdGFyZ2V0VG9wLCB0b29sdGlwV2lkdGgsIHRvb2x0aXBIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICB0b29sdGlwSG9yaXpvbnRhbE1vdmVtZW50ID0gJysxMHB4JztcclxuICAgICAgICAgICAgICBiYWNrZHJvcC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgdG9wOiAnLTdweCcsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxNHB4JyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzE0cHgnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMCAxNHB4IDE0cHggMCcsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICc1JSA1MCUnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiB0b29sdGlwSGVpZ2h0LzIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMHB4J1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIEJvdHRvbSBQb3NpdGlvblxyXG4gICAgICAgICAgICAgIHRhcmdldFRvcCA9IG9yaWdpbi5vZmZzZXQoKS50b3AgKyBvcmlnaW4ub3V0ZXJIZWlnaHQoKSArIG1hcmdpbjtcclxuICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gb3JpZ2luLm9mZnNldCgpLmxlZnQgKyBvcmlnaW5XaWR0aC8yIC0gdG9vbHRpcFdpZHRoLzI7XHJcbiAgICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZXMgPSByZXBvc2l0aW9uV2l0aGluU2NyZWVuKHRhcmdldExlZnQsIHRhcmdldFRvcCwgdG9vbHRpcFdpZHRoLCB0b29sdGlwSGVpZ2h0KTtcclxuICAgICAgICAgICAgICB0b29sdGlwVmVydGljYWxNb3ZlbWVudCA9ICcrMTBweCc7XHJcbiAgICAgICAgICAgICAgYmFja2Ryb3AuY3NzKHtcclxuICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAodG9vbHRpcFdpZHRoLzIpIC0gKGJhY2tkcm9wT2Zmc2V0V2lkdGgvMilcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU2V0IHRvb3B0aXAgY3NzIHBsYWNlbWVudFxyXG4gICAgICAgICAgICB0b29sdGlwRWwuY3NzKHtcclxuICAgICAgICAgICAgICB0b3A6IG5ld0Nvb3JkaW5hdGVzLnksXHJcbiAgICAgICAgICAgICAgbGVmdDogbmV3Q29vcmRpbmF0ZXMueFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBTY2FsZSB0byBmaWxsXHJcbiAgICAgICAgICAgIHNjYWxlWEZhY3RvciA9IE1hdGguU1FSVDIgKiB0b29sdGlwV2lkdGggLyBwYXJzZUludChiYWNrZHJvcE9mZnNldFdpZHRoKTtcclxuICAgICAgICAgICAgc2NhbGVZRmFjdG9yID0gTWF0aC5TUVJUMiAqIHRvb2x0aXBIZWlnaHQgLyBwYXJzZUludChiYWNrZHJvcE9mZnNldEhlaWdodCk7XHJcbiAgICAgICAgICAgIHNjYWxlRmFjdG9yID0gTWF0aC5tYXgoc2NhbGVYRmFjdG9yLCBzY2FsZVlGYWN0b3IpO1xyXG5cclxuICAgICAgICAgICAgdG9vbHRpcEVsLnZlbG9jaXR5KHsgdHJhbnNsYXRlWTogdG9vbHRpcFZlcnRpY2FsTW92ZW1lbnQsIHRyYW5zbGF0ZVg6IHRvb2x0aXBIb3Jpem9udGFsTW92ZW1lbnR9LCB7IGR1cmF0aW9uOiAzNTAsIHF1ZXVlOiBmYWxzZSB9KVxyXG4gICAgICAgICAgICAgIC52ZWxvY2l0eSh7b3BhY2l0eTogMX0sIHtkdXJhdGlvbjogMzAwLCBkZWxheTogNTAsIHF1ZXVlOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICBiYWNrZHJvcC5jc3MoeyB2aXNpYmlsaXR5OiAndmlzaWJsZScgfSlcclxuICAgICAgICAgICAgICAudmVsb2NpdHkoe29wYWNpdHk6MX0se2R1cmF0aW9uOiA1NSwgZGVsYXk6IDAsIHF1ZXVlOiBmYWxzZX0pXHJcbiAgICAgICAgICAgICAgLnZlbG9jaXR5KHtzY2FsZVg6IHNjYWxlRmFjdG9yLCBzY2FsZVk6IHNjYWxlRmFjdG9yfSwge2R1cmF0aW9uOiAzMDAsIGRlbGF5OiAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VJbk91dFF1YWQnfSk7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIHRpbWVvdXRSZWYgPSBzZXRUaW1lb3V0KHNob3dUb29sdGlwLCB0b29sdGlwRGVsYXkpOyAvLyBFbmQgSW50ZXJ2YWxcclxuXHJcbiAgICAgICAgLy8gTW91c2UgT3V0XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnbW91c2VsZWF2ZS50b29sdGlwJzogZnVuY3Rpb24oKXtcclxuICAgICAgICAgIC8vIFJlc2V0IFN0YXRlXHJcbiAgICAgICAgICBzdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dFJlZik7XHJcblxyXG4gICAgICAgICAgLy8gQW5pbWF0ZSBiYWNrXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoc3RhcnRlZCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgIHRvb2x0aXBFbC52ZWxvY2l0eSh7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLCB0cmFuc2xhdGVZOiAwLCB0cmFuc2xhdGVYOiAwfSwgeyBkdXJhdGlvbjogMjI1LCBxdWV1ZTogZmFsc2V9KTtcclxuICAgICAgICAgICAgICBiYWNrZHJvcC52ZWxvY2l0eSh7b3BhY2l0eTogMCwgc2NhbGVYOiAxLCBzY2FsZVk6IDF9LCB7XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjoyMjUsXHJcbiAgICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgYmFja2Ryb3AuY3NzKHsgdmlzaWJpbGl0eTogJ2hpZGRlbicgfSk7XHJcbiAgICAgICAgICAgICAgICAgIHRvb2x0aXBFbC5jc3MoeyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9KTtcclxuICAgICAgICAgICAgICAgICAgc3RhcnRlZCA9IGZhbHNlO31cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwyMjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHZhciByZXBvc2l0aW9uV2l0aGluU2NyZWVuID0gZnVuY3Rpb24oeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgdmFyIG5ld1ggPSB4O1xyXG4gICAgdmFyIG5ld1kgPSB5O1xyXG5cclxuICAgIGlmIChuZXdYIDwgMCkge1xyXG4gICAgICBuZXdYID0gNDtcclxuICAgIH0gZWxzZSBpZiAobmV3WCArIHdpZHRoID4gd2luZG93LmlubmVyV2lkdGgpIHtcclxuICAgICAgbmV3WCAtPSBuZXdYICsgd2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3WSA8IDApIHtcclxuICAgICAgbmV3WSA9IDQ7XHJcbiAgICB9IGVsc2UgaWYgKG5ld1kgKyBoZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQgKyAkKHdpbmRvdykuc2Nyb2xsVG9wKSB7XHJcbiAgICAgIG5ld1kgLT0gbmV3WSArIGhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge3g6IG5ld1gsIHk6IG5ld1l9O1xyXG4gIH07XHJcblxyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgJCgnLnRvb2x0aXBwZWQnKS50b29sdGlwKCk7XHJcbiAgIH0pO1xyXG59KCBqUXVlcnkgKSk7XHJcblxyXG4oIGZ1bmN0aW9uKCAkICkge1xyXG4gICAgJCggZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyICRzaXRlTmF2ID0gJCggJyNzbGlkZS1vdXQnICk7XHJcbiAgICAgICAgdmFyIHdhc01vdXNlID0gdHJ1ZTtcclxuICAgICAgICB2YXIgJG1vYmlsZUJ0bkNvbGxhcHNlID0gJCgnLnNsaWRlTmF2LWJ0bicpO1xyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2xpZGVXcmFwcGVyKGFyZykge1xyXG4gICAgICAgICAgICBpZiAoIGFyZyApIHtcclxuICAgICAgICAgICAgICAgICQoJy53cmFwcGVyJykuYWRkQ2xhc3MoJ3JpZ2h0LXNsaWRlJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcud3JhcHBlcicpLnJlbW92ZUNsYXNzKCdyaWdodC1zbGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBtb3VzVG9nZ2xlTmF2KCBhcmcsIG1vdXNlZCApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggIWFyZyApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmICggbW91c2VkICkge1xyXG4gICAgICAgICAgICAgICAgJCggYXJnICkub24oICdtb3VzZWVudGVyJywgZnVuY3Rpb24oIGV2ZW50ICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggd2FzTW91c2UgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggISQoZXZlbnQudGFyZ2V0KS5wYXJlbnRzKCdsaScpLmhhc0NsYXNzKCdzbGlkZU5hdicpICYmICEkKCBldmVudC50YXJnZXQgKS5oYXNDbGFzcygnc2lkZS1uYXYnKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggJHNpdGVOYXYuaGFzQ2xhc3MoICdzbWFsbC1maXhlZCcgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2l0ZU5hdi5yZW1vdmVDbGFzcyggJ3NtYWxsLWZpeGVkJyApLmFkZENsYXNzKCAnYmlnLWZpeGVkJyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlV3JhcHBlciggdHJ1ZSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2l0ZU5hdi5maW5kKCdsaScpLmhvdmVyKCBmdW5jdGlvbiggZXZlbnQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhJCh0aGlzKS5oYXNDbGFzcygnc2xpZGVOYXYnKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoICRzaXRlTmF2Lmhhc0NsYXNzKCAnc21hbGwtZml4ZWQnICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzaXRlTmF2LnJlbW92ZUNsYXNzKCAnc21hbGwtZml4ZWQnICkuYWRkQ2xhc3MoICdiaWctZml4ZWQnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlV3JhcHBlciggdHJ1ZSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoIGFyZyApLm9uKCAnbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCBldmVudCApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHdhc01vdXNlICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoICRzaXRlTmF2Lmhhc0NsYXNzKCAnYmlnLWZpeGVkJyApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNpdGVOYXYucmVtb3ZlQ2xhc3MoICdiaWctZml4ZWQnICkuYWRkQ2xhc3MoICdzbWFsbC1maXhlZCcgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlV3JhcHBlciggZmFsc2UgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHNpdGVOYXYub24oICdjbGljaycsICcuc2xpZGVOYXYnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGV2ZW50T2JqID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDk5Mikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCAkc2l0ZU5hdi5oYXNDbGFzcyggJ3NtYWxsLWZpeGVkJyApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzaXRlTmF2LnJlbW92ZUNsYXNzKCAnc21hbGwtZml4ZWQnICkuYWRkQ2xhc3MoICdiaWctZml4ZWQnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRPYmouYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlV3JhcHBlciggdHJ1ZSApO1xyXG4gICAgICAgICAgICAgICAgICAgIHdhc01vdXNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCAkc2l0ZU5hdi5oYXNDbGFzcyggJ2JpZy1maXhlZCcgKSAmJiAhZXZlbnRPYmouaGFzQ2xhc3MoJ2FjdGl2ZScpICApIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2l0ZU5hdi5vZmYoJ21vdXNlbGVhdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudE9iai5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCAkc2l0ZU5hdi5oYXNDbGFzcyggJ2JpZy1maXhlZCcgKSAmJiBldmVudE9iai5oYXNDbGFzcygnYWN0aXZlJykgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRPYmoucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICRzaXRlTmF2LnJlbW92ZUNsYXNzKCAnYmlnLWZpeGVkJyApLmFkZENsYXNzKCAnc21hbGwtZml4ZWQnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVXcmFwcGVyKCBmYWxzZSApO1xyXG4gICAgICAgICAgICAgICAgICAgIHdhc01vdXNlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbW91c1RvZ2dsZU5hdiggJHNpdGVOYXYsIGZhbHNlICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZVdyYXBwZXIoIGZhbHNlICk7XHJcbiAgICAgICAgICAgICAgICAkc2l0ZU5hdi5yZW1vdmVDbGFzcygnYWN0aXZlJykuYWRkQ2xhc3MoJ3NtYWxsLWZpeGVkJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2xpZGVOYXYnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIGlmICggJCh3aW5kb3cpLndpZHRoKCkgPiA5OTIgKSB7XHJcbiAgICAgICAgICAgIG1vdXNUb2dnbGVOYXYoICRzaXRlTmF2LCB0cnVlICk7XHJcbiAgICAgICAgICAgIG1vdXNUb2dnbGVOYXYoICRzaXRlTmF2LCBmYWxzZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJG1vYmlsZUJ0bkNvbGxhcHNlLm9uKCAnY2xpY2snLCBmdW5jdGlvbiggZXZlbnQgKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiggJCh3aW5kb3cpLndpZHRoKCkgPCA5OTMgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoICEkc2l0ZU5hdi5oYXNDbGFzcygnYWN0aXZlJykgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNpdGVOYXYuYWRkQ2xhc3MoJ2JpZy1maXhlZCBhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZVdyYXBwZXIoIHRydWUgKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuc2xpZGVOYXYnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlV3JhcHBlciggZmFsc2UgKTtcclxuICAgICAgICAgICAgICAgICAgICAkc2l0ZU5hdi5yZW1vdmVDbGFzcygnYWN0aXZlJykuYWRkQ2xhc3MoJ3NtYWxsLWZpeGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnNsaWRlTmF2JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH0gKTtcclxufSApKCBqUXVlcnkgKTtcclxuKCBmdW5jdGlvbiggJCApIHtcclxuICAgICQoIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgKiDQnNC10YLQvtC0INC00LvRjyDQvNC40L3QuNC80LDQu9GM0L3QvtC5INCy0YvRgdC+0YLRiyDRgdGC0YAuXHJcbiAgICAgICAgKiAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIG1pbkhlaWdodFBhZ2UoKSB7XHJcbiAgICAgICAgICAgIHZhciBoX3cgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIHZhciBoX3NfaCA9ICQoJy5zaXRlLWhlYWRlcicpLmhlaWdodCgpO1xyXG4gICAgICAgICAgICB2YXIgaF9zX2YgPSAkKCcuc2l0ZS1mb290ZXInKS5vdXRlckhlaWdodCh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggJCgnYm9keScpLmhlaWdodCgpIDwgaF93ICkge1xyXG4gICAgICAgICAgICAgICAgJCgnLm1haW4nKS5jc3MoJ21pbi1oZWlnaHQnLCAoaF93IC0gaF9zX2gpIC0gaF9zX2YpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtaW5IZWlnaHRQYWdlKCk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBtaW5IZWlnaHRQYWdlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB2YXIgY2hlY2tib3hCbG9jayA9ICQoICcuY2hlY2tib3gtYmxvY2snICk7XHJcblxyXG4gICAgICAgICQoY2hlY2tib3hCbG9jaykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBpbnB1dENoZWNrZWQgPSAkKHRoaXMpLmZpbmQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGlmICggaW5wdXRDaGVja2VkLnByb3AoICdjaGVja2VkJyApICkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRDaGVja2VkLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRDaGVja2VkLnByb3AoXCJjaGVja2VkXCIsIHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnaW5wdXQ6Y2hlY2tlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgY2hlY2tlZElucHV0ID0gJCh0aGlzKS5hdHRyKCdkYXRhLWRlbGl2ZXJ5LW1ldGhvZCcpO1xyXG4gICAgICAgICAgICAkKCcuZGVsaXZlcnktbWV0aG9kJykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkKCcjJyArIGNoZWNrZWRJbnB1dCkuaGFzQ2xhc3MoJ2hpZGUnKSkge1xyXG4gICAgICAgICAgICAgICAgJCgnIycgKyBjaGVja2VkSW5wdXQpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAqIHBhZ2UgdXAgYnV0dG9uXHJcbiAgICAgICAgKiAqL1xyXG4gICAgICAgIHZhciBwYWdlVXAgPSAkKCAnLnBhZ2UtdXAnICk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgcGFnZVkgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgICAgICAgdmFyIGlubmVySGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIGlmICggcGFnZVkgPiBpbm5lckhlaWdodCApIHtcclxuICAgICAgICAgICAgICAgIHBhZ2VVcC5yZW1vdmVDbGFzcyggJ2hpZGUnICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYWdlVXAuYWRkQ2xhc3MoICdoaWRlJyApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcGFnZVVwLm9uKCAnY2xpY2snLCBmdW5jdGlvbiggZXZlbnQgKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICQoICdodG1sLCBib2R5JyApLmFuaW1hdGUoIHsgc2Nyb2xsVG9wOiAwIH0sICdzbG93JyApO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICogYnV0dG9uIHByb3Bvc2UgY2hhbmdlc1xyXG4gICAgICAgICogKi9cclxuICAgICAgICB2YXIgYnRuUHJvcG9zZUNoYW5nZXMgPSAkKCcuYnRuLXByb3Bvc2UtY2hhbmdlcycpO1xyXG5cclxuICAgICAgICBidG5Qcm9wb3NlQ2hhbmdlcy5vbignY2xpY2snLCAnYS5idG4tdGltZXMnLCBmdW5jdGlvbiggZXZlbnQgKSB7XHJcbiAgICAgICAgICAgIGJ0blByb3Bvc2VDaGFuZ2VzLmFkZENsYXNzKCAnaGlkZScgKTtcclxuICAgICAgICB9ICk7XHJcblxyXG5cclxuICAgICAgICAvLyBpbml0IGNvbXBvbmVudHNcclxuICAgICAgICAkKCcubW9kYWwnKS5tb2RhbCh7XHJcbiAgICAgICAgICAgIHN0YXJ0aW5nVG9wOiAnNCUnLCAvLyBTdGFydGluZyB0b3Agc3R5bGUgYXR0cmlidXRlXHJcbiAgICAgICAgICAgIGVuZGluZ1RvcDogJzEwJSdcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcudG9vbHRpcHBlZCcpLnRvb2x0aXAoKTtcclxuICAgICAgICAkKCAnLmNvbGxhcHNpYmxlJyApLmNvbGxhcHNpYmxlKCk7XHJcbiAgICAgICAgJCggJ3NlbGVjdCcgKS5tYXRlcmlhbF9zZWxlY3QoKTtcclxuXHJcblxyXG4gICAgICAgICQoJ2lucHV0LmF1dG9jb21wbGV0ZScpLmF1dG9jb21wbGV0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIFwiQXBwbGVcIjogbnVsbCxcclxuICAgICAgICAgICAgICAgIFwiTWljcm9zb2Z0XCI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBcIkdvb2dsZVwiOiAnaHR0cHM6Ly9wbGFjZWhvbGQuaXQvMjUweDI1MCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGltaXQ6IDIwLFxyXG4gICAgICAgICAgICBtaW5MZW5ndGg6IDEsIC8vIFRoZSBtaW5pbXVtIGxlbmd0aCBvZiB0aGUgaW5wdXQgZm9yIHRoZSBhdXRvY29tcGxldGUgdG8gc3RhcnQuIERlZmF1bHQ6IDEuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAkKCcuYWRkLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoICQoaWQpLmhhc0NsYXNzKCdoaWRlJykgKSB7XHJcbiAgICAgICAgICAgICAgICAkKGlkKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChpZCkuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgIH0gKTtcclxufSApKCBqUXVlcnkgKTtcclxuXHJcbihmdW5jdGlvbiggJCApIHtcclxuICAgIGpRdWVyeS5mbi50YWdOYW1lTG93ZXJDYXNlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcChcInRhZ05hbWVcIikudG9Mb3dlckNhc2UoKTtcclxuICAgIH07XHJcblxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgJG5ld3MgPSAkKCcubmV3cycpO1xyXG4gICAgICAgIHZhciBhcnJheUNhcmRDb250ZW50ID0gJG5ld3MuZmluZCgnLmNhcmQtY29udGVudCcpO1xyXG4gICAgICAgIHZhciBhcnJheUNhcmRBY3Rpb24gPSAkbmV3cy5maW5kKCcuY2FyZC1hY3Rpb24nKTtcclxuICAgICAgICB2YXIgaW5kZXhDYXJkQ29udGVudCA9IG51bGw7XHJcbiAgICAgICAgdmFyIGVsZW1zSGVpZ2h0TWF4ID0gbnVsbDtcclxuICAgICAgICB2YXIgZGVmYXVsdEhlaWdodElkeCA9IDMwMDtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2hpbGRyZW5PdXRlckhlaWdodCggZWxlbSwgaWR4LCBtaW5IZWlnaHQgKSB7XHJcbiAgICAgICAgICAgIGVsZW0uY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKCBpZHgsIGVsZW0gKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtc0hlaWdodE1heCArPSAkKGVsZW0pLm91dGVySGVpZ2h0KHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtc0hlaWdodE1heCA+IG1pbkhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoJChlbGVtKS50YWdOYW1lTG93ZXJDYXNlKCkgPT09ICd1bCcpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB2YXIgaGVpZ2h0Q29udGFpbmVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gaWR4OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coJCgkKGFycmF5Q2FyZENvbnRlbnRbaWR4RWxlbV0pLmNoaWxkcmVuKClbaV0pLmhlaWdodCgpKTtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGhlaWdodENvbnRhaW5lciArPSAkKCQoYXJyYXlDYXJkQ29udGVudFtpZHhFbGVtXSkuY2hpbGRyZW4oKVtpXSkub3V0ZXJIZWlnaHQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGhlaWdodENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJChhcnJheUNhcmRDb250ZW50W2lkeF0pXHJcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1kZWZhdWx0LWhlaWdodCcsIGVsZW1zSGVpZ2h0TWF4KVxyXG4gICAgICAgICAgICAgICAgLmNzcygnaGVpZ2h0JywgZWxlbXNIZWlnaHRNYXgpO1xyXG4gICAgICAgICAgICAkKGFycmF5Q2FyZENvbnRlbnRbaWR4XSlcclxuICAgICAgICAgICAgICAgIC5zaWJsaW5ncygnLmNhcmQtYWN0aW9uJylcclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbignLmV4cGFuZCcpXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRlZmF1bHRDYXJkQ29udGVudEhlaWdodCggY2FyZENvbnRlbnQgKSB7XHJcbiAgICAgICAgICAgIGNhcmRDb250ZW50LmVhY2goZnVuY3Rpb24oIGlkeCwgZWxlbSApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCQoZWxlbSkub3V0ZXJIZWlnaHQodHJ1ZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkKGVsZW0pLm91dGVySGVpZ2h0KHRydWUpID4gZGVmYXVsdEhlaWdodElkeCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuT3V0ZXJIZWlnaHQoJChlbGVtKSwgaWR4LCBkZWZhdWx0SGVpZ2h0SWR4KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbk91dGVySGVpZ2h0KCQoZWxlbSksIGlkeCwgMzAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vICQoYXJyYXlDYXJkQ29udGVudFtpZHhFbGVtXSlcclxuICAgICAgICAgICAgICAgIC8vICAgICAucGFyZW50cygnLmNhcmQuaG9yaXpvbnRhbCcpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLmF0dHIoJ2RhdGEtbWF4LWhlaWdodCcsICQoYXJyYXlDYXJkQ29udGVudFtpZHhFbGVtXSkucGFyZW50cygnLmNhcmQuaG9yaXpvbnRhbCcpLmhlaWdodCgpKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC5jc3MoJ21heC1oZWlnaHQnLCAkKGFycmF5Q2FyZENvbnRlbnRbaWR4RWxlbV0pLnBhcmVudHMoJy5jYXJkLmhvcml6b250YWwnKS5oZWlnaHQoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsaWNrZWRMaW5rQ2FyZEFjdGlvbiggZWxlbSwgY2FyZENvbnRlbnRIZWlnaHQgKSB7XHJcbiAgICAgICAgICAgIHZhciB0b0N1cnRhaWwgPSAkKCcudG9DdXJ0YWlsJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJChlbGVtKS5oYXNDbGFzcygnZXhwYW5kJykpIHtcclxuICAgICAgICAgICAgICAgIGlmICggJCgnLnRvQ3VydGFpbCcpICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvQ3VydGFpbC5wYXJlbnQoJy5jYXJkLWFjdGlvbicpLnNpYmxpbmdzKCcuY2FyZC1jb250ZW50JykuYW5pbWF0ZSh7J2hlaWdodCc6IGNhcmRDb250ZW50SGVpZ2h0fSwgNjAwKTtcclxuICAgICAgICAgICAgICAgICAgICB0b0N1cnRhaWwucmVtb3ZlQ2xhc3MoJ3RvQ3VydGFpbCcpLmFkZENsYXNzKCdleHBhbmQnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0b0N1cnRhaWwucGFyZW50cygnLmNhcmQuaG9yaXpvbnRhbCcpLmNzcygnbWF4LWhlaWdodCcsIGNhcmRIb3Jpem9udGFsSGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAkKGVsZW0pLnBhcmVudHMoJy5jYXJkLmhvcml6b250YWwnKS5jc3MoJ21heC1oZWlnaHQnLCAnMTAwJScpO1xyXG4gICAgICAgICAgICAgICAgJChlbGVtKS5wYXJlbnQoJy5jYXJkLWFjdGlvbicpLnNpYmxpbmdzKCcuY2FyZC1jb250ZW50JykuYW5pbWF0ZSh7J2hlaWdodCc6ICcxMDAlJ30sIDYwMCk7XHJcbiAgICAgICAgICAgICAgICAkKGVsZW0pLnJlbW92ZUNsYXNzKCdleHBhbmQnKS5hZGRDbGFzcygndG9DdXJ0YWlsJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoZWxlbSkucGFyZW50KCcuY2FyZC1hY3Rpb24nKS5zaWJsaW5ncygnLmNhcmQtY29udGVudCcpLmFuaW1hdGUoeydoZWlnaHQnOiBjYXJkQ29udGVudEhlaWdodH0sIDYwMCk7XHJcbiAgICAgICAgICAgICAgICAkKGVsZW0pLnJlbW92ZUNsYXNzKCd0b0N1cnRhaWwnKS5hZGRDbGFzcygnZXhwYW5kJyk7XHJcbiAgICAgICAgICAgICAgICAvLyAkKGVsZW0pLnBhcmVudHMoJy5jYXJkLmhvcml6b250YWwnKS5jc3MoJ21heC1oZWlnaHQnLCBjYXJkSG9yaXpvbnRhbEhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHRDYXJkQ29udGVudEhlaWdodChhcnJheUNhcmRDb250ZW50KTtcclxuXHJcblxyXG4gICAgICAgIGFycmF5Q2FyZEFjdGlvbi5vbignY2xpY2snLCAnYScsIGZ1bmN0aW9uKCBldmVudCApIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBkYXRhRGVmYXVsdEhlaWdodCA9ICQodGhpcykub2Zmc2V0UGFyZW50KCkucHJldigpLmRhdGEoJ2RlZmF1bHQtaGVpZ2h0Jyk7XHJcbiAgICAgICAgICAgIC8vIHZhciBkYXRhRGVmYXVsdEhlaWdodENhcmRIb3Jpem9udGFsID0gJCh0aGlzKS5wYXJlbnRzKCcuY2FyZC5ob3Jpem9udGFsJykuZGF0YSgnZGVmYXVsdC1oZWlnaHQnKTtcclxuXHJcbiAgICAgICAgICAgIGNsaWNrZWRMaW5rQ2FyZEFjdGlvbigkKHRoaXMpLCBkYXRhRGVmYXVsdEhlaWdodCk7XHJcbiAgICAgICAgfSApO1xyXG5cclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZWxlbXNIZWlnaHRNYXggPSBudWxsO1xyXG4gICAgICAgICAgICBkZWZhdWx0Q2FyZENvbnRlbnRIZWlnaHQoYXJyYXlDYXJkQ29udGVudCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH0pO1xyXG59ICkoIGpRdWVyeSApO1xyXG4oIGZ1bmN0aW9uKCAkICkge1xyXG4gICAgJCggZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyICRjYWxjID0gJCggJy5jYWxjJyApO1xyXG4gICAgICAgIHZhciAkYXZhaWxhYmlsaXR5ID0gJCggJy5jdGgtYXZhaWxhYmlsaXR5Jyk7XHJcbiAgICAgICAgdmFyICRzaG93SGlkZUJ0biA9ICQoJy5zaG93LWhpZGUtYnRuJyk7XHJcbiAgICAgICAgdmFyICRjYXJ0VGFibGVCb2R5ID0gJCgnLmNhcnQtdGFibGUtYm9keScpO1xyXG5cclxuICAgICAgICAkYXZhaWxhYmlsaXR5LmVhY2goIGZ1bmN0aW9uKCBpZHgsIGVsZW0gKSB7XHJcbiAgICAgICAgICAgIGlmICggJCggZWxlbSApLmNoaWxkcmVuKCAnc3BhbicgKS5pcyggJ3NwYW4nICkgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoICQoIGVsZW0gKS5maW5kKCAnLmZhLXRpbWVzJyApLmlzKCAnLmZhLXRpbWVzJyApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJGNhbGNbIGlkeCAtIDEgXSkuYWRkQ2xhc3MoICdkaXNhYmxlZCcgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAqIENhbGMgbWV0aG9kXHJcbiAgICAgICAgKiAqL1xyXG5cclxuICAgICAgICAkY2FsYy5maW5kKCAnaW5wdXQnICkudmFsKCAwICk7XHJcbiAgICAgICAgJGNhbGMuZmluZCggJy5taW51cycgKS5hZGRDbGFzcyggJ2Rpc2FibGVkJyApO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjYWxjKCBlbGVtLCBhcmd1bWVudCApIHtcclxuICAgICAgICAgICAgdmFyICRpbnB1dCA9IGVsZW0uc2libGluZ3MoICdpbnB1dC5pbnB1dC1jYWxjJyApO1xyXG4gICAgICAgICAgICB2YXIgaW5wdXRDYWxjVmFsID0gJGlucHV0LnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBhcmd1bWVudCApIHtcclxuICAgICAgICAgICAgICAgICRpbnB1dC52YWwoICtpbnB1dENhbGNWYWwgKyAxICk7XHJcbiAgICAgICAgICAgICAgICAkaW5wdXQuc2libGluZ3MoICcubWludXMnICkucmVtb3ZlQ2xhc3MoICdkaXNhYmxlZCcgKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICggIWFyZ3VtZW50ICYmICtpbnB1dENhbGNWYWwgPiAxICYmICFlbGVtLmhhc0NsYXNzKCAnYnRuLXRyYXNoJyApICkge1xyXG4gICAgICAgICAgICAgICAgJGlucHV0LnZhbCggK2lucHV0Q2FsY1ZhbCAtIDEgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRpbnB1dC52YWwoIDAgKTtcclxuICAgICAgICAgICAgICAgICRpbnB1dC5zaWJsaW5ncyggJy5taW51cycgKS5hZGRDbGFzcyggJ2Rpc2FibGVkJyApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkY2FsYy5vbiggJ2NsaWNrJywgJ2EubWludXMnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCggdGhpcyApO1xyXG4gICAgICAgICAgICBjYWxjKCAkdGhpcywgZmFsc2UgKTtcclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICRjYWxjLm9uKCAnY2xpY2snLCAnYS5wbHVzJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQoIHRoaXMgKTtcclxuICAgICAgICAgICAgY2FsYyggJHRoaXMsIHRydWUgKTtcclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICRjYWxjLm9uKCAnY2xpY2snLCAnYS5idG4tdHJhc2gnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCggdGhpcyApO1xyXG4gICAgICAgICAgICBjYWxjKCAkdGhpcywgZmFsc2UgKTtcclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICRzaG93SGlkZUJ0bi5vbiggJ2NsaWNrJywgZnVuY3Rpb24oIGV2ZW50ICkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY3KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc1BhcmVudFdpZHRoID0gJCh0aGlzKS5wYXJlbnQoJy5jdGgtcGhvdG8nKS5vdXRlcldpZHRoKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc1BhcmVudFBhcmVudFdpZHRoID0gJCh0aGlzKS5wYXJlbnQoJy5jdGgtcGhvdG8nKS5wYXJlbnQoJy5jYXJ0LXRhYmxlLWJvZHknKS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRoaXNQYXJlbnRTaWJsaW5nc01vYmlsZVNob3cgPSAkKHRoaXMpLnBhcmVudCgnLmN0aC1waG90bycpLnNpYmxpbmdzKCcubW9iaWxlLXNob3cnKS5vdXRlckhlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCAkKHRoaXMpLmNoaWxkcmVuKCcuZmEnKS5oYXNDbGFzcygnZmEtcGx1cycpICkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5mYS1wbHVzJykucmVtb3ZlQ2xhc3MoJ2ZhLXBsdXMnKS5hZGRDbGFzcygnZmEtbWludXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgnLmN0aC1waG90bycpLnBhcmVudCgnLmNhcnQtdGFibGUtYm9keScpLmhlaWdodCh0aGlzUGFyZW50UGFyZW50V2lkdGggKyB0aGlzUGFyZW50U2libGluZ3NNb2JpbGVTaG93KTtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wYXJlbnQoJy5jdGgtcGhvdG8nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoJy5tb2JpbGUtc2hvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xlZnQnIDogdGhpc1BhcmVudFdpZHRoICsgMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWFyZ2luLXRvcCc6IHRoaXNQYXJlbnRQYXJlbnRXaWR0aCAtIDIwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuZmEtbWludXMnKS5yZW1vdmVDbGFzcygnZmEtbWludXMnKS5hZGRDbGFzcygnZmEtcGx1cycpO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCcuY3RoLXBob3RvJykucGFyZW50KCcuY2FydC10YWJsZS1ib2R5JykuaGVpZ2h0KCdhdXRvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoJy5jdGgtcGhvdG8nKS5zaWJsaW5ncygnLm1vYmlsZS1zaG93JykucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmKCQod2luZG93KS53aWR0aCgpIDwgNzY3KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoICQodGhpcykuY2hpbGRyZW4oJy5mYScpLmhhc0NsYXNzKCdmYS1wbHVzJykgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLmZhLXBsdXMnKS5yZW1vdmVDbGFzcygnZmEtcGx1cycpLmFkZENsYXNzKCdmYS1taW51cycpO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLnRhYmxlLXdyYXBwZXInKS5zaWJsaW5ncygnLmJsb2NrLWhpZGUtc2hvdy1tb2JpbGUnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLmZhLW1pbnVzJykucmVtb3ZlQ2xhc3MoJ2ZhLW1pbnVzJykuYWRkQ2xhc3MoJ2ZhLXBsdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy50YWJsZS13cmFwcGVyJykuc2libGluZ3MoJy5ibG9jay1oaWRlLXNob3ctbW9iaWxlJykucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbW9iaWxlVGFibGVQcm9kdWN0KCkge1xyXG4gICAgICAgICAgICAkY2FydFRhYmxlQm9keS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyICR0YWJsZVdyYXBwZXJQTiA9ICQoJzxkaXYgY2xhc3M9XCJ0YWJsZS13cmFwcGVyIHBob3RvIG5hbWVcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgICAgIHZhciAkdGFibGVXcmFwcGVyV1NRID0gJCgnPGRpdiBjbGFzcz1cInRhYmxlLXdyYXBwZXIgd2VpZ2h0IHNpemUgcXVhbnRpdHlcIj48ZGl2IGNsYXNzPVwiY2FydC10YWJsZS1oZWFkaW5nXCI+PC9kaXY+PGRpdiBjbGFzcz1cImNhcnQtdGFibGUtYm9keVwiPjwvZGl2PjwvZGl2PicpO1xyXG4gICAgICAgICAgICAgICAgdmFyICRibG9ja1Nob3dIaWRlVGFibGUgPSAkKCc8ZGl2IGNsYXNzPVwiYmxvY2staGlkZS1zaG93LW1vYmlsZVwiPjwvZGl2PicpO1xyXG4gICAgICAgICAgICAgICAgdmFyICRwaG90byA9ICQodGhpcykuY2hpbGRyZW4oJy5jdGgtcGhvdG8nKTtcclxuICAgICAgICAgICAgICAgIHZhciAkbmFtZSA9ICQodGhpcykuY2hpbGRyZW4oJy5jdGgtbmFtZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyICRhdHRyID0gJCh0aGlzKS5jaGlsZHJlbignLmN0aC1hdHRyJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgJHNpemUgPSAkKHRoaXMpLmNoaWxkcmVuKCcuY3RoLXNpemUnKTtcclxuICAgICAgICAgICAgICAgIHZhciAkcXVhbnRpdHkgPSAkKHRoaXMpLmNoaWxkcmVuKCcuY3RoLXF1YW50aXR5Jyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgJHByaWNlUmV0YWlsID0gJCh0aGlzKS5jaGlsZHJlbignLmN0aC1wcmljZS1yZXRhaWwnKTtcclxuICAgICAgICAgICAgICAgIHZhciAkcHJpY2VXaG9sZXNhbGUgPSAkKHRoaXMpLmNoaWxkcmVuKCcuY3RoLXByaWNlLXdob2xlc2FsZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyICRhbW91bnQgPSAkKHRoaXMpLmNoaWxkcmVuKCcuY3RoLWFtb3VudCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xyXG4gICAgICAgICAgICAgICAgICAgICR0YWJsZVdyYXBwZXJQTi5hcHBlbmQoICRwaG90byApO1xyXG4gICAgICAgICAgICAgICAgICAgICR0YWJsZVdyYXBwZXJQTi5hcHBlbmQoICRuYW1lICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICR0YWJsZVdyYXBwZXJXU1EuY2hpbGRyZW4oJy5jYXJ0LXRhYmxlLWhlYWRpbmcnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjdGgtYXR0clwiPtCQ0YLRgNC40LHRg9GC0Ys8L2Rpdj4nKTtcclxuICAgICAgICAgICAgICAgICAgICAkdGFibGVXcmFwcGVyV1NRLmNoaWxkcmVuKCcuY2FydC10YWJsZS1oZWFkaW5nJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiY3RoLXF1YW50aXR5XCI+0JrQvtC70LjRh9C10YHRgtCy0L48L2Rpdj4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHRhYmxlV3JhcHBlcldTUS5jaGlsZHJlbignLmNhcnQtdGFibGUtYm9keScpLmFwcGVuZCggJGF0dHIgKTtcclxuICAgICAgICAgICAgICAgICAgICAkdGFibGVXcmFwcGVyV1NRLmNoaWxkcmVuKCcuY2FydC10YWJsZS1ib2R5JykuYXBwZW5kKCAkcXVhbnRpdHkgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJGJsb2NrU2hvd0hpZGVUYWJsZS5hcHBlbmQoICRwcmljZVJldGFpbCApO1xyXG4gICAgICAgICAgICAgICAgICAgICRibG9ja1Nob3dIaWRlVGFibGUuYXBwZW5kKCAkcHJpY2VXaG9sZXNhbGUgKTtcclxuICAgICAgICAgICAgICAgICAgICAkYmxvY2tTaG93SGlkZVRhYmxlLmFwcGVuZCggJHRhYmxlV3JhcHBlcldTUSApO1xyXG4gICAgICAgICAgICAgICAgICAgICRibG9ja1Nob3dIaWRlVGFibGUuYXBwZW5kKCAkYW1vdW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucHJlcGVuZCgkdGFibGVXcmFwcGVyUE4pO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXBwZW5kKCRibG9ja1Nob3dIaWRlVGFibGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbW9iaWxlVGFibGVQcm9kdWN0KCk7XHJcblxyXG4gICAgfSApO1xyXG59ICkoIGpRdWVyeSApO1xyXG4oIGZ1bmN0aW9uKCAkICkge1xyXG4gICAgJCggZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBTZWxlY3RDaGVja2JveCA9IHt9O1xyXG5cclxuICAgICAgICBTZWxlY3RDaGVja2JveC4kdGhpcyA9ICQoJy5zZWxlY3Qtd3JhcHBlcicpO1xyXG4gICAgICAgIFNlbGVjdENoZWNrYm94LiRpbnB1dFNlbGVjdERvcnBkb3duID0gU2VsZWN0Q2hlY2tib3guJHRoaXMuZmluZCggJ2lucHV0LnNlbGVjdC1kcm9wZG93bicgKTtcclxuICAgICAgICBTZWxlY3RDaGVja2JveC4kdWxTZWxlY3REb3JwZG93biA9IFNlbGVjdENoZWNrYm94LiR0aGlzLmZpbmQoJy5tdWx0aXBsZS1zZWxlY3QtZHJvcGRvd24nKTtcclxuICAgICAgICBTZWxlY3RDaGVja2JveC4kc2VsZWN0ID0gU2VsZWN0Q2hlY2tib3guJHRoaXMuZmluZCgnLmluaXRpYWxpemVkJyk7XHJcblxyXG4gICAgICAgIFNlbGVjdENoZWNrYm94LiRpbnB1dFNlbGVjdERvcnBkb3duLm9mZignZm9jdXMnKTtcclxuXHJcbiAgICAgICAgLy8g0JzQtdGC0L7QtCDQvtCx0YDQsNCx0L7RgtC60Lgg0YHQvtCx0YvRgtC40Lkg0YfQtdC60LHQvtC60YHQvtCyXHJcbiAgICAgICAgU2VsZWN0Q2hlY2tib3guY2hlY2tib3hlZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgJHNlbGVjdERyb3Bkb3duTGkgPSBfdGhpcy4kdWxTZWxlY3REb3JwZG93bi5maW5kKCdsaScpO1xyXG4gICAgICAgICAgICB2YXIgc2VsZWN0RHJvcGRvd25TaG93ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBtZXRob2RGb3JIYW5kbGluZ0lucHV0VmFsKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlucHV0U2VsZWN0RHJvcGRhd25WYWwgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmICgkKF90aGlzLiRzZWxlY3QuZmluZCgnb3B0aW9uJylbMF0pLnZhbCgpID09PSAnYWxsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICRzZWxlY3REcm9wZG93bkxpLmVhY2goZnVuY3Rpb24oIGlkeCwgZWxlbSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxlY3REcm9wZG93blNob3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggJCgkc2VsZWN0RHJvcGRvd25MaVswXSkuaGFzQ2xhc3MoJ2FjdGl2ZScpICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLiRpbnB1dFNlbGVjdERvcnBkb3duLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoICQoIGVsZW0gKS5maW5kKCAnOmNoZWNrYm94JyApLnByb3AoICdjaGVja2VkJyApICYmIGlkeCAhPT0gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFNlbGVjdERyb3BkYXduVmFsICs9ICgkKGVsZW0pLmZpbmQoJ3NwYW4nKS50ZXh0KCkgKyAnLCAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJGlucHV0U2VsZWN0RG9ycGRvd24udmFsKGlucHV0U2VsZWN0RHJvcGRhd25WYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtZXRob2RGb3JIYW5kbGluZ0lucHV0VmFsKCk7XHJcblxyXG4gICAgICAgICAgICAkc2VsZWN0RHJvcGRvd25MaS5vbignY2xpY2snLCBmdW5jdGlvbiggZXZlbnQgKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3REcm9wZG93blNob3cgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggJCh0aGlzKS5pbmRleCgpID4gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCRzZWxlY3REcm9wZG93bkxpWzBdKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgkc2VsZWN0RHJvcGRvd25MaVswXSkuZmluZCgnOmNoZWNrYm94JykucmVtb3ZlQXR0cignY2hlY2tlZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtZXRob2RGb3JIYW5kbGluZ0lucHV0VmFsKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCAkKHRoaXMpLmluZGV4KCkgPT09IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhJCh0aGlzKS5maW5kKCc6Y2hlY2tlZCcpLnByb3AoJ2NoZWNrZWQnKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnbGknKS5maW5kKCc6Y2hlY2tib3gnKS5yZW1vdmVBdHRyKCdjaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy4kaW5wdXRTZWxlY3REb3JwZG93bi52YWwoJycpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnbGknKS5maW5kKCc6Y2hlY2tib3gnKS5wcm9wKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnbGknKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZEZvckhhbmRsaW5nSW5wdXRWYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSBwbGFjZWhvbGRlciBpbnB1dCDQtdGB0LvQuCDQtdGB0YLRjCDQvtC/0YbQuNGPIC0gYWxsXHJcbiAgICAgICAgU2VsZWN0Q2hlY2tib3guaW5wdXRQbGFjZWhvbGRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgYWxsT3B0aW9uID0gX3RoaXMuZm9yRWFjaFNlbGVjdE9wdGlvbnMoJ2FsbCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBhbGxPcHRpb24gKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy4kaW5wdXRTZWxlY3REb3JwZG93bi5hdHRyKCAncGxhY2Vob2xkZXInLCBhbGxPcHRpb24udGV4dCgpIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vINCc0LXRgtC+0LQg0LLRi9Cx0L7RgNCwIG9wdGlvbiDQv9C+INC30LDQtNC00LDQvdC+0LzRgyDQt9C90LDRh9C10L3QuNGOXHJcbiAgICAgICAgU2VsZWN0Q2hlY2tib3guZm9yRWFjaFNlbGVjdE9wdGlvbnMgPSBmdW5jdGlvbiggYXJnICkge1xyXG4gICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgdmFyIG9wdGlvblNlbGVjdCA9IF90aGlzLiR0aGlzLmZpbmQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgIHZhciBlbGVtZW50T3B0aW9uO1xyXG4gICAgICAgICAgICAgICBvcHRpb25TZWxlY3QuZWFjaChmdW5jdGlvbiggaWR4LCBlbGVtICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKGVsZW0pLnZhbCgpID09PSBhcmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRPcHRpb24gPSAkKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICByZXR1cm4gZWxlbWVudE9wdGlvbjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBTZWxlY3RDaGVja2JveC5jc3NTdHlsZVRvU2VsZWN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBpZiAoX3RoaXMuJHRoaXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxlbmd0aFRoaXMgPSBfdGhpcy4kdGhpcy5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuJHRoaXMuZWFjaCggZnVuY3Rpb24oIGlkeCwgZWxlbSApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKGVsZW0pLmNzcygnei1pbmRleCcsIGxlbmd0aFRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZW5ndGhUaGlzLS1cclxuICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIFNlbGVjdENoZWNrYm94LmluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICB0aGlzLmlucHV0UGxhY2Vob2xkZXIoKTtcclxuICAgICAgICAgICB0aGlzLmNoZWNrYm94ZWQoKTtcclxuICAgICAgICAgICB0aGlzLmNzc1N0eWxlVG9TZWxlY3QoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFNlbGVjdENoZWNrYm94LmluaXQoKTtcclxuXHJcbiAgICB9KTtcclxufSkoalF1ZXJ5KTtcclxuOyhmdW5jdGlvbiggJCApIHtcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyICR0cGxNb2RhbCA9ICQoJyNwcmljZU1vZGFsJyk7XHJcbiAgICAgICAgdmFyICRib2R5ID0gJCgnYm9keScpO1xyXG4gICAgICAgIHZhciBtb2RhbEhlaWdoID0gbnVsbDtcclxuICAgICAgICB2YXIgaGVpZ2h0Qm9vbGVuID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGlkeFNjcm9sbCA9IDA7XHJcblxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnYS5wcmljZS1pbWFnZScsIGZ1bmN0aW9uKCBldmVudCApIHtcclxuICAgICAgICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICR0cGxNb2RhbC5tb2RhbCgnb3BlbicpO1xyXG5cclxuICAgICAgICAgICAgJGJvZHkuY3NzKCdvdmVyZmxvdy15JywgJ2F1dG8nKTtcclxuXHJcbiAgICAgICAgICAgIHZhciAkYXJyYXlJbWcgPSAkKHRoaXMpLmZpbmQoJy5wcmljZS1pbWFnZS1tb2RhbCcpLmNsb25lKCkucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgdmFyICRwcm9kdWN0TmFtZSA9ICQodGhpcykuZmluZCgnLnByb2R1Y3QtbmFtZScpLnRleHQoKTtcclxuICAgICAgICAgICAgdmFyICRwcm9kdWN0TW9kZWwgPSAkKHRoaXMpLmZpbmQoJy5wcm9kdWN0LW1vZGVsJykuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciAkc2xpZGVyRm9yID0gJGFycmF5SW1nLmNsb25lKCkuYWRkQ2xhc3MoJ3NsaWRlci1mb3InKTtcclxuICAgICAgICAgICAgdmFyICRzbGlkZXJOYXYgPSAkYXJyYXlJbWcuY2xvbmUoKS5hZGRDbGFzcygnc2xpZGVyLW5hdicpO1xyXG5cclxuICAgICAgICAgICAgJHRwbE1vZGFsLmZpbmQoJy5tb2RhbC10aXRsZSBoMicpLmVtcHR5KCkuYXBwZW5kKCRwcm9kdWN0TmFtZSk7XHJcbiAgICAgICAgICAgICR0cGxNb2RhbC5maW5kKCcucHJvZHVjdC1tb2RlbCcpLmVtcHR5KCkuYXBwZW5kKCRwcm9kdWN0TW9kZWwpO1xyXG4gICAgICAgICAgICAkdHBsTW9kYWwuZmluZCgnLm1vZGFsLWNvbnRlbnQnKS5lbXB0eSgpLmFwcGVuZCgkc2xpZGVyRm9yKTtcclxuICAgICAgICAgICAgJHRwbE1vZGFsLmZpbmQoJy5tb2RhbC1jb250ZW50JykuYXBwZW5kKCRzbGlkZXJOYXYpO1xyXG5cclxuICAgICAgICAgICAgJHNsaWRlckZvci5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhc05hdkZvcjogJHNsaWRlck5hdixcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkc2xpZGVyTmF2LnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgYXNOYXZGb3I6ICRzbGlkZXJGb3IsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCAkdHBsTW9kYWwuaGFzQ2xhc3MoJ29wZW4nKSApIHtcclxuICAgICAgICAgICAgICAgIG1vZGFsSGVpZ2ggPSAkdHBsTW9kYWwuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBpbm5lckhlaWdodCA8IG1vZGFsSGVpZ2ggKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0Qm9vbGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZVkgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5uZXJIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGVpZ2h0Qm9vbGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYWdlWSA+IGlkeFNjcm9sbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRwbE1vZGFsLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RvcCc6IChwYWdlWSAtIChtb2RhbEhlaWdoIC0gaW5uZXJIZWlnaHQpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHJhbnNpdGlvbic6ICd0b3AgMC41cyBlYXNlLCBwb3NpdGlvbiAwLjVzIGVhc2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0cGxNb2RhbC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0b3AnOiBwYWdlWSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHJhbnNpdGlvbic6ICd0b3AgMC41cyBlYXNlLCBwb3NpdGlvbiAwLjVzIGVhc2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR0cGxNb2RhbC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RvcCc6ICgkKHRoaXMpLnNjcm9sbFRvcCgpICsgKCAoaW5uZXJIZWlnaHQgLSBtb2RhbEhlaWdoKSAvIDIpICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHJhbnNpdGlvbic6ICd0b3AgMC41cyBlYXNlLCBwb3NpdGlvbiAwLjVzIGVhc2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWR4U2Nyb2xsID0gcGFnZVk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnRuLWNsb3NlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICRib2R5LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubW9kYWwtb3ZlcmxheScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkYm9keS5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgIH0pO1xyXG59KShqUXVlcnkpO1xyXG4oZnVuY3Rpb24oICQgKSB7XHJcbiAgICAkLmZuLmZpbGVVcGxvYWRlciA9IGZ1bmN0aW9uIChmaWxlc1RvVXBsb2FkLCBzZWN0aW9uSWRlbnRpZmllcikge1xyXG4gICAgICAgIHZhciBmaWxlSWRDb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5jbG9zZXN0KFwiLmZpbGVzXCIpLmNoYW5nZShmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldnQudGFyZ2V0LmZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlSWRDb3VudGVyKys7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmlsZSA9IGV2dC50YXJnZXQuZmlsZXNbaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgZmlsZUlkID0gc2VjdGlvbklkZW50aWZpZXIgKyBmaWxlSWRDb3VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIGZpbGVzVG9VcGxvYWQucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGZpbGVJZCxcclxuICAgICAgICAgICAgICAgICAgICBmaWxlOiBmaWxlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlTGluayA9IFwiPGEgY2xhc3M9XFxcInJlbW92ZUZpbGVcXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtZmlsZWlkPVxcXCJcIiArIGZpbGVJZCArIFwiXFxcIj4mbmJzcDsgJm5ic3A7PGkgY2xhc3M9XFxcImZhIGZhLXRyYXNoLW9cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+PC9hPlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKFwiPGxpPjxzdHJvbmc+XCIsIGVzY2FwZShmaWxlLm5hbWUpLCBcIjwvc3Ryb25nPiBcIiwgcmVtb3ZlTGluaywgXCI8L2xpPiBcIik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKFwiLmZpbGVMaXN0XCIpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKG91dHB1dC5qb2luKFwiXCIpKTtcclxuXHJcbiAgICAgICAgICAgIC8vcmVzZXQgdGhlIGlucHV0IHRvIG51bGwgLSBuaWNlIGxpdHRsZSBjaHJvbWUgYnVnIVxyXG4gICAgICAgICAgICBldnQudGFyZ2V0LnZhbHVlID0gbnVsbDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCh0aGlzKS5vbihcImNsaWNrXCIsIFwiLnJlbW92ZUZpbGVcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZpbGVJZCA9ICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oXCJhXCIpLmRhdGEoXCJmaWxlaWRcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIGZpbGVzIGFycmF5IGFuZCBjaGVjayBpZiB0aGUgbmFtZSBvZiB0aGF0IGZpbGUgbWF0Y2hlcyBGaWxlTmFtZVxyXG4gICAgICAgICAgICAvLyBhbmQgZ2V0IHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlc1RvVXBsb2FkLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsZXNUb1VwbG9hZFtpXS5pZCA9PT0gZmlsZUlkKVxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVzVG9VcGxvYWQuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzVG9VcGxvYWQubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxlc1RvVXBsb2FkW2ldLmlkLmluZGV4T2Yoc2VjdGlvbklkZW50aWZpZXIpID49IDApXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZXNUb1VwbG9hZC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oXCIuZmlsZUxpc3RcIikuZW1wdHkoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgJG5hdkJsb2NrID0gJCgnLmNvbXBhbnktcHJvZmlsZSAubmF2LWJsb2NrJyk7XHJcbiAgICAgICAgdmFyICRhZGRJbnB1dCA9ICQoJy5hZGQtaW5wdXQnKTtcclxuICAgICAgICB2YXIgJHJlbW92ZUFjdHVhbEFkZHJlc3NNb2RhbCA9ICQoJyNyZW1vdmVBY3R1YWxBZGRyZXNzJyk7XHJcbiAgICAgICAgdmFyIGZpbGVzVG9VcGxvYWQgPSBbXTtcclxuICAgICAgICB2YXIgJHJlbW92ZUFjdHVhbEFkZHJlc3M7XHJcblxyXG4gICAgICAgICQoXCIjZmlsZXMxXCIpLmZpbGVVcGxvYWRlcihmaWxlc1RvVXBsb2FkLCBcImZpbGVzMVwiKTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5uYXYtcmVtb3ZlJywgZnVuY3Rpb24oIGV2ZW50ICkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCduYXYtcmVtb3ZlLWlucHV0JykpIHtcclxuICAgICAgICAgICAgICAgICRyZW1vdmVBY3R1YWxBZGRyZXNzTW9kYWwubW9kYWwoJ29wZW4nKTtcclxuICAgICAgICAgICAgICAgICRyZW1vdmVBY3R1YWxBZGRyZXNzID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykuY2xvc2VzdCgnLmlucHV0LW5hdi13cmFwcGVyJykuc2libGluZ3MoJy5pbnB1dC1uYXYtd3JhcHBlcicpLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmNsb3Nlc3QoJy5pbnB1dC1uYXYtd3JhcHBlcicpLnNpYmxpbmdzKCcuaW5wdXQtbmF2LXdyYXBwZXInKS5sZW5ndGggPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLmlucHV0LW5hdi13cmFwcGVyJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICQodGhpcykuY2xvc2VzdCgnLnRleHQtZmllbGQnKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHJlbW92ZUFjdHVhbEFkZHJlc3NNb2RhbC5vbignY2xpY2snLCAnLmJ0bi1jYW5jZWwtbW9kYWwnLCBmdW5jdGlvbiggZXZlbnQgKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICRyZW1vdmVBY3R1YWxBZGRyZXNzTW9kYWwubW9kYWwoJ2Nsb3NlJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRyZW1vdmVBY3R1YWxBZGRyZXNzTW9kYWwub24oJ2NsaWNrJywgJy5idG4tcmVtb3ZlLW1vZGFsJywgZnVuY3Rpb24oIGV2ZW50ICkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkcmVtb3ZlQWN0dWFsQWRkcmVzc01vZGFsLm1vZGFsKCdjbG9zZScpO1xyXG4gICAgICAgICAgICAkcmVtb3ZlQWN0dWFsQWRkcmVzcy5jbG9zZXN0KCcudGV4dC1maWVsZCcpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgJGFkZElucHV0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCBldmVudCApIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyICRpbnB1dE5hdldyYXAgPSAkKHRoaXMpLnNpYmxpbmdzKCcuaW5wdXQtbmF2LXdyYXBwZXInKTtcclxuICAgICAgICAgICAgdmFyICRpbnB1dCA9ICRpbnB1dE5hdldyYXAuZmluZCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgdmFyIGlsID0gJGlucHV0Lmxlbmd0aDtcclxuICAgICAgICAgICAgdmFyIGlkeCA9IGlsICsgMTtcclxuICAgICAgICAgICAgdmFyIG5ld0lucHV0O1xyXG4gICAgICAgICAgICB2YXIgaW5wdXROYXZXcmFwVHBsID0gJzxkaXYgY2xhc3M9XCJpbnB1dC1uYXYtd3JhcHBlclwiPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwibmF2LWJsb2NrXCI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwibmF2LXJlbW92ZSBuYXYtcmVtb3ZlLWlucHV0XCI+PGkgY2xhc3M9XCJmYSBmYS10cmFzaC1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvc3Bhbj5cXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L3NwYW4+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkKCRpbnB1dFtpbCAtIDFdKS52YWwoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuZXdJbnB1dCA9ICc8aW5wdXQgaWQ9XCInKyAkaW5wdXQuYXR0cignaWQnKSArJy0nKyBpZHggKydcIiAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3R5cGU9XCInKyAkaW5wdXQuYXR0cigndHlwZScpICsgJ1wiICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmFtZT1cIicrICRpbnB1dC5hdHRyKCduYW1lJykgKyAnLScrIGlkeCArJ1wiICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3M9XCInKyAkaW5wdXQuYXR0cignY2xhc3MnKSArJ1wiICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWU9XCJcIj4nO1xyXG5cclxuICAgICAgICAgICAgJCh0aGlzKS5iZWZvcmUoJChpbnB1dE5hdldyYXBUcGwpKTtcclxuXHJcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5pbnB1dC1uYXYtd3JhcHBlcicpLmVhY2goZnVuY3Rpb24oIGlkeCwgZWxlbSApIHtcclxuICAgICAgICAgICAgICAgIGlmICghJChlbGVtKS5jaGlsZHJlbignaW5wdXQnKS5pcygnaW5wdXQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoZWxlbSkucHJlcGVuZChuZXdJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJChlbGVtKS5maW5kKCcubmF2LWJsb2NrJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICQoZWxlbSkuZmluZCgnLm5hdi1ibG9jaycpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmlucHV0LW5hdi13cmFwcGVyJykuZWFjaChmdW5jdGlvbiggaWR4LCBlbGVtICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoZWxlbSkuY2hpbGRyZW4oJ2lucHV0JykuYXR0cigndHlwZScpID09PSAndGVsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIElucHV0bWFzayh7XCJtYXNrXCI6IFwiKzM4ICg5OTkpIDk5OS05OS05OVwiLCBcInBsYWNlaG9sZGVyXCI6IFwiX1wifSkubWFzaygkKGVsZW0pLmNoaWxkcmVuKCdpbnB1dCcpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vICRuYXZCbG9jay5vbignY2xpY2snLCAnLm5hdi1yZW1vdmUtaW5wdXQnLCBmdW5jdGlvbiggZXZlbnQgKSB7XHJcbiAgICAgICAgLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgJCh0aGlzKS5jbG9zZXN0KCcuaW5wdXQtbmF2LXdyYXBwZXInKS5yZW1vdmUoKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH0pO1xyXG59KShqUXVlcnkpOyJdfQ==