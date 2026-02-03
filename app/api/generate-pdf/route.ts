import { NextRequest, NextResponse } from 'next/server'
import puppeteer from 'puppeteer-core'
import chromium from '@sparticuz/chromium'
import { generateHTMLTemplate } from './template-v2'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const isDev = process.env.NODE_ENV === 'development'
    
    const browser = await puppeteer.launch({
      args: isDev ? puppeteer.defaultArgs() : chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: isDev 
        ? process.platform === 'win32'
          ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
          : process.platform === 'darwin'
          ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
          : '/usr/bin/google-chrome'
        : await chromium.executablePath(),
      headless: chromium.headless,
    })

    const page = await browser.newPage()
    const html = generateHTMLTemplate(data)
    
    await page.setContent(html, {
      waitUntil: 'networkidle0',
    })

    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    })

    await browser.close()

    return new NextResponse(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="Media-Kit-${data.name.replace(/\s+/g, '-')}.pdf"`,
      },
    })
  } catch (error) {
    console.error('Error generating PDF:', error)
    return NextResponse.json(
      { error: 'Failed to generate PDF', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}

export const runtime = 'nodejs'
export const maxDuration = 60
