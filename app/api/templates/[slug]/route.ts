import { NextRequest, NextResponse } from 'next/server';
import { loadTemplate } from '@/lib/memory';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const template = await loadTemplate(params.slug);

    if (!template) {
      return NextResponse.json(
        {
          status: 'error',
          error: {
            code: 'TEMPLATE_NOT_FOUND',
            message: `No template found for slug '${params.slug}'.`,
          },
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      status: 'ok',
      data: template,
      meta: {
        version: '1.0.0',
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error(`Failed to fetch template ${params.slug}:`, error);
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

