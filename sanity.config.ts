import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'h4ih8cdc',
  dataset: 'production',
  title: 'Testing CMS',
  apiVersion: '2023-09-20',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
  useCdn: false,
});

export default config;
