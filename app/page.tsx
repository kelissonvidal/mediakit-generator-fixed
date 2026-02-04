'use client'

import { useState, useEffect } from 'react'
import Editor from '@/components/Editor'
import { MediaKitData } from '@/types'

export default function Home() {
  const [data, setData] = useState<MediaKitData>({
    quote1: 'A pergunta não é se sua empresa deve investir em marketing digital, e sim quanto ela está perdendo por não investir.',
    name: 'Juliana Oliveira',
    title: 'Influencer Marketer | Especialista em Marketing Digital',
    about: 'Olá! Sou Juliana Oliveira, especialista em marketing digital e influencer marketer com mais de 10 anos de experiência no mercado digital e mais de 20 anos de atuação comercial.\n\nMinha missão é transformar marcas, conectando-as ao seu público de forma autêntica, estratégica e altamente rentável.',
    mission: 'Transformar negócios através do marketing digital, gerando resultados mensuráveis e duradouros.',
    vision: 'Ser referência nacional em marketing digital e influência, inspirando e transformando marcas.',
    values: 'Ética, transparência, inovação, comprometimento e resultados.',
    photo: null,
    stats: {
      instagram: '160k+',
      tiktok: '50k+',
      reach: '500k+',
      posts: '24k+',
    },
    portfolioQuote: 'Seus clientes já estão procurando por seus produtos no digital. A única dúvida é: eles estão encontrando a sua marca ou a da concorrência?',
    companies: [
      { name: 'Festival Mineiridades', link: '' },
      { name: 'Lumak Balanças', link: '' },
      { name: 'Zé Delivery', link: '' },
    ],
    storiesLink: 'https://instagram.com/julianaoliveirasol',
    packagesQuote: 'Marketing sem estratégia é desperdício. Meu trabalho é transformar seu investimento em resultado real.',
    packages: [
      {
        name: 'Pacote Impacto Digital',
        price: 'R$ 550,00/semana',
        description: '1 Reels Criativo (publicado simultaneamente nos dois perfis)\n6 Stories estratégicos\nMenção direta à marca com CTA\nDireito de uso do conteúdo ilimitado',
        featured: false,
      },
      {
        name: 'Pacote Exclusivo Total',
        price: 'R$ 1.550,00/mês',
        description: 'Marketing Exclusivo (única marca do segmento)\nStories Ilimitados\n1 Reels Criativo Semanal\nDestaque para Produtos/Serviços\nDesconto: 10% OFF contratos trimestrais',
        featured: true,
      },
    ],
    services: [
      'Tráfego pago em redes sociais',
      'Gerenciamento de redes sociais',
      'Consultoria de marketing para empresas',
      'Criação de sites e páginas de vendas',
      'Desenvolvimento de aplicativos sob demanda',
    ],
    finalQuote: 'O boca a boca ainda funciona, mas hoje ele acontece nos stories, nos comentários e nos compartilhamentos.',
    contact: {
      email: 'juliana.exclusiva@gmail.com',
      phone: '(37) 98406-5476',
      instagram: 'julianaoliveirasol',
      whatsapp: 'https://wa.me/5537984065476',
    },
  })

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary to-primary-light">
      <Editor data={data} setData={setData} />
    </main>
  )
}
