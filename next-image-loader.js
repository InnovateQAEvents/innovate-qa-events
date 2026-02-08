export default function imageLoader({ src, width, quality }) {
  // For static export with basePath
  const basePath = '/innovate-qa-events';
  
  // If the src already starts with http or https, return as is (external image)
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  
  // Add basePath for local images
  const path = src.startsWith('/') ? src : `/${src}`;
  return `${basePath}${path}`;
}
