// Portfolio components - part 2: sections (About, Experience, Projects, Skills, Contact)
const { useState: useState2, useEffect: useEffect2, useRef: useRef2 } = React;

// ---- Scroll reveal helper
function Reveal({ children, delay = 0 }) {
  const ref = useRef2(null);
  const [inView, setInView] = useState2(false);
  useEffect2(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) { setTimeout(() => setInView(true), delay); io.disconnect(); } });
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={"reveal" + (inView ? " in" : "")}>{children}</div>;
}

// ---- About
function About({ lang, data }) {
  const isPT = lang === 'pt';
  return (
    <section className="section" id="about">
      <div className="page-wrap">
        <Reveal>
          <div className="section-label"><span className="nav-num" style={{color:'var(--accent)',marginRight:6}}>01.</span>{isPT?'sobre':'about'}</div>
          <h2 className="section-title">{isPT?<>Um pouco sobre <span className="accent-word">mim</span>.</>:<>A little about <span className="accent-word">me</span>.</>}</h2>
        </Reveal>
        <div className="about-grid">
          <Reveal delay={100}>
            <div className="about-card">
              <p>{isPT
                ? <>Oi, sou <strong>Guilherme</strong>. Engenheiro de Dados e Software na <strong>IHM Stefanini</strong>, onde construo soluções para clientes de indústria pesada como Gerdau e Vale. Meu trabalho atual vai de arquitetar pipelines de dados escaláveis e orientados a eventos na nuvem até desenvolvimento de baixo nível e alta performance.</>
                : <>Hi, I'm <strong>Guilherme</strong>. Data & Software Engineer at <strong>IHM Stefanini</strong>, where I build solutions for heavy industry clients like Gerdau and Vale. My current work ranges from architecting scalable, event-driven data pipelines in the cloud to high-performance low-level development.</>}
              </p>
              <p>{isPT
                ? <>Vindo de uma formação em <strong>Engenharia Elétrica</strong>, trago uma abordagem de pensamento sistêmico para o desenvolvimento de software. Sou apaixonado por <strong>Rust</strong>, <strong>Python</strong> e <strong>Machine Learning</strong>, e gosto de assumir desafios técnicos complexos desde o conceito inicial até produção.</>
                : <>Coming from an <strong>Electrical Engineering</strong> background, I bring a systems-thinking approach to software development. I'm passionate about <strong>Rust</strong>, <strong>Python</strong>, and <strong>Machine Learning</strong>, and I thrive on taking ownership of complex technical challenges from the initial concept all the way to production.</>}
              </p>
              <p>{isPT
                ? <>Fora do trabalho, gosto de explorar <strong>open source</strong>, sistemas embarcados, hardware customizado, impressão 3D e ferramentas para desenvolvedores. Quando preciso desconectar, normalmente estou assistindo a um bom filme ou descobrindo músicas novas.</>
                : <>Beyond work, I like exploring <strong>open source</strong>, embedded systems, custom hardware, 3D printing and developer tools. When I need to disconnect, you can usually find me enjoying a good movie or discovering new music.</>}
              </p>
            </div>
          </Reveal>
          <div className="about-side">
            <Reveal delay={180}>
              <div className="about-meta">
                <div className="row"><span className="k">{isPT?'localização':'location'}</span><span className="v">Uberlândia, BR</span></div>
                <div className="row"><span className="k">{isPT?'empresa':'company'}</span><span className="v">IHM Stefanini</span></div>
                <div className="row"><span className="k">{isPT?'universidade':'university'}</span><span className="v">UFU</span></div>
                <div className="row"><span className="k">{isPT?'curso':'degree'}</span><span className="v">{isPT?'Engenharia Elétrica':'Electrical Engineering'}</span></div>
                <div className="row"><span className="k">{isPT?'idiomas':'languages'}</span><span className="v">PT · EN</span></div>
                <div className="row"><span className="k">stack</span><span className="v">Rust · Python · Linux</span></div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Experience timeline
function Experience({ lang, data }) {
  const isPT = lang === 'pt';
  return (
    <section className="section" id="experience">
      <div className="page-wrap">
        <Reveal>
          <div className="section-label"><span style={{color:'var(--accent)',marginRight:6}}>02.</span>{isPT?'experiência':'experience'}</div>
          <h2 className="section-title">{isPT?<>Onde eu <span className="accent-word">construí</span> coisas.</>:<>Where I've <span className="accent-word">built</span> things.</>}</h2>
          <p className="section-sub section-sub-wide">{isPT?'Uma timeline do trabalho profissional e educação, com os detalhes do que foi entregue.':"A timeline of professional work and education, with the details of what shipped."}</p>
        </Reveal>
        <div className="timeline" style={{padding: '0px 0px 0px 28px'}}>
          {data.experience.map((x, i) => (
            <Reveal key={i} delay={i*80}>
              <div className={"timeline-item" + (x.current ? " current" : "")} style={{padding: '0px 0px 20px'}}>
                <div className="period">{x.period[lang]} {x.current && <span style={{marginLeft:8,color:'var(--ctp-green)'}}>● {isPT?'atual':'current'}</span>}</div>
                <h3>{x.role[lang]}</h3>
                <div className="company">
                  <span style={{color:'var(--fg-muted)'}}>{x.company}</span>
                  <span className="dot">·</span>
                  <span style={{color:'var(--fg-subtle)',fontSize:13}}>{x.location[lang]}</span>
                </div>
                <ul>{x.bullets[lang].map((b,j)=><li key={j}>{b}</li>)}</ul>
                <div className="stack">
                  {x.stack.map((s,j)=><span key={j} className="chip chip-muted">{s}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
          {data.education.map((e, i) => (
            <Reveal key={'ed'+i} delay={(data.experience.length+i)*80}>
              <div className="timeline-item">
                <div className="period">{e.period[lang]}</div>
                <h3>{e.degree[lang]}</h3>
                <div className="company">
                  <span style={{color:'var(--fg-muted)'}}>{e.school[lang]}</span>
                </div>
                <p style={{color:'var(--fg-muted)',fontSize:14.5,margin:0}}>{e.topics[lang]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Language colors for project dots
const langColors = {
  Rust: 'var(--ctp-peach)',
  Python: 'var(--ctp-yellow)',
  C: 'var(--ctp-blue)',
  TypeScript: 'var(--ctp-blue)',
};

function ProjectActions({ lang, project }) {
  const actions = [];
  if (project.link) {
    actions.push(
      <a key="open" className="btn project-action" href={project.link} target="_blank" rel="noreferrer">
        <Icon name="external" size={13}/> {lang==='pt'?'abrir':'open'}
      </a>
    );
  }
  if (project.articleHref) {
    actions.push(
      <a key="article" className="btn project-action" href={project.articleHref} download>
        <Icon name="download" size={13}/> {project.articleLabel?.[lang] || (lang==='pt'?'artigo':'article')}
      </a>
    );
  } else if (project.articleLabel) {
    actions.push(
      <span key="article" className="btn project-action is-disabled" aria-disabled="true" title={lang==='pt'?'Adicione o PDF do artigo para ativar este botão.':'Add the article PDF to enable this button.'}>
        <Icon name="download" size={13}/> {project.articleLabel[lang]}
      </span>
    );
  }
  return actions.length ? <div className="project-actions">{actions}</div> : null;
}

// ---- Projects: grid view
function ProjectsGrid({ lang, projects }) {
  return (
    <div className="projects-grid">
      {projects.map((p, i) => (
        <Reveal key={p.id} delay={i*60}>
          <div className="project-card">
            <div className="head">
              <div className="name-row">
                <h4>{p.name[lang]}</h4>
                {p.medal && <span className="medal">{p.medal}</span>}
              </div>
              <span className="year">{p.year}</span>
            </div>
            <p className="blurb">{p.blurb[lang]}</p>
            <div className="tags">
              {p.tags.map((t,j)=><span key={j} className={`chip chip-c-${p.color}`}>{t}</span>)}
            </div>
            <div className="foot">
              <span><span className="lang-dot" style={{background:langColors[p.lang]||'var(--accent)'}}/>{p.lang}</span>
              <span className="arrow">{p.link ? (lang==='pt'?'ver':'view') : (lang==='pt'?'detalhes':'details')} →</span>
            </div>
            <ProjectActions lang={lang} project={p} />
          </div>
        </Reveal>
      ))}
    </div>
  );
}

// ---- Projects: README list view
function ProjectsList({ lang, projects }) {
  return (
    <div className="readme-list">
      {projects.map((p, i) => (
        <Reveal key={p.id} delay={i*50}>
          <div className="readme-row">
            <div>
              <div className="rname">./{p.path || p.id}</div>
              <div className="rname-sub">{p.year} · {p.lang}</div>
            </div>
            <div className="rbody">
              <h4>{p.name[lang]} {p.medal && <span style={{marginLeft:6}}>{p.medal}</span>}</h4>
              <p>{p.blurb[lang]}</p>
              <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
                {p.tags.map((t,j)=><span key={j} className={`chip chip-c-${p.color}`}>{t}</span>)}
              </div>
            </div>
            <div>
              <ProjectActions lang={lang} project={p} />
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

// ---- Projects: terminal view
function ProjectsTerminal({ lang, projects }) {
  return (
    <div className="term-card">
      <div className="head">
        <span className="term-dot r"/><span className="term-dot y"/><span className="term-dot g"/>
        <span style={{marginLeft:8}}>projects - zsh</span>
      </div>
      <div className="body" style={{fontFamily:'var(--font-mono)',fontSize:14,lineHeight:1.7}}>
        <div><span style={{color:'var(--ctp-green)'}}>guilherme</span><span style={{color:'var(--fg-muted)'}}>@portfolio</span><span style={{color:'var(--fg-muted)'}}>:</span><span style={{color:'var(--ctp-yellow)'}}>~/projects</span> <span style={{color:'var(--accent)'}}>❯</span> ls -la</div>
        <div style={{color:'var(--fg-subtle)',marginTop:6,marginBottom:14}}>total {projects.length} · {lang==='pt'?'projetos em destaque':'featured projects'}</div>
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i*50}>
            <div style={{display:'grid',gridTemplateColumns:'90px 140px 1fr auto',gap:16,padding:'10px 0',borderBottom:'1px dashed var(--surface-1)',alignItems:'baseline'}}>
              <span style={{color:'var(--ctp-blue)'}}>drwxr-xr-x</span>
              <span style={{color:'var(--ctp-peach)'}}>{p.year}</span>
              <span>
                <a href={p.link||'#'} target={p.link?'_blank':undefined} rel="noreferrer" style={{color:'var(--accent)',fontWeight:600}}>{p.path || p.id}/</a>
                <span style={{color:'var(--fg-muted)',marginLeft:10}}>- {p.blurb[lang]}</span>
              </span>
              <span style={{color:'var(--fg-subtle)',fontSize:12}}>{p.medal} {p.lang}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

// ---- Projects section
function Projects({ lang, data, showcase }) {
  const isPT = lang === 'pt';
  return (
    <section className="section" id="projects">
      <div className="page-wrap">
        <Reveal>
          <div className="section-label"><span style={{color:'var(--accent)',marginRight:6}}>03.</span>{isPT?'projetos':'projects'}</div>
          <h2 className="section-title">{isPT?<>Coisas que eu <span className="accent-word">construí</span>.</>:<>Things I've <span className="accent-word">built</span>.</>}</h2>
          <p className="section-sub">{isPT?'Projetos destacados - da firma, da faculdade e de fins de semana.':'Featured projects - from work, university, and weekends.'}</p>
        </Reveal>
        {showcase === 'grid' && <ProjectsGrid lang={lang} projects={data.projects} />}
        {showcase === 'list' && <ProjectsList lang={lang} projects={data.projects} />}
        {showcase === 'terminal' && <ProjectsTerminal lang={lang} projects={data.projects} />}
      </div>
    </section>
  );
}

// ---- Skills (Tech carousel)
function Skills({ lang, data }) {
  const isPT = lang === 'pt';
  // Icons: local SVGs for hand-picked marks, devicon for full-color brand SVGs,
  // and simpleicons/Wikimedia fallback where devicon is missing or too low-contrast.
  //   devicon: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/{name}/{name}-{variant}.svg
  //   simpleicons: https://cdn.simpleicons.org/{slug}[/{hex}]  (no hex = official brand color)
  const dv = (name, variant = 'original') => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;
  const si = (slug, hex = '') => `https://cdn.simpleicons.org/${slug}${hex ? `/${hex}` : ''}`;
  const wiki = (path) => `https://upload.wikimedia.org/wikipedia/commons/${path}`;
  const local = (file) => `assets/tech/${file}`;
  const techs = [
    { name: 'Python',       src: dv('python') },
    { name: 'Rust',         src: si('rust', 'cdd6f4') },     // official mark is monochrome - tint to text color so it reads on dark bg
    { name: 'C',            src: local('c.svg') },
    { name: 'PostgreSQL',   src: dv('postgresql') },
    { name: 'Bash',         src: si('gnubash', '4EAA25') },
    { name: 'Linux',        src: dv('linux') },              // colored Tux
    { name: 'Git',          src: dv('git') },
    { name: 'GitHub',       src: si('github', 'cdd6f4') },   // official mark is monochrome - tint to text color
    { name: 'Docker',       src: dv('docker') },
    { name: 'Kubernetes',   src: dv('kubernetes') },
    { name: 'ArgoCD',       src: dv('argocd') },
    { name: 'AWS',          src: local('aws.svg'), imgClass: 'tm-logo-wide' },
    { name: 'Kafka',        src: local('kafka.svg') },
    { name: 'Airflow',      src: dv('apacheairflow') },
    { name: 'FastAPI',      src: dv('fastapi') },
    { name: 'WebAssembly',  src: dv('wasm') },
    { name: 'Pytest',       src: dv('pytest') },
    { name: 'KiCad',        src: wiki('6/65/KiCad_logo_square.svg') },
    { name: 'FreeCAD',      src: wiki('1/1a/FreeCAD-symbol.svg'), imgClass: 'tm-logo-tall' },
    { name: 'TimescaleDB',  src: si('timescale') },          // not in devicon
  ];
  // Duplicate the list so the marquee can loop seamlessly (translateX -50%).
  const loop = [...techs, ...techs];
  return (
    <section className="section" id="skills">
      <div className="page-wrap">
        <Reveal>
          <div className="section-label"><span style={{color:'var(--accent)',marginRight:6}}>04.</span>stack</div>
          <h2 className="section-title">{isPT?<>Tecnologias & <span className="accent-word">Ferramentas</span>.</>:<>Technologies & <span className="accent-word">Tools</span>.</>}</h2>
          <p className="section-sub">{isPT?'Principais tecnologias com as quais trabalho no dia a dia.':'The main technologies I work with day-to-day.'}</p>
        </Reveal>
      </div>
      {/* full-bleed marquee - sits outside .page-wrap so the fade extends to the viewport edges */}
      <Reveal delay={80}>
        <div className="tech-marquee" aria-label={isPT?'tecnologias':'technologies'}>
          <div className="tm-track">
            {loop.map((t,i)=>(
              <div key={i} className="tm-card" title={t.name} aria-hidden={i >= techs.length}>
                <div className="tm-icon">
                  <img className={t.imgClass || ''} src={t.src} alt="" loading="lazy" draggable={false}/>
                </div>
                <div className="tm-name">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

// ---- GitHub stats + contribution heatmap (live from public API, fallback to data.js)
const GH_USER = 'gbPagano';
const GH_CACHE_KEY = 'pf_gh_v4';
const GH_CACHE_TTL = 1000 * 60 * 60 * 6; // 6h

// Convert flat day list (365 entries: {date,count,level}) into 53-col x 7-row grid.
// First column may be partial; we left-pad with nulls so weekdays line up.
// Returns cells with full {date, count, level} so we can render labels + tooltips.
function toGridFromDays(days) {
  if (!days || !days.length) return null;
  // Parse YYYY-MM-DD as LOCAL date (not UTC) so getDay() reflects the calendar day.
  const [fy, fm, fd] = days[0].date.split('-').map(Number);
  const first = new Date(fy, fm - 1, fd);
  const startDow = first.getDay(); // 0..6 (Sun..Sat) — Sunday-first
  const cells = [...Array(startDow).fill(null), ...days];
  const cols = [];
  for (let i = 0; i < cells.length; i += 7) {
    const col = cells.slice(i, i + 7);
    while (col.length < 7) col.push(null);
    cols.push(col);
  }
  return cols;
}

// Derive month labels from a grid of {date,count,level} cells.
// Returns [{label:'Jan', col:0}, {label:'Feb', col:4}, ...]
function getMonthLabels(grid) {
  if (!grid) return [];
  const out = [];
  let lastMonth = -1;
  grid.forEach((col, ci) => {
    const firstDay = col.find(c => c && typeof c === 'object' && c.date);
    if (!firstDay) return;
    const d = new Date(firstDay.date);
    const m = d.getMonth();
    if (m !== lastMonth) {
      out.push({ label: d.toLocaleDateString('en-US', { month: 'short' }), col: ci });
      lastMonth = m;
    }
  });
  return out;
}

async function fetchGithubLive() {
  // try cache first
  try {
    const raw = localStorage.getItem(GH_CACHE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Date.now() - parsed.t < GH_CACHE_TTL) return parsed.v;
    }
  } catch {}

  const [userRes, reposRes, contribRes, eventsRes] = await Promise.all([
    fetch(`https://api.github.com/users/${GH_USER}`),
    fetch(`https://api.github.com/users/${GH_USER}/repos?per_page=100&type=owner&sort=updated`),
    fetch(`https://github-contributions-api.jogruber.de/v4/${GH_USER}?y=last`),
    fetch(`https://api.github.com/users/${GH_USER}/events/public?per_page=100`),
  ]);
  if (!userRes.ok || !reposRes.ok) throw new Error('github api');
  const user = await userRes.json();
  const repos = await reposRes.json();
  const contrib = contribRes.ok ? await contribRes.json() : null;
  const events = eventsRes.ok ? await eventsRes.json() : [];

  const stars = Array.isArray(repos) ? repos.reduce((a, r) => a + (r.stargazers_count || 0), 0) : 0;
  // Trim trailing days that haven't happened yet (some APIs over-fill the current week).
  let days = (contrib && contrib.contributions) ? contrib.contributions : null;
  if (days && days.length) {
    const today = new Date();
    today.setHours(23, 59, 59, 999);
    const todayStr = today.toISOString().slice(0, 10);
    days = days.filter(d => d.date <= todayStr);
  }
  const grid = days ? toGridFromDays(days) : null;
  const total = contrib && contrib.total ? (contrib.total.lastYear || 0) : 0;

  // Count distinct external repos with contribution-type events (last ~90d, max 300 events).
  // Approximates the GitHub profile's "contributed to" badge without requiring auth.
  const CONTRIB_EVENT_TYPES = new Set([
    'PushEvent', 'PullRequestEvent', 'PullRequestReviewEvent',
    'PullRequestReviewCommentEvent', 'IssuesEvent', 'IssueCommentEvent',
    'CommitCommentEvent',
  ]);
  const externalRepos = new Set();
  if (Array.isArray(events)) {
    for (const ev of events) {
      if (!CONTRIB_EVENT_TYPES.has(ev.type)) continue;
      const name = ev.repo && ev.repo.name; // "owner/repo"
      if (!name) continue;
      const owner = name.split('/')[0];
      if (owner.toLowerCase() === GH_USER.toLowerCase()) continue;
      externalRepos.add(name);
    }
  }

  const out = {
    repos: user.public_repos || 0,
    stars,
    followers: user.followers || 0,
    commits_year: total,
    contributed_to_90d: externalRepos.size,
    grid,
  };
  try { localStorage.setItem(GH_CACHE_KEY, JSON.stringify({ t: Date.now(), v: out })); } catch {}
  return out;
}

function GithubStats({ lang, data }) {
  const isPT = lang === 'pt';
  const [live, setLive] = useState2(null);
  const [loading, setLoading] = useState2(true);

  useEffect2(() => {
    let cancelled = false;
    fetchGithubLive()
      .then(v => { if (!cancelled) { setLive(v); setLoading(false); } })
      .catch(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, []);

  const repos = live?.repos ?? data.stats.repos;
  const stars = live?.stars ?? data.stats.stars;
  const commits = live?.commits_year ?? data.stats.commits_year;
  const followers = live?.followers;
  const contributedTo = live?.contributed_to_90d;
  // Live grid is already 53x7 cells; fallback is a flat day list.
  const grid = live?.grid ?? toGridFromDays(data.contributions);
  const monthLabels = getMonthLabels(grid);
  const dayLabels = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

  return (
    <section className="section" id="github">
      <div className="page-wrap">
        <Reveal>
          <div className="section-label"><span style={{color:'var(--accent)',marginRight:6}}>05.</span>{isPT?'atividade':'activity'}</div>
          <h2 className="section-title">{isPT?<>No <span className="accent-word">GitHub</span>.</>:<>On <span className="accent-word">GitHub</span>.</>}</h2>
          <p className="section-sub">{isPT?'Um resumo da minha atividade pública.':'A snapshot of my public activity.'}</p>
        </Reveal>
        <Reveal delay={80}>
          <div className="gh-block">
            {/* Heatmap card */}
            <div className="contrib-card">
              {/* In-card header: @user + total left, "view profile" button right */}
              <div className="contrib-header-inline">
                <div>
                  <div className="contrib-eyebrow">
                    <span>@{GH_USER}</span>
                    {loading && <span className="contrib-loading">· {isPT?'carregando…':'loading…'}</span>}
                  </div>
                  <div className="contrib-total">
                    {commits.toLocaleString()} {isPT?'contribuições no último ano':'contributions in the last year'}
                  </div>
                </div>
                <a className="btn" href={`https://github.com/${GH_USER}`} target="_blank" rel="noreferrer" style={{padding:'8px 14px',fontSize:12}}>
                  <Icon name="github" size={14}/> {isPT?'ver perfil':'view profile'}
                </a>
              </div>

              {grid && grid.length > 0 ? (
                <>
                  {/* Month labels row */}
                  <div className="contrib-months">
                    <div className="contrib-months-row">
                      {grid.map((_, ci) => {
                        const m = monthLabels.find(x => x.col === ci);
                        return (
                          <div className="contrib-months-cell" key={ci}>
                            {m && <span>{m.label}</span>}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Grid (no day labels) */}
                  <div className="contrib-body">
                    <div className="contrib-grid">
                      {grid.map((col, ci) => (
                        <div className="contrib-col" key={ci}>
                          {col.map((cell, ri) => {
                            const lv = cell ? cell.level : 0;
                            const cnt = cell ? cell.count : 0;
                            const date = cell ? cell.date : null;
                            // Parse YYYY-MM-DD as local date (avoid UTC off-by-one in BR/negative tz)
                            const localDate = date ? (() => {
                              const [y,m,d] = date.split('-').map(Number);
                              return new Date(y, m-1, d);
                            })() : null;
                            const title = cell
                              ? `${cnt} ${cnt === 1 ? 'contribution' : 'contributions'} on ${localDate.toLocaleDateString(isPT?'pt-BR':'en-US',{month:'short',day:'numeric',year:'numeric'})}`
                              : 'No data';
                            return (
                              <div
                                key={ri}
                                className={`contrib-sq l${lv}${cell ? '' : ' empty'}`}
                                title={title}
                                aria-label={title}
                              />
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer: legend only */}
                  <div className="contrib-foot">
                    <div className="contrib-legend">
                      <span>{isPT?'menos':'less'}</span>
                      <div className="contrib-sq l0"/>
                      <div className="contrib-sq l1"/>
                      <div className="contrib-sq l2"/>
                      <div className="contrib-sq l3"/>
                      <div className="contrib-sq l4"/>
                      <span>{isPT?'mais':'more'}</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="contrib-empty">
                  <p>{isPT?'Dados de contribuição indisponíveis':'Contribution data not available'}</p>
                </div>
              )}
            </div>

            {/* stat cards - row below the heatmap */}
            <div className="gh-stats-row">
              <div className="stat-card">
                <div className="stat-icon"><Icon name="folder" size={16}/></div>
                <div className="stat-body">
                  <div className="val">{repos}</div>
                  <div className="lbl">{isPT?'repositórios públicos':'public repositories'}</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><Icon name="star" size={16}/></div>
                <div className="stat-body">
                  <div className="val">{stars}</div>
                  <div className="lbl">stars</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><Icon name="briefcase" size={16}/></div>
                <div className="stat-body">
                  <div className="val">{data.stats.years_exp}</div>
                  <div className="lbl">{isPT?'anos de experiência':'years experience'}</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><Icon name="users" size={16}/></div>
                <div className="stat-body">
                  <div className="val">{followers ?? '—'}</div>
                  <div className="lbl">followers</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---- Contact
function Contact({ lang, data }) {
  const isPT = lang === 'pt';
  const [copied, setCopied] = React.useState(false);
  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard?.writeText(data.email);
    setCopied(true);
    setTimeout(()=>setCopied(false), 1600);
  };
  const links = [
    { cmd: 'github',     value: '@gbPagano',                  url: 'https://github.com/gbPagano',         icon: 'github' },
    { cmd: 'linkedin',   value: 'in/gbpagano',                url: 'https://linkedin.com/in/gbpagano',    icon: 'linkedin' },
    { cmd: 'instagram',  value: '@gbpagano',                  url: 'https://instagram.com/gbpagano',      icon: 'instagram' },
    { cmd: 'letterboxd', value: 'letterboxd.com/gbPagano',    url: 'https://letterboxd.com/gbPagano/',    icon: 'letterboxd' },
    { cmd: 'music',      value: 'music.server.gbpagano.dev',  url: 'https://music.server.gbpagano.dev',    icon: 'music' },
    { cmd: 'phone',      value: data.phone,                   url: `tel:+5531994001739`,                  icon: 'phone' },
  ];
  return (
    <section className="section" id="contact">
      <div className="page-wrap">
        <Reveal>
          <div className="section-label"><span style={{color:'var(--accent)',marginRight:6}}>06.</span>{isPT?'contato':'contact'}</div>
          <h2 className="section-title">{isPT?<>Vamos <span className="accent-word">conversar</span>.</>:<>Let's <span className="accent-word">talk</span>.</>}</h2>
          <p className="section-sub section-sub-wide">{isPT?'Aberto para colabs, ideias interessantes ou só conversar sobre Rust, sistemas industriais e teclados mecânicos customizados.':'Open to collabs, interesting ideas, or just chatting about Rust, industrial systems, and custom mechanical keyboards.'}</p>
        </Reveal>

        <div className="contact-stack">
          <Reveal delay={80}>
            <div className="contact-primary">
              <div className="cp-label">
                <span className="cp-dot"/>
                {isPT?'melhor forma de me achar':'best way to reach me'}
              </div>
              <div className="cp-center">
                <a className="cp-email" href={`mailto:${data.email}`}>{data.email}</a>
                <div className="cp-actions">
                  <a className="btn btn-primary" href={`mailto:${data.email}`}>
                    <Icon name="mail" size={14}/> {isPT?'enviar email':'send email'}
                  </a>
                  <button className="btn btn-ghost" onClick={copyEmail}>
                    <Icon name={copied?'check':'copy'} size={14}/>
                    {copied ? (isPT?'copiado':'copied') : (isPT?'copiar':'copy')}
                  </button>
                </div>
              </div>
              <div className="cp-meta">
                <span><span className="k">{isPT?'respondo em':'replies in'}</span> <span className="v">~24h</span></span>
                <span className="sep">·</span>
                <span><span className="k">{isPT?'fuso':'timezone'}</span> <span className="v">GMT-3</span></span>
                <span className="sep">·</span>
                <span><span className="k">{isPT?'status':'status'}</span> <span className="v v-on">● {isPT?'disponível':'available'}</span></span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="contact-links">
              <div className="cl-header">
                <span className="term-dot r"/><span className="term-dot y"/><span className="term-dot g"/>
                <span className="cl-title">~/contact/links.sh</span>
              </div>
              <ul className="cl-list">
                {links.map((l,i)=>(
                  <li key={i}>
                    <a href={l.url} target={l.url.startsWith('http')?'_blank':undefined} rel="noreferrer">
                      <span className="cl-ico"><Icon name={l.icon} size={15}/></span>
                      <span className="cl-key">{l.cmd}</span>
                      <span className="cl-val">{l.value}</span>
                      <span className="cl-arrow">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ---- Footer
const ACCENT_OPTIONS = ['mauve','pink','lavender','blue','sapphire','sky','teal','green','yellow','peach','maroon','red','rosewater','flamingo'];

function Footer({ lang, accent, setAccent }) {
  const isPT = lang === 'pt';
  const [open, setOpen] = React.useState(false);
  const popRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (popRef.current && !popRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <footer className="footer">
      <div className="page-wrap">
        <div className="footer-inner">
          <div className="footer-meta footer-built">
            <span className="footer-prompt">~</span>
            <span style={{color:'var(--fg-muted)'}}>{isPT?'feito com':'built with'}</span>
            <span style={{color:'var(--ctp-red)'}}>♥</span>
            <span style={{color:'var(--fg-muted)'}}>{isPT?'em':'in'}</span>
            <span>Uberlândia, BR</span>
          </div>
          <div className="footer-meta">
            <span style={{color:'var(--fg-subtle)'}}>© 2026</span>
            <span>Guilherme B. Pagano</span>
            <span style={{color:'var(--surface-2)'}}>·</span>
            <a href="https://github.com/gbPagano" target="_blank" rel="noreferrer">@gbPagano</a>
            <span style={{color:'var(--surface-2)'}}>·</span>
            <div className={"theme-pop"+(open?' open':'')} ref={popRef}>
              <button
                type="button"
                className="theme-chip"
                aria-expanded={open}
                aria-haspopup="true"
                onClick={()=>setOpen(o=>!o)}
                title={isPT?'tema · cor de destaque':'theme · accent color'}
              >
                <span className="theme-chip-dot" style={{background:`var(--ctp-${accent})`}}/>
                <span className="theme-chip-label">{accent}</span>
                <svg className="theme-chip-caret" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              {open && (
                <div className="theme-pop-menu" role="dialog" aria-label={isPT?'seletor de tema':'theme picker'}>
                  <div className="theme-pop-head">
                    <span className="footer-prompt">$</span>
                    <span style={{color:'var(--fg-subtle)'}}>catppuccin --accent</span>
                  </div>
                  <div className="theme-pop-grid" role="radiogroup">
                    {ACCENT_OPTIONS.map(a => (
                      <button
                        key={a}
                        role="radio"
                        aria-checked={accent===a}
                        aria-label={a}
                        title={a}
                        className={"theme-pop-swatch"+(accent===a?' active':'')}
                        style={{'--sw': `var(--ctp-${a})`}}
                        onClick={()=>{ setAccent && setAccent(a); }}
                      />
                    ))}
                  </div>
                  <div className="theme-pop-foot">
                    <span style={{color:'var(--fg-subtle)'}}>active:</span>
                    <span style={{color:`var(--ctp-${accent})`}}>{accent}</span>
                  </div>
                  <span className="theme-pop-arrow" aria-hidden="true"/>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { About, Experience, Projects, Skills, GithubStats, Contact, Footer, Reveal });
