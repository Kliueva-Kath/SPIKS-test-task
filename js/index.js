'use strict';

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return _typeof(key) === 'symbol' ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if (_typeof(res) !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
}
function _typeof(o) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              'function' == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? 'symbol'
              : typeof o;
          }),
    _typeof(o)
  );
}
!(function (t, e) {
  'object' ==
    (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) &&
  'undefined' != typeof module
    ? e(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], e)
    : e(
        ((t =
          'undefined' != typeof globalThis
            ? globalThis
            : t || self).noUiSlider = {})
      );
})(void 0, function (ut) {
  'use strict';

  function n(t) {
    return 'object' == _typeof(t) && 'function' == typeof t.to;
  }
  function ct(t) {
    t.parentElement.removeChild(t);
  }
  function pt(t) {
    return null != t;
  }
  function ft(t) {
    t.preventDefault();
  }
  function i(t) {
    return 'number' == typeof t && !isNaN(t) && isFinite(t);
  }
  function dt(t, e, r) {
    0 < r &&
      (gt(t, e),
      setTimeout(function () {
        vt(t, e);
      }, r));
  }
  function ht(t) {
    return Math.max(Math.min(t, 100), 0);
  }
  function mt(t) {
    return Array.isArray(t) ? t : [t];
  }
  function e(t) {
    t = (t = String(t)).split('.');
    return 1 < t.length ? t[1].length : 0;
  }
  function gt(t, e) {
    t.classList && !/\s/.test(e)
      ? t.classList.add(e)
      : (t.className += ' ' + e);
  }
  function vt(t, e) {
    t.classList && !/\s/.test(e)
      ? t.classList.remove(e)
      : (t.className = t.className.replace(
          new RegExp('(^|\\b)' + e.split(' ').join('|') + '(\\b|$)', 'gi'),
          ' '
        ));
  }
  function bt(t) {
    var e = void 0 !== window.pageXOffset,
      r = 'CSS1Compat' === (t.compatMode || '');
    return {
      x: e ? window.pageXOffset : (r ? t.documentElement : t.body).scrollLeft,
      y: e ? window.pageYOffset : (r ? t.documentElement : t.body).scrollTop,
    };
  }
  function s(t, e) {
    return 100 / (e - t);
  }
  function a(t, e, r) {
    return (100 * e) / (t[r + 1] - t[r]);
  }
  function l(t, e) {
    for (var r = 1; t >= e[r]; ) r += 1;
    return r;
  }
  function r(t, e, r) {
    if (r >= t.slice(-1)[0]) return 100;
    var n = l(r, t),
      i = t[n - 1],
      o = t[n],
      t = e[n - 1],
      n = e[n];
    return (
      t +
      ((r = r),
      a((o = [i, o]), o[0] < 0 ? r + Math.abs(o[0]) : r - o[0], 0) / s(t, n))
    );
  }
  function o(t, e, r, n) {
    if (100 === n) return n;
    var i = l(n, t),
      o = t[i - 1],
      s = t[i];
    return r
      ? (s - o) / 2 < n - o
        ? s
        : o
      : e[i - 1]
      ? t[i - 1] + ((t = n - t[i - 1]), (i = e[i - 1]), Math.round(t / i) * i)
      : n;
  }
  (ut.PipsMode = void 0),
    ((z = ut.PipsMode || (ut.PipsMode = {})).Range = 'range'),
    (z.Steps = 'steps'),
    (z.Positions = 'positions'),
    (z.Count = 'count'),
    (z.Values = 'values'),
    (ut.PipsType = void 0),
    ((z = ut.PipsType || (ut.PipsType = {}))[(z.None = -1)] = 'None'),
    (z[(z.NoValue = 0)] = 'NoValue'),
    (z[(z.LargeValue = 1)] = 'LargeValue'),
    (z[(z.SmallValue = 2)] = 'SmallValue');
  var u =
    ((t.prototype.getDistance = function (t) {
      for (var e = [], r = 0; r < this.xNumSteps.length - 1; r++)
        e[r] = a(this.xVal, t, r);
      return e;
    }),
    (t.prototype.getAbsoluteDistance = function (t, e, r) {
      var n = 0;
      if (t < this.xPct[this.xPct.length - 1])
        for (; t > this.xPct[n + 1]; ) n++;
      else t === this.xPct[this.xPct.length - 1] && (n = this.xPct.length - 2);
      r || t !== this.xPct[n + 1] || n++;
      for (
        var i,
          o = 1,
          s = (e = null === e ? [] : e)[n],
          a = 0,
          l = 0,
          u = 0,
          c = r
            ? (t - this.xPct[n]) / (this.xPct[n + 1] - this.xPct[n])
            : (this.xPct[n + 1] - t) / (this.xPct[n + 1] - this.xPct[n]);
        0 < s;

      )
        (i = this.xPct[n + 1 + u] - this.xPct[n + u]),
          100 < e[n + u] * o + 100 - 100 * c
            ? ((a = i * c), (o = (s - 100 * c) / e[n + u]), (c = 1))
            : ((a = ((e[n + u] * i) / 100) * o), (o = 0)),
          r
            ? ((l -= a), 1 <= this.xPct.length + u && u--)
            : ((l += a), 1 <= this.xPct.length - u && u++),
          (s = e[n + u] * o);
      return t + l;
    }),
    (t.prototype.toStepping = function (t) {
      return (t = r(this.xVal, this.xPct, t));
    }),
    (t.prototype.fromStepping = function (t) {
      return (function (t, e, r) {
        if (100 <= r) return t.slice(-1)[0];
        var n = l(r, e),
          i = t[n - 1],
          o = t[n],
          t = e[n - 1],
          n = e[n];
        return ((r - t) * s(t, n) * ((o = [i, o])[1] - o[0])) / 100 + o[0];
      })(this.xVal, this.xPct, t);
    }),
    (t.prototype.getStep = function (t) {
      return (t = o(this.xPct, this.xSteps, this.snap, t));
    }),
    (t.prototype.getDefaultStep = function (t, e, r) {
      var n = l(t, this.xPct);
      return (
        (100 === t || (e && t === this.xPct[n - 1])) &&
          (n = Math.max(n - 1, 1)),
        (this.xVal[n] - this.xVal[n - 1]) / r
      );
    }),
    (t.prototype.getNearbySteps = function (t) {
      t = l(t, this.xPct);
      return {
        stepBefore: {
          startValue: this.xVal[t - 2],
          step: this.xNumSteps[t - 2],
          highestStep: this.xHighestCompleteStep[t - 2],
        },
        thisStep: {
          startValue: this.xVal[t - 1],
          step: this.xNumSteps[t - 1],
          highestStep: this.xHighestCompleteStep[t - 1],
        },
        stepAfter: {
          startValue: this.xVal[t],
          step: this.xNumSteps[t],
          highestStep: this.xHighestCompleteStep[t],
        },
      };
    }),
    (t.prototype.countStepDecimals = function () {
      var t = this.xNumSteps.map(e);
      return Math.max.apply(null, t);
    }),
    (t.prototype.hasNoSize = function () {
      return this.xVal[0] === this.xVal[this.xVal.length - 1];
    }),
    (t.prototype.convert = function (t) {
      return this.getStep(this.toStepping(t));
    }),
    (t.prototype.handleEntryPoint = function (t, e) {
      t = 'min' === t ? 0 : 'max' === t ? 100 : parseFloat(t);
      if (!i(t) || !i(e[0]))
        throw new Error("noUiSlider: 'range' value isn't numeric.");
      this.xPct.push(t), this.xVal.push(e[0]);
      e = Number(e[1]);
      t ? this.xSteps.push(!isNaN(e) && e) : isNaN(e) || (this.xSteps[0] = e),
        this.xHighestCompleteStep.push(0);
    }),
    (t.prototype.handleStepPoint = function (t, e) {
      e &&
        (this.xVal[t] !== this.xVal[t + 1]
          ? ((this.xSteps[t] =
              a([this.xVal[t], this.xVal[t + 1]], e, 0) /
              s(this.xPct[t], this.xPct[t + 1])),
            (e = (this.xVal[t + 1] - this.xVal[t]) / this.xNumSteps[t]),
            (e = Math.ceil(Number(e.toFixed(3)) - 1)),
            (e = this.xVal[t] + this.xNumSteps[t] * e),
            (this.xHighestCompleteStep[t] = e))
          : (this.xSteps[t] = this.xHighestCompleteStep[t] = this.xVal[t]));
    }),
    t);
  function t(e, t, r) {
    var n;
    (this.xPct = []),
      (this.xVal = []),
      (this.xSteps = []),
      (this.xNumSteps = []),
      (this.xHighestCompleteStep = []),
      (this.xSteps = [r || !1]),
      (this.xNumSteps = [!1]),
      (this.snap = t);
    var i = [];
    for (
      Object.keys(e).forEach(function (t) {
        i.push([mt(e[t]), t]);
      }),
        i.sort(function (t, e) {
          return t[0][0] - e[0][0];
        }),
        n = 0;
      n < i.length;
      n++
    )
      this.handleEntryPoint(i[n][1], i[n][0]);
    for (
      this.xNumSteps = this.xSteps.slice(0), n = 0;
      n < this.xNumSteps.length;
      n++
    )
      this.handleStepPoint(n, this.xNumSteps[n]);
  }
  var c = {
      to: function to(t) {
        return void 0 === t ? '' : t.toFixed(2);
      },
      from: Number,
    },
    p = {
      target: 'target',
      base: 'base',
      origin: 'origin',
      handle: 'handle',
      handleLower: 'handle-lower',
      handleUpper: 'handle-upper',
      touchArea: 'touch-area',
      horizontal: 'horizontal',
      vertical: 'vertical',
      background: 'background',
      connect: 'connect',
      connects: 'connects',
      ltr: 'ltr',
      rtl: 'rtl',
      textDirectionLtr: 'txt-dir-ltr',
      textDirectionRtl: 'txt-dir-rtl',
      draggable: 'draggable',
      drag: 'state-drag',
      tap: 'state-tap',
      active: 'active',
      tooltip: 'tooltip',
      pips: 'pips',
      pipsHorizontal: 'pips-horizontal',
      pipsVertical: 'pips-vertical',
      marker: 'marker',
      markerHorizontal: 'marker-horizontal',
      markerVertical: 'marker-vertical',
      markerNormal: 'marker-normal',
      markerLarge: 'marker-large',
      markerSub: 'marker-sub',
      value: 'value',
      valueHorizontal: 'value-horizontal',
      valueVertical: 'value-vertical',
      valueNormal: 'value-normal',
      valueLarge: 'value-large',
      valueSub: 'value-sub',
    },
    St = {
      tooltips: '.__tooltips',
      aria: '.__aria',
    };
  function f(t, e) {
    if (!i(e)) throw new Error("noUiSlider: 'step' is not numeric.");
    t.singleStep = e;
  }
  function d(t, e) {
    if (!i(e))
      throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
    t.keyboardPageMultiplier = e;
  }
  function h(t, e) {
    if (!i(e))
      throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
    t.keyboardMultiplier = e;
  }
  function m(t, e) {
    if (!i(e))
      throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
    t.keyboardDefaultStep = e;
  }
  function g(t, e) {
    if ('object' != _typeof(e) || Array.isArray(e))
      throw new Error("noUiSlider: 'range' is not an object.");
    if (void 0 === e.min || void 0 === e.max)
      throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
    t.spectrum = new u(e, t.snap || !1, t.singleStep);
  }
  function v(t, e) {
    if (((e = mt(e)), !Array.isArray(e) || !e.length))
      throw new Error("noUiSlider: 'start' option is incorrect.");
    (t.handles = e.length), (t.start = e);
  }
  function b(t, e) {
    if ('boolean' != typeof e)
      throw new Error("noUiSlider: 'snap' option must be a boolean.");
    t.snap = e;
  }
  function S(t, e) {
    if ('boolean' != typeof e)
      throw new Error("noUiSlider: 'animate' option must be a boolean.");
    t.animate = e;
  }
  function x(t, e) {
    if ('number' != typeof e)
      throw new Error(
        "noUiSlider: 'animationDuration' option must be a number."
      );
    t.animationDuration = e;
  }
  function xt(t, e) {
    var r,
      n = [!1];
    if (
      ('lower' === e ? (e = [!0, !1]) : 'upper' === e && (e = [!1, !0]),
      !0 === e || !1 === e)
    ) {
      for (r = 1; r < t.handles; r++) n.push(e);
      n.push(!1);
    } else {
      if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1)
        throw new Error(
          "noUiSlider: 'connect' option doesn't match handle count."
        );
      n = e;
    }
    t.connect = n;
  }
  function y(t, e) {
    switch (e) {
      case 'horizontal':
        t.ort = 0;
        break;
      case 'vertical':
        t.ort = 1;
        break;
      default:
        throw new Error("noUiSlider: 'orientation' option is invalid.");
    }
  }
  function w(t, e) {
    if (!i(e)) throw new Error("noUiSlider: 'margin' option must be numeric.");
    0 !== e && (t.margin = t.spectrum.getDistance(e));
  }
  function E(t, e) {
    if (!i(e)) throw new Error("noUiSlider: 'limit' option must be numeric.");
    if (((t.limit = t.spectrum.getDistance(e)), !t.limit || t.handles < 2))
      throw new Error(
        "noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles."
      );
  }
  function P(t, e) {
    var r;
    if (!i(e) && !Array.isArray(e))
      throw new Error(
        "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
      );
    if (Array.isArray(e) && 2 !== e.length && !i(e[0]) && !i(e[1]))
      throw new Error(
        "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
      );
    if (0 !== e) {
      for (
        Array.isArray(e) || (e = [e, e]),
          t.padding = [
            t.spectrum.getDistance(e[0]),
            t.spectrum.getDistance(e[1]),
          ],
          r = 0;
        r < t.spectrum.xNumSteps.length - 1;
        r++
      )
        if (t.padding[0][r] < 0 || t.padding[1][r] < 0)
          throw new Error(
            "noUiSlider: 'padding' option must be a positive number(s)."
          );
      var n = e[0] + e[1],
        e = t.spectrum.xVal[0];
      if (1 < n / (t.spectrum.xVal[t.spectrum.xVal.length - 1] - e))
        throw new Error(
          "noUiSlider: 'padding' option must not exceed 100% of the range."
        );
    }
  }
  function C(t, e) {
    switch (e) {
      case 'ltr':
        t.dir = 0;
        break;
      case 'rtl':
        t.dir = 1;
        break;
      default:
        throw new Error("noUiSlider: 'direction' option was not recognized.");
    }
  }
  function N(t, e) {
    if ('string' != typeof e)
      throw new Error(
        "noUiSlider: 'behaviour' must be a string containing options."
      );
    var r = 0 <= e.indexOf('tap'),
      n = 0 <= e.indexOf('drag'),
      i = 0 <= e.indexOf('fixed'),
      o = 0 <= e.indexOf('snap'),
      s = 0 <= e.indexOf('hover'),
      a = 0 <= e.indexOf('unconstrained'),
      l = 0 <= e.indexOf('invert-connects'),
      u = 0 <= e.indexOf('drag-all'),
      e = 0 <= e.indexOf('smooth-steps');
    if (i) {
      if (2 !== t.handles)
        throw new Error(
          "noUiSlider: 'fixed' behaviour must be used with 2 handles"
        );
      w(t, t.start[1] - t.start[0]);
    }
    if (l && 2 !== t.handles)
      throw new Error(
        "noUiSlider: 'invert-connects' behaviour must be used with 2 handles"
      );
    if (a && (t.margin || t.limit))
      throw new Error(
        "noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit"
      );
    t.events = {
      tap: r || o,
      drag: n,
      dragAll: u,
      smoothSteps: e,
      fixed: i,
      snap: o,
      hover: s,
      unconstrained: a,
      invertConnects: l,
    };
  }
  function V(t, e) {
    if (!1 !== e)
      if (!0 === e || n(e)) {
        t.tooltips = [];
        for (var r = 0; r < t.handles; r++) t.tooltips.push(e);
      } else {
        if ((e = mt(e)).length !== t.handles)
          throw new Error('noUiSlider: must pass a formatter for all handles.');
        e.forEach(function (t) {
          if ('boolean' != typeof t && !n(t))
            throw new Error(
              "noUiSlider: 'tooltips' must be passed a formatter or 'false'."
            );
        }),
          (t.tooltips = e);
      }
  }
  function A(t, e) {
    if (e.length !== t.handles)
      throw new Error('noUiSlider: must pass a attributes for all handles.');
    t.handleAttributes = e;
  }
  function k(t, e) {
    if (!n(e))
      throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
    t.ariaFormat = e;
  }
  function M(t, e) {
    if (!n((r = e)) || 'function' != typeof r.from)
      throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
    var r;
    t.format = e;
  }
  function U(t, e) {
    if ('boolean' != typeof e)
      throw new Error(
        "noUiSlider: 'keyboardSupport' option must be a boolean."
      );
    t.keyboardSupport = e;
  }
  function D(t, e) {
    t.documentElement = e;
  }
  function O(t, e) {
    if ('string' != typeof e && !1 !== e)
      throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
    t.cssPrefix = e;
  }
  function L(e, r) {
    if ('object' != _typeof(r))
      throw new Error("noUiSlider: 'cssClasses' must be an object.");
    'string' == typeof e.cssPrefix
      ? ((e.cssClasses = {}),
        Object.keys(r).forEach(function (t) {
          e.cssClasses[t] = e.cssPrefix + r[t];
        }))
      : (e.cssClasses = r);
  }
  function yt(e) {
    var r = {
        margin: null,
        limit: null,
        padding: null,
        animate: !0,
        animationDuration: 300,
        ariaFormat: c,
        format: c,
      },
      n = {
        step: {
          r: !1,
          t: f,
        },
        keyboardPageMultiplier: {
          r: !1,
          t: d,
        },
        keyboardMultiplier: {
          r: !1,
          t: h,
        },
        keyboardDefaultStep: {
          r: !1,
          t: m,
        },
        start: {
          r: !0,
          t: v,
        },
        connect: {
          r: !0,
          t: xt,
        },
        direction: {
          r: !0,
          t: C,
        },
        snap: {
          r: !1,
          t: b,
        },
        animate: {
          r: !1,
          t: S,
        },
        animationDuration: {
          r: !1,
          t: x,
        },
        range: {
          r: !0,
          t: g,
        },
        orientation: {
          r: !1,
          t: y,
        },
        margin: {
          r: !1,
          t: w,
        },
        limit: {
          r: !1,
          t: E,
        },
        padding: {
          r: !1,
          t: P,
        },
        behaviour: {
          r: !0,
          t: N,
        },
        ariaFormat: {
          r: !1,
          t: k,
        },
        format: {
          r: !1,
          t: M,
        },
        tooltips: {
          r: !1,
          t: V,
        },
        keyboardSupport: {
          r: !0,
          t: U,
        },
        documentElement: {
          r: !1,
          t: D,
        },
        cssPrefix: {
          r: !0,
          t: O,
        },
        cssClasses: {
          r: !0,
          t: L,
        },
        handleAttributes: {
          r: !1,
          t: A,
        },
      },
      i = {
        connect: !1,
        direction: 'ltr',
        behaviour: 'tap',
        orientation: 'horizontal',
        keyboardSupport: !0,
        cssPrefix: 'noUi-',
        cssClasses: p,
        keyboardPageMultiplier: 5,
        keyboardMultiplier: 1,
        keyboardDefaultStep: 10,
      };
    e.format && !e.ariaFormat && (e.ariaFormat = e.format),
      Object.keys(n).forEach(function (t) {
        if (pt(e[t]) || void 0 !== i[t]) n[t].t(r, (pt(e[t]) ? e : i)[t]);
        else if (n[t].r)
          throw new Error("noUiSlider: '" + t + "' is required.");
      }),
      (r.pips = e.pips);
    var t = document.createElement('div'),
      o = void 0 !== t.style.msTransform,
      t = void 0 !== t.style.transform;
    r.transformRule = t ? 'transform' : o ? 'msTransform' : 'webkitTransform';
    return (
      (r.style = [
        ['left', 'top'],
        ['right', 'bottom'],
      ][r.dir][r.ort]),
      r
    );
  }
  function T(t, f, o) {
    var i,
      n,
      l,
      u,
      s,
      a,
      c = window.navigator.pointerEnabled
        ? {
            start: 'pointerdown',
            move: 'pointermove',
            end: 'pointerup',
          }
        : window.navigator.msPointerEnabled
        ? {
            start: 'MSPointerDown',
            move: 'MSPointerMove',
            end: 'MSPointerUp',
          }
        : {
            start: 'mousedown touchstart',
            move: 'mousemove touchmove',
            end: 'mouseup touchend',
          },
      p =
        window.CSS &&
        CSS.supports &&
        CSS.supports('touch-action', 'none') &&
        (function () {
          var t = !1;
          try {
            var e = Object.defineProperty({}, 'passive', {
              get: function get() {
                t = !0;
              },
            });
            window.addEventListener('test', null, e);
          } catch (t) {}
          return t;
        })(),
      d = t,
      S = f.spectrum,
      h = [],
      m = [],
      g = [],
      v = 0,
      b = {},
      x = !1,
      y = t.ownerDocument,
      w = f.documentElement || y.documentElement,
      E = y.body,
      r = 'rtl' === y.dir || 1 === f.ort ? 0 : 100;
    function P(t, e) {
      var r = y.createElement('div');
      return e && gt(r, e), t.appendChild(r), r;
    }
    function C(t, e) {
      var r,
        t = P(t, f.cssClasses.origin),
        n = P(t, f.cssClasses.handle);
      return (
        P(n, f.cssClasses.touchArea),
        n.setAttribute('data-handle', String(e)),
        f.keyboardSupport &&
          (n.setAttribute('tabindex', '0'),
          n.addEventListener('keydown', function (t) {
            return (function (t, e) {
              if (V() || A(e)) return !1;
              var r = ['Left', 'Right'],
                n = ['Down', 'Up'],
                i = ['PageDown', 'PageUp'],
                o = ['Home', 'End'];
              f.dir && !f.ort
                ? r.reverse()
                : f.ort && !f.dir && (n.reverse(), i.reverse());
              var s = t.key.replace('Arrow', ''),
                a = s === i[0],
                l = s === i[1],
                i = s === n[0] || s === r[0] || a,
                n = s === n[1] || s === r[1] || l,
                r = s === o[0],
                o = s === o[1];
              if (!(i || n || r || o)) return !0;
              if ((t.preventDefault(), n || i)) {
                var u = i ? 0 : 1,
                  u = st(e)[u];
                if (null === u) return !1;
                !1 === u &&
                  (u = S.getDefaultStep(m[e], i, f.keyboardDefaultStep)),
                  (u *=
                    l || a ? f.keyboardPageMultiplier : f.keyboardMultiplier),
                  (u = Math.max(u, 1e-7)),
                  (u *= i ? -1 : 1),
                  (u = h[e] + u);
              } else u = o ? f.spectrum.xVal[f.spectrum.xVal.length - 1] : f.spectrum.xVal[0];
              return (
                et(e, S.toStepping(u), !0, !0),
                $('slide', e),
                $('update', e),
                $('change', e),
                $('set', e),
                !1
              );
            })(t, e);
          })),
        void 0 !== f.handleAttributes &&
          ((r = f.handleAttributes[e]),
          Object.keys(r).forEach(function (t) {
            n.setAttribute(t, r[t]);
          })),
        n.setAttribute('role', 'slider'),
        n.setAttribute('aria-orientation', f.ort ? 'vertical' : 'horizontal'),
        0 === e
          ? gt(n, f.cssClasses.handleLower)
          : e === f.handles - 1 && gt(n, f.cssClasses.handleUpper),
        (t.handle = n),
        t
      );
    }
    function N(t, e) {
      return !!e && P(t, f.cssClasses.connect);
    }
    function e(t, e) {
      return (
        !(!f.tooltips || !f.tooltips[e]) &&
        P(t.firstChild, f.cssClasses.tooltip)
      );
    }
    function V() {
      return d.hasAttribute('disabled');
    }
    function A(t) {
      return l[t].hasAttribute('disabled');
    }
    function k() {
      a &&
        (W('update' + St.tooltips),
        a.forEach(function (t) {
          t && ct(t);
        }),
        (a = null));
    }
    function M() {
      k(),
        (a = l.map(e)),
        I('update' + St.tooltips, function (t, e, r) {
          a &&
            f.tooltips &&
            !1 !== a[e] &&
            ((t = t[e]),
            !0 !== f.tooltips[e] && (t = f.tooltips[e].to(r[e])),
            (a[e].innerHTML = t));
        });
    }
    function U(t, e) {
      return t.map(function (t) {
        return S.fromStepping(e ? S.getStep(t) : t);
      });
    }
    function D(d) {
      var h = (function (t) {
          if (t.mode === ut.PipsMode.Range || t.mode === ut.PipsMode.Steps)
            return S.xVal;
          if (t.mode !== ut.PipsMode.Count)
            return t.mode === ut.PipsMode.Positions
              ? U(t.values, t.stepped)
              : t.mode === ut.PipsMode.Values
              ? t.stepped
                ? t.values.map(function (t) {
                    return S.fromStepping(S.getStep(S.toStepping(t)));
                  })
                : t.values
              : [];
          if (t.values < 2)
            throw new Error(
              "noUiSlider: 'values' (>= 2) required for mode 'count'."
            );
          for (var e = t.values - 1, r = 100 / e, n = []; e--; ) n[e] = e * r;
          return n.push(100), U(n, t.stepped);
        })(d),
        m = {},
        t = S.xVal[0],
        e = S.xVal[S.xVal.length - 1],
        g = !1,
        v = !1,
        b = 0;
      return (
        (h = h
          .slice()
          .sort(function (t, e) {
            return t - e;
          })
          .filter(function (t) {
            return !this[t] && (this[t] = !0);
          }, {}))[0] !== t && (h.unshift(t), (g = !0)),
        h[h.length - 1] !== e && (h.push(e), (v = !0)),
        h.forEach(function (t, e) {
          var r,
            n,
            i,
            o,
            s,
            a,
            l,
            u,
            t = t,
            c = h[e + 1],
            p = d.mode === ut.PipsMode.Steps,
            f = (f = p ? S.xNumSteps[e] : f) || c - t;
          for (
            void 0 === c && (c = t), f = Math.max(f, 1e-7), r = t;
            r <= c;
            r = Number((r + f).toFixed(7))
          ) {
            for (
              a = (o = (i = S.toStepping(r)) - b) / (d.density || 1),
                u = o / (l = Math.round(a)),
                n = 1;
              n <= l;
              n += 1
            )
              m[(s = b + n * u).toFixed(5)] = [S.fromStepping(s), 0];
            (a =
              -1 < h.indexOf(r)
                ? ut.PipsType.LargeValue
                : p
                ? ut.PipsType.SmallValue
                : ut.PipsType.NoValue),
              !e && g && r !== c && (a = 0),
              (r === c && v) || (m[i.toFixed(5)] = [r, a]),
              (b = i);
          }
        }),
        m
      );
    }
    function O(i, o, s) {
      var t,
        a = y.createElement('div'),
        n =
          (((t = {})[ut.PipsType.None] = ''),
          (t[ut.PipsType.NoValue] = f.cssClasses.valueNormal),
          (t[ut.PipsType.LargeValue] = f.cssClasses.valueLarge),
          (t[ut.PipsType.SmallValue] = f.cssClasses.valueSub),
          t),
        l =
          (((t = {})[ut.PipsType.None] = ''),
          (t[ut.PipsType.NoValue] = f.cssClasses.markerNormal),
          (t[ut.PipsType.LargeValue] = f.cssClasses.markerLarge),
          (t[ut.PipsType.SmallValue] = f.cssClasses.markerSub),
          t),
        u = [f.cssClasses.valueHorizontal, f.cssClasses.valueVertical],
        c = [f.cssClasses.markerHorizontal, f.cssClasses.markerVertical];
      function p(t, e) {
        var r = e === f.cssClasses.value;
        return e + ' ' + (r ? u : c)[f.ort] + ' ' + (r ? n : l)[t];
      }
      return (
        gt(a, f.cssClasses.pips),
        gt(
          a,
          0 === f.ort ? f.cssClasses.pipsHorizontal : f.cssClasses.pipsVertical
        ),
        Object.keys(i).forEach(function (t) {
          var e, r, n;
          (r = i[(e = t)][0]),
            (n = i[t][1]),
            (n = o ? o(r, n) : n) !== ut.PipsType.None &&
              (((t = P(a, !1)).className = p(n, f.cssClasses.marker)),
              (t.style[f.style] = e + '%'),
              n > ut.PipsType.NoValue &&
                (((t = P(a, !1)).className = p(n, f.cssClasses.value)),
                t.setAttribute('data-value', String(r)),
                (t.style[f.style] = e + '%'),
                (t.innerHTML = String(s.to(r)))));
        }),
        a
      );
    }
    function L() {
      s && (ct(s), (s = null));
    }
    function T(t) {
      L();
      var e = D(t),
        r = t.filter,
        t = t.format || {
          to: function to(t) {
            return String(Math.round(t));
          },
        };
      return (s = d.appendChild(O(e, r, t)));
    }
    function j() {
      var t = i.getBoundingClientRect(),
        e = 'offset' + ['Width', 'Height'][f.ort];
      return 0 === f.ort ? t.width || i[e] : t.height || i[e];
    }
    function z(n, i, o, s) {
      function e(t) {
        var e,
          r = (function (e, t, r) {
            var n = 0 === e.type.indexOf('touch'),
              i = 0 === e.type.indexOf('mouse'),
              o = 0 === e.type.indexOf('pointer'),
              s = 0,
              a = 0;
            0 === e.type.indexOf('MSPointer') && (o = !0);
            if ('mousedown' === e.type && !e.buttons && !e.touches) return !1;
            if (n) {
              var l = function l(t) {
                t = t.target;
                return (
                  t === r ||
                  r.contains(t) ||
                  (e.composed && e.composedPath().shift() === r)
                );
              };
              if ('touchstart' === e.type) {
                n = Array.prototype.filter.call(e.touches, l);
                if (1 < n.length) return !1;
                (s = n[0].pageX), (a = n[0].pageY);
              } else {
                l = Array.prototype.find.call(e.changedTouches, l);
                if (!l) return !1;
                (s = l.pageX), (a = l.pageY);
              }
            }
            (t = t || bt(y)),
              (i || o) && ((s = e.clientX + t.x), (a = e.clientY + t.y));
            return (
              (e.pageOffset = t), (e.points = [s, a]), (e.cursor = i || o), e
            );
          })(t, s.pageOffset, s.target || i);
        return (
          !!r &&
          !(V() && !s.doNotReject) &&
          ((e = d),
          (t = f.cssClasses.tap),
          !(
            (e.classList
              ? e.classList.contains(t)
              : new RegExp('\\b' + t + '\\b').test(e.className)) &&
            !s.doNotReject
          ) &&
            !(n === c.start && void 0 !== r.buttons && 1 < r.buttons) &&
            (!s.hover || !r.buttons) &&
            (p || r.preventDefault(),
            (r.calcPoint = r.points[f.ort]),
            void o(r, s)))
        );
      }
      var r = [];
      return (
        n.split(' ').forEach(function (t) {
          i.addEventListener(
            t,
            e,
            !!p && {
              passive: !0,
            }
          ),
            r.push([t, e]);
        }),
        r
      );
    }
    function H(t) {
      var e,
        r,
        n = ht(
          (n =
            (100 *
              (t -
                ((n = i),
                (e = f.ort),
                (r = n.getBoundingClientRect()),
                (n = (t = n.ownerDocument).documentElement),
                (t = bt(t)),
                /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) &&
                  (t.x = 0),
                e ? r.top + t.y - n.clientTop : r.left + t.x - n.clientLeft))) /
            j())
        );
      return f.dir ? 100 - n : n;
    }
    function F(t, e) {
      'mouseout' === t.type &&
        'HTML' === t.target.nodeName &&
        null === t.relatedTarget &&
        _(t, e);
    }
    function R(t, e) {
      if (
        -1 === navigator.appVersion.indexOf('MSIE 9') &&
        0 === t.buttons &&
        0 !== e.buttonsProperty
      )
        return _(t, e);
      t = (f.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
      K(0 < t, (100 * t) / e.baseSize, e.locations, e.handleNumbers, e.connect);
    }
    function _(t, e) {
      e.handle && (vt(e.handle, f.cssClasses.active), --v),
        e.listeners.forEach(function (t) {
          w.removeEventListener(t[0], t[1]);
        }),
        0 === v &&
          (vt(d, f.cssClasses.drag),
          tt(),
          t.cursor &&
            ((E.style.cursor = ''), E.removeEventListener('selectstart', ft))),
        f.events.smoothSteps &&
          (e.handleNumbers.forEach(function (t) {
            et(t, m[t], !0, !0, !1, !1);
          }),
          e.handleNumbers.forEach(function (t) {
            $('update', t);
          })),
        e.handleNumbers.forEach(function (t) {
          $('change', t), $('set', t), $('end', t);
        });
    }
    function B(t, e) {
      var r, n, i, o;
      e.handleNumbers.some(A) ||
        (1 === e.handleNumbers.length &&
          ((o = l[e.handleNumbers[0]].children[0]),
          (v += 1),
          gt(o, f.cssClasses.active)),
        t.stopPropagation(),
        (n = z(c.move, w, R, {
          target: t.target,
          handle: o,
          connect: e.connect,
          listeners: (r = []),
          startCalcPoint: t.calcPoint,
          baseSize: j(),
          pageOffset: t.pageOffset,
          handleNumbers: e.handleNumbers,
          buttonsProperty: t.buttons,
          locations: m.slice(),
        })),
        (i = z(c.end, w, _, {
          target: t.target,
          handle: o,
          listeners: r,
          doNotReject: !0,
          handleNumbers: e.handleNumbers,
        })),
        (o = z('mouseout', w, F, {
          target: t.target,
          handle: o,
          listeners: r,
          doNotReject: !0,
          handleNumbers: e.handleNumbers,
        })),
        r.push.apply(r, n.concat(i, o)),
        t.cursor &&
          ((E.style.cursor = getComputedStyle(t.target).cursor),
          1 < l.length && gt(d, f.cssClasses.drag),
          E.addEventListener('selectstart', ft, !1)),
        e.handleNumbers.forEach(function (t) {
          $('start', t);
        }));
    }
    function q(t) {
      t.stopPropagation();
      var i,
        o,
        s,
        e = H(t.calcPoint),
        r =
          ((i = e),
          (s = !(o = 100)),
          l.forEach(function (t, e) {
            var r, n;
            A(e) ||
              ((r = m[e]),
              ((n = Math.abs(r - i)) < o ||
                (n <= o && r < i) ||
                (100 === n && 100 === o)) &&
                ((s = e), (o = n)));
          }),
          s);
      !1 !== r &&
        (f.events.snap || dt(d, f.cssClasses.tap, f.animationDuration),
        et(r, e, !0, !0),
        tt(),
        $('slide', r, !0),
        $('update', r, !0),
        f.events.snap
          ? B(t, {
              handleNumbers: [r],
            })
          : ($('change', r, !0), $('set', r, !0)));
    }
    function X(t) {
      var t = H(t.calcPoint),
        t = S.getStep(t),
        e = S.fromStepping(t);
      Object.keys(b).forEach(function (t) {
        'hover' === t.split('.')[0] &&
          b[t].forEach(function (t) {
            t.call(lt, e);
          });
      });
    }
    function Y(a) {
      a.fixed ||
        l.forEach(function (t, e) {
          z(c.start, t.children[0], B, {
            handleNumbers: [e],
          });
        }),
        a.tap && z(c.start, i, q, {}),
        a.hover &&
          z(c.move, i, X, {
            hover: !0,
          }),
        a.drag &&
          u.forEach(function (e, t) {
            var r, n, i, o, s;
            !1 !== e &&
              0 !== t &&
              t !== u.length - 1 &&
              ((r = l[t - 1]),
              (n = l[t]),
              (i = [e]),
              (o = [r, n]),
              (s = [t - 1, t]),
              gt(e, f.cssClasses.draggable),
              a.fixed && (i.push(r.children[0]), i.push(n.children[0])),
              a.dragAll && ((o = l), (s = g)),
              i.forEach(function (t) {
                z(c.start, t, B, {
                  handles: o,
                  handleNumbers: s,
                  connect: e,
                });
              }));
          });
    }
    function I(t, e) {
      (b[t] = b[t] || []),
        b[t].push(e),
        'update' === t.split('.')[0] &&
          l.forEach(function (t, e) {
            $('update', e);
          });
    }
    function W(t) {
      var n = t && t.split('.')[0],
        i = n ? t.substring(n.length) : t;
      Object.keys(b).forEach(function (t) {
        var e = t.split('.')[0],
          r = t.substring(e.length);
        (n && n !== e) ||
          (i && i !== r) ||
          ((((e = r) !== St.aria && e !== St.tooltips) || i === r) &&
            delete b[t]);
      });
    }
    function $(r, n, i) {
      Object.keys(b).forEach(function (t) {
        var e = t.split('.')[0];
        r === e &&
          b[t].forEach(function (t) {
            t.call(
              lt,
              h.map(f.format.to),
              n,
              h.slice(),
              i || !1,
              m.slice(),
              lt
            );
          });
      });
    }
    function G(t, e, r, n, i, o, s) {
      var a;
      return (
        1 < l.length &&
          !f.events.unconstrained &&
          (n &&
            0 < e &&
            ((a = S.getAbsoluteDistance(t[e - 1], f.margin, !1)),
            (r = Math.max(r, a))),
          i &&
            e < l.length - 1 &&
            ((a = S.getAbsoluteDistance(t[e + 1], f.margin, !0)),
            (r = Math.min(r, a)))),
        1 < l.length &&
          f.limit &&
          (n &&
            0 < e &&
            ((a = S.getAbsoluteDistance(t[e - 1], f.limit, !1)),
            (r = Math.min(r, a))),
          i &&
            e < l.length - 1 &&
            ((a = S.getAbsoluteDistance(t[e + 1], f.limit, !0)),
            (r = Math.max(r, a)))),
        f.padding &&
          (0 === e &&
            ((a = S.getAbsoluteDistance(0, f.padding[0], !1)),
            (r = Math.max(r, a))),
          e === l.length - 1 &&
            ((a = S.getAbsoluteDistance(100, f.padding[1], !0)),
            (r = Math.min(r, a)))),
        !((r = ht((r = !s ? S.getStep(r) : r))) === t[e] && !o) && r
      );
    }
    function J(t, e) {
      var r = f.ort;
      return (r ? e : t) + ', ' + (r ? t : e);
    }
    function K(t, r, n, e, i) {
      var o = n.slice(),
        s = e[0],
        a = f.events.smoothSteps,
        l = [!t, t],
        u = [t, !t];
      (e = e.slice()),
        t && e.reverse(),
        1 < e.length
          ? e.forEach(function (t, e) {
              e = G(o, t, o[t] + r, l[e], u[e], !1, a);
              !1 === e ? (r = 0) : ((r = e - o[t]), (o[t] = e));
            })
          : (l = u = [!0]);
      var c = !1;
      e.forEach(function (t, e) {
        c = et(t, n[t] + r, l[e], u[e], !1, a) || c;
      }),
        c &&
          (e.forEach(function (t) {
            $('update', t), $('slide', t);
          }),
          null != i && $('drag', s));
    }
    function Q(t, e) {
      return f.dir ? 100 - t - e : t;
    }
    function Z(t, e) {
      (m[t] = e), (h[t] = S.fromStepping(e));
      e = 'translate(' + J(Q(e, 0) - r + '%', '0') + ')';
      if (
        ((l[t].style[f.transformRule] = e),
        f.events.invertConnects && 1 < m.length)
      ) {
        e = m.every(function (t, e, r) {
          return 0 === e || t >= r[e - 1];
        });
        if (x !== !e)
          return (
            (x = !x),
            xt(
              f,
              f.connect.map(function (t) {
                return !t;
              })
            ),
            void at()
          );
      }
      rt(t), rt(t + 1), x && (rt(t - 1), rt(t + 2));
    }
    function tt() {
      g.forEach(function (t) {
        var e = 50 < m[t] ? -1 : 1,
          e = 3 + (l.length + e * t);
        l[t].style.zIndex = String(e);
      });
    }
    function et(t, e, r, n, i, o) {
      return !1 !== (e = i ? e : G(m, t, e, r, n, !1, o)) && (Z(t, e), !0);
    }
    function rt(t) {
      var e, r, n;
      u[t] &&
        ((e = m.slice()),
        x &&
          e.sort(function (t, e) {
            return t - e;
          }),
        (n = 100),
        (r =
          'translate(' +
          J(
            Q(
              (r = (r = 0) !== t ? e[t - 1] : r),
              (n = (n = t !== u.length - 1 ? e[t] : n) - r)
            ) + '%',
            '0'
          ) +
          ')'),
        (n = 'scale(' + J(n / 100, '1') + ')'),
        (u[t].style[f.transformRule] = r + ' ' + n));
    }
    function nt(t, e) {
      return null === t || !1 === t || void 0 === t
        ? m[e]
        : ('number' == typeof t && (t = String(t)),
          !1 === (t = !1 !== (t = f.format.from(t)) ? S.toStepping(t) : t) ||
          isNaN(t)
            ? m[e]
            : t);
    }
    function it(t, e, r) {
      var n = mt(t),
        t = void 0 === m[0];
      (e = void 0 === e || e),
        f.animate && !t && dt(d, f.cssClasses.tap, f.animationDuration),
        g.forEach(function (t) {
          et(t, nt(n[t], t), !0, !1, r);
        });
      var i,
        o = 1 === g.length ? 0 : 1;
      for (
        t &&
        S.hasNoSize() &&
        ((r = !0),
        (m[0] = 0),
        1 < g.length &&
          ((i = 100 / (g.length - 1)),
          g.forEach(function (t) {
            m[t] = t * i;
          })));
        o < g.length;
        ++o
      )
        g.forEach(function (t) {
          et(t, m[t], !0, !0, r);
        });
      tt(),
        g.forEach(function (t) {
          $('update', t), null !== n[t] && e && $('set', t);
        });
    }
    function ot(t) {
      if ((t = void 0 === t ? !1 : t))
        return 1 === h.length ? h[0] : h.slice(0);
      t = h.map(f.format.to);
      return 1 === t.length ? t[0] : t;
    }
    function st(t) {
      var e = m[t],
        r = S.getNearbySteps(e),
        n = h[t],
        i = r.thisStep.step,
        t = null;
      if (f.snap)
        return [
          n - r.stepBefore.startValue || null,
          r.stepAfter.startValue - n || null,
        ];
      !1 !== i &&
        n + i > r.stepAfter.startValue &&
        (i = r.stepAfter.startValue - n),
        (t =
          n > r.thisStep.startValue
            ? r.thisStep.step
            : !1 !== r.stepBefore.step && n - r.stepBefore.highestStep),
        100 === e ? (i = null) : 0 === e && (t = null);
      e = S.countStepDecimals();
      return (
        null !== i && !1 !== i && (i = Number(i.toFixed(e))),
        [(t = null !== t && !1 !== t ? Number(t.toFixed(e)) : t), i]
      );
    }
    function at() {
      for (; n.firstChild; ) n.removeChild(n.firstChild);
      for (var t = 0; t <= f.handles; t++) (u[t] = N(n, f.connect[t])), rt(t);
      Y({
        drag: f.events.drag,
        fixed: !0,
      });
    }
    gt((t = d), f.cssClasses.target),
      0 === f.dir ? gt(t, f.cssClasses.ltr) : gt(t, f.cssClasses.rtl),
      0 === f.ort
        ? gt(t, f.cssClasses.horizontal)
        : gt(t, f.cssClasses.vertical),
      gt(
        t,
        'rtl' === getComputedStyle(t).direction
          ? f.cssClasses.textDirectionRtl
          : f.cssClasses.textDirectionLtr
      ),
      (i = P(t, f.cssClasses.base)),
      (function (t, e) {
        (n = P(e, f.cssClasses.connects)), (l = []), (u = []).push(N(n, t[0]));
        for (var r = 0; r < f.handles; r++)
          l.push(C(e, r)), (g[r] = r), u.push(N(n, t[r + 1]));
      })(f.connect, i),
      Y(f.events),
      it(f.start),
      f.pips && T(f.pips),
      f.tooltips && M(),
      W('update' + St.aria),
      I('update' + St.aria, function (t, e, o, r, s) {
        g.forEach(function (t) {
          var e = l[t],
            r = G(m, t, 0, !0, !0, !0),
            n = G(m, t, 100, !0, !0, !0),
            i = s[t],
            t = String(f.ariaFormat.to(o[t])),
            r = S.fromStepping(r).toFixed(1),
            n = S.fromStepping(n).toFixed(1),
            i = S.fromStepping(i).toFixed(1);
          e.children[0].setAttribute('aria-valuemin', r),
            e.children[0].setAttribute('aria-valuemax', n),
            e.children[0].setAttribute('aria-valuenow', i),
            e.children[0].setAttribute('aria-valuetext', t);
        });
      });
    var lt = {
      destroy: function destroy() {
        for (
          W(St.aria),
            W(St.tooltips),
            Object.keys(f.cssClasses).forEach(function (t) {
              vt(d, f.cssClasses[t]);
            });
          d.firstChild;

        )
          d.removeChild(d.firstChild);
        delete d.noUiSlider;
      },
      steps: function steps() {
        return g.map(st);
      },
      on: I,
      off: W,
      get: ot,
      set: it,
      setHandle: function setHandle(t, e, r, n) {
        if (!(0 <= (t = Number(t)) && t < g.length))
          throw new Error('noUiSlider: invalid handle number, got: ' + t);
        et(t, nt(e, t), !0, !0, n), $('update', t), r && $('set', t);
      },
      reset: function reset(t) {
        it(f.start, t);
      },
      disable: function disable(t) {
        null != t
          ? (l[t].setAttribute('disabled', ''),
            l[t].handle.removeAttribute('tabindex'))
          : (d.setAttribute('disabled', ''),
            l.forEach(function (t) {
              t.handle.removeAttribute('tabindex');
            }));
      },
      enable: function enable(t) {
        null != t
          ? (l[t].removeAttribute('disabled'),
            l[t].handle.setAttribute('tabindex', '0'))
          : (d.removeAttribute('disabled'),
            l.forEach(function (t) {
              t.removeAttribute('disabled'),
                t.handle.setAttribute('tabindex', '0');
            }));
      },
      __moveHandles: function __moveHandles(t, e, r) {
        K(t, e, m, r);
      },
      options: o,
      updateOptions: function updateOptions(e, t) {
        var r = ot(),
          n = [
            'margin',
            'limit',
            'padding',
            'range',
            'animate',
            'snap',
            'step',
            'format',
            'pips',
            'tooltips',
            'connect',
          ];
        n.forEach(function (t) {
          void 0 !== e[t] && (o[t] = e[t]);
        });
        var i = yt(o);
        n.forEach(function (t) {
          void 0 !== e[t] && (f[t] = i[t]);
        }),
          (S = i.spectrum),
          (f.margin = i.margin),
          (f.limit = i.limit),
          (f.padding = i.padding),
          f.pips ? T(f.pips) : L(),
          (f.tooltips ? M : k)(),
          (m = []),
          it(pt(e.start) ? e.start : r, t),
          e.connect && at();
      },
      target: d,
      removePips: L,
      removeTooltips: k,
      getPositions: function getPositions() {
        return m.slice();
      },
      getTooltips: function getTooltips() {
        return a;
      },
      getOrigins: function getOrigins() {
        return l;
      },
      pips: T,
    };
    return lt;
  }
  function j(t, e) {
    if (!t || !t.nodeName)
      throw new Error(
        'noUiSlider: create requires a single element, got: ' + t
      );
    if (t.noUiSlider)
      throw new Error('noUiSlider: Slider was already initialized.');
    e = T(t, yt(e), e);
    return (t.noUiSlider = e);
  }
  var z = {
    __spectrum: u,
    cssClasses: p,
    create: j,
  };
  (ut.create = j),
    (ut.cssClasses = p),
    (ut['default'] = z),
    Object.defineProperty(ut, '__esModule', {
      value: !0,
    });
});
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (
    (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) ===
    'object'
  ) {
    // Node/CommonJS
    module.exports = factory();
  } else {
    // Browser globals
    window.wNumb = factory();
  }
})(function () {
  'use strict';

  var FormatOptions = [
    'decimals',
    'thousand',
    'mark',
    'prefix',
    'suffix',
    'encoder',
    'decoder',
    'negativeBefore',
    'negative',
    'edit',
    'undo',
  ];

  // General

  // Reverse a string
  function strReverse(a) {
    return a.split('').reverse().join('');
  }

  // Check if a string starts with a specified prefix.
  function strStartsWith(input, match) {
    return input.substring(0, match.length) === match;
  }

  // Check is a string ends in a specified suffix.
  function strEndsWith(input, match) {
    return input.slice(-1 * match.length) === match;
  }

  // Throw an error if formatting options are incompatible.
  function throwEqualError(F, a, b) {
    if ((F[a] || F[b]) && F[a] === F[b]) {
      throw new Error(a);
    }
  }

  // Check if a number is finite and not NaN
  function isValidNumber(input) {
    return typeof input === 'number' && isFinite(input);
  }

  // Provide rounding-accurate toFixed method.
  // Borrowed: http://stackoverflow.com/a/21323330/775265
  function toFixed(value, exp) {
    value = value.toString().split('e');
    value = Math.round(+(value[0] + 'e' + (value[1] ? +value[1] + exp : exp)));
    value = value.toString().split('e');
    return (+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp))).toFixed(
      exp
    );
  }

  // Formatting

  // Accept a number as input, output formatted string.
  function formatTo(
    decimals,
    thousand,
    mark,
    prefix,
    suffix,
    encoder,
    decoder,
    negativeBefore,
    negative,
    edit,
    undo,
    input
  ) {
    var originalInput = input,
      inputIsNegative,
      inputPieces,
      inputBase,
      inputDecimals = '',
      output = '';

    // Apply user encoder to the input.
    // Expected outcome: number.
    if (encoder) {
      input = encoder(input);
    }

    // Stop if no valid number was provided, the number is infinite or NaN.
    if (!isValidNumber(input)) {
      return false;
    }

    // Rounding away decimals might cause a value of -0
    // when using very small ranges. Remove those cases.
    if (decimals !== false && parseFloat(input.toFixed(decimals)) === 0) {
      input = 0;
    }

    // Formatting is done on absolute numbers,
    // decorated by an optional negative symbol.
    if (input < 0) {
      inputIsNegative = true;
      input = Math.abs(input);
    }

    // Reduce the number of decimals to the specified option.
    if (decimals !== false) {
      input = toFixed(input, decimals);
    }

    // Transform the number into a string, so it can be split.
    input = input.toString();

    // Break the number on the decimal separator.
    if (input.indexOf('.') !== -1) {
      inputPieces = input.split('.');
      inputBase = inputPieces[0];
      if (mark) {
        inputDecimals = mark + inputPieces[1];
      }
    } else {
      // If it isn't split, the entire number will do.
      inputBase = input;
    }

    // Group numbers in sets of three.
    if (thousand) {
      inputBase = strReverse(inputBase).match(/.{1,3}/g);
      inputBase = strReverse(inputBase.join(strReverse(thousand)));
    }

    // If the number is negative, prefix with negation symbol.
    if (inputIsNegative && negativeBefore) {
      output += negativeBefore;
    }

    // Prefix the number
    if (prefix) {
      output += prefix;
    }

    // Normal negative option comes after the prefix. Defaults to '-'.
    if (inputIsNegative && negative) {
      output += negative;
    }

    // Append the actual number.
    output += inputBase;
    output += inputDecimals;

    // Apply the suffix.
    if (suffix) {
      output += suffix;
    }

    // Run the output through a user-specified post-formatter.
    if (edit) {
      output = edit(output, originalInput);
    }

    // All done.
    return output;
  }

  // Accept a sting as input, output decoded number.
  function formatFrom(
    decimals,
    thousand,
    mark,
    prefix,
    suffix,
    encoder,
    decoder,
    negativeBefore,
    negative,
    edit,
    undo,
    input
  ) {
    var originalInput = input,
      inputIsNegative,
      output = '';

    // User defined pre-decoder. Result must be a non empty string.
    if (undo) {
      input = undo(input);
    }

    // Test the input. Can't be empty.
    if (!input || typeof input !== 'string') {
      return false;
    }

    // If the string starts with the negativeBefore value: remove it.
    // Remember is was there, the number is negative.
    if (negativeBefore && strStartsWith(input, negativeBefore)) {
      input = input.replace(negativeBefore, '');
      inputIsNegative = true;
    }

    // Repeat the same procedure for the prefix.
    if (prefix && strStartsWith(input, prefix)) {
      input = input.replace(prefix, '');
    }

    // And again for negative.
    if (negative && strStartsWith(input, negative)) {
      input = input.replace(negative, '');
      inputIsNegative = true;
    }

    // Remove the suffix.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
    if (suffix && strEndsWith(input, suffix)) {
      input = input.slice(0, -1 * suffix.length);
    }

    // Remove the thousand grouping.
    if (thousand) {
      input = input.split(thousand).join('');
    }

    // Set the decimal separator back to period.
    if (mark) {
      input = input.replace(mark, '.');
    }

    // Prepend the negative symbol.
    if (inputIsNegative) {
      output += '-';
    }

    // Add the number
    output += input;

    // Trim all non-numeric characters (allow '.' and '-');
    output = output.replace(/[^0-9\.\-.]/g, '');

    // The value contains no parse-able number.
    if (output === '') {
      return false;
    }

    // Covert to number.
    output = Number(output);

    // Run the user-specified post-decoder.
    if (decoder) {
      output = decoder(output);
    }

    // Check is the output is valid, otherwise: return false.
    if (!isValidNumber(output)) {
      return false;
    }
    return output;
  }

  // Framework

  // Validate formatting options
  function validate(inputOptions) {
    var i,
      optionName,
      optionValue,
      filteredOptions = {};
    if (inputOptions['suffix'] === undefined) {
      inputOptions['suffix'] = inputOptions['postfix'];
    }
    for (i = 0; i < FormatOptions.length; i += 1) {
      optionName = FormatOptions[i];
      optionValue = inputOptions[optionName];
      if (optionValue === undefined) {
        // Only default if negativeBefore isn't set.
        if (optionName === 'negative' && !filteredOptions.negativeBefore) {
          filteredOptions[optionName] = '-';
          // Don't set a default for mark when 'thousand' is set.
        } else if (optionName === 'mark' && filteredOptions.thousand !== '.') {
          filteredOptions[optionName] = '.';
        } else {
          filteredOptions[optionName] = false;
        }

        // Floating points in JS are stable up to 7 decimals.
      } else if (optionName === 'decimals') {
        if (optionValue >= 0 && optionValue < 8) {
          filteredOptions[optionName] = optionValue;
        } else {
          throw new Error(optionName);
        }

        // These options, when provided, must be functions.
      } else if (
        optionName === 'encoder' ||
        optionName === 'decoder' ||
        optionName === 'edit' ||
        optionName === 'undo'
      ) {
        if (typeof optionValue === 'function') {
          filteredOptions[optionName] = optionValue;
        } else {
          throw new Error(optionName);
        }

        // Other options are strings.
      } else {
        if (typeof optionValue === 'string') {
          filteredOptions[optionName] = optionValue;
        } else {
          throw new Error(optionName);
        }
      }
    }

    // Some values can't be extracted from a
    // string if certain combinations are present.
    throwEqualError(filteredOptions, 'mark', 'thousand');
    throwEqualError(filteredOptions, 'prefix', 'negative');
    throwEqualError(filteredOptions, 'prefix', 'negativeBefore');
    return filteredOptions;
  }

  // Pass all options as function arguments
  function passAll(options, method, input) {
    var i,
      args = [];

    // Add all options in order of FormatOptions
    for (i = 0; i < FormatOptions.length; i += 1) {
      args.push(options[FormatOptions[i]]);
    }

    // Append the input, then call the method, presenting all
    // options as arguments.
    args.push(input);
    return method.apply('', args);
  }
  function wNumb(options) {
    if (!(this instanceof wNumb)) {
      return new wNumb(options);
    }
    if (_typeof(options) !== 'object') {
      return;
    }
    options = validate(options);

    // Call 'formatTo' with proper arguments.
    this.to = function (input) {
      return passAll(options, formatTo, input);
    };

    // Call 'formatFrom' with proper arguments.
    this.from = function (input) {
      return passAll(options, formatFrom, input);
    };
  }
  return wNumb;
});

// =require ../core/config/js/index.js
// =require ../core/lib/js/index.js

document.addEventListener('DOMContentLoaded', function () {
  var _noUiSlider$create, _noUiSlider$create2;
  /* функционал отметки чекбоксов категории на верхней панели */
  var typeLabels = document.querySelectorAll('.type__label');
  typeLabels.forEach(function (label) {
    label.addEventListener('click', function () {
      var checkbox = label.querySelector('.type__checkbox');
      if (checkbox.checked) {
        checkbox.checked = false;
      } else {
        checkbox.checked = true;
      }
      updateCheckboxes();
    });
  });
  function updateCheckboxes() {
    document.querySelectorAll('.type__checkbox').forEach(function (checkbox) {
      var label = checkbox.parentElement;
      if (checkbox.checked) {
        label.classList.add('active');
      } else {
        label.classList.remove('active');
      }
    });
  }
  updateCheckboxes();

  /* авто-регулировка ширины инпутов слайдеров в зависимости от контента,
    валидация вводимых в инпуты значений,
    подставление значка $ или % при наличии значения в инпуте 
  */
  var sliderInputs = document.querySelectorAll('.range-slider__input');
  function adjustInputWidth(input) {
    var span = document.createElement('span');
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    span.style.fontSize = '14px';
    span.style.whiteSpace = 'pre';
    var value = input.value;
    span.textContent = value + ' ';
    if (
      (input.id === 'thc-to' || input.id === 'cbd-to') &&
      Number(value) > 100
    ) {
      input.value = 100;
    } else if (Number(value) < 0) {
      input.value = 0;
    } else {
      input.value = value;
    }
    document.body.appendChild(span);
    var width = span.offsetWidth;
    if (value === '') {
      if (input.classList.contains('range-slider__input--wide')) {
        input.style.width = '46px';
      } else {
        input.style.width = '36px';
      }
      input.nextSibling.style.display = 'none';
    } else {
      input.style.width = width + 'px';
      input.nextSibling.style.display = 'block';
    }
    document.body.removeChild(span);
  }
  sliderInputs.forEach(function (input) {
    adjustInputWidth(input);
    input.addEventListener('input', function () {
      adjustInputWidth(input);
    });
  });

  /* функционал открытия/закрытия выпадающего списка типов сортировки */
  var sortingDropdownBtn = document.getElementById('dropdown-btn');
  var sortingDropdown = document.getElementById('sorting-dropdown');
  sortingDropdownBtn.addEventListener('click', function () {
    sortingDropdownBtn.classList.toggle('active');
    if (sortingDropdownBtn.classList.contains('active')) {
      sortingDropdown.style.display = 'block';
    } else {
      sortingDropdown.style.display = 'none';
    }
  });

  /* функционал аккордеона с фильтрами товаров */
  var accordionItems = document.querySelectorAll('.filters-accordion__item');
  accordionItems.forEach(function (item) {
    var header = item.querySelector('.filters-accordion__header');
    header.addEventListener('click', function () {
      var openItem = document.querySelector('.filters-accordion__item.active');
      toggleItem(item);
      if (!document.querySelector('.filters-accordion__item.active')) {
        document
          .querySelector('.filters-accordion__background')
          .classList.add('small');
      } else {
        document
          .querySelector('.filters-accordion__background')
          .classList.remove('small');
      }
    });
  });
  var toggleItem = function toggleItem(item) {
    var content = item.querySelector('.filters-accordion__content');
    if (item.classList.contains('active')) {
      content.style.display = 'none';
      item.classList.remove('active');
    } else {
      content.style.display = 'flex';
      item.classList.add('active');
    }
  };

  /* функционал добавления и удаления фильтров в панели выбранных фильтров над аккордеоном */
  var selectedFiltersList = document.querySelector('.chosen-filters__list');
  var checkboxes = document.querySelectorAll('.checkbox__input');
  function updateSelectedFilters() {
    selectedFiltersList.innerHTML = '';
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        var filter = checkbox.getAttribute('data-filter');
        var listItem = document.createElement('li');
        listItem.classList.add('chosen-filters__filter', 'filter');
        listItem.innerHTML = '\n          <span class="filter__text">'
          .concat(
            filter,
            '</span>\n          <a class="filter__cancel-btn" data-filter="'
          )
          .concat(
            filter,
            '">\n            <svg class="filter__cancel-icon">\n              <use xlink:href="./assets/icons/default/sprite.svg#cancel-filter"></use>\n            </svg>\n          </a>'
          );
        selectedFiltersList.appendChild(listItem);
      }
    });
    document.querySelectorAll('.filter__cancel-btn').forEach(function (btn) {
      btn.addEventListener('click', function (event) {
        var filterToRemove = event.currentTarget.getAttribute('data-filter');
        var correspondingCheckbox = Array.from(checkboxes).find(function (
          checkbox
        ) {
          return checkbox.getAttribute('data-filter') === filterToRemove;
        });
        if (correspondingCheckbox) {
          correspondingCheckbox.checked = false;
          updateSelectedFilters();
        }
      });
    });
  }
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', updateSelectedFilters);
  });
  updateSelectedFilters();

  /* функционал слайдеров, выполненных с помощью noUiSlider */

  // слайдер цены
  // фейковые данные для max цены
  var maxPrice = 400;
  var priceSlider = document.getElementById('slider-price');
  var priceInput0 = document.getElementById('price-from');
  var priceInput1 = document.getElementById('price-to');
  var priceInputs = [priceInput0, priceInput1];
  noUiSlider.create(priceSlider, {
    start: [0, 234],
    connect: true,
    step: 1,
    tooltips: [
      false,
      {
        to: function to(value) {
          return Math.round(value) + ' $';
        },
        from: function from(value) {
          return Math.round(value);
        },
      },
    ],
    range: {
      min: 0,
      max: maxPrice,
    },
    format: {
      to: function to(value) {
        return Math.round(value);
      },
      from: function from(value) {
        return Math.round(value);
      },
    },
  });
  priceSlider.noUiSlider.on('update', function (values, handle) {
    priceInputs[handle].value = values[handle];
    priceInputs.forEach(function (input) {
      adjustInputWidth(input);
    });
  });
  priceInputs.forEach(function (input, handle) {
    input.addEventListener('change', function () {
      priceSlider.noUiSlider.setHandle(handle, this.value);
      adjustInputWidth(input);
    });
  });
  // слайдер содержания THC
  var thcSlider = document.getElementById('slider-thc');
  var thcInput = document.getElementById('thc-to');
  noUiSlider.create(
    thcSlider,
    ((_noUiSlider$create = {
      start: 65,
      connect: true,
      tooltips: {
        to: function to(value) {
          return Math.round(value) + ' %';
        },
        from: function from(value) {
          return Number(value.replace('%', ''));
        },
      },
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
    }),
    _defineProperty(_noUiSlider$create, 'connect', [true, false]),
    _defineProperty(_noUiSlider$create, 'format', {
      to: function to(value) {
        return Math.round(value);
      },
      from: function from(value) {
        return Number(value);
      },
    }),
    _noUiSlider$create)
  );
  thcSlider.noUiSlider.on('update', function (values, handle) {
    thcInput.value = values[handle];
    adjustInputWidth(thcInput);
  });
  thcInput.addEventListener('change', function () {
    thcSlider.noUiSlider.set(this.value);
    adjustInputWidth(thcInput);
  });
  // слайдер содержания CBD
  var cbdSlider = document.getElementById('slider-cbd');
  var cbdInput = document.getElementById('cbd-to');
  noUiSlider.create(
    cbdSlider,
    ((_noUiSlider$create2 = {
      start: 65,
      connect: true,
      tooltips: {
        to: function to(value) {
          return Math.round(value) + ' %';
        },
        from: function from(value) {
          return Number(value.replace('%', ''));
        },
      },
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
    }),
    _defineProperty(_noUiSlider$create2, 'connect', [true, false]),
    _defineProperty(_noUiSlider$create2, 'format', {
      to: function to(value) {
        return Math.round(value);
      },
      from: function from(value) {
        return Number(value);
      },
    }),
    _noUiSlider$create2)
  );
  cbdSlider.noUiSlider.on('update', function (values, handle) {
    cbdInput.value = values[handle];
    adjustInputWidth(cbdInput);
  });
  cbdInput.addEventListener('change', function () {
    cbdSlider.noUiSlider.set(this.value);
    adjustInputWidth(cbdInput);
  });
});
