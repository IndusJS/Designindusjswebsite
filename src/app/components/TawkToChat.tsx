import { useEffect } from 'react';

export function TawkToChat() {
  useEffect(() => {
    // Tawk.to Script
    var Tawk_API = (window as any).Tawk_API || {};
    var Tawk_LoadStart = new Date();
    
    (function(){
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/695ce50ea9de2b197fab23f5/1jetupq7j';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin','*');
      if (s0 && s0.parentNode) {
        s0.parentNode.insertBefore(s1, s0);
      }
    })();
  }, []);

  return null;
}