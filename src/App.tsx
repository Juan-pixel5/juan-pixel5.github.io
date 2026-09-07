import { useState } from 'react';

type Page = 'inicio' | 'nosotros' | 'contacto';

const plantList = [
  'Palma de cera (arbol nacional)',
  'Orquidea cattleya (flor nacional)',
  'Helecho culantrillo',
  'Bromelia guzmania',
  'Suculenta corona de fraile',
];

const plants = [
  { name: 'Palma de Cera', description: 'Arbol nacional de Colombia. Puede alcanzar hasta 60 metros de altura y crece en los valles andinos entre 2.500 y 3.000 m.s.n.m.', image: 'https://images.pexels.com/photos/15699946/pexels-photo-15699946.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600' },
  { name: 'Orquidea Cattleya', description: 'Flor nacional de Colombia. Reconocida por sus petalos grandes y coloridos, simboliza la belleza y riqueza natural del pais.', image: 'https://images.pexels.com/photos/8280971/pexels-photo-8280971.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600' },
  { name: 'Helecho Culantrillo', description: 'Helecho delicado de hojas finas y elegantes. Ideal para interiores humedos y sombreados, aporta frescura a cualquier espacio.', image: 'https://images.pexels.com/photos/12659072/pexels-photo-12659072.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600' },
  { name: 'Bromelia Guzmania', description: 'Planta tropical con bracteas rojas, naranjas o amarillas. Crece en los bosques humedos colombianos y es perfecta para decoracion.', image: 'https://images.pexels.com/photos/1252896/pexels-photo-1252896.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600' },
  { name: 'Suculenta Corona de Fraile', description: 'Suculenta resistente y de bajo mantenimiento. Su forma compacta y textura unica la convierten en una joya para jardines secos.', image: 'https://images.pexels.com/photos/37992842/pexels-photo-37992842.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600' },
  { name: 'Nuestro Vivero', description: 'Cultivamos con amor en el corazon de los Andes colombianos. Visitanos y descubre mas de 20 variedades nativas listas para tu hogar.', image: 'https://images.pexels.com/photos/6777855/pexels-photo-6777855.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600' },
];

const videos = [
  { id: 'Es7NnI8WI3Y', title: 'Las palmas de cera del Valle de Cocora' },
  { id: 'aVBIYSrai44', title: 'Valle del Cocora, Colombia' },
  { id: '3h2zru7Cn-U', title: 'Exposicion de Orquideas y Plantas' },
  { id: 'NM1wfnRe7UA', title: 'Orquideas de la Selva Colombiana' },
];

const values = [
  { title: 'Sostenibilidad', desc: 'Cultivamos de manera responsable, respetando los ciclos naturales y protegiendo los ecosistemas colombianos.' },
  { title: 'Biodiversidad', desc: 'Preservamos y propagamos especies nativas para conservar la riqueza natural de Colombia.' },
  { title: 'Pasion', desc: 'Cada planta es cultivada con amor y dedicacion por nuestro equipo de expertos botanicos.' },
  { title: 'Comunidad', desc: 'Trabajamos con comunidades locales para generar empleo y promover el desarrollo sostenible.' },
  { title: 'Innovacion', desc: 'Implementamos tecnicas modernas de cultivo que respetan el medio ambiente y mejoran la calidad.' },
  { title: 'Tradicion Andina', desc: 'Honramos el conocimiento ancestral de nuestros abuelos campesinos en cada practica de cultivo.' },
];

const timeline = [
  { year: '2010', event: 'Fundacion de Verde Andino como vivero familiar en las afueras de Bogota.' },
  { year: '2013', event: 'Ampliacion del vivero a mas de 2 hectareas con invernaderos especializados.' },
  { year: '2016', event: 'Inicio del programa de conservacion de orquideas nativas colombianas.' },
  { year: '2019', event: 'Reconocimiento por el Ministerio de Ambiente por practicas sostenibles.' },
  { year: '2022', event: 'Apertura de punto de venta en Bogota y expansion de catalogo a 20+ especies.' },
  { year: '2025', event: 'Lanzamiento de programa de reforestacion con palma de cera en el Quindio.' },
];

function Navbar({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  const [open, setOpen] = useState(false);
  const links: { to: Page; label: string }[] = [
    { to: 'inicio', label: 'Inicio' },
    { to: 'nosotros', label: 'Nosotros' },
    { to: 'contacto', label: 'Contactanos' },
  ];
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <button className="navbar-brand" onClick={() => { setPage('inicio'); window.scrollTo(0, 0); }}>
          <span className="navbar-brand-title">Verde Andino</span>
          <span className="navbar-brand-sub">| Vivero Colombiano</span>
        </button>
        <div className="navbar-links">
          {links.map((l) => (
            <button
              key={l.to}
              className={`navbar-link ${page === l.to ? 'active' : ''}`}
              onClick={() => { setPage(l.to); window.scrollTo(0, 0); }}
            >
              {l.label}
            </button>
          ))}
        </div>
        <button className="navbar-toggle" onClick={() => setOpen(!open)}>
          {open ? '\u2715' : '\u2630'}
        </button>
      </div>
      {open && (
        <div className="navbar-mobile">
          {links.map((l) => (
            <button
              key={l.to}
              className={`navbar-mobile-link ${page === l.to ? 'active' : ''}`}
              onClick={() => { setPage(l.to); setOpen(false); window.scrollTo(0, 0); }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function Footer({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h3>Verde Andino</h3>
          <p className="footer-brand-sub">Vivero familiar - Colombia</p>
          <p className="footer-tagline">"Sembramos futuro, raiz a raiz"</p>
        </div>
        <div>
          <h3>Navegacion</h3>
          <ul>
            <li><button className="footer-link" onClick={() => { setPage('inicio'); window.scrollTo(0, 0); }}>Inicio</button></li>
            <li><button className="footer-link" onClick={() => { setPage('nosotros'); window.scrollTo(0, 0); }}>Nosotros</button></li>
            <li><button className="footer-link" onClick={() => { setPage('contacto'); window.scrollTo(0, 0); }}>Contactanos</button></li>
          </ul>
        </div>
        <div>
          <h3>Contacto</h3>
          <p>- Bogota, Colombia</p>
          <p>- +57 300 123 4567</p>
          <p>- info@verdeandino.co</p>
        </div>
      </div>
      <div className="footer-bottom">
        Verde Andino © 2025
      </div>
    </footer>
  );
}

function VideoSlider() {
  const [cur, setCur] = useState(0);
  const v = videos[cur];
  return (
    <section className="video-section">
      <div className="video-container">
        <div className="video-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${v.id}`}
            title={v.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="video-title">{v.title}</p>
        <div className="video-nav">
          <button className="video-arrow" onClick={() => setCur((cur - 1 + videos.length) % videos.length)}>&#8249;</button>
          <div className="video-dots">
            {videos.map((_, i) => (
              <button key={i} className={`video-dot ${i === cur ? 'active' : ''}`} onClick={() => setCur(i)} />
            ))}
          </div>
          <button className="video-arrow" onClick={() => setCur((cur + 1) % videos.length)}>&#8250;</button>
        </div>
      </div>
    </section>
  );
}

function Inicio() {
  return (
    <>
      <section className="section">
        <div className="container-md">
          <h2 className="section-title">Mision</h2>
          <div className="text-body" style={{ marginBottom: '1rem' }}>
            Ofrecer plantas nativas y ornamentales de alta calidad, cultivadas de manera responsable en Colombia, para embellecer hogares, empresas y espacios publicos. Buscamos promover el cuidado del medio ambiente, la conservacion de la biodiversidad colombiana y la conexion de las personas con la naturaleza, brindando productos y asesoria que contribuyan al desarrollo sostenible del pais.
          </div>
          <h2 className="section-title">Vision</h2>
          <div className="text-body">
            Para el ano 2035, ser reconocidos como una de las empresas lideres en Colombia en la produccion y comercializacion de plantas nativas y ornamentales, destacandonos por nuestro compromiso con la sostenibilidad, la proteccion de los ecosistemas y la innovacion en practicas de cultivo. Aspiramos a contribuir a la creacion de ciudades y comunidades mas verdes, fomentando una cultura de respeto y conservacion de la riqueza natural colombiana.
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#e8e3d8' }}>
        <div className="container-md">
          <h2 className="section-title">Nuestras plantas colombianas</h2>
          <ul className="plant-list">
            {plantList.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
          <p className="plant-note">Mas de 20 variedades nativas</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Galeria de nuestras especies</h2>
          <div className="gallery-grid">
            {plants.map((p, i) => (
              <div key={i} className="gallery-item">
                <img src={p.image} alt={p.name} />
                <div className="gallery-item-content">
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#e8e3d8', textAlign: 'center' }}>
        <div className="container-xs cta">
          <p className="cta-brand">Verde Andino</p>
          <p className="cta-sub">Vivero familiar - Colombia</p>
          <p className="cta-quote">"Sembramos futuro, raiz a raiz"</p>
        </div>
      </section>

      <VideoSlider />
    </>
  );
}

function Nosotros() {
  return (
    <>
      <section className="page-header">
        <h1>Nosotros</h1>
        <p>Conoce la historia y el equipo detras de Verde Andino</p>
      </section>

      <section className="section">
        <div className="container-md">
          <h2 className="section-title">Nuestra Historia</h2>
          <div className="historia-grid">
            <div>
              <p className="text-body">Verde Andino nacio en 2010 como un sueno familiar: crear un espacio donde las plantas nativas colombianas fueran cultivadas con respeto y amor por la tierra que nos vio crecer.</p>
              <p className="text-body">Desde las laderas de los Andes, en las cercanias de Bogota, comenzamos con un pequeno invernadero y unas cuantas semillas de orquideas. Hoy, nuestro vivero se extiende por mas de 2 hectareas y alberga mas de 20 variedades de plantas nativas y ornamentales.</p>
              <p className="text-body">Nuestro compromiso con la sostenibilidad y la conservacion de la biodiversidad colombiana nos ha permitido crecer mientras protegemos los ecosistemas que tanto amamos.</p>
            </div>
            <div>
              <img src="https://images.pexels.com/photos/6777855/pexels-photo-6777855.jpeg?auto=compress&cs=tinysrgb&h=400&w=600" alt="Historia Verde Andino" />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#e8e3d8' }}>
        <div className="container">
          <h2 className="section-title">Nuestros Valores</h2>
          <div className="valores-grid">
            {values.map((v, i) => (
              <div key={i} className="valores-item">
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-md">
          <h2 className="section-title">Nuestra Trayectoria</h2>
          <div className="timeline">
            {timeline.map((t, i) => (
              <div key={i} className="timeline-item">
                <span className="timeline-year">{t.year}</span>
                <span className="timeline-event">{t.event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#e8e3d8' }}>
        <div className="container-md">
          <h2 className="section-title">Nuestro Equipo</h2>
          <p className="text-body text-center" style={{ marginBottom: '1.5rem' }}>Somos un equipo apasionado de botanicos, agronomos y amantes de la naturaleza que trabajan cada dia para llevar la belleza de la flora colombiana a tu hogar.</p>
          <div className="equipo-grid">
            <div className="equipo-item">
              <img src="https://images.pexels.com/photos/37992842/pexels-photo-37992842.jpeg?auto=compress&cs=tinysrgb&h=400&w=600" alt="Cultivando con pasion" />
              <p>Cultivando con pasion</p>
            </div>
            <div className="equipo-item">
              <img src="https://images.pexels.com/photos/12659072/pexels-photo-12659072.jpeg?auto=compress&cs=tinysrgb&h=400&w=600" alt="Nuestro equipo familiar" />
              <p>Nuestro equipo familiar</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
  const [sent, setSent] = useState(false);
  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
  };
  return (
    <>
      <section className="page-header">
        <h1>Contactanos</h1>
        <p>Estamos aqui para ayudarte a encontrar la planta perfecta</p>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Informacion de Contacto</h2>
              <div className="contact-info">
                <div>
                  <h3>Ubicacion</h3>
                  <p>Vereda El Rosal, Km 5 via Chia</p>
                  <p>Cundinamarca, Colombia</p>
                </div>
                <div>
                  <h3>Telefono</h3>
                  <p>+57 300 123 4567</p>
                  <p>+57 (1) 876 5432</p>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>info@verdeandino.co</p>
                  <p>ventas@verdeandino.co</p>
                </div>
                <div>
                  <h3>Horario de Atencion</h3>
                  <p>Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                  <p>Sabados: 8:00 AM - 1:00 PM</p>
                  <p>Domingos y festivos: Cerrado</p>
                </div>
              </div>
              <div className="contact-redes">
                <h3>Siguenos en redes</h3>
                <div className="contact-redes-links">
                  <a href="#">Facebook</a>
                  <a href="#">Instagram</a>
                  <a href="#">WhatsApp</a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Enviar Mensaje</h2>
              {sent && (
                <div className="form-success">
                  <p>Mensaje enviado con exito</p>
                  <p>Nos pondremos en contacto contigo pronto.</p>
                </div>
              )}
              <form className="contact-form" onSubmit={submit}>
                <div>
                  <label className="form-label">Nombre completo *</label>
                  <input className="form-input" name="nombre" value={form.nombre} onChange={handle} required />
                </div>
                <div>
                  <label className="form-label">Email *</label>
                  <input className="form-input" name="email" type="email" value={form.email} onChange={handle} required />
                </div>
                <div>
                  <label className="form-label">Telefono</label>
                  <input className="form-input" name="telefono" value={form.telefono} onChange={handle} />
                </div>
                <div>
                  <label className="form-label">Asunto *</label>
                  <select className="form-select" name="asunto" value={form.asunto} onChange={handle} required>
                    <option value="">Selecciona un asunto</option>
                    <option value="compra">Compra de plantas</option>
                    <option value="asesoria">Asesoria de jardineria</option>
                    <option value="visitar">Visitar el vivero</option>
                    <option value="mayorista">Venta mayorista</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Mensaje *</label>
                  <textarea className="form-textarea" name="mensaje" rows={4} value={form.mensaje} onChange={handle} required />
                </div>
                <button className="form-submit" type="submit">Enviar Mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#e8e3d8' }}>
        <div className="container-md como-llegar">
          <h3>Como Llegar</h3>
          <p>Vereda El Rosal</p>
          <p>Km 5 via Chia, Cundinamarca</p>
          <p className="love">A 30 minutos del norte de Bogota</p>
          <p className="extras">Estacionamiento gratuito · Ruta de bus cercana</p>
        </div>
      </section>
    </>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>('inicio');
  return (
    <div>
      <Navbar page={page} setPage={setPage} />
      {page === 'inicio' && <Inicio />}
      {page === 'nosotros' && <Nosotros />}
      {page === 'contacto' && <Contacto />}
      <Footer setPage={setPage} />
    </div>
  );
}
