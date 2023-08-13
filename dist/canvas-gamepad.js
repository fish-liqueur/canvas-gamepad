function ho(T, I, o) {
  const G = o.value;
  return {
    configurable: !0,
    get() {
      return G.bind(this);
    }
  };
}
function ao(T, I, o, G) {
  const B = T instanceof MouseEvent ? T.offsetX : T.touches[0]?.clientX - I.getBoundingClientRect().left || T.changedTouches[0]?.clientX - I.getBoundingClientRect().left, Z = T instanceof MouseEvent ? T.offsetY : T.touches[0]?.clientY - I.getBoundingClientRect().top || T.changedTouches[0]?.clientY - I.getBoundingClientRect().left;
  return G.reduce((P, un) => (un.path && o.isPointInPath(un.path, B, Z) && (P = un), P), null);
}
function rr(T) {
  return T * Math.PI / 180;
}
function ap(T, I, o, G) {
  const B = T / 100, Z = 15 * B;
  return [I * B - G / 2, o * B - G / 2 + Z];
}
function cp(T, I) {
  return I * T / 100;
}
function hp(T, I, o, G, B, Z) {
  const { radius: P, iconSize: un, iconCoordinates: Jn, iconName: ur } = Z;
  T.fillStyle = "transparent", P ? (I.moveTo(o / 2, o / 2), I.arc(o / 2, o / 2, 4 * o / 10, rr(P[0]), rr(P[1])), I.lineTo(o / 2, o / 2)) : I.arc(9 * o / 10 - o / 80, o / 10 + o / 80, o / 10, rr(0), rr(360)), T.lineWidth = B.lineWidth, T.shadowBlur = B.shadowBlur, T.shadowColor = B.shadowColor, T.strokeStyle = B.strokeStyle, T.stroke(I);
  const ft = cp(o, un);
  T.fillStyle = B.strokeStyle, T.font = `200 ${ft}px material-icons`;
  const [bn, se] = ap(o, Jn[0], Jn[1], ft);
  T.fillText(
    ur,
    bn,
    se
  );
}
class gp {
  options;
  path;
  style;
  context;
  key;
  buttonSystemSettings;
  canvasSide;
  constructor(I, o, G, B, Z) {
    this.options = I, this.key = I.key, this.context = o, this.style = G, this.canvasSide = B, this.path = new Path2D(), this.buttonSystemSettings = Z, hp(
      this.context,
      this.path,
      this.canvasSide,
      this.options,
      this.style,
      this.buttonSystemSettings
    );
  }
}
const co = {
  rotate: {
    radius: [-135, -45],
    iconSize: 15,
    iconCoordinates: [50, 25],
    iconName: "sync",
    key: "rotate"
  },
  right: {
    radius: [-45, 45],
    iconSize: 15,
    iconCoordinates: [75, 50],
    iconName: "arrow_forward",
    key: "right"
  },
  down: {
    radius: [45, 135],
    iconSize: 15,
    iconCoordinates: [50, 75],
    iconName: "arrow_downward",
    key: "down"
  },
  left: {
    radius: [135, 225],
    iconSize: 15,
    iconCoordinates: [25, 50],
    iconName: "arrow_back",
    key: "left"
  },
  "play-pause": {
    radius: null,
    iconSize: 9,
    iconCoordinates: [89, 5],
    iconName: "play_arrow",
    key: "play-pause"
  }
};
function Ti(T, I, o, G = null) {
  const B = T, Z = [];
  return Object.values(co).sort((P, un) => P.key === G?.key ? 1 : un.key === G?.key ? -1 : 0).forEach((P) => {
    const un = P.key === G?.key ? B.active : B.general;
    Z.push(new gp(P, I, un, o, co[P.key]));
  }), Z;
}
var _p = Object.defineProperty, pp = Object.getOwnPropertyDescriptor, go = (T, I, o, G) => {
  for (var B = G > 1 ? void 0 : G ? pp(I, o) : I, Z = T.length - 1, P; Z >= 0; Z--)
    (P = T[Z]) && (B = (G ? P(I, o, B) : P(B)) || B);
  return G && B && _p(I, o, B), B;
};
class Li {
  canvasSide;
  canvas;
  context;
  buttons = [];
  buttonActive = null;
  callback;
  options;
  constructor(I, o, G) {
    this.options = G, this.canvasSide = I.offsetWidth > I.offsetHeight ? I.offsetHeight : I.offsetWidth, this.canvas = document.createElement("canvas"), this.canvas.width = this.canvasSide, this.canvas.height = this.canvasSide, this.context = this.canvas.getContext("2d"), I.appendChild(this.canvas), this.callback = o;
    const B = new FontFace(
      "material-icons",
      // pass the url to the file in CSS url() notation
      "url(https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2)"
    );
    document.fonts.add(B), B.load().then(() => {
      let Z = !1;
      const P = 150, un = (Jn) => {
        Z || (Z = !0, this.handleActive(Jn), setTimeout(() => {
          Z = !1;
        }, P));
      };
      this.canvas.addEventListener("touchstart", un), this.canvas.addEventListener("mousedown", un), this.canvas.addEventListener("touchend", this.handleInactive), this.canvas.addEventListener("mouseup", this.handleInactive), this.buttons = Ti(G, this.context, this.canvasSide);
    }).catch(console.error);
  }
  clearView() {
    this.context.clearRect(0, 0, this.canvasSide, this.canvasSide);
  }
  handleActive(I) {
    const o = ao(I, this.canvas, this.context, this.buttons);
    o && (this.buttonActive = o, this.clearView(), this.buttons = Ti(this.options, this.context, this.canvasSide, o), this.callback(o.key));
  }
  handleInactive(I) {
    (this.buttonActive || ao(I, this.canvas, this.context, this.buttons)) && (this.buttonActive = null, this.buttons = [], this.clearView(), this.buttons = Ti(this.options, this.context, this.canvasSide));
  }
}
go([
  ho
], Li.prototype, "handleActive", 1);
go([
  ho
], Li.prototype, "handleInactive", 1);
var oe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ir = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
ir.exports;
(function(T, I) {
  (function() {
    var o, G = "4.17.21", B = 200, Z = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", P = "Expected a function", un = "Invalid `variable` option passed into `_.template`", Jn = "__lodash_hash_undefined__", ur = 500, ft = "__lodash_placeholder__", bn = 1, se = 2, wt = 4, xt = 1, le = 2, dn = 1, ot = 2, Oi = 4, Wn = 8, At = 16, Bn = 32, yt = 64, Un = 128, Ut = 256, fr = 512, _o = 30, po = "...", vo = 800, wo = 16, bi = 1, xo = 2, Ao = 3, st = 1 / 0, Qn = 9007199254740991, yo = 17976931348623157e292, ae = 0 / 0, Pn = 4294967295, So = Pn - 1, Io = Pn >>> 1, Ro = [
      ["ary", Un],
      ["bind", dn],
      ["bindKey", ot],
      ["curry", Wn],
      ["curryRight", At],
      ["flip", fr],
      ["partial", Bn],
      ["partialRight", yt],
      ["rearg", Ut]
    ], St = "[object Arguments]", ce = "[object Array]", mo = "[object AsyncFunction]", Nt = "[object Boolean]", Gt = "[object Date]", Co = "[object DOMException]", he = "[object Error]", ge = "[object Function]", Wi = "[object GeneratorFunction]", mn = "[object Map]", Ht = "[object Number]", Eo = "[object Null]", Nn = "[object Object]", Bi = "[object Promise]", To = "[object Proxy]", qt = "[object RegExp]", Cn = "[object Set]", $t = "[object String]", _e = "[object Symbol]", Lo = "[object Undefined]", zt = "[object WeakMap]", Oo = "[object WeakSet]", Kt = "[object ArrayBuffer]", It = "[object DataView]", or = "[object Float32Array]", sr = "[object Float64Array]", lr = "[object Int8Array]", ar = "[object Int16Array]", cr = "[object Int32Array]", hr = "[object Uint8Array]", gr = "[object Uint8ClampedArray]", _r = "[object Uint16Array]", pr = "[object Uint32Array]", bo = /\b__p \+= '';/g, Wo = /\b(__p \+=) '' \+/g, Bo = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Pi = /&(?:amp|lt|gt|quot|#39);/g, Di = /[&<>"']/g, Po = RegExp(Pi.source), Do = RegExp(Di.source), Mo = /<%-([\s\S]+?)%>/g, Fo = /<%([\s\S]+?)%>/g, Mi = /<%=([\s\S]+?)%>/g, Uo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, No = /^\w*$/, Go = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, dr = /[\\^$.*+?()[\]{}|]/g, Ho = RegExp(dr.source), vr = /^\s+/, qo = /\s/, $o = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, zo = /\{\n\/\* \[wrapped with (.+)\] \*/, Ko = /,? & /, Yo = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Zo = /[()=,{}\[\]\/\s]/, Xo = /\\(\\)?/g, Jo = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Fi = /\w*$/, Qo = /^[-+]0x[0-9a-f]+$/i, Vo = /^0b[01]+$/i, ko = /^\[object .+?Constructor\]$/, jo = /^0o[0-7]+$/i, ns = /^(?:0|[1-9]\d*)$/, ts = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, pe = /($^)/, es = /['\n\r\u2028\u2029\\]/g, de = "\\ud800-\\udfff", rs = "\\u0300-\\u036f", is = "\\ufe20-\\ufe2f", us = "\\u20d0-\\u20ff", Ui = rs + is + us, Ni = "\\u2700-\\u27bf", Gi = "a-z\\xdf-\\xf6\\xf8-\\xff", fs = "\\xac\\xb1\\xd7\\xf7", os = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", ss = "\\u2000-\\u206f", ls = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Hi = "A-Z\\xc0-\\xd6\\xd8-\\xde", qi = "\\ufe0e\\ufe0f", $i = fs + os + ss + ls, wr = "['’]", as = "[" + de + "]", zi = "[" + $i + "]", ve = "[" + Ui + "]", Ki = "\\d+", cs = "[" + Ni + "]", Yi = "[" + Gi + "]", Zi = "[^" + de + $i + Ki + Ni + Gi + Hi + "]", xr = "\\ud83c[\\udffb-\\udfff]", hs = "(?:" + ve + "|" + xr + ")", Xi = "[^" + de + "]", Ar = "(?:\\ud83c[\\udde6-\\uddff]){2}", yr = "[\\ud800-\\udbff][\\udc00-\\udfff]", Rt = "[" + Hi + "]", Ji = "\\u200d", Qi = "(?:" + Yi + "|" + Zi + ")", gs = "(?:" + Rt + "|" + Zi + ")", Vi = "(?:" + wr + "(?:d|ll|m|re|s|t|ve))?", ki = "(?:" + wr + "(?:D|LL|M|RE|S|T|VE))?", ji = hs + "?", nu = "[" + qi + "]?", _s = "(?:" + Ji + "(?:" + [Xi, Ar, yr].join("|") + ")" + nu + ji + ")*", ps = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", ds = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", tu = nu + ji + _s, vs = "(?:" + [cs, Ar, yr].join("|") + ")" + tu, ws = "(?:" + [Xi + ve + "?", ve, Ar, yr, as].join("|") + ")", xs = RegExp(wr, "g"), As = RegExp(ve, "g"), Sr = RegExp(xr + "(?=" + xr + ")|" + ws + tu, "g"), ys = RegExp([
      Rt + "?" + Yi + "+" + Vi + "(?=" + [zi, Rt, "$"].join("|") + ")",
      gs + "+" + ki + "(?=" + [zi, Rt + Qi, "$"].join("|") + ")",
      Rt + "?" + Qi + "+" + Vi,
      Rt + "+" + ki,
      ds,
      ps,
      Ki,
      vs
    ].join("|"), "g"), Ss = RegExp("[" + Ji + de + Ui + qi + "]"), Is = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Rs = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], ms = -1, H = {};
    H[or] = H[sr] = H[lr] = H[ar] = H[cr] = H[hr] = H[gr] = H[_r] = H[pr] = !0, H[St] = H[ce] = H[Kt] = H[Nt] = H[It] = H[Gt] = H[he] = H[ge] = H[mn] = H[Ht] = H[Nn] = H[qt] = H[Cn] = H[$t] = H[zt] = !1;
    var N = {};
    N[St] = N[ce] = N[Kt] = N[It] = N[Nt] = N[Gt] = N[or] = N[sr] = N[lr] = N[ar] = N[cr] = N[mn] = N[Ht] = N[Nn] = N[qt] = N[Cn] = N[$t] = N[_e] = N[hr] = N[gr] = N[_r] = N[pr] = !0, N[he] = N[ge] = N[zt] = !1;
    var Cs = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, Es = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Ts = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Ls = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Os = parseFloat, bs = parseInt, eu = typeof oe == "object" && oe && oe.Object === Object && oe, Ws = typeof self == "object" && self && self.Object === Object && self, V = eu || Ws || Function("return this")(), Ir = I && !I.nodeType && I, lt = Ir && !0 && T && !T.nodeType && T, ru = lt && lt.exports === Ir, Rr = ru && eu.process, vn = function() {
      try {
        var a = lt && lt.require && lt.require("util").types;
        return a || Rr && Rr.binding && Rr.binding("util");
      } catch {
      }
    }(), iu = vn && vn.isArrayBuffer, uu = vn && vn.isDate, fu = vn && vn.isMap, ou = vn && vn.isRegExp, su = vn && vn.isSet, lu = vn && vn.isTypedArray;
    function an(a, g, h) {
      switch (h.length) {
        case 0:
          return a.call(g);
        case 1:
          return a.call(g, h[0]);
        case 2:
          return a.call(g, h[0], h[1]);
        case 3:
          return a.call(g, h[0], h[1], h[2]);
      }
      return a.apply(g, h);
    }
    function Bs(a, g, h, w) {
      for (var R = -1, D = a == null ? 0 : a.length; ++R < D; ) {
        var X = a[R];
        g(w, X, h(X), a);
      }
      return w;
    }
    function wn(a, g) {
      for (var h = -1, w = a == null ? 0 : a.length; ++h < w && g(a[h], h, a) !== !1; )
        ;
      return a;
    }
    function Ps(a, g) {
      for (var h = a == null ? 0 : a.length; h-- && g(a[h], h, a) !== !1; )
        ;
      return a;
    }
    function au(a, g) {
      for (var h = -1, w = a == null ? 0 : a.length; ++h < w; )
        if (!g(a[h], h, a))
          return !1;
      return !0;
    }
    function Vn(a, g) {
      for (var h = -1, w = a == null ? 0 : a.length, R = 0, D = []; ++h < w; ) {
        var X = a[h];
        g(X, h, a) && (D[R++] = X);
      }
      return D;
    }
    function we(a, g) {
      var h = a == null ? 0 : a.length;
      return !!h && mt(a, g, 0) > -1;
    }
    function mr(a, g, h) {
      for (var w = -1, R = a == null ? 0 : a.length; ++w < R; )
        if (h(g, a[w]))
          return !0;
      return !1;
    }
    function q(a, g) {
      for (var h = -1, w = a == null ? 0 : a.length, R = Array(w); ++h < w; )
        R[h] = g(a[h], h, a);
      return R;
    }
    function kn(a, g) {
      for (var h = -1, w = g.length, R = a.length; ++h < w; )
        a[R + h] = g[h];
      return a;
    }
    function Cr(a, g, h, w) {
      var R = -1, D = a == null ? 0 : a.length;
      for (w && D && (h = a[++R]); ++R < D; )
        h = g(h, a[R], R, a);
      return h;
    }
    function Ds(a, g, h, w) {
      var R = a == null ? 0 : a.length;
      for (w && R && (h = a[--R]); R--; )
        h = g(h, a[R], R, a);
      return h;
    }
    function Er(a, g) {
      for (var h = -1, w = a == null ? 0 : a.length; ++h < w; )
        if (g(a[h], h, a))
          return !0;
      return !1;
    }
    var Ms = Tr("length");
    function Fs(a) {
      return a.split("");
    }
    function Us(a) {
      return a.match(Yo) || [];
    }
    function cu(a, g, h) {
      var w;
      return h(a, function(R, D, X) {
        if (g(R, D, X))
          return w = D, !1;
      }), w;
    }
    function xe(a, g, h, w) {
      for (var R = a.length, D = h + (w ? 1 : -1); w ? D-- : ++D < R; )
        if (g(a[D], D, a))
          return D;
      return -1;
    }
    function mt(a, g, h) {
      return g === g ? Qs(a, g, h) : xe(a, hu, h);
    }
    function Ns(a, g, h, w) {
      for (var R = h - 1, D = a.length; ++R < D; )
        if (w(a[R], g))
          return R;
      return -1;
    }
    function hu(a) {
      return a !== a;
    }
    function gu(a, g) {
      var h = a == null ? 0 : a.length;
      return h ? Or(a, g) / h : ae;
    }
    function Tr(a) {
      return function(g) {
        return g == null ? o : g[a];
      };
    }
    function Lr(a) {
      return function(g) {
        return a == null ? o : a[g];
      };
    }
    function _u(a, g, h, w, R) {
      return R(a, function(D, X, U) {
        h = w ? (w = !1, D) : g(h, D, X, U);
      }), h;
    }
    function Gs(a, g) {
      var h = a.length;
      for (a.sort(g); h--; )
        a[h] = a[h].value;
      return a;
    }
    function Or(a, g) {
      for (var h, w = -1, R = a.length; ++w < R; ) {
        var D = g(a[w]);
        D !== o && (h = h === o ? D : h + D);
      }
      return h;
    }
    function br(a, g) {
      for (var h = -1, w = Array(a); ++h < a; )
        w[h] = g(h);
      return w;
    }
    function Hs(a, g) {
      return q(g, function(h) {
        return [h, a[h]];
      });
    }
    function pu(a) {
      return a && a.slice(0, xu(a) + 1).replace(vr, "");
    }
    function cn(a) {
      return function(g) {
        return a(g);
      };
    }
    function Wr(a, g) {
      return q(g, function(h) {
        return a[h];
      });
    }
    function Yt(a, g) {
      return a.has(g);
    }
    function du(a, g) {
      for (var h = -1, w = a.length; ++h < w && mt(g, a[h], 0) > -1; )
        ;
      return h;
    }
    function vu(a, g) {
      for (var h = a.length; h-- && mt(g, a[h], 0) > -1; )
        ;
      return h;
    }
    function qs(a, g) {
      for (var h = a.length, w = 0; h--; )
        a[h] === g && ++w;
      return w;
    }
    var $s = Lr(Cs), zs = Lr(Es);
    function Ks(a) {
      return "\\" + Ls[a];
    }
    function Ys(a, g) {
      return a == null ? o : a[g];
    }
    function Ct(a) {
      return Ss.test(a);
    }
    function Zs(a) {
      return Is.test(a);
    }
    function Xs(a) {
      for (var g, h = []; !(g = a.next()).done; )
        h.push(g.value);
      return h;
    }
    function Br(a) {
      var g = -1, h = Array(a.size);
      return a.forEach(function(w, R) {
        h[++g] = [R, w];
      }), h;
    }
    function wu(a, g) {
      return function(h) {
        return a(g(h));
      };
    }
    function jn(a, g) {
      for (var h = -1, w = a.length, R = 0, D = []; ++h < w; ) {
        var X = a[h];
        (X === g || X === ft) && (a[h] = ft, D[R++] = h);
      }
      return D;
    }
    function Ae(a) {
      var g = -1, h = Array(a.size);
      return a.forEach(function(w) {
        h[++g] = w;
      }), h;
    }
    function Js(a) {
      var g = -1, h = Array(a.size);
      return a.forEach(function(w) {
        h[++g] = [w, w];
      }), h;
    }
    function Qs(a, g, h) {
      for (var w = h - 1, R = a.length; ++w < R; )
        if (a[w] === g)
          return w;
      return -1;
    }
    function Vs(a, g, h) {
      for (var w = h + 1; w--; )
        if (a[w] === g)
          return w;
      return w;
    }
    function Et(a) {
      return Ct(a) ? js(a) : Ms(a);
    }
    function En(a) {
      return Ct(a) ? nl(a) : Fs(a);
    }
    function xu(a) {
      for (var g = a.length; g-- && qo.test(a.charAt(g)); )
        ;
      return g;
    }
    var ks = Lr(Ts);
    function js(a) {
      for (var g = Sr.lastIndex = 0; Sr.test(a); )
        ++g;
      return g;
    }
    function nl(a) {
      return a.match(Sr) || [];
    }
    function tl(a) {
      return a.match(ys) || [];
    }
    var el = function a(g) {
      g = g == null ? V : Tt.defaults(V.Object(), g, Tt.pick(V, Rs));
      var h = g.Array, w = g.Date, R = g.Error, D = g.Function, X = g.Math, U = g.Object, Pr = g.RegExp, rl = g.String, xn = g.TypeError, ye = h.prototype, il = D.prototype, Lt = U.prototype, Se = g["__core-js_shared__"], Ie = il.toString, F = Lt.hasOwnProperty, ul = 0, Au = function() {
        var n = /[^.]+$/.exec(Se && Se.keys && Se.keys.IE_PROTO || "");
        return n ? "Symbol(src)_1." + n : "";
      }(), Re = Lt.toString, fl = Ie.call(U), ol = V._, sl = Pr(
        "^" + Ie.call(F).replace(dr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), me = ru ? g.Buffer : o, nt = g.Symbol, Ce = g.Uint8Array, yu = me ? me.allocUnsafe : o, Ee = wu(U.getPrototypeOf, U), Su = U.create, Iu = Lt.propertyIsEnumerable, Te = ye.splice, Ru = nt ? nt.isConcatSpreadable : o, Zt = nt ? nt.iterator : o, at = nt ? nt.toStringTag : o, Le = function() {
        try {
          var n = pt(U, "defineProperty");
          return n({}, "", {}), n;
        } catch {
        }
      }(), ll = g.clearTimeout !== V.clearTimeout && g.clearTimeout, al = w && w.now !== V.Date.now && w.now, cl = g.setTimeout !== V.setTimeout && g.setTimeout, Oe = X.ceil, be = X.floor, Dr = U.getOwnPropertySymbols, hl = me ? me.isBuffer : o, mu = g.isFinite, gl = ye.join, _l = wu(U.keys, U), J = X.max, j = X.min, pl = w.now, dl = g.parseInt, Cu = X.random, vl = ye.reverse, Mr = pt(g, "DataView"), Xt = pt(g, "Map"), Fr = pt(g, "Promise"), Ot = pt(g, "Set"), Jt = pt(g, "WeakMap"), Qt = pt(U, "create"), We = Jt && new Jt(), bt = {}, wl = dt(Mr), xl = dt(Xt), Al = dt(Fr), yl = dt(Ot), Sl = dt(Jt), Be = nt ? nt.prototype : o, Vt = Be ? Be.valueOf : o, Eu = Be ? Be.toString : o;
      function u(n) {
        if (z(n) && !m(n) && !(n instanceof b)) {
          if (n instanceof An)
            return n;
          if (F.call(n, "__wrapped__"))
            return Lf(n);
        }
        return new An(n);
      }
      var Wt = function() {
        function n() {
        }
        return function(t) {
          if (!$(t))
            return {};
          if (Su)
            return Su(t);
          n.prototype = t;
          var e = new n();
          return n.prototype = o, e;
        };
      }();
      function Pe() {
      }
      function An(n, t) {
        this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = o;
      }
      u.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Mo,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Fo,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Mi,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: u
        }
      }, u.prototype = Pe.prototype, u.prototype.constructor = u, An.prototype = Wt(Pe.prototype), An.prototype.constructor = An;
      function b(n) {
        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Pn, this.__views__ = [];
      }
      function Il() {
        var n = new b(this.__wrapped__);
        return n.__actions__ = fn(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = fn(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = fn(this.__views__), n;
      }
      function Rl() {
        if (this.__filtered__) {
          var n = new b(this);
          n.__dir__ = -1, n.__filtered__ = !0;
        } else
          n = this.clone(), n.__dir__ *= -1;
        return n;
      }
      function ml() {
        var n = this.__wrapped__.value(), t = this.__dir__, e = m(n), r = t < 0, i = e ? n.length : 0, f = Fa(0, i, this.__views__), s = f.start, l = f.end, c = l - s, _ = r ? l : s - 1, p = this.__iteratees__, d = p.length, v = 0, x = j(c, this.__takeCount__);
        if (!e || !r && i == c && x == c)
          return Vu(n, this.__actions__);
        var y = [];
        n:
          for (; c-- && v < x; ) {
            _ += t;
            for (var E = -1, S = n[_]; ++E < d; ) {
              var O = p[E], W = O.iteratee, _n = O.type, rn = W(S);
              if (_n == xo)
                S = rn;
              else if (!rn) {
                if (_n == bi)
                  continue n;
                break n;
              }
            }
            y[v++] = S;
          }
        return y;
      }
      b.prototype = Wt(Pe.prototype), b.prototype.constructor = b;
      function ct(n) {
        var t = -1, e = n == null ? 0 : n.length;
        for (this.clear(); ++t < e; ) {
          var r = n[t];
          this.set(r[0], r[1]);
        }
      }
      function Cl() {
        this.__data__ = Qt ? Qt(null) : {}, this.size = 0;
      }
      function El(n) {
        var t = this.has(n) && delete this.__data__[n];
        return this.size -= t ? 1 : 0, t;
      }
      function Tl(n) {
        var t = this.__data__;
        if (Qt) {
          var e = t[n];
          return e === Jn ? o : e;
        }
        return F.call(t, n) ? t[n] : o;
      }
      function Ll(n) {
        var t = this.__data__;
        return Qt ? t[n] !== o : F.call(t, n);
      }
      function Ol(n, t) {
        var e = this.__data__;
        return this.size += this.has(n) ? 0 : 1, e[n] = Qt && t === o ? Jn : t, this;
      }
      ct.prototype.clear = Cl, ct.prototype.delete = El, ct.prototype.get = Tl, ct.prototype.has = Ll, ct.prototype.set = Ol;
      function Gn(n) {
        var t = -1, e = n == null ? 0 : n.length;
        for (this.clear(); ++t < e; ) {
          var r = n[t];
          this.set(r[0], r[1]);
        }
      }
      function bl() {
        this.__data__ = [], this.size = 0;
      }
      function Wl(n) {
        var t = this.__data__, e = De(t, n);
        if (e < 0)
          return !1;
        var r = t.length - 1;
        return e == r ? t.pop() : Te.call(t, e, 1), --this.size, !0;
      }
      function Bl(n) {
        var t = this.__data__, e = De(t, n);
        return e < 0 ? o : t[e][1];
      }
      function Pl(n) {
        return De(this.__data__, n) > -1;
      }
      function Dl(n, t) {
        var e = this.__data__, r = De(e, n);
        return r < 0 ? (++this.size, e.push([n, t])) : e[r][1] = t, this;
      }
      Gn.prototype.clear = bl, Gn.prototype.delete = Wl, Gn.prototype.get = Bl, Gn.prototype.has = Pl, Gn.prototype.set = Dl;
      function Hn(n) {
        var t = -1, e = n == null ? 0 : n.length;
        for (this.clear(); ++t < e; ) {
          var r = n[t];
          this.set(r[0], r[1]);
        }
      }
      function Ml() {
        this.size = 0, this.__data__ = {
          hash: new ct(),
          map: new (Xt || Gn)(),
          string: new ct()
        };
      }
      function Fl(n) {
        var t = Ze(this, n).delete(n);
        return this.size -= t ? 1 : 0, t;
      }
      function Ul(n) {
        return Ze(this, n).get(n);
      }
      function Nl(n) {
        return Ze(this, n).has(n);
      }
      function Gl(n, t) {
        var e = Ze(this, n), r = e.size;
        return e.set(n, t), this.size += e.size == r ? 0 : 1, this;
      }
      Hn.prototype.clear = Ml, Hn.prototype.delete = Fl, Hn.prototype.get = Ul, Hn.prototype.has = Nl, Hn.prototype.set = Gl;
      function ht(n) {
        var t = -1, e = n == null ? 0 : n.length;
        for (this.__data__ = new Hn(); ++t < e; )
          this.add(n[t]);
      }
      function Hl(n) {
        return this.__data__.set(n, Jn), this;
      }
      function ql(n) {
        return this.__data__.has(n);
      }
      ht.prototype.add = ht.prototype.push = Hl, ht.prototype.has = ql;
      function Tn(n) {
        var t = this.__data__ = new Gn(n);
        this.size = t.size;
      }
      function $l() {
        this.__data__ = new Gn(), this.size = 0;
      }
      function zl(n) {
        var t = this.__data__, e = t.delete(n);
        return this.size = t.size, e;
      }
      function Kl(n) {
        return this.__data__.get(n);
      }
      function Yl(n) {
        return this.__data__.has(n);
      }
      function Zl(n, t) {
        var e = this.__data__;
        if (e instanceof Gn) {
          var r = e.__data__;
          if (!Xt || r.length < B - 1)
            return r.push([n, t]), this.size = ++e.size, this;
          e = this.__data__ = new Hn(r);
        }
        return e.set(n, t), this.size = e.size, this;
      }
      Tn.prototype.clear = $l, Tn.prototype.delete = zl, Tn.prototype.get = Kl, Tn.prototype.has = Yl, Tn.prototype.set = Zl;
      function Tu(n, t) {
        var e = m(n), r = !e && vt(n), i = !e && !r && ut(n), f = !e && !r && !i && Mt(n), s = e || r || i || f, l = s ? br(n.length, rl) : [], c = l.length;
        for (var _ in n)
          (t || F.call(n, _)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
          (_ == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          i && (_ == "offset" || _ == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          f && (_ == "buffer" || _ == "byteLength" || _ == "byteOffset") || // Skip index properties.
          Kn(_, c))) && l.push(_);
        return l;
      }
      function Lu(n) {
        var t = n.length;
        return t ? n[Xr(0, t - 1)] : o;
      }
      function Xl(n, t) {
        return Xe(fn(n), gt(t, 0, n.length));
      }
      function Jl(n) {
        return Xe(fn(n));
      }
      function Ur(n, t, e) {
        (e !== o && !Ln(n[t], e) || e === o && !(t in n)) && qn(n, t, e);
      }
      function kt(n, t, e) {
        var r = n[t];
        (!(F.call(n, t) && Ln(r, e)) || e === o && !(t in n)) && qn(n, t, e);
      }
      function De(n, t) {
        for (var e = n.length; e--; )
          if (Ln(n[e][0], t))
            return e;
        return -1;
      }
      function Ql(n, t, e, r) {
        return tt(n, function(i, f, s) {
          t(r, i, e(i), s);
        }), r;
      }
      function Ou(n, t) {
        return n && Mn(t, Q(t), n);
      }
      function Vl(n, t) {
        return n && Mn(t, sn(t), n);
      }
      function qn(n, t, e) {
        t == "__proto__" && Le ? Le(n, t, {
          configurable: !0,
          enumerable: !0,
          value: e,
          writable: !0
        }) : n[t] = e;
      }
      function Nr(n, t) {
        for (var e = -1, r = t.length, i = h(r), f = n == null; ++e < r; )
          i[e] = f ? o : xi(n, t[e]);
        return i;
      }
      function gt(n, t, e) {
        return n === n && (e !== o && (n = n <= e ? n : e), t !== o && (n = n >= t ? n : t)), n;
      }
      function yn(n, t, e, r, i, f) {
        var s, l = t & bn, c = t & se, _ = t & wt;
        if (e && (s = i ? e(n, r, i, f) : e(n)), s !== o)
          return s;
        if (!$(n))
          return n;
        var p = m(n);
        if (p) {
          if (s = Na(n), !l)
            return fn(n, s);
        } else {
          var d = nn(n), v = d == ge || d == Wi;
          if (ut(n))
            return nf(n, l);
          if (d == Nn || d == St || v && !i) {
            if (s = c || v ? {} : Af(n), !l)
              return c ? Ta(n, Vl(s, n)) : Ea(n, Ou(s, n));
          } else {
            if (!N[d])
              return i ? n : {};
            s = Ga(n, d, l);
          }
        }
        f || (f = new Tn());
        var x = f.get(n);
        if (x)
          return x;
        f.set(n, s), Jf(n) ? n.forEach(function(S) {
          s.add(yn(S, t, e, S, n, f));
        }) : Zf(n) && n.forEach(function(S, O) {
          s.set(O, yn(S, t, e, O, n, f));
        });
        var y = _ ? c ? ui : ii : c ? sn : Q, E = p ? o : y(n);
        return wn(E || n, function(S, O) {
          E && (O = S, S = n[O]), kt(s, O, yn(S, t, e, O, n, f));
        }), s;
      }
      function kl(n) {
        var t = Q(n);
        return function(e) {
          return bu(e, n, t);
        };
      }
      function bu(n, t, e) {
        var r = e.length;
        if (n == null)
          return !r;
        for (n = U(n); r--; ) {
          var i = e[r], f = t[i], s = n[i];
          if (s === o && !(i in n) || !f(s))
            return !1;
        }
        return !0;
      }
      function Wu(n, t, e) {
        if (typeof n != "function")
          throw new xn(P);
        return ue(function() {
          n.apply(o, e);
        }, t);
      }
      function jt(n, t, e, r) {
        var i = -1, f = we, s = !0, l = n.length, c = [], _ = t.length;
        if (!l)
          return c;
        e && (t = q(t, cn(e))), r ? (f = mr, s = !1) : t.length >= B && (f = Yt, s = !1, t = new ht(t));
        n:
          for (; ++i < l; ) {
            var p = n[i], d = e == null ? p : e(p);
            if (p = r || p !== 0 ? p : 0, s && d === d) {
              for (var v = _; v--; )
                if (t[v] === d)
                  continue n;
              c.push(p);
            } else
              f(t, d, r) || c.push(p);
          }
        return c;
      }
      var tt = ff(Dn), Bu = ff(Hr, !0);
      function jl(n, t) {
        var e = !0;
        return tt(n, function(r, i, f) {
          return e = !!t(r, i, f), e;
        }), e;
      }
      function Me(n, t, e) {
        for (var r = -1, i = n.length; ++r < i; ) {
          var f = n[r], s = t(f);
          if (s != null && (l === o ? s === s && !gn(s) : e(s, l)))
            var l = s, c = f;
        }
        return c;
      }
      function na(n, t, e, r) {
        var i = n.length;
        for (e = C(e), e < 0 && (e = -e > i ? 0 : i + e), r = r === o || r > i ? i : C(r), r < 0 && (r += i), r = e > r ? 0 : Vf(r); e < r; )
          n[e++] = t;
        return n;
      }
      function Pu(n, t) {
        var e = [];
        return tt(n, function(r, i, f) {
          t(r, i, f) && e.push(r);
        }), e;
      }
      function k(n, t, e, r, i) {
        var f = -1, s = n.length;
        for (e || (e = qa), i || (i = []); ++f < s; ) {
          var l = n[f];
          t > 0 && e(l) ? t > 1 ? k(l, t - 1, e, r, i) : kn(i, l) : r || (i[i.length] = l);
        }
        return i;
      }
      var Gr = of(), Du = of(!0);
      function Dn(n, t) {
        return n && Gr(n, t, Q);
      }
      function Hr(n, t) {
        return n && Du(n, t, Q);
      }
      function Fe(n, t) {
        return Vn(t, function(e) {
          return Yn(n[e]);
        });
      }
      function _t(n, t) {
        t = rt(t, n);
        for (var e = 0, r = t.length; n != null && e < r; )
          n = n[Fn(t[e++])];
        return e && e == r ? n : o;
      }
      function Mu(n, t, e) {
        var r = t(n);
        return m(n) ? r : kn(r, e(n));
      }
      function tn(n) {
        return n == null ? n === o ? Lo : Eo : at && at in U(n) ? Ma(n) : Ja(n);
      }
      function qr(n, t) {
        return n > t;
      }
      function ta(n, t) {
        return n != null && F.call(n, t);
      }
      function ea(n, t) {
        return n != null && t in U(n);
      }
      function ra(n, t, e) {
        return n >= j(t, e) && n < J(t, e);
      }
      function $r(n, t, e) {
        for (var r = e ? mr : we, i = n[0].length, f = n.length, s = f, l = h(f), c = 1 / 0, _ = []; s--; ) {
          var p = n[s];
          s && t && (p = q(p, cn(t))), c = j(p.length, c), l[s] = !e && (t || i >= 120 && p.length >= 120) ? new ht(s && p) : o;
        }
        p = n[0];
        var d = -1, v = l[0];
        n:
          for (; ++d < i && _.length < c; ) {
            var x = p[d], y = t ? t(x) : x;
            if (x = e || x !== 0 ? x : 0, !(v ? Yt(v, y) : r(_, y, e))) {
              for (s = f; --s; ) {
                var E = l[s];
                if (!(E ? Yt(E, y) : r(n[s], y, e)))
                  continue n;
              }
              v && v.push(y), _.push(x);
            }
          }
        return _;
      }
      function ia(n, t, e, r) {
        return Dn(n, function(i, f, s) {
          t(r, e(i), f, s);
        }), r;
      }
      function ne(n, t, e) {
        t = rt(t, n), n = Rf(n, t);
        var r = n == null ? n : n[Fn(In(t))];
        return r == null ? o : an(r, n, e);
      }
      function Fu(n) {
        return z(n) && tn(n) == St;
      }
      function ua(n) {
        return z(n) && tn(n) == Kt;
      }
      function fa(n) {
        return z(n) && tn(n) == Gt;
      }
      function te(n, t, e, r, i) {
        return n === t ? !0 : n == null || t == null || !z(n) && !z(t) ? n !== n && t !== t : oa(n, t, e, r, te, i);
      }
      function oa(n, t, e, r, i, f) {
        var s = m(n), l = m(t), c = s ? ce : nn(n), _ = l ? ce : nn(t);
        c = c == St ? Nn : c, _ = _ == St ? Nn : _;
        var p = c == Nn, d = _ == Nn, v = c == _;
        if (v && ut(n)) {
          if (!ut(t))
            return !1;
          s = !0, p = !1;
        }
        if (v && !p)
          return f || (f = new Tn()), s || Mt(n) ? vf(n, t, e, r, i, f) : Pa(n, t, c, e, r, i, f);
        if (!(e & xt)) {
          var x = p && F.call(n, "__wrapped__"), y = d && F.call(t, "__wrapped__");
          if (x || y) {
            var E = x ? n.value() : n, S = y ? t.value() : t;
            return f || (f = new Tn()), i(E, S, e, r, f);
          }
        }
        return v ? (f || (f = new Tn()), Da(n, t, e, r, i, f)) : !1;
      }
      function sa(n) {
        return z(n) && nn(n) == mn;
      }
      function zr(n, t, e, r) {
        var i = e.length, f = i, s = !r;
        if (n == null)
          return !f;
        for (n = U(n); i--; ) {
          var l = e[i];
          if (s && l[2] ? l[1] !== n[l[0]] : !(l[0] in n))
            return !1;
        }
        for (; ++i < f; ) {
          l = e[i];
          var c = l[0], _ = n[c], p = l[1];
          if (s && l[2]) {
            if (_ === o && !(c in n))
              return !1;
          } else {
            var d = new Tn();
            if (r)
              var v = r(_, p, c, n, t, d);
            if (!(v === o ? te(p, _, xt | le, r, d) : v))
              return !1;
          }
        }
        return !0;
      }
      function Uu(n) {
        if (!$(n) || za(n))
          return !1;
        var t = Yn(n) ? sl : ko;
        return t.test(dt(n));
      }
      function la(n) {
        return z(n) && tn(n) == qt;
      }
      function aa(n) {
        return z(n) && nn(n) == Cn;
      }
      function ca(n) {
        return z(n) && nr(n.length) && !!H[tn(n)];
      }
      function Nu(n) {
        return typeof n == "function" ? n : n == null ? ln : typeof n == "object" ? m(n) ? qu(n[0], n[1]) : Hu(n) : so(n);
      }
      function Kr(n) {
        if (!ie(n))
          return _l(n);
        var t = [];
        for (var e in U(n))
          F.call(n, e) && e != "constructor" && t.push(e);
        return t;
      }
      function ha(n) {
        if (!$(n))
          return Xa(n);
        var t = ie(n), e = [];
        for (var r in n)
          r == "constructor" && (t || !F.call(n, r)) || e.push(r);
        return e;
      }
      function Yr(n, t) {
        return n < t;
      }
      function Gu(n, t) {
        var e = -1, r = on(n) ? h(n.length) : [];
        return tt(n, function(i, f, s) {
          r[++e] = t(i, f, s);
        }), r;
      }
      function Hu(n) {
        var t = oi(n);
        return t.length == 1 && t[0][2] ? Sf(t[0][0], t[0][1]) : function(e) {
          return e === n || zr(e, n, t);
        };
      }
      function qu(n, t) {
        return li(n) && yf(t) ? Sf(Fn(n), t) : function(e) {
          var r = xi(e, n);
          return r === o && r === t ? Ai(e, n) : te(t, r, xt | le);
        };
      }
      function Ue(n, t, e, r, i) {
        n !== t && Gr(t, function(f, s) {
          if (i || (i = new Tn()), $(f))
            ga(n, t, s, e, Ue, r, i);
          else {
            var l = r ? r(ci(n, s), f, s + "", n, t, i) : o;
            l === o && (l = f), Ur(n, s, l);
          }
        }, sn);
      }
      function ga(n, t, e, r, i, f, s) {
        var l = ci(n, e), c = ci(t, e), _ = s.get(c);
        if (_) {
          Ur(n, e, _);
          return;
        }
        var p = f ? f(l, c, e + "", n, t, s) : o, d = p === o;
        if (d) {
          var v = m(c), x = !v && ut(c), y = !v && !x && Mt(c);
          p = c, v || x || y ? m(l) ? p = l : K(l) ? p = fn(l) : x ? (d = !1, p = nf(c, !0)) : y ? (d = !1, p = tf(c, !0)) : p = [] : fe(c) || vt(c) ? (p = l, vt(l) ? p = kf(l) : (!$(l) || Yn(l)) && (p = Af(c))) : d = !1;
        }
        d && (s.set(c, p), i(p, c, r, f, s), s.delete(c)), Ur(n, e, p);
      }
      function $u(n, t) {
        var e = n.length;
        if (e)
          return t += t < 0 ? e : 0, Kn(t, e) ? n[t] : o;
      }
      function zu(n, t, e) {
        t.length ? t = q(t, function(f) {
          return m(f) ? function(s) {
            return _t(s, f.length === 1 ? f[0] : f);
          } : f;
        }) : t = [ln];
        var r = -1;
        t = q(t, cn(A()));
        var i = Gu(n, function(f, s, l) {
          var c = q(t, function(_) {
            return _(f);
          });
          return { criteria: c, index: ++r, value: f };
        });
        return Gs(i, function(f, s) {
          return Ca(f, s, e);
        });
      }
      function _a(n, t) {
        return Ku(n, t, function(e, r) {
          return Ai(n, r);
        });
      }
      function Ku(n, t, e) {
        for (var r = -1, i = t.length, f = {}; ++r < i; ) {
          var s = t[r], l = _t(n, s);
          e(l, s) && ee(f, rt(s, n), l);
        }
        return f;
      }
      function pa(n) {
        return function(t) {
          return _t(t, n);
        };
      }
      function Zr(n, t, e, r) {
        var i = r ? Ns : mt, f = -1, s = t.length, l = n;
        for (n === t && (t = fn(t)), e && (l = q(n, cn(e))); ++f < s; )
          for (var c = 0, _ = t[f], p = e ? e(_) : _; (c = i(l, p, c, r)) > -1; )
            l !== n && Te.call(l, c, 1), Te.call(n, c, 1);
        return n;
      }
      function Yu(n, t) {
        for (var e = n ? t.length : 0, r = e - 1; e--; ) {
          var i = t[e];
          if (e == r || i !== f) {
            var f = i;
            Kn(i) ? Te.call(n, i, 1) : Vr(n, i);
          }
        }
        return n;
      }
      function Xr(n, t) {
        return n + be(Cu() * (t - n + 1));
      }
      function da(n, t, e, r) {
        for (var i = -1, f = J(Oe((t - n) / (e || 1)), 0), s = h(f); f--; )
          s[r ? f : ++i] = n, n += e;
        return s;
      }
      function Jr(n, t) {
        var e = "";
        if (!n || t < 1 || t > Qn)
          return e;
        do
          t % 2 && (e += n), t = be(t / 2), t && (n += n);
        while (t);
        return e;
      }
      function L(n, t) {
        return hi(If(n, t, ln), n + "");
      }
      function va(n) {
        return Lu(Ft(n));
      }
      function wa(n, t) {
        var e = Ft(n);
        return Xe(e, gt(t, 0, e.length));
      }
      function ee(n, t, e, r) {
        if (!$(n))
          return n;
        t = rt(t, n);
        for (var i = -1, f = t.length, s = f - 1, l = n; l != null && ++i < f; ) {
          var c = Fn(t[i]), _ = e;
          if (c === "__proto__" || c === "constructor" || c === "prototype")
            return n;
          if (i != s) {
            var p = l[c];
            _ = r ? r(p, c, l) : o, _ === o && (_ = $(p) ? p : Kn(t[i + 1]) ? [] : {});
          }
          kt(l, c, _), l = l[c];
        }
        return n;
      }
      var Zu = We ? function(n, t) {
        return We.set(n, t), n;
      } : ln, xa = Le ? function(n, t) {
        return Le(n, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Si(t),
          writable: !0
        });
      } : ln;
      function Aa(n) {
        return Xe(Ft(n));
      }
      function Sn(n, t, e) {
        var r = -1, i = n.length;
        t < 0 && (t = -t > i ? 0 : i + t), e = e > i ? i : e, e < 0 && (e += i), i = t > e ? 0 : e - t >>> 0, t >>>= 0;
        for (var f = h(i); ++r < i; )
          f[r] = n[r + t];
        return f;
      }
      function ya(n, t) {
        var e;
        return tt(n, function(r, i, f) {
          return e = t(r, i, f), !e;
        }), !!e;
      }
      function Ne(n, t, e) {
        var r = 0, i = n == null ? r : n.length;
        if (typeof t == "number" && t === t && i <= Io) {
          for (; r < i; ) {
            var f = r + i >>> 1, s = n[f];
            s !== null && !gn(s) && (e ? s <= t : s < t) ? r = f + 1 : i = f;
          }
          return i;
        }
        return Qr(n, t, ln, e);
      }
      function Qr(n, t, e, r) {
        var i = 0, f = n == null ? 0 : n.length;
        if (f === 0)
          return 0;
        t = e(t);
        for (var s = t !== t, l = t === null, c = gn(t), _ = t === o; i < f; ) {
          var p = be((i + f) / 2), d = e(n[p]), v = d !== o, x = d === null, y = d === d, E = gn(d);
          if (s)
            var S = r || y;
          else
            _ ? S = y && (r || v) : l ? S = y && v && (r || !x) : c ? S = y && v && !x && (r || !E) : x || E ? S = !1 : S = r ? d <= t : d < t;
          S ? i = p + 1 : f = p;
        }
        return j(f, So);
      }
      function Xu(n, t) {
        for (var e = -1, r = n.length, i = 0, f = []; ++e < r; ) {
          var s = n[e], l = t ? t(s) : s;
          if (!e || !Ln(l, c)) {
            var c = l;
            f[i++] = s === 0 ? 0 : s;
          }
        }
        return f;
      }
      function Ju(n) {
        return typeof n == "number" ? n : gn(n) ? ae : +n;
      }
      function hn(n) {
        if (typeof n == "string")
          return n;
        if (m(n))
          return q(n, hn) + "";
        if (gn(n))
          return Eu ? Eu.call(n) : "";
        var t = n + "";
        return t == "0" && 1 / n == -st ? "-0" : t;
      }
      function et(n, t, e) {
        var r = -1, i = we, f = n.length, s = !0, l = [], c = l;
        if (e)
          s = !1, i = mr;
        else if (f >= B) {
          var _ = t ? null : Wa(n);
          if (_)
            return Ae(_);
          s = !1, i = Yt, c = new ht();
        } else
          c = t ? [] : l;
        n:
          for (; ++r < f; ) {
            var p = n[r], d = t ? t(p) : p;
            if (p = e || p !== 0 ? p : 0, s && d === d) {
              for (var v = c.length; v--; )
                if (c[v] === d)
                  continue n;
              t && c.push(d), l.push(p);
            } else
              i(c, d, e) || (c !== l && c.push(d), l.push(p));
          }
        return l;
      }
      function Vr(n, t) {
        return t = rt(t, n), n = Rf(n, t), n == null || delete n[Fn(In(t))];
      }
      function Qu(n, t, e, r) {
        return ee(n, t, e(_t(n, t)), r);
      }
      function Ge(n, t, e, r) {
        for (var i = n.length, f = r ? i : -1; (r ? f-- : ++f < i) && t(n[f], f, n); )
          ;
        return e ? Sn(n, r ? 0 : f, r ? f + 1 : i) : Sn(n, r ? f + 1 : 0, r ? i : f);
      }
      function Vu(n, t) {
        var e = n;
        return e instanceof b && (e = e.value()), Cr(t, function(r, i) {
          return i.func.apply(i.thisArg, kn([r], i.args));
        }, e);
      }
      function kr(n, t, e) {
        var r = n.length;
        if (r < 2)
          return r ? et(n[0]) : [];
        for (var i = -1, f = h(r); ++i < r; )
          for (var s = n[i], l = -1; ++l < r; )
            l != i && (f[i] = jt(f[i] || s, n[l], t, e));
        return et(k(f, 1), t, e);
      }
      function ku(n, t, e) {
        for (var r = -1, i = n.length, f = t.length, s = {}; ++r < i; ) {
          var l = r < f ? t[r] : o;
          e(s, n[r], l);
        }
        return s;
      }
      function jr(n) {
        return K(n) ? n : [];
      }
      function ni(n) {
        return typeof n == "function" ? n : ln;
      }
      function rt(n, t) {
        return m(n) ? n : li(n, t) ? [n] : Tf(M(n));
      }
      var Sa = L;
      function it(n, t, e) {
        var r = n.length;
        return e = e === o ? r : e, !t && e >= r ? n : Sn(n, t, e);
      }
      var ju = ll || function(n) {
        return V.clearTimeout(n);
      };
      function nf(n, t) {
        if (t)
          return n.slice();
        var e = n.length, r = yu ? yu(e) : new n.constructor(e);
        return n.copy(r), r;
      }
      function ti(n) {
        var t = new n.constructor(n.byteLength);
        return new Ce(t).set(new Ce(n)), t;
      }
      function Ia(n, t) {
        var e = t ? ti(n.buffer) : n.buffer;
        return new n.constructor(e, n.byteOffset, n.byteLength);
      }
      function Ra(n) {
        var t = new n.constructor(n.source, Fi.exec(n));
        return t.lastIndex = n.lastIndex, t;
      }
      function ma(n) {
        return Vt ? U(Vt.call(n)) : {};
      }
      function tf(n, t) {
        var e = t ? ti(n.buffer) : n.buffer;
        return new n.constructor(e, n.byteOffset, n.length);
      }
      function ef(n, t) {
        if (n !== t) {
          var e = n !== o, r = n === null, i = n === n, f = gn(n), s = t !== o, l = t === null, c = t === t, _ = gn(t);
          if (!l && !_ && !f && n > t || f && s && c && !l && !_ || r && s && c || !e && c || !i)
            return 1;
          if (!r && !f && !_ && n < t || _ && e && i && !r && !f || l && e && i || !s && i || !c)
            return -1;
        }
        return 0;
      }
      function Ca(n, t, e) {
        for (var r = -1, i = n.criteria, f = t.criteria, s = i.length, l = e.length; ++r < s; ) {
          var c = ef(i[r], f[r]);
          if (c) {
            if (r >= l)
              return c;
            var _ = e[r];
            return c * (_ == "desc" ? -1 : 1);
          }
        }
        return n.index - t.index;
      }
      function rf(n, t, e, r) {
        for (var i = -1, f = n.length, s = e.length, l = -1, c = t.length, _ = J(f - s, 0), p = h(c + _), d = !r; ++l < c; )
          p[l] = t[l];
        for (; ++i < s; )
          (d || i < f) && (p[e[i]] = n[i]);
        for (; _--; )
          p[l++] = n[i++];
        return p;
      }
      function uf(n, t, e, r) {
        for (var i = -1, f = n.length, s = -1, l = e.length, c = -1, _ = t.length, p = J(f - l, 0), d = h(p + _), v = !r; ++i < p; )
          d[i] = n[i];
        for (var x = i; ++c < _; )
          d[x + c] = t[c];
        for (; ++s < l; )
          (v || i < f) && (d[x + e[s]] = n[i++]);
        return d;
      }
      function fn(n, t) {
        var e = -1, r = n.length;
        for (t || (t = h(r)); ++e < r; )
          t[e] = n[e];
        return t;
      }
      function Mn(n, t, e, r) {
        var i = !e;
        e || (e = {});
        for (var f = -1, s = t.length; ++f < s; ) {
          var l = t[f], c = r ? r(e[l], n[l], l, e, n) : o;
          c === o && (c = n[l]), i ? qn(e, l, c) : kt(e, l, c);
        }
        return e;
      }
      function Ea(n, t) {
        return Mn(n, si(n), t);
      }
      function Ta(n, t) {
        return Mn(n, wf(n), t);
      }
      function He(n, t) {
        return function(e, r) {
          var i = m(e) ? Bs : Ql, f = t ? t() : {};
          return i(e, n, A(r, 2), f);
        };
      }
      function Bt(n) {
        return L(function(t, e) {
          var r = -1, i = e.length, f = i > 1 ? e[i - 1] : o, s = i > 2 ? e[2] : o;
          for (f = n.length > 3 && typeof f == "function" ? (i--, f) : o, s && en(e[0], e[1], s) && (f = i < 3 ? o : f, i = 1), t = U(t); ++r < i; ) {
            var l = e[r];
            l && n(t, l, r, f);
          }
          return t;
        });
      }
      function ff(n, t) {
        return function(e, r) {
          if (e == null)
            return e;
          if (!on(e))
            return n(e, r);
          for (var i = e.length, f = t ? i : -1, s = U(e); (t ? f-- : ++f < i) && r(s[f], f, s) !== !1; )
            ;
          return e;
        };
      }
      function of(n) {
        return function(t, e, r) {
          for (var i = -1, f = U(t), s = r(t), l = s.length; l--; ) {
            var c = s[n ? l : ++i];
            if (e(f[c], c, f) === !1)
              break;
          }
          return t;
        };
      }
      function La(n, t, e) {
        var r = t & dn, i = re(n);
        function f() {
          var s = this && this !== V && this instanceof f ? i : n;
          return s.apply(r ? e : this, arguments);
        }
        return f;
      }
      function sf(n) {
        return function(t) {
          t = M(t);
          var e = Ct(t) ? En(t) : o, r = e ? e[0] : t.charAt(0), i = e ? it(e, 1).join("") : t.slice(1);
          return r[n]() + i;
        };
      }
      function Pt(n) {
        return function(t) {
          return Cr(fo(uo(t).replace(xs, "")), n, "");
        };
      }
      function re(n) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new n();
            case 1:
              return new n(t[0]);
            case 2:
              return new n(t[0], t[1]);
            case 3:
              return new n(t[0], t[1], t[2]);
            case 4:
              return new n(t[0], t[1], t[2], t[3]);
            case 5:
              return new n(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new n(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var e = Wt(n.prototype), r = n.apply(e, t);
          return $(r) ? r : e;
        };
      }
      function Oa(n, t, e) {
        var r = re(n);
        function i() {
          for (var f = arguments.length, s = h(f), l = f, c = Dt(i); l--; )
            s[l] = arguments[l];
          var _ = f < 3 && s[0] !== c && s[f - 1] !== c ? [] : jn(s, c);
          if (f -= _.length, f < e)
            return gf(
              n,
              t,
              qe,
              i.placeholder,
              o,
              s,
              _,
              o,
              o,
              e - f
            );
          var p = this && this !== V && this instanceof i ? r : n;
          return an(p, this, s);
        }
        return i;
      }
      function lf(n) {
        return function(t, e, r) {
          var i = U(t);
          if (!on(t)) {
            var f = A(e, 3);
            t = Q(t), e = function(l) {
              return f(i[l], l, i);
            };
          }
          var s = n(t, e, r);
          return s > -1 ? i[f ? t[s] : s] : o;
        };
      }
      function af(n) {
        return zn(function(t) {
          var e = t.length, r = e, i = An.prototype.thru;
          for (n && t.reverse(); r--; ) {
            var f = t[r];
            if (typeof f != "function")
              throw new xn(P);
            if (i && !s && Ye(f) == "wrapper")
              var s = new An([], !0);
          }
          for (r = s ? r : e; ++r < e; ) {
            f = t[r];
            var l = Ye(f), c = l == "wrapper" ? fi(f) : o;
            c && ai(c[0]) && c[1] == (Un | Wn | Bn | Ut) && !c[4].length && c[9] == 1 ? s = s[Ye(c[0])].apply(s, c[3]) : s = f.length == 1 && ai(f) ? s[l]() : s.thru(f);
          }
          return function() {
            var _ = arguments, p = _[0];
            if (s && _.length == 1 && m(p))
              return s.plant(p).value();
            for (var d = 0, v = e ? t[d].apply(this, _) : p; ++d < e; )
              v = t[d].call(this, v);
            return v;
          };
        });
      }
      function qe(n, t, e, r, i, f, s, l, c, _) {
        var p = t & Un, d = t & dn, v = t & ot, x = t & (Wn | At), y = t & fr, E = v ? o : re(n);
        function S() {
          for (var O = arguments.length, W = h(O), _n = O; _n--; )
            W[_n] = arguments[_n];
          if (x)
            var rn = Dt(S), pn = qs(W, rn);
          if (r && (W = rf(W, r, i, x)), f && (W = uf(W, f, s, x)), O -= pn, x && O < _) {
            var Y = jn(W, rn);
            return gf(
              n,
              t,
              qe,
              S.placeholder,
              e,
              W,
              Y,
              l,
              c,
              _ - O
            );
          }
          var On = d ? e : this, Xn = v ? On[n] : n;
          return O = W.length, l ? W = Qa(W, l) : y && O > 1 && W.reverse(), p && c < O && (W.length = c), this && this !== V && this instanceof S && (Xn = E || re(Xn)), Xn.apply(On, W);
        }
        return S;
      }
      function cf(n, t) {
        return function(e, r) {
          return ia(e, n, t(r), {});
        };
      }
      function $e(n, t) {
        return function(e, r) {
          var i;
          if (e === o && r === o)
            return t;
          if (e !== o && (i = e), r !== o) {
            if (i === o)
              return r;
            typeof e == "string" || typeof r == "string" ? (e = hn(e), r = hn(r)) : (e = Ju(e), r = Ju(r)), i = n(e, r);
          }
          return i;
        };
      }
      function ei(n) {
        return zn(function(t) {
          return t = q(t, cn(A())), L(function(e) {
            var r = this;
            return n(t, function(i) {
              return an(i, r, e);
            });
          });
        });
      }
      function ze(n, t) {
        t = t === o ? " " : hn(t);
        var e = t.length;
        if (e < 2)
          return e ? Jr(t, n) : t;
        var r = Jr(t, Oe(n / Et(t)));
        return Ct(t) ? it(En(r), 0, n).join("") : r.slice(0, n);
      }
      function ba(n, t, e, r) {
        var i = t & dn, f = re(n);
        function s() {
          for (var l = -1, c = arguments.length, _ = -1, p = r.length, d = h(p + c), v = this && this !== V && this instanceof s ? f : n; ++_ < p; )
            d[_] = r[_];
          for (; c--; )
            d[_++] = arguments[++l];
          return an(v, i ? e : this, d);
        }
        return s;
      }
      function hf(n) {
        return function(t, e, r) {
          return r && typeof r != "number" && en(t, e, r) && (e = r = o), t = Zn(t), e === o ? (e = t, t = 0) : e = Zn(e), r = r === o ? t < e ? 1 : -1 : Zn(r), da(t, e, r, n);
        };
      }
      function Ke(n) {
        return function(t, e) {
          return typeof t == "string" && typeof e == "string" || (t = Rn(t), e = Rn(e)), n(t, e);
        };
      }
      function gf(n, t, e, r, i, f, s, l, c, _) {
        var p = t & Wn, d = p ? s : o, v = p ? o : s, x = p ? f : o, y = p ? o : f;
        t |= p ? Bn : yt, t &= ~(p ? yt : Bn), t & Oi || (t &= ~(dn | ot));
        var E = [
          n,
          t,
          i,
          x,
          d,
          y,
          v,
          l,
          c,
          _
        ], S = e.apply(o, E);
        return ai(n) && mf(S, E), S.placeholder = r, Cf(S, n, t);
      }
      function ri(n) {
        var t = X[n];
        return function(e, r) {
          if (e = Rn(e), r = r == null ? 0 : j(C(r), 292), r && mu(e)) {
            var i = (M(e) + "e").split("e"), f = t(i[0] + "e" + (+i[1] + r));
            return i = (M(f) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
          }
          return t(e);
        };
      }
      var Wa = Ot && 1 / Ae(new Ot([, -0]))[1] == st ? function(n) {
        return new Ot(n);
      } : mi;
      function _f(n) {
        return function(t) {
          var e = nn(t);
          return e == mn ? Br(t) : e == Cn ? Js(t) : Hs(t, n(t));
        };
      }
      function $n(n, t, e, r, i, f, s, l) {
        var c = t & ot;
        if (!c && typeof n != "function")
          throw new xn(P);
        var _ = r ? r.length : 0;
        if (_ || (t &= ~(Bn | yt), r = i = o), s = s === o ? s : J(C(s), 0), l = l === o ? l : C(l), _ -= i ? i.length : 0, t & yt) {
          var p = r, d = i;
          r = i = o;
        }
        var v = c ? o : fi(n), x = [
          n,
          t,
          e,
          r,
          i,
          p,
          d,
          f,
          s,
          l
        ];
        if (v && Za(x, v), n = x[0], t = x[1], e = x[2], r = x[3], i = x[4], l = x[9] = x[9] === o ? c ? 0 : n.length : J(x[9] - _, 0), !l && t & (Wn | At) && (t &= ~(Wn | At)), !t || t == dn)
          var y = La(n, t, e);
        else
          t == Wn || t == At ? y = Oa(n, t, l) : (t == Bn || t == (dn | Bn)) && !i.length ? y = ba(n, t, e, r) : y = qe.apply(o, x);
        var E = v ? Zu : mf;
        return Cf(E(y, x), n, t);
      }
      function pf(n, t, e, r) {
        return n === o || Ln(n, Lt[e]) && !F.call(r, e) ? t : n;
      }
      function df(n, t, e, r, i, f) {
        return $(n) && $(t) && (f.set(t, n), Ue(n, t, o, df, f), f.delete(t)), n;
      }
      function Ba(n) {
        return fe(n) ? o : n;
      }
      function vf(n, t, e, r, i, f) {
        var s = e & xt, l = n.length, c = t.length;
        if (l != c && !(s && c > l))
          return !1;
        var _ = f.get(n), p = f.get(t);
        if (_ && p)
          return _ == t && p == n;
        var d = -1, v = !0, x = e & le ? new ht() : o;
        for (f.set(n, t), f.set(t, n); ++d < l; ) {
          var y = n[d], E = t[d];
          if (r)
            var S = s ? r(E, y, d, t, n, f) : r(y, E, d, n, t, f);
          if (S !== o) {
            if (S)
              continue;
            v = !1;
            break;
          }
          if (x) {
            if (!Er(t, function(O, W) {
              if (!Yt(x, W) && (y === O || i(y, O, e, r, f)))
                return x.push(W);
            })) {
              v = !1;
              break;
            }
          } else if (!(y === E || i(y, E, e, r, f))) {
            v = !1;
            break;
          }
        }
        return f.delete(n), f.delete(t), v;
      }
      function Pa(n, t, e, r, i, f, s) {
        switch (e) {
          case It:
            if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset)
              return !1;
            n = n.buffer, t = t.buffer;
          case Kt:
            return !(n.byteLength != t.byteLength || !f(new Ce(n), new Ce(t)));
          case Nt:
          case Gt:
          case Ht:
            return Ln(+n, +t);
          case he:
            return n.name == t.name && n.message == t.message;
          case qt:
          case $t:
            return n == t + "";
          case mn:
            var l = Br;
          case Cn:
            var c = r & xt;
            if (l || (l = Ae), n.size != t.size && !c)
              return !1;
            var _ = s.get(n);
            if (_)
              return _ == t;
            r |= le, s.set(n, t);
            var p = vf(l(n), l(t), r, i, f, s);
            return s.delete(n), p;
          case _e:
            if (Vt)
              return Vt.call(n) == Vt.call(t);
        }
        return !1;
      }
      function Da(n, t, e, r, i, f) {
        var s = e & xt, l = ii(n), c = l.length, _ = ii(t), p = _.length;
        if (c != p && !s)
          return !1;
        for (var d = c; d--; ) {
          var v = l[d];
          if (!(s ? v in t : F.call(t, v)))
            return !1;
        }
        var x = f.get(n), y = f.get(t);
        if (x && y)
          return x == t && y == n;
        var E = !0;
        f.set(n, t), f.set(t, n);
        for (var S = s; ++d < c; ) {
          v = l[d];
          var O = n[v], W = t[v];
          if (r)
            var _n = s ? r(W, O, v, t, n, f) : r(O, W, v, n, t, f);
          if (!(_n === o ? O === W || i(O, W, e, r, f) : _n)) {
            E = !1;
            break;
          }
          S || (S = v == "constructor");
        }
        if (E && !S) {
          var rn = n.constructor, pn = t.constructor;
          rn != pn && "constructor" in n && "constructor" in t && !(typeof rn == "function" && rn instanceof rn && typeof pn == "function" && pn instanceof pn) && (E = !1);
        }
        return f.delete(n), f.delete(t), E;
      }
      function zn(n) {
        return hi(If(n, o, Wf), n + "");
      }
      function ii(n) {
        return Mu(n, Q, si);
      }
      function ui(n) {
        return Mu(n, sn, wf);
      }
      var fi = We ? function(n) {
        return We.get(n);
      } : mi;
      function Ye(n) {
        for (var t = n.name + "", e = bt[t], r = F.call(bt, t) ? e.length : 0; r--; ) {
          var i = e[r], f = i.func;
          if (f == null || f == n)
            return i.name;
        }
        return t;
      }
      function Dt(n) {
        var t = F.call(u, "placeholder") ? u : n;
        return t.placeholder;
      }
      function A() {
        var n = u.iteratee || Ii;
        return n = n === Ii ? Nu : n, arguments.length ? n(arguments[0], arguments[1]) : n;
      }
      function Ze(n, t) {
        var e = n.__data__;
        return $a(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
      }
      function oi(n) {
        for (var t = Q(n), e = t.length; e--; ) {
          var r = t[e], i = n[r];
          t[e] = [r, i, yf(i)];
        }
        return t;
      }
      function pt(n, t) {
        var e = Ys(n, t);
        return Uu(e) ? e : o;
      }
      function Ma(n) {
        var t = F.call(n, at), e = n[at];
        try {
          n[at] = o;
          var r = !0;
        } catch {
        }
        var i = Re.call(n);
        return r && (t ? n[at] = e : delete n[at]), i;
      }
      var si = Dr ? function(n) {
        return n == null ? [] : (n = U(n), Vn(Dr(n), function(t) {
          return Iu.call(n, t);
        }));
      } : Ci, wf = Dr ? function(n) {
        for (var t = []; n; )
          kn(t, si(n)), n = Ee(n);
        return t;
      } : Ci, nn = tn;
      (Mr && nn(new Mr(new ArrayBuffer(1))) != It || Xt && nn(new Xt()) != mn || Fr && nn(Fr.resolve()) != Bi || Ot && nn(new Ot()) != Cn || Jt && nn(new Jt()) != zt) && (nn = function(n) {
        var t = tn(n), e = t == Nn ? n.constructor : o, r = e ? dt(e) : "";
        if (r)
          switch (r) {
            case wl:
              return It;
            case xl:
              return mn;
            case Al:
              return Bi;
            case yl:
              return Cn;
            case Sl:
              return zt;
          }
        return t;
      });
      function Fa(n, t, e) {
        for (var r = -1, i = e.length; ++r < i; ) {
          var f = e[r], s = f.size;
          switch (f.type) {
            case "drop":
              n += s;
              break;
            case "dropRight":
              t -= s;
              break;
            case "take":
              t = j(t, n + s);
              break;
            case "takeRight":
              n = J(n, t - s);
              break;
          }
        }
        return { start: n, end: t };
      }
      function Ua(n) {
        var t = n.match(zo);
        return t ? t[1].split(Ko) : [];
      }
      function xf(n, t, e) {
        t = rt(t, n);
        for (var r = -1, i = t.length, f = !1; ++r < i; ) {
          var s = Fn(t[r]);
          if (!(f = n != null && e(n, s)))
            break;
          n = n[s];
        }
        return f || ++r != i ? f : (i = n == null ? 0 : n.length, !!i && nr(i) && Kn(s, i) && (m(n) || vt(n)));
      }
      function Na(n) {
        var t = n.length, e = new n.constructor(t);
        return t && typeof n[0] == "string" && F.call(n, "index") && (e.index = n.index, e.input = n.input), e;
      }
      function Af(n) {
        return typeof n.constructor == "function" && !ie(n) ? Wt(Ee(n)) : {};
      }
      function Ga(n, t, e) {
        var r = n.constructor;
        switch (t) {
          case Kt:
            return ti(n);
          case Nt:
          case Gt:
            return new r(+n);
          case It:
            return Ia(n, e);
          case or:
          case sr:
          case lr:
          case ar:
          case cr:
          case hr:
          case gr:
          case _r:
          case pr:
            return tf(n, e);
          case mn:
            return new r();
          case Ht:
          case $t:
            return new r(n);
          case qt:
            return Ra(n);
          case Cn:
            return new r();
          case _e:
            return ma(n);
        }
      }
      function Ha(n, t) {
        var e = t.length;
        if (!e)
          return n;
        var r = e - 1;
        return t[r] = (e > 1 ? "& " : "") + t[r], t = t.join(e > 2 ? ", " : " "), n.replace($o, `{
/* [wrapped with ` + t + `] */
`);
      }
      function qa(n) {
        return m(n) || vt(n) || !!(Ru && n && n[Ru]);
      }
      function Kn(n, t) {
        var e = typeof n;
        return t = t ?? Qn, !!t && (e == "number" || e != "symbol" && ns.test(n)) && n > -1 && n % 1 == 0 && n < t;
      }
      function en(n, t, e) {
        if (!$(e))
          return !1;
        var r = typeof t;
        return (r == "number" ? on(e) && Kn(t, e.length) : r == "string" && t in e) ? Ln(e[t], n) : !1;
      }
      function li(n, t) {
        if (m(n))
          return !1;
        var e = typeof n;
        return e == "number" || e == "symbol" || e == "boolean" || n == null || gn(n) ? !0 : No.test(n) || !Uo.test(n) || t != null && n in U(t);
      }
      function $a(n) {
        var t = typeof n;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n !== "__proto__" : n === null;
      }
      function ai(n) {
        var t = Ye(n), e = u[t];
        if (typeof e != "function" || !(t in b.prototype))
          return !1;
        if (n === e)
          return !0;
        var r = fi(e);
        return !!r && n === r[0];
      }
      function za(n) {
        return !!Au && Au in n;
      }
      var Ka = Se ? Yn : Ei;
      function ie(n) {
        var t = n && n.constructor, e = typeof t == "function" && t.prototype || Lt;
        return n === e;
      }
      function yf(n) {
        return n === n && !$(n);
      }
      function Sf(n, t) {
        return function(e) {
          return e == null ? !1 : e[n] === t && (t !== o || n in U(e));
        };
      }
      function Ya(n) {
        var t = ke(n, function(r) {
          return e.size === ur && e.clear(), r;
        }), e = t.cache;
        return t;
      }
      function Za(n, t) {
        var e = n[1], r = t[1], i = e | r, f = i < (dn | ot | Un), s = r == Un && e == Wn || r == Un && e == Ut && n[7].length <= t[8] || r == (Un | Ut) && t[7].length <= t[8] && e == Wn;
        if (!(f || s))
          return n;
        r & dn && (n[2] = t[2], i |= e & dn ? 0 : Oi);
        var l = t[3];
        if (l) {
          var c = n[3];
          n[3] = c ? rf(c, l, t[4]) : l, n[4] = c ? jn(n[3], ft) : t[4];
        }
        return l = t[5], l && (c = n[5], n[5] = c ? uf(c, l, t[6]) : l, n[6] = c ? jn(n[5], ft) : t[6]), l = t[7], l && (n[7] = l), r & Un && (n[8] = n[8] == null ? t[8] : j(n[8], t[8])), n[9] == null && (n[9] = t[9]), n[0] = t[0], n[1] = i, n;
      }
      function Xa(n) {
        var t = [];
        if (n != null)
          for (var e in U(n))
            t.push(e);
        return t;
      }
      function Ja(n) {
        return Re.call(n);
      }
      function If(n, t, e) {
        return t = J(t === o ? n.length - 1 : t, 0), function() {
          for (var r = arguments, i = -1, f = J(r.length - t, 0), s = h(f); ++i < f; )
            s[i] = r[t + i];
          i = -1;
          for (var l = h(t + 1); ++i < t; )
            l[i] = r[i];
          return l[t] = e(s), an(n, this, l);
        };
      }
      function Rf(n, t) {
        return t.length < 2 ? n : _t(n, Sn(t, 0, -1));
      }
      function Qa(n, t) {
        for (var e = n.length, r = j(t.length, e), i = fn(n); r--; ) {
          var f = t[r];
          n[r] = Kn(f, e) ? i[f] : o;
        }
        return n;
      }
      function ci(n, t) {
        if (!(t === "constructor" && typeof n[t] == "function") && t != "__proto__")
          return n[t];
      }
      var mf = Ef(Zu), ue = cl || function(n, t) {
        return V.setTimeout(n, t);
      }, hi = Ef(xa);
      function Cf(n, t, e) {
        var r = t + "";
        return hi(n, Ha(r, Va(Ua(r), e)));
      }
      function Ef(n) {
        var t = 0, e = 0;
        return function() {
          var r = pl(), i = wo - (r - e);
          if (e = r, i > 0) {
            if (++t >= vo)
              return arguments[0];
          } else
            t = 0;
          return n.apply(o, arguments);
        };
      }
      function Xe(n, t) {
        var e = -1, r = n.length, i = r - 1;
        for (t = t === o ? r : t; ++e < t; ) {
          var f = Xr(e, i), s = n[f];
          n[f] = n[e], n[e] = s;
        }
        return n.length = t, n;
      }
      var Tf = Ya(function(n) {
        var t = [];
        return n.charCodeAt(0) === 46 && t.push(""), n.replace(Go, function(e, r, i, f) {
          t.push(i ? f.replace(Xo, "$1") : r || e);
        }), t;
      });
      function Fn(n) {
        if (typeof n == "string" || gn(n))
          return n;
        var t = n + "";
        return t == "0" && 1 / n == -st ? "-0" : t;
      }
      function dt(n) {
        if (n != null) {
          try {
            return Ie.call(n);
          } catch {
          }
          try {
            return n + "";
          } catch {
          }
        }
        return "";
      }
      function Va(n, t) {
        return wn(Ro, function(e) {
          var r = "_." + e[0];
          t & e[1] && !we(n, r) && n.push(r);
        }), n.sort();
      }
      function Lf(n) {
        if (n instanceof b)
          return n.clone();
        var t = new An(n.__wrapped__, n.__chain__);
        return t.__actions__ = fn(n.__actions__), t.__index__ = n.__index__, t.__values__ = n.__values__, t;
      }
      function ka(n, t, e) {
        (e ? en(n, t, e) : t === o) ? t = 1 : t = J(C(t), 0);
        var r = n == null ? 0 : n.length;
        if (!r || t < 1)
          return [];
        for (var i = 0, f = 0, s = h(Oe(r / t)); i < r; )
          s[f++] = Sn(n, i, i += t);
        return s;
      }
      function ja(n) {
        for (var t = -1, e = n == null ? 0 : n.length, r = 0, i = []; ++t < e; ) {
          var f = n[t];
          f && (i[r++] = f);
        }
        return i;
      }
      function nc() {
        var n = arguments.length;
        if (!n)
          return [];
        for (var t = h(n - 1), e = arguments[0], r = n; r--; )
          t[r - 1] = arguments[r];
        return kn(m(e) ? fn(e) : [e], k(t, 1));
      }
      var tc = L(function(n, t) {
        return K(n) ? jt(n, k(t, 1, K, !0)) : [];
      }), ec = L(function(n, t) {
        var e = In(t);
        return K(e) && (e = o), K(n) ? jt(n, k(t, 1, K, !0), A(e, 2)) : [];
      }), rc = L(function(n, t) {
        var e = In(t);
        return K(e) && (e = o), K(n) ? jt(n, k(t, 1, K, !0), o, e) : [];
      });
      function ic(n, t, e) {
        var r = n == null ? 0 : n.length;
        return r ? (t = e || t === o ? 1 : C(t), Sn(n, t < 0 ? 0 : t, r)) : [];
      }
      function uc(n, t, e) {
        var r = n == null ? 0 : n.length;
        return r ? (t = e || t === o ? 1 : C(t), t = r - t, Sn(n, 0, t < 0 ? 0 : t)) : [];
      }
      function fc(n, t) {
        return n && n.length ? Ge(n, A(t, 3), !0, !0) : [];
      }
      function oc(n, t) {
        return n && n.length ? Ge(n, A(t, 3), !0) : [];
      }
      function sc(n, t, e, r) {
        var i = n == null ? 0 : n.length;
        return i ? (e && typeof e != "number" && en(n, t, e) && (e = 0, r = i), na(n, t, e, r)) : [];
      }
      function Of(n, t, e) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = e == null ? 0 : C(e);
        return i < 0 && (i = J(r + i, 0)), xe(n, A(t, 3), i);
      }
      function bf(n, t, e) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = r - 1;
        return e !== o && (i = C(e), i = e < 0 ? J(r + i, 0) : j(i, r - 1)), xe(n, A(t, 3), i, !0);
      }
      function Wf(n) {
        var t = n == null ? 0 : n.length;
        return t ? k(n, 1) : [];
      }
      function lc(n) {
        var t = n == null ? 0 : n.length;
        return t ? k(n, st) : [];
      }
      function ac(n, t) {
        var e = n == null ? 0 : n.length;
        return e ? (t = t === o ? 1 : C(t), k(n, t)) : [];
      }
      function cc(n) {
        for (var t = -1, e = n == null ? 0 : n.length, r = {}; ++t < e; ) {
          var i = n[t];
          r[i[0]] = i[1];
        }
        return r;
      }
      function Bf(n) {
        return n && n.length ? n[0] : o;
      }
      function hc(n, t, e) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = e == null ? 0 : C(e);
        return i < 0 && (i = J(r + i, 0)), mt(n, t, i);
      }
      function gc(n) {
        var t = n == null ? 0 : n.length;
        return t ? Sn(n, 0, -1) : [];
      }
      var _c = L(function(n) {
        var t = q(n, jr);
        return t.length && t[0] === n[0] ? $r(t) : [];
      }), pc = L(function(n) {
        var t = In(n), e = q(n, jr);
        return t === In(e) ? t = o : e.pop(), e.length && e[0] === n[0] ? $r(e, A(t, 2)) : [];
      }), dc = L(function(n) {
        var t = In(n), e = q(n, jr);
        return t = typeof t == "function" ? t : o, t && e.pop(), e.length && e[0] === n[0] ? $r(e, o, t) : [];
      });
      function vc(n, t) {
        return n == null ? "" : gl.call(n, t);
      }
      function In(n) {
        var t = n == null ? 0 : n.length;
        return t ? n[t - 1] : o;
      }
      function wc(n, t, e) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = r;
        return e !== o && (i = C(e), i = i < 0 ? J(r + i, 0) : j(i, r - 1)), t === t ? Vs(n, t, i) : xe(n, hu, i, !0);
      }
      function xc(n, t) {
        return n && n.length ? $u(n, C(t)) : o;
      }
      var Ac = L(Pf);
      function Pf(n, t) {
        return n && n.length && t && t.length ? Zr(n, t) : n;
      }
      function yc(n, t, e) {
        return n && n.length && t && t.length ? Zr(n, t, A(e, 2)) : n;
      }
      function Sc(n, t, e) {
        return n && n.length && t && t.length ? Zr(n, t, o, e) : n;
      }
      var Ic = zn(function(n, t) {
        var e = n == null ? 0 : n.length, r = Nr(n, t);
        return Yu(n, q(t, function(i) {
          return Kn(i, e) ? +i : i;
        }).sort(ef)), r;
      });
      function Rc(n, t) {
        var e = [];
        if (!(n && n.length))
          return e;
        var r = -1, i = [], f = n.length;
        for (t = A(t, 3); ++r < f; ) {
          var s = n[r];
          t(s, r, n) && (e.push(s), i.push(r));
        }
        return Yu(n, i), e;
      }
      function gi(n) {
        return n == null ? n : vl.call(n);
      }
      function mc(n, t, e) {
        var r = n == null ? 0 : n.length;
        return r ? (e && typeof e != "number" && en(n, t, e) ? (t = 0, e = r) : (t = t == null ? 0 : C(t), e = e === o ? r : C(e)), Sn(n, t, e)) : [];
      }
      function Cc(n, t) {
        return Ne(n, t);
      }
      function Ec(n, t, e) {
        return Qr(n, t, A(e, 2));
      }
      function Tc(n, t) {
        var e = n == null ? 0 : n.length;
        if (e) {
          var r = Ne(n, t);
          if (r < e && Ln(n[r], t))
            return r;
        }
        return -1;
      }
      function Lc(n, t) {
        return Ne(n, t, !0);
      }
      function Oc(n, t, e) {
        return Qr(n, t, A(e, 2), !0);
      }
      function bc(n, t) {
        var e = n == null ? 0 : n.length;
        if (e) {
          var r = Ne(n, t, !0) - 1;
          if (Ln(n[r], t))
            return r;
        }
        return -1;
      }
      function Wc(n) {
        return n && n.length ? Xu(n) : [];
      }
      function Bc(n, t) {
        return n && n.length ? Xu(n, A(t, 2)) : [];
      }
      function Pc(n) {
        var t = n == null ? 0 : n.length;
        return t ? Sn(n, 1, t) : [];
      }
      function Dc(n, t, e) {
        return n && n.length ? (t = e || t === o ? 1 : C(t), Sn(n, 0, t < 0 ? 0 : t)) : [];
      }
      function Mc(n, t, e) {
        var r = n == null ? 0 : n.length;
        return r ? (t = e || t === o ? 1 : C(t), t = r - t, Sn(n, t < 0 ? 0 : t, r)) : [];
      }
      function Fc(n, t) {
        return n && n.length ? Ge(n, A(t, 3), !1, !0) : [];
      }
      function Uc(n, t) {
        return n && n.length ? Ge(n, A(t, 3)) : [];
      }
      var Nc = L(function(n) {
        return et(k(n, 1, K, !0));
      }), Gc = L(function(n) {
        var t = In(n);
        return K(t) && (t = o), et(k(n, 1, K, !0), A(t, 2));
      }), Hc = L(function(n) {
        var t = In(n);
        return t = typeof t == "function" ? t : o, et(k(n, 1, K, !0), o, t);
      });
      function qc(n) {
        return n && n.length ? et(n) : [];
      }
      function $c(n, t) {
        return n && n.length ? et(n, A(t, 2)) : [];
      }
      function zc(n, t) {
        return t = typeof t == "function" ? t : o, n && n.length ? et(n, o, t) : [];
      }
      function _i(n) {
        if (!(n && n.length))
          return [];
        var t = 0;
        return n = Vn(n, function(e) {
          if (K(e))
            return t = J(e.length, t), !0;
        }), br(t, function(e) {
          return q(n, Tr(e));
        });
      }
      function Df(n, t) {
        if (!(n && n.length))
          return [];
        var e = _i(n);
        return t == null ? e : q(e, function(r) {
          return an(t, o, r);
        });
      }
      var Kc = L(function(n, t) {
        return K(n) ? jt(n, t) : [];
      }), Yc = L(function(n) {
        return kr(Vn(n, K));
      }), Zc = L(function(n) {
        var t = In(n);
        return K(t) && (t = o), kr(Vn(n, K), A(t, 2));
      }), Xc = L(function(n) {
        var t = In(n);
        return t = typeof t == "function" ? t : o, kr(Vn(n, K), o, t);
      }), Jc = L(_i);
      function Qc(n, t) {
        return ku(n || [], t || [], kt);
      }
      function Vc(n, t) {
        return ku(n || [], t || [], ee);
      }
      var kc = L(function(n) {
        var t = n.length, e = t > 1 ? n[t - 1] : o;
        return e = typeof e == "function" ? (n.pop(), e) : o, Df(n, e);
      });
      function Mf(n) {
        var t = u(n);
        return t.__chain__ = !0, t;
      }
      function jc(n, t) {
        return t(n), n;
      }
      function Je(n, t) {
        return t(n);
      }
      var nh = zn(function(n) {
        var t = n.length, e = t ? n[0] : 0, r = this.__wrapped__, i = function(f) {
          return Nr(f, n);
        };
        return t > 1 || this.__actions__.length || !(r instanceof b) || !Kn(e) ? this.thru(i) : (r = r.slice(e, +e + (t ? 1 : 0)), r.__actions__.push({
          func: Je,
          args: [i],
          thisArg: o
        }), new An(r, this.__chain__).thru(function(f) {
          return t && !f.length && f.push(o), f;
        }));
      });
      function th() {
        return Mf(this);
      }
      function eh() {
        return new An(this.value(), this.__chain__);
      }
      function rh() {
        this.__values__ === o && (this.__values__ = Qf(this.value()));
        var n = this.__index__ >= this.__values__.length, t = n ? o : this.__values__[this.__index__++];
        return { done: n, value: t };
      }
      function ih() {
        return this;
      }
      function uh(n) {
        for (var t, e = this; e instanceof Pe; ) {
          var r = Lf(e);
          r.__index__ = 0, r.__values__ = o, t ? i.__wrapped__ = r : t = r;
          var i = r;
          e = e.__wrapped__;
        }
        return i.__wrapped__ = n, t;
      }
      function fh() {
        var n = this.__wrapped__;
        if (n instanceof b) {
          var t = n;
          return this.__actions__.length && (t = new b(this)), t = t.reverse(), t.__actions__.push({
            func: Je,
            args: [gi],
            thisArg: o
          }), new An(t, this.__chain__);
        }
        return this.thru(gi);
      }
      function oh() {
        return Vu(this.__wrapped__, this.__actions__);
      }
      var sh = He(function(n, t, e) {
        F.call(n, e) ? ++n[e] : qn(n, e, 1);
      });
      function lh(n, t, e) {
        var r = m(n) ? au : jl;
        return e && en(n, t, e) && (t = o), r(n, A(t, 3));
      }
      function ah(n, t) {
        var e = m(n) ? Vn : Pu;
        return e(n, A(t, 3));
      }
      var ch = lf(Of), hh = lf(bf);
      function gh(n, t) {
        return k(Qe(n, t), 1);
      }
      function _h(n, t) {
        return k(Qe(n, t), st);
      }
      function ph(n, t, e) {
        return e = e === o ? 1 : C(e), k(Qe(n, t), e);
      }
      function Ff(n, t) {
        var e = m(n) ? wn : tt;
        return e(n, A(t, 3));
      }
      function Uf(n, t) {
        var e = m(n) ? Ps : Bu;
        return e(n, A(t, 3));
      }
      var dh = He(function(n, t, e) {
        F.call(n, e) ? n[e].push(t) : qn(n, e, [t]);
      });
      function vh(n, t, e, r) {
        n = on(n) ? n : Ft(n), e = e && !r ? C(e) : 0;
        var i = n.length;
        return e < 0 && (e = J(i + e, 0)), tr(n) ? e <= i && n.indexOf(t, e) > -1 : !!i && mt(n, t, e) > -1;
      }
      var wh = L(function(n, t, e) {
        var r = -1, i = typeof t == "function", f = on(n) ? h(n.length) : [];
        return tt(n, function(s) {
          f[++r] = i ? an(t, s, e) : ne(s, t, e);
        }), f;
      }), xh = He(function(n, t, e) {
        qn(n, e, t);
      });
      function Qe(n, t) {
        var e = m(n) ? q : Gu;
        return e(n, A(t, 3));
      }
      function Ah(n, t, e, r) {
        return n == null ? [] : (m(t) || (t = t == null ? [] : [t]), e = r ? o : e, m(e) || (e = e == null ? [] : [e]), zu(n, t, e));
      }
      var yh = He(function(n, t, e) {
        n[e ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function Sh(n, t, e) {
        var r = m(n) ? Cr : _u, i = arguments.length < 3;
        return r(n, A(t, 4), e, i, tt);
      }
      function Ih(n, t, e) {
        var r = m(n) ? Ds : _u, i = arguments.length < 3;
        return r(n, A(t, 4), e, i, Bu);
      }
      function Rh(n, t) {
        var e = m(n) ? Vn : Pu;
        return e(n, je(A(t, 3)));
      }
      function mh(n) {
        var t = m(n) ? Lu : va;
        return t(n);
      }
      function Ch(n, t, e) {
        (e ? en(n, t, e) : t === o) ? t = 1 : t = C(t);
        var r = m(n) ? Xl : wa;
        return r(n, t);
      }
      function Eh(n) {
        var t = m(n) ? Jl : Aa;
        return t(n);
      }
      function Th(n) {
        if (n == null)
          return 0;
        if (on(n))
          return tr(n) ? Et(n) : n.length;
        var t = nn(n);
        return t == mn || t == Cn ? n.size : Kr(n).length;
      }
      function Lh(n, t, e) {
        var r = m(n) ? Er : ya;
        return e && en(n, t, e) && (t = o), r(n, A(t, 3));
      }
      var Oh = L(function(n, t) {
        if (n == null)
          return [];
        var e = t.length;
        return e > 1 && en(n, t[0], t[1]) ? t = [] : e > 2 && en(t[0], t[1], t[2]) && (t = [t[0]]), zu(n, k(t, 1), []);
      }), Ve = al || function() {
        return V.Date.now();
      };
      function bh(n, t) {
        if (typeof t != "function")
          throw new xn(P);
        return n = C(n), function() {
          if (--n < 1)
            return t.apply(this, arguments);
        };
      }
      function Nf(n, t, e) {
        return t = e ? o : t, t = n && t == null ? n.length : t, $n(n, Un, o, o, o, o, t);
      }
      function Gf(n, t) {
        var e;
        if (typeof t != "function")
          throw new xn(P);
        return n = C(n), function() {
          return --n > 0 && (e = t.apply(this, arguments)), n <= 1 && (t = o), e;
        };
      }
      var pi = L(function(n, t, e) {
        var r = dn;
        if (e.length) {
          var i = jn(e, Dt(pi));
          r |= Bn;
        }
        return $n(n, r, t, e, i);
      }), Hf = L(function(n, t, e) {
        var r = dn | ot;
        if (e.length) {
          var i = jn(e, Dt(Hf));
          r |= Bn;
        }
        return $n(t, r, n, e, i);
      });
      function qf(n, t, e) {
        t = e ? o : t;
        var r = $n(n, Wn, o, o, o, o, o, t);
        return r.placeholder = qf.placeholder, r;
      }
      function $f(n, t, e) {
        t = e ? o : t;
        var r = $n(n, At, o, o, o, o, o, t);
        return r.placeholder = $f.placeholder, r;
      }
      function zf(n, t, e) {
        var r, i, f, s, l, c, _ = 0, p = !1, d = !1, v = !0;
        if (typeof n != "function")
          throw new xn(P);
        t = Rn(t) || 0, $(e) && (p = !!e.leading, d = "maxWait" in e, f = d ? J(Rn(e.maxWait) || 0, t) : f, v = "trailing" in e ? !!e.trailing : v);
        function x(Y) {
          var On = r, Xn = i;
          return r = i = o, _ = Y, s = n.apply(Xn, On), s;
        }
        function y(Y) {
          return _ = Y, l = ue(O, t), p ? x(Y) : s;
        }
        function E(Y) {
          var On = Y - c, Xn = Y - _, lo = t - On;
          return d ? j(lo, f - Xn) : lo;
        }
        function S(Y) {
          var On = Y - c, Xn = Y - _;
          return c === o || On >= t || On < 0 || d && Xn >= f;
        }
        function O() {
          var Y = Ve();
          if (S(Y))
            return W(Y);
          l = ue(O, E(Y));
        }
        function W(Y) {
          return l = o, v && r ? x(Y) : (r = i = o, s);
        }
        function _n() {
          l !== o && ju(l), _ = 0, r = c = i = l = o;
        }
        function rn() {
          return l === o ? s : W(Ve());
        }
        function pn() {
          var Y = Ve(), On = S(Y);
          if (r = arguments, i = this, c = Y, On) {
            if (l === o)
              return y(c);
            if (d)
              return ju(l), l = ue(O, t), x(c);
          }
          return l === o && (l = ue(O, t)), s;
        }
        return pn.cancel = _n, pn.flush = rn, pn;
      }
      var Wh = L(function(n, t) {
        return Wu(n, 1, t);
      }), Bh = L(function(n, t, e) {
        return Wu(n, Rn(t) || 0, e);
      });
      function Ph(n) {
        return $n(n, fr);
      }
      function ke(n, t) {
        if (typeof n != "function" || t != null && typeof t != "function")
          throw new xn(P);
        var e = function() {
          var r = arguments, i = t ? t.apply(this, r) : r[0], f = e.cache;
          if (f.has(i))
            return f.get(i);
          var s = n.apply(this, r);
          return e.cache = f.set(i, s) || f, s;
        };
        return e.cache = new (ke.Cache || Hn)(), e;
      }
      ke.Cache = Hn;
      function je(n) {
        if (typeof n != "function")
          throw new xn(P);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !n.call(this);
            case 1:
              return !n.call(this, t[0]);
            case 2:
              return !n.call(this, t[0], t[1]);
            case 3:
              return !n.call(this, t[0], t[1], t[2]);
          }
          return !n.apply(this, t);
        };
      }
      function Dh(n) {
        return Gf(2, n);
      }
      var Mh = Sa(function(n, t) {
        t = t.length == 1 && m(t[0]) ? q(t[0], cn(A())) : q(k(t, 1), cn(A()));
        var e = t.length;
        return L(function(r) {
          for (var i = -1, f = j(r.length, e); ++i < f; )
            r[i] = t[i].call(this, r[i]);
          return an(n, this, r);
        });
      }), di = L(function(n, t) {
        var e = jn(t, Dt(di));
        return $n(n, Bn, o, t, e);
      }), Kf = L(function(n, t) {
        var e = jn(t, Dt(Kf));
        return $n(n, yt, o, t, e);
      }), Fh = zn(function(n, t) {
        return $n(n, Ut, o, o, o, t);
      });
      function Uh(n, t) {
        if (typeof n != "function")
          throw new xn(P);
        return t = t === o ? t : C(t), L(n, t);
      }
      function Nh(n, t) {
        if (typeof n != "function")
          throw new xn(P);
        return t = t == null ? 0 : J(C(t), 0), L(function(e) {
          var r = e[t], i = it(e, 0, t);
          return r && kn(i, r), an(n, this, i);
        });
      }
      function Gh(n, t, e) {
        var r = !0, i = !0;
        if (typeof n != "function")
          throw new xn(P);
        return $(e) && (r = "leading" in e ? !!e.leading : r, i = "trailing" in e ? !!e.trailing : i), zf(n, t, {
          leading: r,
          maxWait: t,
          trailing: i
        });
      }
      function Hh(n) {
        return Nf(n, 1);
      }
      function qh(n, t) {
        return di(ni(t), n);
      }
      function $h() {
        if (!arguments.length)
          return [];
        var n = arguments[0];
        return m(n) ? n : [n];
      }
      function zh(n) {
        return yn(n, wt);
      }
      function Kh(n, t) {
        return t = typeof t == "function" ? t : o, yn(n, wt, t);
      }
      function Yh(n) {
        return yn(n, bn | wt);
      }
      function Zh(n, t) {
        return t = typeof t == "function" ? t : o, yn(n, bn | wt, t);
      }
      function Xh(n, t) {
        return t == null || bu(n, t, Q(t));
      }
      function Ln(n, t) {
        return n === t || n !== n && t !== t;
      }
      var Jh = Ke(qr), Qh = Ke(function(n, t) {
        return n >= t;
      }), vt = Fu(function() {
        return arguments;
      }()) ? Fu : function(n) {
        return z(n) && F.call(n, "callee") && !Iu.call(n, "callee");
      }, m = h.isArray, Vh = iu ? cn(iu) : ua;
      function on(n) {
        return n != null && nr(n.length) && !Yn(n);
      }
      function K(n) {
        return z(n) && on(n);
      }
      function kh(n) {
        return n === !0 || n === !1 || z(n) && tn(n) == Nt;
      }
      var ut = hl || Ei, jh = uu ? cn(uu) : fa;
      function ng(n) {
        return z(n) && n.nodeType === 1 && !fe(n);
      }
      function tg(n) {
        if (n == null)
          return !0;
        if (on(n) && (m(n) || typeof n == "string" || typeof n.splice == "function" || ut(n) || Mt(n) || vt(n)))
          return !n.length;
        var t = nn(n);
        if (t == mn || t == Cn)
          return !n.size;
        if (ie(n))
          return !Kr(n).length;
        for (var e in n)
          if (F.call(n, e))
            return !1;
        return !0;
      }
      function eg(n, t) {
        return te(n, t);
      }
      function rg(n, t, e) {
        e = typeof e == "function" ? e : o;
        var r = e ? e(n, t) : o;
        return r === o ? te(n, t, o, e) : !!r;
      }
      function vi(n) {
        if (!z(n))
          return !1;
        var t = tn(n);
        return t == he || t == Co || typeof n.message == "string" && typeof n.name == "string" && !fe(n);
      }
      function ig(n) {
        return typeof n == "number" && mu(n);
      }
      function Yn(n) {
        if (!$(n))
          return !1;
        var t = tn(n);
        return t == ge || t == Wi || t == mo || t == To;
      }
      function Yf(n) {
        return typeof n == "number" && n == C(n);
      }
      function nr(n) {
        return typeof n == "number" && n > -1 && n % 1 == 0 && n <= Qn;
      }
      function $(n) {
        var t = typeof n;
        return n != null && (t == "object" || t == "function");
      }
      function z(n) {
        return n != null && typeof n == "object";
      }
      var Zf = fu ? cn(fu) : sa;
      function ug(n, t) {
        return n === t || zr(n, t, oi(t));
      }
      function fg(n, t, e) {
        return e = typeof e == "function" ? e : o, zr(n, t, oi(t), e);
      }
      function og(n) {
        return Xf(n) && n != +n;
      }
      function sg(n) {
        if (Ka(n))
          throw new R(Z);
        return Uu(n);
      }
      function lg(n) {
        return n === null;
      }
      function ag(n) {
        return n == null;
      }
      function Xf(n) {
        return typeof n == "number" || z(n) && tn(n) == Ht;
      }
      function fe(n) {
        if (!z(n) || tn(n) != Nn)
          return !1;
        var t = Ee(n);
        if (t === null)
          return !0;
        var e = F.call(t, "constructor") && t.constructor;
        return typeof e == "function" && e instanceof e && Ie.call(e) == fl;
      }
      var wi = ou ? cn(ou) : la;
      function cg(n) {
        return Yf(n) && n >= -Qn && n <= Qn;
      }
      var Jf = su ? cn(su) : aa;
      function tr(n) {
        return typeof n == "string" || !m(n) && z(n) && tn(n) == $t;
      }
      function gn(n) {
        return typeof n == "symbol" || z(n) && tn(n) == _e;
      }
      var Mt = lu ? cn(lu) : ca;
      function hg(n) {
        return n === o;
      }
      function gg(n) {
        return z(n) && nn(n) == zt;
      }
      function _g(n) {
        return z(n) && tn(n) == Oo;
      }
      var pg = Ke(Yr), dg = Ke(function(n, t) {
        return n <= t;
      });
      function Qf(n) {
        if (!n)
          return [];
        if (on(n))
          return tr(n) ? En(n) : fn(n);
        if (Zt && n[Zt])
          return Xs(n[Zt]());
        var t = nn(n), e = t == mn ? Br : t == Cn ? Ae : Ft;
        return e(n);
      }
      function Zn(n) {
        if (!n)
          return n === 0 ? n : 0;
        if (n = Rn(n), n === st || n === -st) {
          var t = n < 0 ? -1 : 1;
          return t * yo;
        }
        return n === n ? n : 0;
      }
      function C(n) {
        var t = Zn(n), e = t % 1;
        return t === t ? e ? t - e : t : 0;
      }
      function Vf(n) {
        return n ? gt(C(n), 0, Pn) : 0;
      }
      function Rn(n) {
        if (typeof n == "number")
          return n;
        if (gn(n))
          return ae;
        if ($(n)) {
          var t = typeof n.valueOf == "function" ? n.valueOf() : n;
          n = $(t) ? t + "" : t;
        }
        if (typeof n != "string")
          return n === 0 ? n : +n;
        n = pu(n);
        var e = Vo.test(n);
        return e || jo.test(n) ? bs(n.slice(2), e ? 2 : 8) : Qo.test(n) ? ae : +n;
      }
      function kf(n) {
        return Mn(n, sn(n));
      }
      function vg(n) {
        return n ? gt(C(n), -Qn, Qn) : n === 0 ? n : 0;
      }
      function M(n) {
        return n == null ? "" : hn(n);
      }
      var wg = Bt(function(n, t) {
        if (ie(t) || on(t)) {
          Mn(t, Q(t), n);
          return;
        }
        for (var e in t)
          F.call(t, e) && kt(n, e, t[e]);
      }), jf = Bt(function(n, t) {
        Mn(t, sn(t), n);
      }), er = Bt(function(n, t, e, r) {
        Mn(t, sn(t), n, r);
      }), xg = Bt(function(n, t, e, r) {
        Mn(t, Q(t), n, r);
      }), Ag = zn(Nr);
      function yg(n, t) {
        var e = Wt(n);
        return t == null ? e : Ou(e, t);
      }
      var Sg = L(function(n, t) {
        n = U(n);
        var e = -1, r = t.length, i = r > 2 ? t[2] : o;
        for (i && en(t[0], t[1], i) && (r = 1); ++e < r; )
          for (var f = t[e], s = sn(f), l = -1, c = s.length; ++l < c; ) {
            var _ = s[l], p = n[_];
            (p === o || Ln(p, Lt[_]) && !F.call(n, _)) && (n[_] = f[_]);
          }
        return n;
      }), Ig = L(function(n) {
        return n.push(o, df), an(no, o, n);
      });
      function Rg(n, t) {
        return cu(n, A(t, 3), Dn);
      }
      function mg(n, t) {
        return cu(n, A(t, 3), Hr);
      }
      function Cg(n, t) {
        return n == null ? n : Gr(n, A(t, 3), sn);
      }
      function Eg(n, t) {
        return n == null ? n : Du(n, A(t, 3), sn);
      }
      function Tg(n, t) {
        return n && Dn(n, A(t, 3));
      }
      function Lg(n, t) {
        return n && Hr(n, A(t, 3));
      }
      function Og(n) {
        return n == null ? [] : Fe(n, Q(n));
      }
      function bg(n) {
        return n == null ? [] : Fe(n, sn(n));
      }
      function xi(n, t, e) {
        var r = n == null ? o : _t(n, t);
        return r === o ? e : r;
      }
      function Wg(n, t) {
        return n != null && xf(n, t, ta);
      }
      function Ai(n, t) {
        return n != null && xf(n, t, ea);
      }
      var Bg = cf(function(n, t, e) {
        t != null && typeof t.toString != "function" && (t = Re.call(t)), n[t] = e;
      }, Si(ln)), Pg = cf(function(n, t, e) {
        t != null && typeof t.toString != "function" && (t = Re.call(t)), F.call(n, t) ? n[t].push(e) : n[t] = [e];
      }, A), Dg = L(ne);
      function Q(n) {
        return on(n) ? Tu(n) : Kr(n);
      }
      function sn(n) {
        return on(n) ? Tu(n, !0) : ha(n);
      }
      function Mg(n, t) {
        var e = {};
        return t = A(t, 3), Dn(n, function(r, i, f) {
          qn(e, t(r, i, f), r);
        }), e;
      }
      function Fg(n, t) {
        var e = {};
        return t = A(t, 3), Dn(n, function(r, i, f) {
          qn(e, i, t(r, i, f));
        }), e;
      }
      var Ug = Bt(function(n, t, e) {
        Ue(n, t, e);
      }), no = Bt(function(n, t, e, r) {
        Ue(n, t, e, r);
      }), Ng = zn(function(n, t) {
        var e = {};
        if (n == null)
          return e;
        var r = !1;
        t = q(t, function(f) {
          return f = rt(f, n), r || (r = f.length > 1), f;
        }), Mn(n, ui(n), e), r && (e = yn(e, bn | se | wt, Ba));
        for (var i = t.length; i--; )
          Vr(e, t[i]);
        return e;
      });
      function Gg(n, t) {
        return to(n, je(A(t)));
      }
      var Hg = zn(function(n, t) {
        return n == null ? {} : _a(n, t);
      });
      function to(n, t) {
        if (n == null)
          return {};
        var e = q(ui(n), function(r) {
          return [r];
        });
        return t = A(t), Ku(n, e, function(r, i) {
          return t(r, i[0]);
        });
      }
      function qg(n, t, e) {
        t = rt(t, n);
        var r = -1, i = t.length;
        for (i || (i = 1, n = o); ++r < i; ) {
          var f = n == null ? o : n[Fn(t[r])];
          f === o && (r = i, f = e), n = Yn(f) ? f.call(n) : f;
        }
        return n;
      }
      function $g(n, t, e) {
        return n == null ? n : ee(n, t, e);
      }
      function zg(n, t, e, r) {
        return r = typeof r == "function" ? r : o, n == null ? n : ee(n, t, e, r);
      }
      var eo = _f(Q), ro = _f(sn);
      function Kg(n, t, e) {
        var r = m(n), i = r || ut(n) || Mt(n);
        if (t = A(t, 4), e == null) {
          var f = n && n.constructor;
          i ? e = r ? new f() : [] : $(n) ? e = Yn(f) ? Wt(Ee(n)) : {} : e = {};
        }
        return (i ? wn : Dn)(n, function(s, l, c) {
          return t(e, s, l, c);
        }), e;
      }
      function Yg(n, t) {
        return n == null ? !0 : Vr(n, t);
      }
      function Zg(n, t, e) {
        return n == null ? n : Qu(n, t, ni(e));
      }
      function Xg(n, t, e, r) {
        return r = typeof r == "function" ? r : o, n == null ? n : Qu(n, t, ni(e), r);
      }
      function Ft(n) {
        return n == null ? [] : Wr(n, Q(n));
      }
      function Jg(n) {
        return n == null ? [] : Wr(n, sn(n));
      }
      function Qg(n, t, e) {
        return e === o && (e = t, t = o), e !== o && (e = Rn(e), e = e === e ? e : 0), t !== o && (t = Rn(t), t = t === t ? t : 0), gt(Rn(n), t, e);
      }
      function Vg(n, t, e) {
        return t = Zn(t), e === o ? (e = t, t = 0) : e = Zn(e), n = Rn(n), ra(n, t, e);
      }
      function kg(n, t, e) {
        if (e && typeof e != "boolean" && en(n, t, e) && (t = e = o), e === o && (typeof t == "boolean" ? (e = t, t = o) : typeof n == "boolean" && (e = n, n = o)), n === o && t === o ? (n = 0, t = 1) : (n = Zn(n), t === o ? (t = n, n = 0) : t = Zn(t)), n > t) {
          var r = n;
          n = t, t = r;
        }
        if (e || n % 1 || t % 1) {
          var i = Cu();
          return j(n + i * (t - n + Os("1e-" + ((i + "").length - 1))), t);
        }
        return Xr(n, t);
      }
      var jg = Pt(function(n, t, e) {
        return t = t.toLowerCase(), n + (e ? io(t) : t);
      });
      function io(n) {
        return yi(M(n).toLowerCase());
      }
      function uo(n) {
        return n = M(n), n && n.replace(ts, $s).replace(As, "");
      }
      function n_(n, t, e) {
        n = M(n), t = hn(t);
        var r = n.length;
        e = e === o ? r : gt(C(e), 0, r);
        var i = e;
        return e -= t.length, e >= 0 && n.slice(e, i) == t;
      }
      function t_(n) {
        return n = M(n), n && Do.test(n) ? n.replace(Di, zs) : n;
      }
      function e_(n) {
        return n = M(n), n && Ho.test(n) ? n.replace(dr, "\\$&") : n;
      }
      var r_ = Pt(function(n, t, e) {
        return n + (e ? "-" : "") + t.toLowerCase();
      }), i_ = Pt(function(n, t, e) {
        return n + (e ? " " : "") + t.toLowerCase();
      }), u_ = sf("toLowerCase");
      function f_(n, t, e) {
        n = M(n), t = C(t);
        var r = t ? Et(n) : 0;
        if (!t || r >= t)
          return n;
        var i = (t - r) / 2;
        return ze(be(i), e) + n + ze(Oe(i), e);
      }
      function o_(n, t, e) {
        n = M(n), t = C(t);
        var r = t ? Et(n) : 0;
        return t && r < t ? n + ze(t - r, e) : n;
      }
      function s_(n, t, e) {
        n = M(n), t = C(t);
        var r = t ? Et(n) : 0;
        return t && r < t ? ze(t - r, e) + n : n;
      }
      function l_(n, t, e) {
        return e || t == null ? t = 0 : t && (t = +t), dl(M(n).replace(vr, ""), t || 0);
      }
      function a_(n, t, e) {
        return (e ? en(n, t, e) : t === o) ? t = 1 : t = C(t), Jr(M(n), t);
      }
      function c_() {
        var n = arguments, t = M(n[0]);
        return n.length < 3 ? t : t.replace(n[1], n[2]);
      }
      var h_ = Pt(function(n, t, e) {
        return n + (e ? "_" : "") + t.toLowerCase();
      });
      function g_(n, t, e) {
        return e && typeof e != "number" && en(n, t, e) && (t = e = o), e = e === o ? Pn : e >>> 0, e ? (n = M(n), n && (typeof t == "string" || t != null && !wi(t)) && (t = hn(t), !t && Ct(n)) ? it(En(n), 0, e) : n.split(t, e)) : [];
      }
      var __ = Pt(function(n, t, e) {
        return n + (e ? " " : "") + yi(t);
      });
      function p_(n, t, e) {
        return n = M(n), e = e == null ? 0 : gt(C(e), 0, n.length), t = hn(t), n.slice(e, e + t.length) == t;
      }
      function d_(n, t, e) {
        var r = u.templateSettings;
        e && en(n, t, e) && (t = o), n = M(n), t = er({}, t, r, pf);
        var i = er({}, t.imports, r.imports, pf), f = Q(i), s = Wr(i, f), l, c, _ = 0, p = t.interpolate || pe, d = "__p += '", v = Pr(
          (t.escape || pe).source + "|" + p.source + "|" + (p === Mi ? Jo : pe).source + "|" + (t.evaluate || pe).source + "|$",
          "g"
        ), x = "//# sourceURL=" + (F.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++ms + "]") + `
`;
        n.replace(v, function(S, O, W, _n, rn, pn) {
          return W || (W = _n), d += n.slice(_, pn).replace(es, Ks), O && (l = !0, d += `' +
__e(` + O + `) +
'`), rn && (c = !0, d += `';
` + rn + `;
__p += '`), W && (d += `' +
((__t = (` + W + `)) == null ? '' : __t) +
'`), _ = pn + S.length, S;
        }), d += `';
`;
        var y = F.call(t, "variable") && t.variable;
        if (!y)
          d = `with (obj) {
` + d + `
}
`;
        else if (Zo.test(y))
          throw new R(un);
        d = (c ? d.replace(bo, "") : d).replace(Wo, "$1").replace(Bo, "$1;"), d = "function(" + (y || "obj") + `) {
` + (y ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (l ? ", __e = _.escape" : "") + (c ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + d + `return __p
}`;
        var E = oo(function() {
          return D(f, x + "return " + d).apply(o, s);
        });
        if (E.source = d, vi(E))
          throw E;
        return E;
      }
      function v_(n) {
        return M(n).toLowerCase();
      }
      function w_(n) {
        return M(n).toUpperCase();
      }
      function x_(n, t, e) {
        if (n = M(n), n && (e || t === o))
          return pu(n);
        if (!n || !(t = hn(t)))
          return n;
        var r = En(n), i = En(t), f = du(r, i), s = vu(r, i) + 1;
        return it(r, f, s).join("");
      }
      function A_(n, t, e) {
        if (n = M(n), n && (e || t === o))
          return n.slice(0, xu(n) + 1);
        if (!n || !(t = hn(t)))
          return n;
        var r = En(n), i = vu(r, En(t)) + 1;
        return it(r, 0, i).join("");
      }
      function y_(n, t, e) {
        if (n = M(n), n && (e || t === o))
          return n.replace(vr, "");
        if (!n || !(t = hn(t)))
          return n;
        var r = En(n), i = du(r, En(t));
        return it(r, i).join("");
      }
      function S_(n, t) {
        var e = _o, r = po;
        if ($(t)) {
          var i = "separator" in t ? t.separator : i;
          e = "length" in t ? C(t.length) : e, r = "omission" in t ? hn(t.omission) : r;
        }
        n = M(n);
        var f = n.length;
        if (Ct(n)) {
          var s = En(n);
          f = s.length;
        }
        if (e >= f)
          return n;
        var l = e - Et(r);
        if (l < 1)
          return r;
        var c = s ? it(s, 0, l).join("") : n.slice(0, l);
        if (i === o)
          return c + r;
        if (s && (l += c.length - l), wi(i)) {
          if (n.slice(l).search(i)) {
            var _, p = c;
            for (i.global || (i = Pr(i.source, M(Fi.exec(i)) + "g")), i.lastIndex = 0; _ = i.exec(p); )
              var d = _.index;
            c = c.slice(0, d === o ? l : d);
          }
        } else if (n.indexOf(hn(i), l) != l) {
          var v = c.lastIndexOf(i);
          v > -1 && (c = c.slice(0, v));
        }
        return c + r;
      }
      function I_(n) {
        return n = M(n), n && Po.test(n) ? n.replace(Pi, ks) : n;
      }
      var R_ = Pt(function(n, t, e) {
        return n + (e ? " " : "") + t.toUpperCase();
      }), yi = sf("toUpperCase");
      function fo(n, t, e) {
        return n = M(n), t = e ? o : t, t === o ? Zs(n) ? tl(n) : Us(n) : n.match(t) || [];
      }
      var oo = L(function(n, t) {
        try {
          return an(n, o, t);
        } catch (e) {
          return vi(e) ? e : new R(e);
        }
      }), m_ = zn(function(n, t) {
        return wn(t, function(e) {
          e = Fn(e), qn(n, e, pi(n[e], n));
        }), n;
      });
      function C_(n) {
        var t = n == null ? 0 : n.length, e = A();
        return n = t ? q(n, function(r) {
          if (typeof r[1] != "function")
            throw new xn(P);
          return [e(r[0]), r[1]];
        }) : [], L(function(r) {
          for (var i = -1; ++i < t; ) {
            var f = n[i];
            if (an(f[0], this, r))
              return an(f[1], this, r);
          }
        });
      }
      function E_(n) {
        return kl(yn(n, bn));
      }
      function Si(n) {
        return function() {
          return n;
        };
      }
      function T_(n, t) {
        return n == null || n !== n ? t : n;
      }
      var L_ = af(), O_ = af(!0);
      function ln(n) {
        return n;
      }
      function Ii(n) {
        return Nu(typeof n == "function" ? n : yn(n, bn));
      }
      function b_(n) {
        return Hu(yn(n, bn));
      }
      function W_(n, t) {
        return qu(n, yn(t, bn));
      }
      var B_ = L(function(n, t) {
        return function(e) {
          return ne(e, n, t);
        };
      }), P_ = L(function(n, t) {
        return function(e) {
          return ne(n, e, t);
        };
      });
      function Ri(n, t, e) {
        var r = Q(t), i = Fe(t, r);
        e == null && !($(t) && (i.length || !r.length)) && (e = t, t = n, n = this, i = Fe(t, Q(t)));
        var f = !($(e) && "chain" in e) || !!e.chain, s = Yn(n);
        return wn(i, function(l) {
          var c = t[l];
          n[l] = c, s && (n.prototype[l] = function() {
            var _ = this.__chain__;
            if (f || _) {
              var p = n(this.__wrapped__), d = p.__actions__ = fn(this.__actions__);
              return d.push({ func: c, args: arguments, thisArg: n }), p.__chain__ = _, p;
            }
            return c.apply(n, kn([this.value()], arguments));
          });
        }), n;
      }
      function D_() {
        return V._ === this && (V._ = ol), this;
      }
      function mi() {
      }
      function M_(n) {
        return n = C(n), L(function(t) {
          return $u(t, n);
        });
      }
      var F_ = ei(q), U_ = ei(au), N_ = ei(Er);
      function so(n) {
        return li(n) ? Tr(Fn(n)) : pa(n);
      }
      function G_(n) {
        return function(t) {
          return n == null ? o : _t(n, t);
        };
      }
      var H_ = hf(), q_ = hf(!0);
      function Ci() {
        return [];
      }
      function Ei() {
        return !1;
      }
      function $_() {
        return {};
      }
      function z_() {
        return "";
      }
      function K_() {
        return !0;
      }
      function Y_(n, t) {
        if (n = C(n), n < 1 || n > Qn)
          return [];
        var e = Pn, r = j(n, Pn);
        t = A(t), n -= Pn;
        for (var i = br(r, t); ++e < n; )
          t(e);
        return i;
      }
      function Z_(n) {
        return m(n) ? q(n, Fn) : gn(n) ? [n] : fn(Tf(M(n)));
      }
      function X_(n) {
        var t = ++ul;
        return M(n) + t;
      }
      var J_ = $e(function(n, t) {
        return n + t;
      }, 0), Q_ = ri("ceil"), V_ = $e(function(n, t) {
        return n / t;
      }, 1), k_ = ri("floor");
      function j_(n) {
        return n && n.length ? Me(n, ln, qr) : o;
      }
      function np(n, t) {
        return n && n.length ? Me(n, A(t, 2), qr) : o;
      }
      function tp(n) {
        return gu(n, ln);
      }
      function ep(n, t) {
        return gu(n, A(t, 2));
      }
      function rp(n) {
        return n && n.length ? Me(n, ln, Yr) : o;
      }
      function ip(n, t) {
        return n && n.length ? Me(n, A(t, 2), Yr) : o;
      }
      var up = $e(function(n, t) {
        return n * t;
      }, 1), fp = ri("round"), op = $e(function(n, t) {
        return n - t;
      }, 0);
      function sp(n) {
        return n && n.length ? Or(n, ln) : 0;
      }
      function lp(n, t) {
        return n && n.length ? Or(n, A(t, 2)) : 0;
      }
      return u.after = bh, u.ary = Nf, u.assign = wg, u.assignIn = jf, u.assignInWith = er, u.assignWith = xg, u.at = Ag, u.before = Gf, u.bind = pi, u.bindAll = m_, u.bindKey = Hf, u.castArray = $h, u.chain = Mf, u.chunk = ka, u.compact = ja, u.concat = nc, u.cond = C_, u.conforms = E_, u.constant = Si, u.countBy = sh, u.create = yg, u.curry = qf, u.curryRight = $f, u.debounce = zf, u.defaults = Sg, u.defaultsDeep = Ig, u.defer = Wh, u.delay = Bh, u.difference = tc, u.differenceBy = ec, u.differenceWith = rc, u.drop = ic, u.dropRight = uc, u.dropRightWhile = fc, u.dropWhile = oc, u.fill = sc, u.filter = ah, u.flatMap = gh, u.flatMapDeep = _h, u.flatMapDepth = ph, u.flatten = Wf, u.flattenDeep = lc, u.flattenDepth = ac, u.flip = Ph, u.flow = L_, u.flowRight = O_, u.fromPairs = cc, u.functions = Og, u.functionsIn = bg, u.groupBy = dh, u.initial = gc, u.intersection = _c, u.intersectionBy = pc, u.intersectionWith = dc, u.invert = Bg, u.invertBy = Pg, u.invokeMap = wh, u.iteratee = Ii, u.keyBy = xh, u.keys = Q, u.keysIn = sn, u.map = Qe, u.mapKeys = Mg, u.mapValues = Fg, u.matches = b_, u.matchesProperty = W_, u.memoize = ke, u.merge = Ug, u.mergeWith = no, u.method = B_, u.methodOf = P_, u.mixin = Ri, u.negate = je, u.nthArg = M_, u.omit = Ng, u.omitBy = Gg, u.once = Dh, u.orderBy = Ah, u.over = F_, u.overArgs = Mh, u.overEvery = U_, u.overSome = N_, u.partial = di, u.partialRight = Kf, u.partition = yh, u.pick = Hg, u.pickBy = to, u.property = so, u.propertyOf = G_, u.pull = Ac, u.pullAll = Pf, u.pullAllBy = yc, u.pullAllWith = Sc, u.pullAt = Ic, u.range = H_, u.rangeRight = q_, u.rearg = Fh, u.reject = Rh, u.remove = Rc, u.rest = Uh, u.reverse = gi, u.sampleSize = Ch, u.set = $g, u.setWith = zg, u.shuffle = Eh, u.slice = mc, u.sortBy = Oh, u.sortedUniq = Wc, u.sortedUniqBy = Bc, u.split = g_, u.spread = Nh, u.tail = Pc, u.take = Dc, u.takeRight = Mc, u.takeRightWhile = Fc, u.takeWhile = Uc, u.tap = jc, u.throttle = Gh, u.thru = Je, u.toArray = Qf, u.toPairs = eo, u.toPairsIn = ro, u.toPath = Z_, u.toPlainObject = kf, u.transform = Kg, u.unary = Hh, u.union = Nc, u.unionBy = Gc, u.unionWith = Hc, u.uniq = qc, u.uniqBy = $c, u.uniqWith = zc, u.unset = Yg, u.unzip = _i, u.unzipWith = Df, u.update = Zg, u.updateWith = Xg, u.values = Ft, u.valuesIn = Jg, u.without = Kc, u.words = fo, u.wrap = qh, u.xor = Yc, u.xorBy = Zc, u.xorWith = Xc, u.zip = Jc, u.zipObject = Qc, u.zipObjectDeep = Vc, u.zipWith = kc, u.entries = eo, u.entriesIn = ro, u.extend = jf, u.extendWith = er, Ri(u, u), u.add = J_, u.attempt = oo, u.camelCase = jg, u.capitalize = io, u.ceil = Q_, u.clamp = Qg, u.clone = zh, u.cloneDeep = Yh, u.cloneDeepWith = Zh, u.cloneWith = Kh, u.conformsTo = Xh, u.deburr = uo, u.defaultTo = T_, u.divide = V_, u.endsWith = n_, u.eq = Ln, u.escape = t_, u.escapeRegExp = e_, u.every = lh, u.find = ch, u.findIndex = Of, u.findKey = Rg, u.findLast = hh, u.findLastIndex = bf, u.findLastKey = mg, u.floor = k_, u.forEach = Ff, u.forEachRight = Uf, u.forIn = Cg, u.forInRight = Eg, u.forOwn = Tg, u.forOwnRight = Lg, u.get = xi, u.gt = Jh, u.gte = Qh, u.has = Wg, u.hasIn = Ai, u.head = Bf, u.identity = ln, u.includes = vh, u.indexOf = hc, u.inRange = Vg, u.invoke = Dg, u.isArguments = vt, u.isArray = m, u.isArrayBuffer = Vh, u.isArrayLike = on, u.isArrayLikeObject = K, u.isBoolean = kh, u.isBuffer = ut, u.isDate = jh, u.isElement = ng, u.isEmpty = tg, u.isEqual = eg, u.isEqualWith = rg, u.isError = vi, u.isFinite = ig, u.isFunction = Yn, u.isInteger = Yf, u.isLength = nr, u.isMap = Zf, u.isMatch = ug, u.isMatchWith = fg, u.isNaN = og, u.isNative = sg, u.isNil = ag, u.isNull = lg, u.isNumber = Xf, u.isObject = $, u.isObjectLike = z, u.isPlainObject = fe, u.isRegExp = wi, u.isSafeInteger = cg, u.isSet = Jf, u.isString = tr, u.isSymbol = gn, u.isTypedArray = Mt, u.isUndefined = hg, u.isWeakMap = gg, u.isWeakSet = _g, u.join = vc, u.kebabCase = r_, u.last = In, u.lastIndexOf = wc, u.lowerCase = i_, u.lowerFirst = u_, u.lt = pg, u.lte = dg, u.max = j_, u.maxBy = np, u.mean = tp, u.meanBy = ep, u.min = rp, u.minBy = ip, u.stubArray = Ci, u.stubFalse = Ei, u.stubObject = $_, u.stubString = z_, u.stubTrue = K_, u.multiply = up, u.nth = xc, u.noConflict = D_, u.noop = mi, u.now = Ve, u.pad = f_, u.padEnd = o_, u.padStart = s_, u.parseInt = l_, u.random = kg, u.reduce = Sh, u.reduceRight = Ih, u.repeat = a_, u.replace = c_, u.result = qg, u.round = fp, u.runInContext = a, u.sample = mh, u.size = Th, u.snakeCase = h_, u.some = Lh, u.sortedIndex = Cc, u.sortedIndexBy = Ec, u.sortedIndexOf = Tc, u.sortedLastIndex = Lc, u.sortedLastIndexBy = Oc, u.sortedLastIndexOf = bc, u.startCase = __, u.startsWith = p_, u.subtract = op, u.sum = sp, u.sumBy = lp, u.template = d_, u.times = Y_, u.toFinite = Zn, u.toInteger = C, u.toLength = Vf, u.toLower = v_, u.toNumber = Rn, u.toSafeInteger = vg, u.toString = M, u.toUpper = w_, u.trim = x_, u.trimEnd = A_, u.trimStart = y_, u.truncate = S_, u.unescape = I_, u.uniqueId = X_, u.upperCase = R_, u.upperFirst = yi, u.each = Ff, u.eachRight = Uf, u.first = Bf, Ri(u, function() {
        var n = {};
        return Dn(u, function(t, e) {
          F.call(u.prototype, e) || (n[e] = t);
        }), n;
      }(), { chain: !1 }), u.VERSION = G, wn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
        u[n].placeholder = u;
      }), wn(["drop", "take"], function(n, t) {
        b.prototype[n] = function(e) {
          e = e === o ? 1 : J(C(e), 0);
          var r = this.__filtered__ && !t ? new b(this) : this.clone();
          return r.__filtered__ ? r.__takeCount__ = j(e, r.__takeCount__) : r.__views__.push({
            size: j(e, Pn),
            type: n + (r.__dir__ < 0 ? "Right" : "")
          }), r;
        }, b.prototype[n + "Right"] = function(e) {
          return this.reverse()[n](e).reverse();
        };
      }), wn(["filter", "map", "takeWhile"], function(n, t) {
        var e = t + 1, r = e == bi || e == Ao;
        b.prototype[n] = function(i) {
          var f = this.clone();
          return f.__iteratees__.push({
            iteratee: A(i, 3),
            type: e
          }), f.__filtered__ = f.__filtered__ || r, f;
        };
      }), wn(["head", "last"], function(n, t) {
        var e = "take" + (t ? "Right" : "");
        b.prototype[n] = function() {
          return this[e](1).value()[0];
        };
      }), wn(["initial", "tail"], function(n, t) {
        var e = "drop" + (t ? "" : "Right");
        b.prototype[n] = function() {
          return this.__filtered__ ? new b(this) : this[e](1);
        };
      }), b.prototype.compact = function() {
        return this.filter(ln);
      }, b.prototype.find = function(n) {
        return this.filter(n).head();
      }, b.prototype.findLast = function(n) {
        return this.reverse().find(n);
      }, b.prototype.invokeMap = L(function(n, t) {
        return typeof n == "function" ? new b(this) : this.map(function(e) {
          return ne(e, n, t);
        });
      }), b.prototype.reject = function(n) {
        return this.filter(je(A(n)));
      }, b.prototype.slice = function(n, t) {
        n = C(n);
        var e = this;
        return e.__filtered__ && (n > 0 || t < 0) ? new b(e) : (n < 0 ? e = e.takeRight(-n) : n && (e = e.drop(n)), t !== o && (t = C(t), e = t < 0 ? e.dropRight(-t) : e.take(t - n)), e);
      }, b.prototype.takeRightWhile = function(n) {
        return this.reverse().takeWhile(n).reverse();
      }, b.prototype.toArray = function() {
        return this.take(Pn);
      }, Dn(b.prototype, function(n, t) {
        var e = /^(?:filter|find|map|reject)|While$/.test(t), r = /^(?:head|last)$/.test(t), i = u[r ? "take" + (t == "last" ? "Right" : "") : t], f = r || /^find/.test(t);
        i && (u.prototype[t] = function() {
          var s = this.__wrapped__, l = r ? [1] : arguments, c = s instanceof b, _ = l[0], p = c || m(s), d = function(O) {
            var W = i.apply(u, kn([O], l));
            return r && v ? W[0] : W;
          };
          p && e && typeof _ == "function" && _.length != 1 && (c = p = !1);
          var v = this.__chain__, x = !!this.__actions__.length, y = f && !v, E = c && !x;
          if (!f && p) {
            s = E ? s : new b(this);
            var S = n.apply(s, l);
            return S.__actions__.push({ func: Je, args: [d], thisArg: o }), new An(S, v);
          }
          return y && E ? n.apply(this, l) : (S = this.thru(d), y ? r ? S.value()[0] : S.value() : S);
        });
      }), wn(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
        var t = ye[n], e = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(n);
        u.prototype[n] = function() {
          var i = arguments;
          if (r && !this.__chain__) {
            var f = this.value();
            return t.apply(m(f) ? f : [], i);
          }
          return this[e](function(s) {
            return t.apply(m(s) ? s : [], i);
          });
        };
      }), Dn(b.prototype, function(n, t) {
        var e = u[t];
        if (e) {
          var r = e.name + "";
          F.call(bt, r) || (bt[r] = []), bt[r].push({ name: t, func: e });
        }
      }), bt[qe(o, ot).name] = [{
        name: "wrapper",
        func: o
      }], b.prototype.clone = Il, b.prototype.reverse = Rl, b.prototype.value = ml, u.prototype.at = nh, u.prototype.chain = th, u.prototype.commit = eh, u.prototype.next = rh, u.prototype.plant = uh, u.prototype.reverse = fh, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = oh, u.prototype.first = u.prototype.head, Zt && (u.prototype[Zt] = ih), u;
    }, Tt = el();
    lt ? ((lt.exports = Tt)._ = Tt, Ir._ = Tt) : V._ = Tt;
  }).call(oe);
})(ir, ir.exports);
var dp = ir.exports;
const vp = "#ff577d", wp = {
  general: {
    shadowColor: "transparent",
    shadowBlur: 0,
    strokeStyle: vp,
    lineWidth: 2
  },
  active: {
    shadowColor: "red",
    shadowBlur: 20,
    strokeStyle: "red",
    lineWidth: 2
  }
};
function xp(T) {
  const I = wp;
  return dp.merge(I, T || {}), I;
}
class Ap {
  rootElement;
  gamepad;
  constructor(I, o, G) {
    if (this.rootElement = document.getElementById(I), !this.rootElement)
      throw new Error(`Cannot find a container with id "${I}"! Set the correct id`);
    const B = xp(G);
    this.gamepad = new Li(this.rootElement, o, B);
  }
}
export {
  Ap as CanvasGamepad
};
