!(function e(t, n, r) {
  function o(s, a) {
    if (!n[s]) {
      if (!t[s]) {
        var u = "function" == typeof require && require;
        if (!a && u) return u(s, !0);
        if (i) return i(s, !0);
        var c = new Error("Cannot find module '" + s + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      var l = (n[s] = { exports: {} });
      t[s][0].call(
        l.exports,
        function (e) {
          var n = t[s][1][e];
          return o(n ? n : e);
        },
        l,
        l.exports,
        e,
        t,
        n,
        r
      );
    }
    return n[s].exports;
  }
  for (var i = "function" == typeof require && require, s = 0; s < r.length; s++) o(r[s]);
  return o;
})(
  {
    1: [
      function (e, t, n) {
        !(function (e, n) {
          "use strict";
          "object" == typeof t && "object" == typeof t.exports
            ? (t.exports = e.document
            ? n(e, !0)
            : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e);
          })
            : n(e);
        })("undefined" != typeof window ? window : this, function (e, t) {
          "use strict";
          function n(e, t) {
            t = t || te;
            var n = t.createElement("script");
            (n.text = e), t.head.appendChild(n).parentNode.removeChild(n);
          }
          function r(e) {
            var t = !!e && "length" in e && e.length,
              n = de.type(e);
            return "function" !== n && !de.isWindow(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
          }
          function o(e, t, n) {
            return de.isFunction(t)
              ? de.grep(e, function (e, r) {
              return !!t.call(e, r, e) !== n;
            })
              : t.nodeType
              ? de.grep(e, function (e) {
              return (e === t) !== n;
            })
              : "string" != typeof t
              ? de.grep(e, function (e) {
              return se.call(t, e) > -1 !== n;
            })
              : je.test(t)
              ? de.filter(t, e, n)
              : ((t = de.filter(t, e)),
              de.grep(e, function (e) {
                return se.call(t, e) > -1 !== n && 1 === e.nodeType;
              }));
          }
          function i(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          function s(e) {
            var t = {};
            return (
              de.each(e.match(qe) || [], function (e, n) {
                t[n] = !0;
              }),
                t
            );
          }
          function a(e) {
            return e;
          }
          function u(e) {
            throw e;
          }
          function c(e, t, n) {
            var r;
            try {
              e && de.isFunction((r = e.promise)) ? r.call(e).done(t).fail(n) : e && de.isFunction((r = e.then)) ? r.call(e, t, n) : t.call(void 0, e);
            } catch (e) {
              n.call(void 0, e);
            }
          }
          function l() {
            te.removeEventListener("DOMContentLoaded", l), e.removeEventListener("load", l), de.ready();
          }
          function f() {
            this.expando = de.expando + f.uid++;
          }
          function p(e) {
            return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : Ie.test(e) ? JSON.parse(e) : e));
          }
          function h(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
              if (((r = "data-" + t.replace(Pe, "-$&").toLowerCase()), (n = e.getAttribute(r)), "string" == typeof n)) {
                try {
                  n = p(n);
                } catch (e) {}
                Re.set(e, t, n);
              } else n = void 0;
            return n;
          }
          function d(e, t, n, r) {
            var o,
              i = 1,
              s = 20,
              a = r
                ? function () {
                return r.cur();
              }
                : function () {
                return de.css(e, t, "");
              },
              u = a(),
              c = (n && n[3]) || (de.cssNumber[t] ? "" : "px"),
              l = (de.cssNumber[t] || ("px" !== c && +u)) && $e.exec(de.css(e, t));
            if (l && l[3] !== c) {
              (c = c || l[3]), (n = n || []), (l = +u || 1);
              do (i = i || ".5"), (l /= i), de.style(e, t, l + c);
              while (i !== (i = a() / u) && 1 !== i && --s);
            }
            return n && ((l = +l || +u || 0), (o = n[1] ? l + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = c), (r.start = l), (r.end = o))), o;
          }
          function g(e) {
            var t,
              n = e.ownerDocument,
              r = e.nodeName,
              o = Ue[r];
            return o ? o : ((t = n.body.appendChild(n.createElement(r))), (o = de.css(t, "display")), t.parentNode.removeChild(t), "none" === o && (o = "block"), (Ue[r] = o), o);
          }
          function m(e, t) {
            for (var n, r, o = [], i = 0, s = e.length; i < s; i++)
              (r = e[i]),
              r.style &&
              ((n = r.style.display),
                t ? ("none" === n && ((o[i] = Fe.get(r, "display") || null), o[i] || (r.style.display = "")), "" === r.style.display && Be(r) && (o[i] = g(r))) : "none" !== n && ((o[i] = "none"), Fe.set(r, "display", n)));
            for (i = 0; i < s; i++) null != o[i] && (e[i].style.display = o[i]);
            return e;
          }
          function v(e, t) {
            var n;
            return (
              (n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : []),
                void 0 === t || (t && de.nodeName(e, t)) ? de.merge([e], n) : n
            );
          }
          function y(e, t) {
            for (var n = 0, r = e.length; n < r; n++) Fe.set(e[n], "globalEval", !t || Fe.get(t[n], "globalEval"));
          }
          function x(e, t, n, r, o) {
            for (var i, s, a, u, c, l, f = t.createDocumentFragment(), p = [], h = 0, d = e.length; h < d; h++)
              if (((i = e[h]), i || 0 === i))
                if ("object" === de.type(i)) de.merge(p, i.nodeType ? [i] : i);
                else if (Ye.test(i)) {
                  for (s = s || f.appendChild(t.createElement("div")), a = (Xe.exec(i) || ["", ""])[1].toLowerCase(), u = Ge[a] || Ge._default, s.innerHTML = u[1] + de.htmlPrefilter(i) + u[2], l = u[0]; l--; ) s = s.lastChild;
                  de.merge(p, s.childNodes), (s = f.firstChild), (s.textContent = "");
                } else p.push(t.createTextNode(i));
            for (f.textContent = "", h = 0; (i = p[h++]); )
              if (r && de.inArray(i, r) > -1) o && o.push(i);
              else if (((c = de.contains(i.ownerDocument, i)), (s = v(f.appendChild(i), "script")), c && y(s), n)) for (l = 0; (i = s[l++]); ) Ve.test(i.type || "") && n.push(i);
            return f;
          }
          function b() {
            return !0;
          }
          function w() {
            return !1;
          }
          function T() {
            try {
              return te.activeElement;
            } catch (e) {}
          }
          function C(e, t, n, r, o, i) {
            var s, a;
            if ("object" == typeof t) {
              "string" != typeof n && ((r = r || n), (n = void 0));
              for (a in t) C(e, a, n, r, t[a], i);
              return e;
            }
            if ((null == r && null == o ? ((o = n), (r = n = void 0)) : null == o && ("string" == typeof n ? ((o = r), (r = void 0)) : ((o = r), (r = n), (n = void 0))), o === !1)) o = w;
            else if (!o) return e;
            return (
              1 === i &&
              ((s = o),
                (o = function (e) {
                  return de().off(e), s.apply(this, arguments);
                }),
                (o.guid = s.guid || (s.guid = de.guid++))),
                e.each(function () {
                  de.event.add(this, t, o, r, n);
                })
            );
          }
          function j(e, t) {
            return de.nodeName(e, "table") && de.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e;
          }
          function k(e) {
            return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
          }
          function E(e) {
            var t = rt.exec(e.type);
            return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
          }
          function S(e, t) {
            var n, r, o, i, s, a, u, c;
            if (1 === t.nodeType) {
              if (Fe.hasData(e) && ((i = Fe.access(e)), (s = Fe.set(t, i)), (c = i.events))) {
                delete s.handle, (s.events = {});
                for (o in c) for (n = 0, r = c[o].length; n < r; n++) de.event.add(t, o, c[o][n]);
              }
              Re.hasData(e) && ((a = Re.access(e)), (u = de.extend({}, a)), Re.set(t, u));
            }
          }
          function N(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ze.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
          }
          function A(e, t, r, o) {
            t = oe.apply([], t);
            var i,
              s,
              a,
              u,
              c,
              l,
              f = 0,
              p = e.length,
              h = p - 1,
              d = t[0],
              g = de.isFunction(d);
            if (g || (p > 1 && "string" == typeof d && !pe.checkClone && nt.test(d)))
              return e.each(function (n) {
                var i = e.eq(n);
                g && (t[0] = d.call(this, n, i.html())), A(i, t, r, o);
              });
            if (p && ((i = x(t, e[0].ownerDocument, !1, e, o)), (s = i.firstChild), 1 === i.childNodes.length && (i = s), s || o)) {
              for (a = de.map(v(i, "script"), k), u = a.length; f < p; f++) (c = i), f !== h && ((c = de.clone(c, !0, !0)), u && de.merge(a, v(c, "script"))), r.call(e[f], c, f);
              if (u)
                for (l = a[a.length - 1].ownerDocument, de.map(a, E), f = 0; f < u; f++)
                  (c = a[f]), Ve.test(c.type || "") && !Fe.access(c, "globalEval") && de.contains(l, c) && (c.src ? de._evalUrl && de._evalUrl(c.src) : n(c.textContent.replace(ot, ""), l));
            }
            return e;
          }
          function q(e, t, n) {
            for (var r, o = t ? de.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || de.cleanData(v(r)), r.parentNode && (n && de.contains(r.ownerDocument, r) && y(v(r, "script")), r.parentNode.removeChild(r));
            return e;
          }
          function D(e, t, n) {
            var r,
              o,
              i,
              s,
              a = e.style;
            return (
              (n = n || at(e)),
              n &&
              ((s = n.getPropertyValue(t) || n[t]),
              "" !== s || de.contains(e.ownerDocument, e) || (s = de.style(e, t)),
              !pe.pixelMarginRight() && st.test(s) && it.test(t) && ((r = a.width), (o = a.minWidth), (i = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = n.width), (a.width = r), (a.minWidth = o), (a.maxWidth = i))),
                void 0 !== s ? s + "" : s
            );
          }
          function O(e, t) {
            return {
              get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments);
              },
            };
          }
          function L(e) {
            if (e in pt) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = ft.length; n--; ) if (((e = ft[n] + t), e in pt)) return e;
          }
          function H(e, t, n) {
            var r = $e.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }
          function F(e, t, n, r, o) {
            var i,
              s = 0;
            for (i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; i < 4; i += 2)
              "margin" === n && (s += de.css(e, n + We[i], !0, o)),
                r
                  ? ("content" === n && (s -= de.css(e, "padding" + We[i], !0, o)), "margin" !== n && (s -= de.css(e, "border" + We[i] + "Width", !0, o)))
                  : ((s += de.css(e, "padding" + We[i], !0, o)), "padding" !== n && (s += de.css(e, "border" + We[i] + "Width", !0, o)));
            return s;
          }
          function R(e, t, n) {
            var r,
              o = !0,
              i = at(e),
              s = "border-box" === de.css(e, "boxSizing", !1, i);
            if ((e.getClientRects().length && (r = e.getBoundingClientRect()[t]), r <= 0 || null == r)) {
              if (((r = D(e, t, i)), (r < 0 || null == r) && (r = e.style[t]), st.test(r))) return r;
              (o = s && (pe.boxSizingReliable() || r === e.style[t])), (r = parseFloat(r) || 0);
            }
            return r + F(e, t, n || (s ? "border" : "content"), o, i) + "px";
          }
          function I(e, t, n, r, o) {
            return new I.prototype.init(e, t, n, r, o);
          }
          function P() {
            dt && (e.requestAnimationFrame(P), de.fx.tick());
          }
          function M() {
            return (
              e.setTimeout(function () {
                ht = void 0;
              }),
                (ht = de.now())
            );
          }
          function $(e, t) {
            var n,
              r = 0,
              o = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) (n = We[r]), (o["margin" + n] = o["padding" + n] = e);
            return t && (o.opacity = o.width = e), o;
          }
          function W(e, t, n) {
            for (var r, o = (U.tweeners[t] || []).concat(U.tweeners["*"]), i = 0, s = o.length; i < s; i++) if ((r = o[i].call(n, t, e))) return r;
          }
          function B(e, t, n) {
            var r,
              o,
              i,
              s,
              a,
              u,
              c,
              l,
              f = "width" in t || "height" in t,
              p = this,
              h = {},
              d = e.style,
              g = e.nodeType && Be(e),
              v = Fe.get(e, "fxshow");
            n.queue ||
            ((s = de._queueHooks(e, "fx")),
            null == s.unqueued &&
            ((s.unqueued = 0),
              (a = s.empty.fire),
              (s.empty.fire = function () {
                s.unqueued || a();
              })),
              s.unqueued++,
              p.always(function () {
                p.always(function () {
                  s.unqueued--, de.queue(e, "fx").length || s.empty.fire();
                });
              }));
            for (r in t)
              if (((o = t[r]), gt.test(o))) {
                if ((delete t[r], (i = i || "toggle" === o), o === (g ? "hide" : "show"))) {
                  if ("show" !== o || !v || void 0 === v[r]) continue;
                  g = !0;
                }
                h[r] = (v && v[r]) || de.style(e, r);
              }
            if (((u = !de.isEmptyObject(t)), u || !de.isEmptyObject(h))) {
              f &&
              1 === e.nodeType &&
              ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
                (c = v && v.display),
              null == c && (c = Fe.get(e, "display")),
                (l = de.css(e, "display")),
              "none" === l && (c ? (l = c) : (m([e], !0), (c = e.style.display || c), (l = de.css(e, "display")), m([e]))),
              ("inline" === l || ("inline-block" === l && null != c)) &&
              "none" === de.css(e, "float") &&
              (u ||
              (p.done(function () {
                d.display = c;
              }),
              null == c && ((l = d.display), (c = "none" === l ? "" : l))),
                (d.display = "inline-block"))),
              n.overflow &&
              ((d.overflow = "hidden"),
                p.always(function () {
                  (d.overflow = n.overflow[0]), (d.overflowX = n.overflow[1]), (d.overflowY = n.overflow[2]);
                })),
                (u = !1);
              for (r in h)
                u ||
                (v ? "hidden" in v && (g = v.hidden) : (v = Fe.access(e, "fxshow", { display: c })),
                i && (v.hidden = !g),
                g && m([e], !0),
                  p.done(function () {
                    g || m([e]), Fe.remove(e, "fxshow");
                    for (r in h) de.style(e, r, h[r]);
                  })),
                  (u = W(g ? v[r] : 0, r, p)),
                r in v || ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
            }
          }
          function _(e, t) {
            var n, r, o, i, s;
            for (n in e)
              if (((r = de.camelCase(n)), (o = t[r]), (i = e[n]), de.isArray(i) && ((o = i[1]), (i = e[n] = i[0])), n !== r && ((e[r] = i), delete e[n]), (s = de.cssHooks[r]), s && "expand" in s)) {
                (i = s.expand(i)), delete e[r];
                for (n in i) n in e || ((e[n] = i[n]), (t[n] = o));
              } else t[r] = o;
          }
          function U(e, t, n) {
            var r,
              o,
              i = 0,
              s = U.prefilters.length,
              a = de.Deferred().always(function () {
                delete u.elem;
              }),
              u = function () {
                if (o) return !1;
                for (var t = ht || M(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, i = 1 - r, s = 0, u = c.tweens.length; s < u; s++) c.tweens[s].run(i);
                return a.notifyWith(e, [c, i, n]), i < 1 && u ? n : (a.resolveWith(e, [c]), !1);
              },
              c = a.promise({
                elem: e,
                props: de.extend({}, t),
                opts: de.extend(!0, { specialEasing: {}, easing: de.easing._default }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ht || M(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var r = de.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                  return c.tweens.push(r), r;
                },
                stop: function (t) {
                  var n = 0,
                    r = t ? c.tweens.length : 0;
                  if (o) return this;
                  for (o = !0; n < r; n++) c.tweens[n].run(1);
                  return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
                },
              }),
              l = c.props;
            for (_(l, c.opts.specialEasing); i < s; i++) if ((r = U.prefilters[i].call(c, e, l, c.opts))) return de.isFunction(r.stop) && (de._queueHooks(c.elem, c.opts.queue).stop = de.proxy(r.stop, r)), r;
            return (
              de.map(l, W, c),
              de.isFunction(c.opts.start) && c.opts.start.call(e, c),
                de.fx.timer(de.extend(u, { elem: e, anim: c, queue: c.opts.queue })),
                c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
            );
          }
          function z(e) {
            var t = e.match(qe) || [];
            return t.join(" ");
          }
          function X(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function V(e, t, n, r) {
            var o;
            if (de.isArray(t))
              de.each(t, function (t, o) {
                n || Et.test(e) ? r(e, o) : V(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r);
              });
            else if (n || "object" !== de.type(t)) r(e, t);
            else for (o in t) V(e + "[" + o + "]", t[o], n, r);
          }
          function G(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var r,
                o = 0,
                i = t.toLowerCase().match(qe) || [];
              if (de.isFunction(n)) for (; (r = i[o++]); ) "+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
            };
          }
          function Y(e, t, n, r) {
            function o(a) {
              var u;
              return (
                (i[a] = !0),
                  de.each(e[a] || [], function (e, a) {
                    var c = a(t, n, r);
                    return "string" != typeof c || s || i[c] ? (s ? !(u = c) : void 0) : (t.dataTypes.unshift(c), o(c), !1);
                  }),
                  u
              );
            }
            var i = {},
              s = e === Pt;
            return o(t.dataTypes[0]) || (!i["*"] && o("*"));
          }
          function Q(e, t) {
            var n,
              r,
              o = de.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && de.extend(!0, e, r), e;
          }
          function J(e, t, n) {
            for (var r, o, i, s, a = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
              for (o in a)
                if (a[o] && a[o].test(r)) {
                  u.unshift(o);
                  break;
                }
            if (u[0] in n) i = u[0];
            else {
              for (o in n) {
                if (!u[0] || e.converters[o + " " + u[0]]) {
                  i = o;
                  break;
                }
                s || (s = o);
              }
              i = i || s;
            }
            if (i) return i !== u[0] && u.unshift(i), n[i];
          }
          function K(e, t, n, r) {
            var o,
              i,
              s,
              a,
              u,
              c = {},
              l = e.dataTypes.slice();
            if (l[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
            for (i = l.shift(); i; )
              if ((e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = i), (i = l.shift())))
                if ("*" === i) i = u;
                else if ("*" !== u && u !== i) {
                  if (((s = c[u + " " + i] || c["* " + i]), !s))
                    for (o in c)
                      if (((a = o.split(" ")), a[1] === i && (s = c[u + " " + a[0]] || c["* " + a[0]]))) {
                        s === !0 ? (s = c[o]) : c[o] !== !0 && ((i = a[0]), l.unshift(a[1]));
                        break;
                      }
                  if (s !== !0)
                    if (s && e.throws) t = s(t);
                    else
                      try {
                        t = s(t);
                      } catch (e) {
                        return { state: "parsererror", error: s ? e : "No conversion from " + u + " to " + i };
                      }
                }
            return { state: "success", data: t };
          }
          function Z(e) {
            return de.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
          }
          var ee = [],
            te = e.document,
            ne = Object.getPrototypeOf,
            re = ee.slice,
            oe = ee.concat,
            ie = ee.push,
            se = ee.indexOf,
            ae = {},
            ue = ae.toString,
            ce = ae.hasOwnProperty,
            le = ce.toString,
            fe = le.call(Object),
            pe = {},
            he = "3.1.1",
            de = function (e, t) {
              return new de.fn.init(e, t);
            },
            ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            me = /^-ms-/,
            ve = /-([a-z])/g,
            ye = function (e, t) {
              return t.toUpperCase();
            };
          (de.fn = de.prototype = {
            jquery: he,
            constructor: de,
            length: 0,
            toArray: function () {
              return re.call(this);
            },
            get: function (e) {
              return null == e ? re.call(this) : e < 0 ? this[e + this.length] : this[e];
            },
            pushStack: function (e) {
              var t = de.merge(this.constructor(), e);
              return (t.prevObject = this), t;
            },
            each: function (e) {
              return de.each(this, e);
            },
            map: function (e) {
              return this.pushStack(
                de.map(this, function (t, n) {
                  return e.call(t, n, t);
                })
              );
            },
            slice: function () {
              return this.pushStack(re.apply(this, arguments));
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            eq: function (e) {
              var t = this.length,
                n = +e + (e < 0 ? t : 0);
              return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
            },
            end: function () {
              return this.prevObject || this.constructor();
            },
            push: ie,
            sort: ee.sort,
            splice: ee.splice,
          }),
            (de.extend = de.fn.extend = function () {
              var e,
                t,
                n,
                r,
                o,
                i,
                s = arguments[0] || {},
                a = 1,
                u = arguments.length,
                c = !1;
              for ("boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++), "object" == typeof s || de.isFunction(s) || (s = {}), a === u && ((s = this), a--); a < u; a++)
                if (null != (e = arguments[a]))
                  for (t in e)
                    (n = s[t]),
                      (r = e[t]),
                    s !== r &&
                    (c && r && (de.isPlainObject(r) || (o = de.isArray(r))) ? (o ? ((o = !1), (i = n && de.isArray(n) ? n : [])) : (i = n && de.isPlainObject(n) ? n : {}), (s[t] = de.extend(c, i, r))) : void 0 !== r && (s[t] = r));
              return s;
            }),
            de.extend({
              expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isFunction: function (e) {
                return "function" === de.type(e);
              },
              isArray: Array.isArray,
              isWindow: function (e) {
                return null != e && e === e.window;
              },
              isNumeric: function (e) {
                var t = de.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
              },
              isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== ue.call(e)) && (!(t = ne(e)) || ((n = ce.call(t, "constructor") && t.constructor), "function" == typeof n && le.call(n) === fe));
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ae[ue.call(e)] || "object" : typeof e;
              },
              globalEval: function (e) {
                n(e);
              },
              camelCase: function (e) {
                return e.replace(me, "ms-").replace(ve, ye);
              },
              nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
              },
              each: function (e, t) {
                var n,
                  o = 0;
                if (r(e)) for (n = e.length; o < n && t.call(e[o], o, e[o]) !== !1; o++);
                else for (o in e) if (t.call(e[o], o, e[o]) === !1) break;
                return e;
              },
              trim: function (e) {
                return null == e ? "" : (e + "").replace(ge, "");
              },
              makeArray: function (e, t) {
                var n = t || [];
                return null != e && (r(Object(e)) ? de.merge(n, "string" == typeof e ? [e] : e) : ie.call(n, e)), n;
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : se.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
                return (e.length = o), e;
              },
              grep: function (e, t, n) {
                for (var r, o = [], i = 0, s = e.length, a = !n; i < s; i++) (r = !t(e[i], i)), r !== a && o.push(e[i]);
                return o;
              },
              map: function (e, t, n) {
                var o,
                  i,
                  s = 0,
                  a = [];
                if (r(e)) for (o = e.length; s < o; s++) (i = t(e[s], s, n)), null != i && a.push(i);
                else for (s in e) (i = t(e[s], s, n)), null != i && a.push(i);
                return oe.apply([], a);
              },
              guid: 1,
              proxy: function (e, t) {
                var n, r, o;
                if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), de.isFunction(e)))
                  return (
                    (r = re.call(arguments, 2)),
                      (o = function () {
                        return e.apply(t || this, r.concat(re.call(arguments)));
                      }),
                      (o.guid = e.guid = e.guid || de.guid++),
                      o
                  );
              },
              now: Date.now,
              support: pe,
            }),
          "function" == typeof Symbol && (de.fn[Symbol.iterator] = ee[Symbol.iterator]),
            de.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
              ae["[object " + t + "]"] = t.toLowerCase();
            });
          var xe = (function (e) {
            function t(e, t, n, r) {
              var o,
                i,
                s,
                a,
                u,
                c,
                l,
                p = t && t.ownerDocument,
                d = t ? t.nodeType : 9;
              if (((n = n || []), "string" != typeof e || !e || (1 !== d && 9 !== d && 11 !== d))) return n;
              if (!r && ((t ? t.ownerDocument || t : W) !== L && O(t), (t = t || L), F)) {
                if (11 !== d && (u = ve.exec(e)))
                  if ((o = u[1])) {
                    if (9 === d) {
                      if (!(s = t.getElementById(o))) return n;
                      if (s.id === o) return n.push(s), n;
                    } else if (p && (s = p.getElementById(o)) && M(t, s) && s.id === o) return n.push(s), n;
                  } else {
                    if (u[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                    if ((o = u[3]) && T.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(o)), n;
                  }
                if (T.qsa && !X[e + " "] && (!R || !R.test(e))) {
                  if (1 !== d) (p = t), (l = e);
                  else if ("object" !== t.nodeName.toLowerCase()) {
                    for ((a = t.getAttribute("id")) ? (a = a.replace(we, Te)) : t.setAttribute("id", (a = $)), c = E(e), i = c.length; i--; ) c[i] = "#" + a + " " + h(c[i]);
                    (l = c.join(",")), (p = (ye.test(e) && f(t.parentNode)) || t);
                  }
                  if (l)
                    try {
                      return K.apply(n, p.querySelectorAll(l)), n;
                    } catch (e) {
                    } finally {
                      a === $ && t.removeAttribute("id");
                    }
                }
              }
              return N(e.replace(ae, "$1"), t, n, r);
            }
            function n() {
              function e(n, r) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], (e[n + " "] = r);
              }
              var t = [];
              return e;
            }
            function r(e) {
              return (e[$] = !0), e;
            }
            function o(e) {
              var t = L.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function i(e, t) {
              for (var n = e.split("|"), r = n.length; r--; ) C.attrHandle[n[r]] = t;
            }
            function s(e, t) {
              var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
              if (r) return r;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function a(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e;
              };
            }
            function u(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function c(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && t.disabled === !1
                  ? "label" in t
                  ? "label" in t.parentNode
                  ? t.parentNode.disabled === e
                  : t.disabled === e
                  : t.isDisabled === e || (t.isDisabled !== !e && je(t) === e)
                  : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function l(e) {
              return r(function (t) {
                return (
                  (t = +t),
                    r(function (n, r) {
                      for (var o, i = e([], n.length, t), s = i.length; s--; ) n[(o = i[s])] && (n[o] = !(r[o] = n[o]));
                    })
                );
              });
            }
            function f(e) {
              return e && "undefined" != typeof e.getElementsByTagName && e;
            }
            function p() {}
            function h(e) {
              for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
              return r;
            }
            function d(e, t, n) {
              var r = t.dir,
                o = t.next,
                i = o || r,
                s = n && "parentNode" === i,
                a = _++;
              return t.first
                ? function (t, n, o) {
                for (; (t = t[r]); ) if (1 === t.nodeType || s) return e(t, n, o);
                return !1;
              }
                : function (t, n, u) {
                var c,
                  l,
                  f,
                  p = [B, a];
                if (u) {
                  for (; (t = t[r]); ) if ((1 === t.nodeType || s) && e(t, n, u)) return !0;
                } else
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || s)
                      if (((f = t[$] || (t[$] = {})), (l = f[t.uniqueID] || (f[t.uniqueID] = {})), o && o === t.nodeName.toLowerCase())) t = t[r] || t;
                      else {
                        if ((c = l[i]) && c[0] === B && c[1] === a) return (p[2] = c[2]);
                        if (((l[i] = p), (p[2] = e(t, n, u)))) return !0;
                      }
                return !1;
              };
            }
            function g(e) {
              return e.length > 1
                ? function (t, n, r) {
                for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                return !0;
              }
                : e[0];
            }
            function m(e, n, r) {
              for (var o = 0, i = n.length; o < i; o++) t(e, n[o], r);
              return r;
            }
            function v(e, t, n, r, o) {
              for (var i, s = [], a = 0, u = e.length, c = null != t; a < u; a++) (i = e[a]) && ((n && !n(i, r, o)) || (s.push(i), c && t.push(a)));
              return s;
            }
            function y(e, t, n, o, i, s) {
              return (
                o && !o[$] && (o = y(o)),
                i && !i[$] && (i = y(i, s)),
                  r(function (r, s, a, u) {
                    var c,
                      l,
                      f,
                      p = [],
                      h = [],
                      d = s.length,
                      g = r || m(t || "*", a.nodeType ? [a] : a, []),
                      y = !e || (!r && t) ? g : v(g, p, e, a, u),
                      x = n ? (i || (r ? e : d || o) ? [] : s) : y;
                    if ((n && n(y, x, a, u), o)) for (c = v(x, h), o(c, [], a, u), l = c.length; l--; ) (f = c[l]) && (x[h[l]] = !(y[h[l]] = f));
                    if (r) {
                      if (i || e) {
                        if (i) {
                          for (c = [], l = x.length; l--; ) (f = x[l]) && c.push((y[l] = f));
                          i(null, (x = []), c, u);
                        }
                        for (l = x.length; l--; ) (f = x[l]) && (c = i ? ee(r, f) : p[l]) > -1 && (r[c] = !(s[c] = f));
                      }
                    } else (x = v(x === s ? x.splice(d, x.length) : x)), i ? i(null, s, x, u) : K.apply(s, x);
                  })
              );
            }
            function x(e) {
              for (
                var t,
                  n,
                  r,
                  o = e.length,
                  i = C.relative[e[0].type],
                  s = i || C.relative[" "],
                  a = i ? 1 : 0,
                  u = d(
                    function (e) {
                      return e === t;
                    },
                    s,
                    !0
                  ),
                  c = d(
                    function (e) {
                      return ee(t, e) > -1;
                    },
                    s,
                    !0
                  ),
                  l = [
                    function (e, n, r) {
                      var o = (!i && (r || n !== A)) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
                      return (t = null), o;
                    },
                  ];
                a < o;
                a++
              )
                if ((n = C.relative[e[a].type])) l = [d(g(l), n)];
                else {
                  if (((n = C.filter[e[a].type].apply(null, e[a].matches)), n[$])) {
                    for (r = ++a; r < o && !C.relative[e[r].type]; r++);
                    return y(a > 1 && g(l), a > 1 && h(e.slice(0, a - 1).concat({ value: " " === e[a - 2].type ? "*" : "" })).replace(ae, "$1"), n, a < r && x(e.slice(a, r)), r < o && x((e = e.slice(r))), r < o && h(e));
                  }
                  l.push(n);
                }
              return g(l);
            }
            function b(e, n) {
              var o = n.length > 0,
                i = e.length > 0,
                s = function (r, s, a, u, c) {
                  var l,
                    f,
                    p,
                    h = 0,
                    d = "0",
                    g = r && [],
                    m = [],
                    y = A,
                    x = r || (i && C.find.TAG("*", c)),
                    b = (B += null == y ? 1 : Math.random() || 0.1),
                    w = x.length;
                  for (c && (A = s === L || s || c); d !== w && null != (l = x[d]); d++) {
                    if (i && l) {
                      for (f = 0, s || l.ownerDocument === L || (O(l), (a = !F)); (p = e[f++]); )
                        if (p(l, s || L, a)) {
                          u.push(l);
                          break;
                        }
                      c && (B = b);
                    }
                    o && ((l = !p && l) && h--, r && g.push(l));
                  }
                  if (((h += d), o && d !== h)) {
                    for (f = 0; (p = n[f++]); ) p(g, m, s, a);
                    if (r) {
                      if (h > 0) for (; d--; ) g[d] || m[d] || (m[d] = Q.call(u));
                      m = v(m);
                    }
                    K.apply(u, m), c && !r && m.length > 0 && h + n.length > 1 && t.uniqueSort(u);
                  }
                  return c && ((B = b), (A = y)), g;
                };
              return o ? r(s) : s;
            }
            var w,
              T,
              C,
              j,
              k,
              E,
              S,
              N,
              A,
              q,
              D,
              O,
              L,
              H,
              F,
              R,
              I,
              P,
              M,
              $ = "sizzle" + 1 * new Date(),
              W = e.document,
              B = 0,
              _ = 0,
              U = n(),
              z = n(),
              X = n(),
              V = function (e, t) {
                return e === t && (D = !0), 0;
              },
              G = {}.hasOwnProperty,
              Y = [],
              Q = Y.pop,
              J = Y.push,
              K = Y.push,
              Z = Y.slice,
              ee = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1;
              },
              te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              ne = "[\\x20\\t\\r\\n\\f]",
              re = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
              oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
              ie = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
              se = new RegExp(ne + "+", "g"),
              ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
              ue = new RegExp("^" + ne + "*," + ne + "*"),
              ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
              le = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
              fe = new RegExp(ie),
              pe = new RegExp("^" + re + "$"),
              he = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re + "|[*])"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + ie),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i"),
              },
              de = /^(?:input|select|textarea|button)$/i,
              ge = /^h\d$/i,
              me = /^[^{]+\{\s*\[native \w/,
              ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ye = /[+~]/,
              xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
              be = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
              },
              we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              Te = function (e, t) {
                return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
              },
              Ce = function () {
                O();
              },
              je = d(
                function (e) {
                  return e.disabled === !0 && ("form" in e || "label" in e);
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              K.apply((Y = Z.call(W.childNodes)), W.childNodes), Y[W.childNodes.length].nodeType;
            } catch (e) {
              K = {
                apply: Y.length
                  ? function (e, t) {
                  J.apply(e, Z.call(t));
                }
                  : function (e, t) {
                  for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                  e.length = n - 1;
                },
              };
            }
            (T = t.support = {}),
              (k = t.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName;
              }),
              (O = t.setDocument = function (e) {
                var t,
                  n,
                  r = e ? e.ownerDocument || e : W;
                return r !== L && 9 === r.nodeType && r.documentElement
                  ? ((L = r),
                  (H = L.documentElement),
                  (F = !k(L)),
                W !== L && (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)),
                  (T.attributes = o(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (T.getElementsByTagName = o(function (e) {
                    return e.appendChild(L.createComment("")), !e.getElementsByTagName("*").length;
                  })),
                  (T.getElementsByClassName = me.test(L.getElementsByClassName)),
                  (T.getById = o(function (e) {
                    return (H.appendChild(e).id = $), !L.getElementsByName || !L.getElementsByName($).length;
                  })),
                  T.getById
                    ? ((C.filter.ID = function (e) {
                    var t = e.replace(xe, be);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                    (C.find.ID = function (e, t) {
                      if ("undefined" != typeof t.getElementById && F) {
                        var n = t.getElementById(e);
                        return n ? [n] : [];
                      }
                    }))
                    : ((C.filter.ID = function (e) {
                    var t = e.replace(xe, be);
                    return function (e) {
                      var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  }),
                    (C.find.ID = function (e, t) {
                      if ("undefined" != typeof t.getElementById && F) {
                        var n,
                          r,
                          o,
                          i = t.getElementById(e);
                        if (i) {
                          if (((n = i.getAttributeNode("id")), n && n.value === e)) return [i];
                          for (o = t.getElementsByName(e), r = 0; (i = o[r++]); ) if (((n = i.getAttributeNode("id")), n && n.value === e)) return [i];
                        }
                        return [];
                      }
                    })),
                  (C.find.TAG = T.getElementsByTagName
                    ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0;
                  }
                    : function (e, t) {
                    var n,
                      r = [],
                      o = 0,
                      i = t.getElementsByTagName(e);
                    if ("*" === e) {
                      for (; (n = i[o++]); ) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return i;
                  }),
                  (C.find.CLASS =
                    T.getElementsByClassName &&
                    function (e, t) {
                      if ("undefined" != typeof t.getElementsByClassName && F) return t.getElementsByClassName(e);
                    }),
                  (I = []),
                  (R = []),
                (T.qsa = me.test(L.querySelectorAll)) &&
                (o(function (e) {
                  (H.appendChild(e).innerHTML = "<a id='" + $ + "'></a><select id='" + $ + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + ne + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length || R.push("\\[" + ne + "*(?:value|" + te + ")"),
                  e.querySelectorAll("[id~=" + $ + "-]").length || R.push("~="),
                  e.querySelectorAll(":checked").length || R.push(":checked"),
                  e.querySelectorAll("a#" + $ + "+*").length || R.push(".#.+[+~]");
                }),
                  o(function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = L.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length && R.push("name" + ne + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length && R.push(":enabled", ":disabled"),
                      (H.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length && R.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      R.push(",.*:");
                  })),
                (T.matchesSelector = me.test((P = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector))) &&
                o(function (e) {
                  (T.disconnectedMatch = P.call(e, "*")), P.call(e, "[s!='']:x"), I.push("!=", ie);
                }),
                  (R = R.length && new RegExp(R.join("|"))),
                  (I = I.length && new RegExp(I.join("|"))),
                  (t = me.test(H.compareDocumentPosition)),
                  (M =
                    t || me.test(H.contains)
                      ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                    }
                      : function (e, t) {
                      if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
                  (V = t
                    ? function (e, t) {
                    if (e === t) return (D = !0), 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n
                      ? n
                      : ((n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1),
                      1 & n || (!T.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e === L || (e.ownerDocument === W && M(W, e))
                        ? -1
                        : t === L || (t.ownerDocument === W && M(W, t))
                        ? 1
                        : q
                        ? ee(q, e) - ee(q, t)
                        : 0
                        : 4 & n
                        ? -1
                        : 1);
                  }
                    : function (e, t) {
                    if (e === t) return (D = !0), 0;
                    var n,
                      r = 0,
                      o = e.parentNode,
                      i = t.parentNode,
                      a = [e],
                      u = [t];
                    if (!o || !i) return e === L ? -1 : t === L ? 1 : o ? -1 : i ? 1 : q ? ee(q, e) - ee(q, t) : 0;
                    if (o === i) return s(e, t);
                    for (n = e; (n = n.parentNode); ) a.unshift(n);
                    for (n = t; (n = n.parentNode); ) u.unshift(n);
                    for (; a[r] === u[r]; ) r++;
                    return r ? s(a[r], u[r]) : a[r] === W ? -1 : u[r] === W ? 1 : 0;
                  }),
                  L)
                  : L;
              }),
              (t.matches = function (e, n) {
                return t(e, null, null, n);
              }),
              (t.matchesSelector = function (e, n) {
                if (((e.ownerDocument || e) !== L && O(e), (n = n.replace(le, "='$1']")), T.matchesSelector && F && !X[n + " "] && (!I || !I.test(n)) && (!R || !R.test(n))))
                  try {
                    var r = P.call(e, n);
                    if (r || T.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
                  } catch (e) {}
                return t(n, L, null, [e]).length > 0;
              }),
              (t.contains = function (e, t) {
                return (e.ownerDocument || e) !== L && O(e), M(e, t);
              }),
              (t.attr = function (e, t) {
                (e.ownerDocument || e) !== L && O(e);
                var n = C.attrHandle[t.toLowerCase()],
                  r = n && G.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !F) : void 0;
                return void 0 !== r ? r : T.attributes || !F ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
              }),
              (t.escape = function (e) {
                return (e + "").replace(we, Te);
              }),
              (t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
              }),
              (t.uniqueSort = function (e) {
                var t,
                  n = [],
                  r = 0,
                  o = 0;
                if (((D = !T.detectDuplicates), (q = !T.sortStable && e.slice(0)), e.sort(V), D)) {
                  for (; (t = e[o++]); ) t === e[o] && (r = n.push(o));
                  for (; r--; ) e.splice(n[r], 1);
                }
                return (q = null), e;
              }),
              (j = t.getText = function (e) {
                var t,
                  n = "",
                  r = 0,
                  o = e.nodeType;
                if (o) {
                  if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += j(e);
                  } else if (3 === o || 4 === o) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += j(t);
                return n;
              }),
              (C = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: he,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: {
                  ATTR: function (e) {
                    return (e[1] = e[1].replace(xe, be)), (e[3] = (e[3] || e[4] || e[5] || "").replace(xe, be)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && t.error(e[0]),
                        e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return he.CHILD.test(e[0])
                      ? null
                      : (e[3] ? (e[2] = e[4] || e[5] || "") : n && fe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(xe, be).toLowerCase();
                    return "*" === e
                      ? function () {
                      return !0;
                    }
                      : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                  },
                  CLASS: function (e) {
                    var t = U[e + " "];
                    return (
                      t ||
                      ((t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) &&
                      U(e, function (e) {
                        return t.test(("string" == typeof e.className && e.className) || ("undefined" != typeof e.getAttribute && e.getAttribute("class")) || "");
                      }))
                    );
                  },
                  ATTR: function (e, n, r) {
                    return function (o) {
                      var i = t.attr(o, e);
                      return null == i
                        ? "!=" === n
                        : !n ||
                      ((i += ""),
                        "=" === n
                          ? i === r
                          : "!=" === n
                          ? i !== r
                          : "^=" === n
                          ? r && 0 === i.indexOf(r)
                          : "*=" === n
                          ? r && i.indexOf(r) > -1
                          : "$=" === n
                          ? r && i.slice(-r.length) === r
                          : "~=" === n
                          ? (" " + i.replace(se, " ") + " ").indexOf(r) > -1
                          : "|=" === n && (i === r || i.slice(0, r.length + 1) === r + "-"));
                    };
                  },
                  CHILD: function (e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3),
                      s = "last" !== e.slice(-4),
                      a = "of-type" === t;
                    return 1 === r && 0 === o
                      ? function (e) {
                      return !!e.parentNode;
                    }
                      : function (t, n, u) {
                      var c,
                        l,
                        f,
                        p,
                        h,
                        d,
                        g = i !== s ? "nextSibling" : "previousSibling",
                        m = t.parentNode,
                        v = a && t.nodeName.toLowerCase(),
                        y = !u && !a,
                        x = !1;
                      if (m) {
                        if (i) {
                          for (; g; ) {
                            for (p = t; (p = p[g]); ) if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                            d = g = "only" === e && !d && "nextSibling";
                          }
                          return !0;
                        }
                        if (((d = [s ? m.firstChild : m.lastChild]), s && y)) {
                          for (
                            p = m, f = p[$] || (p[$] = {}), l = f[p.uniqueID] || (f[p.uniqueID] = {}), c = l[e] || [], h = c[0] === B && c[1], x = h && c[2], p = h && m.childNodes[h];
                            (p = (++h && p && p[g]) || (x = h = 0) || d.pop());

                          )
                            if (1 === p.nodeType && ++x && p === t) {
                              l[e] = [B, h, x];
                              break;
                            }
                        } else if ((y && ((p = t), (f = p[$] || (p[$] = {})), (l = f[p.uniqueID] || (f[p.uniqueID] = {})), (c = l[e] || []), (h = c[0] === B && c[1]), (x = h)), x === !1))
                          for (
                            ;
                            (p = (++h && p && p[g]) || (x = h = 0) || d.pop()) &&
                            ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++x || (y && ((f = p[$] || (p[$] = {})), (l = f[p.uniqueID] || (f[p.uniqueID] = {})), (l[e] = [B, x])), p !== t));

                          );
                        return (x -= o), x === r || (x % r === 0 && x / r >= 0);
                      }
                    };
                  },
                  PSEUDO: function (e, n) {
                    var o,
                      i = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return i[$]
                      ? i(n)
                      : i.length > 1
                      ? ((o = [e, e, "", n]),
                      C.setFilters.hasOwnProperty(e.toLowerCase())
                        ? r(function (e, t) {
                        for (var r, o = i(e, n), s = o.length; s--; ) (r = ee(e, o[s])), (e[r] = !(t[r] = o[s]));
                      })
                        : function (e) {
                        return i(e, 0, o);
                      })
                      : i;
                  },
                },
                pseudos: {
                  not: r(function (e) {
                    var t = [],
                      n = [],
                      o = S(e.replace(ae, "$1"));
                    return o[$]
                      ? r(function (e, t, n, r) {
                      for (var i, s = o(e, null, r, []), a = e.length; a--; ) (i = s[a]) && (e[a] = !(t[a] = i));
                    })
                      : function (e, r, i) {
                      return (t[0] = e), o(t, null, i, n), (t[0] = null), !n.pop();
                    };
                  }),
                  has: r(function (e) {
                    return function (n) {
                      return t(e, n).length > 0;
                    };
                  }),
                  contains: r(function (e) {
                    return (
                      (e = e.replace(xe, be)),
                        function (t) {
                          return (t.textContent || t.innerText || j(t)).indexOf(e) > -1;
                        }
                    );
                  }),
                  lang: r(function (e) {
                    return (
                      pe.test(e || "") || t.error("unsupported lang: " + e),
                        (e = e.replace(xe, be).toLowerCase()),
                        function (t) {
                          var n;
                          do if ((n = F ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()), n === e || 0 === n.indexOf(e + "-");
                          while ((t = t.parentNode) && 1 === t.nodeType);
                          return !1;
                        }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === H;
                  },
                  focus: function (e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                  },
                  enabled: c(!1),
                  disabled: c(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                  },
                  selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !C.pseudos.empty(e);
                  },
                  header: function (e) {
                    return ge.test(e.nodeName);
                  },
                  input: function (e) {
                    return de.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && "button" === e.type) || "button" === t;
                  },
                  text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                  },
                  first: l(function () {
                    return [0];
                  }),
                  last: l(function (e, t) {
                    return [t - 1];
                  }),
                  eq: l(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: l(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: l(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: l(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                    return e;
                  }),
                  gt: l(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                  }),
                },
              }),
              (C.pseudos.nth = C.pseudos.eq);
            for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) C.pseudos[w] = a(w);
            for (w in { submit: !0, reset: !0 }) C.pseudos[w] = u(w);
            return (
              (p.prototype = C.filters = C.pseudos),
                (C.setFilters = new p()),
                (E = t.tokenize = function (e, n) {
                  var r,
                    o,
                    i,
                    s,
                    a,
                    u,
                    c,
                    l = z[e + " "];
                  if (l) return n ? 0 : l.slice(0);
                  for (a = e, u = [], c = C.preFilter; a; ) {
                    (r && !(o = ue.exec(a))) || (o && (a = a.slice(o[0].length) || a), u.push((i = []))), (r = !1), (o = ce.exec(a)) && ((r = o.shift()), i.push({ value: r, type: o[0].replace(ae, " ") }), (a = a.slice(r.length)));
                    for (s in C.filter) !(o = he[s].exec(a)) || (c[s] && !(o = c[s](o))) || ((r = o.shift()), i.push({ value: r, type: s, matches: o }), (a = a.slice(r.length)));
                    if (!r) break;
                  }
                  return n ? a.length : a ? t.error(e) : z(e, u).slice(0);
                }),
                (S = t.compile = function (e, t) {
                  var n,
                    r = [],
                    o = [],
                    i = X[e + " "];
                  if (!i) {
                    for (t || (t = E(e)), n = t.length; n--; ) (i = x(t[n])), i[$] ? r.push(i) : o.push(i);
                    (i = X(e, b(o, r))), (i.selector = e);
                  }
                  return i;
                }),
                (N = t.select = function (e, t, n, r) {
                  var o,
                    i,
                    s,
                    a,
                    u,
                    c = "function" == typeof e && e,
                    l = !r && E((e = c.selector || e));
                  if (((n = n || []), 1 === l.length)) {
                    if (((i = l[0] = l[0].slice(0)), i.length > 2 && "ID" === (s = i[0]).type && 9 === t.nodeType && F && C.relative[i[1].type])) {
                      if (((t = (C.find.ID(s.matches[0].replace(xe, be), t) || [])[0]), !t)) return n;
                      c && (t = t.parentNode), (e = e.slice(i.shift().value.length));
                    }
                    for (o = he.needsContext.test(e) ? 0 : i.length; o-- && ((s = i[o]), !C.relative[(a = s.type)]); )
                      if ((u = C.find[a]) && (r = u(s.matches[0].replace(xe, be), (ye.test(i[0].type) && f(t.parentNode)) || t))) {
                        if ((i.splice(o, 1), (e = r.length && h(i)), !e)) return K.apply(n, r), n;
                        break;
                      }
                  }
                  return (c || S(e, l))(r, t, !F, n, !t || (ye.test(e) && f(t.parentNode)) || t), n;
                }),
                (T.sortStable = $.split("").sort(V).join("") === $),
                (T.detectDuplicates = !!D),
                O(),
                (T.sortDetached = o(function (e) {
                  return 1 & e.compareDocumentPosition(L.createElement("fieldset"));
                })),
              o(function (e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
              }) ||
              i("type|href|height|width", function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
              (T.attributes &&
              o(function (e) {
                return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
              })) ||
              i("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
              }),
              o(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
              i(te, function (e, t, n) {
                var r;
                if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
              }),
                t
            );
          })(e);
          (de.find = xe),
            (de.expr = xe.selectors),
            (de.expr[":"] = de.expr.pseudos),
            (de.uniqueSort = de.unique = xe.uniqueSort),
            (de.text = xe.getText),
            (de.isXMLDoc = xe.isXML),
            (de.contains = xe.contains),
            (de.escapeSelector = xe.escape);
          var be = function (e, t, n) {
              for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                  if (o && de(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            we = function (e, t) {
              for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            Te = de.expr.match.needsContext,
            Ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            je = /^.[^:#\[\.,]*$/;
          (de.filter = function (e, t, n) {
            var r = t[0];
            return (
              n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === r.nodeType
                  ? de.find.matchesSelector(r, e)
                  ? [r]
                  : []
                  : de.find.matches(
                  e,
                  de.grep(t, function (e) {
                    return 1 === e.nodeType;
                  })
                )
            );
          }),
            de.fn.extend({
              find: function (e) {
                var t,
                  n,
                  r = this.length,
                  o = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    de(e).filter(function () {
                      for (t = 0; t < r; t++) if (de.contains(o[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++) de.find(e, o[t], n);
                return r > 1 ? de.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(o(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(o(this, e || [], !0));
              },
              is: function (e) {
                return !!o(this, "string" == typeof e && Te.test(e) ? de(e) : e || [], !1).length;
              },
            });
          var ke,
            Ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            Se = (de.fn.init = function (e, t, n) {
              var r, o;
              if (!e) return this;
              if (((n = n || ke), "string" == typeof e)) {
                if (((r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ee.exec(e)), !r || (!r[1] && t))) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                  if (((t = t instanceof de ? t[0] : t), de.merge(this, de.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Ce.test(r[1]) && de.isPlainObject(t)))
                    for (r in t) de.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                  return this;
                }
                return (o = te.getElementById(r[2])), o && ((this[0] = o), (this.length = 1)), this;
              }
              return e.nodeType ? ((this[0] = e), (this.length = 1), this) : de.isFunction(e) ? (void 0 !== n.ready ? n.ready(e) : e(de)) : de.makeArray(e, this);
            });
          (Se.prototype = de.fn), (ke = de(te));
          var Ne = /^(?:parents|prev(?:Until|All))/,
            Ae = { children: !0, contents: !0, next: !0, prev: !0 };
          de.fn.extend({
            has: function (e) {
              var t = de(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++) if (de.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                o = this.length,
                i = [],
                s = "string" != typeof e && de(e);
              if (!Te.test(e))
                for (; r < o; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && de.find.matchesSelector(n, e))) {
                      i.push(n);
                      break;
                    }
              return this.pushStack(i.length > 1 ? de.uniqueSort(i) : i);
            },
            index: function (e) {
              return e ? ("string" == typeof e ? se.call(de(e), this[0]) : se.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            },
            add: function (e, t) {
              return this.pushStack(de.uniqueSort(de.merge(this.get(), de(e, t))));
            },
            addBack: function (e) {
              return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
            },
          }),
            de.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return be(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return be(e, "parentNode", n);
                },
                next: function (e) {
                  return i(e, "nextSibling");
                },
                prev: function (e) {
                  return i(e, "previousSibling");
                },
                nextAll: function (e) {
                  return be(e, "nextSibling");
                },
                prevAll: function (e) {
                  return be(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return be(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return be(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return we((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return we(e.firstChild);
                },
                contents: function (e) {
                  return e.contentDocument || de.merge([], e.childNodes);
                },
              },
              function (e, t) {
                de.fn[e] = function (n, r) {
                  var o = de.map(this, t, n);
                  return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = de.filter(r, o)), this.length > 1 && (Ae[e] || de.uniqueSort(o), Ne.test(e) && o.reverse()), this.pushStack(o);
                };
              }
            );
          var qe = /[^\x20\t\r\n\f]+/g;
          (de.Callbacks = function (e) {
            e = "string" == typeof e ? s(e) : de.extend({}, e);
            var t,
              n,
              r,
              o,
              i = [],
              a = [],
              u = -1,
              c = function () {
                for (o = e.once, r = t = !0; a.length; u = -1) for (n = a.shift(); ++u < i.length; ) i[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && ((u = i.length), (n = !1));
                e.memory || (n = !1), (t = !1), o && (i = n ? [] : "");
              },
              l = {
                add: function () {
                  return (
                    i &&
                    (n && !t && ((u = i.length - 1), a.push(n)),
                      (function t(n) {
                        de.each(n, function (n, r) {
                          de.isFunction(r) ? (e.unique && l.has(r)) || i.push(r) : r && r.length && "string" !== de.type(r) && t(r);
                        });
                      })(arguments),
                    n && !t && c()),
                      this
                  );
                },
                remove: function () {
                  return (
                    de.each(arguments, function (e, t) {
                      for (var n; (n = de.inArray(t, i, n)) > -1; ) i.splice(n, 1), n <= u && u--;
                    }),
                      this
                  );
                },
                has: function (e) {
                  return e ? de.inArray(e, i) > -1 : i.length > 0;
                },
                empty: function () {
                  return i && (i = []), this;
                },
                disable: function () {
                  return (o = a = []), (i = n = ""), this;
                },
                disabled: function () {
                  return !i;
                },
                lock: function () {
                  return (o = a = []), n || t || (i = n = ""), this;
                },
                locked: function () {
                  return !!o;
                },
                fireWith: function (e, n) {
                  return o || ((n = n || []), (n = [e, n.slice ? n.slice() : n]), a.push(n), t || c()), this;
                },
                fire: function () {
                  return l.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!r;
                },
              };
            return l;
          }),
            de.extend({
              Deferred: function (t) {
                var n = [
                    ["notify", "progress", de.Callbacks("memory"), de.Callbacks("memory"), 2],
                    ["resolve", "done", de.Callbacks("once memory"), de.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", de.Callbacks("once memory"), de.Callbacks("once memory"), 1, "rejected"],
                  ],
                  r = "pending",
                  o = {
                    state: function () {
                      return r;
                    },
                    always: function () {
                      return i.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return o.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return de
                        .Deferred(function (t) {
                          de.each(n, function (n, r) {
                            var o = de.isFunction(e[r[4]]) && e[r[4]];
                            i[r[1]](function () {
                              var e = o && o.apply(this, arguments);
                              e && de.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, o ? [e] : arguments);
                            });
                          }),
                            (e = null);
                        })
                        .promise();
                    },
                    then: function (t, r, o) {
                      function i(t, n, r, o) {
                        return function () {
                          var c = this,
                            l = arguments,
                            f = function () {
                              var e, f;
                              if (!(t < s)) {
                                if (((e = r.apply(c, l)), e === n.promise())) throw new TypeError("Thenable self-resolution");
                                (f = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                  de.isFunction(f)
                                    ? o
                                    ? f.call(e, i(s, n, a, o), i(s, n, u, o))
                                    : (s++, f.call(e, i(s, n, a, o), i(s, n, u, o), i(s, n, a, n.notifyWith)))
                                    : (r !== a && ((c = void 0), (l = [e])), (o || n.resolveWith)(c, l));
                              }
                            },
                            p = o
                              ? f
                              : function () {
                              try {
                                f();
                              } catch (e) {
                                de.Deferred.exceptionHook && de.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= s && (r !== u && ((c = void 0), (l = [e])), n.rejectWith(c, l));
                              }
                            };
                          t ? p() : (de.Deferred.getStackHook && (p.stackTrace = de.Deferred.getStackHook()), e.setTimeout(p));
                        };
                      }
                      var s = 0;
                      return de
                        .Deferred(function (e) {
                          n[0][3].add(i(0, e, de.isFunction(o) ? o : a, e.notifyWith)), n[1][3].add(i(0, e, de.isFunction(t) ? t : a)), n[2][3].add(i(0, e, de.isFunction(r) ? r : u));
                        })
                        .promise();
                    },
                    promise: function (e) {
                      return null != e ? de.extend(e, o) : o;
                    },
                  },
                  i = {};
                return (
                  de.each(n, function (e, t) {
                    var s = t[2],
                      a = t[5];
                    (o[t[1]] = s.add),
                    a &&
                    s.add(
                      function () {
                        r = a;
                      },
                      n[3 - e][2].disable,
                      n[0][2].lock
                    ),
                      s.add(t[3].fire),
                      (i[t[0]] = function () {
                        return i[t[0] + "With"](this === i ? void 0 : this, arguments), this;
                      }),
                      (i[t[0] + "With"] = s.fireWith);
                  }),
                    o.promise(i),
                  t && t.call(i, i),
                    i
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  r = Array(n),
                  o = re.call(arguments),
                  i = de.Deferred(),
                  s = function (e) {
                    return function (n) {
                      (r[e] = this), (o[e] = arguments.length > 1 ? re.call(arguments) : n), --t || i.resolveWith(r, o);
                    };
                  };
                if (t <= 1 && (c(e, i.done(s(n)).resolve, i.reject), "pending" === i.state() || de.isFunction(o[n] && o[n].then))) return i.then();
                for (; n--; ) c(o[n], s(n), i.reject);
                return i.promise();
              },
            });
          var De = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (de.Deferred.exceptionHook = function (t, n) {
            e.console && e.console.warn && t && De.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
          }),
            (de.readyException = function (t) {
              e.setTimeout(function () {
                throw t;
              });
            });
          var Oe = de.Deferred();
          (de.fn.ready = function (e) {
            return (
              Oe.then(e).catch(function (e) {
                de.readyException(e);
              }),
                this
            );
          }),
            de.extend({
              isReady: !1,
              readyWait: 1,
              holdReady: function (e) {
                e ? de.readyWait++ : de.ready(!0);
              },
              ready: function (e) {
                (e === !0 ? --de.readyWait : de.isReady) || ((de.isReady = !0), (e !== !0 && --de.readyWait > 0) || Oe.resolveWith(te, [de]));
              },
            }),
            (de.ready.then = Oe.then),
            "complete" === te.readyState || ("loading" !== te.readyState && !te.documentElement.doScroll) ? e.setTimeout(de.ready) : (te.addEventListener("DOMContentLoaded", l), e.addEventListener("load", l));
          var Le = function (e, t, n, r, o, i, s) {
              var a = 0,
                u = e.length,
                c = null == n;
              if ("object" === de.type(n)) {
                o = !0;
                for (a in n) Le(e, t, a, n[a], !0, i, s);
              } else if (
                void 0 !== r &&
                ((o = !0),
                de.isFunction(r) || (s = !0),
                c &&
                (s
                  ? (t.call(e, r), (t = null))
                  : ((c = t),
                  (t = function (e, t, n) {
                    return c.call(de(e), n);
                  }))),
                  t)
              )
                for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
              return o ? e : c ? t.call(e) : u ? t(e[0], n) : i;
            },
            He = function (e) {
              return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
            };
          (f.uid = 1),
            (f.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return t || ((t = {}), He(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
              },
              set: function (e, t, n) {
                var r,
                  o = this.cache(e);
                if ("string" == typeof t) o[de.camelCase(t)] = n;
                else for (r in t) o[de.camelCase(r)] = t[r];
                return o;
              },
              get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][de.camelCase(t)];
              },
              access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== t) {
                    de.isArray(t) ? (t = t.map(de.camelCase)) : ((t = de.camelCase(t)), (t = t in r ? [t] : t.match(qe) || [])), (n = t.length);
                    for (; n--; ) delete r[t[n]];
                  }
                  (void 0 === t || de.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !de.isEmptyObject(t);
              },
            });
          var Fe = new f(),
            Re = new f(),
            Ie = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Pe = /[A-Z]/g;
          de.extend({
            hasData: function (e) {
              return Re.hasData(e) || Fe.hasData(e);
            },
            data: function (e, t, n) {
              return Re.access(e, t, n);
            },
            removeData: function (e, t) {
              Re.remove(e, t);
            },
            _data: function (e, t, n) {
              return Fe.access(e, t, n);
            },
            _removeData: function (e, t) {
              Fe.remove(e, t);
            },
          }),
            de.fn.extend({
              data: function (e, t) {
                var n,
                  r,
                  o,
                  i = this[0],
                  s = i && i.attributes;
                if (void 0 === e) {
                  if (this.length && ((o = Re.get(i)), 1 === i.nodeType && !Fe.get(i, "hasDataAttrs"))) {
                    for (n = s.length; n--; ) s[n] && ((r = s[n].name), 0 === r.indexOf("data-") && ((r = de.camelCase(r.slice(5))), h(i, r, o[r])));
                    Fe.set(i, "hasDataAttrs", !0);
                  }
                  return o;
                }
                return "object" == typeof e
                  ? this.each(function () {
                  Re.set(this, e);
                })
                  : Le(
                  this,
                  function (t) {
                    var n;
                    if (i && void 0 === t) {
                      if (((n = Re.get(i, e)), void 0 !== n)) return n;
                      if (((n = h(i, e)), void 0 !== n)) return n;
                    } else
                      this.each(function () {
                        Re.set(this, e, t);
                      });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
              },
              removeData: function (e) {
                return this.each(function () {
                  Re.remove(this, e);
                });
              },
            }),
            de.extend({
              queue: function (e, t, n) {
                var r;
                if (e) return (t = (t || "fx") + "queue"), (r = Fe.get(e, t)), n && (!r || de.isArray(n) ? (r = Fe.access(e, t, de.makeArray(n))) : r.push(n)), r || [];
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = de.queue(e, t),
                  r = n.length,
                  o = n.shift(),
                  i = de._queueHooks(e, t),
                  s = function () {
                    de.dequeue(e, t);
                  };
                "inprogress" === o && ((o = n.shift()), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, s, i)), !r && i && i.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  Fe.get(e, n) ||
                  Fe.access(e, n, {
                    empty: de.Callbacks("once memory").add(function () {
                      Fe.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            de.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n
                      ? de.queue(this[0], e)
                      : void 0 === t
                      ? this
                      : this.each(function () {
                      var n = de.queue(this, e, t);
                      de._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && de.dequeue(this, e);
                    })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  de.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  r = 1,
                  o = de.Deferred(),
                  i = this,
                  s = this.length,
                  a = function () {
                    --r || o.resolveWith(i, [i]);
                  };
                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; ) (n = Fe.get(i[s], e + "queueHooks")), n && n.empty && (r++, n.empty.add(a));
                return a(), o.promise(t);
              },
            });
          var Me = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            $e = new RegExp("^(?:([+-])=|)(" + Me + ")([a-z%]*)$", "i"),
            We = ["Top", "Right", "Bottom", "Left"],
            Be = function (e, t) {
              return (e = t || e), "none" === e.style.display || ("" === e.style.display && de.contains(e.ownerDocument, e) && "none" === de.css(e, "display"));
            },
            _e = function (e, t, n, r) {
              var o,
                i,
                s = {};
              for (i in t) (s[i] = e.style[i]), (e.style[i] = t[i]);
              o = n.apply(e, r || []);
              for (i in t) e.style[i] = s[i];
              return o;
            },
            Ue = {};
          de.fn.extend({
            show: function () {
              return m(this, !0);
            },
            hide: function () {
              return m(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                ? this.show()
                : this.hide()
                : this.each(function () {
                Be(this) ? de(this).show() : de(this).hide();
              });
            },
          });
          var ze = /^(?:checkbox|radio)$/i,
            Xe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Ve = /^$|\/(?:java|ecma)script/i,
            Ge = {
              option: [1, "<select multiple='multiple'>", "</select>"],
              thead: [1, "<table>", "</table>"],
              col: [2, "<table><colgroup>", "</colgroup></table>"],
              tr: [2, "<table><tbody>", "</tbody></table>"],
              td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
              _default: [0, "", ""],
            };
          (Ge.optgroup = Ge.option), (Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead), (Ge.th = Ge.td);
          var Ye = /<|&#?\w+;/;
          !(function () {
            var e = te.createDocumentFragment(),
              t = e.appendChild(te.createElement("div")),
              n = te.createElement("input");
            n.setAttribute("type", "radio"),
              n.setAttribute("checked", "checked"),
              n.setAttribute("name", "t"),
              t.appendChild(n),
              (pe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
              (t.innerHTML = "<textarea>x</textarea>"),
              (pe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
          })();
          var Qe = te.documentElement,
            Je = /^key/,
            Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ze = /^([^.]*)(?:\.(.+)|)/;
          (de.event = {
            global: {},
            add: function (e, t, n, r, o) {
              var i,
                s,
                a,
                u,
                c,
                l,
                f,
                p,
                h,
                d,
                g,
                m = Fe.get(e);
              if (m)
                for (
                  n.handler && ((i = n), (n = i.handler), (o = i.selector)),
                  o && de.find.matchesSelector(Qe, o),
                  n.guid || (n.guid = de.guid++),
                  (u = m.events) || (u = m.events = {}),
                  (s = m.handle) ||
                  (s = m.handle = function (t) {
                    return "undefined" != typeof de && de.event.triggered !== t.type ? de.event.dispatch.apply(e, arguments) : void 0;
                  }),
                    t = (t || "").match(qe) || [""],
                    c = t.length;
                  c--;

                )
                  (a = Ze.exec(t[c]) || []),
                    (h = g = a[1]),
                    (d = (a[2] || "").split(".").sort()),
                  h &&
                  ((f = de.event.special[h] || {}),
                    (h = (o ? f.delegateType : f.bindType) || h),
                    (f = de.event.special[h] || {}),
                    (l = de.extend({ type: h, origType: g, data: r, handler: n, guid: n.guid, selector: o, needsContext: o && de.expr.match.needsContext.test(o), namespace: d.join(".") }, i)),
                  (p = u[h]) || ((p = u[h] = []), (p.delegateCount = 0), (f.setup && f.setup.call(e, r, d, s) !== !1) || (e.addEventListener && e.addEventListener(h, s))),
                  f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)),
                    o ? p.splice(p.delegateCount++, 0, l) : p.push(l),
                    (de.event.global[h] = !0));
            },
            remove: function (e, t, n, r, o) {
              var i,
                s,
                a,
                u,
                c,
                l,
                f,
                p,
                h,
                d,
                g,
                m = Fe.hasData(e) && Fe.get(e);
              if (m && (u = m.events)) {
                for (t = (t || "").match(qe) || [""], c = t.length; c--; )
                  if (((a = Ze.exec(t[c]) || []), (h = g = a[1]), (d = (a[2] || "").split(".").sort()), h)) {
                    for (f = de.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, p = u[h] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = i = p.length; i--; )
                      (l = p[i]),
                      (!o && g !== l.origType) ||
                      (n && n.guid !== l.guid) ||
                      (a && !a.test(l.namespace)) ||
                      (r && r !== l.selector && ("**" !== r || !l.selector)) ||
                      (p.splice(i, 1), l.selector && p.delegateCount--, f.remove && f.remove.call(e, l));
                    s && !p.length && ((f.teardown && f.teardown.call(e, d, m.handle) !== !1) || de.removeEvent(e, h, m.handle), delete u[h]);
                  } else for (h in u) de.event.remove(e, h + t[c], n, r, !0);
                de.isEmptyObject(u) && Fe.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                o,
                i,
                s,
                a = de.event.fix(e),
                u = new Array(arguments.length),
                c = (Fe.get(this, "events") || {})[a.type] || [],
                l = de.event.special[a.type] || {};
              for (u[0] = a, t = 1; t < arguments.length; t++) u[t] = arguments[t];
              if (((a.delegateTarget = this), !l.preDispatch || l.preDispatch.call(this, a) !== !1)) {
                for (s = de.event.handlers.call(this, a, c), t = 0; (o = s[t++]) && !a.isPropagationStopped(); )
                  for (a.currentTarget = o.elem, n = 0; (i = o.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                    (a.rnamespace && !a.rnamespace.test(i.namespace)) ||
                    ((a.handleObj = i), (a.data = i.data), (r = ((de.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u)), void 0 !== r && (a.result = r) === !1 && (a.preventDefault(), a.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, a), a.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                o,
                i,
                s,
                a = [],
                u = t.delegateCount,
                c = e.target;
              if (u && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                  if (1 === c.nodeType && ("click" !== e.type || c.disabled !== !0)) {
                    for (i = [], s = {}, n = 0; n < u; n++) (r = t[n]), (o = r.selector + " "), void 0 === s[o] && (s[o] = r.needsContext ? de(o, this).index(c) > -1 : de.find(o, this, null, [c]).length), s[o] && i.push(r);
                    i.length && a.push({ elem: c, handlers: i });
                  }
              return (c = this), u < t.length && a.push({ elem: c, handlers: t.slice(u) }), a;
            },
            addProp: function (e, t) {
              Object.defineProperty(de.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: de.isFunction(t)
                  ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
                  : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
                set: function (t) {
                  Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                },
              });
            },
            fix: function (e) {
              return e[de.expando] ? e : new de.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              focus: {
                trigger: function () {
                  if (this !== T() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin",
              },
              blur: {
                trigger: function () {
                  if (this === T() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout",
              },
              click: {
                trigger: function () {
                  if ("checkbox" === this.type && this.click && de.nodeName(this, "input")) return this.click(), !1;
                },
                _default: function (e) {
                  return de.nodeName(e.target, "a");
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (de.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (de.Event = function (e, t) {
              return this instanceof de.Event
                ? (e && e.type
                ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && e.returnValue === !1) ? b : w),
                (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
              t && de.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || de.now()),
                void (this[de.expando] = !0))
                : new de.Event(e, t);
            }),
            (de.Event.prototype = {
              constructor: de.Event,
              isDefaultPrevented: w,
              isPropagationStopped: w,
              isImmediatePropagationStopped: w,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = b), e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = b), e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = b), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
              },
            }),
            de.each(
              {
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
                which: function (e) {
                  var t = e.button;
                  return null == e.which && Je.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && Ke.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                },
              },
              de.event.addProp
            ),
            de.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
              de.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                  var n,
                    r = this,
                    o = e.relatedTarget,
                    i = e.handleObj;
                  return (o && (o === r || de.contains(r, o))) || ((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)), n;
                },
              };
            }),
            de.fn.extend({
              on: function (e, t, n, r) {
                return C(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return C(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), de(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                  for (o in e) this.off(o, t, e[o]);
                  return this;
                }
                return (
                  (t !== !1 && "function" != typeof t) || ((n = t), (t = void 0)),
                  n === !1 && (n = w),
                    this.each(function () {
                      de.event.remove(this, e, n, t);
                    })
                );
              },
            });
          var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            tt = /<script|<style|<link/i,
            nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            rt = /^true\/(.*)/,
            ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          de.extend({
            htmlPrefilter: function (e) {
              return e.replace(et, "<$1></$2>");
            },
            clone: function (e, t, n) {
              var r,
                o,
                i,
                s,
                a = e.cloneNode(!0),
                u = de.contains(e.ownerDocument, e);
              if (!(pe.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || de.isXMLDoc(e))) for (s = v(a), i = v(e), r = 0, o = i.length; r < o; r++) N(i[r], s[r]);
              if (t)
                if (n) for (i = i || v(e), s = s || v(a), r = 0, o = i.length; r < o; r++) S(i[r], s[r]);
                else S(e, a);
              return (s = v(a, "script")), s.length > 0 && y(s, !u && v(e, "script")), a;
            },
            cleanData: function (e) {
              for (var t, n, r, o = de.event.special, i = 0; void 0 !== (n = e[i]); i++)
                if (He(n)) {
                  if ((t = n[Fe.expando])) {
                    if (t.events) for (r in t.events) o[r] ? de.event.remove(n, r) : de.removeEvent(n, r, t.handle);
                    n[Fe.expando] = void 0;
                  }
                  n[Re.expando] && (n[Re.expando] = void 0);
                }
            },
          }),
            de.fn.extend({
              detach: function (e) {
                return q(this, e, !0);
              },
              remove: function (e) {
                return q(this, e);
              },
              text: function (e) {
                return Le(
                  this,
                  function (e) {
                    return void 0 === e
                      ? de.text(this)
                      : this.empty().each(function () {
                      (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                    });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return A(this, arguments, function (e) {
                  if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = j(this, e);
                    t.appendChild(e);
                  }
                });
              },
              prepend: function () {
                return A(this, arguments, function (e) {
                  if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = j(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return A(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return A(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (de.cleanData(v(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                      return de.clone(this, e, t);
                    })
                );
              },
              html: function (e) {
                return Le(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !tt.test(e) && !Ge[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) {
                      e = de.htmlPrefilter(e);
                      try {
                        for (; n < r; n++) (t = this[n] || {}), 1 === t.nodeType && (de.cleanData(v(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return A(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    de.inArray(this, e) < 0 && (de.cleanData(v(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            de.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
              de.fn[e] = function (e) {
                for (var n, r = [], o = de(e), i = o.length - 1, s = 0; s <= i; s++) (n = s === i ? this : this.clone(!0)), de(o[s])[t](n), ie.apply(r, n.get());
                return this.pushStack(r);
              };
            });
          var it = /^margin/,
            st = new RegExp("^(" + Me + ")(?!px)[a-z%]+$", "i"),
            at = function (t) {
              var n = t.ownerDocument.defaultView;
              return (n && n.opener) || (n = e), n.getComputedStyle(t);
            };
          !(function () {
            function t() {
              if (a) {
                (a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"), (a.innerHTML = ""), Qe.appendChild(s);
                var t = e.getComputedStyle(a);
                (n = "1%" !== t.top), (i = "2px" === t.marginLeft), (r = "4px" === t.width), (a.style.marginRight = "50%"), (o = "4px" === t.marginRight), Qe.removeChild(s), (a = null);
              }
            }
            var n,
              r,
              o,
              i,
              s = te.createElement("div"),
              a = te.createElement("div");
            a.style &&
            ((a.style.backgroundClip = "content-box"),
              (a.cloneNode(!0).style.backgroundClip = ""),
              (pe.clearCloneStyle = "content-box" === a.style.backgroundClip),
              (s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
              s.appendChild(a),
              de.extend(pe, {
                pixelPosition: function () {
                  return t(), n;
                },
                boxSizingReliable: function () {
                  return t(), r;
                },
                pixelMarginRight: function () {
                  return t(), o;
                },
                reliableMarginLeft: function () {
                  return t(), i;
                },
              }));
          })();
          var ut = /^(none|table(?!-c[ea]).+)/,
            ct = { position: "absolute", visibility: "hidden", display: "block" },
            lt = { letterSpacing: "0", fontWeight: "400" },
            ft = ["Webkit", "Moz", "ms"],
            pt = te.createElement("div").style;
          de.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = D(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: { float: "cssFloat" },
            style: function (e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o,
                  i,
                  s,
                  a = de.camelCase(t),
                  u = e.style;
                return (
                  (t = de.cssProps[a] || (de.cssProps[a] = L(a) || a)),
                    (s = de.cssHooks[t] || de.cssHooks[a]),
                    void 0 === n
                      ? s && "get" in s && void 0 !== (o = s.get(e, !1, r))
                      ? o
                      : u[t]
                      : ((i = typeof n),
                    "string" === i && (o = $e.exec(n)) && o[1] && ((n = d(e, t, o)), (i = "number")),
                    null != n &&
                    n === n &&
                    ("number" === i && (n += (o && o[3]) || (de.cssNumber[a] ? "" : "px")),
                    pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                    (s && "set" in s && void 0 === (n = s.set(e, n, r))) || (u[t] = n)),
                      void 0)
                );
              }
            },
            css: function (e, t, n, r) {
              var o,
                i,
                s,
                a = de.camelCase(t);
              return (
                (t = de.cssProps[a] || (de.cssProps[a] = L(a) || a)),
                  (s = de.cssHooks[t] || de.cssHooks[a]),
                s && "get" in s && (o = s.get(e, !0, n)),
                void 0 === o && (o = D(e, t, r)),
                "normal" === o && t in lt && (o = lt[t]),
                  "" === n || n ? ((i = parseFloat(o)), n === !0 || isFinite(i) ? i || 0 : o) : o
              );
            },
          }),
            de.each(["height", "width"], function (e, t) {
              de.cssHooks[t] = {
                get: function (e, n, r) {
                  if (n)
                    return !ut.test(de.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                      ? R(e, t, r)
                      : _e(e, ct, function () {
                      return R(e, t, r);
                    });
                },
                set: function (e, n, r) {
                  var o,
                    i = r && at(e),
                    s = r && F(e, t, r, "border-box" === de.css(e, "boxSizing", !1, i), i);
                  return s && (o = $e.exec(n)) && "px" !== (o[3] || "px") && ((e.style[t] = n), (n = de.css(e, t))), H(e, n, s);
                },
              };
            }),
            (de.cssHooks.marginLeft = O(pe.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(D(e, "marginLeft")) ||
                  e.getBoundingClientRect().left -
                  _e(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
                );
            })),
            de.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
              (de.cssHooks[e + t] = {
                expand: function (n) {
                  for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[e + We[r] + t] = i[r] || i[r - 2] || i[0];
                  return o;
                },
              }),
              it.test(e) || (de.cssHooks[e + t].set = H);
            }),
            de.fn.extend({
              css: function (e, t) {
                return Le(
                  this,
                  function (e, t, n) {
                    var r,
                      o,
                      i = {},
                      s = 0;
                    if (de.isArray(t)) {
                      for (r = at(e), o = t.length; s < o; s++) i[t[s]] = de.css(e, t[s], !1, r);
                      return i;
                    }
                    return void 0 !== n ? de.style(e, t, n) : de.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (de.Tween = I),
            (I.prototype = {
              constructor: I,
              init: function (e, t, n, r, o, i) {
                (this.elem = e), (this.prop = n), (this.easing = o || de.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = i || (de.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = I.propHooks[this.prop];
                return e && e.get ? e.get(this) : I.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = I.propHooks[this.prop];
                return (
                  this.options.duration ? (this.pos = t = de.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                  this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : I.propHooks._default.set(this),
                    this
                );
              },
            }),
            (I.prototype.init.prototype = I.prototype),
            (I.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : ((t = de.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
                },
                set: function (e) {
                  de.fx.step[e.prop] ? de.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (null == e.elem.style[de.cssProps[e.prop]] && !de.cssHooks[e.prop]) ? (e.elem[e.prop] = e.now) : de.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (I.propHooks.scrollTop = I.propHooks.scrollLeft = {
              set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
              },
            }),
            (de.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (de.fx = I.prototype.init),
            (de.fx.step = {});
          var ht,
            dt,
            gt = /^(?:toggle|show|hide)$/,
            mt = /queueHooks$/;
          (de.Animation = de.extend(U, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return d(n.elem, e, $e.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              de.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(qe));
              for (var n, r = 0, o = e.length; r < o; r++) (n = e[r]), (U.tweeners[n] = U.tweeners[n] || []), U.tweeners[n].unshift(t);
            },
            prefilters: [B],
            prefilter: function (e, t) {
              t ? U.prefilters.unshift(e) : U.prefilters.push(e);
            },
          })),
            (de.speed = function (e, t, n) {
              var r = e && "object" == typeof e ? de.extend({}, e) : { complete: n || (!n && t) || (de.isFunction(e) && e), duration: e, easing: (n && t) || (t && !de.isFunction(t) && t) };
              return (
                de.fx.off || te.hidden ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in de.fx.speeds ? (r.duration = de.fx.speeds[r.duration]) : (r.duration = de.fx.speeds._default)),
                (null != r.queue && r.queue !== !0) || (r.queue = "fx"),
                  (r.old = r.complete),
                  (r.complete = function () {
                    de.isFunction(r.old) && r.old.call(this), r.queue && de.dequeue(this, r.queue);
                  }),
                  r
              );
            }),
            de.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(Be).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
              },
              animate: function (e, t, n, r) {
                var o = de.isEmptyObject(e),
                  i = de.speed(t, n, r),
                  s = function () {
                    var t = U(this, de.extend({}, e), i);
                    (o || Fe.get(this, "finish")) && t.stop(!0);
                  };
                return (s.finish = s), o || i.queue === !1 ? this.each(s) : this.queue(i.queue, s);
              },
              stop: function (e, t, n) {
                var r = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && e !== !1 && this.queue(e || "fx", []),
                    this.each(function () {
                      var t = !0,
                        o = null != e && e + "queueHooks",
                        i = de.timers,
                        s = Fe.get(this);
                      if (o) s[o] && s[o].stop && r(s[o]);
                      else for (o in s) s[o] && s[o].stop && mt.test(o) && r(s[o]);
                      for (o = i.length; o--; ) i[o].elem !== this || (null != e && i[o].queue !== e) || (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
                      (!t && n) || de.dequeue(this, e);
                    })
                );
              },
              finish: function (e) {
                return (
                  e !== !1 && (e = e || "fx"),
                    this.each(function () {
                      var t,
                        n = Fe.get(this),
                        r = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        i = de.timers,
                        s = r ? r.length : 0;
                      for (n.finish = !0, de.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--; ) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                      for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                      delete n.finish;
                    })
                );
              },
            }),
            de.each(["toggle", "show", "hide"], function (e, t) {
              var n = de.fn[t];
              de.fn[t] = function (e, r, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, r, o);
              };
            }),
            de.each({ slideDown: $("show"), slideUp: $("hide"), slideToggle: $("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
              de.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r);
              };
            }),
            (de.timers = []),
            (de.fx.tick = function () {
              var e,
                t = 0,
                n = de.timers;
              for (ht = de.now(); t < n.length; t++) (e = n[t]), e() || n[t] !== e || n.splice(t--, 1);
              n.length || de.fx.stop(), (ht = void 0);
            }),
            (de.fx.timer = function (e) {
              de.timers.push(e), e() ? de.fx.start() : de.timers.pop();
            }),
            (de.fx.interval = 13),
            (de.fx.start = function () {
              dt || (dt = e.requestAnimationFrame ? e.requestAnimationFrame(P) : e.setInterval(de.fx.tick, de.fx.interval));
            }),
            (de.fx.stop = function () {
              e.cancelAnimationFrame ? e.cancelAnimationFrame(dt) : e.clearInterval(dt), (dt = null);
            }),
            (de.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (de.fn.delay = function (t, n) {
              return (
                (t = de.fx ? de.fx.speeds[t] || t : t),
                  (n = n || "fx"),
                  this.queue(n, function (n, r) {
                    var o = e.setTimeout(n, t);
                    r.stop = function () {
                      e.clearTimeout(o);
                    };
                  })
              );
            }),
            (function () {
              var e = te.createElement("input"),
                t = te.createElement("select"),
                n = t.appendChild(te.createElement("option"));
              (e.type = "checkbox"), (pe.checkOn = "" !== e.value), (pe.optSelected = n.selected), (e = te.createElement("input")), (e.value = "t"), (e.type = "radio"), (pe.radioValue = "t" === e.value);
            })();
          var vt,
            yt = de.expr.attrHandle;
          de.fn.extend({
            attr: function (e, t) {
              return Le(this, de.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                de.removeAttr(this, e);
              });
            },
          }),
            de.extend({
              attr: function (e, t, n) {
                var r,
                  o,
                  i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                  return "undefined" == typeof e.getAttribute
                    ? de.prop(e, t, n)
                    : ((1 === i && de.isXMLDoc(e)) || (o = de.attrHooks[t.toLowerCase()] || (de.expr.match.bool.test(t) ? vt : void 0)),
                    void 0 !== n
                      ? null === n
                      ? void de.removeAttr(e, t)
                      : o && "set" in o && void 0 !== (r = o.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ""), n)
                      : o && "get" in o && null !== (r = o.get(e, t))
                      ? r
                      : ((r = de.find.attr(e, t)), null == r ? void 0 : r));
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!pe.radioValue && "radio" === t && de.nodeName(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  r = 0,
                  o = t && t.match(qe);
                if (o && 1 === e.nodeType) for (; (n = o[r++]); ) e.removeAttribute(n);
              },
            }),
            (vt = {
              set: function (e, t, n) {
                return t === !1 ? de.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            de.each(de.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = yt[t] || de.find.attr;
              yt[t] = function (e, t, r) {
                var o,
                  i,
                  s = t.toLowerCase();
                return r || ((i = yt[s]), (yt[s] = o), (o = null != n(e, t, r) ? s : null), (yt[s] = i)), o;
              };
            });
          var xt = /^(?:input|select|textarea|button)$/i,
            bt = /^(?:a|area)$/i;
          de.fn.extend({
            prop: function (e, t) {
              return Le(this, de.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[de.propFix[e] || e];
              });
            },
          }),
            de.extend({
              prop: function (e, t, n) {
                var r,
                  o,
                  i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                  return (
                    (1 === i && de.isXMLDoc(e)) || ((t = de.propFix[t] || t), (o = de.propHooks[t])),
                      void 0 !== n ? (o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e[t] = n)) : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = de.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : xt.test(e.nodeName) || (bt.test(e.nodeName) && e.href) ? 0 : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
          pe.optSelected ||
          (de.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
            de.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
              de.propFix[this.toLowerCase()] = this;
            }),
            de.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  s,
                  a,
                  u = 0;
                if (de.isFunction(e))
                  return this.each(function (t) {
                    de(this).addClass(e.call(this, t, X(this)));
                  });
                if ("string" == typeof e && e)
                  for (t = e.match(qe) || []; (n = this[u++]); )
                    if (((o = X(n)), (r = 1 === n.nodeType && " " + z(o) + " "))) {
                      for (s = 0; (i = t[s++]); ) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                      (a = z(r)), o !== a && n.setAttribute("class", a);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  s,
                  a,
                  u = 0;
                if (de.isFunction(e))
                  return this.each(function (t) {
                    de(this).removeClass(e.call(this, t, X(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                  for (t = e.match(qe) || []; (n = this[u++]); )
                    if (((o = X(n)), (r = 1 === n.nodeType && " " + z(o) + " "))) {
                      for (s = 0; (i = t[s++]); ) for (; r.indexOf(" " + i + " ") > -1; ) r = r.replace(" " + i + " ", " ");
                      (a = z(r)), o !== a && n.setAttribute("class", a);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n
                  ? t
                  ? this.addClass(e)
                  : this.removeClass(e)
                  : de.isFunction(e)
                  ? this.each(function (n) {
                  de(this).toggleClass(e.call(this, n, X(this), t), t);
                })
                  : this.each(function () {
                  var t, r, o, i;
                  if ("string" === n) for (r = 0, o = de(this), i = e.match(qe) || []; (t = i[r++]); ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                  else (void 0 !== e && "boolean" !== n) || ((t = X(this)), t && Fe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Fe.get(this, "__className__") || ""));
                });
              },
              hasClass: function (e) {
                var t,
                  n,
                  r = 0;
                for (t = " " + e + " "; (n = this[r++]); ) if (1 === n.nodeType && (" " + z(X(n)) + " ").indexOf(t) > -1) return !0;
                return !1;
              },
            });
          var wt = /\r/g;
          de.fn.extend({
            val: function (e) {
              var t,
                n,
                r,
                o = this[0];
              {
                if (arguments.length)
                  return (
                    (r = de.isFunction(e)),
                      this.each(function (n) {
                        var o;
                        1 === this.nodeType &&
                        ((o = r ? e.call(this, n, de(this).val()) : e),
                          null == o
                            ? (o = "")
                            : "number" == typeof o
                            ? (o += "")
                            : de.isArray(o) &&
                          (o = de.map(o, function (e) {
                            return null == e ? "" : e + "";
                          })),
                          (t = de.valHooks[this.type] || de.valHooks[this.nodeName.toLowerCase()]),
                        (t && "set" in t && void 0 !== t.set(this, o, "value")) || (this.value = o));
                      })
                  );
                if (o) return (t = de.valHooks[o.type] || de.valHooks[o.nodeName.toLowerCase()]), t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : ((n = o.value), "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n);
              }
            },
          }),
            de.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = de.find.attr(e, "value");
                    return null != t ? t : z(de.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      r,
                      o = e.options,
                      i = e.selectedIndex,
                      s = "select-one" === e.type,
                      a = s ? null : [],
                      u = s ? i + 1 : o.length;
                    for (r = i < 0 ? u : s ? i : 0; r < u; r++)
                      if (((n = o[r]), (n.selected || r === i) && !n.disabled && (!n.parentNode.disabled || !de.nodeName(n.parentNode, "optgroup")))) {
                        if (((t = de(n).val()), s)) return t;
                        a.push(t);
                      }
                    return a;
                  },
                  set: function (e, t) {
                    for (var n, r, o = e.options, i = de.makeArray(t), s = o.length; s--; ) (r = o[s]), (r.selected = de.inArray(de.valHooks.option.get(r), i) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), i;
                  },
                },
              },
            }),
            de.each(["radio", "checkbox"], function () {
              (de.valHooks[this] = {
                set: function (e, t) {
                  if (de.isArray(t)) return (e.checked = de.inArray(de(e).val(), t) > -1);
                },
              }),
              pe.checkOn ||
              (de.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
            });
          var Tt = /^(?:focusinfocus|focusoutblur)$/;
          de.extend(de.event, {
            trigger: function (t, n, r, o) {
              var i,
                s,
                a,
                u,
                c,
                l,
                f,
                p = [r || te],
                h = ce.call(t, "type") ? t.type : t,
                d = ce.call(t, "namespace") ? t.namespace.split(".") : [];
              if (
                ((s = a = r = r || te),
                3 !== r.nodeType &&
                8 !== r.nodeType &&
                !Tt.test(h + de.event.triggered) &&
                (h.indexOf(".") > -1 && ((d = h.split(".")), (h = d.shift()), d.sort()),
                  (c = h.indexOf(":") < 0 && "on" + h),
                  (t = t[de.expando] ? t : new de.Event(h, "object" == typeof t && t)),
                  (t.isTrigger = o ? 2 : 3),
                  (t.namespace = d.join(".")),
                  (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                  (t.result = void 0),
                t.target || (t.target = r),
                  (n = null == n ? [t] : de.makeArray(n, [t])),
                  (f = de.event.special[h] || {}),
                o || !f.trigger || f.trigger.apply(r, n) !== !1))
              ) {
                if (!o && !f.noBubble && !de.isWindow(r)) {
                  for (u = f.delegateType || h, Tt.test(u + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), (a = s);
                  a === (r.ownerDocument || te) && p.push(a.defaultView || a.parentWindow || e);
                }
                for (i = 0; (s = p[i++]) && !t.isPropagationStopped(); )
                  (t.type = i > 1 ? u : f.bindType || h),
                    (l = (Fe.get(s, "events") || {})[t.type] && Fe.get(s, "handle")),
                  l && l.apply(s, n),
                    (l = c && s[c]),
                  l && l.apply && He(s) && ((t.result = l.apply(s, n)), t.result === !1 && t.preventDefault());
                return (
                  (t.type = h),
                  o ||
                  t.isDefaultPrevented() ||
                  (f._default && f._default.apply(p.pop(), n) !== !1) ||
                  !He(r) ||
                  (c && de.isFunction(r[h]) && !de.isWindow(r) && ((a = r[c]), a && (r[c] = null), (de.event.triggered = h), r[h](), (de.event.triggered = void 0), a && (r[c] = a))),
                    t.result
                );
              }
            },
            simulate: function (e, t, n) {
              var r = de.extend(new de.Event(), n, { type: e, isSimulated: !0 });
              de.event.trigger(r, null, t);
            },
          }),
            de.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  de.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return de.event.trigger(e, t, n, !0);
              },
            }),
            de.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
              de.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
              };
            }),
            de.fn.extend({
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            (pe.focusin = "onfocusin" in e),
          pe.focusin ||
          de.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
              de.event.simulate(t, e.target, de.event.fix(e));
            };
            de.event.special[t] = {
              setup: function () {
                var r = this.ownerDocument || this,
                  o = Fe.access(r, t);
                o || r.addEventListener(e, n, !0), Fe.access(r, t, (o || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this,
                  o = Fe.access(r, t) - 1;
                o ? Fe.access(r, t, o) : (r.removeEventListener(e, n, !0), Fe.remove(r, t));
              },
            };
          });
          var Ct = e.location,
            jt = de.now(),
            kt = /\?/;
          de.parseXML = function (t) {
            var n;
            if (!t || "string" != typeof t) return null;
            try {
              n = new e.DOMParser().parseFromString(t, "text/xml");
            } catch (e) {
              n = void 0;
            }
            return (n && !n.getElementsByTagName("parsererror").length) || de.error("Invalid XML: " + t), n;
          };
          var Et = /\[\]$/,
            St = /\r?\n/g,
            Nt = /^(?:submit|button|image|reset|file)$/i,
            At = /^(?:input|select|textarea|keygen)/i;
          (de.param = function (e, t) {
            var n,
              r = [],
              o = function (e, t) {
                var n = de.isFunction(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
              };
            if (de.isArray(e) || (e.jquery && !de.isPlainObject(e)))
              de.each(e, function () {
                o(this.name, this.value);
              });
            else for (n in e) V(n, e[n], t, o);
            return r.join("&");
          }),
            de.fn.extend({
              serialize: function () {
                return de.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                    var e = de.prop(this, "elements");
                    return e ? de.makeArray(e) : this;
                  })
                  .filter(function () {
                    var e = this.type;
                    return this.name && !de(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !ze.test(e));
                  })
                  .map(function (e, t) {
                    var n = de(this).val();
                    return null == n
                      ? null
                      : de.isArray(n)
                      ? de.map(n, function (e) {
                      return { name: t.name, value: e.replace(St, "\r\n") };
                    })
                      : { name: t.name, value: n.replace(St, "\r\n") };
                  })
                  .get();
              },
            });
          var qt = /%20/g,
            Dt = /#.*$/,
            Ot = /([?&])_=[^&]*/,
            Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ft = /^(?:GET|HEAD)$/,
            Rt = /^\/\//,
            It = {},
            Pt = {},
            Mt = "*/".concat("*"),
            $t = te.createElement("a");
          ($t.href = Ct.href),
            de.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Ct.href,
                type: "GET",
                isLocal: Ht.test(Ct.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": Mt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": de.parseXML },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Q(Q(e, de.ajaxSettings), t) : Q(de.ajaxSettings, e);
              },
              ajaxPrefilter: G(It),
              ajaxTransport: G(Pt),
              ajax: function (t, n) {
                function r(t, n, r, a) {
                  var c,
                    p,
                    h,
                    b,
                    w,
                    T = n;
                  l ||
                  ((l = !0),
                  u && e.clearTimeout(u),
                    (o = void 0),
                    (s = a || ""),
                    (C.readyState = t > 0 ? 4 : 0),
                    (c = (t >= 200 && t < 300) || 304 === t),
                  r && (b = J(d, C, r)),
                    (b = K(d, b, C, c)),
                    c
                      ? (d.ifModified && ((w = C.getResponseHeader("Last-Modified")), w && (de.lastModified[i] = w), (w = C.getResponseHeader("etag")), w && (de.etag[i] = w)),
                      204 === t || "HEAD" === d.type ? (T = "nocontent") : 304 === t ? (T = "notmodified") : ((T = b.state), (p = b.data), (h = b.error), (c = !h)))
                      : ((h = T), (!t && T) || ((T = "error"), t < 0 && (t = 0))),
                    (C.status = t),
                    (C.statusText = (n || T) + ""),
                    c ? v.resolveWith(g, [p, T, C]) : v.rejectWith(g, [C, T, h]),
                    C.statusCode(x),
                    (x = void 0),
                  f && m.trigger(c ? "ajaxSuccess" : "ajaxError", [C, d, c ? p : h]),
                    y.fireWith(g, [C, T]),
                  f && (m.trigger("ajaxComplete", [C, d]), --de.active || de.event.trigger("ajaxStop")));
                }
                "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
                var o,
                  i,
                  s,
                  a,
                  u,
                  c,
                  l,
                  f,
                  p,
                  h,
                  d = de.ajaxSetup({}, n),
                  g = d.context || d,
                  m = d.context && (g.nodeType || g.jquery) ? de(g) : de.event,
                  v = de.Deferred(),
                  y = de.Callbacks("once memory"),
                  x = d.statusCode || {},
                  b = {},
                  w = {},
                  T = "canceled",
                  C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (l) {
                        if (!a) for (a = {}; (t = Lt.exec(s)); ) a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()];
                      }
                      return null == t ? null : t;
                    },
                    getAllResponseHeaders: function () {
                      return l ? s : null;
                    },
                    setRequestHeader: function (e, t) {
                      return null == l && ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e), (b[e] = t)), this;
                    },
                    overrideMimeType: function (e) {
                      return null == l && (d.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (l) C.always(e[C.status]);
                        else for (t in e) x[t] = [x[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || T;
                      return o && o.abort(t), r(0, t), this;
                    },
                  };
                if (
                  (v.promise(C),
                    (d.url = ((t || d.url || Ct.href) + "").replace(Rt, Ct.protocol + "//")),
                    (d.type = n.method || n.type || d.method || d.type),
                    (d.dataTypes = (d.dataType || "*").toLowerCase().match(qe) || [""]),
                  null == d.crossDomain)
                ) {
                  c = te.createElement("a");
                  try {
                    (c.href = d.url), (c.href = c.href), (d.crossDomain = $t.protocol + "//" + $t.host != c.protocol + "//" + c.host);
                  } catch (e) {
                    d.crossDomain = !0;
                  }
                }
                if ((d.data && d.processData && "string" != typeof d.data && (d.data = de.param(d.data, d.traditional)), Y(It, d, n, C), l)) return C;
                (f = de.event && d.global),
                f && 0 === de.active++ && de.event.trigger("ajaxStart"),
                  (d.type = d.type.toUpperCase()),
                  (d.hasContent = !Ft.test(d.type)),
                  (i = d.url.replace(Dt, "")),
                  d.hasContent
                    ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(qt, "+"))
                    : ((h = d.url.slice(i.length)), d.data && ((i += (kt.test(i) ? "&" : "?") + d.data), delete d.data), d.cache === !1 && ((i = i.replace(Ot, "$1")), (h = (kt.test(i) ? "&" : "?") + "_=" + jt++ + h)), (d.url = i + h)),
                d.ifModified && (de.lastModified[i] && C.setRequestHeader("If-Modified-Since", de.lastModified[i]), de.etag[i] && C.setRequestHeader("If-None-Match", de.etag[i])),
                ((d.data && d.hasContent && d.contentType !== !1) || n.contentType) && C.setRequestHeader("Content-Type", d.contentType),
                  C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : d.accepts["*"]);
                for (p in d.headers) C.setRequestHeader(p, d.headers[p]);
                if (d.beforeSend && (d.beforeSend.call(g, C, d) === !1 || l)) return C.abort();
                if (((T = "abort"), y.add(d.complete), C.done(d.success), C.fail(d.error), (o = Y(Pt, d, n, C)))) {
                  if (((C.readyState = 1), f && m.trigger("ajaxSend", [C, d]), l)) return C;
                  d.async &&
                  d.timeout > 0 &&
                  (u = e.setTimeout(function () {
                    C.abort("timeout");
                  }, d.timeout));
                  try {
                    (l = !1), o.send(b, r);
                  } catch (e) {
                    if (l) throw e;
                    r(-1, e);
                  }
                } else r(-1, "No Transport");
                return C;
              },
              getJSON: function (e, t, n) {
                return de.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return de.get(e, void 0, t, "script");
              },
            }),
            de.each(["get", "post"], function (e, t) {
              de[t] = function (e, n, r, o) {
                return de.isFunction(n) && ((o = o || r), (r = n), (n = void 0)), de.ajax(de.extend({ url: e, type: t, dataType: o, data: n, success: r }, de.isPlainObject(e) && e));
              };
            }),
            (de._evalUrl = function (e) {
              return de.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
            }),
            de.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                  (de.isFunction(e) && (e = e.call(this[0])),
                    (t = de(e, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                    this
                );
              },
              wrapInner: function (e) {
                return de.isFunction(e)
                  ? this.each(function (t) {
                  de(this).wrapInner(e.call(this, t));
                })
                  : this.each(function () {
                  var t = de(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
              },
              wrap: function (e) {
                var t = de.isFunction(e);
                return this.each(function (n) {
                  de(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      de(this).replaceWith(this.childNodes);
                    }),
                    this
                );
              },
            }),
            (de.expr.pseudos.hidden = function (e) {
              return !de.expr.pseudos.visible(e);
            }),
            (de.expr.pseudos.visible = function (e) {
              return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
            }),
            (de.ajaxSettings.xhr = function () {
              try {
                return new e.XMLHttpRequest();
              } catch (e) {}
            });
          var Wt = { 0: 200, 1223: 204 },
            Bt = de.ajaxSettings.xhr();
          (pe.cors = !!Bt && "withCredentials" in Bt),
            (pe.ajax = Bt = !!Bt),
            de.ajaxTransport(function (t) {
              var n, r;
              if (pe.cors || (Bt && !t.crossDomain))
                return {
                  send: function (o, i) {
                    var s,
                      a = t.xhr();
                    if ((a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (s in o) a.setRequestHeader(s, o[s]);
                    (n = function (e) {
                      return function () {
                        n &&
                        ((n = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null),
                          "abort" === e
                            ? a.abort()
                            : "error" === e
                            ? "number" != typeof a.status
                            ? i(0, "error")
                            : i(a.status, a.statusText)
                            : i(Wt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
                      };
                    }),
                      (a.onload = n()),
                      (r = a.onerror = n("error")),
                      void 0 !== a.onabort
                        ? (a.onabort = r)
                        : (a.onreadystatechange = function () {
                        4 === a.readyState &&
                        e.setTimeout(function () {
                          n && r();
                        });
                      }),
                      (n = n("abort"));
                    try {
                      a.send((t.hasContent && t.data) || null);
                    } catch (e) {
                      if (n) throw e;
                    }
                  },
                  abort: function () {
                    n && n();
                  },
                };
            }),
            de.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            de.ajaxSetup({
              accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return de.globalEval(e), e;
                },
              },
            }),
            de.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
            }),
            de.ajaxTransport("script", function (e) {
              if (e.crossDomain) {
                var t, n;
                return {
                  send: function (r, o) {
                    (t = de("<script>")
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(), (n = null), e && o("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      te.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
              }
            });
          var _t = [],
            Ut = /(=)\?(?=&|$)|\?\?/;
          de.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = _t.pop() || de.expando + "_" + jt++;
              return (this[e] = !0), e;
            },
          }),
            de.ajaxPrefilter("json jsonp", function (t, n, r) {
              var o,
                i,
                s,
                a = t.jsonp !== !1 && (Ut.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(t.data) && "data");
              if (a || "jsonp" === t.dataTypes[0])
                return (
                  (o = t.jsonpCallback = de.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                    a ? (t[a] = t[a].replace(Ut, "$1" + o)) : t.jsonp !== !1 && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
                    (t.converters["script json"] = function () {
                      return s || de.error(o + " was not called"), s[0];
                    }),
                    (t.dataTypes[0] = "json"),
                    (i = e[o]),
                    (e[o] = function () {
                      s = arguments;
                    }),
                    r.always(function () {
                      void 0 === i ? de(e).removeProp(o) : (e[o] = i), t[o] && ((t.jsonpCallback = n.jsonpCallback), _t.push(o)), s && de.isFunction(i) && i(s[0]), (s = i = void 0);
                    }),
                    "script"
                );
            }),
            (pe.createHTMLDocument = (function () {
              var e = te.implementation.createHTMLDocument("").body;
              return (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length;
            })()),
            (de.parseHTML = function (e, t, n) {
              if ("string" != typeof e) return [];
              "boolean" == typeof t && ((n = t), (t = !1));
              var r, o, i;
              return (
                t || (pe.createHTMLDocument ? ((t = te.implementation.createHTMLDocument("")), (r = t.createElement("base")), (r.href = te.location.href), t.head.appendChild(r)) : (t = te)),
                  (o = Ce.exec(e)),
                  (i = !n && []),
                  o ? [t.createElement(o[1])] : ((o = x([e], t, i)), i && i.length && de(i).remove(), de.merge([], o.childNodes))
              );
            }),
            (de.fn.load = function (e, t, n) {
              var r,
                o,
                i,
                s = this,
                a = e.indexOf(" ");
              return (
                a > -1 && ((r = z(e.slice(a))), (e = e.slice(0, a))),
                  de.isFunction(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (o = "POST"),
                s.length > 0 &&
                de
                  .ajax({ url: e, type: o || "GET", dataType: "html", data: t })
                  .done(function (e) {
                    (i = arguments), s.html(r ? de("<div>").append(de.parseHTML(e)).find(r) : e);
                  })
                  .always(
                    n &&
                    function (e, t) {
                      s.each(function () {
                        n.apply(this, i || [e.responseText, t, e]);
                      });
                    }
                  ),
                  this
              );
            }),
            de.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
              de.fn[t] = function (e) {
                return this.on(t, e);
              };
            }),
            (de.expr.pseudos.animated = function (e) {
              return de.grep(de.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (de.offset = {
              setOffset: function (e, t, n) {
                var r,
                  o,
                  i,
                  s,
                  a,
                  u,
                  c,
                  l = de.css(e, "position"),
                  f = de(e),
                  p = {};
                "static" === l && (e.style.position = "relative"),
                  (a = f.offset()),
                  (i = de.css(e, "top")),
                  (u = de.css(e, "left")),
                  (c = ("absolute" === l || "fixed" === l) && (i + u).indexOf("auto") > -1),
                  c ? ((r = f.position()), (s = r.top), (o = r.left)) : ((s = parseFloat(i) || 0), (o = parseFloat(u) || 0)),
                de.isFunction(t) && (t = t.call(e, n, de.extend({}, a))),
                null != t.top && (p.top = t.top - a.top + s),
                null != t.left && (p.left = t.left - a.left + o),
                  "using" in t ? t.using.call(e, p) : f.css(p);
              },
            }),
            de.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                    de.offset.setOffset(this, e, t);
                  });
                var t,
                  n,
                  r,
                  o,
                  i = this[0];
                if (i)
                  return i.getClientRects().length
                    ? ((r = i.getBoundingClientRect()), r.width || r.height ? ((o = i.ownerDocument), (n = Z(o)), (t = o.documentElement), { top: r.top + n.pageYOffset - t.clientTop, left: r.left + n.pageXOffset - t.clientLeft }) : r)
                    : { top: 0, left: 0 };
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n = this[0],
                    r = { top: 0, left: 0 };
                  return (
                    "fixed" === de.css(n, "position")
                      ? (t = n.getBoundingClientRect())
                      : ((e = this.offsetParent()), (t = this.offset()), de.nodeName(e[0], "html") || (r = e.offset()), (r = { top: r.top + de.css(e[0], "borderTopWidth", !0), left: r.left + de.css(e[0], "borderLeftWidth", !0) })),
                    { top: t.top - r.top - de.css(n, "marginTop", !0), left: t.left - r.left - de.css(n, "marginLeft", !0) }
                  );
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (var e = this.offsetParent; e && "static" === de.css(e, "position"); ) e = e.offsetParent;
                  return e || Qe;
                });
              },
            }),
            de.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
              var n = "pageYOffset" === t;
              de.fn[e] = function (r) {
                return Le(
                  this,
                  function (e, r, o) {
                    var i = Z(e);
                    return void 0 === o ? (i ? i[t] : e[r]) : void (i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : (e[r] = o));
                  },
                  e,
                  r,
                  arguments.length
                );
              };
            }),
            de.each(["top", "left"], function (e, t) {
              de.cssHooks[t] = O(pe.pixelPosition, function (e, n) {
                if (n) return (n = D(e, t)), st.test(n) ? de(e).position()[t] + "px" : n;
              });
            }),
            de.each({ Height: "height", Width: "width" }, function (e, t) {
              de.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
                de.fn[r] = function (o, i) {
                  var s = arguments.length && (n || "boolean" != typeof o),
                    a = n || (o === !0 || i === !0 ? "margin" : "border");
                  return Le(
                    this,
                    function (t, n, o) {
                      var i;
                      return de.isWindow(t)
                        ? 0 === r.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                        : 9 === t.nodeType
                        ? ((i = t.documentElement), Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e]))
                        : void 0 === o
                        ? de.css(t, n, a)
                        : de.style(t, n, o, a);
                    },
                    t,
                    s ? o : void 0,
                    s
                  );
                };
              });
            }),
            de.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
              },
            }),
            (de.parseJSON = JSON.parse),
          "function" == typeof define &&
          define.amd &&
          define("jquery", [], function () {
            return de;
          });
          var zt = e.jQuery,
            Xt = e.$;
          return (
            (de.noConflict = function (t) {
              return e.$ === de && (e.$ = Xt), t && e.jQuery === de && (e.jQuery = zt), de;
            }),
            t || (e.jQuery = e.$ = de),
              de
          );
        });
      },
      {},
    ],
    2: [
      function (e, t, n) {
        (function (e) {
          function t(e, t) {
            for (var n = 0, r = e.length - 1; r >= 0; r--) {
              var o = e[r];
              "." === o ? e.splice(r, 1) : ".." === o ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), n--);
            }
            if (t) for (; n--; n) e.unshift("..");
            return e;
          }
          function r(e, t) {
            if (e.filter) return e.filter(t);
            for (var n = [], r = 0; r < e.length; r++) t(e[r], r, e) && n.push(e[r]);
            return n;
          }
          var o = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
            i = function (e) {
              return o.exec(e).slice(1);
            };
          (n.resolve = function () {
            for (var n = "", o = !1, i = arguments.length - 1; i >= -1 && !o; i--) {
              var s = i >= 0 ? arguments[i] : e.cwd();
              if ("string" != typeof s) throw new TypeError("Arguments to path.resolve must be strings");
              s && ((n = s + "/" + n), (o = "/" === s.charAt(0)));
            }
            return (
              (n = t(
                r(n.split("/"), function (e) {
                  return !!e;
                }),
                !o
              ).join("/")),
              (o ? "/" : "") + n || "."
            );
          }),
            (n.normalize = function (e) {
              var o = n.isAbsolute(e),
                i = "/" === s(e, -1);
              return (
                (e = t(
                  r(e.split("/"), function (e) {
                    return !!e;
                  }),
                  !o
                ).join("/")),
                e || o || (e = "."),
                e && i && (e += "/"),
                (o ? "/" : "") + e
              );
            }),
            (n.isAbsolute = function (e) {
              return "/" === e.charAt(0);
            }),
            (n.join = function () {
              var e = Array.prototype.slice.call(arguments, 0);
              return n.normalize(
                r(e, function (e, t) {
                  if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
                  return e;
                }).join("/")
              );
            }),
            (n.relative = function (e, t) {
              function r(e) {
                for (var t = 0; t < e.length && "" === e[t]; t++);
                for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);
                return t > n ? [] : e.slice(t, n - t + 1);
              }
              (e = n.resolve(e).substr(1)), (t = n.resolve(t).substr(1));
              for (var o = r(e.split("/")), i = r(t.split("/")), s = Math.min(o.length, i.length), a = s, u = 0; u < s; u++)
                if (o[u] !== i[u]) {
                  a = u;
                  break;
                }
              for (var c = [], u = a; u < o.length; u++) c.push("..");
              return (c = c.concat(i.slice(a))), c.join("/");
            }),
            (n.sep = "/"),
            (n.delimiter = ":"),
            (n.dirname = function (e) {
              var t = i(e),
                n = t[0],
                r = t[1];
              return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : ".";
            }),
            (n.basename = function (e, t) {
              var n = i(e)[2];
              return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n;
            }),
            (n.extname = function (e) {
              return i(e)[3];
            });
          var s =
            "b" === "ab".substr(-1)
              ? function (e, t, n) {
              return e.substr(t, n);
            }
              : function (e, t, n) {
              return t < 0 && (t = e.length + t), e.substr(t, n);
            };
        }.call(this, e("_process")));
      },
      { _process: 3 },
    ],
    3: [
      function (e, t, n) {
        function r() {
          throw new Error("setTimeout has not been defined");
        }
        function o() {
          throw new Error("clearTimeout has not been defined");
        }
        function i(e) {
          if (f === setTimeout) return setTimeout(e, 0);
          if ((f === r || !f) && setTimeout) return (f = setTimeout), setTimeout(e, 0);
          try {
            return f(e, 0);
          } catch (t) {
            try {
              return f.call(null, e, 0);
            } catch (t) {
              return f.call(this, e, 0);
            }
          }
        }
        function s(e) {
          if (p === clearTimeout) return clearTimeout(e);
          if ((p === o || !p) && clearTimeout) return (p = clearTimeout), clearTimeout(e);
          try {
            return p(e);
          } catch (t) {
            try {
              return p.call(null, e);
            } catch (t) {
              return p.call(this, e);
            }
          }
        }
        function a() {
          m && d && ((m = !1), d.length ? (g = d.concat(g)) : (v = -1), g.length && u());
        }
        function u() {
          if (!m) {
            var e = i(a);
            m = !0;
            for (var t = g.length; t; ) {
              for (d = g, g = []; ++v < t; ) d && d[v].run();
              (v = -1), (t = g.length);
            }
            (d = null), (m = !1), s(e);
          }
        }
        function c(e, t) {
          (this.fun = e), (this.array = t);
        }
        function l() {}
        var f,
          p,
          h = (t.exports = {});
        !(function () {
          try {
            f = "function" == typeof setTimeout ? setTimeout : r;
          } catch (e) {
            f = r;
          }
          try {
            p = "function" == typeof clearTimeout ? clearTimeout : o;
          } catch (e) {
            p = o;
          }
        })();
        var d,
          g = [],
          m = !1,
          v = -1;
        (h.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          g.push(new c(e, t)), 1 !== g.length || m || i(u);
        }),
          (c.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (h.title = "browser"),
          (h.browser = !0),
          (h.env = {}),
          (h.argv = []),
          (h.version = ""),
          (h.versions = {}),
          (h.on = l),
          (h.addListener = l),
          (h.once = l),
          (h.off = l),
          (h.removeListener = l),
          (h.removeAllListeners = l),
          (h.emit = l),
          (h.prependListener = l),
          (h.prependOnceListener = l),
          (h.listeners = function (e) {
            return [];
          }),
          (h.binding = function (e) {
            throw new Error("process.binding is not supported");
          }),
          (h.cwd = function () {
            return "/";
          }),
          (h.chdir = function (e) {
            throw new Error("process.chdir is not supported");
          }),
          (h.umask = function () {
            return 0;
          });
      },
      {},
    ],
    4: [
      function (e, t, n) {
        (function (e) {
          !(function (r) {
            function o(e) {
              throw new RangeError(L[e]);
            }
            function i(e, t) {
              for (var n = e.length, r = []; n--; ) r[n] = t(e[n]);
              return r;
            }
            function s(e, t) {
              var n = e.split("@"),
                r = "";
              n.length > 1 && ((r = n[0] + "@"), (e = n[1])), (e = e.replace(O, "."));
              var o = e.split("."),
                s = i(o, t).join(".");
              return r + s;
            }
            function a(e) {
              for (var t, n, r = [], o = 0, i = e.length; o < i; )
                (t = e.charCodeAt(o++)), t >= 55296 && t <= 56319 && o < i ? ((n = e.charCodeAt(o++)), 56320 == (64512 & n) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), o--)) : r.push(t);
              return r;
            }
            function u(e) {
              return i(e, function (e) {
                var t = "";
                return e > 65535 && ((e -= 65536), (t += R(((e >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))), (t += R(e));
              }).join("");
            }
            function c(e) {
              return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : T;
            }
            function l(e, t) {
              return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
            }
            function f(e, t, n) {
              var r = 0;
              for (e = n ? F(e / E) : e >> 1, e += F(e / t); e > (H * j) >> 1; r += T) e = F(e / H);
              return F(r + ((H + 1) * e) / (e + k));
            }
            function p(e) {
              var t,
                n,
                r,
                i,
                s,
                a,
                l,
                p,
                h,
                d,
                g = [],
                m = e.length,
                v = 0,
                y = N,
                x = S;
              for (n = e.lastIndexOf(A), n < 0 && (n = 0), r = 0; r < n; ++r) e.charCodeAt(r) >= 128 && o("not-basic"), g.push(e.charCodeAt(r));
              for (i = n > 0 ? n + 1 : 0; i < m; ) {
                for (s = v, a = 1, l = T; i >= m && o("invalid-input"), (p = c(e.charCodeAt(i++))), (p >= T || p > F((w - v) / a)) && o("overflow"), (v += p * a), (h = l <= x ? C : l >= x + j ? j : l - x), !(p < h); l += T)
                  (d = T - h), a > F(w / d) && o("overflow"), (a *= d);
                (t = g.length + 1), (x = f(v - s, t, 0 == s)), F(v / t) > w - y && o("overflow"), (y += F(v / t)), (v %= t), g.splice(v++, 0, y);
              }
              return u(g);
            }
            function h(e) {
              var t,
                n,
                r,
                i,
                s,
                u,
                c,
                p,
                h,
                d,
                g,
                m,
                v,
                y,
                x,
                b = [];
              for (e = a(e), m = e.length, t = N, n = 0, s = S, u = 0; u < m; ++u) (g = e[u]), g < 128 && b.push(R(g));
              for (r = i = b.length, i && b.push(A); r < m; ) {
                for (c = w, u = 0; u < m; ++u) (g = e[u]), g >= t && g < c && (c = g);
                for (v = r + 1, c - t > F((w - n) / v) && o("overflow"), n += (c - t) * v, t = c, u = 0; u < m; ++u)
                  if (((g = e[u]), g < t && ++n > w && o("overflow"), g == t)) {
                    for (p = n, h = T; (d = h <= s ? C : h >= s + j ? j : h - s), !(p < d); h += T) (x = p - d), (y = T - d), b.push(R(l(d + (x % y), 0))), (p = F(x / y));
                    b.push(R(l(p, 0))), (s = f(n, v, r == i)), (n = 0), ++r;
                  }
                ++n, ++t;
              }
              return b.join("");
            }
            function d(e) {
              return s(e, function (e) {
                return q.test(e) ? p(e.slice(4).toLowerCase()) : e;
              });
            }
            function g(e) {
              return s(e, function (e) {
                return D.test(e) ? "xn--" + h(e) : e;
              });
            }
            var m = "object" == typeof n && n && !n.nodeType && n,
              v = "object" == typeof t && t && !t.nodeType && t,
              y = "object" == typeof e && e;
            (y.global !== y && y.window !== y && y.self !== y) || (r = y);
            var x,
              b,
              w = 2147483647,
              T = 36,
              C = 1,
              j = 26,
              k = 38,
              E = 700,
              S = 72,
              N = 128,
              A = "-",
              q = /^xn--/,
              D = /[^\x20-\x7E]/,
              O = /[\x2E\u3002\uFF0E\uFF61]/g,
              L = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" },
              H = T - C,
              F = Math.floor,
              R = String.fromCharCode;
            if (((x = { version: "1.4.1", ucs2: { decode: a, encode: u }, decode: p, encode: h, toASCII: g, toUnicode: d }), "function" == typeof define && "object" == typeof define.amd && define.amd))
              define("punycode", function () {
                return x;
              });
            else if (m && v)
              if (t.exports == m) v.exports = x;
              else for (b in x) x.hasOwnProperty(b) && (m[b] = x[b]);
            else r.punycode = x;
          })(this);
        }.call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}));
      },
      {},
    ],
    5: [
      function (e, t, n) {
        "use strict";
        function r(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        t.exports = function (e, t, n, i) {
          (t = t || "&"), (n = n || "=");
          var s = {};
          if ("string" != typeof e || 0 === e.length) return s;
          var a = /\+/g;
          e = e.split(t);
          var u = 1e3;
          i && "number" == typeof i.maxKeys && (u = i.maxKeys);
          var c = e.length;
          u > 0 && c > u && (c = u);
          for (var l = 0; l < c; ++l) {
            var f,
              p,
              h,
              d,
              g = e[l].replace(a, "%20"),
              m = g.indexOf(n);
            m >= 0 ? ((f = g.substr(0, m)), (p = g.substr(m + 1))) : ((f = g), (p = "")), (h = decodeURIComponent(f)), (d = decodeURIComponent(p)), r(s, h) ? (o(s[h]) ? s[h].push(d) : (s[h] = [s[h], d])) : (s[h] = d);
          }
          return s;
        };
        var o =
          Array.isArray ||
          function (e) {
            return "[object Array]" === Object.prototype.toString.call(e);
          };
      },
      {},
    ],
    6: [
      function (e, t, n) {
        "use strict";
        function r(e, t) {
          if (e.map) return e.map(t);
          for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
          return n;
        }
        var o = function (e) {
          switch (typeof e) {
            case "string":
              return e;
            case "boolean":
              return e ? "true" : "false";
            case "number":
              return isFinite(e) ? e : "";
            default:
              return "";
          }
        };
        t.exports = function (e, t, n, a) {
          return (
            (t = t || "&"),
              (n = n || "="),
            null === e && (e = void 0),
              "object" == typeof e
                ? r(s(e), function (s) {
                var a = encodeURIComponent(o(s)) + n;
                return i(e[s])
                  ? r(e[s], function (e) {
                  return a + encodeURIComponent(o(e));
                }).join(t)
                  : a + encodeURIComponent(o(e[s]));
              }).join(t)
                : a
                ? encodeURIComponent(o(a)) + n + encodeURIComponent(o(e))
                : ""
          );
        };
        var i =
            Array.isArray ||
            function (e) {
              return "[object Array]" === Object.prototype.toString.call(e);
            },
          s =
            Object.keys ||
            function (e) {
              var t = [];
              for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
              return t;
            };
      },
      {},
    ],
    7: [
      function (e, t, n) {
        "use strict";
        (n.decode = n.parse = e("./decode")), (n.encode = n.stringify = e("./encode"));
      },
      { "./decode": 5, "./encode": 6 },
    ],
    8: [
      function (e, t, n) {
        "use strict";
        function r() {
          (this.protocol = null),
            (this.slashes = null),
            (this.auth = null),
            (this.host = null),
            (this.port = null),
            (this.hostname = null),
            (this.hash = null),
            (this.search = null),
            (this.query = null),
            (this.pathname = null),
            (this.path = null),
            (this.href = null);
        }
        function o(e, t, n) {
          if (e && c.isObject(e) && e instanceof r) return e;
          var o = new r();
          return o.parse(e, t, n), o;
        }
        function i(e) {
          return c.isString(e) && (e = o(e)), e instanceof r ? e.format() : r.prototype.format.call(e);
        }
        function s(e, t) {
          return o(e, !1, !0).resolve(t);
        }
        function a(e, t) {
          return e ? o(e, !1, !0).resolveObject(t) : t;
        }
        var u = e("punycode"),
          c = e("./util");
        (n.parse = o), (n.resolve = s), (n.resolveObject = a), (n.format = i), (n.Url = r);
        var l = /^([a-z0-9.+-]+:)/i,
          f = /:[0-9]*$/,
          p = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
          h = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
          d = ["{", "}", "|", "\\", "^", "`"].concat(h),
          g = ["'"].concat(d),
          m = ["%", "/", "?", ";", "#"].concat(g),
          v = ["/", "?", "#"],
          y = 255,
          x = /^[+a-z0-9A-Z_-]{0,63}$/,
          b = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
          w = { javascript: !0, "javascript:": !0 },
          T = { javascript: !0, "javascript:": !0 },
          C = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 },
          j = e("querystring");
        (r.prototype.parse = function (e, t, n) {
          if (!c.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
          var r = e.indexOf("?"),
            o = r !== -1 && r < e.indexOf("#") ? "?" : "#",
            i = e.split(o),
            s = /\\/g;
          (i[0] = i[0].replace(s, "/")), (e = i.join(o));
          var a = e;
          if (((a = a.trim()), !n && 1 === e.split("#").length)) {
            var f = p.exec(a);
            if (f)
              return (
                (this.path = a),
                  (this.href = a),
                  (this.pathname = f[1]),
                  f[2] ? ((this.search = f[2]), t ? (this.query = j.parse(this.search.substr(1))) : (this.query = this.search.substr(1))) : t && ((this.search = ""), (this.query = {})),
                  this
              );
          }
          var h = l.exec(a);
          if (h) {
            h = h[0];
            var d = h.toLowerCase();
            (this.protocol = d), (a = a.substr(h.length));
          }
          if (n || h || a.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var k = "//" === a.substr(0, 2);
            !k || (h && T[h]) || ((a = a.substr(2)), (this.slashes = !0));
          }
          if (!T[h] && (k || (h && !C[h]))) {
            for (var E = -1, S = 0; S < v.length; S++) {
              var N = a.indexOf(v[S]);
              N !== -1 && (E === -1 || N < E) && (E = N);
            }
            var A, q;
            (q = E === -1 ? a.lastIndexOf("@") : a.lastIndexOf("@", E)), q !== -1 && ((A = a.slice(0, q)), (a = a.slice(q + 1)), (this.auth = decodeURIComponent(A))), (E = -1);
            for (var S = 0; S < m.length; S++) {
              var N = a.indexOf(m[S]);
              N !== -1 && (E === -1 || N < E) && (E = N);
            }
            E === -1 && (E = a.length), (this.host = a.slice(0, E)), (a = a.slice(E)), this.parseHost(), (this.hostname = this.hostname || "");
            var D = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!D)
              for (var O = this.hostname.split(/\./), S = 0, L = O.length; S < L; S++) {
                var H = O[S];
                if (H && !H.match(x)) {
                  for (var F = "", R = 0, I = H.length; R < I; R++) F += H.charCodeAt(R) > 127 ? "x" : H[R];
                  if (!F.match(x)) {
                    var P = O.slice(0, S),
                      M = O.slice(S + 1),
                      $ = H.match(b);
                    $ && (P.push($[1]), M.unshift($[2])), M.length && (a = "/" + M.join(".") + a), (this.hostname = P.join("."));
                    break;
                  }
                }
              }
            this.hostname.length > y ? (this.hostname = "") : (this.hostname = this.hostname.toLowerCase()), D || (this.hostname = u.toASCII(this.hostname));
            var W = this.port ? ":" + this.port : "",
              B = this.hostname || "";
            (this.host = B + W), (this.href += this.host), D && ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)), "/" !== a[0] && (a = "/" + a));
          }
          if (!w[d])
            for (var S = 0, L = g.length; S < L; S++) {
              var _ = g[S];
              if (a.indexOf(_) !== -1) {
                var U = encodeURIComponent(_);
                U === _ && (U = escape(_)), (a = a.split(_).join(U));
              }
            }
          var z = a.indexOf("#");
          z !== -1 && ((this.hash = a.substr(z)), (a = a.slice(0, z)));
          var X = a.indexOf("?");
          if (
            (X !== -1 ? ((this.search = a.substr(X)), (this.query = a.substr(X + 1)), t && (this.query = j.parse(this.query)), (a = a.slice(0, X))) : t && ((this.search = ""), (this.query = {})),
            a && (this.pathname = a),
            C[d] && this.hostname && !this.pathname && (this.pathname = "/"),
            this.pathname || this.search)
          ) {
            var W = this.pathname || "",
              V = this.search || "";
            this.path = W + V;
          }
          return (this.href = this.format()), this;
        }),
          (r.prototype.format = function () {
            var e = this.auth || "";
            e && ((e = encodeURIComponent(e)), (e = e.replace(/%3A/i, ":")), (e += "@"));
            var t = this.protocol || "",
              n = this.pathname || "",
              r = this.hash || "",
              o = !1,
              i = "";
            this.host ? (o = e + this.host) : this.hostname && ((o = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]")), this.port && (o += ":" + this.port)),
            this.query && c.isObject(this.query) && Object.keys(this.query).length && (i = j.stringify(this.query));
            var s = this.search || (i && "?" + i) || "";
            return (
              t && ":" !== t.substr(-1) && (t += ":"),
                this.slashes || ((!t || C[t]) && o !== !1) ? ((o = "//" + (o || "")), n && "/" !== n.charAt(0) && (n = "/" + n)) : o || (o = ""),
              r && "#" !== r.charAt(0) && (r = "#" + r),
              s && "?" !== s.charAt(0) && (s = "?" + s),
                (n = n.replace(/[?#]/g, function (e) {
                  return encodeURIComponent(e);
                })),
                (s = s.replace("#", "%23")),
              t + o + n + s + r
            );
          }),
          (r.prototype.resolve = function (e) {
            return this.resolveObject(o(e, !1, !0)).format();
          }),
          (r.prototype.resolveObject = function (e) {
            if (c.isString(e)) {
              var t = new r();
              t.parse(e, !1, !0), (e = t);
            }
            for (var n = new r(), o = Object.keys(this), i = 0; i < o.length; i++) {
              var s = o[i];
              n[s] = this[s];
            }
            if (((n.hash = e.hash), "" === e.href)) return (n.href = n.format()), n;
            if (e.slashes && !e.protocol) {
              for (var a = Object.keys(e), u = 0; u < a.length; u++) {
                var l = a[u];
                "protocol" !== l && (n[l] = e[l]);
              }
              return C[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), (n.href = n.format()), n;
            }
            if (e.protocol && e.protocol !== n.protocol) {
              if (!C[e.protocol]) {
                for (var f = Object.keys(e), p = 0; p < f.length; p++) {
                  var h = f[p];
                  n[h] = e[h];
                }
                return (n.href = n.format()), n;
              }
              if (((n.protocol = e.protocol), e.host || T[e.protocol])) n.pathname = e.pathname;
              else {
                for (var d = (e.pathname || "").split("/"); d.length && !(e.host = d.shift()); );
                e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== d[0] && d.unshift(""), d.length < 2 && d.unshift(""), (n.pathname = d.join("/"));
              }
              if (((n.search = e.search), (n.query = e.query), (n.host = e.host || ""), (n.auth = e.auth), (n.hostname = e.hostname || e.host), (n.port = e.port), n.pathname || n.search)) {
                var g = n.pathname || "",
                  m = n.search || "";
                n.path = g + m;
              }
              return (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n;
            }
            var v = n.pathname && "/" === n.pathname.charAt(0),
              y = e.host || (e.pathname && "/" === e.pathname.charAt(0)),
              x = y || v || (n.host && e.pathname),
              b = x,
              w = (n.pathname && n.pathname.split("/")) || [],
              d = (e.pathname && e.pathname.split("/")) || [],
              j = n.protocol && !C[n.protocol];
            if (
              (j &&
              ((n.hostname = ""),
                (n.port = null),
              n.host && ("" === w[0] ? (w[0] = n.host) : w.unshift(n.host)),
                (n.host = ""),
              e.protocol && ((e.hostname = null), (e.port = null), e.host && ("" === d[0] ? (d[0] = e.host) : d.unshift(e.host)), (e.host = null)),
                (x = x && ("" === d[0] || "" === w[0]))),
                y)
            )
              (n.host = e.host || "" === e.host ? e.host : n.host), (n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname), (n.search = e.search), (n.query = e.query), (w = d);
            else if (d.length) w || (w = []), w.pop(), (w = w.concat(d)), (n.search = e.search), (n.query = e.query);
            else if (!c.isNullOrUndefined(e.search)) {
              if (j) {
                n.hostname = n.host = w.shift();
                var k = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                k && ((n.auth = k.shift()), (n.host = n.hostname = k.shift()));
              }
              return (n.search = e.search), (n.query = e.query), (c.isNull(n.pathname) && c.isNull(n.search)) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), (n.href = n.format()), n;
            }
            if (!w.length) return (n.pathname = null), n.search ? (n.path = "/" + n.search) : (n.path = null), (n.href = n.format()), n;
            for (var E = w.slice(-1)[0], S = ((n.host || e.host || w.length > 1) && ("." === E || ".." === E)) || "" === E, N = 0, A = w.length; A >= 0; A--)
              (E = w[A]), "." === E ? w.splice(A, 1) : ".." === E ? (w.splice(A, 1), N++) : N && (w.splice(A, 1), N--);
            if (!x && !b) for (; N--; N) w.unshift("..");
            !x || "" === w[0] || (w[0] && "/" === w[0].charAt(0)) || w.unshift(""), S && "/" !== w.join("/").substr(-1) && w.push("");
            var q = "" === w[0] || (w[0] && "/" === w[0].charAt(0));
            if (j) {
              n.hostname = n.host = q ? "" : w.length ? w.shift() : "";
              var k = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
              k && ((n.auth = k.shift()), (n.host = n.hostname = k.shift()));
            }
            return (
              (x = x || (n.host && w.length)),
              x && !q && w.unshift(""),
                w.length ? (n.pathname = w.join("/")) : ((n.pathname = null), (n.path = null)),
              (c.isNull(n.pathname) && c.isNull(n.search)) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
                (n.auth = e.auth || n.auth),
                (n.slashes = n.slashes || e.slashes),
                (n.href = n.format()),
                n
            );
          }),
          (r.prototype.parseHost = function () {
            var e = this.host,
              t = f.exec(e);
            t && ((t = t[0]), ":" !== t && (this.port = t.substr(1)), (e = e.substr(0, e.length - t.length))), e && (this.hostname = e);
          });
      },
      { "./util": 9, punycode: 4, querystring: 7 },
    ],
    9: [
      function (e, t, n) {
        "use strict";
        t.exports = {
          isString: function (e) {
            return "string" == typeof e;
          },
          isObject: function (e) {
            return "object" == typeof e && null !== e;
          },
          isNull: function (e) {
            return null === e;
          },
          isNullOrUndefined: function (e) {
            return null == e;
          },
        };
      },
      {},
    ],
    10: [
      function (e, t, n) {
        var r = e("jquery");
        t.exports = r({});
      },
      { jquery: 1 },
    ],
    11: [
      function (e, t, n) {
        var r = e("jquery"),
          o = e("./events"),
          i = e("./storage"),
          s = e("./page"),
          a = !1,
          u = window.gitbook || [],
          c = {
            events: o,
            page: s,
            state: s.getState(),
            storage: i,
            push: function (e) {
              a ? e() : u.push(e);
            },
          },
          l = { gitbook: c, jquery: r };
        (window.gitbook = c),
          (window.$ = r),
          (window.jQuery = r),
          (window.require = function (e, t) {
            (e = e.map(function (e) {
              if (((e = e.toLowerCase()), !l[e])) throw new Error("GitBook module " + e + " doesn't exist");
              return l[e];
            })),
              t.apply(null, e);
          }),
          r(document).ready(function () {
            (a = !0),
              r.each(u, function (e, t) {
                t();
              });
          });
      },
      { "./events": 10, "./page": 12, "./storage": 13, jquery: 1 },
    ],
    12: [
      function (e, t, n) {
        function r(e) {
          console.log("page has changed", e), o(e), l || ((l = !0), c.trigger("start", e.config.pluginsConfig)), c.trigger("page.change");
        }
        function o(e) {
          (f.page = e.page),
            (f.file = e.file),
            (f.gitbook = e.gitbook),
            (f.config = e.config),
            (f.basePath = e.basePath),
            (f.book = e.book),
            (f.$book = s(".book")),
            (f.revision = f.gitbook.time),
            (f.level = f.page.level),
            (f.filepath = f.file.path),
            (f.chapterTitle = f.page.title),
            (f.innerLanguage = f.book.language || ""),
            (f.root = a.resolve(location.protocol + "//" + location.host, u.dirname(u.resolve(location.pathname.replace(/\/$/, "/index.html"), f.basePath))).replace(/\/?$/, "/")),
            (f.bookRoot = f.innerLanguage ? a.resolve(f.root, "..") : f.root);
        }
        function i() {
          return f;
        }
        var s = e("jquery"),
          a = e("url"),
          u = e("path"),
          c = e("./events"),
          l = !1,
          f = {};
        t.exports = { hasChanged: r, setState: o, getState: i };
      },
      { "./events": 10, jquery: 1, path: 2, url: 8 },
    ],
    13: [
      function (e, t, n) {
        var r = "";
        t.exports = {
          setBaseKey: function (e) {
            r = e;
          },
          set: function (e, t) {
            e = r + ":" + e;
            try {
              localStorage[e] = JSON.stringify(t);
            } catch (e) {}
          },
          get: function (e, t) {
            var n;
            e = r + ":" + e;
            try {
              n = localStorage[e];
            } catch (e) {}
            if (void 0 === n) return t;
            try {
              var o = JSON.parse(n);
              return null == o ? t : o;
            } catch (e) {
              return n || t;
            }
          },
          remove: function (e) {
            e = r + ":" + e;
            try {
              localStorage.removeItem(e);
            } catch (e) {}
          },
        };
      },
      {},
    ],
  },
  {},
  [11]
);
