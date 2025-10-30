import { NextRequest, NextResponse } from 'next/server';
import { loadAllTemplates } from '@/lib/memory';
import { TemplateType } from '@/lib/constants';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get('type') as TemplateType | null;
    const query = searchParams.get('q');

    let templates = await loadAllTemplates();

    // Filter by type if provided
    if (type) {
      templates = templates.filter((t) => t.type === type);
    }

    // Filter by search query if provided
    if (query) {
      const lowerQuery = query.toLowerCase();
      templates = templates.filter(
        (t) =>
          t.title.toLowerCase().includes(lowerQuery) ||
          t.description.toLowerCase().includes(lowerQuery)
      );
    }

    return NextResponse.json({
      status: 'ok',
      data: templates,
      meta: {
        count: templates.length,
        version: '1.0.0',
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Failed to fetch templates:', error);
    return NextResponse.json(
      {
        status: 'error',
        error: {
          code: 'TEMPLATES_FETCH_FAILED',
          message: 'Failed to load templates.',
        },
      },
      { status: 500 }
    );
  }
}

