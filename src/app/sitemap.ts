import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://raghav-in.live`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `https://raghav-in.live/about`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `https://raghav-in.live/work`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `https://raghav-in.live/contact`,
      lastModified: new Date(),
      priority: 0.7,
    },
  ]
}