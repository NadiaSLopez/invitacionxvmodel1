import React,{useEffect,useState} from "react";
import {createRoot} from "react-dom/client";
import {CalendarDays,Clock3,MapPin,Heart,Sparkles,ArrowRight,Music2} from "lucide-react";
import {evento} from "./config";
import "./styles.css";

function App(){
 const [open,setOpen]=useState(false),[lightbox,setLightbox]=useState(null);
 const [time,setTime]=useState({d:"00",h:"00",m:"00",s:"00"});
 useEffect(()=>{const t=setInterval(()=>{const x=new Date("2026-12-05T19:00:00")-new Date();if(x>0)setTime({d:String(Math.floor(x/864e5)).padStart(2,"0"),h:String(Math.floor(x/36e5)%24).padStart(2,"0"),m:String(Math.floor(x/6e4)%60).padStart(2,"0"),s:String(Math.floor(x/1e3)%60).padStart(2,"0")})},1000);return()=>clearInterval(t)},[]);
 useEffect(()=>{const f=()=>document.querySelectorAll(".reveal").forEach(e=>{if(e.getBoundingClientRect().top<innerHeight*.9)e.classList.add("show")});addEventListener("scroll",f);f();return()=>removeEventListener("scroll",f)},[]);
 const wa=()=>window.open(`https://wa.me/${evento.whatsapp}?text=${encodeURIComponent(`Hola, quiero confirmar mi asistencia a los XV años de ${evento.nombre}.`)}`,"_blank");
 return <div className={open?"app opened":"app"}>
 {!open&&<div className="cover"><div className="flower flower-a">✿</div><div className="cover-card"><span>UNA CELEBRACIÓN ESPECIAL</span><div className="initial">{evento.nombre[0]}</div><h1>Mis XV</h1><h2>{evento.nombre}</h2><div className="line"></div><p>{evento.fecha}</p><button onClick={()=>setOpen(true)}>Abrir invitación <ArrowRight size={16}/></button></div><div className="flower flower-b">✿</div></div>}
 <section className="hero"><img src={evento.portada}/><div className="hero-overlay"></div><div className="hero-content"><span>Mis quince años</span><div className="big">15</div><h1>{evento.nombre}</h1><p>{evento.fecha}</p></div><div className="petals">✿　❀　✿</div></section>
 <section className="welcome reveal"><div className="botanical">❀</div><span>Con todo mi corazón</span><h2>Una noche para<br/><i>florecer.</i></h2><p>{evento.frase}</p><Heart className="rose"/></section>
 <section className="date reveal"><div className="heading"><span>Reserva la fecha</span><h2>El gran día</h2></div><div className="info"><div><CalendarDays/><small>FECHA</small><b>{evento.fecha}</b></div><div><Clock3/><small>HORA</small><b>{evento.hora}</b></div><div><MapPin/><small>LUGAR</small><b>{evento.lugar}</b><em>{evento.direccion}</em></div></div></section>
 <section className="count reveal"><span>Faltan</span><h2>para celebrar</h2><div className="timer"><div><b>{time.d}</b><small>DÍAS</small></div><i>:</i><div><b>{time.h}</b><small>HORAS</small></div><i>:</i><div><b>{time.m}</b><small>MIN</small></div><i>:</i><div><b>{time.s}</b><small>SEG</small></div></div></section>
 <section className="family reveal"><div className="family-photo"></div><div className="family-text"><span>Siempre a mi lado</span><h2>Con amor de mis<br/><i>padres</i></h2>{evento.padres.map(x=><p>{x}</p>)}<div className="divider">❀</div><span>Con cariño y gratitud</span><h3>Mis padrinos</h3>{evento.padrinos.map(x=><p>{x}</p>)}</div></section>
 <section className="gallery reveal"><div className="heading"><span>Pequeños instantes</span><h2>Mis recuerdos</h2></div><div className="grid">{evento.galeria.map((x,i)=><button onClick={()=>setLightbox(x)}><img src={x}/><label>0{i+1}</label></button>)}</div></section>
 <section className="place reveal"><div className="place-card"><Sparkles/><span>La celebración</span><h2>Nos vemos en<br/><i>{evento.lugar}</i></h2><p>{evento.direccion}</p><a href={evento.mapa} target="_blank">Ver ubicación <ArrowRight size={16}/></a></div></section>
 <section className="rsvp reveal"><Music2/><span>Será un honor tenerte conmigo</span><h2>¿Nos acompañas?</h2><p>Confirma tu asistencia y sé parte de esta noche especial.</p><button onClick={wa}>Confirmar asistencia <ArrowRight size={16}/></button></section>
 <footer><div>❀</div><strong>{evento.nombre}</strong><span>XV AÑOS · 2026</span></footer>
 {lightbox&&<div className="lightbox" onClick={()=>setLightbox(null)}><img src={lightbox}/></div>}
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);