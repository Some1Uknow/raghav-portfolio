import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://raghav-in.live`,
      priority: 1,
    },
    {
      url: `https://raghav-in.live/about`,
      priority: 0.9,
    },
    {
      url: `https://raghav-in.live/work`,
      priority: 0.8,
    },
    {
      url: `https://raghav-in.live/contact`,

      priority: 0.7,
    },
    {
      url: `https://raghav-in.live/stats`,

      priority: 0.7,
    },
  ]
}