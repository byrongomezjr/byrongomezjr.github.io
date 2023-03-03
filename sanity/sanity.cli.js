import {defineConfig} from 'sanity'
import { schemaTypes } from './schemas'

export default defineConfig({
    projectId: 'sogm1voo',
    dataset: 'production',
    schema: {
      types: schemaTypes,
    },
})
