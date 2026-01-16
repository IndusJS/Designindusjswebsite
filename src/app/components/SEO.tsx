import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title = 'IndusJS - Custom Mobile & Web Application Development Services',
  description = 'IndusJS delivers expert iOS app development, Android app development, and web application development services. Partner with our experienced team to build scalable, secure digital solutions for your business.',
  keywords = 'mobile app development, iOS development, Android development, web application development, custom software development, app development company, digital solutions, React Native, technology services',
  image = 'https://indusjs.com/og-image.jpg',
  url = 'https://indusjs.com',
  type = 'website'
}: SEOProps) {
  const fullTitle = title.includes('IndusJS') ? title : `${title} | IndusJS`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="IndusJS" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="IndusJS" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}