module.exports = {
    extends: ['abdt', 'abdt/react', 'abdt/typescript'],
    rules: {
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react-hooks/exhaustive-deps': 0,
        'react/no-unescaped-entities': 0,
    },
    overrides: [
        {
            files: ['webpack.config.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/camelcase': 'off',
                'no-unused-expressions': 0,
            },
        },
        {
            files: ['inquirer/index.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 0,
            },
        },
    ],
};
