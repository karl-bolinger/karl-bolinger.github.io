!(function (t, e) {
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = t.document
              ? e(t, !0)
              : function (t) {
                    if (!t.document) throw new Error("jQuery requires a window with a document");
                    return e(t);
                })
        : e(t);
})("undefined" != typeof window ? window : this, function (t, e) {
    function i(t) {
        var e = !!t && "length" in t && t.length,
            i = pt.type(t);
        return "function" !== i && !pt.isWindow(t) && ("array" === i || 0 === e || ("number" == typeof e && e > 0 && e - 1 in t));
    }
    function n(t, e, i) {
        if (pt.isFunction(e))
            return pt.grep(t, function (t, n) {
                return !!e.call(t, n, t) !== i;
            });
        if (e.nodeType)
            return pt.grep(t, function (t) {
                return (t === e) !== i;
            });
        if ("string" == typeof e) {
            if (Ct.test(e)) return pt.filter(e, t, i);
            e = pt.filter(e, t);
        }
        return pt.grep(t, function (t) {
            return pt.inArray(t, e) > -1 !== i;
        });
    }
    function o(t, e) {
        do {
            t = t[e];
        } while (t && 1 !== t.nodeType);
        return t;
    }
    function r(t) {
        var e = {};
        return (
            pt.each(t.match(Lt) || [], function (t, i) {
                e[i] = !0;
            }),
            e
        );
    }
    function s() {
        ot.addEventListener ? (ot.removeEventListener("DOMContentLoaded", a), t.removeEventListener("load", a)) : (ot.detachEvent("onreadystatechange", a), t.detachEvent("onload", a));
    }
    function a() {
        (ot.addEventListener || "load" === t.event.type || "complete" === ot.readyState) && (s(), pt.ready());
    }
    function l(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace(Nt, "-$1").toLowerCase();
            if ("string" == typeof (i = t.getAttribute(n))) {
                try {
                    i = "true" === i || ("false" !== i && ("null" === i ? null : +i + "" === i ? +i : zt.test(i) ? pt.parseJSON(i) : i));
                } catch (t) {}
                pt.data(t, e, i);
            } else i = void 0;
        }
        return i;
    }
    function c(t) {
        var e;
        for (e in t) if (("data" !== e || !pt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0;
    }
    function u(t, e, i, n) {
        if (At(t)) {
            var o,
                r,
                s = pt.expando,
                a = t.nodeType,
                l = a ? pt.cache : t,
                c = a ? t[s] : t[s] && s;
            if ((c && l[c] && (n || l[c].data)) || void 0 !== i || "string" != typeof e)
                return (
                    c || (c = a ? (t[s] = nt.pop() || pt.guid++) : s),
                    l[c] || (l[c] = a ? {} : { toJSON: pt.noop }),
                    ("object" != typeof e && "function" != typeof e) || (n ? (l[c] = pt.extend(l[c], e)) : (l[c].data = pt.extend(l[c].data, e))),
                    (r = l[c]),
                    n || (r.data || (r.data = {}), (r = r.data)),
                    void 0 !== i && (r[pt.camelCase(e)] = i),
                    "string" == typeof e ? null == (o = r[e]) && (o = r[pt.camelCase(e)]) : (o = r),
                    o
                );
        }
    }
    function h(t, e, i) {
        if (At(t)) {
            var n,
                o,
                r = t.nodeType,
                s = r ? pt.cache : t,
                a = r ? t[pt.expando] : pt.expando;
            if (s[a]) {
                if (e && (n = i ? s[a] : s[a].data)) {
                    pt.isArray(e) ? (e = e.concat(pt.map(e, pt.camelCase))) : e in n ? (e = [e]) : ((e = pt.camelCase(e)), (e = e in n ? [e] : e.split(" "))), (o = e.length);
                    for (; o--; ) delete n[e[o]];
                    if (i ? !c(n) : !pt.isEmptyObject(n)) return;
                }
                (i || (delete s[a].data, c(s[a]))) && (r ? pt.cleanData([t], !0) : dt.deleteExpando || s != s.window ? delete s[a] : (s[a] = void 0));
            }
        }
    }
    function d(t, e, i, n) {
        var o,
            r = 1,
            s = 20,
            a = n
                ? function () {
                      return n.cur();
                  }
                : function () {
                      return pt.css(t, e, "");
                  },
            l = a(),
            c = (i && i[3]) || (pt.cssNumber[e] ? "" : "px"),
            u = (pt.cssNumber[e] || ("px" !== c && +l)) && Mt.exec(pt.css(t, e));
        if (u && u[3] !== c) {
            (c = c || u[3]), (i = i || []), (u = +l || 1);
            do {
                (r = r || ".5"), (u /= r), pt.style(t, e, u + c);
            } while (r !== (r = a() / l) && 1 !== r && --s);
        }
        return i && ((u = +u || +l || 0), (o = i[1] ? u + (i[1] + 1) * i[2] : +i[2]), n && ((n.unit = c), (n.start = u), (n.end = o))), o;
    }
    function f(t) {
        var e = Wt.split("|"),
            i = t.createDocumentFragment();
        if (i.createElement) for (; e.length; ) i.createElement(e.pop());
        return i;
    }
    function p(t, e) {
        var i,
            n,
            o = 0,
            r = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
        if (!r) for (r = [], i = t.childNodes || t; null != (n = i[o]); o++) !e || pt.nodeName(n, e) ? r.push(n) : pt.merge(r, p(n, e));
        return void 0 === e || (e && pt.nodeName(t, e)) ? pt.merge([t], r) : r;
    }
    function g(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++) pt._data(i, "globalEval", !e || pt._data(e[n], "globalEval"));
    }
    function m(t) {
        Ft.test(t.type) && (t.defaultChecked = t.checked);
    }
    function v(t, e, i, n, o) {
        for (var r, s, a, l, c, u, h, d = t.length, v = f(e), y = [], b = 0; b < d; b++)
            if ((s = t[b]) || 0 === s)
                if ("object" === pt.type(s)) pt.merge(y, s.nodeType ? [s] : s);
                else if (Vt.test(s)) {
                    for (l = l || v.appendChild(e.createElement("div")), c = (Bt.exec(s) || ["", ""])[1].toLowerCase(), h = Ut[c] || Ut._default, l.innerHTML = h[1] + pt.htmlPrefilter(s) + h[2], r = h[0]; r--; ) l = l.lastChild;
                    if ((!dt.leadingWhitespace && $t.test(s) && y.push(e.createTextNode($t.exec(s)[0])), !dt.tbody))
                        for (s = "table" !== c || Xt.test(s) ? ("<table>" !== h[1] || Xt.test(s) ? 0 : l) : l.firstChild, r = s && s.childNodes.length; r--; )
                            pt.nodeName((u = s.childNodes[r]), "tbody") && !u.childNodes.length && s.removeChild(u);
                    for (pt.merge(y, l.childNodes), l.textContent = ""; l.firstChild; ) l.removeChild(l.firstChild);
                    l = v.lastChild;
                } else y.push(e.createTextNode(s));
        for (l && v.removeChild(l), dt.appendChecked || pt.grep(p(y, "input"), m), b = 0; (s = y[b++]); )
            if (n && pt.inArray(s, n) > -1) o && o.push(s);
            else if (((a = pt.contains(s.ownerDocument, s)), (l = p(v.appendChild(s), "script")), a && g(l), i)) for (r = 0; (s = l[r++]); ) Rt.test(s.type || "") && i.push(s);
        return (l = null), v;
    }
    function y() {
        return !0;
    }
    function b() {
        return !1;
    }
    function w() {
        try {
            return ot.activeElement;
        } catch (t) {}
    }
    function x(t, e, i, n, o, r) {
        var s, a;
        if ("object" == typeof e) {
            "string" != typeof i && ((n = n || i), (i = void 0));
            for (a in e) x(t, a, i, n, e[a], r);
            return t;
        }
        if ((null == n && null == o ? ((o = i), (n = i = void 0)) : null == o && ("string" == typeof i ? ((o = n), (n = void 0)) : ((o = n), (n = i), (i = void 0))), !1 === o)) o = b;
        else if (!o) return t;
        return (
            1 === r &&
                ((s = o),
                (o = function (t) {
                    return pt().off(t), s.apply(this, arguments);
                }),
                (o.guid = s.guid || (s.guid = pt.guid++))),
            t.each(function () {
                pt.event.add(this, e, o, n, i);
            })
        );
    }
    function E(t, e) {
        return pt.nodeName(t, "table") && pt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t;
    }
    function k(t) {
        return (t.type = (null !== pt.find.attr(t, "type")) + "/" + t.type), t;
    }
    function C(t) {
        var e = oe.exec(t.type);
        return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
    }
    function S(t, e) {
        if (1 === e.nodeType && pt.hasData(t)) {
            var i,
                n,
                o,
                r = pt._data(t),
                s = pt._data(e, r),
                a = r.events;
            if (a) {
                delete s.handle, (s.events = {});
                for (i in a) for (n = 0, o = a[i].length; n < o; n++) pt.event.add(e, i, a[i][n]);
            }
            s.data && (s.data = pt.extend({}, s.data));
        }
    }
    function T(t, e) {
        var i, n, o;
        if (1 === e.nodeType) {
            if (((i = e.nodeName.toLowerCase()), !dt.noCloneEvent && e[pt.expando])) {
                o = pt._data(e);
                for (n in o.events) pt.removeEvent(e, n, o.handle);
                e.removeAttribute(pt.expando);
            }
            "script" === i && e.text !== t.text
                ? ((k(e).text = t.text), C(e))
                : "object" === i
                ? (e.parentNode && (e.outerHTML = t.outerHTML), dt.html5Clone && t.innerHTML && !pt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML))
                : "input" === i && Ft.test(t.type)
                ? ((e.defaultChecked = e.checked = t.checked), e.value !== t.value && (e.value = t.value))
                : "option" === i
                ? (e.defaultSelected = e.selected = t.defaultSelected)
                : ("input" !== i && "textarea" !== i) || (e.defaultValue = t.defaultValue);
        }
    }
    function _(t, e, i, n) {
        e = st.apply([], e);
        var o,
            r,
            s,
            a,
            l,
            c,
            u = 0,
            h = t.length,
            d = h - 1,
            f = e[0],
            g = pt.isFunction(f);
        if (g || (h > 1 && "string" == typeof f && !dt.checkClone && ne.test(f)))
            return t.each(function (o) {
                var r = t.eq(o);
                g && (e[0] = f.call(this, o, r.html())), _(r, e, i, n);
            });
        if (h && ((c = v(e, t[0].ownerDocument, !1, t, n)), (o = c.firstChild), 1 === c.childNodes.length && (c = o), o || n)) {
            for (a = pt.map(p(c, "script"), k), s = a.length; u < h; u++) (r = c), u !== d && ((r = pt.clone(r, !0, !0)), s && pt.merge(a, p(r, "script"))), i.call(t[u], r, u);
            if (s)
                for (l = a[a.length - 1].ownerDocument, pt.map(a, C), u = 0; u < s; u++)
                    (r = a[u]), Rt.test(r.type || "") && !pt._data(r, "globalEval") && pt.contains(l, r) && (r.src ? pt._evalUrl && pt._evalUrl(r.src) : pt.globalEval((r.text || r.textContent || r.innerHTML || "").replace(re, "")));
            c = o = null;
        }
        return t;
    }
    function D(t, e, i) {
        for (var n, o = e ? pt.filter(e, t) : t, r = 0; null != (n = o[r]); r++) i || 1 !== n.nodeType || pt.cleanData(p(n)), n.parentNode && (i && pt.contains(n.ownerDocument, n) && g(p(n, "script")), n.parentNode.removeChild(n));
        return t;
    }
    function L(t, e) {
        var i = pt(e.createElement(t)).appendTo(e.body),
            n = pt.css(i[0], "display");
        return i.detach(), n;
    }
    function I(t) {
        var e = ot,
            i = ce[t];
        return (
            i ||
                ((i = L(t, e)),
                ("none" !== i && i) ||
                    ((le = (le || pt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement)), (e = (le[0].contentWindow || le[0].contentDocument).document), e.write(), e.close(), (i = L(t, e)), le.detach()),
                (ce[t] = i)),
            i
        );
    }
    function P(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments);
            },
        };
    }
    function A(t) {
        if (t in Ce) return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), i = ke.length; i--; ) if ((t = ke[i] + e) in Ce) return t;
    }
    function z(t, e) {
        for (var i, n, o, r = [], s = 0, a = t.length; s < a; s++)
            (n = t[s]),
                n.style &&
                    ((r[s] = pt._data(n, "olddisplay")),
                    (i = n.style.display),
                    e
                        ? (r[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && Ot(n) && (r[s] = pt._data(n, "olddisplay", I(n.nodeName))))
                        : ((o = Ot(n)), ((i && "none" !== i) || !o) && pt._data(n, "olddisplay", o ? i : pt.css(n, "display"))));
        for (s = 0; s < a; s++) (n = t[s]), n.style && ((e && "none" !== n.style.display && "" !== n.style.display) || (n.style.display = e ? r[s] || "" : "none"));
        return t;
    }
    function N(t, e, i) {
        var n = we.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e;
    }
    function j(t, e, i, n, o) {
        for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; r < 4; r += 2)
            "margin" === i && (s += pt.css(t, i + qt[r], !0, o)),
                n
                    ? ("content" === i && (s -= pt.css(t, "padding" + qt[r], !0, o)), "margin" !== i && (s -= pt.css(t, "border" + qt[r] + "Width", !0, o)))
                    : ((s += pt.css(t, "padding" + qt[r], !0, o)), "padding" !== i && (s += pt.css(t, "border" + qt[r] + "Width", !0, o)));
        return s;
    }
    function M(e, i, n) {
        var o = !0,
            r = "width" === i ? e.offsetWidth : e.offsetHeight,
            s = pe(e),
            a = dt.boxSizing && "border-box" === pt.css(e, "boxSizing", !1, s);
        if ((ot.msFullscreenElement && t.top !== t && e.getClientRects().length && (r = Math.round(100 * e.getBoundingClientRect()[i])), r <= 0 || null == r)) {
            if (((r = ge(e, i, s)), (r < 0 || null == r) && (r = e.style[i]), he.test(r))) return r;
            (o = a && (dt.boxSizingReliable() || r === e.style[i])), (r = parseFloat(r) || 0);
        }
        return r + j(e, i, n || (a ? "border" : "content"), o, s) + "px";
    }
    function q(t, e, i, n, o) {
        return new q.prototype.init(t, e, i, n, o);
    }
    function O() {
        return (
            t.setTimeout(function () {
                Se = void 0;
            }),
            (Se = pt.now())
        );
    }
    function H(t, e) {
        var i,
            n = { height: t },
            o = 0;
        for (e = e ? 1 : 0; o < 4; o += 2 - e) (i = qt[o]), (n["margin" + i] = n["padding" + i] = t);
        return e && (n.opacity = n.width = t), n;
    }
    function F(t, e, i) {
        for (var n, o = (W.tweeners[e] || []).concat(W.tweeners["*"]), r = 0, s = o.length; r < s; r++) if ((n = o[r].call(i, e, t))) return n;
    }
    function B(t, e, i) {
        var n,
            o,
            r,
            s,
            a,
            l,
            c,
            u,
            h = this,
            d = {},
            f = t.style,
            p = t.nodeType && Ot(t),
            g = pt._data(t, "fxshow");
        i.queue ||
            ((a = pt._queueHooks(t, "fx")),
            null == a.unqueued &&
                ((a.unqueued = 0),
                (l = a.empty.fire),
                (a.empty.fire = function () {
                    a.unqueued || l();
                })),
            a.unqueued++,
            h.always(function () {
                h.always(function () {
                    a.unqueued--, pt.queue(t, "fx").length || a.empty.fire();
                });
            })),
            1 === t.nodeType &&
                ("height" in e || "width" in e) &&
                ((i.overflow = [f.overflow, f.overflowX, f.overflowY]),
                (c = pt.css(t, "display")),
                "inline" === (u = "none" === c ? pt._data(t, "olddisplay") || I(t.nodeName) : c) && "none" === pt.css(t, "float") && (dt.inlineBlockNeedsLayout && "inline" !== I(t.nodeName) ? (f.zoom = 1) : (f.display = "inline-block"))),
            i.overflow &&
                ((f.overflow = "hidden"),
                dt.shrinkWrapBlocks() ||
                    h.always(function () {
                        (f.overflow = i.overflow[0]), (f.overflowX = i.overflow[1]), (f.overflowY = i.overflow[2]);
                    }));
        for (n in e)
            if (((o = e[n]), _e.exec(o))) {
                if ((delete e[n], (r = r || "toggle" === o), o === (p ? "hide" : "show"))) {
                    if ("show" !== o || !g || void 0 === g[n]) continue;
                    p = !0;
                }
                d[n] = (g && g[n]) || pt.style(t, n);
            } else c = void 0;
        if (pt.isEmptyObject(d)) "inline" === ("none" === c ? I(t.nodeName) : c) && (f.display = c);
        else {
            g ? "hidden" in g && (p = g.hidden) : (g = pt._data(t, "fxshow", {})),
                r && (g.hidden = !p),
                p
                    ? pt(t).show()
                    : h.done(function () {
                          pt(t).hide();
                      }),
                h.done(function () {
                    var e;
                    pt._removeData(t, "fxshow");
                    for (e in d) pt.style(t, e, d[e]);
                });
            for (n in d) (s = F(p ? g[n] : 0, n, h)), n in g || ((g[n] = s.start), p && ((s.end = s.start), (s.start = "width" === n || "height" === n ? 1 : 0)));
        }
    }
    function R(t, e) {
        var i, n, o, r, s;
        for (i in t)
            if (((n = pt.camelCase(i)), (o = e[n]), (r = t[i]), pt.isArray(r) && ((o = r[1]), (r = t[i] = r[0])), i !== n && ((t[n] = r), delete t[i]), (s = pt.cssHooks[n]) && "expand" in s)) {
                (r = s.expand(r)), delete t[n];
                for (i in r) i in t || ((t[i] = r[i]), (e[i] = o));
            } else e[n] = o;
    }
    function W(t, e, i) {
        var n,
            o,
            r = 0,
            s = W.prefilters.length,
            a = pt.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (o) return !1;
                for (var e = Se || O(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, r = 1 - n, s = 0, l = c.tweens.length; s < l; s++) c.tweens[s].run(r);
                return a.notifyWith(t, [c, r, i]), r < 1 && l ? i : (a.resolveWith(t, [c]), !1);
            },
            c = a.promise({
                elem: t,
                props: pt.extend({}, e),
                opts: pt.extend(!0, { specialEasing: {}, easing: pt.easing._default }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: Se || O(),
                duration: i.duration,
                tweens: [],
                createTween: function (e, i) {
                    var n = pt.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n;
                },
                stop: function (e) {
                    var i = 0,
                        n = e ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i < n; i++) c.tweens[i].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this;
                },
            }),
            u = c.props;
        for (R(u, c.opts.specialEasing); r < s; r++) if ((n = W.prefilters[r].call(c, t, u, c.opts))) return pt.isFunction(n.stop) && (pt._queueHooks(c.elem, c.opts.queue).stop = pt.proxy(n.stop, n)), n;
        return (
            pt.map(u, F, c),
            pt.isFunction(c.opts.start) && c.opts.start.call(t, c),
            pt.fx.timer(pt.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        );
    }
    function U(t) {
        return pt.attr(t, "class") || "";
    }
    function V(t) {
        return function (e, i) {
            "string" != typeof e && ((i = e), (e = "*"));
            var n,
                o = 0,
                r = e.toLowerCase().match(Lt) || [];
            if (pt.isFunction(i)) for (; (n = r[o++]); ) "+" === n.charAt(0) ? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i);
        };
    }
    function X(t, e, i, n) {
        function o(a) {
            var l;
            return (
                (r[a] = !0),
                pt.each(t[a] || [], function (t, a) {
                    var c = a(e, i, n);
                    return "string" != typeof c || s || r[c] ? (s ? !(l = c) : void 0) : (e.dataTypes.unshift(c), o(c), !1);
                }),
                l
            );
        }
        var r = {},
            s = t === Je;
        return o(e.dataTypes[0]) || (!r["*"] && o("*"));
    }
    function Q(t, e) {
        var i,
            n,
            o = pt.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
        return i && pt.extend(!0, t, i), t;
    }
    function G(t, e, i) {
        for (var n, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0]; ) l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
        if (o)
            for (s in a)
                if (a[s] && a[s].test(o)) {
                    l.unshift(s);
                    break;
                }
        if (l[0] in i) r = l[0];
        else {
            for (s in i) {
                if (!l[0] || t.converters[s + " " + l[0]]) {
                    r = s;
                    break;
                }
                n || (n = s);
            }
            r = r || n;
        }
        if (r) return r !== l[0] && l.unshift(r), i[r];
    }
    function Y(t, e, i, n) {
        var o,
            r,
            s,
            a,
            l,
            c = {},
            u = t.dataTypes.slice();
        if (u[1]) for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
        for (r = u.shift(); r; )
            if ((t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), (l = r), (r = u.shift())))
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
                    if (!(s = c[l + " " + r] || c["* " + r]))
                        for (o in c)
                            if (((a = o.split(" ")), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]]))) {
                                !0 === s ? (s = c[o]) : !0 !== c[o] && ((r = a[0]), u.unshift(a[1]));
                                break;
                            }
                    if (!0 !== s)
                        if (s && t.throws) e = s(e);
                        else
                            try {
                                e = s(e);
                            } catch (t) {
                                return { state: "parsererror", error: s ? t : "No conversion from " + l + " to " + r };
                            }
                }
        return { state: "success", data: e };
    }
    function J(t) {
        return (t.style && t.style.display) || pt.css(t, "display");
    }
    function K(t) {
        for (; t && 1 === t.nodeType; ) {
            if ("none" === J(t) || "hidden" === t.type) return !0;
            t = t.parentNode;
        }
        return !1;
    }
    function Z(t, e, i, n) {
        var o;
        if (pt.isArray(e))
            pt.each(e, function (e, o) {
                i || ii.test(t) ? n(t, o) : Z(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, i, n);
            });
        else if (i || "object" !== pt.type(e)) n(t, e);
        else for (o in e) Z(t + "[" + o + "]", e[o], i, n);
    }
    function tt() {
        try {
            return new t.XMLHttpRequest();
        } catch (t) {}
    }
    function et() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {}
    }
    function it(t) {
        return pt.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow);
    }
    var nt = [],
        ot = t.document,
        rt = nt.slice,
        st = nt.concat,
        at = nt.push,
        lt = nt.indexOf,
        ct = {},
        ut = ct.toString,
        ht = ct.hasOwnProperty,
        dt = {},
        ft = "1.12.0",
        pt = function (t, e) {
            return new pt.fn.init(t, e);
        },
        gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        mt = /^-ms-/,
        vt = /-([\da-z])/gi,
        yt = function (t, e) {
            return e.toUpperCase();
        };
    (pt.fn = pt.prototype = {
        jquery: ft,
        constructor: pt,
        selector: "",
        length: 0,
        toArray: function () {
            return rt.call(this);
        },
        get: function (t) {
            return null != t ? (t < 0 ? this[t + this.length] : this[t]) : rt.call(this);
        },
        pushStack: function (t) {
            var e = pt.merge(this.constructor(), t);
            return (e.prevObject = this), (e.context = this.context), e;
        },
        each: function (t) {
            return pt.each(this, t);
        },
        map: function (t) {
            return this.pushStack(
                pt.map(this, function (e, i) {
                    return t.call(e, i, e);
                })
            );
        },
        slice: function () {
            return this.pushStack(rt.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (t) {
            var e = this.length,
                i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [this[i]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: at,
        sort: nt.sort,
        splice: nt.splice,
    }),
        (pt.extend = pt.fn.extend = function () {
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
            for ("boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++), "object" == typeof s || pt.isFunction(s) || (s = {}), a === l && ((s = this), a--); a < l; a++)
                if (null != (o = arguments[a]))
                    for (n in o)
                        (t = s[n]),
                            (i = o[n]),
                            s !== i &&
                                (c && i && (pt.isPlainObject(i) || (e = pt.isArray(i)))
                                    ? (e ? ((e = !1), (r = t && pt.isArray(t) ? t : [])) : (r = t && pt.isPlainObject(t) ? t : {}), (s[n] = pt.extend(c, r, i)))
                                    : void 0 !== i && (s[n] = i));
            return s;
        }),
        pt.extend({
            expando: "jQuery" + (ft + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
                throw new Error(t);
            },
            noop: function () {},
            isFunction: function (t) {
                return "function" === pt.type(t);
            },
            isArray:
                Array.isArray ||
                function (t) {
                    return "array" === pt.type(t);
                },
            isWindow: function (t) {
                return null != t && t == t.window;
            },
            isNumeric: function (t) {
                var e = t && t.toString();
                return !pt.isArray(t) && e - parseFloat(e) + 1 >= 0;
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0;
            },
            isPlainObject: function (t) {
                var e;
                if (!t || "object" !== pt.type(t) || t.nodeType || pt.isWindow(t)) return !1;
                try {
                    if (t.constructor && !ht.call(t, "constructor") && !ht.call(t.constructor.prototype, "isPrototypeOf")) return !1;
                } catch (t) {
                    return !1;
                }
                if (!dt.ownFirst) for (e in t) return ht.call(t, e);
                for (e in t);
                return void 0 === e || ht.call(t, e);
            },
            type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? ct[ut.call(t)] || "object" : typeof t;
            },
            globalEval: function (e) {
                e &&
                    pt.trim(e) &&
                    (
                        t.execScript ||
                        function (e) {
                            t.eval.call(t, e);
                        }
                    )(e);
            },
            camelCase: function (t) {
                return t.replace(mt, "ms-").replace(vt, yt);
            },
            nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
            },
            each: function (t, e) {
                var n,
                    o = 0;
                if (i(t)) for (n = t.length; o < n && !1 !== e.call(t[o], o, t[o]); o++);
                else for (o in t) if (!1 === e.call(t[o], o, t[o])) break;
                return t;
            },
            trim: function (t) {
                return null == t ? "" : (t + "").replace(gt, "");
            },
            makeArray: function (t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? pt.merge(n, "string" == typeof t ? [t] : t) : at.call(n, t)), n;
            },
            inArray: function (t, e, i) {
                var n;
                if (e) {
                    if (lt) return lt.call(e, t, i);
                    for (n = e.length, i = i ? (i < 0 ? Math.max(0, n + i) : i) : 0; i < n; i++) if (i in e && e[i] === t) return i;
                }
                return -1;
            },
            merge: function (t, e) {
                for (var i = +e.length, n = 0, o = t.length; n < i; ) t[o++] = e[n++];
                if (i !== i) for (; void 0 !== e[n]; ) t[o++] = e[n++];
                return (t.length = o), t;
            },
            grep: function (t, e, i) {
                for (var n, o = [], r = 0, s = t.length, a = !i; r < s; r++) (n = !e(t[r], r)) !== a && o.push(t[r]);
                return o;
            },
            map: function (t, e, n) {
                var o,
                    r,
                    s = 0,
                    a = [];
                if (i(t)) for (o = t.length; s < o; s++) null != (r = e(t[s], s, n)) && a.push(r);
                else for (s in t) null != (r = e(t[s], s, n)) && a.push(r);
                return st.apply([], a);
            },
            guid: 1,
            proxy: function (t, e) {
                var i, n, o;
                if (("string" == typeof e && ((o = t[e]), (e = t), (t = o)), pt.isFunction(t)))
                    return (
                        (i = rt.call(arguments, 2)),
                        (n = function () {
                            return t.apply(e || this, i.concat(rt.call(arguments)));
                        }),
                        (n.guid = t.guid = t.guid || pt.guid++),
                        n
                    );
            },
            now: function () {
                return +new Date();
            },
            support: dt,
        }),
        "function" == typeof Symbol && (pt.fn[Symbol.iterator] = nt[Symbol.iterator]),
        pt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            ct["[object " + e + "]"] = e.toLowerCase();
        });
    var bt = (function (t) {
        function e(t, e, i, n) {
            var o,
                r,
                s,
                a,
                l,
                c,
                h,
                f,
                p = e && e.ownerDocument,
                g = e ? e.nodeType : 9;
            if (((i = i || []), "string" != typeof t || !t || (1 !== g && 9 !== g && 11 !== g))) return i;
            if (!n && ((e ? e.ownerDocument || e : F) !== A && P(e), (e = e || A), N)) {
                if (11 !== g && (c = yt.exec(t)))
                    if ((o = c[1])) {
                        if (9 === g) {
                            if (!(s = e.getElementById(o))) return i;
                            if (s.id === o) return i.push(s), i;
                        } else if (p && (s = p.getElementById(o)) && O(e, s) && s.id === o) return i.push(s), i;
                    } else {
                        if (c[2]) return Z.apply(i, e.getElementsByTagName(t)), i;
                        if ((o = c[3]) && x.getElementsByClassName && e.getElementsByClassName) return Z.apply(i, e.getElementsByClassName(o)), i;
                    }
                if (x.qsa && !V[t + " "] && (!j || !j.test(t))) {
                    if (1 !== g) (p = e), (f = t);
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? (a = a.replace(wt, "\\$&")) : e.setAttribute("id", (a = H)), h = S(t), r = h.length, l = ft.test(a) ? "#" + a : "[id='" + a + "']"; r--; ) h[r] = l + " " + d(h[r]);
                        (f = h.join(",")), (p = (bt.test(t) && u(e.parentNode)) || e);
                    }
                    if (f)
                        try {
                            return Z.apply(i, p.querySelectorAll(f)), i;
                        } catch (t) {
                        } finally {
                            a === H && e.removeAttribute("id");
                        }
                }
            }
            return _(t.replace(lt, "$1"), e, i, n);
        }
        function i() {
            function t(i, n) {
                return e.push(i + " ") > E.cacheLength && delete t[e.shift()], (t[i + " "] = n);
            }
            var e = [];
            return t;
        }
        function n(t) {
            return (t[H] = !0), t;
        }
        function o(t) {
            var e = A.createElement("div");
            try {
                return !!t(e);
            } catch (t) {
                return !1;
            } finally {
                e.parentNode && e.parentNode.removeChild(e), (e = null);
            }
        }
        function r(t, e) {
            for (var i = t.split("|"), n = i.length; n--; ) E.attrHandle[i[n]] = e;
        }
        function s(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Q) - (~t.sourceIndex || Q);
            if (n) return n;
            if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
            return t ? 1 : -1;
        }
        function a(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function l(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t;
            };
        }
        function c(t) {
            return n(function (e) {
                return (
                    (e = +e),
                    n(function (i, n) {
                        for (var o, r = t([], i.length, e), s = r.length; s--; ) i[(o = r[s])] && (i[o] = !(n[o] = i[o]));
                    })
                );
            });
        }
        function u(t) {
            return t && void 0 !== t.getElementsByTagName && t;
        }
        function h() {}
        function d(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n;
        }
        function f(t, e, i) {
            var n = e.dir,
                o = i && "parentNode" === n,
                r = R++;
            return e.first
                ? function (e, i, r) {
                      for (; (e = e[n]); ) if (1 === e.nodeType || o) return t(e, i, r);
                  }
                : function (e, i, s) {
                      var a,
                          l,
                          c,
                          u = [B, r];
                      if (s) {
                          for (; (e = e[n]); ) if ((1 === e.nodeType || o) && t(e, i, s)) return !0;
                      } else
                          for (; (e = e[n]); )
                              if (1 === e.nodeType || o) {
                                  if (((c = e[H] || (e[H] = {})), (l = c[e.uniqueID] || (c[e.uniqueID] = {})), (a = l[n]) && a[0] === B && a[1] === r)) return (u[2] = a[2]);
                                  if (((l[n] = u), (u[2] = t(e, i, s)))) return !0;
                              }
                  };
        }
        function p(t) {
            return t.length > 1
                ? function (e, i, n) {
                      for (var o = t.length; o--; ) if (!t[o](e, i, n)) return !1;
                      return !0;
                  }
                : t[0];
        }
        function g(t, i, n) {
            for (var o = 0, r = i.length; o < r; o++) e(t, i[o], n);
            return n;
        }
        function m(t, e, i, n, o) {
            for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++) (r = t[a]) && ((i && !i(r, n, o)) || (s.push(r), c && e.push(a)));
            return s;
        }
        function v(t, e, i, o, r, s) {
            return (
                o && !o[H] && (o = v(o)),
                r && !r[H] && (r = v(r, s)),
                n(function (n, s, a, l) {
                    var c,
                        u,
                        h,
                        d = [],
                        f = [],
                        p = s.length,
                        v = n || g(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || (!n && e) ? v : m(v, d, t, a, l),
                        b = i ? (r || (n ? t : p || o) ? [] : s) : y;
                    if ((i && i(y, b, a, l), o)) for (c = m(b, f), o(c, [], a, l), u = c.length; u--; ) (h = c[u]) && (b[f[u]] = !(y[f[u]] = h));
                    if (n) {
                        if (r || t) {
                            if (r) {
                                for (c = [], u = b.length; u--; ) (h = b[u]) && c.push((y[u] = h));
                                r(null, (b = []), c, l);
                            }
                            for (u = b.length; u--; ) (h = b[u]) && (c = r ? et(n, h) : d[u]) > -1 && (n[c] = !(s[c] = h));
                        }
                    } else (b = m(b === s ? b.splice(p, b.length) : b)), r ? r(null, s, b, l) : Z.apply(s, b);
                })
            );
        }
        function y(t) {
            for (
                var e,
                    i,
                    n,
                    o = t.length,
                    r = E.relative[t[0].type],
                    s = r || E.relative[" "],
                    a = r ? 1 : 0,
                    l = f(
                        function (t) {
                            return t === e;
                        },
                        s,
                        !0
                    ),
                    c = f(
                        function (t) {
                            return et(e, t) > -1;
                        },
                        s,
                        !0
                    ),
                    u = [
                        function (t, i, n) {
                            var o = (!r && (n || i !== D)) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                            return (e = null), o;
                        },
                    ];
                a < o;
                a++
            )
                if ((i = E.relative[t[a].type])) u = [f(p(u), i)];
                else {
                    if (((i = E.filter[t[a].type].apply(null, t[a].matches)), i[H])) {
                        for (n = ++a; n < o && !E.relative[t[n].type]; n++);
                        return v(a > 1 && p(u), a > 1 && d(t.slice(0, a - 1).concat({ value: " " === t[a - 2].type ? "*" : "" })).replace(lt, "$1"), i, a < n && y(t.slice(a, n)), n < o && y((t = t.slice(n))), n < o && d(t));
                    }
                    u.push(i);
                }
            return p(u);
        }
        function b(t, i) {
            var o = i.length > 0,
                r = t.length > 0,
                s = function (n, s, a, l, c) {
                    var u,
                        h,
                        d,
                        f = 0,
                        p = "0",
                        g = n && [],
                        v = [],
                        y = D,
                        b = n || (r && E.find.TAG("*", c)),
                        w = (B += null == y ? 1 : Math.random() || 0.1),
                        x = b.length;
                    for (c && (D = s === A || s || c); p !== x && null != (u = b[p]); p++) {
                        if (r && u) {
                            for (h = 0, s || u.ownerDocument === A || (P(u), (a = !N)); (d = t[h++]); )
                                if (d(u, s || A, a)) {
                                    l.push(u);
                                    break;
                                }
                            c && (B = w);
                        }
                        o && ((u = !d && u) && f--, n && g.push(u));
                    }
                    if (((f += p), o && p !== f)) {
                        for (h = 0; (d = i[h++]); ) d(g, v, s, a);
                        if (n) {
                            if (f > 0) for (; p--; ) g[p] || v[p] || (v[p] = J.call(l));
                            v = m(v);
                        }
                        Z.apply(l, v), c && !n && v.length > 0 && f + i.length > 1 && e.uniqueSort(l);
                    }
                    return c && ((B = w), (D = y)), g;
                };
            return o ? n(s) : s;
        }
        var w,
            x,
            E,
            k,
            C,
            S,
            T,
            _,
            D,
            L,
            I,
            P,
            A,
            z,
            N,
            j,
            M,
            q,
            O,
            H = "sizzle" + 1 * new Date(),
            F = t.document,
            B = 0,
            R = 0,
            W = i(),
            U = i(),
            V = i(),
            X = function (t, e) {
                return t === e && (I = !0), 0;
            },
            Q = 1 << 31,
            G = {}.hasOwnProperty,
            Y = [],
            J = Y.pop,
            K = Y.push,
            Z = Y.push,
            tt = Y.slice,
            et = function (t, e) {
                for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
                return -1;
            },
            it = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            ot = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            rt = "\\[" + nt + "*(" + ot + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + nt + "*\\]",
            st = ":(" + ot + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
            at = new RegExp(nt + "+", "g"),
            lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            ct = new RegExp("^" + nt + "*," + nt + "*"),
            ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ht = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            dt = new RegExp(st),
            ft = new RegExp("^" + ot + "$"),
            pt = {
                ID: new RegExp("^#(" + ot + ")"),
                CLASS: new RegExp("^\\.(" + ot + ")"),
                TAG: new RegExp("^(" + ot + "|[*])"),
                ATTR: new RegExp("^" + rt),
                PSEUDO: new RegExp("^" + st),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + it + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i"),
            },
            gt = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            vt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            bt = /[+~]/,
            wt = /'|\\/g,
            xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            Et = function (t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
            },
            kt = function () {
                P();
            };
        try {
            Z.apply((Y = tt.call(F.childNodes)), F.childNodes), Y[F.childNodes.length].nodeType;
        } catch (t) {
            Z = {
                apply: Y.length
                    ? function (t, e) {
                          K.apply(t, tt.call(e));
                      }
                    : function (t, e) {
                          for (var i = t.length, n = 0; (t[i++] = e[n++]); );
                          t.length = i - 1;
                      },
            };
        }
        (x = e.support = {}),
            (C = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName;
            }),
            (P = e.setDocument = function (t) {
                var e,
                    i,
                    n = t ? t.ownerDocument || t : F;
                return n !== A && 9 === n.nodeType && n.documentElement
                    ? ((A = n),
                      (z = A.documentElement),
                      (N = !C(A)),
                      (i = A.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", kt, !1) : i.attachEvent && i.attachEvent("onunload", kt)),
                      (x.attributes = o(function (t) {
                          return (t.className = "i"), !t.getAttribute("className");
                      })),
                      (x.getElementsByTagName = o(function (t) {
                          return t.appendChild(A.createComment("")), !t.getElementsByTagName("*").length;
                      })),
                      (x.getElementsByClassName = vt.test(A.getElementsByClassName)),
                      (x.getById = o(function (t) {
                          return (z.appendChild(t).id = H), !A.getElementsByName || !A.getElementsByName(H).length;
                      })),
                      x.getById
                          ? ((E.find.ID = function (t, e) {
                                if (void 0 !== e.getElementById && N) {
                                    var i = e.getElementById(t);
                                    return i ? [i] : [];
                                }
                            }),
                            (E.filter.ID = function (t) {
                                var e = t.replace(xt, Et);
                                return function (t) {
                                    return t.getAttribute("id") === e;
                                };
                            }))
                          : (delete E.find.ID,
                            (E.filter.ID = function (t) {
                                var e = t.replace(xt, Et);
                                return function (t) {
                                    var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                    return i && i.value === e;
                                };
                            })),
                      (E.find.TAG = x.getElementsByTagName
                          ? function (t, e) {
                                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0;
                            }
                          : function (t, e) {
                                var i,
                                    n = [],
                                    o = 0,
                                    r = e.getElementsByTagName(t);
                                if ("*" === t) {
                                    for (; (i = r[o++]); ) 1 === i.nodeType && n.push(i);
                                    return n;
                                }
                                return r;
                            }),
                      (E.find.CLASS =
                          x.getElementsByClassName &&
                          function (t, e) {
                              if (void 0 !== e.getElementsByClassName && N) return e.getElementsByClassName(t);
                          }),
                      (M = []),
                      (j = []),
                      (x.qsa = vt.test(A.querySelectorAll)) &&
                          (o(function (t) {
                              (z.appendChild(t).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                  t.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + nt + "*(?:''|\"\")"),
                                  t.querySelectorAll("[selected]").length || j.push("\\[" + nt + "*(?:value|" + it + ")"),
                                  t.querySelectorAll("[id~=" + H + "-]").length || j.push("~="),
                                  t.querySelectorAll(":checked").length || j.push(":checked"),
                                  t.querySelectorAll("a#" + H + "+*").length || j.push(".#.+[+~]");
                          }),
                          o(function (t) {
                              var e = A.createElement("input");
                              e.setAttribute("type", "hidden"),
                                  t.appendChild(e).setAttribute("name", "D"),
                                  t.querySelectorAll("[name=d]").length && j.push("name" + nt + "*[*^$|!~]?="),
                                  t.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"),
                                  t.querySelectorAll("*,:x"),
                                  j.push(",.*:");
                          })),
                      (x.matchesSelector = vt.test((q = z.matches || z.webkitMatchesSelector || z.mozMatchesSelector || z.oMatchesSelector || z.msMatchesSelector))) &&
                          o(function (t) {
                              (x.disconnectedMatch = q.call(t, "div")), q.call(t, "[s!='']:x"), M.push("!=", st);
                          }),
                      (j = j.length && new RegExp(j.join("|"))),
                      (M = M.length && new RegExp(M.join("|"))),
                      (e = vt.test(z.compareDocumentPosition)),
                      (O =
                          e || vt.test(z.contains)
                              ? function (t, e) {
                                    var i = 9 === t.nodeType ? t.documentElement : t,
                                        n = e && e.parentNode;
                                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)));
                                }
                              : function (t, e) {
                                    if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                                    return !1;
                                }),
                      (X = e
                          ? function (t, e) {
                                if (t === e) return (I = !0), 0;
                                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                return (
                                    i ||
                                    ((i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1),
                                    1 & i || (!x.sortDetached && e.compareDocumentPosition(t) === i)
                                        ? t === A || (t.ownerDocument === F && O(F, t))
                                            ? -1
                                            : e === A || (e.ownerDocument === F && O(F, e))
                                            ? 1
                                            : L
                                            ? et(L, t) - et(L, e)
                                            : 0
                                        : 4 & i
                                        ? -1
                                        : 1)
                                );
                            }
                          : function (t, e) {
                                if (t === e) return (I = !0), 0;
                                var i,
                                    n = 0,
                                    o = t.parentNode,
                                    r = e.parentNode,
                                    a = [t],
                                    l = [e];
                                if (!o || !r) return t === A ? -1 : e === A ? 1 : o ? -1 : r ? 1 : L ? et(L, t) - et(L, e) : 0;
                                if (o === r) return s(t, e);
                                for (i = t; (i = i.parentNode); ) a.unshift(i);
                                for (i = e; (i = i.parentNode); ) l.unshift(i);
                                for (; a[n] === l[n]; ) n++;
                                return n ? s(a[n], l[n]) : a[n] === F ? -1 : l[n] === F ? 1 : 0;
                            }),
                      A)
                    : A;
            }),
            (e.matches = function (t, i) {
                return e(t, null, null, i);
            }),
            (e.matchesSelector = function (t, i) {
                if (((t.ownerDocument || t) !== A && P(t), (i = i.replace(ht, "='$1']")), x.matchesSelector && N && !V[i + " "] && (!M || !M.test(i)) && (!j || !j.test(i))))
                    try {
                        var n = q.call(t, i);
                        if (n || x.disconnectedMatch || (t.document && 11 !== t.document.nodeType)) return n;
                    } catch (t) {}
                return e(i, A, null, [t]).length > 0;
            }),
            (e.contains = function (t, e) {
                return (t.ownerDocument || t) !== A && P(t), O(t, e);
            }),
            (e.attr = function (t, e) {
                (t.ownerDocument || t) !== A && P(t);
                var i = E.attrHandle[e.toLowerCase()],
                    n = i && G.call(E.attrHandle, e.toLowerCase()) ? i(t, e, !N) : void 0;
                return void 0 !== n ? n : x.attributes || !N ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
            }),
            (e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t);
            }),
            (e.uniqueSort = function (t) {
                var e,
                    i = [],
                    n = 0,
                    o = 0;
                if (((I = !x.detectDuplicates), (L = !x.sortStable && t.slice(0)), t.sort(X), I)) {
                    for (; (e = t[o++]); ) e === t[o] && (n = i.push(o));
                    for (; n--; ) t.splice(i[n], 1);
                }
                return (L = null), t;
            }),
            (k = e.getText = function (t) {
                var e,
                    i = "",
                    n = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += k(t);
                    } else if (3 === o || 4 === o) return t.nodeValue;
                } else for (; (e = t[n++]); ) i += k(e);
                return i;
            }),
            (E = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: pt,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: {
                    ATTR: function (t) {
                        return (t[1] = t[1].replace(xt, Et)), (t[3] = (t[3] || t[4] || t[5] || "").replace(xt, Et)), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                    },
                    CHILD: function (t) {
                        return (
                            (t[1] = t[1].toLowerCase()),
                            "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), (t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3]))), (t[5] = +(t[7] + t[8] || "odd" === t[3]))) : t[3] && e.error(t[0]),
                            t
                        );
                    },
                    PSEUDO: function (t) {
                        var e,
                            i = !t[6] && t[2];
                        return pt.CHILD.test(t[0])
                            ? null
                            : (t[3] ? (t[2] = t[4] || t[5] || "") : i && dt.test(i) && (e = S(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))), t.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(xt, Et).toLowerCase();
                        return "*" === t
                            ? function () {
                                  return !0;
                              }
                            : function (t) {
                                  return t.nodeName && t.nodeName.toLowerCase() === e;
                              };
                    },
                    CLASS: function (t) {
                        var e = W[t + " "];
                        return (
                            e ||
                            ((e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) &&
                                W(t, function (t) {
                                    return e.test(("string" == typeof t.className && t.className) || (void 0 !== t.getAttribute && t.getAttribute("class")) || "");
                                }))
                        );
                    },
                    ATTR: function (t, i, n) {
                        return function (o) {
                            var r = e.attr(o, t);
                            return null == r
                                ? "!=" === i
                                : !i ||
                                      ((r += ""),
                                      "=" === i
                                          ? r === n
                                          : "!=" === i
                                          ? r !== n
                                          : "^=" === i
                                          ? n && 0 === r.indexOf(n)
                                          : "*=" === i
                                          ? n && r.indexOf(n) > -1
                                          : "$=" === i
                                          ? n && r.slice(-n.length) === n
                                          : "~=" === i
                                          ? (" " + r.replace(at, " ") + " ").indexOf(n) > -1
                                          : "|=" === i && (r === n || r.slice(0, n.length + 1) === n + "-"));
                        };
                    },
                    CHILD: function (t, e, i, n, o) {
                        var r = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === o
                            ? function (t) {
                                  return !!t.parentNode;
                              }
                            : function (e, i, l) {
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
                                          for (; g; ) {
                                              for (d = e; (d = d[g]); ) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                              p = g = "only" === t && !p && "nextSibling";
                                          }
                                          return !0;
                                      }
                                      if (((p = [s ? m.firstChild : m.lastChild]), s && y)) {
                                          for (
                                              d = m, h = d[H] || (d[H] = {}), u = h[d.uniqueID] || (h[d.uniqueID] = {}), c = u[t] || [], f = c[0] === B && c[1], b = f && c[2], d = f && m.childNodes[f];
                                              (d = (++f && d && d[g]) || (b = f = 0) || p.pop());

                                          )
                                              if (1 === d.nodeType && ++b && d === e) {
                                                  u[t] = [B, f, b];
                                                  break;
                                              }
                                      } else if ((y && ((d = e), (h = d[H] || (d[H] = {})), (u = h[d.uniqueID] || (h[d.uniqueID] = {})), (c = u[t] || []), (f = c[0] === B && c[1]), (b = f)), !1 === b))
                                          for (
                                              ;
                                              (d = (++f && d && d[g]) || (b = f = 0) || p.pop()) &&
                                              ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((h = d[H] || (d[H] = {})), (u = h[d.uniqueID] || (h[d.uniqueID] = {})), (u[t] = [B, b])), d !== e));

                                          );
                                      return (b -= o) === n || (b % n == 0 && b / n >= 0);
                                  }
                              };
                    },
                    PSEUDO: function (t, i) {
                        var o,
                            r = E.pseudos[t] || E.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return r[H]
                            ? r(i)
                            : r.length > 1
                            ? ((o = [t, t, "", i]),
                              E.setFilters.hasOwnProperty(t.toLowerCase())
                                  ? n(function (t, e) {
                                        for (var n, o = r(t, i), s = o.length; s--; ) (n = et(t, o[s])), (t[n] = !(e[n] = o[s]));
                                    })
                                  : function (t) {
                                        return r(t, 0, o);
                                    })
                            : r;
                    },
                },
                pseudos: {
                    not: n(function (t) {
                        var e = [],
                            i = [],
                            o = T(t.replace(lt, "$1"));
                        return o[H]
                            ? n(function (t, e, i, n) {
                                  for (var r, s = o(t, null, n, []), a = t.length; a--; ) (r = s[a]) && (t[a] = !(e[a] = r));
                              })
                            : function (t, n, r) {
                                  return (e[0] = t), o(e, null, r, i), (e[0] = null), !i.pop();
                              };
                    }),
                    has: n(function (t) {
                        return function (i) {
                            return e(t, i).length > 0;
                        };
                    }),
                    contains: n(function (t) {
                        return (
                            (t = t.replace(xt, Et)),
                            function (e) {
                                return (e.textContent || e.innerText || k(e)).indexOf(t) > -1;
                            }
                        );
                    }),
                    lang: n(function (t) {
                        return (
                            ft.test(t || "") || e.error("unsupported lang: " + t),
                            (t = t.replace(xt, Et).toLowerCase()),
                            function (e) {
                                var i;
                                do {
                                    if ((i = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-");
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function (e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id;
                    },
                    root: function (t) {
                        return t === z;
                    },
                    focus: function (t) {
                        return t === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                    },
                    enabled: function (t) {
                        return !1 === t.disabled;
                    },
                    disabled: function (t) {
                        return !0 === t.disabled;
                    },
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return ("input" === e && !!t.checked) || ("option" === e && !!t.selected);
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (t) {
                        return !E.pseudos.empty(t);
                    },
                    header: function (t) {
                        return mt.test(t.nodeName);
                    },
                    input: function (t) {
                        return gt.test(t.nodeName);
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return ("input" === e && "button" === t.type) || "button" === e;
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                    },
                    first: c(function () {
                        return [0];
                    }),
                    last: c(function (t, e) {
                        return [e - 1];
                    }),
                    eq: c(function (t, e, i) {
                        return [i < 0 ? i + e : i];
                    }),
                    even: c(function (t, e) {
                        for (var i = 0; i < e; i += 2) t.push(i);
                        return t;
                    }),
                    odd: c(function (t, e) {
                        for (var i = 1; i < e; i += 2) t.push(i);
                        return t;
                    }),
                    lt: c(function (t, e, i) {
                        for (var n = i < 0 ? i + e : i; --n >= 0; ) t.push(n);
                        return t;
                    }),
                    gt: c(function (t, e, i) {
                        for (var n = i < 0 ? i + e : i; ++n < e; ) t.push(n);
                        return t;
                    }),
                },
            }),
            (E.pseudos.nth = E.pseudos.eq);
        for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) E.pseudos[w] = a(w);
        for (w in { submit: !0, reset: !0 }) E.pseudos[w] = l(w);
        return (
            (h.prototype = E.filters = E.pseudos),
            (E.setFilters = new h()),
            (S = e.tokenize = function (t, i) {
                var n,
                    o,
                    r,
                    s,
                    a,
                    l,
                    c,
                    u = U[t + " "];
                if (u) return i ? 0 : u.slice(0);
                for (a = t, l = [], c = E.preFilter; a; ) {
                    (n && !(o = ct.exec(a))) || (o && (a = a.slice(o[0].length) || a), l.push((r = []))), (n = !1), (o = ut.exec(a)) && ((n = o.shift()), r.push({ value: n, type: o[0].replace(lt, " ") }), (a = a.slice(n.length)));
                    for (s in E.filter) !(o = pt[s].exec(a)) || (c[s] && !(o = c[s](o))) || ((n = o.shift()), r.push({ value: n, type: s, matches: o }), (a = a.slice(n.length)));
                    if (!n) break;
                }
                return i ? a.length : a ? e.error(t) : U(t, l).slice(0);
            }),
            (T = e.compile = function (t, e) {
                var i,
                    n = [],
                    o = [],
                    r = V[t + " "];
                if (!r) {
                    for (e || (e = S(t)), i = e.length; i--; ) (r = y(e[i])), r[H] ? n.push(r) : o.push(r);
                    (r = V(t, b(o, n))), (r.selector = t);
                }
                return r;
            }),
            (_ = e.select = function (t, e, i, n) {
                var o,
                    r,
                    s,
                    a,
                    l,
                    c = "function" == typeof t && t,
                    h = !n && S((t = c.selector || t));
                if (((i = i || []), 1 === h.length)) {
                    if (((r = h[0] = h[0].slice(0)), r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === e.nodeType && N && E.relative[r[1].type])) {
                        if (!(e = (E.find.ID(s.matches[0].replace(xt, Et), e) || [])[0])) return i;
                        c && (e = e.parentNode), (t = t.slice(r.shift().value.length));
                    }
                    for (o = pt.needsContext.test(t) ? 0 : r.length; o-- && ((s = r[o]), !E.relative[(a = s.type)]); )
                        if ((l = E.find[a]) && (n = l(s.matches[0].replace(xt, Et), (bt.test(r[0].type) && u(e.parentNode)) || e))) {
                            if ((r.splice(o, 1), !(t = n.length && d(r)))) return Z.apply(i, n), i;
                            break;
                        }
                }
                return (c || T(t, h))(n, e, !N, i, !e || (bt.test(t) && u(e.parentNode)) || e), i;
            }),
            (x.sortStable = H.split("").sort(X).join("") === H),
            (x.detectDuplicates = !!I),
            P(),
            (x.sortDetached = o(function (t) {
                return 1 & t.compareDocumentPosition(A.createElement("div"));
            })),
            o(function (t) {
                return (t.innerHTML = "<a href='#'></a>"), "#" === t.firstChild.getAttribute("href");
            }) ||
                r("type|href|height|width", function (t, e, i) {
                    if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
                }),
            (x.attributes &&
                o(function (t) {
                    return (t.innerHTML = "<input/>"), t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
                })) ||
                r("value", function (t, e, i) {
                    if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
                }),
            o(function (t) {
                return null == t.getAttribute("disabled");
            }) ||
                r(it, function (t, e, i) {
                    var n;
                    if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
                }),
            e
        );
    })(t);
    (pt.find = bt), (pt.expr = bt.selectors), (pt.expr[":"] = pt.expr.pseudos), (pt.uniqueSort = pt.unique = bt.uniqueSort), (pt.text = bt.getText), (pt.isXMLDoc = bt.isXML), (pt.contains = bt.contains);
    var wt = function (t, e, i) {
            for (var n = [], o = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
                if (1 === t.nodeType) {
                    if (o && pt(t).is(i)) break;
                    n.push(t);
                }
            return n;
        },
        xt = function (t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i;
        },
        Et = pt.expr.match.needsContext,
        kt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Ct = /^.[^:#\[\.,]*$/;
    (pt.filter = function (t, e, i) {
        var n = e[0];
        return (
            i && (t = ":not(" + t + ")"),
            1 === e.length && 1 === n.nodeType
                ? pt.find.matchesSelector(n, t)
                    ? [n]
                    : []
                : pt.find.matches(
                      t,
                      pt.grep(e, function (t) {
                          return 1 === t.nodeType;
                      })
                  )
        );
    }),
        pt.fn.extend({
            find: function (t) {
                var e,
                    i = [],
                    n = this,
                    o = n.length;
                if ("string" != typeof t)
                    return this.pushStack(
                        pt(t).filter(function () {
                            for (e = 0; e < o; e++) if (pt.contains(n[e], this)) return !0;
                        })
                    );
                for (e = 0; e < o; e++) pt.find(t, n[e], i);
                return (i = this.pushStack(o > 1 ? pt.unique(i) : i)), (i.selector = this.selector ? this.selector + " " + t : t), i;
            },
            filter: function (t) {
                return this.pushStack(n(this, t || [], !1));
            },
            not: function (t) {
                return this.pushStack(n(this, t || [], !0));
            },
            is: function (t) {
                return !!n(this, "string" == typeof t && Et.test(t) ? pt(t) : t || [], !1).length;
            },
        });
    var St,
        Tt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    ((pt.fn.init = function (t, e, i) {
        var n, o;
        if (!t) return this;
        if (((i = i || St), "string" == typeof t)) {
            if (!(n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : Tt.exec(t)) || (!n[1] && e)) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (((e = e instanceof pt ? e[0] : e), pt.merge(this, pt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : ot, !0)), kt.test(n[1]) && pt.isPlainObject(e)))
                    for (n in e) pt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this;
            }
            if ((o = ot.getElementById(n[2])) && o.parentNode) {
                if (o.id !== n[2]) return St.find(t);
                (this.length = 1), (this[0] = o);
            }
            return (this.context = ot), (this.selector = t), this;
        }
        return t.nodeType
            ? ((this.context = this[0] = t), (this.length = 1), this)
            : pt.isFunction(t)
            ? void 0 !== i.ready
                ? i.ready(t)
                : t(pt)
            : (void 0 !== t.selector && ((this.selector = t.selector), (this.context = t.context)), pt.makeArray(t, this));
    }).prototype = pt.fn),
        (St = pt(ot));
    var _t = /^(?:parents|prev(?:Until|All))/,
        Dt = { children: !0, contents: !0, next: !0, prev: !0 };
    pt.fn.extend({
        has: function (t) {
            var e,
                i = pt(t, this),
                n = i.length;
            return this.filter(function () {
                for (e = 0; e < n; e++) if (pt.contains(this, i[e])) return !0;
            });
        },
        closest: function (t, e) {
            for (var i, n = 0, o = this.length, r = [], s = Et.test(t) || "string" != typeof t ? pt(t, e || this.context) : 0; n < o; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && pt.find.matchesSelector(i, t))) {
                        r.push(i);
                        break;
                    }
            return this.pushStack(r.length > 1 ? pt.uniqueSort(r) : r);
        },
        index: function (t) {
            return t ? ("string" == typeof t ? pt.inArray(this[0], pt(t)) : pt.inArray(t.jquery ? t[0] : t, this)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (t, e) {
            return this.pushStack(pt.uniqueSort(pt.merge(this.get(), pt(t, e))));
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        },
    }),
        pt.each(
            {
                parent: function (t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null;
                },
                parents: function (t) {
                    return wt(t, "parentNode");
                },
                parentsUntil: function (t, e, i) {
                    return wt(t, "parentNode", i);
                },
                next: function (t) {
                    return o(t, "nextSibling");
                },
                prev: function (t) {
                    return o(t, "previousSibling");
                },
                nextAll: function (t) {
                    return wt(t, "nextSibling");
                },
                prevAll: function (t) {
                    return wt(t, "previousSibling");
                },
                nextUntil: function (t, e, i) {
                    return wt(t, "nextSibling", i);
                },
                prevUntil: function (t, e, i) {
                    return wt(t, "previousSibling", i);
                },
                siblings: function (t) {
                    return xt((t.parentNode || {}).firstChild, t);
                },
                children: function (t) {
                    return xt(t.firstChild);
                },
                contents: function (t) {
                    return pt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : pt.merge([], t.childNodes);
                },
            },
            function (t, e) {
                pt.fn[t] = function (i, n) {
                    var o = pt.map(this, e, i);
                    return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = pt.filter(n, o)), this.length > 1 && (Dt[t] || (o = pt.uniqueSort(o)), _t.test(t) && (o = o.reverse())), this.pushStack(o);
                };
            }
        );
    var Lt = /\S+/g;
    (pt.Callbacks = function (t) {
        t = "string" == typeof t ? r(t) : pt.extend({}, t);
        var e,
            i,
            n,
            o,
            s = [],
            a = [],
            l = -1,
            c = function () {
                for (o = t.once, n = e = !0; a.length; l = -1) for (i = a.shift(); ++l < s.length; ) !1 === s[l].apply(i[0], i[1]) && t.stopOnFalse && ((l = s.length), (i = !1));
                t.memory || (i = !1), (e = !1), o && (s = i ? [] : "");
            },
            u = {
                add: function () {
                    return (
                        s &&
                            (i && !e && ((l = s.length - 1), a.push(i)),
                            (function e(i) {
                                pt.each(i, function (i, n) {
                                    pt.isFunction(n) ? (t.unique && u.has(n)) || s.push(n) : n && n.length && "string" !== pt.type(n) && e(n);
                                });
                            })(arguments),
                            i && !e && c()),
                        this
                    );
                },
                remove: function () {
                    return (
                        pt.each(arguments, function (t, e) {
                            for (var i; (i = pt.inArray(e, s, i)) > -1; ) s.splice(i, 1), i <= l && l--;
                        }),
                        this
                    );
                },
                has: function (t) {
                    return t ? pt.inArray(t, s) > -1 : s.length > 0;
                },
                empty: function () {
                    return s && (s = []), this;
                },
                disable: function () {
                    return (o = a = []), (s = i = ""), this;
                },
                disabled: function () {
                    return !s;
                },
                lock: function () {
                    return (o = !0), i || u.disable(), this;
                },
                locked: function () {
                    return !!o;
                },
                fireWith: function (t, i) {
                    return o || ((i = i || []), (i = [t, i.slice ? i.slice() : i]), a.push(i), e || c()), this;
                },
                fire: function () {
                    return u.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!n;
                },
            };
        return u;
    }),
        pt.extend({
            Deferred: function (t) {
                var e = [
                        ["resolve", "done", pt.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", pt.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", pt.Callbacks("memory")],
                    ],
                    i = "pending",
                    n = {
                        state: function () {
                            return i;
                        },
                        always: function () {
                            return o.done(arguments).fail(arguments), this;
                        },
                        then: function () {
                            var t = arguments;
                            return pt
                                .Deferred(function (i) {
                                    pt.each(e, function (e, r) {
                                        var s = pt.isFunction(t[e]) && t[e];
                                        o[r[1]](function () {
                                            var t = s && s.apply(this, arguments);
                                            t && pt.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[r[0] + "With"](this === n ? i.promise() : this, s ? [t] : arguments);
                                        });
                                    }),
                                        (t = null);
                                })
                                .promise();
                        },
                        promise: function (t) {
                            return null != t ? pt.extend(t, n) : n;
                        },
                    },
                    o = {};
                return (
                    (n.pipe = n.then),
                    pt.each(e, function (t, r) {
                        var s = r[2],
                            a = r[3];
                        (n[r[1]] = s.add),
                            a &&
                                s.add(
                                    function () {
                                        i = a;
                                    },
                                    e[1 ^ t][2].disable,
                                    e[2][2].lock
                                ),
                            (o[r[0]] = function () {
                                return o[r[0] + "With"](this === o ? n : this, arguments), this;
                            }),
                            (o[r[0] + "With"] = s.fireWith);
                    }),
                    n.promise(o),
                    t && t.call(o, o),
                    o
                );
            },
            when: function (t) {
                var e = 0,
                    i = rt.call(arguments),
                    n = i.length,
                    o = 1 !== n || (t && pt.isFunction(t.promise)) ? n : 0,
                    r = 1 === o ? t : pt.Deferred(),
                    s = function (t, e, i) {
                        return function (n) {
                            (e[t] = this), (i[t] = arguments.length > 1 ? rt.call(arguments) : n), i === a ? r.notifyWith(e, i) : --o || r.resolveWith(e, i);
                        };
                    },
                    a,
                    l,
                    c;
                if (n > 1) for (a = new Array(n), l = new Array(n), c = new Array(n); e < n; e++) i[e] && pt.isFunction(i[e].promise) ? i[e].promise().progress(s(e, l, a)).done(s(e, c, i)).fail(r.reject) : --o;
                return o || r.resolveWith(c, i), r.promise();
            },
        });
    var It;
    (pt.fn.ready = function (t) {
        return pt.ready.promise().done(t), this;
    }),
        pt.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (t) {
                t ? pt.readyWait++ : pt.ready(!0);
            },
            ready: function (t) {
                (!0 === t ? --pt.readyWait : pt.isReady) || ((pt.isReady = !0), (!0 !== t && --pt.readyWait > 0) || (It.resolveWith(ot, [pt]), pt.fn.triggerHandler && (pt(ot).triggerHandler("ready"), pt(ot).off("ready"))));
            },
        }),
        (pt.ready.promise = function (e) {
            if (!It)
                if (((It = pt.Deferred()), "complete" === ot.readyState)) t.setTimeout(pt.ready);
                else if (ot.addEventListener) ot.addEventListener("DOMContentLoaded", a), t.addEventListener("load", a);
                else {
                    ot.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
                    var i = !1;
                    try {
                        i = null == t.frameElement && ot.documentElement;
                    } catch (t) {}
                    i &&
                        i.doScroll &&
                        (function e() {
                            if (!pt.isReady) {
                                try {
                                    i.doScroll("left");
                                } catch (i) {
                                    return t.setTimeout(e, 50);
                                }
                                s(), pt.ready();
                            }
                        })();
                }
            return It.promise(e);
        }),
        pt.ready.promise();
    var Pt;
    for (Pt in pt(dt)) break;
    (dt.ownFirst = "0" === Pt),
        (dt.inlineBlockNeedsLayout = !1),
        pt(function () {
            var t, e, i, n;
            (i = ot.getElementsByTagName("body")[0]) &&
                i.style &&
                ((e = ot.createElement("div")),
                (n = ot.createElement("div")),
                (n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                i.appendChild(n).appendChild(e),
                void 0 !== e.style.zoom && ((e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"), (dt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth), t && (i.style.zoom = 1)),
                i.removeChild(n));
        }),
        (function () {
            var t = ot.createElement("div");
            dt.deleteExpando = !0;
            try {
                delete t.test;
            } catch (t) {
                dt.deleteExpando = !1;
            }
            t = null;
        })();
    var At = function (t) {
            var e = pt.noData[(t.nodeName + " ").toLowerCase()],
                i = +t.nodeType || 1;
            return (1 === i || 9 === i) && (!e || (!0 !== e && t.getAttribute("classid") === e));
        },
        zt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Nt = /([A-Z])/g;
    pt.extend({
        cache: {},
        noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" },
        hasData: function (t) {
            return !!(t = t.nodeType ? pt.cache[t[pt.expando]] : t[pt.expando]) && !c(t);
        },
        data: function (t, e, i) {
            return u(t, e, i);
        },
        removeData: function (t, e) {
            return h(t, e);
        },
        _data: function (t, e, i) {
            return u(t, e, i, !0);
        },
        _removeData: function (t, e) {
            return h(t, e, !0);
        },
    }),
        pt.fn.extend({
            data: function (t, e) {
                var i,
                    n,
                    o,
                    r = this[0],
                    s = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && ((o = pt.data(r)), 1 === r.nodeType && !pt._data(r, "parsedAttrs"))) {
                        for (i = s.length; i--; ) s[i] && ((n = s[i].name), 0 === n.indexOf("data-") && ((n = pt.camelCase(n.slice(5))), l(r, n, o[n])));
                        pt._data(r, "parsedAttrs", !0);
                    }
                    return o;
                }
                return "object" == typeof t
                    ? this.each(function () {
                          pt.data(this, t);
                      })
                    : arguments.length > 1
                    ? this.each(function () {
                          pt.data(this, t, e);
                      })
                    : r
                    ? l(r, t, pt.data(r, t))
                    : void 0;
            },
            removeData: function (t) {
                return this.each(function () {
                    pt.removeData(this, t);
                });
            },
        }),
        pt.extend({
            queue: function (t, e, i) {
                var n;
                if (t) return (e = (e || "fx") + "queue"), (n = pt._data(t, e)), i && (!n || pt.isArray(i) ? (n = pt._data(t, e, pt.makeArray(i))) : n.push(i)), n || [];
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var i = pt.queue(t, e),
                    n = i.length,
                    o = i.shift(),
                    r = pt._queueHooks(t, e),
                    s = function () {
                        pt.dequeue(t, e);
                    };
                "inprogress" === o && ((o = i.shift()), n--), o && ("fx" === e && i.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !n && r && r.empty.fire();
            },
            _queueHooks: function (t, e) {
                var i = e + "queueHooks";
                return (
                    pt._data(t, i) ||
                    pt._data(t, i, {
                        empty: pt.Callbacks("once memory").add(function () {
                            pt._removeData(t, e + "queue"), pt._removeData(t, i);
                        }),
                    })
                );
            },
        }),
        pt.fn.extend({
            queue: function (t, e) {
                var i = 2;
                return (
                    "string" != typeof t && ((e = t), (t = "fx"), i--),
                    arguments.length < i
                        ? pt.queue(this[0], t)
                        : void 0 === e
                        ? this
                        : this.each(function () {
                              var i = pt.queue(this, t, e);
                              pt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && pt.dequeue(this, t);
                          })
                );
            },
            dequeue: function (t) {
                return this.each(function () {
                    pt.dequeue(this, t);
                });
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", []);
            },
            promise: function (t, e) {
                var i,
                    n = 1,
                    o = pt.Deferred(),
                    r = this,
                    s = this.length,
                    a = function () {
                        --n || o.resolveWith(r, [r]);
                    };
                for ("string" != typeof t && ((e = t), (t = void 0)), t = t || "fx"; s--; ) (i = pt._data(r[s], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                return a(), o.promise(e);
            },
        }),
        (function () {
            var t;
            dt.shrinkWrapBlocks = function () {
                if (null != t) return t;
                t = !1;
                var e, i, n;
                return (i = ot.getElementsByTagName("body")[0]) && i.style
                    ? ((e = ot.createElement("div")),
                      (n = ot.createElement("div")),
                      (n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                      i.appendChild(n).appendChild(e),
                      void 0 !== e.style.zoom &&
                          ((e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                          (e.appendChild(ot.createElement("div")).style.width = "5px"),
                          (t = 3 !== e.offsetWidth)),
                      i.removeChild(n),
                      t)
                    : void 0;
            };
        })();
    var jt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Mt = new RegExp("^(?:([+-])=|)(" + jt + ")([a-z%]*)$", "i"),
        qt = ["Top", "Right", "Bottom", "Left"],
        Ot = function (t, e) {
            return (t = e || t), "none" === pt.css(t, "display") || !pt.contains(t.ownerDocument, t);
        },
        Ht = function (t, e, i, n, o, r, s) {
            var a = 0,
                l = t.length,
                c = null == i;
            if ("object" === pt.type(i)) {
                o = !0;
                for (a in i) Ht(t, e, a, i[a], !0, r, s);
            } else if (
                void 0 !== n &&
                ((o = !0),
                pt.isFunction(n) || (s = !0),
                c &&
                    (s
                        ? (e.call(t, n), (e = null))
                        : ((c = e),
                          (e = function (t, e, i) {
                              return c.call(pt(t), i);
                          }))),
                e)
            )
                for (; a < l; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
            return o ? t : c ? e.call(t) : l ? e(t[0], i) : r;
        },
        Ft = /^(?:checkbox|radio)$/i,
        Bt = /<([\w:-]+)/,
        Rt = /^$|\/(?:java|ecma)script/i,
        $t = /^\s+/,
        Wt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !(function () {
        var t = ot.createElement("div"),
            e = ot.createDocumentFragment(),
            i = ot.createElement("input");
        (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
            (dt.leadingWhitespace = 3 === t.firstChild.nodeType),
            (dt.tbody = !t.getElementsByTagName("tbody").length),
            (dt.htmlSerialize = !!t.getElementsByTagName("link").length),
            (dt.html5Clone = "<:nav></:nav>" !== ot.createElement("nav").cloneNode(!0).outerHTML),
            (i.type = "checkbox"),
            (i.checked = !0),
            e.appendChild(i),
            (dt.appendChecked = i.checked),
            (t.innerHTML = "<textarea>x</textarea>"),
            (dt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
            e.appendChild(t),
            (i = ot.createElement("input")),
            i.setAttribute("type", "radio"),
            i.setAttribute("checked", "checked"),
            i.setAttribute("name", "t"),
            t.appendChild(i),
            (dt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (dt.noCloneEvent = !!t.addEventListener),
            (t[pt.expando] = 1),
            (dt.attributes = !t.getAttribute(pt.expando));
    })();
    var Ut = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: dt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
    };
    (Ut.optgroup = Ut.option), (Ut.tbody = Ut.tfoot = Ut.colgroup = Ut.caption = Ut.thead), (Ut.th = Ut.td);
    var Vt = /<|&#?\w+;/,
        Xt = /<tbody/i;
    !(function () {
        var e,
            i,
            n = ot.createElement("div");
        for (e in { submit: !0, change: !0, focusin: !0 }) (i = "on" + e), (dt[e] = i in t) || (n.setAttribute(i, "t"), (dt[e] = !1 === n.attributes[i].expando));
        n = null;
    })();
    var Qt = /^(?:input|select|textarea)$/i,
        Gt = /^key/,
        Yt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Jt = /^(?:focusinfocus|focusoutblur)$/,
        Kt = /^([^.]*)(?:\.(.+)|)/;
    (pt.event = {
        global: {},
        add: function (t, e, i, n, o) {
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
                m = pt._data(t);
            if (m) {
                for (
                    i.handler && ((l = i), (i = l.handler), (o = l.selector)),
                        i.guid || (i.guid = pt.guid++),
                        (s = m.events) || (s = m.events = {}),
                        (u = m.handle) ||
                            ((u = m.handle = function (t) {
                                return void 0 === pt || (t && pt.event.triggered === t.type) ? void 0 : pt.event.dispatch.apply(u.elem, arguments);
                            }),
                            (u.elem = t)),
                        e = (e || "").match(Lt) || [""],
                        a = e.length;
                    a--;

                )
                    (r = Kt.exec(e[a]) || []),
                        (f = g = r[1]),
                        (p = (r[2] || "").split(".").sort()),
                        f &&
                            ((c = pt.event.special[f] || {}),
                            (f = (o ? c.delegateType : c.bindType) || f),
                            (c = pt.event.special[f] || {}),
                            (h = pt.extend({ type: f, origType: g, data: n, handler: i, guid: i.guid, selector: o, needsContext: o && pt.expr.match.needsContext.test(o), namespace: p.join(".") }, l)),
                            (d = s[f]) || ((d = s[f] = []), (d.delegateCount = 0), (c.setup && !1 !== c.setup.call(t, n, p, u)) || (t.addEventListener ? t.addEventListener(f, u, !1) : t.attachEvent && t.attachEvent("on" + f, u))),
                            c.add && (c.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)),
                            o ? d.splice(d.delegateCount++, 0, h) : d.push(h),
                            (pt.event.global[f] = !0));
                t = null;
            }
        },
        remove: function (t, e, i, n, o) {
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
                m = pt.hasData(t) && pt._data(t);
            if (m && (u = m.events)) {
                for (e = (e || "").match(Lt) || [""], c = e.length; c--; )
                    if (((a = Kt.exec(e[c]) || []), (f = g = a[1]), (p = (a[2] || "").split(".").sort()), f)) {
                        for (h = pt.event.special[f] || {}, f = (n ? h.delegateType : h.bindType) || f, d = u[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = d.length; r--; )
                            (s = d[r]),
                                (!o && g !== s.origType) ||
                                    (i && i.guid !== s.guid) ||
                                    (a && !a.test(s.namespace)) ||
                                    (n && n !== s.selector && ("**" !== n || !s.selector)) ||
                                    (d.splice(r, 1), s.selector && d.delegateCount--, h.remove && h.remove.call(t, s));
                        l && !d.length && ((h.teardown && !1 !== h.teardown.call(t, p, m.handle)) || pt.removeEvent(t, f, m.handle), delete u[f]);
                    } else for (f in u) pt.event.remove(t, f + e[c], i, n, !0);
                pt.isEmptyObject(u) && (delete m.handle, pt._removeData(t, "events"));
            }
        },
        trigger: function (e, i, n, o) {
            var r,
                s,
                a,
                l,
                c,
                u,
                h,
                d = [n || ot],
                f = ht.call(e, "type") ? e.type : e,
                p = ht.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
                ((a = u = n = n || ot),
                3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !Jt.test(f + pt.event.triggered) &&
                    (f.indexOf(".") > -1 && ((p = f.split(".")), (f = p.shift()), p.sort()),
                    (s = f.indexOf(":") < 0 && "on" + f),
                    (e = e[pt.expando] ? e : new pt.Event(f, "object" == typeof e && e)),
                    (e.isTrigger = o ? 2 : 3),
                    (e.namespace = p.join(".")),
                    (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (e.result = void 0),
                    e.target || (e.target = n),
                    (i = null == i ? [e] : pt.makeArray(i, [e])),
                    (c = pt.event.special[f] || {}),
                    o || !c.trigger || !1 !== c.trigger.apply(n, i)))
            ) {
                if (!o && !c.noBubble && !pt.isWindow(n)) {
                    for (l = c.delegateType || f, Jt.test(l + f) || (a = a.parentNode); a; a = a.parentNode) d.push(a), (u = a);
                    u === (n.ownerDocument || ot) && d.push(u.defaultView || u.parentWindow || t);
                }
                for (h = 0; (a = d[h++]) && !e.isPropagationStopped(); )
                    (e.type = h > 1 ? l : c.bindType || f),
                        (r = (pt._data(a, "events") || {})[e.type] && pt._data(a, "handle")),
                        r && r.apply(a, i),
                        (r = s && a[s]) && r.apply && At(a) && ((e.result = r.apply(a, i)), !1 === e.result && e.preventDefault());
                if (((e.type = f), !o && !e.isDefaultPrevented() && (!c._default || !1 === c._default.apply(d.pop(), i)) && At(n) && s && n[f] && !pt.isWindow(n))) {
                    (u = n[s]), u && (n[s] = null), (pt.event.triggered = f);
                    try {
                        n[f]();
                    } catch (t) {}
                    (pt.event.triggered = void 0), u && (n[s] = u);
                }
                return e.result;
            }
        },
        dispatch: function (t) {
            t = pt.event.fix(t);
            var e,
                i,
                n,
                o,
                r,
                s = [],
                a = rt.call(arguments),
                l = (pt._data(this, "events") || {})[t.type] || [],
                c = pt.event.special[t.type] || {};
            if (((a[0] = t), (t.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, t))) {
                for (s = pt.event.handlers.call(this, t, l), e = 0; (o = s[e++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = o.elem, i = 0; (r = o.handlers[i++]) && !t.isImmediatePropagationStopped(); )
                        (t.rnamespace && !t.rnamespace.test(r.namespace)) ||
                            ((t.handleObj = r), (t.data = r.data), void 0 !== (n = ((pt.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result;
            }
        },
        handlers: function (t, e) {
            var i,
                n,
                o,
                r,
                s = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                        for (n = [], i = 0; i < a; i++) (r = e[i]), (o = r.selector + " "), void 0 === n[o] && (n[o] = r.needsContext ? pt(o, this).index(l) > -1 : pt.find(o, this, null, [l]).length), n[o] && n.push(r);
                        n.length && s.push({ elem: l, handlers: n });
                    }
            return a < e.length && s.push({ elem: this, handlers: e.slice(a) }), s;
        },
        fix: function (t) {
            if (t[pt.expando]) return t;
            var e,
                i,
                n,
                o = t.type,
                r = t,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = Yt.test(o) ? this.mouseHooks : Gt.test(o) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new pt.Event(r), e = n.length; e--; ) (i = n[e]), (t[i] = r[i]);
            return t.target || (t.target = r.srcElement || ot), 3 === t.target.nodeType && (t.target = t.target.parentNode), (t.metaKey = !!t.metaKey), s.filter ? s.filter(t, r) : t;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t;
            },
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, e) {
                var i,
                    n,
                    o,
                    r = e.button,
                    s = e.fromElement;
                return (
                    null == t.pageX &&
                        null != e.clientX &&
                        ((n = t.target.ownerDocument || ot),
                        (o = n.documentElement),
                        (i = n.body),
                        (t.pageX = e.clientX + ((o && o.scrollLeft) || (i && i.scrollLeft) || 0) - ((o && o.clientLeft) || (i && i.clientLeft) || 0)),
                        (t.pageY = e.clientY + ((o && o.scrollTop) || (i && i.scrollTop) || 0) - ((o && o.clientTop) || (i && i.clientTop) || 0))),
                    !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s),
                    t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                    t
                );
            },
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== w() && this.focus)
                        try {
                            return this.focus(), !1;
                        } catch (t) {}
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    if (this === w() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    if (pt.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1;
                },
                _default: function (t) {
                    return pt.nodeName(t.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                },
            },
        },
        simulate: function (t, e, i) {
            var n = pt.extend(new pt.Event(), i, { type: t, isSimulated: !0 });
            pt.event.trigger(n, null, e), n.isDefaultPrevented() && i.preventDefault();
        },
    }),
        (pt.removeEvent = ot.removeEventListener
            ? function (t, e, i) {
                  t.removeEventListener && t.removeEventListener(e, i);
              }
            : function (t, e, i) {
                  var n = "on" + e;
                  t.detachEvent && (void 0 === t[n] && (t[n] = null), t.detachEvent(n, i));
              }),
        (pt.Event = function (t, e) {
            if (!(this instanceof pt.Event)) return new pt.Event(t, e);
            t && t.type ? ((this.originalEvent = t), (this.type = t.type), (this.isDefaultPrevented = t.defaultPrevented || (void 0 === t.defaultPrevented && !1 === t.returnValue) ? y : b)) : (this.type = t),
                e && pt.extend(this, e),
                (this.timeStamp = (t && t.timeStamp) || pt.now()),
                (this[pt.expando] = !0);
        }),
        (pt.Event.prototype = {
            constructor: pt.Event,
            isDefaultPrevented: b,
            isPropagationStopped: b,
            isImmediatePropagationStopped: b,
            preventDefault: function () {
                var t = this.originalEvent;
                (this.isDefaultPrevented = y), t && (t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                (this.isPropagationStopped = y), t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), (t.cancelBubble = !0));
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                (this.isImmediatePropagationStopped = y), t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        pt.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, e) {
            pt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                    var i,
                        n = this,
                        o = t.relatedTarget,
                        r = t.handleObj;
                    return (o && (o === n || pt.contains(n, o))) || ((t.type = r.origType), (i = r.handler.apply(this, arguments)), (t.type = e)), i;
                },
            };
        }),
        dt.submit ||
            (pt.event.special.submit = {
                setup: function () {
                    if (pt.nodeName(this, "form")) return !1;
                    pt.event.add(this, "click._submit keypress._submit", function (t) {
                        var e = t.target,
                            i = pt.nodeName(e, "input") || pt.nodeName(e, "button") ? pt.prop(e, "form") : void 0;
                        i &&
                            !pt._data(i, "submit") &&
                            (pt.event.add(i, "submit._submit", function (t) {
                                t._submitBubble = !0;
                            }),
                            pt._data(i, "submit", !0));
                    });
                },
                postDispatch: function (t) {
                    t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && pt.event.simulate("submit", this.parentNode, t));
                },
                teardown: function () {
                    if (pt.nodeName(this, "form")) return !1;
                    pt.event.remove(this, "._submit");
                },
            }),
        dt.change ||
            (pt.event.special.change = {
                setup: function () {
                    if (Qt.test(this.nodeName))
                        return (
                            ("checkbox" !== this.type && "radio" !== this.type) ||
                                (pt.event.add(this, "propertychange._change", function (t) {
                                    "checked" === t.originalEvent.propertyName && (this._justChanged = !0);
                                }),
                                pt.event.add(this, "click._change", function (t) {
                                    this._justChanged && !t.isTrigger && (this._justChanged = !1), pt.event.simulate("change", this, t);
                                })),
                            !1
                        );
                    pt.event.add(this, "beforeactivate._change", function (t) {
                        var e = t.target;
                        Qt.test(e.nodeName) &&
                            !pt._data(e, "change") &&
                            (pt.event.add(e, "change._change", function (t) {
                                !this.parentNode || t.isSimulated || t.isTrigger || pt.event.simulate("change", this.parentNode, t);
                            }),
                            pt._data(e, "change", !0));
                    });
                },
                handle: function (t) {
                    var e = t.target;
                    if (this !== e || t.isSimulated || t.isTrigger || ("radio" !== e.type && "checkbox" !== e.type)) return t.handleObj.handler.apply(this, arguments);
                },
                teardown: function () {
                    return pt.event.remove(this, "._change"), !Qt.test(this.nodeName);
                },
            }),
        dt.focusin ||
            pt.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
                var i = function (t) {
                    pt.event.simulate(e, t.target, pt.event.fix(t));
                };
                pt.event.special[e] = {
                    setup: function () {
                        var n = this.ownerDocument || this,
                            o = pt._data(n, e);
                        o || n.addEventListener(t, i, !0), pt._data(n, e, (o || 0) + 1);
                    },
                    teardown: function () {
                        var n = this.ownerDocument || this,
                            o = pt._data(n, e) - 1;
                        o ? pt._data(n, e, o) : (n.removeEventListener(t, i, !0), pt._removeData(n, e));
                    },
                };
            }),
        pt.fn.extend({
            on: function (t, e, i, n) {
                return x(this, t, e, i, n);
            },
            one: function (t, e, i, n) {
                return x(this, t, e, i, n, 1);
            },
            off: function (t, e, i) {
                var n, o;
                if (t && t.preventDefault && t.handleObj) return (n = t.handleObj), pt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this;
                }
                return (
                    (!1 !== e && "function" != typeof e) || ((i = e), (e = void 0)),
                    !1 === i && (i = b),
                    this.each(function () {
                        pt.event.remove(this, t, i, e);
                    })
                );
            },
            trigger: function (t, e) {
                return this.each(function () {
                    pt.event.trigger(t, e, this);
                });
            },
            triggerHandler: function (t, e) {
                var i = this[0];
                if (i) return pt.event.trigger(t, e, i, !0);
            },
        });
    var Zt = / jQuery\d+="(?:null|\d+)"/g,
        te = new RegExp("<(?:" + Wt + ")[\\s/>]", "i"),
        ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ie = /<script|<style|<link/i,
        ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        oe = /^true\/(.*)/,
        re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        se = f(ot),
        ae = se.appendChild(ot.createElement("div"));
    pt.extend({
        htmlPrefilter: function (t) {
            return t.replace(ee, "<$1></$2>");
        },
        clone: function (t, e, i) {
            var n,
                o,
                r,
                s,
                a,
                l = pt.contains(t.ownerDocument, t);
            if (
                (dt.html5Clone || pt.isXMLDoc(t) || !te.test("<" + t.nodeName + ">") ? (r = t.cloneNode(!0)) : ((ae.innerHTML = t.outerHTML), ae.removeChild((r = ae.firstChild))),
                !((dt.noCloneEvent && dt.noCloneChecked) || (1 !== t.nodeType && 11 !== t.nodeType) || pt.isXMLDoc(t)))
            )
                for (n = p(r), a = p(t), s = 0; null != (o = a[s]); ++s) n[s] && T(o, n[s]);
            if (e)
                if (i) for (a = a || p(t), n = n || p(r), s = 0; null != (o = a[s]); s++) S(o, n[s]);
                else S(t, r);
            return (n = p(r, "script")), n.length > 0 && g(n, !l && p(t, "script")), (n = a = o = null), r;
        },
        cleanData: function (t, e) {
            for (var i, n, o, r, s = 0, a = pt.expando, l = pt.cache, c = dt.attributes, u = pt.event.special; null != (i = t[s]); s++)
                if ((e || At(i)) && ((o = i[a]), (r = o && l[o]))) {
                    if (r.events) for (n in r.events) u[n] ? pt.event.remove(i, n) : pt.removeEvent(i, n, r.handle);
                    l[o] && (delete l[o], c || void 0 === i.removeAttribute ? (i[a] = void 0) : i.removeAttribute(a), nt.push(o));
                }
        },
    }),
        pt.fn.extend({
            domManip: _,
            detach: function (t) {
                return D(this, t, !0);
            },
            remove: function (t) {
                return D(this, t);
            },
            text: function (t) {
                return Ht(
                    this,
                    function (t) {
                        return void 0 === t ? pt.text(this) : this.empty().append(((this[0] && this[0].ownerDocument) || ot).createTextNode(t));
                    },
                    null,
                    t,
                    arguments.length
                );
            },
            append: function () {
                return _(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        E(this, t).appendChild(t);
                    }
                });
            },
            prepend: function () {
                return _(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = E(this, t);
                        e.insertBefore(t, e.firstChild);
                    }
                });
            },
            before: function () {
                return _(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this);
                });
            },
            after: function () {
                return _(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
                });
            },
            empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && pt.cleanData(p(t, !1)); t.firstChild; ) t.removeChild(t.firstChild);
                    t.options && pt.nodeName(t, "select") && (t.options.length = 0);
                }
                return this;
            },
            clone: function (t, e) {
                return (
                    (t = null != t && t),
                    (e = null == e ? t : e),
                    this.map(function () {
                        return pt.clone(this, t, e);
                    })
                );
            },
            html: function (t) {
                return Ht(
                    this,
                    function (t) {
                        var e = this[0] || {},
                            i = 0,
                            n = this.length;
                        if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Zt, "") : void 0;
                        if ("string" == typeof t && !ie.test(t) && (dt.htmlSerialize || !te.test(t)) && (dt.leadingWhitespace || !$t.test(t)) && !Ut[(Bt.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = pt.htmlPrefilter(t);
                            try {
                                for (; i < n; i++) (e = this[i] || {}), 1 === e.nodeType && (pt.cleanData(p(e, !1)), (e.innerHTML = t));
                                e = 0;
                            } catch (t) {}
                        }
                        e && this.empty().append(t);
                    },
                    null,
                    t,
                    arguments.length
                );
            },
            replaceWith: function () {
                var t = [];
                return _(
                    this,
                    arguments,
                    function (e) {
                        var i = this.parentNode;
                        pt.inArray(this, t) < 0 && (pt.cleanData(p(this)), i && i.replaceChild(e, this));
                    },
                    t
                );
            },
        }),
        pt.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, e) {
            pt.fn[t] = function (t) {
                for (var i, n = 0, o = [], r = pt(t), s = r.length - 1; n <= s; n++) (i = n === s ? this : this.clone(!0)), pt(r[n])[e](i), at.apply(o, i.get());
                return this.pushStack(o);
            };
        });
    var le,
        ce = { HTML: "block", BODY: "block" },
        ue = /^margin/,
        he = new RegExp("^(" + jt + ")(?!px)[a-z%]+$", "i"),
        de = function (t, e, i, n) {
            var o,
                r,
                s = {};
            for (r in e) (s[r] = t.style[r]), (t.style[r] = e[r]);
            o = i.apply(t, n || []);
            for (r in e) t.style[r] = s[r];
            return o;
        },
        fe = ot.documentElement;
    !(function () {
        function e() {
            var e,
                u,
                h = ot.documentElement;
            h.appendChild(l),
                (c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
                (i = o = a = !1),
                (n = s = !0),
                t.getComputedStyle &&
                    ((u = t.getComputedStyle(c)),
                    (i = "1%" !== (u || {}).top),
                    (a = "2px" === (u || {}).marginLeft),
                    (o = "4px" === (u || { width: "4px" }).width),
                    (c.style.marginRight = "50%"),
                    (n = "4px" === (u || { marginRight: "4px" }).marginRight),
                    (e = c.appendChild(ot.createElement("div"))),
                    (e.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                    (e.style.marginRight = e.style.width = "0"),
                    (c.style.width = "1px"),
                    (s = !parseFloat((t.getComputedStyle(e) || {}).marginRight)),
                    c.removeChild(e)),
                (c.style.display = "none"),
                (r = 0 === c.getClientRects().length),
                r &&
                    ((c.style.display = ""),
                    (c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
                    (e = c.getElementsByTagName("td")),
                    (e[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
                    (r = 0 === e[0].offsetHeight) && ((e[0].style.display = ""), (e[1].style.display = "none"), (r = 0 === e[0].offsetHeight))),
                h.removeChild(l);
        }
        var i,
            n,
            o,
            r,
            s,
            a,
            l = ot.createElement("div"),
            c = ot.createElement("div");
        c.style &&
            ((c.style.cssText = "float:left;opacity:.5"),
            (dt.opacity = "0.5" === c.style.opacity),
            (dt.cssFloat = !!c.style.cssFloat),
            (c.style.backgroundClip = "content-box"),
            (c.cloneNode(!0).style.backgroundClip = ""),
            (dt.clearCloneStyle = "content-box" === c.style.backgroundClip),
            (l = ot.createElement("div")),
            (l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
            (c.innerHTML = ""),
            l.appendChild(c),
            (dt.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing),
            pt.extend(dt, {
                reliableHiddenOffsets: function () {
                    return null == i && e(), r;
                },
                boxSizingReliable: function () {
                    return null == i && e(), o;
                },
                pixelMarginRight: function () {
                    return null == i && e(), n;
                },
                pixelPosition: function () {
                    return null == i && e(), i;
                },
                reliableMarginRight: function () {
                    return null == i && e(), s;
                },
                reliableMarginLeft: function () {
                    return null == i && e(), a;
                },
            }));
    })();
    var pe,
        ge,
        me = /^(top|right|bottom|left)$/;
    t.getComputedStyle
        ? ((pe = function (e) {
              var i = e.ownerDocument.defaultView;
              return i.opener || (i = t), i.getComputedStyle(e);
          }),
          (ge = function (t, e, i) {
              var n,
                  o,
                  r,
                  s,
                  a = t.style;
              return (
                  (i = i || pe(t)),
                  (s = i ? i.getPropertyValue(e) || i[e] : void 0),
                  i &&
                      ("" !== s || pt.contains(t.ownerDocument, t) || (s = pt.style(t, e)),
                      !dt.pixelMarginRight() && he.test(s) && ue.test(e) && ((n = a.width), (o = a.minWidth), (r = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = i.width), (a.width = n), (a.minWidth = o), (a.maxWidth = r))),
                  void 0 === s ? s : s + ""
              );
          }))
        : fe.currentStyle &&
          ((pe = function (t) {
              return t.currentStyle;
          }),
          (ge = function (t, e, i) {
              var n,
                  o,
                  r,
                  s,
                  a = t.style;
              return (
                  (i = i || pe(t)),
                  (s = i ? i[e] : void 0),
                  null == s && a && a[e] && (s = a[e]),
                  he.test(s) && !me.test(e) && ((n = a.left), (o = t.runtimeStyle), (r = o && o.left), r && (o.left = t.currentStyle.left), (a.left = "fontSize" === e ? "1em" : s), (s = a.pixelLeft + "px"), (a.left = n), r && (o.left = r)),
                  void 0 === s ? s : s + "" || "auto"
              );
          }));
    var ve = /alpha\([^)]*\)/i,
        ye = /opacity\s*=\s*([^)]*)/i,
        be = /^(none|table(?!-c[ea]).+)/,
        we = new RegExp("^(" + jt + ")(.*)$", "i"),
        xe = { position: "absolute", visibility: "hidden", display: "block" },
        Ee = { letterSpacing: "0", fontWeight: "400" },
        ke = ["Webkit", "O", "Moz", "ms"],
        Ce = ot.createElement("div").style;
    pt.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = ge(t, "opacity");
                        return "" === i ? "1" : i;
                    }
                },
            },
        },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { float: dt.cssFloat ? "cssFloat" : "styleFloat" },
        style: function (t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o,
                    r,
                    s,
                    a = pt.camelCase(e),
                    l = t.style;
                if (((e = pt.cssProps[a] || (pt.cssProps[a] = A(a) || a)), (s = pt.cssHooks[e] || pt.cssHooks[a]), void 0 === i)) return s && "get" in s && void 0 !== (o = s.get(t, !1, n)) ? o : l[e];
                if (
                    ((r = typeof i),
                    "string" === r && (o = Mt.exec(i)) && o[1] && ((i = d(t, e, o)), (r = "number")),
                    null != i &&
                        i === i &&
                        ("number" === r && (i += (o && o[3]) || (pt.cssNumber[a] ? "" : "px")), dt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (i = s.set(t, i, n)))))
                )
                    try {
                        l[e] = i;
                    } catch (t) {}
            }
        },
        css: function (t, e, i, n) {
            var o,
                r,
                s,
                a = pt.camelCase(e);
            return (
                (e = pt.cssProps[a] || (pt.cssProps[a] = A(a) || a)),
                (s = pt.cssHooks[e] || pt.cssHooks[a]),
                s && "get" in s && (r = s.get(t, !0, i)),
                void 0 === r && (r = ge(t, e, n)),
                "normal" === r && e in Ee && (r = Ee[e]),
                "" === i || i ? ((o = parseFloat(r)), !0 === i || isFinite(o) ? o || 0 : r) : r
            );
        },
    }),
        pt.each(["height", "width"], function (t, e) {
            pt.cssHooks[e] = {
                get: function (t, i, n) {
                    if (i)
                        return be.test(pt.css(t, "display")) && 0 === t.offsetWidth
                            ? de(t, xe, function () {
                                  return M(t, e, n);
                              })
                            : M(t, e, n);
                },
                set: function (t, i, n) {
                    var o = n && pe(t);
                    return N(t, i, n ? j(t, e, n, dt.boxSizing && "border-box" === pt.css(t, "boxSizing", !1, o), o) : 0);
                },
            };
        }),
        dt.opacity ||
            (pt.cssHooks.opacity = {
                get: function (t, e) {
                    return ye.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : e ? "1" : "";
                },
                set: function (t, e) {
                    var i = t.style,
                        n = t.currentStyle,
                        o = pt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                        r = (n && n.filter) || i.filter || "";
                    (i.zoom = 1), ((e >= 1 || "" === e) && "" === pt.trim(r.replace(ve, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || (n && !n.filter))) || (i.filter = ve.test(r) ? r.replace(ve, o) : r + " " + o);
                },
            }),
        (pt.cssHooks.marginRight = P(dt.reliableMarginRight, function (t, e) {
            if (e) return de(t, { display: "inline-block" }, ge, [t, "marginRight"]);
        })),
        (pt.cssHooks.marginLeft = P(dt.reliableMarginLeft, function (t, e) {
            if (e)
                return (
                    (parseFloat(ge(t, "marginLeft")) ||
                        (pt.contains(t.ownerDocument, t)
                            ? t.getBoundingClientRect().left -
                              de(t, { marginLeft: 0 }, function () {
                                  return t.getBoundingClientRect().left;
                              })
                            : 0)) + "px"
                );
        })),
        pt.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
            (pt.cssHooks[t + e] = {
                expand: function (i) {
                    for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) o[t + qt[n] + e] = r[n] || r[n - 2] || r[0];
                    return o;
                },
            }),
                ue.test(t) || (pt.cssHooks[t + e].set = N);
        }),
        pt.fn.extend({
            css: function (t, e) {
                return Ht(
                    this,
                    function (t, e, i) {
                        var n,
                            o,
                            r = {},
                            s = 0;
                        if (pt.isArray(e)) {
                            for (n = pe(t), o = e.length; s < o; s++) r[e[s]] = pt.css(t, e[s], !1, n);
                            return r;
                        }
                        return void 0 !== i ? pt.style(t, e, i) : pt.css(t, e);
                    },
                    t,
                    e,
                    arguments.length > 1
                );
            },
            show: function () {
                return z(this, !0);
            },
            hide: function () {
                return z(this);
            },
            toggle: function (t) {
                return "boolean" == typeof t
                    ? t
                        ? this.show()
                        : this.hide()
                    : this.each(function () {
                          Ot(this) ? pt(this).show() : pt(this).hide();
                      });
            },
        }),
        (pt.Tween = q),
        (q.prototype = {
            constructor: q,
            init: function (t, e, i, n, o, r) {
                (this.elem = t), (this.prop = i), (this.easing = o || pt.easing._default), (this.options = e), (this.start = this.now = this.cur()), (this.end = n), (this.unit = r || (pt.cssNumber[i] ? "" : "px"));
            },
            cur: function () {
                var t = q.propHooks[this.prop];
                return t && t.get ? t.get(this) : q.propHooks._default.get(this);
            },
            run: function (t) {
                var e,
                    i = q.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = e = pt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration)) : (this.pos = e = t),
                    (this.now = (this.end - this.start) * e + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    i && i.set ? i.set(this) : q.propHooks._default.set(this),
                    this
                );
            },
        }),
        (q.prototype.init.prototype = q.prototype),
        (q.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || (null != t.elem[t.prop] && null == t.elem.style[t.prop]) ? t.elem[t.prop] : ((e = pt.css(t.elem, t.prop, "")), e && "auto" !== e ? e : 0);
                },
                set: function (t) {
                    pt.fx.step[t.prop] ? pt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || (null == t.elem.style[pt.cssProps[t.prop]] && !pt.cssHooks[t.prop]) ? (t.elem[t.prop] = t.now) : pt.style(t.elem, t.prop, t.now + t.unit);
                },
            },
        }),
        (q.propHooks.scrollTop = q.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
            },
        }),
        (pt.easing = {
            linear: function (t) {
                return t;
            },
            swing: function (t) {
                return 0.5 - Math.cos(t * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (pt.fx = q.prototype.init),
        (pt.fx.step = {});
    var Se,
        Te,
        _e = /^(?:toggle|show|hide)$/,
        De = /queueHooks$/;
    (pt.Animation = pt.extend(W, {
        tweeners: {
            "*": [
                function (t, e) {
                    var i = this.createTween(t, e);
                    return d(i.elem, t, Mt.exec(e), i), i;
                },
            ],
        },
        tweener: function (t, e) {
            pt.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.match(Lt));
            for (var i, n = 0, o = t.length; n < o; n++) (i = t[n]), (W.tweeners[i] = W.tweeners[i] || []), W.tweeners[i].unshift(e);
        },
        prefilters: [B],
        prefilter: function (t, e) {
            e ? W.prefilters.unshift(t) : W.prefilters.push(t);
        },
    })),
        (pt.speed = function (t, e, i) {
            var n = t && "object" == typeof t ? pt.extend({}, t) : { complete: i || (!i && e) || (pt.isFunction(t) && t), duration: t, easing: (i && e) || (e && !pt.isFunction(e) && e) };
            return (
                (n.duration = pt.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in pt.fx.speeds ? pt.fx.speeds[n.duration] : pt.fx.speeds._default),
                (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
                (n.old = n.complete),
                (n.complete = function () {
                    pt.isFunction(n.old) && n.old.call(this), n.queue && pt.dequeue(this, n.queue);
                }),
                n
            );
        }),
        pt.fn.extend({
            fadeTo: function (t, e, i, n) {
                return this.filter(Ot).css("opacity", 0).show().end().animate({ opacity: e }, t, i, n);
            },
            animate: function (t, e, i, n) {
                var o = pt.isEmptyObject(t),
                    r = pt.speed(e, i, n),
                    s = function () {
                        var e = W(this, pt.extend({}, t), r);
                        (o || pt._data(this, "finish")) && e.stop(!0);
                    };
                return (s.finish = s), o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
            },
            stop: function (t, e, i) {
                var n = function (t) {
                    var e = t.stop;
                    delete t.stop, e(i);
                };
                return (
                    "string" != typeof t && ((i = e), (e = t), (t = void 0)),
                    e && !1 !== t && this.queue(t || "fx", []),
                    this.each(function () {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            r = pt.timers,
                            s = pt._data(this);
                        if (o) s[o] && s[o].stop && n(s[o]);
                        else for (o in s) s[o] && s[o].stop && De.test(o) && n(s[o]);
                        for (o = r.length; o--; ) r[o].elem !== this || (null != t && r[o].queue !== t) || (r[o].anim.stop(i), (e = !1), r.splice(o, 1));
                        (!e && i) || pt.dequeue(this, t);
                    })
                );
            },
            finish: function (t) {
                return (
                    !1 !== t && (t = t || "fx"),
                    this.each(function () {
                        var e,
                            i = pt._data(this),
                            n = i[t + "queue"],
                            o = i[t + "queueHooks"],
                            r = pt.timers,
                            s = n ? n.length : 0;
                        for (i.finish = !0, pt.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--; ) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; e < s; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish;
                    })
                );
            },
        }),
        pt.each(["toggle", "show", "hide"], function (t, e) {
            var i = pt.fn[e];
            pt.fn[e] = function (t, n, o) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(H(e, !0), t, n, o);
            };
        }),
        pt.each({ slideDown: H("show"), slideUp: H("hide"), slideToggle: H("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, e) {
            pt.fn[t] = function (t, i, n) {
                return this.animate(e, t, i, n);
            };
        }),
        (pt.timers = []),
        (pt.fx.tick = function () {
            var t,
                e = pt.timers,
                i = 0;
            for (Se = pt.now(); i < e.length; i++) (t = e[i])() || e[i] !== t || e.splice(i--, 1);
            e.length || pt.fx.stop(), (Se = void 0);
        }),
        (pt.fx.timer = function (t) {
            pt.timers.push(t), t() ? pt.fx.start() : pt.timers.pop();
        }),
        (pt.fx.interval = 13),
        (pt.fx.start = function () {
            Te || (Te = t.setInterval(pt.fx.tick, pt.fx.interval));
        }),
        (pt.fx.stop = function () {
            t.clearInterval(Te), (Te = null);
        }),
        (pt.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (pt.fn.delay = function (e, i) {
            return (
                (e = pt.fx ? pt.fx.speeds[e] || e : e),
                (i = i || "fx"),
                this.queue(i, function (i, n) {
                    var o = t.setTimeout(i, e);
                    n.stop = function () {
                        t.clearTimeout(o);
                    };
                })
            );
        }),
        (function () {
            var t,
                e = ot.createElement("input"),
                i = ot.createElement("div"),
                n = ot.createElement("select"),
                o = n.appendChild(ot.createElement("option"));
            (i = ot.createElement("div")),
                i.setAttribute("className", "t"),
                (i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
                (t = i.getElementsByTagName("a")[0]),
                e.setAttribute("type", "checkbox"),
                i.appendChild(e),
                (t = i.getElementsByTagName("a")[0]),
                (t.style.cssText = "top:1px"),
                (dt.getSetAttribute = "t" !== i.className),
                (dt.style = /top/.test(t.getAttribute("style"))),
                (dt.hrefNormalized = "/a" === t.getAttribute("href")),
                (dt.checkOn = !!e.value),
                (dt.optSelected = o.selected),
                (dt.enctype = !!ot.createElement("form").enctype),
                (n.disabled = !0),
                (dt.optDisabled = !o.disabled),
                (e = ot.createElement("input")),
                e.setAttribute("value", ""),
                (dt.input = "" === e.getAttribute("value")),
                (e.value = "t"),
                e.setAttribute("type", "radio"),
                (dt.radioValue = "t" === e.value);
        })();
    var Le = /\r/g;
    pt.fn.extend({
        val: function (t) {
            var e,
                i,
                n,
                o = this[0];
            {
                if (arguments.length)
                    return (
                        (n = pt.isFunction(t)),
                        this.each(function (i) {
                            var o;
                            1 === this.nodeType &&
                                ((o = n ? t.call(this, i, pt(this).val()) : t),
                                null == o
                                    ? (o = "")
                                    : "number" == typeof o
                                    ? (o += "")
                                    : pt.isArray(o) &&
                                      (o = pt.map(o, function (t) {
                                          return null == t ? "" : t + "";
                                      })),
                                ((e = pt.valHooks[this.type] || pt.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value")) || (this.value = o));
                        })
                    );
                if (o) return (e = pt.valHooks[o.type] || pt.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : ((i = o.value), "string" == typeof i ? i.replace(Le, "") : null == i ? "" : i);
            }
        },
    }),
        pt.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = pt.find.attr(t, "value");
                        return null != e ? e : pt.trim(pt.text(t));
                    },
                },
                select: {
                    get: function (t) {
                        for (var e, i, n = t.options, o = t.selectedIndex, r = "select-one" === t.type || o < 0, s = r ? null : [], a = r ? o + 1 : n.length, l = o < 0 ? a : r ? o : 0; l < a; l++)
                            if (((i = n[l]), (i.selected || l === o) && (dt.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !pt.nodeName(i.parentNode, "optgroup")))) {
                                if (((e = pt(i).val()), r)) return e;
                                s.push(e);
                            }
                        return s;
                    },
                    set: function (t, e) {
                        for (var i, n, o = t.options, r = pt.makeArray(e), s = o.length; s--; )
                            if (((n = o[s]), pt.inArray(pt.valHooks.option.get(n), r) >= 0))
                                try {
                                    n.selected = i = !0;
                                } catch (t) {
                                    n.scrollHeight;
                                }
                            else n.selected = !1;
                        return i || (t.selectedIndex = -1), o;
                    },
                },
            },
        }),
        pt.each(["radio", "checkbox"], function () {
            (pt.valHooks[this] = {
                set: function (t, e) {
                    if (pt.isArray(e)) return (t.checked = pt.inArray(pt(t).val(), e) > -1);
                },
            }),
                dt.checkOn ||
                    (pt.valHooks[this].get = function (t) {
                        return null === t.getAttribute("value") ? "on" : t.value;
                    });
        });
    var Ie,
        Pe,
        Ae = pt.expr.attrHandle,
        ze = /^(?:checked|selected)$/i,
        Ne = dt.getSetAttribute,
        je = dt.input;
    pt.fn.extend({
        attr: function (t, e) {
            return Ht(this, pt.attr, t, e, arguments.length > 1);
        },
        removeAttr: function (t) {
            return this.each(function () {
                pt.removeAttr(this, t);
            });
        },
    }),
        pt.extend({
            attr: function (t, e, i) {
                var n,
                    o,
                    r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                    return void 0 === t.getAttribute
                        ? pt.prop(t, e, i)
                        : ((1 === r && pt.isXMLDoc(t)) || ((e = e.toLowerCase()), (o = pt.attrHooks[e] || (pt.expr.match.bool.test(e) ? Pe : Ie))),
                          void 0 !== i
                              ? null === i
                                  ? void pt.removeAttr(t, e)
                                  : o && "set" in o && void 0 !== (n = o.set(t, i, e))
                                  ? n
                                  : (t.setAttribute(e, i + ""), i)
                              : o && "get" in o && null !== (n = o.get(t, e))
                              ? n
                              : ((n = pt.find.attr(t, e)), null == n ? void 0 : n));
            },
            attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!dt.radioValue && "radio" === e && pt.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e;
                        }
                    },
                },
            },
            removeAttr: function (t, e) {
                var i,
                    n,
                    o = 0,
                    r = e && e.match(Lt);
                if (r && 1 === t.nodeType)
                    for (; (i = r[o++]); ) (n = pt.propFix[i] || i), pt.expr.match.bool.test(i) ? ((je && Ne) || !ze.test(i) ? (t[n] = !1) : (t[pt.camelCase("default-" + i)] = t[n] = !1)) : pt.attr(t, i, ""), t.removeAttribute(Ne ? i : n);
            },
        }),
        (Pe = {
            set: function (t, e, i) {
                return !1 === e ? pt.removeAttr(t, i) : (je && Ne) || !ze.test(i) ? t.setAttribute((!Ne && pt.propFix[i]) || i, i) : (t[pt.camelCase("default-" + i)] = t[i] = !0), i;
            },
        }),
        pt.each(pt.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var i = Ae[e] || pt.find.attr;
            (je && Ne) || !ze.test(e)
                ? (Ae[e] = function (t, e, n) {
                      var o, r;
                      return n || ((r = Ae[e]), (Ae[e] = o), (o = null != i(t, e, n) ? e.toLowerCase() : null), (Ae[e] = r)), o;
                  })
                : (Ae[e] = function (t, e, i) {
                      if (!i) return t[pt.camelCase("default-" + e)] ? e.toLowerCase() : null;
                  });
        }),
        (je && Ne) ||
            (pt.attrHooks.value = {
                set: function (t, e, i) {
                    if (!pt.nodeName(t, "input")) return Ie && Ie.set(t, e, i);
                    t.defaultValue = e;
                },
            }),
        Ne ||
            ((Ie = {
                set: function (t, e, i) {
                    var n = t.getAttributeNode(i);
                    if ((n || t.setAttributeNode((n = t.ownerDocument.createAttribute(i))), (n.value = e += ""), "value" === i || e === t.getAttribute(i))) return e;
                },
            }),
            (Ae.id = Ae.name = Ae.coords = function (t, e, i) {
                var n;
                if (!i) return (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null;
            }),
            (pt.valHooks.button = {
                get: function (t, e) {
                    var i = t.getAttributeNode(e);
                    if (i && i.specified) return i.value;
                },
                set: Ie.set,
            }),
            (pt.attrHooks.contenteditable = {
                set: function (t, e, i) {
                    Ie.set(t, "" !== e && e, i);
                },
            }),
            pt.each(["width", "height"], function (t, e) {
                pt.attrHooks[e] = {
                    set: function (t, i) {
                        if ("" === i) return t.setAttribute(e, "auto"), i;
                    },
                };
            })),
        dt.style ||
            (pt.attrHooks.style = {
                get: function (t) {
                    return t.style.cssText || void 0;
                },
                set: function (t, e) {
                    return (t.style.cssText = e + "");
                },
            });
    var Me = /^(?:input|select|textarea|button|object)$/i,
        qe = /^(?:a|area)$/i;
    pt.fn.extend({
        prop: function (t, e) {
            return Ht(this, pt.prop, t, e, arguments.length > 1);
        },
        removeProp: function (t) {
            return (
                (t = pt.propFix[t] || t),
                this.each(function () {
                    try {
                        (this[t] = void 0), delete this[t];
                    } catch (t) {}
                })
            );
        },
    }),
        pt.extend({
            prop: function (t, e, i) {
                var n,
                    o,
                    r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                    return (
                        (1 === r && pt.isXMLDoc(t)) || ((e = pt.propFix[e] || e), (o = pt.propHooks[e])),
                        void 0 !== i ? (o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t[e] = i)) : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = pt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Me.test(t.nodeName) || (qe.test(t.nodeName) && t.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        dt.hrefNormalized ||
            pt.each(["href", "src"], function (t, e) {
                pt.propHooks[e] = {
                    get: function (t) {
                        return t.getAttribute(e, 4);
                    },
                };
            }),
        dt.optSelected ||
            (pt.propHooks.selected = {
                get: function (t) {
                    var e = t.parentNode;
                    return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null;
                },
            }),
        pt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            pt.propFix[this.toLowerCase()] = this;
        }),
        dt.enctype || (pt.propFix.enctype = "encoding");
    var Oe = /[\t\r\n\f]/g;
    pt.fn.extend({
        addClass: function (t) {
            var e,
                i,
                n,
                o,
                r,
                s,
                a,
                l = 0;
            if (pt.isFunction(t))
                return this.each(function (e) {
                    pt(this).addClass(t.call(this, e, U(this)));
                });
            if ("string" == typeof t && t)
                for (e = t.match(Lt) || []; (i = this[l++]); )
                    if (((o = U(i)), (n = 1 === i.nodeType && (" " + o + " ").replace(Oe, " ")))) {
                        for (s = 0; (r = e[s++]); ) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        (a = pt.trim(n)), o !== a && pt.attr(i, "class", a);
                    }
            return this;
        },
        removeClass: function (t) {
            var e,
                i,
                n,
                o,
                r,
                s,
                a,
                l = 0;
            if (pt.isFunction(t))
                return this.each(function (e) {
                    pt(this).removeClass(t.call(this, e, U(this)));
                });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(Lt) || []; (i = this[l++]); )
                    if (((o = U(i)), (n = 1 === i.nodeType && (" " + o + " ").replace(Oe, " ")))) {
                        for (s = 0; (r = e[s++]); ) for (; n.indexOf(" " + r + " ") > -1; ) n = n.replace(" " + r + " ", " ");
                        (a = pt.trim(n)), o !== a && pt.attr(i, "class", a);
                    }
            return this;
        },
        toggleClass: function (t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i
                ? e
                    ? this.addClass(t)
                    : this.removeClass(t)
                : pt.isFunction(t)
                ? this.each(function (i) {
                      pt(this).toggleClass(t.call(this, i, U(this), e), e);
                  })
                : this.each(function () {
                      var e, n, o, r;
                      if ("string" === i) for (n = 0, o = pt(this), r = t.match(Lt) || []; (e = r[n++]); ) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                      else (void 0 !== t && "boolean" !== i) || ((e = U(this)), e && pt._data(this, "__className__", e), pt.attr(this, "class", e || !1 === t ? "" : pt._data(this, "__className__") || ""));
                  });
        },
        hasClass: function (t) {
            var e,
                i,
                n = 0;
            for (e = " " + t + " "; (i = this[n++]); ) if (1 === i.nodeType && (" " + U(i) + " ").replace(Oe, " ").indexOf(e) > -1) return !0;
            return !1;
        },
    }),
        pt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (
            t,
            e
        ) {
            pt.fn[e] = function (t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e);
            };
        }),
        pt.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t);
            },
        });
    var He = t.location,
        Fe = pt.now(),
        Be = /\?/,
        Re = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    (pt.parseJSON = function (e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var i,
            n = null,
            o = pt.trim(e + "");
        return o &&
            !pt.trim(
                o.replace(Re, function (t, e, o, r) {
                    return i && e && (n = 0), 0 === n ? t : ((i = o || e), (n += !r - !o), "");
                })
            )
            ? Function("return " + o)()
            : pt.error("Invalid JSON: " + e);
    }),
        (pt.parseXML = function (e) {
            var i, n;
            if (!e || "string" != typeof e) return null;
            try {
                t.DOMParser ? ((n = new t.DOMParser()), (i = n.parseFromString(e, "text/xml"))) : ((i = new t.ActiveXObject("Microsoft.XMLDOM")), (i.async = "false"), i.loadXML(e));
            } catch (t) {
                i = void 0;
            }
            return (i && i.documentElement && !i.getElementsByTagName("parsererror").length) || pt.error("Invalid XML: " + e), i;
        });
    var $e = /#.*$/,
        We = /([?&])_=[^&]*/,
        Ue = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ve = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Xe = /^(?:GET|HEAD)$/,
        Qe = /^\/\//,
        Ge = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ye = {},
        Je = {},
        Ke = "*/".concat("*"),
        Ze = He.href,
        ti = Ge.exec(Ze.toLowerCase()) || [];
    pt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ze,
            type: "GET",
            isLocal: Ve.test(ti[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: { "*": Ke, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
            converters: { "* text": String, "text html": !0, "text json": pt.parseJSON, "text xml": pt.parseXML },
            flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (t, e) {
            return e ? Q(Q(t, pt.ajaxSettings), e) : Q(pt.ajaxSettings, t);
        },
        ajaxPrefilter: V(Ye),
        ajaxTransport: V(Je),
        ajax: function (e, i) {
            function n(e, i, n, o) {
                var r,
                    h,
                    y,
                    b,
                    x,
                    k = i;
                2 !== w &&
                    ((w = 2),
                    l && t.clearTimeout(l),
                    (u = void 0),
                    (a = o || ""),
                    (E.readyState = e > 0 ? 4 : 0),
                    (r = (e >= 200 && e < 300) || 304 === e),
                    n && (b = G(d, E, n)),
                    (b = Y(d, b, E, r)),
                    r
                        ? (d.ifModified && ((x = E.getResponseHeader("Last-Modified")), x && (pt.lastModified[s] = x), (x = E.getResponseHeader("etag")) && (pt.etag[s] = x)),
                          204 === e || "HEAD" === d.type ? (k = "nocontent") : 304 === e ? (k = "notmodified") : ((k = b.state), (h = b.data), (y = b.error), (r = !y)))
                        : ((y = k), (!e && k) || ((k = "error"), e < 0 && (e = 0))),
                    (E.status = e),
                    (E.statusText = (i || k) + ""),
                    r ? g.resolveWith(f, [h, k, E]) : g.rejectWith(f, [E, k, y]),
                    E.statusCode(v),
                    (v = void 0),
                    c && p.trigger(r ? "ajaxSuccess" : "ajaxError", [E, d, r ? h : y]),
                    m.fireWith(f, [E, k]),
                    c && (p.trigger("ajaxComplete", [E, d]), --pt.active || pt.event.trigger("ajaxStop")));
            }
            "object" == typeof e && ((i = e), (e = void 0)), (i = i || {});
            var o,
                r,
                s,
                a,
                l,
                c,
                u,
                h,
                d = pt.ajaxSetup({}, i),
                f = d.context || d,
                p = d.context && (f.nodeType || f.jquery) ? pt(f) : pt.event,
                g = pt.Deferred(),
                m = pt.Callbacks("once memory"),
                v = d.statusCode || {},
                y = {},
                b = {},
                w = 0,
                x = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (2 === w) {
                            if (!h) for (h = {}; (e = Ue.exec(a)); ) h[e[1].toLowerCase()] = e[2];
                            e = h[t.toLowerCase()];
                        }
                        return null == e ? null : e;
                    },
                    getAllResponseHeaders: function () {
                        return 2 === w ? a : null;
                    },
                    setRequestHeader: function (t, e) {
                        var i = t.toLowerCase();
                        return w || ((t = b[i] = b[i] || t), (y[t] = e)), this;
                    },
                    overrideMimeType: function (t) {
                        return w || (d.mimeType = t), this;
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (w < 2) for (e in t) v[e] = [v[e], t[e]];
                            else E.always(t[E.status]);
                        return this;
                    },
                    abort: function (t) {
                        var e = t || x;
                        return u && u.abort(e), n(0, e), this;
                    },
                };
            if (
                ((g.promise(E).complete = m.add),
                (E.success = E.done),
                (E.error = E.fail),
                (d.url = ((e || d.url || Ze) + "").replace($e, "").replace(Qe, ti[1] + "//")),
                (d.type = i.method || i.type || d.method || d.type),
                (d.dataTypes = pt
                    .trim(d.dataType || "*")
                    .toLowerCase()
                    .match(Lt) || [""]),
                null == d.crossDomain && ((o = Ge.exec(d.url.toLowerCase())), (d.crossDomain = !(!o || (o[1] === ti[1] && o[2] === ti[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (ti[3] || ("http:" === ti[1] ? "80" : "443")))))),
                d.data && d.processData && "string" != typeof d.data && (d.data = pt.param(d.data, d.traditional)),
                X(Ye, d, i, E),
                2 === w)
            )
                return E;
            (c = pt.event && d.global),
                c && 0 == pt.active++ && pt.event.trigger("ajaxStart"),
                (d.type = d.type.toUpperCase()),
                (d.hasContent = !Xe.test(d.type)),
                (s = d.url),
                d.hasContent || (d.data && ((s = d.url += (Be.test(s) ? "&" : "?") + d.data), delete d.data), !1 === d.cache && (d.url = We.test(s) ? s.replace(We, "$1_=" + Fe++) : s + (Be.test(s) ? "&" : "?") + "_=" + Fe++)),
                d.ifModified && (pt.lastModified[s] && E.setRequestHeader("If-Modified-Since", pt.lastModified[s]), pt.etag[s] && E.setRequestHeader("If-None-Match", pt.etag[s])),
                ((d.data && d.hasContent && !1 !== d.contentType) || i.contentType) && E.setRequestHeader("Content-Type", d.contentType),
                E.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ke + "; q=0.01" : "") : d.accepts["*"]);
            for (r in d.headers) E.setRequestHeader(r, d.headers[r]);
            if (d.beforeSend && (!1 === d.beforeSend.call(f, E, d) || 2 === w)) return E.abort();
            x = "abort";
            for (r in { success: 1, error: 1, complete: 1 }) E[r](d[r]);
            if ((u = X(Je, d, i, E))) {
                if (((E.readyState = 1), c && p.trigger("ajaxSend", [E, d]), 2 === w)) return E;
                d.async &&
                    d.timeout > 0 &&
                    (l = t.setTimeout(function () {
                        E.abort("timeout");
                    }, d.timeout));
                try {
                    (w = 1), u.send(y, n);
                } catch (t) {
                    if (!(w < 2)) throw t;
                    n(-1, t);
                }
            } else n(-1, "No Transport");
            return E;
        },
        getJSON: function (t, e, i) {
            return pt.get(t, e, i, "json");
        },
        getScript: function (t, e) {
            return pt.get(t, void 0, e, "script");
        },
    }),
        pt.each(["get", "post"], function (t, e) {
            pt[e] = function (t, i, n, o) {
                return pt.isFunction(i) && ((o = o || n), (n = i), (i = void 0)), pt.ajax(pt.extend({ url: t, type: e, dataType: o, data: i, success: n }, pt.isPlainObject(t) && t));
            };
        }),
        (pt._evalUrl = function (t) {
            return pt.ajax({ url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
        }),
        pt.fn.extend({
            wrapAll: function (t) {
                if (pt.isFunction(t))
                    return this.each(function (e) {
                        pt(this).wrapAll(t.call(this, e));
                    });
                if (this[0]) {
                    var e = pt(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]),
                        e
                            .map(function () {
                                for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; ) t = t.firstChild;
                                return t;
                            })
                            .append(this);
                }
                return this;
            },
            wrapInner: function (t) {
                return pt.isFunction(t)
                    ? this.each(function (e) {
                          pt(this).wrapInner(t.call(this, e));
                      })
                    : this.each(function () {
                          var e = pt(this),
                              i = e.contents();
                          i.length ? i.wrapAll(t) : e.append(t);
                      });
            },
            wrap: function (t) {
                var e = pt.isFunction(t);
                return this.each(function (i) {
                    pt(this).wrapAll(e ? t.call(this, i) : t);
                });
            },
            unwrap: function () {
                return this.parent()
                    .each(function () {
                        pt.nodeName(this, "body") || pt(this).replaceWith(this.childNodes);
                    })
                    .end();
            },
        }),
        (pt.expr.filters.hidden = function (t) {
            return dt.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : K(t);
        }),
        (pt.expr.filters.visible = function (t) {
            return !pt.expr.filters.hidden(t);
        });
    var ei = /%20/g,
        ii = /\[\]$/,
        ni = /\r?\n/g,
        oi = /^(?:submit|button|image|reset|file)$/i,
        ri = /^(?:input|select|textarea|keygen)/i;
    (pt.param = function (t, e) {
        var i,
            n = [],
            o = function (t, e) {
                (e = pt.isFunction(e) ? e() : null == e ? "" : e), (n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
            };
        if ((void 0 === e && (e = pt.ajaxSettings && pt.ajaxSettings.traditional), pt.isArray(t) || (t.jquery && !pt.isPlainObject(t))))
            pt.each(t, function () {
                o(this.name, this.value);
            });
        else for (i in t) Z(i, t[i], e, o);
        return n.join("&").replace(ei, "+");
    }),
        pt.fn.extend({
            serialize: function () {
                return pt.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var t = pt.prop(this, "elements");
                    return t ? pt.makeArray(t) : this;
                })
                    .filter(function () {
                        var t = this.type;
                        return this.name && !pt(this).is(":disabled") && ri.test(this.nodeName) && !oi.test(t) && (this.checked || !Ft.test(t));
                    })
                    .map(function (t, e) {
                        var i = pt(this).val();
                        return null == i
                            ? null
                            : pt.isArray(i)
                            ? pt.map(i, function (t) {
                                  return { name: e.name, value: t.replace(ni, "\r\n") };
                              })
                            : { name: e.name, value: i.replace(ni, "\r\n") };
                    })
                    .get();
            },
        }),
        (pt.ajaxSettings.xhr =
            void 0 !== t.ActiveXObject
                ? function () {
                      return this.isLocal ? et() : ot.documentMode > 8 ? tt() : (/^(get|post|head|put|delete|options)$/i.test(this.type) && tt()) || et();
                  }
                : tt);
    var si = 0,
        ai = {},
        li = pt.ajaxSettings.xhr();
    t.attachEvent &&
        t.attachEvent("onunload", function () {
            for (var t in ai) ai[t](void 0, !0);
        }),
        (dt.cors = !!li && "withCredentials" in li),
        (li = dt.ajax = !!li),
        li &&
            pt.ajaxTransport(function (e) {
                if (!e.crossDomain || dt.cors) {
                    var i;
                    return {
                        send: function (n, o) {
                            var r,
                                s = e.xhr(),
                                a = ++si;
                            if ((s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (r in e.xhrFields) s[r] = e.xhrFields[r];
                            e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                            for (r in n) void 0 !== n[r] && s.setRequestHeader(r, n[r] + "");
                            s.send((e.hasContent && e.data) || null),
                                (i = function (t, n) {
                                    var r, l, c;
                                    if (i && (n || 4 === s.readyState))
                                        if ((delete ai[a], (i = void 0), (s.onreadystatechange = pt.noop), n)) 4 !== s.readyState && s.abort();
                                        else {
                                            (c = {}), (r = s.status), "string" == typeof s.responseText && (c.text = s.responseText);
                                            try {
                                                l = s.statusText;
                                            } catch (t) {
                                                l = "";
                                            }
                                            r || !e.isLocal || e.crossDomain ? 1223 === r && (r = 204) : (r = c.text ? 200 : 404);
                                        }
                                    c && o(r, l, c, s.getAllResponseHeaders());
                                }),
                                e.async ? (4 === s.readyState ? t.setTimeout(i) : (s.onreadystatechange = ai[a] = i)) : i();
                        },
                        abort: function () {
                            i && i(void 0, !0);
                        },
                    };
                }
            }),
        pt.ajaxPrefilter(function (t) {
            t.crossDomain && (t.contents.script = !1);
        }),
        pt.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (t) {
                    return pt.globalEval(t), t;
                },
            },
        }),
        pt.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && ((t.type = "GET"), (t.global = !1));
        }),
        pt.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e,
                    i = ot.head || pt("head")[0] || ot.documentElement;
                return {
                    send: function (n, o) {
                        (e = ot.createElement("script")),
                            (e.async = !0),
                            t.scriptCharset && (e.charset = t.scriptCharset),
                            (e.src = t.url),
                            (e.onload = e.onreadystatechange = function (t, i) {
                                (i || !e.readyState || /loaded|complete/.test(e.readyState)) && ((e.onload = e.onreadystatechange = null), e.parentNode && e.parentNode.removeChild(e), (e = null), i || o(200, "success"));
                            }),
                            i.insertBefore(e, i.firstChild);
                    },
                    abort: function () {
                        e && e.onload(void 0, !0);
                    },
                };
            }
        });
    var ci = [],
        ui = /(=)\?(?=&|$)|\?\?/;
    pt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = ci.pop() || pt.expando + "_" + Fe++;
            return (this[t] = !0), t;
        },
    }),
        pt.ajaxPrefilter("json jsonp", function (e, i, n) {
            var o,
                r,
                s,
                a = !1 !== e.jsonp && (ui.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && ui.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
                return (
                    (o = e.jsonpCallback = pt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                    a ? (e[a] = e[a].replace(ui, "$1" + o)) : !1 !== e.jsonp && (e.url += (Be.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                    (e.converters["script json"] = function () {
                        return s || pt.error(o + " was not called"), s[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (r = t[o]),
                    (t[o] = function () {
                        s = arguments;
                    }),
                    n.always(function () {
                        void 0 === r ? pt(t).removeProp(o) : (t[o] = r), e[o] && ((e.jsonpCallback = i.jsonpCallback), ci.push(o)), s && pt.isFunction(r) && r(s[0]), (s = r = void 0);
                    }),
                    "script"
                );
        }),
        (dt.createHTMLDocument = (function () {
            if (!ot.implementation.createHTMLDocument) return !1;
            var t = ot.implementation.createHTMLDocument("");
            return (t.body.innerHTML = "<form></form><form></form>"), 2 === t.body.childNodes.length;
        })()),
        (pt.parseHTML = function (t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && ((i = e), (e = !1)), (e = e || (dt.createHTMLDocument ? ot.implementation.createHTMLDocument("") : ot));
            var n = kt.exec(t),
                o = !i && [];
            return n ? [e.createElement(n[1])] : ((n = v([t], e, o)), o && o.length && pt(o).remove(), pt.merge([], n.childNodes));
        });
    var hi = pt.fn.load;
    (pt.fn.load = function (t, e, i) {
        if ("string" != typeof t && hi) return hi.apply(this, arguments);
        var n,
            o,
            r,
            s = this,
            a = t.indexOf(" ");
        return (
            a > -1 && ((n = pt.trim(t.slice(a, t.length))), (t = t.slice(0, a))),
            pt.isFunction(e) ? ((i = e), (e = void 0)) : e && "object" == typeof e && (o = "POST"),
            s.length > 0 &&
                pt
                    .ajax({ url: t, type: o || "GET", dataType: "html", data: e })
                    .done(function (t) {
                        (r = arguments), s.html(n ? pt("<div>").append(pt.parseHTML(t)).find(n) : t);
                    })
                    .always(
                        i &&
                            function (t, e) {
                                s.each(function () {
                                    i.apply(s, r || [t.responseText, e, t]);
                                });
                            }
                    ),
            this
        );
    }),
        pt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            pt.fn[e] = function (t) {
                return this.on(e, t);
            };
        }),
        (pt.expr.filters.animated = function (t) {
            return pt.grep(pt.timers, function (e) {
                return t === e.elem;
            }).length;
        }),
        (pt.offset = {
            setOffset: function (t, e, i) {
                var n,
                    o,
                    r,
                    s,
                    a,
                    l,
                    c,
                    u = pt.css(t, "position"),
                    h = pt(t),
                    d = {};
                "static" === u && (t.style.position = "relative"),
                    (a = h.offset()),
                    (r = pt.css(t, "top")),
                    (l = pt.css(t, "left")),
                    (c = ("absolute" === u || "fixed" === u) && pt.inArray("auto", [r, l]) > -1),
                    c ? ((n = h.position()), (s = n.top), (o = n.left)) : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
                    pt.isFunction(e) && (e = e.call(t, i, pt.extend({}, a))),
                    null != e.top && (d.top = e.top - a.top + s),
                    null != e.left && (d.left = e.left - a.left + o),
                    "using" in e ? e.using.call(t, d) : h.css(d);
            },
        }),
        pt.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t
                        ? this
                        : this.each(function (e) {
                              pt.offset.setOffset(this, t, e);
                          });
                var e,
                    i,
                    n = { top: 0, left: 0 },
                    o = this[0],
                    r = o && o.ownerDocument;
                if (r)
                    return (
                        (e = r.documentElement),
                        pt.contains(e, o)
                            ? (void 0 !== o.getBoundingClientRect && (n = o.getBoundingClientRect()),
                              (i = it(r)),
                              { top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0), left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0) })
                            : n
                    );
            },
            position: function () {
                if (this[0]) {
                    var t,
                        e,
                        i = { top: 0, left: 0 },
                        n = this[0];
                    return (
                        "fixed" === pt.css(n, "position")
                            ? (e = n.getBoundingClientRect())
                            : ((t = this.offsetParent()),
                              (e = this.offset()),
                              pt.nodeName(t[0], "html") || (i = t.offset()),
                              (i.top += pt.css(t[0], "borderTopWidth", !0) - t.scrollTop()),
                              (i.left += pt.css(t[0], "borderLeftWidth", !0) - t.scrollLeft())),
                        { top: e.top - i.top - pt.css(n, "marginTop", !0), left: e.left - i.left - pt.css(n, "marginLeft", !0) }
                    );
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && !pt.nodeName(t, "html") && "static" === pt.css(t, "position"); ) t = t.offsetParent;
                    return t || fe;
                });
            },
        }),
        pt.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, e) {
            var i = /Y/.test(e);
            pt.fn[t] = function (n) {
                return Ht(
                    this,
                    function (t, n, o) {
                        var r = it(t);
                        if (void 0 === o) return r ? (e in r ? r[e] : r.document.documentElement[n]) : t[n];
                        r ? r.scrollTo(i ? pt(r).scrollLeft() : o, i ? o : pt(r).scrollTop()) : (t[n] = o);
                    },
                    t,
                    n,
                    arguments.length,
                    null
                );
            };
        }),
        pt.each(["top", "left"], function (t, e) {
            pt.cssHooks[e] = P(dt.pixelPosition, function (t, i) {
                if (i) return (i = ge(t, e)), he.test(i) ? pt(t).position()[e] + "px" : i;
            });
        }),
        pt.each({ Height: "height", Width: "width" }, function (t, e) {
            pt.each({ padding: "inner" + t, content: e, "": "outer" + t }, function (i, n) {
                pt.fn[n] = function (n, o) {
                    var r = arguments.length && (i || "boolean" != typeof n),
                        s = i || (!0 === n || !0 === o ? "margin" : "border");
                    return Ht(
                        this,
                        function (e, i, n) {
                            var o;
                            return pt.isWindow(e)
                                ? e.document.documentElement["client" + t]
                                : 9 === e.nodeType
                                ? ((o = e.documentElement), Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t]))
                                : void 0 === n
                                ? pt.css(e, i, s)
                                : pt.style(e, i, n, s);
                        },
                        e,
                        r ? n : void 0,
                        r,
                        null
                    );
                };
            });
        }),
        pt.fn.extend({
            bind: function (t, e, i) {
                return this.on(t, null, e, i);
            },
            unbind: function (t, e) {
                return this.off(t, null, e);
            },
            delegate: function (t, e, i, n) {
                return this.on(e, t, i, n);
            },
            undelegate: function (t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i);
            },
        }),
        (pt.fn.size = function () {
            return this.length;
        }),
        (pt.fn.andSelf = pt.fn.addBack),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return pt;
            });
    var di = t.jQuery,
        fi = t.$;
    return (
        (pt.noConflict = function (e) {
            return t.$ === pt && (t.$ = fi), e && t.jQuery === pt && (t.jQuery = di), pt;
        }),
        e || (t.jQuery = t.$ = pt),
        pt
    );
}),
    (jQuery.easing.jswing = jQuery.easing.swing),
    jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (t, e, i, n, o) {
            return jQuery.easing[jQuery.easing.def](t, e, i, n, o);
        },
        easeInQuad: function (t, e, i, n, o) {
            return n * (e /= o) * e + i;
        },
        easeOutQuad: function (t, e, i, n, o) {
            return -n * (e /= o) * (e - 2) + i;
        },
        easeInOutQuad: function (t, e, i, n, o) {
            return (e /= o / 2) < 1 ? (n / 2) * e * e + i : (-n / 2) * (--e * (e - 2) - 1) + i;
        },
        easeInCubic: function (t, e, i, n, o) {
            return n * (e /= o) * e * e + i;
        },
        easeOutCubic: function (t, e, i, n, o) {
            return n * ((e = e / o - 1) * e * e + 1) + i;
        },
        easeInOutCubic: function (t, e, i, n, o) {
            return (e /= o / 2) < 1 ? (n / 2) * e * e * e + i : (n / 2) * ((e -= 2) * e * e + 2) + i;
        },
        easeInQuart: function (t, e, i, n, o) {
            return n * (e /= o) * e * e * e + i;
        },
        easeOutQuart: function (t, e, i, n, o) {
            return -n * ((e = e / o - 1) * e * e * e - 1) + i;
        },
        easeInOutQuart: function (t, e, i, n, o) {
            return (e /= o / 2) < 1 ? (n / 2) * e * e * e * e + i : (-n / 2) * ((e -= 2) * e * e * e - 2) + i;
        },
        easeInQuint: function (t, e, i, n, o) {
            return n * (e /= o) * e * e * e * e + i;
        },
        easeOutQuint: function (t, e, i, n, o) {
            return n * ((e = e / o - 1) * e * e * e * e + 1) + i;
        },
        easeInOutQuint: function (t, e, i, n, o) {
            return (e /= o / 2) < 1 ? (n / 2) * e * e * e * e * e + i : (n / 2) * ((e -= 2) * e * e * e * e + 2) + i;
        },
        easeInSine: function (t, e, i, n, o) {
            return -n * Math.cos((e / o) * (Math.PI / 2)) + n + i;
        },
        easeOutSine: function (t, e, i, n, o) {
            return n * Math.sin((e / o) * (Math.PI / 2)) + i;
        },
        easeInOutSine: function (t, e, i, n, o) {
            return (-n / 2) * (Math.cos((Math.PI * e) / o) - 1) + i;
        },
        easeInExpo: function (t, e, i, n, o) {
            return 0 == e ? i : n * Math.pow(2, 10 * (e / o - 1)) + i;
        },
        easeOutExpo: function (t, e, i, n, o) {
            return e == o ? i + n : n * (1 - Math.pow(2, (-10 * e) / o)) + i;
        },
        easeInOutExpo: function (t, e, i, n, o) {
            return 0 == e ? i : e == o ? i + n : (e /= o / 2) < 1 ? (n / 2) * Math.pow(2, 10 * (e - 1)) + i : (n / 2) * (2 - Math.pow(2, -10 * --e)) + i;
        },
        easeInCirc: function (t, e, i, n, o) {
            return -n * (Math.sqrt(1 - (e /= o) * e) - 1) + i;
        },
        easeOutCirc: function (t, e, i, n, o) {
            return n * Math.sqrt(1 - (e = e / o - 1) * e) + i;
        },
        easeInOutCirc: function (t, e, i, n, o) {
            return (e /= o / 2) < 1 ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + i : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + i;
        },
        easeInElastic: function (t, e, i, n, o) {
            var r = 1.70158,
                s = 0,
                a = n;
            if (0 == e) return i;
            if (1 == (e /= o)) return i + n;
            if ((s || (s = 0.3 * o), a < Math.abs(n))) {
                a = n;
                var r = s / 4;
            } else var r = (s / (2 * Math.PI)) * Math.asin(n / a);
            return -a * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e * o - r) * (2 * Math.PI)) / s) + i;
        },
        easeOutElastic: function (t, e, i, n, o) {
            var r = 1.70158,
                s = 0,
                a = n;
            if (0 == e) return i;
            if (1 == (e /= o)) return i + n;
            if ((s || (s = 0.3 * o), a < Math.abs(n))) {
                a = n;
                var r = s / 4;
            } else var r = (s / (2 * Math.PI)) * Math.asin(n / a);
            return a * Math.pow(2, -10 * e) * Math.sin(((e * o - r) * (2 * Math.PI)) / s) + n + i;
        },
        easeInOutElastic: function (t, e, i, n, o) {
            var r = 1.70158,
                s = 0,
                a = n;
            if (0 == e) return i;
            if (2 == (e /= o / 2)) return i + n;
            if ((s || (s = o * (0.3 * 1.5)), a < Math.abs(n))) {
                a = n;
                var r = s / 4;
            } else var r = (s / (2 * Math.PI)) * Math.asin(n / a);
            return e < 1 ? a * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e * o - r) * (2 * Math.PI)) / s) * -0.5 + i : a * Math.pow(2, -10 * (e -= 1)) * Math.sin(((e * o - r) * (2 * Math.PI)) / s) * 0.5 + n + i;
        },
        easeInBack: function (t, e, i, n, o, r) {
            return void 0 == r && (r = 1.70158), n * (e /= o) * e * ((r + 1) * e - r) + i;
        },
        easeOutBack: function (t, e, i, n, o, r) {
            return void 0 == r && (r = 1.70158), n * ((e = e / o - 1) * e * ((r + 1) * e + r) + 1) + i;
        },
        easeInOutBack: function (t, e, i, n, o, r) {
            return void 0 == r && (r = 1.70158), (e /= o / 2) < 1 ? (n / 2) * (e * e * ((1 + (r *= 1.525)) * e - r)) + i : (n / 2) * ((e -= 2) * e * ((1 + (r *= 1.525)) * e + r) + 2) + i;
        },
        easeInBounce: function (t, e, i, n, o) {
            return n - jQuery.easing.easeOutBounce(t, o - e, 0, n, o) + i;
        },
        easeOutBounce: function (t, e, i, n, o) {
            return (e /= o) < 1 / 2.75
                ? n * (7.5625 * e * e) + i
                : e < 2 / 2.75
                ? n * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + i
                : e < 2.5 / 2.75
                ? n * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + i
                : n * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + i;
        },
        easeInOutBounce: function (t, e, i, n, o) {
            return e < o / 2 ? 0.5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, o) + i : 0.5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, n, o) + 0.5 * n + i;
        },
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
                  e(t, i);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("jquery")))
            : (t.jQueryBridget = e(t, t.jQuery));
    })(window, function (t, e) {
        "use strict";
        function i(i, r, a) {
            function l(t, e, n) {
                var o,
                    r = "$()." + i + '("' + e + '")';
                return (
                    t.each(function (t, l) {
                        var c = a.data(l, i);
                        if (!c) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                        var u = c[e];
                        if (!u || "_" == e.charAt(0)) return void s(r + " is not a valid method");
                        var h = u.apply(c, n);
                        o = void 0 === o ? h : o;
                    }),
                    void 0 !== o ? o : t
                );
            }
            function c(t, e) {
                t.each(function (t, n) {
                    var o = a.data(n, i);
                    o ? (o.option(e), o._init()) : ((o = new r(n, e)), a.data(n, i, o));
                });
            }
            (a = a || e || t.jQuery) &&
                (r.prototype.option ||
                    (r.prototype.option = function (t) {
                        a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
                    }),
                (a.fn[i] = function (t) {
                    if ("string" == typeof t) {
                        return l(this, t, o.call(arguments, 1));
                    }
                    return c(this, t), this;
                }),
                n(a));
        }
        function n(t) {
            !t || (t && t.bridget) || (t.bridget = i);
        }
        var o = Array.prototype.slice,
            r = t.console,
            s =
                void 0 === r
                    ? function () {}
                    : function (t) {
                          r.error(t);
                      };
        return n(e || t.jQuery), i;
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("get-size/get-size", [], function () {
                  return e();
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e())
            : (t.getSize = e());
    })(window, function () {
        "use strict";
        function t(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e;
        }
        function e() {}
        function i() {
            for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; c > e; e++) {
                t[l[e]] = 0;
            }
            return t;
        }
        function n(t) {
            var e = getComputedStyle(t);
            return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e;
        }
        function o() {
            if (!u) {
                u = !0;
                var e = document.createElement("div");
                (e.style.width = "200px"), (e.style.padding = "1px 2px 3px 4px"), (e.style.borderStyle = "solid"), (e.style.borderWidth = "1px 2px 3px 4px"), (e.style.boxSizing = "border-box");
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var o = n(e);
                (r.isBoxSizeOuter = s = 200 == t(o.width)), i.removeChild(e);
            }
        }
        function r(e) {
            if ((o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType)) {
                var r = n(e);
                if ("none" == r.display) return i();
                var a = {};
                (a.width = e.offsetWidth), (a.height = e.offsetHeight);
                for (var u = (a.isBorderBox = "border-box" == r.boxSizing), h = 0; c > h; h++) {
                    var d = l[h],
                        f = r[d],
                        p = parseFloat(f);
                    a[d] = isNaN(p) ? 0 : p;
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
                var k = t(r.height);
                return !1 !== k && (a.height = k + (x ? 0 : m + w)), (a.innerWidth = a.width - (g + b)), (a.innerHeight = a.height - (m + w)), (a.outerWidth = a.width + v), (a.outerHeight = a.height + y), a;
            }
        }
        var s,
            a =
                "undefined" == typeof console
                    ? e
                    : function (t) {
                          console.error(t);
                      },
            l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            c = l.length,
            u = !1;
        return r;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.EvEmitter = e());
    })(this, function () {
        function t() {}
        var e = t.prototype;
        return (
            (e.on = function (t, e) {
                if (t && e) {
                    var i = (this._events = this._events || {}),
                        n = (i[t] = i[t] || []);
                    return -1 == n.indexOf(e) && n.push(e), this;
                }
            }),
            (e.once = function (t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = (this._onceEvents = this._onceEvents || {});
                    return ((i[t] = i[t] || {})[e] = !0), this;
                }
            }),
            (e.off = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var n = i.indexOf(e);
                    return -1 != n && i.splice(n, 1), this;
                }
            }),
            (e.emitEvent = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var n = 0,
                        o = i[n];
                    e = e || [];
                    for (var r = this._onceEvents && this._onceEvents[t]; o; ) {
                        var s = r && r[o];
                        s && (this.off(t, o), delete r[o]), o.apply(this, e), (n += s ? 0 : 1), (o = i[n]);
                    }
                    return this;
                }
            }),
            t
        );
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.matchesSelector = e());
    })(window, function () {
        "use strict";
        var t = (function () {
            var t = Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var n = e[i],
                    o = n + "MatchesSelector";
                if (t[o]) return o;
            }
        })();
        return function (e, i) {
            return e[t](i);
        };
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
                  return e(t, i);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("desandro-matches-selector")))
            : (t.fizzyUIUtils = e(t, t.matchesSelector));
    })(window, function (t, e) {
        var i = {};
        (i.extend = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }),
            (i.modulo = function (t, e) {
                return ((t % e) + e) % e;
            }),
            (i.makeArray = function (t) {
                var e = [];
                if (Array.isArray(t)) e = t;
                else if (t && "number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]);
                else e.push(t);
                return e;
            }),
            (i.removeFrom = function (t, e) {
                var i = t.indexOf(e);
                -1 != i && t.splice(i, 1);
            }),
            (i.getParent = function (t, i) {
                for (; t != document.body; ) if (((t = t.parentNode), e(t, i))) return t;
            }),
            (i.getQueryElement = function (t) {
                return "string" == typeof t ? document.querySelector(t) : t;
            }),
            (i.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (i.filterFindElements = function (t, n) {
                t = i.makeArray(t);
                var o = [];
                return (
                    t.forEach(function (t) {
                        if (t instanceof HTMLElement) {
                            if (!n) return void o.push(t);
                            e(t, n) && o.push(t);
                            for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r]);
                        }
                    }),
                    o
                );
            }),
            (i.debounceMethod = function (t, e, i) {
                var n = t.prototype[e],
                    o = e + "Timeout";
                t.prototype[e] = function () {
                    var t = this[o];
                    t && clearTimeout(t);
                    var e = arguments,
                        r = this;
                    this[o] = setTimeout(function () {
                        n.apply(r, e), delete r[o];
                    }, i || 100);
                };
            }),
            (i.docReady = function (t) {
                "complete" == document.readyState ? t() : document.addEventListener("DOMContentLoaded", t);
            }),
            (i.toDashed = function (t) {
                return t
                    .replace(/(.)([A-Z])/g, function (t, e, i) {
                        return e + "-" + i;
                    })
                    .toLowerCase();
            });
        var n = t.console;
        return (
            (i.htmlInit = function (e, o) {
                i.docReady(function () {
                    var r = i.toDashed(o),
                        s = "data-" + r,
                        a = document.querySelectorAll("[" + s + "]"),
                        l = document.querySelectorAll(".js-" + r),
                        c = i.makeArray(a).concat(i.makeArray(l)),
                        u = s + "-options",
                        h = t.jQuery;
                    c.forEach(function (t) {
                        var i,
                            r = t.getAttribute(s) || t.getAttribute(u);
                        try {
                            i = r && JSON.parse(r);
                        } catch (e) {
                            return void (n && n.error("Error parsing " + s + " on " + t.className + ": " + e));
                        }
                        var a = new e(t, i);
                        h && h.data(t, o, a);
                    });
                });
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("ev-emitter"), require("get-size")))
            : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
    })(window, function (t, e) {
        "use strict";
        function i(t) {
            for (var e in t) return !1;
            return (e = null), !0;
        }
        function n(t, e) {
            t && ((this.element = t), (this.layout = e), (this.position = { x: 0, y: 0 }), this._create());
        }
        function o(t) {
            return t.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase();
            });
        }
        var r = document.documentElement.style,
            s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
            a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
            l = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[s],
            c = { transform: a, transition: s, transitionDuration: s + "Duration", transitionProperty: s + "Property", transitionDelay: s + "Delay" },
            u = (n.prototype = Object.create(t.prototype));
        (u.constructor = n),
            (u._create = function () {
                (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({ position: "absolute" });
            }),
            (u.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (u.getSize = function () {
                this.size = e(this.element);
            }),
            (u.css = function (t) {
                var e = this.element.style;
                for (var i in t) {
                    e[c[i] || i] = t[i];
                }
            }),
            (u.getPosition = function () {
                var t = getComputedStyle(this.element),
                    e = this.layout._getOption("originLeft"),
                    i = this.layout._getOption("originTop"),
                    n = t[e ? "left" : "right"],
                    o = t[i ? "top" : "bottom"],
                    r = this.layout.size,
                    s = -1 != n.indexOf("%") ? (parseFloat(n) / 100) * r.width : parseInt(n, 10),
                    a = -1 != o.indexOf("%") ? (parseFloat(o) / 100) * r.height : parseInt(o, 10);
                (s = isNaN(s) ? 0 : s), (a = isNaN(a) ? 0 : a), (s -= e ? r.paddingLeft : r.paddingRight), (a -= i ? r.paddingTop : r.paddingBottom), (this.position.x = s), (this.position.y = a);
            }),
            (u.layoutPosition = function () {
                var t = this.layout.size,
                    e = {},
                    i = this.layout._getOption("originLeft"),
                    n = this.layout._getOption("originTop"),
                    o = i ? "paddingLeft" : "paddingRight",
                    r = i ? "left" : "right",
                    s = i ? "right" : "left",
                    a = this.position.x + t[o];
                (e[r] = this.getXValue(a)), (e[s] = "");
                var l = n ? "paddingTop" : "paddingBottom",
                    c = n ? "top" : "bottom",
                    u = n ? "bottom" : "top",
                    h = this.position.y + t[l];
                (e[c] = this.getYValue(h)), (e[u] = ""), this.css(e), this.emitEvent("layout", [this]);
            }),
            (u.getXValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !e ? (t / this.layout.size.width) * 100 + "%" : t + "px";
            }),
            (u.getYValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && e ? (t / this.layout.size.height) * 100 + "%" : t + "px";
            }),
            (u._transitionTo = function (t, e) {
                this.getPosition();
                var i = this.position.x,
                    n = this.position.y,
                    o = parseInt(t, 10),
                    r = parseInt(e, 10),
                    s = o === this.position.x && r === this.position.y;
                if ((this.setPosition(t, e), s && !this.isTransitioning)) return void this.layoutPosition();
                var a = t - i,
                    l = e - n,
                    c = {};
                (c.transform = this.getTranslate(a, l)), this.transition({ to: c, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
            }),
            (u.getTranslate = function (t, e) {
                var i = this.layout._getOption("originLeft"),
                    n = this.layout._getOption("originTop");
                return (t = i ? t : -t), (e = n ? e : -e), "translate3d(" + t + "px, " + e + "px, 0)";
            }),
            (u.goTo = function (t, e) {
                this.setPosition(t, e), this.layoutPosition();
            }),
            (u.moveTo = u._transitionTo),
            (u.setPosition = function (t, e) {
                (this.position.x = parseInt(t, 10)), (this.position.y = parseInt(e, 10));
            }),
            (u._nonTransition = function (t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
            }),
            (u.transition = function (t) {
                if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    var n = this.element.offsetHeight;
                    n = null;
                }
                this.enableTransition(t.to), this.css(t.to), (this.isTransitioning = !0);
            });
        var h = "opacity," + o(a);
        (u.enableTransition = function () {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                (t = "number" == typeof t ? t + "ms" : t), this.css({ transitionProperty: h, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(l, this, !1);
            }
        }),
            (u.onwebkitTransitionEnd = function (t) {
                this.ontransitionend(t);
            }),
            (u.onotransitionend = function (t) {
                this.ontransitionend(t);
            });
        var d = { "-webkit-transform": "transform" };
        (u.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn,
                    n = d[t.propertyName] || t.propertyName;
                if ((delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && ((this.element.style[t.propertyName] = ""), delete e.clean[n]), n in e.onEnd)) {
                    e.onEnd[n].call(this), delete e.onEnd[n];
                }
                this.emitEvent("transitionEnd", [this]);
            }
        }),
            (u.disableTransition = function () {
                this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), (this.isTransitioning = !1);
            }),
            (u._removeStyles = function (t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e);
            });
        var f = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
        return (
            (u.removeTransitionStyles = function () {
                this.css(f);
            }),
            (u.stagger = function (t) {
                (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
            }),
            (u.removeElem = function () {
                this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
            }),
            (u.remove = function () {
                return s && parseFloat(this.layout.options.transitionDuration)
                    ? (this.once("transitionEnd", function () {
                          this.removeElem();
                      }),
                      void this.hide())
                    : void this.removeElem();
            }),
            (u.reveal = function () {
                delete this.isHidden, this.css({ display: "" });
                var t = this.layout.options,
                    e = {};
                (e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd), this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
            }),
            (u.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal");
            }),
            (u.getHideRevealTransitionEndProperty = function (t) {
                var e = this.layout.options[t];
                if (e.opacity) return "opacity";
                for (var i in e) return i;
            }),
            (u.hide = function () {
                (this.isHidden = !0), this.css({ display: "" });
                var t = this.layout.options,
                    e = {};
                (e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd), this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
            }),
            (u.onHideTransitionEnd = function () {
                this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
            }),
            (u.destroy = function () {
                this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
            }),
            n
        );
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, o, r) {
                  return e(t, i, n, o, r);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")))
            : (t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item));
    })(window, function (t, e, i, n, o) {
        "use strict";
        function r(t, e) {
            var i = n.getQueryElement(t);
            if (!i) return void (l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            (this.element = i), c && (this.$element = c(this.element)), (this.options = n.extend({}, this.constructor.defaults)), this.option(e);
            var o = ++h;
            (this.element.outlayerGUID = o), (d[o] = this), this._create(), this._getOption("initLayout") && this.layout();
        }
        function s(t) {
            function e() {
                t.apply(this, arguments);
            }
            return (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), e;
        }
        function a(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                n = e && e[2];
            return i.length ? (i = parseFloat(i)) * (p[n] || 1) : 0;
        }
        var l = t.console,
            c = t.jQuery,
            u = function () {},
            h = 0,
            d = {};
        (r.namespace = "outlayer"),
            (r.Item = o),
            (r.defaults = {
                containerStyle: { position: "relative" },
                initLayout: !0,
                originLeft: !0,
                originTop: !0,
                resize: !0,
                resizeContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                visibleStyle: { opacity: 1, transform: "scale(1)" },
            });
        var f = r.prototype;
        n.extend(f, e.prototype),
            (f.option = function (t) {
                n.extend(this.options, t);
            }),
            (f._getOption = function (t) {
                var e = this.constructor.compatOptions[t];
                return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
            }),
            (r.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer",
            }),
            (f._create = function () {
                this.reloadItems(), (this.stamps = []), this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize();
            }),
            (f.reloadItems = function () {
                this.items = this._itemize(this.element.children);
            }),
            (f._itemize = function (t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
                    var r = e[o],
                        s = new i(r, this);
                    n.push(s);
                }
                return n;
            }),
            (f._filterFindItemElements = function (t) {
                return n.filterFindElements(t, this.options.itemSelector);
            }),
            (f.getItemElements = function () {
                return this.items.map(function (t) {
                    return t.element;
                });
            }),
            (f.layout = function () {
                this._resetLayout(), this._manageStamps();
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                this.layoutItems(this.items, e), (this._isLayoutInited = !0);
            }),
            (f._init = f.layout),
            (f._resetLayout = function () {
                this.getSize();
            }),
            (f.getSize = function () {
                this.size = i(this.element);
            }),
            (f._getMeasurement = function (t, e) {
                var n,
                    o = this.options[t];
                o ? ("string" == typeof o ? (n = this.element.querySelector(o)) : o instanceof HTMLElement && (n = o), (this[t] = n ? i(n)[e] : o)) : (this[t] = 0);
            }),
            (f.layoutItems = function (t, e) {
                (t = this._getItemsForLayout(t)), this._layoutItems(t, e), this._postLayout();
            }),
            (f._getItemsForLayout = function (t) {
                return t.filter(function (t) {
                    return !t.isIgnored;
                });
            }),
            (f._layoutItems = function (t, e) {
                if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
                    var i = [];
                    t.forEach(function (t) {
                        var n = this._getItemLayoutPosition(t);
                        (n.item = t), (n.isInstant = e || t.isLayoutInstant), i.push(n);
                    }, this),
                        this._processLayoutQueue(i);
                }
            }),
            (f._getItemLayoutPosition = function () {
                return { x: 0, y: 0 };
            }),
            (f._processLayoutQueue = function (t) {
                this.updateStagger(),
                    t.forEach(function (t, e) {
                        this._positionItem(t.item, t.x, t.y, t.isInstant, e);
                    }, this);
            }),
            (f.updateStagger = function () {
                var t = this.options.stagger;
                return null === t || void 0 === t ? void (this.stagger = 0) : ((this.stagger = a(t)), this.stagger);
            }),
            (f._positionItem = function (t, e, i, n, o) {
                n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
            }),
            (f._postLayout = function () {
                this.resizeContainer();
            }),
            (f.resizeContainer = function () {
                if (this._getOption("resizeContainer")) {
                    var t = this._getContainerSize();
                    t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1));
                }
            }),
            (f._getContainerSize = u),
            (f._setContainerMeasure = function (t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                        (t = Math.max(t, 0)),
                        (this.element.style[e ? "width" : "height"] = t + "px");
                }
            }),
            (f._emitCompleteOnItems = function (t, e) {
                function i() {
                    o.dispatchEvent(t + "Complete", null, [e]);
                }
                function n() {
                    ++s == r && i();
                }
                var o = this,
                    r = e.length;
                if (!e || !r) return void i();
                var s = 0;
                e.forEach(function (e) {
                    e.once(t, n);
                });
            }),
            (f.dispatchEvent = function (t, e, i) {
                var n = e ? [e].concat(i) : i;
                if ((this.emitEvent(t, n), c))
                    if (((this.$element = this.$element || c(this.element)), e)) {
                        var o = c.Event(e);
                        (o.type = t), this.$element.trigger(o, i);
                    } else this.$element.trigger(t, i);
            }),
            (f.ignore = function (t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0);
            }),
            (f.unignore = function (t) {
                var e = this.getItem(t);
                e && delete e.isIgnored;
            }),
            (f.stamp = function (t) {
                (t = this._find(t)) && ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
            }),
            (f.unstamp = function (t) {
                (t = this._find(t)) &&
                    t.forEach(function (t) {
                        n.removeFrom(this.stamps, t), this.unignore(t);
                    }, this);
            }),
            (f._find = function (t) {
                return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), (t = n.makeArray(t))) : void 0;
            }),
            (f._manageStamps = function () {
                this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
            }),
            (f._getBoundingRect = function () {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
                };
            }),
            (f._manageStamp = u),
            (f._getElementOffset = function (t) {
                var e = t.getBoundingClientRect(),
                    n = this._boundingRect,
                    o = i(t);
                return { left: e.left - n.left - o.marginLeft, top: e.top - n.top - o.marginTop, right: n.right - e.right - o.marginRight, bottom: n.bottom - e.bottom - o.marginBottom };
            }),
            (f.handleEvent = n.handleEvent),
            (f.bindResize = function () {
                t.addEventListener("resize", this), (this.isResizeBound = !0);
            }),
            (f.unbindResize = function () {
                t.removeEventListener("resize", this), (this.isResizeBound = !1);
            }),
            (f.onresize = function () {
                this.resize();
            }),
            n.debounceMethod(r, "onresize", 100),
            (f.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout();
            }),
            (f.needsResizeLayout = function () {
                var t = i(this.element);
                return this.size && t && t.innerWidth !== this.size.innerWidth;
            }),
            (f.addItems = function (t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e;
            }),
            (f.appended = function (t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e));
            }),
            (f.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    (this.items = e.concat(i)), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
                }
            }),
            (f.reveal = function (t) {
                if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e), t.reveal();
                    });
                }
            }),
            (f.hide = function (t) {
                if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e), t.hide();
                    });
                }
            }),
            (f.revealItemElements = function (t) {
                var e = this.getItems(t);
                this.reveal(e);
            }),
            (f.hideItemElements = function (t) {
                var e = this.getItems(t);
                this.hide(e);
            }),
            (f.getItem = function (t) {
                for (var e = 0; e < this.items.length; e++) {
                    var i = this.items[e];
                    if (i.element == t) return i;
                }
            }),
            (f.getItems = function (t) {
                t = n.makeArray(t);
                var e = [];
                return (
                    t.forEach(function (t) {
                        var i = this.getItem(t);
                        i && e.push(i);
                    }, this),
                    e
                );
            }),
            (f.remove = function (t) {
                var e = this.getItems(t);
                this._emitCompleteOnItems("remove", e),
                    e &&
                        e.length &&
                        e.forEach(function (t) {
                            t.remove(), n.removeFrom(this.items, t);
                        }, this);
            }),
            (f.destroy = function () {
                var t = this.element.style;
                (t.height = ""),
                    (t.position = ""),
                    (t.width = ""),
                    this.items.forEach(function (t) {
                        t.destroy();
                    }),
                    this.unbindResize();
                var e = this.element.outlayerGUID;
                delete d[e], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace);
            }),
            (r.data = function (t) {
                t = n.getQueryElement(t);
                var e = t && t.outlayerGUID;
                return e && d[e];
            }),
            (r.create = function (t, e) {
                var i = s(r);
                return (
                    (i.defaults = n.extend({}, r.defaults)),
                    n.extend(i.defaults, e),
                    (i.compatOptions = n.extend({}, r.compatOptions)),
                    (i.namespace = t),
                    (i.data = r.data),
                    (i.Item = s(o)),
                    n.htmlInit(i, t),
                    c && c.bridget && c.bridget(t, i),
                    i
                );
            });
        var p = { ms: 1, s: 1e3 };
        return (r.Item = o), r;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("packery/js/rect", e) : "object" == typeof module && module.exports ? (module.exports = e()) : ((t.Packery = t.Packery || {}), (t.Packery.Rect = e()));
    })(window, function () {
        "use strict";
        function t(e) {
            for (var i in t.defaults) this[i] = t.defaults[i];
            for (i in e) this[i] = e[i];
        }
        t.defaults = { x: 0, y: 0, width: 0, height: 0 };
        var e = t.prototype;
        return (
            (e.contains = function (t) {
                var e = t.width || 0,
                    i = t.height || 0;
                return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + i;
            }),
            (e.overlaps = function (t) {
                var e = this.x + this.width,
                    i = this.y + this.height,
                    n = t.x + t.width,
                    o = t.y + t.height;
                return this.x < n && e > t.x && this.y < o && i > t.y;
            }),
            (e.getMaximalFreeRects = function (e) {
                if (!this.overlaps(e)) return !1;
                var i,
                    n = [],
                    o = this.x + this.width,
                    r = this.y + this.height,
                    s = e.x + e.width,
                    a = e.y + e.height;
                return (
                    this.y < e.y && ((i = new t({ x: this.x, y: this.y, width: this.width, height: e.y - this.y })), n.push(i)),
                    o > s && ((i = new t({ x: s, y: this.y, width: o - s, height: this.height })), n.push(i)),
                    r > a && ((i = new t({ x: this.x, y: a, width: this.width, height: r - a })), n.push(i)),
                    this.x < e.x && ((i = new t({ x: this.x, y: this.y, width: e.x - this.x, height: this.height })), n.push(i)),
                    n
                );
            }),
            (e.canFit = function (t) {
                return this.width >= t.width && this.height >= t.height;
            }),
            t
        );
    }),
    (function (t, e) {
        if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], e);
        else if ("object" == typeof module && module.exports) module.exports = e(require("./rect"));
        else {
            var i = (t.Packery = t.Packery || {});
            i.Packer = e(i.Rect);
        }
    })(window, function (t) {
        "use strict";
        function e(t, e, i) {
            (this.width = t || 0), (this.height = e || 0), (this.sortDirection = i || "downwardLeftToRight"), this.reset();
        }
        var i = e.prototype;
        (i.reset = function () {
            this.spaces = [];
            var e = new t({ x: 0, y: 0, width: this.width, height: this.height });
            this.spaces.push(e), (this.sorter = n[this.sortDirection] || n.downwardLeftToRight);
        }),
            (i.pack = function (t) {
                for (var e = 0; e < this.spaces.length; e++) {
                    var i = this.spaces[e];
                    if (i.canFit(t)) {
                        this.placeInSpace(t, i);
                        break;
                    }
                }
            }),
            (i.columnPack = function (t) {
                for (var e = 0; e < this.spaces.length; e++) {
                    var i = this.spaces[e];
                    if (i.x <= t.x && i.x + i.width >= t.x + t.width && i.height >= t.height - 0.01) {
                        (t.y = i.y), this.placed(t);
                        break;
                    }
                }
            }),
            (i.rowPack = function (t) {
                for (var e = 0; e < this.spaces.length; e++) {
                    var i = this.spaces[e];
                    if (i.y <= t.y && i.y + i.height >= t.y + t.height && i.width >= t.width - 0.01) {
                        (t.x = i.x), this.placed(t);
                        break;
                    }
                }
            }),
            (i.placeInSpace = function (t, e) {
                (t.x = e.x), (t.y = e.y), this.placed(t);
            }),
            (i.placed = function (t) {
                for (var e = [], i = 0; i < this.spaces.length; i++) {
                    var n = this.spaces[i],
                        o = n.getMaximalFreeRects(t);
                    o ? e.push.apply(e, o) : e.push(n);
                }
                (this.spaces = e), this.mergeSortSpaces();
            }),
            (i.mergeSortSpaces = function () {
                e.mergeRects(this.spaces), this.spaces.sort(this.sorter);
            }),
            (i.addSpace = function (t) {
                this.spaces.push(t), this.mergeSortSpaces();
            }),
            (e.mergeRects = function (t) {
                var e = 0,
                    i = t[e];
                t: for (; i; ) {
                    for (var n = 0, o = t[e + n]; o; ) {
                        if (o == i) n++;
                        else {
                            if (o.contains(i)) {
                                t.splice(e, 1), (i = t[e]);
                                continue t;
                            }
                            i.contains(o) ? t.splice(e + n, 1) : n++;
                        }
                        o = t[e + n];
                    }
                    e++, (i = t[e]);
                }
                return t;
            });
        var n = {
            downwardLeftToRight: function (t, e) {
                return t.y - e.y || t.x - e.x;
            },
            rightwardTopToBottom: function (t, e) {
                return t.x - e.x || t.y - e.y;
            },
        };
        return e;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("packery/js/item", ["outlayer/outlayer", "./rect"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("outlayer"), require("./rect")))
            : (t.Packery.Item = e(t.Outlayer, t.Packery.Rect));
    })(window, function (t, e) {
        "use strict";
        var i = document.documentElement.style,
            n = "string" == typeof i.transform ? "transform" : "WebkitTransform",
            o = function () {
                t.Item.apply(this, arguments);
            },
            r = (o.prototype = Object.create(t.Item.prototype)),
            s = r._create;
        r._create = function () {
            s.call(this), (this.rect = new e());
        };
        var a = r.moveTo;
        return (
            (r.moveTo = function (t, e) {
                var i = Math.abs(this.position.x - t),
                    n = Math.abs(this.position.y - e);
                return this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && 1 > i && 1 > n ? void this.goTo(t, e) : void a.apply(this, arguments);
            }),
            (r.enablePlacing = function () {
                this.removeTransitionStyles(), this.isTransitioning && n && (this.element.style[n] = "none"), (this.isTransitioning = !1), this.getSize(), this.layout._setRectSize(this.element, this.rect), (this.isPlacing = !0);
            }),
            (r.disablePlacing = function () {
                this.isPlacing = !1;
            }),
            (r.removeElem = function () {
                this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this]);
            }),
            (r.showDropPlaceholder = function () {
                var t = this.dropPlaceholder;
                t || ((t = this.dropPlaceholder = document.createElement("div")), (t.className = "packery-drop-placeholder"), (t.style.position = "absolute")),
                    (t.style.width = this.size.width + "px"),
                    (t.style.height = this.size.height + "px"),
                    this.positionDropPlaceholder(),
                    this.layout.element.appendChild(t);
            }),
            (r.positionDropPlaceholder = function () {
                this.dropPlaceholder.style[n] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)";
            }),
            (r.hideDropPlaceholder = function () {
                var t = this.dropPlaceholder.parentNode;
                t && t.removeChild(this.dropPlaceholder);
            }),
            o
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(["get-size/get-size", "outlayer/outlayer", "packery/js/rect", "packery/js/packer", "packery/js/item"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")))
            : (t.Packery = e(t.getSize, t.Outlayer, t.Packery.Rect, t.Packery.Packer, t.Packery.Item));
    })(window, function (t, e, i, n, o) {
        "use strict";
        function r(t, e) {
            return t.position.y - e.position.y || t.position.x - e.position.x;
        }
        function s(t, e) {
            return t.position.x - e.position.x || t.position.y - e.position.y;
        }
        function a(t, e) {
            var i = e.x - t.x,
                n = e.y - t.y;
            return Math.sqrt(i * i + n * n);
        }
        i.prototype.canFit = function (t) {
            return this.width >= t.width - 1 && this.height >= t.height - 1;
        };
        var l = e.create("packery");
        l.Item = o;
        var c = l.prototype;
        (c._create = function () {
            e.prototype._create.call(this), (this.packer = new n()), (this.shiftPacker = new n()), (this.isEnabled = !0), (this.dragItemCount = 0);
            var t = this;
            (this.handleDraggabilly = {
                dragStart: function () {
                    t.itemDragStart(this.element);
                },
                dragMove: function () {
                    t.itemDragMove(this.element, this.position.x, this.position.y);
                },
                dragEnd: function () {
                    t.itemDragEnd(this.element);
                },
            }),
                (this.handleUIDraggable = {
                    start: function (e, i) {
                        i && t.itemDragStart(e.currentTarget);
                    },
                    drag: function (e, i) {
                        i && t.itemDragMove(e.currentTarget, i.position.left, i.position.top);
                    },
                    stop: function (e, i) {
                        i && t.itemDragEnd(e.currentTarget);
                    },
                });
        }),
            (c._resetLayout = function () {
                this.getSize(), this._getMeasurements();
                var t, e, i;
                this._getOption("horizontal") ? ((t = 1 / 0), (e = this.size.innerHeight + this.gutter), (i = "rightwardTopToBottom")) : ((t = this.size.innerWidth + this.gutter), (e = 1 / 0), (i = "downwardLeftToRight")),
                    (this.packer.width = this.shiftPacker.width = t),
                    (this.packer.height = this.shiftPacker.height = e),
                    (this.packer.sortDirection = this.shiftPacker.sortDirection = i),
                    this.packer.reset(),
                    (this.maxY = 0),
                    (this.maxX = 0);
            }),
            (c._getMeasurements = function () {
                this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width");
            }),
            (c._getItemLayoutPosition = function (t) {
                if ((this._setRectSize(t.element, t.rect), this.isShifting || this.dragItemCount > 0)) {
                    var e = this._getPackMethod();
                    this.packer[e](t.rect);
                } else this.packer.pack(t.rect);
                return this._setMaxXY(t.rect), t.rect;
            }),
            (c.shiftLayout = function () {
                (this.isShifting = !0), this.layout(), delete this.isShifting;
            }),
            (c._getPackMethod = function () {
                return this._getOption("horizontal") ? "rowPack" : "columnPack";
            }),
            (c._setMaxXY = function (t) {
                (this.maxX = Math.max(t.x + t.width, this.maxX)), (this.maxY = Math.max(t.y + t.height, this.maxY));
            }),
            (c._setRectSize = function (e, i) {
                var n = t(e),
                    o = n.outerWidth,
                    r = n.outerHeight;
                (o || r) && ((o = this._applyGridGutter(o, this.columnWidth)), (r = this._applyGridGutter(r, this.rowHeight))), (i.width = Math.min(o, this.packer.width)), (i.height = Math.min(r, this.packer.height));
            }),
            (c._applyGridGutter = function (t, e) {
                if (!e) return t + this.gutter;
                e += this.gutter;
                var i = t % e,
                    n = i && 1 > i ? "round" : "ceil";
                return (t = Math[n](t / e) * e);
            }),
            (c._getContainerSize = function () {
                return this._getOption("horizontal") ? { width: this.maxX - this.gutter } : { height: this.maxY - this.gutter };
            }),
            (c._manageStamp = function (t) {
                var e,
                    n = this.getItem(t);
                if (n && n.isPlacing) e = n.rect;
                else {
                    var o = this._getElementOffset(t);
                    e = new i({ x: this._getOption("originLeft") ? o.left : o.right, y: this._getOption("originTop") ? o.top : o.bottom });
                }
                this._setRectSize(t, e), this.packer.placed(e), this._setMaxXY(e);
            }),
            (c.sortItemsByPosition = function () {
                var t = this._getOption("horizontal") ? s : r;
                this.items.sort(t);
            }),
            (c.fit = function (t, e, i) {
                var n = this.getItem(t);
                n &&
                    (this.stamp(n.element),
                    n.enablePlacing(),
                    this.updateShiftTargets(n),
                    (e = void 0 === e ? n.rect.x : e),
                    (i = void 0 === i ? n.rect.y : i),
                    this.shift(n, e, i),
                    this._bindFitEvents(n),
                    n.moveTo(n.rect.x, n.rect.y),
                    this.shiftLayout(),
                    this.unstamp(n.element),
                    this.sortItemsByPosition(),
                    n.disablePlacing());
            }),
            (c._bindFitEvents = function (t) {
                function e() {
                    2 == ++n && i.dispatchEvent("fitComplete", null, [t]);
                }
                var i = this,
                    n = 0;
                t.once("layout", e), this.once("layoutComplete", e);
            }),
            (c.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && (this.options.shiftPercentResize ? this.resizeShiftPercentLayout() : this.layout());
            }),
            (c.needsResizeLayout = function () {
                var e = t(this.element),
                    i = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
                return e[i] != this.size[i];
            }),
            (c.resizeShiftPercentLayout = function () {
                var e = this._getItemsForLayout(this.items),
                    i = this._getOption("horizontal"),
                    n = i ? "y" : "x",
                    o = i ? "height" : "width",
                    r = i ? "rowHeight" : "columnWidth",
                    s = i ? "innerHeight" : "innerWidth",
                    a = this[r];
                if ((a = a && a + this.gutter)) {
                    this._getMeasurements();
                    var l = this[r] + this.gutter;
                    e.forEach(function (t) {
                        var e = Math.round(t.rect[n] / a);
                        t.rect[n] = e * l;
                    });
                } else {
                    var c = t(this.element)[s] + this.gutter,
                        u = this.packer[o];
                    e.forEach(function (t) {
                        t.rect[n] = (t.rect[n] / u) * c;
                    });
                }
                this.shiftLayout();
            }),
            (c.itemDragStart = function (t) {
                if (this.isEnabled) {
                    this.stamp(t);
                    var e = this.getItem(t);
                    e && (e.enablePlacing(), e.showDropPlaceholder(), this.dragItemCount++, this.updateShiftTargets(e));
                }
            }),
            (c.updateShiftTargets = function (t) {
                this.shiftPacker.reset(), this._getBoundingRect();
                var e = this._getOption("originLeft"),
                    n = this._getOption("originTop");
                this.stamps.forEach(function (t) {
                    var o = this.getItem(t);
                    if (!o || !o.isPlacing) {
                        var r = this._getElementOffset(t),
                            s = new i({ x: e ? r.left : r.right, y: n ? r.top : r.bottom });
                        this._setRectSize(t, s), this.shiftPacker.placed(s);
                    }
                }, this);
                var o = this._getOption("horizontal"),
                    r = o ? "rowHeight" : "columnWidth",
                    s = o ? "height" : "width";
                (this.shiftTargetKeys = []), (this.shiftTargets = []);
                var a,
                    l = this[r];
                if ((l = l && l + this.gutter)) {
                    var c = Math.ceil(t.rect[s] / l),
                        u = Math.floor((this.shiftPacker[s] + this.gutter) / l);
                    a = (u - c) * l;
                    for (var h = 0; u > h; h++) {
                        var d = o ? 0 : h * l,
                            f = o ? h * l : 0;
                        this._addShiftTarget(d, f, a);
                    }
                } else (a = this.shiftPacker[s] + this.gutter - t.rect[s]), this._addShiftTarget(0, 0, a);
                var p = this._getItemsForLayout(this.items),
                    g = this._getPackMethod();
                p.forEach(function (t) {
                    var e = t.rect;
                    this._setRectSize(t.element, e), this.shiftPacker[g](e), this._addShiftTarget(e.x, e.y, a);
                    var i = o ? e.x + e.width : e.x,
                        n = o ? e.y : e.y + e.height;
                    if ((this._addShiftTarget(i, n, a), l))
                        for (var r = Math.round(e[s] / l), c = 1; r > c; c++) {
                            var u = o ? i : e.x + l * c,
                                h = o ? e.y + l * c : n;
                            this._addShiftTarget(u, h, a);
                        }
                }, this);
            }),
            (c._addShiftTarget = function (t, e, i) {
                var n = this._getOption("horizontal") ? e : t;
                if (!(0 !== n && n > i)) {
                    var o = t + "," + e;
                    -1 != this.shiftTargetKeys.indexOf(o) || (this.shiftTargetKeys.push(o), this.shiftTargets.push({ x: t, y: e }));
                }
            }),
            (c.shift = function (t, e, i) {
                var n,
                    o = 1 / 0,
                    r = { x: e, y: i };
                this.shiftTargets.forEach(function (t) {
                    var e = a(t, r);
                    o > e && ((n = t), (o = e));
                }),
                    (t.rect.x = n.x),
                    (t.rect.y = n.y);
            });
        var u = 120;
        (c.itemDragMove = function (t, e, i) {
            function n() {
                r.shift(o, e, i), o.positionDropPlaceholder(), r.layout();
            }
            var o = this.isEnabled && this.getItem(t);
            if (o) {
                (e -= this.size.paddingLeft), (i -= this.size.paddingTop);
                var r = this,
                    s = new Date();
                this._itemDragTime && s - this._itemDragTime < u ? (clearTimeout(this.dragTimeout), (this.dragTimeout = setTimeout(n, u))) : (n(), (this._itemDragTime = s));
            }
        }),
            (c.itemDragEnd = function (t) {
                function e() {
                    2 == ++n && (i.element.classList.remove("is-positioning-post-drag"), i.hideDropPlaceholder(), o.dispatchEvent("dragItemPositioned", null, [i]));
                }
                var i = this.isEnabled && this.getItem(t);
                if (i) {
                    clearTimeout(this.dragTimeout), i.element.classList.add("is-positioning-post-drag");
                    var n = 0,
                        o = this;
                    i.once("layout", e),
                        this.once("layoutComplete", e),
                        i.moveTo(i.rect.x, i.rect.y),
                        this.layout(),
                        (this.dragItemCount = Math.max(0, this.dragItemCount - 1)),
                        this.sortItemsByPosition(),
                        i.disablePlacing(),
                        this.unstamp(i.element);
                }
            }),
            (c.bindDraggabillyEvents = function (t) {
                this._bindDraggabillyEvents(t, "on");
            }),
            (c.unbindDraggabillyEvents = function (t) {
                this._bindDraggabillyEvents(t, "off");
            }),
            (c._bindDraggabillyEvents = function (t, e) {
                var i = this.handleDraggabilly;
                t[e]("dragStart", i.dragStart), t[e]("dragMove", i.dragMove), t[e]("dragEnd", i.dragEnd);
            }),
            (c.bindUIDraggableEvents = function (t) {
                this._bindUIDraggableEvents(t, "on");
            }),
            (c.unbindUIDraggableEvents = function (t) {
                this._bindUIDraggableEvents(t, "off");
            }),
            (c._bindUIDraggableEvents = function (t, e) {
                var i = this.handleUIDraggable;
                t[e]("dragstart", i.start)[e]("drag", i.drag)[e]("dragstop", i.stop);
            });
        var h = c.destroy;
        return (
            (c.destroy = function () {
                h.apply(this, arguments), (this.isEnabled = !1);
            }),
            (l.Rect = i),
            (l.Packer = n),
            l
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.EvEmitter = e());
    })(this, function () {
        function t() {}
        var e = t.prototype;
        return (
            (e.on = function (t, e) {
                if (t && e) {
                    var i = (this._events = this._events || {}),
                        n = (i[t] = i[t] || []);
                    return -1 == n.indexOf(e) && n.push(e), this;
                }
            }),
            (e.once = function (t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = (this._onceEvents = this._onceEvents || {});
                    return ((i[t] = i[t] || [])[e] = !0), this;
                }
            }),
            (e.off = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var n = i.indexOf(e);
                    return -1 != n && i.splice(n, 1), this;
                }
            }),
            (e.emitEvent = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var n = 0,
                        o = i[n];
                    e = e || [];
                    for (var r = this._onceEvents && this._onceEvents[t]; o; ) {
                        var s = r && r[o];
                        s && (this.off(t, o), delete r[o]), o.apply(this, e), (n += s ? 0 : 1), (o = i[n]);
                    }
                    return this;
                }
            }),
            t
        );
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define(["ev-emitter/ev-emitter"], function (i) {
                  return e(t, i);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("ev-emitter")))
            : (t.imagesLoaded = e(t, t.EvEmitter));
    })(window, function t(e, i) {
        function n(t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }
        function o(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if ("number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e;
        }
        function r(t, e, i) {
            if (!(this instanceof r)) return new r(t, e, i);
            "string" == typeof t && (t = document.querySelectorAll(t)),
                (this.elements = o(t)),
                (this.options = n({}, this.options)),
                "function" == typeof e ? (i = e) : n(this.options, e),
                i && this.on("always", i),
                this.getImages(),
                $ && (this.jqDeferred = new $.Deferred()),
                setTimeout(
                    function () {
                        this.check();
                    }.bind(this)
                );
        }
        function s(t) {
            this.img = t;
        }
        function a(t, e) {
            (this.url = t), (this.element = e), (this.img = new Image());
        }
        var $ = e.jQuery,
            l = e.console;
        (r.prototype = Object.create(i.prototype)),
            (r.prototype.options = {}),
            (r.prototype.getImages = function () {
                (this.images = []), this.elements.forEach(this.addElementImages, this);
            }),
            (r.prototype.addElementImages = function (t) {
                "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
                var e = t.nodeType;
                if (e && c[e]) {
                    for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                        var o = i[n];
                        this.addImage(o);
                    }
                    if ("string" == typeof this.options.background) {
                        var r = t.querySelectorAll(this.options.background);
                        for (n = 0; n < r.length; n++) {
                            var s = r[n];
                            this.addElementBackgroundImages(s);
                        }
                    }
                }
            });
        var c = { 1: !0, 9: !0, 11: !0 };
        return (
            (r.prototype.addElementBackgroundImages = function (t) {
                var e = getComputedStyle(t);
                if (e)
                    for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n; ) {
                        var o = n && n[2];
                        o && this.addBackground(o, t), (n = i.exec(e.backgroundImage));
                    }
            }),
            (r.prototype.addImage = function (t) {
                var e = new s(t);
                this.images.push(e);
            }),
            (r.prototype.addBackground = function (t, e) {
                var i = new a(t, e);
                this.images.push(i);
            }),
            (r.prototype.check = function () {
                function t(t, i, n) {
                    setTimeout(function () {
                        e.progress(t, i, n);
                    });
                }
                var e = this;
                if (((this.progressedCount = 0), (this.hasAnyBroken = !1), !this.images.length)) return void this.complete();
                this.images.forEach(function (e) {
                    e.once("progress", t), e.check();
                });
            }),
            (r.prototype.progress = function (t, e, i) {
                this.progressedCount++,
                    (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
                    this.emitEvent("progress", [this, t, e]),
                    this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
                    this.progressedCount == this.images.length && this.complete(),
                    this.options.debug && l && l.log("progress: " + i, t, e);
            }),
            (r.prototype.complete = function () {
                var t = this.hasAnyBroken ? "fail" : "done";
                if (((this.isComplete = !0), this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred)) {
                    var e = this.hasAnyBroken ? "reject" : "resolve";
                    this.jqDeferred[e](this);
                }
            }),
            (s.prototype = Object.create(i.prototype)),
            (s.prototype.check = function () {
                if (this.getIsImageComplete()) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
                (this.proxyImage = new Image()),
                    this.proxyImage.addEventListener("load", this),
                    this.proxyImage.addEventListener("error", this),
                    this.img.addEventListener("load", this),
                    this.img.addEventListener("error", this),
                    (this.proxyImage.src = this.img.src);
            }),
            (s.prototype.getIsImageComplete = function () {
                return this.img.complete && void 0 !== this.img.naturalWidth;
            }),
            (s.prototype.confirm = function (t, e) {
                (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
            }),
            (s.prototype.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (s.prototype.onload = function () {
                this.confirm(!0, "onload"), this.unbindEvents();
            }),
            (s.prototype.onerror = function () {
                this.confirm(!1, "onerror"), this.unbindEvents();
            }),
            (s.prototype.unbindEvents = function () {
                this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
            }),
            (a.prototype = Object.create(s.prototype)),
            (a.prototype.check = function () {
                this.img.addEventListener("load", this), this.img.addEventListener("error", this), (this.img.src = this.url), this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
            }),
            (a.prototype.unbindEvents = function () {
                this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
            }),
            (a.prototype.confirm = function (t, e) {
                (this.isLoaded = t), this.emitEvent("progress", [this, this.element, e]);
            }),
            (r.makeJQueryPlugin = function (t) {
                (t = t || e.jQuery) &&
                    (($ = t),
                    ($.fn.imagesLoaded = function (t, e) {
                        return new r(this, t, e).jqDeferred.promise($(this));
                    }));
            }),
            r.makeJQueryPlugin(),
            r
        );
    }),
    (function ($) {
        "use strict";
        $.fn.fitVids = function (t) {
            var e = { customSelector: null };
            if (!document.getElementById("fit-vids-style")) {
                var i = document.createElement("div"),
                    n = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
                (i.className = "fit-vids-style"),
                    (i.id = "fit-vids-style"),
                    (i.style.display = "none"),
                    (i.innerHTML =
                        "&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>"),
                    n.parentNode.insertBefore(i, n);
            }
            return (
                t && $.extend(e, t),
                this.each(function () {
                    var t = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
                    e.customSelector && t.push(e.customSelector);
                    var i = $(this).find(t.join(","));
                    (i = i.not("object object")),
                        i.each(function () {
                            var t = $(this);
                            if (!(("embed" === this.tagName.toLowerCase() && t.parent("object").length) || t.parent(".fluid-width-video-wrapper").length)) {
                                var e = "object" === this.tagName.toLowerCase() || (t.attr("height") && !isNaN(parseInt(t.attr("height"), 10))) ? parseInt(t.attr("height"), 10) : t.height(),
                                    i = isNaN(parseInt(t.attr("width"), 10)) ? t.width() : parseInt(t.attr("width"), 10),
                                    n = e / i;
                                if (!t.attr("id")) {
                                    var o = "fitvid" + Math.floor(999999 * Math.random());
                                    t.attr("id", o);
                                }
                                t
                                    .wrap('<div class="fluid-width-video-wrapper"></div>')
                                    .parent(".fluid-width-video-wrapper")
                                    .css("padding-top", 100 * n + "%"),
                                    t.removeAttr("height").removeAttr("width");
                            }
                        });
                })
            );
        };
    })(window.jQuery || window.Zepto),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
                  return e(t, i);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("jquery")))
            : (t.jQueryBridget = e(t, t.jQuery));
    })(window, function (t, e) {
        "use strict";
        function i(i, r, a) {
            function l(t, e, n) {
                var o,
                    r = "$()." + i + '("' + e + '")';
                return (
                    t.each(function (t, l) {
                        var c = a.data(l, i);
                        if (!c) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                        var u = c[e];
                        if (!u || "_" == e.charAt(0)) return void s(r + " is not a valid method");
                        var h = u.apply(c, n);
                        o = void 0 === o ? h : o;
                    }),
                    void 0 !== o ? o : t
                );
            }
            function c(t, e) {
                t.each(function (t, n) {
                    var o = a.data(n, i);
                    o ? (o.option(e), o._init()) : ((o = new r(n, e)), a.data(n, i, o));
                });
            }
            (a = a || e || t.jQuery) &&
                (r.prototype.option ||
                    (r.prototype.option = function (t) {
                        a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
                    }),
                (a.fn[i] = function (t) {
                    if ("string" == typeof t) {
                        return l(this, t, o.call(arguments, 1));
                    }
                    return c(this, t), this;
                }),
                n(a));
        }
        function n(t) {
            !t || (t && t.bridget) || (t.bridget = i);
        }
        var o = Array.prototype.slice,
            r = t.console,
            s =
                void 0 === r
                    ? function () {}
                    : function (t) {
                          r.error(t);
                      };
        return n(e || t.jQuery), i;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.EvEmitter = e());
    })("undefined" != typeof window ? window : this, function () {
        function t() {}
        var e = t.prototype;
        return (
            (e.on = function (t, e) {
                if (t && e) {
                    var i = (this._events = this._events || {}),
                        n = (i[t] = i[t] || []);
                    return -1 == n.indexOf(e) && n.push(e), this;
                }
            }),
            (e.once = function (t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = (this._onceEvents = this._onceEvents || {});
                    return ((i[t] = i[t] || {})[e] = !0), this;
                }
            }),
            (e.off = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var n = i.indexOf(e);
                    return -1 != n && i.splice(n, 1), this;
                }
            }),
            (e.emitEvent = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    (i = i.slice(0)), (e = e || []);
                    for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                        var r = i[o];
                        n && n[r] && (this.off(t, r), delete n[r]), r.apply(this, e);
                    }
                    return this;
                }
            }),
            (e.allOff = function () {
                delete this._events, delete this._onceEvents;
            }),
            t
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.getSize = e());
    })(window, function () {
        "use strict";
        function t(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e;
        }
        function e() {}
        function i() {
            for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < c; e++) {
                t[l[e]] = 0;
            }
            return t;
        }
        function n(t) {
            var e = getComputedStyle(t);
            return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e;
        }
        function o() {
            if (!u) {
                u = !0;
                var e = document.createElement("div");
                (e.style.width = "200px"), (e.style.padding = "1px 2px 3px 4px"), (e.style.borderStyle = "solid"), (e.style.borderWidth = "1px 2px 3px 4px"), (e.style.boxSizing = "border-box");
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var o = n(e);
                (s = 200 == Math.round(t(o.width))), (r.isBoxSizeOuter = s), i.removeChild(e);
            }
        }
        function r(e) {
            if ((o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType)) {
                var r = n(e);
                if ("none" == r.display) return i();
                var a = {};
                (a.width = e.offsetWidth), (a.height = e.offsetHeight);
                for (var u = (a.isBorderBox = "border-box" == r.boxSizing), h = 0; h < c; h++) {
                    var d = l[h],
                        f = r[d],
                        p = parseFloat(f);
                    a[d] = isNaN(p) ? 0 : p;
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
                var k = t(r.height);
                return !1 !== k && (a.height = k + (x ? 0 : m + w)), (a.innerWidth = a.width - (g + b)), (a.innerHeight = a.height - (m + w)), (a.outerWidth = a.width + v), (a.outerHeight = a.height + y), a;
            }
        }
        var s,
            a =
                "undefined" == typeof console
                    ? e
                    : function (t) {
                          console.error(t);
                      },
            l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            c = l.length,
            u = !1;
        return r;
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.matchesSelector = e());
    })(window, function () {
        "use strict";
        var t = (function () {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var n = e[i],
                    o = n + "MatchesSelector";
                if (t[o]) return o;
            }
        })();
        return function (e, i) {
            return e[t](i);
        };
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
                  return e(t, i);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("desandro-matches-selector")))
            : (t.fizzyUIUtils = e(t, t.matchesSelector));
    })(window, function (t, e) {
        var i = {};
        (i.extend = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }),
            (i.modulo = function (t, e) {
                return ((t % e) + e) % e;
            });
        var n = Array.prototype.slice;
        (i.makeArray = function (t) {
            return Array.isArray(t) ? t : null === t || void 0 === t ? [] : "object" == typeof t && "number" == typeof t.length ? n.call(t) : [t];
        }),
            (i.removeFrom = function (t, e) {
                var i = t.indexOf(e);
                -1 != i && t.splice(i, 1);
            }),
            (i.getParent = function (t, i) {
                for (; t.parentNode && t != document.body; ) if (((t = t.parentNode), e(t, i))) return t;
            }),
            (i.getQueryElement = function (t) {
                return "string" == typeof t ? document.querySelector(t) : t;
            }),
            (i.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (i.filterFindElements = function (t, n) {
                t = i.makeArray(t);
                var o = [];
                return (
                    t.forEach(function (t) {
                        if (t instanceof HTMLElement) {
                            if (!n) return void o.push(t);
                            e(t, n) && o.push(t);
                            for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r]);
                        }
                    }),
                    o
                );
            }),
            (i.debounceMethod = function (t, e, i) {
                i = i || 100;
                var n = t.prototype[e],
                    o = e + "Timeout";
                t.prototype[e] = function () {
                    var t = this[o];
                    clearTimeout(t);
                    var e = arguments,
                        r = this;
                    this[o] = setTimeout(function () {
                        n.apply(r, e), delete r[o];
                    }, i);
                };
            }),
            (i.docReady = function (t) {
                var e = document.readyState;
                "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
            }),
            (i.toDashed = function (t) {
                return t
                    .replace(/(.)([A-Z])/g, function (t, e, i) {
                        return e + "-" + i;
                    })
                    .toLowerCase();
            });
        var o = t.console;
        return (
            (i.htmlInit = function (e, n) {
                i.docReady(function () {
                    var r = i.toDashed(n),
                        s = "data-" + r,
                        a = document.querySelectorAll("[" + s + "]"),
                        l = document.querySelectorAll(".js-" + r),
                        c = i.makeArray(a).concat(i.makeArray(l)),
                        u = s + "-options",
                        h = t.jQuery;
                    c.forEach(function (t) {
                        var i,
                            r = t.getAttribute(s) || t.getAttribute(u);
                        try {
                            i = r && JSON.parse(r);
                        } catch (e) {
                            return void (o && o.error("Error parsing " + s + " on " + t.className + ": " + e));
                        }
                        var a = new e(t, i);
                        h && h.data(t, n, a);
                    });
                });
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("flickity/js/cell", ["get-size/get-size"], function (i) {
                  return e(t, i);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("get-size")))
            : ((t.Flickity = t.Flickity || {}), (t.Flickity.Cell = e(t, t.getSize)));
    })(window, function (t, e) {
        function i(t, e) {
            (this.element = t), (this.parent = e), this.create();
        }
        var n = i.prototype;
        return (
            (n.create = function () {
                (this.element.style.position = "absolute"), this.element.setAttribute("aria-selected", "false"), (this.x = 0), (this.shift = 0);
            }),
            (n.destroy = function () {
                this.element.style.position = "";
                var t = this.parent.originSide;
                this.element.removeAttribute("aria-selected"), (this.element.style[t] = "");
            }),
            (n.getSize = function () {
                this.size = e(this.element);
            }),
            (n.setPosition = function (t) {
                (this.x = t), this.updateTarget(), this.renderPosition(t);
            }),
            (n.updateTarget = n.setDefaultTarget = function () {
                var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
                this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign;
            }),
            (n.renderPosition = function (t) {
                var e = this.parent.originSide;
                this.element.style[e] = this.parent.getPositionValue(t);
            }),
            (n.wrapShift = function (t) {
                (this.shift = t), this.renderPosition(this.x + this.parent.slideableWidth * t);
            }),
            (n.remove = function () {
                this.element.parentNode.removeChild(this.element);
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == typeof module && module.exports ? (module.exports = e()) : ((t.Flickity = t.Flickity || {}), (t.Flickity.Slide = e()));
    })(window, function () {
        "use strict";
        function t(t) {
            (this.parent = t), (this.isOriginLeft = "left" == t.originSide), (this.cells = []), (this.outerWidth = 0), (this.height = 0);
        }
        var e = t.prototype;
        return (
            (e.addCell = function (t) {
                if ((this.cells.push(t), (this.outerWidth += t.size.outerWidth), (this.height = Math.max(t.size.outerHeight, this.height)), 1 == this.cells.length)) {
                    this.x = t.x;
                    var e = this.isOriginLeft ? "marginLeft" : "marginRight";
                    this.firstMargin = t.size[e];
                }
            }),
            (e.updateTarget = function () {
                var t = this.isOriginLeft ? "marginRight" : "marginLeft",
                    e = this.getLastCell(),
                    i = e ? e.size[t] : 0,
                    n = this.outerWidth - (this.firstMargin + i);
                this.target = this.x + this.firstMargin + n * this.parent.cellAlign;
            }),
            (e.getLastCell = function () {
                return this.cells[this.cells.length - 1];
            }),
            (e.select = function () {
                this.changeSelected(!0);
            }),
            (e.unselect = function () {
                this.changeSelected(!1);
            }),
            (e.changeSelected = function (t) {
                var e = t ? "add" : "remove";
                this.cells.forEach(function (i) {
                    i.element.classList[e]("is-selected"), i.element.setAttribute("aria-selected", t.toString());
                });
            }),
            (e.getCellElements = function () {
                return this.cells.map(function (t) {
                    return t.element;
                });
            }),
            t
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (i) {
                  return e(t, i);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("fizzy-ui-utils")))
            : ((t.Flickity = t.Flickity || {}), (t.Flickity.animatePrototype = e(t, t.fizzyUIUtils)));
    })(window, function (t, e) {
        var i = {};
        return (
            (i.startAnimation = function () {
                this.isAnimating || ((this.isAnimating = !0), (this.restingFrames = 0), this.animate());
            }),
            (i.animate = function () {
                this.applyDragForce(), this.applySelectedAttraction();
                var t = this.x;
                if ((this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating)) {
                    var e = this;
                    requestAnimationFrame(function () {
                        e.animate();
                    });
                }
            }),
            (i.positionSlider = function () {
                var t = this.x;
                this.options.wrapAround && this.cells.length > 1 && ((t = e.modulo(t, this.slideableWidth)), (t -= this.slideableWidth), this.shiftWrapCells(t)), (t += this.cursorPosition), (t = this.options.rightToLeft ? -t : t);
                var i = this.getPositionValue(t);
                this.slider.style.transform = this.isAnimating ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")";
                var n = this.slides[0];
                if (n) {
                    var o = -this.x - n.target,
                        r = o / this.slidesWidth;
                    this.dispatchEvent("scroll", null, [r, o]);
                }
            }),
            (i.positionSliderAtSelected = function () {
                this.cells.length && ((this.x = -this.selectedSlide.target), (this.velocity = 0), this.positionSlider());
            }),
            (i.getPositionValue = function (t) {
                return this.options.percentPosition ? 0.01 * Math.round((t / this.size.innerWidth) * 1e4) + "%" : Math.round(t) + "px";
            }),
            (i.settle = function (t) {
                this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++,
                    this.restingFrames > 2 && ((this.isAnimating = !1), delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]));
            }),
            (i.shiftWrapCells = function (t) {
                var e = this.cursorPosition + t;
                this._shiftCells(this.beforeShiftCells, e, -1);
                var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
                this._shiftCells(this.afterShiftCells, i, 1);
            }),
            (i._shiftCells = function (t, e, i) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n],
                        r = e > 0 ? i : 0;
                    o.wrapShift(r), (e -= o.size.outerWidth);
                }
            }),
            (i._unshiftCells = function (t) {
                if (t && t.length) for (var e = 0; e < t.length; e++) t[e].wrapShift(0);
            }),
            (i.integratePhysics = function () {
                (this.x += this.velocity), (this.velocity *= this.getFrictionFactor());
            }),
            (i.applyForce = function (t) {
                this.velocity += t;
            }),
            (i.getFrictionFactor = function () {
                return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"];
            }),
            (i.getRestingPosition = function () {
                return this.x + this.velocity / (1 - this.getFrictionFactor());
            }),
            (i.applyDragForce = function () {
                if (this.isDraggable && this.isPointerDown) {
                    var t = this.dragX - this.x,
                        e = t - this.velocity;
                    this.applyForce(e);
                }
            }),
            (i.applySelectedAttraction = function () {
                if ((!this.isDraggable || !this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
                    var t = -1 * this.selectedSlide.target - this.x,
                        e = t * this.options.selectedAttraction;
                    this.applyForce(e);
                }
            }),
            i
        );
    }),
    (function (t, e) {
        if ("function" == typeof define && define.amd)
            define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function (i, n, o, r, s, a) {
                return e(t, i, n, o, r, s, a);
            });
        else if ("object" == typeof module && module.exports) module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));
        else {
            var i = t.Flickity;
            t.Flickity = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, i.Cell, i.Slide, i.animatePrototype);
        }
    })(window, function (t, e, i, n, o, r, s) {
        function a(t, e) {
            for (t = n.makeArray(t); t.length; ) e.appendChild(t.shift());
        }
        function l(t, e) {
            var i = n.getQueryElement(t);
            if (!i) return void (h && h.error("Bad element for Flickity: " + (i || t)));
            if (((this.element = i), this.element.flickityGUID)) {
                var o = f[this.element.flickityGUID];
                return o.option(e), o;
            }
            c && (this.$element = c(this.element)), (this.options = n.extend({}, this.constructor.defaults)), this.option(e), this._create();
        }
        var c = t.jQuery,
            u = t.getComputedStyle,
            h = t.console,
            d = 0,
            f = {};
        (l.defaults = { accessibility: !0, cellAlign: "center", freeScrollFriction: 0.075, friction: 0.28, namespaceJQueryEvents: !0, percentPosition: !0, resize: !0, selectedAttraction: 0.025, setGallerySize: !0 }), (l.createMethods = []);
        var p = l.prototype;
        n.extend(p, e.prototype),
            (p._create = function () {
                var e = (this.guid = ++d);
                (this.element.flickityGUID = e),
                    (f[e] = this),
                    (this.selectedIndex = 0),
                    (this.restingFrames = 0),
                    (this.x = 0),
                    (this.velocity = 0),
                    (this.originSide = this.options.rightToLeft ? "right" : "left"),
                    (this.viewport = document.createElement("div")),
                    (this.viewport.className = "flickity-viewport"),
                    this._createSlider(),
                    (this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this);
                for (var i in this.options.on) {
                    var n = this.options.on[i];
                    this.on(i, n);
                }
                l.createMethods.forEach(function (t) {
                    this[t]();
                }, this),
                    this.options.watchCSS ? this.watchCSS() : this.activate();
            }),
            (p.option = function (t) {
                n.extend(this.options, t);
            }),
            (p.activate = function () {
                if (!this.isActive) {
                    (this.isActive = !0), this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize();
                    a(this._filterFindCellElements(this.element.children), this.slider),
                        this.viewport.appendChild(this.slider),
                        this.element.appendChild(this.viewport),
                        this.reloadCells(),
                        this.options.accessibility && ((this.element.tabIndex = 0), this.element.addEventListener("keydown", this)),
                        this.emitEvent("activate");
                    var t,
                        e = this.options.initialIndex;
                    (t = this.isInitActivated ? this.selectedIndex : void 0 !== e && this.cells[e] ? e : 0), this.select(t, !1, !0), (this.isInitActivated = !0), this.dispatchEvent("ready");
                }
            }),
            (p._createSlider = function () {
                var t = document.createElement("div");
                (t.className = "flickity-slider"), (t.style[this.originSide] = 0), (this.slider = t);
            }),
            (p._filterFindCellElements = function (t) {
                return n.filterFindElements(t, this.options.cellSelector);
            }),
            (p.reloadCells = function () {
                (this.cells = this._makeCells(this.slider.children)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize();
            }),
            (p._makeCells = function (t) {
                return this._filterFindCellElements(t).map(function (t) {
                    return new o(t, this);
                }, this);
            }),
            (p.getLastCell = function () {
                return this.cells[this.cells.length - 1];
            }),
            (p.getLastSlide = function () {
                return this.slides[this.slides.length - 1];
            }),
            (p.positionCells = function () {
                this._sizeCells(this.cells), this._positionCells(0);
            }),
            (p._positionCells = function (t) {
                (t = t || 0), (this.maxCellHeight = t ? this.maxCellHeight || 0 : 0);
                var e = 0;
                if (t > 0) {
                    var i = this.cells[t - 1];
                    e = i.x + i.size.outerWidth;
                }
                for (var n = this.cells.length, o = t; o < n; o++) {
                    var r = this.cells[o];
                    r.setPosition(e), (e += r.size.outerWidth), (this.maxCellHeight = Math.max(r.size.outerHeight, this.maxCellHeight));
                }
                (this.slideableWidth = e), this.updateSlides(), this._containSlides(), (this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0);
            }),
            (p._sizeCells = function (t) {
                t.forEach(function (t) {
                    t.getSize();
                });
            }),
            (p.updateSlides = function () {
                if (((this.slides = []), this.cells.length)) {
                    var t = new r(this);
                    this.slides.push(t);
                    var e = "left" == this.originSide,
                        i = e ? "marginRight" : "marginLeft",
                        n = this._getCanCellFit();
                    this.cells.forEach(function (e, o) {
                        if (!t.cells.length) return void t.addCell(e);
                        var s = t.outerWidth - t.firstMargin + (e.size.outerWidth - e.size[i]);
                        n.call(this, o, s) ? t.addCell(e) : (t.updateTarget(), (t = new r(this)), this.slides.push(t), t.addCell(e));
                    }, this),
                        t.updateTarget(),
                        this.updateSelectedSlide();
                }
            }),
            (p._getCanCellFit = function () {
                var t = this.options.groupCells;
                if (!t)
                    return function () {
                        return !1;
                    };
                if ("number" == typeof t) {
                    var e = parseInt(t, 10);
                    return function (t) {
                        return t % e != 0;
                    };
                }
                var i = "string" == typeof t && t.match(/^(\d+)%$/),
                    n = i ? parseInt(i[1], 10) / 100 : 1;
                return function (t, e) {
                    return e <= (this.size.innerWidth + 1) * n;
                };
            }),
            (p._init = p.reposition = function () {
                this.positionCells(), this.positionSliderAtSelected();
            }),
            (p.getSize = function () {
                (this.size = i(this.element)), this.setCellAlign(), (this.cursorPosition = this.size.innerWidth * this.cellAlign);
            });
        var g = { center: { left: 0.5, right: 0.5 }, left: { left: 0, right: 1 }, right: { right: 0, left: 1 } };
        return (
            (p.setCellAlign = function () {
                var t = g[this.options.cellAlign];
                this.cellAlign = t ? t[this.originSide] : this.options.cellAlign;
            }),
            (p.setGallerySize = function () {
                if (this.options.setGallerySize) {
                    var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
                    this.viewport.style.height = t + "px";
                }
            }),
            (p._getWrapShiftCells = function () {
                if (this.options.wrapAround) {
                    this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
                    var t = this.cursorPosition,
                        e = this.cells.length - 1;
                    (this.beforeShiftCells = this._getGapCells(t, e, -1)), (t = this.size.innerWidth - this.cursorPosition), (this.afterShiftCells = this._getGapCells(t, 0, 1));
                }
            }),
            (p._getGapCells = function (t, e, i) {
                for (var n = []; t > 0; ) {
                    var o = this.cells[e];
                    if (!o) break;
                    n.push(o), (e += i), (t -= o.size.outerWidth);
                }
                return n;
            }),
            (p._containSlides = function () {
                if (this.options.contain && !this.options.wrapAround && this.cells.length) {
                    var t = this.options.rightToLeft,
                        e = t ? "marginRight" : "marginLeft",
                        i = t ? "marginLeft" : "marginRight",
                        n = this.slideableWidth - this.getLastCell().size[i],
                        o = n < this.size.innerWidth,
                        r = this.cursorPosition + this.cells[0].size[e],
                        s = n - this.size.innerWidth * (1 - this.cellAlign);
                    this.slides.forEach(function (t) {
                        o ? (t.target = n * this.cellAlign) : ((t.target = Math.max(t.target, r)), (t.target = Math.min(t.target, s)));
                    }, this);
                }
            }),
            (p.dispatchEvent = function (t, e, i) {
                var n = e ? [e].concat(i) : i;
                if ((this.emitEvent(t, n), c && this.$element)) {
                    t += this.options.namespaceJQueryEvents ? ".flickity" : "";
                    var o = t;
                    if (e) {
                        var r = c.Event(e);
                        (r.type = t), (o = r);
                    }
                    this.$element.trigger(o, i);
                }
            }),
            (p.select = function (t, e, i) {
                if (this.isActive && ((t = parseInt(t, 10)), this._wrapSelect(t), (this.options.wrapAround || e) && (t = n.modulo(t, this.slides.length)), this.slides[t])) {
                    var o = this.selectedIndex;
                    (this.selectedIndex = t),
                        this.updateSelectedSlide(),
                        i ? this.positionSliderAtSelected() : this.startAnimation(),
                        this.options.adaptiveHeight && this.setGallerySize(),
                        this.dispatchEvent("select", null, [t]),
                        t != o && this.dispatchEvent("change", null, [t]),
                        this.dispatchEvent("cellSelect");
                }
            }),
            (p._wrapSelect = function (t) {
                var e = this.slides.length;
                if (!(this.options.wrapAround && e > 1)) return t;
                var i = n.modulo(t, e),
                    o = Math.abs(i - this.selectedIndex),
                    r = Math.abs(i + e - this.selectedIndex),
                    s = Math.abs(i - e - this.selectedIndex);
                !this.isDragSelect && r < o ? (t += e) : !this.isDragSelect && s < o && (t -= e), t < 0 ? (this.x -= this.slideableWidth) : t >= e && (this.x += this.slideableWidth);
            }),
            (p.previous = function (t, e) {
                this.select(this.selectedIndex - 1, t, e);
            }),
            (p.next = function (t, e) {
                this.select(this.selectedIndex + 1, t, e);
            }),
            (p.updateSelectedSlide = function () {
                var t = this.slides[this.selectedIndex];
                t &&
                    (this.unselectSelectedSlide(),
                    (this.selectedSlide = t),
                    t.select(),
                    (this.selectedCells = t.cells),
                    (this.selectedElements = t.getCellElements()),
                    (this.selectedCell = t.cells[0]),
                    (this.selectedElement = this.selectedElements[0]));
            }),
            (p.unselectSelectedSlide = function () {
                this.selectedSlide && this.selectedSlide.unselect();
            }),
            (p.selectCell = function (t, e, i) {
                var n = this.queryCell(t);
                if (n) {
                    var o = this.getCellSlideIndex(n);
                    this.select(o, e, i);
                }
            }),
            (p.getCellSlideIndex = function (t) {
                for (var e = 0; e < this.slides.length; e++) {
                    if (-1 != this.slides[e].cells.indexOf(t)) return e;
                }
            }),
            (p.getCell = function (t) {
                for (var e = 0; e < this.cells.length; e++) {
                    var i = this.cells[e];
                    if (i.element == t) return i;
                }
            }),
            (p.getCells = function (t) {
                t = n.makeArray(t);
                var e = [];
                return (
                    t.forEach(function (t) {
                        var i = this.getCell(t);
                        i && e.push(i);
                    }, this),
                    e
                );
            }),
            (p.getCellElements = function () {
                return this.cells.map(function (t) {
                    return t.element;
                });
            }),
            (p.getParentCell = function (t) {
                var e = this.getCell(t);
                return e || ((t = n.getParent(t, ".flickity-slider > *")), this.getCell(t));
            }),
            (p.getAdjacentCellElements = function (t, e) {
                if (!t) return this.selectedSlide.getCellElements();
                e = void 0 === e ? this.selectedIndex : e;
                var i = this.slides.length;
                if (1 + 2 * t >= i) return this.getCellElements();
                for (var o = [], r = e - t; r <= e + t; r++) {
                    var s = this.options.wrapAround ? n.modulo(r, i) : r,
                        a = this.slides[s];
                    a && (o = o.concat(a.getCellElements()));
                }
                return o;
            }),
            (p.queryCell = function (t) {
                return "number" == typeof t ? this.cells[t] : ("string" == typeof t && (t = this.element.querySelector(t)), this.getCell(t));
            }),
            (p.uiChange = function () {
                this.emitEvent("uiChange");
            }),
            (p.childUIPointerDown = function (t) {
                this.emitEvent("childUIPointerDown", [t]);
            }),
            (p.onresize = function () {
                this.watchCSS(), this.resize();
            }),
            n.debounceMethod(l, "onresize", 150),
            (p.resize = function () {
                if (this.isActive) {
                    this.getSize(), this.options.wrapAround && (this.x = n.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
                    var t = this.selectedElements && this.selectedElements[0];
                    this.selectCell(t, !1, !0);
                }
            }),
            (p.watchCSS = function () {
                this.options.watchCSS && (-1 != u(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate());
            }),
            (p.onkeydown = function (t) {
                var e = document.activeElement && document.activeElement != this.element;
                if (this.options.accessibility && !e) {
                    var i = l.keyboardHandlers[t.keyCode];
                    i && i.call(this);
                }
            }),
            (l.keyboardHandlers = {
                37: function () {
                    var t = this.options.rightToLeft ? "next" : "previous";
                    this.uiChange(), this[t]();
                },
                39: function () {
                    var t = this.options.rightToLeft ? "previous" : "next";
                    this.uiChange(), this[t]();
                },
            }),
            (p.focus = function () {
                var e = t.pageYOffset;
                this.element.focus({ preventScroll: !0 }), t.pageYOffset != e && t.scrollTo(t.pageXOffset, e);
            }),
            (p.deactivate = function () {
                this.isActive &&
                    (this.element.classList.remove("flickity-enabled"),
                    this.element.classList.remove("flickity-rtl"),
                    this.unselectSelectedSlide(),
                    this.cells.forEach(function (t) {
                        t.destroy();
                    }),
                    this.element.removeChild(this.viewport),
                    a(this.slider.children, this.element),
                    this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)),
                    (this.isActive = !1),
                    this.emitEvent("deactivate"));
            }),
            (p.destroy = function () {
                this.deactivate(), t.removeEventListener("resize", this), this.emitEvent("destroy"), c && this.$element && c.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete f[this.guid];
            }),
            n.extend(p, s),
            (l.data = function (t) {
                t = n.getQueryElement(t);
                var e = t && t.flickityGUID;
                return e && f[e];
            }),
            n.htmlInit(l, "flickity"),
            c && c.bridget && c.bridget("flickity", l),
            (l.setJQuery = function (t) {
                c = t;
            }),
            (l.Cell = o),
            l
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function (i) {
                  return e(t, i);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("ev-emitter")))
            : (t.Unipointer = e(t, t.EvEmitter));
    })(window, function (t, e) {
        function i() {}
        function n() {}
        var o = (n.prototype = Object.create(e.prototype));
        (o.bindStartEvent = function (t) {
            this._bindStartEvent(t, !0);
        }),
            (o.unbindStartEvent = function (t) {
                this._bindStartEvent(t, !1);
            }),
            (o._bindStartEvent = function (e, i) {
                i = void 0 === i || i;
                var n = i ? "addEventListener" : "removeEventListener",
                    o = "mousedown";
                t.PointerEvent ? (o = "pointerdown") : "ontouchstart" in t && (o = "touchstart"), e[n](o, this);
            }),
            (o.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (o.getTouch = function (t) {
                for (var e = 0; e < t.length; e++) {
                    var i = t[e];
                    if (i.identifier == this.pointerIdentifier) return i;
                }
            }),
            (o.onmousedown = function (t) {
                var e = t.button;
                (e && 0 !== e && 1 !== e) || this._pointerDown(t, t);
            }),
            (o.ontouchstart = function (t) {
                this._pointerDown(t, t.changedTouches[0]);
            }),
            (o.onpointerdown = function (t) {
                this._pointerDown(t, t);
            }),
            (o._pointerDown = function (t, e) {
                t.button || this.isPointerDown || ((this.isPointerDown = !0), (this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier), this.pointerDown(t, e));
            }),
            (o.pointerDown = function (t, e) {
                this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]);
            });
        var r = { mousedown: ["mousemove", "mouseup"], touchstart: ["touchmove", "touchend", "touchcancel"], pointerdown: ["pointermove", "pointerup", "pointercancel"] };
        return (
            (o._bindPostStartEvents = function (e) {
                if (e) {
                    var i = r[e.type];
                    i.forEach(function (e) {
                        t.addEventListener(e, this);
                    }, this),
                        (this._boundPointerEvents = i);
                }
            }),
            (o._unbindPostStartEvents = function () {
                this._boundPointerEvents &&
                    (this._boundPointerEvents.forEach(function (e) {
                        t.removeEventListener(e, this);
                    }, this),
                    delete this._boundPointerEvents);
            }),
            (o.onmousemove = function (t) {
                this._pointerMove(t, t);
            }),
            (o.onpointermove = function (t) {
                t.pointerId == this.pointerIdentifier && this._pointerMove(t, t);
            }),
            (o.ontouchmove = function (t) {
                var e = this.getTouch(t.changedTouches);
                e && this._pointerMove(t, e);
            }),
            (o._pointerMove = function (t, e) {
                this.pointerMove(t, e);
            }),
            (o.pointerMove = function (t, e) {
                this.emitEvent("pointerMove", [t, e]);
            }),
            (o.onmouseup = function (t) {
                this._pointerUp(t, t);
            }),
            (o.onpointerup = function (t) {
                t.pointerId == this.pointerIdentifier && this._pointerUp(t, t);
            }),
            (o.ontouchend = function (t) {
                var e = this.getTouch(t.changedTouches);
                e && this._pointerUp(t, e);
            }),
            (o._pointerUp = function (t, e) {
                this._pointerDone(), this.pointerUp(t, e);
            }),
            (o.pointerUp = function (t, e) {
                this.emitEvent("pointerUp", [t, e]);
            }),
            (o._pointerDone = function () {
                this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone();
            }),
            (o._pointerReset = function () {
                (this.isPointerDown = !1), delete this.pointerIdentifier;
            }),
            (o.pointerDone = i),
            (o.onpointercancel = function (t) {
                t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t);
            }),
            (o.ontouchcancel = function (t) {
                var e = this.getTouch(t.changedTouches);
                e && this._pointerCancel(t, e);
            }),
            (o._pointerCancel = function (t, e) {
                this._pointerDone(), this.pointerCancel(t, e);
            }),
            (o.pointerCancel = function (t, e) {
                this.emitEvent("pointerCancel", [t, e]);
            }),
            (n.getPointerPoint = function (t) {
                return { x: t.pageX, y: t.pageY };
            }),
            n
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("unidragger/unidragger", ["unipointer/unipointer"], function (i) {
                  return e(t, i);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("unipointer")))
            : (t.Unidragger = e(t, t.Unipointer));
    })(window, function (t, e) {
        function i() {}
        var n = (i.prototype = Object.create(e.prototype));
        (n.bindHandles = function () {
            this._bindHandles(!0);
        }),
            (n.unbindHandles = function () {
                this._bindHandles(!1);
            }),
            (n._bindHandles = function (e) {
                e = void 0 === e || e;
                for (var i = e ? "addEventListener" : "removeEventListener", n = e ? this._touchActionValue : "", o = 0; o < this.handles.length; o++) {
                    var r = this.handles[o];
                    this._bindStartEvent(r, e), r[i]("click", this), t.PointerEvent && (r.style.touchAction = n);
                }
            }),
            (n._touchActionValue = "none"),
            (n.pointerDown = function (t, e) {
                this.okayPointerDown(t) && ((this.pointerDownPointer = e), t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]));
            });
        var o = { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 },
            r = { radio: !0, checkbox: !0, button: !0, submit: !0, image: !0, file: !0 };
        return (
            (n.okayPointerDown = function (t) {
                var e = o[t.target.nodeName],
                    i = r[t.target.type],
                    n = !e || i;
                return n || this._pointerReset(), n;
            }),
            (n.pointerDownBlur = function () {
                var t = document.activeElement;
                t && t.blur && t != document.body && t.blur();
            }),
            (n.pointerMove = function (t, e) {
                var i = this._dragPointerMove(t, e);
                this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i);
            }),
            (n._dragPointerMove = function (t, e) {
                var i = { x: e.pageX - this.pointerDownPointer.pageX, y: e.pageY - this.pointerDownPointer.pageY };
                return !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i;
            }),
            (n.hasDragStarted = function (t) {
                return Math.abs(t.x) > 3 || Math.abs(t.y) > 3;
            }),
            (n.pointerUp = function (t, e) {
                this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e);
            }),
            (n._dragPointerUp = function (t, e) {
                this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e);
            }),
            (n._dragStart = function (t, e) {
                (this.isDragging = !0), (this.isPreventingClicks = !0), this.dragStart(t, e);
            }),
            (n.dragStart = function (t, e) {
                this.emitEvent("dragStart", [t, e]);
            }),
            (n._dragMove = function (t, e, i) {
                this.isDragging && this.dragMove(t, e, i);
            }),
            (n.dragMove = function (t, e, i) {
                t.preventDefault(), this.emitEvent("dragMove", [t, e, i]);
            }),
            (n._dragEnd = function (t, e) {
                (this.isDragging = !1),
                    setTimeout(
                        function () {
                            delete this.isPreventingClicks;
                        }.bind(this)
                    ),
                    this.dragEnd(t, e);
            }),
            (n.dragEnd = function (t, e) {
                this.emitEvent("dragEnd", [t, e]);
            }),
            (n.onclick = function (t) {
                this.isPreventingClicks && t.preventDefault();
            }),
            (n._staticClick = function (t, e) {
                (this.isIgnoringMouseUp && "mouseup" == t.type) ||
                    (this.staticClick(t, e),
                    "mouseup" != t.type &&
                        ((this.isIgnoringMouseUp = !0),
                        setTimeout(
                            function () {
                                delete this.isIgnoringMouseUp;
                            }.bind(this),
                            400
                        )));
            }),
            (n.staticClick = function (t, e) {
                this.emitEvent("staticClick", [t, e]);
            }),
            (i.getPointerPoint = e.getPointerPoint),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function (i, n, o) {
                  return e(t, i, n, o);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")))
            : (t.Flickity = e(t, t.Flickity, t.Unidragger, t.fizzyUIUtils));
    })(window, function (t, e, i, n) {
        function o() {
            return { x: t.pageXOffset, y: t.pageYOffset };
        }
        n.extend(e.defaults, { draggable: ">1", dragThreshold: 3 }), e.createMethods.push("_createDrag");
        var r = e.prototype;
        n.extend(r, i.prototype), (r._touchActionValue = "pan-y");
        var s = "createTouch" in document,
            a = !1;
        (r._createDrag = function () {
            this.on("activate", this.onActivateDrag),
                this.on("uiChange", this._uiChangeDrag),
                this.on("childUIPointerDown", this._childUIPointerDownDrag),
                this.on("deactivate", this.onDeactivateDrag),
                this.on("cellChange", this.updateDraggable),
                s && !a && (t.addEventListener("touchmove", function () {}), (a = !0));
        }),
            (r.onActivateDrag = function () {
                (this.handles = [this.viewport]), this.bindHandles(), this.updateDraggable();
            }),
            (r.onDeactivateDrag = function () {
                this.unbindHandles(), this.element.classList.remove("is-draggable");
            }),
            (r.updateDraggable = function () {
                ">1" == this.options.draggable ? (this.isDraggable = this.slides.length > 1) : (this.isDraggable = this.options.draggable),
                    this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable");
            }),
            (r.bindDrag = function () {
                (this.options.draggable = !0), this.updateDraggable();
            }),
            (r.unbindDrag = function () {
                (this.options.draggable = !1), this.updateDraggable();
            }),
            (r._uiChangeDrag = function () {
                delete this.isFreeScrolling;
            }),
            (r._childUIPointerDownDrag = function (t) {
                t.preventDefault(), this.pointerDownFocus(t);
            }),
            (r.pointerDown = function (e, i) {
                if (!this.isDraggable) return void this._pointerDownDefault(e, i);
                this.okayPointerDown(e) &&
                    (this._pointerDownPreventDefault(e),
                    this.pointerDownFocus(e),
                    document.activeElement != this.element && this.pointerDownBlur(),
                    (this.dragX = this.x),
                    this.viewport.classList.add("is-pointer-down"),
                    (this.pointerDownScroll = o()),
                    t.addEventListener("scroll", this),
                    this._pointerDownDefault(e, i));
            }),
            (r._pointerDownDefault = function (t, e) {
                (this.pointerDownPointer = e), this._bindPostStartEvents(t), this.dispatchEvent("pointerDown", t, [e]);
            });
        var l = { INPUT: !0, TEXTAREA: !0, SELECT: !0 };
        return (
            (r.pointerDownFocus = function (t) {
                l[t.target.nodeName] || this.focus();
            }),
            (r._pointerDownPreventDefault = function (t) {
                var e = "touchstart" == t.type,
                    i = "touch" == t.pointerType,
                    n = l[t.target.nodeName];
                e || i || n || t.preventDefault();
            }),
            (r.hasDragStarted = function (t) {
                return Math.abs(t.x) > this.options.dragThreshold;
            }),
            (r.pointerUp = function (t, e) {
                delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e);
            }),
            (r.pointerDone = function () {
                t.removeEventListener("scroll", this), delete this.pointerDownScroll;
            }),
            (r.dragStart = function (e, i) {
                this.isDraggable && ((this.dragStartPosition = this.x), this.startAnimation(), t.removeEventListener("scroll", this), this.dispatchEvent("dragStart", e, [i]));
            }),
            (r.pointerMove = function (t, e) {
                var i = this._dragPointerMove(t, e);
                this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i);
            }),
            (r.dragMove = function (t, e, i) {
                if (this.isDraggable) {
                    t.preventDefault(), (this.previousDragX = this.dragX);
                    var n = this.options.rightToLeft ? -1 : 1;
                    this.options.wrapAround && (i.x = i.x % this.slideableWidth);
                    var o = this.dragStartPosition + i.x * n;
                    if (!this.options.wrapAround && this.slides.length) {
                        var r = Math.max(-this.slides[0].target, this.dragStartPosition);
                        o = o > r ? 0.5 * (o + r) : o;
                        var s = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                        o = o < s ? 0.5 * (o + s) : o;
                    }
                    (this.dragX = o), (this.dragMoveTime = new Date()), this.dispatchEvent("dragMove", t, [e, i]);
                }
            }),
            (r.dragEnd = function (t, e) {
                if (this.isDraggable) {
                    this.options.freeScroll && (this.isFreeScrolling = !0);
                    var i = this.dragEndRestingSelect();
                    if (this.options.freeScroll && !this.options.wrapAround) {
                        var n = this.getRestingPosition();
                        this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target;
                    } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
                    delete this.previousDragX, (this.isDragSelect = this.options.wrapAround), this.select(i), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e]);
                }
            }),
            (r.dragEndRestingSelect = function () {
                var t = this.getRestingPosition(),
                    e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
                    i = this._getClosestResting(t, e, 1),
                    n = this._getClosestResting(t, e, -1);
                return i.distance < n.distance ? i.index : n.index;
            }),
            (r._getClosestResting = function (t, e, i) {
                for (
                    var n = this.selectedIndex,
                        o = 1 / 0,
                        r =
                            this.options.contain && !this.options.wrapAround
                                ? function (t, e) {
                                      return t <= e;
                                  }
                                : function (t, e) {
                                      return t < e;
                                  };
                    r(e, o) && ((n += i), (o = e), null !== (e = this.getSlideDistance(-t, n)));

                )
                    e = Math.abs(e);
                return { distance: o, index: n - i };
            }),
            (r.getSlideDistance = function (t, e) {
                var i = this.slides.length,
                    o = this.options.wrapAround && i > 1,
                    r = o ? n.modulo(e, i) : e,
                    s = this.slides[r];
                if (!s) return null;
                var a = o ? this.slideableWidth * Math.floor(e / i) : 0;
                return t - (s.target + a);
            }),
            (r.dragEndBoostSelect = function () {
                if (void 0 === this.previousDragX || !this.dragMoveTime || new Date() - this.dragMoveTime > 100) return 0;
                var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
                    e = this.previousDragX - this.dragX;
                return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0;
            }),
            (r.staticClick = function (t, e) {
                var i = this.getParentCell(t.target),
                    n = i && i.element,
                    o = i && this.cells.indexOf(i);
                this.dispatchEvent("staticClick", t, [e, n, o]);
            }),
            (r.onscroll = function () {
                var t = o(),
                    e = this.pointerDownScroll.x - t.x,
                    i = this.pointerDownScroll.y - t.y;
                (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone();
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("tap-listener/tap-listener", ["unipointer/unipointer"], function (i) {
                  return e(t, i);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("unipointer")))
            : (t.TapListener = e(t, t.Unipointer));
    })(window, function (t, e) {
        function i(t) {
            this.bindTap(t);
        }
        var n = (i.prototype = Object.create(e.prototype));
        return (
            (n.bindTap = function (t) {
                t && (this.unbindTap(), (this.tapElement = t), this._bindStartEvent(t, !0));
            }),
            (n.unbindTap = function () {
                this.tapElement && (this._bindStartEvent(this.tapElement, !0), delete this.tapElement);
            }),
            (n.pointerUp = function (i, n) {
                if (!this.isIgnoringMouseUp || "mouseup" != i.type) {
                    var o = e.getPointerPoint(n),
                        r = this.tapElement.getBoundingClientRect(),
                        s = t.pageXOffset,
                        a = t.pageYOffset;
                    if ((o.x >= r.left + s && o.x <= r.right + s && o.y >= r.top + a && o.y <= r.bottom + a && this.emitEvent("tap", [i, n]), "mouseup" != i.type)) {
                        this.isIgnoringMouseUp = !0;
                        var l = this;
                        setTimeout(function () {
                            delete l.isIgnoringMouseUp;
                        }, 400);
                    }
                }
            }),
            (n.destroy = function () {
                this.pointerDone(), this.unbindTap();
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("flickity/js/prev-next-button", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function (i, n, o) {
                  return e(t, i, n, o);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")))
            : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils);
    })(window, function (t, e, i, n) {
        "use strict";
        function o(t, e) {
            (this.direction = t), (this.parent = e), this._create();
        }
        function r(t) {
            return "string" == typeof t ? t : "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z";
        }
        var s = "http://www.w3.org/2000/svg";
        (o.prototype = Object.create(i.prototype)),
            (o.prototype._create = function () {
                (this.isEnabled = !0), (this.isPrevious = -1 == this.direction);
                var t = this.parent.options.rightToLeft ? 1 : -1;
                this.isLeft = this.direction == t;
                var e = (this.element = document.createElement("button"));
                (e.className = "flickity-button flickity-prev-next-button"),
                    (e.className += this.isPrevious ? " previous" : " next"),
                    e.setAttribute("type", "button"),
                    this.disable(),
                    e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
                var i = this.createSVG();
                e.appendChild(i), this.on("tap", this.onTap), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
            }),
            (o.prototype.activate = function () {
                this.bindTap(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element);
            }),
            (o.prototype.deactivate = function () {
                this.parent.element.removeChild(this.element), i.prototype.destroy.call(this), this.element.removeEventListener("click", this);
            }),
            (o.prototype.createSVG = function () {
                var t = document.createElementNS(s, "svg");
                t.setAttribute("class", "flickity-button-icon"), t.setAttribute("viewBox", "0 0 100 100");
                var e = document.createElementNS(s, "path"),
                    i = r(this.parent.options.arrowShape);
                return e.setAttribute("d", i), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(e), t;
            }),
            (o.prototype.onTap = function () {
                if (this.isEnabled) {
                    this.parent.uiChange();
                    var t = this.isPrevious ? "previous" : "next";
                    this.parent[t]();
                }
            }),
            (o.prototype.handleEvent = n.handleEvent),
            (o.prototype.onclick = function (t) {
                var e = document.activeElement;
                e && e == this.element && this.onTap(t, t);
            }),
            (o.prototype.enable = function () {
                this.isEnabled || ((this.element.disabled = !1), (this.isEnabled = !0));
            }),
            (o.prototype.disable = function () {
                this.isEnabled && ((this.element.disabled = !0), (this.isEnabled = !1));
            }),
            (o.prototype.update = function () {
                var t = this.parent.slides;
                if (this.parent.options.wrapAround && t.length > 1) return void this.enable();
                var e = t.length ? t.length - 1 : 0,
                    i = this.isPrevious ? 0 : e;
                this[this.parent.selectedIndex == i ? "disable" : "enable"]();
            }),
            (o.prototype.destroy = function () {
                this.deactivate();
            }),
            n.extend(e.defaults, { prevNextButtons: !0, arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 } }),
            e.createMethods.push("_createPrevNextButtons");
        var a = e.prototype;
        return (
            (a._createPrevNextButtons = function () {
                this.options.prevNextButtons && ((this.prevButton = new o(-1, this)), (this.nextButton = new o(1, this)), this.on("activate", this.activatePrevNextButtons));
            }),
            (a.activatePrevNextButtons = function () {
                this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons);
            }),
            (a.deactivatePrevNextButtons = function () {
                this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons);
            }),
            (e.PrevNextButton = o),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("flickity/js/page-dots", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function (i, n, o) {
                  return e(t, i, n, o);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")))
            : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils);
    })(window, function (t, e, i, n) {
        function o(t) {
            (this.parent = t), this._create();
        }
        (o.prototype = new i()),
            (o.prototype._create = function () {
                (this.holder = document.createElement("ol")), (this.holder.className = "flickity-page-dots"), (this.dots = []), this.on("tap", this.onTap), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
            }),
            (o.prototype.activate = function () {
                this.setDots(), this.bindTap(this.holder), this.parent.element.appendChild(this.holder);
            }),
            (o.prototype.deactivate = function () {
                this.parent.element.removeChild(this.holder), i.prototype.destroy.call(this);
            }),
            (o.prototype.setDots = function () {
                var t = this.parent.slides.length - this.dots.length;
                t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t);
            }),
            (o.prototype.addDots = function (t) {
                for (var e = document.createDocumentFragment(), i = [], n = this.dots.length, o = n + t, r = n; r < o; r++) {
                    var s = document.createElement("li");
                    (s.className = "dot"), s.setAttribute("aria-label", "Page dot " + (r + 1)), e.appendChild(s), i.push(s);
                }
                this.holder.appendChild(e), (this.dots = this.dots.concat(i));
            }),
            (o.prototype.removeDots = function (t) {
                this.dots.splice(this.dots.length - t, t).forEach(function (t) {
                    this.holder.removeChild(t);
                }, this);
            }),
            (o.prototype.updateSelected = function () {
                this.selectedDot && ((this.selectedDot.className = "dot"), this.selectedDot.removeAttribute("aria-current")),
                    this.dots.length && ((this.selectedDot = this.dots[this.parent.selectedIndex]), (this.selectedDot.className = "dot is-selected"), this.selectedDot.setAttribute("aria-current", "step"));
            }),
            (o.prototype.onTap = function (t) {
                var e = t.target;
                if ("LI" == e.nodeName) {
                    this.parent.uiChange();
                    var i = this.dots.indexOf(e);
                    this.parent.select(i);
                }
            }),
            (o.prototype.destroy = function () {
                this.deactivate();
            }),
            (e.PageDots = o),
            n.extend(e.defaults, { pageDots: !0 }),
            e.createMethods.push("_createPageDots");
        var r = e.prototype;
        return (
            (r._createPageDots = function () {
                this.options.pageDots &&
                    ((this.pageDots = new o(this)),
                    this.on("activate", this.activatePageDots),
                    this.on("select", this.updateSelectedPageDots),
                    this.on("cellChange", this.updatePageDots),
                    this.on("resize", this.updatePageDots),
                    this.on("deactivate", this.deactivatePageDots));
            }),
            (r.activatePageDots = function () {
                this.pageDots.activate();
            }),
            (r.updateSelectedPageDots = function () {
                this.pageDots.updateSelected();
            }),
            (r.updatePageDots = function () {
                this.pageDots.setDots();
            }),
            (r.deactivatePageDots = function () {
                this.pageDots.deactivate();
            }),
            (e.PageDots = o),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function (t, i, n) {
                  return e(t, i, n);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")))
            : e(t.EvEmitter, t.fizzyUIUtils, t.Flickity);
    })(window, function (t, e, i) {
        function n(t) {
            (this.parent = t), (this.state = "stopped"), (this.onVisibilityChange = this.visibilityChange.bind(this)), (this.onVisibilityPlay = this.visibilityPlay.bind(this));
        }
        (n.prototype = Object.create(t.prototype)),
            (n.prototype.play = function () {
                if ("playing" != this.state) {
                    if (document.hidden) return void document.addEventListener("visibilitychange", this.onVisibilityPlay);
                    (this.state = "playing"), document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick();
                }
            }),
            (n.prototype.tick = function () {
                if ("playing" == this.state) {
                    var t = this.parent.options.autoPlay;
                    t = "number" == typeof t ? t : 3e3;
                    var e = this;
                    this.clear(),
                        (this.timeout = setTimeout(function () {
                            e.parent.next(!0), e.tick();
                        }, t));
                }
            }),
            (n.prototype.stop = function () {
                (this.state = "stopped"), this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange);
            }),
            (n.prototype.clear = function () {
                clearTimeout(this.timeout);
            }),
            (n.prototype.pause = function () {
                "playing" == this.state && ((this.state = "paused"), this.clear());
            }),
            (n.prototype.unpause = function () {
                "paused" == this.state && this.play();
            }),
            (n.prototype.visibilityChange = function () {
                this[document.hidden ? "pause" : "unpause"]();
            }),
            (n.prototype.visibilityPlay = function () {
                this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay);
            }),
            e.extend(i.defaults, { pauseAutoPlayOnHover: !0 }),
            i.createMethods.push("_createPlayer");
        var o = i.prototype;
        return (
            (o._createPlayer = function () {
                (this.player = new n(this)), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer);
            }),
            (o.activatePlayer = function () {
                this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this));
            }),
            (o.playPlayer = function () {
                this.player.play();
            }),
            (o.stopPlayer = function () {
                this.player.stop();
            }),
            (o.pausePlayer = function () {
                this.player.pause();
            }),
            (o.unpausePlayer = function () {
                this.player.unpause();
            }),
            (o.deactivatePlayer = function () {
                this.player.stop(), this.element.removeEventListener("mouseenter", this);
            }),
            (o.onmouseenter = function () {
                this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this));
            }),
            (o.onmouseleave = function () {
                this.player.unpause(), this.element.removeEventListener("mouseleave", this);
            }),
            (i.Player = n),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function (i, n) {
                  return e(t, i, n);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")))
            : e(t, t.Flickity, t.fizzyUIUtils);
    })(window, function (t, e, i) {
        function n(t) {
            var e = document.createDocumentFragment();
            return (
                t.forEach(function (t) {
                    e.appendChild(t.element);
                }),
                e
            );
        }
        var o = e.prototype;
        return (
            (o.insert = function (t, e) {
                var i = this._makeCells(t);
                if (i && i.length) {
                    var o = this.cells.length;
                    e = void 0 === e ? o : e;
                    var r = n(i),
                        s = e == o;
                    if (s) this.slider.appendChild(r);
                    else {
                        var a = this.cells[e].element;
                        this.slider.insertBefore(r, a);
                    }
                    if (0 === e) this.cells = i.concat(this.cells);
                    else if (s) this.cells = this.cells.concat(i);
                    else {
                        var l = this.cells.splice(e, o - e);
                        this.cells = this.cells.concat(i).concat(l);
                    }
                    this._sizeCells(i), this.cellChange(e, !0);
                }
            }),
            (o.append = function (t) {
                this.insert(t, this.cells.length);
            }),
            (o.prepend = function (t) {
                this.insert(t, 0);
            }),
            (o.remove = function (t) {
                var e = this.getCells(t);
                if (e && e.length) {
                    var n = this.cells.length - 1;
                    e.forEach(function (t) {
                        t.remove();
                        var e = this.cells.indexOf(t);
                        (n = Math.min(e, n)), i.removeFrom(this.cells, t);
                    }, this),
                        this.cellChange(n, !0);
                }
            }),
            (o.cellSizeChange = function (t) {
                var e = this.getCell(t);
                if (e) {
                    e.getSize();
                    var i = this.cells.indexOf(e);
                    this.cellChange(i);
                }
            }),
            (o.cellChange = function (t, e) {
                var i = this.selectedElement;
                this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize();
                var n = this.getCell(i);
                n && (this.selectedIndex = this.getCellSlideIndex(n)),
                    (this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex)),
                    this.emitEvent("cellChange", [t]),
                    this.select(this.selectedIndex),
                    e && this.positionSliderAtSelected();
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function (i, n) {
                  return e(t, i, n);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")))
            : e(t, t.Flickity, t.fizzyUIUtils);
    })(window, function (t, e, i) {
        "use strict";
        function n(t) {
            if ("IMG" == t.nodeName) {
                var e = t.getAttribute("data-flickity-lazyload"),
                    n = t.getAttribute("data-flickity-lazyload-src"),
                    o = t.getAttribute("data-flickity-lazyload-srcset");
                if (e || n || o) return [t];
            }
            var r = "img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]",
                s = t.querySelectorAll(r);
            return i.makeArray(s);
        }
        function o(t, e) {
            (this.img = t), (this.flickity = e), this.load();
        }
        e.createMethods.push("_createLazyload");
        var r = e.prototype;
        return (
            (r._createLazyload = function () {
                this.on("select", this.lazyLoad);
            }),
            (r.lazyLoad = function () {
                var t = this.options.lazyLoad;
                if (t) {
                    var e = "number" == typeof t ? t : 0,
                        i = this.getAdjacentCellElements(e),
                        r = [];
                    i.forEach(function (t) {
                        var e = n(t);
                        r = r.concat(e);
                    }),
                        r.forEach(function (t) {
                            new o(t, this);
                        }, this);
                }
            }),
            (o.prototype.handleEvent = i.handleEvent),
            (o.prototype.load = function () {
                this.img.addEventListener("load", this), this.img.addEventListener("error", this);
                var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
                    e = this.img.getAttribute("data-flickity-lazyload-srcset");
                (this.img.src = t),
                    e && this.img.setAttribute("srcset", e),
                    this.img.removeAttribute("data-flickity-lazyload"),
                    this.img.removeAttribute("data-flickity-lazyload-src"),
                    this.img.removeAttribute("data-flickity-lazyload-srcset");
            }),
            (o.prototype.onload = function (t) {
                this.complete(t, "flickity-lazyloaded");
            }),
            (o.prototype.onerror = function (t) {
                this.complete(t, "flickity-lazyerror");
            }),
            (o.prototype.complete = function (t, e) {
                this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
                var i = this.flickity.getParentCell(this.img),
                    n = i && i.element;
                this.flickity.cellSizeChange(n), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, n);
            }),
            (e.LazyLoader = o),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e)
            : "object" == typeof module &&
              module.exports &&
              (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")));
    })(window, function (t) {
        return t;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("flickity"), require("fizzy-ui-utils")))
            : (t.Flickity = e(t.Flickity, t.fizzyUIUtils));
    })(window, function (t, e) {
        function i(t, e, i) {
            return (e - t) * i + t;
        }
        t.createMethods.push("_createAsNavFor");
        var n = t.prototype;
        return (
            (n._createAsNavFor = function () {
                this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
                var t = this.options.asNavFor;
                if (t) {
                    var e = this;
                    setTimeout(function () {
                        e.setNavCompanion(t);
                    });
                }
            }),
            (n.setNavCompanion = function (i) {
                i = e.getQueryElement(i);
                var n = t.data(i);
                if (n && n != this) {
                    this.navCompanion = n;
                    var o = this;
                    (this.onNavCompanionSelect = function () {
                        o.navCompanionSelect();
                    }),
                        n.on("select", this.onNavCompanionSelect),
                        this.on("staticClick", this.onNavStaticClick),
                        this.navCompanionSelect(!0);
                }
            }),
            (n.navCompanionSelect = function (t) {
                if (this.navCompanion) {
                    var e = this.navCompanion.selectedCells[0],
                        n = this.navCompanion.cells.indexOf(e),
                        o = n + this.navCompanion.selectedCells.length - 1,
                        r = Math.floor(i(n, o, this.navCompanion.cellAlign));
                    if ((this.selectCell(r, !1, t), this.removeNavSelectedElements(), !(r >= this.cells.length))) {
                        var s = this.cells.slice(n, o + 1);
                        (this.navSelectedElements = s.map(function (t) {
                            return t.element;
                        })),
                            this.changeNavSelectedClass("add");
                    }
                }
            }),
            (n.changeNavSelectedClass = function (t) {
                this.navSelectedElements.forEach(function (e) {
                    e.classList[t]("is-nav-selected");
                });
            }),
            (n.activateAsNavFor = function () {
                this.navCompanionSelect(!0);
            }),
            (n.removeNavSelectedElements = function () {
                this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements);
            }),
            (n.onNavStaticClick = function (t, e, i, n) {
                "number" == typeof n && this.navCompanion.selectCell(n);
            }),
            (n.deactivateAsNavFor = function () {
                this.removeNavSelectedElements();
            }),
            (n.destroyAsNavFor = function () {
                this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion);
            }),
            t
        );
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function (i) {
                  return e(t, i);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("ev-emitter")))
            : (t.imagesLoaded = e(t, t.EvEmitter));
    })("undefined" != typeof window ? window : this, function (t, e) {
        function i(t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }
        function n(t) {
            return Array.isArray(t) ? t : "object" == typeof t && "number" == typeof t.length ? c.call(t) : [t];
        }
        function o(t, e, r) {
            if (!(this instanceof o)) return new o(t, e, r);
            var s = t;
            return (
                "string" == typeof t && (s = document.querySelectorAll(t)),
                s
                    ? ((this.elements = n(s)),
                      (this.options = i({}, this.options)),
                      "function" == typeof e ? (r = e) : i(this.options, e),
                      r && this.on("always", r),
                      this.getImages(),
                      a && (this.jqDeferred = new a.Deferred()),
                      void setTimeout(this.check.bind(this)))
                    : void l.error("Bad element for imagesLoaded " + (s || t))
            );
        }
        function r(t) {
            this.img = t;
        }
        function s(t, e) {
            (this.url = t), (this.element = e), (this.img = new Image());
        }
        var a = t.jQuery,
            l = t.console,
            c = Array.prototype.slice;
        (o.prototype = Object.create(e.prototype)),
            (o.prototype.options = {}),
            (o.prototype.getImages = function () {
                (this.images = []), this.elements.forEach(this.addElementImages, this);
            }),
            (o.prototype.addElementImages = function (t) {
                "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
                var e = t.nodeType;
                if (e && u[e]) {
                    for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                        var o = i[n];
                        this.addImage(o);
                    }
                    if ("string" == typeof this.options.background) {
                        var r = t.querySelectorAll(this.options.background);
                        for (n = 0; n < r.length; n++) {
                            var s = r[n];
                            this.addElementBackgroundImages(s);
                        }
                    }
                }
            });
        var u = { 1: !0, 9: !0, 11: !0 };
        return (
            (o.prototype.addElementBackgroundImages = function (t) {
                var e = getComputedStyle(t);
                if (e)
                    for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n; ) {
                        var o = n && n[2];
                        o && this.addBackground(o, t), (n = i.exec(e.backgroundImage));
                    }
            }),
            (o.prototype.addImage = function (t) {
                var e = new r(t);
                this.images.push(e);
            }),
            (o.prototype.addBackground = function (t, e) {
                var i = new s(t, e);
                this.images.push(i);
            }),
            (o.prototype.check = function () {
                function t(t, i, n) {
                    setTimeout(function () {
                        e.progress(t, i, n);
                    });
                }
                var e = this;
                return (
                    (this.progressedCount = 0),
                    (this.hasAnyBroken = !1),
                    this.images.length
                        ? void this.images.forEach(function (e) {
                              e.once("progress", t), e.check();
                          })
                        : void this.complete()
                );
            }),
            (o.prototype.progress = function (t, e, i) {
                this.progressedCount++,
                    (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
                    this.emitEvent("progress", [this, t, e]),
                    this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
                    this.progressedCount == this.images.length && this.complete(),
                    this.options.debug && l && l.log("progress: " + i, t, e);
            }),
            (o.prototype.complete = function () {
                var t = this.hasAnyBroken ? "fail" : "done";
                if (((this.isComplete = !0), this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred)) {
                    var e = this.hasAnyBroken ? "reject" : "resolve";
                    this.jqDeferred[e](this);
                }
            }),
            (r.prototype = Object.create(e.prototype)),
            (r.prototype.check = function () {
                return this.getIsImageComplete()
                    ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
                    : ((this.proxyImage = new Image()),
                      this.proxyImage.addEventListener("load", this),
                      this.proxyImage.addEventListener("error", this),
                      this.img.addEventListener("load", this),
                      this.img.addEventListener("error", this),
                      void (this.proxyImage.src = this.img.src));
            }),
            (r.prototype.getIsImageComplete = function () {
                return this.img.complete && this.img.naturalWidth;
            }),
            (r.prototype.confirm = function (t, e) {
                (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
            }),
            (r.prototype.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (r.prototype.onload = function () {
                this.confirm(!0, "onload"), this.unbindEvents();
            }),
            (r.prototype.onerror = function () {
                this.confirm(!1, "onerror"), this.unbindEvents();
            }),
            (r.prototype.unbindEvents = function () {
                this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
            }),
            (s.prototype = Object.create(r.prototype)),
            (s.prototype.check = function () {
                this.img.addEventListener("load", this), this.img.addEventListener("error", this), (this.img.src = this.url), this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
            }),
            (s.prototype.unbindEvents = function () {
                this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
            }),
            (s.prototype.confirm = function (t, e) {
                (this.isLoaded = t), this.emitEvent("progress", [this, this.element, e]);
            }),
            (o.makeJQueryPlugin = function (e) {
                (e = e || t.jQuery) &&
                    ((a = e),
                    (a.fn.imagesLoaded = function (t, e) {
                        return new o(this, t, e).jqDeferred.promise(a(this));
                    }));
            }),
            o.makeJQueryPlugin(),
            o
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function (i, n) {
                  return e(t, i, n);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("flickity"), require("imagesloaded")))
            : (t.Flickity = e(t, t.Flickity, t.imagesLoaded));
    })(window, function (t, e, i) {
        "use strict";
        e.createMethods.push("_createImagesLoaded");
        var n = e.prototype;
        return (
            (n._createImagesLoaded = function () {
                this.on("activate", this.imagesLoaded);
            }),
            (n.imagesLoaded = function () {
                function t(t, i) {
                    var n = e.getParentCell(i.img);
                    e.cellSizeChange(n && n.element), e.options.freeScroll || e.positionSliderAtSelected();
                }
                if (this.options.imagesLoaded) {
                    var e = this;
                    i(this.slider).on("progress", t);
                }
            }),
            e
        );
    }),
    (function (t) {
        "undefined" != typeof define && define.amd ? define([], t) : "undefined" != typeof module && module.exports ? (module.exports = t()) : (window.scrollMonitor = t());
    })(function () {
        function t() {
            if (((c.viewportTop = l()), (c.viewportBottom = c.viewportTop + c.viewportHeight), (c.documentHeight = x()), c.documentHeight !== E)) {
                for (C = u.length; C--; ) u[C].recalculateLocation();
                E = c.documentHeight;
            }
        }
        function e() {
            (c.viewportHeight = w()), t(), n();
        }
        function i() {
            clearTimeout(S), (S = setTimeout(e, 100));
        }
        function n() {
            for (T = u.length; T--; ) u[T].update();
            for (T = u.length; T--; ) u[T].triggerCallbacks();
        }
        function o(t, e) {
            function i(t) {
                if (0 !== t.length) for (w = t.length; w--; ) (x = t[w]), x.callback.call(n, k), x.isOne && t.splice(w, 1);
            }
            var n = this;
            (this.watchItem = t), (this.offsets = e ? (e === +e ? { top: e, bottom: e } : { top: e.top || b.top, bottom: e.bottom || b.bottom }) : b), (this.callbacks = {});
            for (var o = 0, r = y.length; o < r; o++) n.callbacks[y[o]] = [];
            this.locked = !1;
            var s, a, l, u, w, x;
            (this.triggerCallbacks = function t() {
                switch (
                    (this.isInViewport && !s && i(this.callbacks[d]),
                    this.isFullyInViewport && !a && i(this.callbacks[f]),
                    this.isAboveViewport !== l &&
                        this.isBelowViewport !== u &&
                        (i(this.callbacks[h]), a || this.isFullyInViewport || (i(this.callbacks[f]), i(this.callbacks[g])), s || this.isInViewport || (i(this.callbacks[d]), i(this.callbacks[p]))),
                    !this.isFullyInViewport && a && i(this.callbacks[g]),
                    !this.isInViewport && s && i(this.callbacks[p]),
                    this.isInViewport !== s && i(this.callbacks[h]),
                    !0)
                ) {
                    case s !== this.isInViewport:
                    case a !== this.isFullyInViewport:
                    case l !== this.isAboveViewport:
                    case u !== this.isBelowViewport:
                        i(this.callbacks[v]);
                }
                (s = this.isInViewport), (a = this.isFullyInViewport), (l = this.isAboveViewport), (u = this.isBelowViewport);
            }),
                (this.recalculateLocation = function () {
                    if (!this.locked) {
                        var t = this.top,
                            e = this.bottom;
                        if (this.watchItem.nodeName) {
                            var n = this.watchItem.style.display;
                            "none" === n && (this.watchItem.style.display = "");
                            var o = this.watchItem.getBoundingClientRect();
                            (this.top = o.top + c.viewportTop), (this.bottom = o.bottom + c.viewportTop), "none" === n && (this.watchItem.style.display = n);
                        } else
                            this.watchItem === +this.watchItem
                                ? this.watchItem > 0
                                    ? (this.top = this.bottom = this.watchItem)
                                    : (this.top = this.bottom = c.documentHeight - this.watchItem)
                                : ((this.top = this.watchItem.top), (this.bottom = this.watchItem.bottom));
                        (this.top -= this.offsets.top), (this.bottom += this.offsets.bottom), (this.height = this.bottom - this.top), (void 0 === t && void 0 === e) || (this.top === t && this.bottom === e) || i(this.callbacks[m]);
                    }
                }),
                this.recalculateLocation(),
                this.update(),
                (s = this.isInViewport),
                (a = this.isFullyInViewport),
                (l = this.isAboveViewport),
                (u = this.isBelowViewport);
        }
        function r(e) {
            (k = e), t(), n();
        }
        var s = "undefined" == typeof window,
            a = !s,
            l = function () {
                return s ? 0 : window.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
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
            b = { top: 0, bottom: 0 },
            w = function () {
                return s ? 0 : window.innerHeight || document.documentElement.clientHeight;
            },
            x = function () {
                return s ? 0 : Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight);
            };
        (c.viewportTop = null), (c.viewportBottom = null), (c.documentHeight = null), (c.viewportHeight = w());
        var E, k, C, S, T;
        o.prototype = {
            on: function (t, e, i) {
                switch (!0) {
                    case t === h && !this.isInViewport && this.isAboveViewport:
                    case t === d && this.isInViewport:
                    case t === f && this.isFullyInViewport:
                    case t === p && this.isAboveViewport && !this.isInViewport:
                    case t === g && this.isAboveViewport:
                        if ((e.call(this, k), i)) return;
                }
                if (!this.callbacks[t]) throw new Error("Tried to add a scroll monitor listener of type " + t + ". Your options are: " + y.join(", "));
                this.callbacks[t].push({ callback: e, isOne: i || !1 });
            },
            off: function (t, e) {
                if (!this.callbacks[t]) throw new Error("Tried to remove a scroll monitor listener of type " + t + ". Your options are: " + y.join(", "));
                for (var i = 0, n; (n = this.callbacks[t][i]); i++)
                    if (n.callback === e) {
                        this.callbacks[t].splice(i, 1);
                        break;
                    }
            },
            one: function (t, e) {
                this.on(t, e, !0);
            },
            recalculateSize: function () {
                (this.height = this.watchItem.offsetHeight + this.offsets.top + this.offsets.bottom), (this.bottom = this.top + this.height);
            },
            update: function () {
                (this.isAboveViewport = this.top < c.viewportTop),
                    (this.isBelowViewport = this.bottom > c.viewportBottom),
                    (this.isInViewport = this.top <= c.viewportBottom && this.bottom >= c.viewportTop),
                    (this.isFullyInViewport = (this.top >= c.viewportTop && this.bottom <= c.viewportBottom) || (this.isAboveViewport && this.isBelowViewport));
            },
            destroy: function () {
                var t = u.indexOf(this),
                    e = this;
                u.splice(t, 1);
                for (var i = 0, n = y.length; i < n; i++) e.callbacks[y[i]].length = 0;
            },
            lock: function () {
                this.locked = !0;
            },
            unlock: function () {
                this.locked = !1;
            },
        };
        for (
            var _ = function (t) {
                    return function (e, i) {
                        this.on.call(this, t, e, i);
                    };
                },
                D = 0,
                L = y.length;
            D < L;
            D++
        ) {
            var I = y[D];
            o.prototype[I] = _(I);
        }
        if (a)
            try {
                t();
            } catch (e) {
                try {
                    window.$(t);
                } catch (t) {
                    throw new Error("If you must put scrollMonitor in the <head>, you must use jQuery.");
                }
            }
        return (
            a && (window.addEventListener ? (window.addEventListener("scroll", r), window.addEventListener("resize", i)) : (window.attachEvent("onscroll", r), window.attachEvent("onresize", i))),
            (c.beget = c.create = function (t, e) {
                "string" == typeof t ? (t = document.querySelector(t)) : t && t.length > 0 && (t = t[0]);
                var i = new o(t, e);
                return u.push(i), i.update(), i;
            }),
            (c.update = function () {
                (k = null), t(), n();
            }),
            (c.recalculateLocations = function () {
                (c.documentHeight = 0), c.update();
            }),
            c
        );
    });
var Konami = function (t) {
        var e = {
            addEvent: function (t, e, i, n) {
                t.addEventListener
                    ? t.addEventListener(e, i, !1)
                    : t.attachEvent &&
                      ((t["e" + e + i] = i),
                      (t[e + i] = function () {
                          t["e" + e + i](window.event, n);
                      }),
                      t.attachEvent("on" + e, t[e + i]));
            },
            input: "",
            pattern: "38384040373937396665",
            load: function (t) {
                this.addEvent(
                    document,
                    "keydown",
                    function (i, n) {
                        if ((n && (e = n), (e.input += i ? i.keyCode : event.keyCode), e.input.length > e.pattern.length && (e.input = e.input.substr(e.input.length - e.pattern.length)), e.input == e.pattern))
                            return e.code(t), (e.input = ""), i.preventDefault(), !1;
                    },
                    this
                ),
                    this.iphone.load(t);
            },
            code: function (t) {
                window.location = t;
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
                code: function (t) {
                    e.code(t);
                },
                load: function (t) {
                    (this.orig_keys = this.keys),
                        e.addEvent(document, "touchmove", function (t) {
                            if (1 == t.touches.length && 1 == e.iphone.capture) {
                                var i = t.touches[0];
                                (e.iphone.stop_x = i.pageX), (e.iphone.stop_y = i.pageY), (e.iphone.tap = !1), (e.iphone.capture = !1), e.iphone.check_direction();
                            }
                        }),
                        e.addEvent(
                            document,
                            "touchend",
                            function (i) {
                                1 == e.iphone.tap && e.iphone.check_direction(t);
                            },
                            !1
                        ),
                        e.addEvent(document, "touchstart", function (t) {
                            (e.iphone.start_x = t.changedTouches[0].pageX), (e.iphone.start_y = t.changedTouches[0].pageY), (e.iphone.tap = !0), (e.iphone.capture = !0);
                        });
                },
                check_direction: function (t) {
                    (x_magnitude = Math.abs(this.start_x - this.stop_x)),
                        (y_magnitude = Math.abs(this.start_y - this.stop_y)),
                        (x = this.start_x - this.stop_x < 0 ? "RIGHT" : "LEFT"),
                        (y = this.start_y - this.stop_y < 0 ? "DOWN" : "UP"),
                        (result = x_magnitude > y_magnitude ? x : y),
                        (result = 1 == this.tap ? "TAP" : result),
                        result == this.keys[0] && (this.keys = this.keys.slice(1, this.keys.length)),
                        0 == this.keys.length && ((this.keys = this.orig_keys), this.code(t));
                },
            },
        };
        return "string" == typeof t && e.load(t), "function" == typeof t && ((e.code = t), e.load()), e;
    },
    last_scroll_top = 0,
    scroll_watchers = [];
(window.site_url = $("body").attr("data-site-url")),
    (window.tablet = $("body").attr("data-tablet")),
    (window.desktop = $("body").attr("data-desktop")),
    (window.desktop_large = $("body").attr("data-desktop-large")),
    (window.cinema = $("body").attr("data-cinema")),
    (window.scrollbar = 15),
    (window.elements_to_show = 1);
var pause_before_preloaders_fade = 600,
    sayHello = function () {
        console.log(window.site_url), console.log("Hello! ðŸ‘‹");
    },
    /*externalLinksNewWindow = function () {
        $("a").each(function () {
            -1 === this.href.indexOf("futurefabric.co") && -1 === this.href.indexOf("shop:9292/") && $(this).attr("target", "_blank");
        });
    },*/
    consoleLog = function (t) {
        "https://www.futurefabric.co/" !== window.site_url && "https://shop.futurefabric.co/" !== window.site_url && console.log(t);
    },
    removeWidows = function () {
        0 !== $(".no-widow").length &&
            $(".no-widow").each(function () {
                var t = $(this).html();
                (t = t.replace(/ ([^ ]*)$/, "&nbsp;$1")), $(this).html(t);
            });
    },
    showMainAndFooter = function () {
        $(".main").addClass("show"), $(".footer").addClass("show");
    },
    getRandomInRange = function (t, e) {
        return Math.random() * (e - t) + t;
    },
    easterEgg = function () {
        $("body").scrollTop(1),
            $("body *").addClass("in-a-spin"),
            $("body *").bind("oanimationend animationend webkitAnimationEnd", function () {
                $("body *").removeClass("in-a-spin");
            });
    },
    setUpKonamiCode = function () {
        new Konami(function () {
            easterEgg();
        });
    },
    makeVideosResponsive = function () {
        $(".videos .video-block").length > 0 && $(".videos .video-block").fitVids();
    },
    doProjectPackery = function () {
        0 !== $(".projects").length && $(".projects").packery({ itemSelector: ".project-container", transitionDuration: "0.3s" });
    },
    doPhotoPackery = function () {
        0 !== $(".photos-packery-container").length &&
            $(".photos-packery-container").imagesLoaded(function () {
                $(".photos-packery-container").packery({ itemSelector: ".photo-container", transitionDuration: "0.3s" });
            });
    },
    preloadProjectThumbnails = function () {
        $(".projects")
            .imagesLoaded({ background: ".project-container .project" })
            .progress(function (t, e) {
                $(e.element)
                    .find(".loader")
                    .delay(pause_before_preloaders_fade)
                    .queue(function () {
                        var t = $(this);
                        if ((t.parent().attr("data-image-loaded", "true"), t.parent().attr("data-index") <= window.elements_to_show)) {
                            var e = 1e3;
                            setTimeout(function () {
                                t.addClass("fade-out");
                            }, 1e3);
                        }
                    });
            });
    },
    preloadPlayThumbnails = function () {
        $(".play-projects")
            .imagesLoaded({ background: ".play-project-container .inner" })
            .progress(function (t, e) {
                var i = $(e.element);
                consoleLog(i),
                    i
                        .find(".loader")
                        .delay(pause_before_preloaders_fade)
                        .queue(function () {
                            var t = $(this);
                            t.parent().attr("data-image-loaded", "true");
                            var e = 400 + 160 * getRandomInRange(1, 8);
                            setTimeout(function () {
                                t.addClass("fade-out");
                            }, e);
                        });
            });
    },
    preloadShopThumbnails = function () {
        $(".shop-products")
            .imagesLoaded({ background: ".shop-product-container .shop-product .inner" })
            .progress(function (t, e) {
                $(e.element)
                    .find(".loader")
                    .delay(pause_before_preloaders_fade)
                    .queue(function () {
                        var t = $(this);
                        if ((t.parent().attr("data-image-loaded", "true"), t.parent().attr("data-index") <= window.elements_to_show)) {
                            var e = 1e3;
                            setTimeout(function () {
                                t.addClass("fade-out");
                            }, 1e3);
                        }
                    });
            });
    },
    toggleHeaderPosition = function () {
        $(window).scrollTop() > 50 && ("up" === window.scrollbar_direction && $(".header").removeClass("is-hidden"), "down" === window.scrollbar_direction && $(".header").addClass("is-hidden"));
    },
    hideLoaderIfShowing = function (t) {
        if (!t.find(".loader").hasClass("fade-out") && "true" === t.find(".project").attr("data-image-loaded")) {
            var e = 1e3;
            setTimeout(function () {
                t.find(".loader").addClass("fade-out");
            }, 1e3);
        }
    },
    removeTrailingZeroes = function (t) {
        var e = t.indexOf(".00");
        return (t = t.substring(0, -1 !== e ? e : t.length));
    },
    hideProductAboutCopyIfEmpty = function () {
        0 === $(".further-details-repositioned").find(".further-notes").length && $(".further-details-repositioned").hide();
    },
    getScrollDirection = function () {
        var t = $(window).scrollTop();
        (window.scrollbar_direction = t > last_scroll_top ? "down" : "up"), consoleLog(t), (last_scroll_top = t);
    },
    createScrollWatchBehaviour = function (t, e) {
        scroll_watchers[t].enterViewport(function () {
            "up" === window.scrollbar_direction && (e.addClass("show"), e.removeClass("from-bottom"), hideLoaderIfShowing(e)), "down" === window.scrollbar_direction && (e.addClass("show"), hideLoaderIfShowing(e));
        }),
            scroll_watchers[t].exitViewport(function () {
                "up" === window.scrollbar_direction && e.removeClass("show"), "down" === window.scrollbar_direction && (e.removeClass("show"), e.addClass("from-bottom"));
            });
    },
    setUpScrollContainers = function () {};
0 !== $(".scroll-container").length &&
    $(".scroll-container").each(function (t) {
        scroll_watchers[t] = scrollMonitor.create($(this), 0);
        var e = $(this);
        createScrollWatchBehaviour(t, e);
        var i = 1;
        if (
            ($(window).width() >= window.tablet - window.scrollbar && (i = 2),
            $(window).width() >= window.cinema - window.scrollbar && (i = 2),
            consoleLog($(this).attr("data-index") + " " + window.elements_to_show),
            $(this).attr("data-index") <= i)
        ) {
            var n = 1e3 + 350 * (t + 1);
            setTimeout(function () {
                e.addClass("show");
            }, n);
        }
    });
var createFlickityCarousel = function () {
        0 !== $(".image-carousel").length && $(".image-carousel").flickity({ cellAlign: "left", prevNextButtons: !1, imagesLoaded: !0 });
    },
    destroyFlickityCarousel = function () {
        0 !== $(".image-carousel").length && $(".image-carousel").flickity("destroy");
    },
    toggleShopDetailStickiness = function () {
        if (0 !== $(".product-images").length && $(window).width() >= window.desktop) {
            var t = $(".product-images").offset(),
                e = $(".product-images").height(),
                i = $(".product-details").height(),
                n = t.top,
                o = n + e,
                r = o - i - 220;
            $(window).scrollTop() > r && ($(".product-details-container").removeClass("fixed"), $(".product-details-container").css({ top: 140 + r })),
                $(window).scrollTop() < r && ($(".product-details-container").addClass("fixed"), $(".product-details-container").css("top", ""));
        }
    },
    storePricesInVariantsDataAttributes = function () {
        -1 !== $(".variant-selection option").length &&
            $(".variant-selection option").each(function (t) {
                var e = this.text,
                    i = this.text,
                    n = e.indexOf(" ("),
                    o = i.indexOf("Â£");
                (e = e.substring(0, -1 !== n ? n : e.length)), (i = i.substring(o, i.length - 1)), (i = removeTrailingZeroes(i)), $(this).attr("data-option-price", i);
            });
    },
    getProductName = function () {
        return $(".product-name").text();
    },
    getProductPrice = function () {
        return $(".product-price").text();
    },
    getProductVariant = function () {
        return $("#option option:selected").text();
    },
    getBasketValue = function () {
        return $("#basket-value").text();
    };
$(".nav-toggle").click(function () {
    $(".primary-nav").toggleClass("show"), $(".hamburger").toggleClass("is-active"), consoleLog("clicked");
}),
    $(".accordion-opener").click(function (t) {
        $(window).width() < window.desktop && (t.preventDefault(), $(this).closest(".accordion").toggleClass("open"));
    }),
    $("#option").change(function () {
        var t = $("#option option:selected").attr("data-option-price");
        $(".product-price").text(t);
    }),
    $("#event-add-to-basket").click(function () {
        var t = "Add to basket";
        mixpanel.track(t, { Product: getProductName(), Price: getProductPrice(), Variant: getProductVariant() }), consoleLog(t);
    }),
    $("#event-checkout").click(function () {
        var t = "Checkout";
        mixpanel.track("Checkout", { "Basket Value": getBasketValue() }), consoleLog("Checkout");
    }),
    $(".remove-item").click(function (t) {
        t.preventDefault();
        var e = $(this).attr("data-item-id");
        consoleLog(e);
        var i = $(".cart-items .item-row").length;
        consoleLog("product rows: " + i),
            Cart.refresh(function (t) {
                1 === i &&
                    $(".cart").fadeOut(500, function () {
                        Cart.removeItem(e, function (t) {
                            consoleLog(t.item_count), location.reload();
                        });
                    }),
                    i > 1 &&
                        $("#" + e).fadeOut(500, function () {
                            $(this).remove(),
                                Cart.removeItem(e, function (t) {
                                    location.reload();
                                });
                        });
            });
    }),
    $(".quantity-input .item-quantity").keypress(function (t) {
        if (13 === t.which) {
            t.preventDefault();
            var e = $(this).parent().parent().attr("data-item-id"),
                i = $(this).val();
            i > 99 && (i = 99),
                Cart.updateItem(e, i, function (t) {
                    location.reload();
                });
        }
    }),
    $("a.update_total").click(function (t) {
        t.preventDefault(), location.reload();
    });
var init = function () {
    sayHello(),
        //externalLinksNewWindow(),
        setUpKonamiCode(),
        makeVideosResponsive(),
        doProjectPackery(),
        doPhotoPackery(),
        preloadProjectThumbnails(),
        preloadPlayThumbnails(),
        preloadShopThumbnails(),
        hideProductAboutCopyIfEmpty(),
        showMainAndFooter(),
        removeWidows(),
        storePricesInVariantsDataAttributes(),
        setUpScrollContainers(),
        $(window).width() <= window.tablet && (window.elements_to_show = 1),
        $(window).width() > window.tablet && (window.elements_to_show = 2),
        $(window).width() < window.desktop && createFlickityCarousel();
};
$(document).ready(function () {
    init();
}),
    $(window).resize(function () {
        (window.elements_to_show = 1),
            $(window).width() >= window.tablet - window.scrollbar && (window.elements_to_show = 2),
            $(window).width() >= window.cinema - window.scrollbar && (window.elements_to_show = 2),
            $(window).width() < window.tablet && createFlickityCarousel(),
            $(window).width() < window.desktop && createFlickityCarousel(),
            $(window).width() > window.desktop && $(".image-carousel").flickity() && destroyFlickityCarousel();
    }),
    $(window).resize(),
    $(document).on("scroll", function () {
        getScrollDirection(), toggleHeaderPosition(), toggleShopDetailStickiness();
    });
//# sourceMappingURL=./futurefabric.min.js.map
