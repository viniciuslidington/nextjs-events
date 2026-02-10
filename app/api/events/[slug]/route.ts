import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Event from '@/database/event.model';

/**
 * GET /api/events/[slug]
 * Fetches a single event by its slug
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    // Extract slug from params
    const { slug } = await params;

    // Validate slug parameter
    if (!slug || typeof slug !== 'string') {
      return NextResponse.json(
        { message: 'Slug parameter is required and must be a string' },
        { status: 400 }
      );
    }

    // Validate slug format (alphanumeric and hyphens only)
    const slugRegex = /^[a-z0-9-]+$/;
    if (!slugRegex.test(slug)) {
      return NextResponse.json(
        { message: 'Invalid slug format. Use lowercase letters, numbers, and hyphens only' },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    const sanitizedSlug = slug.trim().toLowerCase();

    // Query event by slug
    const event = await Event.findOne({ slug: sanitizedSlug }).lean();

    // Handle event not found
    if (!event) {
      return NextResponse.json(
        { message: `Event with slug "${slug}" not found` },
        { status: 404 }
      );
    }

    // Return successful response
    return NextResponse.json(
      {
        message: 'Event fetched successfully',
        event,
      },
      { status: 200 }
    );
  } catch (error) {
    // Log error for debugging
    console.error('Error fetching event by slug:', error);

    // Handle mongoose-specific errors
    if (error instanceof Error) {
      // Handle specific error types
      if (error.name === 'CastError') {
        return NextResponse.json(
          { message: 'Invalid slug format' },
          { status: 400 }
        );
      }

      // Generic error response
      return NextResponse.json(
        {
          message: 'Failed to fetch event',
          error: error.message,
        },
        { status: 500 }
      );
    }

    // Unknown error type
    return NextResponse.json(
      { message: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
