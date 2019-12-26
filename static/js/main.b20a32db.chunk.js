(this.webpackJsonpmetronome = this.webpackJsonpmetronome || []).push([[0], {
  14(e, t, n) {},
  19(e, t, n) {},
  20(e, t, n) {
    n.r(t); const a = n(0); const r = n.n(a); const o = n(2); const c = n.n(o); n(14); function l(e) { const t = e.value; return r.a.createElement('h2', { className: 'bpmValue' }, ''.concat(t || 80, ' BPM')); } const i = n(29); const u = 80; function s() {
      return r.a.createElement(i.a, {
        track: 'normal', defaultValue: u, 'aria-labelledby': 'discrete-slider-small-steps', step: 5, min: 60, max: 240,
      });
    } const m = n(6); function p() { const e = r.a.useState(!1); const t = Object(m.a)(e, 2); const n = t[0]; const a = t[1]; return r.a.createElement('button', { type: 'submit', className: 'bpmButton', onClick() { return a(!n); } }, n ? 'Stop' : 'Start'); }n(19), Boolean(window.location.hostname === 'localhost' || window.location.hostname === '[::1]' || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)); c.a.render(r.a.createElement((() => r.a.createElement('div', { className: 'App' }, r.a.createElement(l, null), r.a.createElement(s, null), r.a.createElement(p, null))), null), document.getElementById('root')), 'serviceWorker' in navigator && navigator.serviceWorker.ready.then(((e) => { e.unregister(); }));
  },
  9(e, t, n) { e.exports = n(20); },
}, [[9, 1, 2]]]);
// # sourceMappingURL=main.b20a32db.chunk.js.map
