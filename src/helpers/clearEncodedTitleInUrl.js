function clearEncodedTitleInUrl() {
  window.history.pushState(null, null, window.location.pathname);
  console.log(window.location.pathname);
}

export default clearEncodedTitleInUrl;
