import { project } from '@/types/Project';
import { createClient, groq } from 'next-sanity';

export async function getProjects(): Promise<project[]> {
  const client = createClient({
    projectId: 'lbs5w627',
    dataset: 'production',
    apiVersion: '2023-09-20',
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == "project"]{
_id,
_createdAt,
name,
"slug": slug.current,
"image": image.asset->url,
url,
content
  }`
  );
}
