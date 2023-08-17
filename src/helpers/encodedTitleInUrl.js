function encodedTitleInUrl(title) {
  const encodedTitle = encodeURIComponent(title);
  window.history.pushState(null, null, `${encodedTitle}`);
}

export default encodedTitleInUrl;
