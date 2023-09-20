export function encodeTitleBoardInUrl(title) {
  const encodedTitle = encodeURIComponent(title);
  window.history.pushState(null, null, `${encodedTitle}`);
}

export function clearTitleBoardInUrl() {
  window.history.pushState(null, null, '/frontEnd_tasksPro/home');
}
