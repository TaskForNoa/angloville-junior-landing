import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const CORRECT_PASSWORD = 'angloville2026';
const COOKIE_NAME = 'angloville_auth';

export function middleware(request: NextRequest) {
  // Sprawdź czy użytkownik ma ciasteczko z hasłem
  const authCookie = request.cookies.get(COOKIE_NAME);
  
  // Jeśli jest na stronie logowania, pozwól
  if (request.nextUrl.pathname === '/login') {
    // Jeśli już jest zalogowany, przekieruj na główną
    if (authCookie?.value === CORRECT_PASSWORD) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }
  
  // Sprawdź czy hasło jest poprawne
  if (authCookie?.value !== CORRECT_PASSWORD) {
    // Przekieruj na stronę logowania
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
