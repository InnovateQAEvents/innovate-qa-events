export default function imageLoader({ src, width, quality }) {
  // For static export - no basePath needed for root domain deployment
  const basePath = '';

  // If the src already starts with http or https, return as is (external image)
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  // Return path for local images
  const path = src.startsWith('/') ? src : `/${src}`;
  return `${basePath}${path}`;
}
