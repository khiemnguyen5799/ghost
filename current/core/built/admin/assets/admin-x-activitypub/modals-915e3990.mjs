import { u as he, a as xe, c as o, j as t, H as X, b as fe, d as ne, e as be, f as B, g as z, B as K, h as we, N as E, S as ge, s as ye, i as ve, n as re, p as ke, k as je, l as Fe, m as se, o as Me, q as Y, r as D, A as G, t as Re, L as ie, v as ae, w as Z, x as le, y as ce } from "./index-f3a8baa8.mjs";
const Ce = ({
  type: r = "text",
  inputRef: s,
  title: e,
  hideTitle: n,
  value: a,
  error: i,
  placeholder: u,
  rightPlaceholder: c,
  hint: l,
  onChange: h,
  onFocus: x,
  onBlur: w,
  clearBg: k = !1,
  className: j = "",
  maxLength: F,
  containerClassName: S = "",
  hintClassName: y = "",
  unstyled: f = !1,
  disabled: U,
  ...M
}) => {
  const T = he(), { setFocusState: H } = xe(), _ = (C) => {
    x == null || x(C), H(!0);
  }, I = (C) => {
    w == null || w(C), H(!1);
  }, P = o(
    "relative order-2 flex w-full items-center",
    e && !n && "mt-1.5"
  ), q = !f && o(
    "absolute inset-0 rounded-lg border text-grey-300 transition-colors peer-hover:bg-grey-100 peer-focus:border-green peer-focus:bg-white peer-focus:shadow-[0_0_0_2px_rgba(48,207,67,.25)] dark:peer-hover:bg-grey-925 dark:peer-focus:bg-grey-950",
    i ? "border-red bg-white dark:bg-grey-925" : "border-transparent bg-grey-150 dark:bg-grey-900",
    U && "bg-grey-50 peer-hover:bg-grey-50 dark:bg-grey-950 dark:peer-hover:bg-grey-950"
  ), R = !f && o(
    "peer z-[1] order-2 h-9 w-full bg-transparent px-3 py-1.5 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-[38px] md:py-2 md:text-md",
    U ? "cursor-not-allowed text-grey-600 opacity-60 dark:text-grey-800" : "dark:text-white",
    c ? "w-0 grow rounded-l-lg" : "rounded-lg",
    j
  ), Q = !f && o(
    "z-[1] order-3 rounded-r-lg",
    c ? typeof c == "string" ? "flex h-8 items-center py-1 pr-3 text-right text-sm text-grey-500 md:h-9 md:text-base" : "h-9 pr-1" : "pr-2"
  );
  let v = /* @__PURE__ */ t.jsx(t.Fragment, {});
  const W = /* @__PURE__ */ t.jsx(
    "input",
    {
      ref: s,
      className: R || j,
      disabled: U,
      id: T,
      maxLength: F,
      placeholder: u,
      type: r,
      value: a,
      onBlur: I,
      onChange: h,
      onFocus: _,
      ...M
    }
  );
  return v = /* @__PURE__ */ t.jsxs("div", { className: P, children: [
    W,
    !f && !k && /* @__PURE__ */ t.jsx("div", { className: q || "" }),
    c && /* @__PURE__ */ t.jsx("span", { className: Q || "", children: c })
  ] }), y = o(
    "order-3",
    y
  ), S = o(
    "flex flex-col",
    S
  ), e || l ? /* @__PURE__ */ t.jsxs("div", { className: S, children: [
    v,
    e && /* @__PURE__ */ t.jsx(X, { className: n ? "sr-only" : "order-1", htmlFor: T, useLabelTag: !0, children: e }),
    l && /* @__PURE__ */ t.jsx(fe, { className: y, color: i ? "red" : "default", children: l })
  ] }) : v;
}, Le = ({
  shiftY: r,
  footerBgColorClass: s = "bg-white dark:bg-black",
  contentBgColorClass: e = "bg-white dark:bg-black",
  height: n = 96,
  children: a
}) => {
  const i = o(
    "w-100 sticky bottom-[-24px] z-[297] m-0 box-border p-0"
  ), u = r ? `calc(${r} - 24px)` : "-24px", c = `${n + 24}px`, l = o(
    "sticky z-[298] block h-[24px]",
    e
  ), h = "0", x = o(
    "sticky z-[299] mb-[-24px] flex items-center justify-between",
    "h-[96px]",
    s
  ), w = "0", k = `${n}px`, j = "sticky mx-2 block h-[24px] rounded-full shadow-[0_0_0_1px_rgba(0,0,0,.025),0_-8px_16px_-3px_rgba(0,0,0,.08)]", F = r ? `calc(${r} + ${n - 24}px)` : `${n - 24}px`;
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: i,
      style: {
        bottom: u,
        height: c
      },
      children: [
        /* @__PURE__ */ t.jsx(
          "div",
          {
            className: l,
            style: {
              bottom: h
            }
          }
        ),
        /* @__PURE__ */ t.jsx(
          "div",
          {
            className: x,
            style: {
              bottom: w,
              height: k
            },
            children: a
          }
        ),
        /* @__PURE__ */ t.jsx(
          "div",
          {
            className: j,
            style: {
              bottom: F
            }
          }
        )
      ]
    }
  );
};
function oe(r, s, e = {}) {
  r ? E.show(Se, {
    title: "Are you sure you want to leave this page?",
    prompt: /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsx("p", { children: "Hey there! It looks like you didn't save the changes you made." }),
      /* @__PURE__ */ t.jsx("p", { children: "Save before you go!" })
    ] }),
    okLabel: "Leave",
    cancelLabel: "Stay",
    okColor: "red",
    onOk: (n) => {
      s(), n == null || n.remove();
    },
    ...e
  }) : s();
}
const Ne = "bg-[rgba(98,109,121,0.2)] backdrop-blur-[3px]", V = ({
  size: r = "md",
  width: s,
  height: e,
  testId: n,
  title: a,
  okLabel: i = "OK",
  okLoading: u = !1,
  cancelLabel: c = "Cancel",
  footer: l,
  header: h,
  leftButtonProps: x,
  buttonsDisabled: w,
  okDisabled: k,
  padding: j = !0,
  onOk: F,
  okColor: S = "black",
  onCancel: y,
  topRightContent: f,
  hideXOnMobile: U = !1,
  afterClose: M,
  children: T,
  backDrop: H = !0,
  backDropClick: _ = !0,
  stickyFooter: I = !1,
  stickyHeader: P = !1,
  scrolling: q = !0,
  dirty: R = !1,
  animate: Q = !0,
  formSheet: v = !1,
  enableCMDS: W = !0
}) => {
  const C = ne(), { setGlobalDirtyState: ee } = be(), [te, de] = B(!1);
  z(() => {
    ee(R);
  }, [R, ee]), z(() => {
    const g = (L) => {
      L.key === "Escape" && (document.activeElement && document.activeElement instanceof HTMLElement && document.activeElement.blur(), setTimeout(() => {
        y ? y() : oe(R, () => {
          C.remove(), M == null || M();
        });
      }), L.stopPropagation());
    };
    return document.addEventListener("keydown", g), () => {
      document.removeEventListener("keydown", g);
    };
  }, [C, R, M, y]), z(() => {
    const g = setTimeout(() => {
      de(!0);
    }, 250);
    return () => clearTimeout(g);
  }, []), z(() => {
    if (F) {
      const g = (L) => {
        (L.metaKey || L.ctrlKey) && L.key === "s" && (L.preventDefault(), F());
      };
      if (W)
        return window.addEventListener("keydown", g), () => {
          window.removeEventListener("keydown", g);
        };
    }
  });
  const $ = [];
  let O;
  const J = () => {
    oe(R, () => {
      C.remove(), M == null || M();
    });
  };
  l || (c && $.push({
    key: "cancel-modal",
    label: c,
    color: "outline",
    onClick: y || (() => {
      J();
    }),
    disabled: w
  }), i && $.push({
    key: "ok-modal",
    label: i,
    color: S,
    className: "min-w-[80px]",
    onClick: F,
    disabled: w || k,
    loading: u
  }));
  let m = o(
    "relative z-50 mx-auto flex max-h-[100%] w-full flex-col justify-between overflow-x-hidden bg-white dark:bg-black",
    r !== "bleed" && "rounded",
    v ? "shadow-md" : "shadow-xl",
    Q && !v && !te && "animate-modal-in",
    v && !te && "animate-modal-in-reverse",
    q ? "overflow-y-auto" : "overflow-y-hidden"
  ), p = o(
    "fixed inset-0 z-[1000] h-[100vh] w-[100vw]"
  ), b = "", d = o(
    !f || f === "close" ? "" : "flex items-center justify-between gap-5"
  );
  switch (P && (d = o(
    d,
    "sticky top-0 z-[200] -mb-4 bg-white !pb-4 dark:bg-black"
  )), r) {
    case "sm":
      m = o(
        m,
        "max-w-[480px]"
      ), p = o(
        p,
        "p-4 md:p-[8vmin]"
      ), b = "p-8", d = o(
        d,
        "-inset-x-8"
      );
      break;
    case "md":
      m = o(
        m,
        "max-w-[720px]"
      ), p = o(
        p,
        "p-4 md:p-[8vmin]"
      ), b = "p-8", d = o(
        d,
        "-inset-x-8"
      );
      break;
    case "lg":
      m = o(
        m,
        "max-w-[1020px]"
      ), p = o(
        p,
        "p-4 md:p-[4vmin]"
      ), b = "p-7", d = o(
        d,
        "-inset-x-8"
      );
      break;
    case "xl":
      m = o(
        m,
        "max-w-[1240px]0"
      ), p = o(
        p,
        "p-4 md:p-[3vmin]"
      ), b = "p-10", d = o(
        d,
        "-inset-x-10 -top-10"
      );
      break;
    case "full":
      m = o(
        m,
        "h-full"
      ), p = o(
        p,
        "p-4 md:p-[3vmin]"
      ), b = "p-10", d = o(
        d,
        "-inset-x-10"
      );
      break;
    case "bleed":
      m = o(
        m,
        "h-full"
      ), b = "p-10", d = o(
        d,
        "-inset-x-10"
      );
      break;
    default:
      p = o(
        p,
        "p-4 md:p-[8vmin]"
      ), b = "p-8", d = o(
        d,
        "-inset-x-8"
      );
      break;
  }
  j || (b = "p-0"), m = o(
    m
  ), d = o(
    d,
    b,
    "pb-0"
  ), O = o(
    b,
    "py-0"
  ), p = o(
    p,
    "max-[800px]:!pb-20"
  );
  const me = o(
    `${b} ${I ? "py-6" : ""}`,
    "flex w-full items-center justify-between"
  );
  O = o(
    O,
    (r === "full" || r === "bleed" || e === "full" || typeof e == "number") && "grow"
  );
  const pe = (g) => {
    g.target === g.currentTarget && _ && J();
  }, A = {};
  typeof s == "number" ? (A.width = "100%", A.maxWidth = s + "px") : s === "full" && (m = o(
    m,
    "w-full"
  )), typeof e == "number" ? (A.height = "100%", A.maxHeight = e + "px") : e === "full" && (m = o(
    m,
    "h-full"
  ));
  let N;
  return l ? N = l : l === !1 ? O += " pb-0 " : N = /* @__PURE__ */ t.jsxs("div", { className: me, children: [
    /* @__PURE__ */ t.jsx("div", { children: x && /* @__PURE__ */ t.jsx(K, { ...x }) }),
    /* @__PURE__ */ t.jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ t.jsx(we, { buttons: $ }) })
  ] }), N = I ? /* @__PURE__ */ t.jsx(Le, { height: 84, children: N }) : /* @__PURE__ */ t.jsx(t.Fragment, { children: N }), /* @__PURE__ */ t.jsxs("div", { className: p, id: "modal-backdrop", onMouseDown: pe, children: [
    /* @__PURE__ */ t.jsx("div", { className: o(
      "pointer-events-none fixed inset-0 z-0",
      H && !v && Ne,
      v && "bg-[rgba(98,109,121,0.08)]"
    ) }),
    /* @__PURE__ */ t.jsxs("section", { className: m, "data-testid": n, style: A, children: [
      h === !1 ? "" : !f || f === "close" ? /* @__PURE__ */ t.jsxs("header", { className: d, children: [
        a && /* @__PURE__ */ t.jsx(X, { level: 3, children: a }),
        /* @__PURE__ */ t.jsx("div", { className: `${f !== "close" && "md:!invisible md:!hidden"} ${U && "hidden"} absolute right-6 top-6`, children: /* @__PURE__ */ t.jsx(K, { className: "-m-2 cursor-pointer p-2 opacity-50 hover:opacity-100", icon: "close", iconColorClass: "text-black dark:text-white", size: "sm", testId: "close-modal", unstyled: !0, onClick: J }) })
      ] }) : /* @__PURE__ */ t.jsxs("header", { className: d, children: [
        a && /* @__PURE__ */ t.jsx(X, { level: 3, children: a }),
        f
      ] }),
      /* @__PURE__ */ t.jsx("div", { className: O, children: T }),
      N
    ] })
  ] });
}, Ee = ({
  title: r = "Are you sure?",
  prompt: s,
  cancelLabel: e = "Cancel",
  okLabel: n = "OK",
  okRunningLabel: a = "...",
  okColor: i = "black",
  onCancel: u,
  onOk: c,
  customFooter: l,
  formSheet: h = !0
}) => {
  const x = ne(), [w, k] = B("");
  return /* @__PURE__ */ t.jsx(
    V,
    {
      backDropClick: !1,
      buttonsDisabled: w === "running",
      cancelLabel: e,
      footer: l,
      formSheet: h,
      okColor: i,
      okLabel: w === "running" ? a : n,
      testId: "confirmation-modal",
      title: r,
      width: 540,
      onCancel: u,
      onOk: async () => {
        k("running");
        try {
          await (c == null ? void 0 : c(x));
        } catch (j) {
          console.error("Unhandled Promise Rejection. Make sure you catch errors in your onOk handler.", j);
        }
        k("");
      },
      children: /* @__PURE__ */ t.jsx("div", { className: "py-4 leading-9", children: s })
    }
  );
}, Se = E.create(Ee);
class Ue extends ge {
  constructor(s, e) {
    super(), this.client = s, this.setOptions(e), this.bindMethods(), this.updateResult();
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(s) {
    var e;
    const n = this.options;
    this.options = this.client.defaultMutationOptions(s), ye(n, this.options) || this.client.getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: this.currentMutation,
      observer: this
    }), (e = this.currentMutation) == null || e.setOptions(this.options);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var s;
      (s = this.currentMutation) == null || s.removeObserver(this);
    }
  }
  onMutationUpdate(s) {
    this.updateResult();
    const e = {
      listeners: !0
    };
    s.type === "success" ? e.onSuccess = !0 : s.type === "error" && (e.onError = !0), this.notify(e);
  }
  getCurrentResult() {
    return this.currentResult;
  }
  reset() {
    this.currentMutation = void 0, this.updateResult(), this.notify({
      listeners: !0
    });
  }
  mutate(s, e) {
    return this.mutateOptions = e, this.currentMutation && this.currentMutation.removeObserver(this), this.currentMutation = this.client.getMutationCache().build(this.client, {
      ...this.options,
      variables: typeof s < "u" ? s : this.options.variables
    }), this.currentMutation.addObserver(this), this.currentMutation.execute();
  }
  updateResult() {
    const s = this.currentMutation ? this.currentMutation.state : ve(), e = {
      ...s,
      isLoading: s.status === "loading",
      isSuccess: s.status === "success",
      isError: s.status === "error",
      isIdle: s.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    };
    this.currentResult = e;
  }
  notify(s) {
    re.batch(() => {
      if (this.mutateOptions && this.hasListeners()) {
        if (s.onSuccess) {
          var e, n, a, i;
          (e = (n = this.mutateOptions).onSuccess) == null || e.call(n, this.currentResult.data, this.currentResult.variables, this.currentResult.context), (a = (i = this.mutateOptions).onSettled) == null || a.call(i, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context);
        } else if (s.onError) {
          var u, c, l, h;
          (u = (c = this.mutateOptions).onError) == null || u.call(c, this.currentResult.error, this.currentResult.variables, this.currentResult.context), (l = (h = this.mutateOptions).onSettled) == null || l.call(h, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context);
        }
      }
      s.listeners && this.listeners.forEach(({
        listener: x
      }) => {
        x(this.currentResult);
      });
    });
  }
}
function ue(r, s, e) {
  const n = ke(r, s, e), a = je({
    context: n.context
  }), [i] = B(() => new Ue(a, n));
  z(() => {
    i.setOptions(n);
  }, [i, n]);
  const u = Fe(se((l) => i.subscribe(re.batchCalls(l)), [i]), () => i.getCurrentResult(), () => i.getCurrentResult()), c = se((l, h) => {
    i.mutate(l, h).catch(Oe);
  }, [i]);
  if (u.error && Me(i.options.useErrorBoundary, [u.error]))
    throw u.error;
  return {
    ...u,
    mutate: c,
    mutateAsync: u.mutate
  };
}
function Oe() {
}
function Ae(r, s, e) {
  var c;
  const a = (c = D().data) == null ? void 0 : c.site, i = (a == null ? void 0 : a.url) ?? window.location.origin, u = new G(
    new URL(i),
    new URL("/ghost/api/admin/identities/", window.location.origin),
    r
  );
  return ue({
    async mutationFn(l) {
      return u.follow(l);
    },
    onSuccess: s,
    onError: e
  });
}
const ze = E.create(() => {
  const { updateRoute: r } = Y(), s = E.useModal(), [e, n] = B(""), [a, i] = B(null);
  async function u() {
    Re({
      message: "Site followed",
      type: "success"
    }), s.remove(), r("");
  }
  async function c() {
    i(a);
  }
  const l = Ae("index", u, c);
  return /* @__PURE__ */ t.jsx(
    V,
    {
      afterClose: () => {
        l.reset(), r("");
      },
      cancelLabel: "Cancel",
      okLabel: "Follow",
      size: "sm",
      title: "Follow a Ghost site",
      onOk: () => l.mutate(e),
      children: /* @__PURE__ */ t.jsx("div", { className: "mt-3 flex flex-col gap-4", children: /* @__PURE__ */ t.jsx(
        Ce,
        {
          autoFocus: !0,
          error: !!a,
          hint: a,
          placeholder: "@username@hostname",
          title: "Profile name",
          value: e,
          "data-test-new-follower": !0,
          onChange: (h) => n(h.target.value)
        }
      ) })
    }
  );
});
function Be(r) {
  var i;
  const e = (i = D().data) == null ? void 0 : i.site, n = (e == null ? void 0 : e.url) ?? window.location.origin, a = new G(
    new URL(n),
    new URL("/ghost/api/admin/identities/", window.location.origin),
    r
  );
  return ce({
    queryKey: [`followers:${r}`],
    async queryFn() {
      return a.getFollowers();
    }
  });
}
function Te(r) {
  var i;
  const e = (i = D().data) == null ? void 0 : i.site, n = (e == null ? void 0 : e.url) ?? window.location.origin, a = new G(
    new URL(n),
    new URL("/ghost/api/admin/identities/", window.location.origin),
    r
  );
  return ue({
    async mutationFn(u) {
      return a.follow(u);
    }
  });
}
const He = ({}) => {
  const { updateRoute: r } = Y(), s = Te("index"), { data: e = [] } = Be("index"), n = Array.isArray(e) ? e : [e];
  return /* @__PURE__ */ t.jsx(
    V,
    {
      afterClose: () => {
        s.reset(), r("");
      },
      cancelLabel: "",
      footer: !1,
      okLabel: "",
      size: "md",
      title: "Followers",
      topRightContent: "close",
      children: /* @__PURE__ */ t.jsx("div", { className: "mt-3 flex flex-col gap-4 pb-12", children: /* @__PURE__ */ t.jsx(ie, { children: n.map((a) => /* @__PURE__ */ t.jsx(ae, { action: /* @__PURE__ */ t.jsx(K, { color: "grey", label: "Follow back", link: !0, onClick: () => s.mutate(Z(a)) }), avatar: /* @__PURE__ */ t.jsx(le, { image: a.icon, size: "sm" }), detail: Z(a), id: "list-item", title: a.name })) }) })
    }
  );
}, Ie = E.create(He);
function qe(r) {
  var i;
  const e = (i = D().data) == null ? void 0 : i.site, n = (e == null ? void 0 : e.url) ?? window.location.origin, a = new G(
    new URL(n),
    new URL("/ghost/api/admin/identities/", window.location.origin),
    r
  );
  return ce({
    queryKey: [`following:${r}`],
    async queryFn() {
      return a.getFollowing();
    }
  });
}
const Ke = ({}) => {
  const { updateRoute: r } = Y(), { data: s = [] } = qe("index"), e = Array.isArray(s) ? s : [s];
  return /* @__PURE__ */ t.jsx(
    V,
    {
      afterClose: () => {
        r("");
      },
      cancelLabel: "",
      footer: !1,
      okLabel: "",
      size: "md",
      title: "Following",
      topRightContent: "close",
      children: /* @__PURE__ */ t.jsx("div", { className: "mt-3 flex flex-col gap-4 pb-12", children: /* @__PURE__ */ t.jsx(ie, { children: e.map((n) => /* @__PURE__ */ t.jsx(ae, { action: /* @__PURE__ */ t.jsx(K, { color: "grey", label: "Unfollow", link: !0 }), avatar: /* @__PURE__ */ t.jsx(le, { image: n.icon, size: "sm" }), detail: Z(n), id: "list-item", title: n.name })) }) })
    }
  );
}, De = E.create(Ke), Ve = { FollowSite: ze, ViewFollowing: De, ViewFollowers: Ie };
export {
  Ve as default
};
//# sourceMappingURL=modals-915e3990.mjs.map
