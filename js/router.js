function getRouteComponent() {
  const route = location.hash.slice(1) || "/";
  switch (route) {
    case "/menu": return Menu;
    case "/nosotros": return About;
    case "/blog": return Blog;
    case "/contacto": return Contact;
    default: return Home;
  }
}
