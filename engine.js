// ===================== BASE DE FUERZA + ESTRELLA (ranking FIFA jun 2026, aprox/editable) =====================
// s = rating de fuerza 0-100 ; p = jugador a seguir (orientativo, editable)
const TEAMS=[
  {es:"Argentina",s:92,p:"Julián Álvarez",k:["argentina"]},
  {es:"España",s:91,p:"Lamine Yamal",k:["espana","spain"]},
  {es:"Francia",s:90,p:"Kylian Mbappé",k:["francia","france"]},
  {es:"Inglaterra",s:88,p:"Jude Bellingham",k:["inglaterra","england"]},
  {es:"Brasil",s:87,p:"Vinícius Jr",k:["brasil","brazil"]},
  {es:"Portugal",s:87,p:"Rafael Leão",k:["portugal"]},
  {es:"Países Bajos",s:85,p:"Cody Gakpo",k:["paises bajos","holanda","netherlands","holland"]},
  {es:"Alemania",s:84,p:"Florian Wirtz",k:["alemania","germany"]},
  {es:"Bélgica",s:82,p:"Kevin De Bruyne",k:["belgica","belgium"]},
  {es:"Croacia",s:80,p:"Luka Modrić",k:["croacia","croatia"]},
  {es:"Marruecos",s:80,p:"Achraf Hakimi",k:["marruecos","morocco"]},
  {es:"Colombia",s:79,p:"Luis Díaz",k:["colombia"]},
  {es:"Uruguay",s:79,p:"Federico Valverde",k:["uruguay"]},
  {es:"Senegal",s:76,p:"Nicolas Jackson",k:["senegal"]},
  {es:"Suiza",s:76,p:"Granit Xhaka",k:["suiza","switzerland"]},
  {es:"Dinamarca",s:75,p:"Rasmus Højlund",k:["dinamarca","denmark"]},
  {es:"Noruega",s:74,p:"Erling Haaland",k:["noruega","norway"]},
  {es:"Japón",s:74,p:"Takefusa Kubo",k:["japon","japan"]},
  {es:"Estados Unidos",s:74,p:"Christian Pulisic",k:["estados unidos","usa","eeuu","united states"]},
  {es:"México",s:73,p:"Santiago Giménez",k:["mexico"]},
  {es:"Ecuador",s:72,p:"Moisés Caicedo",k:["ecuador"]},
  {es:"Austria",s:72,p:"Marcel Sabitzer",k:["austria"]},
  {es:"Turquía",s:72,p:"Arda Güler",k:["turquia","turkey","turkiye"]},
  {es:"Nigeria",s:71,p:"Victor Osimhen",k:["nigeria"]},
  {es:"Suecia",s:71,p:"Alexander Isak",k:["suecia","sweden"]},
  {es:"Corea del Sur",s:71,p:"Son Heung-min",k:["corea del sur","corea","south korea","korea"]},
  {es:"Australia",s:70,p:"—",k:["australia"]},
  {es:"Egipto",s:70,p:"Mohamed Salah",k:["egipto","egypt"]},
  {es:"Costa de Marfil",s:70,p:"Simon Adingra",k:["costa de marfil","ivory coast","cote divoire","marfil"]},
  {es:"Canadá",s:70,p:"Alphonso Davies",k:["canada"]},
  {es:"Irán",s:68,p:"Mehdi Taremi",k:["iran"]},
  {es:"Paraguay",s:68,p:"Miguel Almirón",k:["paraguay"]},
  {es:"Argelia",s:68,p:"Riyad Mahrez",k:["argelia","algeria"]},
  {es:"República Checa",s:68,p:"Patrik Schick",k:["republica checa","checa","czechia","czech"]},
  {es:"Bosnia",s:67,p:"Edin Džeko",k:["bosnia","bosnia y herzegovina","bosnia herzegovina","bosniaherzegovina"]},
  {es:"Túnez",s:66,p:"—",k:["tunez","tunisia"]},
  {es:"Panamá",s:64,p:"—",k:["panama"]},
  {es:"Uzbekistán",s:62,p:"—",k:["uzbekistan"]},
  {es:"Sudáfrica",s:62,p:"—",k:["sudafrica","south africa"]},
  {es:"Arabia Saudita",s:60,p:"Salem Al-Dawsari",k:["arabia saudita","arabia","saudi arabia","saudi"]},
  {es:"Catar",s:60,p:"Akram Afif",k:["catar","qatar"]},
  {es:"Jordania",s:58,p:"Musa Al-Taamari",k:["jordania","jordan"]},
  {es:"Cabo Verde",s:58,p:"—",k:["cabo verde","cape verde"]},
  {es:"Curazao",s:56,p:"—",k:["curazao","curacao"]},
  {es:"Nueva Zelanda",s:56,p:"Chris Wood",k:["nueva zelanda","new zealand"]},
  {es:"Haití",s:54,p:"—",k:["haiti"]},
  {es:"Escocia",s:70,p:"Scott McTominay",k:["escocia","scotland"]},
  {es:"Ghana",s:69,p:"Mohammed Kudus",k:["ghana"]},
  {es:"RD del Congo",s:65,p:"Yoane Wissa",k:["rd del congo","rd congo","congo dr","dr congo","republica democratica del congo","congo"]},
  {es:"Irak",s:61,p:"Aymen Hussein",k:["irak","iraq"]},
];
const norm=t=>t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z ]/g,'').trim();
function findTeam(t){const q=norm(t); return TEAMS.find(x=>x.k.includes(q)||norm(x.es)===q||x.k.some(k=>k.startsWith(q)&&q.length>=3));}

// ===================== BANDERAS (emoji por selección) =====================
const FLAGS={
  "Argentina":"🇦🇷","España":"🇪🇸","Francia":"🇫🇷","Inglaterra":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","Brasil":"🇧🇷","Portugal":"🇵🇹",
  "Países Bajos":"🇳🇱","Alemania":"🇩🇪","Bélgica":"🇧🇪","Croacia":"🇭🇷","Marruecos":"🇲🇦","Colombia":"🇨🇴",
  "Uruguay":"🇺🇾","Senegal":"🇸🇳","Suiza":"🇨🇭","Dinamarca":"🇩🇰","Noruega":"🇳🇴","Japón":"🇯🇵",
  "Estados Unidos":"🇺🇸","México":"🇲🇽","Ecuador":"🇪🇨","Austria":"🇦🇹","Turquía":"🇹🇷","Nigeria":"🇳🇬",
  "Suecia":"🇸🇪","Corea del Sur":"🇰🇷","Australia":"🇦🇺","Egipto":"🇪🇬","Costa de Marfil":"🇨🇮","Canadá":"🇨🇦",
  "Irán":"🇮🇷","Paraguay":"🇵🇾","Argelia":"🇩🇿","República Checa":"🇨🇿","Bosnia":"🇧🇦","Túnez":"🇹🇳",
  "Panamá":"🇵🇦","Uzbekistán":"🇺🇿","Sudáfrica":"🇿🇦","Arabia Saudita":"🇸🇦","Catar":"🇶🇦","Jordania":"🇯🇴",
  "Cabo Verde":"🇨🇻","Curazao":"🇨🇼","Nueva Zelanda":"🇳🇿","Haití":"🇭🇹","Escocia":"🏴󠁧󠁢󠁳󠁣󠁴󠁿","Ghana":"🇬🇭",
  "RD del Congo":"🇨🇩","Irak":"🇮🇶"
};
function flagFor(es){return FLAGS[es]||"🏳️";}
// códigos ISO para imágenes de bandera (flagcdn.com). Inglaterra/Escocia usan subdivisión gb-*
const FLAG_CODE={
  "Argentina":"ar","España":"es","Francia":"fr","Inglaterra":"gb-eng","Brasil":"br","Portugal":"pt",
  "Países Bajos":"nl","Alemania":"de","Bélgica":"be","Croacia":"hr","Marruecos":"ma","Colombia":"co",
  "Uruguay":"uy","Senegal":"sn","Suiza":"ch","Dinamarca":"dk","Noruega":"no","Japón":"jp",
  "Estados Unidos":"us","México":"mx","Ecuador":"ec","Austria":"at","Turquía":"tr","Nigeria":"ng",
  "Suecia":"se","Corea del Sur":"kr","Australia":"au","Egipto":"eg","Costa de Marfil":"ci","Canadá":"ca",
  "Irán":"ir","Paraguay":"py","Argelia":"dz","República Checa":"cz","Bosnia":"ba","Túnez":"tn",
  "Panamá":"pa","Uzbekistán":"uz","Sudáfrica":"za","Arabia Saudita":"sa","Catar":"qa","Jordania":"jo",
  "Cabo Verde":"cv","Curazao":"cw","Nueva Zelanda":"nz","Haití":"ht","Escocia":"gb-sct","Ghana":"gh",
  "RD del Congo":"cd","Irak":"iq"
};
// devuelve la imagen de la bandera (con alto en px); si no hay código, cae al emoji
function flagImg(es, px){
  px=px||16; const code=FLAG_CODE[es];
  if(!code) return `<span class="flagimg-fb" style="font-size:${px}px">${flagFor(es)}</span>`;
  const w = px<=15?'w40':(px<=22?'w80':'w160');     // pide buena resolución y se escala por CSS
  const cw=Math.round(px*4/3);                       // ancho fijo (proporción 4:3) para que TODAS midan igual
  return `<img class="flagimg" src="https://flagcdn.com/${w}/${code}.png" alt="${es}" loading="lazy" style="width:${cw}px;height:${px}px" onerror="this.style.display='none'">`;
}

// ===================== COMPETICIONES (multi-liga) =====================
const COMPETITIONS=[
  {id:'fifa.world',          nombre:'Mundial 2026',        tipo:'torneo',         season:'2026', usaGrupos:true,  ratingsWC:true },
  {id:'uefa.champions',      nombre:'Champions League',    tipo:'torneo',         season:'2026', usaGrupos:true,  ratingsWC:false},
  {id:'eng.1',               nombre:'Premier League',      tipo:'liga',           season:'2025', usaGrupos:false, ratingsWC:false},
  {id:'esp.1',               nombre:'La Liga',             tipo:'liga',           season:'2025', usaGrupos:false, ratingsWC:false},
  {id:'ita.1',               nombre:'Serie A',             tipo:'liga',           season:'2025', usaGrupos:false, ratingsWC:false},
  {id:'fra.1',               nombre:'Ligue 1',             tipo:'liga',           season:'2025', usaGrupos:false, ratingsWC:false},
  {id:'fifa.worldq.uefa',    nombre:'Clasif. UEFA',        tipo:'clasificatoria', season:'2025', usaGrupos:false, ratingsWC:true },
  {id:'fifa.worldq.conmebol',nombre:'Clasif. Conmebol',    tipo:'clasificatoria', season:'2025', usaGrupos:false, ratingsWC:true },
  {id:'fifa.worldq.concacaf',nombre:'Clasif. Concacaf',    tipo:'clasificatoria', season:'2025', usaGrupos:false, ratingsWC:true },
  {id:'fifa.worldq.caf',     nombre:'Clasif. CAF',         tipo:'clasificatoria', season:'2025', usaGrupos:false, ratingsWC:true },
  {id:'fifa.worldq.afc',     nombre:'Clasif. AFC',         tipo:'clasificatoria', season:'2025', usaGrupos:false, ratingsWC:true },
];
const CKEY='mundial_comp_v1';
let COMP=COMPETITIONS[0];
function loadComp(){ try{const id=localStorage.getItem(CKEY); const c=COMPETITIONS.find(x=>x.id===id); if(c)COMP=c;}catch(e){} }
function refreshTeamList(){ /* Task 3: se volverá dinámico por liga; por ahora mantiene el datalist del Mundial */ }
function setComp(id){
  const c=COMPETITIONS.find(x=>x.id===id); if(!c)return;
  COMP=c; try{localStorage.setItem(CKEY,id);}catch(e){}
  // limpiar resultado y contexto del partido anterior
  if(typeof out!=='undefined'&&out) out.classList.add('hidden');
  if(typeof mTitle!=='undefined'&&mTitle) mTitle.innerHTML='Carga un partido y toca <span style="color:var(--acc)">Simular</span><small id="mCtx"></small>';
  if(typeof ctx!=='undefined'&&ctx) ctx.value='';
  ctxMsg('','mut');
  refreshTeamList();
}
function initCompSelector(){
  const sel=document.getElementById('compSel'); if(!sel)return;
  sel.innerHTML=COMPETITIONS.map(c=>`<option value="${c.id}">${c.nombre}</option>`).join('');
  sel.value=COMP.id;
}

// nombres en inglés para emparejar con TheSportsDB
const EN_NAME={
  "Argentina":"Argentina","España":"Spain","Francia":"France","Inglaterra":"England",
  "Brasil":"Brazil","Portugal":"Portugal","Países Bajos":"Netherlands","Alemania":"Germany",
  "Bélgica":"Belgium","Croacia":"Croatia","Marruecos":"Morocco","Colombia":"Colombia",
  "Uruguay":"Uruguay","Senegal":"Senegal","Suiza":"Switzerland","Dinamarca":"Denmark",
  "Noruega":"Norway","Japón":"Japan","Estados Unidos":"United States","México":"Mexico",
  "Ecuador":"Ecuador","Austria":"Austria","Turquía":"Turkey","Nigeria":"Nigeria",
  "Suecia":"Sweden","Corea del Sur":"South Korea","Australia":"Australia","Egipto":"Egypt",
  "Costa de Marfil":"Ivory Coast","Canadá":"Canada","Irán":"Iran","Paraguay":"Paraguay",
  "Argelia":"Algeria","República Checa":"Czech Republic","Bosnia":"Bosnia",
  "Túnez":"Tunisia","Panamá":"Panama","Uzbekistán":"Uzbekistan","Sudáfrica":"South Africa",
  "Arabia Saudita":"Saudi Arabia","Catar":"Qatar","Jordania":"Jordan","Cabo Verde":"Cape Verde",
  "Curazao":"Curacao","Nueva Zelanda":"New Zealand","Haití":"Haiti",
  "Escocia":"Scotland","Ghana":"Ghana","RD del Congo":"Congo DR","Irak":"Iraq"
};
function teamEnglish(es){return EN_NAME[es]||es;}

// extrae fecha YYYY-MM-DD de un contexto tipo "Grupo H · Atlanta · 21 jun 2026"
const MONTHS={ene:'01',feb:'02',mar:'03',abr:'04',may:'05',jun:'06',jul:'07',ago:'08',sep:'09',set:'09',oct:'10',nov:'11',dic:'12'};
function parseCtxDate(ctx){
  if(!ctx)return null;
  const t=ctx.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  const m=t.match(/(\d{1,2})\s+([a-z]{3,})\.?\s+(\d{4})/);
  if(!m)return null;
  const mon=MONTHS[m[2].slice(0,3)]; if(!mon)return null;
  return `${m[3]}-${mon}-${m[1].padStart(2,'0')}`;
}

// calibración automática (Dixon-Coles por diferencia de fuerza)
const BASE=1.30, K=2.3;
function autoLambdas(sa,sb){
  const d=(sa-sb)/100;
  let la=BASE*Math.exp(K*d), lb=BASE*Math.exp(-K*d);
  return [Math.min(3.2,Math.max(0.25,la)), Math.min(3.2,Math.max(0.25,lb))];
}
function autoRho(total){
  if(total<2.0)return -0.08; if(total<2.5)return -0.07;
  if(total<3.0)return -0.06; if(total<3.5)return -0.05; return -0.04;
}

// ===================== MODELO DIXON-COLES (goles) =====================
function logFact(n){let s=0;for(let k=2;k<=n;k++)s+=Math.log(k);return s;}
function poissonPmf(k,l){return Math.exp(-l + k*Math.log(l) - logFact(k));}
function poissonCdf(k,l){let s=0;for(let i=0;i<=k;i++)s+=poissonPmf(i,l);return s;}
function dc(i,j,l,m,r){
  if(i===0&&j===0) return 1 - l*m*r;
  if(i===0&&j===1) return 1 + l*r;
  if(i===1&&j===0) return 1 + m*r;
  if(i===1&&j===1) return 1 - r;
  return 1.0;
}
function simulate(lamH,lamA,rho){
  const mg=8; const P=[]; let sum=0;
  for(let i=0;i<=mg;i++){P[i]=[];for(let j=0;j<=mg;j++){
    let v=poissonPmf(i,lamH)*poissonPmf(j,lamA)*dc(i,j,lamH,lamA,rho);
    if(v<0)v=0; P[i][j]=v; sum+=v;}}
  for(let i=0;i<=mg;i++)for(let j=0;j<=mg;j++)P[i][j]/=sum;
  let h=0,d=0,a=0,o15=0,o25=0,o35=0,btts=0,csH=0,csA=0,xgH=0,xgA=0;
  const scores=[];
  for(let i=0;i<=mg;i++)for(let j=0;j<=mg;j++){const p=P[i][j];
    if(i>j)h+=p;else if(i===j)d+=p;else a+=p;
    const t=i+j; if(t>1.5)o15+=p; if(t>2.5)o25+=p; if(t>3.5)o35+=p;
    if(i>0&&j>0)btts+=p; if(j===0)csH+=p; if(i===0)csA+=p; xgH+=i*p; xgA+=j*p;
    scores.push({i,j,p});}
  scores.sort((x,y)=>y.p-x.p);
  return {h,d,a,o15,o25,o35,btts,csH,csA,xgH,xgA,scores};
}

// ===================== ELIMINATORIA: ¿QUIÉN AVANZA? =====================
// En una llave a partido único, el empate en los 90' se resuelve en prórroga
// (30' extra ≈ 1/3 del tiempo reglamentario) y, si sigue igualado, en penales.
// Devuelve la probabilidad de que cada equipo PASE de ronda.
function knockoutAdvance(lamH,lamA,rho,R){
  // R = resultado de simulate() en los 90' (R.h gana A, R.d empate, R.a gana B)
  const w90H=R.h, draw=R.d, w90A=R.a;
  // Prórroga: se escalan los goles esperados a 30 minutos
  const f=30/90;
  const ET=simulate(lamH*f, lamA*f, rho);
  const etH=ET.h, etD=ET.d, etA=ET.a;   // desenlace de la prórroga
  // Penales: casi un volado, con una ligera ventaja para el equipo más fuerte
  const diff=(lamH-lamA)/(lamH+lamA);
  let penH=0.5+0.18*diff; penH=Math.min(0.62,Math.max(0.38,penH));
  // P(avanza) = gana en 90' + (empate)·[gana prórroga + (empate prórroga)·penales]
  const advH=w90H + draw*(etH + etD*penH);
  const advA=w90A + draw*(etA + etD*(1-penH));
  // probabilidades de cómo se resuelve (para explicarlo)
  const pPenales=draw*etD;
  const pProrroga=draw*(etH+etA);
  return {advH, advA, penH, etH, etD, etA, pProrroga, pPenales, p90Decide:1-draw};
}

// ===================== MERCADOS EXTRA =====================
// posesión a partir del reparto de xG (sirve en modo manual también)
function possShare(la,lb){const a=Math.pow(la,0.6),b=Math.pow(lb,0.6);return a/(a+b);}
// remates: equipo dominante tira más pero de menor calidad (menor xG por tiro)
function teamShots(lam,poss){const q=0.13-0.05*poss; return lam/q;}
// córners: crecen con el volumen de remates
function teamCorners(shots){return 2.0+0.22*shots;}
// pases del equipo según posesión
function teamPasses(poss){return 250+poss*650;}
// prob de over en una línea .5 con Poisson
function overLine(mean,line){const k=Math.floor(line); return 1-poissonCdf(k,mean);}

// ===================== UI =====================
const pc=x=>(100*x).toFixed(1)+'%';
function setMode(m){
  const a=m==='auto';
  tabAuto.classList.toggle('on',a); tabMan.classList.toggle('on',!a);
  modeAuto.classList.toggle('hidden',!a); modeMan.classList.toggle('hidden',a);
}
// botón flotante (celular): simula según el modo activo
function quickSim(){ if(modeAuto && !modeAuto.classList.contains('hidden')) autoCalc(); else run(); }
// al activar/desactivar "fase eliminatoria", recalcular si ya hay una simulación en pantalla
function toggleKO(){ if(typeof out!=='undefined' && out && !out.classList.contains('hidden')) run(); }

function autoCalc(){
  const ta=findTeam(selA.value), tb=findTeam(selB.value);
  if(!ta||!tb){
    autoOut.classList.remove('hidden');
    autoOut.innerHTML='⚠️ No reconozco '+(!ta?('"'+selA.value+'"'):'')+(!ta&&!tb?' ni ':'')+(!tb?('"'+selB.value+'"'):'')+
      '. Prueba otro nombre o usa la pestaña <b>Manual</b>.';
    return;
  }
  const sa=ratingOf(ta.es), sb=ratingOf(tb.es);     // rating ajustado por la forma reciente (ESPN)
  let [la,lb]=autoLambdas(sa,sb);
  const learned = applyLearning(la,lb);
  la=learned[0]; lb=learned[1];
  const r=autoRho(la+lb);
  teamA.value=ta.es; teamB.value=tb.es;
  lamA.value=la.toFixed(2); lamB.value=lb.toFixed(2);
  rho.value=r; rhoVal.textContent=r.toFixed(3);
  // estimar córners (desde dominancia) y tarjetas (default Mundial) para el baseline
  const pA=possShare(la,lb);
  cornA.value=applyCornerLearn(teamCorners(teamShots(la,pA))).toFixed(1);
  cornB.value=applyCornerLearn(teamCorners(teamShots(lb,1-pA))).toFixed(1);
  cardY.value="4.2"; cardR.value="0.13";
  autoOut.classList.remove('hidden');
  const fA=TEAM_FORM[ta.es], fB=TEAM_FORM[tb.es];
  const formApplied=APPLY_FORM && ((fA&&Math.abs(fA.delta)>=0.5)||(fB&&Math.abs(fB.delta)>=0.5));
  const mom=es=>{ const f=TEAM_FORM[es];
    if(!f||!f.g) return `<b>${es}</b>: sin partidos aún`;
    const ar=f.delta>1?'📈':(f.delta<-1?'📉':'➡️'), sg=f.delta>0?'+':'';
    return `${ar} <b>${es}</b>: ${(f.gf/f.g).toFixed(1)} GF / ${(f.ga/f.g).toFixed(1)} GC en ${f.g} pj <span style="color:var(--gray)">(${sg}${f.delta.toFixed(0)})</span>`; };
  autoOut.innerHTML=`Rating: <b>${ta.es} ${Math.round(sa)}</b> vs <b>${tb.es} ${Math.round(sb)}</b> &nbsp;→&nbsp; `+
    `λ <b>${la.toFixed(2)}</b> / <b>${lb.toFixed(2)}</b> · ρ <b>${r}</b>`+
    `<br><span style="color:var(--mut)">Momento (ESPN): ${mom(ta.es)} &nbsp;·&nbsp; ${mom(tb.es)}</span>`+
    (formApplied? `<br><span style="color:var(--acc)">✓ Rating ajustado por la forma reciente.</span>`:'')+
    (LEARN.apply&&LEARN.ready? `<br><span style="color:var(--acc)">✓ Calibración por partidos jugados aplicada (goles ×${LEARN.goalAdj.toFixed(3)}).</span>`:'')+
    `<br><span style="color:var(--gray)">Base por fuerza + datos de ESPN. Ajusta en Manual si tienes datos finos.</span>`;
  run();
}

function run(){
  // si se simula manualmente, dejamos de seguir el partido en vivo anterior
  if(typeof LIVE_OPEN_ID!=='undefined' && LIVE_OPEN_ID!=null){
    LIVE_OPEN_ID=null;
    const _lc=document.getElementById('liveCompare'); if(_lc){ _lc.classList.add('hidden'); _lc.innerHTML=''; }
  }
  const A=teamA.value||'Equipo A', B=teamB.value||'Equipo B';
  const lamH=parseFloat(lamA.value), lamA_=parseFloat(lamB.value), r=parseFloat(rho.value);
  if(!(lamH>0)||!(lamA_>0)){alert('Carga xG válidos (mayores a 0)');return;}
  const R=simulate(lamH,lamA_,r);

  mTitle.innerHTML = A+' <span style="color:var(--mut)">vs</span> '+B+'<small>'+ctx.value+' · λ '+A+' '+lamH.toFixed(2)+' | '+B+' '+lamA_.toFixed(2)+' | ρ '+r+'</small>';
  out.classList.remove('hidden');

  // 1X2
  bar1x2.innerHTML='';
  const seg=(cls,v)=>{const s=document.createElement('span');s.className='seg-'+cls;s.style.width=(v*100)+'%';s.textContent=v>0.08?pc(v):'';bar1x2.appendChild(s);};
  seg('h',R.h); seg('d',R.d); seg('a',R.a);
  lblH.textContent='Gana '+A; lblA.textContent='Gana '+B;
  pH.textContent=pc(R.h); pD.textContent=pc(R.d); pA.textContent=pc(R.a);

  // ===== eliminatoria: ¿quién avanza? (incluye prórroga + penales) =====
  const koOn = (typeof koToggle!=='undefined') && koToggle && koToggle.checked;
  koWrap.classList.toggle('hidden', !koOn);
  let KO=null;
  if(koOn){
    KO=knockoutAdvance(lamH,lamA_,r,R);
    koBar.innerHTML='';
    const kseg=(cls,v)=>{const s=document.createElement('span');s.className='seg-'+cls;s.style.width=(v*100)+'%';s.textContent=v>0.08?pc(v):'';koBar.appendChild(s);};
    kseg('h',KO.advH); kseg('a',KO.advA);
    koLblH.textContent='Avanza '+A; koLblA.textContent='Avanza '+B;
    koPH.textContent=pc(KO.advH); koPA.textContent=pc(KO.advA);
    const favAdv = KO.advH>=KO.advA ? A : B;
    koTxt.innerHTML=`Probable clasificado: <b style="color:var(--txt)">${favAdv}</b> (${pc(Math.max(KO.advH,KO.advA))}). `+
      `Se resuelve en los 90' el <b>${pc(KO.p90Decide)}</b> de las veces; va a prórroga el <b>${pc(KO.pProrroga+KO.pPenales)}</b> `+
      `y a penales el <b>${pc(KO.pPenales)}</b>. En penales se asume una ligera ventaja al favorito (${pc(KO.penH)} / ${pc(1-KO.penH)}).`;
  }

  xgH.textContent=R.xgH.toFixed(2); xgA.textContent=R.xgA.toFixed(2);
  xgHl.textContent=A; xgAl.textContent=B;

  // mercados goles
  const M=[
    ['Over 1.5',R.o15],['Under 1.5',1-R.o15],
    ['Over 2.5',R.o25],['Under 2.5',1-R.o25],
    ['Over 3.5',R.o35],['Under 3.5',1-R.o35],
    ['Ambos marcan',R.btts],['No ambos',1-R.btts],
    ['Valla 0 '+A,R.csH],['Valla 0 '+B,R.csA],
  ];
  markets.innerHTML=M.map(m=>`<div class="pill"><span>${m[0]}</span><b>${pc(m[1])}</b></div>`).join('');

  // marcadores
  scores.querySelector('tbody').innerHTML=R.scores.slice(0,8).map(s=>`<tr><td>${s.i}-${s.j}</td><td class="r">${pc(s.p)}</td></tr>`).join('');

  // ===== matriz de marcadores (mapa de calor Poisson/Dixon-Coles) =====
  const HN=5; const gmap={}; let gmax=0;
  R.scores.forEach(s=>{ if(s.i<=HN&&s.j<=HN){ gmap[s.i+'_'+s.j]=s.p; if(s.p>gmax)gmax=s.p; }});
  let hh='<div class="heatwrap">';
  for(let i=0;i<=HN;i++) for(let j=0;j<=HN;j++){
    const p=gmap[i+'_'+j]||0, al=gmax>0?p/gmax:0, isMax=(p>0&&p===gmax);
    hh+=`<div class="heatcell" title="${A} ${i}-${j} ${B}: ${pc(p)}" style="background:rgba(33,208,122,${(0.05+0.85*al).toFixed(3)})${isMax?';outline:2px solid var(--acc2)':''}">`+
        `<span class="hc-sc">${i}-${j}</span><span class="hc-p">${p>=0.01?(p*100).toFixed(0)+'%':'·'}</span></div>`;
  }
  hh+='</div>';
  heatmap.innerHTML='<div class="heatmap-note">Cada casilla = marcador <b>'+A+' '+'(izq) - '+B+' (der)</b> · color = probabilidad · recuadro = el más probable</div>'+hh;

  // ===== predicción de marcador específico (modo de la distribución) =====
  const best=R.scores[0];
  const resWord = best.i>best.j ? ('Gana '+A) : (best.i===best.j ? 'Empate' : ('Gana '+B));
  predScore.innerHTML = `${A} ${best.i} - ${best.j} ${B}`+
    `<small>marcador más probable · ${pc(best.p)} · ${resWord}</small>`;
  // aclaración cuando el marcador exacto más probable no coincide con el favorito del 1X2
  const favO = R.h>=R.d&&R.h>=R.a?'H':(R.a>=R.d?'A':'D');
  const bestO = best.i>best.j?'H':(best.i===best.j?'D':'A');
  if(favO!==bestO){
    const favName = favO==='H'?('gane '+A) : favO==='A'?('gane '+B) : 'sea empate';
    let cons=null; for(const s of R.scores){ const o=s.i>s.j?'H':(s.i===s.j?'D':'A'); if(o===favO){cons=s;break;} }
    predScore.innerHTML += `<div style="font-size:12px;color:var(--mut);font-weight:400;margin-top:8px;line-height:1.45;letter-spacing:0">`+
      `El marcador exacto más probable es <b style="color:var(--txt)">${best.i}-${best.j}</b>, pero sumando todos los resultados lo más probable es que <b style="color:var(--txt)">${favName}</b> (${pc(Math.max(R.h,R.d,R.a))}). `+
      (cons?`Con ese resultado, el marcador más probable es <b style="color:var(--txt)">${cons.i}-${cons.j}</b> (${pc(cons.p)}). `:'')+
      `Es normal: el empate concentra su probabilidad en pocos marcadores y la victoria se reparte entre muchos.</div>`;
  }
  saveMsg.textContent='';

  // ===== mercados extra =====
  const possA=possShare(lamH,lamA_), possB=1-possA;
  const shA=teamShots(lamH,possA), shB=teamShots(lamA_,possB);
  const paA=teamPasses(possA), paB=teamPasses(possB);
  // córners: λ cargados a mano (o estimados en modo auto)
  const coA=parseFloat(cornA.value)||0, coB=parseFloat(cornB.value)||0;

  teamStats.innerHTML=`
    <div class="statbox"><h4>${A}</h4>
      <div class="statrow">Posesión <b>${(possA*100).toFixed(0)}%</b></div>
      <div class="statrow">Remates <b>${shA.toFixed(0)}</b></div>
      <div class="statrow">A puerta <b>${(shA*0.34).toFixed(0)}</b></div>
      <div class="statrow">Córners (λ) <b>${coA.toFixed(1)}</b></div>
      <div class="statrow">Pases <b>${paA.toFixed(0)}</b></div>
    </div>
    <div class="statbox"><h4>${B}</h4>
      <div class="statrow">Posesión <b>${(possB*100).toFixed(0)}%</b></div>
      <div class="statrow">Remates <b>${shB.toFixed(0)}</b></div>
      <div class="statrow">A puerta <b>${(shB*0.34).toFixed(0)}</b></div>
      <div class="statrow">Córners (λ) <b>${coB.toFixed(1)}</b></div>
      <div class="statrow">Pases <b>${paB.toFixed(0)}</b></div>
    </div>`;

  // ===== córners: escalera DINÁMICA (media ± 2σ) =====
  const coTot=coA+coB;
  const coSd=Math.sqrt(Math.max(coTot,1));                 // desvío Poisson
  const kLo=Math.max(1,Math.floor(coTot-2*coSd)), kHi=Math.ceil(coTot+2*coSd);
  const cLines=[]; for(let k=kLo;k<=kHi;k++) cLines.push(k+0.5);   // del mínimo al máximo del partido
  const cPicks=[]; let cRows='';
  cLines.forEach(L=>{
    const ov=overLine(coTot,L), un=1-ov;
    cPicks.push({lab:'Over '+L, p:ov}); cPicks.push({lab:'Under '+L, p:un});
    cRows+=`<tr><td>${L}</td>`+
      `<td class="r" style="color:${ov>=un?'var(--acc)':'var(--mut)'};font-weight:${ov>=un?700:400}">${pc(ov)}</td>`+
      `<td class="r" style="color:${un>ov?'var(--acc)':'var(--mut)'};font-weight:${un>ov?700:400}">${pc(un)}</td></tr>`;
  });
  // picks "fuertes pero informativos": favorito más alto, descartando las casi-seguras (>95%)
  let cInfo=cPicks.filter(x=>x.p>0.5 && x.p<=0.95).sort((a,b)=>b.p-a.p);
  if(!cInfo.length) cInfo=cPicks.slice().sort((a,b)=>b.p-a.p);   // fallback
  const cTop=cInfo.slice(0,4).map(x=>`<div class="pill"><span>${x.lab}</span><b>${pc(x.p)}</b></div>`).join('');
  cornerMk.style.display='block';
  cornerMk.innerHTML=
    `<div class="sub" style="margin:0 0 8px">Córners totales esperados (media): <b style="color:var(--acc2)">${coTot.toFixed(1)}</b></div>`+
    `<table><thead><tr><th>Línea</th><th class="r">Over</th><th class="r">Under</th></tr></thead><tbody>${cRows}</tbody></table>`+
    `<div class="sub" style="margin-top:10px">Apuestas de córners más probables <span style="color:var(--gray)">(fuertes, sin las obvias)</span>:</div>`+
    `<div class="mk" style="margin-top:6px">${cTop}</div>`;

  // tarjetas: λ amarillas y rojas del árbitro (cargados a mano)
  const yel=parseFloat(cardY.value)||0, red=parseFloat(cardR.value)||0;
  const shareA=0.5-0.4*(possA-0.5);            // el de menos posesión comete más faltas
  const yelA=yel*shareA, yelB=yel*(1-shareA);
  const refTxt=refName.value? (' · árbitro: '+refName.value):'';
  const yLines=[2.5,3.5,4.5,5.5,6.5,7.5];
  const yPicks=[]; let yRows='';
  yLines.forEach(L=>{
    const ov=overLine(yel,L), un=1-ov;
    yPicks.push({lab:'Over '+L, p:ov}); yPicks.push({lab:'Under '+L, p:un});
    yRows+=`<tr><td>${L}</td>`+
      `<td class="r" style="color:${ov>=un?'var(--acc)':'var(--mut)'};font-weight:${ov>=un?700:400}">${pc(ov)}</td>`+
      `<td class="r" style="color:${un>ov?'var(--acc)':'var(--mut)'};font-weight:${un>ov?700:400}">${pc(un)}</td></tr>`;
  });
  yPicks.sort((a,b)=>b.p-a.p);
  const yTop=yPicks.slice(0,4).map(x=>`<div class="pill"><span>${x.lab}</span><b>${pc(x.p)}</b></div>`).join('');
  cardsBox.innerHTML=
    `Amarillas esperadas (total): <b>${yel.toFixed(1)}</b>${refTxt}`+
    `<div class="statrow" style="margin-top:6px">${A} <b>${yelA.toFixed(1)}</b> &nbsp;·&nbsp; ${B} <b>${yelB.toFixed(1)}</b></div>`+
    `<table style="margin-top:8px"><thead><tr><th>Línea amarillas</th><th class="r">Over</th><th class="r">Under</th></tr></thead><tbody>${yRows}</tbody></table>`+
    `<div class="sub" style="margin-top:8px">Amarillas más probables:</div><div class="mk" style="margin-top:6px">${yTop}</div>`+
    `<div class="statrow" style="margin-top:10px">Rojas esperadas <b>${red.toFixed(2)}</b> &nbsp;·&nbsp; Prob. de al menos una roja <b>${pc(1-Math.exp(-red))}</b></div>`+
    `<div style="color:var(--red);font-size:11px;margin-top:6px">Basado en los promedios del árbitro. Es el mercado más volátil: tómalo con pinzas.</div>`;

  // confianza
  const top=Math.max(R.h,R.d,R.a);
  let cls,lab,msg;
  if(top>=0.70){cls='c-alta';lab='ALTA';msg='Favorito claro. La confianza es sobre el resultado esperado, no garantía de acierto. Si el favorito es obvio, el mérito predictivo es bajo.';}
  else if(top>=0.45){cls='c-media';lab='MEDIA';msg='Hay favorito pero con margen real para sorpresa. El modelo tiene una lectura moderada.';}
  else{cls='c-baja';lab='BAJA';msg='Partido parejo: el modelo NO tiene una lectura fuerte. Cualquier resultado es razonable.';}
  const fav = R.h>=R.d&&R.h>=R.a ? 'Gana '+A : (R.a>=R.d ? 'Gana '+B : 'Empate');
  confBox.innerHTML=`<span class="conf ${cls}">${lab}</span> &nbsp; Escenario más probable: <b>${fav}</b> (${pc(top)})`;
  confTxt.textContent=msg;

  // snapshot completo de la predicción para el historial (incluye mercados extra)
  lastPrediction={
    A, B, ctx:ctx.value, lamH, lamA:lamA_, rho:r,
    pH:R.h, pD:R.d, pA:R.a,
    predResult: R.h>=R.d&&R.h>=R.a ? 'H' : (R.a>=R.d ? 'A' : 'D'),
    si:R.scores[0].i, sj:R.scores[0].j, sp:R.scores[0].p,
    xgH:R.xgH, xgA:R.xgA, o25:R.o25, btts:R.btts,
    predPossA:possA, predShotsA:shA, predShotsB:shB, predCornersTot:coTot, predYellowTot:yel,
    ko: KO ? {on:true, advH:KO.advH, advA:KO.advA, pProrroga:KO.pProrroga, pPenales:KO.pPenales, penH:KO.penH} : {on:false}
  };
  // datos curados para la imagen: línea más PAREJA (cerca del 50/50) de cada mercado con escalera
  const balanced=(arr)=>{ let best=null,bd=9; arr.forEach(([L,ov])=>{const d=Math.abs(ov-0.5); if(d<bd){bd=d; best= ov>=0.5?{lab:'Over '+L,p:ov}:{lab:'Under '+L,p:1-ov};}}); return best; };
  const gMid=balanced([[1.5,R.o15],[2.5,R.o25],[3.5,R.o35]]);
  const cMid=balanced(cLines.map(L=>[L,overLine(coTot,L)]));
  const yMid=balanced(yLines.map(L=>[L,overLine(yel,L)]));
  SHARE={
    A,B,ctx:ctx.value, h:R.h,d:R.d,a:R.a,
    score:`${A} ${best.i}-${best.j} ${B}`, scoreP:best.p,
    xgH:R.xgH, xgA:R.xgA,
    goals: gMid? (gMid.lab+' ('+pc(gMid.p)+')') : '',
    btts: R.btts>=0.5?('Sí ('+pc(R.btts)+')'):('No ('+pc(1-R.btts)+')'),
    corner: cMid? (cMid.lab+' ('+pc(cMid.p)+')') : '',
    card: yMid? (yMid.lab+' ('+pc(yMid.p)+')') : ''
  };
  // en celular, llevar la vista a los resultados al simular (no en la carga inicial)
  if(APP_READY && window.innerWidth<=880){ try{ document.getElementById('results').scrollIntoView({behavior:'smooth',block:'start'}); }catch(e){} }
}

let ASK_PROMPT='';
function buildAsk(){
  if(!askBox.classList.contains('hidden')){askBox.classList.add('hidden');return;}
  const A=teamA.value||'Equipo A', B=teamB.value||'Equipo B';
  const ctxTxt = ctx.value? (' ('+ctx.value+')') : '';
  ASK_PROMPT =
`Actúa como analista de fútbol. Estoy usando un simulador de partidos basado en un modelo de Poisson bivariado con ajuste Dixon-Coles. Necesito que ESTIMES los parámetros de entrada del modelo para este partido.

PARTIDO: ${A} vs ${B}${ctxTxt}

MÉTODO (IMPORTANTE): basa los números en DATOS REALES, no los supongas "a ojo". Busca y usa: forma reciente y resultados de los últimos partidos de cada equipo, sus promedios reales de goles a favor/en contra y de córners, lesiones/bajas, alineaciones probables, localía/clima y el árbitro designado con sus promedios de tarjetas. CALCULA cada número a partir de esos datos (por ejemplo: el xG de un equipo ≈ combinación de su ataque reciente y la defensa reciente del rival; los córners ≈ su promedio reciente ajustado por el dominio esperado). Si NO puedes navegar o faltan datos, estima con tu conocimiento y acláralo explícitamente — pero no inventes cifras sin fundamento. HAZLO EN ESTA MISMA RESPUESTA: no pidas permiso ni preguntes "¿quieres que busque...?"; investiga directamente con las herramientas que tengas y entrega los 7 valores ya calculados. Si un dato puntual no existe, usa el más razonable y márcalo, pero NUNCA dejes de entregar las 7 líneas.

PASOS (sigue este procedimiento para calcular los valores):
1) Obtén los últimos 5-10 partidos de cada selección.
2) Calcula sus goles a favor y en contra por partido.
3) Obtén su xG y xGA recientes.
4) Obtén sus córners a favor y en contra.
5) Ajusta por la fuerza del rival.
6) Ajusta por la situación de grupo (si a alguno le vale el empate o necesita ganar sí o sí).
7) Calcula λ local y λ visita (el xG de cada equipo) combinando lo anterior.
8) Elige ρ Dixon-Coles según el planteamiento táctico esperado (más negativo, -0.07/-0.08, si se espera un partido trabado o un equipo cerrándose atrás).

Significado de cada parámetro (respeta los rangos):
- Local / Visita = goles esperados (xG) de cada equipo en ESTE partido. Típico 0.2 a 3.5.
- Rho = ajuste Dixon-Coles. Entre -0.08 (muy trabado, pocos goles) y -0.03 (abierto). Usa -0.06 si tienes dudas.
- Corners local / Corners visita = córners esperados (lambda) de cada equipo. Típico 2 a 8.
- Tarjeta arbitro = total de tarjetas AMARILLAS esperadas en el partido (depende sobre todo del árbitro). Típico 3 a 6.
- Rojas arbitro = tarjetas ROJAS esperadas. Típico 0.05 a 0.30.

Planteamiento táctico (IMPORTANTE): evalúa si algún equipo probablemente se CIERRE a defender (típico de un equipo claramente inferior, o de quien le alcanza el empate para clasificar). Si es así: baja su xG, baja TAMBIÉN algo el xG del favorito (menos espacios, partido roto) y usa un Rho más negativo (-0.07 a -0.08) para reflejar un partido trabado con riesgo de 0-0 o 1-0. No asumas que el favorito golea solo por ser mejor: muchos partidos grande-vs-chico terminan 1-0 o 0-0.

FORMATO DE SALIDA (obligatorio): devuelve EXACTAMENTE estas 7 líneas, cada una con un número usando PUNTO decimal y sin texto extra en la línea. No cambies los nombres de las claves ni el orden:

Local=
Visita=
Rho=
Corners local=
Corners visita=
Tarjeta arbitro=
Rojas arbitro=

Debajo de esas 7 líneas puedes agregar 3 a 5 líneas explicando brevemente tu razonamiento (forma, bajas, árbitro, contexto).`;
  askBox.classList.remove('hidden');
  askBox.innerHTML='<button class="ghost" style="margin-bottom:8px;padding:6px 12px" onclick="copyAsk(this)">📋 Copiar prompt</button>'+
    '<div id="askText" style="white-space:pre-wrap"></div>';
  document.getElementById('askText').textContent=ASK_PROMPT;
}
function copyAsk(btn){
  const done=()=>{const t=btn.textContent; btn.textContent='✓ Copiado'; setTimeout(()=>btn.textContent=t,1500);};
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(ASK_PROMPT).then(done).catch(()=>{selectAsk();});
  }else{ selectAsk(); }
}
function selectAsk(){
  const el=document.getElementById('askText'); if(!el)return;
  const r=document.createRange(); r.selectNodeContents(el);
  const sel=window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
}

// descarga el panel de resultados como imagen PNG (para compartir)
function downloadImage(){
  if(typeof html2canvas!=='function'){ alert('No pude cargar la librería de imagen (¿sin internet?). Usa el botón 📄 PDF.'); return; }
  if(!SHARE){ alert('Simula un partido primero.'); return; }
  const node=buildShareCard(SHARE);
  html2canvas(node,{backgroundColor:null, scale:2}).then(canvas=>{
    node.remove();
    const A=(SHARE.A||'A').replace(/[^a-z0-9]/gi,''), B=(SHARE.B||'B').replace(/[^a-z0-9]/gi,'');
    const a=document.createElement('a'); a.download='rocky-predictor-'+A+'-vs-'+B+'.png'; a.href=canvas.toDataURL('image/png'); a.click();
  }).catch(()=>{ node.remove(); alert('No se pudo generar la imagen. Usa el botón 📄 PDF.'); });
}
// arma una tarjeta diseñada con lo más probable de cada mercado
function buildShareCard(S){
  const pct=x=>(100*x).toFixed(1)+'%';
  const LOGO=(typeof LOGO_DATA_URI!=='undefined'&&LOGO_DATA_URI)?LOGO_DATA_URI:'favicon.ico';
  const w=document.createElement('div');
  w.style.cssText='position:fixed;left:-9999px;top:0;width:600px;padding:26px;background:linear-gradient(160deg,#16140d,#0a0907);color:#f3eede;font-family:Segoe UI,system-ui,Arial,sans-serif;border-radius:16px;box-sizing:border-box;border:1px solid #4a3f24;overflow:hidden';
  const cell=(t,v,col)=>`<div style="flex:1;background:#211d12;border-radius:10px;padding:10px"><div style="font-size:11px;color:#b0a890">${t}</div><div style="font-size:20px;font-weight:800;color:${col}">${v}</div></div>`;
  const mk=(t,v)=>v?`<div style="background:#211d12;border-radius:9px;padding:10px"><div style="font-size:11px;color:#b0a890">${t}</div><div style="font-size:14px;font-weight:700;color:#e6b53c">${v}</div></div>`:'';
  w.innerHTML=
    `<img src="${LOGO}" alt="" style="position:absolute;top:18px;right:20px;width:120px;height:120px;object-fit:contain;opacity:.06;z-index:0;pointer-events:none">`+
    `<div style="position:relative;z-index:1">`+
    `<div style="display:flex;align-items:center;gap:8px;font-size:13px;color:#ffd76a;letter-spacing:1px;text-transform:uppercase;font-weight:700"><img src="${LOGO}" style="height:24px;width:24px;object-fit:contain;border-radius:5px" alt="">Rocky Predictor · Mundial 2026</div>`+
    `<div style="font-size:26px;font-weight:800;margin:6px 0 2px">${S.A} <span style="color:#b0a890;font-weight:400">vs</span> ${S.B}</div>`+
    `<div style="font-size:12px;color:#b0a890;margin-bottom:16px">${S.ctx||''}</div>`+
    `<div style="display:flex;gap:10px;text-align:center;margin-bottom:12px">`+
      cell('Gana '+S.A, pct(S.h), '#3da5ff')+cell('Empate', pct(S.d), '#7c89a8')+cell('Gana '+S.B, pct(S.a), '#ff5d6c')+
    `</div>`+
    `<div style="text-align:center;background:#211d12;border-radius:10px;padding:12px;margin-bottom:14px">`+
      `<div style="font-size:11px;color:#b0a890">Marcador más probable</div>`+
      `<div style="font-size:24px;font-weight:800;color:#e6b53c">${S.score} <span style="font-size:13px;color:#b0a890">${pct(S.scoreP)}</span></div>`+
      `<div style="font-size:12px;color:#b0a890;margin-top:4px">Goles esperados: ${S.xgH.toFixed(2)} – ${S.xgA.toFixed(2)}</div>`+
    `</div>`+
    `<div style="font-size:12px;color:#ffd76a;text-transform:uppercase;letter-spacing:1px;font-weight:700;margin-bottom:8px">Mercados más probables</div>`+
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">`+
      mk('Goles', S.goals)+mk('Ambos marcan', S.btts)+mk('Córners', S.corner)+mk('Tarjetas amarillas', S.card)+
    `</div>`+
    `<div style="font-size:10px;color:#8a8478;margin-top:16px;border-top:1px solid #4a3f24;padding-top:10px">🐶 Rocky Predictor · Poisson bivariado + Dixon-Coles · uso educativo / pronósticos: son probabilidades, no certezas.</div>`+
    `</div>`;
  document.body.appendChild(w); return w;
}

// Pega la respuesta de la IA en el formato y carga todos los campos
function loadPasted(){
  const txt=pasteBox.value;
  if(!txt.trim()){pasteMsg.textContent='Pega la respuesta en el formato indicado.';return;}
  const T=txt.normalize('NFD').replace(/[\u0300-\u036f]/g,''); // sin acentos
  const get=(key)=>{
    const re=new RegExp(key+'\\s*=\\s*(-?[0-9]+(?:[.,][0-9]+)?)','i');
    const m=T.match(re); return m? parseFloat(m[1].replace(',','.')) : null;
  };
  const map=[
    ['local','lamA'],['visita','lamB'],['rho','rho'],
    ['corners local','cornA'],['corners visita','cornB'],
    ['tarjeta arbitro','cardY'],['rojas arbitro','cardR'],
  ];
  let n=0;
  map.forEach(([key,id])=>{const v=get(key); if(v!==null && !isNaN(v)){document.getElementById(id).value=v; n++;}});
  if(n===0){pasteMsg.textContent='No reconocí ningún valor. Revisa el formato (ej: Local=2.45).';return;}
  rhoVal.textContent=parseFloat(rho.value).toFixed(3);
  setMode('man');
  pasteMsg.textContent=`Cargué ${n} valor(es). Simulando…`;
  run();
}

// datalist + presets + listeners
const dl=document.getElementById('teamlist');
TEAMS.slice().sort((a,b)=>a.es.localeCompare(b.es)).forEach(t=>{const o=document.createElement('option');o.value=t.es;dl.appendChild(o);});

// ===================== SELECTOR VISUAL DE EQUIPOS (banderas, lado a lado) =====================
let PICK_A='Bélgica', PICK_B='Irán';
const SORTED_TEAMS=TEAMS.slice().sort((a,b)=>a.es.localeCompare(b.es,'es'));
function renderTeamPicker(){
  const colA=document.getElementById('colA'), colB=document.getElementById('colB');
  if(!colA||!colB)return;
  const cell=(t,side)=>{
    const selThis = side==='A' ? PICK_A===t.es : PICK_B===t.es;
    const takenOther = side==='A' ? PICK_B===t.es : PICK_A===t.es;
    return `<div class="team-opt ${selThis?('sel-'+side.toLowerCase()):''} ${takenOther?'taken':''}" `+
      `data-es="${t.es}" onclick="pickTeam('${side}',this.dataset.es)">`+
      `<span class="fl">${flagImg(t.es,17)}</span><span class="nm">${t.es}</span></div>`;
  };
  colA.innerHTML=SORTED_TEAMS.map(t=>cell(t,'A')).join('');
  colB.innerHTML=SORTED_TEAMS.map(t=>cell(t,'B')).join('');
  const selA=document.getElementById('selA'), selB=document.getElementById('selB');
  if(selA)selA.value=PICK_A; if(selB)selB.value=PICK_B;
  const pa=document.getElementById('pickSelA'), pb=document.getElementById('pickSelB');
  if(pa)pa.innerHTML=flagImg(PICK_A,18)+' '+PICK_A;
  if(pb)pb.innerHTML=flagImg(PICK_B,18)+' '+PICK_B;
  const f=document.getElementById('teamFilter'); if(f&&f.value)filterTeams(f.value);
}
function pickTeam(side,es){
  if(side==='A'){ if(es===PICK_B)return; PICK_A=es; }
  else { if(es===PICK_A)return; PICK_B=es; }
  renderTeamPicker();
}
function filterTeams(q){
  const n=norm(q);
  document.querySelectorAll('#colA .team-opt, #colB .team-opt').forEach(el=>{
    el.classList.toggle('hide', n.length>0 && !norm(el.dataset.es).includes(n));
  });
}
renderTeamPicker();

const PRESETS=[
  {a:'Bélgica',b:'Irán',lh:1.85,la:0.72,r:-0.06,cl:6.5,cv:3.0,cy:4.2,cr:0.13,c:'Grupo G · Los Ángeles · 21 jun 2026'},
  {a:'España',b:'Arabia Saudita',lh:2.45,la:0.48,r:-0.055,cl:8.0,cv:2.5,cy:4.2,cr:0.13,c:'Grupo H · Atlanta · 21 jun 2026'},
];
const pe=document.getElementById('presets');
PRESETS.forEach(p=>{
  const c=document.createElement('span');c.className='chip';c.textContent=p.a+' vs '+p.b;
  c.onclick=()=>{setMode('man');teamA.value=p.a;teamB.value=p.b;lamA.value=p.lh;lamB.value=p.la;rho.value=p.r;rhoVal.textContent=p.r.toFixed(3);
    cornA.value=p.cl;cornB.value=p.cv;cardY.value=p.cy;cardR.value=p.cr;ctx.value=p.c;run();};
  pe.appendChild(c);
});
rho.addEventListener('input',()=>rhoVal.textContent=parseFloat(rho.value).toFixed(3));

// ===================== HISTORIAL Y APRENDIZAJE =====================
let lastPrediction=null;
let SHARE=null;
let APP_READY=false;   // evita auto-scroll en la carga inicial
const HKEY='mundial_hist_v1', LKEY='mundial_learnApply_v1', SEEDKEY='mundial_seeded_v1', FKEY='mundial_formApply_v1';
let HIST=[];
let histShowAll=false;
let APPLY_FORM=true;   // ingrediente: forma reciente ajustada por rival (on/off)
function toggleHistAll(){ histShowAll=!histShowAll; renderHistory(); }
const LEARN={apply:false, goalAdj:1, ready:false, n:0, accRes:0, accScore:0, accOU:0, accBtts:0, avgErr:0, bias:0};

function loadHist(){
  try{HIST=JSON.parse(localStorage.getItem(HKEY))||[];}catch(e){HIST=[];}
  const lk=localStorage.getItem(LKEY);
  LEARN.apply = (lk===null) ? true : (lk==='1');   // calibración ACTIVA por defecto (respeta si la apagas)
  const fk=localStorage.getItem(FKEY);
  APPLY_FORM = (fk===null) ? true : (fk==='1');     // forma reciente ACTIVA por defecto
}
function persistHist(){localStorage.setItem(HKEY,JSON.stringify(HIST));}

// construye una predicción corriendo el modelo real (mismas probabilidades que el simulador)
function buildPred(A,B,ctx,lamH,lamA,rho,realA,realB){
  const R=simulate(lamH,lamA,rho); const best=R.scores[0];
  const possA=possShare(lamH,lamA);
  const shA=teamShots(lamH,possA), shB=teamShots(lamA,1-possA);
  const coTot=teamCorners(shA)+teamCorners(shB);
  return {
    A,B,ctx,lamH,lamA,rho,
    pH:R.h,pD:R.d,pA:R.a,
    predResult: R.h>=R.d&&R.h>=R.a ? 'H' : (R.a>=R.d ? 'A':'D'),
    si:best.i,sj:best.j,sp:best.p,
    xgH:R.xgH,xgA:R.xgA,o25:R.o25,btts:R.btts,
    predPossA:possA, predShotsA:shA, predShotsB:shB, predCornersTot:coTot, predYellowTot:4.2,
    actualA:realA,actualB:realB
  };
}

// precarga (una sola vez) los partidos del 21 jun 2026 con su resultado real
function seedHistory(){
  if(localStorage.getItem(SEEDKEY)==='1') return;     // ya sembrado antes
  if(HIST.length){localStorage.setItem(SEEDKEY,'1'); return;}  // respeta datos del usuario
  const seeds=[
    // [A, B, contexto, λA, λB, ρ, golesRealesA, golesRealesB]
    ['España','Arabia Saudita','Grupo H · Atlanta · 21 jun 2026', 2.45, 0.48, -0.055, 4, 0],
    ['Uruguay','Cabo Verde','Grupo G · Los Ángeles · 21 jun 2026', 2.11, 0.80, -0.06, 2, 2],
    ['Bélgica','Irán','21 jun 2026', 1.85, 0.72, -0.06, 0, 0],   // predicción del propio simulador
  ];
  seeds.forEach((s,i)=>{const p=buildPred(...s); p.id='seed-'+i; p.ts=Date.now()+i; HIST.push(p);});
  persistHist();
  localStorage.setItem(SEEDKEY,'1');
}

function savePrediction(){
  if(!lastPrediction){saveMsg.textContent='Simula un partido primero.';return;}
  const p=Object.assign({}, lastPrediction, {id:Date.now()+'-'+Math.random().toString(36).slice(2,7), ts:Date.now(), actualA:null, actualB:null});
  HIST.unshift(p);
  persistHist(); computeLearning(); renderHistory();
  saveMsg.textContent='✓ Predicción guardada en el historial. Carga el resultado real cuando se juegue.';
}

function setResult(id){
  const it=HIST.find(x=>x.id===id); if(!it)return;
  const a=parseInt(document.getElementById('ra_'+id).value,10);
  const b=parseInt(document.getElementById('rb_'+id).value,10);
  if(isNaN(a)||isNaN(b)||a<0||b<0){alert('Carga un marcador real válido (ej: 2 y 0).');return;}
  it.actualA=a; it.actualB=b;
  persistHist(); computeLearning(); renderHistory();
}
function delItem(id){HIST=HIST.filter(x=>x.id!==id); persistHist(); computeLearning(); renderHistory();}
function clearHistory(){
  if(!HIST.length){return;}
  if(!confirm('¿Vaciar todo el historial de predicciones y lo aprendido?'))return;
  HIST=[]; persistHist(); computeLearning(); renderHistory();
}
function toggleLearn(cb){
  LEARN.apply=cb.checked; try{localStorage.setItem(LKEY, cb.checked?'1':'0');}catch(e){}
  renderHistory();
  if(modeAuto && !modeAuto.classList.contains('hidden')) autoCalc();
  const vb=document.getElementById('viewBracket'); if(vb && !vb.classList.contains('hidden')) renderBracket();
}
// ingrediente: forma reciente ajustada por rival (afecta modo automático, en vivo y bracket)
function toggleForm(cb){
  APPLY_FORM=cb.checked; try{localStorage.setItem(FKEY, cb.checked?'1':'0');}catch(e){}
  renderHistory();
  if(modeAuto && !modeAuto.classList.contains('hidden')) autoCalc();
  const vb=document.getElementById('viewBracket'); if(vb && !vb.classList.contains('hidden')) renderBracket();
}

// ===== búsqueda automática de resultados (TheSportsDB, clave gratuita 123) =====
const SDB='https://www.thesportsdb.com/api/v1/json/123/eventsday.php';
const SDB_SEASON='https://www.thesportsdb.com/api/v1/json/123/eventsseason.php';
const WC_LEAGUE='4429';   // FIFA World Cup
let WC_CACHE={};          // calendario por año, para no rebajarlo cada vez
async function fetchWCSeason(year){
  if(WC_CACHE[year]) return WC_CACHE[year];
  try{
    const r=await fetch(`${SDB_SEASON}?id=${WC_LEAGUE}&s=${year}`);
    if(!r.ok) return [];
    const d=await r.json(); const ev=(d&&d.events)||[];
    WC_CACHE[year]=ev; return ev;
  }catch(e){ return []; }
}
function setStatus(id,msg,kind){const el=document.getElementById('st_'+id); if(el){ if(kind==='load'){el.innerHTML='<span class="spin"></span>'+msg;}else{el.textContent=msg;} el.style.color = kind==='ok'?'var(--acc)':kind==='err'?'var(--red)':'var(--mut)';}}

// ===== fuente 2: ESPN (API oculta, sin clave, CORS abierto, Mundial completo) =====
const ESPN='https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard';
async function fetchESPNday(ymdCompact){
  try{
    const r=await fetch(ymdCompact? `${ESPN}?dates=${ymdCompact}` : ESPN);
    if(!r.ok) return [];
    const d=await r.json(); return (d&&d.events)||[];
  }catch(e){ return []; }
}
// normaliza un evento de ESPN al mismo formato que TheSportsDB (+ estadísticas)
function espnStat(c,name){const a=(c.statistics||[]).find(s=>s.name===name); return a!=null? parseFloat(a.displayValue): null;}
function espnParse(ev){
  const comp=ev&&ev.competitions&&ev.competitions[0]; if(!comp) return null;
  const cs=comp.competitors||[];
  const home=cs.find(c=>c.homeAway==='home'), away=cs.find(c=>c.homeAway==='away');
  if(!home||!away) return null;
  const st=comp.status&&comp.status.type;
  const homeId=home.team&&home.team.id;
  let yellow=0, red=0, yA=0, yB=0, rA=0, rB=0; const scorers=[];
  (comp.details||[]).forEach(d=>{
    const isHome=(d.team&&d.team.id)===homeId;
    if(d.yellowCard){ yellow++; if(isHome)yA++; else yB++; }
    if(d.redCard){ red++; if(isHome)rA++; else rB++; }
    if(d.scoringPlay){
      const ath=d.athletesInvolved&&d.athletesInvolved[0];
      scorers.push({name: ath? ath.displayName:'', min:(d.clock&&d.clock.displayValue)||'', ownGoal:!!d.ownGoal, home:(d.team&&d.team.id)===homeId, pen:!!d.penaltyKick, shootout:!!d.shootout});
    }
  });
  return {
    strHomeTeam:(home.team&&(home.team.displayName||home.team.name))||'',
    strAwayTeam:(away.team&&(away.team.displayName||away.team.name))||'',
    intHomeScore: home.score, intAwayScore: away.score,
    strStatus: st? (st.completed?'FT':(st.state==='pre'?'NS':'IN')) : '',
    phaseNote: compNoteText(comp),
    homeWinner: !!home.winner, awayWinner: !!away.winner,
    homeColor:(home.team&&home.team.color)||null, awayColor:(away.team&&away.team.color)||null,
    homeShootout: home.shootoutScore!=null?home.shootoutScore:null,
    awayShootout: away.shootoutScore!=null?away.shootoutScore:null,
    stats:{
      homePoss:espnStat(home,'possessionPct'), awayPoss:espnStat(away,'possessionPct'),
      homeShots:espnStat(home,'totalShots'), awayShots:espnStat(away,'totalShots'),
      homeSOT:espnStat(home,'shotsOnTarget'), awaySOT:espnStat(away,'shotsOnTarget'),
      homeCorners:espnStat(home,'wonCorners'), awayCorners:espnStat(away,'wonCorners'),
      homeFouls:espnStat(home,'foulsCommitted'), awayFouls:espnStat(away,'foulsCommitted'),
      yellow, red, yellowA:yA, yellowB:yB, redA:rA, redB:rB, scorers
    }
  };
}
// genera una ventana de ±3 días alrededor de una fecha YYYY-MM-DD
function windowYmd(date,fmt){
  const base=new Date(date+'T12:00:00Z'); const out=[];
  for(let off=-3;off<=3;off++){const d=new Date(base); d.setUTCDate(d.getUTCDate()+off);
    const s=d.toISOString().slice(0,10); out.push(fmt==='compact'? s.replace(/-/g,''): s);}
  return out;
}

// ===== buscar contexto del partido (fecha, sede, grupo) desde ESPN =====
const MES_ES=['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
function fmtDateEs(iso){const d=new Date(iso); if(isNaN(d))return ''; return d.getUTCDate()+' '+MES_ES[d.getUTCMonth()]+' '+d.getUTCFullYear();}
function ctxMsg(m,kind){const el=document.getElementById('ctxMsg'); if(el){ if(kind==='load'){el.innerHTML='<span class="spin"></span>'+m;}else{el.textContent=m;} el.style.color=kind==='ok'?'var(--acc)':kind==='err'?'var(--red)':'var(--mut)';}}
function activeTeams(){
  const auto = modeAuto && !modeAuto.classList.contains('hidden');
  return auto? [selA.value, selB.value] : [teamA.value, teamB.value];
}
// ids de ESPN por selección (fijos, evita depender de la lista remota)
const ESPN_ID={
  "Argelia":"624","Argentina":"202","Australia":"628","Austria":"474","Bélgica":"459","Bosnia":"452",
  "Brasil":"205","Canadá":"206","Cabo Verde":"2597","Colombia":"208","RD del Congo":"2850","Croacia":"477",
  "Curazao":"11678","República Checa":"450","Ecuador":"209","Egipto":"2620","Inglaterra":"448","Francia":"478",
  "Alemania":"481","Ghana":"4469","Haití":"2654","Irán":"469","Irak":"4375","Costa de Marfil":"4789",
  "Japón":"627","Jordania":"2917","México":"203","Marruecos":"2869","Países Bajos":"449","Nueva Zelanda":"2666",
  "Noruega":"464","Panamá":"2659","Paraguay":"210","Portugal":"482","Catar":"4398","Arabia Saudita":"655",
  "Escocia":"580","Senegal":"654","Sudáfrica":"467","Corea del Sur":"451","España":"164","Suecia":"466",
  "Suiza":"475","Túnez":"659","Turquía":"465","Estados Unidos":"660","Uruguay":"212","Uzbekistán":"2570"
};
function espnTeamId(esName){ return ESPN_ID[esName]||null; }

// ===== detección de fase (grupos vs eliminatoria) desde la nota de ESPN =====
// los partidos de grupos traen "Group X"; los de eliminatoria, el nombre de la ronda.
function compNoteText(comp){
  if(!comp) return '';
  let t=comp.altGameNote||'';
  if(!t && comp.notes && comp.notes.length) t=comp.notes.map(n=>n.headline||n.text||'').join(' ');
  return t;
}
function detectPhase(noteText){
  const t=noteText||'';
  const mg=t.match(/Group\s+([A-Z])/i);
  if(mg) return {group:'Grupo '+mg[1].toUpperCase(), knockout:false, label:''};
  // rondas eliminatorias (el orden importa: semi/cuartos antes que "final")
  const KO=[
    [/round of 32|1\s*\/\s*16|dieciseisavos/i,'Dieciseisavos'],
    [/round of 16|1\s*\/\s*8|octavos/i,'Octavos de final'],
    [/quarter|1\s*\/\s*4|cuartos/i,'Cuartos de final'],
    [/semi/i,'Semifinal'],
    [/(3rd|third)\s*place|tercer\s*puesto/i,'Tercer puesto'],
    [/final/i,'Final'],
  ];
  for(const [re,lab] of KO){ if(re.test(t)) return {group:'', knockout:true, label:lab}; }
  // sin grupo y sin ronda reconocida: probablemente eliminatoria (indicio: no hay grupo)
  return {group:'', knockout:true, label:'', unknown:true};
}
// promedio de goles a favor/en contra en los partidos FINALIZADOS del calendario de un equipo
function recentAvg(events, teamId){
  let gf=0,ga=0,n=0;
  (events||[]).forEach(e=>{
    const comp=e.competitions&&e.competitions[0]; if(!comp)return;
    const st=comp.status&&comp.status.type; if(!st||!st.completed)return;
    const cs=comp.competitors||[];
    const me=cs.find(c=>c.id===teamId||(c.team&&c.team.id===teamId)); const opp=cs.find(c=>c!==me);
    if(!me||!opp)return;
    const sv=c=>{const s=c.score; if(s==null)return null; if(typeof s==='object')return s.value!=null?s.value:parseFloat(s.displayValue); return parseFloat(s);};
    const mg=sv(me), og=sv(opp);
    if(mg==null||og==null||isNaN(mg)||isNaN(og))return;
    gf+=mg; ga+=og; n++;
  });
  return n? {gf:gf/n, ga:ga/n, n} : null;
}
// busca un partido (jugado o PROGRAMADO) en el scoreboard, recorriendo días; próximos primero
async function findMatchScore(aN,bN){
  const DAY=86400000, tStart=Date.UTC(2026,5,11), tEnd=Date.UTC(2026,6,19), now=Date.now();
  const order=[];
  for(let t=Math.max(tStart, now-2*DAY); t<=tEnd; t+=DAY) order.push(t);   // hoy y futuro
  for(let t=tStart; t<Math.max(tStart, now-2*DAY); t+=DAY) order.push(t);   // luego pasado
  for(const t of order){
    const ymd=new Date(t).toISOString().slice(0,10).replace(/-/g,'');
    const day=await fetchESPNday(ymd);
    const de=day.find(x=>{const p=espnParse(x); return p&&eventMatches(p,aN,bN);});
    if(de){
      const comp=(de.competitions&&de.competitions[0])||{};
      const ph=detectPhase(compNoteText(comp));
      return {date:de.date, venue:(comp.venue&&comp.venue.fullName)||'', city:((comp.venue&&comp.venue.address&&comp.venue.address.city)||'').split(',')[0].trim(), group:ph.group, knockout:ph.knockout, phaseLabel:ph.label, phaseUnknown:!!ph.unknown};
    }
  }
  return null;
}
async function fetchContext(){
  const [nA,nB]=activeTeams();
  const ta=findTeam(nA), tb=findTeam(nB);
  if(!ta||!tb){ ctxMsg('No reconozco '+(!ta?('"'+nA+'"'):'')+(!ta&&!tb?' ni ':'')+(!tb?('"'+nB+'"'):'')+'.','err'); return; }
  ctxMsg('Buscando contexto en ESPN…','load');
  try{
    const idA=await espnTeamId(ta.es);
    if(!idA){ ctxMsg('No encontré a '+ta.es+' en ESPN. Carga el contexto a mano.','err'); return; }
    const r=await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/teams/${idA}/schedule`);
    if(!r.ok){ ctxMsg('La API respondió con error. Inténtalo de nuevo.','err'); return; }
    const d=await r.json(); const events=d.events||[];
    const bN=norm(teamEnglish(tb.es)), aN=norm(teamEnglish(ta.es));
    // 1) calendario del equipo (partidos ya jugados)
    let ev=events.find(e=>{
      const comps=(e.competitions&&e.competitions[0]&&e.competitions[0].competitors)||[];
      return comps.some(c=>{const n=norm((c.team&&(c.team.displayName||c.team.location))||''); return n&&(n===bN||n.includes(bN)||bN.includes(n));});
    });
    let info=null;
    if(ev){
      const comp=ev.competitions[0]||{};
      info={date:ev.date, venue:(comp.venue&&comp.venue.fullName)||'', city:((comp.venue&&comp.venue.address&&comp.venue.address.city)||'').split(',')[0].trim(), group:'', knockout:false, phaseLabel:'', phaseUnknown:false};
      try{ const day=await fetchESPNday(ev.date.slice(0,10).replace(/-/g,'')); const de=day.find(x=>x.id===ev.id);
        const dcomp=(de&&de.competitions&&de.competitions[0])||comp;
        const ph=detectPhase(compNoteText(dcomp));
        info.group=ph.group; info.knockout=ph.knockout; info.phaseLabel=ph.label; info.phaseUnknown=!!ph.unknown;
      }catch(e){}
    }else{
      // 2) fallback: scoreboard (cubre partidos PROGRAMADOS / futuros)
      ctxMsg('Buscando el partido (incluye próximos)…','load');
      info=await findMatchScore(aN,bN);
    }
    if(!info){ ctxMsg('No encontré '+ta.es+' vs '+tb.es+' (ni jugado ni programado) en el Mundial. Carga el contexto a mano.','err'); return; }
    const dateStr=fmtDateEs(info.date);
    const phaseTxt = info.group ? info.group : (info.knockout ? (info.phaseLabel||'Eliminatoria') : '');
    const parts=[]; if(phaseTxt)parts.push(phaseTxt); if(info.city)parts.push(info.city); else if(info.venue)parts.push(info.venue); if(dateStr)parts.push(dateStr);
    ctx.value=parts.join(' · ');
    // detección automática de fase eliminatoria → activa "quién avanza"
    if(typeof koToggle!=='undefined' && koToggle){ koToggle.checked=!!info.knockout; }

    // ===== λ desde la forma reciente real (mezcla con el rating base) =====
    let [rlA,rlB]=autoLambdas(ta.s,tb.s);
    const ra=recentAvg(events, String(idA));
    let rb=null;
    try{ const idB=await espnTeamId(tb.es);
      if(idB){ const r2=await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/teams/${idB}/schedule`);
        if(r2.ok){ const d2=await r2.json(); rb=recentAvg(d2.events||[], String(idB)); } }
    }catch(e){}
    let laA=rlA, laB=rlB, src='rating base';
    if(ra && rb){
      const dA=(ra.gf+rb.ga)/2, dB=(rb.gf+ra.ga)/2;        // ataque propio + defensa rival
      const w=Math.max(0,Math.min(0.5, 0.12*Math.min(ra.n,rb.n)));   // peso de la forma (capado en 0.5)
      laA=w*dA+(1-w)*rlA; laB=w*dB+(1-w)*rlB; src='forma reciente + rating';
    }
    laA=Math.min(3.2,Math.max(0.25,laA)); laB=Math.min(3.2,Math.max(0.25,laB));
    const rr=autoRho(laA+laB);
    teamA.value=ta.es; teamB.value=tb.es;
    lamA.value=laA.toFixed(2); lamB.value=laB.toFixed(2);
    rho.value=rr; rhoVal.textContent=rr.toFixed(3);
    const pA=possShare(laA,laB);
    cornA.value=applyCornerLearn(teamCorners(teamShots(laA,pA))).toFixed(1);
    cornB.value=applyCornerLearn(teamCorners(teamShots(laB,1-pA))).toFixed(1);
    setMode('man'); run();
    const form = (ra?`${ta.es} GF ${ra.gf.toFixed(1)}/GA ${ra.ga.toFixed(1)} (${ra.n})`:'')+(rb?` · ${tb.es} GF ${rb.gf.toFixed(1)}/GA ${rb.ga.toFixed(1)} (${rb.n})`:'');
    let phaseNote='';
    if(info.knockout) phaseNote = info.phaseUnknown
      ? ' 🏆 No detecté grupo → asumo eliminatoria (activé "quién avanza"; desmárcalo si es fase de grupos).'
      : ` 🏆 Fase eliminatoria${info.phaseLabel?(' ('+info.phaseLabel+')'):''} → activé "quién avanza".`;
    ctxMsg(`✓ Contexto y λ cargados (${src}).`+(form?' '+form:'')+phaseNote+' Ajusta en Manual si quieres.','ok');
  }catch(e){ ctxMsg('No se pudo conectar (posible bloqueo CORS/red). Carga el contexto a mano.','err'); }
}

function eventMatches(ev,A,B){
  const set=[norm(ev.strHomeTeam||''), norm(ev.strAwayTeam||'')];
  const inSet=x=>set.some(s=>s&&x&&(s===x||s.includes(x)||x.includes(s)));
  return inSet(A)&&inSet(B);
}

async function fetchResult(id){
  const it=HIST.find(x=>x.id===id); if(!it)return;
  const date=parseCtxDate(it.ctx);            // puede ser null
  const year=date? date.slice(0,4) : '2026';
  const A=norm(teamEnglish(it.A)), B=norm(teamEnglish(it.B));
  setStatus(id,'Buscando resultado…','load');
  let ev=null, all=[];
  try{
    // fuente 1: ESPN por ventana de ±3 días (la más completa)
    if(date){
      for(const ymd of windowYmd(date,'compact')){
        const espn=(await fetchESPNday(ymd)).map(espnParse).filter(Boolean);
        all=all.concat(espn); ev=espn.find(e=>eventMatches(e,A,B)); if(ev) break;
      }
    }else{
      const espn=(await fetchESPNday('')).map(espnParse).filter(Boolean);
      all=all.concat(espn); ev=espn.find(e=>eventMatches(e,A,B));
    }
    // fuente 2: TheSportsDB, calendario del Mundial (no depende de la fecha)
    if(!ev){
      const season=await fetchWCSeason(year); all=all.concat(season);
      ev=season.find(e=>eventMatches(e,A,B));
    }
    // fuente 3: TheSportsDB por día (respaldo)
    if(!ev && date){
      for(const ymd of windowYmd(date,'dash')){
        const r=await fetch(`${SDB}?d=${ymd}&s=Soccer`); if(!r.ok) continue;
        const data=await r.json(); const events=(data&&data.events)||[];
        all=all.concat(events); ev=events.find(e=>eventMatches(e,A,B)); if(ev) break;
      }
    }
    if(!ev){
      if(all.length===0){
        setStatus(id,'Ninguna fuente devolvió partidos (revisa la conexión o carga a mano).','err');
      }else{
        const sample=all.slice(0,8).map(e=>e.strHomeTeam+'–'+e.strAwayTeam).join(', ');
        setStatus(id,'No encontré '+it.A+' vs '+it.B+' en ninguna fuente. Quizá el rival real fue otro o el nombre difiere. Ej: '+sample+'. Pásamelo y lo ajusto, o cárgalo a mano.','err');
      }
      return;
    }
    if(ev.intHomeScore==null||ev.intHomeScore===''||ev.intAwayScore==null||ev.intAwayScore===''){
      setStatus(id,'Encontré el partido pero aún no tiene marcador final. Inténtalo más tarde.','mut');return;
    }
    const st=(ev.strStatus||'').trim();
    if(/^(NS|TBD|PPD|POSTP|CANC|IN|Not Started|Postponed|Cancelled)$/i.test(st)){
      setStatus(id,'El partido todavía no terminó (estado: '+st+'). Inténtalo cuando finalice.','mut');return;
    }
    const hs=parseInt(ev.intHomeScore,10), as=parseInt(ev.intAwayScore,10);
    const homeIsA = norm(ev.strHomeTeam||'')===A || norm(ev.strHomeTeam||'').includes(A) || A.includes(norm(ev.strHomeTeam||''));
    it.actualA = homeIsA? hs : as;
    it.actualB = homeIsA? as : hs;
    if(ev.stats){
      const s=ev.stats, pick=(h,a)=>homeIsA? h : a;
      it.actualStats={
        possA:pick(s.homePoss,s.awayPoss), possB:pick(s.awayPoss,s.homePoss),
        shotsA:pick(s.homeShots,s.awayShots), shotsB:pick(s.awayShots,s.homeShots),
        sotA:pick(s.homeSOT,s.awaySOT), sotB:pick(s.awaySOT,s.homeSOT),
        cornersTot:(s.homeCorners||0)+(s.awayCorners||0),
        yellowTot:s.yellow, redTot:s.red,
        scorers:(s.scorers||[]).map(g=>({name:g.name,min:g.min,ownGoal:g.ownGoal, forA:(g.home===homeIsA)}))
      };
    }else{ it.actualStats=null; }
    // si es eliminatoria y ESPN marca al ganador (incluye penales), registrar quién avanzó
    if(it.ko && it.ko.on && (ev.homeWinner||ev.awayWinner)){
      it.koActualAdv = ev.homeWinner ? (homeIsA?'A':'B') : (homeIsA?'B':'A');
      if(ev.homeShootout!=null||ev.awayShootout!=null){
        it.koShootout = homeIsA? {A:ev.homeShootout,B:ev.awayShootout} : {A:ev.awayShootout,B:ev.homeShootout};
      }
    }
    persistHist(); computeLearning(); renderHistory();
  }catch(e){
    setStatus(id,'No se pudo conectar (posible bloqueo CORS o sin internet). Carga el resultado a mano.','err');
  }
}

async function fetchAllPending(){
  const pend=HIST.filter(x=>x.actualA==null);
  if(!pend.length){return;}
  for(const it of pend){ await fetchResult(it.id); }
}

// expandir/colapsar el detalle de una fila del historial
function toggleDetail(id){
  const d=document.getElementById('det_'+id), c=document.getElementById('cv_'+id);
  if(!d)return; const nowHidden=d.classList.toggle('hidden'); if(c)c.textContent=nowHidden?'▸':'▾';
}
function setImportMsg(msg,kind){const el=document.getElementById('importMsg'); if(el){ if(kind==='load'){el.innerHTML='<span class="spin"></span>'+msg;}else{el.textContent=msg;} el.style.color=kind==='ok'?'var(--acc)':kind==='err'?'var(--red)':'var(--mut)';}}

// construye un item de historial desde un evento de ESPN, autoprediciéndolo con el modelo (rating de fuerza)
const DEFAULT_RATING=62;          // rating aproximado para selecciones no presentes en la base
let IMPORT_UNKNOWN=[];            // nombres no reconocidos durante el último import
function getTeamLoose(name){
  const t=findTeam(name);
  if(t) return t;
  if(name && IMPORT_UNKNOWN.indexOf(name)<0) IMPORT_UNKNOWN.push(name);
  return {es:name||'?', s:DEFAULT_RATING, fallback:true};   // no perdemos el partido
}
function buildFromESPN(ev){
  const p=espnParse(ev); if(!p) return null;
  if(p.intHomeScore==null||p.intHomeScore===''||p.intAwayScore==null||p.intAwayScore==='') return null;
  const ta=getTeamLoose(p.strHomeTeam), tb=getTeamLoose(p.strAwayTeam);
  const [la,lb]=autoLambdas(ta.s,tb.s);         // predicción baseline (sin aplicar aprendizaje)
  const rho=autoRho(la+lb);
  const R=simulate(la,lb,rho); const best=R.scores[0];
  const possA=possShare(la,lb), shA=teamShots(la,possA), shB=teamShots(lb,1-possA);
  const coTot=teamCorners(shA)+teamCorners(shB);
  const hs=parseInt(p.intHomeScore,10), as=parseInt(p.intAwayScore,10);
  const s=p.stats;
  // ===== fase eliminatoria: pronóstico de quién avanza + quién avanzó realmente =====
  const ph=detectPhase(p.phaseNote);
  let ko={on:false}, koActualAdv=null;
  if(ph.knockout){
    const KO=knockoutAdvance(la,lb,rho,R);
    ko={on:true, advH:KO.advH, advA:KO.advA, pProrroga:KO.pProrroga, pPenales:KO.pPenales, penH:KO.penH};
    // ESPN marca con winner al que avanza (sirve también en penales)
    if(p.homeWinner) koActualAdv='A'; else if(p.awayWinner) koActualAdv='B';
  }
  const phaseTxt = ph.knockout ? (ph.label||'Eliminatoria') : ph.group;
  return {
    id:'imp-'+(ev.id||Math.random().toString(36).slice(2)), espnId:ev.id||null, ts:Date.now(),
    A:ta.es, B:tb.es, ctx:'Mundial 2026'+(phaseTxt?(' · '+phaseTxt):'')+(ev.date?(' · '+ev.date.slice(0,10)):''),
    lamH:la, lamA:lb, rho,
    pH:R.h,pD:R.d,pA:R.a,
    predResult: R.h>=R.d&&R.h>=R.a?'H':(R.a>=R.d?'A':'D'),
    si:best.i,sj:best.j,sp:best.p,
    xgH:R.xgH,xgA:R.xgA,o25:R.o25,btts:R.btts,
    predPossA:possA,predShotsA:shA,predShotsB:shB,predCornersTot:coTot,predYellowTot:4.2,
    ko, koActualAdv,
    koShootout: (p.homeShootout!=null||p.awayShootout!=null)? {A:p.homeShootout, B:p.awayShootout} : null,
    approx: !!(ta.fallback||tb.fallback),
    actualA:hs, actualB:as,
    actualStats: s? {
      possA:s.homePoss,possB:s.awayPoss,shotsA:s.homeShots,shotsB:s.awayShots,
      sotA:s.homeSOT,sotB:s.awaySOT,cornersTot:(s.homeCorners||0)+(s.awayCorners||0),
      yellowTot:s.yellow,redTot:s.red,
      scorers:(s.scorers||[]).map(g=>({name:g.name,min:g.min,ownGoal:g.ownGoal,forA:g.home}))
    } : null
  };
}

// importa todos los partidos jugados del Mundial desde ESPN, autopredichos y comparados
async function importPlayed(){
  setImportMsg('Importando partidos jugados del Mundial… (puede tardar unos segundos)','load');
  IMPORT_UNKNOWN=[];
  const start=new Date(Date.UTC(2026,5,11,12));   // 11 jun 2026
  const tournEnd=new Date(Date.UTC(2026,6,19,12)); // 19 jul 2026
  const today=new Date();
  const end = today<tournEnd? today : tournEnd;
  const byId={}, byKey={};
  HIST.forEach(x=>{ if(x.actualA!=null){
    if(x.espnId) byId[x.espnId]=x;
    byKey['tm:'+norm(x.A)+'|'+norm(x.B)+'|'+x.actualA+'-'+x.actualB]=x;
    byKey['tm:'+norm(x.B)+'|'+norm(x.A)+'|'+x.actualB+'-'+x.actualA]=x;
  }});
  let added=0, upgraded=0;
  try{
    for(let d=new Date(start); d<=end; d.setUTCDate(d.getUTCDate()+1)){
      const ymd=d.toISOString().slice(0,10).replace(/-/g,'');
      const events=await fetchESPNday(ymd);
      for(const ev of events){
        const stt=ev.competitions&&ev.competitions[0]&&ev.competitions[0].status&&ev.competitions[0].status.type;
        if(!stt||!stt.completed) continue;            // solo finalizados
        const it=buildFromESPN(ev);
        if(!it) continue;
        const k1='tm:'+norm(it.A)+'|'+norm(it.B)+'|'+it.actualA+'-'+it.actualB;
        const exist = (it.espnId&&byId[it.espnId]) || byKey[k1];
        if(exist){
          // auto-corrección: si el existente era aproximado/en inglés y ahora reconocemos ambas selecciones
          if(!it.approx && (exist.approx || exist.A!==it.A || exist.B!==it.B)){
            const keepId=exist.id; Object.assign(exist,it); exist.id=keepId; upgraded++;
          }
          continue;
        }
        HIST.push(it); added++;
        if(it.espnId)byId[it.espnId]=it; byKey[k1]=it;
      }
    }
  }catch(e){ setImportMsg('Error al importar (posible bloqueo de red/CORS). Inténtalo de nuevo.','err'); return; }
  if(added||upgraded){persistHist(); computeLearning(); renderHistory();}
  const unk = IMPORT_UNKNOWN.length? ' ⚠️ Selecciones no reconocidas (rating aproximado, ajustables): '+IMPORT_UNKNOWN.join(', ')+'. Pásamelas y les pongo el rating y nombre correctos.' : '';
  const head = (added||upgraded)? `Importé ${added} nuevo(s)`+(upgraded?`, corregí ${upgraded} ya cargado(s)`:'')+`. Toca una fila para ver el detalle.` : 'Sin novedades (ya estaba todo cargado).';
  setImportMsg(head+unk, IMPORT_UNKNOWN.length?'mut':((added||upgraded)?'ok':'mut'));
}

// carga rápida: pegás varias líneas tipo "España 4-0 Arabia Saudita" y completa los marcadores
function loadBulkResults(){
  const txt=(bulkBox.value||'').trim();
  if(!txt){bulkMsg.textContent='Pega al menos una línea (ej: España 4-0 Arabia Saudita).';bulkMsg.style.color='var(--mut)';return;}
  const match=(a,b)=>a&&b&&(a===b||a.includes(b)||b.includes(a));
  let ok=0; const fail=[];
  txt.split(/\n+/).forEach(line=>{
    const t=line.trim(); if(!t)return;
    const m=t.match(/^(.+?)\s+(\d+)\s*(?:-|:|a)\s*(\d+)\s+(.+)$/i);
    if(!m){fail.push(t);return;}
    const n1=norm(m[1]), s1=parseInt(m[2],10), s2=parseInt(m[3],10), n2=norm(m[4]);
    let it=HIST.find(x=>match(norm(x.A),n1)&&match(norm(x.B),n2));
    if(it){it.actualA=s1; it.actualB=s2; ok++; return;}
    it=HIST.find(x=>match(norm(x.A),n2)&&match(norm(x.B),n1));   // por si lo pegaste al revés
    if(it){it.actualA=s2; it.actualB=s1; ok++; return;}
    fail.push(t);
  });
  if(ok){persistHist(); computeLearning(); renderHistory();}
  bulkMsg.style.color = ok? 'var(--acc)':'var(--red)';
  bulkMsg.textContent = `Cargué ${ok} resultado(s).`+(fail.length? ' Sin emparejar: '+fail.join(' · ')+'. (¿Guardaste la predicción de ese partido?)':'');
  if(ok) bulkBox.value='';
}

// resultado real -> H/D/A y aciertos del item
function judge(it){
  const a=it.actualA, b=it.actualB;
  const realRes = a>b?'H':(a===b?'D':'A');
  const j={
    realRes,
    hitRes: it.predResult===realRes,
    hitScore: it.si===a && it.sj===b,
    hitOU: (it.o25>=0.5) === ((a+b)>2.5),
    hitBtts: (it.btts>=0.5) === (a>0&&b>0),
    predTot: it.xgH+it.xgA, realTot: a+b
  };
  const s=it.actualStats;
  if(s){
    const CL=9.5, YL=3.5;
    if(it.predPossA!=null && s.possA!=null) j.hitPoss=((it.predPossA>=0.5)===(s.possA>=50));
    if(it.predCornersTot!=null && s.cornersTot!=null) j.hitCorners=((overLine(it.predCornersTot,CL)>=0.5)===(s.cornersTot>CL));
    if(it.predYellowTot!=null && s.yellowTot!=null) j.hitYellow=((overLine(it.predYellowTot,YL)>=0.5)===(s.yellowTot>YL));
  }
  return j;
}

function clamp(v,lo,hi){return Math.max(lo,Math.min(hi,v));}

function computeLearning(){
  const done=HIST.filter(x=>x.actualA!=null&&x.actualB!=null);
  const n=done.length;
  let res=0,sc=0,ou=0,bt=0,sumP=0,sumR=0,absErr=0;
  let nStats=0,hp=0,hc=0,hy=0,sumPC=0,sumRC=0;
  done.forEach(it=>{const j=judge(it);
    if(j.hitRes)res++; if(j.hitScore)sc++; if(j.hitOU)ou++; if(j.hitBtts)bt++;
    sumP+=j.predTot; sumR+=j.realTot; absErr+=Math.abs(j.predTot-j.realTot);
    if(it.actualStats){nStats++; if(j.hitPoss)hp++; if(j.hitCorners)hc++; if(j.hitYellow)hy++;
      if(it.predCornersTot!=null && it.actualStats.cornersTot!=null){sumPC+=it.predCornersTot; sumRC+=it.actualStats.cornersTot;}}});
  LEARN.n=n; LEARN.accRes=res; LEARN.accScore=sc; LEARN.accOU=ou; LEARN.accBtts=bt;
  LEARN.nStats=nStats; LEARN.accPoss=hp; LEARN.accCorners=hc; LEARN.accYellow=hy;
  LEARN.cornerAdj = (nStats>=3 && sumPC>0) ? clamp(sumRC/sumPC, 0.70, 1.40) : 1;
  LEARN.cornerReady = (nStats>=3 && sumPC>0);
  LEARN.avgErr = n? absErr/n : 0;
  LEARN.bias = n? (sumR-sumP)/n : 0;          // >0 => el modelo subestima los goles
  LEARN.goalAdj = (n>=3 && sumP>0) ? clamp(sumR/sumP, 0.80, 1.25) : 1;
  LEARN.ready = n>=3;
}

// se aplica a los λ del modo automático si el usuario lo activa
function applyLearning(la,lb){
  if(LEARN.apply && LEARN.ready){
    return [clamp(la*LEARN.goalAdj,0.25,3.2), clamp(lb*LEARN.goalAdj,0.25,3.2)];
  }
  return [la,lb];
}
// factor de córners aprendido (mismo toggle que los goles)
function applyCornerLearn(c){ return (LEARN.apply && LEARN.cornerReady)? c*LEARN.cornerAdj : c; }

// línea de "quién avanza" para el historial (solo en partidos de eliminatoria)
function koLine(it){
  if(!it.ko || !it.ko.on) return '';
  const advWhich = it.ko.advH>=it.ko.advA ? 'A' : 'B';
  const adv = advWhich==='A'? it.A : it.B;
  const advP = Math.max(it.ko.advH, it.ko.advA);
  let head = `🏆 Pronóstico de clasificación: <b style="color:var(--txt)">${adv}</b> avanza (${pc(advP)})`;
  const done = it.actualA!=null && it.actualB!=null;
  // quién avanzó realmente: 1) dato cargado/ESPN; 2) deducido del marcador no-empate
  const realWhich = it.koActualAdv || (done && it.actualA!==it.actualB ? (it.actualA>it.actualB?'A':'B') : null);
  if(realWhich){
    const realAdv = realWhich==='A'? it.A : it.B;
    const ok = realWhich===advWhich;
    const pen = it.koShootout ? ` (penales ${it.koShootout.A}-${it.koShootout.B})` : '';
    head += ` · <span style="color:${ok?'var(--acc)':'var(--red)'}">real: avanzó ${realAdv}${pen} ${ok?'✓':'✗'}</span>`;
  } else if(done){
    head += ` · <span style="color:var(--acc2)">empate ${it.actualA}-${it.actualB}: se definió en prórroga/penales</span>`;
  }
  let sel='';
  if(done && !realWhich){
    sel = `<div class="res-in" style="margin-top:6px"><span>¿Quién avanzó?</span>`+
      `<button class="ghost" onclick="setAdvancer('${it.id}','A')">${it.A}</button>`+
      `<button class="ghost" onclick="setAdvancer('${it.id}','B')">${it.B}</button></div>`;
  }
  return `<div class="sub" style="margin-top:6px">${head}</div>`+sel;
}
// el usuario fija a mano quién avanzó (útil para llaves definidas por penales)
function setAdvancer(id,which){
  const it=HIST.find(x=>x.id===id); if(!it)return;
  it.koActualAdv=which; persistHist(); renderHistory();
}

function renderHistory(){
  // panel de aprendizaje
  const n=LEARN.n;
  if(n===0){
    learnStats.innerHTML='<div class="hist-empty" style="margin-top:8px">Todavía no hay resultados cargados. Guarda predicciones y carga los marcadores reales: con 3 o más, el modelo empieza a calibrar los goles.</div>';
  }else{
    const cell=(t,v)=>`<div class="learn-cell"><small>${t}</small><b>${v}</b></div>`;
    const frac=(x)=>`${x}/${n} <span style="color:var(--mut);font-size:12px">(${(100*x/n).toFixed(0)}%)</span>`;
    const fracN=(x,d)=>d? `${x}/${d} <span style="color:var(--mut);font-size:12px">(${(100*x/d).toFixed(0)}%)</span>`:'–';
    let biasTxt;
    if(LEARN.bias>0.10) biasTxt=`subestimando los goles (+${LEARN.bias.toFixed(2)}/partido)`;
    else if(LEARN.bias<-0.10) biasTxt=`sobreestimando los goles (${LEARN.bias.toFixed(2)}/partido)`;
    else biasTxt='bien calibrado en goles';
    const marketGrid = LEARN.nStats>0 ? (
      `<div class="learn-grid">`+
        cell('Con stats (ESPN)', LEARN.nStats)+
        cell('Posesión dominante', fracN(LEARN.accPoss,LEARN.nStats))+
        cell('Córners O/U 9.5', fracN(LEARN.accCorners,LEARN.nStats))+
        cell('Amarillas O/U 3.5', fracN(LEARN.accYellow,LEARN.nStats))+
      `</div>`) : '';
    learnStats.innerHTML=
      `<div class="learn-grid">`+
        cell('Con resultado', n)+
        cell('Acierto resultado', frac(LEARN.accRes))+
        cell('Marcador exacto', frac(LEARN.accScore))+
        cell('Over/Under 2.5', frac(LEARN.accOU))+
        cell('Ambos marcan', frac(LEARN.accBtts))+
        cell('Error medio de goles', LEARN.avgErr.toFixed(2))+
      `</div>`+ marketGrid +
      `<div class="sub">Diagnóstico: el modelo está <b style="color:var(--txt)">${biasTxt}</b>. `+
      `Factor de calibración goles ${LEARN.ready?'<b style="color:var(--acc2)">×'+LEARN.goalAdj.toFixed(3)+'</b>':'(necesita 3+ resultados)'}`+
      (LEARN.cornerReady?` · córners <b style="color:var(--acc2)">×${LEARN.cornerAdj.toFixed(3)}</b>`:'')+`.</div>`+
      `<h3 class="sec" style="margin:14px 0 6px">🧪 Ingredientes del modelo</h3>`+
      `<label class="learn-toggle" title="Es la base del modelo: no se puede desactivar"><input type="checkbox" checked disabled> Rating base de fuerza <span style="color:var(--gray)">(siempre activo)</span></label>`+
      `<label class="learn-toggle"><input type="checkbox" ${APPLY_FORM?'checked':''} onchange="toggleForm(this)"> Forma reciente ajustada por rival (ESPN)</label>`+
      `<label class="learn-toggle"><input type="checkbox" ${LEARN.apply?'checked':''} ${LEARN.ready?'':'disabled'} onchange="toggleLearn(this)"> Calibración por partidos jugados (goles ×${LEARN.goalAdj.toFixed(3)}${LEARN.cornerReady?' · córners ×'+LEARN.cornerAdj.toFixed(3):''})</label>`;
  }

  // lista de predicciones (vista compacta plegable: una fila por partido, clic para ver detalle)
  if(!HIST.length){histList.innerHTML='<div class="hist-empty">Sin predicciones guardadas todavía.</div>';return;}
  const bdg=(ok,t)=>`<span class="badge ${ok?'ok':'no'}">${ok?'✓':'✗'} ${t}</span>`;
  const items=HIST.slice().sort((a,b)=>(b.ts||0)-(a.ts||0));   // más nuevo → más viejo
  const shown=histShowAll? items : items.slice(0,3);
  histList.innerHTML=shown.map(it=>{
    const done = it.actualA!=null;
    const predTxt = it.predResult==='H'?'Gana '+it.A:it.predResult==='A'?'Gana '+it.B:'Empate';
    // ---- fila compacta ----
    let icons, realChip;
    if(done){
      const j0=judge(it);
      const ouP=it.o25>=0.5?'Over 2.5':'Under 2.5', btP=it.btts>=0.5?'Ambos: Sí':'Ambos: No';
      const dot=(ok,t)=>`<span class="hr-dot ${ok?'ok':'no'}" title="${t}">${ok?'✓':'✗'}</span>`;
      icons = dot(j0.hitRes,'Resultado')+dot(j0.hitScore,'Marcador exacto')+dot(j0.hitOU,'Pred: '+ouP)+dot(j0.hitBtts,'Pred: '+btP);
      realChip = `<span class="hr-real">real ${it.A} ${it.actualA}-${it.actualB} ${it.B}</span>`;
    }else{
      icons = `<span class="hr-pend">⏳ pendiente</span>`;
      realChip = `<span class="hr-real">${it.ctx||''}</span>`;
    }
    const row = `<div class="hist-row" onclick="toggleDetail('${it.id}')">`+
      `<span class="hr-match">${it.ko&&it.ko.on?'🏆 ':''}${it.A} ${it.si}-${it.sj} ${it.B}</span>`+
      realChip+
      `<span class="hr-icons">${icons}</span>`+
      `<span class="chev" id="cv_${it.id}">▸</span>`+
      `<button class="del-x" title="Borrar" onclick="event.stopPropagation();delItem('${it.id}')">✕</button>`+
    `</div>`;
    // ---- detalle plegado ----
    let detail;
    if(!done){
      detail = `<div class="hist-meta">${it.ctx||''} · pred: ${predTxt} · marcador ${it.si}-${it.sj} (${pc(it.sp)}) · O2.5 ${pc(it.o25)} · BTTS ${pc(it.btts)}</div>`+
        koLine(it)+
        `<div class="res-in"><span>Resultado real:</span>`+
        `<input type="number" min="0" id="ra_${it.id}" placeholder="${it.A.slice(0,3)}">`+
        `<span>-</span>`+
        `<input type="number" min="0" id="rb_${it.id}" placeholder="${it.B.slice(0,3)}">`+
        `<button class="go" onclick="setResult('${it.id}')">Guardar</button>`+
        `<button class="ghost" onclick="fetchResult('${it.id}')">🔎 Buscar</button></div>`+
        `<div class="sub" id="st_${it.id}" style="margin-top:6px"></div>`;
    }else{
      const j=judge(it);
      let extra=''; const s=it.actualStats;
      if(s){
        let mb='';
        if(j.hitPoss!=null) mb+=bdg(j.hitPoss,'Posesión '+(it.predPossA>=0.5?it.A:it.B));
        if(j.hitCorners!=null) mb+=bdg(j.hitCorners,'Córners: '+(overLine(it.predCornersTot,9.5)>=0.5?'Over':'Under')+' 9.5 · hubo '+s.cornersTot);
        if(j.hitYellow!=null) mb+=bdg(j.hitYellow,'Amarillas: '+(overLine(it.predYellowTot,3.5)>=0.5?'Over':'Under')+' 3.5 · hubo '+s.yellowTot);
        const row2=(lab,p,r)=>`<tr><td>${lab}</td><td class="r">${p}</td><td class="r">${r}</td></tr>`;
        const pP=it.predPossA!=null?(it.predPossA*100).toFixed(0)+'%':'–';
        extra=(mb?`<div class="badges">${mb}</div>`:'')+
          `<table style="margin-top:8px"><thead><tr><th>Mercado</th><th class="r">Predicho</th><th class="r">Real</th></tr></thead><tbody>`+
          row2('Goles totales',(it.xgH+it.xgA).toFixed(2),it.actualA+it.actualB)+
          row2('Posesión '+it.A,pP,s.possA!=null?s.possA.toFixed(0)+'%':'–')+
          row2('Remates '+it.A,it.predShotsA!=null?it.predShotsA.toFixed(0):'–',s.shotsA!=null?s.shotsA:'–')+
          row2('Córners totales',it.predCornersTot!=null?it.predCornersTot.toFixed(1):'–',s.cornersTot!=null?s.cornersTot:'–')+
          row2('Amarillas totales',it.predYellowTot!=null?it.predYellowTot.toFixed(1):'–',s.yellowTot!=null?s.yellowTot:'–')+
          `</tbody></table>`;
        if(s.scorers&&s.scorers.length){
          const gl=s.scorers.map(g=>`${g.min} ${g.name}${g.ownGoal?' (e.c.)':''} <span style="color:var(--mut)">[${g.forA?it.A:it.B}]</span>`).join(' · ');
          extra+=`<div class="sub" style="margin-top:6px">⚽ ${gl}</div>`;
        }
      }
      const ouP=it.o25>=0.5?'Over 2.5':'Under 2.5', btP=it.btts>=0.5?'Sí':'No';
      detail = `<div class="hist-meta">${it.ctx||''} · pred: ${predTxt} · marcador ${it.si}-${it.sj} (${pc(it.sp)})</div>`+
        koLine(it)+
        `<div class="badges" style="margin-top:6px">`+
          bdg(j.hitRes,'Resultado')+bdg(j.hitScore,'Marcador exacto')+bdg(j.hitOU,'Goles: '+ouP+' · hubo '+(it.actualA+it.actualB))+bdg(j.hitBtts,'Ambos marcan: '+btP)+
        `</div>`+extra;
    }
    return row + `<div class="hist-detail hidden" id="det_${it.id}">${detail}</div>`;
  }).join('') + (items.length>3? `<div class="btns" style="margin-top:10px"><button class="ghost" onclick="toggleHistAll()">${histShowAll?'▲ Mostrar menos':'▼ Ver más ('+(items.length-3)+')'}</button></div>` : '');
}

// ===================== BRACKET / CAMINO AL TÍTULO (Monte Carlo) =====================
const BKEY='mundial_bracket_v1';
const PICKKEY='mundial_bracket_picks_v1';
const CONFKEY='mundial_bracket_conf_v1';
const BRACKET_SIZE=32;            // tamaño por defecto (Mundial 2026: ronda de 32)
let BRACKET=[];                   // array de nombres; longitud potencia de 2
let PICKS={};                     // predicciones del usuario: clave = par de equipos, valor = ganador elegido
let CONFIRMED={};                 // ganadores reales (ESPN): clave = par de equipos, valor = nombre ganador
function confKey(a,b){ return [norm(a),norm(b)].sort().join('|'); }
function loadConfirmed(){ try{const c=JSON.parse(localStorage.getItem(CONFKEY)); if(c&&typeof c==='object')CONFIRMED=c;}catch(e){} }
function saveConfirmed(){ try{localStorage.setItem(CONFKEY,JSON.stringify(CONFIRMED));}catch(e){} }
function loadPicks(){ try{const p=JSON.parse(localStorage.getItem(PICKKEY)); if(p&&typeof p==='object')PICKS=p;}catch(e){} }
function savePicks(){ try{localStorage.setItem(PICKKEY,JSON.stringify(PICKS));}catch(e){} }
// ganador mostrado en el árbol: manda tu predicción (✓); si no marcaste, el resultado real (ESPN)
function pickedWinner(a,b){ if(!a||!b)return null; const ck=confKey(a,b); if(PICKS[ck]!=null)return PICKS[ck]; if(CONFIRMED[ck]!=null)return CONFIRMED[ck]; return null; }
function isReal(a,b){ if(!a||!b)return false; return CONFIRMED[confKey(a,b)]!=null; }

// ===== forma reciente por selección (datos reales de ESPN) =====
const FORMKEY='mundial_bracket_form_v1';
let TEAM_FORM={};                 // esName -> {g, gf, ga, delta}  (delta = ajuste de rating por forma)
let _espnFetchedAt=0;
function loadForm(){ try{const f=JSON.parse(localStorage.getItem(FORMKEY)); if(f&&typeof f==='object')TEAM_FORM=f;}catch(e){} }
function saveForm(){ try{localStorage.setItem(FORMKEY,JSON.stringify(TEAM_FORM));}catch(e){} }

// Trae de ESPN, en una sola pasada, TODOS los partidos terminados del Mundial:
//  - forma reciente de cada selección (goles a favor/en contra por partido)
//  - ganadores confirmados de las eliminatorias ya jugadas
async function fetchESPNTournamentData(force){
  if(!force && (Date.now()-_espnFetchedAt < 600000) && Object.keys(TEAM_FORM).length){
    return {teams:Object.keys(TEAM_FORM).length, winners:Object.keys(CONFIRMED).length, cached:true};
  }
  const DAY=86400000, tStart=Date.UTC(2026,5,10), tEnd=Date.UTC(2026,6,20);   // 10 jun – 20 jul 2026
  const days=[]; for(let t=tStart;t<=tEnd;t+=DAY) days.push(new Date(t).toISOString().slice(0,10).replace(/-/g,''));
  const chunks=await Promise.all(days.map(d=>fetchESPNday(d)));               // en paralelo (rápido)
  const seen={}, acc={}; let winners=0;
  const baseR=n=>{ const t=findTeam(n); return t? t.s : 62; };                 // rating base (sin forma) del rival
  for(const day of chunks){
    for(const ev of day){
      if(ev.id&&seen[ev.id])continue; if(ev.id)seen[ev.id]=1;
      const comp=ev.competitions&&ev.competitions[0]; if(!comp)continue;
      const p=espnParse(ev); if(!p || p.strStatus!=='FT')continue;            // solo terminados
      const A=mapBracketName(p.strHomeTeam), B=mapBracketName(p.strAwayTeam);
      const ha=+p.intHomeScore, aa=+p.intAwayScore;
      if(!A||!B||isNaN(ha)||isNaN(aa))continue;
      // rendimiento AJUSTADO POR RIVAL: diferencia de gol real vs la esperada por los ratings base
      const [ela,elb]=autoLambdas(baseR(A),baseR(B));
      const ovp=(ha-aa)-(ela-elb);                                            // >0 = rindió por encima de lo esperado
      (acc[A]=acc[A]||{g:0,gf:0,ga:0,op:0}); acc[A].g++; acc[A].gf+=ha; acc[A].ga+=aa; acc[A].op+=ovp;
      (acc[B]=acc[B]||{g:0,gf:0,ga:0,op:0}); acc[B].g++; acc[B].gf+=aa; acc[B].ga+=ha; acc[B].op-=ovp;
      const ph=detectPhase(compNoteText(comp));
      if(ph.knockout){
        let w=null;
        if(p.homeWinner)w=A; else if(p.awayWinner)w=B;
        else if(p.homeShootout!=null&&p.awayShootout!=null) w=(+p.homeShootout>+p.awayShootout)?A:B;
        else if(ha!==aa) w=(ha>aa)?A:B;
        if(w){ CONFIRMED[confKey(A,B)]=w; winners++; }
      }
    }
  }
  // convertir el rendimiento ajustado por rival en un ajuste de rating por equipo
  TEAM_FORM={};
  Object.keys(acc).forEach(t=>{
    const s=acc[t]; const conf=Math.min(s.g/3,1);                             // 3+ partidos = confianza plena
    const avgOp=s.op/s.g;                                                     // sobre/bajo-rendimiento medio vs rival
    const delta=clamp(avgOp*14, -13, 13)*conf;                               // mejor de lo esperado → más rating
    TEAM_FORM[t]={g:s.g, gf:s.gf, ga:s.ga, delta, op:avgOp};
  });
  _espnFetchedAt=Date.now();
  saveForm(); saveConfirmed();
  return {teams:Object.keys(TEAM_FORM).length, winners};
}

// Cuadro de ejemplo del Mundial 2026 (orden del árbol, según el bracket "al momento").
const WC2026_TEAMS=[
  'Alemania','Paraguay', 'Francia','Suecia', 'Canadá','Sudáfrica', 'Países Bajos','Marruecos',
  'Portugal','Croacia', 'España','Austria', 'Estados Unidos','Bosnia', 'Bélgica','Senegal',
  'Brasil','Japón', 'Costa de Marfil','Noruega', 'México','Ecuador', 'Inglaterra','RD del Congo',
  'Argentina','Cabo Verde', 'Australia','Egipto', 'Suiza','Algeria', 'Colombia','Ghana'
];
// ganadores ya confirmados: Paraguay (llave 1, abajo), Brasil (llave 9, arriba), Canadá (llave 15, arriba)
const WC2026_LOCK={0:2, 2:1, 8:1};

function loadBracket(){
  try{const b=JSON.parse(localStorage.getItem(BKEY)); if(Array.isArray(b)&&b.length)BRACKET=b;}catch(e){}
  if(!BRACKET.length) BRACKET=new Array(BRACKET_SIZE).fill('');
}
function saveBracket(){ try{localStorage.setItem(BKEY,JSON.stringify(BRACKET));}catch(e){} }

// carga el cuadro de ejemplo del Mundial 2026 con su orden y ganadores ya marcados como predicción
function loadWCBracket(){
  BRACKET=WC2026_TEAMS.slice();
  PICKS={};
  Object.keys(WC2026_LOCK).forEach(k=>{
    const p=+k, side=WC2026_LOCK[k], a=BRACKET[2*p], b=BRACKET[2*p+1];
    if(a&&b) PICKS[confKey(a,b)]= (side===1)?a:b;
  });
  saveBracket(); savePicks(); renderBracket();
  setBkMsg('Cargué el cuadro del Mundial 2026 con el orden del bracket. Revisa y simula.','ok');
}

function setBkMsg(m,kind){const el=document.getElementById('bkMsg'); if(el){ if(kind==='load'){el.innerHTML='<span class="spin"></span>'+m;}else{el.textContent=m;} el.style.color=kind==='ok'?'var(--acc)':kind==='err'?'var(--red)':'var(--mut)';}}
function setBkResMsg(m,kind){const el=document.getElementById('bkResMsg'); if(el){ if(kind==='load'){el.innerHTML='<span class="spin"></span>'+m;}else{el.textContent=m;} el.style.color=kind==='ok'?'var(--acc)':kind==='err'?'var(--red)':'var(--mut)';}}

// cambia entre la vista de partido y la de bracket
function showView(v){
  const views={match:'viewMatch', bracket:'viewBracket', cartilla:'viewCartilla'};
  Object.keys(views).forEach(k=>{ const e=document.getElementById(views[k]); if(e) e.classList.toggle('hidden', k!==v); });
  const tabs={match:'navMatch', bracket:'navBracket', cartilla:'navCart'};
  Object.keys(tabs).forEach(k=>{ const e=document.getElementById(tabs[k]); if(e) e.classList.toggle('on', k===v); });
  const fab=document.getElementById('fab'); if(fab) fab.style.display = (v==='match')? '' : 'none';
  if(v==='bracket') renderBracket();
  if(v==='cartilla'){ renderCartPicker(); renderCartDay(); renderCartilla(); }
}

function renderBracket(){
  const host=document.getElementById('bracketEditor'); if(!host)return;
  let h='';
  for(let i=0;i<BRACKET.length;i+=2){
    const m=i/2+1;
    const a=(BRACKET[i]||'').replace(/"/g,'&quot;'), b=(BRACKET[i+1]||'').replace(/"/g,'&quot;');
    const w=pickedWinner(BRACKET[i],BRACKET[i+1]);
    const on1=w&&norm(w)===norm(BRACKET[i]||''), on2=w&&norm(w)===norm(BRACKET[i+1]||'');
    h+=`<div class="bk-match"><span class="bk-no">${m}</span>`+
       `<div class="bk-side">`+
         `<input list="teamlist" value="${a}" oninput="onBracketEdit(${i},this.value)" placeholder="Equipo">`+
         `<button class="bk-win ${on1?'on':''}" title="Marcar como ganador" onclick="lockWin(${i})">✓</button>`+
       `</div>`+
       `<span class="bk-vs">vs</span>`+
       `<div class="bk-side">`+
         `<input list="teamlist" value="${b}" oninput="onBracketEdit(${i+1},this.value)" placeholder="Equipo">`+
         `<button class="bk-win ${on2?'on':''}" title="Marcar como ganador" onclick="lockWin(${i+1})">✓</button>`+
       `</div>`+
       `</div>`;
  }
  host.innerHTML=h;
  renderBracketVisual();
}
function onBracketEdit(i,v){ BRACKET[i]=v.trim(); saveBracket(); renderBracketVisual(); }
// marca al equipo del índice i como ganador de su cruce (contra el equipo hermano i^1)
function lockWin(i){
  const a=(BRACKET[i]||'').trim(), b=(BRACKET[i^1]||'').trim();
  if(!a||!b)return;
  const ck=confKey(a,b);
  if(PICKS[ck]===a) delete PICKS[ck]; else PICKS[ck]=a;
  savePicks(); renderBracket();
}

// ===================== ÁRBOL VISUAL DEL BRACKET (banderas + trofeo) =====================
// ganador "proyectado" de un bloque contiguo de BRACKET [lo,hi): respeta ganadores fijados
// en la 1ª ronda y, si no, avanza el favorito por rating (mismo modelo del Monte Carlo).
const _bkvCache={};
function bkvBlockWinner(lo,hi){
  if(hi-lo===1) return BRACKET[lo]||'';
  const mid=(lo+hi)/2;
  const wa=bkvBlockWinner(lo,mid), wb=bkvBlockWinner(mid,hi);
  if(!wa||!wb) return wa||wb||'';
  const w=pickedWinner(wa,wb);                       // resultado real (ESPN) o tu predicción (✓)
  if(w) return norm(w)===norm(wa)?wa:wb;
  return advProb(wa,wb,_bkvCache)>=0.5 ? wa : wb;     // si no, avanza el favorito del modelo
}
// ¿el equipo "name" es el ganador elegido de su cruce contra "opp"?
function bkvSel(name,opp){ const w=pickedWinner(name,opp); return !!(w&&norm(w)===norm(name)); }
// botón ✓ de un equipo para que avance pasando a "opp" (su rival en esta fase)
function bkvTick(name,opp){
  if(!name||!opp) return '';
  const sel=bkvSel(name,opp);
  return `<button class="bkv-lock${sel?' on':''}" `+
    `data-team="${name.replace(/"/g,'&quot;')}" data-opp="${opp.replace(/"/g,'&quot;')}" `+
    `title="Marcar ganador de esta fase" onclick="bkvPick(event,this)">✓</button>`;
}
function bkvPick(e,btn){
  e.stopPropagation();
  const t=btn.dataset.team, o=btn.dataset.opp; if(!t||!o)return;
  const ck=confKey(t,o);
  if(PICKS[ck]===t) delete PICKS[ck]; else PICKS[ck]=t;
  savePicks(); renderBracket();
}
function bkvTeam(name){
  const safe=(name||'').replace(/"/g,'&quot;');
  return `<div class="bkv-team${name?'':' empty'}" title="${safe}">`+
    `<span class="bkv-fl">${name?flagImg(name,13):'·'}</span>`+
    `<span class="bkv-nm">${name||''}</span></div>`;
}
// casilla de equipo INICIAL (ronda 0): editable in situ + ✓ para fijar ganador de su cruce
let bkvEditing=null;
function bkvLeaf(i, opp){
  const name=BRACKET[i]||'';
  if(bkvEditing===i){
    return `<div class="bkv-leaf"><input class="bkv-input" data-i="${i}" list="teamlist" `+
      `value="${name.replace(/"/g,'&quot;')}" placeholder="Equipo" `+
      `onblur="bkvCommit(${i},this.value)" onkeydown="if(event.key==='Enter'){this.blur();}"></div>`;
  }
  return `<div class="bkv-leaf">`+
    `<div class="bkv-team bkv-editable${name?'':' empty'}${bkvSel(name,opp)?' bkv-locked':''}" title="Clic para editar" onclick="bkvEditTeam(${i})">`+
      `<span class="bkv-fl">${name?flagImg(name,13):'·'}</span>`+
      `<span class="bkv-nm">${name||'—'}</span></div>`+
    bkvTick(name,opp)+
  `</div>`;
}
// casilla de un GANADOR proyectado (rondas interiores): no editable + ✓ para elegir quién pasa
function bkvWinBox(name, opp){
  const safe=(name||'').replace(/"/g,'&quot;');
  return `<div class="bkv-leaf">`+
    `<div class="bkv-team${name?'':' empty'}${bkvSel(name,opp)?' bkv-locked':''}" title="${safe}">`+
      `<span class="bkv-fl">${name?flagImg(name,13):'·'}</span>`+
      `<span class="bkv-nm">${name||''}</span></div>`+
    bkvTick(name,opp)+
  `</div>`;
}
function bkvEditTeam(i){
  bkvEditing=i; renderBracketVisual();
  const inp=document.querySelector('.bkv-input[data-i="'+i+'"]');
  if(inp){ inp.focus(); inp.select(); }
}
function bkvCommit(i,v){
  bkvEditing=null;
  const t=findTeam(v.trim());            // normaliza al nombre oficial si lo reconoce
  BRACKET[i]= t? t.es : v.trim();
  saveBracket(); renderBracket();
}
function bkvNode(lo,hi,opp){
  if(hi-lo===1) return bkvLeaf(lo,opp);
  const mid=(lo+hi)/2;
  const wa=bkvBlockWinner(lo,mid), wb=bkvBlockWinner(mid,hi);
  return `<div class="bkv-match">`+
    `<div class="bkv-children">${bkvNode(lo,mid,wb)}${bkvNode(mid,hi,wa)}</div>`+
    `<div class="bkv-conn"></div>`+
    `<div class="bkv-win">${bkvWinBox(bkvBlockWinner(lo,hi),opp)}</div>`+
  `</div>`;
}
function renderBracketVisual(){
  const host=document.getElementById('bracketVisual'); if(!host)return;
  for(const k in _bkvCache) delete _bkvCache[k];   // recalcular favoritos al editar
  const n=BRACKET.length;
  if(!n || (n&(n-1))!==0){
    host.innerHTML='<div class="hist-empty" style="text-align:center;padding:18px">Carga un cuadro de 2, 4, 8, 16 o 32 equipos para ver el árbol visual.</div>';
    return;
  }
  const half=n/2, fL=bkvBlockWinner(0,half), fR=bkvBlockWinner(half,n), champ=bkvBlockWinner(0,n);
  host.innerHTML=
    `<div class="bkv-wrap">`+
      `<div class="bkv-half bkv-L">${bkvNode(0,half,fR)}</div>`+
      `<div class="bkv-center">`+
        `<div class="bkv-camp">CAMPEÓN</div>`+
        `<div class="bkv-champ">${bkvTeam(champ)}</div>`+
        `<div class="bkv-trophy">🏆</div>`+
      `</div>`+
      `<div class="bkv-half bkv-R bkv-mirror">${bkvNode(half,n,fL)}</div>`+
    `</div>`;
  fitBracket();
}
// escala el árbol para que quepa en el ancho disponible; en pantallas muy chicas (móvil)
// no lo reduce tanto que sea ilegible: a partir de cierto punto deja scroll horizontal solo ahí
function fitBracket(){
  const stage=document.getElementById('bracketVisual'); if(!stage) return;
  const wrap=stage.querySelector('.bkv-wrap'); if(!wrap){ stage.style.height=''; return; }
  wrap.style.transform='none'; stage.style.height=''; stage.style.overflowX='hidden';
  const avail=stage.clientWidth, natural=wrap.scrollWidth;
  if(avail>0 && natural>avail){
    const s=avail/natural;
    if(s>=0.6){                                   // cabe con una reducción legible: escalar, sin scroll
      wrap.style.transform='scale('+s+')';
      stage.style.height=Math.ceil(wrap.scrollHeight*s)+'px';
    } else {                                      // demasiado grande (móvil): tamaño legible + scroll
      stage.style.overflowX='auto';
    }
  }
}
window.addEventListener('resize',()=>{
  const vb=document.getElementById('viewBracket');
  if(vb && !vb.classList.contains('hidden')) fitBracket();
});
function clearBracket(){ BRACKET=new Array(BRACKET_SIZE).fill(''); PICKS={}; CONFIRMED={}; TEAM_FORM={}; _espnFetchedAt=0; saveBracket(); savePicks(); saveConfirmed(); saveForm(); renderBracket(); setBkMsg('Cuadro vaciado (predicciones, ganadores y forma de ESPN). Cárgalo desde ESPN, usa el cuadro del Mundial o escríbelo a mano.','mut'); }

// convierte el nombre de ESPN (inglés) al nombre en español de la base, si lo reconoce
function mapBracketName(espnName){ const t=findTeam(espnName); return t? t.es : (espnName||''); }

// trae de ESPN los GANADORES reales y la FORMA reciente (no cambia el orden de tu cuadro)
async function loadBracketESPN(){
  if(BRACKET.filter(Boolean).length<2){
    setBkMsg('Primero arma el cuadro (usa "🏆 Cuadro Mundial 2026" o escríbelo). Luego trae los datos reales.','err'); return;
  }
  setBkMsg('Buscando resultados y forma reciente en ESPN…','load');
  let r=null;
  try{ r=await fetchESPNTournamentData(true); }
  catch(e){ setBkMsg('No se pudo conectar con ESPN (posible bloqueo CORS/red). Marca los ganadores a mano con ✓ e intenta más tarde.','err'); return; }
  // los resultados reales (CONFIRMED) ya aparecen como ✓ azul en su fase del cuadro
  renderBracket();
  if(!r.winners && !r.teams){ setBkMsg('ESPN aún no devuelve partidos terminados del Mundial. Cuando se jueguen, vuelve a tocar este botón.','mut'); return; }
  setBkMsg(`Traje ${r.winners} resultado(s) de eliminatoria y la forma reciente de ${r.teams} selección(es) desde ESPN. Los ganadores ya jugados aparecen como ✓ azul en su fase del cuadro; la forma ajusta los goles esperados de cada cruce al simular.`,'ok');
}

// probabilidad de que A avance sobre B (rating → λ → prórroga/penales), con caché por enfrentamiento
function ratingOf(name){
  const t=findTeam(name); if(!t) return name? 62 : null;
  const f=APPLY_FORM? TEAM_FORM[t.es] : null;        // forma solo si el ingrediente está activo
  return clamp(t.s + (f? f.delta : 0), 40, 99);
}
function advProb(nameA,nameB,cache){
  // 1) si ese cruce ya se jugó en la realidad (ESPN o ✓), el resultado es seguro
  const ck=confKey(nameA,nameB);
  if(CONFIRMED[ck]!=null) return (norm(CONFIRMED[ck])===norm(nameA))?1:0;
  const key=nameA+'|'+nameB; if(cache[key]!=null) return cache[key];
  const sa=ratingOf(nameA), sb=ratingOf(nameB);
  let p;
  if(sa==null&&sb==null) p=0.5;
  else if(sa==null) p=0;
  else if(sb==null) p=1;
  else {
    // 2) mismo motor que el modo automático: rating → λ, con ajuste de aprendizaje si está activo
    let [la,lb]=autoLambdas(sa,sb);
    [la,lb]=applyLearning(la,lb);
    const r=autoRho(la+lb); const R=simulate(la,lb,r); p=knockoutAdvance(la,lb,r,R).advH;
  }
  cache[key]=p; return p;
}

// Monte Carlo del torneo completo
async function simTournament(){
  const teams=BRACKET.map(x=>(x||'').trim());
  const n=teams.length;
  if(n<2 || (n&(n-1))!==0){ setBkResMsg('El cuadro debe tener 2, 4, 8, 16 o 32 llaves (ahora hay '+n+' equipos). Carga desde ESPN o ajusta.','err'); return; }
  const iters=Math.max(1000,Math.min(200000, parseInt(document.getElementById('bkIters').value,10)||20000));
  // 1) cargar datos reales de ESPN (forma + ganadores), igual que el modo automático usa sus datos
  setBkResMsg('Cargando datos de ESPN (forma reciente y resultados)…','load');
  let espn=null;
  try{ espn=await fetchESPNTournamentData(); renderBracketVisual(); }
  catch(e){ /* sin conexión: seguimos con el rating base + aprendizaje */ }
  setBkResMsg('Simulando '+iters.toLocaleString('es-MX')+' torneos…','load');
  // el bucle bloquea el hilo; lo lanzamos con un pequeño retardo para que pinte el mensaje
  setTimeout(()=>{
    const rounds=Math.round(Math.log2(n));
    const stat={}; teams.forEach(t=>{ if(t&&!stat[t]) stat[t]={played:new Array(rounds+1).fill(0),champ:0}; });
    const cache={};
    for(let it=0; it<iters; it++){
      let cur=teams.slice(), r=1;
      while(cur.length>1){
        for(let k=0;k<cur.length;k++){ const t=cur[k]; if(t&&stat[t]) stat[t].played[r]++; }
        const next=[];
        for(let i=0;i<cur.length;i+=2){
          const A=cur[i],B=cur[i+1];
          let w;
          // advProb respeta los resultados reales (CONFIRMED) y las predicciones (PICKS) en TODA ronda
          if(A&&B) w=(Math.random()<advProb(A,B,cache))?A:B;
          else w=A||B||'';
          next.push(w);
        }
        cur=next; r++;
      }
      const champ=cur[0]; if(champ&&stat[champ]) stat[champ].champ++;
    }
    renderTournament(stat,iters,rounds);
    const filled=teams.filter(Boolean).length;
    const warn = filled<n? ' ⚠️ Hay llaves vacías; esos cruces se tratan como pase libre.' : '';
    const nConf=Object.keys(CONFIRMED).length;
    const nForm=Object.keys(TEAM_FORM).length;
    const learnNote = (LEARN.apply&&LEARN.ready)? ' · aprendizaje aplicado (goles ×'+LEARN.goalAdj.toFixed(3)+')' : '';
    const formNote = nForm? ' · forma ESPN de '+nForm+' selección(es)' : '';
    const confNote = nConf? ' · '+nConf+' resultado(s) real(es) respetados' : '';
    setBkResMsg('Listo: '+iters.toLocaleString('es-MX')+' torneos simulados (λ por rating'+formNote+learnNote+confNote+').'+warn,'ok');
  },30);
}

function renderTournament(stat,iters,rounds){
  const host=document.getElementById('bracketResults'); if(!host)return;
  const names=Object.keys(stat).filter(t=>t);
  if(!names.length){ host.innerHTML='<div class="hist-empty">Sin equipos en el cuadro.</div>'; return; }
  names.sort((a,b)=>(stat[b].champ-stat[a].champ) || (stat[b].played[rounds]-stat[a].played[rounds]));
  const showQF = rounds>=3;
  let h=`<table style="margin-top:12px"><thead><tr><th>Equipo</th><th class="r">Campeón</th><th class="r">Final</th><th class="r">Semis</th>${showQF?'<th class="r">Cuartos</th>':''}</tr></thead><tbody>`;
  names.forEach(t=>{ const s=stat[t];
    h+=`<tr><td>${t}</td>`+
       `<td class="r" style="color:var(--acc2);font-weight:700">${pc(s.champ/iters)}</td>`+
       `<td class="r">${pc(s.played[rounds]/iters)}</td>`+
       `<td class="r">${pc(s.played[rounds-1]/iters)}</td>`+
       (showQF?`<td class="r">${pc(s.played[rounds-2]/iters)}</td>`:'')+
       `</tr>`;
  });
  h+='</tbody></table>';
  host.innerHTML=h;
}

// ===================== ARMA TU CARTILLA (bet builder) =====================
let CART=[];   // cada item: {id, A, B, R, corTot, yelTot, sel:[keys]}
let CPICK_A='', CPICK_B='';
const CSAVEKEY='mundial_cartillas_v1';
let SAVED_CARTS=[];
function loadSavedCarts(){ try{SAVED_CARTS=JSON.parse(localStorage.getItem(CSAVEKEY))||[];}catch(e){SAVED_CARTS=[];} }
function persistSavedCarts(){ try{localStorage.setItem(CSAVEKEY,JSON.stringify(SAVED_CARTS));}catch(e){} }
function setCartMsg(m,kind){const el=document.getElementById('cartMsg'); if(el){ el.textContent=m; el.style.color=kind==='err'?'var(--red)':'var(--mut)'; }}
// probabilidad conjunta de varias condiciones de GOLES sobre la matriz de marcadores (respeta correlación)
function jointGoals(R,preds){ let p=0; for(const s of R.scores){ if(preds.every(f=>f(s.i,s.j))) p+=s.p; } return p; }
// probabilidad conjunta de varias condiciones sobre una Poisson (córners o tarjetas)
function jointPoisson(mean,preds){ let p=0, K=Math.max(25,Math.ceil(mean*3)); for(let k=0;k<=K;k++){ const pk=poissonPmf(k,mean); if(preds.every(f=>f(k))) p+=pk; } return p; }

// ---- selector visual (misma forma que el modo automático) ----
function renderCartPicker(){
  const colA=document.getElementById('ctColA'), colB=document.getElementById('ctColB'); if(!colA||!colB)return;
  const cell=(t,side)=>{
    const selThis= side==='A'? CPICK_A===t.es : CPICK_B===t.es;
    const takenOther= side==='A'? CPICK_B===t.es : CPICK_A===t.es;
    return `<div class="team-opt ${selThis?('sel-'+side.toLowerCase()):''} ${takenOther?'taken':''}" data-es="${t.es}" onclick="pickCartTeam('${side}',this.dataset.es)"><span class="fl">${flagImg(t.es,17)}</span><span class="nm">${t.es}</span></div>`;
  };
  colA.innerHTML=SORTED_TEAMS.map(t=>cell(t,'A')).join('');
  colB.innerHTML=SORTED_TEAMS.map(t=>cell(t,'B')).join('');
  const ia=document.getElementById('cartA'), ib=document.getElementById('cartB'); if(ia)ia.value=CPICK_A; if(ib)ib.value=CPICK_B;
  const pa=document.getElementById('ctPickA'), pb=document.getElementById('ctPickB');
  if(pa)pa.innerHTML=CPICK_A?flagImg(CPICK_A,18)+' '+CPICK_A:'—';
  if(pb)pb.innerHTML=CPICK_B?flagImg(CPICK_B,18)+' '+CPICK_B:'—';
  const f=document.getElementById('ctFilter'); if(f&&f.value)filterCartTeams(f.value);
}
function pickCartTeam(side,es){ if(side==='A'){ if(es===CPICK_B)return; CPICK_A=es; } else { if(es===CPICK_A)return; CPICK_B=es; } renderCartPicker(); }
function filterCartTeams(q){ const n=norm(q); document.querySelectorAll('#ctColA .team-opt, #ctColB .team-opt').forEach(el=>{ el.classList.toggle('hide', n.length>0 && !norm(el.dataset.es).includes(n)); }); }

// ---- partidos del día (desde la barra en vivo) ----
function renderCartDay(){
  const el=document.getElementById('ctDayMatches'); if(!el)return;
  const list=(_liveData||[]).filter(m=> m.state!=='post' && findTeam(m.A)&&findTeam(m.B));   // solo por jugar / en vivo
  if(!list.length){ el.innerHTML='<div class="sub" style="margin:0">No hay partidos próximos cargados por ahora (se llenan solos).</div>'; return; }
  el.innerHTML=list.map(m=>`<button class="ct-day" data-a="${m.A.replace(/"/g,'&quot;')}" data-b="${m.B.replace(/"/g,'&quot;')}" onclick="addCartByNames(this.dataset.a,this.dataset.b)">${m.state==='in'?'🔴 ':''}${flagImg(m.A,14)} ${m.A} <span style="color:var(--mut)">vs</span> ${m.B} ${flagImg(m.B,14)}</button>`).join('');
}

// ---- agregar / quitar partidos ----
function addCartTeams(ta,tb,sel){
  let [la,lb]=autoLambdas(ratingOf(ta.es),ratingOf(tb.es)); [la,lb]=applyLearning(la,lb);
  const r=autoRho(la+lb), R=simulate(la,lb,r);
  const possA=possShare(la,lb);
  const corTot=applyCornerLearn(teamCorners(teamShots(la,possA)))+applyCornerLearn(teamCorners(teamShots(lb,1-possA)));
  CART.push({id:'ct'+Date.now().toString(36)+Math.random().toString(36).slice(2,5), A:ta.es, B:tb.es, R, corTot, yelTot:4.2, sel:sel?sel.slice():[]});
}
function addCartMatch(){
  const a=document.getElementById('cartA'), b=document.getElementById('cartB');
  const ta=findTeam(a.value), tb=findTeam(b.value);
  if(!ta||!tb){ setCartMsg('Elige las dos selecciones (en los partidos del día o en las columnas).','err'); return; }
  if(norm(ta.es)===norm(tb.es)){ setCartMsg('Elige dos selecciones distintas.','err'); return; }
  addCartTeams(ta,tb); CPICK_A=''; CPICK_B=''; renderCartPicker(); setCartMsg('','mut'); renderCartilla();
}
function addCartByNames(a,b){ const ta=findTeam(a), tb=findTeam(b); if(!ta||!tb)return; addCartTeams(ta,tb); renderCartilla(); }
function removeCartMatch(id){ CART=CART.filter(m=>m.id!==id); renderCartilla(); }
function clearCart(){ CART=[]; renderCartilla(); }

// catálogo de mercados de un partido, con su probabilidad individual del modelo
function cartLegs(m){
  const A=m.A, B=m.B, R=m.R;
  const groups=[
    {t:'Resultado', legs:[
      {k:'1',grp:'res',dom:'g',lab:'Gana '+A,pred:(i,j)=>i>j},
      {k:'X',grp:'res',dom:'g',lab:'Empate',pred:(i,j)=>i===j},
      {k:'2',grp:'res',dom:'g',lab:'Gana '+B,pred:(i,j)=>i<j},
    ]},
    {t:'Doble oportunidad', legs:[
      {k:'1X',grp:'dc',dom:'g',lab:A+' o empate',pred:(i,j)=>i>=j},
      {k:'12',grp:'dc',dom:'g',lab:'Sin empate',pred:(i,j)=>i!==j},
      {k:'X2',grp:'dc',dom:'g',lab:B+' o empate',pred:(i,j)=>i<=j},
    ]},
    {t:'Goles', legs:[
      {k:'O15',grp:'gls',dom:'g',lab:'Over 1.5',pred:(i,j)=>i+j>=2},
      {k:'U15',grp:'gls',dom:'g',lab:'Under 1.5',pred:(i,j)=>i+j<=1},
      {k:'O25',grp:'gls',dom:'g',lab:'Over 2.5',pred:(i,j)=>i+j>=3},
      {k:'U25',grp:'gls',dom:'g',lab:'Under 2.5',pred:(i,j)=>i+j<=2},
      {k:'O35',grp:'gls',dom:'g',lab:'Over 3.5',pred:(i,j)=>i+j>=4},
      {k:'U35',grp:'gls',dom:'g',lab:'Under 3.5',pred:(i,j)=>i+j<=3},
    ]},
    {t:'Ambos marcan', legs:[
      {k:'BTTS',grp:'btts',dom:'g',lab:'Sí',pred:(i,j)=>i>0&&j>0},
      {k:'BTTSN',grp:'btts',dom:'g',lab:'No',pred:(i,j)=>!(i>0&&j>0)},
    ]},
  ];
  const cMid=Math.round(m.corTot);
  const cLegs=[]; [cMid-1.5,cMid-0.5,cMid+0.5,cMid+1.5].filter(L=>L>0).forEach(L=>{
    cLegs.push({k:'CO'+L,grp:'c'+L,dom:'c',lab:'Over '+L,pred:k=>k>L});
    cLegs.push({k:'CU'+L,grp:'c'+L,dom:'c',lab:'Under '+L,pred:k=>k<L});
  });
  groups.push({t:'Córners', legs:cLegs});
  const yLegs=[]; [3.5,4.5,5.5].forEach(L=>{
    yLegs.push({k:'YO'+L,grp:'y'+L,dom:'y',lab:'Over '+L,pred:k=>k>L});
    yLegs.push({k:'YU'+L,grp:'y'+L,dom:'y',lab:'Under '+L,pred:k=>k<L});
  });
  groups.push({t:'Tarjetas amarillas', legs:yLegs});
  groups.forEach(gr=>gr.legs.forEach(l=>{
    l.prob = l.dom==='g'? jointGoals(R,[l.pred]) : (l.dom==='c'? jointPoisson(m.corTot,[l.pred]) : jointPoisson(m.yelTot,[l.pred]));
  }));
  return groups;
}
function toggleCartLeg(mid,key){
  const m=CART.find(x=>x.id===mid); if(!m)return;
  const groups=cartLegs(m); const byKey={}; let leg=null;
  groups.forEach(gr=>gr.legs.forEach(l=>{ byKey[l.k]=l; if(l.k===key)leg=l; }));
  if(!leg)return;
  if(m.sel.includes(key)){ m.sel=m.sel.filter(k=>k!==key); renderCartilla(); return; }
  // quitar la otra opción del mismo grupo (ej. Over/Under de la misma línea)
  const grpKeys=groups.reduce((a,gr)=>a.concat(gr.legs),[]).filter(l=>l.grp===leg.grp).map(l=>l.k);
  m.sel=m.sel.filter(k=>!grpKeys.includes(k));
  // quitar selecciones del MISMO dominio que sean imposibles junto a la nueva (ej. Under 1.5 + Over 2.5)
  m.sel=m.sel.filter(k=>{
    const ol=byKey[k]; if(!ol||ol.dom!==leg.dom) return true;
    const j = leg.dom==='g'? jointGoals(m.R,[leg.pred,ol.pred]) : leg.dom==='c'? jointPoisson(m.corTot,[leg.pred,ol.pred]) : jointPoisson(m.yelTot,[leg.pred,ol.pred]);
    return j>1e-9;
  });
  m.sel.push(key);
  renderCartilla();
}
// probabilidad de que se cumplan TODAS las selecciones de un partido (goles con correlación; córners/tarjetas aparte)
function cartMatchProb(m){
  const groups=cartLegs(m), byKey={}; groups.forEach(gr=>gr.legs.forEach(l=>byKey[l.k]=l));
  const gp=[],cp=[],yp=[];
  m.sel.forEach(k=>{ const l=byKey[k]; if(!l)return; (l.dom==='g'?gp:l.dom==='c'?cp:yp).push(l.pred); });
  return (gp.length?jointGoals(m.R,gp):1) * (cp.length?jointPoisson(m.corTot,cp):1) * (yp.length?jointPoisson(m.yelTot,yp):1);
}

// ---- guardar / cargar cartillas ----
function saveCart(){
  const picked=CART.filter(m=>m.sel.length);
  if(!picked.length){ setCartMsg('Elige al menos un mercado antes de guardar.','err'); return; }
  const name=(prompt('Nombre para esta cartilla:','Cartilla '+(SAVED_CARTS.length+1))||'').trim();
  if(!name)return;
  let total=1; picked.forEach(m=>total*=cartMatchProb(m));
  SAVED_CARTS.unshift({id:'cs'+Date.now().toString(36), name, ts:Date.now(), prob:total,
    matches:picked.map(m=>({A:m.A,B:m.B,sel:m.sel.slice()}))});
  persistSavedCarts(); renderCartilla();
}
function loadSavedCart(id){
  const c=SAVED_CARTS.find(x=>x.id===id); if(!c)return;
  CART=[];
  c.matches.forEach(mm=>{ const ta=findTeam(mm.A), tb=findTeam(mm.B); if(ta&&tb) addCartTeams(ta,tb,mm.sel); });
  renderCartilla();
}
function deleteSavedCart(id){ SAVED_CARTS=SAVED_CARTS.filter(x=>x.id!==id); persistSavedCarts(); renderCartilla(); }

// ---- seguimiento: evaluar cada cartilla guardada contra los resultados reales (HIST/ESPN) ----
function findPlayed(A,B){
  const na=norm(A), nb=norm(B);
  return HIST.find(x=>x.actualA!=null && ((norm(x.A)===na&&norm(x.B)===nb)||(norm(x.A)===nb&&norm(x.B)===na)));
}
function legResult(key,hg,ag,cor,yel){
  const tot=hg+ag;
  switch(key){
    case '1':return hg>ag; case 'X':return hg===ag; case '2':return hg<ag;
    case '1X':return hg>=ag; case '12':return hg!==ag; case 'X2':return hg<=ag;
    case 'O15':return tot>=2; case 'U15':return tot<=1;
    case 'O25':return tot>=3; case 'U25':return tot<=2;
    case 'O35':return tot>=4; case 'U35':return tot<=3;
    case 'BTTS':return hg>0&&ag>0; case 'BTTSN':return !(hg>0&&ag>0);
  }
  if(key[0]==='C'){ if(cor==null)return null; const L=parseFloat(key.slice(2)); return key[1]==='O'? cor>L : cor<L; }
  if(key[0]==='Y'){ if(yel==null)return null; const L=parseFloat(key.slice(2)); return key[1]==='O'? yel>L : yel<L; }
  return null;
}
function legLabel(k,A,B){
  const m={'1':'Gana '+A,'X':'Empate','2':'Gana '+B,'1X':A+' o empate','12':'Sin empate','X2':B+' o empate','BTTS':'Ambos marcan: Sí','BTTSN':'Ambos marcan: No'};
  if(m[k])return m[k];
  if(/^[OU]\d\d$/.test(k)) return (k[0]==='O'?'Over':'Under')+' '+k[1]+'.'+k[2]+' goles';
  if(k[0]==='C') return 'Córners '+(k[1]==='O'?'Over':'Under')+' '+k.slice(2);
  if(k[0]==='Y') return 'Tarjetas '+(k[1]==='O'?'Over':'Under')+' '+k.slice(2);
  return k;
}
function evalSavedCart(c){
  let anyFalse=false, anyPending=false; const matchInfos=[];
  c.matches.forEach(mm=>{
    const played=findPlayed(mm.A,mm.B);
    let hg=null,ag=null,cor=null,yel=null;
    if(played){
      if(norm(played.A)===norm(mm.A)){ hg=played.actualA; ag=played.actualB; } else { hg=played.actualB; ag=played.actualA; }
      if(played.actualStats){ cor=played.actualStats.cornersTot; yel=played.actualStats.yellowTot; }
    }
    const legs=mm.sel.map(k=>{
      const res = played? legResult(k,hg,ag,cor,yel) : null;
      if(res===false)anyFalse=true; else if(res==null)anyPending=true;
      return {label:legLabel(k,mm.A,mm.B), res};
    });
    matchInfos.push({A:mm.A,B:mm.B, played:!!played, hg,ag, legs});
  });
  return {status: anyFalse?'fail':(anyPending?'pend':'ok'), matchInfos};
}
function savedCartsHTML(){
  if(!SAVED_CARTS.length) return '';
  return `<h3 class="sec" style="margin-top:16px">💾 Cartillas guardadas</h3>`+
    SAVED_CARTS.map(c=>{
      const ev=evalSavedCart(c);
      const badge= ev.status==='ok'?'<span style="color:var(--acc)">✅ Se cumplió</span>'
                 : ev.status==='fail'?'<span style="color:var(--red)">❌ No se cumplió</span>'
                 : '<span style="color:var(--acc2)">⏳ Pendiente</span>';
      const body=ev.matchInfos.map(mi=>{
        const sc= mi.played? `<span style="color:var(--mut)">${mi.hg}-${mi.ag}</span>` : '<span style="color:var(--gray)">sin jugar</span>';
        const legs=mi.legs.map(l=>{ const ic= l.res===true?'<span style="color:var(--acc)">✓</span>':l.res===false?'<span style="color:var(--red)">✗</span>':'<span style="color:var(--gray)">·</span>'; return `<div class="ct-leg" style="border:0;padding:1px 0">${ic} ${l.label}</div>`; }).join('');
        return `<div style="margin-top:7px"><div style="font-size:12px;display:flex;align-items:center;gap:5px">${flagImg(mi.A,13)} ${mi.A} <span style="color:var(--mut)">vs</span> ${mi.B} ${flagImg(mi.B,13)} ${sc}</div>${legs}</div>`;
      }).join('');
      return `<div class="ct-saved"><div class="ct-saved-h"><b>${c.name}</b> ${badge}<span class="p">${pc(c.prob)}</span></div>${body}`+
        `<div class="btns" style="margin:8px 0 0"><button class="ghost" onclick="loadSavedCart('${c.id}')">Cargar</button><button class="ghost" onclick="deleteSavedCart('${c.id}')">Eliminar</button></div></div>`;
    }).join('');
}

function renderCartilla(){
  const host=document.getElementById('cartMatches'); if(!host)return;
  if(!CART.length){ host.innerHTML='<div class="hist-empty" style="margin-top:10px">Agrega un partido para empezar a armar tu cartilla.</div>'; }
  else host.innerHTML=CART.map(m=>{
    const groups=cartLegs(m), sel=new Set(m.sel);
    const body=groups.map(gr=>`<div class="ct-grp"><div class="ct-grp-t">${gr.t}</div><div class="ct-chips">`+
      gr.legs.map(l=>`<span class="ct-chip${sel.has(l.k)?' on':''}" onclick="toggleCartLeg('${m.id}','${l.k}')">${l.lab} <b>${pc(l.prob)}</b></span>`).join('')+
      `</div></div>`).join('');
    return `<div class="ct-match"><div class="ct-match-h">${flagImg(m.A,16)} ${m.A} <span style="color:var(--mut)">vs</span> ${flagImg(m.B,16)} ${m.B}`+
      `<button class="del-x" title="Quitar partido" onclick="removeCartMatch('${m.id}')">✕</button></div>${body}</div>`;
  }).join('');
  renderCartSlip();
}
function renderCartSlip(){
  const el=document.getElementById('cartSlip'); if(!el)return;
  const picked=CART.filter(m=>m.sel.length);
  let html='';
  if(!picked.length){ html='<div class="hist-empty">Elige al menos un mercado en un partido para ver la probabilidad de tu cartilla.</div>'; }
  else {
    let total=1, nLegs=0, rows='';
    picked.forEach(m=>{
      const groups=cartLegs(m), byKey={}; groups.forEach(gr=>gr.legs.forEach(l=>byKey[l.k]=l));
      const mp=cartMatchProb(m); total*=mp; nLegs+=m.sel.length;
      const legs=m.sel.map(k=>byKey[k]?`<div class="ct-leg">${byKey[k].lab} <span>${pc(byKey[k].prob)}</span></div>`:'').join('');
      rows+=`<div class="ct-slip-m"><div class="ct-slip-h">${flagImg(m.A,14)} ${m.A} <span style="color:var(--mut)">vs</span> ${m.B} ${flagImg(m.B,14)} <span class="p">${pc(mp)}</span></div>${legs}</div>`;
    });
    const totS = total>=0.01? pc(total) : (total>0? (total*100).toFixed(2)+'%' : '0%');
    const oneIn = total>0? Math.round(1/total) : 0;
    html=rows+
      `<div class="ct-total"><div class="sub" style="margin:0">Probabilidad de que se cumpla TODA la cartilla<br>(${nLegs} selección/es en ${picked.length} partido/s)</div>`+
      `<div class="ct-total-p">${totS}</div>`+
      `<div class="sub" style="margin:0">Cuota justa equivalente: <b style="color:var(--acc2)">${total>0?(1/total).toFixed(2):'—'}</b>`+
      (oneIn?` · ~1 de cada <b style="color:var(--txt)">${oneIn.toLocaleString('es-MX')}</b> veces`:'')+`</div></div>`+
      `<div class="btns"><button class="go" onclick="saveCart()">💾 Guardar cartilla</button><button class="ghost" onclick="clearCart()">Vaciar</button></div>`+
      `<div class="note">El modelo asume que los <b>partidos son independientes</b> entre sí (multiplica). Dentro de un mismo partido, los goles se calculan con su <b>correlación real</b>; córners y tarjetas, independientes de los goles. Son probabilidades del modelo, no certezas.</div>`;
  }
  if(SAVED_CARTS.length){ html += savedCartsHTML(); }
  el.innerHTML=html;
}

loadComp(); initCompSelector();
loadHist(); seedHistory(); computeLearning(); renderHistory();
loadBracket(); loadConfirmed(); loadForm(); loadPicks(); loadSavedCarts();

// arranque limpio: no se simula ningún partido hasta que el usuario lo pida
APP_READY=true;

// ===== sincronización automática con ESPN: al abrir y "en vivo" cada pocos minutos =====
let _autoSyncRunning=false;
async function autoSyncResults(){
  if(_autoSyncRunning || document.hidden) return;
  _autoSyncRunning=true;
  try{
    try{ await fetchESPNTournamentData(); }catch(e){}   // forma reciente + ganadores (cacheado 10 min)
    await importPlayed();                                // resultados jugados → calibración del modelo
    const vb=document.getElementById('viewBracket');
    if(vb && !vb.classList.contains('hidden')) renderBracket();   // refresca el cuadro si está abierto
    const vc=document.getElementById('viewCartilla');
    if(vc && !vc.classList.contains('hidden')) renderCartilla();  // refresca el seguimiento de cartillas
  }catch(e){}
  _autoSyncRunning=false;
}
setTimeout(autoSyncResults, 800);                 // autocarga al abrir (en segundo plano)
setInterval(autoSyncResults, 180000);             // refresco de resultados terminados cada 3 min

// ===== marcador EN VIVO de los partidos en juego (autorefresco cada 30 s) =====
async function fetchLive(){
  const DAY=86400000, now=Date.now();
  const days=[]; for(let i=-1;i<1;i++) days.push(new Date(now+i*DAY).toISOString().slice(0,10).replace(/-/g,''));  // ayer + hoy
  let chunks=[];
  try{ chunks=await Promise.all(days.map(d=>fetchESPNday(d))); }catch(e){ return; }
  const evs=[]; const seenEv={};
  chunks.forEach(arr=>arr.forEach(ev=>{ if(ev.id&&seenEv[ev.id])return; if(ev.id)seenEv[ev.id]=1; evs.push(ev); }));
  const matches=[]; const byId={};
  for(const ev of evs){
    const comp=ev.competitions&&ev.competitions[0]; if(!comp)continue;
    const stt=comp.status||{}, st=stt.type||{};
    const state=st.state||'';                           // pre | in | post
    const cs=comp.competitors||[];
    const home=cs.find(c=>c.homeAway==='home'), away=cs.find(c=>c.homeAway==='away');
    if(!home||!away)continue;
    if(ev.id) byId[ev.id]=ev;                            // guardamos el evento completo para el panel
    const A=mapBracketName((home.team&&(home.team.displayName||home.team.name))||'');
    const B=mapBracketName((away.team&&(away.team.displayName||away.team.name))||'');
    const label = (state==='pre') ? fmtKick(ev.date) : (st.shortDetail || stt.displayClock || (state==='post'?'FT':'En juego'));
    const ph=detectPhase(compNoteText(comp));
    matches.push({
      id:ev.id||null, A, B, state, label, date:ev.date||'', knockout:!!ph.knockout,
      hs:(home.score!=null?home.score:'-'), as:(away.score!=null?away.score:'-'),
      penA: home.shootoutScore!=null? home.shootoutScore : null,
      penB: away.shootoutScore!=null? away.shootoutScore : null
    });
  }
  const rank={in:0,pre:1,post:2};                       // en juego primero, luego por jugar, luego terminados
  matches.sort((x,y)=> (rank[x.state]-rank[y.state]) || (x.date||'').localeCompare(y.date||''));
  _liveEventsById=byId;
  renderLive(matches);
  renderLiveCompare();                                  // refresca el panel del partido abierto (si hay)
  renderCartDay();                                      // refresca los "partidos del día" de la cartilla
}
// etiqueta de inicio para próximos partidos: hora si es hoy, si no día + hora
function fmtKick(iso){
  const d=new Date(iso); if(isNaN(d))return 'Por jugar';
  const now=new Date();
  const hm=d.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
  if(d.toDateString()===now.toDateString()) return hm;
  if(new Date(now.getTime()+86400000).toDateString()===d.toDateString()) return 'mañana '+hm;
  return d.toLocaleDateString([],{day:'2-digit',month:'2-digit'})+' '+hm;
}
let _liveData=[];
let _liveEventsById={};
let LIVE_OPEN_ID=null, LIVE_OPEN_A='', LIVE_OPEN_B='';
function renderLive(matches){
  const bar=document.getElementById('liveBar'); if(!bar)return;
  _liveData=matches;
  if(!matches.length){ bar.classList.add('hidden'); bar.innerHTML=''; return; }
  bar.classList.remove('hidden');
  const nLive=matches.filter(m=>m.state==='in').length;
  const head = nLive
    ? `<span class="live-dot"></span>En vivo · ${nLive} en juego`
    : `📅 Partidos · ${matches.length}`;
  bar.classList.toggle('haslive', nLive>0);
  const badge=s=> s==='in'?'🔴':(s==='post'?'✓':'🕒');
  const goals=(g,p)=> g+(p!=null?` <small style="color:var(--acc2)">(${p})</small>`:'');
  bar.innerHTML='<div class="live-h">'+head+' <span style="color:var(--gray);font-weight:400;text-transform:none;letter-spacing:0">· toca un partido para ver la predicción</span></div>'+
    '<div class="live-cards">'+ matches.map((m,idx)=>
      `<div class="live-card ${m.state}" onclick="openLiveMatch(${idx})" title="Ver la predicción del modelo">`+
        `<div class="live-min">${badge(m.state)} ${m.label}${(m.penA!=null||m.penB!=null)?' · penales':''}</div>`+
        `<div class="live-row"><span class="live-tm"><span class="fl">${flagImg(m.A,15)}</span>${m.A}</span><b>${goals(m.hs,m.penA)}</b></div>`+
        `<div class="live-row"><span class="live-tm"><span class="fl">${flagImg(m.B,15)}</span>${m.B}</span><b>${goals(m.as,m.penB)}</b></div>`+
      `</div>`).join('')+'</div>';
}
// abre el partido en la pestaña "Partido" con la predicción del modelo (para comparar con lo real)
function openLiveMatch(idx){
  const m=_liveData[idx]; if(!m)return;
  setMode('auto'); showView('match');
  PICK_A=m.A; PICK_B=m.B;
  const sA=document.getElementById('selA'), sB=document.getElementById('selB');
  if(sA)sA.value=m.A; if(sB)sB.value=m.B;
  if(typeof renderTeamPicker==='function') renderTeamPicker();
  const koT=document.getElementById('koToggle'); if(koT) koT.checked=!!m.knockout;   // eliminatoria → mostrar quién avanza
  const pen=(m.penA!=null||m.penB!=null)? ` (pen ${m.penA}-${m.penB})` : '';
  const tag = m.state==='in'?'🔴 EN VIVO ' : m.state==='post'?'✓ FINAL ' : '🕒 ';
  ctx.value = (m.state==='pre')
    ? `${tag}${m.label} · ${m.A} vs ${m.B}`
    : `${tag}${m.label} · ${m.A} ${m.hs}-${m.as} ${m.B}${pen}`;
  autoCalc();                                  // corre la predicción (esto limpia LIVE_OPEN_ID)
  LIVE_OPEN_ID=m.id; LIVE_OPEN_A=m.A; LIVE_OPEN_B=m.B;   // fijamos el partido seguido
  renderLiveCompare();
  try{ document.getElementById('results').scrollIntoView({behavior:'smooth',block:'start'}); }catch(e){}
}
// color del equipo (hex de ESPN); aclara los muy oscuros para que se vean en fondo oscuro
function teamColor(hex){
  if(!hex) return null;
  hex=(''+hex).replace('#',''); if(hex.length!==6) return null;
  let r=parseInt(hex.slice(0,2),16), g=parseInt(hex.slice(2,4),16), b=parseInt(hex.slice(4,6),16);
  if([r,g,b].some(isNaN)) return null;
  const lum=0.2126*r+0.7152*g+0.0722*b;
  if(lum<70){ const f=0.5; r=Math.round(r+(255-r)*f); g=Math.round(g+(255-g)*f); b=Math.round(b+(255-b)*f); }
  return `rgb(${r},${g},${b})`;
}
// barra de una estadística: real (color de cada selección) y, debajo, la del modelo
function statBar(label, a, b, ma, mb, unit, colA, colB){
  colA=colA||'var(--blue)'; colB=colB||'var(--red)';
  unit=unit||'';
  const fmt=v=> v==null?'–':(unit==='%'? Math.round(v)+'%' : (Number.isInteger(v)? v : (+v).toFixed(1)));
  const tot=(+a||0)+(+b||0), aw= tot>0? (+a/tot*100):50;
  const mtot=(+ma||0)+(+mb||0), maw=(ma!=null&&mb!=null&&mtot>0)? (+ma/mtot*100):null;
  let h=`<div class="sb">`+
    `<div class="sb-top"><span class="sb-a" style="color:${colA}">${fmt(a)}</span><span class="sb-lab">${label}</span><span class="sb-b" style="color:${colB}">${fmt(b)}</span></div>`+
    `<div class="sb-bar"><span class="sb-seg-a" style="width:${aw}%;background:${colA}"></span><span class="sb-seg-b" style="width:${100-aw}%;background:${colB}"></span></div>`;
  if(maw!=null){
    h+=`<div class="sb-mrow"><span class="sb-ma">${fmt(ma)}</span><span class="sb-mlab">modelo</span><span class="sb-mb">${fmt(mb)}</span></div>`+
       `<div class="sb-bar sb-bar-m"><span class="sb-seg-am" style="width:${maw}%"></span><span class="sb-seg-bm" style="width:${100-maw}%"></span></div>`;
  }
  return h+`</div>`;
}
// panel "En vivo vs predicción": stats reales (goleadores, córners, tarjetas) comparadas con el modelo
function renderLiveCompare(){
  const box=document.getElementById('liveCompare'); if(!box) return;
  const ev = LIVE_OPEN_ID!=null ? _liveEventsById[LIVE_OPEN_ID] : null;
  if(!ev){ box.classList.add('hidden'); box.innerHTML=''; return; }
  const comp=ev.competitions&&ev.competitions[0]; if(!comp){ box.classList.add('hidden'); return; }
  const p=espnParse(ev); if(!p){ box.classList.add('hidden'); return; }
  const st=comp.status||{}, sttype=st.type||{}, state=sttype.state||'';
  const isKO=detectPhase(compNoteText(comp)).knockout;
  const A=LIVE_OPEN_A||p.strHomeTeam, B=LIVE_OPEN_B||p.strAwayTeam;
  const min = sttype.shortDetail || st.displayClock || (state==='post'?'FT':'');
  const tag = state==='in'?'🔴 EN VIVO':(state==='post'?'✓ FINAL':'🕒 POR JUGAR');
  const pred = lastPrediction||{};
  const s = p.stats||{};
  const hs=parseInt(p.intHomeScore,10)||0, as=parseInt(p.intAwayScore,10)||0;   // ESPN los manda como texto
  const pen=(p.homeShootout!=null||p.awayShootout!=null)? `<span class="pen"> (pen ${p.homeShootout}-${p.awayShootout})</span>`:'';

  // marcador
  let html=`<div class="lc-wrap ${state==='post'?'post':''}">`+
    `<div class="lc-top"><span class="lc-min">${tag} · ${min}</span>`+
    `<span class="sub" style="margin:0">vs predicción del modelo</span></div>`;
  if(state==='pre'){
    html+=`<div class="lc-score">${flagImg(A,22)} ${A} <b>vs</b> ${B} ${flagImg(B,22)}</div>`+
      `<div class="sub" style="margin:6px 0 0">El partido aún no comienza. Abajo tienes la predicción del modelo; cuando arranque, aquí verás goleadores, córners y tarjetas reales.</div></div>`;
    box.innerHTML=html; box.classList.remove('hidden'); return;
  }
  html+=`<div class="lc-score">${flagImg(A,22)} ${A} <b>${hs}</b> - <b>${as}</b> ${B} ${flagImg(B,22)}${pen}</div>`;

  // goleadores del partido (separados de la tanda de penales)
  const allSc=(s.scorers||[]);
  const goalSc=allSc.filter(g=>!g.shootout);          // goles del partido (incluye penales en juego)
  const shootSc=allSc.filter(g=>g.shootout);          // penales de la tanda (no cuentan como gol)
  html+='<div class="lc-goals">'+ (goalSc.length
    ? goalSc.map(g=>`<div class="lc-goal">⚽ <b>${g.min||''}</b> ${g.name||'—'} <span style="color:var(--mut)">(${g.home?A:B})</span>${g.pen?' <span style="color:var(--acc2)">de penal</span>':''}${g.ownGoal?' <span style="color:var(--red)">e.c.</span>':''}</div>`).join('')
    : '<div class="sub" style="margin:0">Sin goles todavía.</div>')+'</div>';
  if(shootSc.length || p.homeShootout!=null || p.awayShootout!=null){
    const aPk=shootSc.filter(g=>g.home).map(g=>g.name||'—');
    const bPk=shootSc.filter(g=>!g.home).map(g=>g.name||'—');
    html+='<div class="lc-pens"><div class="lc-pen-h">🥅 Tanda de penales · <b>'+(p.homeShootout!=null?p.homeShootout:'?')+'-'+(p.awayShootout!=null?p.awayShootout:'?')+'</b></div>'+
      `<div class="lc-pen-row"><span class="lc-pen-tm">${flagImg(A,14)} ${A}:</span> ${aPk.length?aPk.join(', '):'—'}</div>`+
      `<div class="lc-pen-row"><span class="lc-pen-tm">${flagImg(B,14)} ${B}:</span> ${bPk.length?bPk.join(', '):'—'}</div>`+
    '</div>';
  }

  // comparativas real vs modelo — barras por equipo (local azul / visitante rojo)
  const shA=pred.predShotsA, shB=pred.predShotsB, shTot=(shA||0)+(shB||0);
  const mPossA=pred.predPossA;
  const shareA = (mPossA!=null)? (0.5-0.4*(mPossA-0.5)) : 0.5;      // el de menos posesión hace más faltas/amarillas
  const mCornA = (pred.predCornersTot!=null&&shTot>0)? pred.predCornersTot*(shA/shTot) : null;
  const mCornB = (pred.predCornersTot!=null&&shTot>0)? pred.predCornersTot*(shB/shTot) : null;
  const myA = (pred.predYellowTot!=null)? pred.predYellowTot*shareA : null;
  const myB = (pred.predYellowTot!=null)? pred.predYellowTot*(1-shareA) : null;
  const colA=teamColor(p.homeColor)||'var(--blue)', colB=teamColor(p.awayColor)||'var(--red)';
  const bars=[];
  if(s.homePoss!=null||s.awayPoss!=null) bars.push(statBar('% Posesión', s.homePoss, s.awayPoss, mPossA!=null?mPossA*100:null, mPossA!=null?(1-mPossA)*100:null, '%', colA, colB));
  bars.push(statBar('Remates', s.homeShots, s.awayShots, shA, shB, '', colA, colB));
  bars.push(statBar('Tiros al arco', s.homeSOT, s.awaySOT, shA!=null?shA*0.34:null, shB!=null?shB*0.34:null, '', colA, colB));
  bars.push(statBar('Córners', s.homeCorners, s.awayCorners, mCornA, mCornB, '', colA, colB));
  if(s.homeFouls!=null||s.awayFouls!=null) bars.push(statBar('Faltas', s.homeFouls, s.awayFouls, null, null, '', colA, colB));
  bars.push(statBar('Amarillas', s.yellowA||0, s.yellowB||0, myA, myB, '', colA, colB));
  if((s.redA||0)+(s.redB||0)>0) bars.push(statBar('Rojas', s.redA||0, s.redB||0, null, null, '', colA, colB));
  html+='<div class="lc-bars">'+bars.join('')+'</div>';

  // predicción de quién avanza (solo en eliminatorias)
  if(isKO && pred.lamH){
    const Rk=simulate(pred.lamH,pred.lamA,pred.rho), KO=knockoutAdvance(pred.lamH,pred.lamA,pred.rho,Rk);
    const favAdv=KO.advH>=KO.advA?A:B;
    let kv=`🏆 <b>Quién avanza (modelo)</b>: ${A} ${pc(KO.advH)} · ${B} ${pc(KO.advA)} — favorito <b>${favAdv}</b>.`;
    if(state==='post'){
      let realAdv = p.homeWinner? A : (p.awayWinner? B : null);
      if(!realAdv && p.homeShootout!=null && p.awayShootout!=null) realAdv=(+p.homeShootout>+p.awayShootout)?A:B;
      if(realAdv) kv+=` Avanzó <b>${realAdv}</b> · ${norm(realAdv)===norm(favAdv)?'✅ acertó':'❌ sorpresa'}.`;
    }
    html+=`<div class="lc-verdict">${kv}</div>`;
  }

  // veredicto: ¿va como dijo la página?
  if(pred.pH!=null){
    const favO = pred.pH>=pred.pD&&pred.pH>=pred.pA?'H':(pred.pA>=pred.pD?'A':'D');
    const curO = hs>as?'H':(hs===as?'D':'A');
    const nm=o=> o==='H'?('gana '+A):o==='A'?('gana '+B):'empate';
    let v;
    if(state==='post'){
      v = (curO===favO) ? `✅ El resultado final coincide con lo que más probable veía el modelo (${nm(favO)}).`
                        : `❌ Sorpresa respecto al modelo: esperaba <b>${nm(favO)}</b> y terminó en <b>${nm(curO)}</b>.`;
    } else {
      v = (curO===favO) ? `✅ Por ahora va en línea con la predicción (${nm(favO)}, ${pc(Math.max(pred.pH,pred.pD,pred.pA))} previo).`
                        : `⚠️ Va distinto a lo previsto: el modelo veía <b>${nm(favO)}</b> y ahora mismo es <b>${nm(curO)}</b>.`;
    }
    const tot=hs+as;
    if(pred.o25!=null){ v+= ` · Goles: <b>${tot}</b> (el modelo daba ${pc(pred.o25)} a Over 2.5).`; }
    html+=`<div class="lc-verdict">${v}</div>`;
  }
  html+='</div>';
  box.innerHTML=html; box.classList.remove('hidden');
}
setTimeout(fetchLive, 1200);                      // marcadores en vivo al abrir
setInterval(()=>{ if(!document.hidden) fetchLive(); }, 15000);   // refresco en vivo cada 15 s
document.addEventListener('visibilitychange',()=>{ if(!document.hidden){ fetchLive(); autoSyncResults(); } });
