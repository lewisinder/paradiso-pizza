export function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === "www.paradisopizza.co.nz") {
    url.hostname = "paradisopizza.co.nz";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
