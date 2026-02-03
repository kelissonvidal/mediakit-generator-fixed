import { MediaKitData } from '@/types'

export function generateHTMLTemplate(data: MediaKitData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Poppins', sans-serif;
      width: 210mm;
      background: white;
    }
    
    .page {
      width: 210mm;
      height: 297mm;
      page-break-after: always;
      position: relative;
      overflow: hidden;
    }
    
    .page:last-child {
      page-break-after: auto;
    }
    
    /* PAGE 1 */
    .header {
      background: linear-gradient(135deg, #663ea2 0%, #764ba2 100%);
      padding: 25mm 15mm;
      text-align: center;
    }
    
    .quote {
      color: white;
      font-size: 13pt;
      line-height: 1.6;
      font-weight: 400;
    }
    
    .photo-container {
      text-align: center;
      margin: 20mm 0;
    }
    
    .photo {
      width: 180mm;
      max-height: 100mm;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    }
    
    .name {
      font-size: 32pt;
      font-weight: 800;
      text-align: center;
      color: #000;
      margin: 15mm 0 5mm 0;
    }
    
    .title {
      font-size: 14pt;
      text-align: center;
      color: #663ea2;
      font-weight: 600;
      margin-bottom: 15mm;
    }
    
    .content {
      padding: 0 15mm;
    }
    
    .section-title {
      font-size: 22pt;
      font-weight: 800;
      color: #663ea2;
      margin-bottom: 8mm;
    }
    
    .about-text {
      font-size: 11pt;
      line-height: 1.8;
      color: #333;
      margin-bottom: 12mm;
      white-space: pre-wrap;
    }
    
    .info-box {
      background: #e8eaf6;
      padding: 8mm;
      border-radius: 8px;
      margin-bottom: 6mm;
    }
    
    .info-box-title {
      font-size: 13pt;
      font-weight: 700;
      color: #663ea2;
      margin-bottom: 4mm;
    }
    
    .info-box-text {
      font-size: 10pt;
      line-height: 1.6;
      color: #333;
    }
    
    .stats-title {
      font-size: 20pt;
      font-weight: 800;
      color: #663ea2;
      text-align: center;
      margin: 10mm 0 8mm 0;
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 5mm;
      padding: 0 15mm 10mm 15mm;
    }
    
    .stat-card {
      background: #f5f5f5;
      padding: 6mm;
      border-radius: 8px;
      text-align: center;
    }
    
    .stat-value {
      font-size: 20pt;
      font-weight: 800;
      color: #663ea2;
      margin-bottom: 2mm;
    }
    
    .stat-label {
      font-size: 9pt;
      color: #666;
      line-height: 1.3;
    }
    
    .footer {
      text-align: center;
      padding: 8mm 0;
      color: #663ea2;
      font-weight: 600;
      font-size: 11pt;
    }
    
    /* PAGE 2 */
    .portfolio-title {
      font-size: 22pt;
      font-weight: 800;
      color: #663ea2;
      text-align: center;
      margin: 12mm 0 6mm 0;
    }
    
    .portfolio-subtitle {
      font-size: 14pt;
      font-weight: 600;
      color: #663ea2;
      text-align: center;
      margin-bottom: 10mm;
    }
    
    .companies-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 6mm;
      padding: 0 15mm 10mm 15mm;
    }
    
    .company-card {
      background: #f5f5f5;
      padding: 6mm;
      border-radius: 8px;
      text-align: center;
    }
    
    .company-name {
      font-size: 11pt;
      font-weight: 700;
      color: #663ea2;
      margin-bottom: 3mm;
    }
    
    .company-link {
      font-size: 8pt;
      color: #666;
      text-decoration: none;
    }
    
    .stories-section {
      text-align: center;
      padding: 0 15mm 10mm 15mm;
    }
    
    .stories-title {
      font-size: 20pt;
      font-weight: 800;
      color: #663ea2;
      margin-bottom: 6mm;
    }
    
    .stories-btn {
      display: inline-block;
      background: linear-gradient(135deg, #663ea2 0%, #764ba2 100%);
      color: white;
      padding: 6mm 15mm;
      border-radius: 50px;
      font-size: 13pt;
      font-weight: 700;
      text-decoration: none;
    }
    
    /* PAGE 3 */
    .packages-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8mm;
      padding: 0 15mm 10mm 15mm;
    }
    
    .package-card {
      background: #f5f5f5;
      padding: 8mm;
      border-radius: 10px;
      position: relative;
    }
    
    .package-card.featured {
      background: #fff5f5;
      border: 2px solid #663ea2;
    }
    
    .package-badge {
      position: absolute;
      top: -3mm;
      right: 8mm;
      background: #ffd700;
      color: #333;
      padding: 2mm 6mm;
      border-radius: 20px;
      font-size: 9pt;
      font-weight: 700;
    }
    
    .package-name {
      font-size: 15pt;
      font-weight: 800;
      color: #663ea2;
      margin-bottom: 4mm;
    }
    
    .package-price {
      font-size: 18pt;
      font-weight: 700;
      color: #059669;
      margin-bottom: 4mm;
    }
    
    .package-desc {
      font-size: 9pt;
      line-height: 1.6;
      color: #333;
      white-space: pre-wrap;
    }
    
    .services-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3mm;
      padding: 0 15mm 10mm 15mm;
    }
    
    .service-item {
      font-size: 9pt;
      color: #333;
      line-height: 1.5;
    }
    
    .service-item:before {
      content: '✓ ';
      color: #059669;
      font-weight: 700;
    }
    
    .contact-section {
      text-align: center;
      padding: 0 15mm 8mm 15mm;
    }
    
    .contact-title {
      font-size: 20pt;
      font-weight: 800;
      color: #663ea2;
      margin-bottom: 4mm;
    }
    
    .contact-subtitle {
      font-size: 11pt;
      color: #333;
      margin-bottom: 6mm;
    }
    
    .contact-info {
      font-size: 11pt;
      color: #663ea2;
      font-weight: 600;
      margin-bottom: 3mm;
    }
    
    .whatsapp-btn {
      display: inline-block;
      background: #25d366;
      color: white;
      padding: 5mm 12mm;
      border-radius: 50px;
      font-size: 12pt;
      font-weight: 700;
      text-decoration: none;
      margin-top: 4mm;
    }
    
    .final-quote {
      font-size: 10pt;
      color: #666;
      font-style: italic;
      margin-top: 6mm;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <!-- PAGE 1 -->
  <div class="page">
    <div class="header">
      <div class="quote">"${data.quote1}"</div>
    </div>
    
    ${data.photo ? `
    <div class="photo-container">
      <img src="${data.photo}" class="photo">
    </div>
    ` : ''}
    
    <div class="name">${data.name}</div>
    <div class="title">${data.title}</div>
    
    <div class="content">
      <div class="section-title">Sobre mim</div>
      <div class="about-text">${data.about}</div>
      
      <div class="info-box">
        <div class="info-box-title">Missão</div>
        <div class="info-box-text">${data.mission}</div>
      </div>
      
      <div class="info-box">
        <div class="info-box-title">Visão</div>
        <div class="info-box-text">${data.vision}</div>
      </div>
      
      <div class="info-box">
        <div class="info-box-title">Valores</div>
        <div class="info-box-text">${data.values}</div>
      </div>
    </div>
    
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
    
    <div class="footer">@${data.contact.instagram}</div>
  </div>
  
  <!-- PAGE 2 -->
  <div class="page">
    <div class="header">
      <div class="quote">"${data.portfolioQuote}"</div>
    </div>
    
    <div class="portfolio-title">Clique nas empresas abaixo</div>
    <div class="portfolio-subtitle">para ver os Reels no Instagram</div>
    
    <div class="companies-grid">
      ${data.companies.map(company => `
        <div class="company-card">
          <div class="company-name">${company.name}</div>
          ${company.link ? `<a href="${company.link}" class="company-link">Ver Reel</a>` : ''}
        </div>
      `).join('')}
    </div>
    
    <div class="stories-section">
      <div class="stories-title">Vídeos Storys no Instagram</div>
      <a href="${data.storiesLink}" class="stories-btn">ASSISTIR AGORA</a>
    </div>
    
    <div class="footer">@${data.contact.instagram}</div>
  </div>
  
  <!-- PAGE 3 -->
  <div class="page">
    <div class="header">
      <div class="quote">"${data.packagesQuote}"</div>
    </div>
    
    <div class="portfolio-title">Pacotes Disponíveis</div>
    
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
    
    ${data.services.length > 0 ? `
    <div class="portfolio-title" style="font-size: 18pt; margin: 8mm 0 6mm 0;">Mais Serviços</div>
    <div class="services-grid">
      ${data.services.map(service => `
        <div class="service-item">${service}</div>
      `).join('')}
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
</body>
</html>
  `
}
