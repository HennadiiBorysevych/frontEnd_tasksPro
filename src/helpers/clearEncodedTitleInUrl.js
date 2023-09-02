function clearEncodedTitleInUrl() {
  window.history.pushState(null, null, '/frontEnd_tasksPro/home');
}

export default clearEncodedTitleInUrl;
