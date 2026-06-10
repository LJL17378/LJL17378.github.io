---
title: Prettier + ESLint 自动格式化配置手册（AI写的，自用）
---

# Prettier + ESLint 自动格式化配置手册

## 1. 安装依赖

```bash
# 使用 npm
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier

# 使用 pnpm
pnpm add -D prettier eslint-config-prettier eslint-plugin-prettier

# 使用 yarn
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

## 2. Prettier 配置

### 2.1 创建 `.prettierrc.js`

```javascript
export default {
  // 一行最多多少个字符
  printWidth: 150,
  // 指定每个缩进级别的空格数
  tabWidth: 2,
  // 使用制表符而不是空格缩进行
  useTabs: true,
  // 在语句末尾打印分号
  semi: true,
  // 使用单引号而不是双引号
  singleQuote: true,
  // 更改引用对象属性的时间 可选值"<as-needed|consistent|preserve>"
  quoteProps: 'as-needed',
  // 在JSX中使用单引号而不是双引号
  jsxSingleQuote: false,
  // 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值"<none|es5|all>"，默认none
  trailingComma: 'es5',
  // 在对象文字中的括号之间打印空格
  bracketSpacing: true,
  // 在jsx中把'>' 是否单独放一行
  bracketSameLine: false,
  // 在单独的箭头函数参数周围包括括号 always：(x) => x \ avoid：x => x
  arrowParens: 'always',
  // 这两个选项可用于格式化以给定字符偏移量（分别包括和不包括）开始和结束的代码
  rangeStart: 0,
  rangeEnd: Infinity,
  // 指定要使用的解析器，不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准 always\never\preserve
  proseWrap: 'preserve',
  // 指定HTML文件的全局空格敏感度 css\strict\ignore
  htmlWhitespaceSensitivity: 'css',
  // Vue文件脚本和样式标签缩进
  vueIndentScriptAndStyle: false,
  // 换行符使用 lf 结尾是 可选值"<auto|lf|crlf|cr>"
  endOfLine: 'lf',
};
```

**注意**：如果 `package.json` 中有 `"type": "module"`，必须使用 `export default` 而不是 `module.exports`。

### 2.2 创建 `.prettierignore`

```gitignore
# Dependencies
node_modules/
pnpm-lock.yaml
yarn.lock
package-lock.json

# Build outputs
dist/
build/
out/

# IDE
.vscode/
.idea/

# Config files
tsconfig*.json
*.config.js

# Other
README.md
*.md
*.log
```

## 3. ESLint 集成配置

### 3.1 修改 `eslint.config.js`

```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      prettierConfig, // 必须放在最后，覆盖其他配置的格式规则
    ],
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error', // 将 Prettier 规则作为 ESLint 错误
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
```

## 4. Package.json 脚本配置

### 4.1 添加脚本命令

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "preview": "vite preview"
  }
}
```

## 5. VS Code 配置

### 5.1 创建 `.vscode/settings.json`

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "prettier.enable": true,
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

### 5.2 创建 `.vscode/extensions.json`

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint"
  ]
}
```

## 6. 工作流程

### 6.1 开发时
- 在 VS Code 中编辑代码
- 保存时自动格式化和修复 ESLint 问题
- 无需手动运行命令

### 6.2 提交前检查
```bash
# 检查代码质量和格式
pnpm lint

# 自动修复可修复的问题
pnpm lint:fix

# 检查格式是否符合要求
pnpm format:check

# 格式化所有文件
pnpm format
```

### 6.3 CI/CD 集成
在 CI 流水线中添加：
```yaml
- run: pnpm lint
- run: pnpm format:check
```

## 7. 常见问题解决

### 7.1 Prettier 不生效
- 检查 `.prettierrc.js` 语法是否正确
- 确认 VS Code 使用了正确的 formatter
- 检查文件是否在 `.prettierignore` 中

### 7.2 ESLint 和 Prettier 冲突
- 确保 `eslint-config-prettier` 在 extends 数组的最后
- 检查是否有其他 ESLint 规则覆盖了 Prettier 规则

### 7.3 保存时不自动格式化
- 确认 VS Code 设置中的 `editor.formatOnSave` 为 true
- 检查默认 formatter 设置为 Prettier
- 确认已安装推荐的扩展

## 8. 配置验证

完成配置后，运行以下命令验证：

```bash
# 验证格式
pnpm format:check

# 验证代码质量
pnpm lint

# 如果发现问题，运行修复
pnpm lint:fix
pnpm format
```

## 9. 配置说明

### 9.1 Prettier 配置项说明
- `printWidth: 150` - 每行最多150个字符
- `useTabs: true` - 使用制表符缩进
- `singleQuote: true` - 使用单引号
- `semi: true` - 语句末尾添加分号
- `trailingComma: 'es5'` - 多行时添加尾随逗号

### 9.2 集成优势
- **开发体验**：保存时自动格式化，无需手动干预
- **代码质量**：ESLint 检查代码质量问题
- **风格统一**：Prettier 确保代码风格一致
- **团队协作**：统一配置，避免风格争议

这个配置手册包含了完整的 Prettier + ESLint 自动格式化解决方案，可以确保代码风格一致性和质量。