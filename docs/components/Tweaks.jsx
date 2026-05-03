// Tweaks panel - controls for accent, flavor, layout, font, density, hero, showcase, animations
const { useState: useStateTw, useEffect: useEffectTw } = React;

const ACCENTS = ['mauve','pink','lavender','blue','sapphire','sky','teal','green','yellow','peach','maroon','red','rosewater','flamingo'];
const FLAVORS = ['mocha','macchiato','frappe','latte'];
const LAYOUTS = ['standard','minimal','wide','ide'];
const FONTS = ['default','mono','sans','hand'];
const DENSITIES = ['compact','normal','roomy'];
const HEROES = ['terminal','big','code'];
const SHOWCASES = ['grid','list','terminal'];
const CARDS = ['default','glow','paper'];

function TweaksPanel({ state, set, active, onClose }) {
  if (!active) return null;
  const Row = ({ label, val, children }) => (
    <div className="tw-row">
      <div className="tw-label"><span>{label}</span><span className="tw-val">{val}</span></div>
      {children}
    </div>
  );
  const Opts = ({ key_, options, labels }) => (
    <div className="tw-options">
      {options.map((o,i)=>(
        <button key={o} className={state[key_]===o?'active':''} onClick={()=>set(key_,o)}>{labels?labels[i]:o}</button>
      ))}
    </div>
  );
  return (
    <div className="tweaks-panel">
      <h3 style={{justifyContent:'space-between'}}>
        <span>Tweaks</span>
        <button onClick={onClose} style={{background:'transparent',border:0,color:'var(--fg-muted)',cursor:'pointer',fontSize:14}}>×</button>
      </h3>
      <div className="tw-sub">customize everything · saved to file</div>

      <Row label="accent" val={state.accent}>
        <div className="tw-swatches">
          {ACCENTS.map(a=>(
            <button key={a} className={"tw-swatch"+(state.accent===a?' active':'')}
              style={{background:`var(--ctp-${a})`}} title={a} onClick={()=>set('accent',a)} />
          ))}
        </div>
      </Row>

      <Row label="flavor" val={state.flavor}>
        <Opts key_="flavor" options={FLAVORS} />
      </Row>

      <Row label="layout" val={state.layout}>
        <Opts key_="layout" options={LAYOUTS} />
      </Row>

      <Row label="hero" val={state.hero}>
        <Opts key_="hero" options={HEROES} />
      </Row>

      <Row label="projects" val={state.showcase}>
        <Opts key_="showcase" options={SHOWCASES} />
      </Row>

      <Row label="font" val={state.font}>
        <Opts key_="font" options={FONTS} />
      </Row>

      <Row label="density" val={state.density}>
        <Opts key_="density" options={DENSITIES} />
      </Row>

      <Row label="cards" val={state.cardStyle}>
        <Opts key_="cardStyle" options={CARDS} />
      </Row>

      <Row label="nav accent" val={state.navAccent || 'match'}>
        <div className="tw-swatches">
          <button
            className={"tw-swatch"+(!state.navAccent?' active':'')}
            style={{background:'transparent', border:'1px dashed var(--surface-3)'}}
            title="match page accent"
            onClick={()=>set('navAccent','')} />
          {ACCENTS.map(a=>(
            <button key={a} className={"tw-swatch"+(state.navAccent===a?' active':'')}
              style={{background:`var(--ctp-${a})`}} title={a} onClick={()=>set('navAccent',a)} />
          ))}
        </div>
      </Row>

      <div className="tw-row">
        <div className={"tw-toggle"+(state.animations?' on':'')} onClick={()=>set('animations',!state.animations)}>
          <span>animations</span>
          <span className="dot"/>
        </div>
      </div>
      <div className="tw-row">
        <div className={"tw-toggle"+(state.showAbout?' on':'')} onClick={()=>set('showAbout',!state.showAbout)}>
          <span>section: about</span><span className="dot"/>
        </div>
      </div>
      <div className="tw-row">
        <div className={"tw-toggle"+(state.showGithub?' on':'')} onClick={()=>set('showGithub',!state.showGithub)}>
          <span>section: github</span><span className="dot"/>
        </div>
      </div>

      <div className="tw-row">
        <div className="tw-label"><span>terminal prompt</span></div>
        <input
          type="text"
          value={state.prompt}
          onChange={e=>set('prompt',e.target.value)}
          style={{width:'100%',background:'var(--surface-1)',border:'1px solid var(--surface-2)',borderRadius:4,padding:'6px 10px',color:'var(--fg)',fontFamily:'var(--font-mono)',fontSize:12}}
        />
      </div>
    </div>
  );
}

window.TweaksPanel = TweaksPanel;
