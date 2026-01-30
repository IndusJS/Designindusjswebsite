import { useEffect } from 'react';
import faviconImage from '../../assets/IndusJSFavicon.jpg';

export function Favicon() {
  useEffect(() => {
    // Update favicon dynamically
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = faviconImage;
    
    if (!document.querySelector("link[rel~='icon']")) {
      document.head.appendChild(link);
    }

    // Also add shortcut icon
    const shortcutLink = document.querySelector("link[rel~='shortcut icon']") as HTMLLinkElement || document.createElement('link');
    shortcutLink.type = 'image/png';
    shortcutLink.rel = 'shortcut icon';
    shortcutLink.href = faviconImage;
    
    if (!document.querySelector("link[rel~='shortcut icon']")) {
      document.head.appendChild(shortcutLink);
    }
  }, []);

  return null;
}
