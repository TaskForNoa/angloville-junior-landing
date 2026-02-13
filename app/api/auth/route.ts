import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const CORRECT_PASSWORD = 'angloville2026';
const COOKIE_NAME = 'angloville_auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;

    if (password === CORRECT_PASSWORD) {
      const response = NextResponse.json({ success: true });
      
      // Ustaw cookie na 30 dni
      response.cookies.set({
        name: COOKIE_NAME,
        value: CORRECT_PASSWORD,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 30, // 30 dni
        path: '/',
      });

      return response;
    } else {
      return NextResponse.json(
        { success: false, message: 'Nieprawidłowe hasło' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Błąd serwera' },
      { status: 500 }
    );
  }
}
