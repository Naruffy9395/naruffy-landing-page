* { margin:0; padding:0; box-sizing:border-box; }

:root{
  --bg:#0a0a0a;
  --bg-alt:#111111;
  --text:#f5f5f5;
  --muted:#9a9a9a;
  --accent:#7c5cff;
  --border:#222;
}

body{
  background:var(--bg);
  color:var(--text);
  font-family:'Segoe UI', system-ui, sans-serif;
  line-height:1.6;
  overflow-x:hidden;
}

a{ text-decoration:none; color:inherit; }

/* NAVBAR */
.navbar{
  position:fixed; top:0; left:0; right:0;
  display:flex; justify-content:space-between; align-items:center;
  padding:20px 6%;
  background:rgba(10,10,10,0.85);
  backdrop-filter:blur(10px);
  z-index:100;
  border-bottom:1px solid var(--border);
}
.logo{ font-weight:700; font-size:1.3rem; letter-spacing:1px; }
nav a{ margin-left:24px; font-size:0.95rem; color:var(--muted); transition:color .3s; }
nav a:hover{ color:var(--text); }
.nav-cta{
  background:var(--accent); color:#fff !important;
  padding:8px 16px; border-radius:30px; font-size:0.9rem !important;
}

/* HERO */
.hero{
  min-height:100vh; display:flex; align-items:center; justify-content:center;
  text-align:center; padding:0 6%;
  background:radial-gradient(circle at 50% 20%, rgba(124,92,255,0.15), transparent 60%);
}
.hero h1{
  font-size:clamp(2.2rem, 6vw, 4.5rem);
  font-weight:800; line-height:1.15; margin-bottom:20px;
}
.hero h1 span{ color:var(--accent); }
.hero p{
  color:var(--muted); font-size:1.1rem; max-width:500px; margin:0 auto 32px;
}
.btn-primary{
  display:inline-block; background:var(--accent); color:#fff;
  padding:14px 30px; border-radius:30px; font-weight:600;
  transition:transform .25s, box-shadow .25s;
}
.btn-primary:hover{ transform:translateY(-3px); box-shadow:0 10px 30px rgba(124,92,255,0.4); }

/* SECTIONS */
section{ padding:100px 6%; }
section h2{ font-size:2.2rem; margin-bottom:40px; text-align:center; }

/* SERVICES */
.grid{
  display:grid; grid-template-columns:repeat(auto-fit, minmax(220px,1fr)); gap:24px;
}
.card{
  background:var(--bg-alt); border:1px solid var(--border);
  padding:28px; border-radius:16px; transition:transform .3s, border-color .3s;
}
.card:hover{ transform:translateY(-6px); border-color:var(--accent); }
.card h3{ margin-bottom:10px; font-size:1.2rem; }
.card p{ color:var(--muted); font-size:0.95rem; }

/* WORK */
.work-grid{
  display:grid; grid-template-columns:repeat(auto-fit, minmax(240px,1fr)); gap:24px;
}
.work-item{ cursor:pointer; }
.work-thumb{
  height:180px; border-radius:14px;
  background:linear-gradient(135deg, #1a1a1a, #262626);
  border:1px solid var(--border);
  margin-bottom:14px; transition:border-color .3s;
}
.work-item:hover .work-thumb{ border-color:var(--accent); }
.work-item h4{ font-size:1.05rem; }
.work-item p{ color:var(--muted); font-size:0.9rem; }

/* ABOUT */
.about{ text-align:center; max-width:700px; margin:0 auto; }
.about p{ color:var(--muted); font-size:1.05rem; }

/* CONTACT */
.contact{ text-align:center; }
.contact p{ color:var(--muted); margin-bottom:28px; }

footer{
  text-align:center; padding:30px; color:var(--muted);
  border-top:1px solid var(--border); font-size:0.85rem;
}

/* SCROLL REVEAL ANIMATION */
.reveal{
  opacity:0; transform:translateY(30px);
  transition:opacity .8s ease, transform .8s ease;
}
.reveal.active{ opacity:1; transform:translateY(0); }

@media(max-width:700px){
  nav a:not(.nav-cta){ display:none; }
    }
