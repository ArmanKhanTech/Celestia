const getDecodedPfpUrl = (pfp_url, token) => {
  if (!pfp_url || !token) return "";

  // Re-encode the path portion between `/o/` and `?`
  const baseUrl = "https://firebasestorage.googleapis.com";
  const match = pfp_url.match(/\/o\/(.+)\?alt=media/);
  if (!match) return "";

  const encodedPath = encodeURIComponent(match[1]);
  return `${baseUrl}/v0/b/celestia-c3bcc.appspot.com/o/${encodedPath}?alt=media&token=${token}`;
};

export { getDecodedPfpUrl };
