module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:sonarjs/recommended',
        'airbnb'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    settings: {
        'import/resolver': {
            typescript: {}
        }
    },
    rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never'
            }
        ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'react/prop-types': [0],
        quotes: ['warn', 'single', {
            avoidEscape: true, allowTemplateLiterals: false
        }],
        'no-trailing-spaces': ['warn', {
            skipBlankLines: true
        }],
        'spaced-comment': ['warn', 'always', {
            line: {
                markers: [],
                exceptions: ['-', '+', '/']
            },
            block: {
                markers: [],
                exceptions: ['*'],
                balanced: false
            }
        }],
        'comma-dangle': ['off', {
            arrays: 'only-multiline',
            objects: 'always-multiline',
            imports: 'only-multiline',
            exports: 'only-multiline',
            functions: 'never'
        }],
        'import/order': ['warn', {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            'newlines-between': 'always'
        }],
        semi: ['warn', 'never'],
        indent: ['warn', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            // MemberExpression: null,
            FunctionDeclaration: {
                parameters: 1,
                body: 1,
            },
            FunctionExpression: {
                parameters: 1,
                body: 1,
            },
            CallExpression: {
                arguments: 1,
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
            // eslint-disable-next-line max-len
            ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
            ignoreComments: false
        }],
        'react/jsx-indent': ['warn', 4],
        'react/jsx-indent-props': ['warn', 4],
        'no-unused-vars': ['warn', {
            vars: 'local',
            args: 'after-used'
        }],
        'import/prefer-default-export': 'off',
        'operator-linebreak': ['warn', 'after', {
            overrides: {
                '&&': 'after'
            }
        }],
        'object-curly-newline': ['off', {
            ObjectExpression: { minProperties: 0, multiline: true },
            ObjectPattern: { minProperties: 0, multiline: true }
        }],
        'no-param-reassign': ['off'],
        'max-len': ['warn', { code: 120 }],
    },
}
