export function onRequest(context) {
  const url = new URL(context.request.url);
  let shouldRedirect = false;

  if (url.hostname === "www.paradisopizza.co.nz") {
    url.hostname = "paradisopizza.co.nz";
    shouldRedirect = true;
  }

  if (url.searchParams.has("fbclid")) {
    url.searchParams.delete("fbclid");
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
