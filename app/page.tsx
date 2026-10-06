import Image from "next/image";
import Header from "@/components/Header";

const whatsappBase = "https://wa.me/5547999085497";
const whatsappAppointment =
  "https://wa.me/5547999085497?text=Olá!%20Gostaria%20de%20agendar%20um%20atendimento%20para%20o%20meu%20pet.%20🐶🐾";
const whatsappBath =
  "https://wa.me/5547999085497?text=Olá!%20Gostaria%20de%20agendar%20um%20banho%20e%20tosa.%20🐶";

const services = [
  ["🛁", "Banho", "Um banho completo para deixar seu pet limpo, cheiroso e confortável.", "Quero agendar"],
  ["✂️", "Tosa", "Cuidados especiais de corte e higiene para manter seu pet bonito e confortável.", "Quero agendar"],
  ["🐶", "Estética Animal", "Cuidados de estética para deixar seu melhor amigo ainda mais bonito.", "Quero agendar"],
  ["🚕", "Táxi Dog", "Facilidade e segurança para buscar e levar seu pet no conforto de casa.", "Consultar"],
  ["🍖", "Delivery de Ração", "Receba a alimentação e os petiscos do seu pet sem precisar sair de casa.", "Pedir Ração"]
] as const;

const benefits = [
  "Banho completo",
  "Higienização",
  "Secagem",
  "Tosa higiênica/tesoura",
  "Cuidados com o pelo",
  "Atendimento com carinho"
];

const gallery = [
  ["https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400", "Cachorrinho tosado com lacinho"],
  ["https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=400", "Pet feliz após banho"],
  ["https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=400", "Golden Retriever sorridente"],
  ["https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400", "Cão limpinho e penteado"]
] as const;

const products = [
  ["https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=300", "Ração Premium", "🍖 Rações", "Rações Premium e Super Premium", "Olá!%20Gostaria%20de%20consultar%20as%20opções%20de%20rações."],
  ["https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=300", "Petiscos", "🦴 Petiscos", "Petiscos e Ossinhos", "Olá!%20Gostaria%20de%20consultar%20os%20petiscos%20disponíveis."],
  ["https://images.unsplash.com/photo-1585559700398-1385b3a8a360?auto=format&fit=crop&q=80&w=300", "Higiene Pet", "🧴 Higiene", "Shampoos e Antipulgas", "Olá!%20Gostaria%20de%20consultar%20produtos%20de%20higiene."],
  ["https://images.unsplash.com/photo-1608408891486-ebb2392fae2e?auto=format&fit=crop&q=80&w=300", "Acessórios Pet", "🐾 Acessórios", "Coleiras, Guias e Brinquedos", "Olá!%20Gostaria%20de%20consultar%20os%20acessórios."]
] as const;

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="hero" id="inicio">
          <i className="fa-solid fa-paw patinha-bg" style={{ top: "15%", left: "5%" }} aria-hidden="true" />
          <i className="fa-solid fa-heart patinha-bg" style={{ top: "70%", left: "8%" }} aria-hidden="true" />
          <i className="fa-solid fa-paw patinha-bg" style={{ top: "20%", right: "5%" }} aria-hidden="true" />

          <div className="container hero-grid">
            <div className="hero-content">
              <h1>Seu pet merece todo esse carinho ❤️</h1>
              <p>Banho, tosa e cuidados especiais para deixar seu melhor amigo ainda mais feliz.</p>
              <div className="hero-buttons">
                <a href={whatsappAppointment} target="_blank" rel="noreferrer" className="btn btn-primary">
                  <i className="fa-brands fa-whatsapp" aria-hidden="true" /> Agendar pelo WhatsApp
                </a>
                <a href="#servicos" className="btn btn-secondary">Conheça nossos serviços</a>
              </div>
              <div className="hero-trust">
                <i className="fa-solid fa-shield-dog" aria-hidden="true" />
                <span>Cuidado, carinho e dedicação em cada atendimento.</span>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <div className="hero-img-bg">
                <Image
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600"
                  alt="Cachorro feliz após banho e tosa no Patudos Alegres"
                  className="hero-img"
                  width={600}
                  height={600}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="sobre section-padding" id="sobre">
          <div className="container sobre-grid">
            <div>
              <h2 className="titulo-secao">Cuidando de quem faz parte da sua família 🐾</h2>
              <p className="subtitulo-secao">Conheça o espaço Patudos Alegres em Joinville - SC</p>
              <p className="sobre-texto">
                No <strong>Patudos Alegres</strong>, seu pet recebe muito mais do que um banho ou uma tosa. Cada atendimento é feito com carinho, cuidado e atenção, para que seu melhor amigo se sinta confortável, seguro e verdadeiramente bem cuidado.
              </p>
              <div className="diferenciais-cards">
                <div className="diferencial-card">🐾 Atendimento com carinho</div>
                <div className="diferencial-card">✂️ Banho e tosa</div>
                <div className="diferencial-card">🚕 Táxi Dog</div>
                <div className="diferencial-card">🏠 Delivery de ração</div>
                <div className="diferencial-card">❤️ Cuidado especial</div>
              </div>
            </div>
          </div>
        </section>

        <section className="servicos section-padding" id="servicos">
          <div className="container text-center">
            <h2 className="titulo-secao">Nossos Serviços 💖</h2>
            <p className="subtitulo-secao">Tudo o que seu pet precisa para ficar limpinho e saúdavel</p>
            <div className="servicos-grid">
              {services.map(([icon, title, description, cta]) => (
                <div className="servico-card" key={title}>
                  <div>
                    <div className="servico-icone">{icon}</div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                  <a href={whatsappBase} target="_blank" rel="noreferrer" className="btn btn-secondary">{cta}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="banho-tosa section-padding">
          <div className="container banho-tosa-grid">
            <div>
              <h2 className="titulo-secao">Seu pet limpinho, cheiroso e feliz 🛁🐶</h2>
              <p style={{ marginTop: "15px", color: "#555" }}>Proporcionamos um dia de SPA e carinho com equipamentos higienizados e produtos de altíssima qualidade.</p>
              <div className="beneficios-list">
                {benefits.map((benefit) => (
                  <div className="beneficio-item" key={benefit}>
                    <i className="fa-solid fa-check-circle" aria-hidden="true" /> {benefit}
                  </div>
                ))}
              </div>
              <a href={whatsappBath} target="_blank" rel="noreferrer" className="btn btn-primary">
                <i className="fa-brands fa-whatsapp" aria-hidden="true" /> Agendar banho e tosa
              </a>
            </div>
            <div className="banho-tosa-img">
              <Image
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=600"
                alt="Cachorro fofo tomando banho"
                width={600}
                height={450}
              />
            </div>
          </div>
        </section>

        <section className="galeria section-padding" id="galeria">
          <div className="container text-center">
            <h2 className="titulo-secao">Olha só quem já passou por aqui 🐶❤️</h2>
            <p className="subtitulo-secao">Alguns dos nossos clientes depois de receberem aquele cuidado especial.</p>
            <div className="galeria-grid">
              {gallery.map(([src, alt]) => (
                <div className="galeria-item" key={src}>
                  <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 25vw" />
                  <div className="galeria-overlay"><i className="fa-brands fa-instagram" aria-hidden="true" /></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="instagram-section">
          <div className="container">
            <div className="insta-box">
              <i className="fa-brands fa-instagram" style={{ fontSize: "3rem", color: "var(--rosa-vibrante)", marginBottom: "10px" }} aria-hidden="true" />
              <h2 style={{ marginBottom: "5px" }}>Acompanhe nossos Patudos ❤️</h2>
              <a href="https://www.instagram.com/patudosalegres/" target="_blank" rel="noreferrer" className="insta-handle">@patudosalegres</a>
              <p style={{ color: "#666", marginBottom: "20px" }}>Veja nossos trabalhos, promoções e nossos clientes fofos todos os dias.</p>
              <a href="https://www.instagram.com/patudosalegres/" target="_blank" rel="noreferrer" className="btn btn-primary">Ver Instagram</a>
            </div>
          </div>
        </section>

        <section className="promocoes section-padding" id="promocoes">
          <div className="container">
            <div className="promo-container">
              <h2>PROMOÇÕES ESPECIAIS 🐾</h2>
              <p>Cuide do seu pet e aproveite nossas ofertas ativas!</p>
              <div className="promo-grid">
                <div className="promo-card"><h3>Combo Banho e Tosa</h3><p>Pacotes especiais semanais e mensais para manter a higiene do seu pet em dia.</p></div>
                <div className="promo-card"><h3>Promoção de Rações</h3><p>Descontos especiais em marcas selecionadas (Origens, Simparic e muito mais).</p></div>
                <div className="promo-card"><h3>Brinde Surpresa</h3><p>Nas compras de produtos selecionados, ganhe mimos exclusivos para o seu pet!</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="produtos section-padding">
          <div className="container text-center">
            <h2 className="titulo-secao">Produtos Selecionados 🦴</h2>
            <p className="subtitulo-secao">Linha completa de alimentação, cuidados e higiene para cães</p>
            <div className="produtos-grid">
              {products.map(([src, alt, category, title, message]) => (
                <div className="produto-card" key={title}>
                  <Image src={src} alt={alt} className="produto-img" width={300} height={180} />
                  <div className="produto-categoria">{category}</div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "10px" }}>{title}</h3>
                  <a href={`${whatsappBase}?text=${message}`} target="_blank" rel="noreferrer" className="btn btn-secondary produto-cta">Consultar pelo WhatsApp</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="localizacao section-padding" id="contato">
          <div className="container loc-grid">
            <div className="loc-info">
              <h2 className="titulo-secao">Venha nos visitar 🐾</h2>
              <p style={{ marginBottom: "25px", color: "#666" }}>Estamos prontos para receber você e seu amiguinho de braços abertos!</p>
              <p><i className="fa-solid fa-location-dot" aria-hidden="true" /> <strong>Endereço:</strong> R. Senador Rodrigo Lobo, 1682 - Jardim Iririú, Joinville - SC</p>
              <p><i className="fa-brands fa-whatsapp" aria-hidden="true" /> <strong>WhatsApp:</strong> (47) 99908-5497</p>
              <p><i className="fa-brands fa-instagram" aria-hidden="true" /> <strong>Instagram:</strong> @patudosalegres</p>
              <p><i className="fa-solid fa-taxi" aria-hidden="true" /> <strong>Serviços Especiais:</strong> Táxi Dog &amp; Delivery de Ração</p>
              <div style={{ marginTop: "25px" }}>
                <a href="https://maps.google.com/?q=Rua+Senador+Rodrigo+Lobo+1682+Jardim+Iririu+Joinville+SC" target="_blank" rel="noreferrer" className="btn btn-primary">
                  <i className="fa-solid fa-route" aria-hidden="true" /> Como chegar
                </a>
              </div>
            </div>
            <div className="mapa-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.534882198083!2d-48.8188165!3d-26.2767784!2m3!1f0!f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb019bc2e1ddf%3A0x6b107e32a688b77a!2sR.%20Sen.%20Rodrigo%20Lobo%2C%201682%20-%20Jardim%20Iriri%C3%BA%2C%20Joinville%20-%20SC%2C%2089224-021!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mapa do Patudos Alegres"
              />
            </div>
          </div>
        </section>

        <section className="cta-whatsapp">
          <div className="container">
            <h2>Quer deixar seu pet ainda mais lindo? ❤️️</h2>
            <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "25px" }}>Entre em contato com a gente e agende o atendimento do seu pet.</p>
            <a href={whatsappAppointment} target="_blank" rel="noreferrer" className="btn btn-whatsapp cta-button">
              <i className="fa-brands fa-whatsapp" aria-hidden="true" /> Agendar pelo WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="logo footer-logo">
                <div className="logo-icon"><i className="fa-solid fa-dog" aria-hidden="true" /></div>
                <span>Patudos Alegres</span>
              </div>
              <p className="footer-description">Cuidando de quem faz parte da sua família. 🐾❤️</p>
              <div className="social-icons">
                <a href="https://www.instagram.com/patudosalegres/" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram" aria-hidden="true" /></a>
                <a href={whatsappBase} target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp" aria-hidden="true" /></a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Links Rápidos</h4>
              <ul>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#sobre">Sobre nós</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#galeria">Galeria</a></li>
                <li><a href="#promocoes">Promoções</a></li>
                <li><a href="#contato">Contato</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Serviços</h4>
              <ul>
                <li>Banho e Tosa</li>
                <li>Estética Animal</li>
                <li>Táxi Dog</li>
                <li>Delivery de Ração</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Atendimento</h4>
              <p className="footer-muted">Rua Senador Rodrigo Lobo, 1682 - Jardim Iririú, Joinville - SC</p>
              <p className="footer-muted footer-phone">(47) 99908-5497</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; Patudos Alegres Pet Shop. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
