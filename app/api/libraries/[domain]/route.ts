import { NextRequest, NextResponse } from 'next/server';
import { loadAllDomainTemplates } from '@/lib/domains-memory';
import { getMemoryBank, MemoryBankSlug } from '@/lib/domains';

export async function GET(
  request: NextRequest,
  { params }: { params: { domain: string } }
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

    const templates = await loadAllDomainTemplates(domain);

    return NextResponse.json({
      status: 'ok',
      data: templates,
      meta: {
        domain: bank.name,
        count: templates.length,
        version: '1.0.0',
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error(`Failed to fetch templates for domain ${params.domain}:`, error);
    return NextResponse.json(
      {
        status: 'error',
        error: {
          code: 'TEMPLATES_FETCH_FAILED',
          message: 'Failed to load domain templates.',
        },
      },
      { status: 500 }
    );
  }
}

