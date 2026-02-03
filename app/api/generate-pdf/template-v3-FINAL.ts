import { MediaKitData } from '@/types'

export function generateHTMLTemplate(data: MediaKitData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800;900&display=swap');
    
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
      background: white;
    }
    
    .page:last-child {
      page-break-after: auto;
    }
    
    /* PÁGINA 1 */
    .header-top {
      background: linear-gradient(135deg, #663ea2 0%, #764ba2 50%, #8e54e9 100%);
      padding: 10mm 15mm;
      text-align: center;
      box-shadow: 0 4px 15px rgba(102, 62, 162, 0.3);
    }
    
    .header-quote {
      color: white;
      font-size: 12pt;
      line-height: 1.6;
      font-weight: 600;
      text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    
    .photo-container {
      position: relative;
      margin: 0;
      padding: 0;
    }
    
    .photo {
      width: 100%;
      height: 90mm;
      object-fit: cover;
      display: block;
    }
    
    .photo-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%);
      padding: 12mm 10mm 6mm 10mm;
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
      text-shadow: 0 2px 5px rgba(0,0,0,0.5);
    }
    
    .impact-quote {
      background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
      padding: 6mm 15mm;
      text-align: center;
      border-left: 4mm solid #663ea2;
      margin: 10mm 0 8mm 0;
      box-shadow: 0 2px 10px rgba(102, 62, 162, 0.1);
    }
    
    .impact-quote-text {
      color: #663ea2;
      font-size: 10pt;
      line-height: 1.5;
      font-weight: 600;
      font-style: italic;
    }
    
    .content {
      padding: 0 15mm 8mm 15mm;
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
      white-space: pre-wrap;
      text-align: justify;
    }
    
    .info-box {
      background: linear-gradient(135deg, #e8eaf6 0%, #f3e5f5 100%);
      padding: 4mm 6mm;
      border-radius: 8px;
      margin-bottom: 3mm;
      border-left: 4px solid #663ea2;
      box-shadow: 0 2px 8px rgba(102, 62, 162, 0.15);
    }
    
    .info-box-title {
      font-size: 11pt;
      font-weight: 800;
      color: #663ea2;
      margin-bottom: 2mm;
      display: flex;
      align-items: center;
    }
    
    .info-box-title:before {
      content: '●';
      margin-right: 2mm;
      font-size: 12pt;
    }
    
    .info-box-text {
      font-size: 8.5pt;
      line-height: 1.6;
      color: #444;
    }
    
    .stats-section {
      background: linear-gradient(135deg, #f8f7ff 0%, #faf9ff 100%);
      padding: 8mm 15mm;
      margin: 8mm -15mm 0 0;
      border-top: 3px solid #e8eaf6;
    }
    
    .stats-title {
      font-size: 16pt;
      font-weight: 900;
      color: #663ea2;
      text-align: center;
      margin-bottom: 6mm;
      text-transform: uppercase;
      letter-spacing: 0.5px;
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
      background: linear-gradient(135deg, #663ea2 0%, #8e54e9 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 2mm;
    }
    
    .stat-label {
      font-size: 7.5pt;
      color: #666;
      line-height: 1.3;
      font-weight: 600;
    }
    
    .footer {
      position: absolute;
      bottom: 6mm;
      left: 0;
      right: 0;
      text-align: center;
      color: #663ea2;
      font-weight: 700;
      font-size: 11pt;
    }
    
    /* PÁGINA 2 */
    .portfolio-header {
      background: linear-gradient(135deg, #663ea2 0%, #764ba2 50%, #8e54e9 100%);
      padding: 10mm 15mm;
      text-align: center;
      box-shadow: 0 4px 15px rgba(102, 62, 162, 0.3);
    }
    
    .portfolio-quote {
      color: white;
      font-size: 11pt;
      line-height: 1.6;
      font-weight: 600;
      text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    
    .portfolio-section {
      background: linear-gradient(135deg, #f8f7ff 0%, #ffffff 100%);
      padding: 12mm 15mm;
    }
    
    .portfolio-title {
      font-size: 18pt;
      font-weight: 900;
      color: #663ea2;
      text-align: center;
      margin-bottom: 4mm;
      text-transform: uppercase;
      letter-spacing: 0.5px;
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
      margin: 0 auto 4mm auto;
      border: 3px solid #663ea2;
      box-shadow: 0 2px 8px rgba(102, 62, 162, 0.2);
      display: block;
    }
    
    .company-name {
      font-size: 10pt;
      font-weight: 700;
      color: #663ea2;
      margin-bottom: 2mm;
      line-height: 1.3;
    }
    
    .company-link {
      font-size: 8pt;
      color: #8e54e9;
      text-decoration: none;
      font-weight: 600;
    }
    
    .stories-container {
      background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
      padding: 10mm 15mm;
      text-align: center;
      border-radius: 15px;
      box-shadow: 0 4px 15px rgba(102, 62, 162, 0.1);
    }
    
    .stories-title {
      font-size: 16pt;
      font-weight: 800;
      color: #663ea2;
      margin-bottom: 8mm;
    }
    
    .stories-btn {
      display: inline-block;
      background: linear-gradient(135deg, #663ea2 0%, #8e54e9 100%);
      color: white;
      padding: 6mm 18mm;
      border-radius: 50px;
      font-size: 13pt;
      font-weight: 800;
      text-decoration: none;
      box-shadow: 0 6px 20px rgba(102, 62, 162, 0.4);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    /* PÁGINA 3 */
    .packages-header {
      background: linear-gradient(135deg, #663ea2 0%, #764ba2 50%, #8e54e9 100%);
      padding: 10mm 15mm;
      text-align: center;
      box-shadow: 0 4px 15px rgba(102, 62, 162, 0.3);
    }
    
    .packages-section {
      background: linear-gradient(135deg, #f8f7ff 0%, #ffffff 100%);
      padding: 12mm 15mm;
    }
    
    .packages-title {
      font-size: 18pt;
      font-weight: 900;
      color: #663ea2;
      text-align: center;
      margin-bottom: 10mm;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .packages-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8mm;
      margin-bottom: 10mm;
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
      background: linear-gradient(135deg, #fff5f5 0%, #ffe5f0 100%);
      border: 3px solid #663ea2;
      box-shadow: 0 8px 25px rgba(102, 62, 162, 0.25);
    }
    
    .package-badge {
      position: absolute;
      top: -4mm;
      right: 8mm;
      background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
      color: #663ea2;
      padding: 2mm 8mm;
      border-radius: 20px;
      font-size: 8pt;
      font-weight: 900;
      box-shadow: 0 4px 12px rgba(255, 215, 0, 0.5);
      text-transform: uppercase;
    }
    
    .package-name {
      font-size: 14pt;
      font-weight: 900;
      color: #663ea2;
      margin-bottom: 4mm;
      line-height: 1.3;
    }
    
    .package-price {
      font-size: 18pt;
      font-weight: 900;
      background: linear-gradient(135deg, #059669 0%, #10b981 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 4mm;
    }
    
    .package-desc {
      font-size: 8.5pt;
      line-height: 1.6;
      color: #444;
      white-space: pre-wrap;
    }
    
    .services-divider {
      background: linear-gradient(135deg, #f5f3ff 0%, #ede9ve 100%);
      padding: 10mm 15mm;
    }
    
    .services-title {
      font-size: 16pt;
      font-weight: 900;
      color: #663ea2;
      text-align: center;
      margin-bottom: 8mm;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .services-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4mm;
    }
    
    .service-item {
      font-size: 8pt;
      color: #444;
      line-height: 1.5;
      padding: 3mm;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.08);
      display: flex;
      align-items: center;
    }
    
    .service-item:before {
      content: '✓';
      color: #10b981;
      font-weight: 900;
      font-size: 10pt;
      margin-right: 2mm;
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      width: 5mm;
      height: 5mm;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      flex-shrink: 0;
    }
    
    .contact-section {
      background: linear-gradient(135deg, #f8f7ff 0%, #faf9ff 100%);
      padding: 10mm 20mm;
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
      background: linear-gradient(135deg, #25d366 0%, #20c05b 100%);
      color: white;
      padding: 5mm 12mm;
      border-radius: 50px;
      font-size: 11pt;
      font-weight: 900;
      text-decoration: none;
      margin-top: 5mm;
      box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .final-quote {
      font-size: 8.5pt;
      color: #888;
      font-style: italic;
      margin-top: 6mm;
      line-height: 1.6;
      padding: 0 15mm;
    }
  </style>
</head>
<body>
  <!-- PÁGINA 1 -->
  <div class="page">
    <div class="header-top">
      <div class="header-quote">"${data.quote1}"</div>
    </div>
    
    ${data.photo ? `
    <div class="photo-container">
      <img src="${data.photo}" class="photo">
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
      <div class="impact-quote-text">"${data.portfolioQuote}"</div>
    </div>
    
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
    
    <div class="footer">@${data.contact.instagram}</div>
  </div>
  
  <!-- PÁGINA 2 -->
  <div class="page">
    <div class="portfolio-header">
      <div class="portfolio-quote">"${data.portfolioQuote}"</div>
    </div>
    
    <div class="portfolio-section">
      <div class="portfolio-title">Clique nas empresas abaixo</div>
      <div class="portfolio-subtitle">para ver os Reels no Instagram</div>
      
      <div class="companies-grid">
        ${data.companies.slice(0, 9).map(company => `
          <div class="company-card">
            ${company.logo ? `<img src="${company.logo}" class="company-logo">` : ''}
            <div class="company-name">${company.name}</div>
            ${company.link ? `<a href="${company.link}" class="company-link">Ver Reel</a>` : ''}
          </div>
        `).join('')}
      </div>
      
      <div class="stories-container">
        <div class="stories-title">Vídeos Storys no Instagram</div>
        <a href="${data.storiesLink}" class="stories-btn">ASSISTIR AGORA</a>
      </div>
    </div>
    
    <div class="footer">@${data.contact.instagram}</div>
  </div>
  
  <!-- PÁGINA 3 -->
  <div class="page">
    <div class="packages-header">
      <div class="portfolio-quote">"${data.packagesQuote}"</div>
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
    <div class="services-divider">
      <div class="services-title">Mais Serviços</div>
      <div class="services-grid">
        ${data.services.map(service => `
          <div class="service-item">${service}</div>
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
</body>
</html>
  `
}
