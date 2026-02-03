# 📱 Media Kit Generator PRO - VERSÃO CORRIGIDA

Aplicação web completa para geração de Media Kits profissionais em PDF.

## 🚀 Instalação - PASSO A PASSO

### 1. Instalar Dependências

```bash
npm install --legacy-peer-deps
```

**OU** se der erro:

```bash
npm install --force
```

### 2. Testar Localmente

```bash
npm run dev
```

Acesse: `http://localhost:3000`

**IMPORTANTE:** Em desenvolvimento local, você precisa ter o Chrome instalado!

### 3. Deploy na Vercel

#### Opção A - Via CLI:
```bash
npm i -g vercel
vercel
```

#### Opção B - Via GitHub:
1. Criar repositório no GitHub
2. Push do código
3. Importar na Vercel (vercel.com)
4. Deploy automático!

## ✅ Correções Aplicadas

1. ✅ Substituído `chrome-aws-lambda` por `@sparticuz/chromium` (atualizado)
2. ✅ Adicionado suporte para desenvolvimento local
3. ✅ Detecção automática de ambiente (dev/prod)
4. ✅ Compatibilidade Windows/Mac/Linux

## 🔧 Solução de Problemas

### Erro ao instalar:
```bash
# Limpar cache
npm cache clean --force

# Deletar node_modules
rm -rf node_modules package-lock.json

# Reinstalar
npm install --legacy-peer-deps
```

### PDF não gera localmente:
- Certifique-se que o Chrome está instalado
- Windows: `C:\Program Files\Google\Chrome\Application\chrome.exe`
- Mac: `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`
- Linux: `/usr/bin/google-chrome`

### Deploy na Vercel funciona mas local não:
- Normal! Na Vercel usa Lambda otimizado
- Localmente precisa do Chrome instalado

## 📦 Stack

- Next.js 14
- React 18
- TypeScript
- TailwindCSS
- Puppeteer + Chromium
- Vercel Edge Functions

## 🎯 Como Usar

1. Preencha os dados nas 6 tabs
2. Upload da foto (opcional)
3. Clique em "GERAR PDF"
4. Download automático!

## 📄 PDF Gerado

- 3 páginas A4
- Layout profissional
- Cores roxas (#663ea2)
- Links clicáveis
- Idêntico ao Canva

---

**Desenvolvido por Claude + Kelisson** 🚀
