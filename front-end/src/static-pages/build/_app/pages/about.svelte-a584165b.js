import {
  S as Ze,
  i as et,
  s as tt,
  e as a,
  t as g,
  k as m,
  c as s,
  a as i,
  h as p,
  m as u,
  d as l,
  b as r,
  g as at,
  I as e,
  j as de,
  J as fe,
  w as z,
  x as G,
  H as pt,
  y as J,
  q as F,
  o as K,
  B as Q,
} from "../chunks/vendor-dc0336cb.js";
function bt(h) {
  let t, n, d, v, b, o, y, T, w, f;
  return {
    c() {
      (t = a("div")),
        (n = a("div")),
        (d = a("div")),
        (v = g(h[0])),
        (b = m()),
        (o = a("span")),
        (y = g(h[1])),
        (T = m()),
        (w = a("div")),
        (f = g(h[2])),
        this.h();
    },
    l(c) {
      t = s(c, "DIV", { class: !0 });
      var _ = i(t);
      n = s(_, "DIV", { class: !0 });
      var $ = i(n);
      d = s($, "DIV", { class: !0 });
      var D = i(d);
      (v = p(D, h[0])), (b = u(D)), (o = s(D, "SPAN", { class: !0 }));
      var X = i(o);
      (y = p(X, h[1])),
        X.forEach(l),
        D.forEach(l),
        (T = u($)),
        (w = s($, "DIV", { clas: !0 }));
      var Y = i(w);
      (f = p(Y, h[2])), Y.forEach(l), $.forEach(l), _.forEach(l), this.h();
    },
    h() {
      r(o, "class", "text-blue-500"),
        r(d, "class", "text-2xl font-bold"),
        r(w, "clas", "text-base leading-6"),
        r(n, "class", "m-4 flex flex-col space-y-2"),
        r(t, "class", "border-4 border-blue-400 rounded-2xl");
    },
    m(c, _) {
      at(c, t, _),
        e(t, n),
        e(n, d),
        e(d, v),
        e(d, b),
        e(d, o),
        e(o, y),
        e(n, T),
        e(n, w),
        e(w, f);
    },
    p(c, [_]) {
      _ & 1 && de(v, c[0]), _ & 2 && de(y, c[1]), _ & 4 && de(f, c[2]);
    },
    i: fe,
    o: fe,
    d(c) {
      c && l(t);
    },
  };
}
function yt(h, t, n) {
  let { normalText: d } = t,
    { highlightedText: v } = t,
    { message: b } = t;
  return (
    (h.$$set = (o) => {
      "normalText" in o && n(0, (d = o.normalText)),
        "highlightedText" in o && n(1, (v = o.highlightedText)),
        "message" in o && n(2, (b = o.message));
    }),
    [d, v, b]
  );
}
class we extends Ze {
  constructor(t) {
    super();
    et(this, t, yt, bt, tt, { normalText: 0, highlightedText: 1, message: 2 });
  }
}
function wt(h) {
  let t, n, d, v, b, o, y, T, w;
  return {
    c() {
      (t = a("div")),
        (n = a("div")),
        (d = g(h[0])),
        (v = m()),
        (b = a("div")),
        (o = g(h[1])),
        (y = m()),
        (T = a("div")),
        (w = g(h[2])),
        this.h();
    },
    l(f) {
      t = s(f, "DIV", { class: !0 });
      var c = i(t);
      n = s(c, "DIV", { class: !0 });
      var _ = i(n);
      (d = p(_, h[0])),
        _.forEach(l),
        (v = u(c)),
        (b = s(c, "DIV", { class: !0 }));
      var $ = i(b);
      (o = p($, h[1])),
        $.forEach(l),
        (y = u(c)),
        (T = s(c, "DIV", { class: !0 }));
      var D = i(T);
      (w = p(D, h[2])), D.forEach(l), c.forEach(l), this.h();
    },
    h() {
      r(n, "class", "text-3xl tablet:text-4xl font-bold text-blue-500"),
        r(b, "class", "text-xl tablet:text-2xl font-light"),
        r(T, "class", "text-base tablet:text-xl font-normal leading-5"),
        r(t, "class", "flex flex-col space-y-2");
    },
    m(f, c) {
      at(f, t, c),
        e(t, n),
        e(n, d),
        e(t, v),
        e(t, b),
        e(b, o),
        e(t, y),
        e(t, T),
        e(T, w);
    },
    p(f, [c]) {
      c & 1 && de(d, f[0]), c & 2 && de(o, f[1]), c & 4 && de(w, f[2]);
    },
    i: fe,
    o: fe,
    d(f) {
      f && l(t);
    },
  };
}
function _t(h, t, n) {
  let { primaryText: d } = t,
    { secondaryText: v } = t,
    { message: b } = t;
  return (
    (h.$$set = (o) => {
      "primaryText" in o && n(0, (d = o.primaryText)),
        "secondaryText" in o && n(1, (v = o.secondaryText)),
        "message" in o && n(2, (b = o.message));
    }),
    [d, v, b]
  );
}
class Ye extends Ze {
  constructor(t) {
    super();
    et(this, t, _t, wt, tt, { primaryText: 0, secondaryText: 1, message: 2 });
  }
}
function Tt(h) {
  let t,
    n,
    d,
    v,
    b,
    o,
    y,
    T,
    w,
    f,
    c,
    _,
    $,
    D,
    X,
    Y,
    j,
    S,
    _e,
    Te,
    De,
    Ee,
    Ie,
    Z,
    N,
    st,
    Ve,
    q,
    ee,
    $e,
    ke,
    k,
    P,
    Ce,
    W,
    Se,
    R,
    je,
    A,
    te,
    qe,
    Ae,
    I,
    H,
    Oe,
    L,
    Be,
    M,
    Ne,
    U,
    Pe,
    C,
    ae,
    We,
    Re,
    me,
    He,
    Le,
    se,
    Me,
    Ue,
    V,
    le,
    ze,
    Ge,
    re,
    Je,
    Fe,
    ie,
    Ke,
    Qe,
    ne,
    Xe,
    he;
  return (
    (P = new Ye({
      props: {
        primaryText: "250,000+",
        secondaryText: "Canadians",
        message:
          "Enable a quarter million Canadians make doctor appointments by simplifying the search and appointment booking experience.",
      },
    })),
    (W = new Ye({
      props: {
        primaryText: "10,000+",
        secondaryText: "Providers",
        message:
          "Onboard 10,000 medical practitioners and give them the tools to enable them to deliver a superior patient booking workflow.",
      },
    })),
    (R = new Ye({
      props: {
        primaryText: "500+",
        secondaryText: "Towns/Cities",
        message:
          "Expand SalusConnect\u2019s covergage to over 500 municipalities across Canada.",
      },
    })),
    (H = new we({
      props: {
        normalText: "Live with",
        highlightedText: "Integrity",
        message:
          "Whether it is in our personal lives or it is at SalusConnect, integrity is something we choose to live by every moment and every day.",
      },
    })),
    (L = new we({
      props: {
        normalText: "Operate with",
        highlightedText: "Respect",
        message:
          "Problemsolving is an art that requires relentless commitment. We will put our best foot forward to solve every challenge we face.",
      },
    })),
    (M = new we({
      props: {
        normalText: "Serve with",
        highlightedText: "Passion",
        message:
          "Whether it is Candians, the medical community, or our partners, at every step you will see that we are genuinely passionate.",
      },
    })),
    (U = new we({
      props: {
        normalText: "Succeed with",
        highlightedText: "Hardwork",
        message:
          "There is no shortcut to success. We\u2019re thankful for the opportunity to serve Canadians and we\u2019ll work hard to make it count.",
      },
    })),
    {
      c() {
        (t = a("div")),
          (n = a("div")),
          (d = a("div")),
          (v = a("h1")),
          (b = g("About")),
          (o = m()),
          (y = a("h1")),
          (T = g("us")),
          (w = m()),
          (f = a("div")),
          (c = a("span")),
          (_ = g(
            "Sometimes we start with the simplest of ideas that emerge from our own experiences."
          )),
          ($ = m()),
          (D = a("span")),
          (X = g(
            "And that is exactly how SalusConnect came to life in 2022 - to create a simple way for Canadians to find medical appointments when we need them."
          )),
          (Y = m()),
          (j = a("div")),
          (S = a("div")),
          (_e = g(
            "Our healthcare system is admired around the world. Based on the principles of equity and community, it is a shining beacon of what is possible when possibility meets intent."
          )),
          (Te = a("br")),
          (De = a("br")),
          (Ee = g(
            "We are using our own experience as everyday people to make it a little better for everyone."
          )),
          (Ie = m()),
          (Z = a("div")),
          (N = a("img")),
          (Ve = m()),
          (q = a("div")),
          (ee = a("div")),
          ($e = g("our starter goals")),
          (ke = m()),
          (k = a("div")),
          z(P.$$.fragment),
          (Ce = m()),
          z(W.$$.fragment),
          (Se = m()),
          z(R.$$.fragment),
          (je = m()),
          (A = a("div")),
          (te = a("div")),
          (qe = g("Our Values")),
          (Ae = m()),
          (I = a("div")),
          z(H.$$.fragment),
          (Oe = m()),
          z(L.$$.fragment),
          (Be = m()),
          z(M.$$.fragment),
          (Ne = m()),
          z(U.$$.fragment),
          (Pe = m()),
          (C = a("div")),
          (ae = a("div")),
          (We = g("Do you share and live by our core values?")),
          (Re = m()),
          (me = a("div")),
          (He = g("Check out our Careers page.")),
          (Le = m()),
          (se = a("button")),
          (Me = g("Careers")),
          (Ue = m()),
          (V = a("div")),
          (le = a("div")),
          (ze = g(
            "Can your medical practice benefit from joining SalusConnect?"
          )),
          (Ge = m()),
          (re = a("div")),
          (Je = g(
            "It\u2019s highly probable. Decide for yourself by learning more or apply to join."
          )),
          (Fe = m()),
          (ie = a("button")),
          (Ke = g("Learn More")),
          (Qe = m()),
          (ne = a("button")),
          (Xe = g("Request to join")),
          this.h();
      },
      l(x) {
        t = s(x, "DIV", { class: !0 });
        var E = i(t);
        n = s(E, "DIV", { class: !0 });
        var ve = i(n);
        d = s(ve, "DIV", { class: !0 });
        var xe = i(d);
        v = s(xe, "H1", { class: !0 });
        var lt = i(v);
        (b = p(lt, "About")),
          lt.forEach(l),
          (o = u(xe)),
          (y = s(xe, "H1", { class: !0 }));
        var rt = i(y);
        (T = p(rt, "us")),
          rt.forEach(l),
          xe.forEach(l),
          (w = u(ve)),
          (f = s(ve, "DIV", { class: !0 }));
        var ge = i(f);
        c = s(ge, "SPAN", { class: !0 });
        var it = i(c);
        (_ = p(
          it,
          "Sometimes we start with the simplest of ideas that emerge from our own experiences."
        )),
          it.forEach(l),
          ($ = u(ge)),
          (D = s(ge, "SPAN", { class: !0 }));
        var nt = i(D);
        (X = p(
          nt,
          "And that is exactly how SalusConnect came to life in 2022 - to create a simple way for Canadians to find medical appointments when we need them."
        )),
          nt.forEach(l),
          ge.forEach(l),
          ve.forEach(l),
          (Y = u(E)),
          (j = s(E, "DIV", { class: !0 }));
        var pe = i(j);
        S = s(pe, "DIV", { class: !0 });
        var ue = i(S);
        (_e = p(
          ue,
          "Our healthcare system is admired around the world. Based on the principles of equity and community, it is a shining beacon of what is possible when possibility meets intent."
        )),
          (Te = s(ue, "BR", {})),
          (De = s(ue, "BR", {})),
          (Ee = p(
            ue,
            "We are using our own experience as everyday people to make it a little better for everyone."
          )),
          ue.forEach(l),
          (Ie = u(pe)),
          (Z = s(pe, "DIV", { class: !0 }));
        var ot = i(Z);
        (N = s(ot, "IMG", { class: !0, src: !0, alt: !0 })),
          ot.forEach(l),
          pe.forEach(l),
          (Ve = u(E)),
          (q = s(E, "DIV", { class: !0 }));
        var be = i(q);
        ee = s(be, "DIV", { class: !0 });
        var ct = i(ee);
        ($e = p(ct, "our starter goals")),
          ct.forEach(l),
          (ke = u(be)),
          (k = s(be, "DIV", { class: !0 }));
        var oe = i(k);
        G(P.$$.fragment, oe),
          (Ce = u(oe)),
          G(W.$$.fragment, oe),
          (Se = u(oe)),
          G(R.$$.fragment, oe),
          oe.forEach(l),
          be.forEach(l),
          (je = u(E)),
          (A = s(E, "DIV", { class: !0 }));
        var ye = i(A);
        te = s(ye, "DIV", { class: !0 });
        var dt = i(te);
        (qe = p(dt, "Our Values")),
          dt.forEach(l),
          (Ae = u(ye)),
          (I = s(ye, "DIV", { class: !0 }));
        var O = i(I);
        G(H.$$.fragment, O),
          (Oe = u(O)),
          G(L.$$.fragment, O),
          (Be = u(O)),
          G(M.$$.fragment, O),
          (Ne = u(O)),
          G(U.$$.fragment, O),
          O.forEach(l),
          ye.forEach(l),
          (Pe = u(E)),
          (C = s(E, "DIV", { class: !0 }));
        var ce = i(C);
        ae = s(ce, "DIV", { class: !0 });
        var mt = i(ae);
        (We = p(mt, "Do you share and live by our core values?")),
          mt.forEach(l),
          (Re = u(ce)),
          (me = s(ce, "DIV", {}));
        var ut = i(me);
        (He = p(ut, "Check out our Careers page.")),
          ut.forEach(l),
          (Le = u(ce)),
          (se = s(ce, "BUTTON", { class: !0 }));
        var ft = i(se);
        (Me = p(ft, "Careers")),
          ft.forEach(l),
          ce.forEach(l),
          (Ue = u(E)),
          (V = s(E, "DIV", { class: !0 }));
        var B = i(V);
        le = s(B, "DIV", { class: !0 });
        var ht = i(le);
        (ze = p(
          ht,
          "Can your medical practice benefit from joining SalusConnect?"
        )),
          ht.forEach(l),
          (Ge = u(B)),
          (re = s(B, "DIV", { class: !0 }));
        var vt = i(re);
        (Je = p(
          vt,
          "It\u2019s highly probable. Decide for yourself by learning more or apply to join."
        )),
          vt.forEach(l),
          (Fe = u(B)),
          (ie = s(B, "BUTTON", { class: !0 }));
        var xt = i(ie);
        (Ke = p(xt, "Learn More")),
          xt.forEach(l),
          (Qe = u(B)),
          (ne = s(B, "BUTTON", { class: !0 }));
        var gt = i(ne);
        (Xe = p(gt, "Request to join")),
          gt.forEach(l),
          B.forEach(l),
          E.forEach(l),
          this.h();
      },
      h() {
        r(v, "class", ""),
          r(y, "class", "text-blue-500"),
          r(d, "class", "w-1/3 text-4xl tablet:text-5xl text-center font-bold"),
          r(c, "class", "text-xl tablet:text-2xl tablet:tracking-wide"),
          r(D, "class", "text-xl tablet:text-2xl tablet:tracking-wide"),
          r(
            f,
            "class",
            "w-2/3 flex flex-col text-xl tablet:text-2xl font-light mr-5 space-y-4"
          ),
          r(
            n,
            "class",
            "flex justify-center items-center mx-5 tablet:mx-8 desktop:mx-40"
          ),
          r(S, "class", "w-2/3 text-xl tablet:text-2xl tablet:tracking-wide"),
          r(N, "class", "aspect-square m-auto"),
          pt(N.src, (st = "/heart-puzzle.png")) || r(N, "src", st),
          r(N, "alt", "details"),
          r(Z, "class", "w-1/3"),
          r(
            j,
            "class",
            "flex text-sm font-light justify-center items-center leading-4 mx-5 tablet:mx-8 desktop:mx-40"
          ),
          r(ee, "class", "w-1/3 text-left text-3xl tablet:text-5xl font-bold"),
          r(k, "class", "w-2/3 flex flex-col space-y-8"),
          r(
            q,
            "class",
            "flex justify-center items-center mx-5 tablet:mx-8 desktop:mx-40"
          ),
          r(te, "class", "text-4xl font-bold"),
          r(
            I,
            "class",
            "flex flex-col space-y-6 tablet:flex-row tablet:space-x-5 tablet:space-y-0"
          ),
          r(
            A,
            "class",
            "flex flex-col mx-5 space-y-6 tablet:mx-8 desktop:mx-40"
          ),
          r(ae, "class", "text-2xl font-bold text-center"),
          r(se, "class", "p-3 bg-blue-500 rounded-md"),
          r(
            C,
            "class",
            "flex flex-col space-y-3 items-center mx-5 tablet:mx-8 desktop:mx-40"
          ),
          r(le, "class", "text-2xl font-bold text-center"),
          r(re, "class", "text-center leading-6"),
          r(ie, "class", "px-5 py-3 bg-gray-800 text-white rounded-md"),
          r(ne, "class", "px-5 py-3 bg-gray-800 text-white rounded-md"),
          r(
            V,
            "class",
            "flex flex-col space-y-6 items-center mx-5 tablet:mx-8"
          ),
          r(t, "class", "flex flex-col space-y-6");
      },
      m(x, E) {
        at(x, t, E),
          e(t, n),
          e(n, d),
          e(d, v),
          e(v, b),
          e(d, o),
          e(d, y),
          e(y, T),
          e(n, w),
          e(n, f),
          e(f, c),
          e(c, _),
          e(f, $),
          e(f, D),
          e(D, X),
          e(t, Y),
          e(t, j),
          e(j, S),
          e(S, _e),
          e(S, Te),
          e(S, De),
          e(S, Ee),
          e(j, Ie),
          e(j, Z),
          e(Z, N),
          e(t, Ve),
          e(t, q),
          e(q, ee),
          e(ee, $e),
          e(q, ke),
          e(q, k),
          J(P, k, null),
          e(k, Ce),
          J(W, k, null),
          e(k, Se),
          J(R, k, null),
          e(t, je),
          e(t, A),
          e(A, te),
          e(te, qe),
          e(A, Ae),
          e(A, I),
          J(H, I, null),
          e(I, Oe),
          J(L, I, null),
          e(I, Be),
          J(M, I, null),
          e(I, Ne),
          J(U, I, null),
          e(t, Pe),
          e(t, C),
          e(C, ae),
          e(ae, We),
          e(C, Re),
          e(C, me),
          e(me, He),
          e(C, Le),
          e(C, se),
          e(se, Me),
          e(t, Ue),
          e(t, V),
          e(V, le),
          e(le, ze),
          e(V, Ge),
          e(V, re),
          e(re, Je),
          e(V, Fe),
          e(V, ie),
          e(ie, Ke),
          e(V, Qe),
          e(V, ne),
          e(ne, Xe),
          (he = !0);
      },
      p: fe,
      i(x) {
        he ||
          (F(P.$$.fragment, x),
          F(W.$$.fragment, x),
          F(R.$$.fragment, x),
          F(H.$$.fragment, x),
          F(L.$$.fragment, x),
          F(M.$$.fragment, x),
          F(U.$$.fragment, x),
          (he = !0));
      },
      o(x) {
        K(P.$$.fragment, x),
          K(W.$$.fragment, x),
          K(R.$$.fragment, x),
          K(H.$$.fragment, x),
          K(L.$$.fragment, x),
          K(M.$$.fragment, x),
          K(U.$$.fragment, x),
          (he = !1);
      },
      d(x) {
        x && l(t), Q(P), Q(W), Q(R), Q(H), Q(L), Q(M), Q(U);
      },
    }
  );
}
const Et = !0;
class It extends Ze {
  constructor(t) {
    super();
    et(this, t, null, Tt, tt, {});
  }
}
export { It as default, Et as prerender };
