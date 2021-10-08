(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([[130], {
    1458: function(e, t, n) {
        e.exports = n.p + "files/b9db90eabbebf64aafeda549239705da/close.svg"
    },
    1672: function(e, t, n) {
        "use strict";
        var r = n(1)
          , o = n.n(r)
          , a = n(67)
          , i = n(56)
          , c = n(1673)
          , s = n.n(c)
          , u = n(1458)
          , l = n.n(u);
        function p(e) {
            return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function f(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function d(e, t) {
            return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function h(e) {
            return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function m(e, t) {
            return (m = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var b = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (e = d(this, h(t).apply(this, arguments))).state = {
                    isOpen: !1
                },
                e.close = function() {
                    e.setState({
                        isOpen: !1
                    })
                }
                ,
                e
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && m(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "componentDidUpdate",
                value: function(e) {
                    this.props.show && e.show !== this.props.show && this.setState({
                        isOpen: !0
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return o.a.createElement(o.a.Fragment, null, this.props.show && o.a.createElement("div", {
                        className: Object(i.b)(s.a.wrapper, this.props.mobile && s.a.mobile, this.state.isOpen && s.a.open, this.props.relative && s.a.relative)
                    }, o.a.createElement("div", {
                        className: s.a.notification
                    }, this.props.notification, o.a.createElement("img", {
                        src: l.a,
                        className: s.a.close,
                        onClick: this.close
                    }))), o.a.createElement("div", {
                        className: Object(i.b)(s.a.page, this.props.mobile && s.a.mobileContent, this.state.isOpen && s.a.open)
                    }, this.props.children))
                }
            }]) && f(n.prototype, r),
            a && f(n, a),
            t
        }(a.b);
        t.a = b
    },
    1673: function(e, t, n) {
        e.exports = {
            notification: "a3tX5-notification",
            close: "_2qRdH-close",
            mobileContent: "_1NCA3-mobileContent",
            wrapper: "_2HN-N-wrapper",
            mobile: "_6slIt-mobile",
            open: "K73AD-open",
            relative: "_1n9tg-relative",
            page: "_2uehK-page"
        }
    },
    2601: function(e, t, n) {
        e.exports = {
            page: "_1bZiL-page",
            content: "_3yIH_-content"
        }
    },
    473: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(1)
          , o = n.n(r)
          , a = n(142)
          , i = n(109)
          , c = n(226)
          , s = n(36)
          , u = n(997)
          , l = n(145)
          , p = n(845)
          , f = n(996)
          , d = n(878)
          , h = n(929)
          , m = n(1672)
          , b = n(293)
          , y = n(864)
          , g = n(858)
          , v = n(2601)
          , w = n.n(v);
        function O(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function S(e, t) {
            return !t || "object" !== k(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function E(e) {
            return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function j(e, t) {
            return (j = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function k(e) {
            return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var P = function(e, t, n, r) {
            var o, a = arguments.length, i = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : k(Reflect)) && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, t, n, r);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (o = e[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, n, i) : o(t, n)) || i);
            return a > 3 && i && Object.defineProperty(t, n, i),
            i
        }
          , _ = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (e = S(this, E(t).apply(this, arguments))).state = {
                    sessionExpired: !1
                },
                e.handleAccept = function() {
                    var t = e.getCtx().nav;
                    if (Number(Object(s.c)("GrammarlyDiscountValue")) > 0)
                        t.navigate({
                            routeId: "upgrade",
                            query: t.query
                        });
                    else {
                        var n = Object(s.c)(s.a.funnelNavigateToAfterMobileSignin);
                        if (n)
                            return Object(s.b)(s.a.funnelNavigateToAfterMobileSignin),
                            void t.navigate(JSON.parse(n));
                        Object(u.b)(t).catch((function() {
                            t.navigate({
                                routeId: "mobileDesktopOnly",
                                query: t.query
                            })
                        }
                        ))
                    }
                }
                ,
                e
            }
            var n, r, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && j(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "componentDidMount",
                value: function() {
                    var e = this.getCtx().nav.query;
                    this.setState({
                        sessionExpired: !!e.sessionExpired
                    }),
                    "success_reset" === e.status && this.props.notificationStore.pushSuccessNotification(o.a.createElement("span", null, "Your password has been reset.", o.a.createElement("br", null), "You can now log in."))
                }
            }, {
                key: "render",
                value: function() {
                    return o.a.createElement(p.a, {
                        className: w.a.page,
                        deprecatedStyle: !0
                    }, o.a.createElement(m.a, {
                        notification: "Your last session has expired. Please login now to continue to your desired destination.",
                        show: this.state.sessionExpired,
                        mobile: !0
                    }, o.a.createElement(a.a, {
                        title: "Login | Grammarly"
                    }, Object(d.a)({
                        nav: this.getCtx().nav,
                        routeId: "signin"
                    }), Object(f.a)(), Object(b.a)()), o.a.createElement(g.a, null), o.a.createElement("div", {
                        className: w.a.content
                    }, Object(l.d)(["upgrade", "mobileDesktopOnly"])(o.a.createElement(h.a, {
                        handleAccept: this.handleAccept,
                        displayType: y.a.buildIn,
                        signupFlow: y.b.buildIn
                    })))))
                }
            }]) && O(n.prototype, r),
            i && O(n, i),
            t
        }(c.a);
        _ = P([Object(c.b)()], _),
        t.default = Object(i.a)("notificationStore")(Object(i.c)(_))
    },
    837: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }
        ));
        var r, o, a, i = n(1), c = n.n(i), s = n(67), u = n(56), l = n(287), p = n(97), f = n(924), d = n.n(f);
        function h(e) {
            return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function m() {
            return (m = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function b(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function y(e, t) {
            return !t || "object" !== h(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function g(e) {
            return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function v(e, t) {
            return (v = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        !function(e) {
            e.flat = "flat",
            e.green = "green",
            e.yellow = "yellow",
            e.blue = "blue",
            e.purple = "purple",
            e.transparent = "transparent",
            e.gray = "gray",
            e.whiteGreen = "whiteGreen",
            e.whitePurple = "whitePurple",
            e.whiteGreenGrey = "whiteGreenGrey",
            e.whitePurpleGrey = "whitePurpleGrey",
            e.whiteGreenGreen = "whiteGreenGreen",
            e.whiteYellowYellow = "whiteYellowYellow",
            e.whiteGrayGray = "whiteGrayGray"
        }(r || (r = {})),
        function(e) {
            e.round = "round",
            e.rect = "rect"
        }(o || (o = {})),
        function(e) {
            e.large = "large",
            e.small = "small",
            e.flat = "flat"
        }(a || (a = {}));
        var w = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                y(this, g(t).apply(this, arguments))
            }
            var n, i, s;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && v(e, t)
            }(t, e),
            n = t,
            (i = [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.submit
                      , n = e.routeId
                      , r = e.waypoint
                      , o = e.href;
                    return n || r || o ? this.link : t ? this.submit : this.button
                }
            }, {
                key: "className",
                get: function() {
                    var e, t = this.props, n = t.disabled, i = t.loading, c = t.colorScheme, s = void 0 === c ? r.flat : c, l = t.shape, p = void 0 === l ? o.round : l, f = t.size, h = void 0 === f ? a.large : f, m = t.className;
                    return Object(u.b)(d.a.basicButton, (e = s,
                    {
                        flat: d.a.schemeFlat,
                        green: d.a.schemeGreen,
                        yellow: d.a.schemeYellow,
                        blue: d.a.schemeBlue,
                        purple: d.a.schemePurple,
                        gray: d.a.schemeGray,
                        transparent: d.a.schemeTransparent,
                        whiteGreen: d.a.schemeWhiteGreen,
                        whitePurple: d.a.schemeWhitePurple,
                        whiteGreenGrey: d.a.schemeWhiteGreenGrey,
                        whitePurpleGrey: d.a.schemeWhitePurpleGrey,
                        whiteGreenGreen: d.a.schemeWhiteGreenGreen,
                        whiteYellowYellow: d.a.schemeWhiteYellowYellow,
                        whiteGrayGray: d.a.schemeWhiteGrayGray
                    }[e]), function(e) {
                        return {
                            round: d.a.shapeRound,
                            rect: d.a.shapeRect
                        }[e]
                    }(p), function(e) {
                        return {
                            large: d.a.sizeLarge,
                            small: d.a.sizeSmall,
                            flat: d.a.sizeFlat
                        }[e]
                    }(h), i && d.a.loading, n && d.a.disabled, m)
                }
            }, {
                key: "submit",
                get: function() {
                    var e = this.props
                      , t = e.children
                      , n = e.qa
                      , r = e.loading
                      , o = e.disabled
                      , a = e.disableSubmit;
                    return c.a.createElement("button", {
                        type: "submit",
                        disabled: o || r || a,
                        "data-qa": n,
                        className: this.className
                    }, c.a.createElement("span", {
                        className: d.a.submitButtonContent
                    }, r ? c.a.createElement(l.a, {
                        color: "neutral0"
                    }) : t))
                }
            }, {
                key: "button",
                get: function() {
                    var e = this.props
                      , t = e.loading
                      , n = e.disabled
                      , r = e.disableSubmit
                      , o = e.qa
                      , a = e.children
                      , i = e.onClick
                      , s = e.onMouseEnter
                      , u = !t && !n && !r;
                    return c.a.createElement("div", {
                        className: this.className,
                        "data-qa": o,
                        onClick: function(e) {
                            return u && i && i(e)
                        },
                        onMouseEnter: function(e) {
                            return u && s && s(e)
                        }
                    }, t ? c.a.createElement(l.a, {
                        color: "neutral0"
                    }) : a)
                }
            }, {
                key: "link",
                get: function() {
                    var e = this.props
                      , t = e.children
                      , n = e.qa
                      , r = e.waypoint
                      , o = e.routeId
                      , a = e.href
                      , i = e.target
                      , s = e.onBeforeFollow
                      , u = e.onMouseEnter
                      , l = a ? {
                        href: a,
                        onBeforeFollow: s
                    } : {
                        routeId: o,
                        waypoint: r,
                        onBeforeFollow: s
                    };
                    return c.a.createElement(p.b, m({
                        target: i,
                        onMouseEnter: u,
                        className: this.className,
                        qa: n
                    }, l), t)
                }
            }]) && b(n.prototype, i),
            s && b(n, s),
            t
        }(s.b);
        t.b = w
    },
    840: function(e, t, n) {
        "use strict";
        var r, o;
        n.d(t, "c", (function() {
            return r
        }
        )),
        n.d(t, "b", (function() {
            return o
        }
        )),
        n.d(t, "a", (function() {
            return m
        }
        )),
        function(e) {
            e.Active = "Active",
            e.Disabled = "Disabled",
            e.Loading = "Loading"
        }(r || (r = {})),
        function(e) {
            e.Green = "Green",
            e.GreenInvertedGrayBg = "GreenInvertedGrayBg",
            e.GreenInvertedWhiteBg = "GreenInvertedWhiteBg",
            e.Yellow = "Yellow",
            e.YellowInvertedGrayBg = "YellowInvertedGrayBg",
            e.YellowInvertedWhiteBg = "YellowInvertedWhiteBg",
            e.Blue = "Blue",
            e.BlueInvertedGrayBg = "BlueInvertedGrayBg",
            e.BlueInvertedWhiteBg = "BlueInvertedWhiteBg"
        }(o || (o = {}));
        var a, i = n(1), c = n(56), s = n(287), u = n(835), l = n(97), p = n(869), f = n.n(p);
        function d(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var h = (d(a = {}, o.Green, f.a.colorGreen),
        d(a, o.GreenInvertedGrayBg, f.a.colorGreenInvertedGrayBg),
        d(a, o.GreenInvertedWhiteBg, f.a.colorGreenInvertedWhiteBg),
        d(a, o.Yellow, f.a.colorYellow),
        d(a, o.YellowInvertedGrayBg, f.a.colorYellowInvertedGrayBg),
        d(a, o.YellowInvertedWhiteBg, f.a.colorYellowInvertedWhiteBg),
        d(a, o.Blue, f.a.colorBlue),
        d(a, o.BlueInvertedGrayBg, f.a.colorBlueInvertedGrayBg),
        d(a, o.BlueInvertedWhiteBg, f.a.colorBlueInvertedWhiteBg),
        a);
        var m = i.forwardRef((function(e, t) {
            var n = e.text
              , a = e.subtext
              , p = e.iconLeft
              , d = e.iconRight
              , m = e.widthPx
              , b = e.widthPercent
              , y = e.qa
              , g = e.color
              , v = void 0 === g ? o.Green : g
              , w = e.status
              , O = void 0 === w ? r.Active : w
              , S = e.compact
              , E = void 0 !== S && S
              , j = e.submit
              , k = {
                width: m && "".concat(m, "px") || b && "".concat(b, "%") || void 0
            }
              , P = Object(c.a)(f.a.basic, E ? f.a.sizeSmall : f.a.sizeLarge, function(e) {
                return h[e]
            }(v), (m || b) && f.a.minimumPadding, O === r.Disabled && f.a.disabled, O === r.Loading && f.a.loading)
              , _ = i.createElement(i.Fragment, null, O === r.Loading && i.createElement("span", {
                className: f.a.loader
            }, i.createElement(s.a, {
                color: "currentColor"
            })), i.createElement("div", {
                className: f.a.content
            }, p && i.createElement(i.Fragment, null, p, i.createElement(u.b, {
                multiplier: 1
            })), i.createElement("span", {
                className: f.a.text
            }, n), a && i.createElement(i.Fragment, null, i.createElement(u.b, {
                multiplier: 1
            }), i.createElement("span", {
                className: f.a.subtext
            }, a)), d && i.createElement(i.Fragment, null, i.createElement(u.b, {
                multiplier: 1
            }), d)));
            if (O !== r.Active)
                return i.createElement("button", {
                    ref: t,
                    style: k,
                    className: P,
                    type: j ? "submit" : "button",
                    "data-qa": y,
                    disabled: !0
                }, _);
            if ("waypoint"in e) {
                var C = e.waypoint
                  , x = e.target
                  , N = e.onBeforeFollow;
                return i.createElement(l.b, {
                    ref: t,
                    style: k,
                    className: P,
                    waypoint: C,
                    target: x,
                    onBeforeFollow: N,
                    qa: y,
                    isSamePage: C.isSamePage
                }, _)
            }
            if ("href"in e) {
                var I = e.href
                  , A = e.target
                  , R = e.download
                  , M = e.onBeforeFollow;
                return i.createElement(l.b, {
                    ref: t,
                    style: k,
                    className: P,
                    href: I,
                    download: R,
                    target: A,
                    onBeforeFollow: M,
                    qa: y
                }, _)
            }
            if ("submit"in e && !0 === j)
                return i.createElement("button", {
                    ref: t,
                    style: k,
                    className: P,
                    type: "submit",
                    "data-qa": y
                }, _);
            var T = e.onClick;
            return i.createElement("button", {
                ref: t,
                style: k,
                className: P,
                type: "button",
                onClick: T,
                "data-qa": y
            }, _)
        }
        ))
    },
    845: function(e, t, n) {
        "use strict";
        var r = n(1)
          , o = n.n(r)
          , a = n(887)
          , i = n(834)
          , c = n(13)
          , s = n(109)
          , u = n(67)
          , l = n(288)
          , p = n(56)
          , f = n(97)
          , d = n(847)
          , h = n.n(d)
          , m = n(848)
          , b = n.n(m)
          , y = n(849)
          , g = n.n(y)
          , v = n(883)
          , w = n.n(v);
        function O(e) {
            return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function S(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)))
                    return;
                var n = []
                  , r = !0
                  , o = !1
                  , a = void 0;
                try {
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    o = !0,
                    a = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (o)
                            throw a
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        function E(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++)
                        n[t] = e[t];
                    return n
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
                    return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        function j(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function k(e, t) {
            return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function P(e) {
            return (P = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function _(e, t) {
            return (_ = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var C = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (e = k(this, P(t).apply(this, arguments))).notificationBlocks = {},
                e.notificationBlocksHeight = {},
                e.state = {
                    isClient: !1
                },
                e
            }
            var n, r, s;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && _(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "componentDidMount",
                value: function() {
                    this.setState({
                        isClient: !0
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    var e = this;
                    this.props.notificationStore.list.forEach((function(t) {
                        var n = t.id
                          , r = e.notificationBlocks[n];
                        e.notificationBlocksHeight[n] = r ? r.clientHeight + 10 : 0
                    }
                    ))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.popupStore
                      , n = e.children
                      , r = e.className
                      , c = e.deprecatedStyle
                      , s = this.notificationData
                      , u = s.notificationList
                      , l = s.notificationScroll;
                    return o.a.createElement("div", {
                        className: Object(p.b)(c ? w.a.pageDeprecatedStyle : w.a.page, r)
                    }, o.a.createElement("div", {
                        className: Object(p.b)(w.a.notificationStack, l && w.a.scroll)
                    }, o.a.createElement(a.a, null, (u || []).map((function(e, t) {
                        return o.a.createElement(i.a, {
                            key: t,
                            classNames: {
                                enter: w.a.notificationEnter,
                                enterActive: w.a.notificationEnterActive,
                                enterDone: w.a.notificationEnterActive,
                                exit: w.a.notificationExit,
                                exitActive: w.a.notificationExitActive,
                                exitDone: w.a.notificationExitActive
                            },
                            timeout: 500,
                            in: Boolean(u)
                        }, e)
                    }
                    )))), t.popup, n)
                }
            }, {
                key: "notificationData",
                get: function() {
                    var e = this
                      , t = this.props.notificationStore
                      , n = t.list.reduce((function(t, n) {
                        var r = t.height
                          , o = t.list;
                        return {
                            height: e.notificationBlocksHeight[n.id] ? r + e.notificationBlocksHeight[n.id] : r + 100,
                            list: [].concat(E(o), [[r, n]])
                        }
                    }
                    ), {
                        height: 0,
                        list: []
                    })
                      , r = n.list
                      , a = n.height
                      , i = this.state.isClient && a > window.innerHeight;
                    return {
                        notificationList: r.map((function(n) {
                            var r = S(n, 2)
                              , a = r[0]
                              , i = r[1];
                            return o.a.createElement("div", {
                                key: i.id,
                                ref: function(t) {
                                    return e.notificationBlocks[i.id] = t
                                },
                                style: {
                                    top: a
                                },
                                className: w.a.notification,
                                "data-qa": "txtNotification".concat(i.id)
                            }, o.a.createElement("img", {
                                src: i.status === l.b.SUCCESS ? b.a : g.a,
                                role: "presentation",
                                className: w.a.notificationIcon
                            }), o.a.createElement("div", {
                                className: w.a.notificationText
                            }, i.message, i.supportLink && o.a.createElement("span", null, " Please try later or ", o.a.createElement(f.b, {
                                href: Object(c.a)().support.urls.newRequest,
                                target: "_blank"
                            }, "contact us"), " ", "if the issue persists.")), o.a.createElement("img", {
                                src: h.a,
                                role: "presentation",
                                onClick: function() {
                                    return t.popNotification(i.id)
                                },
                                className: w.a.notificationClose
                            }))
                        }
                        )),
                        notificationScroll: i
                    }
                }
            }]) && j(n.prototype, r),
            s && j(n, s),
            t
        }(u.a);
        t.a = Object(s.a)("notificationStore", "popupStore")(Object(s.c)(C))
    },
    847: function(e, t, n) {
        e.exports = n.p + "files/8de91f6402961a50b363ba3ad057dc7f/cross_light.svg"
    },
    848: function(e, t, n) {
        e.exports = n.p + "files/8d2158d8bfe25164280490041b9d1cfd/notification_success.svg"
    },
    849: function(e, t, n) {
        e.exports = n.p + "files/fa91276c1423483a605ecf82c4fc2d3b/notification_failed.svg"
    },
    850: function(e, t, n) {
        "use strict";
        var r = n(1)
          , o = n.n(r)
          , a = n(857)
          , i = n(285)
          , c = n(56)
          , s = n(97)
          , u = n(1027)
          , l = n.n(u);
        function p(e) {
            return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function f(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function d(e, t) {
            return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function h(e) {
            return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function m(e, t) {
            return (m = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var b = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                d(this, h(t).apply(this, arguments))
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && m(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.value
                      , r = t.message
                      , a = t.focus
                      , u = t.autoFocus
                      , p = t.hint
                      , f = t.type
                      , d = t.autoComplete
                      , h = t.maxLength
                      , m = t.readOnly
                      , b = t.qa
                      , y = t.placeholder
                      , g = t.name
                      , v = t.className
                      , w = t.onChangeLinkClick
                      , O = t.changeLinkEnabled
                      , S = b && "txt".concat(Object(i.a)(b))
                      , E = b && "err".concat(Object(i.a)(b))
                      , j = r || p
                      , k = a || Boolean(n);
                    return o.a.createElement("div", {
                        className: Object(c.b)(l.a.container, v)
                    }, o.a.createElement("div", {
                        className: Object(c.b)(l.a.placeholder, k && l.a.placeholderSmall, m && l.a.placeholderReadOnly)
                    }, y), j && o.a.createElement("div", {
                        "data-qa": E,
                        className: l.a.message
                    }, j), o.a.createElement("input", {
                        ref: this.inputRef,
                        name: g,
                        type: f,
                        autoComplete: d,
                        maxLength: h,
                        disabled: m,
                        readOnly: m,
                        onFocus: this.props.onFocus,
                        onBlur: this.props.onBlur,
                        onChange: function(t) {
                            return e.props.onChange(t.target.value)
                        },
                        value: n,
                        "data-qa": S,
                        autoFocus: u,
                        className: Object(c.b)(l.a.input, r && l.a.inputError, m && l.a.inputReadOnly)
                    }), O && m && w && o.a.createElement(s.b, {
                        className: j ? l.a.changeLinkBottom : l.a.changeLink,
                        onBeforeFollow: function() {
                            return w()
                        }
                    }, "Change"))
                }
            }]) && f(n.prototype, r),
            a && f(n, a),
            t
        }(a.a);
        t.a = Object(a.b)(b)
    },
    852: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }
        )),
        n.d(t, "b", (function() {
            return d
        }
        ));
        var r, o, a = n(1), i = n.n(a), c = n(834), s = n(943), u = n.n(s);
        function l() {
            return (l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        !function(e) {
            e.scrollIn = "scrollIn",
            e.fadeIn = "fadeIn"
        }(o || (o = {}));
        var f = (p(r = {}, o.fadeIn, 500),
        p(r, o.scrollIn, 300),
        r)
          , d = function(e) {
            var t, n = e.show, r = e.children, a = e.animation, s = {
                classNames: (p(t = {}, o.fadeIn, {
                    enter: u.a.fadeInEnter,
                    enterActive: u.a.fadeInEnter,
                    enterDone: u.a.fadeInEnterActive,
                    exit: u.a.fadeInExit,
                    exitActive: u.a.fadeInExitActive,
                    exitDone: u.a.fadeInExitDone
                }),
                p(t, o.scrollIn, {
                    enter: u.a.scrollInEnter,
                    enterActive: u.a.scrollInEnter,
                    enterDone: u.a.scrollInEnterActive,
                    exit: u.a.scrollInExit,
                    exitActive: u.a.scrollInExitActive
                }),
                t)[a],
                timeout: f[a],
                mountOnEnter: !0,
                unmountOnExit: !0
            };
            return i.a.createElement(c.a, l({
                in: n
            }, s), i.a.createElement("div", {
                className: u.a.container
            }, r))
        }
    },
    857: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return v
        }
        )),
        n.d(t, "b", (function() {
            return O
        }
        ));
        var r = n(1)
          , o = n.n(r)
          , a = n(67);
        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function c() {
            return (c = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function s(e, t) {
            if (null == e)
                return {};
            var n, r, o = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(n), !0).forEach((function(t) {
                    p(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function f(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function d(e, t, n) {
            return t && f(e.prototype, t),
            n && f(e, n),
            e
        }
        function h(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function m(e, t) {
            return !t || "object" !== i(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function b(e) {
            return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function y(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && g(e, t)
        }
        function g(e, t) {
            return (g = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var v = function(e) {
            function t() {
                var e;
                return h(this, t),
                (e = m(this, b(t).apply(this, arguments))).inputRef = o.a.createRef(),
                e
            }
            return y(t, e),
            t
        }(a.b)
          , w = function(e) {
            function t() {
                var e;
                return h(this, t),
                (e = m(this, b(t).apply(this, arguments))).state = {
                    focus: !1,
                    valid: !0,
                    value: e.props.initialValue || ""
                },
                e.defaultValidationResult = {
                    valid: !0,
                    message: void 0,
                    hint: void 0
                },
                e.componentRef = o.a.createRef(),
                e
            }
            return y(t, e),
            d(t, [{
                key: "focus",
                value: function() {
                    this.componentRef.current.inputRef.current.focus()
                }
            }, {
                key: "handleFocus",
                value: function() {
                    this.setState({
                        focus: !0
                    }, this.props.handleFocus)
                }
            }, {
                key: "handleBlur",
                value: function() {
                    var e = this
                      , t = this.validate()
                      , n = t.valid
                      , r = t.message
                      , o = t.value
                      , a = t.hint;
                    a && a.then((function(t) {
                        return o === e.state.value && e.setState({
                            hint: t
                        })
                    }
                    )),
                    this.setState((function(t) {
                        return l({}, t, {}, {
                            focus: !1
                        }, {}, e.state.valid ? {
                            valid: n,
                            message: r
                        } : {})
                    }
                    ), this.props.handleBlur)
                }
            }, {
                key: "handleChange",
                value: function(e) {
                    var t = this;
                    (!this.props.preValidate || this.props.preValidate && this.props.preValidate(e)) && this.setState(Object.assign({
                        value: e
                    }, (!this.state.valid || this.state.hint) && this.defaultValidationResult), (function() {
                        return t.props.handleChange && t.props.handleChange(e)
                    }
                    ))
                }
            }, {
                key: "handleFileChange",
                value: function(e) {
                    var t = this
                      , n = this.props.name
                      , r = e && e.target.files ? e.target.files[0] : void 0
                      , o = r ? r.name.replace(/C:\\fakepath\\/i, "") : "";
                    this.props.handleFileChange && this.props.handleFileChange(n, r),
                    this.setState({
                        value: o
                    }, (function() {
                        var n = e ? t.validate() : t.defaultValidationResult
                          , r = n.valid
                          , o = n.message;
                        t.setState({
                            valid: r,
                            message: o
                        })
                    }
                    ))
                }
            }, {
                key: "setValidation",
                value: function(e, t) {
                    this.setState({
                        valid: e,
                        message: t
                    })
                }
            }, {
                key: "validate",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                      , n = this.props.validator
                      , r = this.state.value
                      , o = n ? n.validate(r, (function(t) {
                        e.props.readOnly || e.setState({
                            value: t,
                            hint: void 0
                        })
                    }
                    )) : this.defaultValidationResult;
                    if (t) {
                        o.hint;
                        var a = s(o, ["hint"]);
                        this.setState(l({}, a))
                    }
                    return l({
                        value: r
                    }, o)
                }
            }, {
                key: "setValue",
                value: function(e) {
                    this.setState({
                        value: e
                    })
                }
            }, {
                key: "value",
                get: function() {
                    return this.state.value
                }
            }]),
            t
        }(a.b);
        function O(e) {
            return function(t) {
                function n() {
                    return h(this, n),
                    m(this, b(n).apply(this, arguments))
                }
                return y(n, t),
                d(n, [{
                    key: "render",
                    value: function() {
                        var t = this
                          , n = this.props
                          , r = n.children
                          , a = (n.handleChange,
                        n.handleFileChange,
                        n.autoComplete)
                          , i = void 0 === a ? "on" : a
                          , u = s(n, ["children", "handleChange", "handleFileChange", "autoComplete"])
                          , l = this.state
                          , p = l.value
                          , f = l.valid
                          , d = l.focus
                          , h = l.message
                          , m = l.hint;
                        return o.a.createElement(e, c({}, u, {
                            ref: this.componentRef,
                            autoComplete: "password" === u.type ? "off" : i,
                            value: p,
                            valid: f,
                            focus: d,
                            message: h,
                            hint: m,
                            onFocus: function() {
                                return t.handleFocus()
                            },
                            onBlur: function() {
                                return t.handleBlur()
                            },
                            onChange: function(e) {
                                return t.handleChange(e)
                            },
                            onFileChange: function(e) {
                                return t.handleFileChange(e)
                            }
                        }), r)
                    }
                }]),
                n
            }(w)
        }
        w.defaultProps = {
            type: "text",
            maxLength: 100,
            readOnly: !1
        }
    },
    858: function(e, t, n) {
        "use strict";
        var r = n(1)
          , o = n.n(r)
          , a = n(67)
          , i = n(56)
          , c = n(97)
          , s = n(292)
          , u = n(861)
          , l = n.n(u)
          , p = n(902)
          , f = n.n(p);
        function d(e) {
            return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function h(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function m(e, t) {
            return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function b(e) {
            return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function y(e, t) {
            return (y = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var g = 100
          , v = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (e = m(this, b(t).apply(this, arguments))).container = o.a.createRef(),
                e.leftContent = o.a.createRef(),
                e.rightContent = o.a.createRef(),
                e.state = {
                    wrapHeader: !1
                },
                e.handleHeaderLayout = function() {
                    var t = e.container.current.offsetWidth
                      , n = e.leftContent.current.offsetWidth
                      , r = e.rightContent.current.offsetWidth;
                    e.setState({
                        wrapHeader: t <= n + r + g
                    })
                }
                ,
                e
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && y(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "componentDidMount",
                value: function() {
                    this.props.responsive && (addEventListener("resize", this.handleHeaderLayout),
                    this.handleHeaderLayout())
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.props.responsive && removeEventListener("resize", this.handleHeaderLayout)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.login
                      , n = e.passFullQueryToSignIn
                      , r = e.signInPageId
                      , a = e.rightBlock
                      , u = e.leftBlock
                      , p = e.business
                      , d = e.linkLogo
                      , h = e.trackLogoClick
                      , m = e.onboardingRedesignTest
                      , b = e.hasNavItems
                      , y = d ? o.a.createElement(c.b, {
                        routeId: this.linkLogoRouteId,
                        onBeforeFollow: function() {
                            return h && h()
                        }
                    }, o.a.createElement("img", {
                        width: 140,
                        src: l.a,
                        alt: "Grammarly Logo"
                    })) : o.a.createElement("img", {
                        width: 140,
                        src: l.a,
                        alt: "Grammarly Logo"
                    });
                    return o.a.createElement("div", {
                        className: this.className,
                        ref: this.container
                    }, o.a.createElement("div", {
                        className: Object(i.b)(f.a.logo, p && f.a.logoBusiness),
                        ref: this.leftContent
                    }, y, o.a.createElement("div", {
                        className: f.a.leftBlock
                    }, u)), o.a.createElement("div", {
                        className: f.a.rightBlock,
                        ref: this.rightContent
                    }, a, t && o.a.createElement(s.a, {
                        onboardingRedesignTest: m,
                        signInPageId: r,
                        passFullQueryToSignin: n,
                        business: p,
                        newHeader: !p && !b,
                        limitWidth: !!a,
                        className: f.a.authButton
                    })))
                }
            }, {
                key: "className",
                get: function() {
                    var e = this.props
                      , t = e.fixed
                      , n = e.absolute
                      , r = e.narrow
                      , o = e.className;
                    return Object(i.b)(f.a.header, !t && !n && f.a.static, t && f.a.fixed, n && f.a.absolute, r && f.a.narrow, this.state.wrapHeader && f.a.wrapHeader, o)
                }
            }, {
                key: "linkLogoRouteId",
                get: function() {
                    return this.props.business ? "businessHome" : "home"
                }
            }]) && h(n.prototype, r),
            a && h(n, a),
            t
        }(a.b);
        t.a = v
    },
    861: function(e, t, n) {
        e.exports = n.p + "files/3a89d404f9db7ffd42e5fa9b8cd7d93e/grammarly_logo.svg"
    },
    863: function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return y
        }
        )),
        n.d(t, "b", (function() {
            return g
        }
        )),
        n.d(t, "f", (function() {
            return v
        }
        )),
        n.d(t, "e", (function() {
            return w
        }
        )),
        n.d(t, "h", (function() {
            return O
        }
        )),
        n.d(t, "m", (function() {
            return S
        }
        )),
        n.d(t, "i", (function() {
            return E
        }
        )),
        n.d(t, "k", (function() {
            return j
        }
        )),
        n.d(t, "l", (function() {
            return k
        }
        )),
        n.d(t, "j", (function() {
            return P
        }
        )),
        n.d(t, "a", (function() {
            return _
        }
        )),
        n.d(t, "g", (function() {
            return C
        }
        )),
        n.d(t, "d", (function() {
            return x
        }
        ));
        var r = n(1)
          , o = n.n(r)
          , a = n(83)
          , i = n(285)
          , c = n(21)
          , s = n(97)
          , u = n(925)
          , l = n.n(u)
          , p = function(e) {
            var t = e.socialType;
            return o.a.createElement("span", null, "Looks like you signed up for Grammarly using an email address rather than your ".concat(Object(i.a)(t), " account. Please log in below."))
        }
          , f = function() {
            return o.a.createElement("span", null, "You chose the Facebook log-in option when you created your account.", o.a.createElement("br", null), "Please click Continue with Facebook.")
        }
          , d = function() {
            return o.a.createElement("span", null, "You chose the Google log-in option when you created your account.", o.a.createElement("br", null), "Please click Continue with Google.")
        }
          , h = function() {
            return o.a.createElement("span", null, "You chose the Apple log-in option when you created your account.", o.a.createElement("br", null), "Please click Continue with Apple.")
        }
          , m = function() {
            return o.a.createElement("span", null, "You chose a social log-in option when you created your account.", o.a.createElement("br", null), "Please use a social provider to continue.")
        }
          , b = function() {
            return o.a.createElement("span", null, "We couldn’t complete your registration because this Facebook account was created with a phone number.", o.a.createElement("br", null), "Please choose a different sign-up method.")
        };
        function y(e, t) {
            switch (e) {
            case c.a.rateLimited:
                return o.a.createElement("span", null, "Sign-up is disabled because of too many attempts. Try again later.");
            case c.a.useFacebook:
                return o.a.createElement(f, null);
            case c.a.useGoogle:
                return o.a.createElement(d, null);
            case c.a.useSocial:
                return o.a.createElement(m, null);
            case c.a.socialNoEmail:
                return o.a.createElement(b, null);
            case c.a.useStrongPassword:
                return o.a.createElement("span", null, "Unable to create an account. Please ensure that your password does not match your email or name.");
            case c.a.failure:
                return (null == t ? void 0 : t.socialServiceName) ? o.a.createElement("span", null, "We are unable to create an account with ", Object(i.a)(t.socialServiceName), " at this time. Please wait a moment and try again.") : y("default", t);
            default:
                return o.a.createElement("span", null, "Unable to create an account. Please double-check your email address or try again later.")
            }
        }
        function g(e, t) {
            switch (e) {
            case c.a.rateLimited:
                return o.a.createElement("span", null, "Sign-in is disabled because of too many attempts. Try again later.");
            case c.a.useFacebook:
                return o.a.createElement(f, null);
            case c.a.useGoogle:
                return o.a.createElement(d, null);
            case c.a.useApple:
                return o.a.createElement(h, null);
            case c.a.useSocial:
                return o.a.createElement(m, null);
            case c.a.useEmail:
                return o.a.createElement(p, {
                    socialType: (null == t ? void 0 : t.socialServiceName) || a.b.google
                });
            case c.a.useSso:
                return o.a.createElement("span", null, "Your organization uses single-sign-on.", " ", o.a.createElement(s.b, {
                    className: l.a.link,
                    href: t ? t.ssoRedirectLink : ""
                }, "Please log in via this link."));
            case c.a.socialNoEmail:
                return o.a.createElement(b, null);
            case c.a.failure:
                return (null == t ? void 0 : t.socialServiceName) ? o.a.createElement("span", null, "We are unable to sign you in with ", Object(i.a)(t.socialServiceName), " at this time. Please wait a moment and try again.") : g("default", t);
            default:
                var n = t ? t.onForgotPassword : void 0
                  , r = t ? t.onSignup : void 0
                  , u = n ? void 0 : {
                    routeId: "signin",
                    query: {
                        step: "forgotPassword"
                    }
                }
                  , y = r ? void 0 : t && t.signupWaypoint ? t.signupWaypoint : {
                    routeId: "signup"
                };
                return o.a.createElement("span", null, "Your password is incorrect or this account doesn’t exist. Please", " ", o.a.createElement(s.b, {
                    key: "reset",
                    className: l.a.link,
                    onBeforeFollow: n,
                    waypoint: u
                }, "reset your password"), " ", "or", " ", o.a.createElement(s.b, {
                    key: "create",
                    className: l.a.link,
                    onBeforeFollow: r,
                    waypoint: y
                }, "create a new account"), ".")
            }
        }
        function v(e) {
            return e === c.a.rateLimited
        }
        function w(e) {
            return e === c.a.mfa
        }
        function O(e) {
            return e === c.a.useSso
        }
        function S(e) {
            return e === c.a.useGoogle
        }
        function E(e) {
            return e === c.a.useApple
        }
        function j(e) {
            return e === c.a.useFacebook
        }
        function k(e) {
            return e === c.a.useSocial
        }
        function P(e) {
            return e === c.a.useEmail
        }
        function _(e) {
            return j(e) || S(e) || e === c.a.useEmail
        }
        function C(e) {
            return e === c.a.showCaptcha
        }
        function x(e) {
            return e === c.a.alreadyConfirmed
        }
    },
    864: function(e, t, n) {
        "use strict";
        var r, o, a;
        n.d(t, "c", (function() {
            return r
        }
        )),
        n.d(t, "a", (function() {
            return o
        }
        )),
        n.d(t, "b", (function() {
            return a
        }
        )),
        function(e) {
            e.popup = "popup",
            e.redirect = "redirect"
        }(r || (r = {})),
        function(e) {
            e.popup = "popup",
            e.buildIn = "inline"
        }(o || (o = {})),
        function(e) {
            e.disabled = "disabled",
            e.link = "link",
            e.buildIn = "buildIn"
        }(a || (a = {}))
    },
    866: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", (function() {
                return f
            }
            )),
            n.d(t, "c", (function() {
                return h
            }
            )),
            n.d(t, "e", (function() {
                return b
            }
            )),
            n.d(t, "f", (function() {
                return y
            }
            )),
            n.d(t, "g", (function() {
                return g
            }
            )),
            n.d(t, "d", (function() {
                return v
            }
            )),
            n.d(t, "b", (function() {
                return w
            }
            )),
            n.d(t, "h", (function() {
                return O
            }
            )),
            n.d(t, "i", (function() {
                return E
            }
            )),
            n.d(t, "j", (function() {
                return k
            }
            ));
            var r = n(13)
              , o = n(68)
              , a = n(83)
              , i = n(21)
              , c = n(20)
              , s = n(914);
            function u(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function l(e, t, n, r, o, a, i) {
                try {
                    var c = e[a](i)
                      , s = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(s) : Promise.resolve(s).then(r, o)
            }
            function p(e) {
                return function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);
                        function i(e) {
                            l(a, r, o, i, c, "next", e)
                        }
                        function c(e) {
                            l(a, r, o, i, c, "throw", e)
                        }
                        i(void 0)
                    }
                    ))
                }
            }
            var f, d = new Set(Object.keys(o.b.OAuth.ClientId).map((function(e) {
                return o.b.OAuth.ClientId[e]
            }
            )));
            function h(e) {
                var t = e.nav.query;
                return {
                    clientId: t.client_id,
                    codeChallenge: t.code_challenge
                }
            }
            function m(e) {
                return d.has(e)
            }
            function b(e) {
                return m(h(e).clientId)
            }
            function y(e) {
                var t = h(e)
                  , n = t.clientId
                  , r = t.codeChallenge;
                return m(n) && !!r
            }
            function g(e) {
                return h(e).clientId === o.b.OAuth.ClientId.OfficeAddin && Object(s.b)(e)
            }
            function v(e, t) {
                switch (e) {
                case o.b.OAuth.ClientId.MobileIOS:
                    return f.IOSKeyboard;
                case o.b.OAuth.ClientId.MobileAndroid:
                    return f.AndroidKeyboard;
                case o.b.OAuth.ClientId.SafariExtension:
                    return f.Safari;
                case o.b.OAuth.ClientId.OfficeAddin:
                    return f.OfficeAddin;
                case o.b.OAuth.ClientId.DesktopEditor:
                    return t ? f.NativeWindows : f.NativeMac
                }
                if (d.has(e))
                    return f.Grammarly;
                throw new Error("Unregistered oAuth Client")
            }
            function w(e) {
                switch (h(e).clientId) {
                case o.b.OAuth.ClientId.MobileIOS:
                case o.b.OAuth.ClientId.MobileAndroid:
                    return "unifiedMobileSignin";
                case o.b.OAuth.ClientId.DesktopEditor:
                case o.b.OAuth.ClientId.DesktopEditorOSX:
                case o.b.OAuth.ClientId.DesktopEditorWindows:
                    return "unifiedDesktopEditorSignin";
                case o.b.OAuth.ClientId.OfficeAddin:
                    return "unifiedOfficeAddinSignin";
                default:
                    return "unifiedAppSignin"
                }
            }
            function O(e, t, n, r) {
                return S.apply(this, arguments)
            }
            function S() {
                return (S = p(regeneratorRuntime.mark((function t(n, r, o, a) {
                    var s, u, l, p;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0,
                                t.next = 3,
                                n.auth.oAuthAuthorizationRequest(r, o);
                            case 3:
                                s = t.sent,
                                u = s.redirect_uri,
                                "extension-safari" === r && a ? (l = function() {
                                    return window.postMessage({
                                        name: "oauthExchange",
                                        data: {
                                            redirectUri: u
                                        }
                                    }, "*")
                                }
                                ,
                                p = function e(t) {
                                    t.source === window && t.data && "readyForOAuthExchange" === t.data.name && (l(),
                                    window.removeEventListener("message", e))
                                }
                                ,
                                window.addEventListener("message", p),
                                l()) : window.location.replace(u),
                                t.next = 12;
                                break;
                            case 8:
                                throw t.prev = 8,
                                t.t0 = t.catch(0),
                                Object(c.b)("OAuth code generation error: ".concat(Object(i.l)(t.t0)), e, "oAuthCodeGenerationErrors"),
                                t.t0;
                            case 12:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, null, [[0, 8]])
                }
                )))).apply(this, arguments)
            }
            function E(e, t, n) {
                return j.apply(this, arguments)
            }
            function j() {
                return (j = p(regeneratorRuntime.mark((function t(n, r, o) {
                    var a, s;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0,
                                t.next = 3,
                                n.auth.oAuthAuthorizationRequest(r, o);
                            case 3:
                                return a = t.sent,
                                s = a.redirect_uri,
                                t.abrupt("return", s);
                            case 8:
                                throw t.prev = 8,
                                t.t0 = t.catch(0),
                                Object(c.b)("OAuth code generation error: ".concat(Object(i.l)(t.t0)), e, "oAuthCodeGenerationErrors"),
                                t.t0;
                            case 12:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, null, [[0, 8]])
                }
                )))).apply(this, arguments)
            }
            function k(e, t) {
                var n, o = Object(r.a)().keyboard.oauthUri, i = (u(n = {}, a.b.facebook, "use_facebook"),
                u(n, a.b.google, "use_google"),
                u(n, a.b.apple, "use_apple"),
                n);
                window.location.replace("".concat(o, "?login_type=").concat(i[t], "&code_challenge=").concat(e))
            }
            !function(e) {
                e.Grammarly = "Grammarly",
                e.Safari = "Safari Extension",
                e.IOSKeyboard = "Grammarly Keyboard for iOS",
                e.AndroidKeyboard = "Grammarly Keyboard for Android",
                e.OfficeAddin = "Grammarly for Microsoft Office",
                e.NativeWindows = "Grammarly for Windows",
                e.NativeMac = "Grammarly for Mac"
            }(f || (f = {}))
        }
        ).call(this, "/index.js")
    },
    867: function(e, t, n) {
        "use strict";
        n.d(t, "g", (function() {
            return m
        }
        )),
        n.d(t, "b", (function() {
            return b
        }
        )),
        n.d(t, "f", (function() {
            return y
        }
        )),
        n.d(t, "e", (function() {
            return g
        }
        )),
        n.d(t, "i", (function() {
            return v
        }
        )),
        n.d(t, "d", (function() {
            return w
        }
        )),
        n.d(t, "h", (function() {
            return O
        }
        )),
        n.d(t, "c", (function() {
            return S
        }
        )),
        n.d(t, "a", (function() {
            return E
        }
        ));
        var r = n(881)
          , o = n.n(r)
          , a = n(34)
          , i = n(36)
          , c = n(147)
          , s = n(79)
          , u = n(83);
        function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var f = 30 * c.b
          , d = "socialStorage"
          , h = "signin";
        function m(e, t, n) {
            var r = e.nav
              , a = r.pageId
              , c = r.query
              , u = {
                authMethod: t,
                socialRouteId: a
            };
            Object(s.f)(e) ? u.fromExtensionFb = "true" : Object(s.g)(e) ? u.fromExtensionGoogle = "true" : Object(s.e)(e) && (u.fromExtensionApple = "true"),
            u.enableMarketingEmails = n;
            var l = c.utm_medium
              , p = c.invite_key
              , h = c.teamsize
              , m = c.oid
              , b = c.client_id
              , y = c.code_challenge
              , g = c.enableFacebookLogin
              , v = c.enableGoogleLogin
              , w = c.enableAppleLogin
              , O = c.office_js
              , S = c.alerts
              , E = c.page
              , j = c.joinStep
              , k = c.targetPage
              , P = c.secureLogin
              , _ = c.use_postmessage;
            l && (u.utm_medium = l),
            p && (u.invite_key = p),
            h && (u.teamsize = h),
            m && (u.oid = m),
            O && (u.office_js = O),
            b && y && (u.client_id = b,
            u.code_challenge = y),
            g && (u.enableFacebookLogin = g),
            v && (u.enableGoogleLogin = v),
            w && (u.enableAppleLogin = w),
            S && (u.alerts = S),
            E && (u.page = E),
            j && (u.joinStep = j),
            k && (u.targetPage = k),
            P && (u.secureLogin = P),
            _ && (u.use_postmessage = _),
            Object(i.e)(d, o.a.compressToBase64(JSON.stringify(u)), f)
        }
        function b() {
            var e = o.a.decompressFromBase64(Object(i.c)(d) || "");
            return e ? JSON.parse(e) : {}
        }
        function y() {
            return b().authMethod
        }
        function g() {
            Object(i.b)(d)
        }
        function v() {
            var e = b()
              , t = e.socialRouteId || h
              , n = Object.keys(e).reduce((function(t, n) {
                var r = e[n];
                return r && "socialRouteId" !== n ? function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? l(Object(n), !0).forEach((function(t) {
                            p(e, t, n[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                        ))
                    }
                    return e
                }({}, t, p({}, n, r)) : t
            }
            ), {});
            return {
                routeId: t,
                query: Object(a.a)(n)
            }
        }
        function w(e) {
            return "true" === e.nav.query.socialError
        }
        function O(e, t) {
            var n = e.nav.query
              , r = n.referrer || h;
            t.user || (delete n.referrer,
            e.nav.navigate({
                routeId: r,
                query: n
            }))
        }
        function S(e) {
            return e.nav.query.referrer === h
        }
        function E(e) {
            var t = e.nav.query
              , n = t.google
              , r = t.facebook
              , o = t.apple
              , a = t.authMethod;
            return "true" === n ? u.b.google : "true" === r ? u.b.facebook : "true" === o ? u.b.apple : a || null
        }
    },
    868: function(e, t, n) {
        "use strict";
        n.d(t, "f", (function() {
            return s
        }
        )),
        n.d(t, "d", (function() {
            return u
        }
        )),
        n.d(t, "g", (function() {
            return l
        }
        )),
        n.d(t, "a", (function() {
            return p
        }
        )),
        n.d(t, "h", (function() {
            return d
        }
        )),
        n.d(t, "c", (function() {
            return h
        }
        )),
        n.d(t, "b", (function() {
            return m
        }
        )),
        n.d(t, "e", (function() {
            return b
        }
        ));
        var r = n(13);
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var i = Object(r.a)().tracking.googleTagManager.layer
          , c = function(e, t) {
            var n = window[i];
            n && n.push(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        a(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({
                event: e
            }, t))
        }
          , s = function() {
            c("paymentAccepted"),
            f(),
            c("taboola", {
                encoded_page_url: encodeURI(document.location.href)
            })
        }
          , u = function() {
            c("yahoo_extension"),
            c("bingExtension"),
            c("extensionInstalled"),
            f()
        }
          , l = function(e, t) {
            switch (e) {
            case "desktopApp":
                c("".concat(t, "DesktopAppDownload"));
                break;
            case "officeAddin":
            default:
                c("".concat(t, "OfficeAddInDownload"))
            }
        };
        function p() {
            c("accountCreation")
        }
        function f() {
            c("outBrain")
        }
        var d = function(e, t, n) {
            c(e + "Upgrade", {
                orderId: t,
                orderValue: n
            })
        }
          , h = function(e, t) {
            c(e + "BusinessUpgrade", {
                orderId: t
            })
        }
          , m = function() {
            c("businessMobileEmailSubmit")
        }
          , b = function() {
            c("inviteMembersFormSubmit")
        }
    },
    869: function(e, t, n) {
        e.exports = {
            basic: "_2vXY_-basic",
            text: "o9viu-text",
            subtext: "_2fF1w-subtext",
            disabled: "g03Ad-disabled",
            loading: "J7HC8-loading",
            content: "_1vpLY-content",
            loader: "MUONC-loader",
            sizeLarge: "_3Y7Vy-sizeLarge",
            sizeSmall: "_3Fe1c-sizeSmall",
            minimumPadding: "_1Ey-7-minimumPadding",
            colorGreen: "_2O_7o-colorGreen",
            colorGreenInvertedGrayBg: "_20Fws-colorGreenInvertedGrayBg",
            colorGreenInvertedWhiteBg: "XMNSl-colorGreenInvertedWhiteBg",
            colorYellow: "_2cM8o-colorYellow",
            colorYellowInvertedGrayBg: "_1FAfU-colorYellowInvertedGrayBg",
            colorYellowInvertedWhiteBg: "NKmuk-colorYellowInvertedWhiteBg",
            colorBlue: "_2xf2L-colorBlue",
            colorBlueInvertedGrayBg: "_1iyto-colorBlueInvertedGrayBg",
            colorBlueInvertedWhiteBg: "_2P-iG-colorBlueInvertedWhiteBg"
        }
    },
    873: function(e, t, n) {
        e.exports = {
            button: "kBEWa-button",
            buttonGray: "_3VPXj-buttonGray",
            buttonWhite: "u3ukN-buttonWhite",
            facebookButton: "_3inKH-facebookButton",
            appleButton: "_14JOK-appleButton",
            googleButton: "_1w_Hc-googleButton",
            disabled: "_2F7B2-disabled",
            inline: "PxAOK-inline"
        }
    },
    874: function(e, t, n) {
        "use strict";
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        var o;
        n.d(t, "a", (function() {
            return o
        }
        )),
        n.d(t, "b", (function() {
            return a
        }
        )),
        n.d(t, "c", (function() {
            return i
        }
        )),
        function(e) {
            e.signinForm = "signinForm",
            e.secureLogin = "secureLogin",
            e.accountCreation = "accountCreation",
            e.mfa = "mfa",
            e.social = "social",
            e.forgotPassword = "forgotPassword",
            e.forgotEmail = "forgotEmail",
            e.support = "contactSupport",
            e.emailVerification = "emailVerification",
            e.changeEmail = "changeEmail",
            e.oAuthConsent = "oAuthConsent",
            e.captcha = "captcha",
            e.loading = "loading"
        }(o || (o = {}));
        var a = function() {
            function e(t, n) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.overrideFirstStep = t,
                this.customSteps = n
            }
            var t, n, a;
            return t = e,
            (n = [{
                key: "navigateTo",
                value: function(e, t) {
                    var n = [e, t].toString();
                    if (this.customSteps && this.customSteps.get(n)) {
                        var r = this.customSteps.get(n);
                        if (r in o)
                            return r;
                        if ("function" == typeof r)
                            return r(),
                            t
                    }
                    return t
                }
            }]) && r(t.prototype, n),
            a && r(t, a),
            e
        }()
          , i = function(e, t) {
            var n = new Map;
            return t && t.forEach((function(e) {
                return n.set([e.start, e.end].toString(), e.doInstead)
            }
            )),
            new a(e,n)
        }
    },
    875: function(e, t, n) {
        "use strict";
        var r = n(1)
          , o = n.n(r)
          , a = n(67)
          , i = n(109)
          , c = n(34)
          , s = n(912)
          , u = n(296)
          , l = n(83)
          , p = n(145)
          , f = n(62)
          , d = n(836)
          , h = n(835)
          , m = n(56)
          , b = n(287)
          , y = function(e) {
            return o.a.createElement("button", {
                type: "button",
                className: e.className,
                onClick: e.handleClick,
                "data-qa": e.qa
            }, e.loading ? o.a.createElement(b.a, null) : o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
                src: e.img
            }), o.a.createElement("span", null, e.text)))
        }
          , g = n(931)
          , v = n.n(g)
          , w = n(932)
          , O = n.n(w)
          , S = n(873)
          , E = n.n(S)
          , j = Object(i.a)("appleService")(Object(i.c)((function(e) {
            var t;
            switch (e.colorScheme) {
            case "gray":
                t = E.a.buttonGray;
                break;
            case "white":
                t = E.a.buttonWhite;
                break;
            default:
                t = E.a.appleButton
            }
            return o.a.createElement(y, {
                className: Object(m.b)(t, e.inline && E.a.inline),
                handleClick: e.onClick,
                qa: "btnAppleAuth",
                img: "gray" === e.colorScheme || "white" === e.colorScheme ? O.a : v.a,
                loading: e.appleService.loading,
                text: e.inline ? "Apple" : "Continue with Apple"
            })
        }
        )))
          , k = n(933)
          , P = n.n(k)
          , _ = n(934)
          , C = n.n(_)
          , x = Object(i.a)("facebookService")(Object(i.c)((function(e) {
            var t;
            switch (e.colorScheme) {
            case "gray":
                t = E.a.buttonGray;
                break;
            case "white":
                t = E.a.buttonWhite;
                break;
            default:
                t = E.a.facebookButton
            }
            return o.a.createElement(y, {
                className: Object(m.b)(t, e.inline && E.a.inline),
                handleClick: e.onClick,
                qa: "btnFacebookAuth",
                img: "gray" === e.colorScheme || "white" === e.colorScheme ? C.a : P.a,
                loading: e.facebookService.loading,
                text: e.inline ? "Facebook" : "Continue with Facebook"
            })
        }
        )))
          , N = n(935)
          , I = n.n(N)
          , A = n(936)
          , R = n.n(A)
          , M = Object(i.a)("googleService")(Object(i.c)((function(e) {
            var t;
            switch (e.colorScheme) {
            case "gray":
                t = E.a.buttonGray;
                break;
            case "white":
                t = E.a.buttonWhite;
                break;
            default:
                t = E.a.googleButton
            }
            return o.a.createElement(y, {
                className: Object(m.b)(t, e.inline && E.a.inline),
                loading: e.googleService.loading,
                handleClick: e.onClick,
                qa: "btnGoogleAuth",
                img: "gray" === e.colorScheme || "white" === e.colorScheme ? R.a : I.a,
                text: e.inline ? "Google" : "Continue with Google"
            })
        }
        )))
          , T = n(285)
          , F = n(290)
          , L = n(840)
          , B = n(916)
          , D = n(937)
          , q = n.n(D);
        function G(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i)
                  , s = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o)
        }
        var V = function(e) {
            var t = e.serviceName
              , n = e.loginAgain
              , r = Object(T.a)(t)
              , a = Object(F.f)("popupStore").popupStore
              , i = function() {
                var e, t = (e = regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                n();
                            case 2:
                                a.handleClose();
                            case 3:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )),
                function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);
                        function i(e) {
                            G(a, r, o, i, c, "next", e)
                        }
                        function c(e) {
                            G(a, r, o, i, c, "throw", e)
                        }
                        i(void 0)
                    }
                    ))
                }
                );
                return function() {
                    return t.apply(this, arguments)
                }
            }();
            return o.a.createElement(B.a, null, o.a.createElement("div", {
                className: q.a.container
            }, o.a.createElement(d.e, {
                qa: "requireEmailNotice",
                textAlign: "center"
            }, "In order to proceed, please enable email permission on your Facebook account. Use the button below to open your Facebook settings and follow these steps:"), o.a.createElement(h.d, {
                multiplier: 2
            }), o.a.createElement(d.k, null, "1. Click ", o.a.createElement(d.o, {
                bold: !0
            }, "Edit This"), " above the Facebook continue button", o.a.createElement("br", null), "2. Make sure the toggle next to ", o.a.createElement(d.o, {
                bold: !0
            }, "Email address"), " is ON", o.a.createElement("br", null), "3. Click ", o.a.createElement(d.o, {
                bold: !0
            }, "Continue"), " to save your settings"), o.a.createElement(h.d, {
                multiplier: 3
            }), o.a.createElement(L.a, {
                text: "Open ".concat(r, " settings"),
                color: L.b.Blue,
                onClick: i
            })))
        }
          , U = n(938)
          , W = n.n(U);
        function Y(e) {
            return (Y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function H(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function z(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? H(Object(n), !0).forEach((function(t) {
                    J(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function J(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function K(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i)
                  , s = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o)
        }
        function X(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, o) {
                    var a = e.apply(t, n);
                    function i(e) {
                        K(a, r, o, i, c, "next", e)
                    }
                    function c(e) {
                        K(a, r, o, i, c, "throw", e)
                    }
                    i(void 0)
                }
                ))
            }
        }
        function Q(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function Z(e, t) {
            return !t || "object" !== Y(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function $(e) {
            return ($ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function ee(e, t) {
            return (ee = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var te = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (e = Z(this, $(t).apply(this, arguments))).socialService = new s.b(e.props.socialUserService,e.props.userService,e.props.experimentsService,e.getCtx(),{
                    isSignup: e.props.isSignup,
                    checkExtension: !0,
                    disableSocialService: {
                        facebook: e.isServiceDisabled(l.b.facebook),
                        google: e.isServiceDisabled(l.b.google),
                        apple: e.isServiceDisabled(l.b.apple)
                    }
                }),
                e.popupLogin = function() {
                    var t = X(regeneratorRuntime.mark((function t(n) {
                        var r, o, a, i = arguments;
                        return regeneratorRuntime.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return r = i.length > 1 && void 0 !== i[1] && i[1],
                                    t.prev = 1,
                                    e.socialService.setPopupService(n.service.serviceName),
                                    t.next = 5,
                                    n.loginWithPopup(r);
                                case 5:
                                    e.props.handleAccept(e.props.userService.user, e.props.userService.lastAuthAction),
                                    t.next = 18;
                                    break;
                                case 8:
                                    if (t.prev = 8,
                                    t.t0 = t.catch(1),
                                    o = t.t0.error,
                                    "SOCIAL_ERROR" !== (a = t.t0.message)) {
                                        t.next = 17;
                                        break
                                    }
                                    if (!o.status || "unknown" === o.status || "popup_closed_by_user" === o.error) {
                                        t.next = 15;
                                        break
                                    }
                                    return t.abrupt("return", e.props.handleReject && e.props.handleReject({}, {}));
                                case 15:
                                    t.next = 18;
                                    break;
                                case 17:
                                    e.handleAuthError(o, a);
                                case 18:
                                    return t.prev = 18,
                                    e.socialService.resetPopupService(),
                                    t.finish(18);
                                case 21:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[1, 8, 18, 21]])
                    }
                    )));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                e.socialSignupClick = function(t) {
                    return X(regeneratorRuntime.mark((function n() {
                        var r, o, a, i;
                        return regeneratorRuntime.wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    r = e.props,
                                    o = r.enableMarketingEmails,
                                    a = r.handleAttempt,
                                    !0,
                                    i = function() {
                                        return t.getToken({
                                            enableMarketingEmails: o
                                        })
                                    }
                                    ,
                                    function() {
                                        return e.popupLogin(t, !o)
                                    }
                                    ,
                                    a && !a() || i();
                                case 5:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )))
                }
                ,
                e
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && ee(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "isServiceDisabled",
                value: function(e) {
                    return (this.props.disableSocialService || []).includes(e)
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    if (this.socialService.isError && this.props.handleReject)
                        return this.props.handleReject({}, {});
                    this.socialService.currentSocialService ? this.socialService.currentSocialService.onLoad((function() {
                        return e.socialService.tryContinueWithAuth((function(t) {
                            return e.props.handleAccept(e.props.userService.user, e.props.userService.lastAuthAction)
                        }
                        ), (function(t) {
                            var n = t.error
                              , r = t.message;
                            return e.handleAuthError(n, r)
                        }
                        ))
                    }
                    )) : this.socialService.tryAutoExtensionLogin()
                }
            }, {
                key: "handleAuthError",
                value: function(e, t) {
                    var n, r = this.getCtx(), a = r.nav, i = a.query, l = a.pageId, p = this.props, f = p.handleAuthError, d = p.handleReject, h = p.popupStore, m = this.socialService, b = m.currentServiceName, y = m.currentSocialService, g = {
                        email: null === (n = this.props.socialUserService.user) || void 0 === n ? void 0 : n.email,
                        socialServiceName: b
                    };

                    return y.stopLoading(),
                    t === s.a.socialNoEmail ? (h.addPopup(u.b.requireEmail, o.a.createElement(V, {
                        serviceName: b,
                        loginAgain: this.socialSignupClick(y)
                    })),
                    h.openPopup(u.b.requireEmail, {
                        clickOutside: !0,
                        closeIcon: !0
                    })) : f ? f(e, g) : t === s.a.useEmailLogin ? r.nav.navigate({
                        routeId: "socialPasswordSignin",
                        query: Object(c.a)(z({}, i, {
                            referrer: l,
                            authMethod: b
                        }))
                    }) : void (d && d(e, g))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = this.socialService.services
                      , n = t.facebook
                      , r = t.google
                      , a = t.apple;
                    return o.a.createElement(o.a.Fragment, null, this.isSignupFlow && o.a.createElement(o.a.Fragment, null, this.orDelimiter, o.a.createElement(h.d, {
                        multiplier: 2
                    })), o.a.createElement("div", {
                        className: e.inlineButtons ? W.a.inlineButtonWrapper : W.a.buttonWrapper
                    }, n && Object(p.d)("socialNoEmail")(o.a.createElement(x, {
                        inline: e.inlineButtons,
                        colorScheme: e.colorScheme,
                        onClick: this.socialSignupClick(n)
                    })), r && Object(p.d)("socialPasswordSignin")(o.a.createElement(M, {
                        inline: e.inlineButtons,
                        colorScheme: e.colorScheme,
                        onClick: this.socialSignupClick(r)
                    })), a && o.a.createElement(j, {
                        inline: e.inlineButtons,
                        colorScheme: e.colorScheme,
                        onClick: this.socialSignupClick(a)
                    })), !this.isSignupFlow && o.a.createElement(o.a.Fragment, null, o.a.createElement(h.d, {
                        multiplier: 1
                    }), this.orDelimiter, o.a.createElement(h.d, {
                        multiplier: 2
                    })))
                }
            }, {
                key: "isSignupFlow",
                get: function() {
                    return "signup" === Object(f.d)(this.getCtx())
                }
            }, {
                key: "orDelimiter",
                get: function() {
                    var e = this.socialService.services
                      , t = e.facebook
                      , n = e.google
                      , r = e.apple;
                    return this.props.hideDelimiter ? null : (n || t || r) && o.a.createElement("div", {
                        className: W.a.or
                    }, o.a.createElement(d.p, {
                        color: "neutral50"
                    }, this.isSignupFlow ? "or sign up with:" : "or"))
                }
            }]) && Q(n.prototype, r),
            a && Q(n, a),
            t
        }(a.a);
        t.a = Object(i.a)("socialUserService", "userService", "experimentsService", "popupStore")(Object(i.c)(te))
    },
    876: function(e, t, n) {
        "use strict";
        var r = n(1)
          , o = n.n(r)
          , a = n(67)
          , i = n(56)
          , c = n(993)
          , s = n.n(c);
        function u(e) {
            return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function l(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function p(e, t) {
            return !t || "object" !== u(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function f(e) {
            return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function d(e, t) {
            return (d = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var h = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                p(this, f(t).apply(this, arguments))
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && d(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "render",
                value: function() {
                    return o.a.createElement("div", {
                        className: Object(i.b)(s.a.container, this.props.className),
                        "data-qa": "loader"
                    }, o.a.createElement("span", {
                        className: s.a.preloader
                    }))
                }
            }]) && l(n.prototype, r),
            a && l(n, a),
            t
        }(a.b);
        t.a = h
    },
    878: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return s
        }
        ));
        var r = n(1)
          , o = n.n(r)
          , a = n(146);
        function i() {
            return (i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function c(e, t) {
            if (null == e)
                return {};
            var n, r, o = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        function s(e) {
            var t = e.href
              , n = e.routeId
              , r = e.waypoint
              , s = e.nav
              , u = e.key
              , l = c(e, ["href", "routeId", "waypoint", "nav", "key"]);
            return o.a.createElement("link", i({
                rel: "canonical",
                href: t || Object(a.b)(s, r || {
                    routeId: n
                })
            }, l, {
                key: u || "canonical"
            }))
        }
    },
    880: function(e, t, n) {
        e.exports = {
            title: "_2QSX--title",
            subtitle: "_1l_ZR-subtitle",
            content: "_3aiRa-content",
            instructionsText: "_3MwTX-instructionsText",
            form: "j4-w0-form",
            gradientLine: "_1U7yK-gradientLine",
            close: "_3WdWr-close",
            buildIn: "_3bxLv-buildIn",
            link: "M5DSI-link",
            errorMessage: "_3eIOb-errorMessage",
            input: "_3v2F6-input",
            button: "_3ZHPn-button",
            mobileTosContainer: "_1lqBz-mobileTosContainer",
            tos: "_1K6IG-tos",
            loader: "_32x_L-loader",
            signinForm: "_1XwpH-signinForm",
            space: "_1fQat-space",
            emailInput: "_1DAfH-emailInput",
            show: "RRlBf-show",
            hide: "tf24p-hide"
        }
    },
    881: function(e, t, n) {
        var r, o = function() {
            var e = String.fromCharCode
              , t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
              , n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$"
              , r = {};
            function o(e, t) {
                if (!r[e]) {
                    r[e] = {};
                    for (var n = 0; n < e.length; n++)
                        r[e][e.charAt(n)] = n
                }
                return r[e][t]
            }
            var a = {
                compressToBase64: function(e) {
                    if (null == e)
                        return "";
                    var n = a._compress(e, 6, (function(e) {
                        return t.charAt(e)
                    }
                    ));
                    switch (n.length % 4) {
                    default:
                    case 0:
                        return n;
                    case 1:
                        return n + "===";
                    case 2:
                        return n + "==";
                    case 3:
                        return n + "="
                    }
                },
                decompressFromBase64: function(e) {
                    return null == e ? "" : "" == e ? null : a._decompress(e.length, 32, (function(n) {
                        return o(t, e.charAt(n))
                    }
                    ))
                },
                compressToUTF16: function(t) {
                    return null == t ? "" : a._compress(t, 15, (function(t) {
                        return e(t + 32)
                    }
                    )) + " "
                },
                decompressFromUTF16: function(e) {
                    return null == e ? "" : "" == e ? null : a._decompress(e.length, 16384, (function(t) {
                        return e.charCodeAt(t) - 32
                    }
                    ))
                },
                compressToUint8Array: function(e) {
                    for (var t = a.compress(e), n = new Uint8Array(2 * t.length), r = 0, o = t.length; r < o; r++) {
                        var i = t.charCodeAt(r);
                        n[2 * r] = i >>> 8,
                        n[2 * r + 1] = i % 256
                    }
                    return n
                },
                decompressFromUint8Array: function(t) {
                    if (null == t)
                        return a.decompress(t);
                    for (var n = new Array(t.length / 2), r = 0, o = n.length; r < o; r++)
                        n[r] = 256 * t[2 * r] + t[2 * r + 1];
                    var i = [];
                    return n.forEach((function(t) {
                        i.push(e(t))
                    }
                    )),
                    a.decompress(i.join(""))
                },
                compressToEncodedURIComponent: function(e) {
                    return null == e ? "" : a._compress(e, 6, (function(e) {
                        return n.charAt(e)
                    }
                    ))
                },
                decompressFromEncodedURIComponent: function(e) {
                    return null == e ? "" : "" == e ? null : (e = e.replace(/ /g, "+"),
                    a._decompress(e.length, 32, (function(t) {
                        return o(n, e.charAt(t))
                    }
                    )))
                },
                compress: function(t) {
                    return a._compress(t, 16, (function(t) {
                        return e(t)
                    }
                    ))
                },
                _compress: function(e, t, n) {
                    if (null == e)
                        return "";
                    var r, o, a, i = {}, c = {}, s = "", u = "", l = "", p = 2, f = 3, d = 2, h = [], m = 0, b = 0;
                    for (a = 0; a < e.length; a += 1)
                        if (s = e.charAt(a),
                        Object.prototype.hasOwnProperty.call(i, s) || (i[s] = f++,
                        c[s] = !0),
                        u = l + s,
                        Object.prototype.hasOwnProperty.call(i, u))
                            l = u;
                        else {
                            if (Object.prototype.hasOwnProperty.call(c, l)) {
                                if (l.charCodeAt(0) < 256) {
                                    for (r = 0; r < d; r++)
                                        m <<= 1,
                                        b == t - 1 ? (b = 0,
                                        h.push(n(m)),
                                        m = 0) : b++;
                                    for (o = l.charCodeAt(0),
                                    r = 0; r < 8; r++)
                                        m = m << 1 | 1 & o,
                                        b == t - 1 ? (b = 0,
                                        h.push(n(m)),
                                        m = 0) : b++,
                                        o >>= 1
                                } else {
                                    for (o = 1,
                                    r = 0; r < d; r++)
                                        m = m << 1 | o,
                                        b == t - 1 ? (b = 0,
                                        h.push(n(m)),
                                        m = 0) : b++,
                                        o = 0;
                                    for (o = l.charCodeAt(0),
                                    r = 0; r < 16; r++)
                                        m = m << 1 | 1 & o,
                                        b == t - 1 ? (b = 0,
                                        h.push(n(m)),
                                        m = 0) : b++,
                                        o >>= 1
                                }
                                0 == --p && (p = Math.pow(2, d),
                                d++),
                                delete c[l]
                            } else
                                for (o = i[l],
                                r = 0; r < d; r++)
                                    m = m << 1 | 1 & o,
                                    b == t - 1 ? (b = 0,
                                    h.push(n(m)),
                                    m = 0) : b++,
                                    o >>= 1;
                            0 == --p && (p = Math.pow(2, d),
                            d++),
                            i[u] = f++,
                            l = String(s)
                        }
                    if ("" !== l) {
                        if (Object.prototype.hasOwnProperty.call(c, l)) {
                            if (l.charCodeAt(0) < 256) {
                                for (r = 0; r < d; r++)
                                    m <<= 1,
                                    b == t - 1 ? (b = 0,
                                    h.push(n(m)),
                                    m = 0) : b++;
                                for (o = l.charCodeAt(0),
                                r = 0; r < 8; r++)
                                    m = m << 1 | 1 & o,
                                    b == t - 1 ? (b = 0,
                                    h.push(n(m)),
                                    m = 0) : b++,
                                    o >>= 1
                            } else {
                                for (o = 1,
                                r = 0; r < d; r++)
                                    m = m << 1 | o,
                                    b == t - 1 ? (b = 0,
                                    h.push(n(m)),
                                    m = 0) : b++,
                                    o = 0;
                                for (o = l.charCodeAt(0),
                                r = 0; r < 16; r++)
                                    m = m << 1 | 1 & o,
                                    b == t - 1 ? (b = 0,
                                    h.push(n(m)),
                                    m = 0) : b++,
                                    o >>= 1
                            }
                            0 == --p && (p = Math.pow(2, d),
                            d++),
                            delete c[l]
                        } else
                            for (o = i[l],
                            r = 0; r < d; r++)
                                m = m << 1 | 1 & o,
                                b == t - 1 ? (b = 0,
                                h.push(n(m)),
                                m = 0) : b++,
                                o >>= 1;
                        0 == --p && (p = Math.pow(2, d),
                        d++)
                    }
                    for (o = 2,
                    r = 0; r < d; r++)
                        m = m << 1 | 1 & o,
                        b == t - 1 ? (b = 0,
                        h.push(n(m)),
                        m = 0) : b++,
                        o >>= 1;
                    for (; ; ) {
                        if (m <<= 1,
                        b == t - 1) {
                            h.push(n(m));
                            break
                        }
                        b++
                    }
                    return h.join("")
                },
                decompress: function(e) {
                    return null == e ? "" : "" == e ? null : a._decompress(e.length, 32768, (function(t) {
                        return e.charCodeAt(t)
                    }
                    ))
                },
                _decompress: function(t, n, r) {
                    var o, a, i, c, s, u, l, p = [], f = 4, d = 4, h = 3, m = "", b = [], y = {
                        val: r(0),
                        position: n,
                        index: 1
                    };
                    for (o = 0; o < 3; o += 1)
                        p[o] = o;
                    for (i = 0,
                    s = Math.pow(2, 2),
                    u = 1; u != s; )
                        c = y.val & y.position,
                        y.position >>= 1,
                        0 == y.position && (y.position = n,
                        y.val = r(y.index++)),
                        i |= (c > 0 ? 1 : 0) * u,
                        u <<= 1;
                    switch (i) {
                    case 0:
                        for (i = 0,
                        s = Math.pow(2, 8),
                        u = 1; u != s; )
                            c = y.val & y.position,
                            y.position >>= 1,
                            0 == y.position && (y.position = n,
                            y.val = r(y.index++)),
                            i |= (c > 0 ? 1 : 0) * u,
                            u <<= 1;
                        l = e(i);
                        break;
                    case 1:
                        for (i = 0,
                        s = Math.pow(2, 16),
                        u = 1; u != s; )
                            c = y.val & y.position,
                            y.position >>= 1,
                            0 == y.position && (y.position = n,
                            y.val = r(y.index++)),
                            i |= (c > 0 ? 1 : 0) * u,
                            u <<= 1;
                        l = e(i);
                        break;
                    case 2:
                        return ""
                    }
                    for (p[3] = l,
                    a = l,
                    b.push(l); ; ) {
                        if (y.index > t)
                            return "";
                        for (i = 0,
                        s = Math.pow(2, h),
                        u = 1; u != s; )
                            c = y.val & y.position,
                            y.position >>= 1,
                            0 == y.position && (y.position = n,
                            y.val = r(y.index++)),
                            i |= (c > 0 ? 1 : 0) * u,
                            u <<= 1;
                        switch (l = i) {
                        case 0:
                            for (i = 0,
                            s = Math.pow(2, 8),
                            u = 1; u != s; )
                                c = y.val & y.position,
                                y.position >>= 1,
                                0 == y.position && (y.position = n,
                                y.val = r(y.index++)),
                                i |= (c > 0 ? 1 : 0) * u,
                                u <<= 1;
                            p[d++] = e(i),
                            l = d - 1,
                            f--;
                            break;
                        case 1:
                            for (i = 0,
                            s = Math.pow(2, 16),
                            u = 1; u != s; )
                                c = y.val & y.position,
                                y.position >>= 1,
                                0 == y.position && (y.position = n,
                                y.val = r(y.index++)),
                                i |= (c > 0 ? 1 : 0) * u,
                                u <<= 1;
                            p[d++] = e(i),
                            l = d - 1,
                            f--;
                            break;
                        case 2:
                            return b.join("")
                        }
                        if (0 == f && (f = Math.pow(2, h),
                        h++),
                        p[l])
                            m = p[l];
                        else {
                            if (l !== d)
                                return null;
                            m = a + a.charAt(0)
                        }
                        b.push(m),
                        p[d++] = a + m.charAt(0),
                        a = m,
                        0 == --f && (f = Math.pow(2, h),
                        h++)
                    }
                }
            };
            return a
        }();
        void 0 === (r = function() {
            return o
        }
        .call(t, n, t, e)) || (e.exports = r)
    },
    887: function(e, t, n) {
        "use strict";
        var r = n(194)
          , o = n(289);
        var a = n(122)
          , i = (n(144),
        n(1))
          , c = n.n(i)
          , s = n(228);
        function u(e, t) {
            var n = Object.create(null);
            return e && i.Children.map(e, (function(e) {
                return e
            }
            )).forEach((function(e) {
                n[e.key] = function(e) {
                    return t && Object(i.isValidElement)(e) ? t(e) : e
                }(e)
            }
            )),
            n
        }
        function l(e, t, n) {
            return null != n[t] ? n[t] : e.props[t]
        }
        function p(e, t, n) {
            var r = u(e.children)
              , o = function(e, t) {
                function n(n) {
                    return n in t ? t[n] : e[n]
                }
                e = e || {},
                t = t || {};
                var r, o = Object.create(null), a = [];
                for (var i in e)
                    i in t ? a.length && (o[i] = a,
                    a = []) : a.push(i);
                var c = {};
                for (var s in t) {
                    if (o[s])
                        for (r = 0; r < o[s].length; r++) {
                            var u = o[s][r];
                            c[o[s][r]] = n(u)
                        }
                    c[s] = n(s)
                }
                for (r = 0; r < a.length; r++)
                    c[a[r]] = n(a[r]);
                return c
            }(t, r);
            return Object.keys(o).forEach((function(a) {
                var c = o[a];
                if (Object(i.isValidElement)(c)) {
                    var s = a in t
                      , u = a in r
                      , p = t[a]
                      , f = Object(i.isValidElement)(p) && !p.props.in;
                    !u || s && !f ? u || !s || f ? u && s && Object(i.isValidElement)(p) && (o[a] = Object(i.cloneElement)(c, {
                        onExited: n.bind(null, c),
                        in: p.props.in,
                        exit: l(c, "exit", e),
                        enter: l(c, "enter", e)
                    })) : o[a] = Object(i.cloneElement)(c, {
                        in: !1
                    }) : o[a] = Object(i.cloneElement)(c, {
                        onExited: n.bind(null, c),
                        in: !0,
                        exit: l(c, "exit", e),
                        enter: l(c, "enter", e)
                    })
                }
            }
            )),
            o
        }
        var f = Object.values || function(e) {
            return Object.keys(e).map((function(t) {
                return e[t]
            }
            ))
        }
          , d = function(e) {
            function t(t, n) {
                var r, o = (r = e.call(this, t, n) || this).handleExited.bind(function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(r));
                return r.state = {
                    contextValue: {
                        isMounting: !0
                    },
                    handleExited: o,
                    firstRender: !0
                },
                r
            }
            Object(a.a)(t, e);
            var n = t.prototype;
            return n.componentDidMount = function() {
                this.mounted = !0,
                this.setState({
                    contextValue: {
                        isMounting: !1
                    }
                })
            }
            ,
            n.componentWillUnmount = function() {
                this.mounted = !1
            }
            ,
            t.getDerivedStateFromProps = function(e, t) {
                var n, r, o = t.children, a = t.handleExited;
                return {
                    children: t.firstRender ? (n = e,
                    r = a,
                    u(n.children, (function(e) {
                        return Object(i.cloneElement)(e, {
                            onExited: r.bind(null, e),
                            in: !0,
                            appear: l(e, "appear", n),
                            enter: l(e, "enter", n),
                            exit: l(e, "exit", n)
                        })
                    }
                    ))) : p(e, o, a),
                    firstRender: !1
                }
            }
            ,
            n.handleExited = function(e, t) {
                var n = u(this.props.children);
                e.key in n || (e.props.onExited && e.props.onExited(t),
                this.mounted && this.setState((function(t) {
                    var n = Object(o.a)({}, t.children);
                    return delete n[e.key],
                    {
                        children: n
                    }
                }
                )))
            }
            ,
            n.render = function() {
                var e = this.props
                  , t = e.component
                  , n = e.childFactory
                  , o = Object(r.a)(e, ["component", "childFactory"])
                  , a = this.state.contextValue
                  , i = f(this.state.children).map(n);
                return delete o.appear,
                delete o.enter,
                delete o.exit,
                null === t ? c.a.createElement(s.a.Provider, {
                    value: a
                }, i) : c.a.createElement(s.a.Provider, {
                    value: a
                }, c.a.createElement(t, o, i))
            }
            ,
            t
        }(c.a.Component);
        d.propTypes = {},
        d.defaultProps = {
            component: "div",
            childFactory: function(e) {
                return e
            }
        };
        t.a = d
    },
    888: function(e, t, n) {
        "use strict";
        var r = n(1)
          , o = n.n(r)
          , a = n(857)
          , i = n(285)
          , c = n(56)
          , s = n(1017)
          , u = n.n(s);
        function l(e) {
            return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function p(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function f(e, t) {
            return !t || "object" !== l(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function d(e) {
            return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function h(e, t) {
            return (h = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var m = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                f(this, d(t).apply(this, arguments))
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && h(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.id
                      , r = t.value
                      , a = t.name
                      , s = t.message
                      , l = t.forcedError
                      , p = t.autoComplete
                      , f = t.type
                      , d = t.maxLength
                      , h = t.readOnly
                      , m = t.qa
                      , b = t.errorClassName
                      , y = t.inputClassName
                      , g = t.className
                      , v = t.placeholder
                      , w = t.label
                      , O = m && "txt".concat(Object(i.a)(m))
                      , S = m && "err".concat(Object(i.a)(m))
                      , E = l || s;
                    return o.a.createElement("div", {
                        className: Object(c.b)(u.a.container, g)
                    }, o.a.createElement("label", {
                        className: u.a.label,
                        htmlFor: n
                    }, w), o.a.createElement("input", {
                        id: n,
                        placeholder: v,
                        autoComplete: p,
                        type: f,
                        maxLength: d,
                        readOnly: h,
                        onFocus: this.props.onFocus,
                        onBlur: this.props.onBlur,
                        onChange: function(t) {
                            return e.props.onChange(t.target.value)
                        },
                        value: r,
                        "data-qa": O,
                        name: a,
                        className: Object(c.b)(u.a.input, y, E && u.a.error, h && u.a.readOnly)
                    }), o.a.createElement("div", {
                        "data-qa": S,
                        className: Object(c.b)(u.a.message, !E && u.a.hide, b)
                    }, E))
                }
            }]) && p(n.prototype, r),
            a && p(n, a),
            t
        }(a.a);
        t.a = Object(a.b)(m)
    },
    891: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return y
        }
        )),
        n.d(t, "c", (function() {
            return g
        }
        )),
        n.d(t, "a", (function() {
            return v
        }
        ));
        var r = n(4)
          , o = n(21);
        function a(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i)
                  , s = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o)
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function c(e, t, n) {
            return t && i(e.prototype, t),
            n && i(e, n),
            e
        }
        function s(e, t) {
            return !t || "object" !== h(t) && "function" != typeof t ? l(e) : t
        }
        function u(e) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function l(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function p(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && f(e, t)
        }
        function f(e, t) {
            return (f = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function d(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function h(e) {
            return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var m = function(e, t, n, r) {
            var o, a = arguments.length, i = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : h(Reflect)) && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, t, n, r);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (o = e[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, n, i) : o(t, n)) || i);
            return a > 3 && i && Object.defineProperty(t, n, i),
            i
        }
          , b = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : h(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
          , y = function e() {
            var t = this;
            d(this, e),
            this.disableResend = !1,
            this.setDisableResend = function(e) {
                return t.disableResend = e
            }
            ,
            this.startResendCountdown = function() {
                t.setDisableResend(!0),
                t.timeoutId = window.setTimeout((function() {
                    return t.setDisableResend(!1)
                }
                ), e.IntervalBetweenCodeSend)
            }
            ,
            this.cleanupTimer = function() {
                return t.timeoutId && clearTimeout(t.timeoutId)
            }
        };
        y.IntervalBetweenCodeSend = 3e4,
        m([r.observable, b("design:type", Object)], y.prototype, "disableResend", void 0),
        m([r.action, b("design:type", Object)], y.prototype, "setDisableResend", void 0);
        var g = function(e) {
            function t(e, n, r, i, c, p, f, h) {
                var m;
                return d(this, t),
                (m = s(this, u(t).call(this))).handleSuccess = e,
                m.ctx = n,
                m.setPassword = r,
                m.handleIncorrectPassword = i,
                m.getEmail = c,
                m.getPassword = p,
                m.goToVerifyEmail = f,
                m._goBack = h,
                m.isConfirmNewEmailStep = !1,
                m.setNewEmail = function(e) {
                    m.newEmailCandidate = e
                }
                ,
                m.handleNewEmailInformation = function() {
                    m.startVerifyNewEmailStep(),
                    m.goToVerifyEmail()
                }
                ,
                m.goBack = function() {
                    m.isConfirmNewEmailStep = !1,
                    m._goBack()
                }
                ,
                m.startVerifyNewEmailStep = function() {
                    return m.isConfirmNewEmailStep = !0
                }
                ,
                m.sendCode = function() {
                    var e = m.ctx.api.auth
                      , t = m.isVerifyNewEmail ? function() {
                        return e.sendEmailChangeCode(m.newEmailCandidate || "")
                    }
                    : function() {
                        return e.sendVerificationEmail("business")
                    }
                    ;
                    return m.startResendCountdown(),
                    t()
                }
                ,
                m.verifyCode = function() {
                    var e, t = (e = regeneratorRuntime.mark((function e(t) {
                        var n, r, a, i, c, s;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (n = m.ctx.api.auth,
                                    r = l(m),
                                    a = r.isVerifyNewEmail,
                                    i = r.newEmailCandidate,
                                    c = void 0 === i ? "" : i,
                                    s = r.password,
                                    !a) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 5,
                                    n.verifyEmailChangeCode(c, s, t).catch((function(e) {
                                        throw "FAILURE" === Object(o.g)(e) && m.handleIncorrectPassword(),
                                        e
                                    }
                                    ));
                                case 5:
                                    return e.abrupt("return", e.sent);
                                case 6:
                                    return e.abrupt("return", n.verifyVerificationEmail(t));
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )),
                    function() {
                        var t = this
                          , n = arguments;
                        return new Promise((function(r, o) {
                            var i = e.apply(t, n);
                            function c(e) {
                                a(i, r, o, c, s, "next", e)
                            }
                            function s(e) {
                                a(i, r, o, c, s, "throw", e)
                            }
                            c(void 0)
                        }
                        ))
                    }
                    );
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                m
            }
            return p(t, e),
            c(t, [{
                key: "isVerifyNewEmail",
                get: function() {
                    return this.isConfirmNewEmailStep
                }
            }, {
                key: "email",
                get: function() {
                    return this.getEmail()
                }
            }, {
                key: "password",
                get: function() {
                    return this.getPassword()
                }
            }]),
            t
        }(y);
        m([r.observable, b("design:type", Object)], g.prototype, "newEmailCandidate", void 0),
        m([r.observable, b("design:type", Object)], g.prototype, "isConfirmNewEmailStep", void 0),
        m([r.action, b("design:type", Object)], g.prototype, "setNewEmail", void 0),
        m([r.action, b("design:type", Object)], g.prototype, "handleNewEmailInformation", void 0),
        m([r.action, b("design:type", Object)], g.prototype, "goBack", void 0),
        m([r.computed, b("design:type", Object), b("design:paramtypes", [])], g.prototype, "isVerifyNewEmail", null),
        m([r.computed, b("design:type", Object), b("design:paramtypes", [])], g.prototype, "email", null),
        m([r.computed, b("design:type", Object), b("design:paramtypes", [])], g.prototype, "password", null),
        m([r.action, b("design:type", Object)], g.prototype, "startVerifyNewEmailStep", void 0);
        var v = function(e) {
            function t(e, n, r) {
                var o;
                return d(this, t),
                (o = s(this, u(t).call(this))).getEmail = e,
                o.handleSuccess = n,
                o.ctx = r,
                o.newEmailCandidate = void 0,
                o.sendCode = function() {
                    return o.ctx.api.auth.sendVerificationEmail("business")
                }
                ,
                o.verifyCode = function(e) {
                    return o.ctx.api.auth.verifyVerificationEmail(e)
                }
                ,
                o
            }
            return p(t, e),
            c(t, [{
                key: "email",
                get: function() {
                    return this.getEmail()
                }
            }, {
                key: "isVerifyNewEmail",
                get: function() {
                    return !1
                }
            }, {
                key: "password",
                get: function() {
                    return ""
                }
            }]),
            t
        }(y);
        m([r.computed, b("design:type", Object), b("design:paramtypes", [])], v.prototype, "email", null)
    },
    893: function(e, t, n) {
        "use strict";
        var r, o = n(1), a = n.n(o), i = n(67), c = n(56), s = n(946), u = n.n(s);
        function l(e) {
            return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function p(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i)
                  , s = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o)
        }
        function f(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++)
                        n[t] = e[t];
                    return n
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
                    return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        function d(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function h(e, t) {
            return !t || "object" !== l(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function m(e) {
            return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function b(e, t) {
            return (b = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        !function(e) {
            e[e.BackSpace = 8] = "BackSpace",
            e[e.LeftArrow = 37] = "LeftArrow",
            e[e.RightArrow = 39] = "RightArrow"
        }(r || (r = {}));
        var y = ""
          , g = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (e = h(this, m(t).apply(this, arguments))).fieldCount = 6,
                e.lockInputs = !1,
                e.inputs = Array(e.fieldCount).fill((function() {
                    return a.a.createRef()
                }
                )).map((function(e) {
                    return e()
                }
                )),
                e.state = {
                    values: Array(e.fieldCount).fill(y)
                },
                e.updateValues = function(t, n) {
                    var r = e.getCode();
                    e.setState((function(r) {
                        return {
                            values: e.replaceValues(r.values, t, n)
                        }
                    }
                    ), (function() {
                        e.props.onChange(e.getCode()),
                        e.handleIfFilledOut(r)
                    }
                    ))
                }
                ,
                e.replaceValues = function(t, n, r) {
                    var o = r === y ? [""] : r.substring(0, e.fieldCount - n).split(y);
                    return e.splice(t, n, o)
                }
                ,
                e.splice = function(e, t, n) {
                    var r = e.slice();
                    return r.splice.apply(r, [t, n.length].concat(f(n))),
                    r
                }
                ,
                e.handleIfFilledOut = function() {
                    var t, n = (t = regeneratorRuntime.mark((function t(n) {
                        var r;
                        return regeneratorRuntime.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.lockInputs = !0,
                                    (r = e.getCode()).length !== e.fieldCount || n === r || !e.props.onFilledOut) {
                                        t.next = 11;
                                        break
                                    }
                                    return t.prev = 3,
                                    t.next = 6,
                                    e.props.onFilledOut(r);
                                case 6:
                                    e.clearCode(),
                                    t.next = 11;
                                    break;
                                case 9:
                                    t.prev = 9,
                                    t.t0 = t.catch(3);
                                case 11:
                                    e.lockInputs = !1;
                                case 12:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[3, 9]])
                    }
                    )),
                    function() {
                        var e = this
                          , n = arguments;
                        return new Promise((function(r, o) {
                            var a = t.apply(e, n);
                            function i(e) {
                                p(a, r, o, i, c, "next", e)
                            }
                            function c(e) {
                                p(a, r, o, i, c, "throw", e)
                            }
                            i(void 0)
                        }
                        ))
                    }
                    );
                    return function(e) {
                        return n.apply(this, arguments)
                    }
                }(),
                e.clearCode = function() {
                    e.setState({
                        values: Array(e.fieldCount).fill(y)
                    }),
                    e.goto(0)
                }
                ,
                e.getCode = function() {
                    return e.state.values.join(y)
                }
                ,
                e
            }
            var n, o, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && b(e, t)
            }(t, e),
            n = t,
            (o = [{
                key: "goto",
                value: function(e) {
                    var t = this.inputs[Math.max(0, Math.min(this.fieldCount - 1, e))];
                    t.current.focus(),
                    t.current.select()
                }
            }, {
                key: "handleChange",
                value: function(e, t) {
                    if (!this.lockInputs) {
                        var n = e.target.value.replace(/[^\d]/g, y);
                        this.updateValues(t, n),
                        this.goto(Math.min(t + n.length, this.fieldCount))
                    }
                }
            }, {
                key: "handleKeyDown",
                value: function(e, t) {
                    if (!this.lockInputs) {
                        var n = e.keyCode;
                        n === r.BackSpace ? (e.preventDefault(),
                        this.updateValues(t, y),
                        this.goto(t - 1)) : n === r.LeftArrow ? (e.preventDefault(),
                        this.goto(t - 1)) : n === r.RightArrow && (e.preventDefault(),
                        this.goto(t + 1))
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return a.a.createElement("div", {
                        className: u.a.container
                    }, this.inputs.map((function(t, n) {
                        return a.a.createElement("input", {
                            disabled: e.props.disabled,
                            ref: t,
                            className: Object(c.b)(u.a.input, 2 === n && u.a.third),
                            autoFocus: 0 === n,
                            key: "input_".concat(n),
                            type: "text",
                            pattern: "[0-9]*",
                            autoComplete: "one-time-code",
                            value: e.state.values[n],
                            onFocus: function(e) {
                                return e.target.select()
                            },
                            onChange: function(t) {
                                return e.handleChange(t, n)
                            },
                            onKeyDown: function(t) {
                                return e.handleKeyDown(t, n)
                            },
                            inputMode: "numeric",
                            "data-qa": "txtCodes".concat(n)
                        })
                    }
                    )))
                }
            }]) && d(n.prototype, o),
            i && d(n, i),
            t
        }(i.b);
        t.a = g
    },
    894: function(e, t, n) {
        "use strict";
        var r = n(1)
          , o = n.n(r);
        function a(e) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function c(e, t) {
            return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function s(e) {
            return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function u(e, t) {
            return (u = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var l = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (e = c(this, s(t).apply(this, arguments))).state = {
                    score: 1,
                    isAnimation: !1
                },
                e.startAnimation = function() {
                    if (!e.state.isAnimation) {
                        var t = e.props.score || 100
                          , n = e.props.interval;
                        e.setState({
                            score: 1,
                            isAnimation: !0
                        }, (function() {
                            return e.doAnimation(t, n)
                        }
                        ))
                    }
                }
                ,
                e.doAnimation = function(t, n) {
                    e.state.score < t ? (e.setState((function(e) {
                        return {
                            score: e.score + 1
                        }
                    }
                    )),
                    e.timeoutId = window.setTimeout((function() {
                        return e.doAnimation(t, n)
                    }
                    ), n / t)) : e.setState({
                        isAnimation: !1
                    })
                }
                ,
                e
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && u(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "componentWillUnmount",
                value: function() {
                    this.timeoutId && clearTimeout(this.timeoutId)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.radius
                      , t = e * Math.PI;
                    return o.a.createElement("div", {
                        className: this.props.className
                    }, o.a.createElement("svg", {
                        fill: "none",
                        width: 2 * e,
                        height: 2 * e,
                        onClick: this.startAnimation
                    }, o.a.createElement("circle", {
                        stroke: "#EFF0F7",
                        cx: e,
                        cy: e,
                        r: e / 2,
                        strokeWidth: e
                    }), o.a.createElement("circle", {
                        stroke: "#C6CBDE",
                        cx: e,
                        cy: e,
                        r: e / 2,
                        strokeWidth: e,
                        strokeDasharray: "".concat(t * this.state.score / 100, " ").concat(t),
                        transform: "rotate(-90, ".concat(e, ", ").concat(e, ")")
                    })))
                }
            }]) && i(n.prototype, r),
            a && i(n, a),
            t
        }(n(67).b);
        t.a = l
    },
    895: function(e, t, n) {
        e.exports = {
            instructionsText: "CvKgb-instructionsText",
            tooltip: "_2TEeE-tooltip",
            link: "_2kkq_-link",
            disabledLink: "gJR0V-disabledLink",
            emailContainer: "BMJ3q-emailContainer",
            form: "_1yPgF-form",
            emailIllustration: "_1Gqym-emailIllustration",
            errorMessageContainer: "_3YraE-errorMessageContainer",
            errorMessage: "_3Ur0x-errorMessage",
            links: "_2lJyn-links",
            progress: "_1Dvcu-progress",
            hide: "_2SL_A-hide",
            preLoader: "_1QXfq-preLoader",
            subtitle: "_2eCC7-subtitle"
        }
    },
    897: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return s
        }
        )),
        n.d(t, "a", (function() {
            return u
        }
        ));
        var r = n(36)
          , o = n(147)
          , a = n(99)
          , i = n(868);
        function c() {
            Object(r.e)("isGrammarlyUser", !0, o.c)
        }
        function s(e) {
            a.a.sendPageview("/G:User_Login_Succeeded"),
            c()
        }
        function u() {
            c(),
            Object(i.a)(),
            a.a.sendPageview("/G:User_Account_Created")
        }
    },
    900: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return p
        }
        ));
        var r = n(67);
        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function a(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function c(e, t) {
            return !t || "object" !== o(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function s(e) {
            return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function u(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && l(e, t)
        }
        function l(e, t) {
            return (l = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var p = function(e) {
            function t() {
                var e;
                return a(this, t),
                (e = c(this, s(t).apply(this, arguments))).inputs = {},
                e
            }
            var n, r, o;
            return u(t, e),
            n = t,
            (r = [{
                key: "validateForm",
                value: function() {
                    return this.validate().isValid
                }
            }, {
                key: "validate",
                value: function() {
                    var e = this
                      , t = [];
                    return {
                        isValid: Object.keys(this.inputs).reduce((function(n, r) {
                            var o = e.inputs[r];
                            if (!o)
                                return !1;
                            var a = o.validate(!0)
                              , i = a.valid
                              , c = a.message;
                            return !i && c && t.push({
                                fieldName: r,
                                errorMessage: c.toString()
                            }),
                            n && i
                        }
                        ), !0),
                        errors: t
                    }
                }
            }, {
                key: "formData",
                get: function() {
                    var e = this;
                    return Object.keys(this.inputs).reduce((function(t, n) {
                        return Object.assign(t, (r = {},
                        o = n,
                        a = e.inputs[n].value,
                        o in r ? Object.defineProperty(r, o, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = a,
                        r));
                        var r, o, a
                    }
                    ), {})
                }
            }]) && i(n.prototype, r),
            o && i(n, o),
            t
        }(r.a);
        r.b
    },
    901: function(e, t, n) {
        "use strict";
        var r = n(1)
          , o = n.n(r)
          , a = n(857)
          , i = n(285)
          , c = n(56)
          , s = n(917)
          , u = n.n(s)
          , l = n(1016)
          , p = n.n(l);
        function f(e) {
            return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function d(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function h(e, t) {
            return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function m(e) {
            return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function b(e, t) {
            return (b = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var y = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                h(this, m(t).apply(this, arguments))
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && b(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "getSelectInput",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.id
                      , r = t.value
                      , a = t.message
                      , s = t.readOnly
                      , l = t.qa
                      , f = t.name
                      , d = t.inputClassName
                      , h = t.options
                      , m = t.defaultOption
                      , b = t.placeholder
                      , y = t.onFocus
                      , g = t.onBlur
                      , v = t.size
                      , w = l && "txt".concat(Object(i.a)(l));
                    return o.a.createElement("div", {
                        className: Object(c.b)(p.a.input, d, a && p.a.error, s && p.a.readOnly)
                    }, o.a.createElement("select", {
                        id: n,
                        required: !0,
                        onFocus: y,
                        onBlur: g,
                        onChange: function(t) {
                            return e.props.onChange(t.target.value)
                        },
                        value: r,
                        "data-qa": w,
                        className: p.a.select,
                        name: f,
                        size: v
                    }, b && o.a.createElement("option", {
                        value: "",
                        disabled: !0,
                        hidden: !0
                    }, b), m && o.a.createElement("option", {
                        value: "",
                        disabled: !0
                    }), h.map((function(e) {
                        return o.a.createElement("option", {
                            "data-qa": e.qa,
                            value: e.value,
                            key: e.key || e.value,
                            className: p.a.dropDownOption,
                            disabled: e.disabled
                        }, e.label)
                    }
                    ))), !v && o.a.createElement("img", {
                        src: u.a,
                        className: p.a.downArrow
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.message
                      , n = e.qa
                      , r = e.errorClassName
                      , a = e.className
                      , s = e.label
                      , u = e.id
                      , l = n && "err".concat(Object(i.a)(n));
                    return o.a.createElement("div", {
                        className: Object(c.b)(p.a.container, a)
                    }, o.a.createElement("label", {
                        className: p.a.label,
                        htmlFor: u
                    }, s), this.getSelectInput(), o.a.createElement("div", {
                        "data-qa": l,
                        className: Object(c.b)(p.a.message, !t && p.a.hide, r)
                    }, t))
                }
            }]) && d(n.prototype, r),
            a && d(n, a),
            t
        }(a.a);
        t.a = Object(a.b)(y)
    },
    907: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", (function() {
                return h
            }
            ));
            var r = n(143)
              , o = n(62)
              , a = n(21)
              , i = n(22)
              , c = n(20)
              , s = n(867);
            function u(e, t, n, r, o, a, i) {
                try {
                    var c = e[a](i)
                      , s = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(s) : Promise.resolve(s).then(r, o)
            }
            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function(t) {
                        f(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            function f(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var h = function() {
                function t(e, n, r, o, a) {
                    var i = this
                      , c = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.onLoad = function(e) {
                        return i.service.onLoad(e)
                    }
                    ,
                    this.startLoading = function() {
                        return i.service.setLoading(!0)
                    }
                    ,
                    this.stopLoading = function() {
                        return i.service.setLoading(!1)
                    }
                    ,
                    this.isSignedIn = function() {
                        return !!i.service.isSignedIn && i.service.isSignedIn()
                    }
                    ,
                    this.revokeAppAccess = function() {
                        return i.service.revokeAppAccess && i.service.revokeAppAccess()
                    }
                    ,
                    this.trackSuccess = function(e) {
                        return i.tracker.success(e.action),
                        e
                    }
                    ,
                    this.service = e,
                    this.socialUserService = n,
                    this.userService = r,
                    this.experimentsService = o,
                    this.isSignup = c,
                    this.ctx = a,
                    this.service.fetchScript()
                }
                var n, l, f, h, m;
                return n = t,
                (l = [{
                    key: "continueWithAuth",
                    value: function(e) {
                        return this.isSignup ? this.signup(e) : this.signin()
                    }
                }, {
                    key: "signup",
                    value: function(e) {
                        var t = this;
                        return this.startLoading(),
                        this.userService.signup(p({}, this.service.getAuthSignupConfig(e), {
                            custom_fields: this.customFields
                        })).then(this.trackSuccess).catch((function(e) {
                            var n = Object(a.g)(e);
                            throw t.logError("Social signup. Response from server", "SignupError", e),
                            {
                                error: e,
                                message: n
                            }
                        }
                        ))
                    }
                }, {
                    key: "signin",
                    value: function() {
                        var e = this;
                        return this.startLoading(),
                        this.userService.login(p({}, this.service.getAuthSigninConfig(), {
                            custom_fields: this.customFields
                        })).then(this.trackSuccess).catch((function(t) {
                            var n = Object(a.g)(t);
                            throw e.logError("Get user", "SigninError", t),
                            {
                                error: t,
                                message: n
                            }
                        }
                        ))
                    }
                }, {
                    key: "getToken",
                    value: function(e) {
                        var t = e.isPopup
                          , n = e.enableMarketingEmails
                          , r = e.withPassword
                          , o = e.desiredTokenType;
                        this.isFromExtension || t ? this.tracker.popupShow() : this.tracker.click(),
                        Object(s.g)(this.ctx, this.service.serviceName, n),
                        r && this.service.getTokenWithPassword ? this.service.getTokenWithPassword(o) : this.service.getToken(o)
                    }
                }, {
                    key: "getTokenForUnlink",
                    value: function(e) {
                        return this.getToken(p({}, e, {
                            desiredTokenType: this.service.unlinkTokenType
                        }))
                    }
                }, {
                    key: "loginWithPopup",
                    value: (h = regeneratorRuntime.mark((function e() {
                        var t, n, r, o, i = arguments;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = i.length > 0 && void 0 !== i[0] && i[0],
                                    e.prev = 1,
                                    this.startLoading(),
                                    e.next = 5,
                                    this.service.loginWithPopup();
                                case 5:
                                    return e.next = 7,
                                    this.service.loadUser();
                                case 7:
                                    n = e.sent,
                                    this.socialUserService.setUser(p({}, n || {}, {
                                        enableMarketingEmails: !t
                                    })),
                                    e.next = 15;
                                    break;
                                case 11:
                                    throw e.prev = 11,
                                    e.t0 = e.catch(1),
                                    this.stopLoading(),
                                    {
                                        error: e.t0,
                                        message: "SOCIAL_ERROR"
                                    };
                                case 15:
                                    return e.prev = 15,
                                    e.next = 18,
                                    this.userService.login(p({}, this.service.getAuthSigninConfig(), {
                                        custom_fields: this.customFields
                                    }));
                                case 18:
                                    return r = e.sent,
                                    this.trackSuccess(r),
                                    e.abrupt("return", r);
                                case 23:
                                    throw e.prev = 23,
                                    e.t1 = e.catch(15),
                                    o = Object(a.g)(e.t1),
                                    this.logError("Get user", "SigninError", e.t1),
                                    {
                                        error: e.t1,
                                        message: o
                                    };
                                case 28:
                                    return e.prev = 28,
                                    this.stopLoading(),
                                    e.finish(28);
                                case 31:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[1, 11], [15, 23, 28, 31]])
                    }
                    )),
                    m = function() {
                        var e = this
                          , t = arguments;
                        return new Promise((function(n, r) {
                            var o = h.apply(e, t);
                            function a(e) {
                                u(o, n, r, a, i, "next", e)
                            }
                            function i(e) {
                                u(o, n, r, a, i, "throw", e)
                            }
                            a(void 0)
                        }
                        ))
                    }
                    ,
                    function() {
                        return m.apply(this, arguments)
                    }
                    )
                }, {
                    key: "loadUser",
                    value: function() {
                        var e = this;
                        return this.startLoading(),
                        this.service.loadUser().then((function(t) {
                            return t || (t = {}),
                            t.enableMarketingEmails = Object(s.b)().enableMarketingEmails,
                            e.socialUserService.setUser(t),
                            e.stopLoading(),
                            t
                        }
                        )).catch((function(t) {
                            throw e.tracker.fail(t.error || t.message || "".concat(e.service.serviceName, " Error: User cancelled login")),
                            e.logError("Get user", "GetUserError", t),
                            t
                        }
                        ))
                    }
                }, {
                    key: "setToken",
                    value: function() {
                        this.service.setToken(this.ctx)
                    }
                }, {
                    key: "logError",
                    value: function(t, n, r) {
                        Object(c.b)("Error ".concat(this.service.serviceName, ". ").concat(t, ": ").concat(Object(a.l)(r)), e, "SocialSignInUp.".concat(this.service.serviceName, ".").concat(n))
                    }
                }, {
                    key: "callEvent",
                    value: function(e, t) {
                        var n = Object(o.d)(this.ctx)
                          , r = this.service.serviceName
                          , a = this.isSignup || "SIGNUP" === t ? "Signup" : "Signin";
                        i.d["".concat(Object(o.c)(this.ctx), "Social").concat(a).concat(e)] ? i.d["".concat(Object(o.c)(this.ctx), "Social").concat(a).concat(e)](n, r) : i.d["sharedSocial".concat(a).concat(e)](n, r)
                    }
                }, {
                    key: "isFromExtension",
                    get: function() {
                        return this.service.isFromExtension(this.ctx)
                    }
                }, {
                    key: "customFields",
                    get: function() {
                        var e = this.experimentsService.isGDPR && !(this.socialUserService.user && this.socialUserService.user.enableMarketingEmails)
                          , t = this.experimentsService.isActive(r.c.IPMHoldBack.groups.enabled);
                        return p({}, e ? {
                            disableMarketingEmails: e
                        } : {}, {}, t ? {
                            ipmHoldBack: t
                        } : {})
                    }
                }, {
                    key: "tracker",
                    get: function() {
                        var e = this;
                        return {
                            popupShow: function() {
                                return e.callEvent("PopupShow")
                            },
                            click: function() {
                                return e.callEvent("ButtonClick")
                            },
                            success: function(t) {
                                return e.callEvent("FormSuccess", t)
                            },
                            fail: function(t) {
                                var n = Object(o.d)(e.ctx)
                                  , r = e.service.serviceName
                                  , a = e.isSignup ? "Signup" : "Signin";
                                i.d["".concat(Object(o.c)(e.ctx), "Social").concat(a, "FormFail")] ? i.d["".concat(Object(o.c)(e.ctx), "Social").concat(a, "FormFail")](n, r, void 0, t) : i.d["sharedSocial".concat(a, "FormFail")](n, r, void 0, t)
                            }
                        }
                    }
                }]) && d(n.prototype, l),
                f && d(n, f),
                t
            }()
        }
        ).call(this, "/index.js")
    },
    912: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return p
        }
        ));
        var r = n(907)
          , o = n(867)
          , a = n(83);
        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function c(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i)
                  , s = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o)
        }
        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function l(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        n.d(t, "a", (function() {
            return a.a
        }
        ));
        var p = function() {
            function e(t, n, a, i) {
                var c = this
                  , l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.removeSocialStorage = function() {
                    return Object(o.e)()
                }
                ,
                this.getSocialStorage = function() {
                    return Object(o.b)()
                }
                ,
                this.socialUser = t,
                this.ctx = i,
                this.settings = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? s(Object(n), !0).forEach((function(t) {
                            u(e, t, n[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                        ))
                    }
                    return e
                }({}, l, {
                    disableSocialService: l.disableSocialService || {}
                }),
                this.services = Object.keys(t.services).reduce((function(e, o) {
                    return c.settings.disableSocialService[o] || (e[o] = new r.a(t.services[o],t,n,a,i,c.settings.isSignup)),
                    e
                }
                ), {})
            }
            var t, n, p, f, d;
            return t = e,
            (n = [{
                key: "tryContinueWithAuth",
                value: (f = regeneratorRuntime.mark((function e(t, n) {
                    var r, o;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (this.canContinueWithAuth) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return r = this.currentSocialService,
                                e.prev = 3,
                                e.next = 6,
                                r.continueWithAuth(this.socialUser.user.email);
                            case 6:
                                if ((o = e.sent).user && this.socialUser.setUser(void 0),
                                !this.settings.checkExtension || !r.isFromExtension) {
                                    e.next = 10;
                                    break
                                }
                                return e.abrupt("return", window.close());
                            case 10:
                                t(o),
                                e.next = 17;
                                break;
                            case 13:
                                e.prev = 13,
                                e.t0 = e.catch(3),
                                n(e.t0),
                                this.socialUser.setUser(void 0);
                            case 17:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this, [[3, 13]])
                }
                )),
                d = function() {
                    var e = this
                      , t = arguments;
                    return new Promise((function(n, r) {
                        var o = f.apply(e, t);
                        function a(e) {
                            c(o, n, r, a, i, "next", e)
                        }
                        function i(e) {
                            c(o, n, r, a, i, "throw", e)
                        }
                        a(void 0)
                    }
                    ))
                }
                ,
                function(e, t) {
                    return d.apply(this, arguments)
                }
                )
            }, {
                key: "tryAutoExtensionLogin",
                value: function() {
                    var e = this;
                    if (!this.canContinueWithAuth)
                        for (var t in this.services)
                            if (this.services[t].isFromExtension) {
                                var n = function() {
                                    var n = e.services[t];
                                    return {
                                        v: n.onLoad((function() {
                                            return n.getToken({})
                                        }
                                        ))
                                    }
                                }();
                                if ("object" === i(n))
                                    return n.v
                            }
                }
            }, {
                key: "setPopupService",
                value: function(e) {
                    this.serviceName = a.b[e]
                }
            }, {
                key: "resetPopupService",
                value: function() {
                    this.serviceName = void 0
                }
            }, {
                key: "currentServiceName",
                get: function() {
                    return Object(o.a)(this.ctx) || this.serviceName || ""
                }
            }, {
                key: "currentSocialService",
                get: function() {
                    return this.services[this.currentServiceName]
                }
            }, {
                key: "currentServiceFromSession",
                get: function() {
                    var e = Object(o.f)();
                    return e ? this.services[e] : void 0
                }
            }, {
                key: "isError",
                get: function() {
                    return Object(o.d)(this.ctx)
                }
            }, {
                key: "waypointFromSocialStorage",
                get: function() {
                    return Object(o.i)()
                }
            }, {
                key: "canContinueWithAuth",
                get: function() {
                    return this.socialUser.user && this.currentSocialService
                }
            }]) && l(t.prototype, n),
            p && l(t, p),
            e
        }()
    },
    913: function(e, t, n) {
        "use strict";
        var r = n(1)
          , o = n.n(r)
          , a = n(857)
          , i = n(56)
          , c = n(1021)
          , s = n.n(c);
        function u(e) {
            return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function l(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function p(e, t) {
            return !t || "object" !== u(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function f(e) {
            return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function d(e, t) {
            return (d = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var h = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                p(this, f(t).apply(this, arguments))
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && d(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.placeholder
                      , r = t.className
                      , a = t.label
                      , c = t.value
                      , u = t.message
                      , l = t.containerClass
                      , p = t.errorClassName;
                    return o.a.createElement("div", {
                        className: Object(i.b)(s.a.container, l)
                    }, a && o.a.createElement("div", {
                        className: s.a.inputLabel
                    }, a), o.a.createElement("textarea", {
                        value: c,
                        className: Object(i.b)(r, s.a.textarea, u && s.a.error),
                        placeholder: n,
                        onFocus: this.props.onFocus,
                        onBlur: this.props.onBlur,
                        onChange: function(t) {
                            return e.props.onChange(t.target.value)
                        }
                    }), o.a.createElement("div", {
                        className: Object(i.b)(s.a.required, !u && s.a.hide, p)
                    }, u))
                }
            }]) && l(n.prototype, r),
            a && l(n, a),
            t
        }(a.a);
        t.a = Object(a.b)(h)
    },
    914: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return a
        }
        )),
        n.d(t, "a", (function() {
            return i
        }
        ));
        var r = n(13)
          , o = Object(r.a)().urls;
        function a(e) {
            return "true" === e.nav.query.office_js
        }
        function i() {
            document.location.href = o.officeAddinJsSuccess
        }
    },
    916: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return c
        }
        )),
        n.d(t, "a", (function() {
            return s
        }
        ));
        var r = n(1)
          , o = n.n(r)
          , a = n(922)
          , i = n.n(a)
          , c = function(e) {
            return o.a.createElement("div", {
                className: i.a.gradientBorderContainer
            }, o.a.createElement("div", {
                className: i.a.gradientBorderBorderLine
            }), o.a.createElement("div", {
                className: i.a.gradientBorderContent
            }, e.children))
        }
          , s = function(e) {
            return o.a.createElement("div", {
                className: i.a.basicContainer
            }, e.children)
        }
    },
    917: function(e, t, n) {
        e.exports = n.p + "files/e3b346a64420cc677055a85755d94e00/arrow.svg"
    },
    922: function(e, t, n) {
        e.exports = {
            basicContainer: "_1tMVp-basicContainer",
            gradientBorderBorderLine: "_1YQSM-gradientBorderBorderLine",
            gradientBorderContainer: "NqjsY-gradientBorderContainer",
            gradientBorderContent: "_1FlUn-gradientBorderContent"
        }
    },
    925: function(e, t, n) {
        e.exports = {
            link: "_1XWLl-link"
        }
    },
    928: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return r
        }
        )),
        n.d(t, "a", (function() {
            return l
        }
        ));
        var r, o = n(1), a = n.n(o), i = n(901), c = n(888);
        function s() {
            return (s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function u(e, t) {
            if (null == e)
                return {};
            var n, r, o = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        !function(e) {
            e.select = "select",
            e.field = "field"
        }(r || (r = {}));
        var l = a.a.forwardRef((function(e, t) {
            e.name;
            var n = e.inputType
              , r = u(e, ["name", "inputType"]);
            switch (n) {
            case "field":
                return a.a.createElement(c.a, s({
                    ref: t
                }, r));
            case "select":
                return a.a.createElement(i.a, s({
                    ref: t
                }, r));
            default:
                return null
            }
        }
        ))
    },
    929: function(e, t, n) {
        "use strict";
        var r = n(1)
          , o = n.n(r)
          , a = n(4)
          , i = n(67)
          , c = n(109)
          , s = n(68)
          , u = n(294)
          , l = n(83)
          , p = n(21)
          , f = n(863)
          , d = n(291)
          , h = n(56)
          , m = n(62)
          , b = n(148)
          , y = n(20)
          , g = n(22)
          , v = n(98)
          , w = n(142)
          , O = n(13)
          , S = n(143)
          , E = n(84)
          , j = n(941)
          , k = n(942);
        function P() {
            return (P = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var _ = Object(O.a)().recaptcha
          , C = {
            enterpriseKey: _.enterprise.sitekey,
            enterpriseUrl: _.enterpriseUrl,
            globalEnterpriseUrl: _.globalEnterpriseUrl
        }
          , x = new k.a(C,j.b);
        x.addOnLoadHook();
        var N = n(852)
          , I = n(898)
          , A = n(876)
          , R = n(97)
          , M = n(913)
          , T = n(837)
          , F = n(944)
          , L = n.n(F)
          , B = n(945)
          , D = n.n(B);
        function q(e) {
            return (q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function G(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function V(e, t) {
            return !t || "object" !== q(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function U(e) {
            return (U = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function W(e, t) {
            return (W = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var Y = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (e = V(this, U(t).apply(this, arguments))).state = {
                    comment: "",
                    success: !1
                },
                e.sendRequest = function() {
                    e.getCtx().api.irbis.createMfaSupportTicket({
                        name: "NA - Two Step Verification Form",
                        email: e.props.email,
                        comment: e.state.comment
                    }),
                    e.setState({
                        success: !0
                    })
                }
                ,
                e
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && W(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "componentDidMount",
                value: function() {
                    g.d.sharedContactSupportStepPageShow(Object(m.f)(this.getCtx()), location.href)
                }
            }, {
                key: "render",
                value: function() {
                    return o.a.createElement("div", null, this.state.success ? this.success : this.request)
                }
            }, {
                key: "request",
                get: function() {
                    var e = this;
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: D.a.subTitle
                    }, "It will take several business days to get back into your account using Grammarly’s help."), o.a.createElement("div", {
                        className: D.a.text
                    }, o.a.createElement("p", null, "Grammarly wants to make sure that you - and not somebody who stole your password and is pretending to be you - are the one trying to get into your account. This process requires at least 5 days."), o.a.createElement("p", null, "If you’re sure you don’t have access to any of your second step verification methods, please give us a brief description of your problem and we will get back to you.")), o.a.createElement(M.a, {
                        className: D.a.textarea,
                        placeholder: "Please describe your issue",
                        handleChange: function(t) {
                            return e.setState({
                                comment: t
                            })
                        }
                    }), o.a.createElement(T.b, {
                        colorScheme: "green",
                        onClick: this.sendRequest,
                        className: D.a.button,
                        shape: "rect"
                    }, "Submit request"))
                }
            }, {
                key: "success",
                get: function() {
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
                        src: L.a,
                        className: D.a.successIcon
                    }), o.a.createElement("div", {
                        className: D.a.successTitle
                    }, "We’ve got your request"), o.a.createElement("div", {
                        className: D.a.successText
                    }, "Please allow several business days for one of our representatives to contact you."), o.a.createElement(R.b, {
                        className: D.a.backLink,
                        onBeforeFollow: this.props.backToSignin,
                        qa: "linkBackToLogin"
                    }, "< Back to login"))
                }
            }]) && G(n.prototype, r),
            a && G(n, a),
            t
        }(i.b)
          , H = n(940)
          , z = n(866)
          , J = n(949)
          , K = n.n(J);
        function X(e) {
            return (X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Q(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i)
                  , s = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o)
        }
        function Z(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, o) {
                    var a = e.apply(t, n);
                    function i(e) {
                        Q(a, r, o, i, c, "next", e)
                    }
                    function c(e) {
                        Q(a, r, o, i, c, "throw", e)
                    }
                    i(void 0)
                }
                ))
            }
        }
        function $(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function ee(e, t) {
            return !t || "object" !== X(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function te(e) {
            return (te = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function ne(e, t) {
            return (ne = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var re, oe = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (e = ee(this, te(t).apply(this, arguments))).state = {
                    loading: !1
                },
                e.handleClick = Z(regeneratorRuntime.mark((function t() {
                    var n, r, o, a;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return n = e.props,
                                r = n.onAuthorize,
                                o = n.userService,
                                a = e.getCtx().nav,
                                t.prev = 2,
                                e.setState({
                                    loading: !0
                                }),
                                g.d.sharedOAuthConsentButtonClick(a.pageId),
                                t.next = 7,
                                r(o.user, o.lastAuthAction);
                            case 7:
                                g.d.sharedOAuthConsentFormSuccess(a.pageId),
                                t.next = 13;
                                break;
                            case 10:
                                t.prev = 10,
                                t.t0 = t.catch(2),
                                g.d.sharedOAuthConsentFormFail(a.pageId, void 0, Object(p.l)(t.t0));
                            case 13:
                                return t.prev = 13,
                                e.setState({
                                    loading: !1
                                }),
                                t.finish(13);
                            case 16:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, null, [[2, 10, 13, 16]])
                }
                ))),
                e
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && ne(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "componentDidMount",
                value: function() {
                    g.d.sharedOAuthConsentStepPageShow(Object(m.f)(this.getCtx()), location.href)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.userService
                      , n = e.onRequestSignin;
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: K.a.title
                    }, "Sign In"), o.a.createElement("div", {
                        className: K.a.email
                    }, "".concat(t.user.email, " "), " ", o.a.createElement("div", {
                        onClick: n,
                        className: K.a.change
                    }, "Change")), o.a.createElement("div", {
                        className: K.a.consent
                    }, this.signinMessage), o.a.createElement(T.b, {
                        loading: this.state.loading,
                        onClick: this.handleClick,
                        qa: "btnOAuthConsent",
                        colorScheme: "green",
                        size: "large",
                        shape: "round",
                        className: K.a.authorize
                    }, "Continue to Grammarly"))
                }
            }, {
                key: "appName",
                get: function() {
                    return Object(z.d)(this.props.clientId, this.props.browserService.isWindows)
                }
            }, {
                key: "signinMessage",
                get: function() {
                    return this.appName === z.a.Grammarly ? "You’re about to sign in to your Grammarly account." : "You are about to sign in to ".concat(this.appName, " using your Grammarly account.")
                }
            }]) && $(n.prototype, r),
            a && $(n, a),
            t
        }(i.a), ae = Object(c.a)("userService", "browserService")(oe);
        !function(e) {
            e[e.SecureLogin = 0] = "SecureLogin",
            e[e.SocialReAuthentication = 1] = "SocialReAuthentication",
            e[e.Standard = 2] = "Standard"
        }(re || (re = {}));
        var ie = n(844)
          , ce = n(836)
          , se = n(835)
          , ue = n(34)
          , le = n(950)
          , pe = n.n(le);
        function fe(e) {
            return (fe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function de(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function he(e, t) {
            return !t || "object" !== fe(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function me(e) {
            return (me = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function be(e, t) {
            return (be = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var ye = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                he(this, me(t).apply(this, arguments))
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && be(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.links
                      , n = e.className;
                    return o.a.createElement("div", {
                        className: Object(h.b)(pe.a.bottomWrapper, n)
                    }, t.map((function(e, t) {
                        return o.a.createElement("div", {
                            key: t
                        }, 0 !== t ? o.a.createElement(o.a.Fragment, null, " · ") : "", o.a.createElement(R.b, {
                            className: pe.a.navigationLink,
                            waypoint: Object(ue.d)(e.routeId || e.targetRoute),
                            onBeforeFollow: e.onClick,
                            qa: e.qa
                        }, e.text))
                    }
                    )))
                }
            }]) && de(n.prototype, r),
            a && de(n, a),
            t
        }(i.b)
          , ge = n(850)
          , ve = n(880)
          , we = n.n(ve);
        function Oe(e) {
            return (Oe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Se(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i)
                  , s = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o)
        }
        function Ee(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function je(e, t) {
            return !t || "object" !== Oe(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function ke(e) {
            return (ke = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Pe(e, t) {
            return (Pe = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var _e = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (e = je(this, ke(t).apply(this, arguments))).emailInput = o.a.createRef(),
                e.passwordInput = o.a.createRef(),
                e.state = {
                    showPassword: e.props.initialShowPassword
                },
                e.sendUserInfo = function() {
                    var t, n = (t = regeneratorRuntime.mark((function t(n) {
                        return regeneratorRuntime.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    e.props.onGetUserInfo(n);
                                case 2:
                                    if (!t.sent) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 5,
                                    new Promise((function(t) {
                                        return e.setState({
                                            showPassword: !0
                                        }, t)
                                    }
                                    ));
                                case 5:
                                    e.passwordInput.current.focus();
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )),
                    function() {
                        var e = this
                          , n = arguments;
                        return new Promise((function(r, o) {
                            var a = t.apply(e, n);
                            function i(e) {
                                Se(a, r, o, i, c, "next", e)
                            }
                            function c(e) {
                                Se(a, r, o, i, c, "throw", e)
                            }
                            i(void 0)
                        }
                        ))
                    }
                    );
                    return function(e) {
                        return n.apply(this, arguments)
                    }
                }(),
                e.sendSignin = function(t) {
                    t.preventDefault();
                    var n = e.emailInput.current
                      , r = e.passwordInput.current;
                    if (e.state.showPassword) {
                        if (n.validate(!0).valid && r.validate(!0).valid) {
                            var o = n.value.trim()
                              , a = r.value;
                            e.props.onSigninFormSubmit({
                                email: o,
                                password: a
                            })
                        }
                    } else if (n.validate(!0).valid) {
                        var i = n.value.trim();
                        e.sendUserInfo(i)
                    }
                }
                ,
                e.handleOnChangeLinkClick = function() {
                    e.setState({
                        showPassword: !1
                    }),
                    e.passwordInput.current.setValue("")
                }
                ,
                e.handleChangeEmail = function(t) {
                    return e.props.handleChangeEmail && e.props.handleChangeEmail(t)
                }
                ,
                e
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Pe(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "componentDidMount",
                value: function() {
                    g.d.sharedSignInFormStepPageShow(Object(m.f)(this.getCtx()), location.href),
                    this.checkPresetEmail()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    this.props.email !== e.email && this.checkPresetEmail()
                }
            }, {
                key: "checkPresetEmail",
                value: function() {
                    var e = this.props
                      , t = e.email;
                    e.disableEmailChange && (this.emailInput.current.setValue(t || ""),
                    this.sendUserInfo(t || ""))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.errorMessage
                      , n = e.subtitle;
                    return o.a.createElement(o.a.Fragment, null, this.title, n && o.a.createElement("div", {
                        className: we.a.subtitle
                    }, n), o.a.createElement("div", {
                        className: we.a.space
                    }), o.a.createElement(N.b, {
                        show: !!t,
                        animation: N.a.scrollIn
                    }, o.a.createElement(ce.n, {
                        qa: "txtLoginError",
                        textAlign: "center",
                        color: "red50"
                    }, t)), this.signinForm, o.a.createElement("div", null, this.links))
                }
            }, {
                key: "signinForm",
                get: function() {
                    var e = this.props.disableEmailChange
                      , t = this.state.showPassword;
                    return o.a.createElement("form", {
                        onSubmit: this.sendSignin,
                        noValidate: !0,
                        className: we.a.signinForm
                    }, o.a.createElement("div", {
                        className: we.a.emailInput
                    }, o.a.createElement(ge.a, {
                        ref: this.emailInput,
                        placeholder: "Email",
                        type: "email",
                        autoComplete: "email",
                        validator: new ie.a(ie.c.email,this.getCtx().api.auth),
                        initialValue: this.props.email,
                        handleChange: this.handleChangeEmail,
                        readOnly: !!e || t,
                        changeLinkEnabled: !e,
                        onChangeLinkClick: this.handleOnChangeLinkClick,
                        qa: "email"
                    })), o.a.createElement(ge.a, {
                        className: t ? we.a.show : we.a.hide,
                        ref: this.passwordInput,
                        placeholder: "Password",
                        type: "password",
                        validator: ie.g,
                        qa: "password",
                        readOnly: !1
                    }), this.props.captchaBrandingNotice, o.a.createElement(se.d, {
                        multiplier: 2
                    }), o.a.createElement(T.b, {
                        submit: !0,
                        loading: this.props.loading,
                        qa: "btnLogin",
                        colorScheme: "green",
                        size: "large",
                        shape: "rect",
                        className: we.a.button
                    }, t ? this.props.buttonCapture ? this.props.buttonCapture : "Sign in" : "Continue"))
                }
            }, {
                key: "links",
                get: function() {
                    var e = this.props
                      , t = e.requestForgotPassword
                      , n = e.hideSignupLink
                      , r = e.signupRoute
                      , a = e.requestSignupStep
                      , i = [{
                        text: "Can’t log in?",
                        onClick: t,
                        qa: "linkForgotPassword"
                    }];
                    return n || i.push({
                        text: "Don’t have an account?",
                        targetRoute: a ? void 0 : r || "signup",
                        onClick: a,
                        qa: "linkDontHaveAcc"
                    }),
                    o.a.createElement(ye, {
                        links: i
                    })
                }
            }, {
                key: "title",
                get: function() {
                    var e = this.props.title;
                    return o.a.createElement("div", {
                        className: we.a.title
                    }, void 0 !== e ? e : "Member Login")
                }
            }]) && Ee(n.prototype, r),
            a && Ee(n, a),
            t
        }(i.a)
          , Ce = Object(c.a)("userService")(Object(c.c)(_e))
          , xe = n(123)
          , Ne = n(875);
        function Ie(e) {
            return (Ie = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ae(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function Re(e, t) {
            return !t || "object" !== Ie(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Me(e) {
            return (Me = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Te(e, t) {
            return (Te = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var Fe = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                Re(this, Me(t).apply(this, arguments))
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Te(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "componentDidMount",
                value: function() {
                    g.d.sharedSignInFormStepPageShow(Object(m.f)(this.getCtx()), location.href)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.errorMessage
                      , n = e.subtitle;
                    return o.a.createElement(o.a.Fragment, null, this.title, n && o.a.createElement("div", {
                        className: we.a.subtitle
                    }, n), o.a.createElement("div", {
                        className: we.a.space
                    }), this.socialButtons, o.a.createElement(N.b, {
                        show: !!t,
                        animation: N.a.scrollIn
                    }, o.a.createElement(ce.n, {
                        qa: "txtLoginError",
                        textAlign: "center",
                        color: "red50"
                    }, t)), o.a.createElement("div", null, this.links))
                }
            }, {
                key: "socialButtons",
                get: function() {
                    var e = this;
                    return o.a.createElement(Ne.a, {
                        colorScheme: "gray",
                        isPopup: !!this.props.socialPopup,
                        handleAuthError: this.props.handleAuthError,
                        handleAccept: this.props.handleAccept,
                        handleReject: function(t, n) {
                            return e.props.handleReject(t, n.email)
                        },
                        disableSocialService: this.disabledSocialProviders,
                        hideDelimiter: !0
                    })
                }
            }, {
                key: "disabledSocialProviders",
                get: function() {
                    var e = this.props.userService.user;
                    return l.c.filter((function(t) {
                        return t !== xe.b[e.loginType]
                    }
                    ))
                }
            }, {
                key: "links",
                get: function() {
                    var e = [{
                        text: "Can’t log in?",
                        onClick: this.props.requestForgotPassword,
                        qa: "linkForgotPassword"
                    }];
                    return o.a.createElement(ye, {
                        links: e
                    })
                }
            }, {
                key: "title",
                get: function() {
                    var e = this.props.title;
                    return o.a.createElement("div", {
                        className: we.a.title
                    }, void 0 !== e ? e : "Member Login")
                }
            }]) && Ae(n.prototype, r),
            a && Ae(n, a),
            t
        }(i.a)
          , Le = Object(c.a)("userService", "userService")(Object(c.c)(Fe));
        function Be(e) {
            return (Be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function De(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i)
                  , s = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o)
        }
        function qe(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function Ge(e, t) {
            return !t || "object" !== Be(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Ve(e) {
            return (Ve = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Ue(e, t) {
            return (Ue = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var We = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (e = Ge(this, Ve(t).apply(this, arguments))).emailInput = o.a.createRef(),
                e.passwordInput = o.a.createRef(),
                e.state = {
                    showPassword: e.props.initialShowPassword
                },
                e.setEmailValue = function(t) {
                    var n;
                    null === (n = e.emailInput.current) || void 0 === n || n.setValue(t)
                }
                ,
                e.sendUserInfo = function() {
                    var t, n = (t = regeneratorRuntime.mark((function t(n) {
                        return regeneratorRuntime.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    e.props.onGetUserInfo(n);
                                case 2:
                                    if (!t.sent) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 5,
                                    new Promise((function(t) {
                                        return e.setState({
                                            showPassword: !0
                                        }, t)
                                    }
                                    ));
                                case 5:
                                    e.passwordInput.current.focus();
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )),
                    function() {
                        var e = this
                          , n = arguments;
                        return new Promise((function(r, o) {
                            var a = t.apply(e, n);
                            function i(e) {
                                De(a, r, o, i, c, "next", e)
                            }
                            function c(e) {
                                De(a, r, o, i, c, "throw", e)
                            }
                            i(void 0)
                        }
                        ))
                    }
                    );
                    return function(e) {
                        return n.apply(this, arguments)
                    }
                }(),
                e.sendSignin = function(t) {
                    t.preventDefault();
                    var n = e.emailInput.current
                      , r = e.passwordInput.current;
                    if (e.state.showPassword) {
                        if (n.validate(!0).valid && r.validate(!0).valid) {
                            var o = n.value.trim()
                              , a = r.value;
                            e.props.onSigninFormSubmit({
                                email: o,
                                password: a
                            })
                        }
                    } else if (n.validate(!0).valid) {
                        var i = n.value.trim();
                        e.sendUserInfo(i)
                    }
                }
                ,
                e.handleOnChangeLinkClick = function() {
                    e.setState({
                        showPassword: !1
                    }),
                    e.passwordInput.current.setValue("")
                }
                ,
                e.handleChangeEmail = function(t) {
                    return e.props.handleChangeEmail && e.props.handleChangeEmail(t)
                }
                ,
                e
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Ue(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "componentDidMount",
                value: function() {
                    g.d.sharedSignInFormStepPageShow(Object(m.f)(this.getCtx()), location.href),
                    this.checkPresetEmail()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    this.props.email !== e.email && this.checkPresetEmail()
                }
            }, {
                key: "checkPresetEmail",
                value: function() {
                    var e = this.props
                      , t = e.email
                      , n = void 0 === t ? "" : t
                      , r = e.disableEmailChange
                      , o = e.allowEmailPreset;
                    r ? (this.setEmailValue(n),
                    this.sendUserInfo(n)) : o && this.setEmailValue(n)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.errorMessage
                      , n = e.subtitle;
                    return o.a.createElement(o.a.Fragment, null, this.title, n && o.a.createElement("div", {
                        className: we.a.subtitle
                    }, n), o.a.createElement("div", {
                        className: we.a.space
                    }), this.socialButtons, o.a.createElement(N.b, {
                        show: !!t,
                        animation: N.a.scrollIn
                    }, o.a.createElement(ce.n, {
                        qa: "txtLoginError",
                        textAlign: "center",
                        color: "red50"
                    }, t)), this.signinForm, o.a.createElement("div", null, this.links))
                }
            }, {
                key: "socialButtons",
                get: function() {
                    var e = this;
                    return o.a.createElement(Ne.a, {
                        colorScheme: "white",
                        isPopup: !!this.props.socialPopup,
                        handleAuthError: this.props.handleAuthError,
                        handleAccept: this.props.handleAccept,
                        handleReject: function(t, n) {
                            return e.props.handleReject(t, n.email)
                        },
                        disableSocialService: this.props.disabledSocialProviders
                    })
                }
            }, {
                key: "signinForm",
                get: function() {
                    var e = this.props.disableEmailChange
                      , t = this.state.showPassword;
                    return o.a.createElement("form", {
                        onSubmit: this.sendSignin,
                        noValidate: !0,
                        className: we.a.signinForm
                    }, o.a.createElement("div", {
                        className: we.a.emailInput
                    }, o.a.createElement(ge.a, {
                        ref: this.emailInput,
                        placeholder: "Email",
                        autoComplete: "email",
                        type: "email",
                        validator: new ie.a(ie.c.email,this.getCtx().api.auth),
                        initialValue: this.props.email,
                        handleChange: this.handleChangeEmail,
                        readOnly: !!e || t,
                        changeLinkEnabled: !e,
                        onChangeLinkClick: this.handleOnChangeLinkClick,
                        qa: "email"
                    })), o.a.createElement(ge.a, {
                        className: t ? we.a.show : we.a.hide,
                        ref: this.passwordInput,
                        placeholder: "Password",
                        type: "password",
                        validator: ie.g,
                        qa: "password",
                        readOnly: !1
                    }), this.props.captchaBrandingNotice, o.a.createElement(se.d, {
                        multiplier: 2
                    }), o.a.createElement(T.b, {
                        submit: !0,
                        loading: this.props.loading,
                        qa: "btnLogin",
                        colorScheme: "green",
                        size: "large",
                        shape: "rect",
                        className: we.a.button
                    }, t ? this.props.buttonCapture ? this.props.buttonCapture : "Sign in" : "Continue"))
                }
            }, {
                key: "links",
                get: function() {
                    var e = this.props
                      , t = e.requestForgotPassword
                      , n = e.hideSignupLink
                      , r = e.signupRoute
                      , a = e.requestSignupStep
                      , i = [{
                        text: "Can’t log in?",
                        onClick: t,
                        qa: "linkForgotPassword"
                    }];
                    return n || i.push({
                        text: "Don’t have an account?",
                        targetRoute: a ? void 0 : r || "signup",
                        onClick: a,
                        qa: "linkDontHaveAcc"
                    }),
                    o.a.createElement(ye, {
                        links: i
                    })
                }
            }, {
                key: "title",
                get: function() {
                    var e = this.props.title;
                    return o.a.createElement("div", {
                        className: we.a.title
                    }, void 0 !== e ? e : "Member Login")
                }
            }]) && qe(n.prototype, r),
            a && qe(n, a),
            t
        }(i.a)
          , Ye = Object(c.a)("userService")(Object(c.c)(We));
        function He() {
            return (He = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function ze(e, t) {
            if (null == e)
                return {};
            var n, r, o = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        var Je = function(e) {
            var t = e.type
              , n = e.disabledSocialProviders
              , r = ze(e, ["type", "disabledSocialProviders"]);
            return t === re.SecureLogin ? o.a.createElement(Ce, r) : t === re.SocialReAuthentication ? o.a.createElement(Le, r) : o.a.createElement(Ye, He({
                disabledSocialProviders: n || []
            }, r))
        }
          , Ke = n(882)
          , Xe = n(951)
          , Qe = n.n(Xe);
        function Ze(e) {
            return (Ze = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function $e(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++)
                        n[t] = e[t];
                    return n
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
                    return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        function et(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function tt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function nt(e, t) {
            return !t || "object" !== Ze(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function rt(e) {
            return (rt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function ot(e, t) {
            return (ot = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var at = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (e = nt(this, rt(t).apply(this, arguments))).nameInput = o.a.createRef(),
                e.emailInput = o.a.createRef(),
                e.passwordInput = o.a.createRef(),
                e.state = {
                    loading: !1,
                    marketingEmailsEnabled: !1,
                    errorMessage: ""
                },
                e.sendSignup = function(t) {
                    t.preventDefault();
                    var n = e.nameInput.current
                      , r = e.emailInput.current
                      , o = e.passwordInput.current;
                    if (n.validate(!0).valid && r.validate(!0).valid && o.validate(!0).valid) {
                        e.setState({
                            loading: !0,
                            errorMessage: ""
                        }),
                        Object(v.f)(v.b.signUpAttempt),
                        Object(y.c)("performance", "INFO", "Metrics", et({}, y.a.signupAttempt, 1));
                        var a = {
                            email_signup: {
                                name: n.value,
                                email: r.value.trim(),
                                password: o.value
                            }
                        };
                        e.isGDPR && Object.assign(a, {
                            custom_fields: {
                                disableMarketingEmails: !e.state.marketingEmailsEnabled
                            }
                        }),
                        e.props.userService.signup(a).then((function() {
                            return e.handleAccept(e.props.userService.user, e.props.userService.lastAuthAction)
                        }
                        )).catch((function(t) {
                            return e.handleReject(t, a.email_signup.email)
                        }
                        ))
                    }
                }
                ,
                e.handleAccept = function(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (!r.isSocial) {
                        var o = e.isGDPR && !e.state.marketingEmailsEnabled;
                        Object(v.f)(v.b.signUpSuccess),
                        Object(y.c)("performance", "INFO", "Metrics", et({}, y.a.signupSuccess, 1)),
                        g.d.sharedSignupFormSuccess(o, e.getCtx().nav.pageId)
                    }
                    e.props.partnerStackTransactionService.createCustomer((function() {
                        e.props.handleAccept && e.props.handleAccept(t, n)
                    }
                    ))
                }
                ,
                e.handleReject = function(t, n) {
                    var r, o = Object(p.g)(t) || "";
                    e.setState({
                        loading: !1
                    });
                    var a = e.getCtx();
                    g.d.sharedSignupFormFail(Object(m.d)(a), void 0, o),
                    Object(v.f)(v.b.signUpFailure),
                    Object(y.c)("performance", "INFO", "Metrics", (et(r = {}, y.a.signupFail, 1),
                    et(r, "message", o),
                    r));
                    var i = Object(p.g)(t) || ""
                      , c = Object(f.h)(i)
                      , s = Object(p.c)(t);
                    return c && s ? window.location.href = s : Object(f.a)(o) ? e.emailInput.current.setValidation(!1, Object(ie.j)(n, void 0, e.props.requestSignin)) : (e.setState({
                        errorMessage: Object(f.c)(o)
                    }),
                    void (e.props.handleReject && e.props.handleReject(t, n)))
                }
                ,
                e
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && ot(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "componentDidMount",
                value: function() {
                    g.d.sharedAccountCreationStepPageShow(Object(m.f)(this.getCtx()), location.href)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    this.props.errorMessage !== e.errorMessage && this.setState({
                        errorMessage: this.props.errorMessage
                    })
                }
            }, {
                key: "toggleCheckbox",
                value: function() {
                    this.setState((function(e) {
                        return {
                            marketingEmailsEnabled: !e.marketingEmailsEnabled
                        }
                    }
                    ))
                }
            }, {
                key: "render",
                value: function() {
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: Qe.a.signupTitle
                    }, "Create Your Account"), this.socialButtons, this.state.errorMessage && o.a.createElement("div", {
                        className: Qe.a.errorMessage,
                        "data-qa": "txtSignupError"
                    }, this.state.errorMessage), this.accountCreation, o.a.createElement(se.d, {
                        multiplier: 2
                    }), o.a.createElement(I.e, {
                        isGdpr: this.isGDPR
                    }), o.a.createElement(ye, {
                        className: Qe.a.bottomWrapper,
                        links: [{
                            text: "Already have an account?",
                            qa: "linkSignin",
                            onClick: this.props.requestSignin
                        }]
                    }))
                }
            }, {
                key: "isGDPR",
                get: function() {
                    return this.props.experimentsService.isGDPR
                }
            }, {
                key: "socialButtons",
                get: function() {
                    var e = this;
                    return o.a.createElement(Ne.a, {
                        isSignup: !0,
                        isPopup: !!this.props.socialPopup,
                        handleAuthError: this.props.handleAuthError,
                        handleAccept: function(t, n) {
                            return e.handleAccept(t, n, {
                                isSocial: !0
                            })
                        },
                        handleReject: function(t, n) {
                            return e.handleReject(t, n.email || "")
                        },
                        enableMarketingEmails: this.isGDPR ? this.state.marketingEmailsEnabled : void 0,
                        disableSocialService: [].concat($e(this.props.disabledSocialProviders), [l.b.apple])
                    })
                }
            }, {
                key: "accountCreation",
                get: function() {
                    var e = this;
                    return o.a.createElement("form", {
                        onSubmit: this.sendSignup,
                        noValidate: !0,
                        className: Qe.a.signupForm
                    }, o.a.createElement(ge.a, {
                        ref: this.nameInput,
                        placeholder: "Name",
                        validator: new ie.a(ie.c.name,this.getCtx().api.auth),
                        readOnly: !1,
                        qa: "name"
                    }), o.a.createElement(ge.a, {
                        ref: this.emailInput,
                        placeholder: "Email",
                        type: "email",
                        autoComplete: "email",
                        validator: new ie.a(ie.c.email,this.getCtx().api.auth),
                        initialValue: this.props.email,
                        handleChange: function(t) {
                            return e.props.handleChangeEmail && e.props.handleChangeEmail(t)
                        },
                        readOnly: !1,
                        qa: "email"
                    }), o.a.createElement(ge.a, {
                        ref: this.passwordInput,
                        placeholder: "Password",
                        type: "password",
                        validator: ie.g,
                        qa: "password",
                        readOnly: !1
                    }), this.isGDPR && o.a.createElement(Ke.a, {
                        label: "Send me product updates, premium offers, and weekly progress reports.",
                        toggleCheckbox: function() {
                            return e.toggleCheckbox()
                        },
                        value: this.state.marketingEmailsEnabled,
                        className: Qe.a.checkbox,
                        colorScheme: "green",
                        qa: "ckbxGdprEmails"
                    }), this.props.captchaBrandingNotice, o.a.createElement(se.d, {
                        multiplier: 2
                    }), o.a.createElement(T.b, {
                        submit: !0,
                        loading: this.state.loading,
                        qa: "btnSignUp",
                        colorScheme: "green",
                        size: "large",
                        shape: "rect",
                        className: Qe.a.button
                    }, "Sign up"))
                }
            }]) && tt(n.prototype, r),
            a && tt(n, a),
            t
        }(i.a)
          , it = Object(c.a)("userService", "experimentsService", "partnerStackTransactionService")(Object(c.c)(at))
          , ct = n(952)
          , st = n.n(ct);
        function ut(e) {
            return (ut = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function lt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function pt(e, t) {
            return !t || "object" !== ut(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function ft(e) {
            return (ft = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function dt(e, t) {
            return (dt = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var ht = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                pt(this, ft(t).apply(this, arguments))
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && dt(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "componentDidMount",
                value: function() {
                    g.d.sharedForgotEmailStepPageShow(Object(m.f)(this.getCtx()), location.href)
                }
            }, {
                key: "render",
                value: function() {
                    return o.a.createElement("div", null, o.a.createElement(R.b, {
                        className: st.a.backLink,
                        onBeforeFollow: this.props.requestSignin,
                        qa: "linkBackToLogin"
                    }, "< Back to login"), o.a.createElement("div", {
                        className: st.a.subTitle
                    }, "Retrieving the email you used to sign up for Grammarly"), o.a.createElement("div", {
                        className: st.a.text
                    }, "Search every email account you use for the word “Grammarly” to find any emails we’ve sent you.", o.a.createElement("b", null, "You can also try this:"), o.a.createElement("ul", null, o.a.createElement("li", null, "Try logging in with any and all email addresses / passwords you may have used to create an account, or that you regularly use elsewhere."), o.a.createElement("li", null, "Enter all email addresses you use into our password", " ", o.a.createElement(R.b, {
                        className: st.a.link,
                        onBeforeFollow: this.props.requestForgotPassword,
                        qa: "linkForgotPassword"
                    }, "reset form"), " ", "(you must be logged out). If an account exists, you’ll receive an email with further details.")), "If you still can’t locate your Grammarly log-in details, please", " ", o.a.createElement(R.b, {
                        className: st.a.link,
                        target: "_blank",
                        href: Object(O.a)().support.urls.newRequest
                    }, "contact support"), " ", "and provide the following information: last four digits of the credit card number you used for Grammarly, card network type (e.g., VISA), the charge date, the charge amount, your PayPal email address (if you paid with PayPal)."))
                }
            }]) && lt(n.prototype, r),
            a && lt(n, a),
            t
        }(i.b)
          , mt = n(953)
          , bt = n.n(mt)
          , yt = n(954)
          , gt = n.n(yt)
          , vt = n(955)
          , wt = n.n(vt);
        function Ot(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i)
                  , s = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o)
        }
        function St(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function Et(e, t) {
            return !t || "object" !== Pt(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function jt(e) {
            return (jt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function kt(e, t) {
            return (kt = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Pt(e) {
            return (Pt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var _t = function(e, t, n, r) {
            var o, a = arguments.length, i = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Pt(Reflect)) && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, t, n, r);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (o = e[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, n, i) : o(t, n)) || i);
            return a > 3 && i && Object.defineProperty(t, n, i),
            i
        }
          , Ct = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (e = Et(this, jt(t).apply(this, arguments))).emailInput = o.a.createRef(),
                e.passwordInput = o.a.createRef(),
                e.state = {
                    user: null
                },
                e.sendPasswordData = function() {
                    var t, n = (t = regeneratorRuntime.mark((function t(n) {
                        var r;
                        return regeneratorRuntime.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    n.preventDefault(),
                                    r = e.passwordInput.current.value,
                                    e.props.onSigninFormSubmit({
                                        email: e.state.user.email,
                                        password: r
                                    });
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )),
                    function() {
                        var e = this
                          , n = arguments;
                        return new Promise((function(r, o) {
                            var a = t.apply(e, n);
                            function i(e) {
                                Ot(a, r, o, i, c, "next", e)
                            }
                            function c(e) {
                                Ot(a, r, o, i, c, "throw", e)
                            }
                            i(void 0)
                        }
                        ))
                    }
                    );
                    return function(e) {
                        return n.apply(this, arguments)
                    }
                }(),
                e
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && kt(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props.socialUserService.user || null;
                    this.setState({
                        user: e
                    }),
                    e && e.email && this.props.handleSetEmail(e.email),
                    g.d.sharedSocialStepPageShow(Object(m.f)(this.getCtx()), location.href)
                }
            }, {
                key: "render",
                value: function() {
                    return o.a.createElement(o.a.Fragment, null, this.socialPasswordForm)
                }
            }, {
                key: "socialPasswordForm",
                get: function() {
                    var e = this.props.errorMessage
                      , t = this.state.user;
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: wt.a.title
                    }, "Member Login"), o.a.createElement("div", {
                        className: wt.a.text
                    }, "Please provide the password you used to create your Grammarly account."), o.a.createElement("div", {
                        className: wt.a.userInfo
                    }, t && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: wt.a.imgWrapper
                    }, o.a.createElement("img", {
                        src: "facebook" === t.socialNetworkName ? bt.a : gt.a,
                        className: wt.a.serviceIcon
                    }), o.a.createElement("img", {
                        src: t.avatar,
                        className: wt.a.img
                    })), o.a.createElement("div", {
                        className: wt.a.name
                    }, t.name), o.a.createElement("div", {
                        className: wt.a.email
                    }, t.email))), o.a.createElement("form", {
                        onSubmit: this.sendPasswordData,
                        noValidate: !0
                    }, e && o.a.createElement("div", {
                        className: wt.a.errorMessage
                    }, e), o.a.createElement(ge.a, {
                        ref: this.passwordInput,
                        validator: ie.g,
                        type: "password",
                        placeholder: "Password",
                        qa: "socialPassword",
                        autoFocus: !0
                    }), o.a.createElement(T.b, {
                        submit: !0,
                        loading: this.props.loading,
                        qa: "btnSocialNoPasswordLogin",
                        colorScheme: "green",
                        size: "large",
                        shape: "rect",
                        className: wt.a.button
                    }, "Sign in")), o.a.createElement(ye, {
                        links: [{
                            text: "Forgot password?",
                            onClick: this.props.requestForgotPassword
                        }]
                    }))
                }
            }]) && St(n.prototype, r),
            a && St(n, a),
            t
        }(i.a);
        Ct = _t([c.c], Ct);
        var xt = Object(c.a)("socialUserService")(Ct)
          , Nt = n(99)
          , It = n(956)
          , At = n.n(It);
        function Rt(e) {
            return (Rt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Mt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function Tt(e, t) {
            return !t || "object" !== Rt(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Ft(e) {
            return (Ft = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Lt(e, t) {
            return (Lt = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var Bt = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (e = Tt(this, Ft(t).apply(this, arguments))).emailInput = o.a.createRef(),
                e.state = {
                    loading: !1,
                    isError: !1,
                    errorMessage: ""
                },
                e.sendData = function(t) {
                    t.preventDefault();
                    var n = e.emailInput.current;
                    if (n.validate(!0).valid) {
                        e.setState({
                            loading: !0,
                            isError: !1
                        });
                        var r = n.value;
                        e.getCtx().api.auth.resetPassword(r).catch((function(e) {
                            if (!Object(p.i)(e))
                                throw e
                        }
                        )).then((function() {
                            e.trackAttempted(),
                            g.d.sharedPasswordResetFormSuccess(Object(m.d)(e.getCtx())),
                            e.setState({
                                loading: !1
                            }),
                            e.props.notificationStore.pushSuccessNotification(o.a.createElement("span", null, "If there's a Grammarly account connected to this email address, we'll  email you password reset instructions.", o.a.createElement("br", null), "If you don't receive the email, please try again and  make sure you enter the email address associated with your Grammarly account.")),
                            e.props.requestSignin()
                        }
                        )).catch((function(t) {
                            return e.handleError(t)
                        }
                        ))
                    }
                }
                ,
                e
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Lt(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "componentDidMount",
                value: function() {
                    g.d.sharedForgotPasswordStepPageShow(Object(m.f)(this.getCtx()), location.href)
                }
            }, {
                key: "handleError",
                value: function(e) {
                    this.setState({
                        loading: !1
                    });
                    var t = Object(p.g)(e) || "";
                    g.d.sharedPasswordResetFormFail(Object(m.d)(this.getCtx()), [{
                        fieldName: "email",
                        errorMessage: t
                    }], t),
                    this.setState({
                        isError: !0,
                        errorMessage: "Something went wrong. Please try again."
                    })
                }
            }, {
                key: "trackAttempted",
                value: function() {
                    Nt.a.sendPageview("/NF:Password_Reset_Attempted")
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state
                      , t = e.isError
                      , n = e.errorMessage;
                    return o.a.createElement("div", null, o.a.createElement("div", {
                        className: At.a.title
                    }, "Password Reset"), o.a.createElement("div", {
                        className: At.a.text
                    }, "Enter your email, and we’ll send you instructions on how to reset your password."), t && o.a.createElement("div", {
                        className: At.a.errorMessage
                    }, n), this.forgotPasswordForm, this.links)
                }
            }, {
                key: "forgotPasswordForm",
                get: function() {
                    var e = this;
                    return o.a.createElement("form", {
                        onSubmit: this.sendData,
                        className: At.a.resetform,
                        noValidate: !0
                    }, o.a.createElement(ge.a, {
                        ref: this.emailInput,
                        placeholder: "Email",
                        type: "email",
                        autoComplete: "email",
                        validator: new ie.a(ie.c.email,this.getCtx().api.auth),
                        initialValue: this.props.email,
                        handleChange: function(t) {
                            return e.props.handleChangeEmail && e.props.handleChangeEmail(t)
                        },
                        autoFocus: !0,
                        qa: "resetPasswordEmail"
                    }), o.a.createElement(T.b, {
                        submit: !0,
                        loading: this.state.loading,
                        qa: "btnResetPassword",
                        colorScheme: "green",
                        size: "large",
                        shape: "rect",
                        className: At.a.button
                    }, "Send me reset instructions"))
                }
            }, {
                key: "links",
                get: function() {
                    var e = this.props
                      , t = e.requestSignin
                      , n = [{
                        text: "Forgot email?",
                        onClick: e.requestForgotEmail,
                        qa: "linkForgotEmail"
                    }, {
                        text: "Back to login",
                        onClick: t,
                        qa: "linkBackToLogin"
                    }];
                    return o.a.createElement(ye, {
                        className: At.a.bottomWrapper,
                        links: n
                    })
                }
            }]) && Mt(n.prototype, r),
            a && Mt(n, a),
            t
        }(i.a)
          , Dt = Object(c.a)("notificationStore")(Object(c.c)(Bt));
        function qt(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)))
                    return;
                var n = []
                  , r = !0
                  , o = !1
                  , a = void 0;
                try {
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    o = !0,
                    a = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (o)
                            throw a
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var Gt = Object(O.a)().recaptcha
          , Vt = Gt.url
          , Ut = Gt.urlGlobal
          , Wt = function(e) {
            var t = e.sitekey
              , n = e.onSuccess
              , a = Object(E.d)().isActive(S.c.CaptchaEnterpriseSource.groups.useGlobal) ? Ut : Vt
              , i = qt(Object(r.useState)(!1), 2)
              , c = i[0]
              , s = i[1]
              , u = Object(r.useCallback)((function() {
                var e = window.grecaptcha;
                e.render("g-recaptcha", {
                    sitekey: t,
                    callback: "buttonCaptchaSuccess"
                }),
                e.ready((function() {
                    return s(!0)
                }
                ))
            }
            ), [s, t])
              , l = Object(r.useCallback)((function(e) {
                return n(e)
            }
            ), [n]);
            return Object(r.useLayoutEffect)((function() {
                return window.buttonCaptchaOnLoad = u,
                window.buttonCaptchaSuccess = l,
                function() {
                    delete window.buttonCaptchaOnLoad,
                    delete window.buttonCaptchaSuccess
                }
            }
            )),
            o.a.createElement(o.a.Fragment, null, o.a.createElement(w.a, null, o.a.createElement("script", {
                type: "text/javascript",
                src: "".concat(a, "?onload=buttonCaptchaOnLoad&render=explicit"),
                async: !0,
                defer: !0
            })), o.a.createElement("div", {
                id: "g-recaptcha",
                "data-qa": "g-recaptcha"
            }), !c && o.a.createElement(A.a, null))
        }
          , Yt = n(957)
          , Ht = n.n(Yt);
        function zt(e) {
            return (zt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Jt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function Kt(e, t) {
            return !t || "object" !== zt(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Xt(e) {
            return (Xt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Qt(e, t) {
            return (Qt = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var Zt, $t = Object(O.a)().support.urls.newRequest, en = Object(O.a)().recaptcha.loginFlow.sitekey, tn = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                Kt(this, Xt(t).apply(this, arguments))
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Qt(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "componentDidMount",
                value: function() {
                    g.d.sharedCaptchaStepPageShow(Object(m.f)(this.getCtx()), location.href)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.onSuccess
                      , n = e.captchaBadge;
                    return o.a.createElement("div", null, o.a.createElement("div", {
                        className: Ht.a.title
                    }, "Verify that you’re human"), o.a.createElement("div", {
                        className: Ht.a.captchaWrapper
                    }, o.a.createElement(Wt, {
                        sitekey: en,
                        onSuccess: t
                    })), o.a.createElement("div", {
                        className: Object(h.b)(Ht.a.instructionsText, Ht.a.narrowText)
                    }, "Please click the checkbox above to prove that you’re not a robot."), o.a.createElement("div", {
                        className: Ht.a.supportLinkWrapper
                    }, o.a.createElement(R.b, {
                        href: $t,
                        target: "_blank",
                        className: Ht.a.supportLink
                    }, "Having trouble?")), o.a.createElement(se.d, {
                        multiplier: 2
                    }), n)
                }
            }]) && Jt(n.prototype, r),
            a && Jt(n, a),
            t
        }(i.b), nn = n(894), rn = n(893), on = n(958), an = n.n(on), cn = n(959), sn = n.n(cn), un = n(960), ln = n.n(un), pn = n(961), fn = n.n(pn), dn = n(962), hn = n.n(dn), mn = n(963), bn = n.n(mn), yn = n(964), gn = n.n(yn), vn = n(965), wn = n.n(vn), On = n(966), Sn = n.n(On), En = n(967), jn = n.n(En), kn = n(968), Pn = n.n(kn);
        function _n(e) {
            return (_n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Cn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function xn(e, t) {
            return !t || "object" !== _n(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Nn(e) {
            return (Nn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function In(e, t) {
            return (In = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        !function(e) {
            e.code = "code",
            e.otherMethods = "otherMethods"
        }(Zt || (Zt = {}));
        var An = 3e4
          , Rn = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (e = xn(this, Nn(t).apply(this, arguments))).progress = o.a.createRef(),
                e.validator = new ie.a(ie.c.mfa,e.getCtx().api.auth),
                e.state = {
                    code: "",
                    isValidationError: !1,
                    isSaveBrowser: !0,
                    disableResend: !1,
                    lastDigits: e.props.mfaContext.last ? e.props.mfaContext.last : "",
                    disableSms: e.props.mfaContext.rateLimit,
                    mfaModesEnabled: new Set(e.props.mfaContext.modes),
                    method: e.props.mfaContext.modes[0],
                    step: e.props.mfaContext.rateLimit ? Zt.otherMethods : Zt.code
                },
                e.resendCode = function() {
                    if (!e.state.disableResend) {
                        var t = e.props
                          , n = t.onMfaSubmit
                          , r = t.notificationStore
                          , a = t.email
                          , i = s.b.MfaSettings.Mode.email === e.state.method;
                        n({
                            mode: e.state.method
                        }),
                        r.pushSuccessNotification(o.a.createElement("span", null, "A new ", i ? "email" : "text message", " with a verification code was just sent to", " ", o.a.createElement("span", {
                            className: bn.a.resendableMode
                        }, i ? a : e.phoneNumber, "."))),
                        e.startCountdown()
                    }
                }
                ,
                e.startCountdown = function() {
                    e.setState({
                        disableResend: !0
                    }),
                    e.progress.current && e.progress.current.startAnimation(),
                    e.timeoutId = window.setTimeout((function() {
                        return e.setState({
                            disableResend: !1
                        })
                    }
                    ), An)
                }
                ,
                e.sendData = function(t) {
                    t.preventDefault();
                    var n = e.state
                      , r = n.code
                      , o = n.isSaveBrowser
                      , a = e.props.isSecureLogin;
                    e.validator.validate(r).valid ? e.props.onMfaSubmit({
                        code: r,
                        rememberDevice: o,
                        mode: e.state.method,
                        secureLogin: a
                    }) : e.setState({
                        isValidationError: !0
                    })
                }
                ,
                e.switchModes = function(t) {
                    e.props.resetError(),
                    t === s.b.MfaSettings.Mode.phone && e.props.onMfaSubmit({
                        mode: t
                    })
                }
                ,
                e.onItemClick = function(t) {
                    t.tracking && t.tracking(),
                    t.method ? (e.setState({
                        step: Zt.code,
                        method: t.method
                    }),
                    e.setState({
                        isValidationError: !1
                    }),
                    e.switchModes(t.method)) : t.action && t.action()
                }
                ,
                e
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && In(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "componentDidMount",
                value: function() {
                    g.d.sharedMfaStepPageShow(Object(m.f)(this.getCtx()), location.href),
                    this.startCountdown()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, t) {
                    this.state.step !== t.step && this.startCountdown()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.timeoutId && clearTimeout(this.timeoutId)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state.step;
                    return o.a.createElement("form", {
                        onSubmit: this.sendData,
                        className: bn.a.mfaForm
                    }, o.a.createElement("div", {
                        className: bn.a.title
                    }, this.title), o.a.createElement("div", {
                        className: bn.a.subtitle
                    }, this.subtitleContent), e === Zt.code ? this.codeForm : this.otherMethod)
                }
            }, {
                key: "phoneNumber",
                get: function() {
                    var e = this.state.lastDigits;
                    return "(•••) •••-••".concat(e)
                }
            }, {
                key: "isResendableCode",
                get: function() {
                    return this.state.method === s.b.MfaSettings.Mode.phone || this.state.method === s.b.MfaSettings.Mode.email
                }
            }, {
                key: "regularCode",
                get: function() {
                    var e = this
                      , t = this.props
                      , n = t.errorMessage
                      , r = t.email
                      , a = this.state
                      , i = a.isValidationError
                      , c = a.isSaveBrowser
                      , u = a.method
                      , l = s.b.MfaSettings.Mode.email === u;
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
                        src: l ? jn.a : Sn.a,
                        className: bn.a.mfaIllustration
                    }), o.a.createElement(rn.a, {
                        onChange: function(t) {
                            return e.setState({
                                code: t,
                                isValidationError: !1
                            })
                        }
                    }), (n || i) && o.a.createElement("div", {
                        className: bn.a.errorWrapper
                    }, o.a.createElement("div", {
                        className: bn.a.errorMessage
                    }, "Invalid code. Please try again.")), o.a.createElement("div", {
                        className: bn.a.instructionsText
                    }, this.isResendableCode ? o.a.createElement(o.a.Fragment, null, "Verification code was sent to", " ", o.a.createElement("span", {
                        className: bn.a.resendableMode
                    }, o.a.createElement(ce.o, {
                        color: "green60"
                    }, l ? r : this.phoneNumber), "."), o.a.createElement("br", null), "Enter the code above to continue.") : "Enter verification code from Authenticator App.", o.a.createElement(se.d, {
                        multiplier: 1
                    })), !l && o.a.createElement(Ke.a, {
                        value: c,
                        toggleCheckbox: function() {
                            return e.setState({
                                isSaveBrowser: !c
                            })
                        },
                        label: "Don’t ask again on this device",
                        colorScheme: "white",
                        className: bn.a.checkbox
                    }))
                }
            }, {
                key: "backupCode",
                get: function() {
                    var e = this
                      , t = this.props.errorMessage
                      , n = this.state
                      , r = n.isValidationError
                      , a = n.isSaveBrowser;
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
                        src: Pn.a,
                        className: bn.a.backupIllustration
                    }), o.a.createElement("input", {
                        className: bn.a.input,
                        autoFocus: !0,
                        type: "text",
                        pattern: "[A-Za-z0-9]*",
                        autoComplete: "one-time-code",
                        onChange: function(t) {
                            return e.setState({
                                code: t.target.value
                            })
                        },
                        inputMode: "text",
                        placeholder: "Backup code",
                        "data-qa": "backupCodeInput"
                    }), t && r && o.a.createElement("div", {
                        className: bn.a.errorMessage
                    }, "Invalid code. Please try again."), o.a.createElement("div", {
                        className: bn.a.instructionsText
                    }, "Enter one of the backup codes you previously created."), o.a.createElement(Ke.a, {
                        value: a,
                        toggleCheckbox: function() {
                            return e.setState({
                                isSaveBrowser: !a
                            })
                        },
                        label: "Don’t ask for codes on this browser",
                        colorScheme: "white",
                        className: bn.a.checkbox
                    }))
                }
            }, {
                key: "codeForm",
                get: function() {
                    var e = this
                      , t = this.props.loading
                      , n = this.state
                      , r = n.disableResend
                      , a = n.method
                      , i = s.b.MfaSettings.Mode.email === a;
                    return o.a.createElement(o.a.Fragment, null, a === s.b.MfaSettings.Mode.backup ? this.backupCode : this.regularCode, o.a.createElement(T.b, {
                        submit: !0,
                        loading: t,
                        qa: "btnLogin",
                        colorScheme: "green",
                        size: "large",
                        shape: "rect",
                        className: bn.a.button
                    }, i ? "Next" : "Sign in securely"), o.a.createElement("div", {
                        className: bn.a.links
                    }, this.isResendableCode && o.a.createElement(o.a.Fragment, null, o.a.createElement(nn.a, {
                        radius: 8,
                        interval: An,
                        className: r ? bn.a.progress : bn.a.hide,
                        ref: this.progress
                    }), o.a.createElement(R.b, {
                        className: r ? bn.a.disabledLink : bn.a.link,
                        onBeforeFollow: function() {
                            g.d.sharedResendSMSCodeButtonClick(Object(m.d)(e.getCtx())),
                            e.resendCode()
                        }
                    }, "Resend the code"), o.a.createElement("div", {
                        className: bn.a.tooltip
                    }, "Please wait 30 seconds to resend the code."), o.a.createElement(o.a.Fragment, null, "  ·  ")), i ? o.a.createElement(R.b, {
                        className: bn.a.link,
                        onBeforeFollow: function() {
                            g.d.sharedEmailVerificationContactSupportButtonClick(Object(m.d)(e.getCtx()))
                        },
                        href: Object(O.a)().support.urls.newRequest,
                        target: "_blank"
                    }, "Contact support") : o.a.createElement(R.b, {
                        className: bn.a.link,
                        qa: "tryAnotherWay",
                        onBeforeFollow: function() {
                            g.d.sharedTryAnotherWayMfaButtonClick(Object(m.d)(e.getCtx())),
                            e.setState({
                                step: Zt.otherMethods
                            })
                        }
                    }, "Try another way")))
                }
            }, {
                key: "otherMethod",
                get: function() {
                    var e = this
                      , t = Object(m.d)(this.getCtx())
                      , n = this.state
                      , r = n.mfaModesEnabled
                      , a = n.disableSms;
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: bn.a.tryOtherMethodTitle
                    }, "Try another way to sign in"), [a ? {
                        className: bn.a.disabledMethod,
                        icon: gn.a,
                        name: "Get a verification code at ".concat(this.phoneNumber),
                        text: o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
                            src: sn.a
                        }), "Too many verification codes already sent.")
                    } : r.has(s.b.MfaSettings.Mode.phone) && {
                        icon: an.a,
                        method: s.b.MfaSettings.Mode.phone,
                        name: "Get a verification code at ".concat(this.phoneNumber),
                        text: "Standard messaging rates apply",
                        tracking: function() {
                            return g.d.sharedSmsMethodButtonClick(t)
                        }
                    }, r.has(s.b.MfaSettings.Mode.totp) && {
                        icon: fn.a,
                        method: s.b.MfaSettings.Mode.totp,
                        name: "Verify with an app",
                        qa: "useVerificationCode",
                        text: "Get a verification from an authentication app",
                        tracking: function() {
                            return g.d.sharedTotpMethodButtonClick(t)
                        }
                    }, {
                        icon: wn.a,
                        method: s.b.MfaSettings.Mode.backup,
                        name: "Enter a backup code",
                        qa: "enterBackupCode",
                        text: "Use previously saved backup codes to sign in",
                        tracking: function() {
                            return g.d.sharedBackupCodeMethodButtonClick(t)
                        }
                    }, {
                        icon: hn.a,
                        name: "Contact Support",
                        text: "Please allow several business days for a response.",
                        tracking: function() {
                            return g.d.sharedContactSupportMethodButtonClick(t)
                        },
                        action: this.props.showSupport
                    }].map((function(t, n) {
                        return t ? o.a.createElement("div", {
                            className: Object(h.b)(bn.a.method, t.className),
                            key: n,
                            onClick: function() {
                                e.onItemClick(t)
                            },
                            "data-qa": t.qa
                        }, o.a.createElement("div", {
                            className: bn.a.iconWrapper
                        }, o.a.createElement("img", {
                            src: t.icon
                        })), o.a.createElement("div", {
                            className: bn.a.methodInfo
                        }, o.a.createElement("div", {
                            className: bn.a.methodName
                        }, t.name), o.a.createElement("div", {
                            className: bn.a.methodText
                        }, t.text)), o.a.createElement("img", {
                            src: ln.a
                        })) : null
                    }
                    )))
                }
            }, {
                key: "title",
                get: function() {
                    return s.b.MfaSettings.Mode.email === this.state.method ? "Verify that it's you" : "Two-Step Verification"
                }
            }, {
                key: "subtitleContent",
                get: function() {
                    var e = this.props
                      , t = e.email
                      , n = e.backToSignin
                      , r = e.isSecureLogin;
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
                        className: bn.a.emailLabel
                    }, "You're signing in as"), o.a.createElement("span", {
                        className: bn.a.email
                    }, t), !r && o.a.createElement(R.b, {
                        className: bn.a.changeEmail,
                        onBeforeFollow: n
                    }, "Change"))
                }
            }]) && Cn(n.prototype, r),
            a && Cn(n, a),
            t
        }(i.a)
          , Mn = Object(c.a)("notificationStore")(Object(c.c)(Rn))
          , Tn = n(298)
          , Fn = n(36)
          , Ln = n(897)
          , Bn = n(864)
          , Dn = n(874);
        function qn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Gn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? qn(Object(n), !0).forEach((function(t) {
                    Vn(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qn(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function Vn(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Un(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function Wn(e) {
            return (Wn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var Yn, Hn, zn = function(e, t, n, r) {
            var o, a = arguments.length, i = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Wn(Reflect)) && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, t, n, r);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (o = e[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, n, i) : o(t, n)) || i);
            return a > 3 && i && Object.defineProperty(t, n, i),
            i
        }, Jn = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Wn(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }, Kn = function() {
            function e(t, n, r) {
                var o = this;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.ctx = t,
                this.resetError = n,
                this.stepModel = r,
                this.step = Dn.a.loading,
                this.fromSecureLogin = !1,
                this.initializeFirstStep = function(t, n) {
                    var r = o.ctx.nav.query.step;
                    o.step = e.FirstStep(r, t, n, o.stepOverride)
                }
                ,
                this.goToStep = function(e) {
                    var t = o.ctx.nav.waypoint
                      , n = t.routeId
                      , r = t.query;
                    o.resetError();
                    var a = o.stepModel.navigateTo(o.step, e);
                    o.step = a;
                    var i = {
                        step: a
                    };
                    o.ctx.nav.navigate({
                        routeId: n,
                        query: Gn({}, r, {}, i)
                    })
                }
                ,
                this.goToSignin = function() {
                    return o.goToStep(Dn.a.signinForm)
                }
                ,
                this.goToForgotPassword = function() {
                    return o.goToStep(Dn.a.forgotPassword)
                }
                ,
                this.goToSupport = function() {
                    return o.goToStep(Dn.a.support)
                }
                ,
                this.goToAccountCreation = function() {
                    return o.goToStep(Dn.a.accountCreation)
                }
                ,
                this.goToForgotEmail = function() {
                    return o.goToStep(Dn.a.forgotEmail)
                }
                ,
                this.goToLoading = function() {
                    return o.goToStep(Dn.a.loading)
                }
                ,
                this.goToCaptcha = function() {
                    return o.goToStep(Dn.a.captcha)
                }
                ,
                this.goToMfa = function() {
                    o.step === Dn.a.secureLogin && (o.fromSecureLogin = !0),
                    o.goToStep(Dn.a.mfa)
                }
                ,
                this.goToSocial = function() {
                    return o.goToStep(Dn.a.social)
                }
                ,
                this.goToChangeEmail = function() {
                    return o.goToStep(Dn.a.changeEmail)
                }
                ,
                this.goToVerifyEmailFromChangeEmail = function() {
                    o.resetError();
                    var e = o.stepModel.navigateTo(o.step, Dn.a.emailVerification);
                    o.step = e
                }
                ,
                this.stepOverride = r.overrideFirstStep
            }
            var t, n, r;
            return t = e,
            (n = [{
                key: "isClaimableStep",
                get: function() {
                    return [Dn.a.signinForm, Dn.a.accountCreation].includes(this.step)
                }
            }, {
                key: "isSecureLogin",
                get: function() {
                    return this.step === Dn.a.secureLogin || this.fromSecureLogin && this.step === Dn.a.mfa
                }
            }]) && Un(t.prototype, n),
            r && Un(t, r),
            e
        }();
        Kn.FirstStep = function(e, t, n, r) {
            switch (e) {
            case Dn.a.forgotEmail:
                return Dn.a.forgotEmail;
            case Dn.a.forgotPassword:
                return Dn.a.forgotPassword;
            case Dn.a.emailVerification:
                return Dn.a.emailVerification;
            case Dn.a.accountCreation:
                return n === Bn.b.buildIn ? Dn.a.accountCreation : Dn.a.signinForm;
            default:
                var o = r || Dn.a.signinForm;
                return t ? Dn.a.oAuthConsent : o
            }
        }
        ,
        zn([a.observable, Jn("design:type", "function" == typeof (Yn = void 0 !== Dn.a && Dn.a) ? Yn : Object)], Kn.prototype, "stepOverride", void 0),
        zn([a.observable, Jn("design:type", "function" == typeof (Hn = void 0 !== Dn.a && Dn.a) ? Hn : Object)], Kn.prototype, "step", void 0),
        zn([a.observable, Jn("design:type", Object)], Kn.prototype, "fromSecureLogin", void 0),
        zn([a.action, Jn("design:type", Object)], Kn.prototype, "initializeFirstStep", void 0),
        zn([a.action, Jn("design:type", Object)], Kn.prototype, "goToStep", void 0);
        var Xn = n(891);
        function Qn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Zn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Qn(Object(n), !0).forEach((function(t) {
                    er(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qn(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function $n(e, t) {
            if (null == e)
                return {};
            var n, r, o = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    n = a[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        function er(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function tr(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i)
                  , s = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o)
        }
        function nr(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, o) {
                    var a = e.apply(t, n);
                    function i(e) {
                        tr(a, r, o, i, c, "next", e)
                    }
                    function c(e) {
                        tr(a, r, o, i, c, "throw", e)
                    }
                    i(void 0)
                }
                ))
            }
        }
        function rr(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function or(e) {
            return (or = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var ar = function(e, t, n, r) {
            var o, a = arguments.length, i = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : or(Reflect)) && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, t, n, r);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (o = e[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, n, i) : o(t, n)) || i);
            return a > 3 && i && Object.defineProperty(t, n, i),
            i
        }
          , ir = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : or(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
          , cr = function() {
            function e(t, n, r) {
                var o = this;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.ctx = t,
                this.partnerStackTransactionService = n,
                this.getProps = r,
                this.loading = !1,
                this.errorMsg = null,
                this.email = "",
                this.password = "",
                this.setError = function(e) {
                    if ("boolean" == typeof e)
                        return o.errorMsg = !!e || void 0;
                    o.errorMsg = e
                }
                ,
                this.setEmail = function(e) {
                    var t = Object(Fn.c)("socialEmail") || ""
                      , n = o.signinProps.userService
                      , r = e || (n.user.email && !n.user.anonymous ? n.user.email : t);
                    o.email = r
                }
                ,
                this.setPassword = function(e) {
                    return o.password = e
                }
                ,
                this.resetError = function() {
                    return o.errorMsg = void 0
                }
                ,
                this.setLoading = function(e) {
                    return o.loading = e
                }
                ,
                this.initializeSteps = function() {
                    var e = o.ctx.nav.query.authMethod
                      , t = o.oAuth.isActive && !o.signinProps.userService.user.isAnonymous && !e
                      , n = o.signinProps.signupFlow;
                    o.stepViewModel.initializeFirstStep(t, n)
                }
                ,
                this.onGetUserInfo = function() {
                    var e = nr(regeneratorRuntime.mark((function e(t) {
                        var n, r, a;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return o.setLoading(!0),
                                    o.errorMsg = null,
                                    e.prev = 2,
                                    e.next = 5,
                                    o.signinProps.userService.getAuthInfo(t);
                                case 5:
                                    if (e.t0 = e.sent,
                                    e.t0) {
                                        e.next = 8;
                                        break
                                    }
                                    e.t0 = {};
                                case 8:
                                    n = e.t0,
                                    e.next = 17;
                                    break;
                                case 11:
                                    return e.prev = 11,
                                    e.t1 = e.catch(2),
                                    r = Object(p.g)(e.t1) || "",
                                    o.errorMsg = Object(f.b)(r),
                                    o.setLoading(!1),
                                    e.abrupt("return", !1);
                                case 17:
                                    e.t2 = n.loginType,
                                    e.next = e.t2 === Tn.a.sso ? 20 : e.t2 === Tn.a.apple ? 26 : e.t2 === Tn.a.facebook ? 27 : e.t2 === Tn.a.google ? 28 : 29;
                                    break;
                                case 20:
                                    if ("false" !== o.ctx.nav.query.ssoRedirect) {
                                        e.next = 23;
                                        break
                                    }
                                    return o.setLoading(!1),
                                    e.abrupt("return", !0);
                                case 23:
                                    return a = n,
                                    window.location.href = Object(b.b)(a.ssoLoginURL, {
                                        originalLocation: btoa(Object(b.b)(document.URL, {
                                            is_sso: !0
                                        }))
                                    }),
                                    e.abrupt("return", !1);
                                case 26:
                                    return e.abrupt("return", o.handleSocialUserInfo(l.b.apple, p.a.useApple));
                                case 27:
                                    return e.abrupt("return", o.handleSocialUserInfo(l.b.facebook, p.a.useFacebook));
                                case 28:
                                    return e.abrupt("return", o.handleSocialUserInfo(l.b.google, p.a.useGoogle));
                                case 29:
                                    return o.setLoading(!1),
                                    e.abrupt("return", !0);
                                case 31:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[2, 11]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.handleLoginAccept = function(e, t, n, r, a) {
                    var i = Object(m.d)(o.ctx)
                      , c = e.email;
                    o.setLoading(!1),
                    "SIGNUP" === t ? (Object(Ln.a)(),
                    Object(v.f)(v.b.signUpSuccess),
                    Object(y.c)("performance", "INFO", "Metrics", er({}, y.a.signupSuccess, 1))) : (Object(Ln.b)(c),
                    g.d.sharedSigninFormSuccess(i, a, n || o.signinProps.placement, r),
                    Object(v.f)(v.b.signInSuccess),
                    Object(y.c)("performance", "INFO", "Metrics", er({}, y.a.signinSuccess, 1))),
                    o.partnerStackTransactionService.createCustomer((function() {
                        o.handleAccept(e, t)
                    }
                    ))
                }
                ,
                this.handleAccept = function(e, t) {
                    return o.oAuth.isActive ? o.handleOAuthAccept(e, t) : e.isClaimed && o.stepViewModel.isClaimableStep ? o.ctx.nav.navigatePreserveQuery({
                        routeId: "joinTeam"
                    }) : void (o.signinProps.handleAccept && o.signinProps.handleAccept(e, t || "SIGNIN"))
                }
                ,
                this.handleOAuthAccept = function() {
                    var e = nr(regeneratorRuntime.mark((function e(t, n) {
                        var r, a, i, c, s, u;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (r = o.oAuth,
                                    a = r.isActive,
                                    i = $n(r, ["isActive"]),
                                    !a) {
                                        e.next = 11;
                                        break
                                    }
                                    if (c = i.clientId,
                                    s = i.codeChallenge,
                                    !i.isAutoRedirectDisabled || !o.signinProps.handleAccept) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 6,
                                    Object(z.i)(o.ctx.api, c, s);
                                case 6:
                                    u = e.sent,
                                    o.signinProps.handleAccept(t, n || "SIGNIN", u),
                                    e.next = 11;
                                    break;
                                case 10:
                                    return e.abrupt("return", Object(z.h)(o.ctx.api, c, s, o.usePostMessage));
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.handleSuccessfulStep = function() {
                    var e = o.signinProps.userService
                      , t = e.user
                      , n = e.lastAuthAction;
                    return o.handleAccept(t, n)
                }
                ,
                this.stepViewModel = new Kn(t,this.resetError,this.signinProps.stepModel || new Dn.b),
                this.setEmail(this.signinProps.prepopulatedEmail),
                this.emailVerificationViewModel = new Xn.c(this.handleSuccessfulStep,this.ctx,this.setPassword,this.stepViewModel.goToChangeEmail,(function() {
                    return o.email
                }
                ),(function() {
                    return o.password
                }
                ),this.stepViewModel.goToVerifyEmailFromChangeEmail,this.stepViewModel.goToSignin)
            }
            var t, n, r;
            return t = e,
            (n = [{
                key: "handleSocialUserInfo",
                value: function(e, t) {
                    return this.disabledSocialProviders.includes(e) ? this.oAuth.isActive ? (this.stepViewModel.goToLoading(),
                    Object(z.j)(this.oAuth.codeChallenge, e),
                    !1) : (this.setLoading(!1),
                    !0) : (this.errorMsg = Object(f.b)(t),
                    this.setLoading(!1),
                    !1)
                }
            }, {
                key: "signinProps",
                get: function() {
                    return this.getProps()
                }
            }, {
                key: "step",
                get: function() {
                    return this.stepViewModel.step
                }
            }, {
                key: "oAuth",
                get: function() {
                    var e = this.signinProps
                      , t = e.isOAuthAllowed
                      , n = e.isOAuthAutoRedirectDisabled;
                    return t && Object(z.f)(this.ctx) ? Zn({
                        isActive: !0,
                        isAutoRedirectDisabled: n
                    }, Object(z.c)(this.ctx)) : {
                        isActive: !1
                    }
                }
            }, {
                key: "disabledSocialProviders",
                get: function() {
                    return this.signinProps.disabledSocialProviders || []
                }
            }, {
                key: "usePostMessage",
                get: function() {
                    return "true" === this.ctx.nav.query.use_postmessage
                }
            }, {
                key: "isSecureLogin",
                get: function() {
                    return !!this.ctx.nav.query.secureLogin || this.stepViewModel.isSecureLogin
                }
            }, {
                key: "isError",
                get: function() {
                    return !!this.errorMsg
                }
            }, {
                key: "signinFormProps",
                get: function() {
                    var e = this.signinProps
                      , t = e.title
                      , n = e.subtitle
                      , r = e.prepopulatedEmail
                      , o = e.signupFlow
                      , a = e.buttonCapture
                      , i = e.userService
                      , c = {
                        title: t,
                        subtitle: n,
                        disableEmailChange: !!r,
                        allowEmailPreset: !!this.email,
                        disabledSocialProviders: this.disabledSocialProviders,
                        hideSignupLink: o === Bn.b.disabled,
                        buttonCapture: a,
                        email: this.email,
                        handleChangeEmail: this.setEmail,
                        onGetUserInfo: this.onGetUserInfo,
                        isSecureLogin: this.isSecureLogin,
                        requestForgotPassword: this.stepViewModel.goToForgotPassword,
                        errorMessage: this.errorMsg,
                        handleAccept: this.handleLoginAccept,
                        type: re.Standard
                    };
                    return this.oAuth.isActive ? Zn({}, c, {
                        title: "Sign In",
                        subtitle: "to continue to Grammarly"
                    }) : this.isSecureLogin ? Zn({}, c, {
                        title: "Verify that it's you",
                        subtitle: "to continue to Grammarly account settings",
                        disableEmailChange: !0,
                        hideSignupLink: !0,
                        buttonCapture: "Next",
                        disabledSocialProviders: void 0,
                        type: i.user.isSocial ? re.SocialReAuthentication : re.SecureLogin
                    }) : c
                }
            }]) && rr(t.prototype, n),
            r && rr(t, r),
            e
        }();
        ar([a.observable, ir("design:type", Object)], cr.prototype, "loading", void 0),
        ar([a.observable, ir("design:type", Object)], cr.prototype, "errorMsg", void 0),
        ar([a.observable, ir("design:type", Object)], cr.prototype, "email", void 0),
        ar([a.observable, ir("design:type", Object)], cr.prototype, "password", void 0),
        ar([a.computed, ir("design:type", Object), ir("design:paramtypes", [])], cr.prototype, "step", null),
        ar([a.action, ir("design:type", Object)], cr.prototype, "setError", void 0),
        ar([a.action, ir("design:type", Object)], cr.prototype, "setEmail", void 0),
        ar([a.action, ir("design:type", Object)], cr.prototype, "setPassword", void 0),
        ar([a.action, ir("design:type", Object)], cr.prototype, "resetError", void 0),
        ar([a.action, ir("design:type", Object)], cr.prototype, "setLoading", void 0),
        ar([a.computed, ir("design:type", Object), ir("design:paramtypes", [])], cr.prototype, "signinFormProps", null);
        var sr = n(969)
          , ur = n(149);
        function lr(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i)
                  , s = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o)
        }
        var pr = function() {
            var e, t = (e = regeneratorRuntime.mark((function e(t) {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = Date.now(),
                            e.t0 = "1." + n.toString(32) + ".",
                            e.next = 5,
                            Object(ur.a)(n.toString() + t);
                        case 5:
                            return e.t1 = e.sent,
                            e.abrupt("return", e.t0 + e.t1);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )),
            function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, o) {
                    var a = e.apply(t, n);
                    function i(e) {
                        lr(a, r, o, i, c, "next", e)
                    }
                    function c(e) {
                        lr(a, r, o, i, c, "throw", e)
                    }
                    i(void 0)
                }
                ))
            }
            );
            return function(e) {
                return t.apply(this, arguments)
            }
        }()
          , fr = n(972)
          , dr = n.n(fr)
          , hr = n(973)
          , mr = n.n(hr);
        function br(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)))
                    return;
                var n = []
                  , r = !0
                  , o = !1
                  , a = void 0;
                try {
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    o = !0,
                    a = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (o)
                            throw a
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        function yr() {
            return (yr = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function gr(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function vr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? gr(Object(n), !0).forEach((function(t) {
                    wr(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gr(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function wr(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Or(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i)
                  , s = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o)
        }
        function Sr(e) {
            return function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, o) {
                    var a = e.apply(t, n);
                    function i(e) {
                        Or(a, r, o, i, c, "next", e)
                    }
                    function c(e) {
                        Or(a, r, o, i, c, "throw", e)
                    }
                    i(void 0)
                }
                ))
            }
        }
        function Er(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function jr(e, t) {
            return !t || "object" !== _r(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function kr(e) {
            return (kr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Pr(e, t) {
            return (Pr = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function _r(e) {
            return (_r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var Cr = function(e, t, n, r) {
            var o, a = arguments.length, i = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : _r(Reflect)) && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, t, n, r);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (o = e[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, n, i) : o(t, n)) || i);
            return a > 3 && i && Object.defineProperty(t, n, i),
            i
        }
          , xr = function(e, t) {
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : _r(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
          , Nr = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (e = jr(this, kr(t).apply(this, arguments))).viewModel = new cr(e.getCtx(),e.props.partnerStackTransactionService,(function() {
                    return e.props
                }
                )),
                e.state = {
                    mfaContext: {
                        modes: [s.b.MfaSettings.Mode.phone],
                        last: "",
                        rateLimit: !1
                    }
                },
                e.onCaptchaSuccess = function() {
                    var t = Sr(regeneratorRuntime.mark((function t(n) {
                        var r, o;
                        return regeneratorRuntime.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    t.next = 3,
                                    e.getCtx().api.auth.captchaVerify(n);
                                case 3:
                                    return r = t.sent,
                                    o = r.captchaToken,
                                    t.next = 7,
                                    e.sendData({
                                        captchaToken: o
                                    });
                                case 7:
                                    t.next = 12;
                                    break;
                                case 9:
                                    t.prev = 9,
                                    t.t0 = t.catch(0),
                                    e.handleReject(t.t0);
                                case 12:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 9]])
                    }
                    )));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                e.sendData = function() {
                    var t = Sr(regeneratorRuntime.mark((function t(n) {
                        var r, o, a, i, c, s, u;

                        return regeneratorRuntime.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (r = e.props,
                                    o = r.userService,
                                    a = r.captchaEnterprise,
                                    i = n.email ? n.email : e.viewModel.email,
                                    c = n.captchaToken || e.state.captchaToken) {
                                        t.next = 12;
                                        break
                                    }
                                    return t.prev = 4,
                                    t.next = 7,
                                    a.execute();
                                case 7:
                                    s = t.sent,
                                    t.next = 12;
                                    break;
                                case 10:
                                    t.prev = 10,
                                    t.t0 = t.catch(4);
                                case 12:
                                    return t.t1 = i,
                                    t.t2 = n.password ? n.password : e.viewModel.password,
                                    t.t3 = n.code,
                                    t.t4 = n.rememberDevice,
                                    t.t5 = n.secureLogin ? n.secureLogin : e.viewModel.isSecureLogin,
                                    t.t6 = n.mode,
                                    t.t7 = c,
                                    t.t8 = s,
                                    t.next = 22,
                                    pr(i);
                                case 22:
                                    if (t.t9 = t.sent,
                                    u = {
                                        email: t.t1,
                                        password: t.t2,
                                        code: t.t3,
                                        rememberDevice: t.t4,
                                        secureLogin: t.t5,
                                        mode: t.t6,
                                        captchaToken: t.t7,
                                        captchaTokenV3: t.t8,
                                        ch: t.t9
                                    },
                                    g.d.sharedSigninSubmitButtonClick(Object(m.d)(e.getCtx())),
                                    u.email.length && u.password.length) {
                                        t.next = 27;
                                        break
                                    }
                                    return t.abrupt("return", e.viewModel.setError(!0));
                                case 27:
                                    e.setState({
                                        captchaToken: u.captchaToken
                                    }),
                                    e.viewModel.setPassword(u.password),
                                    e.viewModel.setEmail(u.email),
                                    e.viewModel.resetError(),
                                    e.viewModel.setLoading(!0),
                                    Object(v.f)(v.b.signInAttempt),
                                    Object(y.c)("performance", "INFO", "Metrics", wr({}, y.a.signinAttempt, 1)),
                                    e.props.handleAttempt && e.props.handleAttempt(),
                                    o.login({
                                        email_login: u
                                    }).then((function() {
                                        return e.viewModel.handleLoginAccept(o.user, o.lastAuthAction, void 0, u.rememberDevice, u.mode)
                                    }
                                    )).catch((function(t) {
                                        return e.handleReject(t, u.email)
                                    }
                                    ));
                                case 36:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[4, 10]])
                    }
                    )));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                e.handleAuthError = function(t, n) {
                	consolo.log('dffsd');
                    var r = Object(p.f)(t);
                    return e.handleReject(t, Object(f.j)(r.error) ? r.email : void 0, null == n ? void 0 : n.socialServiceName)
                }
                ,
                e.handleReject = function(t, n, r) {
                    if (e.viewModel.setLoading(!1),
                    !t)
                        return e.viewModel.resetError();
                    var o = e.getCtx()
                      , a = Object(m.d)(o)
                      , i = Object(p.g)(t) || ""
                      , c = Object(f.j)(i)
                      , s = Object(f.i)(i)
                      , u = Object(f.m)(i)
                      , d = Object(f.k)(i)
                      , h = Object(f.l)(i)
                      , w = u || d || s || h
                      , O = h ? null : u ? l.b.google : d ? l.b.facebook : l.b.apple
                      , S = w && O && e.viewModel.disabledSocialProviders.includes(O)
                      , E = Object(f.g)(i)
                      , j = e.viewModel.stepViewModel
                      , k = j.goToLoading
                      , P = j.goToCaptcha
                      , _ = j.goToSignin
                      , C = j.goToAccountCreation
                      , x = j.goToForgotPassword
                      , N = j.goToMfa;
                    if (S && O && e.viewModel.oAuth.isActive)
                        k(),
                        Object(z.j)(e.viewModel.oAuth.codeChallenge, O);
                    else if (E)
                        e.setState({
                            captchaToken: void 0
                        }),
                        P();
                    else {
                        var I = Object(f.e)(i)
                          , A = Object(f.f)(i)
                          , R = Object(p.c)(t)
                          , M = R ? Object(b.b)(R, {
                            originalLocation: btoa(Object(b.b)(document.URL, {
                                is_sso: !0
                            }))
                        }) : "";
                        if ((A && e.viewModel.step !== Dn.a.mfa || w || c || !I && e.viewModel.step === Dn.a.captcha) && _(),
                        e.viewModel.setError(!I && Object(f.b)(i, {
                            onForgotPassword: x,
                            onSignup: e.props.signupFlow === Bn.b.buildIn ? C : void 0,
                            ssoRedirectLink: M,
                            socialServiceName: r
                        })),
                        e.viewModel.setEmail(n || ""),
                        I) {
                            var T = Object(p.e)(t);
                            A && e.viewModel.setError(Object(f.b)(i)),
                            e.setState({
                                mfaContext: vr({}, T, {
                                    rateLimit: A
                                })
                            }),
                            N()
                        } else if (e.viewModel.isError) {
                            var F;
                            g.d.sharedSigninFormFail(a, void 0, i, e.props.placement),
                            Object(v.f)(v.b.signInFailure),
                            Object(y.c)("performance", "INFO", "Metrics", (wr(F = {}, y.a.signinFail, 1),
                            wr(F, "message", i),
                            F)),
                            e.props.handleReject && e.props.handleReject(i, n)
                        }
                    }
                }
                ,
                e
            }
            var n, r, a, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Pr(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "componentDidMount",
                value: (i = Sr(regeneratorRuntime.mark((function e() {
                    var t, n, r;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if ("true" !== this.getCtx().nav.query.is_sso) {
                                    e.next = 7;
                                    break
                                }
                                return e.next = 4,
                                Object(d.a)(300);
                            case 4:
                                return Object(u.b)(),
                                t = this.props.userService,
                                n = t.user,
                                r = t.lastAuthAction,
                                e.abrupt("return", this.viewModel.handleLoginAccept(n, r));
                            case 7:
                                return e.abrupt("return", this.viewModel.initializeSteps());
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function() {
                    return i.apply(this, arguments)
                }
                )
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    e.prepopulatedEmail !== this.props.prepopulatedEmail && this.viewModel.setEmail(this.props.prepopulatedEmail)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.displayType
                      , n = e.closePopup;
                    switch (t) {
                    case Bn.a.popup:
                        return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: Object(h.b)(mr.a.form, this.props.className)
                        }, o.a.createElement("div", {
                            className: mr.a.gradientLine
                        }), n && o.a.createElement("img", {
                            src: dr.a,
                            className: mr.a.close,
                            onClick: n
                        }), o.a.createElement("div", {
                            className: mr.a.content
                        }, this.content)), this.tos);
                    case Bn.a.buildIn:
                        return o.a.createElement("div", {
                            className: Object(h.b)(mr.a.content, mr.a.buildIn, this.props.className)
                        }, this.content, o.a.createElement("div", {
                            className: mr.a.mobileTosContainer
                        }, this.tos));
                    default:
                        return o.a.createElement("div", {
                            className: this.props.className
                        }, o.a.createElement("div", {
                            className: mr.a.form
                        }, o.a.createElement("div", {
                            className: mr.a.gradientLine
                        }), o.a.createElement("div", {
                            className: mr.a.content
                        }, this.content)), this.tos)
                    }
                }
            }, {
                key: "isLoading",
                get: function() {
                    return this.props.captchaEnterprise.loading || this.viewModel.loading
                }
            }, {
                key: "signin",
                get: function() {
                	console.log("dfsdfsd")
                    var e = this.props
                      , t = e.signupFlow
                      , n = e.signupRoute
                      , r = e.captchaEnterprise
                      , a = e.socialFlowType
                      , i = this.viewModel.stepViewModel.goToAccountCreation;
                    return o.a.createElement(Je, yr({
                        onSigninFormSubmit: this.sendData,
                        handleReject: this.handleReject,
                        handleAuthError: this.handleAuthError,
                        loading: this.isLoading,
                        captchaBrandingNotice: r.brandingNotice,
                        socialPopup: a !== Bn.c.redirect,
                        requestSignupStep: t === Bn.b.buildIn ? i : void 0,
                        signupRoute: n,
                        initialShowPassword: !!this.viewModel.password
                    }, this.viewModel.signinFormProps))
                }
            }, {
                key: "steps",
                get: function() {
                    var e, t = this, n = this.props, r = n.socialFlowType, a = n.captchaEnterprise, i = this.viewModel.oAuth.clientId, c = this.viewModel, s = c.errorMsg, u = c.stepViewModel, l = c.email, f = c.setEmail, d = c.emailVerificationViewModel, h = u.goToForgotPassword, m = u.goToSignin, b = u.goToSupport, y = u.goToForgotEmail;
                    return wr(e = {}, Dn.a.signinForm, this.signin),
                    wr(e, Dn.a.secureLogin, this.signin),
                    wr(e, Dn.a.mfa, o.a.createElement(Mn, {
                        email: l,
                        onMfaSubmit: this.sendData,
                        loading: this.isLoading,
                        errorMessage: s,
                        backToSignin: m,
                        showSupport: b,
                        mfaContext: this.state.mfaContext,
                        isSecureLogin: this.viewModel.isSecureLogin,
                        resetError: this.viewModel.resetError
                    })),
                    wr(e, Dn.a.social, o.a.createElement(xt, {
                        onSigninFormSubmit: this.sendData,
                        handleSetEmail: f,
                        loading: this.isLoading,
                        requestForgotPassword: h,
                        errorMessage: s
                    })),
                    wr(e, Dn.a.accountCreation, o.a.createElement(it, {
                        email: l,
                        requestSignin: m,
                        handleChangeEmail: f,
                        handleAccept: this.viewModel.handleAccept,
                        handleReject: function(e) {
                            t.props.handleReject && t.props.handleReject(Object(p.g)(e) || "")
                        },
                        handleAuthError: this.handleAuthError,
                        disabledSocialProviders: this.viewModel.disabledSocialProviders,
                        socialPopup: r !== Bn.c.redirect,
                        errorMessage: s,
                        captchaBrandingNotice: a.brandingNotice
                    })),
                    wr(e, Dn.a.forgotPassword, o.a.createElement(Dt, {
                        requestSignin: m,
                        requestForgotEmail: y,
                        email: l,
                        handleChangeEmail: f
                    })),
                    wr(e, Dn.a.forgotEmail, o.a.createElement(ht, {
                        requestSignin: m,
                        requestForgotPassword: h
                    })),
                    wr(e, Dn.a.emailVerification, o.a.createElement(H.a, {
                        viewModel: d
                    })),
                    wr(e, Dn.a.changeEmail, o.a.createElement(sr.a, {
                        viewModel: d
                    })),
                    wr(e, Dn.a.support, o.a.createElement(Y, {
                        email: l,
                        backToSignin: m
                    })),
                    wr(e, Dn.a.oAuthConsent, o.a.createElement(ae, {
                        clientId: i,
                        onRequestSignin: m,
                        onAuthorize: this.viewModel.handleOAuthAccept
                    })),
                    wr(e, Dn.a.captcha, o.a.createElement(tn, {
                        onSuccess: this.onCaptchaSuccess,
                        captchaBadge: a.brandingNotice
                    })),
                    wr(e, Dn.a.loading, o.a.createElement(A.a, {
                        className: mr.a.loader
                    })),
                    e
                }
            }, {
                key: "content",
                get: function() {
                    var e = this.viewModel.step;
                    return o.a.createElement(o.a.Fragment, null, Object.entries(this.steps).map((function(t) {
                        var n = br(t, 2)
                          , r = n[0]
                          , a = n[1];
                        return o.a.createElement(N.b, {
                            show: r === e,
                            key: r,
                            animation: N.a.fadeIn
                        }, a)
                    }
                    )))
                }
            }, {
                key: "tos",
                get: function() {
                    var e = this.viewModel.step;
                    return e === Dn.a.signinForm || e === Dn.a.social ? o.a.createElement("div", {
                        className: mr.a.tos
                    }, o.a.createElement(I.f, null)) : null
                }
            }]) && Er(n.prototype, r),
            a && Er(n, a),
            t
        }(i.a);
        Cr([a.computed, xr("design:type", Object), xr("design:paramtypes", [])], Nr.prototype, "isLoading", null),
        Cr([a.computed, xr("design:type", Object), xr("design:paramtypes", [])], Nr.prototype, "content", null),
        Nr = Cr([c.c], Nr);
        var Ir;
        t.a = (Ir = Object(c.a)("userService", "experimentsService", "partnerStackTransactionService")(Nr),
        function(e) {
            var t = Object(E.d)()
              , n = x.hasCaptchaScript()
              , a = x.getFullUrl(t.isActive(S.c.CaptchaEnterpriseSource.groups.useGlobal));
            return Object(r.useEffect)((function() {
                return x.init(),
                function() {
                    x.cleanup()
                }
            }
            ), [x, n, t]),
            o.a.createElement(o.a.Fragment, null, o.a.createElement(w.a, null, !n && o.a.createElement("script", {
                "data-key": "captcha",
                type: "text/javascript",
                src: a,
                defer: !0,
                async: !0
            }), o.a.createElement("style", {
                "data-key": "captcha-style",
                type: "text/css"
            }, ".grecaptcha-badge { visibility: hidden; }")), o.a.createElement(j.a, {
                captcha: x
            }, (function(t) {
                return o.a.createElement(Ir, P({}, e, {
                    captchaEnterprise: t
                }))
            }
            )))
        }
        )
    },
    930: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return m
        }
        ));
        var r = n(1)
          , o = n.n(r)
          , a = n(908)
          , i = n(909)
          , c = n.n(i);
        function s(e) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function l(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function p(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function f(e, t) {
            return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function d(e) {
            return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function h(e, t) {
            return (h = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var m = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (e = f(this, d(t).apply(this, arguments))).showTooltipTrackingTimeout = -1,
                e.rowHoverStartTime = Number.MAX_SAFE_INTEGER,
                e.state = {
                    visible: !1
                },
                e
            }
            var n, r, i;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && h(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "handleMouseEnter",
                value: function(e) {
                    var t, n;
                    null != e.currentTarget && this.setState({
                        visible: !0
                    }),
                    null === (n = (t = this.props).onHover) || void 0 === n || n.call(t);
                    var r = this.props.handleTooltipShowTracking;
                    r && (this.showTooltipTrackingTimeout = window.setTimeout((function() {
                        r()
                    }
                    ), 300),
                    this.rowHoverStartTime = performance.now())
                }
            }, {
                key: "handleMouseLeave",
                value: function(e) {
                    this.setState({
                        visible: !1
                    }),
                    window.clearTimeout(this.showTooltipTrackingTimeout)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? u(Object(n), !0).forEach((function(t) {
                                l(e, t, n[t])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }
                            ))
                        }
                        return e
                    }({}, this.props, {
                        visible: this.state.visible
                    });
                    return o.a.createElement("div", {
                        className: c.a.tooltipContainer,
                        onMouseEnter: function(t) {
                            return e.handleMouseEnter(t)
                        },
                        onMouseLeave: function(t) {
                            return e.handleMouseLeave(t)
                        }
                    }, o.a.createElement(a.a, t, this.props.children))
                }
            }]) && p(n.prototype, r),
            i && p(n, i),
            t
        }(o.a.Component)
    },
    931: function(e, t, n) {
        e.exports = n.p + "files/0415aeb174a8ed5165b6728ad597976f/apple_logo.svg"
    },
    932: function(e, t, n) {
        e.exports = n.p + "files/62d5d70493cefa1ea201f0946a87c7f3/apple_logo_black.svg"
    },
    933: function(e, t, n) {
        e.exports = n.p + "files/6bd7e9ef7b4b615a8ae6de432cac4393/facebook_white.svg"
    },
    934: function(e, t, n) {
        e.exports = n.p + "files/ab698bd95b59cd2c6f13e1be3807898a/facebook_logo.svg"
    },
    935: function(e, t, n) {
        e.exports = n.p + "files/d44822cd1fcc1cdbcba4a029a4ab80b9/google_white.svg"
    },
    936: function(e, t, n) {
        e.exports = n.p + "files/40f91f3c867fcabe0f00c69142ef9e9f/google_logo.svg"
    },
    937: function(e, t, n) {
        e.exports = {
            container: "_1Fh83-container"
        }
    },
    938: function(e, t, n) {
        e.exports = {
            or: "_3La9e-or",
            buttonWrapper: "_35qoR-buttonWrapper",
            inlineButtonWrapper: "_1oZfm-inlineButtonWrapper"
        }
    },
    940: function(e, t, n) {
        "use strict";
        var r = n(1)
          , o = n.n(r)
          , a = n(78)
          , i = n(836)
          , c = n(835)
          , s = n(840)
          , u = n(67)
          , l = n(109)
          , p = n(62)
          , f = n(21)
          , d = n(863)
          , h = n(22)
          , m = n(852)
          , b = n(930)
          , y = n(287)
          , g = n(97)
          , v = n(893)
          , w = n(894)
          , O = n(947)
          , S = n(891)
          , E = n(895)
          , j = n.n(E)
          , k = n(948)
          , P = n.n(k);
        function _(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function C(e, t) {
            return !t || "object" !== I(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function x(e) {
            return (x = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function N(e, t) {
            return (N = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function I(e) {
            return (I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var A = function(e, t, n, r) {
            var o, a = arguments.length, i = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : I(Reflect)) && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, t, n, r);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (o = e[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, n, i) : o(t, n)) || i);
            return a > 3 && i && Object.defineProperty(t, n, i),
            i
        }
          , R = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (e = C(this, x(t).apply(this, arguments))).progress = o.a.createRef(),
                e.startCountdown = function() {
                    var t;
                    e.props.viewModel.startResendCountdown(),
                    null === (t = e.progress.current) || void 0 === t || t.startAnimation()
                }
                ,
                e.formViewModel = new O.a(e.props.notificationStore,e.startCountdown,e.props.viewModel,e.props.userService),
                e.handleSendError = function(t) {
                    var n = Object(f.g)(t) || "";
                    Object(d.d)(n) ? e.props.viewModel.handleSuccess() : e.startCountdown()
                }
                ,
                e
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && N(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "componentDidMount",
                value: function() {
                    var e, t = this.props.viewModel, n = t.disableResend, r = t.sendCode;
                    n ? null === (e = this.progress.current) || void 0 === e || e.startAnimation() : r().then(this.startCountdown).catch(this.handleSendError),
                    h.d.sharedEmailVerificationStepPageShow(Object(p.f)(this.getCtx()), location.href)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.props.viewModel.cleanupTimer()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.sentMessage
                      , n = e.title;
                    return o.a.createElement("div", {
                        className: j.a.emailContainer
                    }, n, o.a.createElement(c.d, {
                        multiplier: 1
                    }), t, o.a.createElement(c.d, {
                        multiplier: 3
                    }), this.codeForm)
                }
            }, {
                key: "codeForm",
                get: function() {
                    var e = this.formViewModel
                      , t = e.errorMessage
                      , n = e.loading
                      , r = e.autoSubmit
                      , a = e.resendCode
                      , s = e.handleCodeChange
                      , u = e.handleSubmit
                      , l = e.btnStatus
                      , p = this.props
                      , f = p.viewModel
                      , d = f.email
                      , h = f.disableResend
                      , O = p.showInstructions
                      , E = p.submitButton
                      , k = p.showLoader;
                    return o.a.createElement("form", {
                        className: j.a.form,
                        noValidate: !0
                    }, o.a.createElement("img", {
                        src: P.a,
                        className: j.a.emailIllustration
                    }), o.a.createElement(c.d, {
                        multiplier: 2
                    }), o.a.createElement(v.a, {
                        onFilledOut: r,
                        onChange: s,
                        disabled: n
                    }), o.a.createElement("div", {
                        className: j.a.errorMessageContainer
                    }, t && o.a.createElement("div", {
                        className: j.a.errorMessage
                    }, t)), O && o.a.createElement("div", {
                        className: j.a.instructionsText
                    }, "We’ve sent a six-digit verification code to", o.a.createElement("br", null), o.a.createElement(i.o, {
                        color: "green60"
                    }, d), ".", o.a.createElement("br", null), "Please enter this code before it expires."), o.a.createElement(E, {
                        submit: u,
                        btnStatus: l
                    }), o.a.createElement(c.d, {
                        multiplier: 2
                    }), o.a.createElement("div", {
                        className: j.a.links
                    }, o.a.createElement(w.a, {
                        radius: 8,
                        interval: S.b.IntervalBetweenCodeSend,
                        className: h ? j.a.progress : j.a.hide,
                        ref: this.progress
                    }), o.a.createElement(b.a, {
                        content: "Please wait 30 seconds to resend the code.",
                        bottom: !0,
                        widthPx: 300
                    }, o.a.createElement(g.b, {
                        className: h ? j.a.disabledLink : j.a.link,
                        onBeforeFollow: a
                    }, "Resend the code"))), o.a.createElement((function() {
                        return k ? o.a.createElement(m.b, {
                            show: n,
                            animation: m.a.scrollIn
                        }, o.a.createElement("div", {
                            className: j.a.preLoader
                        }, o.a.createElement(y.a, {
                            color: "green50"
                        }))) : null
                    }
                    ), null))
                }
            }]) && _(n.prototype, r),
            a && _(n, a),
            t
        }(u.a);
        R = A([a.d], R);
        var M = Object(l.a)("notificationStore", "userService")(R);
        function T() {
            return (T = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function F(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function L(e, t) {
            return !t || "object" !== q(t) && "function" != typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function B(e) {
            return (B = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function D(e, t) {
            return (D = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function q(e) {
            return (q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var G = function(e, t, n, r) {
            var o, a = arguments.length, i = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : q(Reflect)) && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, t, n, r);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (o = e[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, n, i) : o(t, n)) || i);
            return a > 3 && i && Object.defineProperty(t, n, i),
            i
        }
          , V = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (e = L(this, B(t).apply(this, arguments))).render = function() {
                    return o.a.createElement(M, T({}, e.visualProps, e.props))
                }
                ,
                e
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && D(e, t)
            }(t, e),
            n = t,
            (r = [{
                key: "visualProps",
                get: function() {
                    var e = this.props.viewModel
                      , t = e.email
                      , n = e.newEmailCandidate
                      , r = e.isVerifyNewEmail;
                    return {
                        title: r ? o.a.createElement(i.e, {
                            textAlign: "center"
                        }, "Verify your new email address") : o.a.createElement(i.e, {
                            textAlign: "center"
                        }, "Let's verify your email address"),
                        sentMessage: r ? o.a.createElement(i.n, {
                            textAlign: "center"
                        }, "Enter the six-digit verification code we sent to ", o.a.createElement("br", null), o.a.createElement(i.o, {
                            color: "neutral60",
                            bold: !0
                        }, n), ".") : o.a.createElement("div", {
                            className: j.a.subtitle
                        }, "You're signing in as ", t),
                        showInstructions: !r,
                        submitButton: function(e) {
                            var t = e.submit
                              , n = e.btnStatus;
                            return r ? o.a.createElement(o.a.Fragment, null, o.a.createElement(c.d, {
                                multiplier: 1
                            }), o.a.createElement(s.a, {
                                status: n,
                                qa: "confirmEmailChange",
                                onClick: t,
                                text: "Confirm email change",
                                widthPercent: 100
                            }), o.a.createElement(c.d, {
                                multiplier: 1
                            })) : null
                        },
                        showLoader: !r
                    }
                }
            }]) && F(n.prototype, r),
            a && F(n, a),
            t
        }(o.a.Component);
        V = G([a.d], V);
        t.a = V
    },
    941: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "b", (function() {
                return h
            }
            )),
            n.d(t, "a", (function() {
                return m
            }
            ));
            var r = n(1)
              , o = n.n(r)
              , a = n(20)
              , i = n(974);
            function c(e) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function s(e, t, n, r, o, a, i) {
                try {
                    var c = e[a](i)
                      , s = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(s) : Promise.resolve(s).then(r, o)
            }
            function u(e) {
                return function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);
                        function i(e) {
                            s(a, r, o, i, c, "next", e)
                        }
                        function c(e) {
                            s(a, r, o, i, c, "throw", e)
                        }
                        i(void 0)
                    }
                    ))
                }
            }
            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function p(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }
            function f(e) {
                return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            function d(e, t) {
                return (d = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            var h = "signin/signup"
              , m = function(t) {
                function n() {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, n),
                    (t = p(this, f(n).apply(this, arguments))).state = {
                        loading: !1
                    },
                    t.executeCaptcha = u(regeneratorRuntime.mark((function n() {
                        var r, o, i, c;
                        return regeneratorRuntime.wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (r = t.props.captcha,
                                    Object(a.c)("Execute Captcha attempt", "INFO", "Captcha"),
                                    !t.ignoreCaptcha) {
                                        n.next = 4;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 4:
                                    return r.isGrecaptchaLoaded() || Object(a.b)("Captcha was not loaded at time of executeCaptcha", e, "Captcha"),
                                    o = Date.now(),
                                    n.prev = 6,
                                    t.setState({
                                        loading: !0
                                    }),
                                    n.next = 10,
                                    r.waitUntilCaptchaReady(15e3);
                                case 10:
                                    return i = n.sent,
                                    n.next = 13,
                                    r.getToken(h);
                                case 13:
                                    return c = n.sent,
                                    r.deleteToken(h),
                                    t.setState({
                                        loading: !1
                                    }),
                                    Object(a.c)("Token Exists after execute = [".concat(!!c, "], waitUntilCaptchaReady_time_ms = [").concat(i, "]"), "INFO", "Captcha"),
                                    n.abrupt("return", c);
                                case 20:
                                    n.prev = 20,
                                    n.t0 = n.catch(6),
                                    Object(a.b)("\n          ".concat(n.t0.message, "; Time from start of execute to error was ").concat(Date.now() - o, "\n        "), e, "Captcha", void 0, void 0, JSON.stringify(n.t0)),
                                    t.setState({
                                        loading: !1
                                    });
                                case 24:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, null, [[6, 20]])
                    }
                    ))),
                    t
                }
                var r, c, s;
                return function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && d(e, t)
                }(n, t),
                r = n,
                (c = [{
                    key: "render",
                    value: function() {
                        return o.a.createElement(o.a.Fragment, null, this.props.children({
                            loading: this.state.loading,
                            execute: this.executeCaptcha,
                            brandingNotice: o.a.createElement(i.b, null)
                        }))
                    }
                }, {
                    key: "ignoreCaptcha",
                    get: function() {
                        return !1
                    }
                }]) && l(r.prototype, c),
                s && l(r, s),
                n
            }(o.a.Component)
        }
        ).call(this, "/")
    },
    942: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", (function() {
                return l
            }
            ));
            var r = n(20)
              , o = n(975)
              , a = n.n(o);
            function i(e, t, n, r, o, a, i) {
                try {
                    var c = e[a](i)
                      , s = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(s) : Promise.resolve(s).then(r, o)
            }
            function c(e) {
                return function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);
                        function c(e) {
                            i(a, r, o, c, s, "next", e)
                        }
                        function s(e) {
                            i(a, r, o, c, s, "throw", e)
                        }
                        c(void 0)
                    }
                    ))
                }
            }
            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var u = function() {}
              , l = function() {
                function t(e, n) {
                    var o = this;
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.config = e,
                    this.defaultAction = n,
                    this.tokenMap = new Map,
                    this.tokenReqMap = new Map,
                    this.tokenRefreshTimers = new Map,
                    this.initTimeStart = 0,
                    this.waitUntilCaptchaReady = function(e) {
                        var t = Date.now();
                        return new Promise((function(n, r) {
                            !function a() {
                                var i = Date.now() - t;
                                if (i > e)
                                    return r(new Error("Max wait time of ".concat(e, "ms reached while waiting for grecaptcha initialize")));
                                try {
                                    if (o.isGrecaptchaLoaded())
                                        return n(i)
                                } catch (e) {} finally {
                                    window.setTimeout(a, 100)
                                }
                            }()
                        }
                        ))
                    }
                    ,
                    this.onCaptchaLoad = function() {
                        Object(r.c)("Initial Captcha load time, ms", "INFO", "Captcha", {
                            loadTime: Date.now() - o.initTimeStart
                        }),
                        o.suppressCaptchaErrors(),
                        o.hideCaptchaBadges(),
                        o.preloadDefaultToken()
                    }
                }
                var n, o, i, l, p, f;
                return n = t,
                (o = [{
                    key: "addOnLoadHook",
                    value: function() {
                        window[t.onLoadFnName] = this.onCaptchaLoad
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.initTimeStart = Date.now(),
                        this.isGrecaptchaLoaded() && this.onCaptchaLoad()
                    }
                }, {
                    key: "cleanup",
                    value: function() {
                        this.tokenRefreshTimers.forEach((function(e) {
                            return clearTimeout(e)
                        }
                        ))
                    }
                }, {
                    key: "preloadDefaultToken",
                    value: function() {
                        var t = this;
                        return this.preCacheToken(this.defaultAction).then((function() {
                            Object(r.c)("RequestToken Captcha preload time, ms", "INFO", "Captcha", {
                                timeSinceReady: Date.now() - t.initTimeStart
                            })
                        }
                        )).catch((function(t) {
                            return Object(r.b)("captchaOnLoad failed to execute", e, "Captcha", void 0, void 0, JSON.stringify(t))
                        }
                        ))
                    }
                }, {
                    key: "getFullUrl",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                          , n = this.config
                          , r = n.enterpriseKey
                          , o = n.globalEnterpriseUrl
                          , a = n.enterpriseUrl;
                        return "".concat(e ? o : a, "?logging=true&onload=").concat(encodeURIComponent(t.onLoadFnName), "&render=").concat(encodeURIComponent(r))
                    }
                }, {
                    key: "deleteToken",
                    value: function(e) {
                        this.tokenMap.has(e) && this.tokenMap.delete(e)
                    }
                }, {
                    key: "getToken",
                    value: (f = c(regeneratorRuntime.mark((function e(t) {
                        var n, o;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (n = this.tokenMap.get(t),
                                    o = n && Date.now() - n.time > 1e5,
                                    n && !o) {
                                        e.next = 7;
                                        break
                                    }
                                    return o && Object(r.c)("Captcha getToken token is expired", "INFO", "Captcha", {
                                        lifetimeMs: Date.now() - n.time
                                    }),
                                    e.next = 6,
                                    this.preCacheToken(t);
                                case 6:
                                    n = e.sent;
                                case 7:
                                    return e.abrupt("return", n.token);
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    ))),
                    function(e) {
                        return f.apply(this, arguments)
                    }
                    )
                }, {
                    key: "preCacheToken",
                    value: (p = c(regeneratorRuntime.mark((function e(t) {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.clearRefreshTimer(t),
                                    e.next = 3,
                                    this.requestToken(t);
                                case 3:
                                    return n = e.sent,
                                    this.tokenMap.set(t, n),
                                    this.setRefreshTimer(t),
                                    e.abrupt("return", n);
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    ))),
                    function(e) {
                        return p.apply(this, arguments)
                    }
                    )
                }, {
                    key: "requestToken",
                    value: (l = c(regeneratorRuntime.mark((function e(t) {
                        var n, o, a, i = this;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.tokenReqMap.has(t) || (n = Date.now(),
                                    o = function(e, n) {
                                        return function() {
                                            Object(r.c)("RequestToken Captcha execute ".concat(e, " time, ms"), "INFO", "Captcha", {
                                                timeSinceReady: Date.now() - n
                                            }),
                                            i.tokenReqMap.delete(t)
                                        }
                                    }
                                    ,
                                    a = new Promise((function(e, o) {
                                        if (!i.grecaptcha)
                                            return o(new Error("grecaptcha object is not present in window"));
                                        i.grecaptcha.enterprise.ready(c(regeneratorRuntime.mark((function o() {
                                            var a, c;
                                            return regeneratorRuntime.wrap((function(o) {
                                                for (; ; )
                                                    switch (o.prev = o.next) {
                                                    case 0:
                                                        return a = Date.now(),
                                                        Object(r.c)("RequestToken Captcha ready time, ms", "INFO", "Captcha", {
                                                            timeSinceRequest: a - n
                                                        }),
                                                        o.next = 4,
                                                        i.grecaptcha.enterprise.execute(i.config.enterpriseKey, {
                                                            action: t
                                                        });
                                                    case 4:
                                                        c = o.sent,
                                                        e({
                                                            token: c,
                                                            time: Date.now()
                                                        });
                                                    case 6:
                                                    case "end":
                                                        return o.stop()
                                                    }
                                            }
                                            ), o)
                                        }
                                        ))))
                                    }
                                    )),
                                    this.tokenReqMap.set(t, a),
                                    a.then(o("success", n), o("fail", n))),
                                    e.abrupt("return", this.tokenReqMap.get(t));
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    ))),
                    function(e) {
                        return l.apply(this, arguments)
                    }
                    )
                }, {
                    key: "isGrecaptchaLoaded",
                    value: function() {
                        return !(!this.grecaptcha || !this.grecaptcha.enterprise.ready)
                    }
                }, {
                    key: "hasCaptchaScript",
                    value: function() {
                        return !!this.captchaScriptElement
                    }
                }, {
                    key: "hasCaptchaStyle",
                    value: function() {
                        return !!document.querySelector('style[data-key="captcha-style"]')
                    }
                }, {
                    key: "hideCaptchaBadges",
                    value: function() {
                        this.captchaBadges.forEach((function(e) {
                            e && e.classList.add(a.a.hide)
                        }
                        ))
                    }
                }, {
                    key: "suppressCaptchaErrors",
                    value: function() {
                        var e = this;
                        this.captchaBadges.forEach((function(t) {
                            t && (e.suppressIframeErrors(t),
                            t.parentNode && e.suppressIframeErrors(t.parentNode))
                        }
                        ))
                    }
                }, {
                    key: "suppressIframeErrors",
                    value: function(e) {
                        var t = e.querySelector("iframe");
                        t && !t.onerror && (t.onerror = u)
                    }
                }, {
                    key: "clearRefreshTimer",
                    value: function(e) {
                        this.tokenRefreshTimers.has(e) && (window.clearTimeout(this.tokenRefreshTimers.get(e)),
                        this.tokenRefreshTimers.delete(e))
                    }
                }, {
                    key: "setRefreshTimer",
                    value: function(e) {
                        var t = this;
                        this.clearRefreshTimer(e),
                        this.tokenRefreshTimers.set(e, window.setTimeout((function() {
                            return t.preCacheToken(e)
                        }
                        ), 6e4))
                    }
                }, {
                    key: "captchaBadges",
                    get: function() {
                        for (var e = document.getElementsByClassName("grecaptcha-badge"), t = [], n = 0; n < e.length; n++) {
                            var r = e.item(n);
                            r && t.push(r)
                        }
                        return t
                    }
                }, {
                    key: "captchaScriptElement",
                    get: function() {
                        return document.querySelector('script[data-key="captcha"]')
                    }
                }, {
                    key: "grecaptcha",
                    get: function() {
                        return window.grecaptcha
                    }
                }]) && s(n.prototype, o),
                i && s(n, i),
                t
            }();
            l.onLoadFnName = "captchaOnLoad"
        }
        ).call(this, "/")
    },
    943: function(e, t, n) {
        e.exports = {
            container: "_33rQD-container",
            fadeInEnter: "_2HSJd-fadeInEnter",
            fadeInEnterActive: "_2zCkz-fadeInEnterActive",
            fadeInExit: "_1dScR-fadeInExit",
            fadeInExitActive: "x5oNM-fadeInExitActive",
            fadeInExitDone: "_1yzSb-fadeInExitDone",
            scrollInEnter: "_3-iZl-scrollInEnter",
            scrollInEnterActive: "_1DLjQ-scrollInEnterActive",
            scrollInExit: "_16HNp-scrollInExit",
            scrollInExitActive: "_1cOJJ-scrollInExitActive"
        }
    },
    944: function(e, t, n) {
        e.exports = n.p + "files/1f8dbe4f0201e52908903ef94a1261b2/success.svg"
    },
    945: function(e, t, n) {
        e.exports = {
            subTitle: "daK-k-subTitle",
            successTitle: "_26_7J-successTitle",
            textarea: "_3BVli-textarea",
            backLink: "o-0s9-backLink",
            text: "_1JExB-text",
            button: "_3F9He-button",
            successIcon: "_1oGlC-successIcon",
            successText: "_1ScgZ-successText"
        }
    },
    946: function(e, t, n) {
        e.exports = {
            input: "_3_lqZ-input",
            container: "_16cPs-container",
            third: "_1YHFR-third"
        }
    },
    947: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", (function() {
                return h
            }
            ));
            var r = n(4)
              , o = n(62)
              , a = n(21)
              , i = n(22)
              , c = n(20)
              , s = n(840);
            function u(e, t, n, r, o, a, i) {
                try {
                    var c = e[a](i)
                      , s = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(s) : Promise.resolve(s).then(r, o)
            }
            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function p(e) {
                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            var f = function(e, t, n, r) {
                var o, a = arguments.length, i = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : p(Reflect)) && "function" == typeof Reflect.decorate)
                    i = Reflect.decorate(e, t, n, r);
                else
                    for (var c = e.length - 1; c >= 0; c--)
                        (o = e[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, n, i) : o(t, n)) || i);
                return a > 3 && i && Object.defineProperty(t, n, i),
                i
            }
              , d = function(e, t) {
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : p(Reflect)) && "function" == typeof Reflect.metadata)
                    return Reflect.metadata(e, t)
            }
              , h = function() {
                function t(n, r, s, l) {
                    var p = this;
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.notificationStore = n,
                    this.startCountdown = r,
                    this.emailVerificationViewModel = s,
                    this.userService = l,
                    this.loading = !1,
                    this.code = "",
                    this.handleCodeChange = function(e) {
                        return p.code = e
                    }
                    ,
                    this.submitCode = function() {
                        var t, n = (t = regeneratorRuntime.mark((function t(n) {
                            var r, s, u;
                            return regeneratorRuntime.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return r = p.emailVerificationViewModel,
                                        s = r.handleSuccess,
                                        u = r.verifyCode,
                                        p.loading = !0,
                                        p.errorMessage = void 0,
                                        t.prev = 3,
                                        t.next = 6,
                                        u(n);
                                    case 6:
                                        if (!t.sent) {
                                            t.next = 10;
                                            break
                                        }
                                        return t.next = 10,
                                        p.userService.load(!0);
                                    case 10:
                                        s(),
                                        i.d.sharedEmailVerificationFormSuccess(Object(o.d)(p.ctx)),
                                        t.next = 21;
                                        break;
                                    case 14:
                                        t.prev = 14,
                                        t.t0 = t.catch(3),
                                        p.handleVerifyCodeError(t.t0),
                                        p.emailVerificationViewModel.setDisableResend(!1),
                                        p.loading = !1,
                                        i.d.sharedEmailVerificationFormFail(Object(o.d)(p.ctx)),
                                        Object(c.b)("Error verifying email code ".concat(Object(a.l)(t.t0)), e, "Signin.VerifyEmail");
                                    case 21:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t, null, [[3, 14]])
                        }
                        )),
                        function() {
                            var e = this
                              , n = arguments;
                            return new Promise((function(r, o) {
                                var a = t.apply(e, n);
                                function i(e) {
                                    u(a, r, o, i, c, "next", e)
                                }
                                function c(e) {
                                    u(a, r, o, i, c, "throw", e)
                                }
                                i(void 0)
                            }
                            ))
                        }
                        );
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }(),
                    this.handleVerifyCodeError = function(e) {
                        var t = e.code
                          , n = Object(a.g)(e);
                        404 === t || 400 === t || "invalid_code" === n ? p.errorMessage = "Invalid code. Please try again." : 409 === t ? p.errorMessage = "An account with this email already exists." : 429 === t ? p.notificationStore.pushFailedNotification("Too many attempts. Please try again later.") : "FAILURE" === n ? p.notificationStore.pushFailedNotification("Your password is incorrect.") : p.notificationStore.pushFailedNotification("Something went wrong.")
                    }
                    ,
                    this.handleSubmit = function() {
                        return p.submitCode(p.code)
                    }
                    ,
                    this.autoSubmit = this.emailVerificationViewModel.isVerifyNewEmail ? void 0 : this.submitCode,
                    this.resendCode = function() {
                        var e = p.emailVerificationViewModel
                          , t = e.email
                          , n = e.disableResend
                          , r = e.setDisableResend
                          , a = e.sendCode;
                        n || (a().then((function() {
                            return p.notificationStore.pushSuccessNotification("A new email with a verification code was just resent to ".concat(t, "."))
                        }
                        )).catch((function() {
                            return r(!1)
                        }
                        )),
                        p.startCountdown(),
                        i.d.sharedEmailVerificationResendCodeButtonClick(Object(o.d)(p.ctx)))
                    }
                }
                var n, r, p;
                return n = t,
                (r = [{
                    key: "ctx",
                    get: function() {
                        return this.emailVerificationViewModel.ctx
                    }
                }, {
                    key: "auth",
                    get: function() {
                        return this.ctx.api.auth
                    }
                }, {
                    key: "btnStatus",
                    get: function() {
                        return this.loading ? s.c.Loading : s.c.Active
                    }
                }]) && l(n.prototype, r),
                p && l(n, p),
                t
            }();
            f([r.observable, d("design:type", Object)], h.prototype, "loading", void 0),
            f([r.observable, d("design:type", String)], h.prototype, "errorMessage", void 0),
            f([r.observable, d("design:type", Object)], h.prototype, "code", void 0),
            f([r.action, d("design:type", Object)], h.prototype, "handleCodeChange", void 0),
            f([r.computed, d("design:type", Object), d("design:paramtypes", [])], h.prototype, "btnStatus", null),
            f([r.action, d("design:type", Object)], h.prototype, "submitCode", void 0),
            f([r.action, d("design:type", Object)], h.prototype, "handleVerifyCodeError", void 0)
        }
        ).call(this, "/index.js")
    },
    948: function(e, t, n) {
        e.exports = n.p + "files/65aa0d3508fd3df8fadcbd96a7e810ac/email.svg"
    },
    949: function(e, t, n) {
        e.exports = {
            title: "_2W1OW-title",
            subtitle: "_1F_nq-subtitle",
            email: "eR8Lw-email",
            consent: "_2OvdH-consent",
            content: "_17fY5-content",
            instructionsText: "_379NV-instructionsText",
            form: "xofYE-form",
            gradientLine: "_3Jmf9-gradientLine",
            close: "_2y7y5-close",
            buildIn: "_20nA3-buildIn",
            link: "_2zLBn-link",
            errorMessage: "UjM_k-errorMessage",
            input: "_1Jro5-input",
            button: "_1X5xr-button",
            mobileTosContainer: "_28tfQ-mobileTosContainer",
            tos: "rIfd7-tos",
            loader: "_1DG6H-loader",
            change: "_1xA-A-change",
            authorize: "_22nhz-authorize"
        }
    },
    950: function(e, t, n) {
        e.exports = {
            bottomWrapper: "_23gk9-bottomWrapper",
            navigationLink: "_3C9bE-navigationLink"
        }
    },
    951: function(e, t, n) {
        e.exports = {
            title: "_19HHO-title",
            signupTitle: "_2mvhS-signupTitle",
            subtitle: "_2zWw3-subtitle",
            content: "_2TrUu-content",
            instructionsText: "_1gVUJ-instructionsText",
            checkbox: "_3N40N-checkbox",
            form: "_2P54D-form",
            gradientLine: "_3ij6a-gradientLine",
            close: "_2ho-r-close",
            buildIn: "_3Et69-buildIn",
            link: "_1EMkL-link",
            navigationLink: "_3w810-navigationLink",
            errorMessage: "zHSrh-errorMessage",
            input: "_2He_--input",
            button: "_1Q03h-button",
            mobileTosContainer: "_2Jfl--mobileTosContainer",
            tos: "_1WS-M-tos",
            loader: "_18_Mt-loader",
            signupForm: "_3Im05-signupForm",
            bottomWrapper: "_3RlNh-bottomWrapper"
        }
    },
    952: function(e, t, n) {
        e.exports = {
            title: "_2XNCT-title",
            subTitle: "NQmV_-subTitle",
            subtitle: "zjdfS-subtitle",
            content: "b7DHi-content",
            instructionsText: "_3xNFV-instructionsText",
            form: "_2y-Q9-form",
            gradientLine: "_3CvLa-gradientLine",
            close: "_3sf78-close",
            buildIn: "_1L7bf-buildIn",
            link: "_2hSlR-link",
            backLink: "_2EmR9-backLink",
            errorMessage: "_3pufg-errorMessage",
            input: "_1_nCy-input",
            button: "_2i7WS-button",
            mobileTosContainer: "_3aXQm-mobileTosContainer",
            tos: "_2eskR-tos",
            loader: "Bnu2g-loader",
            text: "UGF7d-text"
        }
    },
    953: function(e, t, n) {
        e.exports = n.p + "files/dd07e281f579e8b7e322bb8044156fd0/facebook.svg"
    },
    954: function(e, t, n) {
        e.exports = n.p + "files/c5f7b26cb733f625ee1e3723eaec9820/google.svg"
    },
    955: function(e, t, n) {
        e.exports = {
            title: "_10M3H-title",
            subtitle: "_37viV-subtitle",
            name: "_3FW6r-name",
            content: "_1IqwT-content",
            instructionsText: "_3Us-T-instructionsText",
            email: "_1yfSF-email",
            form: "_3lrb2-form",
            gradientLine: "_1zYB--gradientLine",
            close: "_27ho0-close",
            buildIn: "qm7w9-buildIn",
            link: "GrIAU-link",
            errorMessage: "_2nBUe-errorMessage",
            input: "F-4xy-input",
            button: "_2tiYP-button",
            mobileTosContainer: "_2QJCu-mobileTosContainer",
            tos: "_3DjWN-tos",
            loader: "o0cPI-loader",
            text: "_2fMOO-text",
            userInfo: "jCYBU-userInfo",
            img: "_2ufKp-img",
            imgWrapper: "_1ekMC-imgWrapper",
            serviceIcon: "_13O2y-serviceIcon"
        }
    },
    956: function(e, t, n) {
        e.exports = {
            title: "_3hJb3-title",
            subtitle: "_1ZJcj-subtitle",
            content: "_3rPdw-content",
            instructionsText: "VWeeP-instructionsText",
            form: "_3J5AL-form",
            gradientLine: "_3vRFa-gradientLine",
            close: "_1tkvR-close",
            buildIn: "_2o6ZS-buildIn",
            link: "_3gvvf-link",
            errorMessage: "_1BQF8-errorMessage",
            input: "_3YKJ9-input",
            button: "_1obx7-button",
            mobileTosContainer: "_2jk7w-mobileTosContainer",
            tos: "_2N0Qn-tos",
            loader: "Snmol-loader",
            text: "_1BP3D-text",
            resetform: "_3cJLs-resetform",
            bottomWrapper: "_2wROX-bottomWrapper"
        }
    },
    957: function(e, t, n) {
        e.exports = {
            title: "nJ5yU-title",
            subtitle: "_2gIgO-subtitle",
            content: "yaUSA-content",
            instructionsText: "_26vc0-instructionsText",
            form: "_1rbmW-form",
            gradientLine: "_36IXq-gradientLine",
            close: "_1eLUY-close",
            buildIn: "_1UkIW-buildIn",
            link: "qEn_D-link",
            errorMessage: "_1nBv3-errorMessage",
            input: "_33LZ7-input",
            button: "_1j1nC-button",
            mobileTosContainer: "_1lnTk-mobileTosContainer",
            tos: "_2iJB1-tos",
            loader: "_2D8fA-loader",
            captchaWrapper: "_2-lnA-captchaWrapper",
            narrowText: "_3Bj7A-narrowText",
            supportLinkWrapper: "_4NfDc-supportLinkWrapper",
            supportLink: "cFwI5-supportLink"
        }
    },
    958: function(e, t, n) {
        e.exports = n.p + "files/95a97b530992fcf8816e6e8b3af35d16/phone.svg"
    },
    959: function(e, t, n) {
        e.exports = n.p + "files/1878049b69ce9c5e2d86838065eec8fe/warning.svg"
    },
    960: function(e, t, n) {
        e.exports = n.p + "files/825943f1ef993faf5c2d07ad512a38d4/arrow.svg"
    },
    961: function(e, t, n) {
        e.exports = n.p + "files/3c391b84cd214d43726b4f9f9d7602cb/totp.svg"
    },
    962: function(e, t, n) {
        e.exports = n.p + "files/f28537da79ee908540565ed21705fba0/support.svg"
    },
    963: function(e, t, n) {
        e.exports = {
            title: "_16tIK-title",
            subtitle: "_1d6MV-subtitle",
            tryOtherMethodTitle: "_3D-kf-tryOtherMethodTitle",
            content: "_1xrRr-content",
            instructionsText: "_35EQO-instructionsText",
            checkbox: "_2Gt48-checkbox",
            tooltip: "_9jdQe-tooltip",
            form: "UI4WE-form",
            gradientLine: "_3nioY-gradientLine",
            close: "_2W1Vc-close",
            buildIn: "MvENp-buildIn",
            link: "_1NnT4-link",
            errorMessage: "_3_LCB-errorMessage",
            input: "fYsIl-input",
            button: "_6SMA4-button",
            mobileTosContainer: "_1C3c4-mobileTosContainer",
            tos: "ocf9--tos",
            loader: "L_FbO-loader",
            mfaForm: "_1XIPu-mfaForm",
            emailLabel: "mDtNc-emailLabel",
            email: "_3qmjI-email",
            changeEmail: "_1W8TB-changeEmail",
            mfaIllustration: "_9FhZk-mfaIllustration",
            backupIllustration: "_2Eo4F-backupIllustration",
            resendableMode: "_1IqDA-resendableMode",
            links: "_39jXF-links",
            progress: "_1LGsN-progress",
            hide: "_3cRhN-hide",
            resendLink: "_21p0v-resendLink",
            disabledLink: "_1VAhA-disabledLink",
            method: "_3H5pO-method",
            iconWrapper: "_3Wcy6-iconWrapper",
            methodInfo: "_1Udr3-methodInfo",
            methodName: "_1oE2N-methodName",
            methodText: "_1cxpy-methodText",
            disabledMethod: "_1BD4J-disabledMethod",
            errorWrapper: "WkyW3-errorWrapper"
        }
    },
    964: function(e, t, n) {
        e.exports = n.p + "files/d57c3da50820cf6c9d6a73e72f75c3a5/phone_disabled.svg"
    },
    965: function(e, t, n) {
        e.exports = n.p + "files/ad5c23d9d3df7c733b1732a1f4bd7505/backup.svg"
    },
    966: function(e, t, n) {
        e.exports = n.p + "files/f2bcb25e8fd09aeee324b903fd1f10f5/mfa.svg"
    },
    967: function(e, t, n) {
        e.exports = n.p + "files/6d610b730636f2ea8a91744a3f83d74c/emailVerification.svg"
    },
    968: function(e, t, n) {
        e.exports = n.p + "files/8bbfe4383109422f752bb5ecf971482f/backupIllustration.svg"
    },
    969: function(e, t, n) {
        "use strict";
        (function(e) {
            var r, o = n(1), a = n.n(o), i = n(109), c = n(900), s = n(285), u = n(844), l = n(21), p = n(20), f = n(835), d = n(840), h = n(836), m = n(852), b = n(928), y = n(850), g = n(970), v = n(971), w = n.n(v);
            function O(e) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function S() {
                return (S = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ).apply(this, arguments)
            }
            function E(e, t) {
                if (null == e)
                    return {};
                var n, r, o = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, o = {}, a = Object.keys(e);
                    for (r = 0; r < a.length; r++)
                        n = a[r],
                        t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++)
                        n = a[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }
            function j(e, t, n, r, o, a, i) {
                try {
                    var c = e[a](i)
                      , s = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(s) : Promise.resolve(s).then(r, o)
            }
            function k(e) {
                return function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);
                        function i(e) {
                            j(a, r, o, i, c, "next", e)
                        }
                        function c(e) {
                            j(a, r, o, i, c, "throw", e)
                        }
                        i(void 0)
                    }
                    ))
                }
            }
            function P(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function _(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }
            function C(e) {
                return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            function x(e, t) {
                return (x = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            !function(e) {
                e.newEmail = "newEmail",
                e.password = "password"
            }(r || (r = {}));
            var N = function(t) {
                function n() {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, n),
                    (t = _(this, C(n).apply(this, arguments))).state = {
                        loading: !1,
                        errorMessage: void 0
                    },
                    t.handleSubmit = function() {
                        var e = k(regeneratorRuntime.mark((function e(n) {
                            var r, o, a, i, c, s, u;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (n.preventDefault(),
                                        t.setState({
                                            loading: !0,
                                            errorMessage: void 0
                                        }),
                                        r = t.props.viewModel,
                                        o = r.setNewEmail,
                                        a = r.setPassword,
                                        i = r.handleNewEmailInformation,
                                        c = t.formData,
                                        s = c.password,
                                        u = c.newEmail,
                                        !t.validateForm()) {
                                            e.next = 22;
                                            break
                                        }
                                        if (o(u),
                                        a(s),
                                        e.prev = 8,
                                        !t.isSocial) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.next = 12,
                                        t.migrateSocial();
                                    case 12:
                                        return e.next = 14,
                                        t.sendCode();
                                    case 14:
                                        i(),
                                        e.next = 20;
                                        break;
                                    case 17:
                                        e.prev = 17,
                                        e.t0 = e.catch(8),
                                        t.setState({
                                            loading: !1
                                        });
                                    case 20:
                                        e.next = 23;
                                        break;
                                    case 22:
                                        t.setState({
                                            loading: !1
                                        });
                                    case 23:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, null, [[8, 17]])
                        }
                        )));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    t.migrateSocial = function() {
                        var e = t.props.socialUserService
                          , n = e.userSocialService
                          , r = e.user && (null == n ? void 0 : n.getAuthSigninConfig());
                        if (r)
                            return t.props.userService.migrateAccountToNewEmailLogin(r, t.formData.password).catch(t.handleMigrationError)
                    }
                    ,
                    t.handleMigrationError = function(n) {
                        var r = t.props.notificationStore;
                        throw 429 === n.code ? t.setState({
                            errorMessage: "Too many attempts. Please try again later."
                        }) : 401 === n.code ? r.pushFailedNotification("Something went wrong. Please refresh the page and try again.") : r.pushFailedNotification("Something went wrong."),
                        Object(p.b)("Error migrating from social user to new email ".concat(Object(l.l)(n)), e, "Signin.ChangeEmail"),
                        n
                    }
                    ,
                    t.sendCode = k(regeneratorRuntime.mark((function e() {
                        var n, r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = t.props.viewModel,
                                    r = n.sendCode,
                                    e.abrupt("return", r().catch(t.handleSendCodeError));
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    ))),
                    t.handleSendCodeError = function(n) {
                        var r = t.props.notificationStore;
                        throw 429 === n.code ? r.pushFailedNotification("Too many attempts. Please try again later.") : 409 === n.code ? t.setState({
                            errorMessage: "An account with this email already exists."
                        }) : r.pushFailedNotification("Something went wrong."),
                        Object(p.b)("Error sending email code ".concat(Object(l.l)(n)), e, "Signin.EmailVerification"),
                        n
                    }
                    ,
                    t
                }
                var o, i, c;
                return function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && x(e, t)
                }(n, t),
                o = n,
                (i = [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.viewModel.startVerifyNewEmailStep()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this
                          , t = this.props.userService.user.email
                          , n = this.state.errorMessage;
                        return a.a.createElement("form", {
                            className: w.a.container,
                            noValidate: !0,
                            onSubmit: this.handleSubmit
                        }, a.a.createElement(h.e, null, "Enter a new email address"), a.a.createElement(f.d, {
                            multiplier: 1
                        }), a.a.createElement(h.n, {
                            textAlign: "center",
                            color: "neutral40"
                        }, "Remember, you can no longer use ", t, "."), a.a.createElement(f.d, {
                            multiplier: 2
                        }), this.fields.map((function(t) {
                            var n = t.name
                              , r = E(t, ["name"]);
                            return a.a.createElement(y.a, S({
                                className: w.a.input,
                                key: n,
                                ref: function(t) {
                                    return e.inputs[n] = t
                                }
                            }, r))
                        }
                        )), a.a.createElement(m.b, {
                            show: !!n,
                            animation: m.a.scrollIn
                        }, a.a.createElement(h.n, {
                            color: "red50"
                        }, n)), this.socialNotice, a.a.createElement(f.d, {
                            multiplier: 1
                        }), a.a.createElement(d.a, {
                            status: this.buttonStatus,
                            qa: g.a.continueButton,
                            text: "Continue",
                            submit: !0,
                            widthPercent: 100
                        }), a.a.createElement(f.d, {
                            multiplier: 1
                        }))
                    }
                }, {
                    key: "isSocial",
                    get: function() {
                        return this.props.userService.user.isSocial
                    }
                }, {
                    key: "fields",
                    get: function() {
                        return [{
                            placeholder: "New email address",
                            inputType: b.b.field,
                            name: r.newEmail,
                            type: "text",
                            validator: new u.b(u.c.email),
                            qa: g.a.newEmailInput
                        }, {
                            placeholder: "".concat(this.isSocial ? "New" : "Current", " password"),
                            inputType: b.b.field,
                            name: r.password,
                            type: "password",
                            validator: new u.b(this.isSocial ? u.c.password : u.c.oldPassword),
                            qa: g.a.passwordInput
                        }]
                    }
                }, {
                    key: "socialNotice",
                    get: function() {
                        var e = this.props.socialUserService.user
                          , t = e && e.socialNetworkName || "";
                        return this.isSocial && a.a.createElement(a.a.Fragment, null, a.a.createElement(f.d, {
                            multiplier: 1
                        }), a.a.createElement(h.n, {
                            textAlign: "left"
                        }, "Going forward, you will no longer be able to sign in with your ", Object(s.a)(t), " account."), a.a.createElement(f.d, {
                            multiplier: 1
                        }))
                    }
                }, {
                    key: "buttonStatus",
                    get: function() {
                        return this.state.loading ? d.c.Loading : d.c.Active
                    }
                }]) && P(o.prototype, i),
                c && P(o, c),
                n
            }(c.a);
            t.a = Object(i.a)("userService", "socialUserService", "notificationStore")(N)
        }
        ).call(this, "/index.js")
    },
    970: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", (function() {
            return r
        }
        )),
        function(e) {
            e.newEmailInput = "newEmailInput",
            e.passwordInput = "passwordInput",
            e.continueButton = "continueBtn"
        }(r || (r = {}))
    },
    971: function(e, t, n) {
        e.exports = {
            container: "_3vHAx-container",
            goBackLink: "_3fXKy-goBackLink",
            input: "uuXBx-input"
        }
    },
    972: function(e, t, n) {
        e.exports = n.p + "files/eb1ade6d19bd9bff1db43a49a4040a0f/close.svg"
    },
    973: function(e, t, n) {
        e.exports = {
            title: "_3cbA3-title",
            subtitle: "_187bU-subtitle",
            content: "_286hB-content",
            instructionsText: "dVQnR-instructionsText",
            form: "HXkWh-form",
            gradientLine: "_3ikLV-gradientLine",
            close: "_2CsIJ-close",
            buildIn: "_2DahX-buildIn",
            link: "_2Iyxc-link",
            errorMessage: "_39p4X-errorMessage",
            input: "_2IjlZ-input",
            button: "_2i39_-button",
            mobileTosContainer: "o72Qi-mobileTosContainer",
            tos: "_28rcB-tos",
            loader: "_2vQcG-loader"
        }
    },
    996: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }
        ));
        var r = n(1)
          , o = n.n(r)
          , a = function(e) {
            return o.a.createElement("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
                key: e || "viewport"
            })
        }
    },
    997: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return l
        }
        )),
        n.d(t, "a", (function() {
            return p
        }
        ));
        var r = n(5)
          , o = n(13)
          , a = n(110);
        function i(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i)
                  , s = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o)
        }
        function c(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function s(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var u = Object(o.a)().api.redirect;
        function l(e, t) {
            var n = e.query.state;
            return p(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        s(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({}, t || {}, {}, n ? {
                state: n
            } : {})).then((function(e) {
                document.location.href = e
            }
            ))
        }
        function p(e) {
            return f.apply(this, arguments)
        }
        function f() {
            var e;
            return e = regeneratorRuntime.mark((function e(t) {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = r.d.get(u),
                            Object.keys(t).forEach((function(e) {
                                return n.queryParam(e, t[e])
                            }
                            )),
                            e.next = 4,
                            Object(a.a)(n);
                        case 4:
                            return e.abrupt("return", Object(a.b)({}).text(n));
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )),
            (f = function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, o) {
                    var a = e.apply(t, n);
                    function c(e) {
                        i(a, r, o, c, s, "next", e)
                    }
                    function s(e) {
                        i(a, r, o, c, s, "throw", e)
                    }
                    c(void 0)
                }
                ))
            }
            ).apply(this, arguments)
        }
    }
}]);
