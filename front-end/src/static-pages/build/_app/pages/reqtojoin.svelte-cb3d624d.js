import {
  S as Bt,
  i as Gt,
  s as Ht,
  e as a,
  c as i,
  b as t,
  g as Ft,
  J as Et,
  d as l,
  t as u,
  k as d,
  w as v,
  a as s,
  h as m,
  m as c,
  x,
  I as e,
  y as g,
  q as $,
  o as y,
  B as b,
} from "../chunks/vendor-dc0336cb.js";
function Lt(W) {
  let r;
  return {
    c() {
      (r = a("input")), this.h();
    },
    l(f) {
      (r = i(f, "INPUT", {
        class: !0,
        type: !0,
        size: !0,
        id: !0,
        placeholder: !0,
      })),
        this.h();
    },
    h() {
      t(
        r,
        "class",
        "border rounded w-full border-gray-400 py-2 placeholder:text-xs placeholder:indent-2"
      ),
        t(r, "type", "text"),
        t(r, "size", "30"),
        t(r, "id", W[0]),
        t(r, "placeholder", W[1]);
    },
    m(f, h) {
      Ft(f, r, h);
    },
    p(f, [h]) {
      h & 1 && t(r, "id", f[0]), h & 2 && t(r, "placeholder", f[1]);
    },
    i: Et,
    o: Et,
    d(f) {
      f && l(r);
    },
  };
}
function Kt(W, r, f) {
  let { id: h } = r,
    { placeholder: Y } = r;
  return (
    (W.$$set = (_) => {
      "id" in _ && f(0, (h = _.id)),
        "placeholder" in _ && f(1, (Y = _.placeholder));
    }),
    [h, Y]
  );
}
class w extends Bt {
  constructor(r) {
    super();
    Gt(this, r, Kt, Lt, Ht, { id: 0, placeholder: 1 });
  }
}
function Qt(W) {
  let r,
    f,
    h,
    Y,
    _,
    Pe,
    Te,
    Z,
    Ne,
    qe,
    V,
    S,
    ee,
    Ae,
    Ce,
    te,
    We,
    Oe,
    D,
    o,
    O,
    Re,
    R,
    Je,
    J,
    Me,
    M,
    Ue,
    U,
    ze,
    z,
    Be,
    B,
    Ge,
    G,
    He,
    H,
    Fe,
    F,
    Le,
    L,
    Ke,
    K,
    Qe,
    Q,
    Xe,
    k,
    j,
    xe,
    Ye,
    he,
    Ze,
    et,
    P,
    ge,
    tt,
    ve,
    at,
    it,
    ae,
    ie,
    lt,
    st,
    T,
    le,
    nt,
    rt,
    I,
    N,
    se,
    ot,
    dt,
    ne,
    ct,
    pt,
    q,
    re,
    ft,
    ut,
    oe,
    mt,
    ht,
    A,
    de,
    vt,
    xt,
    ce,
    gt,
    $t,
    C,
    pe,
    yt,
    bt,
    X,
    wt,
    fe,
    _t,
    $e;
  return (
    (O = new w({ props: { id: "firstName", placeholder: "First Name" } })),
    (R = new w({ props: { id: "lastName", placeholder: "Last Name" } })),
    (J = new w({ props: { id: "phNumber", placeholder: "Phone number" } })),
    (M = new w({ props: { id: "email", placeholder: "Email" } })),
    (U = new w({ props: { id: "practiceName", placeholder: "PracticeName" } })),
    (z = new w({
      props: { id: "practiceType", placeholder: "Practice Type" },
    })),
    (B = new w({ props: { id: "location", placeholder: "Town/City" } })),
    (G = new w({ props: { id: "province", placeholder: "Province" } })),
    (H = new w({
      props: {
        id: "activePractitioners",
        placeholder: "Number of active practitioners",
      },
    })),
    (F = new w({
      props: {
        id: "activeStaffMembers",
        placeholder: "Number of active staff members",
      },
    })),
    (L = new w({
      props: {
        id: "useAppointmentSystem",
        placeholder: " Do you currently use an appointment system?",
      },
    })),
    (K = new w({
      props: {
        id: "preferredTime",
        placeholder: "Preferred time to speak on phone",
      },
    })),
    (Q = new w({
      props: {
        id: "isDecisionMaker",
        placeholder: "Are you the decision maker",
      },
    })),
    {
      c() {
        (r = a("div")),
          (f = a("div")),
          (h = a("div")),
          (Y = u("Request ")),
          (_ = a("span")),
          (Pe = u("to join")),
          (Te = d()),
          (Z = a("div")),
          (Ne =
            u(`To protect the patient community, we require medical practitioners, clinics and institutions to undergo a simple verification process before they can get listed on SalusConnect and start using the platform.\r
\r
            Please note SalusConnect is only available to Canadian-licensed medical professionals.`)),
          (qe = d()),
          (V = a("div")),
          (S = a("div")),
          (ee = a("div")),
          (Ae = u("Join the SalusConnect Medical Community")),
          (Ce = d()),
          (te = a("div")),
          (We = u("Share a few details and we will get you going.")),
          (Oe = d()),
          (D = a("div")),
          (o = a("div")),
          v(O.$$.fragment),
          (Re = d()),
          v(R.$$.fragment),
          (Je = d()),
          v(J.$$.fragment),
          (Me = d()),
          v(M.$$.fragment),
          (Ue = d()),
          v(U.$$.fragment),
          (ze = d()),
          v(z.$$.fragment),
          (Be = d()),
          v(B.$$.fragment),
          (Ge = d()),
          v(G.$$.fragment),
          (He = d()),
          v(H.$$.fragment),
          (Fe = d()),
          v(F.$$.fragment),
          (Le = d()),
          v(L.$$.fragment),
          (Ke = d()),
          v(K.$$.fragment),
          (Qe = d()),
          v(Q.$$.fragment),
          (Xe = d()),
          (k = a("div")),
          (j = a("div")),
          (xe = a("input")),
          (Ye = d()),
          (he = a("div")),
          (Ze = u(
            "I confirm that all information entered is accurate to the best of my knowledge."
          )),
          (et = d()),
          (P = a("div")),
          (ge = a("input")),
          (tt = d()),
          (ve = a("div")),
          (at = u(
            "I consent to be contacted by SalusConnect by phone and/or email."
          )),
          (it = d()),
          (ae = a("div")),
          (ie = a("button")),
          (lt = u("Submit Request")),
          (st = d()),
          (T = a("div")),
          (le = a("div")),
          (nt = u("what to expect next")),
          (rt = d()),
          (I = a("div")),
          (N = a("div")),
          (se = a("div")),
          (ot = u("1. We will get in touch with you")),
          (dt = d()),
          (ne = a("div")),
          (ct =
            u(`Our onboarding specialist will get in touch with you within 1-2 business days between 9am and 5pm EST at your preferred time window. Please expect the call to last approximately 15-20 minutes. \r
\r
                    Amongst other things, our onboarding specialist will discuss the subsciption plan best suited to your practice\u2019s needs. Don\u2019t forget to consider the annual plans that offer up to 15% off compared to subscriptions billed monthly.`)),
          (pt = d()),
          (q = a("div")),
          (re = a("div")),
          (ft = u("2. Get set up")),
          (ut = d()),
          (oe = a("div")),
          (mt = u(
            "Once verified, each member of your practice who is joining SalusConnect (including staff) must activate their account through the unique link they receive on their email and set a new password."
          )),
          (ht = d()),
          (A = a("div")),
          (de = a("div")),
          (vt = u("3. The world is your oyester")),
          (xt = d()),
          (ce = a("div")),
          (gt = u(
            "That\u2019s it! Start using the platform. We have built SalusConnect with tender loving care. We\u2019re confident that you will find it incredibly useful and productive."
          )),
          ($t = d()),
          (C = a("div")),
          (pe = a("div")),
          (yt = u("Have a question?")),
          (bt = d()),
          (X = a("div")),
          (wt = u("Please send us an email at ")),
          (fe = a("span")),
          (_t = u("onboard@salusconnect.ca")),
          this.h();
      },
      l(n) {
        r = i(n, "DIV", { class: !0 });
        var E = s(r);
        f = i(E, "DIV", { class: !0 });
        var ye = s(f);
        h = i(ye, "DIV", { class: !0 });
        var Dt = s(h);
        (Y = m(Dt, "Request ")), (_ = i(Dt, "SPAN", { class: !0 }));
        var Vt = s(_);
        (Pe = m(Vt, "to join")),
          Vt.forEach(l),
          Dt.forEach(l),
          (Te = c(ye)),
          (Z = i(ye, "DIV", { class: !0 }));
        var St = s(Z);
        (Ne = m(
          St,
          `To protect the patient community, we require medical practitioners, clinics and institutions to undergo a simple verification process before they can get listed on SalusConnect and start using the platform.\r
\r
            Please note SalusConnect is only available to Canadian-licensed medical professionals.`
        )),
          St.forEach(l),
          ye.forEach(l),
          (qe = c(E)),
          (V = i(E, "DIV", { class: !0 }));
        var be = s(V);
        S = i(be, "DIV", { class: !0 });
        var we = s(S);
        ee = i(we, "DIV", { class: !0 });
        var kt = s(ee);
        (Ae = m(kt, "Join the SalusConnect Medical Community")),
          kt.forEach(l),
          (Ce = c(we)),
          (te = i(we, "DIV", { class: !0 }));
        var jt = s(te);
        (We = m(jt, "Share a few details and we will get you going.")),
          jt.forEach(l),
          we.forEach(l),
          (Oe = c(be)),
          (D = i(be, "DIV", { class: !0 }));
        var ue = s(D);
        o = i(ue, "DIV", { class: !0 });
        var p = s(o);
        x(O.$$.fragment, p),
          (Re = c(p)),
          x(R.$$.fragment, p),
          (Je = c(p)),
          x(J.$$.fragment, p),
          (Me = c(p)),
          x(M.$$.fragment, p),
          (Ue = c(p)),
          x(U.$$.fragment, p),
          (ze = c(p)),
          x(z.$$.fragment, p),
          (Be = c(p)),
          x(B.$$.fragment, p),
          (Ge = c(p)),
          x(G.$$.fragment, p),
          (He = c(p)),
          x(H.$$.fragment, p),
          (Fe = c(p)),
          x(F.$$.fragment, p),
          (Le = c(p)),
          x(L.$$.fragment, p),
          (Ke = c(p)),
          x(K.$$.fragment, p),
          (Qe = c(p)),
          x(Q.$$.fragment, p),
          p.forEach(l),
          (Xe = c(ue)),
          (k = i(ue, "DIV", { class: !0 }));
        var _e = s(k);
        j = i(_e, "DIV", { class: !0 });
        var De = s(j);
        (xe = i(De, "INPUT", { type: !0 })),
          (Ye = c(De)),
          (he = i(De, "DIV", {}));
        var Pt = s(he);
        (Ze = m(
          Pt,
          "I confirm that all information entered is accurate to the best of my knowledge."
        )),
          Pt.forEach(l),
          De.forEach(l),
          (et = c(_e)),
          (P = i(_e, "DIV", { class: !0 }));
        var Ie = s(P);
        (ge = i(Ie, "INPUT", { type: !0 })),
          (tt = c(Ie)),
          (ve = i(Ie, "DIV", {}));
        var Tt = s(ve);
        (at = m(
          Tt,
          "I consent to be contacted by SalusConnect by phone and/or email."
        )),
          Tt.forEach(l),
          Ie.forEach(l),
          _e.forEach(l),
          (it = c(ue)),
          (ae = i(ue, "DIV", { class: !0 }));
        var Nt = s(ae);
        ie = i(Nt, "BUTTON", { class: !0 });
        var qt = s(ie);
        (lt = m(qt, "Submit Request")),
          qt.forEach(l),
          Nt.forEach(l),
          ue.forEach(l),
          be.forEach(l),
          (st = c(E)),
          (T = i(E, "DIV", { class: !0 }));
        var Ee = s(T);
        le = i(Ee, "DIV", { class: !0 });
        var At = s(le);
        (nt = m(At, "what to expect next")),
          At.forEach(l),
          (rt = c(Ee)),
          (I = i(Ee, "DIV", { class: !0 }));
        var me = s(I);
        N = i(me, "DIV", { class: !0 });
        var Ve = s(N);
        se = i(Ve, "DIV", { class: !0 });
        var Ct = s(se);
        (ot = m(Ct, "1. We will get in touch with you")),
          Ct.forEach(l),
          (dt = c(Ve)),
          (ne = i(Ve, "DIV", { class: !0 }));
        var Wt = s(ne);
        (ct = m(
          Wt,
          `Our onboarding specialist will get in touch with you within 1-2 business days between 9am and 5pm EST at your preferred time window. Please expect the call to last approximately 15-20 minutes. \r
\r
                    Amongst other things, our onboarding specialist will discuss the subsciption plan best suited to your practice\u2019s needs. Don\u2019t forget to consider the annual plans that offer up to 15% off compared to subscriptions billed monthly.`
        )),
          Wt.forEach(l),
          Ve.forEach(l),
          (pt = c(me)),
          (q = i(me, "DIV", { class: !0 }));
        var Se = s(q);
        re = i(Se, "DIV", { class: !0 });
        var Ot = s(re);
        (ft = m(Ot, "2. Get set up")),
          Ot.forEach(l),
          (ut = c(Se)),
          (oe = i(Se, "DIV", { class: !0 }));
        var Rt = s(oe);
        (mt = m(
          Rt,
          "Once verified, each member of your practice who is joining SalusConnect (including staff) must activate their account through the unique link they receive on their email and set a new password."
        )),
          Rt.forEach(l),
          Se.forEach(l),
          (ht = c(me)),
          (A = i(me, "DIV", { class: !0 }));
        var ke = s(A);
        de = i(ke, "DIV", { class: !0 });
        var Jt = s(de);
        (vt = m(Jt, "3. The world is your oyester")),
          Jt.forEach(l),
          (xt = c(ke)),
          (ce = i(ke, "DIV", { class: !0 }));
        var Mt = s(ce);
        (gt = m(
          Mt,
          "That\u2019s it! Start using the platform. We have built SalusConnect with tender loving care. We\u2019re confident that you will find it incredibly useful and productive."
        )),
          Mt.forEach(l),
          ke.forEach(l),
          me.forEach(l),
          Ee.forEach(l),
          ($t = c(E)),
          (C = i(E, "DIV", { class: !0 }));
        var je = s(C);
        pe = i(je, "DIV", { class: !0 });
        var Ut = s(pe);
        (yt = m(Ut, "Have a question?")),
          Ut.forEach(l),
          (bt = c(je)),
          (X = i(je, "DIV", { class: !0 }));
        var It = s(X);
        (wt = m(It, "Please send us an email at ")),
          (fe = i(It, "SPAN", { class: !0 }));
        var zt = s(fe);
        (_t = m(zt, "onboard@salusconnect.ca")),
          zt.forEach(l),
          It.forEach(l),
          je.forEach(l),
          E.forEach(l),
          this.h();
      },
      h() {
        t(_, "class", "text-blue-500"),
          t(h, "class", "font-bold text-2xl tablet:text-5xl desktop:text-7xl"),
          t(
            Z,
            "class",
            "whitespace-pre-line font-light text-sm tablet:text-xl"
          ),
          t(
            f,
            "class",
            "join-intro flex flex-row items-center space-x-8 py-4 bg-gradient-to-t from-blue-100 px-5 tablet:px-8 desktop:px-20 "
          ),
          t(ee, "class", "font-bold text-base tablet:text-xl "),
          t(te, "class", "text-sm tablet:text-base desktop:text-2xl"),
          t(S, "class", "flex flex-col text-center items-center"),
          t(o, "class", "flex flex-col items-center space-y-3"),
          t(xe, "type", "checkbox"),
          t(j, "class", "flex flex-row items-center justify-start space-x-3"),
          t(ge, "type", "checkbox"),
          t(P, "class", "flex flex-row items-center justify-center space-x-3"),
          t(k, "class", "flex flex-col space-y-4"),
          t(ie, "class", "bg-black text-white w-40 h-14 rounded-lg"),
          t(ae, "class", "flex flex-col items-center"),
          t(D, "class", "flex flex-col space-y-5 px-8"),
          t(V, "class", "join-form space-y-6 tablet:w-96"),
          t(le, "class", "font-bold text-4xl desktop:text-7xl"),
          t(se, "class", "font-bold text-lg tablet:text-2xl desktop:text-3xl"),
          t(
            ne,
            "class",
            "whitespace-pre-line text-sm tablet:text-lg desktop:text-xl"
          ),
          t(N, "class", "flex flex-col space-y-4"),
          t(re, "class", "font-bold text-lg tablet:text-2xl desktop:text-3xl"),
          t(
            oe,
            "class",
            "whitespace-pre-line text-sm tablet:text-lg desktop:text-xl"
          ),
          t(q, "class", "flex flex-col space-y-4"),
          t(de, "class", "font-bold text-lg tablet:text-2xl desktop:text-3xl"),
          t(
            ce,
            "class",
            "whitespace-pre-line text-sm tablet:text-lg desktop:text-xl"
          ),
          t(A, "class", "flex flex-col space-y-4"),
          t(I, "class", "flex flex-col space-y-4"),
          t(
            T,
            "class",
            "flex flex-col tablet:flex-row space-y-5 tablet:space-y-0 tablet:items-center tablet:space-x-8 px-5 tablet:px-8 desktop:px-20"
          ),
          t(pe, "class", "text-2xl tablet:text-4xl"),
          t(fe, "class", "font-bold"),
          t(X, "class", "text-sm tablet:text-xl"),
          t(C, "class", "space-y-5 text-center px-5 tablet:px-8 desktop:px-20"),
          t(
            r,
            "class",
            "join-layout flex flex-col items-center space-y-8 tablet:space-y-10 desktop:space-y-16"
          );
      },
      m(n, E) {
        Ft(n, r, E),
          e(r, f),
          e(f, h),
          e(h, Y),
          e(h, _),
          e(_, Pe),
          e(f, Te),
          e(f, Z),
          e(Z, Ne),
          e(r, qe),
          e(r, V),
          e(V, S),
          e(S, ee),
          e(ee, Ae),
          e(S, Ce),
          e(S, te),
          e(te, We),
          e(V, Oe),
          e(V, D),
          e(D, o),
          g(O, o, null),
          e(o, Re),
          g(R, o, null),
          e(o, Je),
          g(J, o, null),
          e(o, Me),
          g(M, o, null),
          e(o, Ue),
          g(U, o, null),
          e(o, ze),
          g(z, o, null),
          e(o, Be),
          g(B, o, null),
          e(o, Ge),
          g(G, o, null),
          e(o, He),
          g(H, o, null),
          e(o, Fe),
          g(F, o, null),
          e(o, Le),
          g(L, o, null),
          e(o, Ke),
          g(K, o, null),
          e(o, Qe),
          g(Q, o, null),
          e(D, Xe),
          e(D, k),
          e(k, j),
          e(j, xe),
          e(j, Ye),
          e(j, he),
          e(he, Ze),
          e(k, et),
          e(k, P),
          e(P, ge),
          e(P, tt),
          e(P, ve),
          e(ve, at),
          e(D, it),
          e(D, ae),
          e(ae, ie),
          e(ie, lt),
          e(r, st),
          e(r, T),
          e(T, le),
          e(le, nt),
          e(T, rt),
          e(T, I),
          e(I, N),
          e(N, se),
          e(se, ot),
          e(N, dt),
          e(N, ne),
          e(ne, ct),
          e(I, pt),
          e(I, q),
          e(q, re),
          e(re, ft),
          e(q, ut),
          e(q, oe),
          e(oe, mt),
          e(I, ht),
          e(I, A),
          e(A, de),
          e(de, vt),
          e(A, xt),
          e(A, ce),
          e(ce, gt),
          e(r, $t),
          e(r, C),
          e(C, pe),
          e(pe, yt),
          e(C, bt),
          e(C, X),
          e(X, wt),
          e(X, fe),
          e(fe, _t),
          ($e = !0);
      },
      p: Et,
      i(n) {
        $e ||
          ($(O.$$.fragment, n),
          $(R.$$.fragment, n),
          $(J.$$.fragment, n),
          $(M.$$.fragment, n),
          $(U.$$.fragment, n),
          $(z.$$.fragment, n),
          $(B.$$.fragment, n),
          $(G.$$.fragment, n),
          $(H.$$.fragment, n),
          $(F.$$.fragment, n),
          $(L.$$.fragment, n),
          $(K.$$.fragment, n),
          $(Q.$$.fragment, n),
          ($e = !0));
      },
      o(n) {
        y(O.$$.fragment, n),
          y(R.$$.fragment, n),
          y(J.$$.fragment, n),
          y(M.$$.fragment, n),
          y(U.$$.fragment, n),
          y(z.$$.fragment, n),
          y(B.$$.fragment, n),
          y(G.$$.fragment, n),
          y(H.$$.fragment, n),
          y(F.$$.fragment, n),
          y(L.$$.fragment, n),
          y(K.$$.fragment, n),
          y(Q.$$.fragment, n),
          ($e = !1);
      },
      d(n) {
        n && l(r),
          b(O),
          b(R),
          b(J),
          b(M),
          b(U),
          b(z),
          b(B),
          b(G),
          b(H),
          b(F),
          b(L),
          b(K),
          b(Q);
      },
    }
  );
}
class Yt extends Bt {
  constructor(r) {
    super();
    Gt(this, r, null, Qt, Ht, {});
  }
}
export { Yt as default };
