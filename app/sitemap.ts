import { MetadataRoute } from 'next';

  export default function sitemap(): MetadataRoute.Sitemap {
    return [
      { url: 'https://meana.xyz', lastModified: new Date() },
      { url: 'https://meana.xyz/about', lastModified: new Date() },
      { url: 'https://meana.xyz/projects', lastModified: new Date() },
      { url: 'https://meana.xyz/status', lastModified: new Date() },
      { url: 'https://meana.xyz/contact', lastModified: new Date() },
      { url: 'https://meana.xyz/terms', lastModified: new Date() },
      { url: 'https://meana.xyz/privacy', lastModified: new Date() },
    ];
  }
