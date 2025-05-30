// orval.config.ts
export default {
  api: {
    input: './schema.yaml', // ← Corrigé ici
    output: {
      target: './src/api/generated.ts',
      schemas: './src/types/openapi.types.ts',
      client: 'axios',
      mode: 'single',
      override: {
        mutator: {
          path: './src/api/axios.ts',
          name: 'customAxios',
        },
      },
    },
  },
} as const;
