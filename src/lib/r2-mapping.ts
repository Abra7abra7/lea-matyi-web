/**
 * R2 Image Mapping - maps local filenames to R2 CDN URLs
 */

const R2_BASE_URL = 'https://pub-aa7457c105694bcca680b272aeeb00ae.r2.dev';

// Map of filename to R2 URL (extracted from r2_upload_log.json)
export const r2ImageMap: Record<string, string> = {
  '84b777bbc958.png': `${R2_BASE_URL}/media/84b777bbc958.png`,
  '909014c594e0.jpg': `${R2_BASE_URL}/media/909014c594e0.jpg`,
  '467c0785e7ed.png': `${R2_BASE_URL}/media/467c0785e7ed.png`,
  '0df7dc3baa58.jpg': `${R2_BASE_URL}/media/0df7dc3baa58.jpg`,
  '83cebde0163d.jpg': `${R2_BASE_URL}/media/83cebde0163d.jpg`,
  '3c53bdd51f2c.png': `${R2_BASE_URL}/media/3c53bdd51f2c.png`,
  '790f2be651fe.jpg': `${R2_BASE_URL}/media/790f2be651fe.jpg`,
  '366766f8f84e.png': `${R2_BASE_URL}/media/366766f8f84e.png`,
  '472181a6e378.png': `${R2_BASE_URL}/media/472181a6e378.png`,
  '7bcdcd48ec20.png': `${R2_BASE_URL}/media/7bcdcd48ec20.png`,
  'f8e7c8346ff6.png': `${R2_BASE_URL}/media/f8e7c8346ff6.png`,
  '0da261ea19b3.png': `${R2_BASE_URL}/media/0da261ea19b3.png`,
  '59ed95b428cf.jpg': `${R2_BASE_URL}/media/59ed95b428cf.jpg`,
  '0f145bc3060d.jpg': `${R2_BASE_URL}/media/0f145bc3060d.jpg`,
  'b5597ceba14d.png': `${R2_BASE_URL}/media/b5597ceba14d.png`,
  'b03bc25bf41f.jpg': `${R2_BASE_URL}/media/b03bc25bf41f.jpg`,
  '9090533244ee.png': `${R2_BASE_URL}/media/9090533244ee.png`,
  '3560deb8e8fd.jpg': `${R2_BASE_URL}/media/3560deb8e8fd.jpg`,
  '0ddf78fec055.jpg': `${R2_BASE_URL}/media/0ddf78fec055.jpg`,
  '424dd3d85d92.png': `${R2_BASE_URL}/media/424dd3d85d92.png`,
  '00fe2b3d8f55.png': `${R2_BASE_URL}/media/00fe2b3d8f55.png`,
  'ffed47144538.jpg': `${R2_BASE_URL}/media/ffed47144538.jpg`,
  '2b050419150b.jpg': `${R2_BASE_URL}/media/2b050419150b.jpg`,
  '116e8b1a5565.jpg': `${R2_BASE_URL}/media/116e8b1a5565.jpg`,
  'db14ca6b5479.jpg': `${R2_BASE_URL}/media/db14ca6b5479.jpg`,
  '5efc916755ab.jpg': `${R2_BASE_URL}/media/5efc916755ab.jpg`,
  'd5efa5f55dbc.jpg': `${R2_BASE_URL}/media/d5efa5f55dbc.jpg`,
  'f2f22303e5e1.png': `${R2_BASE_URL}/media/f2f22303e5e1.png`,
  '63467fb4afaa.png': `${R2_BASE_URL}/media/63467fb4afaa.png`,
  'e1c63cdfc9a7.png': `${R2_BASE_URL}/media/e1c63cdfc9a7.png`,
  'a274c31be1a8.jpg': `${R2_BASE_URL}/media/a274c31be1a8.jpg`,
  '24c1f54a1e5b.jpg': `${R2_BASE_URL}/media/24c1f54a1e5b.jpg`,
  '542d6cc57a36.jpg': `${R2_BASE_URL}/media/542d6cc57a36.jpg`,
  '065f8a77c773.jpg': `${R2_BASE_URL}/media/065f8a77c773.jpg`,
  '1b930809f32e.jpg': `${R2_BASE_URL}/media/1b930809f32e.jpg`,
  '619fef22cf6a.jpg': `${R2_BASE_URL}/media/619fef22cf6a.jpg`,
  '71d5a31360b8.png': `${R2_BASE_URL}/media/71d5a31360b8.png`,
  '9dad40260948.jpg': `${R2_BASE_URL}/media/9dad40260948.jpg`,
  'f1297af3b456.png': `${R2_BASE_URL}/media/f1297af3b456.png`,
  '11a6e6cc2193.png': `${R2_BASE_URL}/media/11a6e6cc2193.png`,
  '438233ea9997.jpg': `${R2_BASE_URL}/media/438233ea9997.jpg`,
  'b9e6142eb2f9.jpg': `${R2_BASE_URL}/media/b9e6142eb2f9.jpg`,
  'e963f6eded4c.png': `${R2_BASE_URL}/media/e963f6eded4c.png`,
  '633cfca6fdd4.png': `${R2_BASE_URL}/media/633cfca6fdd4.png`,
  '06e6d0a1d6fb.png': `${R2_BASE_URL}/media/06e6d0a1d6fb.png`,
  'b3ad9c9045d5.jpg': `${R2_BASE_URL}/media/b3ad9c9045d5.jpg`,
  '5fccc9992c6e.jpg': `${R2_BASE_URL}/media/5fccc9992c6e.jpg`,
};

/**
 * Get R2 URL for a local image filename
 */
export function getR2ImageUrl(filename: string): string | null {
  // Extract just the filename from path
  const name = filename.split('/').pop() || '';
  return r2ImageMap[name] || null;
}

/**
 * Extract filename hash from any image URL
 */
export function extractImageHash(url: string): string | null {
  const match = url.match(/([a-f0-9]{12,})\.(jpg|jpeg|png|gif|webp)/i);
  return match ? match[0] : null;
}

