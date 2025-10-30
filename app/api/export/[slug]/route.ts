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

    // Return markdown file as downloadable attachment
    return new NextResponse(template.content, {
      headers: {
        'Content-Type': 'text/markdown',
        'Content-Disposition': `attachment; filename="${params.slug}.md"`,
      },
    });
  } catch (error) {
    console.error(`Failed to export template ${params.slug}:`, error);
    return NextResponse.json(
      {
        status: 'error',
        error: {
          code: 'EXPORT_FAILED',
          message: 'Failed to export template.',
        },
      },
      { status: 500 }
    );
  }
}

