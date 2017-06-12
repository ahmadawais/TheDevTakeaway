! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = re.type(e);
        return "function" !== n && !re.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t, n) {
        if (re.isFunction(t)) return re.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return re.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ge.test(t)) return re.filter(t, e, n);
            t = re.filter(t, e)
        }
        return re.grep(e, function(e) {
            return Z.call(t, e) > -1 !== n
        })
    }

    function o(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function r(e) {
        var t = {};
        return re.each(e.match(xe) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        G.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s), re.ready()
    }

    function a() {
        this.expando = re.expando + a.uid++
    }

    function l(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Ee, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ae.test(n) ? re.parseJSON(n) : n)
                } catch (o) {}
                $e.set(e, t, n)
            } else n = void 0;
        return n
    }

    function c(e, t, n, i) {
        var o, r = 1,
            s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return re.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (re.cssNumber[t] ? "" : "px"),
            u = (re.cssNumber[t] || "px" !== c && +l) && Ie.exec(re.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do r = r || ".5", u /= r, re.style(e, t, u + c); while (r !== (r = a() / l) && 1 !== r && --s)
        }
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
    }

    function u(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], n) : n
    }

    function d(e, t) {
        for (var n = 0, i = e.length; i > n; n++) Ce.set(e[n], "globalEval", !t || Ce.get(t[n], "globalEval"))
    }

    function p(e, t, n, i, o) {
        for (var r, s, a, l, c, p, f = t.createDocumentFragment(), h = [], g = 0, v = e.length; v > g; g++)
            if (r = e[g], r || 0 === r)
                if ("object" === re.type(r)) re.merge(h, r.nodeType ? [r] : r);
                else if (Le.test(r)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (Ne.exec(r) || ["", ""])[1].toLowerCase(), l = He[a] || He._default, s.innerHTML = l[1] + re.htmlPrefilter(r) + l[2], p = l[0]; p--;) s = s.lastChild;
            re.merge(h, s.childNodes), s = f.firstChild, s.textContent = ""
        } else h.push(t.createTextNode(r));
        for (f.textContent = "", g = 0; r = h[g++];)
            if (i && re.inArray(r, i) > -1) o && o.push(r);
            else if (c = re.contains(r.ownerDocument, r), s = u(f.appendChild(r), "script"), c && d(s), n)
            for (p = 0; r = s[p++];) Pe.test(r.type || "") && n.push(r);
        return f
    }

    function f() {
        return !0
    }

    function h() {
        return !1
    }

    function g() {
        try {
            return G.activeElement
        } catch (e) {}
    }

    function v(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) v(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1) o = h;
        else if (!o) return e;
        return 1 === r && (s = o, o = function(e) {
            return re().off(e), s.apply(this, arguments)
        }, o.guid = s.guid || (s.guid = re.guid++)), e.each(function() {
            re.event.add(this, t, o, i, n)
        })
    }

    function m(e, t) {
        return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function b(e) {
        var t = Be.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function w(e, t) {
        var n, i, o, r, s, a, l, c;
        if (1 === t.nodeType) {
            if (Ce.hasData(e) && (r = Ce.access(e), s = Ce.set(t, r), c = r.events)) {
                delete s.handle, s.events = {};
                for (o in c)
                    for (n = 0, i = c[o].length; i > n; n++) re.event.add(t, o, c[o][n])
            }
            $e.hasData(e) && (a = $e.access(e), l = re.extend({}, a), $e.set(t, l))
        }
    }

    function x(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && je.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function k(e, t, n, i) {
        t = K.apply([], t);
        var o, r, s, a, l, c, d = 0,
            f = e.length,
            h = f - 1,
            g = t[0],
            v = re.isFunction(g);
        if (v || f > 1 && "string" == typeof g && !ie.checkClone && ze.test(g)) return e.each(function(o) {
            var r = e.eq(o);
            v && (t[0] = g.call(this, o, r.html())), k(r, t, n, i)
        });
        if (f && (o = p(t, e[0].ownerDocument, !1, e, i), r = o.firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
            for (s = re.map(u(o, "script"), y), a = s.length; f > d; d++) l = o, d !== h && (l = re.clone(l, !0, !0), a && re.merge(s, u(l, "script"))), n.call(e[d], l, d);
            if (a)
                for (c = s[s.length - 1].ownerDocument, re.map(s, b), d = 0; a > d; d++) l = s[d], Pe.test(l.type || "") && !Ce.access(l, "globalEval") && re.contains(c, l) && (l.src ? re._evalUrl && re._evalUrl(l.src) : re.globalEval(l.textContent.replace(Ue, "")))
        }
        return e
    }

    function T(e, t, n) {
        for (var i, o = t ? re.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || re.cleanData(u(i)), i.parentNode && (n && re.contains(i.ownerDocument, i) && d(u(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function S(e, t) {
        var n = re(t.createElement(e)).appendTo(t.body),
            i = re.css(n[0], "display");
        return n.detach(), i
    }

    function C(e) {
        var t = G,
            n = Ye[e];
        return n || (n = S(e, t), "none" !== n && n || (Xe = (Xe || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Xe[0].contentDocument, t.write(), t.close(), n = S(e, t), Xe.detach()), Ye[e] = n), n
    }

    function $(e, t, n) {
        var i, o, r, s, a = e.style;
        return n = n || Qe(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== s && void 0 !== s || re.contains(e.ownerDocument, e) || (s = re.style(e, t)), n && !ie.pixelMarginRight() && Ge.test(s) && Ve.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r), void 0 !== s ? s + "" : s
    }

    function A(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function E(e) {
        if (e in it) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;)
            if (e = nt[n] + t, e in it) return e
    }

    function _(e, t, n) {
        var i = Ie.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function I(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += re.css(e, n + De[r], !0, o)), i ? ("content" === n && (s -= re.css(e, "padding" + De[r], !0, o)), "margin" !== n && (s -= re.css(e, "border" + De[r] + "Width", !0, o))) : (s += re.css(e, "padding" + De[r], !0, o), "padding" !== n && (s += re.css(e, "border" + De[r] + "Width", !0, o)));
        return s
    }

    function D(t, n, i) {
        var o = !0,
            r = "width" === n ? t.offsetWidth : t.offsetHeight,
            s = Qe(t),
            a = "border-box" === re.css(t, "boxSizing", !1, s);
        if (G.msFullscreenElement && e.top !== e && t.getClientRects().length && (r = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= r || null == r) {
            if (r = $(t, n, s), (0 > r || null == r) && (r = t.style[n]), Ge.test(r)) return r;
            o = a && (ie.boxSizingReliable() || r === t.style[n]), r = parseFloat(r) || 0
        }
        return r + I(t, n, i || (a ? "border" : "content"), o, s) + "px"
    }

    function O(e, t) {
        for (var n, i, o, r = [], s = 0, a = e.length; a > s; s++) i = e[s], i.style && (r[s] = Ce.get(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Oe(i) && (r[s] = Ce.access(i, "olddisplay", C(i.nodeName)))) : (o = Oe(i), "none" === n && o || Ce.set(i, "olddisplay", o ? n : re.css(i, "display"))));
        for (s = 0; a > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
        return e
    }

    function j(e, t, n, i, o) {
        return new j.prototype.init(e, t, n, i, o)
    }

    function N() {
        return e.setTimeout(function() {
            ot = void 0
        }), ot = re.now()
    }

    function P(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = De[i], o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function H(e, t, n) {
        for (var i, o = (q.tweeners[t] || []).concat(q.tweeners["*"]), r = 0, s = o.length; s > r; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function L(e, t, n) {
        var i, o, r, s, a, l, c, u, d = this,
            p = {},
            f = e.style,
            h = e.nodeType && Oe(e),
            g = Ce.get(e, "fxshow");
        n.queue || (a = re._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, d.always(function() {
            d.always(function() {
                a.unqueued--, re.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = re.css(e, "display"), u = "none" === c ? Ce.get(e, "olddisplay") || C(e.nodeName) : c, "inline" === u && "none" === re.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", d.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (o = t[i], st.exec(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[i]) continue;
                    h = !0
                }
                p[i] = g && g[i] || re.style(e, i)
            } else c = void 0;
        if (re.isEmptyObject(p)) "inline" === ("none" === c ? C(e.nodeName) : c) && (f.display = c);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = Ce.access(e, "fxshow", {}), r && (g.hidden = !h), h ? re(e).show() : d.done(function() {
                re(e).hide()
            }), d.done(function() {
                var t;
                Ce.remove(e, "fxshow");
                for (t in p) re.style(e, t, p[t])
            });
            for (i in p) s = H(h ? g[i] : 0, i, d), i in g || (g[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function M(e, t) {
        var n, i, o, r, s;
        for (n in e)
            if (i = re.camelCase(n), o = t[i], r = e[n], re.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), s = re.cssHooks[i], s && "expand" in s) {
                r = s.expand(r), delete e[i];
                for (n in r) n in e || (e[n] = r[n], t[n] = o)
            } else t[i] = o
    }

    function q(e, t, n) {
        var i, o, r = 0,
            s = q.prefilters.length,
            a = re.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = ot || N(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(r);
                return a.notifyWith(e, [c, r, n]), 1 > r && l ? n : (a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: re.extend({}, t),
                opts: re.extend(!0, {
                    specialEasing: {},
                    easing: re.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ot || N(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = re.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (M(u, c.opts.specialEasing); s > r; r++)
            if (i = q.prefilters[r].call(c, e, u, c.opts)) return re.isFunction(i.stop) && (re._queueHooks(c.elem, c.opts.queue).stop = re.proxy(i.stop, i)), i;
        return re.map(u, H, c), re.isFunction(c.opts.start) && c.opts.start.call(e, c), re.fx.timer(re.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function F(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function W(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                r = t.toLowerCase().match(xe) || [];
            if (re.isFunction(n))
                for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function R(e, t, n, i) {
        function o(a) {
            var l;
            return r[a] = !0, re.each(e[a] || [], function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var r = {},
            s = e === $t;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function z(e, t) {
        var n, i, o = re.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && re.extend(!0, e, i), e
    }

    function B(e, t, n) {
        for (var i, o, r, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in a)
                if (a[o] && a[o].test(i)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in n) r = l[0];
        else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }

    function U(e, t, n, i) {
        var o, r, s, a, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (r = u.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (s = c[l + " " + r] || c["* " + r], !s)
                for (o in c)
                    if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                        s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0], u.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: s ? d : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function X(e, t, n, i) {
        var o;
        if (re.isArray(t)) re.each(t, function(t, o) {
            n || It.test(e) ? i(e, o) : X(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== re.type(t)) i(e, t);
        else
            for (o in t) X(e + "[" + o + "]", t[o], n, i)
    }

    function Y(e) {
        return re.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var V = [],
        G = e.document,
        Q = V.slice,
        K = V.concat,
        J = V.push,
        Z = V.indexOf,
        ee = {},
        te = ee.toString,
        ne = ee.hasOwnProperty,
        ie = {},
        oe = "2.2.3",
        re = function(e, t) {
            return new re.fn.init(e, t)
        },
        se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        le = /-([\da-z])/gi,
        ce = function(e, t) {
            return t.toUpperCase()
        };
    re.fn = re.prototype = {
        jquery: oe,
        constructor: re,
        selector: "",
        length: 0,
        toArray: function() {
            return Q.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Q.call(this)
        },
        pushStack: function(e) {
            var t = re.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return re.each(this, e)
        },
        map: function(e) {
            return this.pushStack(re.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(Q.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: J,
        sort: V.sort,
        splice: V.splice
    }, re.extend = re.fn.extend = function() {
        var e, t, n, i, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || re.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], i = e[t], s !== i && (c && i && (re.isPlainObject(i) || (o = re.isArray(i))) ? (o ? (o = !1, r = n && re.isArray(n) ? n : []) : r = n && re.isPlainObject(n) ? n : {}, s[t] = re.extend(c, r, i)) : void 0 !== i && (s[t] = i));
        return s
    }, re.extend({
        expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === re.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !re.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== re.type(e) || e.nodeType || re.isWindow(e)) return !1;
            if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e);
            return void 0 === t || ne.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = re.trim(e), e && (1 === e.indexOf("use strict") ? (t = G.createElement("script"), t.text = e, G.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(ae, "ms-").replace(le, ce)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var i, o = 0;
            if (n(e))
                for (i = e.length; i > o && t.call(e[o], o, e[o]) !== !1; o++);
            else
                for (o in e)
                    if (t.call(e[o], o, e[o]) === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(se, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? re.merge(i, "string" == typeof e ? [e] : e) : J.call(i, e)), i
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : Z.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; n > i; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i, o = [], r = 0, s = e.length, a = !n; s > r; r++) i = !t(e[r], r), i !== a && o.push(e[r]);
            return o
        },
        map: function(e, t, i) {
            var o, r, s = 0,
                a = [];
            if (n(e))
                for (o = e.length; o > s; s++) r = t(e[s], s, i), null != r && a.push(r);
            else
                for (s in e) r = t(e[s], s, i), null != r && a.push(r);
            return K.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            return "string" == typeof t && (n = e[t], t = e, e = n), re.isFunction(e) ? (i = Q.call(arguments, 2), o = function() {
                return e.apply(t || this, i.concat(Q.call(arguments)))
            }, o.guid = e.guid = e.guid || re.guid++, o) : void 0
        },
        now: Date.now,
        support: ie
    }), "function" == typeof Symbol && (re.fn[Symbol.iterator] = V[Symbol.iterator]), re.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var ue = function(e) {
        function t(e, t, n, i) {
            var o, r, s, a, l, c, d, f, h = t && t.ownerDocument,
                g = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
            if (!i && ((t ? t.ownerDocument || t : F) !== O && D(t), t = t || O, N)) {
                if (11 !== g && (c = me.exec(e)))
                    if (o = c[1]) {
                        if (9 === g) {
                            if (!(s = t.getElementById(o))) return n;
                            if (s.id === o) return n.push(s), n
                        } else if (h && (s = h.getElementById(o)) && M(t, s) && s.id === o) return n.push(s), n
                    } else {
                        if (c[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = c[3]) && x.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(o)), n
                    }
                if (x.qsa && !U[e + " "] && (!P || !P.test(e))) {
                    if (1 !== g) h = t, f = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(be, "\\$&") : t.setAttribute("id", a = q), d = C(e), r = d.length, l = pe.test(a) ? "#" + a : "[id='" + a + "']"; r--;) d[r] = l + " " + p(d[r]);
                        f = d.join(","), h = ye.test(e) && u(t.parentNode) || t
                    }
                    if (f) try {
                        return J.apply(n, h.querySelectorAll(f)), n
                    } catch (v) {} finally {
                        a === q && t.removeAttribute("id")
                    }
                }
            }
            return A(e.replace(ae, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[q] = !0, e
        }

        function o(e) {
            var t = O.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) k.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function p(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function f(e, t, n) {
            var i = t.dir,
                o = n && "parentNode" === i,
                r = R++;
            return t.first ? function(t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || o) return e(t, n, r)
            } : function(t, n, s) {
                var a, l, c, u = [W, r];
                if (s) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) {
                            if (c = t[q] || (t[q] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (a = l[i]) && a[0] === W && a[1] === r) return u[2] = a[2];
                            if (l[i] = u, u[2] = e(t, n, s)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, i) {
            for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
            return i
        }

        function v(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; l > a; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
            return s
        }

        function m(e, t, n, o, r, s) {
            return o && !o[q] && (o = m(o)), r && !r[q] && (r = m(r, s)), i(function(i, s, a, l) {
                var c, u, d, p = [],
                    f = [],
                    h = s.length,
                    m = i || g(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !i && t ? m : v(m, p, e, a, l),
                    b = n ? r || (i ? e : h || o) ? [] : s : y;
                if (n && n(y, b, a, l), o)
                    for (c = v(b, f), o(c, [], a, l), u = c.length; u--;)(d = c[u]) && (b[f[u]] = !(y[f[u]] = d));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                            r(null, b = [], c, l)
                        }
                        for (u = b.length; u--;)(d = b[u]) && (c = r ? ee(i, d) : p[u]) > -1 && (i[c] = !(s[c] = d))
                    }
                } else b = v(b === s ? b.splice(h, b.length) : b), r ? r(null, s, b, l) : J.apply(s, b)
            })
        }

        function y(e) {
            for (var t, n, i, o = e.length, r = k.relative[e[0].type], s = r || k.relative[" "], a = r ? 1 : 0, l = f(function(e) {
                    return e === t
                }, s, !0), c = f(function(e) {
                    return ee(t, e) > -1
                }, s, !0), u = [function(e, n, i) {
                    var o = !r && (i || n !== E) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                    return t = null, o
                }]; o > a; a++)
                if (n = k.relative[e[a].type]) u = [f(h(u), n)];
                else {
                    if (n = k.filter[e[a].type].apply(null, e[a].matches), n[q]) {
                        for (i = ++a; o > i && !k.relative[e[i].type]; i++);
                        return m(a > 1 && h(u), a > 1 && p(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ae, "$1"), n, i > a && y(e.slice(a, i)), o > i && y(e = e.slice(i)), o > i && p(e))
                    }
                    u.push(n)
                }
            return h(u)
        }

        function b(e, n) {
            var o = n.length > 0,
                r = e.length > 0,
                s = function(i, s, a, l, c) {
                    var u, d, p, f = 0,
                        h = "0",
                        g = i && [],
                        m = [],
                        y = E,
                        b = i || r && k.find.TAG("*", c),
                        w = W += null == y ? 1 : Math.random() || .1,
                        x = b.length;
                    for (c && (E = s === O || s || c); h !== x && null != (u = b[h]); h++) {
                        if (r && u) {
                            for (d = 0, s || u.ownerDocument === O || (D(u), a = !N); p = e[d++];)
                                if (p(u, s || O, a)) {
                                    l.push(u);
                                    break
                                }
                            c && (W = w)
                        }
                        o && ((u = !p && u) && f--, i && g.push(u))
                    }
                    if (f += h, o && h !== f) {
                        for (d = 0; p = n[d++];) p(g, m, s, a);
                        if (i) {
                            if (f > 0)
                                for (; h--;) g[h] || m[h] || (m[h] = Q.call(l));
                            m = v(m)
                        }
                        J.apply(l, m), c && !i && m.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (W = w, E = y), g
                };
            return o ? i(s) : s
        }
        var w, x, k, T, S, C, $, A, E, _, I, D, O, j, N, P, H, L, M, q = "sizzle" + 1 * new Date,
            F = e.document,
            W = 0,
            R = 0,
            z = n(),
            B = n(),
            U = n(),
            X = function(e, t) {
                return e === t && (I = !0), 0
            },
            Y = 1 << 31,
            V = {}.hasOwnProperty,
            G = [],
            Q = G.pop,
            K = G.push,
            J = G.push,
            Z = G.slice,
            ee = function(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(re),
            pe = new RegExp("^" + ie + "$"),
            fe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            be = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            xe = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            ke = function() {
                D()
            };
        try {
            J.apply(G = Z.call(F.childNodes), F.childNodes), G[F.childNodes.length].nodeType
        } catch (Te) {
            J = {
                apply: G.length ? function(e, t) {
                    K.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        x = t.support = {}, S = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, D = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : F;
            return i !== O && 9 === i.nodeType && i.documentElement ? (O = i, j = O.documentElement, N = !S(O), (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)), x.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = o(function(e) {
                return e.appendChild(O.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = ve.test(O.getElementsByClassName), x.getById = o(function(e) {
                return j.appendChild(e).id = q, !O.getElementsByName || !O.getElementsByName(q).length
            }), x.getById ? (k.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && N) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, k.filter.ID = function(e) {
                var t = e.replace(we, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete k.find.ID, k.filter.ID = function(e) {
                var t = e.replace(we, xe);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), k.find.TAG = x.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, k.find.CLASS = x.getElementsByClassName && function(e, t) {
                return "undefined" != typeof t.getElementsByClassName && N ? t.getElementsByClassName(e) : void 0
            }, H = [], P = [], (x.qsa = ve.test(O.querySelectorAll)) && (o(function(e) {
                j.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || P.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + q + "-]").length || P.push("~="), e.querySelectorAll(":checked").length || P.push(":checked"), e.querySelectorAll("a#" + q + "+*").length || P.push(".#.+[+~]")
            }), o(function(e) {
                var t = O.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
            })), (x.matchesSelector = ve.test(L = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && o(function(e) {
                x.disconnectedMatch = L.call(e, "div"), L.call(e, "[s!='']:x"), H.push("!=", re)
            }), P = P.length && new RegExp(P.join("|")), H = H.length && new RegExp(H.join("|")), t = ve.test(j.compareDocumentPosition), M = t || ve.test(j.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, X = t ? function(e, t) {
                if (e === t) return I = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === O || e.ownerDocument === F && M(F, e) ? -1 : t === O || t.ownerDocument === F && M(F, t) ? 1 : _ ? ee(_, e) - ee(_, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return I = !0, 0;
                var n, i = 0,
                    o = e.parentNode,
                    r = t.parentNode,
                    a = [e],
                    l = [t];
                if (!o || !r) return e === O ? -1 : t === O ? 1 : o ? -1 : r ? 1 : _ ? ee(_, e) - ee(_, t) : 0;
                if (o === r) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? s(a[i], l[i]) : a[i] === F ? -1 : l[i] === F ? 1 : 0
            }, O) : O
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== O && D(e), n = n.replace(ue, "='$1']"), x.matchesSelector && N && !U[n + " "] && (!H || !H.test(n)) && (!P || !P.test(n))) try {
                var i = L.call(e, n);
                if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (o) {}
            return t(n, O, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== O && D(e), M(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== O && D(e);
            var n = k.attrHandle[t.toLowerCase()],
                i = n && V.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !N) : void 0;
            return void 0 !== i ? i : x.attributes || !N ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                o = 0;
            if (I = !x.detectDuplicates, _ = !x.sortStable && e.slice(0), e.sort(X), I) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1)
            }
            return _ = null, e
        }, T = t.getText = function(e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[i++];) n += T(t);
            return n
        }, k = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(we, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var c, u, d, p, f, h, g = r !== s ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            m = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            b = !1;
                        if (v) {
                            if (r) {
                                for (; g;) {
                                    for (p = t; p = p[g];)
                                        if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? v.firstChild : v.lastChild], s && y) {
                                for (p = v, d = p[q] || (p[q] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === W && c[1], b = f && c[2], p = f && v.childNodes[f]; p = ++f && p && p[g] || (b = f = 0) || h.pop();)
                                    if (1 === p.nodeType && ++b && p === t) {
                                        u[e] = [W, f, b];
                                        break
                                    }
                            } else if (y && (p = t, d = p[q] || (p[q] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === W && c[1], b = f), b === !1)
                                for (;
                                    (p = ++f && p && p[g] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++b || (y && (d = p[q] || (p[q] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), u[e] = [W, b]), p !== t)););
                            return b -= o, b === i || b % i === 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, r = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[q] ? r(n) : r.length > 1 ? (o = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, o = r(e, n), s = o.length; s--;) i = ee(e, o[s]), e[i] = !(t[i] = o[s])
                    }) : function(e) {
                        return r(e, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        o = $(e.replace(ae, "$1"));
                    return o[q] ? i(function(e, t, n, i) {
                        for (var r, s = o(e, null, i, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                    }) : function(e, i, r) {
                        return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(we, xe),
                        function(t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, xe).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = N ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === j
                },
                focus: function(e) {
                    return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !k.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, k.pseudos.nth = k.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) k.pseudos[w] = a(w);
        for (w in {
                submit: !0,
                reset: !0
            }) k.pseudos[w] = l(w);
        return d.prototype = k.filters = k.pseudos, k.setFilters = new d, C = t.tokenize = function(e, n) {
            var i, o, r, s, a, l, c, u = B[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = e, l = [], c = k.preFilter; a;) {
                i && !(o = le.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ce.exec(a)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(ae, " ")
                }), a = a.slice(i.length));
                for (s in k.filter) !(o = fe[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: s,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : B(e, l).slice(0)
        }, $ = t.compile = function(e, t) {
            var n, i = [],
                o = [],
                r = U[e + " "];
            if (!r) {
                for (t || (t = C(e)), n = t.length; n--;) r = y(t[n]), r[q] ? i.push(r) : o.push(r);
                r = U(e, b(o, i)), r.selector = e
            }
            return r
        }, A = t.select = function(e, t, n, i) {
            var o, r, s, a, l, c = "function" == typeof e && e,
                d = !i && C(e = c.selector || e);
            if (n = n || [], 1 === d.length) {
                if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === t.nodeType && N && k.relative[r[1].type]) {
                    if (t = (k.find.ID(s.matches[0].replace(we, xe), t) || [])[0], !t) return n;
                    c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = fe.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !k.relative[a = s.type]);)
                    if ((l = k.find[a]) && (i = l(s.matches[0].replace(we, xe), ye.test(r[0].type) && u(t.parentNode) || t))) {
                        if (r.splice(o, 1), e = i.length && p(r), !e) return J.apply(n, i), n;
                        break
                    }
            }
            return (c || $(e, d))(i, t, !N, n, !t || ye.test(e) && u(t.parentNode) || t), n
        }, x.sortStable = q.split("").sort(X).join("") === q, x.detectDuplicates = !!I, D(), x.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(O.createElement("div"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || r(te, function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    re.find = ue, re.expr = ue.selectors, re.expr[":"] = re.expr.pseudos, re.uniqueSort = re.unique = ue.uniqueSort, re.text = ue.getText, re.isXMLDoc = ue.isXML, re.contains = ue.contains;
    var de = function(e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && re(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        pe = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        fe = re.expr.match.needsContext,
        he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        ge = /^.[^:#\[\.,]*$/;
    re.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? re.find.matchesSelector(i, e) ? [i] : [] : re.find.matches(e, re.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, re.fn.extend({
        find: function(e) {
            var t, n = this.length,
                i = [],
                o = this;
            if ("string" != typeof e) return this.pushStack(re(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (re.contains(o[t], this)) return !0
            }));
            for (t = 0; n > t; t++) re.find(e, o[t], i);
            return i = this.pushStack(n > 1 ? re.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && fe.test(e) ? re(e) : e || [], !1).length
        }
    });
    var ve, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ye = re.fn.init = function(e, t, n) {
            var i, o;
            if (!e) return this;
            if (n = n || ve, "string" == typeof e) {
                if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : me.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : G, !0)), he.test(i[1]) && re.isPlainObject(t))
                        for (i in t) re.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return o = G.getElementById(i[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = G, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this))
        };
    ye.prototype = re.fn, ve = re(G);
    var be = /^(?:parents|prev(?:Until|All))/,
        we = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    re.fn.extend({
        has: function(e) {
            var t = re(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (re.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, o = this.length, r = [], s = fe.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? re.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? Z.call(re(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(re.uniqueSort(re.merge(this.get(), re(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), re.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return de(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return de(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return de(e, "nextSibling")
        },
        prevAll: function(e) {
            return de(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return de(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return de(e, "previousSibling", n)
        },
        siblings: function(e) {
            return pe((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return pe(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || re.merge([], e.childNodes)
        }
    }, function(e, t) {
        re.fn[e] = function(n, i) {
            var o = re.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = re.filter(i, o)), this.length > 1 && (we[e] || re.uniqueSort(o), be.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var xe = /\S+/g;
    re.Callbacks = function(e) {
        e = "string" == typeof e ? r(e) : re.extend({}, e);
        var t, n, i, o, s = [],
            a = [],
            l = -1,
            c = function() {
                for (o = e.once, i = t = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < s.length;) s[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = s.length, n = !1);
                e.memory || (n = !1), t = !1, o && (s = n ? [] : "")
            },
            u = {
                add: function() {
                    return s && (n && !t && (l = s.length - 1, a.push(n)), function i(t) {
                        re.each(t, function(t, n) {
                            re.isFunction(n) ? e.unique && u.has(n) || s.push(n) : n && n.length && "string" !== re.type(n) && i(n)
                        })
                    }(arguments), n && !t && c()), this
                },
                remove: function() {
                    return re.each(arguments, function(e, t) {
                        for (var n;
                            (n = re.inArray(t, s, n)) > -1;) s.splice(n, 1), l >= n && l--
                    }), this
                },
                has: function(e) {
                    return e ? re.inArray(e, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return o = a = [], s = n = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return o = a = [], n || (s = n = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, n) {
                    return o || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || c()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return u
    }, re.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", re.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return re.Deferred(function(n) {
                            re.each(t, function(t, r) {
                                var s = re.isFunction(e[t]) && e[t];
                                o[r[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && re.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? re.extend(e, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, re.each(t, function(e, r) {
                var s = r[2],
                    a = r[3];
                i[r[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this
                }, o[r[0] + "With"] = s.fireWith
            }), i.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, n, i, o = 0,
                r = Q.call(arguments),
                s = r.length,
                a = 1 !== s || e && re.isFunction(e.promise) ? s : 0,
                l = 1 === a ? e : re.Deferred(),
                c = function(e, n, i) {
                    return function(o) {
                        n[e] = this, i[e] = arguments.length > 1 ? Q.call(arguments) : o, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) r[o] && re.isFunction(r[o].promise) ? r[o].promise().progress(c(o, n, t)).done(c(o, i, r)).fail(l.reject) : --a;
            return a || l.resolveWith(i, r), l.promise()
        }
    });
    var ke;
    re.fn.ready = function(e) {
        return re.ready.promise().done(e), this
    }, re.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? re.readyWait++ : re.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --re.readyWait : re.isReady) || (re.isReady = !0, e !== !0 && --re.readyWait > 0 || (ke.resolveWith(G, [re]), re.fn.triggerHandler && (re(G).triggerHandler("ready"), re(G).off("ready"))))
        }
    }), re.ready.promise = function(t) {
        return ke || (ke = re.Deferred(), "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? e.setTimeout(re.ready) : (G.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s))), ke.promise(t)
    }, re.ready.promise();
    var Te = function(e, t, n, i, o, r, s) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === re.type(n)) {
                o = !0;
                for (a in n) Te(e, t, a, n[a], !0, r, s)
            } else if (void 0 !== i && (o = !0, re.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(re(e), n)
                })), t))
                for (; l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
        },
        Se = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    a.uid = 1, a.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function(e) {
            if (!Se(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, Se(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[t] = n;
            else
                for (i in t) o[i] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, re.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i, o, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 === t) this.register(e);
                else {
                    re.isArray(t) ? i = t.concat(t.map(re.camelCase)) : (o = re.camelCase(t), t in r ? i = [t, o] : (i = o, i = i in r ? [i] : i.match(xe) || [])), n = i.length;
                    for (; n--;) delete r[i[n]]
                }(void 0 === t || re.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !re.isEmptyObject(t)
        }
    };
    var Ce = new a,
        $e = new a,
        Ae = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ee = /[A-Z]/g;
    re.extend({
        hasData: function(e) {
            return $e.hasData(e) || Ce.hasData(e)
        },
        data: function(e, t, n) {
            return $e.access(e, t, n)
        },
        removeData: function(e, t) {
            $e.remove(e, t)
        },
        _data: function(e, t, n) {
            return Ce.access(e, t, n)
        },
        _removeData: function(e, t) {
            Ce.remove(e, t)
        }
    }), re.fn.extend({
        data: function(e, t) {
            var n, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = $e.get(r), 1 === r.nodeType && !Ce.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(r, i, o[i])));
                    Ce.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                $e.set(this, e)
            }) : Te(this, function(t) {
                var n, i;
                if (r && void 0 === t) {
                    if (n = $e.get(r, e) || $e.get(r, e.replace(Ee, "-$&").toLowerCase()), void 0 !== n) return n;
                    if (i = re.camelCase(e), n = $e.get(r, i), void 0 !== n) return n;
                    if (n = l(r, i, void 0), void 0 !== n) return n
                } else i = re.camelCase(e), this.each(function() {
                    var n = $e.get(this, i);
                    $e.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && $e.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                $e.remove(this, e)
            })
        }
    }), re.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = Ce.get(e, t), n && (!i || re.isArray(n) ? i = Ce.access(e, t, re.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = re.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = re._queueHooks(e, t),
                s = function() {
                    re.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Ce.get(e, n) || Ce.access(e, n, {
                empty: re.Callbacks("once memory").add(function() {
                    Ce.remove(e, [t + "queue", n])
                })
            })
        }
    }), re.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? re.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = re.queue(this, e, t);
                re._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                re.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                o = re.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = Ce.get(r[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var _e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ie = new RegExp("^(?:([+-])=|)(" + _e + ")([a-z%]*)$", "i"),
        De = ["Top", "Right", "Bottom", "Left"],
        Oe = function(e, t) {
            return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
        },
        je = /^(?:checkbox|radio)$/i,
        Ne = /<([\w:-]+)/,
        Pe = /^$|\/(?:java|ecma)script/i,
        He = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    He.optgroup = He.option, He.tbody = He.tfoot = He.colgroup = He.caption = He.thead, He.th = He.td;
    var Le = /<|&#?\w+;/;
    ! function() {
        var e = G.createDocumentFragment(),
            t = e.appendChild(G.createElement("div")),
            n = G.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Me = /^key/,
        qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Fe = /^([^.]*)(?:\.(.+)|)/;
    re.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, s, a, l, c, u, d, p, f, h, g, v = Ce.get(e);
            if (v)
                for (n.handler && (r = n, n = r.handler, o = r.selector), n.guid || (n.guid = re.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function(t) {
                        return "undefined" != typeof re && re.event.triggered !== t.type ? re.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(xe) || [""], c = t.length; c--;) a = Fe.exec(t[c]) || [], f = g = a[1], h = (a[2] || "").split(".").sort(), f && (d = re.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = re.event.special[f] || {}, u = re.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && re.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, r), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, d.setup && d.setup.call(e, i, h, s) !== !1 || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), re.event.global[f] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, c, u, d, p, f, h, g, v = Ce.hasData(e) && Ce.get(e);
            if (v && (l = v.events)) {
                for (t = (t || "").match(xe) || [""], c = t.length; c--;)
                    if (a = Fe.exec(t[c]) || [], f = g = a[1], h = (a[2] || "").split(".").sort(), f) {
                        for (d = re.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) u = p[r], !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                        s && !p.length && (d.teardown && d.teardown.call(e, h, v.handle) !== !1 || re.removeEvent(e, f, v.handle), delete l[f])
                    } else
                        for (f in l) re.event.remove(e, f + t[c], n, i, !0);
                re.isEmptyObject(l) && Ce.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = re.event.fix(e);
            var t, n, i, o, r, s = [],
                a = Q.call(arguments),
                l = (Ce.get(this, "events") || {})[e.type] || [],
                c = re.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = re.event.handlers.call(this, e, l), t = 0;
                    (o = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r, e.data = r.data, i = ((re.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], n = 0; a > n; n++) r = t[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? re(o, this).index(l) > -1 : re.find(o, this, null, [l]).length), i[o] && i.push(r);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, r = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || G, i = n.documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[re.expando]) return e;
            var t, n, i, o = e.type,
                r = e,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = qe.test(o) ? this.mouseHooks : Me.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new re.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
            return e.target || (e.target = G), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== g() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === g() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && re.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return re.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, re.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, re.Event = function(e, t) {
        return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : h) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(e, t)
    }, re.Event.prototype = {
        constructor: re.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, re.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        re.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    o = e.relatedTarget,
                    r = e.handleObj;
                return o && (o === i || re.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), re.fn.extend({
        on: function(e, t, n, i) {
            return v(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return v(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, re(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = h), this.each(function() {
                re.event.remove(this, e, n, t)
            })
        }
    });
    var We = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Re = /<script|<style|<link/i,
        ze = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Be = /^true\/(.*)/,
        Ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    re.extend({
        htmlPrefilter: function(e) {
            return e.replace(We, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, o, r, s, a = e.cloneNode(!0),
                l = re.contains(e.ownerDocument, e);
            if (!(ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
                for (s = u(a), r = u(e), i = 0, o = r.length; o > i; i++) x(r[i], s[i]);
            if (t)
                if (n)
                    for (r = r || u(e), s = s || u(a), i = 0, o = r.length; o > i; i++) w(r[i], s[i]);
                else w(e, a);
            return s = u(a, "script"), s.length > 0 && d(s, !l && u(e, "script")), a
        },
        cleanData: function(e) {
            for (var t, n, i, o = re.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (Se(n)) {
                    if (t = n[Ce.expando]) {
                        if (t.events)
                            for (i in t.events) o[i] ? re.event.remove(n, i) : re.removeEvent(n, i, t.handle);
                        n[Ce.expando] = void 0
                    }
                    n[$e.expando] && (n[$e.expando] = void 0)
                }
        }
    }), re.fn.extend({
        domManip: k,
        detach: function(e) {
            return T(this, e, !0)
        },
        remove: function(e) {
            return T(this, e)
        },
        text: function(e) {
            return Te(this, function(e) {
                return void 0 === e ? re.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return k(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = m(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return k(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = m(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return k(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return k(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (re.cleanData(u(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return re.clone(this, e, t)
            })
        },
        html: function(e) {
            return Te(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Re.test(e) && !He[(Ne.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = re.htmlPrefilter(e);
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (re.cleanData(u(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return k(this, arguments, function(t) {
                var n = this.parentNode;
                re.inArray(this, e) < 0 && (re.cleanData(u(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), re.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        re.fn[e] = function(e) {
            for (var n, i = [], o = re(e), r = o.length - 1, s = 0; r >= s; s++) n = s === r ? this : this.clone(!0), re(o[s])[t](n), J.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Xe, Ye = {
            HTML: "block",
            BODY: "block"
        },
        Ve = /^margin/,
        Ge = new RegExp("^(" + _e + ")(?!px)[a-z%]+$", "i"),
        Qe = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Ke = function(e, t, n, i) {
            var o, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            o = n.apply(e, i || []);
            for (r in t) e.style[r] = s[r];
            return o
        },
        Je = G.documentElement;
    ! function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Je.appendChild(s);
            var t = e.getComputedStyle(a);
            n = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", o = "4px" === t.marginRight, Je.removeChild(s)
        }
        var n, i, o, r, s = G.createElement("div"),
            a = G.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), re.extend(ie, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == i && t(), i
            },
            pixelMarginRight: function() {
                return null == i && t(), o
            },
            reliableMarginLeft: function() {
                return null == i && t(), r
            },
            reliableMarginRight: function() {
                var t, n = a.appendChild(G.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Je.appendChild(s), t = !parseFloat(e.getComputedStyle(n).marginRight), Je.removeChild(s), a.removeChild(n), t
            }
        }))
    }();
    var Ze = /^(none|table(?!-c[ea]).+)/,
        et = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        tt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        nt = ["Webkit", "O", "Moz", "ms"],
        it = G.createElement("div").style;
    re.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = $(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = re.camelCase(t),
                    l = e.style;
                return t = re.cssProps[a] || (re.cssProps[a] = E(a) || a), s = re.cssHooks[t] || re.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t] : (r = typeof n, "string" === r && (o = Ie.exec(n)) && o[1] && (n = c(e, t, o), r = "number"), void(null != n && n === n && ("number" === r && (n += o && o[3] || (re.cssNumber[a] ? "" : "px")), ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))))
            }
        },
        css: function(e, t, n, i) {
            var o, r, s, a = re.camelCase(t);
            return t = re.cssProps[a] || (re.cssProps[a] = E(a) || a), s = re.cssHooks[t] || re.cssHooks[a], s && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = $(e, t, i)), "normal" === o && t in tt && (o = tt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
        }
    }), re.each(["height", "width"], function(e, t) {
        re.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? Ze.test(re.css(e, "display")) && 0 === e.offsetWidth ? Ke(e, et, function() {
                    return D(e, t, i)
                }) : D(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var o, r = i && Qe(e),
                    s = i && I(e, t, i, "border-box" === re.css(e, "boxSizing", !1, r), r);
                return s && (o = Ie.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = re.css(e, t)), _(e, n, s)
            }
        }
    }), re.cssHooks.marginLeft = A(ie.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat($(e, "marginLeft")) || e.getBoundingClientRect().left - Ke(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), re.cssHooks.marginRight = A(ie.reliableMarginRight, function(e, t) {
        return t ? Ke(e, {
            display: "inline-block"
        }, $, [e, "marginRight"]) : void 0
    }), re.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        re.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + De[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, Ve.test(e) || (re.cssHooks[e + t].set = _)
    }), re.fn.extend({
        css: function(e, t) {
            return Te(this, function(e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (re.isArray(t)) {
                    for (i = Qe(e), o = t.length; o > s; s++) r[t[s]] = re.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? re.style(e, t, n) : re.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return O(this, !0)
        },
        hide: function() {
            return O(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Oe(this) ? re(this).show() : re(this).hide()
            })
        }
    }), re.Tween = j, j.prototype = {
        constructor: j,
        init: function(e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || re.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (re.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = j.propHooks[this.prop];
            return e && e.get ? e.get(this) : j.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = j.propHooks[this.prop];
            return this.options.duration ? this.pos = t = re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
        }
    }, j.prototype.init.prototype = j.prototype, j.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                re.fx.step[e.prop] ? re.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[re.cssProps[e.prop]] && !re.cssHooks[e.prop] ? e.elem[e.prop] = e.now : re.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, re.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, re.fx = j.prototype.init, re.fx.step = {};
    var ot, rt, st = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;
    re.Animation = re.extend(q, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return c(n.elem, e, Ie.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                re.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(xe);
                for (var n, i = 0, o = e.length; o > i; i++) n = e[i], q.tweeners[n] = q.tweeners[n] || [], q.tweeners[n].unshift(t)
            },
            prefilters: [L],
            prefilter: function(e, t) {
                t ? q.prefilters.unshift(e) : q.prefilters.push(e)
            }
        }), re.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? re.extend({}, e) : {
                complete: n || !n && t || re.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !re.isFunction(t) && t
            };
            return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
            }, i
        }, re.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Oe).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var o = re.isEmptyObject(e),
                    r = re.speed(t, n, i),
                    s = function() {
                        var t = q(this, re.extend({}, e), r);
                        (o || Ce.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        r = re.timers,
                        s = Ce.get(this);
                    if (o) s[o] && s[o].stop && i(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && at.test(o) && i(s[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                    !t && n || re.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = Ce.get(this),
                        i = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        r = re.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, re.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), re.each(["toggle", "show", "hide"], function(e, t) {
            var n = re.fn[t];
            re.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, i, o)
            }
        }), re.each({
            slideDown: P("show"),
            slideUp: P("hide"),
            slideToggle: P("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            re.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), re.timers = [], re.fx.tick = function() {
            var e, t = 0,
                n = re.timers;
            for (ot = re.now(); t < n.length; t++) e = n[t],
                e() || n[t] !== e || n.splice(t--, 1);
            n.length || re.fx.stop(), ot = void 0
        }, re.fx.timer = function(e) {
            re.timers.push(e), e() ? re.fx.start() : re.timers.pop()
        }, re.fx.interval = 13, re.fx.start = function() {
            rt || (rt = e.setInterval(re.fx.tick, re.fx.interval))
        }, re.fx.stop = function() {
            e.clearInterval(rt), rt = null
        }, re.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, re.fn.delay = function(t, n) {
            return t = re.fx ? re.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                var o = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(o)
                }
            })
        },
        function() {
            var e = G.createElement("input"),
                t = G.createElement("select"),
                n = t.appendChild(G.createElement("option"));
            e.type = "checkbox", ie.checkOn = "" !== e.value, ie.optSelected = n.selected, t.disabled = !0, ie.optDisabled = !n.disabled, e = G.createElement("input"), e.value = "t", e.type = "radio", ie.radioValue = "t" === e.value
        }();
    var lt, ct = re.expr.attrHandle;
    re.fn.extend({
        attr: function(e, t) {
            return Te(this, re.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                re.removeAttr(this, e)
            })
        }
    }), re.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? re.prop(e, t, n) : (1 === r && re.isXMLDoc(e) || (t = t.toLowerCase(), o = re.attrHooks[t] || (re.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void re.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = re.find.attr(e, t), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ie.radioValue && "radio" === t && re.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i, o = 0,
                r = t && t.match(xe);
            if (r && 1 === e.nodeType)
                for (; n = r[o++];) i = re.propFix[n] || n, re.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        }
    }), lt = {
        set: function(e, t, n) {
            return t === !1 ? re.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, re.each(re.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ct[t] || re.find.attr;
        ct[t] = function(e, t, i) {
            var o, r;
            return i || (r = ct[t], ct[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, ct[t] = r), o
        }
    });
    var ut = /^(?:input|select|textarea|button)$/i,
        dt = /^(?:a|area)$/i;
    re.fn.extend({
        prop: function(e, t) {
            return Te(this, re.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[re.propFix[e] || e]
            })
        }
    }), re.extend({
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && re.isXMLDoc(e) || (t = re.propFix[t] || t, o = re.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = re.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ut.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), ie.optSelected || (re.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        re.propFix[this.toLowerCase()] = this
    });
    var pt = /[\t\r\n\f]/g;
    re.fn.extend({
        addClass: function(e) {
            var t, n, i, o, r, s, a, l = 0;
            if (re.isFunction(e)) return this.each(function(t) {
                re(this).addClass(e.call(this, t, F(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(xe) || []; n = this[l++];)
                    if (o = F(n), i = 1 === n.nodeType && (" " + o + " ").replace(pt, " ")) {
                        for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        a = re.trim(i), o !== a && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, r, s, a, l = 0;
            if (re.isFunction(e)) return this.each(function(t) {
                re(this).removeClass(e.call(this, t, F(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(xe) || []; n = this[l++];)
                    if (o = F(n), i = 1 === n.nodeType && (" " + o + " ").replace(pt, " ")) {
                        for (s = 0; r = t[s++];)
                            for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                        a = re.trim(i), o !== a && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : re.isFunction(e) ? this.each(function(n) {
                re(this).toggleClass(e.call(this, n, F(this), t), t)
            }) : this.each(function() {
                var t, i, o, r;
                if ("string" === n)
                    for (i = 0, o = re(this), r = e.match(xe) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = F(this), t && Ce.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ce.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + F(n) + " ").replace(pt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var ft = /\r/g,
        ht = /[\x20\t\r\n\f]+/g;
    re.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = re.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, re(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : re.isArray(o) && (o = re.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = re.valHooks[o.type] || re.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(ft, "") : null == n ? "" : n)) : void 0
        }
    }), re.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = re.find.attr(e, "value");
                    return null != t ? t : re.trim(re.text(e)).replace(ht, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                        if (n = i[l], (n.selected || l === o) && (ie.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !re.nodeName(n.parentNode, "optgroup"))) {
                            if (t = re(n).val(), r) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = re.makeArray(t), s = o.length; s--;) i = o[s], (i.selected = re.inArray(re.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), re.each(["radio", "checkbox"], function() {
        re.valHooks[this] = {
            set: function(e, t) {
                return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) > -1 : void 0
            }
        }, ie.checkOn || (re.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var gt = /^(?:focusinfocus|focusoutblur)$/;
    re.extend(re.event, {
        trigger: function(t, n, i, o) {
            var r, s, a, l, c, u, d, p = [i || G],
                f = ne.call(t, "type") ? t.type : t,
                h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || G, 3 !== i.nodeType && 8 !== i.nodeType && !gt.test(f + re.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), c = f.indexOf(":") < 0 && "on" + f, t = t[re.expando] ? t : new re.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : re.makeArray(n, [t]), d = re.event.special[f] || {}, o || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                if (!o && !d.noBubble && !re.isWindow(i)) {
                    for (l = d.delegateType || f, gt.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (i.ownerDocument || G) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (r = 0;
                    (s = p[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : d.bindType || f, u = (Ce.get(s, "events") || {})[t.type] && Ce.get(s, "handle"), u && u.apply(s, n), u = c && s[c], u && u.apply && Se(s) && (t.result = u.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = f, o || t.isDefaultPrevented() || d._default && d._default.apply(p.pop(), n) !== !1 || !Se(i) || c && re.isFunction(i[f]) && !re.isWindow(i) && (a = i[c], a && (i[c] = null), re.event.triggered = f, i[f](), re.event.triggered = void 0, a && (i[c] = a)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = re.extend(new re.Event, n, {
                type: e,
                isSimulated: !0
            });
            re.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
        }
    }), re.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                re.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? re.event.trigger(e, t, n, !0) : void 0
        }
    }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        re.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), re.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), ie.focusin = "onfocusin" in e, ie.focusin || re.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            re.event.simulate(t, e.target, re.event.fix(e))
        };
        re.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = Ce.access(i, t);
                o || i.addEventListener(e, n, !0), Ce.access(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = Ce.access(i, t) - 1;
                o ? Ce.access(i, t, o) : (i.removeEventListener(e, n, !0), Ce.remove(i, t))
            }
        }
    });
    var vt = e.location,
        mt = re.now(),
        yt = /\?/;
    re.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, re.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (i) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t), n
    };
    var bt = /#.*$/,
        wt = /([?&])_=[^&]*/,
        xt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Tt = /^(?:GET|HEAD)$/,
        St = /^\/\//,
        Ct = {},
        $t = {},
        At = "*/".concat("*"),
        Et = G.createElement("a");
    Et.href = vt.href, re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vt.href,
            type: "GET",
            isLocal: kt.test(vt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": At,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": re.parseJSON,
                "text xml": re.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? z(z(e, re.ajaxSettings), t) : z(re.ajaxSettings, e)
        },
        ajaxPrefilter: W(Ct),
        ajaxTransport: W($t),
        ajax: function(t, n) {
            function i(t, n, i, a) {
                var c, d, y, b, x, T = n;
                2 !== w && (w = 2, l && e.clearTimeout(l), o = void 0, s = a || "", k.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, i && (b = B(p, k, i)), b = U(p, b, k, c), c ? (p.ifModified && (x = k.getResponseHeader("Last-Modified"), x && (re.lastModified[r] = x), x = k.getResponseHeader("etag"), x && (re.etag[r] = x)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, d = b.data, y = b.error, c = !y)) : (y = T, !t && T || (T = "error", 0 > t && (t = 0))), k.status = t, k.statusText = (n || T) + "", c ? g.resolveWith(f, [d, T, k]) : g.rejectWith(f, [k, T, y]), k.statusCode(m), m = void 0, u && h.trigger(c ? "ajaxSuccess" : "ajaxError", [k, p, c ? d : y]), v.fireWith(f, [k, T]), u && (h.trigger("ajaxComplete", [k, p]), --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var o, r, s, a, l, c, u, d, p = re.ajaxSetup({}, n),
                f = p.context || p,
                h = p.context && (f.nodeType || f.jquery) ? re(f) : re.event,
                g = re.Deferred(),
                v = re.Callbacks("once memory"),
                m = p.statusCode || {},
                y = {},
                b = {},
                w = 0,
                x = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!a)
                                for (a = {}; t = xt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return w || (e = b[n] = b[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return w || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > w)
                                for (t in e) m[t] = [m[t], e[t]];
                            else k.always(e[k.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return o && o.abort(t), i(0, t), this
                    }
                };
            if (g.promise(k).complete = v.add, k.success = k.done, k.error = k.fail, p.url = ((t || p.url || vt.href) + "").replace(bt, "").replace(St, vt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = re.trim(p.dataType || "*").toLowerCase().match(xe) || [""], null == p.crossDomain) {
                c = G.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = Et.protocol + "//" + Et.host != c.protocol + "//" + c.host
                } catch (T) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = re.param(p.data, p.traditional)), R(Ct, p, n, k), 2 === w) return k;
            u = re.event && p.global, u && 0 === re.active++ && re.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Tt.test(p.type), r = p.url, p.hasContent || (p.data && (r = p.url += (yt.test(r) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wt.test(r) ? r.replace(wt, "$1_=" + mt++) : r + (yt.test(r) ? "&" : "?") + "_=" + mt++)), p.ifModified && (re.lastModified[r] && k.setRequestHeader("If-Modified-Since", re.lastModified[r]), re.etag[r] && k.setRequestHeader("If-None-Match", re.etag[r])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + At + "; q=0.01" : "") : p.accepts["*"]);
            for (d in p.headers) k.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (p.beforeSend.call(f, k, p) === !1 || 2 === w)) return k.abort();
            x = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) k[d](p[d]);
            if (o = R($t, p, n, k)) {
                if (k.readyState = 1, u && h.trigger("ajaxSend", [k, p]), 2 === w) return k;
                p.async && p.timeout > 0 && (l = e.setTimeout(function() {
                    k.abort("timeout")
                }, p.timeout));
                try {
                    w = 1, o.send(y, i)
                } catch (T) {
                    if (!(2 > w)) throw T;
                    i(-1, T)
                }
            } else i(-1, "No Transport");
            return k
        },
        getJSON: function(e, t, n) {
            return re.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return re.get(e, void 0, t, "script")
        }
    }), re.each(["get", "post"], function(e, t) {
        re[t] = function(e, n, i, o) {
            return re.isFunction(n) && (o = o || i, i = n, n = void 0), re.ajax(re.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, re.isPlainObject(e) && e))
        }
    }), re._evalUrl = function(e) {
        return re.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, re.fn.extend({
        wrapAll: function(e) {
            var t;
            return re.isFunction(e) ? this.each(function(t) {
                re(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = re(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return re.isFunction(e) ? this.each(function(t) {
                re(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = re(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = re.isFunction(e);
            return this.each(function(n) {
                re(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }
    }), re.expr.filters.hidden = function(e) {
        return !re.expr.filters.visible(e)
    }, re.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var _t = /%20/g,
        It = /\[\]$/,
        Dt = /\r?\n/g,
        Ot = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;
    re.param = function(e, t) {
        var n, i = [],
            o = function(e, t) {
                t = re.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) X(n, e[n], t, o);
        return i.join("&").replace(_t, "+")
    }, re.fn.extend({
        serialize: function() {
            return re.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = re.prop(this, "elements");
                return e ? re.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !re(this).is(":disabled") && jt.test(this.nodeName) && !Ot.test(e) && (this.checked || !je.test(e))
            }).map(function(e, t) {
                var n = re(this).val();
                return null == n ? null : re.isArray(n) ? re.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    }), re.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    };
    var Nt = {
            0: 200,
            1223: 204
        },
        Pt = re.ajaxSettings.xhr();
    ie.cors = !!Pt && "withCredentials" in Pt, ie.ajax = Pt = !!Pt, re.ajaxTransport(function(t) {
        var n, i;
        return ie.cors || Pt && !t.crossDomain ? {
            send: function(o, r) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (s in o) a.setRequestHeader(s, o[s]);
                n = function(e) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Nt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (l) {
                    if (n) throw l
                }
            },
            abort: function() {
                n && n()
            }
        } : void 0
    }), re.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return re.globalEval(e), e
            }
        }
    }), re.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), re.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, o) {
                    t = re("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), G.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Ht = [],
        Lt = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ht.pop() || re.expando + "_" + mt++;
            return this[e] = !0, e
        }
    }), re.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, r, s, a = t.jsonp !== !1 && (Lt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Lt, "$1" + o) : t.jsonp !== !1 && (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return s || re.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            void 0 === r ? re(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Ht.push(o)), s && re.isFunction(r) && r(s[0]), s = r = void 0
        }), "script") : void 0
    }), re.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || G;
        var i = he.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = p([e], t, o), o && o.length && re(o).remove(), re.merge([], i.childNodes))
    };
    var Mt = re.fn.load;
    re.fn.load = function(e, t, n) {
        if ("string" != typeof e && Mt) return Mt.apply(this, arguments);
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = re.trim(e.slice(a)), e = e.slice(0, a)), re.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && re.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, s.html(i ? re("<div>").append(re.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        re.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), re.expr.filters.animated = function(e) {
        return re.grep(re.timers, function(t) {
            return e === t.elem
        }).length
    }, re.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a, l, c, u = re.css(e, "position"),
                d = re(e),
                p = {};
            "static" === u && (e.style.position = "relative"), a = d.offset(), r = re.css(e, "top"), l = re.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (i = d.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), re.isFunction(t) && (t = t.call(e, n, re.extend({}, a))), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + o), "using" in t ? t.using.call(e, p) : d.css(p)
        }
    }, re.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                re.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                r = i && i.ownerDocument;
            return r ? (t = r.documentElement, re.contains(t, i) ? (o = i.getBoundingClientRect(), n = Y(r), {
                top: o.top + n.pageYOffset - t.clientTop,
                left: o.left + n.pageXOffset - t.clientLeft
            }) : o) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === re.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (i = e.offset()), i.top += re.css(e[0], "borderTopWidth", !0), i.left += re.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - re.css(n, "marginTop", !0),
                    left: t.left - i.left - re.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === re.css(e, "position");) e = e.offsetParent;
                return e || Je
            })
        }
    }), re.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        re.fn[e] = function(i) {
            return Te(this, function(e, i, o) {
                var r = Y(e);
                return void 0 === o ? r ? r[t] : e[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o)
            }, e, i, arguments.length)
        }
    }), re.each(["top", "left"], function(e, t) {
        re.cssHooks[t] = A(ie.pixelPosition, function(e, n) {
            return n ? (n = $(e, t), Ge.test(n) ? re(e).position()[t] + "px" : n) : void 0
        })
    }), re.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        re.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            re.fn[i] = function(i, o) {
                var r = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || o === !0 ? "margin" : "border");
                return Te(this, function(t, n, i) {
                    var o;
                    return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? re.css(t, n, s) : re.style(t, n, i, s)
                }, t, r ? i : void 0, r, null)
            }
        })
    }), re.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }), re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return re
    });
    var qt = e.jQuery,
        Ft = e.$;
    return re.noConflict = function(t) {
        return e.$ === re && (e.$ = Ft), t && e.jQuery === re && (e.jQuery = qt), re
    }, t || (e.jQuery = e.$ = re), re
}),
function() {
    function e(e, t, n) {
        return e.call.apply(e.bind, arguments)
    }

    function t(e, t, n) {
        if (!e) throw Error();
        if (2 < arguments.length) {
            var i = Array.prototype.slice.call(arguments, 2);
            return function() {
                var n = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(n, i), e.apply(t, n)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }

    function n(i, o, r) {
        return n = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? e : t, n.apply(null, arguments)
    }

    function i(e, t) {
        this.a = e, this.m = t || e, this.c = this.m.document
    }

    function o(e, t, n, i) {
        if (t = e.c.createElement(t), n)
            for (var o in n) n.hasOwnProperty(o) && ("style" == o ? t.style.cssText = n[o] : t.setAttribute(o, n[o]));
        return i && t.appendChild(e.c.createTextNode(i)), t
    }

    function r(e, t, n) {
        e = e.c.getElementsByTagName(t)[0], e || (e = document.documentElement), e.insertBefore(n, e.lastChild)
    }

    function s(e) {
        e.parentNode && e.parentNode.removeChild(e)
    }

    function a(e, t, n) {
        t = t || [], n = n || [];
        for (var i = e.className.split(/\s+/), o = 0; o < t.length; o += 1) {
            for (var r = !1, s = 0; s < i.length; s += 1)
                if (t[o] === i[s]) {
                    r = !0;
                    break
                }
            r || i.push(t[o])
        }
        for (t = [], o = 0; o < i.length; o += 1) {
            for (r = !1, s = 0; s < n.length; s += 1)
                if (i[o] === n[s]) {
                    r = !0;
                    break
                }
            r || t.push(i[o])
        }
        e.className = t.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function l(e, t) {
        for (var n = e.className.split(/\s+/), i = 0, o = n.length; i < o; i++)
            if (n[i] == t) return !0;
        return !1
    }

    function c(e) {
        if ("string" == typeof e.f) return e.f;
        var t = e.m.location.protocol;
        return "about:" == t && (t = e.a.location.protocol), "https:" == t ? "https:" : "http:"
    }

    function u(e) {
        return e.m.location.hostname || e.a.location.hostname
    }

    function d(e, t, n) {
        function i() {
            c && s && a && (c(l), c = null)
        }
        t = o(e, "link", {
            rel: "stylesheet",
            href: t,
            media: "all"
        });
        var s = !1,
            a = !0,
            l = null,
            c = n || null;
        ie ? (t.onload = function() {
            s = !0, i()
        }, t.onerror = function() {
            s = !0, l = Error("Stylesheet failed to load"), i()
        }) : setTimeout(function() {
            s = !0, i()
        }, 0), r(e, "head", t)
    }

    function p(e, t, n, i) {
        var r = e.c.getElementsByTagName("head")[0];
        if (r) {
            var s = o(e, "script", {
                    src: t
                }),
                a = !1;
            return s.onload = s.onreadystatechange = function() {
                a || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (a = !0, n && n(null), s.onload = s.onreadystatechange = null, "HEAD" == s.parentNode.tagName && r.removeChild(s))
            }, r.appendChild(s), setTimeout(function() {
                a || (a = !0, n && n(Error("Script load timeout")))
            }, i || 5e3), s
        }
        return null
    }

    function f() {
        this.a = 0, this.c = null
    }

    function h(e) {
        return e.a++,
            function() {
                e.a--, v(e)
            }
    }

    function g(e, t) {
        e.c = t, v(e)
    }

    function v(e) {
        0 == e.a && e.c && (e.c(), e.c = null)
    }

    function m(e) {
        this.a = e || "-"
    }

    function y(e, t) {
        this.c = e, this.f = 4, this.a = "n";
        var n = (t || "n4").match(/^([nio])([1-9])$/i);
        n && (this.a = n[1], this.f = parseInt(n[2], 10))
    }

    function b(e) {
        return k(e) + " " + (e.f + "00") + " 300px " + w(e.c)
    }

    function w(e) {
        var t = [];
        e = e.split(/,\s*/);
        for (var n = 0; n < e.length; n++) {
            var i = e[n].replace(/['"]/g, ""); - 1 != i.indexOf(" ") || /^\d/.test(i) ? t.push("'" + i + "'") : t.push(i)
        }
        return t.join(",")
    }

    function x(e) {
        return e.a + e.f
    }

    function k(e) {
        var t = "normal";
        return "o" === e.a ? t = "oblique" : "i" === e.a && (t = "italic"), t
    }

    function T(e) {
        var t = 4,
            n = "n",
            i = null;
        return e && ((i = e.match(/(normal|oblique|italic)/i)) && i[1] && (n = i[1].substr(0, 1).toLowerCase()), (i = e.match(/([1-9]00|normal|bold)/i)) && i[1] && (/bold/i.test(i[1]) ? t = 7 : /[1-9]00/.test(i[1]) && (t = parseInt(i[1].substr(0, 1), 10)))), n + t
    }

    function S(e, t) {
        this.c = e, this.f = e.m.document.documentElement, this.h = t, this.a = new m("-"), this.j = !1 !== t.events, this.g = !1 !== t.classes
    }

    function C(e) {
        e.g && a(e.f, [e.a.c("wf", "loading")]), A(e, "loading")
    }

    function $(e) {
        if (e.g) {
            var t = l(e.f, e.a.c("wf", "active")),
                n = [],
                i = [e.a.c("wf", "loading")];
            t || n.push(e.a.c("wf", "inactive")), a(e.f, n, i)
        }
        A(e, "inactive")
    }

    function A(e, t, n) {
        e.j && e.h[t] && (n ? e.h[t](n.c, x(n)) : e.h[t]())
    }

    function E() {
        this.c = {}
    }

    function _(e, t, n) {
        var i, o = [];
        for (i in t)
            if (t.hasOwnProperty(i)) {
                var r = e.c[i];
                r && o.push(r(t[i], n))
            }
        return o
    }

    function I(e, t) {
        this.c = e, this.f = t, this.a = o(this.c, "span", {
            "aria-hidden": "true"
        }, this.f)
    }

    function D(e) {
        r(e.c, "body", e.a)
    }

    function O(e) {
        return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + w(e.c) + ";" + ("font-style:" + k(e) + ";font-weight:" + (e.f + "00") + ";")
    }

    function j(e, t, n, i, o, r) {
        this.g = e, this.j = t, this.a = i, this.c = n, this.f = o || 3e3, this.h = r || void 0
    }

    function N(e, t, n, i, o, r, s) {
        this.v = e, this.B = t, this.c = n, this.a = i, this.s = s || "BESbswy", this.f = {}, this.w = o || 3e3, this.u = r || null, this.o = this.j = this.h = this.g = null, this.g = new I(this.c, this.s), this.h = new I(this.c, this.s), this.j = new I(this.c, this.s), this.o = new I(this.c, this.s), e = new y(this.a.c + ",serif", x(this.a)), e = O(e), this.g.a.style.cssText = e, e = new y(this.a.c + ",sans-serif", x(this.a)), e = O(e), this.h.a.style.cssText = e, e = new y("serif", x(this.a)), e = O(e), this.j.a.style.cssText = e, e = new y("sans-serif", x(this.a)), e = O(e), this.o.a.style.cssText = e, D(this.g), D(this.h), D(this.j), D(this.o)
    }

    function P() {
        if (null === re) {
            var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
            re = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))
        }
        return re
    }

    function H(e, t, n) {
        for (var i in oe)
            if (oe.hasOwnProperty(i) && t === e.f[oe[i]] && n === e.f[oe[i]]) return !0;
        return !1
    }

    function L(e) {
        var t, n = e.g.a.offsetWidth,
            i = e.h.a.offsetWidth;
        (t = n === e.f.serif && i === e.f["sans-serif"]) || (t = P() && H(e, n, i)), t ? ne() - e.A >= e.w ? P() && H(e, n, i) && (null === e.u || e.u.hasOwnProperty(e.a.c)) ? q(e, e.v) : q(e, e.B) : M(e) : q(e, e.v)
    }

    function M(e) {
        setTimeout(n(function() {
            L(this)
        }, e), 50)
    }

    function q(e, t) {
        setTimeout(n(function() {
            s(this.g.a), s(this.h.a), s(this.j.a), s(this.o.a), t(this.a)
        }, e), 0)
    }

    function F(e, t, n) {
        this.c = e, this.a = t, this.f = 0, this.o = this.j = !1, this.s = n
    }

    function W(e) {
        0 == --e.f && e.j && (e.o ? (e = e.a, e.g && a(e.f, [e.a.c("wf", "active")], [e.a.c("wf", "loading"), e.a.c("wf", "inactive")]), A(e, "active")) : $(e.a))
    }

    function R(e) {
        this.j = e, this.a = new E, this.h = 0, this.f = this.g = !0
    }

    function z(e, t, i, o, r) {
        var s = 0 == --e.h;
        (e.f || e.g) && setTimeout(function() {
            var e = r || null,
                l = o || null || {};
            if (0 === i.length && s) $(t.a);
            else {
                t.f += i.length, s && (t.j = s);
                var c, u = [];
                for (c = 0; c < i.length; c++) {
                    var d = i[c],
                        p = l[d.c],
                        f = t.a,
                        h = d;
                    f.g && a(f.f, [f.a.c("wf", h.c, x(h).toString(), "loading")]), A(f, "fontloading", h), f = null, null === se && (se = !!window.FontFace && (!(h = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent)) || 42 < parseInt(h[1], 10))), f = se ? new j(n(t.g, t), n(t.h, t), t.c, d, t.s, p) : new N(n(t.g, t), n(t.h, t), t.c, d, t.s, e, p), u.push(f)
                }
                for (c = 0; c < u.length; c++) u[c].start()
            }
        }, 0)
    }

    function B(e, t, n) {
        var i = [],
            o = n.timeout;
        C(t);
        var i = _(e.a, n, e.c),
            r = new F(e.c, t, o);
        for (e.h = i.length, t = 0, n = i.length; t < n; t++) i[t].load(function(t, n, i) {
            z(e, r, t, n, i)
        })
    }

    function U(e, t) {
        this.c = e, this.a = t
    }

    function X(e, t, n) {
        var i = c(e.c);
        return e = (e.a.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, ""), i + "//" + e + "/" + t + ".js" + (n ? "?v=" + n : "")
    }

    function Y(e, t) {
        this.c = e, this.a = t
    }

    function V(e, t, n) {
        e ? this.c = e : this.c = t + ae, this.a = [], this.f = [], this.g = n || ""
    }

    function G(e, t) {
        for (var n = t.length, i = 0; i < n; i++) {
            var o = t[i].split(":");
            3 == o.length && e.f.push(o.pop());
            var r = "";
            2 == o.length && "" != o[1] && (r = ":"), e.a.push(o.join(r))
        }
    }

    function Q(e) {
        if (0 == e.a.length) throw Error("No fonts to load!");
        if (-1 != e.c.indexOf("kit=")) return e.c;
        for (var t = e.a.length, n = [], i = 0; i < t; i++) n.push(e.a[i].replace(/ /g, "+"));
        return t = e.c + "?family=" + n.join("%7C"), 0 < e.f.length && (t += "&subset=" + e.f.join(",")), 0 < e.g.length && (t += "&text=" + encodeURIComponent(e.g)), t
    }

    function K(e) {
        this.f = e, this.a = [], this.c = {}
    }

    function J(e) {
        for (var t = e.f.length, n = 0; n < t; n++) {
            var i = e.f[n].split(":"),
                o = i[0].replace(/\+/g, " "),
                r = ["n4"];
            if (2 <= i.length) {
                var s, a = i[1];
                if (s = [], a)
                    for (var a = a.split(","), l = a.length, c = 0; c < l; c++) {
                        var u;
                        if (u = a[c], u.match(/^[\w-]+$/)) {
                            var d = de.exec(u.toLowerCase());
                            if (null == d) u = "";
                            else {
                                if (u = d[2], u = null == u || "" == u ? "n" : ue[u], d = d[1], null == d || "" == d) d = "4";
                                else var p = ce[d],
                                    d = p ? p : isNaN(d) ? "4" : d.substr(0, 1);
                                u = [u, d].join("")
                            }
                        } else u = "";
                        u && s.push(u)
                    }
                0 < s.length && (r = s), 3 == i.length && (i = i[2], s = [], i = i ? i.split(",") : s, 0 < i.length && (i = le[i[0]]) && (e.c[o] = i))
            }
            for (e.c[o] || (i = le[o]) && (e.c[o] = i), i = 0; i < r.length; i += 1) e.a.push(new y(o, r[i]))
        }
    }

    function Z(e, t) {
        this.c = e, this.a = t
    }

    function ee(e, t) {
        this.c = e, this.a = t
    }

    function te(e, t) {
        this.c = e, this.f = t, this.a = []
    }
    var ne = Date.now || function() {
            return +new Date
        },
        ie = !!window.FontFace;
    m.prototype.c = function(e) {
        for (var t = [], n = 0; n < arguments.length; n++) t.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
        return t.join(this.a)
    }, j.prototype.start = function() {
        var e = this.c.m.document,
            t = this,
            n = ne(),
            i = new Promise(function(i, o) {
                function r() {
                    ne() - n >= t.f ? o() : e.fonts.load(b(t.a), t.h).then(function(e) {
                        1 <= e.length ? i() : setTimeout(r, 25)
                    }, function() {
                        o()
                    })
                }
                r()
            }),
            o = new Promise(function(e, n) {
                setTimeout(n, t.f)
            });
        Promise.race([o, i]).then(function() {
            t.g(t.a)
        }, function() {
            t.j(t.a)
        })
    };
    var oe = {
            D: "serif",
            C: "sans-serif"
        },
        re = null;
    N.prototype.start = function() {
        this.f.serif = this.j.a.offsetWidth, this.f["sans-serif"] = this.o.a.offsetWidth, this.A = ne(), L(this)
    };
    var se = null;
    F.prototype.g = function(e) {
        var t = this.a;
        t.g && a(t.f, [t.a.c("wf", e.c, x(e).toString(), "active")], [t.a.c("wf", e.c, x(e).toString(), "loading"), t.a.c("wf", e.c, x(e).toString(), "inactive")]), A(t, "fontactive", e), this.o = !0, W(this)
    }, F.prototype.h = function(e) {
        var t = this.a;
        if (t.g) {
            var n = l(t.f, t.a.c("wf", e.c, x(e).toString(), "active")),
                i = [],
                o = [t.a.c("wf", e.c, x(e).toString(), "loading")];
            n || i.push(t.a.c("wf", e.c, x(e).toString(), "inactive")), a(t.f, i, o)
        }
        A(t, "fontinactive", e), W(this)
    }, R.prototype.load = function(e) {
        this.c = new i(this.j, e.context || this.j), this.g = !1 !== e.events, this.f = !1 !== e.classes, B(this, new S(this.c, e), e)
    }, U.prototype.load = function(e) {
        function t() {
            if (o["__mti_fntLst" + n]) {
                var i, r = o["__mti_fntLst" + n](),
                    s = [];
                if (r)
                    for (var a = 0; a < r.length; a++) {
                        var l = r[a].fontfamily;
                        void 0 != r[a].fontStyle && void 0 != r[a].fontWeight ? (i = r[a].fontStyle + r[a].fontWeight, s.push(new y(l, i))) : s.push(new y(l))
                    }
                e(s)
            } else setTimeout(function() {
                t()
            }, 50)
        }
        var n = this.a.projectId,
            i = this.a.version;
        if (n) {
            var o = this.c.m;
            p(this.c, X(this, n, i), function(n) {
                n ? e([]) : t()
            }).id = "__MonotypeAPIScript__" + n
        } else e([])
    }, Y.prototype.load = function(e) {
        var t, n, i = this.a.urls || [],
            o = this.a.families || [],
            r = this.a.testStrings || {},
            s = new f;
        for (t = 0, n = i.length; t < n; t++) d(this.c, i[t], h(s));
        var a = [];
        for (t = 0, n = o.length; t < n; t++)
            if (i = o[t].split(":"), i[1])
                for (var l = i[1].split(","), c = 0; c < l.length; c += 1) a.push(new y(i[0], l[c]));
            else a.push(new y(i[0]));
        g(s, function() {
            e(a, r)
        })
    };
    var ae = "//fonts.googleapis.com/css",
        le = {
            latin: "BESbswy",
            cyrillic: "йяЖ",
            greek: "αβΣ",
            khmer: "កខគ",
            Hanuman: "កខគ"
        },
        ce = {
            thin: "1",
            extralight: "2",
            "extra-light": "2",
            ultralight: "2",
            "ultra-light": "2",
            light: "3",
            regular: "4",
            book: "4",
            medium: "5",
            "semi-bold": "6",
            semibold: "6",
            "demi-bold": "6",
            demibold: "6",
            bold: "7",
            "extra-bold": "8",
            extrabold: "8",
            "ultra-bold": "8",
            ultrabold: "8",
            black: "9",
            heavy: "9",
            l: "3",
            r: "4",
            b: "7"
        },
        ue = {
            i: "i",
            italic: "i",
            n: "n",
            normal: "n"
        },
        de = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/,
        pe = {
            Arimo: !0,
            Cousine: !0,
            Tinos: !0
        };
    Z.prototype.load = function(e) {
        var t = new f,
            n = this.c,
            i = new V(this.a.api, c(n), this.a.text),
            o = this.a.families;
        G(i, o);
        var r = new K(o);
        J(r), d(n, Q(i), h(t)), g(t, function() {
            e(r.a, r.c, pe)
        })
    }, ee.prototype.load = function(e) {
        var t = this.a.id,
            n = this.c.m;
        t ? p(this.c, (this.a.api || "https://use.typekit.net") + "/" + t + ".js", function(t) {
            if (t) e([]);
            else if (n.Typekit && n.Typekit.config && n.Typekit.config.fn) {
                t = n.Typekit.config.fn;
                for (var i = [], o = 0; o < t.length; o += 2)
                    for (var r = t[o], s = t[o + 1], a = 0; a < s.length; a++) i.push(new y(r, s[a]));
                try {
                    n.Typekit.load({
                        events: !1,
                        classes: !1,
                        async: !0
                    })
                } catch (l) {}
                e(i)
            }
        }, 2e3) : e([])
    }, te.prototype.load = function(e) {
        var t = this.f.id,
            n = this.c.m,
            i = this;
        t ? (n.__webfontfontdeckmodule__ || (n.__webfontfontdeckmodule__ = {}), n.__webfontfontdeckmodule__[t] = function(t, n) {
            for (var o = 0, r = n.fonts.length; o < r; ++o) {
                var s = n.fonts[o];
                i.a.push(new y(s.name, T("font-weight:" + s.weight + ";font-style:" + s.style)))
            }
            e(i.a)
        }, p(this.c, c(this.c) + (this.f.api || "//f.fontdeck.com/s/css/js/") + u(this.c) + "/" + t + ".js", function(t) {
            t && e([])
        })) : e([])
    };
    var fe = new R(window);
    fe.a.c.custom = function(e, t) {
        return new Y(t, e)
    }, fe.a.c.fontdeck = function(e, t) {
        return new te(t, e)
    }, fe.a.c.monotype = function(e, t) {
        return new U(t, e)
    }, fe.a.c.typekit = function(e, t) {
        return new ee(t, e)
    }, fe.a.c.google = function(e, t) {
        return new Z(t, e)
    };
    var he = {
        load: n(fe.load, fe)
    };
    "function" == typeof define && define.amd ? define(function() {
        return he
    }) : "undefined" != typeof module && module.exports ? module.exports = he : (window.WebFont = he, window.WebFontConfig && fe.load(window.WebFontConfig))
}(),
function(e, t) {
    "use strict";
    if (window.addEventListener("load", function() {
            "phoenix-startup.com.s3.amazonaws.com" !== window.location.hostname
        }), !t) throw new Error("Filterizr requires jQuery to work.");
    var n = function(e) {
        this.init(e)
    };
    n.prototype = {
        init: function(e) {
            this.root = {
                x: 0,
                y: 0,
                w: e
            }
        },
        fit: function(e) {
            var t, n, i, o = e.length,
                r = o > 0 ? e[0].h : 0;
            for (this.root.h = r, t = 0; t < o; t++) i = e[t], (n = this.findNode(this.root, i.w, i.h)) ? i.fit = this.splitNode(n, i.w, i.h) : i.fit = this.growDown(i.w, i.h)
        },
        findNode: function(e, t, n) {
            return e.used ? this.findNode(e.right, t, n) || this.findNode(e.down, t, n) : t <= e.w && n <= e.h ? e : null
        },
        splitNode: function(e, t, n) {
            return e.used = !0, e.down = {
                x: e.x,
                y: e.y + n,
                w: e.w,
                h: e.h - n
            }, e.right = {
                x: e.x + t,
                y: e.y,
                w: e.w - t,
                h: n
            }, e
        },
        growDown: function(e, t) {
            var n;
            return this.root = {
                used: !0,
                x: 0,
                y: 0,
                w: this.root.w,
                h: this.root.h + t,
                down: {
                    x: 0,
                    y: this.root.h,
                    w: this.root.w,
                    h: t
                },
                right: this.root
            }, (n = this.findNode(this.root, e, t)) ? this.splitNode(n, e, t) : null
        }
    }, t.fn.filterizr = function() {
        var e = this,
            n = arguments;
        if (e._fltr || (e._fltr = t.fn.filterizr.prototype.init(e.selector, "object" == typeof n[0] ? n[0] : void 0)), "string" == typeof n[0]) {
            if (n[0].lastIndexOf("_") > -1) throw new Error("Filterizr error: You cannot call private methods");
            if ("function" != typeof e._fltr[n[0]]) throw new Error("Filterizr error: There is no such function");
            e._fltr[n[0]](n[1], n[2])
        }
        return e
    }, t.fn.filterizr.prototype = {
        init: function(e, n) {
            var i = t(e).extend(t.fn.filterizr.prototype);
            return i.options = {
                animationDuration: .5,
                callbacks: {
                    onFilteringStart: function() {},
                    onFilteringEnd: function() {},
                    onShufflingStart: function() {},
                    onShufflingEnd: function() {},
                    onSortingStart: function() {},
                    onSortingEnd: function() {}
                },
                delay: 0,
                delayMode: "progressive",
                easing: "ease-out",
                filter: "all",
                filterOutCss: {
                    opacity: 0,
                    transform: "scale(0.5)"
                },
                filterInCss: {
                    opacity: 1,
                    transform: "scale(1)"
                },
                layout: "sameSize",
                selector: "string" == typeof e ? e : ".filtr-container",
                setupControls: !0
            }, 0 === arguments.length && (e = i.options.selector, n = i.options), 1 === arguments.length && "object" == typeof arguments[0] && (n = arguments[0]), n && i.setOptions(n), i.css({
                padding: 0,
                position: "relative"
            }), i._lastCategory = 0, i._isAnimating = !1, i._isShuffling = !1, i._isSorting = !1, i._mainArray = i._getFiltrItems(), i._subArrays = i._makeSubarrays(), i._activeArray = i._getCollectionByFilter(i.options.filter), i._toggledCategories = {}, i._typedText = t("input[data-search]").val() || "", i._uID = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0,
                    n = "x" == e ? t : 3 & t | 8;
                return n.toString(16)
            }), i._setupEvents(), i.options.setupControls && i._setupControls(), i.filter(i.options.filter), i
        },
        filter: function(e) {
            var t = this,
                n = t._getCollectionByFilter(e);
            t.options.filter = e, t.trigger("filteringStart"), t._handleFiltering(n), t._isSearchActivated() && t.search(t._typedText)
        },
        toggleFilter: function(e) {
            var t = this,
                n = [];
            t.trigger("filteringStart"), e && (t._toggledCategories[e] ? delete t._toggledCategories[e] : t._toggledCategories[e] = !0), t._multifilterModeOn() ? (n = t._makeMultifilterArray(), t._handleFiltering(n), t._isSearchActivated() && t.search(t._typedText)) : (t.filter("all"), t._isSearchActivated() && t.search(t._typedText))
        },
        search: function(e) {
            var t = this,
                n = t._multifilterModeOn() ? t._makeMultifilterArray() : t._getCollectionByFilter(t.options.filter),
                i = [],
                o = 0;
            if (t._isSearchActivated())
                for (o = 0; o < n.length; o++) {
                    var r = n[o].text().toLowerCase().indexOf(e.toLowerCase()) > -1;
                    r && i.push(n[o])
                }
            if (i.length > 0) t._handleFiltering(i);
            else if (t._isSearchActivated())
                for (o = 0; o < t._activeArray.length; o++) t._activeArray[o]._filterOut();
            else t._handleFiltering(n)
        },
        shuffle: function() {
            var e = this;
            e._isAnimating = !0, e._isShuffling = !0, e.trigger("shufflingStart"), e._mainArray = e._fisherYatesShuffle(e._mainArray), e._subArrays = e._makeSubarrays();
            var t = e._multifilterModeOn() ? e._makeMultifilterArray() : e._getCollectionByFilter(e.options.filter);
            e._isSearchActivated() ? e.search(e._typedText) : e._placeItems(t)
        },
        sort: function(e, t) {
            var n = this;
            e = e || "domIndex", t = t || "asc", n._isAnimating = !0, n._isSorting = !0, n.trigger("sortingStart");
            var i = "domIndex" !== e && "sortData" !== e && "w" !== e && "h" !== e;
            if (i)
                for (var o = 0; o < n._mainArray.length; o++) n._mainArray[o][e] = n._mainArray[o].data(e);
            n._mainArray.sort(n._comparator(e, t)), n._subArrays = n._makeSubarrays();
            var r = n._multifilterModeOn() ? n._makeMultifilterArray() : n._getCollectionByFilter(n.options.filter);
            n._isSearchActivated() ? n.search(n._typedText) : n._placeItems(r)
        },
        setOptions: function(e) {
            var t = this,
                n = 0;
            for (var i in e) t.options[i] = e[i];
            if (t._mainArray && (e.animationDuration || e.delay || e.easing || e.delayMode))
                for (n = 0; n < t._mainArray.length; n++) t._mainArray[n].css("transition", "all " + t.options.animationDuration + "s " + t.options.easing + " " + t._mainArray[n]._calcDelay() + "ms");
            e.callbacks && (e.callbacks.onFilteringStart || (t.options.callbacks.onFilteringStart = function() {}), e.callbacks.onFilteringEnd || (t.options.callbacks.onFilteringEnd = function() {}), e.callbacks.onShufflingStart || (t.options.callbacks.onShufflingStart = function() {}), e.callbacks.onShufflingEnd || (t.options.callbacks.onShufflingEnd = function() {}), e.callbacks.onSortingStart || (t.options.callbacks.onSortingStart = function() {}), e.callbacks.onSortingEnd || (t.options.callbacks.onSortingEnd = function() {})), t.options.filterInCss.transform || (t.options.filterInCss.transform = "translate3d(0,0,0)"), t.options.filterOutCss.transform || (t.options.filterOutCss.transform = "translate3d(0,0,0)")
        },
        _getFiltrItems: function() {
            var e = this,
                n = t(e.find(".filtr-item")),
                o = [];
            return t.each(n, function(n, r) {
                var s = t(r).extend(i)._init(n, e);
                o.push(s)
            }), o
        },
        _makeSubarrays: function() {
            for (var e = this, t = [], n = 0; n < e._lastCategory; n++) t.push([]);
            for (n = 0; n < e._mainArray.length; n++)
                if ("object" == typeof e._mainArray[n]._category)
                    for (var i = e._mainArray[n]._category.length, o = 0; o < i; o++) t[e._mainArray[n]._category[o] - 1].push(e._mainArray[n]);
                else t[e._mainArray[n]._category - 1].push(e._mainArray[n]);
            return t
        },
        _makeMultifilterArray: function() {
            for (var e = this, t = [], n = {}, i = 0; i < e._mainArray.length; i++) {
                var o = e._mainArray[i],
                    r = !1,
                    s = o.domIndex in n == !1;
                if (Array.isArray(o._category)) {
                    for (var a = 0; a < o._category.length; a++)
                        if (o._category[a] in e._toggledCategories) {
                            r = !0;
                            break
                        }
                } else o._category in e._toggledCategories && (r = !0);
                s && r && (n[o.domIndex] = !0, t.push(o))
            }
            return t
        },
        _setupControls: function() {
            var e = this;
            t("*[data-filter]").click(function() {
                var n = t(this).data("filter");
                e.options.filter !== n && e.filter(n)
            }), t("*[data-multifilter]").click(function() {
                var n = t(this).data("multifilter");
                "all" === n ? (e._toggledCategories = {}, e.filter("all")) : e.toggleFilter(n)
            }), t("*[data-shuffle]").click(function() {
                e.shuffle()
            }), t("*[data-sortAsc]").click(function() {
                var n = t("*[data-sortOrder]").val();
                e.sort(n, "asc")
            }), t("*[data-sortDesc]").click(function() {
                var n = t("*[data-sortOrder]").val();
                e.sort(n, "desc")
            }), t("input[data-search]").keyup(function() {
                e._typedText = t(this).val(), e._delayEvent(function() {
                    e.search(e._typedText)
                }, 250, e._uID)
            })
        },
        _setupEvents: function() {
            var n = this;
            t(e).resize(function() {
                n._delayEvent(function() {
                    n.trigger("resizeFiltrContainer")
                }, 250, n._uID)
            }), n.on("resizeFiltrContainer", function() {
                n._multifilterModeOn() ? n.toggleFilter() : n.filter(n.options.filter)
            }).on("filteringStart", function() {
                n.options.callbacks.onFilteringStart()
            }).on("filteringEnd", function() {
                n.options.callbacks.onFilteringEnd()
            }).on("shufflingStart", function() {
                n._isShuffling = !0, n.options.callbacks.onShufflingStart()
            }).on("shufflingEnd", function() {
                n.options.callbacks.onShufflingEnd(), n._isShuffling = !1
            }).on("sortingStart", function() {
                n._isSorting = !0, n.options.callbacks.onSortingStart()
            }).on("sortingEnd", function() {
                n.options.callbacks.onSortingEnd(), n._isSorting = !1
            })
        },
        _calcItemPositions: function() {
            var e = this,
                i = e._activeArray,
                o = 0,
                r = Math.round(e.width() / e.find(".filtr-item").outerWidth()),
                s = 0,
                a = i[0].outerWidth(),
                l = 0,
                c = 0,
                u = 0,
                d = 0,
                p = 0,
                f = [];
            if ("packed" === e.options.layout) {
                t.each(e._activeArray, function(e, t) {
                    t._updateDimensions()
                });
                var h = new n(e.outerWidth());
                for (h.fit(e._activeArray), d = 0; d < i.length; d++) f.push({
                    left: i[d].fit.x,
                    top: i[d].fit.y
                });
                o = h.root.h
            }
            if ("horizontal" === e.options.layout)
                for (s = 1, d = 1; d <= i.length; d++) a = i[d - 1].outerWidth(), l = i[d - 1].outerHeight(), f.push({
                    left: c,
                    top: u
                }), c += a, o < l && (o = l);
            else if ("vertical" === e.options.layout) {
                for (d = 1; d <= i.length; d++) l = i[d - 1].outerHeight(), f.push({
                    left: c,
                    top: u
                }), u += l;
                o = u
            } else if ("sameHeight" === e.options.layout) {
                s = 1;
                var g = e.outerWidth();
                for (d = 1; d <= i.length; d++) {
                    a = i[d - 1].width();
                    var v = i[d - 1].outerWidth(),
                        m = 0;
                    i[d] && (m = i[d].width()), f.push({
                        left: c,
                        top: u
                    }), p = c + a + m, p > g ? (p = 0, c = 0, u += i[0].outerHeight(), s++) : c += v
                }
                o = s * i[0].outerHeight()
            } else if ("sameWidth" === e.options.layout) {
                for (d = 1; d <= i.length; d++) {
                    if (f.push({
                            left: c,
                            top: u
                        }), d % r === 0 && s++, c += a, u = 0, s > 0)
                        for (p = s; p > 0;) u += i[d - r * p].outerHeight(), p--;
                    d % r === 0 && (c = 0)
                }
                for (d = 0; d < r; d++) {
                    for (var y = 0, b = d; i[b];) y += i[b].outerHeight(), b += r;
                    y > o ? (o = y, y = 0) : y = 0
                }
            } else if ("sameSize" === e.options.layout) {
                for (d = 1; d <= i.length; d++) f.push({
                    left: c,
                    top: u
                }), c += a, d % r === 0 && (u += i[0].outerHeight(), c = 0);
                s = Math.ceil(i.length / r), o = s * i[0].outerHeight()
            }
            return e.css("height", o), f
        },
        _handleFiltering: function(e) {
            for (var t = this, n = t._getArrayOfUniqueItems(t._activeArray, e), i = 0; i < n.length; i++) n[i]._filterOut();
            t._activeArray = e, t._placeItems(e)
        },
        _multifilterModeOn: function() {
            var e = this;
            return Object.keys(e._toggledCategories).length > 0
        },
        _isSearchActivated: function() {
            var e = this;
            return e._typedText.length > 0
        },
        _placeItems: function(e) {
            var t = this;
            t._isAnimating = !0, t._itemPositions = t._calcItemPositions();
            for (var n = 0; n < e.length; n++) e[n]._filterIn(t._itemPositions[n])
        },
        _getCollectionByFilter: function(e) {
            var t = this;
            return "all" === e ? t._mainArray : t._subArrays[e - 1]
        },
        _makeDeepCopy: function(e) {
            var t = {};
            for (var n in e) t[n] = e[n];
            return t
        },
        _comparator: function(e, t) {
            return function(n, i) {
                return "asc" === t ? n[e] < i[e] ? -1 : n[e] > i[e] ? 1 : 0 : "desc" === t ? i[e] < n[e] ? -1 : i[e] > n[e] ? 1 : 0 : void 0
            }
        },
        _getArrayOfUniqueItems: function(e, t) {
            var n, i, o = [],
                r = {},
                s = t.length;
            for (n = 0; n < s; n++) r[t[n].domIndex] = !0;
            for (s = e.length, n = 0; n < s; n++) i = e[n], i.domIndex in r || o.push(i);
            return o
        },
        _delayEvent: function() {
            var e = {};
            return function(t, n, i) {
                if (null === i) throw Error("UniqueID needed");
                e[i] && clearTimeout(e[i]), e[i] = setTimeout(t, n)
            }
        }(),
        _fisherYatesShuffle: function(e) {
            for (var t, n, i = e.length; i;) n = Math.floor(Math.random() * i--), t = e[i], e[i] = e[n], e[n] = t;
            return e
        }
    };
    var i = {
        _init: function(e, t) {
            var n = this;
            return n._parent = t, n._category = n._getCategory(), n._lastPos = {}, n.domIndex = e, n.sortData = n.data("sort"), n.w = 0, n.h = 0, n._isFilteredOut = !0, n._filteringOut = !1, n._filteringIn = !1, n.css(t.options.filterOutCss).css({
                "-webkit-backface-visibility": "hidden",
                perspective: "1000px",
                "-webkit-perspective": "1000px",
                "-webkit-transform-style": "preserve-3d",
                position: "absolute",
                transition: "all " + t.options.animationDuration + "s " + t.options.easing + " " + n._calcDelay() + "ms"
            }), n.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                n._onTransitionEnd()
            }), n
        },
        _updateDimensions: function() {
            var e = this;
            e.w = e.outerWidth(), e.h = e.outerHeight()
        },
        _calcDelay: function() {
            var e = this,
                t = 0;
            return "progressive" === e._parent.options.delayMode ? t = e._parent.options.delay * e.domIndex : e.domIndex % 2 === 0 && (t = e._parent.options.delay), t
        },
        _getCategory: function() {
            var e = this,
                t = e.data("category");
            if ("string" == typeof t) {
                t = t.split(", ");
                for (var n = 0; n < t.length; n++) {
                    if (isNaN(parseInt(t[n]))) throw new Error("Filterizr: the value of data-category must be a number, starting from value 1 and increasing.");
                    parseInt(t[n]) > e._parent._lastCategory && (e._parent._lastCategory = parseInt(t[n]))
                }
            } else t > e._parent._lastCategory && (e._parent._lastCategory = t);
            return t
        },
        _onTransitionEnd: function() {
            var e = this;
            e._filteringOut ? (t(e).addClass("filteredOut"), e._isFilteredOut = !0, e._filteringOut = !1) : e._filteringIn && (e._isFilteredOut = !1, e._filteringIn = !1), e._parent._isAnimating && (e._parent._isShuffling ? e._parent.trigger("shufflingEnd") : e._parent._isSorting ? e._parent.trigger("sortingEnd") : e._parent.trigger("filteringEnd"), e._parent._isAnimating = !1)
        },
        _filterOut: function() {
            var e = this,
                t = e._parent._makeDeepCopy(e._parent.options.filterOutCss);
            t.transform += " translate3d(" + e._lastPos.left + "px," + e._lastPos.top + "px, 0)", e.css(t), e.css("pointer-events", "none"), e._filteringOut = !0
        },
        _filterIn: function(e) {
            var n = this,
                i = n._parent._makeDeepCopy(n._parent.options.filterInCss);
            t(n).removeClass("filteredOut"), n._filteringIn = !0, n._lastPos = e, n.css("pointer-events", "auto"), i.transform += " translate3d(" + e.left + "px," + e.top + "px, 0)", n.css(i)
        }
    }
}(this, jQuery), ! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    var t = window.Slick || {};
    t = function() {
        function t(t, i) {
            var o, r = this;
            r.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(t),
                appendDots: e(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (t + 1) + "</button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !1,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, r.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.hidden = "hidden", r.paused = !1, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(t), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(t).data("slick") || {}, r.options = e.extend({}, r.defaults, o, i), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, "undefined" != typeof document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.instanceUid = n++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0), r.checkResponsive(!0)
        }
        var n = 0;
        return t
    }(), t.prototype.addSlide = t.prototype.slickAdd = function(t, n, i) {
        var o = this;
        if ("boolean" == typeof n) i = n, n = null;
        else if (0 > n || n >= o.slideCount) return !1;
        o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : i === !0 ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(t, n) {
            e(n).attr("data-slick-index", t)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, t.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }, t.prototype.animateSlide = function(t, n) {
        var i = {},
            o = this;
        o.animateHeight(), o.options.rtl === !0 && o.options.vertical === !1 && (t = -t), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
            left: t
        }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
            top: t
        }, o.options.speed, o.options.easing, n) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), e({
            animStart: o.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(e) {
                e = Math.ceil(e), o.options.vertical === !1 ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i))
            },
            complete: function() {
                n && n.call()
            }
        })) : (o.applyTransition(), t = Math.ceil(t), o.options.vertical === !1 ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function() {
            o.disableTransition(), n.call()
        }, o.options.speed))
    }, t.prototype.asNavFor = function(t) {
        var n = this,
            i = n.options.asNavFor;
        i && null !== i && (i = e(i).not(n.$slider)), null !== i && "object" == typeof i && i.each(function() {
            var n = e(this).slick("getSlick");
            n.unslicked || n.slideHandler(t, !0)
        })
    }, t.prototype.applyTransition = function(e) {
        var t = this,
            n = {};
        t.options.fade === !1 ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, t.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer), e.slideCount > e.options.slidesToShow && e.paused !== !0 && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function() {
        var e = this;
        e.options.infinite === !1 ? 1 === e.direction ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll)) : (e.currentSlide - 1 === 0 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) : e.slideHandler(e.currentSlide + e.options.slidesToScroll)
    }, t.prototype.buildArrows = function() {
        var t = this;
        t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, t.prototype.buildDots = function() {
        var t, n, i = this;
        if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) {
            for (n = '<ul class="' + i.options.dotsClass + '">', t = 0; t <= i.getDotCount(); t += 1) n += "<li>" + i.options.customPaging.call(this, i, t) + "</li>";
            n += "</ul>", i.$dots = e(n).appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, n) {
            e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function() {
        var e, t, n, i, o, r, s, a = this;
        if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
            for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; o > e; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var c = document.createElement("div");
                    for (n = 0; n < a.options.slidesPerRow; n++) {
                        var u = e * s + (t * a.options.slidesPerRow + n);
                        r.get(u) && c.appendChild(r.get(u))
                    }
                    l.appendChild(c)
                }
                i.appendChild(l)
            }
            a.$slider.html(i), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, t.prototype.checkResponsive = function(t, n) {
        var i, o, r, s = this,
            a = !1,
            l = s.$slider.width(),
            c = window.innerWidth || e(window).width();
        if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            o = null;
            for (i in s.breakpoints) s.breakpoints.hasOwnProperty(i) && (s.originalSettings.mobileFirst === !1 ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
            null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || a === !1 || s.$slider.trigger("breakpoint", [s, a])
        }
    }, t.prototype.changeSlide = function(t, n) {
        var i, o, r, s = this,
            a = e(t.target);
        switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), r = s.slideCount % s.options.slidesToScroll !== 0, i = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
            case "previous":
                o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n);
                break;
            case "next":
                o = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n);
                break;
            case "index":
                var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
                s.slideHandler(s.checkNavigable(l), !1, n), a.children().trigger("focus");
                break;
            default:
                return
        }
    }, t.prototype.checkNavigable = function(e) {
        var t, n, i = this;
        if (t = i.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1];
        else
            for (var o in t) {
                if (e < t[o]) {
                    e = n;
                    break
                }
                n = t[o]
            }
        return e
    }, t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide), t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).off("mouseenter.slick", e.proxy(t.setPaused, t, !0)).off("mouseleave.slick", e.proxy(t.setPaused, t, !1))), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.$list.off("mouseenter.slick", e.proxy(t.setPaused, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.setPaused, t, !1)), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpRows = function() {
        var e, t = this;
        t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.html(e))
    }, t.prototype.clickHandler = function(e) {
        var t = this;
        t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, t.prototype.destroy = function(t) {
        var n = this;
        n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            e(this).attr("style", e(this).data("originalStyling"))
        }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
    }, t.prototype.disableTransition = function(e) {
        var t = this,
            n = {};
        n[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, t.prototype.fadeSlide = function(e, t) {
        var n = this;
        n.cssTransitions === !1 ? (n.$slides.eq(e).css({
            zIndex: n.options.zIndex
        }), n.$slides.eq(e).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }), t && setTimeout(function() {
            n.disableTransition(e), t.call()
        }, n.options.speed))
    }, t.prototype.fadeSlideOut = function(e) {
        var t = this;
        t.cssTransitions === !1 ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        var e = this;
        return e.currentSlide
    }, t.prototype.getDotCount = function() {
        var e = this,
            t = 0,
            n = 0,
            i = 0;
        if (e.options.infinite === !0)
            for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (e.options.centerMode === !0) i = e.slideCount;
        else
            for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return i - 1
    }, t.prototype.getLeft = function(e) {
        var t, n, i, o = this,
            r = 0;
        return o.slideOffset = 0, n = o.$slides.first().outerHeight(!0), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = n * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll !== 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (e - o.slideCount)) * n * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * n * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (e + o.options.slidesToShow - o.slideCount) * n), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, r = 0), o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = o.options.vertical === !1 ? e * o.slideWidth * -1 + o.slideOffset : e * n * -1 + r, o.options.variableWidth === !0 && (i = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = o.options.rtl === !0 ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, o.options.centerMode === !0 && (i = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = o.options.rtl === !0 ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (o.$list.width() - i.outerWidth()) / 2)), t
    }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
        var t = this;
        return t.options[e]
    }, t.prototype.getNavigableIndexes = function() {
        var e, t = this,
            n = 0,
            i = 0,
            o = [];
        for (t.options.infinite === !1 ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); e > n;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }, t.prototype.getSlick = function() {
        return this
    }, t.prototype.getSlideCount = function() {
        var t, n, i, o = this;
        return i = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0,
            o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function(t, r) {
                return r.offsetLeft - i + e(r).outerWidth() / 2 > -1 * o.swipeLeft ? (n = r, !1) : void 0
            }), t = Math.abs(e(n).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
        var n = this;
        n.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, t.prototype.init = function(t) {
        var n = this;
        e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots()), t && n.$slider.trigger("init", [n]), n.options.accessibility === !0 && n.initADA()
    }, t.prototype.initArrowEvents = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.on("click.slick", {
            message: "next"
        }, e.changeSlide))
    }, t.prototype.initDotEvents = function() {
        var t = this;
        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.setPaused, t, !0)).on("mouseleave.slick", e.proxy(t.setPaused, t, !1))
    }, t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.$list.on("mouseenter.slick", e.proxy(t.setPaused, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.setPaused, t, !1)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.initUI = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show(), e.options.autoplay === !0 && e.autoPlay()
    }, t.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
            data: {
                message: "next"
            }
        }))
    }, t.prototype.lazyLoad = function() {
        function t(t) {
            e("img[data-lazy]", t).each(function() {
                var t = e(this),
                    n = e(this).attr("data-lazy"),
                    i = document.createElement("img");
                i.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, function() {
                        t.attr("src", n).animate({
                            opacity: 1
                        }, 200, function() {
                            t.removeAttr("data-lazy").removeClass("slick-loading")
                        })
                    })
                }, i.src = n
            })
        }
        var n, i, o, r, s = this;
        s.options.centerMode === !0 ? s.options.infinite === !0 ? (o = s.currentSlide + (s.options.slidesToShow / 2 + 1), r = o + s.options.slidesToShow + 2) : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), r = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, r = o + s.options.slidesToShow, s.options.fade === !0 && (o > 0 && o--, r <= s.slideCount && r++)), n = s.$slider.find(".slick-slide").slice(o, r), t(n), s.slideCount <= s.options.slidesToShow ? (i = s.$slider.find(".slick-slide"), t(i)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (i = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), t(i)) : 0 === s.currentSlide && (i = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow), t(i))
    }, t.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "next"
            }
        })
    }, t.prototype.orientationChange = function() {
        var e = this;
        e.checkResponsive(), e.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function() {
        var e = this;
        e.autoPlayClear(), e.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function() {
        var e = this;
        e.paused = !1, e.autoPlay()
    }, t.prototype.postSlide = function(e) {
        var t = this;
        t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay === !0 && t.paused === !1 && t.autoPlay(), t.options.accessibility === !0 && t.initADA()
    }, t.prototype.prev = t.prototype.slickPrev = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, t.prototype.preventDefault = function(e) {
        e.preventDefault()
    }, t.prototype.progressiveLazyLoad = function() {
        var t, n, i = this;
        t = e("img[data-lazy]", i.$slider).length, t > 0 && (n = e("img[data-lazy]", i.$slider).first(), n.attr("src", null), n.attr("src", n.attr("data-lazy")).removeClass("slick-loading").load(function() {
            n.removeAttr("data-lazy"), i.progressiveLazyLoad(), i.options.adaptiveHeight === !0 && i.setPosition()
        }).error(function() {
            n.removeAttr("data-lazy"), i.progressiveLazyLoad()
        }))
    }, t.prototype.refresh = function(t) {
        var n, i, o = this;
        i = o.slideCount - o.options.slidesToShow, o.options.infinite || (o.slideCount <= o.options.slidesToShow ? o.currentSlide = 0 : o.currentSlide > i && (o.currentSlide = i)), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
            currentSlide: n
        }), o.init(), t || o.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    }, t.prototype.registerBreakpoints = function() {
        var t, n, i, o = this,
            r = o.options.responsive || null;
        if ("array" === e.type(r) && r.length) {
            o.respondTo = o.options.respondTo || "window";
            for (t in r)
                if (i = o.breakpoints.length - 1, n = r[t].breakpoint, r.hasOwnProperty(t)) {
                    for (; i >= 0;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
                    o.breakpoints.push(n), o.breakpointSettings[n] = r[t].settings
                }
            o.breakpoints.sort(function(e, t) {
                return o.options.mobileFirst ? e - t : t - e
            })
        }
    }, t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.checkResponsive(!1, !0), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [t]), t.options.autoplay === !0 && t.focusHandler()
    }, t.prototype.resize = function() {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
            t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }, 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
        var i = this;
        return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : i.slideCount - 1) : e = t === !0 ? --e : e, !(i.slideCount < 1 || 0 > e || e > i.slideCount - 1) && (i.unload(), n === !0 ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
    }, t.prototype.setCSS = function(e) {
        var t, n, i = this,
            o = {};
        i.options.rtl === !0 && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, i.transformsEnabled === !1 ? i.$slideTrack.css(o) : (o = {}, i.cssTransitions === !1 ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)))
    }, t.prototype.setDimensions = function() {
        var e = this;
        e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, t.prototype.setFade = function() {
        var t, n = this;
        n.$slides.each(function(i, o) {
            t = n.slideWidth * i * -1, n.options.rtl === !0 ? e(o).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : e(o).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            })
        }), n.$slides.eq(n.currentSlide).css({
            zIndex: n.options.zIndex - 1,
            opacity: 1
        })
    }, t.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, t.prototype.setOption = t.prototype.slickSetOption = function(t, n, i) {
        var o, r, s = this;
        if ("responsive" === t && "array" === e.type(n))
            for (r in n)
                if ("array" !== e.type(s.options.responsive)) s.options.responsive = [n[r]];
                else {
                    for (o = s.options.responsive.length - 1; o >= 0;) s.options.responsive[o].breakpoint === n[r].breakpoint && s.options.responsive.splice(o, 1), o--;
                    s.options.responsive.push(n[r])
                }
        else s.options[t] = n;
        i === !0 && (s.unload(), s.reinit())
    }, t.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, t.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && e.animType !== !1
    }, t.prototype.setSlideClasses = function(e) {
        var t, n, i, o, r = this;
        n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), r.options.centerMode === !0 ? (t = Math.floor(r.options.slidesToShow / 2), r.options.infinite === !0 && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = r.options.infinite === !0 ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === r.options.lazyLoad && r.lazyLoad()
    }, t.prototype.setupInfinite = function() {
        var t, n, i, o = this;
        if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (n = null, o.slideCount > o.options.slidesToShow)) {
            for (i = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; i > t; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                e(this).attr("id", "")
            })
        }
    }, t.prototype.setPaused = function(e) {
        var t = this;
        t.options.autoplay === !0 && t.options.pauseOnHover === !0 && (t.paused = e, e ? t.autoPlayClear() : t.autoPlay())
    }, t.prototype.selectHandler = function(t) {
        var n = this,
            i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            o = parseInt(i.attr("data-slick-index"));
        return o || (o = 0), n.slideCount <= n.options.slidesToShow ? (n.setSlideClasses(o), void n.asNavFor(o)) : void n.slideHandler(o)
    }, t.prototype.slideHandler = function(e, t, n) {
        var i, o, r, s, a = null,
            l = this;
        return t = t || !1, l.animating === !0 && l.options.waitForAnimate === !0 || l.options.fade === !0 && l.currentSlide === e || l.slideCount <= l.options.slidesToShow ? void 0 : (t === !1 && l.asNavFor(e), i = e, a = l.getLeft(i), s = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? s : l.swipeLeft, l.options.infinite === !1 && l.options.centerMode === !1 && (0 > e || e > l.getDotCount() * l.options.slidesToScroll) ? void(l.options.fade === !1 && (i = l.currentSlide, n !== !0 ? l.animateSlide(s, function() {
            l.postSlide(i)
        }) : l.postSlide(i))) : l.options.infinite === !1 && l.options.centerMode === !0 && (0 > e || e > l.slideCount - l.options.slidesToScroll) ? void(l.options.fade === !1 && (i = l.currentSlide, n !== !0 ? l.animateSlide(s, function() {
            l.postSlide(i)
        }) : l.postSlide(i))) : (l.options.autoplay === !0 && clearInterval(l.autoPlayTimer), o = 0 > i ? l.slideCount % l.options.slidesToScroll !== 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + i : i >= l.slideCount ? l.slideCount % l.options.slidesToScroll !== 0 ? 0 : i - l.slideCount : i, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, o]), r = l.currentSlide, l.currentSlide = o, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), l.options.fade === !0 ? (n !== !0 ? (l.fadeSlideOut(r), l.fadeSlide(o, function() {
            l.postSlide(o)
        })) : l.postSlide(o), void l.animateHeight()) : void(n !== !0 ? l.animateSlide(a, function() {
            l.postSlide(o)
        }) : l.postSlide(o))))
    }, t.prototype.startLoad = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function() {
        var e, t, n, i, o = this;
        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), i = Math.round(180 * n / Math.PI), 0 > i && (i = 360 - Math.abs(i)), 45 >= i && i >= 0 ? o.options.rtl === !1 ? "left" : "right" : 360 >= i && i >= 315 ? o.options.rtl === !1 ? "left" : "right" : i >= 135 && 225 >= i ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? i >= 35 && 135 >= i ? "left" : "right" : "vertical"
    }, t.prototype.swipeEnd = function(e) {
        var t, n = this;
        if (n.dragging = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
        if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) switch (n.swipeDirection()) {
            case "left":
                t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.slideHandler(t), n.currentDirection = 0, n.touchObject = {}, n.$slider.trigger("swipe", [n, "left"]);
                break;
            case "right":
                t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.slideHandler(t), n.currentDirection = 1, n.touchObject = {}, n.$slider.trigger("swipe", [n, "right"])
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, t.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, t.prototype.swipeMove = function(e) {
        var t, n, i, o, r, s = this;
        return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!s.dragging || r && 1 !== r.length) && (t = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, s.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), s.options.verticalSwiping === !0 && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), n = s.swipeDirection(), "vertical" !== n ? (void 0 !== e.originalEvent && s.touchObject.swipeLength > 4 && e.preventDefault(), o = (s.options.rtl === !1 ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), s.options.verticalSwiping === !0 && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1), i = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, s.options.infinite === !1 && (0 === s.currentSlide && "right" === n || s.currentSlide >= s.getDotCount() && "left" === n) && (i = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), s.options.vertical === !1 ? s.swipeLeft = t + i * o : s.swipeLeft = t + i * (s.$list.height() / s.listWidth) * o, s.options.verticalSwiping === !0 && (s.swipeLeft = t + i * o), s.options.fade !== !0 && s.options.touchMove !== !1 && (s.animating === !0 ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))) : void 0)
    }, t.prototype.swipeStart = function(e) {
        var t, n = this;
        return 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(n.dragging = !0))
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function() {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function(e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy()
    }, t.prototype.updateArrows = function() {
        var e, t = this;
        e = Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, t.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, t.prototype.visibility = function() {
        var e = this;
        document[e.hidden] ? (e.paused = !0, e.autoPlayClear()) : e.options.autoplay === !0 && (e.paused = !1, e.autoPlay())
    }, t.prototype.initADA = function() {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(n) {
            e(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + t.instanceUid + n
            })
        }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(n) {
            e(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + t.instanceUid + n,
                id: "slick-slide" + t.instanceUid + n
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
    }, t.prototype.activateADA = function() {
        var e = this;
        e.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, t.prototype.focusHandler = function() {
        var t = this;
        t.$slider.on("focus.slick blur.slick", "*", function(n) {
            n.stopImmediatePropagation();
            var i = e(this);
            setTimeout(function() {
                t.isPlay && (i.is(":focus") ? (t.autoPlayClear(), t.paused = !0) : (t.paused = !1, t.autoPlay()))
            }, 0)
        })
    }, e.fn.slick = function() {
        var e, n, i = this,
            o = arguments[0],
            r = Array.prototype.slice.call(arguments, 1),
            s = i.length;
        for (e = 0; s > e; e++)
            if ("object" == typeof o || "undefined" == typeof o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, r), "undefined" != typeof n) return n;
        return i
    }
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : e.lightbox = t(e.jQuery)
}(this, function(e) {
    function t(t) {
        this.album = [], this.currentImageIndex = void 0, this.init(), this.options = e.extend({}, this.constructor.defaults), this.option(t)
    }
    return t.defaults = {
        albumLabel: "Image %1 of %2",
        alwaysShowNavOnTouchDevices: !1,
        fadeDuration: 500,
        fitImagesInViewport: !0,
        positionFromTop: 50,
        resizeDuration: 700,
        showImageNumberLabel: !0,
        wrapAround: !1,
        disableScrolling: !1
    }, t.prototype.option = function(t) {
        e.extend(this.options, t)
    }, t.prototype.imageCountLabel = function(e, t) {
        return this.options.albumLabel.replace(/%1/g, e).replace(/%2/g, t)
    }, t.prototype.init = function() {
        this.enable(), this.build()
    }, t.prototype.enable = function() {
        var t = this;
        e("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function(n) {
            return t.start(e(n.currentTarget)), !1
        })
    }, t.prototype.build = function() {
        var t = this;
        e('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(e("body")), this.$lightbox = e("#lightbox"), this.$overlay = e("#lightboxOverlay"), this.$outerContainer = this.$lightbox.find(".lb-outerContainer"), this.$container = this.$lightbox.find(".lb-container"), this.containerTopPadding = parseInt(this.$container.css("padding-top"), 10), this.containerRightPadding = parseInt(this.$container.css("padding-right"), 10), this.containerBottomPadding = parseInt(this.$container.css("padding-bottom"), 10), this.containerLeftPadding = parseInt(this.$container.css("padding-left"), 10), this.$overlay.hide().on("click", function() {
            return t.end(), !1
        }), this.$lightbox.hide().on("click", function(n) {
            return "lightbox" === e(n.target).attr("id") && t.end(), !1
        }), this.$outerContainer.on("click", function(n) {
            return "lightbox" === e(n.target).attr("id") && t.end(), !1
        }), this.$lightbox.find(".lb-prev").on("click", function() {
            return 0 === t.currentImageIndex ? t.changeImage(t.album.length - 1) : t.changeImage(t.currentImageIndex - 1), !1
        }), this.$lightbox.find(".lb-next").on("click", function() {
            return t.currentImageIndex === t.album.length - 1 ? t.changeImage(0) : t.changeImage(t.currentImageIndex + 1), !1
        }), this.$lightbox.find(".lb-loader, .lb-close").on("click", function() {
            return t.end(), !1
        })
    }, t.prototype.start = function(t) {
        function n(e) {
            i.album.push({
                link: e.attr("href"),
                title: e.attr("data-title") || e.attr("title")
            })
        }
        var i = this,
            o = e(window);
        o.on("resize", e.proxy(this.sizeOverlay, this)), e("select, object, embed").css({
            visibility: "hidden"
        }), this.sizeOverlay(), this.album = [];
        var r, s = 0,
            a = t.attr("data-lightbox");
        if (a) {
            r = e(t.prop("tagName") + '[data-lightbox="' + a + '"]');
            for (var l = 0; l < r.length; l = ++l) n(e(r[l])), r[l] === t[0] && (s = l)
        } else if ("lightbox" === t.attr("rel")) n(t);
        else {
            r = e(t.prop("tagName") + '[rel="' + t.attr("rel") + '"]');
            for (var c = 0; c < r.length; c = ++c) n(e(r[c])), r[c] === t[0] && (s = c)
        }
        var u = o.scrollTop() + this.options.positionFromTop,
            d = o.scrollLeft();
        this.$lightbox.css({
            top: u + "px",
            left: d + "px"
        }).fadeIn(this.options.fadeDuration), this.options.disableScrolling && e("body").addClass("lb-disable-scrolling"), this.changeImage(s)
    }, t.prototype.changeImage = function(t) {
        var n = this;
        this.disableKeyboardNav();
        var i = this.$lightbox.find(".lb-image");
        this.$overlay.fadeIn(this.options.fadeDuration), e(".lb-loader").fadeIn("slow"), this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(), this.$outerContainer.addClass("animating");
        var o = new Image;
        o.onload = function() {
            var r, s, a, l, c, u, d;
            i.attr("src", n.album[t].link), r = e(o), i.width(o.width), i.height(o.height), n.options.fitImagesInViewport && (d = e(window).width(), u = e(window).height(), c = d - n.containerLeftPadding - n.containerRightPadding - 20, l = u - n.containerTopPadding - n.containerBottomPadding - 120, n.options.maxWidth && n.options.maxWidth < c && (c = n.options.maxWidth), n.options.maxHeight && n.options.maxHeight < c && (l = n.options.maxHeight), (o.width > c || o.height > l) && (o.width / c > o.height / l ? (a = c, s = parseInt(o.height / (o.width / a), 10), i.width(a), i.height(s)) : (s = l, a = parseInt(o.width / (o.height / s), 10), i.width(a), i.height(s)))), n.sizeContainer(i.width(), i.height())
        }, o.src = this.album[t].link, this.currentImageIndex = t
    }, t.prototype.sizeOverlay = function() {
        this.$overlay.width(e(document).width()).height(e(document).height())
    }, t.prototype.sizeContainer = function(e, t) {
        function n() {
            i.$lightbox.find(".lb-dataContainer").width(s), i.$lightbox.find(".lb-prevLink").height(a), i.$lightbox.find(".lb-nextLink").height(a), i.showImage()
        }
        var i = this,
            o = this.$outerContainer.outerWidth(),
            r = this.$outerContainer.outerHeight(),
            s = e + this.containerLeftPadding + this.containerRightPadding,
            a = t + this.containerTopPadding + this.containerBottomPadding;
        o !== s || r !== a ? this.$outerContainer.animate({
            width: s,
            height: a
        }, this.options.resizeDuration, "swing", function() {
            n()
        }) : n()
    }, t.prototype.showImage = function() {
        this.$lightbox.find(".lb-loader").stop(!0).hide(), this.$lightbox.find(".lb-image").fadeIn("slow"), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav()
    }, t.prototype.updateNav = function() {
        var e = !1;
        try {
            document.createEvent("TouchEvent"), e = !!this.options.alwaysShowNavOnTouchDevices
        } catch (t) {}
        this.$lightbox.find(".lb-nav").show(), this.album.length > 1 && (this.options.wrapAround ? (e && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"), this.$lightbox.find(".lb-prev, .lb-next").show()) : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(), e && this.$lightbox.find(".lb-prev").css("opacity", "1")), this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(), e && this.$lightbox.find(".lb-next").css("opacity", "1"))))
    }, t.prototype.updateDetails = function() {
        var t = this;
        if ("undefined" != typeof this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title && this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast").find("a").on("click", function(t) {
                void 0 !== e(this).attr("target") ? window.open(e(this).attr("href"), e(this).attr("target")) : location.href = e(this).attr("href")
            }), this.album.length > 1 && this.options.showImageNumberLabel) {
            var n = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
            this.$lightbox.find(".lb-number").text(n).fadeIn("fast")
        } else this.$lightbox.find(".lb-number").hide();
        this.$outerContainer.removeClass("animating"), this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function() {
            return t.sizeOverlay()
        })
    }, t.prototype.preloadNeighboringImages = function() {
        if (this.album.length > this.currentImageIndex + 1) {
            var e = new Image;
            e.src = this.album[this.currentImageIndex + 1].link
        }
        if (this.currentImageIndex > 0) {
            var t = new Image;
            t.src = this.album[this.currentImageIndex - 1].link
        }
    }, t.prototype.enableKeyboardNav = function() {
        e(document).on("keyup.keyboard", e.proxy(this.keyboardAction, this))
    }, t.prototype.disableKeyboardNav = function() {
        e(document).off(".keyboard")
    }, t.prototype.keyboardAction = function(e) {
        var t = 27,
            n = 37,
            i = 39,
            o = e.keyCode,
            r = String.fromCharCode(o).toLowerCase();
        o === t || r.match(/x|o|c/) ? this.end() : "p" === r || o === n ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1) : "n" !== r && o !== i || (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0))
    }, t.prototype.end = function() {
        this.disableKeyboardNav(), e(window).off("resize", this.sizeOverlay), this.$lightbox.fadeOut(this.options.fadeDuration), this.$overlay.fadeOut(this.options.fadeDuration), e("select, object, embed").css({
            visibility: "visible"
        }), this.options.disableScrolling && e("body").removeClass("lb-disable-scrolling")
    }, new t
}), window.addEventListener("DOMContentLoaded", function() {
        "use strict";
        var e = function() {
            function e() {
                WebFont.load({
                    google: {
                        families: t
                    }
                })
            }
            var t = ["Bevan", "Playfair+Display:400,400italic,700,700italic:latin", "Montserrat:100,300,400,700:latin"];
            return {
                load: e
            }
        }();
        ! function() {
            var e = $(".js-slider");
            e.on("init", function(e) {
                $(".cover__slider__dots").wrap('<div class="cover__slider__dots_container"></div>')
            }), e.slick()
        }();
        var t = (function() {
            var e = $(".js-round-chart"),
                t = function() {
                    for (var t = parseInt(e.find("circle").attr("r"), 10), n = 2 * t * Math.PI, i = e.length, o = 0; o < i; o++) {
                        var r = parseInt(e.eq(o).attr("data-chart-value"), 10),
                            s = n * (1 - r / 100);
                        e.eq(o).css("stroke-dashoffset", s)
                    }
                };
            return {
                init: t
            }
        }(), {
            DOM: {
                $covers: $(".js-cover")
            },
            setIntroHeight: function() {
                $(window).outerWidth() <= 1024 ? this.DOM.$covers.css("min-height", $(window).outerHeight()) : this.DOM.$covers.css("min-height", "100vh")
            },
            bind: function() {
                var e = this;
                window.addEventListener("orientationchange", function() {
                    e.setIntroHeight()
                })
            },
            init: function() {
                this.bind()
            }
        });
        t.DOM.$covers.length && (t.setIntroHeight(), t.init()), e.load()
    }),
    function(e) {
        e(document).ready(function() {
            function t(e) {
                try {
                    var t = window[e],
                        n = "__storage_test__";
                    return t.setItem(n, n),
                        t.removeItem(n), !0
                } catch (i) {
                    return i instanceof DOMException && (22 === i.code || 1014 === i.code || "QuotaExceededError" === i.name || "NS_ERROR_DOM_QUOTA_REACHED" === i.name) && 0 !== t.length
                }
            }

            function n(e) {
                var t = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return t.test(e)
            }

            function i(e) {
                ga("send", "event", {
                    eventCategory: "Outbound Link",
                    eventAction: "click",
                    eventLabel: e.target.href,
                    transport: "beacon"
                })
            }
            var o = e("form"),
                r = e(".aa_status"),
                s = 'Oops! I tried, but something went wrong. <br /> Can you try again, by refreshing the page or email me? <a href="mailto:me@AhmadAwais.com" target="_blank">me@AhmadAwais.com</a><br />';
            if (o.on("submit", function(i) {
                    i.preventDefault();
					var thisForm = $( this );
					var r = thisForm.closest( '.aa_wpt' ).find( '.aa_status' );

                     r.html("<p>⌛️ Wait...</p>");
					var a = thisForm.children( '.email' ).val();

                    if (t("localStorage") && localStorage.setItem("WPC_userEmail", a), n(a)) {
                        var l = {
                            email: a
                        };
                        url = o.attr("action"), url = url + "?" + e.param(l), e.getJSON(url, function(e) {
                            if (!1 === e.status && "" === e.message && (r.empty().html(s), ga("send", "event", "MEMBERSHIP", "signup", "FAIL — STATUS: false && MSG: empty")), 400 === e.code && 201 !== e.RES_HTTP_CODE && 500 !== e.RES_HTTP_CODE && !1 === e.status) r.empty().html("👉 Oyee! Enter a valid email address! <br />" + e.message), ga("send", "event", "MEMBERSHIP", "signup", "FAIL — MSG: " + e.message);
                            else {

                            	if ( 'Already subscribed.' === e.message ) {
                            		// Add the response message.
                            		r.empty().html( '<div>🎯  You are ' + e.message + ' 💯</div>');
                            	} else {
                            		// Add the response message.
                            		r.empty().html( '<div>🎯  ' + e.message + ' 👉 Now just click the confirmation link I emailed you!</div>');
                            	}

                                201 === e.RES_HTTP_CODE ? ga("send", "event", "MEMBERSHIP", "signup", "success", "01") : 500 === e.RES_HTTP_CODE ? ga("send", "event", "MEMBERSHIP", "signup", "already registered") : ga("send", "event", "MEMBERSHIP", "signup", "success"), window.Intercom("update", {
                                    email: a,
                                    WPTakeaway: "YES"
                                });
                                var t = {
                                    status: "YES",
                                    email: a
                                };
                                Intercom("trackEvent", "wpt-newsletter-signup", t)
                            }
                        }).error(function(e) {
                            r.empty().html(s + " ERROR: " + e.status), ga("send", "event", "MEMBERSHIP", "signup", "ERROR — STAUTS:" + e.status)
                        })
                    } else r.empty().html("👉 ERROR: Enter a valid email address.")
                }), t("localStorage")) {
                var a = localStorage.getItem("WPC_userEmail");
                a ? (window.Intercom("update", {
                    email: a,
                    VISIT: "YES"
                }), Intercom("trackEvent", "Visit"), ga("send", "event", "USER", "Known")) : ga("send", "event", "USER", "Unknown")
            }
            e("a").each(function() {
                var t = new RegExp("/" + window.location.host + "/");
                t.test(this.href) || e(this).click(function(e) {
                    e.preventDefault(), e.stopPropagation(), window.open(this.href, "_blank"), i(e)
                })
            })
        })
    }(jQuery);
