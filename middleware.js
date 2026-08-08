import { NextResponse } from 'next/server';

export function middleware(req) {
  const basicAuth = req.headers.get('authorization');

  if (!basicAuth) {
    return new NextResponse('Auth required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"'
      }
    });
  }

  const authValue = basicAuth.split(' ')[1];
  const [user, pwd] = Buffer.from(authValue, 'base64').toString().split(':');

  if (user === 'missiona' && pwd === 'kadai') {
    return NextResponse.next();
  }

  return new NextResponse('Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"'
    }
  });
}
