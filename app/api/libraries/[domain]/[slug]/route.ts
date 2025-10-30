import { NextRequest, NextResponse } from 'next/server';
import { loadDomainTemplate } from '@/lib/domains-memory';
import { getMemoryBank, MemoryBankSlug } from '@/lib/domains';

export async function GET(
  request: NextRequest,
  { params }: { params: { domain: string; slug: string } }
) {
  try {
    const domain = params.domain as MemoryBankSlug;
    const bank = getMemoryBank(domain);

    if (!bank) {
      return NextResponse.json(
        {
          status: 'error',
          error: {
            code: 'DOMAIN_NOT_FOUND',
            message: `Memory Bank '${domain}' not found.`,
          },
        },
        { status: 404 }
      );
    }

    const template = await loadDomainTemplate(domain, params.slug);

    if (!template) {
      return NextResponse.json(
        {
          status: 'error',
          error: {
            code: 'TEMPLATE_NOT_FOUND',
            message: `No template found for slug '${params.slug}' in domain '${domain}'.`,
          },
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      status: 'ok',
      data: template,
      meta: {
        domain: bank.name,
        version: '1.0.0',
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error(`Failed to fetch template ${params.domain}/${params.slug}:`, error);
    return NextResponse.json(
      {
        status: 'error',
        error: {
          code: 'TEMPLATE_FETCH_FAILED',
          message: 'Failed to load template.',
        },
      },
      { status: 500 }
    );
  }
}

