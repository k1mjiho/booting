// 인덱스 배경나타남
$(document).ready(function() {
  var dots = $(".art-background-dot");
  dots.addClass("dot-appear");
  $(".header-background").removeClass("solid");
  // $(".photo-recipe-overlay").hover(
  //   function(){
  //     $(".photo-recipe-overlay-fade").addClass("fade-in");
  //   }, function(){
  //     $(".photo-recipe-overlay-fade").removeClass("fade-in");
  //   }    
  // );

});
// 인덱스에서 텍스트 바꾸는 코드
 $(function() {
  //Get words from HTML
  var words = [];
  $(".art-txt-switch").each(function(index, value) {
      words.push($(value).text());
  });
  //Delete the words from HTML and place nr1
  $(".art-txt-switch-container")
      .empty()
      .append('<span class="art-txt animated-txt" data-scroll data-scroll-speed="10" data-scroll-position="top">' + words[0] + "</span>");

  //Counter to flip between the words
  var counterWords = 0;
  setInterval(function() {
      var tlm = new TimelineMax({});
      tlm.to($("span.art-txt-switch-container span.animated-txt"), 0.3, {
      ease: Expo.easeIn,
      top: "-1em",
      opacity: 0
      });
      tlm.set($("span.art-txt-switch-container span.animated-txt"), { top: "1em" });
      tlm.to($("span.art-txt-switch-container span.animated-txt"), 0.3, {
      ease: Expo.easeOut,
      top: "0em",
      opacity: 1
      });

      //delay to switch the content in the span (see animation on top)
      setTimeout(function() {
      counterWords++;
      if (counterWords >= words.length) {
          counterWords = 0;
      }
      //Insert new text
      $("span.art-txt-switch-container span.animated-txt").text(words[counterWords]);
      }, 300);
  }, 3000);
});

 var working = false;
function openSearch(){
    if(working) return;
    working=true;
    var str ="";
    str += "<div class=\"searchDiv\">\n" +
        "            <div class=\"form_div\">\n" +
        "                <form class=\"search_form\" action=\"/list\" method=\"get\">\n" +
        "                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n" +
        "                    <input placeholder=\" Search\" class=\"search_keyword\" id=\"autocomplete\" type=\"text\" name=\"keyword\">\n" +
        "                </form>\n" +
        "            </div>\n" +
        "            <button type=\"button\" class=\"search_close\" onclick='closeClick()'>\n" +
        "                <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n" +
        "            </button>\n" +
        "        </div>";
    var tmp = $(".header-container");
    tmp.append(str);
    $('#autocomplete').autocomplete({
        source : 'search'
    });
    var  initStyles = {
        opacity : "0",
        transform : "translate3d(0px,-100vh,0px)"
    };
    $(".searchDiv").css(initStyles);
    setTimeout(function(){
        var  styles = {
            opacity : "1",
            transform : "translate3d(0px,0px,0px)"
        };
        $(".searchDiv").css(styles);
        working=false;
    },1000);
}

var scrollY;
!(function () {
  "use strict";
  function s(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function n(t, e) {
    for (var i = 0; i < e.length; i++) {
      var s = e[i];
      (s.enumerable = s.enumerable || !1),
        (s.configurable = !0),
        "value" in s && (s.writable = !0),
        Object.defineProperty(t, s.key, s);
    }
  }
  function o(t, e, i) {
    return e && n(t.prototype, e), i && n(t, i), t;
  }
  function i(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      t &&
        (s = s.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        i.push.apply(i, s);
    }
    return i;
  }
  function e(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      e && r(t, e);
  }
  function l(t) {
    return (l = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function r(t, e) {
    return (r =
      Object.setPrototypeOf ||
      function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
  }
  function a(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function c(t, e) {
    return !e || ("object" != typeof e && "function" != typeof e) ? a(t) : e;
  }
  function h(t, e, i) {
    return (h =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (t, e, i) {
            var s = (function (t, e) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(t, e) &&
                null !== (t = l(t));

              );
              return t;
            })(t, e);
            if (s) {
              var n = Object.getOwnPropertyDescriptor(s, e);
              return n.get ? n.get.call(i) : n.value;
            }
          })(t, e, i || t);
  }
  var u = {
      el: document,
      elMobile: document,
      name: "scroll",
      offset: 0,
      repeat: !1,
      smooth: !1,
      smoothMobile: !1,
      direction: "vertical",
      inertia: 1,
      class: "is-inview",
      scrollingClass: "has-scroll-scrolling",
      draggingClass: "has-scroll-dragging",
      smoothClass: "has-scroll-smooth",
      initClass: "has-scroll-init",
      getSpeed: !1,
      getDirection: !1,
    },
    d = (function () {
      function e() {
        var t =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        s(this, e),
          window.scrollTo(0, 0),
          Object.assign(this, u, t),
          (this.namespace = "locomotive"),
          (this.html = document.documentElement),
          (this.windowHeight = window.innerHeight),
          (this.windowMiddle = this.windowHeight / 2),
          (this.els = []),
          (this.hasScrollTicking = !1),
          (this.hasCallEventSet = !1),
          (this.checkScroll = this.checkScroll.bind(this)),
          (this.checkResize = this.checkResize.bind(this)),
          (this.instance = {
            scroll: { x: 0, y: 0 },
            limit: this.html.offsetHeight,
          }),
          this.getDirection && (this.instance.direction = null),
          this.getDirection && (this.instance.speed = 0),
          this.html.classList.add(this.initClass),
          window.addEventListener("resize", this.checkResize, !1);
      }
      return (
        o(e, [
          {
            key: "init",
            value: function () {
              this.initEvents();
            },
          },
          {
            key: "checkScroll",
            value: function () {
              this.dispatchScroll();
            },
          },
          { key: "checkResize", value: function () {} },
          {
            key: "initEvents",
            value: function () {
              var e = this;
              (this.scrollToEls = this.el.querySelectorAll(
                "[data-".concat(this.name, "-to]")
              )),
                (this.setScrollTo = this.setScrollTo.bind(this)),
                this.scrollToEls.forEach(function (t) {
                  t.addEventListener("click", e.setScrollTo, !1);
                });
            },
          },
          {
            key: "setScrollTo",
            value: function (t) {
              t.preventDefault(),
                this.scrollTo(
                  t.currentTarget.getAttribute(
                    "data-".concat(this.name, "-href")
                  ) || t.currentTarget.getAttribute("href"),
                  t.currentTarget.getAttribute(
                    "data-".concat(this.name, "-offset")
                  )
                );
            },
          },
          { key: "addElements", value: function () {} },
          {
            key: "detectElements",
            value: function (i) {
              var s = this,
                n = this.instance.scroll.y,
                o = n + this.windowHeight;
              this.els.forEach(function (t, e) {
                (t.inView && !i) ||
                  (o >= t.top && n < t.bottom && s.setInView(t, e)),
                  t.inView &&
                    (o < t.top || n > t.bottom) &&
                    s.setOutOfView(t, e);
              }),
                (this.hasScrollTicking = !1);
            },
          },
          {
            key: "setInView",
            value: function (t, e) {
              (this.els[e].inView = !0),
                t.el.classList.add(t.class),
                t.call &&
                  this.hasCallEventSet &&
                  (this.dispatchCall(t, "enter"),
                  t.repeat || (this.els[e].call = !1)),
                t.repeat ||
                  t.speed ||
                  t.sticky ||
                  ((!t.call || (t.call && this.hasCallEventSet)) &&
                    this.els.splice(e, 1));
            },
          },
          {
            key: "setOutOfView",
            value: function (t, e) {
              (t.repeat || void 0 !== t.speed) && (this.els[e].inView = !1),
                t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"),
                t.repeat && t.el.classList.remove(t.class);
            },
          },
          {
            key: "dispatchCall",
            value: function (t, e) {
              (this.callWay = e),
                (this.callValue = t.call.split(",").map(function (t) {
                  return t.trim();
                })),
                (this.callObj = t),
                1 == this.callValue.length &&
                  (this.callValue = this.callValue[0]);
              var i = new Event(this.namespace + "call");
              this.el.dispatchEvent(i);
            },
          },
          {
            key: "dispatchScroll",
            value: function () {
              var t = new Event(this.namespace + "scroll");
              this.el.dispatchEvent(t);
            },
          },
          {
            key: "setEvents",
            value: function (t, e) {
              var i = this;
              this.el.addEventListener(
                this.namespace + t,
                function () {
                  switch (t) {
                    case "scroll":
                      return e(i.instance);
                    case "call":
                      return e(i.callValue, i.callWay, i.callObj);
                    default:
                      return e();
                  }
                },
                !1
              ),
                "call" === t &&
                  ((this.hasCallEventSet = !0), this.detectElements(!0));
            },
          },
          { key: "startScroll", value: function () {} },
          { key: "stopScroll", value: function () {} },
          {
            key: "setScroll",
            value: function (t, e) {
              this.instance.scroll = { x: 0, y: 0 };
            },
          },
          {
            key: "destroy",
            value: function () {
              var e = this;
              window.removeEventListener("resize", this.checkResize, !1),
                this.scrollToEls.forEach(function (t) {
                  t.removeEventListener("click", e.setScrollTo, !1);
                });
            },
          },
        ]),
        e
      );
    })(),
    t = (function (t) {
      function i() {
        var t,
          e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        return (
          s(this, i),
          (t = c(this, l(i).call(this, e))),
          window.addEventListener("scroll", t.checkScroll, !1),
          t
        );
      }
      return (
        e(i, d),
        o(i, [
          {
            key: "init",
            value: function () {
              (this.instance.scroll.y = window.scrollY),
                this.addElements(),
                this.detectElements(),
                h(l(i.prototype), "init", this).call(this);
            },
          },
          {
            key: "checkScroll",
            value: function () {
              var t = this;
              h(l(i.prototype), "checkScroll", this).call(this),
                this.els.length &&
                  ((this.instance.scroll.y = window.scrollY),
                  this.hasScrollTicking ||
                    (requestAnimationFrame(function () {
                      t.detectElements();
                    }),
                    (this.hasScrollTicking = !0)));
            },
          },
          {
            key: "checkResize",
            value: function () {
              var t = this;
              this.els.length &&
                ((this.windowHeight = window.innerHeight),
                this.hasScrollTicking ||
                  (requestAnimationFrame(function () {
                    t.updateElements();
                  }),
                  (this.hasScrollTicking = !0)));
            },
          },
          {
            key: "addElements",
            value: function () {
              var a = this;
              this.el
                .querySelectorAll("[data-" + this.name + "]")
                .forEach(function (t, e) {
                  var i = t.dataset[a.name + "Class"] || a.class,
                    s = t.getBoundingClientRect().top + a.instance.scroll.y,
                    n = s + t.offsetHeight,
                    o =
                      parseInt(t.dataset[a.name + "Offset"]) ||
                      parseInt(a.offset),
                    l = t.dataset[a.name + "Repeat"],
                    r = t.dataset[a.name + "Call"];
                  (l = "false" != l && (null != l || a.repeat)),
                    (a.els[e] = {
                      el: t,
                      class: i,
                      top: s + o,
                      bottom: n,
                      offset: o,
                      repeat: l,
                      inView: !1,
                      call: r,
                    });
                });
            },
          },
          {
            key: "updateElements",
            value: function () {
              var n = this;
              this.els.forEach(function (t, e) {
                var i = t.el.getBoundingClientRect().top + n.instance.scroll.y,
                  s = i + t.el.offsetHeight;
                (n.els[e].top = i + t.offset), (n.els[e].bottom = s);
              }),
                (this.hasScrollTicking = !1);
            },
          },
          {
            key: "scrollTo",
            value: function (t, e) {
              var i,
                s = e ? parseInt(e) : 0;
              "string" == typeof t
                ? "top" === t
                  ? (i = this.html)
                  : "bottom" === t
                  ? (s = this.html.offsetHeight - window.innerHeight)
                  : (i = document.querySelectorAll(t)[0])
                : t.target || (i = t),
                i && (s = i.getBoundingClientRect().top + s),
                (s += this.instance.scroll.y),
                window.scrollTo({ top: s, behavior: "smooth" });
            },
          },
          {
            key: "update",
            value: function () {
              this.updateElements();
            },
          },
          {
            key: "destroy",
            value: function () {
              h(l(i.prototype), "destroy", this).call(this),
                window.removeEventListener("scroll", this.checkScroll, !1);
            },
          },
        ]),
        i
      );
    })(),
    f = Object.getOwnPropertySymbols,
    p = Object.prototype.hasOwnProperty,
    y = Object.prototype.propertyIsEnumerable;
  var v = (function () {
    try {
      if (!Object.assign) return !1;
      var t = new String("abc");
      if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0])) return !1;
      for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
      if (
        "0123456789" !==
        Object.getOwnPropertyNames(e)
          .map(function (t) {
            return e[t];
          })
          .join("")
      )
        return !1;
      var s = {};
      return (
        "abcdefghijklmnopqrst".split("").forEach(function (t) {
          s[t] = t;
        }),
        "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, s)).join("")
      );
    } catch (t) {
      return !1;
    }
  })()
    ? Object.assign
    : function (t, e) {
        for (
          var i,
            s,
            n = (function (t) {
              if (null == t)
                throw new TypeError(
                  "Obvject.assign cannot be called with null or undefined"
                );
              return Object(t);
            })(t),
            o = 1;
          o < arguments.length;
          o++
        ) {
          for (var l in (i = Object(arguments[o])))
            p.call(i, l) && (n[l] = i[l]);
          if (f) {
            s = f(i);
            for (var r = 0; r < s.length; r++)
              y.call(i, s[r]) && (n[s[r]] = i[s[r]]);
          }
        }
        return n;
      };
  function m() {}
  m.prototype = {
    on: function (t, e, i) {
      var s = this.e || (this.e = {});
      return (s[t] || (s[t] = [])).push({ fn: e, ctx: i }), this;
    },
    once: function (t, e, i) {
      var s = this;
      function n() {
        s.off(t, n), e.apply(i, arguments);
      }
      return (n._ = e), this.on(t, n, i);
    },
    emit: function (t) {
      for (
        var e = [].slice.call(arguments, 1),
          i = ((this.e || (this.e = {}))[t] || []).slice(),
          s = 0,
          n = i.length;
        s < n;
        s++
      )
        i[s].fn.apply(i[s].ctx, e);
      return this;
    },
    off: function (t, e) {
      var i = this.e || (this.e = {}),
        s = i[t],
        n = [];
      if (s && e)
        for (var o = 0, l = s.length; o < l; o++)
          s[o].fn !== e && s[o].fn._ !== e && n.push(s[o]);
      return n.length ? (i[t] = n) : delete i[t], this;
    },
  };
  var g = m,
    w =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
  function b(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var S = b(function (t, e) {
      (function () {
        (null !== e ? e : this).Lethargy = (function () {
          function t(t, e, i, s) {
            (this.stability = null != t ? Math.abs(t) : 8),
              (this.sensitivity = null != e ? 1 + Math.abs(e) : 100),
              (this.tolerance = null != i ? 1 + Math.abs(i) : 1.1),
              (this.delay = null != s ? s : 150),
              (this.lastUpDeltas = function () {
                var t, e, i;
                for (
                  i = [], t = 1, e = 2 * this.stability;
                  1 <= e ? t <= e : e <= t;
                  1 <= e ? t++ : t--
                )
                  i.push(null);
                return i;
              }.call(this)),
              (this.lastDownDeltas = function () {
                var t, e, i;
                for (
                  i = [], t = 1, e = 2 * this.stability;
                  1 <= e ? t <= e : e <= t;
                  1 <= e ? t++ : t--
                )
                  i.push(null);
                return i;
              }.call(this)),
              (this.deltasTimestamp = function () {
                var t, e, i;
                for (
                  i = [], t = 1, e = 2 * this.stability;
                  1 <= e ? t <= e : e <= t;
                  1 <= e ? t++ : t--
                )
                  i.push(null);
                return i;
              }.call(this));
          }
          return (
            (t.prototype.check = function (t) {
              var e;
              return (
                null != (t = t.originalEvent || t).wheelDelta
                  ? (e = t.wheelDelta)
                  : null != t.deltaY
                  ? (e = -40 * t.deltaY)
                  : (null == t.detail && 0 !== t.detail) ||
                    (e = -40 * t.detail),
                this.deltasTimestamp.push(Date.now()),
                this.deltasTimestamp.shift(),
                0 < e
                  ? (this.lastUpDeltas.push(e),
                    this.lastUpDeltas.shift(),
                    this.isInertia(1))
                  : (this.lastDownDeltas.push(e),
                    this.lastDownDeltas.shift(),
                    this.isInertia(-1))
              );
            }),
            (t.prototype.isInertia = function (t) {
              var e, i, s, n, o, l, r;
              return null ===
                (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0]
                ? t
                : !(
                    this.deltasTimestamp[2 * this.stability - 2] + this.delay >
                      Date.now() && e[0] === e[2 * this.stability - 1]
                  ) &&
                    ((s = e.slice(0, this.stability)),
                    (i = e.slice(this.stability, 2 * this.stability)),
                    (r = s.reduce(function (t, e) {
                      return t + e;
                    })),
                    (o = i.reduce(function (t, e) {
                      return t + e;
                    })),
                    (l = r / s.length),
                    (n = o / i.length),
                    Math.abs(l) < Math.abs(n * this.tolerance) &&
                      this.sensitivity < Math.abs(n) &&
                      t);
            }),
            (t.prototype.showLastUpDeltas = function () {
              return this.lastUpDeltas;
            }),
            (t.prototype.showLastDownDeltas = function () {
              return this.lastDownDeltas;
            }),
            t
          );
        })();
      }.call(w));
    }),
    k = {
      hasWheelEvent: "onwheel" in document,
      hasMouseWheelEvent: "onmousewheel" in document,
      hasTouch: "ontouchstart" in document,
      hasTouchWin: navigator.msMaxTouchPoints && 1 < navigator.msMaxTouchPoints,
      hasPointer: !!window.navigator.msPointerEnabled,
      hasKeyDown: "onkeydown" in document,
      isFirefox: -1 < navigator.userAgent.indexOf("Firefox"),
    },
    T = Object.prototype.toString,
    E = Object.prototype.hasOwnProperty;
  function O(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  var L = S.Lethargy,
    _ = "virtualscroll",
    D = H,
    M = 37,
    C = 38,
    j = 39,
    B = 40,
    x = 32;
  function H(t) {
    !(function (t) {
      if (!t) return console.warn("bindAll requires at least one argument.");
      var e = Array.prototype.slice.call(arguments, 1);
      if (0 === e.length)
        for (var i in t)
          E.call(t, i) &&
            "function" == typeof t[i] &&
            "[object Function]" == T.call(t[i]) &&
            e.push(i);
      for (var s = 0; s < e.length; s++) {
        var n = e[s];
        t[n] = O(t[n], t);
      }
    })(
      this,
      "_onWheel",
      "_onMouseWheel",
      "_onTouchStart",
      "_onTouchMove",
      "_onKeyDown"
    ),
      (this.el = window),
      t && t.el && ((this.el = t.el), delete t.el),
      (this.options = v(
        {
          mouseMultiplier: 1,
          touchMultiplier: 2,
          firefoxMultiplier: 15,
          keyStep: 120,
          preventTouch: !1,
          unpreventTouchClass: "vs-touchmove-allowed",
          limitInertia: !1,
          useKeyboard: !0,
          useTouch: !0,
        },
        t
      )),
      this.options.limitInertia && (this._lethargy = new L()),
      (this._emitter = new g()),
      (this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
      (this.touchStartX = null),
      (this.touchStartY = null),
      (this.bodyTouchAction = null),
      void 0 !== this.options.passive &&
        (this.listenerOptions = { passive: this.options.passive });
  }
  function Y(t, e, i) {
    return (1 - i) * t + i * e;
  }
  function P(t) {
    var e = {};
    if (window.getComputedStyle) {
      var i = getComputedStyle(t),
        s = i.transform || i.webkitTransform || i.mozTransform,
        n = s.match(/^matrix3d\((.+)\)$/);
      return n
        ? parseFloat(n[1].split(", ")[13])
        : ((n = s.match(/^matrix\((.+)\)$/)),
          (e.x = n ? parseFloat(n[1].split(", ")[4]) : 0),
          (e.y = n ? parseFloat(n[1].split(", ")[5]) : 0),
          e);
    }
  }
  (H.prototype._notify = function (t) {
    var e = this._event;
    (e.x += e.deltaX),
      (e.y += e.deltaY),
      this._emitter.emit(_, {
        x: e.x,
        y: e.y,
        deltaX: e.deltaX,
        deltaY: e.deltaY,
        originalEvent: t,
      });
  }),
    (H.prototype._onWheel = function (t) {
      var e = this.options;
      if (!this._lethargy || !1 !== this._lethargy.check(t)) {
        var i = this._event;
        (i.deltaX = t.wheelDeltaX || -1 * t.deltaX),
          (i.deltaY = t.wheelDeltaY || -1 * t.deltaY),
          k.isFirefox &&
            1 == t.deltaMode &&
            ((i.deltaX *= e.firefoxMultiplier),
            (i.deltaY *= e.firefoxMultiplier)),
          (i.deltaX *= e.mouseMultiplier),
          (i.deltaY *= e.mouseMultiplier),
          this._notify(t);
      }
    }),
    (H.prototype._onMouseWheel = function (t) {
      if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
        var e = this._event;
        (e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0),
          (e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta),
          this._notify(t);
      }
    }),
    (H.prototype._onTouchStart = function (t) {
      var e = t.targetTouches ? t.targetTouches[0] : t;
      (this.touchStartX = e.pageX), (this.touchStartY = e.pageY);
    }),
    (H.prototype._onTouchMove = function (t) {
      var e = this.options;
      e.preventTouch &&
        !t.target.classList.contains(e.unpreventTouchClass) &&
        t.preventDefault();
      var i = this._event,
        s = t.targetTouches ? t.targetTouches[0] : t;
      (i.deltaX = (s.pageX - this.touchStartX) * e.touchMultiplier),
        (i.deltaY = (s.pageY - this.touchStartY) * e.touchMultiplier),
        (this.touchStartX = s.pageX),
        (this.touchStartY = s.pageY),
        this._notify(t);
    }),
    (H.prototype._onKeyDown = function (t) {
      var e = this._event;
      e.deltaX = e.deltaY = 0;
      var i = window.innerHeight - 40;
      switch (t.keyCode) {
        case M:
        case C:
          e.deltaY = this.options.keyStep;
          break;
        case j:
        case B:
          e.deltaY = -this.options.keyStep;
          break;
        case t.shiftKey:
          e.deltaY = i;
          break;
        case x:
          e.deltaY = -i;
          break;
        default:
          return;
      }
      this._notify(t);
    }),
    (H.prototype._bind = function () {
      k.hasWheelEvent &&
        this.el.addEventListener("wheel", this._onWheel, this.listenerOptions),
        k.hasMouseWheelEvent &&
          this.el.addEventListener(
            "mousewheel",
            this._onMouseWheel,
            this.listenerOptions
          ),
        k.hasTouch &&
          this.options.useTouch &&
          (this.el.addEventListener(
            "touchstart",
            this._onTouchStart,
            this.listenerOptions
          ),
          this.el.addEventListener(
            "touchmove",
            this._onTouchMove,
            this.listenerOptions
          )),
        k.hasPointer &&
          k.hasTouchWin &&
          ((this.bodyTouchAction = document.body.style.msTouchAction),
          (document.body.style.msTouchAction = "none"),
          this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
          this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
        k.hasKeyDown &&
          this.options.useKeyboard &&
          document.addEventListener("keydown", this._onKeyDown);
    }),
    (H.prototype._unbind = function () {
      k.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel),
        k.hasMouseWheelEvent &&
          this.el.removeEventListener("mousewheel", this._onMouseWheel),
        k.hasTouch &&
          (this.el.removeEventListener("touchstart", this._onTouchStart),
          this.el.removeEventListener("touchmove", this._onTouchMove)),
        k.hasPointer &&
          k.hasTouchWin &&
          ((document.body.style.msTouchAction = this.bodyTouchAction),
          this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0),
          this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)),
        k.hasKeyDown &&
          this.options.useKeyboard &&
          document.removeEventListener("keydown", this._onKeyDown);
    }),
    (H.prototype.on = function (t, e) {
      this._emitter.on(_, t, e);
      var i = this._emitter.e;
      i && i[_] && 1 === i[_].length && this._bind();
    }),
    (H.prototype.off = function (t, e) {
      this._emitter.off(_, t, e);
      var i = this._emitter.e;
      (!i[_] || i[_].length <= 0) && this._unbind();
    }),
    (H.prototype.reset = function () {
      var t = this._event;
      (t.x = 0), (t.y = 0);
    }),
    (H.prototype.destroy = function () {
      this._emitter.off(), this._unbind();
    });
  var X = 38,
    R = 40,
    A = 32,
    V = 9,
    I = (function (t) {
      function n() {
        var t,
          e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        return (
          s(this, n),
          ((t = c(this, l(n).call(this, e))).inertia = 0.1 * t.inertia),
          (t.isScrolling = !1),
          (t.isDraggingScrollbar = !1),
          (t.isTicking = !1),
          (t.hasScrollTicking = !1),
          (t.parallaxElements = []),
          (t.inertiaRatio = 1),
          (t.stop = !1),
          (t.checkKey = t.checkKey.bind(a(t))),
          window.addEventListener("keydown", t.checkKey, !1),
          t
        );
      }
      return (
        e(n, d),
        o(n, [
          {
            key: "init",
            value: function () {
              var e = this;
              this.html.classList.add(this.smoothClass),
                (this.instance = (function (n) {
                  for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? i(o, !0).forEach(function (t) {
                          var e, i, s;
                          (e = n),
                            (s = o[(i = t)]),
                            i in e
                              ? Object.defineProperty(e, i, {
                                  value: s,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                                })
                              : (e[i] = s);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          n,
                          Object.getOwnPropertyDescriptors(o)
                        )
                      : i(o).forEach(function (t) {
                          Object.defineProperty(
                            n,
                            t,
                            Object.getOwnPropertyDescriptor(o, t)
                          );
                        });
                  }
                  return n;
                })({ delta: { x: 0, y: 0 } }, this.instance)),
                (this.vs = new D({
                  el: this.el,
                  mouseMultiplier:
                    -1 < navigator.platform.indexOf("Win") ? 1 : 0.4,
                  touchMultiplier: 4,
                  firefoxMultiplier: 30,
                  useKeyboard: !1,
                })),
                this.vs.on(function (t) {
                  e.stop ||
                    (e.isTicking ||
                      e.isDraggingScrollbar ||
                      (requestAnimationFrame(function () {
                        e.isScrolling || e.startScrolling(), e.updateDelta(t);
                      }),
                      (e.isTicking = !0)),
                    (e.isTicking = !1));
                }),
                this.setScrollLimit(),
                this.initScrollBar(),
                this.addSections(),
                this.addElements(),
                this.detectElements(),
                this.transformElements(!0),
                h(l(n.prototype), "init", this).call(this);
            },
          },
          {
            key: "setScrollLimit",
            value: function () {
              this.instance.limit = this.el.offsetHeight - this.windowHeight;
            },
          },
          {
            key: "startScrolling",
            value: function () {
              (this.isScrolling = !0),
                this.checkScroll(),
                this.html.classList.add(this.scrollingClass);
            },
          },
          {
            key: "stopScrolling",
            value: function () {
              (this.isScrolling = !1),
                (this.inertiaRatio = 1),
                (this.instance.scroll.y = Math.round(this.instance.scroll.y)),
                this.html.classList.remove(this.scrollingClass);
            },
          },
          {
            key: "checkKey",
            value: function (t) {
              var e = this;
              switch (t.keyCode) {
                case V:
                  setTimeout(function () {
                    (document.documentElement.scrollTop = 0),
                      (document.body.scrollTop = 0),
                      document.activeElement instanceof HTMLBodyElement ||
                        e.scrollTo(
                          document.activeElement,
                          -window.innerHeight / 2
                        );
                  }, 0);
                  break;
                case X:
                  this.instance.delta.y -= 240;
                  break;
                case R:
                  this.instance.delta.y += 240;
                  break;
                case A:
                  document.activeElement instanceof HTMLInputElement ||
                    document.activeElement instanceof HTMLTextAreaElement ||
                    (t.shiftKey
                      ? (this.instance.delta.y -= window.innerHeight)
                      : (this.instance.delta.y += window.innerHeight));
                  break;
                default:
                  return;
              }
              this.instance.delta.y < 0 && (this.instance.delta.y = 0),
                this.instance.delta.y > this.instance.limit &&
                  (this.instance.delta.y = this.instance.limit),
                (this.isScrolling = !0),
                this.checkScroll(),
                this.html.classList.add(this.scrollingClass);
            },
          },
          {
            key: "checkScroll",
            value: function () {
              var t = this;
              if (this.isScrolling || this.isDraggingScrollbar) {
                this.hasScrollTicking ||
                  (requestAnimationFrame(function () {
                    return t.checkScroll();
                  }),
                  (this.hasScrollTicking = !0));
                var e = Math.abs(
                  this.instance.delta.y - this.instance.scroll.y
                );
                ((e < 0.5 && 0 != this.instance.delta.y) ||
                  (e < 0.5 && 0 == this.instance.delta.y)) &&
                  this.stopScrolling(),
                  this.updateScroll();
                for (var i = this.sections.length - 1; 0 <= i; i--)
                  this.sections[i].persistent ||
                  (this.instance.scroll.y > this.sections[i].offset &&
                    this.instance.scroll.y < this.sections[i].limit)
                    ? (this.transform(
                        this.sections[i].el,
                        0,
                        -this.instance.scroll.y
                      ),
                      (this.sections[i].el.style.visibility = "visible"),
                      (this.sections[i].inView = !0))
                    : ((this.sections[i].el.style.visibility = "hidden"),
                      (this.sections[i].inView = !1),
                      this.transform(this.sections[i].el, 0, 0));
                this.getDirection && this.addDirection(),
                  this.getSpeed &&
                    (this.addSpeed(), (this.timestamp = Date.now())),
                  this.detectElements(),
                  this.transformElements();
                var s =
                  (this.instance.scroll.y / this.instance.limit) *
                  this.scrollBarLimit;
                this.transform(this.scrollbarThumb, 0, s),
                  h(l(n.prototype), "checkScroll", this).call(this),
                  (this.hasScrollTicking = !1);
              }
            },
          },
          {
            key: "checkResize",
            value: function () {
              (this.windowHeight = window.innerHeight),
                (this.windowMiddle = this.windowHeight / 2),
                this.update();
            },
          },
          {
            key: "updateDelta",
            value: function (t) {
              (this.instance.delta.y -= t.deltaY),
                this.instance.delta.y < 0 && (this.instance.delta.y = 0),
                this.instance.delta.y > this.instance.limit &&
                  (this.instance.delta.y = this.instance.limit);
            },
          },
          {
            key: "updateScroll",
            value: function (t) {
              this.isScrolling || this.isDraggingScrollbar
                ? (this.instance.scroll.y = Y(
                    this.instance.scroll.y,
                    this.instance.delta.y,
                    this.inertia * this.inertiaRatio
                  ))
                : (this.instance.scroll.y = this.instance.delta.y);
            },
          },
          {
            key: "addDirection",
            value: function () {
              this.instance.delta.y > this.instance.scroll.y
                ? "down" !== this.instance.direction &&
                  (this.instance.direction = "down")
                : this.instance.delta.y < this.instance.scroll.y &&
                  "up" !== this.instance.direction &&
                  (this.instance.direction = "up");
            },
          },
          {
            key: "addSpeed",
            value: function () {
              this.instance.delta.y != this.instance.scroll.y
                ? (this.instance.speed =
                    (this.instance.delta.y - this.instance.scroll.y) /
                    (Date.now() - this.timestamp))
                : (this.instance.speed = 0);
            },
          },
          {
            key: "initScrollBar",
            value: function () {
              (this.scrollbar = document.createElement("span")),
                (this.scrollbarThumb = document.createElement("span")),
                this.scrollbar.classList.add("".concat(this.scrollbarClass)),
                this.scrollbarThumb.classList.add(
                  "".concat(this.scrollbarClass, "_thumb")
                ),
                this.scrollbar.append(this.scrollbarThumb),
                document.body.append(this.scrollbar),
                (this.scrollbarThumb.style.height = "".concat(
                  (window.innerHeight * window.innerHeight) /
                    (this.instance.limit + window.innerHeight),
                  "px"
                )),
                (this.scrollBarLimit =
                  window.innerHeight -
                  this.scrollbarThumb.getBoundingClientRect().height),
                (this.getScrollBar = this.getScrollBar.bind(this)),
                (this.releaseScrollBar = this.releaseScrollBar.bind(this)),
                (this.moveScrollBar = this.moveScrollBar.bind(this)),
                this.scrollbarThumb.addEventListener(
                  "mousedown",
                  this.getScrollBar
                ),
                window.addEventListener("mouseup", this.releaseScrollBar),
                window.addEventListener("mousemove", this.moveScrollBar);
            },
          },
          {
            key: "reinitScrollBar",
            value: function () {
              (this.scrollbarThumb.style.height = "".concat(
                (window.innerHeight * window.innerHeight) / this.instance.limit,
                "px"
              )),
                (this.scrollBarLimit =
                  window.innerHeight -
                  this.scrollbarThumb.getBoundingClientRect().height);
            },
          },
          {
            key: "destroyScrollBar",
            value: function () {
              this.scrollbarThumb.removeEventListener(
                "mousedown",
                this.getScrollBar
              ),
                window.removeEventListener("mouseup", this.releaseScrollBar),
                window.removeEventListener("mousemove", this.moveScrollBar),
                this.scrollbar.remove();
            },
          },
          {
            key: "getScrollBar",
            value: function (t) {
              (this.isDraggingScrollbar = !0),
                this.checkScroll(),
                this.html.classList.remove(this.scrollingClass),
                this.html.classList.add(this.draggingClass);
            },
          },
          {
            key: "releaseScrollBar",
            value: function (t) {
              (this.isDraggingScrollbar = !1),
                this.html.classList.add(this.scrollingClass),
                this.html.classList.remove(this.draggingClass);
            },
          },
          {
            key: "moveScrollBar",
            value: function (e) {
              var i = this;
              !this.isTicking &&
                this.isDraggingScrollbar &&
                (requestAnimationFrame(function () {
                  var t =
                    (((100 * e.clientY) / window.innerHeight) *
                      i.instance.limit) /
                    100;
                  0 < t && t < i.instance.limit && (i.instance.delta.y = t);
                }),
                (this.isTicking = !0)),
                (this.isTicking = !1);
            },
          },
          {
            key: "addElements",
            value: function () {
              var b = this;
              (this.els = []), (this.parallaxElements = []);
              var S = 0;
              this.sections.forEach(function (t, w) {
                b.sections[w].el
                  .querySelectorAll("[data-".concat(b.name, "]"))
                  .forEach(function (t, e) {
                    var i,
                      s,
                      n = t.dataset[b.name + "Class"] || b.class,
                      o = t.dataset[b.name + "Repeat"],
                      l = t.dataset[b.name + "Call"],
                      r = t.dataset[b.name + "Position"],
                      a = t.dataset[b.name + "Delay"],
                      c = t.dataset[b.name + "Direction"],
                      h = "string" == typeof t.dataset[b.name + "Sticky"],
                      u =
                        !!t.dataset[b.name + "Speed"] &&
                        parseFloat(t.dataset[b.name + "Speed"]) / 10,
                      d =
                        "string" == typeof t.dataset[b.name + "Offset"] &&
                        t.dataset[b.name + "Offset"].split(","),
                      f = t.dataset[b.name + "Target"];
                    s = void 0 !== f ? document.querySelector("".concat(f)) : t;
                    var p =
                        (i = b.sections[w].inView
                          ? s.getBoundingClientRect().top +
                            b.instance.scroll.y -
                            P(s).y
                          : s.getBoundingClientRect().top -
                            P(b.sections[w].el).y -
                            P(s).y) + s.offsetHeight,
                      y = (p - i) / 2 + i;
                    if (h) {
                      var v = t.getBoundingClientRect().top - i;
                      y =
                        ((p =
                          (i += window.innerHeight) +
                          s.offsetHeight -
                          window.innerHeight -
                          t.offsetHeight -
                          v) -
                          i) /
                          2 +
                        i;
                    }
                    o = "false" != o && (null != o || b.repeat);
                    var m = [0, 0];
                    if (d)
                      for (e = 0; e < d.length; e++)
                        d[e].includes("%")
                          ? (m[e] = parseInt(
                              (d[e].replace("%", "") * b.windowHeight) / 100
                            ))
                          : (m[e] = parseInt(d[e]));
                    var g = {
                      el: t,
                      id: S,
                      class: n,
                      top: i + m[0],
                      middle: y,
                      bottom: p - m[1],
                      offset: d,
                      repeat: o,
                      inView: !1,
                      call: l,
                      speed: u,
                      delay: a,
                      position: r,
                      target: s,
                      direction: c,
                      sticky: h,
                    };
                    S++,
                      b.els.push(g),
                      (!1 !== u || h) && b.parallaxElements.push(g);
                  });
              });
            },
          },
          {
            key: "addSections",
            value: function () {
              var r = this;
              this.sections = [];
              var t = this.el.querySelectorAll(
                "[data-".concat(this.name, "-section]")
              );
              0 === t.length && (t = [this.el]),
                t.forEach(function (t, e) {
                  var i =
                      t.getBoundingClientRect().top -
                      1.5 * window.innerHeight -
                      P(t).y,
                    s =
                      i +
                      t.getBoundingClientRect().height +
                      2 * window.innerHeight,
                    n = "string" == typeof t.dataset[r.name + "Persistent"],
                    o = !1;
                  r.instance.scroll.y >= i &&
                    r.instance.scroll.y <= s &&
                    (o = !0);
                  var l = {
                    el: t,
                    offset: i,
                    limit: s,
                    inView: o,
                    persistent: n,
                  };
                  r.sections[e] = l;
                });
            },
          },
          {
            key: "transform",
            value: function (t, e, i, s) {
              var n;
              if (s) {
                var o = P(t),
                  l = Y(o.x, e, s),
                  r = Y(o.y, i, s);
                n = "matrix(1,0,0,1,".concat(l, ",").concat(r, ")");
              } else n = "matrix(1,0,0,1,".concat(e, ",").concat(i, ")");
              (t.style.webkitTransform = n),
                (t.style.msTransform = n),
                (t.style.transform = n);
            },
          },
          {
            key: "transformElements",
            value: function (s) {
              var n = this,
                o = this.instance.scroll.y + this.windowHeight,
                l = this.instance.scroll.y + this.windowMiddle;
              this.parallaxElements.forEach(function (t, e) {
                var i = !1;
                if ((s && (i = 0), t.inView))
                  switch (t.position) {
                    case "top":
                      i = n.instance.scroll.y * -t.speed;
                      break;
                    case "elementTop":
                      i = (o - t.top) * -t.speed;
                      break;
                    case "bottom":
                      i = (n.instance.limit - o + n.windowHeight) * t.speed;
                      break;
                    default:
                      i = (l - t.middle) * -t.speed;
                  }
                t.sticky &&
                  (i = t.inView
                    ? n.instance.scroll.y - t.top + window.innerHeight
                    : n.instance.scroll.y < t.top - window.innerHeight &&
                      n.instance.scroll.y < t.top - window.innerHeight / 2
                    ? 0
                    : n.instance.scroll.y > t.bottom &&
                      n.instance.scroll.y > t.bottom + 100 &&
                      t.bottom - t.top + window.innerHeight),
                  !1 !== i &&
                    ("horizontal" === t.direction
                      ? n.transform(t.el, i, 0, !s && t.delay)
                      : n.transform(t.el, 0, i, !s && t.delay));
              });
            },
          },
          {
            key: "scrollTo",
            value: function (t, e) {
              var i,
                s = this,
                n = e ? parseInt(e) : 0;
              if (
                ("string" == typeof t
                  ? "top" === t
                    ? (n = 0)
                    : "bottom" === t
                    ? (n = this.instance.limit)
                    : (i = document.querySelectorAll(t)[0])
                  : t.target || (i = t),
                i)
              ) {
                var o = i.getBoundingClientRect().top + this.instance.scroll.y,
                  l = (function (t) {
                    for (var e = []; t && t !== document; t = t.parentNode)
                      e.push(t);
                    return e;
                  })(i).find(function (e) {
                    return s.sections.find(function (t) {
                      return t.el == e;
                    });
                  }),
                  r = 0;
                l && (r = P(l).y), (n = o + n - r);
              }
              (n -= this.instance.scroll.y),
                (this.instance.delta.y = Math.min(n, this.instance.limit)),
                (this.inertiaRatio = Math.min(
                  4e3 /
                    Math.abs(this.instance.delta.y - this.instance.scroll.y),
                  0.8
                )),
                (this.isScrolling = !0),
                this.checkScroll(),
                this.html.classList.add(this.scrollingClass);
            },
          },
          {
            key: "update",
            value: function () {
              this.setScrollLimit(),
                this.addSections(),
                this.addElements(),
                this.detectElements(),
                this.updateScroll(),
                this.transformElements(!0);
            },
          },
          {
            key: "startScroll",
            value: function () {
              this.stop = !1;
            },
          },
          {
            key: "stopScroll",
            value: function () {
              this.stop = !0;
            },
          },
          {
            key: "setScroll",
            value: function (t, e) {
              this.instance = { scroll: { x: t, y: e }, delta: { x: t, y: e } };
            },
          },
          {
            key: "destroy",
            value: function () {
              h(l(n.prototype), "destroy", this).call(this),
                this.stopScrolling(),
                this.html.classList.remove(this.smoothClass),
                this.vs.destroy(),
                this.destroyScrollBar(),
                window.removeEventListener("keydown", this.checkKey, !1);
            },
          },
        ]),
        n
      );
    })(),
    W = (function () {
      function e() {
        var t =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        s(this, e), (this.options = t), Object.assign(this, u, t), this.init();
      }
      return (
        o(e, [
          {
            key: "init",
            value: function () {
              this.smoothMobile ||
                (this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent
                )),
                !0 !== this.smooth || this.isMobile
                  ? (this.scroll = new t(this.options))
                  : (this.scroll = new I(this.options)),
                this.scroll.init(),
                window.location.hash &&
                  this.scroll.scrollTo(window.location.hash);
            },
          },
          {
            key: "update",
            value: function () {
              this.scroll.update();
            },
          },
          {
            key: "start",
            value: function () {
              this.scroll.startScroll();
            },
          },
          {
            key: "stop",
            value: function () {
              this.scroll.stopScroll();
            },
          },
          {
            key: "scrollTo",
            value: function (t, e) {
              this.scroll.scrollTo(t, e);
            },
          },
          {
            key: "setScroll",
            value: function (t, e) {
              this.scroll.setScroll(t, e);
            },
          },
          {
            key: "on",
            value: function (t, e) {
              this.scroll.setEvents(t, e);
            },
          },
          {
            key: "destroy",
            value: function () {
              this.scroll.destroy();
            },
          },
        ]),
        e
      );
    })(),
    K = b(function (t, e) {
      t.exports = {
        polyfill: function () {
          var a = window,
            c = document;
          if (
            !(
              "scrollBehavior" in c.documentElement.style &&
              !0 !== a.__forceSmoothScrollPolyfill__
            )
          ) {
            var t,
              e = a.HTMLElement || a.Element,
              l = 468,
              h = {
                scroll: a.scroll || a.scrollTo,
                scrollBy: a.scrollBy,
                elementScroll: e.prototype.scroll || d,
                scrollIntoView: e.prototype.scrollIntoView,
              },
              u =
                a.performance && a.performance.now
                  ? a.performance.now.bind(a.performance)
                  : Date.now,
              i =
                ((t = a.navigator.userAgent),
                new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(t)
                  ? 1
                  : 0);
            (a.scroll = a.scrollTo = function () {
              void 0 !== arguments[0] &&
                (!0 !== s(arguments[0])
                  ? r.call(
                      a,
                      c.body,
                      void 0 !== arguments[0].left
                        ? ~~arguments[0].left
                        : a.scrollX || a.pageXOffset,
                      void 0 !== arguments[0].top
                        ? ~~arguments[0].top
                        : a.scrollY || a.pageYOffset
                    )
                  : h.scroll.call(
                      a,
                      void 0 !== arguments[0].left
                        ? arguments[0].left
                        : "object" != typeof arguments[0]
                        ? arguments[0]
                        : a.scrollX || a.pageXOffset,
                      void 0 !== arguments[0].top
                        ? arguments[0].top
                        : void 0 !== arguments[1]
                        ? arguments[1]
                        : a.scrollY || a.pageYOffset
                    ));
            }),
              (a.scrollBy = function () {
                void 0 !== arguments[0] &&
                  (s(arguments[0])
                    ? h.scrollBy.call(
                        a,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : "object" != typeof arguments[0]
                          ? arguments[0]
                          : 0,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : 0
                      )
                    : r.call(
                        a,
                        c.body,
                        ~~arguments[0].left + (a.scrollX || a.pageXOffset),
                        ~~arguments[0].top + (a.scrollY || a.pageYOffset)
                      ));
              }),
              (e.prototype.scroll = e.prototype.scrollTo = function () {
                if (void 0 !== arguments[0])
                  if (!0 !== s(arguments[0])) {
                    var t = arguments[0].left,
                      e = arguments[0].top;
                    r.call(
                      this,
                      this,
                      void 0 === t ? this.scrollLeft : ~~t,
                      void 0 === e ? this.scrollTop : ~~e
                    );
                  } else {
                    if (
                      "number" == typeof arguments[0] &&
                      void 0 === arguments[1]
                    )
                      throw new SyntaxError("Value could not be converted");
                    h.elementScroll.call(
                      this,
                      void 0 !== arguments[0].left
                        ? ~~arguments[0].left
                        : "object" != typeof arguments[0]
                        ? ~~arguments[0]
                        : this.scrollLeft,
                      void 0 !== arguments[0].top
                        ? ~~arguments[0].top
                        : void 0 !== arguments[1]
                        ? ~~arguments[1]
                        : this.scrollTop
                    );
                  }
              }),
              (e.prototype.scrollBy = function () {
                void 0 !== arguments[0] &&
                  (!0 !== s(arguments[0])
                    ? this.scroll({
                        left: ~~arguments[0].left + this.scrollLeft,
                        top: ~~arguments[0].top + this.scrollTop,
                        behavior: arguments[0].behavior,
                      })
                    : h.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left + this.scrollLeft
                          : ~~arguments[0] + this.scrollLeft,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top + this.scrollTop
                          : ~~arguments[1] + this.scrollTop
                      ));
              }),
              (e.prototype.scrollIntoView = function () {
                if (!0 !== s(arguments[0])) {
                  var t = (function (t) {
                      for (
                        ;
                        t !== c.body &&
                        !1 ===
                          ((i = n((e = t), "Y") && o(e, "Y")),
                          (s = n(e, "X") && o(e, "X")),
                          i || s);

                      )
                        t = t.parentNode || t.host;
                      var e, i, s;
                      return t;
                    })(this),
                    e = t.getBoundingClientRect(),
                    i = this.getBoundingClientRect();
                  t !== c.body
                    ? (r.call(
                        this,
                        t,
                        t.scrollLeft + i.left - e.left,
                        t.scrollTop + i.top - e.top
                      ),
                      "fixed" !== a.getComputedStyle(t).position &&
                        a.scrollBy({
                          left: e.left,
                          top: e.top,
                          behavior: "smooth",
                        }))
                    : a.scrollBy({
                        left: i.left,
                        top: i.top,
                        behavior: "smooth",
                      });
                } else
                  h.scrollIntoView.call(
                    this,
                    void 0 === arguments[0] || arguments[0]
                  );
              });
          }
          function d(t, e) {
            (this.scrollLeft = t), (this.scrollTop = e);
          }
          function s(t) {
            if (
              null === t ||
              "object" != typeof t ||
              void 0 === t.behavior ||
              "auto" === t.behavior ||
              "instant" === t.behavior
            )
              return !0;
            if ("object" == typeof t && "smooth" === t.behavior) return !1;
            throw new TypeError(
              "behavior member of ScrollOptions " +
                t.behavior +
                " is not a valid value for enumeration ScrollBehavior."
            );
          }
          function n(t, e) {
            return "Y" === e
              ? t.clientHeight + i < t.scrollHeight
              : "X" === e
              ? t.clientWidth + i < t.scrollWidth
              : void 0;
          }
          function o(t, e) {
            var i = a.getComputedStyle(t, null)["overflow" + e];
            return "auto" === i || "scroll" === i;
          }
          function f(t) {
            var e,
              i,
              s,
              n,
              o = (u() - t.startTime) / l;
            (n = o = 1 < o ? 1 : o),
              (e = 0.5 * (1 - Math.cos(Math.PI * n))),
              (i = t.startX + (t.x - t.startX) * e),
              (s = t.startY + (t.y - t.startY) * e),
              t.method.call(t.scrollable, i, s),
              (i === t.x && s === t.y) || a.requestAnimationFrame(f.bind(a, t));
          }
          function r(t, e, i) {
            var s,
              n,
              o,
              l,
              r = u();
            (l =
              t === c.body
                ? ((n = (s = a).scrollX || a.pageXOffset),
                  (o = a.scrollY || a.pageYOffset),
                  h.scroll)
                : ((n = (s = t).scrollLeft), (o = t.scrollTop), d)),
              f({
                scrollable: s,
                method: l,
                startTime: r,
                startX: n,
                startY: o,
                x: e,
                y: i,
              });
          }
        },
      };
    });
  K.polyfill;
  K.polyfill(),
    document.documentElement.classList.add("is-loaded"),
    document.documentElement.classList.remove("is-loading"),
    setTimeout(function () {
      document.documentElement.classList.add("is-ready");
    }, 300),
    setTimeout(function () {
      var i = new W({
          el: document.querySelector("#js-scroll"),
          smooth: !0,
          getSpeed: !0,
          getDirection: !0,
        }),
        n = [],
        o = [];
      i.on("scroll", function (t) {
        var e = (360 * t.scroll.y) / t.limit * 3;
        var header = document.getElementsByClassName("header-background")[0];
        (i.el.style.backgroundColor = "hsl(".concat(e, ", 98%, 98%)")),
          n.forEach(function (t) {
            t.el.style.backgroundColor = "hsl(".concat(e, ", 98%, 98%)");
          }),
          o.forEach(function (t) {
            t.el.style.color = "hsl(".concat(e, ", 98%, 98%)");
          }),
          document.documentElement.setAttribute("data-direction", t.direction);
          // header.style.backgroundColor = "hsl(".concat(e, ", 95%, 95%)");
          // console.log("before scrollY"+scrollY);
          scrollY = t.scroll.y;
          // console.log("after scrollY"+scrollY);
          if(t.scroll.y>30) {
            header.classList.add("trans");
            header.classList.add("solid");
            
            

          } else {
            header.classList.add("trans");
            header.classList.remove("solid");
            setTimeout(() => {
              header.classList.remove("trans");
            }, 500);

          }
      }),
        i.on("call", function (t, e, i) {
          if ("dynamicBackground" === t)
            if ("enter" === e) n.push({ id: i.id, el: i.el });
            else
              for (var s = 0; s < n.length; s++)
                i.id === n[s].id && n.splice(s, 1);
          else if ("dynamicColor" === t)
            if ("enter" === e) o.push({ id: i.id, el: i.el });
            else
              for (s = 0; s < o.length; s++) i.id === o[s].id && o.splice(s, 1);
        });
    }, 1e3);
})();

