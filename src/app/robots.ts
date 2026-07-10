import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://vshealthcareclinic.com/sitemap.xml",
    host: "https://vshealthcareclinic.com",
  };
}