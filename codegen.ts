import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: [{ 'http://localhost:8080/v1/graphql': {
		headers: {
			'x-hasura-admin-secret': 'admin-secret',
		},
	} }],
	documents: 'src/app/graphql/*.ts',
	generates: {
		'src/app/graphql/gql/': {
			preset: 'client',
			plugins: [],
		},
		'./graphql.schema.json': {
			plugins: ['introspection'],
		},
	},
};

export default config;
