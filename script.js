(function(){
"use strict";
function init(){
  try{
  var root=document.documentElement;

  /* ---------- Typing effect ---------- */
  try{
    var roles=["Frontend Developer","Office Automation Expert","Web Developer","UI Enthusiast"];
    var ri=0,ci=0,del=false,typedEl=document.getElementById('typed');
    function type(){
      if(!typedEl)return;
      var w=roles[ri];
      typedEl.textContent=del?w.slice(0,ci--):w.slice(0,ci++);
      var s=del?40:90;
      if(!del&&ci===w.length+1){s=1600;del=true;ci=w.length}
      else if(del&&ci<0){del=false;ci=0;ri=(ri+1)%roles.length;s=400}
      setTimeout(type,s);
    }
    type();
  }catch(e){console.warn('typing',e)}

  /* ---------- Skills ---------- */
  var webSkills=[
   {n:"HTML5",ic:"H5",d:"Semantic markup, accessibility, modern structure",lvl:92},
   {n:"CSS3",ic:"C3",d:"Flexbox, Grid, animations, responsive design",lvl:90},
   {n:"JavaScript",ic:"JS",d:"DOM manipulation, events, interactive UIs",lvl:82},
   {n:"Bootstrap 5",ic:"B5",d:"Responsive grid, components, utilities",lvl:88}];
  var officeSkills=[
   {n:"MS Word",ic:"W",d:"Reports, templates, mail merge, formatting",lvl:95},
   {n:"MS Excel",ic:"XL",d:"Formulas, pivot tables, charts, dashboards",lvl:90},
   {n:"MS PowerPoint",ic:"PP",d:"Presentations, slide design, animations",lvl:92}];
  function renderSkills(arr,id){
    var el=document.getElementById(id); if(!el)return;
    el.innerHTML=arr.map(function(s){return '<div class="skill-card tilt reveal"><div class="skill-card-inner">'+
      '<div class="skill-head"><div class="skill-ic">'+s.ic+'</div><div class="skill-name">'+s.n+'</div></div>'+
      '<p>'+s.d+'</p><div class="bar"><i data-lvl="'+s.lvl+'"></i></div>'+
      '</div></div>';}).join('');
  }
  renderSkills(webSkills,'webSkills');
  renderSkills(officeSkills,'officeSkills');

  /* ---------- Projects ---------- */
  var projects=[
   {
     t:"Bloom — Floral Website",
     tags:["HTML","CSS","JavaScript","Responsive"],
     d:"A stunning floral business website featuring handcrafted arrangements, collections, testimonials, and a contact form. Built with smooth animations and modern UI.",
     live:"https://sheikhsiddique722-sketch.github.io/Bloom-web/",
     git:"#",
     gradient:"p4",
     screenshot:"https://api.microlink.io/?url=https%3A%2F%2Fsheikhsiddique722-sketch.github.io%2FBloom-web%2F&screenshot=true&embed=screenshot.url"
   },
   {
     t:"HÅRKA — A Forest Sanctuary",
     tags:["HTML","CSS","JavaScript","Luxury","Dark UI"],
     d:"A moody luxury resort website for 12 blackened-timber cabins in eastern Lapland — featuring dark atmospheric design, ember tones, and refined spatial identity.",
     live:"https://sheikhsiddique722-sketch.github.io/auberge-noir-spatial-identity/",
     git:"#",
     gradient:"p5",
     screenshot:"https://api.microlink.io/?url=https%3A%2F%2Fsheikhsiddique722-sketch.github.io%2Fauberge-noir-spatial-identity%2F&screenshot=true&embed=screenshot.url"
   },
   {
     t:"Maison Lévy — Art Framers",
     tags:["HTML","CSS","JavaScript","Luxury","French"],
     d:"An elegant Parisian art framing house website since 1897 — featuring antique frame restoration, custom framing, and fine art conservation with rich gold and burgundy tones.",
     live:"https://sheikhsiddique722-sketch.github.io/maison-levy/",
     git:"#",
     gradient:"p6",
     screenshot:"https://api.microlink.io/?url=https%3A%2F%2Fsheikhsiddique722-sketch.github.io%2Fmaison-levy%2F&screenshot=true&embed=screenshot.url"
   },
   {
     t:"Atelier Norden — The Quiet Object",
     tags:["HTML","CSS","Branding","Editorial","Identity"],
     d:"A design studio portfolio documenting the brand identity for Maison Hōrai — a Kyoto ceramics atelier. Minimalist, patient, and asymmetric — made for one room and one quiet hour.",
     live:"https://sheikhsiddique722-sketch.github.io/verse-editorial-portfolio/",
     git:"#",
     gradient:"p8",
     screenshot:"https://api.microlink.io/?url=https%3A%2F%2Fsheikhsiddique722-sketch.github.io%2Fverse-editorial-portfolio%2F&screenshot=true&embed=screenshot.url"
   },
   {
     t:"Maison Verre Botanique",
     tags:["HTML","CSS","Packaging","Fragrance","Editorial"],
     d:"An elegant Parisian author perfumery portfolio — six fragrances, six vessels, showcasing brand identity, packaging design, and a quiet ritual of unveiling.",
     live:"https://sheikhsiddique722-sketch.github.io/maison-sept-packaging/",
     git:"#",
     gradient:"p7",
     screenshot:"https://api.microlink.io/?url=https%3A%2F%2Fsheikhsiddique722-sketch.github.io%2Fmaison-sept-packaging%2F&screenshot=true&embed=screenshot.url"
   },
   {
     t:"MAISON — The Slow Issue",
     tags:["HTML","CSS","Editorial","Typography","Publication"],
     d:"A quarterly long-form literary publication for those who believe attention is the rarest luxury — featuring essays, photography, and culture. Edited from Kyoto, Marfa, and Lisbon.",
     live:"https://sheikhsiddique722-sketch.github.io/verse-platform-brand-system/",
     git:"#",
     gradient:"p9",
     screenshot:"https://api.microlink.io/?url=https%3A%2F%2Fsheikhsiddique722-sketch.github.io%2Fverse-platform-brand-system%2F&screenshot=true&embed=screenshot.url"
   },
  ];
  var pg=document.getElementById('projGrid');
  if(pg){
    pg.innerHTML=projects.map(function(p){return(
      '<div class="proj-card tilt reveal">'+
        '<div class="proj-preview '+p.gradient+'">'+
          '<img src="'+p.screenshot+'" alt="'+p.t+'" loading="lazy" onload="this.classList.add(\'loaded\')" onerror="this.style.display=\'none\'">'+
        '</div>'+
        '<div class="proj-body">'+
          '<div class="proj-tags">'+p.tags.map(function(t){return '<span class="proj-tag">'+t+'</span>';}).join('')+'</div>'+
          '<div class="proj-title">'+p.t+'</div>'+
          '<p>'+p.d+'</p>'+
          '<div class="proj-links">'+
            '<a href="'+p.live+'" target="_blank">&#8599; Live Demo</a>'+
            '<a href="'+p.git+'" target="_blank">&#8997; GitHub</a>'+
          '</div>'+
        '</div>'+
      '</div>'
    );}).join('');
  }

  /* ---------- Theme ---------- */
  var tbtn=document.getElementById('themeBtn');
  var sun='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/></svg>';
  var moon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z"/></svg>';
  function setTheme(t){root.setAttribute('data-theme',t); if(tbtn)tbtn.innerHTML=(t==='dark'?moon:sun);}
  setTheme('dark');
  if(tbtn)tbtn.onclick=function(){setTheme(root.getAttribute('data-theme')==='dark'?'light':'dark');};

  /* ---------- Mobile menu ---------- */
  var ham=document.getElementById('ham'),mm=document.getElementById('mobileMenu');
  if(ham&&mm){
    ham.onclick=function(){ham.classList.toggle('open');mm.classList.toggle('open');};
    mm.querySelectorAll('a').forEach(function(a){a.onclick=function(){ham.classList.remove('open');mm.classList.remove('open');};});
  }

  /* ---------- Smooth scroll (Lenis optional) ---------- */
  var lenis=null;
  try{
    if(typeof Lenis!=='undefined'){
      lenis=new Lenis({duration:1.2,easing:function(t){return Math.min(1,1.001-Math.pow(2,-10*t));}});
      function raf(t){lenis.raf(t);requestAnimationFrame(raf);}
      requestAnimationFrame(raf);
    }
  }catch(e){lenis=null;console.warn('lenis',e)}

  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      var id=a.getAttribute('href'); if(id.length<2)return;
      var el=document.querySelector(id);
      if(el){e.preventDefault();
        if(lenis){lenis.scrollTo(el,{offset:-20});}
        else{el.scrollIntoView({behavior:'smooth'});}
      }
    });
  });

  /* ---------- Nav scrolled state + active link ---------- */
  var nav=document.getElementById('nav');
  function onScroll(y){ if(nav)nav.classList.toggle('scrolled',y>40); }
  if(lenis){lenis.on('scroll',function(o){onScroll(o.scroll);});}
  else{window.addEventListener('scroll',function(){onScroll(window.scrollY||window.pageYOffset);});}
  onScroll(window.scrollY||0);

  var navlinks=document.querySelectorAll('.nav-links a');
  if('IntersectionObserver' in window){
    var obs=new IntersectionObserver(function(es){es.forEach(function(e){
      if(e.isIntersecting){navlinks.forEach(function(l){l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id);});}
    });},{rootMargin:"-40% 0px -55% 0px"});
    document.querySelectorAll('section').forEach(function(s){obs.observe(s);});
  }

  /* ---------- Reveals ---------- */
  var reveals=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var rObs=new IntersectionObserver(function(es){es.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add('show');rObs.unobserve(e.target);}
    });},{rootMargin:"0px 0px -10% 0px"});
    reveals.forEach(function(el){rObs.observe(el);});
  }else{
    reveals.forEach(function(el){el.classList.add('show');});
  }

  /* ---------- Stat counters ---------- */
  function animateCount(el){
    var end=+el.dataset.count,suf=el.dataset.suffix||"",start=null,dur=1500;
    function step(ts){ if(!start)start=ts; var p=Math.min((ts-start)/dur,1);
      el.textContent=Math.round(p*end)+suf; if(p<1)requestAnimationFrame(step); }
    requestAnimationFrame(step);
  }
  var stats=document.querySelectorAll('.stat-num');
  if('IntersectionObserver' in window){
    var sObs=new IntersectionObserver(function(es){es.forEach(function(e){
      if(e.isIntersecting){animateCount(e.target);sObs.unobserve(e.target);}
    });},{threshold:.5});
    stats.forEach(function(el){sObs.observe(el);});
  }else{ stats.forEach(animateCount); }

  /* ---------- Skill bars ---------- */
  var skillsSec=document.getElementById('skills');
  function fillBars(){document.querySelectorAll('.bar i').forEach(function(b){b.style.width=b.dataset.lvl+'%';});}
  if('IntersectionObserver' in window && skillsSec){
    var bObs=new IntersectionObserver(function(es){es.forEach(function(e){
      if(e.isIntersecting){fillBars();bObs.disconnect();}
    });},{threshold:.2});
    bObs.observe(skillsSec);
  }else{ fillBars(); }

  /* ---------- 3D tilt ---------- */
  document.querySelectorAll('.tilt').forEach(function(c){
    c.addEventListener('mousemove',function(e){
      var r=c.getBoundingClientRect();
      var x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      c.style.transform='perspective(800px) rotateY('+(x*10)+'deg) rotateX('+(-y*10)+'deg) translateY(-6px)';
    });
    c.addEventListener('mouseleave',function(){c.style.transform='';});
  });

  /* ---------- Photo tilt ---------- */
  var pc=document.getElementById('photoCard'),hero=document.getElementById('hero');
  if(pc&&hero){
    hero.addEventListener('mousemove',function(e){
      var r=pc.getBoundingClientRect();
      var x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      pc.style.transform='perspective(900px) rotateY('+(x*12)+'deg) rotateX('+(-y*12)+'deg)';
    });
    hero.addEventListener('mouseleave',function(){pc.style.transform='';});
  }

  /* ---------- Orb parallax ---------- */
  document.addEventListener('mousemove',function(e){
    var x=(e.clientX/window.innerWidth-.5),y=(e.clientY/window.innerHeight-.5);
    document.querySelectorAll('.orb').forEach(function(o){
      var p=+o.dataset.px; o.style.transform='translate('+(x*p*18)+'px,'+(y*p*18)+'px)';
    });
  });

  /* ---------- Particles ---------- */
  try{
    var cv=document.getElementById('particles');
    if(cv&&cv.getContext){
      var cx=cv.getContext('2d'),W,H,ps=[];
      function rsz(){W=cv.width=window.innerWidth;H=cv.height=window.innerHeight;}
      rsz(); window.addEventListener('resize',rsz);
      for(var i=0;i<60;i++)ps.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*2+.5,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3});
      function draw(){
        cx.clearRect(0,0,W,H);
        var dark=root.getAttribute('data-theme')==='dark';
        cx.fillStyle=dark?'rgba(199,132,252,.5)':'rgba(167,139,250,.45)';
        ps.forEach(function(p){p.x+=p.vx;p.y+=p.vy;
          if(p.x<0||p.x>W)p.vx*=-1; if(p.y<0||p.y>H)p.vy*=-1;
          cx.beginPath();cx.arc(p.x,p.y,p.r,0,Math.PI*2);cx.fill();});
        requestAnimationFrame(draw);
      }
      draw();
    }
  }catch(e){console.warn('particles',e)}

  }catch(err){
    console.error('init error',err);
    document.documentElement.classList.add('nojs-fallback');
    document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('show');});
  }
}

if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}
else{init();}

setTimeout(function(){
  document.querySelectorAll('.reveal:not(.show)').forEach(function(el){el.classList.add('show');});
},2000);
})();
