import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://nsc-ncd.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://nsc-ncd.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://nsc-ncd.com/events',
      lastModified: new Date(),
    },
    {
      url: 'https://nsc-ncd.com/committee',
      lastModified: new Date(),
    },
    {
      url: 'https://nsc-ncd.com/departments',
      lastModified: new Date(),
    },
    {
      url: 'https://nsc-ncd.com/achievements',
      lastModified: new Date(),
    },
  ];
}