!function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    "use strict";
    function i(t, e, i) {
        var n,
            o,
            r = (i = i || dt).createElement("script");
        if (r.text = t, e)
            for (n in ft)
                (o = e[n] || e.getAttribute && e.getAttribute(n)) && r.setAttribute(n, o);
        i.head.appendChild(r).parentNode.removeChild(r)
    }
    function n(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? ot[rt.call(t)] || "object" : typeof t
    }
    function o(t) {
        var e = !!t && "length" in t && t.length,
            i = n(t);
        return !ut(t) && !ht(t) && ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    function r(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    function s(t, e, i) {
        return ut(e) ? gt.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i
        }) : e.nodeType ? gt.grep(t, function(t) {
            return t === e !== i
        }) : "string" != typeof e ? gt.grep(t, function(t) {
            return -1 < nt.call(e, t) !== i
        }) : gt.filter(e, t, i)
    }
    function a(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;)
            ;
        return t
    }
    function l(t) {
        return t
    }
    function c(t) {
        throw t
    }
    function u(t, e, i, n) {
        var o;
        try {
            t && ut(o = t.promise) ? o.call(t).done(e).fail(i) : t && ut(o = t.then) ? o.call(t, e, i) : e.apply(void 0, [t].slice(n))
        } catch (t) {
            i.apply(void 0, [t])
        }
    }
    function h() {
        dt.removeEventListener("DOMContentLoaded", h),
        t.removeEventListener("load", h),
        gt.ready()
    }
    function d(t, e) {
        return e.toUpperCase()
    }
    function f(t) {
        return t.replace(Dt, "ms-").replace(Lt, d)
    }
    function p() {
        this.expando = gt.expando + p.uid++
    }
    function g(t, e, i) {
        var n,
            o;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(jt, "-$&").toLowerCase(), "string" == typeof (i = t.getAttribute(n))) {
                try {
                    i = "true" === (o = i) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : zt.test(o) ? JSON.parse(o) : o)
                } catch (t) {}
                Pt.set(t, e, i)
            } else
                i = void 0;
        return i
    }
    function m(t, e, i, n) {
        var o,
            r,
            s = 20,
            a = n ? function() {
                return n.cur()
            } : function() {
                return gt.css(t, e, "")
            },
            l = a(),
            c = i && i[3] || (gt.cssNumber[e] ? "" : "px"),
            u = t.nodeType && (gt.cssNumber[e] || "px" !== c && +l) && qt.exec(gt.css(t, e));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--;)
                gt.style(t, e, u + c),
                (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0),
                u /= r;
            u *= 2,
            gt.style(t, e, u + c),
            i = i || []
        }
        return i && (u = +u || +l || 0, o = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = o)), o
    }
    function v(t, e) {
        for (var i, n, o, r, s, a, l, c = [], u = 0, h = t.length; u < h; u++)
            (n = t[u]).style && (i = n.style.display, e ? ("none" === i && (c[u] = At.get(n, "display") || null, c[u] || (n.style.display = "")), "" === n.style.display && Ft(n) && (c[u] = (l = s = r = void 0, s = (o = n).ownerDocument, a = o.nodeName, (l = Bt[a]) || (r = s.body.appendChild(s.createElement(a)), l = gt.css(r, "display"), r.parentNode.removeChild(r), "none" === l && (l = "block"), Bt[a] = l)))) : "none" !== i && (c[u] = "none", At.set(n, "display", i)));
        for (u = 0; u < h; u++)
            null != c[u] && (t[u].style.display = c[u]);
        return t
    }
    function y(t, e) {
        var i;
        return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && r(t, e) ? gt.merge([t], i) : i
    }
    function b(t, e) {
        for (var i = 0, n = t.length; i < n; i++)
            At.set(t[i], "globalEval", !e || At.get(e[i], "globalEval"))
    }
    function w(t, e, i, o, r) {
        for (var s, a, l, c, u, h, d = e.createDocumentFragment(), f = [], p = 0, g = t.length; p < g; p++)
            if ((s = t[p]) || 0 === s)
                if ("object" === n(s))
                    gt.merge(f, s.nodeType ? [s] : s);
                else if (Qt.test(s)) {
                    for (a = a || d.appendChild(e.createElement("div")), l = (Vt.exec(s) || ["", ""])[1].toLowerCase(), c = Gt[l] || Gt._default, a.innerHTML = c[1] + gt.htmlPrefilter(s) + c[2], h = c[0]; h--;)
                        a = a.lastChild;
                    gt.merge(f, a.childNodes),
                    (a = d.firstChild).textContent = ""
                } else
                    f.push(e.createTextNode(s));
        for (d.textContent = "", p = 0; s = f[p++];)
            if (o && -1 < gt.inArray(s, o))
                r && r.push(s);
            else if (u = Ht(s), a = y(d.appendChild(s), "script"), u && b(a), i)
                for (h = 0; s = a[h++];)
                    Xt.test(s.type || "") && i.push(s);
        return d
    }
    function x() {
        return !0
    }
    function E() {
        return !1
    }
    function C(t, e) {
        return t === function() {
            try {
                return dt.activeElement
            } catch (t) {}
        }() == ("focus" === e)
    }
    function k(t, e, i, n, o, r) {
        var s,
            a;
        if ("object" == typeof e) {
            for (a in "string" != typeof i && (n = n || i, i = void 0), e)
                k(t, a, i, n, e[a], r);
            return t
        }
        if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o)
            o = E;
        else if (!o)
            return t;
        return 1 === r && (s = o, (o = function(t) {
            return gt().off(t), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = gt.guid++)), t.each(function() {
            gt.event.add(this, e, o, n, i)
        })
    }
    function S(t, e, i) {
        i ? (At.set(t, e, !1), gt.event.add(t, e, {
            namespace: !1,
            handler: function(t) {
                var n,
                    o,
                    r = At.get(this, e);
                if (1 & t.isTrigger && this[e]) {
                    if (r.length)
                        (gt.event.special[e] || {}).delegateType && t.stopPropagation();
                    else if (r = tt.call(arguments), At.set(this, e, r), n = i(this, e), this[e](), r !== (o = At.get(this, e)) || n ? At.set(this, e, !1) : o = {}, r !== o)
                        return t.stopImmediatePropagation(), t.preventDefault(), o && o.value
                } else
                    r.length && (At.set(this, e, {
                        value: gt.event.trigger(gt.extend(r[0], gt.Event.prototype), r.slice(1), this)
                    }), t.stopImmediatePropagation())
            }
        })) : void 0 === At.get(t, e) && gt.event.add(t, e, x)
    }
    function T(t, e) {
        return r(t, "table") && r(11 !== e.nodeType ? e : e.firstChild, "tr") && gt(t).children("tbody")[0] || t
    }
    function _(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }
    function D(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }
    function L(t, e) {
        var i,
            n,
            o,
            r,
            s,
            a;
        if (1 === e.nodeType) {
            if (At.hasData(t) && (a = At.get(t).events))
                for (o in At.remove(e, "handle events"), a)
                    for (i = 0, n = a[o].length; i < n; i++)
                        gt.event.add(e, o, a[o][i]);
            Pt.hasData(t) && (r = Pt.access(t), s = gt.extend({}, r), Pt.set(e, s))
        }
    }
    function I(t, e, n, o) {
        e = et(e);
        var r,
            s,
            a,
            l,
            c,
            u,
            h = 0,
            d = t.length,
            f = d - 1,
            p = e[0],
            g = ut(p);
        if (g || 1 < d && "string" == typeof p && !ct.checkClone && Kt.test(p))
            return t.each(function(i) {
                var r = t.eq(i);
                g && (e[0] = p.call(this, i, r.html())),
                I(r, e, n, o)
            });
        if (d && (s = (r = w(e, t[0].ownerDocument, !1, t, o)).firstChild, 1 === r.childNodes.length && (r = s), s || o)) {
            for (l = (a = gt.map(y(r, "script"), _)).length; h < d; h++)
                c = r,
                h !== f && (c = gt.clone(c, !0, !0), l && gt.merge(a, y(c, "script"))),
                n.call(t[h], c, h);
            if (l)
                for (u = a[a.length - 1].ownerDocument, gt.map(a, D), h = 0; h < l; h++)
                    c = a[h],
                    Xt.test(c.type || "") && !At.access(c, "globalEval") && gt.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? gt._evalUrl && !c.noModule && gt._evalUrl(c.src, {
                        nonce: c.nonce || c.getAttribute("nonce")
                    }, u) : i(c.textContent.replace(Zt, ""), c, u))
        }
        return t
    }
    function A(t, e, i) {
        for (var n, o = e ? gt.filter(e, t) : t, r = 0; null != (n = o[r]); r++)
            i || 1 !== n.nodeType || gt.cleanData(y(n)),
            n.parentNode && (i && Ht(n) && b(y(n, "script")), n.parentNode.removeChild(n));
        return t
    }
    function P(t, e, i) {
        var n,
            o,
            r,
            s,
            a = t.style;
        return (i = i || ee(t)) && ("" !== (s = i.getPropertyValue(e) || i[e]) || Ht(t) || (s = gt.style(t, e)), !ct.pixelBoxStyles() && te.test(s) && ne.test(e) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }
    function z(t, e) {
        return {
            get: function() {
                if (!t())
                    return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }
    function j(t) {
        return gt.cssProps[t] || se[t] || (t in re ? t : se[t] = function(t) {
                for (var e = t[0].toUpperCase() + t.slice(1), i = oe.length; i--;)
                    if ((t = oe[i] + e) in re)
                        return t
            }(t) || t)
    }
    function N(t, e, i) {
        var n = qt.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }
    function q(t, e, i, n, o, r) {
        var s = "width" === e ? 1 : 0,
            a = 0,
            l = 0;
        if (i === (n ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === i && (l += gt.css(t, i + Mt[s], !0, o)),
            n ? ("content" === i && (l -= gt.css(t, "padding" + Mt[s], !0, o)), "margin" !== i && (l -= gt.css(t, "border" + Mt[s] + "Width", !0, o))) : (l += gt.css(t, "padding" + Mt[s], !0, o), "padding" !== i ? l += gt.css(t, "border" + Mt[s] + "Width", !0, o) : a += gt.css(t, "border" + Mt[s] + "Width", !0, o));
        return !n && 0 <= r && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - a - .5)) || 0), l
    }
    function M(t, e, i) {
        var n = ee(t),
            o = (!ct.boxSizingReliable() || i) && "border-box" === gt.css(t, "boxSizing", !1, n),
            s = o,
            a = P(t, e, n),
            l = "offset" + e[0].toUpperCase() + e.slice(1);
        if (te.test(a)) {
            if (!i)
                return a;
            a = "auto"
        }
        return (!ct.boxSizingReliable() && o || !ct.reliableTrDimensions() && r(t, "tr") || "auto" === a || !parseFloat(a) && "inline" === gt.css(t, "display", !1, n)) && t.getClientRects().length && (o = "border-box" === gt.css(t, "boxSizing", !1, n), (s = l in t) && (a = t[l])), (a = parseFloat(a) || 0) + q(t, e, i || (o ? "border" : "content"), s, n, a) + "px"
    }
    function O(t, e, i, n, o) {
        return new O.prototype.init(t, e, i, n, o)
    }
    function H() {
        de && (!1 === dt.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(H) : t.setTimeout(H, gt.fx.interval), gt.fx.tick())
    }
    function R() {
        return t.setTimeout(function() {
            he = void 0
        }), he = Date.now()
    }
    function F(t, e) {
        var i,
            n = 0,
            o = {
                height: t
            };
        for (e = e ? 1 : 0; n < 4; n += 2 - e)
            o["margin" + (i = Mt[n])] = o["padding" + i] = t;
        return e && (o.opacity = o.width = t), o
    }
    function B(t, e, i) {
        for (var n, o = (W.tweeners[e] || []).concat(W.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (n = o[r].call(i, e, t))
                return n
    }
    function W(t, e, i) {
        var n,
            o,
            r = 0,
            s = W.prefilters.length,
            a = gt.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o)
                    return !1;
                for (var e = he || R(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++)
                    c.tweens[r].run(n);
                return a.notifyWith(t, [c, n, i]), n < 1 && s ? i : (s || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: gt.extend({}, e),
                opts: gt.extend(!0, {
                    specialEasing: {},
                    easing: gt.easing._default
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: he || R(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = gt.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? c.tweens.length : 0;
                    if (o)
                        return this;
                    for (o = !0; i < n; i++)
                        c.tweens[i].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                }
            }),
            u = c.props;
        for ((!function(t, e) {
            var i,
                n,
                o,
                r,
                s;
            for (i in t)
                if (o = e[n = f(i)], r = t[i], Array.isArray(r) && (o = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), (s = gt.cssHooks[n]) && "expand" in s)
                    for (i in r = s.expand(r), delete t[n], r)
                        i in t || (t[i] = r[i], e[i] = o);
                else
                    e[n] = o
        }(u, c.opts.specialEasing)); r < s; r++)
            if (n = W.prefilters[r].call(c, t, u, c.opts))
                return ut(n.stop) && (gt._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
        return gt.map(u, B, c), ut(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), gt.fx.timer(gt.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    function U(t) {
        return (t.match(St) || []).join(" ")
    }
    function V(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    function X(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(St) || []
    }
    function G(t, e, i, o) {
        var r;
        if (Array.isArray(e))
            gt.each(e, function(e, n) {
                i || _e.test(t) ? o(t, n) : G(t + "[" + ("object" == typeof n && null != n ? e : "") + "]", n, i, o)
            });
        else if (i || "object" !== n(e))
            o(t, e);
        else
            for (r in e)
                G(t + "[" + r + "]", e[r], i, o)
    }
    function Q(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n,
                o = 0,
                r = e.toLowerCase().match(St) || [];
            if (ut(i))
                for (; n = r[o++];)
                    "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }
    function Y(t, e, i, n) {
        function o(a) {
            var l;
            return r[a] = !0, gt.each(t[a] || [], function(t, a) {
                var c = a(e, i, n);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var r = {},
            s = t === Oe;
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }
    function J(t, e) {
        var i,
            n,
            o = gt.ajaxSettings.flatOptions || {};
        for (i in e)
            void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
        return n && gt.extend(!0, t, n), t
    }
    var K = [],
        Z = Object.getPrototypeOf,
        tt = K.slice,
        et = K.flat ? function(t) {
            return K.flat.call(t)
        } : function(t) {
            return K.concat.apply([], t)
        },
        it = K.push,
        nt = K.indexOf,
        ot = {},
        rt = ot.toString,
        st = ot.hasOwnProperty,
        at = st.toString,
        lt = at.call(Object),
        ct = {},
        ut = function(t) {
            return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item
        },
        ht = function(t) {
            return null != t && t === t.window
        },
        dt = t.document,
        ft = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        },
        pt = "3.6.0",
        gt = function(t, e) {
            return new gt.fn.init(t, e)
        };
    gt.fn = gt.prototype = {
        jquery: pt,
        constructor: gt,
        length: 0,
        toArray: function() {
            return tt.call(this)
        },
        get: function(t) {
            return null == t ? tt.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            var e = gt.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function(t) {
            return gt.each(this, t)
        },
        map: function(t) {
            return this.pushStack(gt.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(tt.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(gt.grep(this, function(t, e) {
                return (e + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(gt.grep(this, function(t, e) {
                return e % 2
            }))
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= i && i < e ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: it,
        sort: K.sort,
        splice: K.splice
    },
    gt.extend = gt.fn.extend = function() {
        var t,
            e,
            i,
            n,
            o,
            r,
            s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || ut(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t)
                    n = t[e],
                    "__proto__" !== e && s !== n && (c && n && (gt.isPlainObject(n) || (o = Array.isArray(n))) ? (i = s[e], r = o && !Array.isArray(i) ? [] : o || gt.isPlainObject(i) ? i : {}, o = !1, s[e] = gt.extend(c, r, n)) : void 0 !== n && (s[e] = n));
        return s
    },
    gt.extend({
        expando: "jQuery" + (pt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isPlainObject: function(t) {
            var e,
                i;
            return !(!t || "[object Object]" !== rt.call(t) || (e = Z(t)) && ("function" != typeof (i = st.call(e, "constructor") && e.constructor) || at.call(i) !== lt))
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        globalEval: function(t, e, n) {
            i(t, {
                nonce: e && e.nonce
            }, n)
        },
        each: function(t, e) {
            var i,
                n = 0;
            if (o(t))
                for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++)
                    ;
            else
                for (n in t)
                    if (!1 === e.call(t[n], n, t[n]))
                        break;
            return t
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (o(Object(t)) ? gt.merge(i, "string" == typeof t ? [t] : t) : it.call(i, t)), i
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : nt.call(e, t, i)
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, o = t.length; n < i; n++)
                t[o++] = e[n];
            return t.length = o, t
        },
        grep: function(t, e, i) {
            for (var n = [], o = 0, r = t.length, s = !i; o < r; o++)
                !e(t[o], o) !== s && n.push(t[o]);
            return n
        },
        map: function(t, e, i) {
            var n,
                r,
                s = 0,
                a = [];
            if (o(t))
                for (n = t.length; s < n; s++)
                    null != (r = e(t[s], s, i)) && a.push(r);
            else
                for (s in t)
                    null != (r = e(t[s], s, i)) && a.push(r);
            return et(a)
        },
        guid: 1,
        support: ct
    }),
    "function" == typeof Symbol && (gt.fn[Symbol.iterator] = K[Symbol.iterator]),
    gt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        ot["[object " + e + "]"] = e.toLowerCase()
    });
    var mt = function(t) {
        function e(t, e, i, n) {
            var o,
                r,
                s,
                a,
                l,
                c,
                u,
                d = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return i;
            if (!n && (I(e), e = e || A, z)) {
                if (11 !== p && (l = vt.exec(t)))
                    if (o = l[1]) {
                        if (9 === p) {
                            if (!(s = e.getElementById(o)))
                                return i;
                            if (s.id === o)
                                return i.push(s), i
                        } else if (d && (s = d.getElementById(o)) && M(e, s) && s.id === o)
                            return i.push(s), i
                    } else {
                        if (l[2])
                            return K.apply(i, e.getElementsByTagName(t)), i;
                        if ((o = l[3]) && w.getElementsByClassName && e.getElementsByClassName)
                            return K.apply(i, e.getElementsByClassName(o)), i
                    }
                if (w.qsa && !V[t + " "] && (!j || !j.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (u = t, d = e, 1 === p && (ct.test(t) || lt.test(t))) {
                        for ((d = yt.test(t) && h(e.parentNode) || e) === e && w.scope || ((a = e.getAttribute("id")) ? a = a.replace(xt, Et) : e.setAttribute("id", a = O)), r = (c = k(t)).length; r--;)
                            c[r] = (a ? "#" + a : ":scope") + " " + f(c[r]);
                        u = c.join(",")
                    }
                    try {
                        return K.apply(i, d.querySelectorAll(u)), i
                    } catch (e) {
                        V(t, !0)
                    } finally {
                        a === O && e.removeAttribute("id")
                    }
                }
            }
            return T(t.replace($, "$1"), e, i, n)
        }
        function i() {
            var t = [];
            return function e(i, n) {
                return t.push(i + " ") > x.cacheLength && delete e[t.shift()], e[i + " "] = n
            }
        }
        function n(t) {
            return t[O] = !0, t
        }
        function o(t) {
            var e = A.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function r(t, e) {
            for (var i = t.split("|"), n = i.length; n--;)
                x.attrHandle[i[n]] = e
        }
        function s(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (n)
                return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e)
                        return -1;
            return t ? 1 : -1
        }
        function a(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function l(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }
        function c(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && kt(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }
        function u(t) {
            return n(function(e) {
                return e = +e, n(function(i, n) {
                    for (var o, r = t([], i.length, e), s = r.length; s--;)
                        i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                })
            })
        }
        function h(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        function d() {}
        function f(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++)
                n += t[e].value;
            return n
        }
        function p(t, e, i) {
            var n = e.dir,
                o = e.next,
                r = o || n,
                s = i && "parentNode" === r,
                a = F++;
            return e.first ? function(e, i, o) {
                for (; e = e[n];)
                    if (1 === e.nodeType || s)
                        return t(e, i, o);
                return !1
            } : function(e, i, l) {
                var c,
                    u,
                    h,
                    d = [R, a];
                if (l) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || s) && t(e, i, l))
                            return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || s)
                            if (u = (h = e[O] || (e[O] = {}))[e.uniqueID] || (h[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase())
                                e = e[n] || e;
                            else {
                                if ((c = u[r]) && c[0] === R && c[1] === a)
                                    return d[2] = c[2];
                                if ((u[r] = d)[2] = t(e, i, l))
                                    return !0
                            }
                return !1
            }
        }
        function g(t) {
            return 1 < t.length ? function(e, i, n) {
                for (var o = t.length; o--;)
                    if (!t[o](e, i, n))
                        return !1;
                return !0
            } : t[0]
        }
        function m(t, e, i, n, o) {
            for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++)
                (r = t[a]) && (i && !i(r, n, o) || (s.push(r), c && e.push(a)));
            return s
        }
        function v(t, i, o, r, s, a) {
            return r && !r[O] && (r = v(r)), s && !s[O] && (s = v(s, a)), n(function(n, a, l, c) {
                var u,
                    h,
                    d,
                    f = [],
                    p = [],
                    g = a.length,
                    v = n || function(t, i, n) {
                        for (var o = 0, r = i.length; o < r; o++)
                            e(t, i[o], n);
                        return n
                    }(i || "*", l.nodeType ? [l] : l, []),
                    y = !t || !n && i ? v : m(v, f, t, l, c),
                    b = o ? s || (n ? t : g || r) ? [] : a : y;
                if (o && o(y, b, l, c), r)
                    for (u = m(b, p), r(u, [], l, c), h = u.length; h--;)
                        (d = u[h]) && (b[p[h]] = !(y[p[h]] = d));
                if (n) {
                    if (s || t) {
                        if (s) {
                            for (u = [], h = b.length; h--;)
                                (d = b[h]) && u.push(y[h] = d);
                            s(null, b = [], u, c)
                        }
                        for (h = b.length; h--;)
                            (d = b[h]) && -1 < (u = s ? tt(n, d) : f[h]) && (n[u] = !(a[u] = d))
                    }
                } else
                    b = m(b === a ? b.splice(g, b.length) : b),
                    s ? s(null, a, b, c) : K.apply(a, b)
            })
        }
        function y(t) {
            for (var e, i, n, o = t.length, r = x.relative[t[0].type], s = r || x.relative[" "], a = r ? 1 : 0, l = p(function(t) {
                    return t === e
                }, s, !0), c = p(function(t) {
                    return -1 < tt(e, t)
                }, s, !0), u = [function(t, i, n) {
                    var o = !r && (n || i !== _) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                    return e = null, o
                }]; a < o; a++)
                if (i = x.relative[t[a].type])
                    u = [p(g(u), i)];
                else {
                    if ((i = x.filter[t[a].type].apply(null, t[a].matches))[O]) {
                        for (n = ++a; n < o && !x.relative[t[n].type]; n++)
                            ;
                        return v(1 < a && g(u), 1 < a && f(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace($, "$1"), i, a < n && y(t.slice(a, n)), n < o && y(t = t.slice(n)), n < o && f(t))
                    }
                    u.push(i)
                }
            return g(u)
        }
        var b,
            w,
            x,
            E,
            C,
            k,
            S,
            T,
            _,
            D,
            L,
            I,
            A,
            P,
            z,
            j,
            N,
            q,
            M,
            O = "sizzle" + 1 * new Date,
            H = t.document,
            R = 0,
            F = 0,
            B = i(),
            W = i(),
            U = i(),
            V = i(),
            X = function(t, e) {
                return t === e && (L = !0), 0
            },
            G = {}.hasOwnProperty,
            Q = [],
            Y = Q.pop,
            J = Q.push,
            K = Q.push,
            Z = Q.slice,
            tt = function(t, e) {
                for (var i = 0, n = t.length; i < n; i++)
                    if (t[i] === e)
                        return i;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            it = "[\\x20\\t\\r\\n\\f]",
            nt = "(?:\\\\[\\da-fA-F]{1,6}" + it + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            ot = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + it + "*\\]",
            rt = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
            st = new RegExp(it + "+", "g"),
            $ = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
            at = new RegExp("^" + it + "*," + it + "*"),
            lt = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
            ct = new RegExp(it + "|>"),
            ut = new RegExp(rt),
            ht = new RegExp("^" + nt + "$"),
            dt = {
                ID: new RegExp("^#(" + nt + ")"),
                CLASS: new RegExp("^\\.(" + nt + ")"),
                TAG: new RegExp("^(" + nt + "|[*])"),
                ATTR: new RegExp("^" + ot),
                PSEUDO: new RegExp("^" + rt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
            },
            ft = /HTML$/i,
            pt = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            mt = /^[^{]+\{\s*\[native \w/,
            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            yt = /[+~]/,
            bt = new RegExp("\\\\[\\da-fA-F]{1,6}" + it + "?|\\\\([^\\r\\n\\f])", "g"),
            wt = function(t, e) {
                var i = "0x" + t.slice(1) - 65536;
                return e || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320))
            },
            xt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Et = function(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            Ct = function() {
                I()
            },
            kt = p(function(t) {
                return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            K.apply(Q = Z.call(H.childNodes), H.childNodes),
            Q[H.childNodes.length].nodeType
        } catch (b) {
            K = {
                apply: Q.length ? function(t, e) {
                    J.apply(t, Z.call(e))
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];)
                        ;
                    t.length = i - 1
                }
            }
        }
        for (b in w = e.support = {}, C = e.isXML = function(t) {
            var e = t && t.namespaceURI,
                i = t && (t.ownerDocument || t).documentElement;
            return !ft.test(e || i && i.nodeName || "HTML")
        }, I = e.setDocument = function(t) {
            var e,
                i,
                n = t ? t.ownerDocument || t : H;
            return n != A && 9 === n.nodeType && n.documentElement && (P = (A = n).documentElement, z = !C(A), H != A && (i = A.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", Ct, !1) : i.attachEvent && i.attachEvent("onunload", Ct)), w.scope = o(function(t) {
                return P.appendChild(t).appendChild(A.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
            }), w.attributes = o(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), w.getElementsByTagName = o(function(t) {
                return t.appendChild(A.createComment("")), !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = mt.test(A.getElementsByClassName), w.getById = o(function(t) {
                return P.appendChild(t).id = O, !A.getElementsByName || !A.getElementsByName(O).length
            }), w.getById ? (x.filter.ID = function(t) {
                var e = t.replace(bt, wt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }, x.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && z) {
                    var i = e.getElementById(t);
                    return i ? [i] : []
                }
            }) : (x.filter.ID = function(t) {
                var e = t.replace(bt, wt);
                return function(t) {
                    var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }, x.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && z) {
                    var i,
                        n,
                        o,
                        r = e.getElementById(t);
                    if (r) {
                        if ((i = r.getAttributeNode("id")) && i.value === t)
                            return [r];
                        for (o = e.getElementsByName(t), n = 0; r = o[n++];)
                            if ((i = r.getAttributeNode("id")) && i.value === t)
                                return [r]
                    }
                    return []
                }
            }), x.find.TAG = w.getElementsByTagName ? function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var i,
                    n = [],
                    o = 0,
                    r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = r[o++];)
                        1 === i.nodeType && n.push(i);
                    return n
                }
                return r
            }, x.find.CLASS = w.getElementsByClassName && function(t, e) {
                if (void 0 !== e.getElementsByClassName && z)
                    return e.getElementsByClassName(t)
            }, N = [], j = [], (w.qsa = mt.test(A.querySelectorAll)) && (o(function(t) {
                var e;
                P.appendChild(t).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + it + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || j.push("\\[" + it + "*(?:value|" + et + ")"),
                t.querySelectorAll("[id~=" + O + "-]").length || j.push("~="),
                (e = A.createElement("input")).setAttribute("name", ""),
                t.appendChild(e),
                t.querySelectorAll("[name='']").length || j.push("\\[" + it + "*name" + it + "*=" + it + "*(?:''|\"\")"),
                t.querySelectorAll(":checked").length || j.push(":checked"),
                t.querySelectorAll("a#" + O + "+*").length || j.push(".#.+[+~]"),
                t.querySelectorAll("\\\f"),
                j.push("[\\r\\n\\f]")
            }), o(function(t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = A.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && j.push("name" + it + "*[*^$|!~]?="),
                2 !== t.querySelectorAll(":enabled").length && j.push(":enabled", ":disabled"),
                P.appendChild(t).disabled = !0,
                2 !== t.querySelectorAll(":disabled").length && j.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                j.push(",.*:")
            })), (w.matchesSelector = mt.test(q = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function(t) {
                w.disconnectedMatch = q.call(t, "*"),
                q.call(t, "[s!='']:x"),
                N.push("!=", rt)
            }), j = j.length && new RegExp(j.join("|")), N = N.length && new RegExp(N.join("|")), e = mt.test(P.compareDocumentPosition), M = e || mt.test(P.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t)
                            return !0;
                return !1
            }, X = e ? function(t, e) {
                if (t === e)
                    return L = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (1 & (i = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !w.sortDetached && e.compareDocumentPosition(t) === i ? t == A || t.ownerDocument == H && M(H, t) ? -1 : e == A || e.ownerDocument == H && M(H, e) ? 1 : D ? tt(D, t) - tt(D, e) : 0 : 4 & i ? -1 : 1)
            } : function(t, e) {
                if (t === e)
                    return L = !0, 0;
                var i,
                    n = 0,
                    o = t.parentNode,
                    r = e.parentNode,
                    a = [t],
                    l = [e];
                if (!o || !r)
                    return t == A ? -1 : e == A ? 1 : o ? -1 : r ? 1 : D ? tt(D, t) - tt(D, e) : 0;
                if (o === r)
                    return s(t, e);
                for (i = t; i = i.parentNode;)
                    a.unshift(i);
                for (i = e; i = i.parentNode;)
                    l.unshift(i);
                for (; a[n] === l[n];)
                    n++;
                return n ? s(a[n], l[n]) : a[n] == H ? -1 : l[n] == H ? 1 : 0
            }), A
        }, e.matches = function(t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function(t, i) {
            if (I(t), w.matchesSelector && z && !V[i + " "] && (!N || !N.test(i)) && (!j || !j.test(i)))
                try {
                    var n = q.call(t, i);
                    if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return n
                } catch (t) {
                    V(i, !0)
                }
            return 0 < e(i, A, null, [t]).length
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) != A && I(t), M(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) != A && I(t);
            var i = x.attrHandle[e.toLowerCase()],
                n = i && G.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !z) : void 0;
            return void 0 !== n ? n : w.attributes || !z ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.escape = function(t) {
            return (t + "").replace(xt, Et)
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e,
                i = [],
                n = 0,
                o = 0;
            if (L = !w.detectDuplicates, D = !w.sortStable && t.slice(0), t.sort(X), L) {
                for (; e = t[o++];)
                    e === t[o] && (n = i.push(o));
                for (; n--;)
                    t.splice(i[n], 1)
            }
            return D = null, t
        }, E = e.getText = function(t) {
            var e,
                i = "",
                n = 0,
                o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        i += E(t)
                } else if (3 === o || 4 === o)
                    return t.nodeValue
            } else
                for (; e = t[n++];)
                    i += E(e);
            return i
        }, (x = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: dt,
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
                ATTR: function(t) {
                    return t[1] = t[1].replace(bt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e,
                        i = !t[6] && t[2];
                    return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ut.test(i) && (e = k(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(bt, wt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = B[t + " "];
                    return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && B(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                },
                ATTR: function(t, i, n) {
                    return function(o) {
                        var r = e.attr(o, t);
                        return null == r ? "!=" === i : !i || (r += "", "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && -1 < r.indexOf(n) : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? -1 < (" " + r.replace(st, " ") + " ").indexOf(n) : "|=" === i && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(t, e, i, n, o) {
                    var r = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === n && 0 === o ? function(t) {
                        return !!t.parentNode
                    } : function(e, i, l) {
                        var c,
                            u,
                            h,
                            d,
                            f,
                            p,
                            g = r !== s ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !l && !a,
                            b = !1;
                        if (m) {
                            if (r) {
                                for (; g;) {
                                    for (d = e; d = d[g];)
                                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                            return !1;
                                    p = g = "only" === t && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                for (b = (f = (c = (u = (h = (d = m)[O] || (d[O] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === R && c[1]) && c[2], d = f && m.childNodes[f]; d = ++f && d && d[g] || (b = f = 0) || p.pop();)
                                    if (1 === d.nodeType && ++b && d === e) {
                                        u[t] = [R, f, b];
                                        break
                                    }
                            } else if (y && (b = f = (c = (u = (h = (d = e)[O] || (d[O] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === R && c[1]), !1 === b)
                                for (; (d = ++f && d && d[g] || (b = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((u = (h = d[O] || (d[O] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] = [R, b]), d !== e));)
                                    ;
                            return (b -= o) === n || b % n == 0 && 0 <= b / n
                        }
                    }
                },
                PSEUDO: function(t, i) {
                    var o,
                        r = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[O] ? r(i) : 1 < r.length ? (o = [t, t, "", i], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, o = r(t, i), s = o.length; s--;)
                            t[n = tt(t, o[s])] = !(e[n] = o[s])
                    }) : function(t) {
                        return r(t, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [],
                        i = [],
                        o = S(t.replace($, "$1"));
                    return o[O] ? n(function(t, e, i, n) {
                        for (var r, s = o(t, null, n, []), a = t.length; a--;)
                            (r = s[a]) && (t[a] = !(e[a] = r))
                    }) : function(t, n, r) {
                        return e[0] = t, o(e, null, r, i), e[0] = null, !i.pop()
                    }
                }),
                has: n(function(t) {
                    return function(i) {
                        return 0 < e(t, i).length
                    }
                }),
                contains: n(function(t) {
                    return t = t.replace(bt, wt), function(e) {
                        return -1 < (e.textContent || E(e)).indexOf(t)
                    }
                }),
                lang: n(function(t) {
                    return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, wt).toLowerCase(), function(e) {
                        var i;
                        do {
                            if (i = z ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === P
                },
                focus: function(t) {
                    return t === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: c(!1),
                disabled: c(!0),
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !x.pseudos.empty(t)
                },
                header: function(t) {
                    return gt.test(t.nodeName)
                },
                input: function(t) {
                    return pt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(t, e) {
                    return [e - 1]
                }),
                eq: u(function(t, e, i) {
                    return [i < 0 ? i + e : i]
                }),
                even: u(function(t, e) {
                    for (var i = 0; i < e; i += 2)
                        t.push(i);
                    return t
                }),
                odd: u(function(t, e) {
                    for (var i = 1; i < e; i += 2)
                        t.push(i);
                    return t
                }),
                lt: u(function(t, e, i) {
                    for (var n = i < 0 ? i + e : e < i ? e : i; 0 <= --n;)
                        t.push(n);
                    return t
                }),
                gt: u(function(t, e, i) {
                    for (var n = i < 0 ? i + e : i; ++n < e;)
                        t.push(n);
                    return t
                })
            }
        }).pseudos.nth = x.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[b] = a(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            x.pseudos[b] = l(b);
        return d.prototype = x.filters = x.pseudos, x.setFilters = new d, k = e.tokenize = function(t, i) {
            var n,
                o,
                r,
                s,
                a,
                l,
                c,
                u = W[t + " "];
            if (u)
                return i ? 0 : u.slice(0);
            for (a = t, l = [], c = x.preFilter; a;) {
                for (s in n && !(o = at.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = lt.exec(a)) && (n = o.shift(), r.push({
                    value: n,
                    type: o[0].replace($, " ")
                }), a = a.slice(n.length)), x.filter)
                    !(o = dt[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
                        value: n,
                        type: s,
                        matches: o
                    }), a = a.slice(n.length));
                if (!n)
                    break
            }
            return i ? a.length : a ? e.error(t) : W(t, l).slice(0)
        }, S = e.compile = function(t, i) {
            var o,
                r,
                s,
                a,
                l,
                c,
                u = [],
                h = [],
                d = U[t + " "];
            if (!d) {
                for (i || (i = k(t)),
                o = i.length; o--;)
                    (d = y(i[o]))[O] ? u.push(d) : h.push(d);
                (d = U(t, (r = h, a = 0 < (s = u).length, l = 0 < r.length, c = function(t, i, n, o, c) {
                    var u,
                        h,
                        d,
                        f = 0,
                        p = "0",
                        g = t && [],
                        v = [],
                        y = _,
                        b = t || l && x.find.TAG("*", c),
                        w = R += null == y ? 1 : Math.random() || .1,
                        E = b.length;
                    for (c && (_ = i == A || i || c); p !== E && null != (u = b[p]); p++) {
                        if (l && u) {
                            for (h = 0, i || u.ownerDocument == A || (I(u), n = !z); d = r[h++];)
                                if (d(u, i || A, n)) {
                                    o.push(u);
                                    break
                                }
                            c && (R = w)
                        }
                        a && ((u = !d && u) && f--, t && g.push(u))
                    }
                    if (f += p, a && p !== f) {
                        for (h = 0; d = s[h++];)
                            d(g, v, i, n);
                        if (t) {
                            if (0 < f)
                                for (; p--;)
                                    g[p] || v[p] || (v[p] = Y.call(o));
                            v = m(v)
                        }
                        K.apply(o, v),
                        c && !t && 0 < v.length && 1 < f + s.length && e.uniqueSort(o)
                    }
                    return c && (R = w, _ = y), g
                }, a ? n(c) : c))).selector = t
            }
            return d
        }, T = e.select = function(t, e, i, n) {
            var o,
                r,
                s,
                a,
                l,
                c = "function" == typeof t && t,
                u = !n && k(t = c.selector || t);
            if (i = i || [], 1 === u.length) {
                if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === e.nodeType && z && x.relative[r[1].type]) {
                    if (!(e = (x.find.ID(s.matches[0].replace(bt, wt), e) || [])[0]))
                        return i;
                    c && (e = e.parentNode),
                    t = t.slice(r.shift().value.length)
                }
                for (o = dt.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !x.relative[a = s.type]);)
                    if ((l = x.find[a]) && (n = l(s.matches[0].replace(bt, wt), yt.test(r[0].type) && h(e.parentNode) || e))) {
                        if (r.splice(o, 1), !(t = n.length && f(r)))
                            return K.apply(i, n), i;
                        break
                    }
            }
            return (c || S(t, u))(n, e, !z, i, !e || yt.test(t) && h(e.parentNode) || e), i
        }, w.sortStable = O.split("").sort(X).join("") === O, w.detectDuplicates = !!L, I(), w.sortDetached = o(function(t) {
            return 1 & t.compareDocumentPosition(A.createElement("fieldset"))
        }), o(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(t, e, i) {
            if (!i)
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), w.attributes && o(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || r("value", function(t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase())
                return t.defaultValue
        }), o(function(t) {
            return null == t.getAttribute("disabled")
        }) || r(et, function(t, e, i) {
            var n;
            if (!i)
                return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    gt.find = mt,
    gt.expr = mt.selectors,
    gt.expr[":"] = gt.expr.pseudos,
    gt.uniqueSort = gt.unique = mt.uniqueSort,
    gt.text = mt.getText,
    gt.isXMLDoc = mt.isXML,
    gt.contains = mt.contains,
    gt.escapeSelector = mt.escape;
    var vt = function(t, e, i) {
            for (var n = [], o = void 0 !== i; (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (o && gt(t).is(i))
                        break;
                    n.push(t)
                }
            return n
        },
        yt = function(t, e) {
            for (var i = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && i.push(t);
            return i
        },
        bt = gt.expr.match.needsContext,
        wt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    gt.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? gt.find.matchesSelector(n, t) ? [n] : [] : gt.find.matches(t, gt.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    },
    gt.fn.extend({
        find: function(t) {
            var e,
                i,
                n = this.length,
                o = this;
            if ("string" != typeof t)
                return this.pushStack(gt(t).filter(function() {
                    for (e = 0; e < n; e++)
                        if (gt.contains(o[e], this))
                            return !0
                }));
            for (i = this.pushStack([]), e = 0; e < n; e++)
                gt.find(t, o[e], i);
            return 1 < n ? gt.uniqueSort(i) : i
        },
        filter: function(t) {
            return this.pushStack(s(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(s(this, t || [], !0))
        },
        is: function(t) {
            return !!s(this, "string" == typeof t && bt.test(t) ? gt(t) : t || [], !1).length
        }
    });
    var xt,
        Et = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (gt.fn.init = function(t, e, i) {
        var n,
            o;
        if (!t)
            return this;
        if (i = i || xt, "string" == typeof t) {
            if (!(n = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : Et.exec(t)) || !n[1] && e)
                return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof gt ? e[0] : e, gt.merge(this, gt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : dt, !0)), wt.test(n[1]) && gt.isPlainObject(e))
                    for (n in e)
                        ut(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            return (o = dt.getElementById(n[2])) && (this[0] = o, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : ut(t) ? void 0 !== i.ready ? i.ready(t) : t(gt) : gt.makeArray(t, this)
    }).prototype = gt.fn,
    xt = gt(dt);
    var Ct = /^(?:parents|prev(?:Until|All))/,
        kt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    gt.fn.extend({
        has: function(t) {
            var e = gt(t, this),
                i = e.length;
            return this.filter(function() {
                for (var t = 0; t < i; t++)
                    if (gt.contains(this, e[t]))
                        return !0
            })
        },
        closest: function(t, e) {
            var i,
                n = 0,
                o = this.length,
                r = [],
                s = "string" != typeof t && gt(t);
            if (!bt.test(t))
                for (; n < o; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (s ? -1 < s.index(i) : 1 === i.nodeType && gt.find.matchesSelector(i, t))) {
                            r.push(i);
                            break
                        }
            return this.pushStack(1 < r.length ? gt.uniqueSort(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? nt.call(gt(t), this[0]) : nt.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(gt.uniqueSort(gt.merge(this.get(), gt(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
    gt.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return vt(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return vt(t, "parentNode", i)
        },
        next: function(t) {
            return a(t, "nextSibling")
        },
        prev: function(t) {
            return a(t, "previousSibling")
        },
        nextAll: function(t) {
            return vt(t, "nextSibling")
        },
        prevAll: function(t) {
            return vt(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return vt(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return vt(t, "previousSibling", i)
        },
        siblings: function(t) {
            return yt((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return yt(t.firstChild)
        },
        contents: function(t) {
            return null != t.contentDocument && Z(t.contentDocument) ? t.contentDocument : (r(t, "template") && (t = t.content || t), gt.merge([], t.childNodes))
        }
    }, function(t, e) {
        gt.fn[t] = function(i, n) {
            var o = gt.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = gt.filter(n, o)), 1 < this.length && (kt[t] || gt.uniqueSort(o), Ct.test(t) && o.reverse()), this.pushStack(o)
        }
    });
    var St = /[^\x20\t\r\n\f]+/g;
    gt.Callbacks = function(t) {
        var e,
            i;
        t = "string" == typeof t ? (e = t, i = {}, gt.each(e.match(St) || [], function(t, e) {
            i[e] = !0
        }), i) : gt.extend({}, t);
        var o,
            r,
            s,
            a,
            l = [],
            c = [],
            u = -1,
            h = function() {
                for (a = a || t.once, s = o = !0; c.length; u = -1)
                    for (r = c.shift(); ++u < l.length;)
                        !1 === l[u].apply(r[0], r[1]) && t.stopOnFalse && (u = l.length, r = !1);
                t.memory || (r = !1),
                o = !1,
                a && (l = r ? [] : "")
            },
            d = {
                add: function() {
                    return l && (r && !o && (u = l.length - 1, c.push(r)), function e(i) {
                        gt.each(i, function(i, o) {
                            ut(o) ? t.unique && d.has(o) || l.push(o) : o && o.length && "string" !== n(o) && e(o)
                        })
                    }(arguments), r && !o && h()), this
                },
                remove: function() {
                    return gt.each(arguments, function(t, e) {
                        for (var i; -1 < (i = gt.inArray(e, l, i));)
                            l.splice(i, 1),
                            i <= u && u--
                    }), this
                },
                has: function(t) {
                    return t ? -1 < gt.inArray(t, l) : 0 < l.length
                },
                empty: function() {
                    return l && (l = []), this
                },
                disable: function() {
                    return a = c = [], l = r = "", this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return a = c = [], r || o || (l = r = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(t, e) {
                    return a || (e = [t, (e = e || []).slice ? e.slice() : e], c.push(e), o || h()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!s
                }
            };
        return d
    },
    gt.extend({
        Deferred: function(e) {
            var i = [["notify", "progress", gt.Callbacks("memory"), gt.Callbacks("memory"), 2], ["resolve", "done", gt.Callbacks("once memory"), gt.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", gt.Callbacks("once memory"), gt.Callbacks("once memory"), 1, "rejected"]],
                n = "pending",
                o = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    catch: function(t) {
                        return o.then(null, t)
                    },
                    pipe: function() {
                        var t = arguments;
                        return gt.Deferred(function(e) {
                            gt.each(i, function(i, n) {
                                var o = ut(t[n[4]]) && t[n[4]];
                                r[n[1]](function() {
                                    var t = o && o.apply(this, arguments);
                                    t && ut(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, o ? [t] : arguments)
                                })
                            }),
                            t = null
                        }).promise()
                    },
                    then: function(e, n, o) {
                        function r(e, i, n, o) {
                            return function() {
                                var a = this,
                                    u = arguments,
                                    h = function() {
                                        var t,
                                            h;
                                        if (!(e < s)) {
                                            if ((t = n.apply(a, u)) === i.promise())
                                                throw new TypeError("Thenable self-resolution");
                                            h = t && ("object" == typeof t || "function" == typeof t) && t.then,
                                            ut(h) ? o ? h.call(t, r(s, i, l, o), r(s, i, c, o)) : (s++, h.call(t, r(s, i, l, o), r(s, i, c, o), r(s, i, l, i.notifyWith))) : (n !== l && (a = void 0, u = [t]), (o || i.resolveWith)(a, u))
                                        }
                                    },
                                    d = o ? h : function() {
                                        try {
                                            h()
                                        } catch (t) {
                                            gt.Deferred.exceptionHook && gt.Deferred.exceptionHook(t, d.stackTrace),
                                            s <= e + 1 && (n !== c && (a = void 0, u = [t]), i.rejectWith(a, u))
                                        }
                                    };
                                e ? d() : (gt.Deferred.getStackHook && (d.stackTrace = gt.Deferred.getStackHook()), t.setTimeout(d))
                            }
                        }
                        var s = 0;
                        return gt.Deferred(function(t) {
                            i[0][3].add(r(0, t, ut(o) ? o : l, t.notifyWith)),
                            i[1][3].add(r(0, t, ut(e) ? e : l)),
                            i[2][3].add(r(0, t, ut(n) ? n : c))
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? gt.extend(t, o) : o
                    }
                },
                r = {};
            return gt.each(i, function(t, e) {
                var s = e[2],
                    a = e[5];
                o[e[1]] = s.add,
                a && s.add(function() {
                    n = a
                }, i[3 - t][2].disable, i[3 - t][3].disable, i[0][2].lock, i[0][3].lock),
                s.add(e[3].fire),
                r[e[0]] = function() {
                    return r[e[0] + "With"](this === r ? void 0 : this, arguments), this
                },
                r[e[0] + "With"] = s.fireWith
            }), o.promise(r), e && e.call(r, r), r
        },
        when: function(t) {
            var e = arguments.length,
                i = e,
                n = Array(i),
                o = tt.call(arguments),
                r = gt.Deferred(),
                s = function(t) {
                    return function(i) {
                        n[t] = this,
                        o[t] = 1 < arguments.length ? tt.call(arguments) : i,
                        --e || r.resolveWith(n, o)
                    }
                };
            if (e <= 1 && (u(t, r.done(s(i)).resolve, r.reject, !e), "pending" === r.state() || ut(o[i] && o[i].then)))
                return r.then();
            for (; i--;)
                u(o[i], s(i), r.reject);
            return r.promise()
        }
    });
    var Tt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    gt.Deferred.exceptionHook = function(e, i) {
        t.console && t.console.warn && e && Tt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
    },
    gt.readyException = function(e) {
        t.setTimeout(function() {
            throw e
        })
    };
    var _t = gt.Deferred();
    gt.fn.ready = function(t) {
        return _t.then(t).catch(function(t) {
            gt.readyException(t)
        }), this
    },
    gt.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(t) {
            (!0 === t ? --gt.readyWait : gt.isReady) || (gt.isReady = !0) !== t && 0 < --gt.readyWait || _t.resolveWith(dt, [gt])
        }
    }),
    gt.ready.then = _t.then,
    "complete" === dt.readyState || "loading" !== dt.readyState && !dt.documentElement.doScroll ? t.setTimeout(gt.ready) : (dt.addEventListener("DOMContentLoaded", h), t.addEventListener("load", h));
    var $ = function(t, e, i, o, r, s, a) {
            var l = 0,
                c = t.length,
                u = null == i;
            if ("object" === n(i))
                for (l in r = !0, i)
                    $(t, e, l, i[l], !0, s, a);
            else if (void 0 !== o && (r = !0, ut(o) || (a = !0), u && (a ? (e.call(t, o), e = null) : (u = e, e = function(t, e, i) {
                return u.call(gt(t), i)
            })), e))
                for (; l < c; l++)
                    e(t[l], i, a ? o : o.call(t[l], l, e(t[l], i)));
            return r ? t : u ? e.call(t) : c ? e(t[0], i) : s
        },
        Dt = /^-ms-/,
        Lt = /-([a-z])/g,
        It = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
    p.uid = 1,
    p.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {}, It(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, i) {
            var n,
                o = this.cache(t);
            if ("string" == typeof e)
                o[f(e)] = i;
            else
                for (n in e)
                    o[f(n)] = e[n];
            return o
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][f(e)]
        },
        access: function(t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function(t, e) {
            var i,
                n = t[this.expando];
            if (void 0 !== n) {
                if (void 0 !== e) {
                    i = (e = Array.isArray(e) ? e.map(f) : (e = f(e)) in n ? [e] : e.match(St) || []).length;
                    for (; i--;)
                        delete n[e[i]]
                }
                (void 0 === e || gt.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !gt.isEmptyObject(e)
        }
    };
    var At = new p,
        Pt = new p,
        zt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        jt = /[A-Z]/g;
    gt.extend({
        hasData: function(t) {
            return Pt.hasData(t) || At.hasData(t)
        },
        data: function(t, e, i) {
            return Pt.access(t, e, i)
        },
        removeData: function(t, e) {
            Pt.remove(t, e)
        },
        _data: function(t, e, i) {
            return At.access(t, e, i)
        },
        _removeData: function(t, e) {
            At.remove(t, e)
        }
    }),
    gt.fn.extend({
        data: function(t, e) {
            var i,
                n,
                o,
                r = this[0],
                s = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = Pt.get(r), 1 === r.nodeType && !At.get(r, "hasDataAttrs"))) {
                    for (i = s.length; i--;)
                        s[i] && 0 === (n = s[i].name).indexOf("data-") && (n = f(n.slice(5)), g(r, n, o[n]));
                    At.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function() {
                Pt.set(this, t)
            }) : $(this, function(e) {
                var i;
                if (r && void 0 === e)
                    return void 0 !== (i = Pt.get(r, t)) ? i : void 0 !== (i = g(r, t)) ? i : void 0;
                this.each(function() {
                    Pt.set(this, t, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                Pt.remove(this, t)
            })
        }
    }),
    gt.extend({
        queue: function(t, e, i) {
            var n;
            if (t)
                return e = (e || "fx") + "queue", n = At.get(t, e), i && (!n || Array.isArray(i) ? n = At.access(t, e, gt.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = gt.queue(t, e),
                n = i.length,
                o = i.shift(),
                r = gt._queueHooks(t, e);
            "inprogress" === o && (o = i.shift(), n--),
            o && ("fx" === e && i.unshift("inprogress"), delete r.stop, o.call(t, function() {
                gt.dequeue(t, e)
            }, r)),
            !n && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return At.get(t, i) || At.access(t, i, {
                    empty: gt.Callbacks("once memory").add(function() {
                        At.remove(t, [e + "queue", i])
                    })
                })
        }
    }),
    gt.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? gt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = gt.queue(this, t, e);
                gt._queueHooks(this, t),
                "fx" === t && "inprogress" !== i[0] && gt.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                gt.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i,
                n = 1,
                o = gt.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --n || o.resolveWith(r, [r])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)
                (i = At.get(r[s], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), o.promise(e)
        }
    });
    var Nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        qt = new RegExp("^(?:([+-])=|)(" + Nt + ")([a-z%]*)$", "i"),
        Mt = ["Top", "Right", "Bottom", "Left"],
        Ot = dt.documentElement,
        Ht = function(t) {
            return gt.contains(t.ownerDocument, t)
        },
        Rt = {
            composed: !0
        };
    Ot.getRootNode && (Ht = function(t) {
        return gt.contains(t.ownerDocument, t) || t.getRootNode(Rt) === t.ownerDocument
    });
    var Ft = function(t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && Ht(t) && "none" === gt.css(t, "display")
        },
        Bt = {};
    gt.fn.extend({
        show: function() {
            return v(this, !0)
        },
        hide: function() {
            return v(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Ft(this) ? gt(this).show() : gt(this).hide()
            })
        }
    });
    var $t,
        Wt,
        Ut = /^(?:checkbox|radio)$/i,
        Vt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        Xt = /^$|^module$|\/(?:java|ecma)script/i;
    $t = dt.createDocumentFragment().appendChild(dt.createElement("div")),
    (Wt = dt.createElement("input")).setAttribute("type", "radio"),
    Wt.setAttribute("checked", "checked"),
    Wt.setAttribute("name", "t"),
    $t.appendChild(Wt),
    ct.checkClone = $t.cloneNode(!0).cloneNode(!0).lastChild.checked,
    $t.innerHTML = "<textarea>x</textarea>",
    ct.noCloneChecked = !!$t.cloneNode(!0).lastChild.defaultValue,
    $t.innerHTML = "<option></option>",
    ct.option = !!$t.lastChild;
    var Gt = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Gt.tbody = Gt.tfoot = Gt.colgroup = Gt.caption = Gt.thead,
    Gt.th = Gt.td,
    ct.option || (Gt.optgroup = Gt.option = [1, "<select multiple='multiple'>", "</select>"]);
    var Qt = /<|&#?\w+;/,
        Yt = /^([^.]*)(?:\.(.+)|)/;
    gt.event = {
        global: {},
        add: function(t, e, i, n, o) {
            var r,
                s,
                a,
                l,
                c,
                u,
                h,
                d,
                f,
                p,
                g,
                m = At.get(t);
            if (It(t))
                for (i.handler && (i = (r = i).handler, o = r.selector), o && gt.find.matchesSelector(Ot, o), i.guid || (i.guid = gt.guid++), (l = m.events) || (l = m.events = Object.create(null)), (s = m.handle) || (s = m.handle = function(e) {
                    return void 0 !== gt && gt.event.triggered !== e.type ? gt.event.dispatch.apply(t, arguments) : void 0
                }), c = (e = (e || "").match(St) || [""]).length; c--;)
                    f = g = (a = Yt.exec(e[c]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    f && (h = gt.event.special[f] || {}, f = (o ? h.delegateType : h.bindType) || f, h = gt.event.special[f] || {}, u = gt.extend({
                        type: f,
                        origType: g,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && gt.expr.match.needsContext.test(o),
                        namespace: p.join(".")
                    }, r), (d = l[f]) || ((d = l[f] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(t, n, p, s) || t.addEventListener && t.addEventListener(f, s)), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), o ? d.splice(d.delegateCount++, 0, u) : d.push(u), gt.event.global[f] = !0)
        },
        remove: function(t, e, i, n, o) {
            var r,
                s,
                a,
                l,
                c,
                u,
                h,
                d,
                f,
                p,
                g,
                m = At.hasData(t) && At.get(t);
            if (m && (l = m.events)) {
                for (c = (e = (e || "").match(St) || [""]).length; c--;)
                    if (f = g = (a = Yt.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
                        for (h = gt.event.special[f] || {}, d = l[f = (n ? h.delegateType : h.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = d.length; r--;)
                            u = d[r],
                            !o && g !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (d.splice(r, 1), u.selector && d.delegateCount--, h.remove && h.remove.call(t, u));
                        s && !d.length && (h.teardown && !1 !== h.teardown.call(t, p, m.handle) || gt.removeEvent(t, f, m.handle), delete l[f])
                    } else
                        for (f in l)
                            gt.event.remove(t, f + e[c], i, n, !0);
                gt.isEmptyObject(l) && At.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e,
                i,
                n,
                o,
                r,
                s,
                a = new Array(arguments.length),
                l = gt.event.fix(t),
                c = (At.get(this, "events") || Object.create(null))[l.type] || [],
                u = gt.event.special[l.type] || {};
            for (a[0] = l, e = 1; e < arguments.length; e++)
                a[e] = arguments[e];
            if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                for (s = gt.event.handlers.call(this, l, c), e = 0; (o = s[e++]) && !l.isPropagationStopped();)
                    for (l.currentTarget = o.elem, i = 0; (r = o.handlers[i++]) && !l.isImmediatePropagationStopped();)
                        l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, l.data = r.data, void 0 !== (n = ((gt.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = n) && (l.preventDefault(), l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l), l.result
            }
        },
        handlers: function(t, e) {
            var i,
                n,
                o,
                r,
                s,
                a = [],
                l = e.delegateCount,
                c = t.target;
            if (l && c.nodeType && !("click" === t.type && 1 <= t.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                        for (r = [], s = {}, i = 0; i < l; i++)
                            void 0 === s[o = (n = e[i]).selector + " "] && (s[o] = n.needsContext ? -1 < gt(o, this).index(c) : gt.find(o, this, null, [c]).length),
                            s[o] && r.push(n);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    }
            return c = this, l < e.length && a.push({
                elem: c,
                handlers: e.slice(l)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(gt.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: ut(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(t) {
            return t[gt.expando] ? t : new gt.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(t) {
                    var e = this || t;
                    return Ut.test(e.type) && e.click && r(e, "input") && S(e, "click", x), !1
                },
                trigger: function(t) {
                    var e = this || t;
                    return Ut.test(e.type) && e.click && r(e, "input") && S(e, "click"), !0
                },
                _default: function(t) {
                    var e = t.target;
                    return Ut.test(e.type) && e.click && r(e, "input") && At.get(e, "click") || r(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    },
    gt.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    },
    gt.Event = function(t, e) {
        if (!(this instanceof gt.Event))
            return new gt.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? x : E, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t,
        e && gt.extend(this, e),
        this.timeStamp = t && t.timeStamp || Date.now(),
        this[gt.expando] = !0
    },
    gt.Event.prototype = {
        constructor: gt.Event,
        isDefaultPrevented: E,
        isPropagationStopped: E,
        isImmediatePropagationStopped: E,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = x,
            t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = x,
            t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = x,
            t && !this.isSimulated && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    gt.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, gt.event.addProp),
    gt.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        gt.event.special[t] = {
            setup: function() {
                return S(this, t, C), !1
            },
            trigger: function() {
                return S(this, t), !0
            },
            _default: function() {
                return !0
            },
            delegateType: e
        }
    }),
    gt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        gt.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i,
                    n = t.relatedTarget,
                    o = t.handleObj;
                return n && (n === this || gt.contains(this, n)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
            }
        }
    }),
    gt.fn.extend({
        on: function(t, e, i, n) {
            return k(this, t, e, i, n)
        },
        one: function(t, e, i, n) {
            return k(this, t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n,
                o;
            if (t && t.preventDefault && t.handleObj)
                return n = t.handleObj, gt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (o in t)
                    this.off(o, e, t[o]);
                return this
            }
            return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = E), this.each(function() {
                gt.event.remove(this, t, i, e)
            })
        }
    });
    var Jt = /<script|<style|<link/i,
        Kt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Zt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    gt.extend({
        htmlPrefilter: function(t) {
            return t
        },
        clone: function(t, e, i) {
            var n,
                o,
                r,
                s,
                a,
                l,
                c,
                u = t.cloneNode(!0),
                h = Ht(t);
            if (!(ct.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || gt.isXMLDoc(t)))
                for (s = y(u), n = 0, o = (r = y(t)).length; n < o; n++)
                    a = r[n],
                    l = s[n],
                    "input" === (c = l.nodeName.toLowerCase()) && Ut.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (e)
                if (i)
                    for (r = r || y(t), s = s || y(u), n = 0, o = r.length; n < o; n++)
                        L(r[n], s[n]);
                else
                    L(t, u);
            return 0 < (s = y(u, "script")).length && b(s, !h && y(t, "script")), u
        },
        cleanData: function(t) {
            for (var e, i, n, o = gt.event.special, r = 0; void 0 !== (i = t[r]); r++)
                if (It(i)) {
                    if (e = i[At.expando]) {
                        if (e.events)
                            for (n in e.events)
                                o[n] ? gt.event.remove(i, n) : gt.removeEvent(i, n, e.handle);
                        i[At.expando] = void 0
                    }
                    i[Pt.expando] && (i[Pt.expando] = void 0)
                }
        }
    }),
    gt.fn.extend({
        detach: function(t) {
            return A(this, t, !0)
        },
        remove: function(t) {
            return A(this, t)
        },
        text: function(t) {
            return $(this, function(t) {
                return void 0 === t ? gt.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return I(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || T(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return I(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = T(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return I(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return I(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++)
                1 === t.nodeType && (gt.cleanData(y(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return gt.clone(this, t, e)
            })
        },
        html: function(t) {
            return $(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType)
                    return e.innerHTML;
                if ("string" == typeof t && !Jt.test(t) && !Gt[(Vt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = gt.htmlPrefilter(t);
                    try {
                        for (; i < n; i++)
                            1 === (e = this[i] || {}).nodeType && (gt.cleanData(y(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return I(this, arguments, function(e) {
                var i = this.parentNode;
                gt.inArray(this, t) < 0 && (gt.cleanData(y(this)), i && i.replaceChild(e, this))
            }, t)
        }
    }),
    gt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        gt.fn[t] = function(t) {
            for (var i, n = [], o = gt(t), r = o.length - 1, s = 0; s <= r; s++)
                i = s === r ? this : this.clone(!0),
                gt(o[s])[e](i),
                it.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var te = new RegExp("^(" + Nt + ")(?!px)[a-z%]+$", "i"),
        ee = function(e) {
            var i = e.ownerDocument.defaultView;
            return i && i.opener || (i = t), i.getComputedStyle(e)
        },
        ie = function(t, e, i) {
            var n,
                o,
                r = {};
            for (o in e)
                r[o] = t.style[o],
                t.style[o] = e[o];
            for (o in n = i.call(t), e)
                t.style[o] = r[o];
            return n
        },
        ne = new RegExp(Mt.join("|"), "i");
    !function() {
        function e() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                Ot.appendChild(c).appendChild(u);
                var e = t.getComputedStyle(u);
                n = "1%" !== e.top,
                l = 12 === i(e.marginLeft),
                u.style.right = "60%",
                s = 36 === i(e.right),
                o = 36 === i(e.width),
                u.style.position = "absolute",
                r = 12 === i(u.offsetWidth / 3),
                Ot.removeChild(c),
                u = null
            }
        }
        function i(t) {
            return Math.round(parseFloat(t))
        }
        var n,
            o,
            r,
            s,
            a,
            l,
            c = dt.createElement("div"),
            u = dt.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", ct.clearCloneStyle = "content-box" === u.style.backgroundClip, gt.extend(ct, {
            boxSizingReliable: function() {
                return e(), o
            },
            pixelBoxStyles: function() {
                return e(), s
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), l
            },
            scrollboxSize: function() {
                return e(), r
            },
            reliableTrDimensions: function() {
                var e,
                    i,
                    n,
                    o;
                return null == a && (e = dt.createElement("table"), i = dt.createElement("tr"), n = dt.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", i.style.cssText = "border:1px solid", i.style.height = "1px", n.style.height = "9px", n.style.display = "block", Ot.appendChild(e).appendChild(i).appendChild(n), o = t.getComputedStyle(i), a = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === i.offsetHeight, Ot.removeChild(e)), a
            }
        }))
    }();
    var oe = ["Webkit", "Moz", "ms"],
        re = dt.createElement("div").style,
        se = {},
        ae = /^(none|table(?!-c[ea]).+)/,
        le = /^--/,
        ce = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ue = {
            letterSpacing: "0",
            fontWeight: "400"
        };
    gt.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = P(t, "opacity");
                        return "" === i ? "1" : i
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
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o,
                    r,
                    s,
                    a = f(e),
                    l = le.test(e),
                    c = t.style;
                if (l || (e = j(a)), s = gt.cssHooks[e] || gt.cssHooks[a], void 0 === i)
                    return s && "get" in s && void 0 !== (o = s.get(t, !1, n)) ? o : c[e];
                "string" == (r = typeof i) && (o = qt.exec(i)) && o[1] && (i = m(t, e, o), r = "number"),
                null != i && i == i && ("number" !== r || l || (i += o && o[3] || (gt.cssNumber[a] ? "" : "px")), ct.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l ? c.setProperty(e, i) : c[e] = i))
            }
        },
        css: function(t, e, i, n) {
            var o,
                r,
                s,
                a = f(e);
            return le.test(e) || (e = j(a)), (s = gt.cssHooks[e] || gt.cssHooks[a]) && "get" in s && (o = s.get(t, !0, i)), void 0 === o && (o = P(t, e, n)), "normal" === o && e in ue && (o = ue[e]), "" === i || i ? (r = parseFloat(o), !0 === i || isFinite(r) ? r || 0 : o) : o
        }
    }),
    gt.each(["height", "width"], function(t, e) {
        gt.cssHooks[e] = {
            get: function(t, i, n) {
                if (i)
                    return !ae.test(gt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? M(t, e, n) : ie(t, ce, function() {
                        return M(t, e, n)
                    })
            },
            set: function(t, i, n) {
                var o,
                    r = ee(t),
                    s = !ct.scrollboxSize() && "absolute" === r.position,
                    a = (s || n) && "border-box" === gt.css(t, "boxSizing", !1, r),
                    l = n ? q(t, e, n, a, r) : 0;
                return a && s && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(r[e]) - q(t, e, "border", !1, r) - .5)), l && (o = qt.exec(i)) && "px" !== (o[3] || "px") && (t.style[e] = i, i = gt.css(t, e)), N(0, i, l)
            }
        }
    }),
    gt.cssHooks.marginLeft = z(ct.reliableMarginLeft, function(t, e) {
        if (e)
            return (parseFloat(P(t, "marginLeft")) || t.getBoundingClientRect().left - ie(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px"
    }),
    gt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        gt.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++)
                    o[t + Mt[n] + e] = r[n] || r[n - 2] || r[0];
                return o
            }
        },
        "margin" !== t && (gt.cssHooks[t + e].set = N)
    }),
    gt.fn.extend({
        css: function(t, e) {
            return $(this, function(t, e, i) {
                var n,
                    o,
                    r = {},
                    s = 0;
                if (Array.isArray(e)) {
                    for (n = ee(t), o = e.length; s < o; s++)
                        r[e[s]] = gt.css(t, e[s], !1, n);
                    return r
                }
                return void 0 !== i ? gt.style(t, e, i) : gt.css(t, e)
            }, t, e, 1 < arguments.length)
        }
    }),
    ((gt.Tween = O).prototype = {
        constructor: O,
        init: function(t, e, i, n, o, r) {
            this.elem = t,
            this.prop = i,
            this.easing = o || gt.easing._default,
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = n,
            this.unit = r || (gt.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = O.propHooks[this.prop];
            return t && t.get ? t.get(this) : O.propHooks._default.get(this)
        },
        run: function(t) {
            var e,
                i = O.propHooks[this.prop];
            return this.options.duration ? this.pos = e = gt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : O.propHooks._default.set(this), this
        }
    }).init.prototype = O.prototype,
    (O.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = gt.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                gt.fx.step[t.prop] ? gt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !gt.cssHooks[t.prop] && null == t.elem.style[j(t.prop)] ? t.elem[t.prop] = t.now : gt.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = O.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    gt.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    },
    gt.fx = O.prototype.init,
    gt.fx.step = {};
    var he,
        de,
        fe,
        pe,
        ge = /^(?:toggle|show|hide)$/,
        me = /queueHooks$/;
    gt.Animation = gt.extend(W, {
        tweeners: {
            "*": [function(t, e) {
                var i = this.createTween(t, e);
                return m(i.elem, t, qt.exec(e), i), i
            }]
        },
        tweener: function(t, e) {
            ut(t) ? (e = t, t = ["*"]) : t = t.match(St);
            for (var i, n = 0, o = t.length; n < o; n++)
                i = t[n],
                W.tweeners[i] = W.tweeners[i] || [],
                W.tweeners[i].unshift(e)
        },
        prefilters: [function(t, e, i) {
            var n,
                o,
                r,
                s,
                a,
                l,
                c,
                u,
                h = "width" in e || "height" in e,
                d = this,
                f = {},
                p = t.style,
                g = t.nodeType && Ft(t),
                m = At.get(t, "fxshow");
            for (n in i.queue || (null == (s = gt._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                s.unqueued || a()
            }), s.unqueued++, d.always(function() {
                d.always(function() {
                    s.unqueued--,
                    gt.queue(t, "fx").length || s.empty.fire()
                })
            })), e)
                if (o = e[n], ge.test(o)) {
                    if (delete e[n], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[n])
                            continue;
                        g = !0
                    }
                    f[n] = m && m[n] || gt.style(t, n)
                }
            if ((l = !gt.isEmptyObject(e)) || !gt.isEmptyObject(f))
                for (n in h && 1 === t.nodeType && (i.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = At.get(t, "display")), "none" === (u = gt.css(t, "display")) && (c ? u = c : (v([t], !0), c = t.style.display || c, u = gt.css(t, "display"), v([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === gt.css(t, "float") && (l || (d.done(function() {
                    p.display = c
                }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), i.overflow && (p.overflow = "hidden", d.always(function() {
                    p.overflow = i.overflow[0],
                    p.overflowX = i.overflow[1],
                    p.overflowY = i.overflow[2]
                })), l = !1, f)
                    l || (m ? "hidden" in m && (g = m.hidden) : m = At.access(t, "fxshow", {
                        display: c
                    }), r && (m.hidden = !g), g && v([t], !0), d.done(function() {
                        for (n in g || v([t]), At.remove(t, "fxshow"), f)
                            gt.style(t, n, f[n])
                    })),
                    l = B(g ? m[n] : 0, n, d),
                    n in m || (m[n] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(t, e) {
            e ? W.prefilters.unshift(t) : W.prefilters.push(t)
        }
    }),
    gt.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? gt.extend({}, t) : {
            complete: i || !i && e || ut(t) && t,
            duration: t,
            easing: i && e || e && !ut(e) && e
        };
        return gt.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in gt.fx.speeds ? n.duration = gt.fx.speeds[n.duration] : n.duration = gt.fx.speeds._default),
        null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            ut(n.old) && n.old.call(this),
            n.queue && gt.dequeue(this, n.queue)
        }, n
    },
    gt.fn.extend({
        fadeTo: function(t, e, i, n) {
            return this.filter(Ft).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n)
        },
        animate: function(t, e, i, n) {
            var o = gt.isEmptyObject(t),
                r = gt.speed(e, i, n),
                s = function() {
                    var e = W(this, gt.extend({}, t), r);
                    (o || At.get(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(t, e, i) {
            var n = function(t) {
                var e = t.stop;
                delete t.stop,
                e(i)
            };
            return "string" != typeof t && (i = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each(function() {
                var e = !0,
                    o = null != t && t + "queueHooks",
                    r = gt.timers,
                    s = At.get(this);
                if (o)
                    s[o] && s[o].stop && n(s[o]);
                else
                    for (o in s)
                        s[o] && s[o].stop && me.test(o) && n(s[o]);
                for (o = r.length; o--;)
                    r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(i), e = !1, r.splice(o, 1));
                !e && i || gt.dequeue(this, t)
            })
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"), this.each(function() {
                var e,
                    i = At.get(this),
                    n = i[t + "queue"],
                    o = i[t + "queueHooks"],
                    r = gt.timers,
                    s = n ? n.length : 0;
                for (i.finish = !0, gt.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;)
                    r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < s; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            })
        }
    }),
    gt.each(["toggle", "show", "hide"], function(t, e) {
        var i = gt.fn[e];
        gt.fn[e] = function(t, n, o) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(F(e, !0), t, n, o)
        }
    }),
    gt.each({
        slideDown: F("show"),
        slideUp: F("hide"),
        slideToggle: F("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        gt.fn[t] = function(t, i, n) {
            return this.animate(e, t, i, n)
        }
    }),
    gt.timers = [],
    gt.fx.tick = function() {
        var t,
            e = 0,
            i = gt.timers;
        for (he = Date.now(); e < i.length; e++)
            (t = i[e])() || i[e] !== t || i.splice(e--, 1);
        i.length || gt.fx.stop(),
        he = void 0
    },
    gt.fx.timer = function(t) {
        gt.timers.push(t),
        gt.fx.start()
    },
    gt.fx.interval = 13,
    gt.fx.start = function() {
        de || (de = !0, H())
    },
    gt.fx.stop = function() {
        de = null
    },
    gt.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    gt.fn.delay = function(e, i) {
        return e = gt.fx && gt.fx.speeds[e] || e, i = i || "fx", this.queue(i, function(i, n) {
            var o = t.setTimeout(i, e);
            n.stop = function() {
                t.clearTimeout(o)
            }
        })
    },
    fe = dt.createElement("input"),
    pe = dt.createElement("select").appendChild(dt.createElement("option")),
    fe.type = "checkbox",
    ct.checkOn = "" !== fe.value,
    ct.optSelected = pe.selected,
    (fe = dt.createElement("input")).value = "t",
    fe.type = "radio",
    ct.radioValue = "t" === fe.value;
    var ve,
        ye = gt.expr.attrHandle;
    gt.fn.extend({
        attr: function(t, e) {
            return $(this, gt.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function(t) {
            return this.each(function() {
                gt.removeAttr(this, t)
            })
        }
    }),
    gt.extend({
        attr: function(t, e, i) {
            var n,
                o,
                r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return void 0 === t.getAttribute ? gt.prop(t, e, i) : (1 === r && gt.isXMLDoc(t) || (o = gt.attrHooks[e.toLowerCase()] || (gt.expr.match.bool.test(e) ? ve : void 0)), void 0 !== i ? null === i ? void gt.removeAttr(t, e) : o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : o && "get" in o && null !== (n = o.get(t, e)) ? n : null == (n = gt.find.attr(t, e)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ct.radioValue && "radio" === e && r(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var i,
                n = 0,
                o = e && e.match(St);
            if (o && 1 === t.nodeType)
                for (; i = o[n++];)
                    t.removeAttribute(i)
        }
    }),
    ve = {
        set: function(t, e, i) {
            return !1 === e ? gt.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    },
    gt.each(gt.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = ye[e] || gt.find.attr;
        ye[e] = function(t, e, n) {
            var o,
                r,
                s = e.toLowerCase();
            return n || (r = ye[s], ye[s] = o, o = null != i(t, e, n) ? s : null, ye[s] = r), o
        }
    });
    var be = /^(?:input|select|textarea|button)$/i,
        we = /^(?:a|area)$/i;
    gt.fn.extend({
        prop: function(t, e) {
            return $(this, gt.prop, t, e, 1 < arguments.length)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[gt.propFix[t] || t]
            })
        }
    }),
    gt.extend({
        prop: function(t, e, i) {
            var n,
                o,
                r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return 1 === r && gt.isXMLDoc(t) || (e = gt.propFix[e] || e, o = gt.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = gt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : be.test(t.nodeName) || we.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    ct.optSelected || (gt.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }),
    gt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        gt.propFix[this.toLowerCase()] = this
    }),
    gt.fn.extend({
        addClass: function(t) {
            var e,
                i,
                n,
                o,
                r,
                s,
                a,
                l = 0;
            if (ut(t))
                return this.each(function(e) {
                    gt(this).addClass(t.call(this, e, V(this)))
                });
            if ((e = X(t)).length)
                for (; i = this[l++];)
                    if (o = V(i), n = 1 === i.nodeType && " " + U(o) + " ") {
                        for (s = 0; r = e[s++];)
                            n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        o !== (a = U(n)) && i.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e,
                i,
                n,
                o,
                r,
                s,
                a,
                l = 0;
            if (ut(t))
                return this.each(function(e) {
                    gt(this).removeClass(t.call(this, e, V(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = X(t)).length)
                for (; i = this[l++];)
                    if (o = V(i), n = 1 === i.nodeType && " " + U(o) + " ") {
                        for (s = 0; r = e[s++];)
                            for (; -1 < n.indexOf(" " + r + " ");)
                                n = n.replace(" " + r + " ", " ");
                        o !== (a = U(n)) && i.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t,
                n = "string" === i || Array.isArray(t);
            return "boolean" == typeof e && n ? e ? this.addClass(t) : this.removeClass(t) : ut(t) ? this.each(function(i) {
                gt(this).toggleClass(t.call(this, i, V(this), e), e)
            }) : this.each(function() {
                var e,
                    o,
                    r,
                    s;
                if (n)
                    for (o = 0, r = gt(this), s = X(t); e = s[o++];)
                        r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else
                    void 0 !== t && "boolean" !== i || ((e = V(this)) && At.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : At.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e,
                i,
                n = 0;
            for (e = " " + t + " "; i = this[n++];)
                if (1 === i.nodeType && -1 < (" " + U(V(i)) + " ").indexOf(e))
                    return !0;
            return !1
        }
    });
    var xe = /\r/g;
    gt.fn.extend({
        val: function(t) {
            var e,
                i,
                n,
                o = this[0];
            return arguments.length ? (n = ut(t), this.each(function(i) {
                var o;
                1 === this.nodeType && (null == (o = n ? t.call(this, i, gt(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = gt.map(o, function(t) {
                    return null == t ? "" : t + ""
                })), (e = gt.valHooks[this.type] || gt.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
            })) : o ? (e = gt.valHooks[o.type] || gt.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : "string" == typeof (i = o.value) ? i.replace(xe, "") : null == i ? "" : i : void 0
        }
    }),
    gt.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = gt.find.attr(t, "value");
                    return null != e ? e : U(gt.text(t))
                }
            },
            select: {
                get: function(t) {
                    var e,
                        i,
                        n,
                        o = t.options,
                        s = t.selectedIndex,
                        a = "select-one" === t.type,
                        l = a ? null : [],
                        c = a ? s + 1 : o.length;
                    for (n = s < 0 ? c : a ? s : 0; n < c; n++)
                        if (((i = o[n]).selected || n === s) && !i.disabled && (!i.parentNode.disabled || !r(i.parentNode, "optgroup"))) {
                            if (e = gt(i).val(), a)
                                return e;
                            l.push(e)
                        }
                    return l
                },
                set: function(t, e) {
                    for (var i, n, o = t.options, r = gt.makeArray(e), s = o.length; s--;)
                        ((n = o[s]).selected = -1 < gt.inArray(gt.valHooks.option.get(n), r)) && (i = !0);
                    return i || (t.selectedIndex = -1), r
                }
            }
        }
    }),
    gt.each(["radio", "checkbox"], function() {
        gt.valHooks[this] = {
            set: function(t, e) {
                if (Array.isArray(e))
                    return t.checked = -1 < gt.inArray(gt(t).val(), e)
            }
        },
        ct.checkOn || (gt.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }),
    ct.focusin = "onfocusin" in t;
    var Ee = /^(?:focusinfocus|focusoutblur)$/,
        Ce = function(t) {
            t.stopPropagation()
        };
    gt.extend(gt.event, {
        trigger: function(e, i, n, o) {
            var r,
                s,
                a,
                l,
                c,
                u,
                h,
                d,
                f = [n || dt],
                p = st.call(e, "type") ? e.type : e,
                g = st.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = d = a = n = n || dt, 3 !== n.nodeType && 8 !== n.nodeType && !Ee.test(p + gt.event.triggered) && (-1 < p.indexOf(".") && (p = (g = p.split(".")).shift(), g.sort()), c = p.indexOf(":") < 0 && "on" + p, (e = e[gt.expando] ? e : new gt.Event(p, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : gt.makeArray(i, [e]), h = gt.event.special[p] || {}, o || !h.trigger || !1 !== h.trigger.apply(n, i))) {
                if (!o && !h.noBubble && !ht(n)) {
                    for (l = h.delegateType || p, Ee.test(l + p) || (s = s.parentNode); s; s = s.parentNode)
                        f.push(s),
                        a = s;
                    a === (n.ownerDocument || dt) && f.push(a.defaultView || a.parentWindow || t)
                }
                for (r = 0; (s = f[r++]) && !e.isPropagationStopped();)
                    d = s,
                    e.type = 1 < r ? l : h.bindType || p,
                    (u = (At.get(s, "events") || Object.create(null))[e.type] && At.get(s, "handle")) && u.apply(s, i),
                    (u = c && s[c]) && u.apply && It(s) && (e.result = u.apply(s, i), !1 === e.result && e.preventDefault());
                return e.type = p, o || e.isDefaultPrevented() || h._default && !1 !== h._default.apply(f.pop(), i) || !It(n) || c && ut(n[p]) && !ht(n) && ((a = n[c]) && (n[c] = null), gt.event.triggered = p, e.isPropagationStopped() && d.addEventListener(p, Ce), n[p](), e.isPropagationStopped() && d.removeEventListener(p, Ce), gt.event.triggered = void 0, a && (n[c] = a)), e.result
            }
        },
        simulate: function(t, e, i) {
            var n = gt.extend(new gt.Event, i, {
                type: t,
                isSimulated: !0
            });
            gt.event.trigger(n, null, e)
        }
    }),
    gt.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                gt.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            if (i)
                return gt.event.trigger(t, e, i, !0)
        }
    }),
    ct.focusin || gt.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            gt.event.simulate(e, t.target, gt.event.fix(t))
        };
        gt.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this.document || this,
                    o = At.access(n, e);
                o || n.addEventListener(t, i, !0),
                At.access(n, e, (o || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this.document || this,
                    o = At.access(n, e) - 1;
                o ? At.access(n, e, o) : (n.removeEventListener(t, i, !0), At.remove(n, e))
            }
        }
    });
    var ke = t.location,
        Se = {
            guid: Date.now()
        },
        Te = /\?/;
    gt.parseXML = function(e) {
        var i,
            n;
        if (!e || "string" != typeof e)
            return null;
        try {
            i = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = i && i.getElementsByTagName("parsererror")[0], i && !n || gt.error("Invalid XML: " + (n ? gt.map(n.childNodes, function(t) {
            return t.textContent
        }).join("\n") : e)), i
    };
    var _e = /\[\]$/,
        De = /\r?\n/g,
        Le = /^(?:submit|button|image|reset|file)$/i,
        Ie = /^(?:input|select|textarea|keygen)/i;
    gt.param = function(t, e) {
        var i,
            n = [],
            o = function(t, e) {
                var i = ut(e) ? e() : e;
                n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (null == t)
            return "";
        if (Array.isArray(t) || t.jquery && !gt.isPlainObject(t))
            gt.each(t, function() {
                o(this.name, this.value)
            });
        else
            for (i in t)
                G(i, t[i], e, o);
        return n.join("&")
    },
    gt.fn.extend({
        serialize: function() {
            return gt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = gt.prop(this, "elements");
                return t ? gt.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !gt(this).is(":disabled") && Ie.test(this.nodeName) && !Le.test(t) && (this.checked || !Ut.test(t))
            }).map(function(t, e) {
                var i = gt(this).val();
                return null == i ? null : Array.isArray(i) ? gt.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(De, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(De, "\r\n")
                }
            }).get()
        }
    });
    var Ae = /%20/g,
        Pe = /#.*$/,
        ze = /([?&])_=[^&]*/,
        je = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ne = /^(?:GET|HEAD)$/,
        qe = /^\/\//,
        Me = {},
        Oe = {},
        He = "*/".concat("*"),
        Re = dt.createElement("a");
    Re.href = ke.href,
    gt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ke.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ke.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": He,
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
                "text json": JSON.parse,
                "text xml": gt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? J(J(t, gt.ajaxSettings), e) : J(gt.ajaxSettings, t)
        },
        ajaxPrefilter: Q(Me),
        ajaxTransport: Q(Oe),
        ajax: function(e, i) {
            function n(e, i, n, a) {
                var c,
                    d,
                    f,
                    w,
                    x,
                    E = i;
                u || (u = !0, l && t.clearTimeout(l), o = void 0, s = a || "", C.readyState = 0 < e ? 4 : 0, c = 200 <= e && e < 300 || 304 === e, n && (w = function(t, e, i) {
                    for (var n, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0];)
                        l.shift(),
                        void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (n)
                        for (o in a)
                            if (a[o] && a[o].test(n)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0] in i)
                        r = l[0];
                    else {
                        for (o in i) {
                            if (!l[0] || t.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            s || (s = o)
                        }
                        r = r || s
                    }
                    if (r)
                        return r !== l[0] && l.unshift(r), i[r]
                }(p, C, n)), !c && -1 < gt.inArray("script", p.dataTypes) && gt.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function() {}), w = function(t, e, i, n) {
                    var o,
                        r,
                        s,
                        a,
                        l,
                        c = {},
                        u = t.dataTypes.slice();
                    if (u[1])
                        for (s in t.converters)
                            c[s.toLowerCase()] = t.converters[s];
                    for (r = u.shift(); r;)
                        if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
                            if ("*" === r)
                                r = l;
                            else if ("*" !== l && l !== r) {
                                if (!(s = c[l + " " + r] || c["* " + r]))
                                    for (o in c)
                                        if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && t.throws)
                                        e = s(e);
                                    else
                                        try {
                                            e = s(e)
                                        } catch (t) {
                                            return {
                                                state: "parsererror",
                                                error: s ? t : "No conversion from " + l + " to " + r
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: e
                    }
                }(p, w, C, c), c ? (p.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (gt.lastModified[r] = x), (x = C.getResponseHeader("etag")) && (gt.etag[r] = x)), 204 === e || "HEAD" === p.type ? E = "nocontent" : 304 === e ? E = "notmodified" : (E = w.state, d = w.data, c = !(f = w.error))) : (f = E, !e && E || (E = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (i || E) + "", c ? v.resolveWith(g, [d, E, C]) : v.rejectWith(g, [C, E, f]), C.statusCode(b), b = void 0, h && m.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? d : f]), y.fireWith(g, [C, E]), h && (m.trigger("ajaxComplete", [C, p]), --gt.active || gt.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (i = e, e = void 0),
            i = i || {};
            var o,
                r,
                s,
                a,
                l,
                c,
                u,
                h,
                d,
                f,
                p = gt.ajaxSetup({}, i),
                g = p.context || p,
                m = p.context && (g.nodeType || g.jquery) ? gt(g) : gt.event,
                v = gt.Deferred(),
                y = gt.Callbacks("once memory"),
                b = p.statusCode || {},
                w = {},
                x = {},
                E = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (u) {
                            if (!a)
                                for (a = {}; e = je.exec(s);)
                                    a[e[1].toLowerCase() + " "] = (a[e[1].toLowerCase() + " "] || []).concat(e[2]);
                            e = a[t.toLowerCase() + " "]
                        }
                        return null == e ? null : e.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return u ? s : null
                    },
                    setRequestHeader: function(t, e) {
                        return null == u && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, w[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return null == u && (p.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (u)
                                C.always(t[C.status]);
                            else
                                for (e in t)
                                    b[e] = [b[e], t[e]];
                        return this
                    },
                    abort: function(t) {
                        var e = t || E;
                        return o && o.abort(e), n(0, e), this
                    }
                };
            if (v.promise(C), p.url = ((e || p.url || ke.href) + "").replace(qe, ke.protocol + "//"), p.type = i.method || i.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(St) || [""], null == p.crossDomain) {
                c = dt.createElement("a");
                try {
                    c.href = p.url,
                    c.href = c.href,
                    p.crossDomain = Re.protocol + "//" + Re.host != c.protocol + "//" + c.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = gt.param(p.data, p.traditional)), Y(Me, p, i, C), u)
                return C;
            for (d in (h = gt.event && p.global) && 0 == gt.active++ && gt.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ne.test(p.type), r = p.url.replace(Pe, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ae, "+")) : (f = p.url.slice(r.length), p.data && (p.processData || "string" == typeof p.data) && (r += (Te.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (r = r.replace(ze, "$1"), f = (Te.test(r) ? "&" : "?") + "_=" + Se.guid++ + f), p.url = r + f), p.ifModified && (gt.lastModified[r] && C.setRequestHeader("If-Modified-Since", gt.lastModified[r]), gt.etag[r] && C.setRequestHeader("If-None-Match", gt.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || i.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + He + "; q=0.01" : "") : p.accepts["*"]), p.headers)
                C.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, C, p) || u))
                return C.abort();
            if (E = "abort", y.add(p.complete), C.done(p.success), C.fail(p.error), o = Y(Oe, p, i, C)) {
                if (C.readyState = 1, h && m.trigger("ajaxSend", [C, p]), u)
                    return C;
                p.async && 0 < p.timeout && (l = t.setTimeout(function() {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    u = !1,
                    o.send(w, n)
                } catch (e) {
                    if (u)
                        throw e;
                    n(-1, e)
                }
            } else
                n(-1, "No Transport");
            return C
        },
        getJSON: function(t, e, i) {
            return gt.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return gt.get(t, void 0, e, "script")
        }
    }),
    gt.each(["get", "post"], function(t, e) {
        gt[e] = function(t, i, n, o) {
            return ut(i) && (o = o || n, n = i, i = void 0), gt.ajax(gt.extend({
                url: t,
                type: e,
                dataType: o,
                data: i,
                success: n
            }, gt.isPlainObject(t) && t))
        }
    }),
    gt.ajaxPrefilter(function(t) {
        var e;
        for (e in t.headers)
            "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
    }),
    gt._evalUrl = function(t, e, i) {
        return gt.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(t) {
                gt.globalEval(t, e, i)
            }
        })
    },
    gt.fn.extend({
        wrapAll: function(t) {
            var e;
            return this[0] && (ut(t) && (t = t.call(this[0])), e = gt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;)
                    t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function(t) {
            return ut(t) ? this.each(function(e) {
                gt(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = gt(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = ut(t);
            return this.each(function(i) {
                gt(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each(function() {
                gt(this).replaceWith(this.childNodes)
            }), this
        }
    }),
    gt.expr.pseudos.hidden = function(t) {
        return !gt.expr.pseudos.visible(t)
    },
    gt.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    },
    gt.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    };
    var Fe = {
            0: 200,
            1223: 204
        },
        Be = gt.ajaxSettings.xhr();
    ct.cors = !!Be && "withCredentials" in Be,
    ct.ajax = Be = !!Be,
    gt.ajaxTransport(function(e) {
        var i,
            n;
        if (ct.cors || Be && !e.crossDomain)
            return {
                send: function(o, r) {
                    var s,
                        a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields)
                            a[s] = e.xhrFields[s];
                    for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o)
                        a.setRequestHeader(s, o[s]);
                    i = function(t) {
                        return function() {
                            i && (i = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Fe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    },
                    a.onload = i(),
                    n = a.onerror = a.ontimeout = i("error"),
                    void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                        4 === a.readyState && t.setTimeout(function() {
                            i && n()
                        })
                    },
                    i = i("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (o) {
                        if (i)
                            throw o
                    }
                },
                abort: function() {
                    i && i()
                }
            }
    }),
    gt.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }),
    gt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return gt.globalEval(t), t
            }
        }
    }),
    gt.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET")
    }),
    gt.ajaxTransport("script", function(t) {
        var e,
            i;
        if (t.crossDomain || t.scriptAttrs)
            return {
                send: function(n, o) {
                    e = gt("<script>").attr(t.scriptAttrs || {}).prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(),
                        i = null,
                        t && o("error" === t.type ? 404 : 200, t.type)
                    }),
                    dt.head.appendChild(e[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var $e,
        We = [],
        Ue = /(=)\?(?=&|$)|\?\?/;
    gt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = We.pop() || gt.expando + "_" + Se.guid++;
            return this[t] = !0, t
        }
    }),
    gt.ajaxPrefilter("json jsonp", function(e, i, n) {
        var o,
            r,
            s,
            a = !1 !== e.jsonp && (Ue.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ue.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return o = e.jsonpCallback = ut(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ue, "$1" + o) : !1 !== e.jsonp && (e.url += (Te.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                return s || gt.error(o + " was not called"), s[0]
            }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
                s = arguments
            }, n.always(function() {
                void 0 === r ? gt(t).removeProp(o) : t[o] = r,
                e[o] && (e.jsonpCallback = i.jsonpCallback, We.push(o)),
                s && ut(r) && r(s[0]),
                s = r = void 0
            }), "script"
    }),
    ct.createHTMLDocument = (($e = dt.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === $e.childNodes.length),
    gt.parseHTML = function(t, e, i) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (ct.createHTMLDocument ? ((n = (e = dt.implementation.createHTMLDocument("")).createElement("base")).href = dt.location.href, e.head.appendChild(n)) : e = dt), r = !i && [], (o = wt.exec(t)) ? [e.createElement(o[1])] : (o = w([t], e, r), r && r.length && gt(r).remove(), gt.merge([], o.childNodes)));
        var n,
            o,
            r
    },
    gt.fn.load = function(t, e, i) {
        var n,
            o,
            r,
            s = this,
            a = t.indexOf(" ");
        return -1 < a && (n = U(t.slice(a)), t = t.slice(0, a)), ut(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), 0 < s.length && gt.ajax({
            url: t,
            type: o || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments,
            s.html(n ? gt("<div>").append(gt.parseHTML(t)).find(n) : t)
        }).always(i && function(t, e) {
            s.each(function() {
                i.apply(this, r || [t.responseText, e, t])
            })
        }), this
    },
    gt.expr.pseudos.animated = function(t) {
        return gt.grep(gt.timers, function(e) {
            return t === e.elem
        }).length
    },
    gt.offset = {
        setOffset: function(t, e, i) {
            var n,
                o,
                r,
                s,
                a,
                l,
                c = gt.css(t, "position"),
                u = gt(t),
                h = {};
            "static" === c && (t.style.position = "relative"),
            a = u.offset(),
            r = gt.css(t, "top"),
            l = gt.css(t, "left"),
            ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (s = (n = u.position()).top, o = n.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0),
            ut(e) && (e = e.call(t, i, gt.extend({}, a))),
            null != e.top && (h.top = e.top - a.top + s),
            null != e.left && (h.left = e.left - a.left + o),
            "using" in e ? e.using.call(t, h) : u.css(h)
        }
    },
    gt.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    gt.offset.setOffset(this, t, e)
                });
            var e,
                i,
                n = this[0];
            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                top: e.top + i.pageYOffset,
                left: e.left + i.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var t,
                    e,
                    i,
                    n = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === gt.css(n, "position"))
                    e = n.getBoundingClientRect();
                else {
                    for (e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === gt.css(t, "position");)
                        t = t.parentNode;
                    t && t !== n && 1 === t.nodeType && ((o = gt(t).offset()).top += gt.css(t, "borderTopWidth", !0), o.left += gt.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - o.top - gt.css(n, "marginTop", !0),
                    left: e.left - o.left - gt.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === gt.css(t, "position");)
                    t = t.offsetParent;
                return t || Ot
            })
        }
    }),
    gt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var i = "pageYOffset" === e;
        gt.fn[t] = function(n) {
            return $(this, function(t, n, o) {
                var r;
                if (ht(t) ? r = t : 9 === t.nodeType && (r = t.defaultView), void 0 === o)
                    return r ? r[e] : t[n];
                r ? r.scrollTo(i ? r.pageXOffset : o, i ? o : r.pageYOffset) : t[n] = o
            }, t, n, arguments.length)
        }
    }),
    gt.each(["top", "left"], function(t, e) {
        gt.cssHooks[e] = z(ct.pixelPosition, function(t, i) {
            if (i)
                return i = P(t, e), te.test(i) ? gt(t).position()[e] + "px" : i
        })
    }),
    gt.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        gt.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            gt.fn[n] = function(o, r) {
                var s = arguments.length && (i || "boolean" != typeof o),
                    a = i || (!0 === o || !0 === r ? "margin" : "border");
                return $(this, function(e, i, o) {
                    var r;
                    return ht(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? gt.css(e, i, a) : gt.style(e, i, o, a)
                }, e, s ? o : void 0, s)
            }
        })
    }),
    gt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        gt.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    gt.fn.extend({
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        },
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }),
    gt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
        gt.fn[e] = function(t, i) {
            return 0 < arguments.length ? this.on(e, null, t, i) : this.trigger(e)
        }
    });
    var Ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    gt.proxy = function(t, e) {
        var i,
            n,
            o;
        if ("string" == typeof e && (i = t[e], e = t, t = i), ut(t))
            return n = tt.call(arguments, 2), (o = function() {
                return t.apply(e || this, n.concat(tt.call(arguments)))
            }).guid = t.guid = t.guid || gt.guid++, o
    },
    gt.holdReady = function(t) {
        t ? gt.readyWait++ : gt.ready(!0)
    },
    gt.isArray = Array.isArray,
    gt.parseJSON = JSON.parse,
    gt.nodeName = r,
    gt.isFunction = ut,
    gt.isWindow = ht,
    gt.camelCase = f,
    gt.type = n,
    gt.now = Date.now,
    gt.isNumeric = function(t) {
        var e = gt.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    },
    gt.trim = function(t) {
        return null == t ? "" : (t + "").replace(Ve, "")
    },
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return gt
    });
    var Xe = t.jQuery,
        Ge = t.$;
    return gt.noConflict = function(e) {
        return t.$ === gt && (t.$ = Ge), e && t.jQuery === gt && (t.jQuery = Xe), gt
    }, void 0 === e && (t.jQuery = t.$ = gt), gt
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";
    function i(i, r, a) {
        function l(t, e, n) {
            var o,
                r = "$()." + i + '("' + e + '")';
            return t.each(function(t, l) {
                var c = a.data(l, i);
                if (!c)
                    return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                var u = c[e];
                if (!u || "_" == e.charAt(0))
                    return void s(r + " is not a valid method");
                var h = u.apply(c, n);
                o = void 0 === o ? h : o
            }), void 0 !== o ? o : t
        }
        function c(t, e) {
            t.each(function(t, n) {
                var o = a.data(n, i);
                o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o))
            })
        }
        (a = a || e || t.jQuery) && (r.prototype.option || (r.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function(t) {
            if ("string" == typeof t) {
                return l(this, t, o.call(arguments, 1))
            }
            return c(this, t), this
        }, n(a))
    }
    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var o = Array.prototype.slice,
        r = t.console,
        s = void 0 === r ? function() {} : function(t) {
            r.error(t)
        };
    return n(e || t.jQuery), i
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";
    function t(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e
    }
    function e() {}
    function i() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; c > e; e++) {
            t[l[e]] = 0
        }
        return t
    }
    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
    }
    function o() {
        if (!u) {
            u = !0;
            var e = document.createElement("div");
            e.style.width = "200px",
            e.style.padding = "1px 2px 3px 4px",
            e.style.borderStyle = "solid",
            e.style.borderWidth = "1px 2px 3px 4px",
            e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var o = n(e);
            r.isBoxSizeOuter = s = 200 == t(o.width),
            i.removeChild(e)
        }
    }
    function r(e) {
        if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var r = n(e);
            if ("none" == r.display)
                return i();
            var a = {};
            a.width = e.offsetWidth,
            a.height = e.offsetHeight;
            for (var u = a.isBorderBox = "border-box" == r.boxSizing, h = 0; c > h; h++) {
                var d = l[h],
                    f = r[d],
                    p = parseFloat(f);
                a[d] = isNaN(p) ? 0 : p
            }
            var g = a.paddingLeft + a.paddingRight,
                m = a.paddingTop + a.paddingBottom,
                v = a.marginLeft + a.marginRight,
                y = a.marginTop + a.marginBottom,
                b = a.borderLeftWidth + a.borderRightWidth,
                w = a.borderTopWidth + a.borderBottomWidth,
                x = u && s,
                E = t(r.width);
            !1 !== E && (a.width = E + (x ? 0 : g + b));
            var C = t(r.height);
            return !1 !== C && (a.height = C + (x ? 0 : m + w)), a.innerWidth = a.width - (g + b), a.innerHeight = a.height - (m + w), a.outerWidth = a.width + v, a.outerHeight = a.height + y, a
        }
    }
    var s,
        a = "undefined" == typeof console ? e : function(t) {
            console.error(t)
        },
        l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        c = l.length,
        u = !1;
    return r
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}(this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0,
                o = i[n];
            e = e || [];
            for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                var s = r && r[o];
                s && (this.off(t, o), delete r[o]),
                o.apply(this, e),
                n += s ? 0 : 1,
                o = i[n]
            }
            return this
        }
    }, t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i],
                o = n + "MatchesSelector";
            if (t[o])
                return o
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    },
    i.modulo = function(t, e) {
        return (t % e + e) % e
    },
    i.makeArray = function(t) {
        var e = [];
        if (Array.isArray(t))
            e = t;
        else if (t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++)
                e.push(t[i]);
        else
            e.push(t);
        return e
    },
    i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1)
    },
    i.getParent = function(t, i) {
        for (; t != document.body;)
            if (t = t.parentNode, e(t, i))
                return t
    },
    i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    },
    i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    },
    i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var o = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!n)
                    return void o.push(t);
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++)
                    o.push(i[r])
            }
        }), o
    },
    i.debounceMethod = function(t, e, i) {
        var n = t.prototype[e],
            o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            t && clearTimeout(t);
            var e = arguments,
                r = this;
            this[o] = setTimeout(function() {
                n.apply(r, e),
                delete r[o]
            }, i || 100)
        }
    },
    i.docReady = function(t) {
        "complete" == document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
    },
    i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var n = t.console;
    return i.htmlInit = function(e, o) {
        i.docReady(function() {
            var r = i.toDashed(o),
                s = "data-" + r,
                a = document.querySelectorAll("[" + s + "]"),
                l = document.querySelectorAll(".js-" + r),
                c = i.makeArray(a).concat(i.makeArray(l)),
                u = s + "-options",
                h = t.jQuery;
            c.forEach(function(t) {
                var i,
                    r = t.getAttribute(s) || t.getAttribute(u);
                try {
                    i = r && JSON.parse(r)
                } catch (e) {
                    return void (n && n.error("Error parsing " + s + " on " + t.className + ": " + e))
                }
                var a = new e(t, i);
                h && h.data(t, o, a)
            })
        })
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";
    function i(t) {
        for (var e in t)
            return !1;
        return e = null, !0
    }
    function n(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }
    function o(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var r = document.documentElement.style,
        s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
        l = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[s],
        c = {
            transform: a,
            transition: s,
            transitionDuration: s + "Duration",
            transitionProperty: s + "Property",
            transitionDelay: s + "Delay"
        },
        u = n.prototype = Object.create(t.prototype);
    u.constructor = n,
    u._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        },
        this.css({
            position: "absolute"
        })
    },
    u.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    },
    u.getSize = function() {
        this.size = e(this.element)
    },
    u.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            e[c[i] || i] = t[i]
        }
    },
    u.getPosition = function() {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            n = t[e ? "left" : "right"],
            o = t[i ? "top" : "bottom"],
            r = this.layout.size,
            s = -1 != n.indexOf("%") ? parseFloat(n) / 100 * r.width : parseInt(n, 10),
            a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10);
        s = isNaN(s) ? 0 : s,
        a = isNaN(a) ? 0 : a,
        s -= e ? r.paddingLeft : r.paddingRight,
        a -= i ? r.paddingTop : r.paddingBottom,
        this.position.x = s,
        this.position.y = a
    },
    u.layoutPosition = function() {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            o = i ? "paddingLeft" : "paddingRight",
            r = i ? "left" : "right",
            s = i ? "right" : "left",
            a = this.position.x + t[o];
        e[r] = this.getXValue(a),
        e[s] = "";
        var l = n ? "paddingTop" : "paddingBottom",
            c = n ? "top" : "bottom",
            u = n ? "bottom" : "top",
            h = this.position.y + t[l];
        e[c] = this.getYValue(h),
        e[u] = "",
        this.css(e),
        this.emitEvent("layout", [this])
    },
    u.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    },
    u.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    },
    u._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x,
            n = this.position.y,
            o = parseInt(t, 10),
            r = parseInt(e, 10),
            s = o === this.position.x && r === this.position.y;
        if (this.setPosition(t, e), s && !this.isTransitioning)
            return void this.layoutPosition();
        var a = t - i,
            l = e - n,
            c = {};
        c.transform = this.getTranslate(a, l),
        this.transition({
            to: c,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    },
    u.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop");
        return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
    },
    u.goTo = function(t, e) {
        this.setPosition(t, e),
        this.layoutPosition()
    },
    u.moveTo = u._transitionTo,
    u.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10),
        this.position.y = parseInt(e, 10)
    },
    u._nonTransition = function(t) {
        this.css(t.to),
        t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd)
            t.onTransitionEnd[e].call(this)
    },
    u.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration))
            return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd)
            e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
            e.ingProperties[i] = !0,
            t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to),
        this.css(t.to),
        this.isTransitioning = !0
    };
    var h = "opacity," + o(a);
    u.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t,
            this.css({
                transitionProperty: h,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }),
            this.element.addEventListener(l, this, !1)
        }
    },
    u.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    },
    u.onotransitionend = function(t) {
        this.ontransitionend(t)
    };
    var d = {
        "-webkit-transform": "transform"
    };
    u.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn,
                n = d[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                e.onEnd[n].call(this),
                delete e.onEnd[n]
            }
            this.emitEvent("transitionEnd", [this])
        }
    },
    u.disableTransition = function() {
        this.removeTransitionStyles(),
        this.element.removeEventListener(l, this, !1),
        this.isTransitioning = !1
    },
    u._removeStyles = function(t) {
        var e = {};
        for (var i in t)
            e[i] = "";
        this.css(e)
    };
    var f = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return u.removeTransitionStyles = function() {
        this.css(f)
    }, u.stagger = function(t) {
        t = isNaN(t) ? 0 : t,
        this.staggerDelay = t + "ms"
    }, u.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.css({
            display: ""
        }),
        this.emitEvent("remove", [this])
    }, u.remove = function() {
        return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, u.reveal = function() {
        delete this.isHidden,
        this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {};
        e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd,
        this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, u.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, u.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity)
            return "opacity";
        for (var i in e)
            return i
    }, u.hide = function() {
        this.isHidden = !0,
        this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {};
        e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd,
        this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, u.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, u.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, n
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, r) {
        return e(t, i, n, o, r)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, n, o) {
    "use strict";
    function r(t, e) {
        var i = n.getQueryElement(t);
        if (!i)
            return void (l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i,
        c && (this.$element = c(this.element)),
        this.options = n.extend({}, this.constructor.defaults),
        this.option(e);
        var o = ++h;
        this.element.outlayerGUID = o,
        d[o] = this,
        this._create(),
        this._getOption("initLayout") && this.layout()
    }
    function s(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }
    function a(t) {
        if ("number" == typeof t)
            return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            n = e && e[2];
        return i.length ? (i = parseFloat(i)) * (p[n] || 1) : 0
    }
    var l = t.console,
        c = t.jQuery,
        u = function() {},
        h = 0,
        d = {};
    r.namespace = "outlayer",
    r.Item = o,
    r.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var f = r.prototype;
    n.extend(f, e.prototype),
    f.option = function(t) {
        n.extend(this.options, t)
    },
    f._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    },
    r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    },
    f._create = function() {
        this.reloadItems(),
        this.stamps = [],
        this.stamp(this.options.stamp),
        n.extend(this.element.style, this.options.containerStyle),
        this._getOption("resize") && this.bindResize()
    },
    f.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    },
    f._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
            var r = e[o],
                s = new i(r, this);
            n.push(s)
        }
        return n
    },
    f._filterFindItemElements = function(t) {
        return n.filterFindElements(t, this.options.itemSelector)
    },
    f.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    },
    f.layout = function() {
        this._resetLayout(),
        this._manageStamps();
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e),
        this._isLayoutInited = !0
    },
    f._init = f.layout,
    f._resetLayout = function() {
        this.getSize()
    },
    f.getSize = function() {
        this.size = i(this.element)
    },
    f._getMeasurement = function(t, e) {
        var n,
            o = this.options[t];
        o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
    },
    f.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t),
        this._layoutItems(t, e),
        this._postLayout()
    },
    f._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    },
    f._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t,
                n.isInstant = e || t.isLayoutInstant,
                i.push(n)
            }, this),
            this._processLayoutQueue(i)
        }
    },
    f._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    },
    f._processLayoutQueue = function(t) {
        this.updateStagger(),
        t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    },
    f.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger)
    },
    f._positionItem = function(t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
    },
    f._postLayout = function() {
        this.resizeContainer()
    },
    f.resizeContainer = function() {
        if (this._getOption("resizeContainer")) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
        }
    },
    f._getContainerSize = u,
    f._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
            t = Math.max(t, 0),
            this.element.style[e ? "width" : "height"] = t + "px"
        }
    },
    f._emitCompleteOnItems = function(t, e) {
        function i() {
            o.dispatchEvent(t + "Complete", null, [e])
        }
        function n() {
            ++s == r && i()
        }
        var o = this,
            r = e.length;
        if (!e || !r)
            return void i();
        var s = 0;
        e.forEach(function(e) {
            e.once(t, n)
        })
    },
    f.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), c)
            if (this.$element = this.$element || c(this.element), e) {
                var o = c.Event(e);
                o.type = t,
                this.$element.trigger(o, i)
            } else
                this.$element.trigger(t, i)
    },
    f.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    },
    f.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    },
    f.stamp = function(t) {
        (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    },
    f.unstamp = function(t) {
        (t = this._find(t)) && t.forEach(function(t) {
            n.removeFrom(this.stamps, t),
            this.unignore(t)
        }, this)
    },
    f._find = function(t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
    },
    f._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    },
    f._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    },
    f._manageStamp = u,
    f._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
            n = this._boundingRect,
            o = i(t);
        return {
            left: e.left - n.left - o.marginLeft,
            top: e.top - n.top - o.marginTop,
            right: n.right - e.right - o.marginRight,
            bottom: n.bottom - e.bottom - o.marginBottom
        }
    },
    f.handleEvent = n.handleEvent,
    f.bindResize = function() {
        t.addEventListener("resize", this),
        this.isResizeBound = !0
    },
    f.unbindResize = function() {
        t.removeEventListener("resize", this),
        this.isResizeBound = !1
    },
    f.onresize = function() {
        this.resize()
    },
    n.debounceMethod(r, "onresize", 100),
    f.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    },
    f.needsResizeLayout = function() {
        var t = i(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth
    },
    f.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    },
    f.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    },
    f.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i)
        }
    },
    f.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e),
                t.reveal()
            })
        }
    },
    f.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e),
                t.hide()
            })
        }
    },
    f.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    },
    f.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    },
    f.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t)
                return i
        }
    },
    f.getItems = function(t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    },
    f.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
        e && e.length && e.forEach(function(t) {
            t.remove(),
            n.removeFrom(this.items, t)
        }, this)
    },
    f.destroy = function() {
        var t = this.element.style;
        t.height = "",
        t.position = "",
        t.width = "",
        this.items.forEach(function(t) {
            t.destroy()
        }),
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete d[e],
        delete this.element.outlayerGUID,
        c && c.removeData(this.element, this.constructor.namespace)
    },
    r.data = function(t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && d[e]
    },
    r.create = function(t, e) {
        var i = s(r);
        return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), c && c.bridget && c.bridget(t, i), i
    };
    var p = {
        ms: 1,
        s: 1e3
    };
    return r.Item = o, r
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("packery/js/rect", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Packery = t.Packery || {}, t.Packery.Rect = e())
}(window, function() {
    "use strict";
    function t(e) {
        for (var i in t.defaults)
            this[i] = t.defaults[i];
        for (i in e)
            this[i] = e[i]
    }
    t.defaults = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
    var e = t.prototype;
    return e.contains = function(t) {
        var e = t.width || 0,
            i = t.height || 0;
        return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + i
    }, e.overlaps = function(t) {
        var e = this.x + this.width,
            i = this.y + this.height,
            n = t.x + t.width,
            o = t.y + t.height;
        return this.x < n && e > t.x && this.y < o && i > t.y
    }, e.getMaximalFreeRects = function(e) {
        if (!this.overlaps(e))
            return !1;
        var i,
            n = [],
            o = this.x + this.width,
            r = this.y + this.height,
            s = e.x + e.width,
            a = e.y + e.height;
        return this.y < e.y && (i = new t({
            x: this.x,
            y: this.y,
            width: this.width,
            height: e.y - this.y
        }), n.push(i)), o > s && (i = new t({
            x: s,
            y: this.y,
            width: o - s,
            height: this.height
        }), n.push(i)), r > a && (i = new t({
            x: this.x,
            y: a,
            width: this.width,
            height: r - a
        }), n.push(i)), this.x < e.x && (i = new t({
            x: this.x,
            y: this.y,
            width: e.x - this.x,
            height: this.height
        }), n.push(i)), n
    }, e.canFit = function(t) {
        return this.width >= t.width && this.height >= t.height
    }, t
}),
function(t, e) {
    if ("function" == typeof define && define.amd)
        define("packery/js/packer", ["./rect"], e);
    else if ("object" == typeof module && module.exports)
        module.exports = e(require("./rect"));
    else {
        var i = t.Packery = t.Packery || {};
        i.Packer = e(i.Rect)
    }
}(window, function(t) {
    "use strict";
    function e(t, e, i) {
        this.width = t || 0,
        this.height = e || 0,
        this.sortDirection = i || "downwardLeftToRight",
        this.reset()
    }
    var i = e.prototype;
    i.reset = function() {
        this.spaces = [];
        var e = new t({
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        });
        this.spaces.push(e),
        this.sorter = n[this.sortDirection] || n.downwardLeftToRight
    },
    i.pack = function(t) {
        for (var e = 0; e < this.spaces.length; e++) {
            var i = this.spaces[e];
            if (i.canFit(t)) {
                this.placeInSpace(t, i);
                break
            }
        }
    },
    i.columnPack = function(t) {
        for (var e = 0; e < this.spaces.length; e++) {
            var i = this.spaces[e];
            if (i.x <= t.x && i.x + i.width >= t.x + t.width && i.height >= t.height - .01) {
                t.y = i.y,
                this.placed(t);
                break
            }
        }
    },
    i.rowPack = function(t) {
        for (var e = 0; e < this.spaces.length; e++) {
            var i = this.spaces[e];
            if (i.y <= t.y && i.y + i.height >= t.y + t.height && i.width >= t.width - .01) {
                t.x = i.x,
                this.placed(t);
                break
            }
        }
    },
    i.placeInSpace = function(t, e) {
        t.x = e.x,
        t.y = e.y,
        this.placed(t)
    },
    i.placed = function(t) {
        for (var e = [], i = 0; i < this.spaces.length; i++) {
            var n = this.spaces[i],
                o = n.getMaximalFreeRects(t);
            o ? e.push.apply(e, o) : e.push(n)
        }
        this.spaces = e,
        this.mergeSortSpaces()
    },
    i.mergeSortSpaces = function() {
        e.mergeRects(this.spaces),
        this.spaces.sort(this.sorter)
    },
    i.addSpace = function(t) {
        this.spaces.push(t),
        this.mergeSortSpaces()
    },
    e.mergeRects = function(t) {
        var e = 0,
            i = t[e];
        t:
        for (; i;) {
            for (var n = 0, o = t[e + n]; o;) {
                if (o == i)
                    n++;
                else {
                    if (o.contains(i)) {
                        t.splice(e, 1),
                        i = t[e];
                        continue t
                    }
                    i.contains(o) ? t.splice(e + n, 1) : n++
                }
                o = t[e + n]
            }
            e++,
            i = t[e]
        }
        return t
    };
    var n = {
        downwardLeftToRight: function(t, e) {
            return t.y - e.y || t.x - e.x
        },
        rightwardTopToBottom: function(t, e) {
            return t.x - e.x || t.y - e.y
        }
    };
    return e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("packery/js/item", ["outlayer/outlayer", "./rect"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("./rect")) : t.Packery.Item = e(t.Outlayer, t.Packery.Rect)
}(window, function(t, e) {
    "use strict";
    var i = document.documentElement.style,
        n = "string" == typeof i.transform ? "transform" : "WebkitTransform",
        o = function() {
            t.Item.apply(this, arguments)
        },
        r = o.prototype = Object.create(t.Item.prototype),
        s = r._create;
    r._create = function() {
        s.call(this),
        this.rect = new e
    };
    var a = r.moveTo;
    return r.moveTo = function(t, e) {
        var i = Math.abs(this.position.x - t),
            n = Math.abs(this.position.y - e);
        return this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && 1 > i && 1 > n ? void this.goTo(t, e) : void a.apply(this, arguments)
    }, r.enablePlacing = function() {
        this.removeTransitionStyles(),
        this.isTransitioning && n && (this.element.style[n] = "none"),
        this.isTransitioning = !1,
        this.getSize(),
        this.layout._setRectSize(this.element, this.rect),
        this.isPlacing = !0
    }, r.disablePlacing = function() {
        this.isPlacing = !1
    }, r.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.layout.packer.addSpace(this.rect),
        this.emitEvent("remove", [this])
    }, r.showDropPlaceholder = function() {
        var t = this.dropPlaceholder;
        t || (t = this.dropPlaceholder = document.createElement("div"), t.className = "packery-drop-placeholder", t.style.position = "absolute"),
        t.style.width = this.size.width + "px",
        t.style.height = this.size.height + "px",
        this.positionDropPlaceholder(),
        this.layout.element.appendChild(t)
    }, r.positionDropPlaceholder = function() {
        this.dropPlaceholder.style[n] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)"
    }, r.hideDropPlaceholder = function() {
        var t = this.dropPlaceholder.parentNode;
        t && t.removeChild(this.dropPlaceholder)
    }, o
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["get-size/get-size", "outlayer/outlayer", "packery/js/rect", "packery/js/packer", "packery/js/item"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : t.Packery = e(t.getSize, t.Outlayer, t.Packery.Rect, t.Packery.Packer, t.Packery.Item)
}(window, function(t, e, i, n, o) {
    "use strict";
    function r(t, e) {
        return t.position.y - e.position.y || t.position.x - e.position.x
    }
    function s(t, e) {
        return t.position.x - e.position.x || t.position.y - e.position.y
    }
    function a(t, e) {
        var i = e.x - t.x,
            n = e.y - t.y;
        return Math.sqrt(i * i + n * n)
    }
    i.prototype.canFit = function(t) {
        return this.width >= t.width - 1 && this.height >= t.height - 1
    };
    var l = e.create("packery");
    l.Item = o;
    var c = l.prototype;
    c._create = function() {
        e.prototype._create.call(this),
        this.packer = new n,
        this.shiftPacker = new n,
        this.isEnabled = !0,
        this.dragItemCount = 0;
        var t = this;
        this.handleDraggabilly = {
            dragStart: function() {
                t.itemDragStart(this.element)
            },
            dragMove: function() {
                t.itemDragMove(this.element, this.position.x, this.position.y)
            },
            dragEnd: function() {
                t.itemDragEnd(this.element)
            }
        },
        this.handleUIDraggable = {
            start: function(e, i) {
                i && t.itemDragStart(e.currentTarget)
            },
            drag: function(e, i) {
                i && t.itemDragMove(e.currentTarget, i.position.left, i.position.top)
            },
            stop: function(e, i) {
                i && t.itemDragEnd(e.currentTarget)
            }
        }
    },
    c._resetLayout = function() {
        this.getSize(),
        this._getMeasurements();
        var t,
            e,
            i;
        this._getOption("horizontal") ? (t = 1 / 0, e = this.size.innerHeight + this.gutter, i = "rightwardTopToBottom") : (t = this.size.innerWidth + this.gutter, e = 1 / 0, i = "downwardLeftToRight"),
        this.packer.width = this.shiftPacker.width = t,
        this.packer.height = this.shiftPacker.height = e,
        this.packer.sortDirection = this.shiftPacker.sortDirection = i,
        this.packer.reset(),
        this.maxY = 0,
        this.maxX = 0
    },
    c._getMeasurements = function() {
        this._getMeasurement("columnWidth", "width"),
        this._getMeasurement("rowHeight", "height"),
        this._getMeasurement("gutter", "width")
    },
    c._getItemLayoutPosition = function(t) {
        if (this._setRectSize(t.element, t.rect), this.isShifting || this.dragItemCount > 0) {
            var e = this._getPackMethod();
            this.packer[e](t.rect)
        } else
            this.packer.pack(t.rect);
        return this._setMaxXY(t.rect), t.rect
    },
    c.shiftLayout = function() {
        this.isShifting = !0,
        this.layout(),
        delete this.isShifting
    },
    c._getPackMethod = function() {
        return this._getOption("horizontal") ? "rowPack" : "columnPack"
    },
    c._setMaxXY = function(t) {
        this.maxX = Math.max(t.x + t.width, this.maxX),
        this.maxY = Math.max(t.y + t.height, this.maxY)
    },
    c._setRectSize = function(e, i) {
        var n = t(e),
            o = n.outerWidth,
            r = n.outerHeight;
        (o || r) && (o = this._applyGridGutter(o, this.columnWidth), r = this._applyGridGutter(r, this.rowHeight)),
        i.width = Math.min(o, this.packer.width),
        i.height = Math.min(r, this.packer.height)
    },
    c._applyGridGutter = function(t, e) {
        if (!e)
            return t + this.gutter;
        e += this.gutter;
        var i = t % e,
            n = i && 1 > i ? "round" : "ceil";
        return t = Math[n](t / e) * e
    },
    c._getContainerSize = function() {
        return this._getOption("horizontal") ? {
            width: this.maxX - this.gutter
        } : {
            height: this.maxY - this.gutter
        }
    },
    c._manageStamp = function(t) {
        var e,
            n = this.getItem(t);
        if (n && n.isPlacing)
            e = n.rect;
        else {
            var o = this._getElementOffset(t);
            e = new i({
                x: this._getOption("originLeft") ? o.left : o.right,
                y: this._getOption("originTop") ? o.top : o.bottom
            })
        }
        this._setRectSize(t, e),
        this.packer.placed(e),
        this._setMaxXY(e)
    },
    c.sortItemsByPosition = function() {
        var t = this._getOption("horizontal") ? s : r;
        this.items.sort(t)
    },
    c.fit = function(t, e, i) {
        var n = this.getItem(t);
        n && (this.stamp(n.element), n.enablePlacing(), this.updateShiftTargets(n), e = void 0 === e ? n.rect.x : e, i = void 0 === i ? n.rect.y : i, this.shift(n, e, i), this._bindFitEvents(n), n.moveTo(n.rect.x, n.rect.y), this.shiftLayout(), this.unstamp(n.element), this.sortItemsByPosition(), n.disablePlacing())
    },
    c._bindFitEvents = function(t) {
        function e() {
            2 == ++n && i.dispatchEvent("fitComplete", null, [t])
        }
        var i = this,
            n = 0;
        t.once("layout", e),
        this.once("layoutComplete", e)
    },
    c.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && (this.options.shiftPercentResize ? this.resizeShiftPercentLayout() : this.layout())
    },
    c.needsResizeLayout = function() {
        var e = t(this.element),
            i = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
        return e[i] != this.size[i]
    },
    c.resizeShiftPercentLayout = function() {
        var e = this._getItemsForLayout(this.items),
            i = this._getOption("horizontal"),
            n = i ? "y" : "x",
            o = i ? "height" : "width",
            r = i ? "rowHeight" : "columnWidth",
            s = i ? "innerHeight" : "innerWidth",
            a = this[r];
        if (a = a && a + this.gutter) {
            this._getMeasurements();
            var l = this[r] + this.gutter;
            e.forEach(function(t) {
                var e = Math.round(t.rect[n] / a);
                t.rect[n] = e * l
            })
        } else {
            var c = t(this.element)[s] + this.gutter,
                u = this.packer[o];
            e.forEach(function(t) {
                t.rect[n] = t.rect[n] / u * c
            })
        }
        this.shiftLayout()
    },
    c.itemDragStart = function(t) {
        if (this.isEnabled) {
            this.stamp(t);
            var e = this.getItem(t);
            e && (e.enablePlacing(), e.showDropPlaceholder(), this.dragItemCount++, this.updateShiftTargets(e))
        }
    },
    c.updateShiftTargets = function(t) {
        this.shiftPacker.reset(),
        this._getBoundingRect();
        var e = this._getOption("originLeft"),
            n = this._getOption("originTop");
        this.stamps.forEach(function(t) {
            var o = this.getItem(t);
            if (!o || !o.isPlacing) {
                var r = this._getElementOffset(t),
                    s = new i({
                        x: e ? r.left : r.right,
                        y: n ? r.top : r.bottom
                    });
                this._setRectSize(t, s),
                this.shiftPacker.placed(s)
            }
        }, this);
        var o = this._getOption("horizontal"),
            r = o ? "rowHeight" : "columnWidth",
            s = o ? "height" : "width";
        this.shiftTargetKeys = [],
        this.shiftTargets = [];
        var a,
            l = this[r];
        if (l = l && l + this.gutter) {
            var c = Math.ceil(t.rect[s] / l),
                u = Math.floor((this.shiftPacker[s] + this.gutter) / l);
            a = (u - c) * l;
            for (var h = 0; u > h; h++) {
                var d = o ? 0 : h * l,
                    f = o ? h * l : 0;
                this._addShiftTarget(d, f, a)
            }
        } else
            a = this.shiftPacker[s] + this.gutter - t.rect[s],
            this._addShiftTarget(0, 0, a);
        var p = this._getItemsForLayout(this.items),
            g = this._getPackMethod();
        p.forEach(function(t) {
            var e = t.rect;
            this._setRectSize(t.element, e),
            this.shiftPacker[g](e),
            this._addShiftTarget(e.x, e.y, a);
            var i = o ? e.x + e.width : e.x,
                n = o ? e.y : e.y + e.height;
            if (this._addShiftTarget(i, n, a), l)
                for (var r = Math.round(e[s] / l), c = 1; r > c; c++) {
                    var u = o ? i : e.x + l * c,
                        h = o ? e.y + l * c : n;
                    this._addShiftTarget(u, h, a)
                }
        }, this)
    },
    c._addShiftTarget = function(t, e, i) {
        var n = this._getOption("horizontal") ? e : t;
        if (!(0 !== n && n > i)) {
            var o = t + "," + e;
            -1 != this.shiftTargetKeys.indexOf(o) || (this.shiftTargetKeys.push(o), this.shiftTargets.push({
                x: t,
                y: e
            }))
        }
    },
    c.shift = function(t, e, i) {
        var n,
            o = 1 / 0,
            r = {
                x: e,
                y: i
            };
        this.shiftTargets.forEach(function(t) {
            var e = a(t, r);
            o > e && (n = t, o = e)
        }),
        t.rect.x = n.x,
        t.rect.y = n.y
    };
    var u = 120;
    c.itemDragMove = function(t, e, i) {
        function n() {
            r.shift(o, e, i),
            o.positionDropPlaceholder(),
            r.layout()
        }
        var o = this.isEnabled && this.getItem(t);
        if (o) {
            e -= this.size.paddingLeft,
            i -= this.size.paddingTop;
            var r = this,
                s = new Date;
            this._itemDragTime && s - this._itemDragTime < u ? (clearTimeout(this.dragTimeout), this.dragTimeout = setTimeout(n, u)) : (n(), this._itemDragTime = s)
        }
    },
    c.itemDragEnd = function(t) {
        function e() {
            2 == ++n && (i.element.classList.remove("is-positioning-post-drag"), i.hideDropPlaceholder(), o.dispatchEvent("dragItemPositioned", null, [i]))
        }
        var i = this.isEnabled && this.getItem(t);
        if (i) {
            clearTimeout(this.dragTimeout),
            i.element.classList.add("is-positioning-post-drag");
            var n = 0,
                o = this;
            i.once("layout", e),
            this.once("layoutComplete", e),
            i.moveTo(i.rect.x, i.rect.y),
            this.layout(),
            this.dragItemCount = Math.max(0, this.dragItemCount - 1),
            this.sortItemsByPosition(),
            i.disablePlacing(),
            this.unstamp(i.element)
        }
    },
    c.bindDraggabillyEvents = function(t) {
        this._bindDraggabillyEvents(t, "on")
    },
    c.unbindDraggabillyEvents = function(t) {
        this._bindDraggabillyEvents(t, "off")
    },
    c._bindDraggabillyEvents = function(t, e) {
        var i = this.handleDraggabilly;
        t[e]("dragStart", i.dragStart),
        t[e]("dragMove", i.dragMove),
        t[e]("dragEnd", i.dragEnd)
    },
    c.bindUIDraggableEvents = function(t) {
        this._bindUIDraggableEvents(t, "on")
    },
    c.unbindUIDraggableEvents = function(t) {
        this._bindUIDraggableEvents(t, "off")
    },
    c._bindUIDraggableEvents = function(t, e) {
        var i = this.handleUIDraggable;
        t[e]("dragstart", i.start)[e]("drag", i.drag)[e]("dragstop", i.stop)
    };
    var h = c.destroy;
    return c.destroy = function() {
        h.apply(this, arguments),
        this.isEnabled = !1
    }, l.Rect = i, l.Packer = n, l
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}(this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || [])[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0,
                o = i[n];
            e = e || [];
            for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                var s = r && r[o];
                s && (this.off(t, o), delete r[o]),
                o.apply(this, e),
                n += s ? 0 : 1,
                o = i[n]
            }
            return this
        }
    }, t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}(window, function t(e, i) {
    function n(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function o(t) {
        var e = [];
        if (Array.isArray(t))
            e = t;
        else if ("number" == typeof t.length)
            for (var i = 0; i < t.length; i++)
                e.push(t[i]);
        else
            e.push(t);
        return e
    }
    function r(t, e, i) {
        if (!(this instanceof r))
            return new r(t, e, i);
        "string" == typeof t && (t = document.querySelectorAll(t)),
        this.elements = o(t),
        this.options = n({}, this.options),
        "function" == typeof e ? i = e : n(this.options, e),
        i && this.on("always", i),
        this.getImages(),
        $ && (this.jqDeferred = new $.Deferred),
        setTimeout(function() {
            this.check()
        }.bind(this))
    }
    function s(t) {
        this.img = t
    }
    function a(t, e) {
        this.url = t,
        this.element = e,
        this.img = new Image
    }
    var $ = e.jQuery,
        l = e.console;
    r.prototype = Object.create(i.prototype),
    r.prototype.options = {},
    r.prototype.getImages = function() {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    },
    r.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t),
        !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && c[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = t.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var c = {
        1: !0,
        9: !0,
        11: !0
    };
    return r.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, t),
                n = i.exec(e.backgroundImage)
            }
    }, r.prototype.addImage = function(t) {
        var e = new s(t);
        this.images.push(e)
    }, r.prototype.addBackground = function(t, e) {
        var i = new a(t, e);
        this.images.push(i)
    }, r.prototype.check = function() {
        function t(t, i, n) {
            setTimeout(function() {
                e.progress(t, i, n)
            })
        }
        var e = this;
        if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length)
            return void this.complete();
        this.images.forEach(function(e) {
            e.once("progress", t),
            e.check()
        })
    }, r.prototype.progress = function(t, e, i) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded,
        this.emitEvent("progress", [this, t, e]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && l && l.log("progress: " + i, t, e)
    }, r.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }, s.prototype = Object.create(i.prototype), s.prototype.check = function() {
        if (this.getIsImageComplete())
            return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
        this.proxyImage = new Image,
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.proxyImage.src = this.img.src
    }, s.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, s.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.img, e])
    }, s.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, s.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }, s.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }, s.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    },
    a.prototype = Object.create(s.prototype), a.prototype.check = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url,
        this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, a.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }, a.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.element, e])
    }, r.makeJQueryPlugin = function(t) {
        (t = t || e.jQuery) && ($ = t, $.fn.imagesLoaded = function(t, e) {
            return new r(this, t, e).jqDeferred.promise($(this))
        })
    }, r.makeJQueryPlugin(), r
}),
function($) {
    "use strict";
    $.fn.fitVids = function(t) {
        var e = {
            customSelector: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var i = document.createElement("div"),
                n = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
            i.className = "fit-vids-style",
            i.id = "fit-vids-style",
            i.style.display = "none",
            i.innerHTML = "&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>",
            n.parentNode.insertBefore(i, n)
        }
        return t && $.extend(e, t), this.each(function() {
            var t = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
            e.customSelector && t.push(e.customSelector);
            var i = $(this).find(t.join(","));
            i = i.not("object object"),
            i.each(function() {
                var t = $(this);
                if (!("embed" === this.tagName.toLowerCase() && t.parent("object").length || t.parent(".fluid-width-video-wrapper").length)) {
                    var e = "object" === this.tagName.toLowerCase() || t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)) ? parseInt(t.attr("height"), 10) : t.height(),
                        i = isNaN(parseInt(t.attr("width"), 10)) ? t.width() : parseInt(t.attr("width"), 10),
                        n = e / i;
                    if (!t.attr("id")) {
                        var o = "fitvid" + Math.floor(999999 * Math.random());
                        t.attr("id", o)
                    }
                    t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * n + "%"),
                    t.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto),
function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";
    function i(i, r, a) {
        function l(t, e, n) {
            var o,
                r = "$()." + i + '("' + e + '")';
            return t.each(function(t, l) {
                var c = a.data(l, i);
                if (!c)
                    return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                var u = c[e];
                if (!u || "_" == e.charAt(0))
                    return void s(r + " is not a valid method");
                var h = u.apply(c, n);
                o = void 0 === o ? h : o
            }), void 0 !== o ? o : t
        }
        function c(t, e) {
            t.each(function(t, n) {
                var o = a.data(n, i);
                o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o))
            })
        }
        (a = a || e || t.jQuery) && (r.prototype.option || (r.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function(t) {
            if ("string" == typeof t) {
                return l(this, t, o.call(arguments, 1))
            }
            return c(this, t), this
        }, n(a))
    }
    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var o = Array.prototype.slice,
        r = t.console,
        s = void 0 === r ? function() {} : function(t) {
            r.error(t)
        };
    return n(e || t.jQuery), i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0),
            e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                var r = i[o];
                n && n[r] && (this.off(t, r), delete n[r]),
                r.apply(this, e)
            }
            return this
        }
    }, e.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }, t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";
    function t(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e
    }
    function e() {}
    function i() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; e < c; e++) {
            t[l[e]] = 0
        }
        return t
    }
    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
    }
    function o() {
        if (!u) {
            u = !0;
            var e = document.createElement("div");
            e.style.width = "200px",
            e.style.padding = "1px 2px 3px 4px",
            e.style.borderStyle = "solid",
            e.style.borderWidth = "1px 2px 3px 4px",
            e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var o = n(e);
            s = 200 == Math.round(t(o.width)),
            r.isBoxSizeOuter = s,
            i.removeChild(e)
        }
    }
    function r(e) {
        if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var r = n(e);
            if ("none" == r.display)
                return i();
            var a = {};
            a.width = e.offsetWidth,
            a.height = e.offsetHeight;
            for (var u = a.isBorderBox = "border-box" == r.boxSizing, h = 0; h < c; h++) {
                var d = l[h],
                    f = r[d],
                    p = parseFloat(f);
                a[d] = isNaN(p) ? 0 : p
            }
            var g = a.paddingLeft + a.paddingRight,
                m = a.paddingTop + a.paddingBottom,
                v = a.marginLeft + a.marginRight,
                y = a.marginTop + a.marginBottom,
                b = a.borderLeftWidth + a.borderRightWidth,
                w = a.borderTopWidth + a.borderBottomWidth,
                x = u && s,
                E = t(r.width);
            !1 !== E && (a.width = E + (x ? 0 : g + b));
            var C = t(r.height);
            return !1 !== C && (a.height = C + (x ? 0 : m + w)), a.innerWidth = a.width - (g + b), a.innerHeight = a.height - (m + w), a.outerWidth = a.width + v, a.outerHeight = a.height + y, a
        }
    }
    var s,
        a = "undefined" == typeof console ? e : function(t) {
            console.error(t)
        },
        l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        c = l.length,
        u = !1;
    return r
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i],
                o = n + "MatchesSelector";
            if (t[o])
                return o
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    },
    i.modulo = function(t, e) {
        return (t % e + e) % e
    };
    var n = Array.prototype.slice;
    i.makeArray = function(t) {
        return Array.isArray(t) ? t : null === t || void 0 === t ? [] : "object" == typeof t && "number" == typeof t.length ? n.call(t) : [t]
    },
    i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1)
    },
    i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body;)
            if (t = t.parentNode, e(t, i))
                return t
    },
    i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    },
    i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    },
    i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var o = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!n)
                    return void o.push(t);
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++)
                    o.push(i[r])
            }
        }), o
    },
    i.debounceMethod = function(t, e, i) {
        i = i || 100;
        var n = t.prototype[e],
            o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            clearTimeout(t);
            var e = arguments,
                r = this;
            this[o] = setTimeout(function() {
                n.apply(r, e),
                delete r[o]
            }, i)
        }
    },
    i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    },
    i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var o = t.console;
    return i.htmlInit = function(e, n) {
        i.docReady(function() {
            var r = i.toDashed(n),
                s = "data-" + r,
                a = document.querySelectorAll("[" + s + "]"),
                l = document.querySelectorAll(".js-" + r),
                c = i.makeArray(a).concat(i.makeArray(l)),
                u = s + "-options",
                h = t.jQuery;
            c.forEach(function(t) {
                var i,
                    r = t.getAttribute(s) || t.getAttribute(u);
                try {
                    i = r && JSON.parse(r)
                } catch (e) {
                    return void (o && o.error("Error parsing " + s + " on " + t.className + ": " + e))
                }
                var a = new e(t, i);
                h && h.data(t, n, a)
            })
        })
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("get-size")) : (t.Flickity = t.Flickity || {}, t.Flickity.Cell = e(t, t.getSize))
}(window, function(t, e) {
    function i(t, e) {
        this.element = t,
        this.parent = e,
        this.create()
    }
    var n = i.prototype;
    return n.create = function() {
        this.element.style.position = "absolute",
        this.element.setAttribute("aria-selected", "false"),
        this.x = 0,
        this.shift = 0
    }, n.destroy = function() {
        this.element.style.position = "";
        var t = this.parent.originSide;
        this.element.removeAttribute("aria-selected"),
        this.element.style[t] = ""
    }, n.getSize = function() {
        this.size = e(this.element)
    }, n.setPosition = function(t) {
        this.x = t,
        this.updateTarget(),
        this.renderPosition(t)
    }, n.updateTarget = n.setDefaultTarget = function() {
        var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
        this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
    }, n.renderPosition = function(t) {
        var e = this.parent.originSide;
        this.element.style[e] = this.parent.getPositionValue(t)
    }, n.wrapShift = function(t) {
        this.shift = t,
        this.renderPosition(this.x + this.parent.slideableWidth * t)
    }, n.remove = function() {
        this.element.parentNode.removeChild(this.element)
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Flickity = t.Flickity || {}, t.Flickity.Slide = e())
}(window, function() {
    "use strict";
    function t(t) {
        this.parent = t,
        this.isOriginLeft = "left" == t.originSide,
        this.cells = [],
        this.outerWidth = 0,
        this.height = 0
    }
    var e = t.prototype;
    return e.addCell = function(t) {
        if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length) {
            this.x = t.x;
            var e = this.isOriginLeft ? "marginLeft" : "marginRight";
            this.firstMargin = t.size[e]
        }
    }, e.updateTarget = function() {
        var t = this.isOriginLeft ? "marginRight" : "marginLeft",
            e = this.getLastCell(),
            i = e ? e.size[t] : 0,
            n = this.outerWidth - (this.firstMargin + i);
        this.target = this.x + this.firstMargin + n * this.parent.cellAlign
    }, e.getLastCell = function() {
        return this.cells[this.cells.length - 1]
    }, e.select = function() {
        this.changeSelected(!0)
    }, e.unselect = function() {
        this.changeSelected(!1)
    }, e.changeSelected = function(t) {
        var e = t ? "add" : "remove";
        this.cells.forEach(function(i) {
            i.element.classList[e]("is-selected"),
            i.element.setAttribute("aria-selected", t.toString())
        })
    }, e.getCellElements = function() {
        return this.cells.map(function(t) {
            return t.element
        })
    }, t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {}, t.Flickity.animatePrototype = e(t, t.fizzyUIUtils))
}(window, function(t, e) {
    var i = {};
    return i.startAnimation = function() {
        this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
    }, i.animate = function() {
        this.applyDragForce(),
        this.applySelectedAttraction();
        var t = this.x;
        if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
            var e = this;
            requestAnimationFrame(function() {
                e.animate()
            })
        }
    }, i.positionSlider = function() {
        var t = this.x;
        this.options.wrapAround && this.cells.length > 1 && (t = e.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)),
        t += this.cursorPosition,
        t = this.options.rightToLeft ? -t : t;
        var i = this.getPositionValue(t);
        this.slider.style.transform = this.isAnimating ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")";
        var n = this.slides[0];
        if (n) {
            var o = -this.x - n.target,
                r = o / this.slidesWidth;
            this.dispatchEvent("scroll", null, [r, o])
        }
    }, i.positionSliderAtSelected = function() {
        this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider())
    }, i.getPositionValue = function(t) {
        return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
    }, i.settle = function(t) {
        this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++,
        this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]))
    }, i.shiftWrapCells = function(t) {
        var e = this.cursorPosition + t;
        this._shiftCells(this.beforeShiftCells, e, -1);
        var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, i, 1)
    }, i._shiftCells = function(t, e, i) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n],
                r = e > 0 ? i : 0;
            o.wrapShift(r),
            e -= o.size.outerWidth
        }
    }, i._unshiftCells = function(t) {
        if (t && t.length)
            for (var e = 0; e < t.length; e++)
                t[e].wrapShift(0)
    }, i.integratePhysics = function() {
        this.x += this.velocity,
        this.velocity *= this.getFrictionFactor()
    }, i.applyForce = function(t) {
        this.velocity += t
    }, i.getFrictionFactor = function() {
        return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
    }, i.getRestingPosition = function() {
        return this.x + this.velocity / (1 - this.getFrictionFactor())
    }, i.applyDragForce = function() {
        if (this.isDraggable && this.isPointerDown) {
            var t = this.dragX - this.x,
                e = t - this.velocity;
            this.applyForce(e)
        }
    }, i.applySelectedAttraction = function() {
        if ((!this.isDraggable || !this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
            var t = -1 * this.selectedSlide.target - this.x,
                e = t * this.options.selectedAttraction;
            this.applyForce(e)
        }
    }, i
}),
function(t, e) {
    if ("function" == typeof define && define.amd)
        define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function(i, n, o, r, s, a) {
            return e(t, i, n, o, r, s, a)
        });
    else if ("object" == typeof module && module.exports)
        module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));
    else {
        var i = t.Flickity;
        t.Flickity = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, i.Cell, i.Slide, i.animatePrototype)
    }
}(window, function(t, e, i, n, o, r, s) {
    function a(t, e) {
        for (t = n.makeArray(t); t.length;)
            e.appendChild(t.shift())
    }
    function l(t, e) {
        var i = n.getQueryElement(t);
        if (!i)
            return void (h && h.error("Bad element for Flickity: " + (i || t)));
        if (this.element = i, this.element.flickityGUID) {
            var o = f[this.element.flickityGUID];
            return o.option(e), o
        }
        c && (this.$element = c(this.element)),
        this.options = n.extend({}, this.constructor.defaults),
        this.option(e),
        this._create()
    }
    var c = t.jQuery,
        u = t.getComputedStyle,
        h = t.console,
        d = 0,
        f = {};
    l.defaults = {
        accessibility: !0,
        cellAlign: "center",
        freeScrollFriction: .075,
        friction: .28,
        namespaceJQueryEvents: !0,
        percentPosition: !0,
        resize: !0,
        selectedAttraction: .025,
        setGallerySize: !0
    },
    l.createMethods = [];
    var p = l.prototype;
    n.extend(p, e.prototype),
    p._create = function() {
        var e = this.guid = ++d;
        this.element.flickityGUID = e,
        f[e] = this,
        this.selectedIndex = 0,
        this.restingFrames = 0,
        this.x = 0,
        this.velocity = 0,
        this.originSide = this.options.rightToLeft ? "right" : "left",
        this.viewport = document.createElement("div"),
        this.viewport.className = "flickity-viewport",
        this._createSlider(),
        (this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this);
        for (var i in this.options.on) {
            var n = this.options.on[i];
            this.on(i, n)
        }
        l.createMethods.forEach(function(t) {
            this[t]()
        }, this),
        this.options.watchCSS ? this.watchCSS() : this.activate()
    },
    p.option = function(t) {
        n.extend(this.options, t)
    },
    p.activate = function() {
        if (!this.isActive) {
            this.isActive = !0,
            this.element.classList.add("flickity-enabled"),
            this.options.rightToLeft && this.element.classList.add("flickity-rtl"),
            this.getSize();
            a(this._filterFindCellElements(this.element.children), this.slider),
            this.viewport.appendChild(this.slider),
            this.element.appendChild(this.viewport),
            this.reloadCells(),
            this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)),
            this.emitEvent("activate");
            var t,
                e = this.options.initialIndex;
            t = this.isInitActivated ? this.selectedIndex : void 0 !== e && this.cells[e] ? e : 0,
            this.select(t, !1, !0),
            this.isInitActivated = !0,
            this.dispatchEvent("ready")
        }
    },
    p._createSlider = function() {
        var t = document.createElement("div");
        t.className = "flickity-slider",
        t.style[this.originSide] = 0,
        this.slider = t
    },
    p._filterFindCellElements = function(t) {
        return n.filterFindElements(t, this.options.cellSelector)
    },
    p.reloadCells = function() {
        this.cells = this._makeCells(this.slider.children),
        this.positionCells(),
        this._getWrapShiftCells(),
        this.setGallerySize()
    },
    p._makeCells = function(t) {
        return this._filterFindCellElements(t).map(function(t) {
            return new o(t, this)
        }, this)
    },
    p.getLastCell = function() {
        return this.cells[this.cells.length - 1]
    },
    p.getLastSlide = function() {
        return this.slides[this.slides.length - 1]
    },
    p.positionCells = function() {
        this._sizeCells(this.cells),
        this._positionCells(0)
    },
    p._positionCells = function(t) {
        t = t || 0,
        this.maxCellHeight = t ? this.maxCellHeight || 0 : 0;
        var e = 0;
        if (t > 0) {
            var i = this.cells[t - 1];
            e = i.x + i.size.outerWidth
        }
        for (var n = this.cells.length, o = t; o < n; o++) {
            var r = this.cells[o];
            r.setPosition(e),
            e += r.size.outerWidth,
            this.maxCellHeight = Math.max(r.size.outerHeight, this.maxCellHeight)
        }
        this.slideableWidth = e,
        this.updateSlides(),
        this._containSlides(),
        this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0
    },
    p._sizeCells = function(t) {
        t.forEach(function(t) {
            t.getSize()
        })
    },
    p.updateSlides = function() {
        if (this.slides = [], this.cells.length) {
            var t = new r(this);
            this.slides.push(t);
            var e = "left" == this.originSide,
                i = e ? "marginRight" : "marginLeft",
                n = this._getCanCellFit();
            this.cells.forEach(function(e, o) {
                if (!t.cells.length)
                    return void t.addCell(e);
                var s = t.outerWidth - t.firstMargin + (e.size.outerWidth - e.size[i]);
                n.call(this, o, s) ? t.addCell(e) : (t.updateTarget(), t = new r(this), this.slides.push(t), t.addCell(e))
            }, this),
            t.updateTarget(),
            this.updateSelectedSlide()
        }
    },
    p._getCanCellFit = function() {
        var t = this.options.groupCells;
        if (!t)
            return function() {
                return !1
            };
        if ("number" == typeof t) {
            var e = parseInt(t, 10);
            return function(t) {
                return t % e != 0
            }
        }
        var i = "string" == typeof t && t.match(/^(\d+)%$/),
            n = i ? parseInt(i[1], 10) / 100 : 1;
        return function(t, e) {
            return e <= (this.size.innerWidth + 1) * n
        }
    },
    p._init = p.reposition = function() {
        this.positionCells(),
        this.positionSliderAtSelected()
    },
    p.getSize = function() {
        this.size = i(this.element),
        this.setCellAlign(),
        this.cursorPosition = this.size.innerWidth * this.cellAlign
    };
    var g = {
        center: {
            left: .5,
            right: .5
        },
        left: {
            left: 0,
            right: 1
        },
        right: {
            right: 0,
            left: 1
        }
    };
    return p.setCellAlign = function() {
        var t = g[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
    }, p.setGallerySize = function() {
        if (this.options.setGallerySize) {
            var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
            this.viewport.style.height = t + "px"
        }
    }, p._getWrapShiftCells = function() {
        if (this.options.wrapAround) {
            this._unshiftCells(this.beforeShiftCells),
            this._unshiftCells(this.afterShiftCells);
            var t = this.cursorPosition,
                e = this.cells.length - 1;
            this.beforeShiftCells = this._getGapCells(t, e, -1),
            t = this.size.innerWidth - this.cursorPosition,
            this.afterShiftCells = this._getGapCells(t, 0, 1)
        }
    }, p._getGapCells = function(t, e, i) {
        for (var n = []; t > 0;) {
            var o = this.cells[e];
            if (!o)
                break;
            n.push(o),
            e += i,
            t -= o.size.outerWidth
        }
        return n
    }, p._containSlides = function() {
        if (this.options.contain && !this.options.wrapAround && this.cells.length) {
            var t = this.options.rightToLeft,
                e = t ? "marginRight" : "marginLeft",
                i = t ? "marginLeft" : "marginRight",
                n = this.slideableWidth - this.getLastCell().size[i],
                o = n < this.size.innerWidth,
                r = this.cursorPosition + this.cells[0].size[e],
                s = n - this.size.innerWidth * (1 - this.cellAlign);
            this.slides.forEach(function(t) {
                o ? t.target = n * this.cellAlign : (t.target = Math.max(t.target, r), t.target = Math.min(t.target, s))
            }, this)
        }
    }, p.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), c && this.$element) {
            t += this.options.namespaceJQueryEvents ? ".flickity" : "";
            var o = t;
            if (e) {
                var r = c.Event(e);
                r.type = t,
                o = r
            }
            this.$element.trigger(o, i)
        }
    }, p.select = function(t, e, i) {
        if (this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = n.modulo(t, this.slides.length)), this.slides[t])) {
            var o = this.selectedIndex;
            this.selectedIndex = t,
            this.updateSelectedSlide(),
            i ? this.positionSliderAtSelected() : this.startAnimation(),
            this.options.adaptiveHeight && this.setGallerySize(),
            this.dispatchEvent("select", null, [t]),
            t != o && this.dispatchEvent("change", null, [t]),
            this.dispatchEvent("cellSelect")
        }
    }, p._wrapSelect = function(t) {
        var e = this.slides.length;
        if (!(this.options.wrapAround && e > 1))
            return t;
        var i = n.modulo(t, e),
            o = Math.abs(i - this.selectedIndex),
            r = Math.abs(i + e - this.selectedIndex),
            s = Math.abs(i - e - this.selectedIndex);
        !this.isDragSelect && r < o ? t += e : !this.isDragSelect && s < o && (t -= e),
        t < 0 ? this.x -= this.slideableWidth : t >= e && (this.x += this.slideableWidth)
    }, p.previous = function(t, e) {
        this.select(this.selectedIndex - 1, t, e)
    }, p.next = function(t, e) {
        this.select(this.selectedIndex + 1, t, e)
    }, p.updateSelectedSlide = function() {
        var t = this.slides[this.selectedIndex];
        t && (this.unselectSelectedSlide(), this.selectedSlide = t, t.select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0])
    }, p.unselectSelectedSlide = function() {
        this.selectedSlide && this.selectedSlide.unselect()
    }, p.selectCell = function(t, e, i) {
        var n = this.queryCell(t);
        if (n) {
            var o = this.getCellSlideIndex(n);
            this.select(o, e, i)
        }
    }, p.getCellSlideIndex = function(t) {
        for (var e = 0; e < this.slides.length; e++) {
            if (-1 != this.slides[e].cells.indexOf(t))
                return e
        }
    }, p.getCell = function(t) {
        for (var e = 0; e < this.cells.length; e++) {
            var i = this.cells[e];
            if (i.element == t)
                return i
        }
    }, p.getCells = function(t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getCell(t);
            i && e.push(i)
        }, this), e
    }, p.getCellElements = function() {
        return this.cells.map(function(t) {
            return t.element
        })
    }, p.getParentCell = function(t) {
        var e = this.getCell(t);
        return e || (t = n.getParent(t, ".flickity-slider > *"), this.getCell(t))
    }, p.getAdjacentCellElements = function(t, e) {
        if (!t)
            return this.selectedSlide.getCellElements();
        e = void 0 === e ? this.selectedIndex : e;
        var i = this.slides.length;
        if (1 + 2 * t >= i)
            return this.getCellElements();
        for (var o = [], r = e - t; r <= e + t; r++) {
            var s = this.options.wrapAround ? n.modulo(r, i) : r,
                a = this.slides[s];
            a && (o = o.concat(a.getCellElements()))
        }
        return o
    }, p.queryCell = function(t) {
        return "number" == typeof t ? this.cells[t] : ("string" == typeof t && (t = this.element.querySelector(t)), this.getCell(t))
    }, p.uiChange = function() {
        this.emitEvent("uiChange")
    }, p.childUIPointerDown = function(t) {
        this.emitEvent("childUIPointerDown", [t])
    }, p.onresize = function() {
        this.watchCSS(),
        this.resize()
    }, n.debounceMethod(l, "onresize", 150), p.resize = function() {
        if (this.isActive) {
            this.getSize(),
            this.options.wrapAround && (this.x = n.modulo(this.x, this.slideableWidth)),
            this.positionCells(),
            this._getWrapShiftCells(),
            this.setGallerySize(),
            this.emitEvent("resize");
            var t = this.selectedElements && this.selectedElements[0];
            this.selectCell(t, !1, !0)
        }
    }, p.watchCSS = function() {
        this.options.watchCSS && (-1 != u(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
    }, p.onkeydown = function(t) {
        var e = document.activeElement && document.activeElement != this.element;
        if (this.options.accessibility && !e) {
            var i = l.keyboardHandlers[t.keyCode];
            i && i.call(this)
        }
    }, l.keyboardHandlers = {
        37: function() {
            var t = this.options.rightToLeft ? "next" : "previous";
            this.uiChange(),
            this[t]()
        },
        39: function() {
            var t = this.options.rightToLeft ? "previous" : "next";
            this.uiChange(),
            this[t]()
        }
    }, p.focus = function() {
        var e = t.pageYOffset;
        this.element.focus({
            preventScroll: !0
        }),
        t.pageYOffset != e && t.scrollTo(t.pageXOffset, e)
    }, p.deactivate = function() {
        this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach(function(t) {
            t.destroy()
        }), this.element.removeChild(this.viewport), a(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
    }, p.destroy = function() {
        this.deactivate(),
        t.removeEventListener("resize", this),
        this.emitEvent("destroy"),
        c && this.$element && c.removeData(this.element, "flickity"),
        delete this.element.flickityGUID,
        delete f[this.guid]
    }, n.extend(p, s), l.data = function(t) {
        t = n.getQueryElement(t);
        var e = t && t.flickityGUID;
        return e && f[e]
    }, n.htmlInit(l, "flickity"), c && c.bridget && c.bridget("flickity", l), l.setJQuery = function(t) {
        c = t
    }, l.Cell = o, l
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.Unipointer = e(t, t.EvEmitter)
}(window, function(t, e) {
    function i() {}
    function n() {}
    var o = n.prototype = Object.create(e.prototype);
    o.bindStartEvent = function(t) {
        this._bindStartEvent(t, !0)
    },
    o.unbindStartEvent = function(t) {
        this._bindStartEvent(t, !1)
    },
    o._bindStartEvent = function(e, i) {
        i = void 0 === i || i;
        var n = i ? "addEventListener" : "removeEventListener",
            o = "mousedown";
        t.PointerEvent ? o = "pointerdown" : "ontouchstart" in t && (o = "touchstart"),
        e[n](o, this)
    },
    o.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    },
    o.getTouch = function(t) {
        for (var e = 0; e < t.length; e++) {
            var i = t[e];
            if (i.identifier == this.pointerIdentifier)
                return i
        }
    },
    o.onmousedown = function(t) {
        var e = t.button;
        e && 0 !== e && 1 !== e || this._pointerDown(t, t)
    },
    o.ontouchstart = function(t) {
        this._pointerDown(t, t.changedTouches[0])
    },
    o.onpointerdown = function(t) {
        this._pointerDown(t, t)
    },
    o._pointerDown = function(t, e) {
        t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
    },
    o.pointerDown = function(t, e) {
        this._bindPostStartEvents(t),
        this.emitEvent("pointerDown", [t, e])
    };
    var r = {
        mousedown: ["mousemove", "mouseup"],
        touchstart: ["touchmove", "touchend", "touchcancel"],
        pointerdown: ["pointermove", "pointerup", "pointercancel"]
    };
    return o._bindPostStartEvents = function(e) {
        if (e) {
            var i = r[e.type];
            i.forEach(function(e) {
                t.addEventListener(e, this)
            }, this),
            this._boundPointerEvents = i
        }
    }, o._unbindPostStartEvents = function() {
        this._boundPointerEvents && (this._boundPointerEvents.forEach(function(e) {
            t.removeEventListener(e, this)
        }, this), delete this._boundPointerEvents)
    }, o.onmousemove = function(t) {
        this._pointerMove(t, t)
    }, o.onpointermove = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
    }, o.ontouchmove = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e)
    }, o._pointerMove = function(t, e) {
        this.pointerMove(t, e)
    }, o.pointerMove = function(t, e) {
        this.emitEvent("pointerMove", [t, e])
    }, o.onmouseup = function(t) {
        this._pointerUp(t, t)
    }, o.onpointerup = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
    }, o.ontouchend = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e)
    }, o._pointerUp = function(t, e) {
        this._pointerDone(),
        this.pointerUp(t, e)
    }, o.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [t, e])
    }, o._pointerDone = function() {
        this._pointerReset(),
        this._unbindPostStartEvents(),
        this.pointerDone()
    }, o._pointerReset = function() {
        this.isPointerDown = !1,
        delete this.pointerIdentifier
    }, o.pointerDone = i, o.onpointercancel = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
    }, o.ontouchcancel = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e)
    }, o._pointerCancel = function(t, e) {
        this._pointerDone(),
        this.pointerCancel(t, e)
    }, o.pointerCancel = function(t, e) {
        this.emitEvent("pointerCancel", [t, e])
    }, n.getPointerPoint = function(t) {
        return {
            x: t.pageX,
            y: t.pageY
        }
    }, n
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("unipointer")) : t.Unidragger = e(t, t.Unipointer)
}(window, function(t, e) {
    function i() {}
    var n = i.prototype = Object.create(e.prototype);
    n.bindHandles = function() {
        this._bindHandles(!0)
    },
    n.unbindHandles = function() {
        this._bindHandles(!1)
    },
    n._bindHandles = function(e) {
        e = void 0 === e || e;
        for (var i = e ? "addEventListener" : "removeEventListener", n = e ? this._touchActionValue : "", o = 0; o < this.handles.length; o++) {
            var r = this.handles[o];
            this._bindStartEvent(r, e),
            r[i]("click", this),
            t.PointerEvent && (r.style.touchAction = n)
        }
    },
    n._touchActionValue = "none",
    n.pointerDown = function(t, e) {
        this.okayPointerDown(t) && (this.pointerDownPointer = e, t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]))
    };
    var o = {
            TEXTAREA: !0,
            INPUT: !0,
            SELECT: !0,
            OPTION: !0
        },
        r = {
            radio: !0,
            checkbox: !0,
            button: !0,
            submit: !0,
            image: !0,
            file: !0
        };
    return n.okayPointerDown = function(t) {
        var e = o[t.target.nodeName],
            i = r[t.target.type],
            n = !e || i;
        return n || this._pointerReset(), n
    }, n.pointerDownBlur = function() {
        var t = document.activeElement;
        t && t.blur && t != document.body && t.blur()
    }, n.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [t, e, i]),
        this._dragMove(t, e, i)
    }, n._dragPointerMove = function(t, e) {
        var i = {
            x: e.pageX - this.pointerDownPointer.pageX,
            y: e.pageY - this.pointerDownPointer.pageY
        };
        return !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i
    }, n.hasDragStarted = function(t) {
        return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
    }, n.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [t, e]),
        this._dragPointerUp(t, e)
    }, n._dragPointerUp = function(t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
    }, n._dragStart = function(t, e) {
        this.isDragging = !0,
        this.isPreventingClicks = !0,
        this.dragStart(t, e)
    }, n.dragStart = function(t, e) {
        this.emitEvent("dragStart", [t, e])
    }, n._dragMove = function(t, e, i) {
        this.isDragging && this.dragMove(t, e, i)
    }, n.dragMove = function(t, e, i) {
        t.preventDefault(),
        this.emitEvent("dragMove", [t, e, i])
    }, n._dragEnd = function(t, e) {
        this.isDragging = !1,
        setTimeout(function() {
            delete this.isPreventingClicks
        }.bind(this)),
        this.dragEnd(t, e)
    }, n.dragEnd = function(t, e) {
        this.emitEvent("dragEnd", [t, e])
    }, n.onclick = function(t) {
        this.isPreventingClicks && t.preventDefault()
    }, n._staticClick = function(t, e) {
        this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function() {
            delete this.isIgnoringMouseUp
        }.bind(this), 400)))
    }, n.staticClick = function(t, e) {
        this.emitEvent("staticClick", [t, e])
    }, i.getPointerPoint = e.getPointerPoint, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function(i, n, o) {
        return e(t, i, n, o)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : t.Flickity = e(t, t.Flickity, t.Unidragger, t.fizzyUIUtils)
}(window, function(t, e, i, n) {
    function o() {
        return {
            x: t.pageXOffset,
            y: t.pageYOffset
        }
    }
    n.extend(e.defaults, {
        draggable: ">1",
        dragThreshold: 3
    }),
    e.createMethods.push("_createDrag");
    var r = e.prototype;
    n.extend(r, i.prototype),
    r._touchActionValue = "pan-y";
    var s = "createTouch" in document,
        a = !1;
    r._createDrag = function() {
        this.on("activate", this.onActivateDrag),
        this.on("uiChange", this._uiChangeDrag),
        this.on("childUIPointerDown", this._childUIPointerDownDrag),
        this.on("deactivate", this.onDeactivateDrag),
        this.on("cellChange", this.updateDraggable),
        s && !a && (t.addEventListener("touchmove", function() {}), a = !0)
    },
    r.onActivateDrag = function() {
        this.handles = [this.viewport],
        this.bindHandles(),
        this.updateDraggable()
    },
    r.onDeactivateDrag = function() {
        this.unbindHandles(),
        this.element.classList.remove("is-draggable")
    },
    r.updateDraggable = function() {
        ">1" == this.options.draggable ? this.isDraggable = this.slides.length > 1 : this.isDraggable = this.options.draggable,
        this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
    },
    r.bindDrag = function() {
        this.options.draggable = !0,
        this.updateDraggable()
    },
    r.unbindDrag = function() {
        this.options.draggable = !1,
        this.updateDraggable()
    },
    r._uiChangeDrag = function() {
        delete this.isFreeScrolling
    },
    r._childUIPointerDownDrag = function(t) {
        t.preventDefault(),
        this.pointerDownFocus(t)
    },
    r.pointerDown = function(e, i) {
        if (!this.isDraggable)
            return void this._pointerDownDefault(e, i);
        this.okayPointerDown(e) && (this._pointerDownPreventDefault(e), this.pointerDownFocus(e), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = o(), t.addEventListener("scroll", this), this._pointerDownDefault(e, i))
    },
    r._pointerDownDefault = function(t, e) {
        this.pointerDownPointer = e,
        this._bindPostStartEvents(t),
        this.dispatchEvent("pointerDown", t, [e])
    };
    var l = {
        INPUT: !0,
        TEXTAREA: !0,
        SELECT: !0
    };
    return r.pointerDownFocus = function(t) {
        l[t.target.nodeName] || this.focus()
    }, r._pointerDownPreventDefault = function(t) {
        var e = "touchstart" == t.type,
            i = "touch" == t.pointerType,
            n = l[t.target.nodeName];
        e || i || n || t.preventDefault()
    }, r.hasDragStarted = function(t) {
        return Math.abs(t.x) > this.options.dragThreshold
    }, r.pointerUp = function(t, e) {
        delete this.isTouchScrolling,
        this.viewport.classList.remove("is-pointer-down"),
        this.dispatchEvent("pointerUp", t, [e]),
        this._dragPointerUp(t, e)
    }, r.pointerDone = function() {
        t.removeEventListener("scroll", this),
        delete this.pointerDownScroll
    }, r.dragStart = function(e, i) {
        this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), t.removeEventListener("scroll", this), this.dispatchEvent("dragStart", e, [i]))
    }, r.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.dispatchEvent("pointerMove", t, [e, i]),
        this._dragMove(t, e, i)
    }, r.dragMove = function(t, e, i) {
        if (this.isDraggable) {
            t.preventDefault(),
            this.previousDragX = this.dragX;
            var n = this.options.rightToLeft ? -1 : 1;
            this.options.wrapAround && (i.x = i.x % this.slideableWidth);
            var o = this.dragStartPosition + i.x * n;
            if (!this.options.wrapAround && this.slides.length) {
                var r = Math.max(-this.slides[0].target, this.dragStartPosition);
                o = o > r ? .5 * (o + r) : o;
                var s = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                o = o < s ? .5 * (o + s) : o
            }
            this.dragX = o,
            this.dragMoveTime = new Date,
            this.dispatchEvent("dragMove", t, [e, i])
        }
    }, r.dragEnd = function(t, e) {
        if (this.isDraggable) {
            this.options.freeScroll && (this.isFreeScrolling = !0);
            var i = this.dragEndRestingSelect();
            if (this.options.freeScroll && !this.options.wrapAround) {
                var n = this.getRestingPosition();
                this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target
            } else
                this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
            delete this.previousDragX,
            this.isDragSelect = this.options.wrapAround,
            this.select(i),
            delete this.isDragSelect,
            this.dispatchEvent("dragEnd", t, [e])
        }
    }, r.dragEndRestingSelect = function() {
        var t = this.getRestingPosition(),
            e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
            i = this._getClosestResting(t, e, 1),
            n = this._getClosestResting(t, e, -1);
        return i.distance < n.distance ? i.index : n.index
    }, r._getClosestResting = function(t, e, i) {
        for (var n = this.selectedIndex, o = 1 / 0, r = this.options.contain && !this.options.wrapAround ? function(t, e) {
                return t <= e
            } : function(t, e) {
                return t < e
            }; r(e, o) && (n += i, o = e, null !== (e = this.getSlideDistance(-t, n)));)
            e = Math.abs(e);
        return {
            distance: o,
            index: n - i
        }
    }, r.getSlideDistance = function(t, e) {
        var i = this.slides.length,
            o = this.options.wrapAround && i > 1,
            r = o ? n.modulo(e, i) : e,
            s = this.slides[r];
        if (!s)
            return null;
        var a = o ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (s.target + a)
    }, r.dragEndBoostSelect = function() {
        if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100)
            return 0;
        var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
            e = this.previousDragX - this.dragX;
        return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0
    }, r.staticClick = function(t, e) {
        var i = this.getParentCell(t.target),
            n = i && i.element,
            o = i && this.cells.indexOf(i);
        this.dispatchEvent("staticClick", t, [e, n, o])
    }, r.onscroll = function() {
        var t = o(),
            e = this.pointerDownScroll.x - t.x,
            i = this.pointerDownScroll.y - t.y;
        (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone()
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("tap-listener/tap-listener", ["unipointer/unipointer"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("unipointer")) : t.TapListener = e(t, t.Unipointer)
}(window, function(t, e) {
    function i(t) {
        this.bindTap(t)
    }
    var n = i.prototype = Object.create(e.prototype);
    return n.bindTap = function(t) {
        t && (this.unbindTap(), this.tapElement = t, this._bindStartEvent(t, !0))
    }, n.unbindTap = function() {
        this.tapElement && (this._bindStartEvent(this.tapElement, !0), delete this.tapElement)
    }, n.pointerUp = function(i, n) {
        if (!this.isIgnoringMouseUp || "mouseup" != i.type) {
            var o = e.getPointerPoint(n),
                r = this.tapElement.getBoundingClientRect(),
                s = t.pageXOffset,
                a = t.pageYOffset;
            if (o.x >= r.left + s && o.x <= r.right + s && o.y >= r.top + a && o.y <= r.bottom + a && this.emitEvent("tap", [i, n]), "mouseup" != i.type) {
                this.isIgnoringMouseUp = !0;
                var l = this;
                setTimeout(function() {
                    delete l.isIgnoringMouseUp
                }, 400)
            }
        }
    }, n.destroy = function() {
        this.pointerDone(),
        this.unbindTap()
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(i, n, o) {
        return e(t, i, n, o)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils)
}(window, function(t, e, i, n) {
    "use strict";
    function o(t, e) {
        this.direction = t,
        this.parent = e,
        this._create()
    }
    function r(t) {
        return "string" == typeof t ? t : "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z"
    }
    var s = "http://www.w3.org/2000/svg";
    o.prototype = Object.create(i.prototype),
    o.prototype._create = function() {
        this.isEnabled = !0,
        this.isPrevious = -1 == this.direction;
        var t = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == t;
        var e = this.element = document.createElement("button");
        e.className = "flickity-button flickity-prev-next-button",
        e.className += this.isPrevious ? " previous" : " next",
        e.setAttribute("type", "button"),
        this.disable(),
        e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
        var i = this.createSVG();
        e.appendChild(i),
        this.on("tap", this.onTap),
        this.parent.on("select", this.update.bind(this)),
        this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
    },
    o.prototype.activate = function() {
        this.bindTap(this.element),
        this.element.addEventListener("click", this),
        this.parent.element.appendChild(this.element)
    },
    o.prototype.deactivate = function() {
        this.parent.element.removeChild(this.element),
        i.prototype.destroy.call(this),
        this.element.removeEventListener("click", this)
    },
    o.prototype.createSVG = function() {
        var t = document.createElementNS(s, "svg");
        t.setAttribute("class", "flickity-button-icon"),
        t.setAttribute("viewBox", "0 0 100 100");
        var e = document.createElementNS(s, "path"),
            i = r(this.parent.options.arrowShape);
        return e.setAttribute("d", i), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(e), t
    },
    o.prototype.onTap = function() {
        if (this.isEnabled) {
            this.parent.uiChange();
            var t = this.isPrevious ? "previous" : "next";
            this.parent[t]()
        }
    },
    o.prototype.handleEvent = n.handleEvent,
    o.prototype.onclick = function(t) {
        var e = document.activeElement;
        e && e == this.element && this.onTap(t, t)
    },
    o.prototype.enable = function() {
        this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
    },
    o.prototype.disable = function() {
        this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
    },
    o.prototype.update = function() {
        var t = this.parent.slides;
        if (this.parent.options.wrapAround && t.length > 1)
            return void this.enable();
        var e = t.length ? t.length - 1 : 0,
            i = this.isPrevious ? 0 : e;
        this[this.parent.selectedIndex == i ? "disable" : "enable"]()
    },
    o.prototype.destroy = function() {
        this.deactivate()
    },
    n.extend(e.defaults, {
        prevNextButtons: !0,
        arrowShape: {
            x0: 10,
            x1: 60,
            y1: 50,
            x2: 70,
            y2: 40,
            x3: 30
        }
    }),
    e.createMethods.push("_createPrevNextButtons");
    var a = e.prototype;
    return a._createPrevNextButtons = function() {
        this.options.prevNextButtons && (this.prevButton = new o(-1, this), this.nextButton = new o(1, this), this.on("activate", this.activatePrevNextButtons))
    }, a.activatePrevNextButtons = function() {
        this.prevButton.activate(),
        this.nextButton.activate(),
        this.on("deactivate", this.deactivatePrevNextButtons)
    }, a.deactivatePrevNextButtons = function() {
        this.prevButton.deactivate(),
        this.nextButton.deactivate(),
        this.off("deactivate", this.deactivatePrevNextButtons)
    }, e.PrevNextButton = o, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(i, n, o) {
        return e(t, i, n, o)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils)
}(window, function(t, e, i, n) {
    function o(t) {
        this.parent = t,
        this._create()
    }
    o.prototype = new i,
    o.prototype._create = function() {
        this.holder = document.createElement("ol"),
        this.holder.className = "flickity-page-dots",
        this.dots = [],
        this.on("tap", this.onTap),
        this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
    },
    o.prototype.activate = function() {
        this.setDots(),
        this.bindTap(this.holder),
        this.parent.element.appendChild(this.holder)
    },
    o.prototype.deactivate = function() {
        this.parent.element.removeChild(this.holder),
        i.prototype.destroy.call(this)
    },
    o.prototype.setDots = function() {
        var t = this.parent.slides.length - this.dots.length;
        t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t)
    },
    o.prototype.addDots = function(t) {
        for (var e = document.createDocumentFragment(), i = [], n = this.dots.length, o = n + t, r = n; r < o; r++) {
            var s = document.createElement("li");
            s.className = "dot",
            s.setAttribute("aria-label", "Page dot " + (r + 1)),
            e.appendChild(s),
            i.push(s)
        }
        this.holder.appendChild(e),
        this.dots = this.dots.concat(i)
    },
    o.prototype.removeDots = function(t) {
        this.dots.splice(this.dots.length - t, t).forEach(function(t) {
            this.holder.removeChild(t)
        }, this)
    },
    o.prototype.updateSelected = function() {
        this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")),
        this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"))
    },
    o.prototype.onTap = function(t) {
        var e = t.target;
        if ("LI" == e.nodeName) {
            this.parent.uiChange();
            var i = this.dots.indexOf(e);
            this.parent.select(i)
        }
    },
    o.prototype.destroy = function() {
        this.deactivate()
    },
    e.PageDots = o,
    n.extend(e.defaults, {
        pageDots: !0
    }),
    e.createMethods.push("_createPageDots");
    var r = e.prototype;
    return r._createPageDots = function() {
        this.options.pageDots && (this.pageDots = new o(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
    }, r.activatePageDots = function() {
        this.pageDots.activate()
    }, r.updateSelectedPageDots = function() {
        this.pageDots.updateSelected()
    }, r.updatePageDots = function() {
        this.pageDots.setDots()
    }, r.deactivatePageDots = function() {
        this.pageDots.deactivate()
    }, e.PageDots = o, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function(t, i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : e(t.EvEmitter, t.fizzyUIUtils, t.Flickity)
}(window, function(t, e, i) {
    function n(t) {
        this.parent = t,
        this.state = "stopped",
        this.onVisibilityChange = this.visibilityChange.bind(this),
        this.onVisibilityPlay = this.visibilityPlay.bind(this)
    }
    n.prototype = Object.create(t.prototype),
    n.prototype.play = function() {
        if ("playing" != this.state) {
            if (document.hidden)
                return void document.addEventListener("visibilitychange", this.onVisibilityPlay);
            this.state = "playing",
            document.addEventListener("visibilitychange", this.onVisibilityChange),
            this.tick()
        }
    },
    n.prototype.tick = function() {
        if ("playing" == this.state) {
            var t = this.parent.options.autoPlay;
            t = "number" == typeof t ? t : 3e3;
            var e = this;
            this.clear(),
            this.timeout = setTimeout(function() {
                e.parent.next(!0),
                e.tick()
            }, t)
        }
    },
    n.prototype.stop = function() {
        this.state = "stopped",
        this.clear(),
        document.removeEventListener("visibilitychange", this.onVisibilityChange)
    },
    n.prototype.clear = function() {
        clearTimeout(this.timeout)
    },
    n.prototype.pause = function() {
        "playing" == this.state && (this.state = "paused", this.clear())
    },
    n.prototype.unpause = function() {
        "paused" == this.state && this.play()
    },
    n.prototype.visibilityChange = function() {
        this[document.hidden ? "pause" : "unpause"]()
    },
    n.prototype.visibilityPlay = function() {
        this.play(),
        document.removeEventListener("visibilitychange", this.onVisibilityPlay)
    },
    e.extend(i.defaults, {
        pauseAutoPlayOnHover: !0
    }),
    i.createMethods.push("_createPlayer");
    var o = i.prototype;
    return o._createPlayer = function() {
        this.player = new n(this),
        this.on("activate", this.activatePlayer),
        this.on("uiChange", this.stopPlayer),
        this.on("pointerDown", this.stopPlayer),
        this.on("deactivate", this.deactivatePlayer)
    }, o.activatePlayer = function() {
        this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
    }, o.playPlayer = function() {
        this.player.play()
    }, o.stopPlayer = function() {
        this.player.stop()
    }, o.pausePlayer = function() {
        this.player.pause()
    }, o.unpausePlayer = function() {
        this.player.unpause()
    }, o.deactivatePlayer = function() {
        this.player.stop(),
        this.element.removeEventListener("mouseenter", this)
    }, o.onmouseenter = function() {
        this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
    }, o.onmouseleave = function() {
        this.player.unpause(),
        this.element.removeEventListener("mouseleave", this)
    }, i.Player = n, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils)
}(window, function(t, e, i) {
    function n(t) {
        var e = document.createDocumentFragment();
        return t.forEach(function(t) {
            e.appendChild(t.element)
        }), e
    }
    var o = e.prototype;
    return o.insert = function(t, e) {
        var i = this._makeCells(t);
        if (i && i.length) {
            var o = this.cells.length;
            e = void 0 === e ? o : e;
            var r = n(i),
                s = e == o;
            if (s)
                this.slider.appendChild(r);
            else {
                var a = this.cells[e].element;
                this.slider.insertBefore(r, a)
            }
            if (0 === e)
                this.cells = i.concat(this.cells);
            else if (s)
                this.cells = this.cells.concat(i);
            else {
                var l = this.cells.splice(e, o - e);
                this.cells = this.cells.concat(i).concat(l)
            }
            this._sizeCells(i),
            this.cellChange(e, !0)
        }
    }, o.append = function(t) {
        this.insert(t, this.cells.length)
    }, o.prepend = function(t) {
        this.insert(t, 0)
    }, o.remove = function(t) {
        var e = this.getCells(t);
        if (e && e.length) {
            var n = this.cells.length - 1;
            e.forEach(function(t) {
                t.remove();
                var e = this.cells.indexOf(t);
                n = Math.min(e, n),
                i.removeFrom(this.cells, t)
            }, this),
            this.cellChange(n, !0)
        }
    }, o.cellSizeChange = function(t) {
        var e = this.getCell(t);
        if (e) {
            e.getSize();
            var i = this.cells.indexOf(e);
            this.cellChange(i)
        }
    }, o.cellChange = function(t, e) {
        var i = this.selectedElement;
        this._positionCells(t),
        this._getWrapShiftCells(),
        this.setGallerySize();
        var n = this.getCell(i);
        n && (this.selectedIndex = this.getCellSlideIndex(n)),
        this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex),
        this.emitEvent("cellChange", [t]),
        this.select(this.selectedIndex),
        e && this.positionSliderAtSelected()
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils)
}(window, function(t, e, i) {
    "use strict";
    function n(t) {
        if ("IMG" == t.nodeName) {
            var e = t.getAttribute("data-flickity-lazyload"),
                n = t.getAttribute("data-flickity-lazyload-src"),
                o = t.getAttribute("data-flickity-lazyload-srcset");
            if (e || n || o)
                return [t]
        }
        var r = "img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]",
            s = t.querySelectorAll(r);
        return i.makeArray(s)
    }
    function o(t, e) {
        this.img = t,
        this.flickity = e,
        this.load()
    }
    e.createMethods.push("_createLazyload");
    var r = e.prototype;
    return r._createLazyload = function() {
        this.on("select", this.lazyLoad)
    }, r.lazyLoad = function() {
        var t = this.options.lazyLoad;
        if (t) {
            var e = "number" == typeof t ? t : 0,
                i = this.getAdjacentCellElements(e),
                r = [];
            i.forEach(function(t) {
                var e = n(t);
                r = r.concat(e)
            }),
            r.forEach(function(t) {
                new o(t, this)
            }, this)
        }
    }, o.prototype.handleEvent = i.handleEvent, o.prototype.load = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this);
        var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
            e = this.img.getAttribute("data-flickity-lazyload-srcset");
        this.img.src = t,
        e && this.img.setAttribute("srcset", e),
        this.img.removeAttribute("data-flickity-lazyload"),
        this.img.removeAttribute("data-flickity-lazyload-src"),
        this.img.removeAttribute("data-flickity-lazyload-srcset")
    }, o.prototype.onload = function(t) {
        this.complete(t, "flickity-lazyloaded")
    }, o.prototype.onerror = function(t) {
        this.complete(t, "flickity-lazyerror")
    }, o.prototype.complete = function(t, e) {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this);
        var i = this.flickity.getParentCell(this.img),
            n = i && i.element;
        this.flickity.cellSizeChange(n),
        this.img.classList.add(e),
        this.flickity.dispatchEvent("lazyLoad", t, n)
    }, e.LazyLoader = o, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e) : "object" == typeof module && module.exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
}(window, function(t) {
    return t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils)
}(window, function(t, e) {
    function i(t, e, i) {
        return (e - t) * i + t
    }
    t.createMethods.push("_createAsNavFor");
    var n = t.prototype;
    return n._createAsNavFor = function() {
        this.on("activate", this.activateAsNavFor),
        this.on("deactivate", this.deactivateAsNavFor),
        this.on("destroy", this.destroyAsNavFor);
        var t = this.options.asNavFor;
        if (t) {
            var e = this;
            setTimeout(function() {
                e.setNavCompanion(t)
            })
        }
    }, n.setNavCompanion = function(i) {
        i = e.getQueryElement(i);
        var n = t.data(i);
        if (n && n != this) {
            this.navCompanion = n;
            var o = this;
            this.onNavCompanionSelect = function() {
                o.navCompanionSelect()
            },
            n.on("select", this.onNavCompanionSelect),
            this.on("staticClick", this.onNavStaticClick),
            this.navCompanionSelect(!0)
        }
    }, n.navCompanionSelect = function(t) {
        if (this.navCompanion) {
            var e = this.navCompanion.selectedCells[0],
                n = this.navCompanion.cells.indexOf(e),
                o = n + this.navCompanion.selectedCells.length - 1,
                r = Math.floor(i(n, o, this.navCompanion.cellAlign));
            if (this.selectCell(r, !1, t), this.removeNavSelectedElements(), !(r >= this.cells.length)) {
                var s = this.cells.slice(n, o + 1);
                this.navSelectedElements = s.map(function(t) {
                    return t.element
                }),
                this.changeNavSelectedClass("add")
            }
        }
    }, n.changeNavSelectedClass = function(t) {
        this.navSelectedElements.forEach(function(e) {
            e.classList[t]("is-nav-selected")
        })
    }, n.activateAsNavFor = function() {
        this.navCompanionSelect(!0)
    }, n.removeNavSelectedElements = function() {
        this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements)
    }, n.onNavStaticClick = function(t, e, i, n) {
        "number" == typeof n && this.navCompanion.selectCell(n)
    }, n.deactivateAsNavFor = function() {
        this.removeNavSelectedElements()
    }, n.destroyAsNavFor = function() {
        this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion)
    }, t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function n(t) {
        return Array.isArray(t) ? t : "object" == typeof t && "number" == typeof t.length ? c.call(t) : [t]
    }
    function o(t, e, r) {
        if (!(this instanceof o))
            return new o(t, e, r);
        var s = t;
        return "string" == typeof t && (s = document.querySelectorAll(t)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof e ? r = e : i(this.options, e), r && this.on("always", r), this.getImages(), a && (this.jqDeferred = new a.Deferred), void setTimeout(this.check.bind(this))) : void l.error("Bad element for imagesLoaded " + (s || t))
    }
    function r(t) {
        this.img = t
    }
    function s(t, e) {
        this.url = t,
        this.element = e,
        this.img = new Image
    }
    var a = t.jQuery,
        l = t.console,
        c = Array.prototype.slice;
    o.prototype = Object.create(e.prototype),
    o.prototype.options = {},
    o.prototype.getImages = function() {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    },
    o.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t),
        !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && u[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = t.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, t),
                n = i.exec(e.backgroundImage)
            }
    }, o.prototype.addImage = function(t) {
        var e = new r(t);
        this.images.push(e)
    }, o.prototype.addBackground = function(t, e) {
        var i = new s(t, e);
        this.images.push(i)
    }, o.prototype.check = function() {
        function t(t, i, n) {
            setTimeout(function() {
                e.progress(t, i, n)
            })
        }
        var e = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) {
            e.once("progress", t),
            e.check()
        }) : void this.complete()
    }, o.prototype.progress = function(t, e, i) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded,
        this.emitEvent("progress", [this, t, e]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && l && l.log("progress: " + i, t, e)
    }, o.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }, r.prototype = Object.create(e.prototype), r.prototype.check = function() {
        return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }, r.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.img, e])
    }, r.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, r.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }, r.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }, r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url,
        this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.element, e])
    }, o.makeJQueryPlugin = function(e) {
        (e = e || t.jQuery) && (a = e, a.fn.imagesLoaded = function(t, e) {
            return new o(this, t, e).jqDeferred.promise(a(this))
        })
    }, o.makeJQueryPlugin(), o
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("flickity"), require("imagesloaded")) : t.Flickity = e(t, t.Flickity, t.imagesLoaded)
}(window, function(t, e, i) {
    "use strict";
    e.createMethods.push("_createImagesLoaded");
    var n = e.prototype;
    return n._createImagesLoaded = function() {
        this.on("activate", this.imagesLoaded)
    }, n.imagesLoaded = function() {
        function t(t, i) {
            var n = e.getParentCell(i.img);
            e.cellSizeChange(n && n.element),
            e.options.freeScroll || e.positionSliderAtSelected()
        }
        if (this.options.imagesLoaded) {
            var e = this;
            i(this.slider).on("progress", t)
        }
    }, e
}),
function(t) {
    "undefined" != typeof define && define.amd ? define([], t) : "undefined" != typeof module && module.exports ? module.exports = t() : window.scrollMonitor = t()
}(function() {
    function t() {
        if (c.viewportTop = l(), c.viewportBottom = c.viewportTop + c.viewportHeight, c.documentHeight = x(), c.documentHeight !== E) {
            for (k = u.length; k--;)
                u[k].recalculateLocation();
            E = c.documentHeight
        }
    }
    function e() {
        c.viewportHeight = w(),
        t(),
        n()
    }
    function i() {
        clearTimeout(S),
        S = setTimeout(e, 100)
    }
    function n() {
        for (T = u.length; T--;)
            u[T].update();
        for (T = u.length; T--;)
            u[T].triggerCallbacks()
    }
    function o(t, e) {
        function i(t) {
            if (0 !== t.length)
                for (w = t.length; w--;)
                    x = t[w],
                    x.callback.call(n, C),
                    x.isOne && t.splice(w, 1)
        }
        var n = this;
        this.watchItem = t,
        this.offsets = e ? e === +e ? {
            top: e,
            bottom: e
        } : {
            top: e.top || b.top,
            bottom: e.bottom || b.bottom
        } : b,
        this.callbacks = {};
        for (var o = 0, r = y.length; o < r; o++)
            n.callbacks[y[o]] = [];
        this.locked = !1;
        var s,
            a,
            l,
            u,
            w,
            x;
        this.triggerCallbacks = function t() {
            switch (this.isInViewport && !s && i(this.callbacks[d]), this.isFullyInViewport && !a && i(this.callbacks[f]), this.isAboveViewport !== l && this.isBelowViewport !== u && (i(this.callbacks[h]), a || this.isFullyInViewport || (i(this.callbacks[f]), i(this.callbacks[g])), s || this.isInViewport || (i(this.callbacks[d]), i(this.callbacks[p]))), !this.isFullyInViewport && a && i(this.callbacks[g]), !this.isInViewport && s && i(this.callbacks[p]), this.isInViewport !== s && i(this.callbacks[h]), !0) {
            case s !== this.isInViewport:
            case a !== this.isFullyInViewport:
            case l !== this.isAboveViewport:
            case u !== this.isBelowViewport:
                i(this.callbacks[v])
            }
            s = this.isInViewport,
            a = this.isFullyInViewport,
            l = this.isAboveViewport,
            u = this.isBelowViewport
        },
        this.recalculateLocation = function() {
            if (!this.locked) {
                var t = this.top,
                    e = this.bottom;
                if (this.watchItem.nodeName) {
                    var n = this.watchItem.style.display;
                    "none" === n && (this.watchItem.style.display = "");
                    var o = this.watchItem.getBoundingClientRect();
                    this.top = o.top + c.viewportTop,
                    this.bottom = o.bottom + c.viewportTop,
                    "none" === n && (this.watchItem.style.display = n)
                } else
                    this.watchItem === +this.watchItem ? this.watchItem > 0 ? this.top = this.bottom = this.watchItem : this.top = this.bottom = c.documentHeight - this.watchItem : (this.top = this.watchItem.top, this.bottom = this.watchItem.bottom);
                this.top -= this.offsets.top,
                this.bottom += this.offsets.bottom,
                this.height = this.bottom - this.top,
                void 0 === t && void 0 === e || this.top === t && this.bottom === e || i(this.callbacks[m])
            }
        },
        this.recalculateLocation(),
        this.update(),
        s = this.isInViewport,
        a = this.isFullyInViewport,
        l = this.isAboveViewport,
        u = this.isBelowViewport
    }
    function r(e) {
        C = e,
        t(),
        n()
    }
    var s = "undefined" == typeof window,
        a = !s,
        l = function() {
            return s ? 0 : window.pageYOffset || document.documentElement && document.documentElement.scrollTop || document.body.scrollTop
        },
        c = {},
        u = [],
        h = "visibilityChange",
        d = "enterViewport",
        f = "fullyEnterViewport",
        p = "exitViewport",
        g = "partiallyExitViewport",
        m = "locationChange",
        v = "stateChange",
        y = [h, d, f, p, g, m, v],
        b = {
            top: 0,
            bottom: 0
        },
        w = function() {
            return s ? 0 : window.innerHeight || document.documentElement.clientHeight
        },
        x = function() {
            return s ? 0 : Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight)
        };
    c.viewportTop = null,
    c.viewportBottom = null,
    c.documentHeight = null,
    c.viewportHeight = w();
    var E,
        C,
        k,
        S,
        T;
    o.prototype = {
        on: function(t, e, i) {
            switch (!0) {
            case t === h && !this.isInViewport && this.isAboveViewport:
            case t === d && this.isInViewport:
            case t === f && this.isFullyInViewport:
            case t === p && this.isAboveViewport && !this.isInViewport:
            case t === g && this.isAboveViewport:
                if (e.call(this, C), i)
                    return
            }
            if (!this.callbacks[t])
                throw new Error("Tried to add a scroll monitor listener of type " + t + ". Your options are: " + y.join(", "));
            this.callbacks[t].push({
                callback: e,
                isOne: i || !1
            })
        },
        off: function(t, e) {
            if (!this.callbacks[t])
                throw new Error("Tried to remove a scroll monitor listener of type " + t + ". Your options are: " + y.join(", "));
            for (var i = 0, n; n = this.callbacks[t][i]; i++)
                if (n.callback === e) {
                    this.callbacks[t].splice(i, 1);
                    break
                }
        },
        one: function(t, e) {
            this.on(t, e, !0)
        },
        recalculateSize: function() {
            this.height = this.watchItem.offsetHeight + this.offsets.top + this.offsets.bottom,
            this.bottom = this.top + this.height
        },
        update: function() {
            this.isAboveViewport = this.top < c.viewportTop,
            this.isBelowViewport = this.bottom > c.viewportBottom,
            this.isInViewport = this.top <= c.viewportBottom && this.bottom >= c.viewportTop,
            this.isFullyInViewport = this.top >= c.viewportTop && this.bottom <= c.viewportBottom || this.isAboveViewport && this.isBelowViewport
        },
        destroy: function() {
            var t = u.indexOf(this),
                e = this;
            u.splice(t, 1);
            for (var i = 0, n = y.length; i < n; i++)
                e.callbacks[y[i]].length = 0
        },
        lock: function() {
            this.locked = !0
        },
        unlock: function() {
            this.locked = !1
        }
    };
    for (var _ = function(t) {
            return function(e, i) {
                this.on.call(this, t, e, i)
            }
        }, D = 0, L = y.length; D < L; D++) {
        var I = y[D];
        o.prototype[I] = _(I)
    }
    if (a)
        try {
            t()
        } catch (e) {
            try {
                window.$(t)
            } catch (t) {
                throw new Error("If you must put scrollMonitor in the <head>, you must use jQuery.")
            }
        }
    return a && (window.addEventListener ? (window.addEventListener("scroll", r), window.addEventListener("resize", i)) : (window.attachEvent("onscroll", r), window.attachEvent("onresize", i))), c.beget = c.create = function(t, e) {
        "string" == typeof t ? t = document.querySelector(t) : t && t.length > 0 && (t = t[0]);
        var i = new o(t, e);
        return u.push(i), i.update(), i
    }, c.update = function() {
        C = null,
        t(),
        n()
    }, c.recalculateLocations = function() {
        c.documentHeight = 0,
        c.update()
    }, c
});
var Konami = function(t) {
        var e = {
            addEvent: function(t, e, i, n) {
                t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent && (t["e" + e + i] = i, t[e + i] = function() {
                    t["e" + e + i](window.event, n)
                }, t.attachEvent("on" + e, t[e + i]))
            },
            input: "",
            pattern: "38384040373937396665",
            load: function(t) {
                this.addEvent(document, "keydown", function(i, n) {
                    if (n && (e = n), e.input += i ? i.keyCode : event.keyCode, e.input.length > e.pattern.length && (e.input = e.input.substr(e.input.length - e.pattern.length)), e.input == e.pattern)
                        return e.code(t), e.input = "", i.preventDefault(), !1
                }, this),
                this.iphone.load(t)
            },
            code: function(t) {
                window.location = t
            },
            iphone: {
                start_x: 0,
                start_y: 0,
                stop_x: 0,
                stop_y: 0,
                tap: !1,
                capture: !1,
                orig_keys: "",
                keys: ["UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT", "RIGHT", "TAP", "TAP"],
                code: function(t) {
                    e.code(t)
                },
                load: function(t) {
                    this.orig_keys = this.keys,
                    e.addEvent(document, "touchmove", function(t) {
                        if (1 == t.touches.length && 1 == e.iphone.capture) {
                            var i = t.touches[0];
                            e.iphone.stop_x = i.pageX,
                            e.iphone.stop_y = i.pageY,
                            e.iphone.tap = !1,
                            e.iphone.capture = !1,
                            e.iphone.check_direction()
                        }
                    }),
                    e.addEvent(document, "touchend", function(i) {
                        1 == e.iphone.tap && e.iphone.check_direction(t)
                    }, !1),
                    e.addEvent(document, "touchstart", function(t) {
                        e.iphone.start_x = t.changedTouches[0].pageX,
                        e.iphone.start_y = t.changedTouches[0].pageY,
                        e.iphone.tap = !0,
                        e.iphone.capture = !0
                    })
                },
                check_direction: function(t) {
                    x_magnitude = Math.abs(this.start_x - this.stop_x),
                    y_magnitude = Math.abs(this.start_y - this.stop_y),
                    x = this.start_x - this.stop_x < 0 ? "RIGHT" : "LEFT",
                    y = this.start_y - this.stop_y < 0 ? "DOWN" : "UP",
                    result = x_magnitude > y_magnitude ? x : y,
                    result = 1 == this.tap ? "TAP" : result,
                    result == this.keys[0] && (this.keys = this.keys.slice(1, this.keys.length)),
                    0 == this.keys.length && (this.keys = this.orig_keys, this.code(t))
                }
            }
        }
        ;
        return "string" == typeof t && e.load(t), "function" == typeof t && (e.code = t, e.load()), e
    },
    last_scroll_top = 0,
    scroll_watchers = [];
window.site_url = $("body").attr("data-site-url"),
window.tablet = $("body").attr("data-tablet"),
window.desktop = $("body").attr("data-desktop"),
window.desktop_large = $("body").attr("data-desktop-large"),
window.cinema = $("body").attr("data-cinema"),
window.scrollbar = 15,
window.elements_to_show = 3;
var pause_before_preloaders_fade = 600,
    sayHello = function() {
        console.log(window.site_url),
        console.log("Hello! 👋")
    },
    externalLinksNewWindow = function() {
        $("a").each(function() {
            -1 === this.href.indexOf("futurefabric.co") && -1 === this.href.indexOf("shop:9292/") && $(this).attr("target", "_blank")
        })
    },
    consoleLog = function(t) {
        "https://www.futurefabric.co/" !== window.site_url && "https://shop.futurefabric.co/" !== window.site_url && console.log(t)
    },
    removeWidows = function() {
        0 !== $(".no-widow").length && $(".no-widow").each(function() {
            var t = $(this).html();
            t = t.replace(/ ([^ ]*)$/, "&nbsp;$1"),
            $(this).html(t)
        })
    },
    showMainAndFooter = function() {
        $(".main").addClass("show"),
        $(".footer").addClass("show")
    },
    getRandomInRange = function(t, e) {
        return Math.random() * (e - t) + t
    },
    easterEgg = function() {
        $("body").scrollTop(1),
        $("body *").addClass("in-a-spin"),
        $("body *").bind("oanimationend animationend webkitAnimationEnd", function() {
            $("body *").removeClass("in-a-spin")
        })
    },
    setUpKonamiCode = function() {
        new Konami(function() {
            easterEgg()
        })
    },
    makeVideosResponsive = function() {
        consoleLog("makeVideosResponsive"),
        $(".videos .video-block").length > 0 && $(".videos .video-block").fitVids()
    },
    doPhotoPackery = function() {
        0 !== $(".photos-packery-container").length && $(".photos-packery-container").imagesLoaded(function() {
            $(".photos-packery-container").packery({
                itemSelector: ".photo-container",
                transitionDuration: "0.3s"
            })
        })
    },
    preloadPlayThumbnails = function() {
        consoleLog("playThumbnailsPreloading"),
        $(".play-projects").imagesLoaded({
            background: ".play-project-container .inner"
        }).progress(function(t, e) {
            var i = $(e.element);
            consoleLog(i),
            i.find(".loader").delay(pause_before_preloaders_fade).queue(function() {
                var t = $(this);
                t.parent().attr("data-image-loaded", "true");
                var e = 400 + 160 * getRandomInRange(1, 8);
                setTimeout(function() {
                    t.addClass("fade-out")
                }, e)
            })
        })
    },
    preloadShopThumbnails = function() {
        consoleLog("shopThumbnailsPreloading"),
        $(".shop-products").imagesLoaded({
            background: ".shop-product-container .shop-product .inner"
        }).progress(function(t, e) {
            $(e.element).find(".loader").delay(pause_before_preloaders_fade).queue(function() {
                var t = $(this);
                if (t.parent().attr("data-image-loaded", "true"), t.parent().attr("data-index") <= window.elements_to_show) {
                    var e = 1e3;
                    setTimeout(function() {
                        t.addClass("fade-out")
                    }, 1e3)
                }
            })
        })
    },
    toggleHeaderPosition = function() {
        $(window).scrollTop() > 50 && ("up" === window.scrollbar_direction && $(".header").removeClass("is-hidden"), "down" === window.scrollbar_direction && $(".header").addClass("is-hidden"))
    },
    hideLoaderIfShowing = function(t) {
        if (!t.find(".loader").hasClass("fade-out") && "true" === t.find(".project").attr("data-image-loaded")) {
            var e = 1e3;
            setTimeout(function() {
                t.find(".loader").addClass("fade-out")
            }, 1e3)
        }
    },
    removeTrailingZeroes = function(t) {
        var e = t.indexOf(".00");
        return t = t.substring(0, -1 !== e ? e : t.length)
    },
    hideProductAboutCopyIfEmpty = function() {
        0 === $(".further-details-repositioned").find(".further-notes").length && $(".further-details-repositioned").hide()
    },
    getScrollDirection = function() {
        var t = $(window).scrollTop();
        window.scrollbar_direction = t > last_scroll_top ? "down" : "up",
        consoleLog(t),
        last_scroll_top = t
    },
    createScrollWatchBehaviour = function(t, e) {
        scroll_watchers[t].enterViewport(function() {
            "up" === window.scrollbar_direction && (e.addClass("show"), e.removeClass("from-bottom"), hideLoaderIfShowing(e)),
            "down" === window.scrollbar_direction && (e.addClass("show"), hideLoaderIfShowing(e))
        }),
        scroll_watchers[t].exitViewport(function() {
            "up" === window.scrollbar_direction && e.removeClass("show"),
            "down" === window.scrollbar_direction && (e.removeClass("show"), e.addClass("from-bottom"))
        })
    },
    setUpScrollContainers = function() {};
0 !== $(".scroll-container").length && $(".scroll-container").each(function(t) {
    scroll_watchers[t] = scrollMonitor.create($(this), 0);
    var e = $(this);
    createScrollWatchBehaviour(t, e);
    var i = 1;
    if ($(window).width() >= window.desktop - window.scrollbar && (i = 2), $(window).width() >= window.cinema - window.scrollbar && (i = 3), consoleLog($(this).attr("data-index") + " " + window.elements_to_show), $(this).attr("data-index") <= i) {
        var n = 1e3 + 350 * (t + 1);
        setTimeout(function() {
            e.addClass("show")
        }, n)
    }
});
var createFlickityCarousel = function() {
        0 !== $(".image-carousel").length && $(".image-carousel").flickity({
            cellAlign: "left",
            prevNextButtons: !1,
            imagesLoaded: !0
        })
    },
    destroyFlickityCarousel = function() {
        0 !== $(".image-carousel").length && $(".image-carousel").flickity("destroy")
    },
    toggleShopDetailStickiness = function() {
        if (0 !== $(".product-images").length && $(window).width() >= window.desktop) {
            var t = $(".product-images").offset(),
                e = $(".product-images").height(),
                i = $(".product-details").height(),
                n = t.top,
                o = n + e,
                r = o - i - 220;
            $(window).scrollTop() > r && ($(".product-details-container").removeClass("fixed"), $(".product-details-container").css({
                top: 140 + r
            })),
            $(window).scrollTop() < r && ($(".product-details-container").addClass("fixed"), $(".product-details-container").css("top", ""))
        }
    },
    storePricesInVariantsDataAttributes = function() {
        -1 !== $(".variant-selection option").length && $(".variant-selection option").each(function(t) {
            var e = this.text,
                i = this.text,
                n = e.indexOf(" ("),
                o = i.indexOf("£");
            e = e.substring(0, -1 !== n ? n : e.length),
            i = i.substring(o, i.length - 1),
            i = removeTrailingZeroes(i),
            $(this).attr("data-option-price", i)
        })
    },
    getProductName = function() {
        return $(".product-name").text()
    },
    getProductPrice = function() {
        return $(".product-price").text()
    },
    getProductVariant = function() {
        return $("#option option:selected").text()
    },
    getBasketValue = function() {
        return $("#basket-value").text()
    };
$(".nav-toggle").click(function() {
    $(".primary-nav").toggleClass("show"),
    $(".hamburger").toggleClass("is-active"),
    consoleLog("clicked")
}),
$(".accordion-opener").click(function(t) {
    $(window).width() < window.desktop && (t.preventDefault(), $(this).closest(".accordion").toggleClass("open"))
}),
$("#option").change(function() {
    var t = $("#option option:selected").attr("data-option-price");
    $(".product-price").text(t)
}),
$("#event-add-to-basket").click(function() {
    var t = "Add to basket";
    mixpanel.track(t, {
        Product: getProductName(),
        Price: getProductPrice(),
        Variant: getProductVariant()
    }),
    consoleLog(t)
}),
$("#event-checkout").click(function() {
    var t = "Checkout";
    mixpanel.track("Checkout", {
        "Basket Value": getBasketValue()
    }),
    consoleLog("Checkout")
}),
$(".remove-item").click(function(t) {
    t.preventDefault();
    var e = $(this).attr("data-item-id");
    consoleLog(e);
    var i = $(".cart-items .item-row").length;
    consoleLog("product rows: " + i),
    Cart.refresh(function(t) {
        1 === i && $(".cart").fadeOut(500, function() {
            Cart.removeItem(e, function(t) {
                consoleLog(t.item_count),
                location.reload()
            })
        }),
        i > 1 && $("#" + e).fadeOut(500, function() {
            $(this).remove(),
            Cart.removeItem(e, function(t) {
                location.reload()
            })
        })
    })
}),
$(".quantity-input .item-quantity").keypress(function(t) {
    if (13 === t.which) {
        t.preventDefault();
        var e = $(this).parent().parent().attr("data-item-id"),
            i = $(this).val();
        i > 99 && (i = 99),
        Cart.updateItem(e, i, function(t) {
            location.reload()
        })
    }
}),
$("a.update_total").click(function(t) {
    t.preventDefault(),
    location.reload()
});
var init = function() {
    sayHello(),
    externalLinksNewWindow(),
    setUpKonamiCode(),
    makeVideosResponsive(),
    doPhotoPackery(),
    preloadPlayThumbnails(),
    preloadShopThumbnails(),
    hideProductAboutCopyIfEmpty(),
    showMainAndFooter(),
    removeWidows(),
    storePricesInVariantsDataAttributes(),
    setUpScrollContainers(),
    $(window).width() <= window.tablet && (window.elements_to_show = 1),
    $(window).width() > window.tablet && (window.elements_to_show = 2),
    $(window).width() >= window.cinema && (window.elements_to_show = 3),
    $(window).width() < window.desktop && createFlickityCarousel()
};
$(document).ready(function() {
    init()
}),
$(window).resize(function() {
    window.elements_to_show = 1,
    $(window).width() >= window.tablet - window.scrollbar && (window.elements_to_show = 2),
    $(window).width() >= window.cinema - window.scrollbar && (window.elements_to_show = 3),
    $(window).width() < window.tablet && createFlickityCarousel(),
    $(window).width() < window.desktop && createFlickityCarousel(),
    $(window).width() > window.desktop && $(".image-carousel").flickity() && destroyFlickityCarousel()
}),
$(window).resize(),
$(document).on("scroll", function() {
    getScrollDirection(),
    toggleHeaderPosition(),
    toggleShopDetailStickiness()
});
