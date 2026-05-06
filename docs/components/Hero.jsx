// Portfolio components - part 1: hero variants + shared UI
const { useState, useEffect, useRef, useMemo } = React;

// --------- Typing effect hook ----------
function useTyping(lines, speed = 28, startDelay = 200, enabled = true) {
  const [rendered, setRendered] = useState(enabled ? [] : lines);
  const [done, setDone] = useState(!enabled);
  useEffect(() => {
    if (!enabled) { setRendered(lines); setDone(true); return; }
    setRendered([]); setDone(false);
    let cancelled = false;
    let lineIdx = 0;
    let charIdx = 0;
    const out = [];
    const step = () => {
      if (cancelled) return;
      if (lineIdx >= lines.length) { setDone(true); return; }
      const full = lines[lineIdx];
      if (full.instant) {
        out.push(full);
        lineIdx++; charIdx = 0;
        setRendered([...out]);
        setTimeout(step, full.pause ?? 60);
        return;
      }
      const text = full.prompt ? (full.cmd || '') : (typeof full === 'string' ? full : full.text);
      if (charIdx <= text.length) {
        const partial = full.prompt
          ? { ...full, cmd: text.slice(0, charIdx) }
          : typeof full === 'string'
            ? text.slice(0, charIdx)
            : { ...full, text: text.slice(0, charIdx) };
        out[lineIdx] = partial;
        setRendered([...out]);
        charIdx++;
        setTimeout(step, speed);
      } else {
        lineIdx++; charIdx = 0;
        setTimeout(step, (typeof full === 'object' && full.pause) ? full.pause : 120);
      }
    };
    const t = setTimeout(step, startDelay);
    return () => { cancelled = true; clearTimeout(t); };
  }, [enabled, lines, speed, startDelay]);
  return [rendered, done];
}

// --------- Icons (Lucide-style inline) ----------
const Icon = ({ name, size = 18 }) => {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    github: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></>,
    download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></>,
    external: <><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></>,
    arrow: <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
    instagram: <><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></>,
    link: <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>,
    map: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>,
    terminal: <><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></>,
    code: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>,
    star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>,
    gitbranch: <><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></>,
    cpu: <><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></>,
    zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>,
    briefcase: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></>,
    folder: <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>,
    tool: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>,
    copy: <><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></>,
    check: <polyline points="20 6 9 17 4 12"/>,
    users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    letterboxd: <><circle cx="6" cy="12" r="3.2"/><circle cx="12" cy="12" r="3.2"/><circle cx="18" cy="12" r="3.2"/></>,
    lastfm: <><path d="M3 8c1.5-3 4.5-4 7-2.5 1.6 1 2.3 2.6 3 4.5.7 1.9 1.5 3.5 3 4.5 2 1.3 4.5.5 5-1.5"/><path d="M18 15c-.6.3-1.4.5-2 .3"/></>,
  };
  return <svg {...common}>{paths[name] || paths.link}</svg>;
};

// --------- Hero: Terminal ----------
function HeroTerminal({ lang, data, animations }) {
  const lines = useMemo(() => {
    const isPT = lang === 'pt';
    const promptPrefix = { prompt: true };
    return [
      { prompt: true, cmd: isPT ? 'whoami' : 'whoami', pause: 220 },
      { text: isPT ? `Guilherme B. Pagano - Engenheiro de Dados & Software` : `Guilherme B. Pagano - Data & Software Engineer`, out: true, pause: 300 },
      { prompt: true, cmd: 'cat about.md', pause: 220 },
      { text: `Rust + Python · Linux · Industrial systems · ML from scratch`, out: true, accent: true, pause: 260 },
      { prompt: true, cmd: 'ls ~/projects/featured', pause: 220 },
      { text: 'courier/    lunakbd/    nn-from-scratch/    cellular-automata/', out: true, listing: true, pause: 260 },
      { prompt: true, cmd: isPT ? 'echo $AVAILABILITY' : 'echo $AVAILABILITY', pause: 200 },
      { text: isPT ? 'aberto para conversas · colabs · ideias interessantes' : 'open to conversations · collabs · interesting ideas', out: true, green: true, pause: 200 },
      { instant: true, prompt: true, cmd: '', final: true },
    ];
  }, [lang]);

  const [rendered, done] = useTyping(lines, 22, 150, animations);

  // Measure final height once (render all lines invisibly) so the terminal body
  // doesn't grow while the typing animation runs.
  const measureRef = useRef(null);
  const [bodyMinH, setBodyMinH] = useState(null);
  useEffect(() => {
    if (!measureRef.current) return;
    const measure = () => {
      const h = measureRef.current?.getBoundingClientRect().height;
      if (h && h > 0) setBodyMinH(Math.ceil(h));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(measureRef.current);
    window.addEventListener('resize', measure);
    return () => { ro.disconnect(); window.removeEventListener('resize', measure); };
  }, [lines]);

  const renderLine = (l, i) => {
    if (!l) return null;
    if (l.prompt) {
      return (
        <div className="term-line term-prompt-block" key={i}>
          <div className="term-prompt-row">
            <span className="term-shell-mark">╭─</span>
            <span className="term-userhost">gbpagano@arch</span>
            <span className="term-shell-path">~/portfolio</span>
          </div>
          <div className="term-prompt-row">
            <span className="term-shell-mark">╰─</span>
            <span className="term-shell-dollar">$</span>
            {l.cmd && <span className="term-cmd">{l.cmd}</span>}
            {l.final && done && <span className="cursor-blink" />}
          </div>
        </div>
      );
    }
    if (l.out) {
      const cls = "term-out" + (l.accent ? " term-key" : "");
      const style = l.accent ? { color: "var(--accent)" } : l.green ? { color: "var(--ctp-green)" } : l.listing ? { color: "var(--ctp-blue)" } : {};
      return <div className={cls} key={i} style={style}>{typeof l === 'string' ? l : (l.text || '')}</div>;
    }
    return <div className="term-line" key={i}>{typeof l === 'string' ? l : (l.text || '')}</div>;
  };

  return (
    <section className="hero-terminal">
      <div className="page-wrap">
        <div className="terminal">
          <div className="term-titlebar">
            <span className="term-dot r" /><span className="term-dot y" /><span className="term-dot g" />
            <span className="term-title">ghostty - zsh</span>
          </div>
          <div className="term-body" style={bodyMinH ? { minHeight: bodyMinH } : undefined}>
            {/* invisible measurer: full content, sets the floor for body height */}
            <div ref={measureRef} aria-hidden="true" className="term-body-measure">
              {lines.map(renderLine)}
            </div>
            {rendered.map(renderLine)}
          </div>
        </div>
        <div style={{display:'flex', gap:12, marginTop:28, flexWrap:'wrap'}}>
          <a className="btn primary" href="https://github.com/gbPagano" target="_blank" rel="noreferrer"><Icon name="github" size={16}/> GitHub</a>
          <a className="btn" href={lang === 'pt' ? 'assets/cv-guilhermebpagano-pt.pdf' : 'assets/resume-gbpagano-en.pdf'} download><Icon name="download" size={16}/> {lang==='pt'?'Baixar currículo':'Download resume'}</a>
          <a className="btn ghost" href="#contact"><Icon name="mail" size={16}/> {lang==='pt'?'Entrar em contato':'Get in touch'}</a>
        </div>
      </div>
    </section>
  );
}

// --------- Hero: Big Type ----------
function HeroBig({ lang, data }) {
  const isPT = lang === 'pt';
  return (
    <section className="hero-big">
      <div className="page-wrap">
        <div className="eyebrow-row">
          <span className="availability"><span className="pulse"/>{isPT?'Disponível para conversas':'Open to conversations'}</span>
          <span>{data.location[lang]}</span>
        </div>
        <h1>
          Guilherme<br/>
          Pagano<span className="dot">.</span>
          <span className="line2">{isPT?'engenheiro de dados & software':'data & software engineer'}</span>
        </h1>
        <p className="tagline">&gt; {isPT?'rust · wasm · kubernetes · controle industrial':'rust · wasm · kubernetes · industrial control'}</p>
        <p className="blurb">{data.blurb[lang]}</p>
        <div className="cta-row">
          <a className="btn primary" href="#projects"><Icon name="folder" size={16}/> {isPT?'Ver projetos':'See projects'}</a>
          <a className="btn" href="https://github.com/gbPagano" target="_blank" rel="noreferrer"><Icon name="github" size={16}/> GitHub</a>
          <a className="btn ghost" href={isPT?'assets/cv-guilhermebpagano-pt.pdf':'assets/resume-gbpagano-en.pdf'} download><Icon name="download" size={16}/> CV</a>
        </div>
        <div className="meta-row">
          <div><div className="meta-label">{isPT?'Baseado em':'Based in'}</div><div className="meta-val">Uberlândia, BR</div></div>
          <div><div className="meta-label">{isPT?'Atualmente':'Currently'}</div><div className="meta-val">IHM Stefanini</div></div>
          <div><div className="meta-label">{isPT?'Foco':'Focus'}</div><div className="meta-val">Rust · WASM · K8s</div></div>
          <div><div className="meta-label">{isPT?'Experiência':'Experience'}</div><div className="meta-val">3.5 {isPT?'anos':'years'}</div></div>
        </div>
      </div>
    </section>
  );
}

// --------- Hero: Code Running ----------
function HeroCode({ lang, data, animations }) {
  const isPT = lang === 'pt';
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!animations) { setStep(5); return; }
    const t = setInterval(() => setStep(s => Math.min(s + 1, 5)), 400);
    return () => clearInterval(t);
  }, [animations]);
  return (
    <section className="hero-code">
      <div className="page-wrap" style={{display:'contents'}}>
        <div className="lhs">
          <span className="kicker">&gt; cargo run --release</span>
          <h1>
            {isPT ? (<>Construindo <span className="accent-word">sistemas</span> que rodam em Rust, escalam em Kubernetes e pensam em WebAssembly.</>)
                  : (<>Building <span className="accent-word">systems</span> that run in Rust, scale in Kubernetes, and think in WebAssembly.</>)}
          </h1>
          <p className="blurb">{data.blurb[lang]}</p>
          <div style={{display:'flex', gap:10, flexWrap:'wrap'}}>
            <a className="btn primary" href="#projects"><Icon name="folder" size={16}/> {isPT?'Projetos':'Projects'}</a>
            <a className="btn" href="https://github.com/gbPagano" target="_blank" rel="noreferrer"><Icon name="github" size={16}/> @gbPagano</a>
          </div>
        </div>
        <div className="code-card">
          <div className="code-card-head">
            <span className="term-dot r"/><span className="term-dot y"/><span className="term-dot g"/>
            <span className="lang-badge">RUST</span>
            <span>pid_loop.rs</span>
          </div>
          <pre>{`${step>=0?'':''}`}<span className="tok-cm">// PID tuning, client-side, via WASM</span>{`
`}<span className="tok-kw">pub fn</span> <span className="tok-fn">tune</span>(<span className="tok-pa">loop_</span>: <span className="tok-op">&</span><span className="tok-ty">Loop</span>) <span className="tok-op">-&gt;</span> <span className="tok-ty">Gains</span> {`{
    `}<span className="tok-kw">let</span> model <span className="tok-op">=</span> <span className="tok-ty">Model</span>::<span className="tok-fn">identify</span>(loop_);{`
    `}<span className="tok-kw">let</span> gains <span className="tok-op">=</span> model.<span className="tok-fn">autotune</span>(<span className="tok-ty">Method</span>::<span className="tok-mac">IMC</span>);{`
    `}<span className="tok-fn">assert!</span>(gains.<span className="tok-fn">is_stable</span>());{`
    gains
}

`}<span className="tok-kw">fn</span> <span className="tok-fn">main</span>() {`{
    `}<span className="tok-mac">println!</span>(<span className="tok-str">"running {} tests..."</span>, <span className="tok-num">1284</span>);{`
    `}<span className="tok-mac">println!</span>(<span className="tok-str">"✓ all passed"</span>);{`
}`}</pre>
        </div>
      </div>
    </section>
  );
}

window.HeroTerminal = HeroTerminal;
window.HeroBig = HeroBig;
window.HeroCode = HeroCode;
window.Icon = Icon;
