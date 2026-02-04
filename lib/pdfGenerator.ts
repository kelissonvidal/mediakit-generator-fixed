import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { MediaKitData } from '@/types'

export async function generatePDFBrowser(data: MediaKitData): Promise<void> {
  // Criar elemento temporário para renderizar o PDF
  const container = document.createElement('div')
  container.style.position = 'fixed'
  container.style.left = '-9999px'
  container.style.top = '0'
  container.style.width = '210mm'
  container.style.backgroundColor = 'white'
  document.body.appendChild(container)

  // Gerar HTML do PDF
  container.innerHTML = generatePDFHTML(data)

  // Aguardar fontes carregarem
  await document.fonts.ready

  // Criar PDF
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  })

  // Capturar cada página
  const pages = container.querySelectorAll('.pdf-page')
  
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i] as HTMLElement
    
    // Capturar como imagem
    const canvas = await html2canvas(page, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    })

    const imgData = canvas.toDataURL('image/jpeg', 0.95)
    
    if (i > 0) {
      pdf.addPage()
    }
    
    // Adicionar imagem ao PDF
    pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297)
  }

  // Remover elemento temporário
  document.body.removeChild(container)

  // Baixar PDF
  pdf.save(`Media-Kit-${data.name.replace(/\s+/g, '-')}.pdf`)
}

function generatePDFHTML(data: MediaKitData): string {
  return `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800;900&display=swap');
      
      .pdf-page {
        width: 210mm;
        height: 297mm;
        background: white;
        font-family: 'Poppins', sans-serif;
        position: relative;
        page-break-after: always;
        overflow: hidden;
      }
      
      .header-purple {
        background: #663ea2;
        padding: 12mm 15mm;
        text-align: center;
      }
      
      .header-quote {
        color: white;
        font-size: 12pt;
        line-height: 1.6;
        font-weight: 600;
      }
      
      .photo-section {
        position: relative;
        width: 100%;
        height: 90mm;
      }
      
      .photo-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      .photo-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.85), transparent);
        padding: 12mm 10mm 6mm;
        text-align: center;
      }
      
      .photo-name {
        font-size: 30pt;
        font-weight: 900;
        color: white;
        margin-bottom: 3mm;
        text-shadow: 0 3px 10px rgba(0,0,0,0.5);
      }
      
      .photo-title {
        font-size: 12pt;
        color: #e0e0ff;
        font-weight: 600;
      }
      
      .impact-quote {
        background: #ede9fe;
        padding: 6mm 15mm;
        text-align: center;
        border-left: 4mm solid #663ea2;
        margin: 10mm 0 8mm;
      }
      
      .impact-text {
        color: #663ea2;
        font-size: 10pt;
        line-height: 1.5;
        font-weight: 600;
        font-style: italic;
      }
      
      .content-section {
        padding: 0 15mm 8mm;
      }
      
      .section-title {
        font-size: 18pt;
        font-weight: 800;
        color: #663ea2;
        margin-bottom: 5mm;
        border-bottom: 3px solid #663ea2;
        padding-bottom: 2mm;
      }
      
      .about-text {
        font-size: 9.5pt;
        line-height: 1.7;
        color: #333;
        margin-bottom: 8mm;
        text-align: justify;
      }
      
      .info-box {
        background: #e8eaf6;
        padding: 4mm 6mm;
        border-radius: 8px;
        margin-bottom: 3mm;
        border-left: 4px solid #663ea2;
      }
      
      .info-title {
        font-size: 11pt;
        font-weight: 800;
        color: #663ea2;
        margin-bottom: 2mm;
      }
      
      .info-text {
        font-size: 8.5pt;
        line-height: 1.6;
        color: #444;
      }
      
      .stats-section {
        background: #f8f7ff;
        padding: 8mm 15mm;
        border-top: 3px solid #e8eaf6;
      }
      
      .stats-title {
        font-size: 16pt;
        font-weight: 900;
        color: #663ea2;
        text-align: center;
        margin-bottom: 6mm;
        text-transform: uppercase;
      }
      
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 4mm;
      }
      
      .stat-card {
        background: white;
        padding: 5mm;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 3px 12px rgba(0,0,0,0.1);
        border: 2px solid #f0f0f0;
      }
      
      .stat-value {
        font-size: 20pt;
        font-weight: 900;
        color: #663ea2;
        margin-bottom: 2mm;
      }
      
      .stat-label {
        font-size: 7.5pt;
        color: #666;
        font-weight: 600;
      }
      
      .footer-text {
        position: absolute;
        bottom: 6mm;
        left: 0;
        right: 0;
        text-align: center;
        color: #663ea2;
        font-weight: 700;
        font-size: 11pt;
      }
      
      /* PAGE 2 */
      .portfolio-section {
        background: #f8f7ff;
        padding: 12mm 15mm;
      }
      
      .portfolio-title {
        font-size: 18pt;
        font-weight: 900;
        color: #663ea2;
        text-align: center;
        margin-bottom: 4mm;
        text-transform: uppercase;
      }
      
      .portfolio-subtitle {
        font-size: 12pt;
        font-weight: 600;
        color: #764ba2;
        text-align: center;
        margin-bottom: 10mm;
      }
      
      .companies-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 6mm;
        margin-bottom: 12mm;
      }
      
      .company-card {
        background: white;
        padding: 6mm;
        border-radius: 12px;
        text-align: center;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        border: 2px solid #f0f0f0;
      }
      
      .company-logo {
        width: 25mm;
        height: 25mm;
        border-radius: 50%;
        object-fit: cover;
        margin: 0 auto 4mm;
        border: 3px solid #663ea2;
        display: block;
      }
      
      .company-name {
        font-size: 10pt;
        font-weight: 700;
        color: #663ea2;
        margin-bottom: 2mm;
      }
      
      .company-link {
        font-size: 8pt;
        color: #8e54e9;
        font-weight: 600;
      }
      
      .stories-container {
        background: #ede9fe;
        padding: 10mm 15mm;
        text-align: center;
        border-radius: 15px;
      }
      
      .stories-title {
        font-size: 16pt;
        font-weight: 800;
        color: #663ea2;
        margin-bottom: 8mm;
      }
      
      .stories-btn {
        display: inline-block;
        background: #663ea2;
        color: white;
        padding: 6mm 18mm;
        border-radius: 50px;
        font-size: 13pt;
        font-weight: 800;
        text-transform: uppercase;
      }
      
      /* PAGE 3 */
      .packages-section {
        background: #f8f7ff;
        padding: 12mm 15mm 8mm;
      }
      
      .packages-title {
        font-size: 18pt;
        font-weight: 900;
        color: #663ea2;
        text-align: center;
        margin-bottom: 10mm;
        text-transform: uppercase;
      }
      
      .packages-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8mm;
        margin-bottom: 8mm;
      }
      
      .package-card {
        background: white;
        padding: 8mm;
        border-radius: 15px;
        position: relative;
        box-shadow: 0 6px 20px rgba(0,0,0,0.12);
        border: 2px solid #e0e0e0;
      }
      
      .package-card.featured {
        background: #fff5f5;
        border: 3px solid #663ea2;
        box-shadow: 0 8px 25px rgba(102,62,162,0.25);
      }
      
      .package-badge {
        position: absolute;
        top: -4mm;
        right: 8mm;
        background: #ffd700;
        color: #663ea2;
        padding: 2mm 8mm;
        border-radius: 20px;
        font-size: 8pt;
        font-weight: 900;
        text-transform: uppercase;
      }
      
      .package-name {
        font-size: 14pt;
        font-weight: 900;
        color: #663ea2;
        margin-bottom: 4mm;
      }
      
      .package-price {
        font-size: 18pt;
        font-weight: 900;
        color: #10b981;
        margin-bottom: 4mm;
      }
      
      .package-desc {
        font-size: 8.5pt;
        line-height: 1.6;
        color: #444;
      }
      
      .services-section {
        background: #ede9fe;
        padding: 6mm 15mm;
      }
      
      .services-title {
        font-size: 16pt;
        font-weight: 900;
        color: #663ea2;
        text-align: center;
        margin-bottom: 8mm;
        text-transform: uppercase;
      }
      
      .services-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 4mm;
      }
      
      .service-item {
        font-size: 8pt;
        color: #444;
        padding: 3mm;
        background: white;
        border-radius: 8px;
        display: flex;
        align-items: center;
      }
      
      .service-check {
        color: #10b981;
        font-weight: 900;
        margin-right: 2mm;
        background: #d1fae5;
        width: 5mm;
        height: 5mm;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        flex-shrink: 0;
        font-size: 10pt;
      }
      
      .contact-section {
        background: #f8f7ff;
        padding: 10mm 20mm 15mm;
        text-align: center;
        border-top: 3px solid #e8eaf6;
      }
      
      .contact-title {
        font-size: 16pt;
        font-weight: 900;
        color: #663ea2;
        margin-bottom: 3mm;
        text-transform: uppercase;
      }
      
      .contact-subtitle {
        font-size: 9pt;
        color: #666;
        margin-bottom: 6mm;
        font-weight: 600;
      }
      
      .contact-info {
        font-size: 10pt;
        color: #663ea2;
        font-weight: 700;
        margin-bottom: 3mm;
      }
      
      .whatsapp-btn {
        display: inline-block;
        background: #25d366;
        color: white;
        padding: 5mm 12mm;
        border-radius: 50px;
        font-size: 11pt;
        font-weight: 900;
        text-transform: uppercase;
        margin-top: 6mm;
      }
      
      .final-quote {
        font-size: 8.5pt;
        color: #888;
        font-style: italic;
        margin-top: 6mm;
        line-height: 1.6;
      }
    </style>
    
    <!-- PAGE 1 -->
    <div class="pdf-page">
      <div class="header-purple">
        <div class="header-quote">"${data.quote1}"</div>
      </div>
      
      ${data.photo ? `
        <div class="photo-section">
          <img src="${data.photo}" class="photo-img" crossorigin="anonymous">
          <div class="photo-overlay">
            <div class="photo-name">${data.name}</div>
            <div class="photo-title">${data.title}</div>
          </div>
        </div>
      ` : `
        <div style="text-align: center; padding: 20mm 0;">
          <div style="font-size: 30pt; font-weight: 900; color: #663ea2; margin-bottom: 5mm;">${data.name}</div>
          <div style="font-size: 12pt; font-weight: 600; color: #764ba2;">${data.title}</div>
        </div>
      `}
      
      <div class="impact-quote">
        <div class="impact-text">"${data.portfolioQuote}"</div>
      </div>
      
      <div class="content-section">
        <div class="section-title">Sobre mim</div>
        <div class="about-text">${data.about}</div>
        
        <div class="info-box">
          <div class="info-title">● Missão</div>
          <div class="info-text">${data.mission}</div>
        </div>
        
        <div class="info-box">
          <div class="info-title">● Visão</div>
          <div class="info-text">${data.vision}</div>
        </div>
        
        <div class="info-box">
          <div class="info-title">● Valores</div>
          <div class="info-text">${data.values}</div>
        </div>
      </div>
      
      <div class="stats-section">
        <div class="stats-title">Estatísticas de Engajamento</div>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">${data.stats.instagram}</div>
            <div class="stat-label">Seguidores no Instagram</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${data.stats.tiktok}</div>
            <div class="stat-label">Seguidores no TikTok</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${data.stats.reach}</div>
            <div class="stat-label">Alcance Mensal</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${data.stats.posts}</div>
            <div class="stat-label">Publicações Criadas</div>
          </div>
        </div>
      </div>
      
      <div class="footer-text">@${data.contact.instagram}</div>
    </div>
    
    <!-- PAGE 2 -->
    <div class="pdf-page">
      <div class="header-purple">
        <div class="header-quote">"${data.portfolioQuote}"</div>
      </div>
      
      <div class="portfolio-section">
        <div class="portfolio-title">Clique nas empresas abaixo</div>
        <div class="portfolio-subtitle">para ver os Reels no Instagram</div>
        
        <div class="companies-grid">
          ${data.companies.slice(0, 9).map(company => `
            <div class="company-card">
              ${company.logo ? `
                <img src="${company.logo}" class="company-logo" crossorigin="anonymous">
              ` : ''}
              <div class="company-name">${company.name}</div>
              ${company.link ? `<div class="company-link">Ver Reel</div>` : ''}
            </div>
          `).join('')}
        </div>
        
        <div class="stories-container">
          <div class="stories-title">Vídeos Storys no Instagram</div>
          <div class="stories-btn">ASSISTIR AGORA</div>
        </div>
      </div>
      
      <div class="footer-text">@${data.contact.instagram}</div>
    </div>
    
    <!-- PAGE 3 -->
    <div class="pdf-page">
      <div class="header-purple">
        <div class="header-quote">"${data.packagesQuote}"</div>
      </div>
      
      <div class="packages-section">
        <div class="packages-title">Pacotes Disponíveis</div>
        
        <div class="packages-grid">
          ${data.packages.map(pkg => `
            <div class="package-card ${pkg.featured ? 'featured' : ''}">
              ${pkg.featured ? '<div class="package-badge">Mais Popular</div>' : ''}
              <div class="package-name">${pkg.featured ? '⭐ ' : ''}${pkg.name}</div>
              <div class="package-price">${pkg.price}</div>
              <div class="package-desc">${pkg.description}</div>
            </div>
          `).join('')}
        </div>
      </div>
      
      ${data.services.length > 0 ? `
      <div class="services-section">
        <div class="services-title">Mais Serviços</div>
        <div class="services-grid">
          ${data.services.map(service => `
            <div class="service-item">
              <span class="service-check">✓</span>
              ${service}
            </div>
          `).join('')}
        </div>
      </div>
      ` : ''}
      
      <div class="contact-section">
        <div class="contact-title">Vamos Trabalhar Juntos?</div>
        <div class="contact-subtitle">Transforme sua marca em um sucesso digital!</div>
        
        <div class="contact-info">📧 ${data.contact.email}</div>
        <div class="contact-info">📱 ${data.contact.phone}</div>
        <div class="contact-info">📸 @${data.contact.instagram}</div>
        
        <a href="${data.contact.whatsapp}" class="whatsapp-btn">💬 Fale comigo no WhatsApp</a>
        
        <div class="final-quote">"${data.finalQuote}"</div>
      </div>
    </div>
  `
}
