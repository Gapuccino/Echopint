export async function onRequest(context) {
  const url = new URL(context.request.url);
  const host = context.request.headers.get("host") || "";
  const mainDomain = "echopoint-intsolutions.com";

  // Si el host es el subdominio de la tarjeta
  if (host.startsWith("card.")) {
    // 1. Permitir archivos estáticos y de sistema (imprescindible para el diseño)
    if (
      url.pathname.startsWith("/_next/") || 
      url.pathname.startsWith("/static/") || 
      url.pathname.endsWith(".webp") || 
      url.pathname.endsWith(".png") || 
      url.pathname.endsWith(".css") ||
      url.pathname.endsWith(".js")
    ) {
      return context.next();
    }

    // 2. Verificamos si tiene la "llave" de acceso del QR
    const hasQrKey = url.searchParams.get("source") === "qr";

    // 3. Si es la raíz (/) y TIENE la llave, mostramos la VCard
    if ((url.pathname === "/" || url.pathname === "") && hasQrKey) {
      const newUrl = new URL("/es/card/", url.origin);
      return context.env.ASSETS.fetch(newUrl);
    } 
    
    // 4. Si NO tiene la llave o intenta entrar a otra ruta (ej: /servicios),
    // lo mandamos al dominio principal.
    return Response.redirect(`https://${mainDomain}${url.pathname}${url.search}`, 302);
  }

  // Para el dominio principal y otras rutas, continuar normalmente
  return context.next();
}
