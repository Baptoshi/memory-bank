import { NextResponse } from 'next/server';
import { getAllMemoryBanks } from '@/lib/domains';
import { getDomainTemplateCount } from '@/lib/domains-memory';

export async function GET() {
  try {
    const banks = getAllMemoryBanks();

    const banksWithCounts = await Promise.all(
      banks.map(async (bank) => ({
        slug: bank.slug,
        name: bank.name,
        description: bank.description,
        accentColor: bank.accentColor,
        focus: bank.focus,
        templateCount: await getDomainTemplateCount(bank.slug),
      }))
    );

    return NextResponse.json({
      status: 'ok',
      data: banksWithCounts,
      meta: {
        count: banksWithCounts.length,
        version: '1.0.0',
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Failed to fetch memory banks:', error);
    return NextResponse.json(
      {
        status: 'error',
        error: {
          code: 'BANKS_FETCH_FAILED',
          message: 'Failed to load memory banks.',
        },
      },
      { status: 500 }
    );
  }
}

