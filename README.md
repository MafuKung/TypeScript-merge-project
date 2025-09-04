# 📦 Merge Project (TypeScript + Jest)

This project implements a **merge function** in TypeScript:

```ts
merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
```

### Rules
- `collection_1` → already sorted ascending  
- `collection_2` → already sorted descending  
- `collection_3` → already sorted ascending  
- Output must be a single array sorted in ascending order.  
- ❌ **No built-in `.sort()` is allowed** → we use a **two-pointer merge algorithm**.  

---

## 🚀 Features
- TypeScript implementation of merge  
- Unit tests with Jest  
- No external sort function used  
- Example test cases included  

---

## 📂 Project Structure
```
merge-project/
├── src/
│   └── merge.ts          # Implementation
├── tests/
│   └── merge.test.ts     # Unit tests
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

---

## ⚙️ Setup

### 1. Clone the repo
```bash
git clone https://github.com/<your-username>/merge-project.git
cd merge-project
```

### 2. Install dependencies
```bash
npm install
```

### 3. Build the code
```bash
npm run build
```
Compiled JavaScript will be generated in the `dist/` folder.

### 4. Run tests
```bash
npm test
```

Expected output:
```
PASS  tests/merge.test.ts
  merge()
    ✓ merges three arrays with given conditions
    ✓ handles empty arrays
    ✓ handles all empty
    ✓ handles overlapping values
    ✓ handles single element arrays

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
```

---

## 🧪 Example Usage

### `src/merge.ts`
```ts
import { merge } from "./merge";

const c1 = [1, 3, 5];
const c2 = [9, 7, 4];   // descending
const c3 = [6, 10, 12];

console.log(merge(c1, c2, c3));
// Output: [1, 3, 4, 5, 6, 7, 9, 10, 12]
```

Run:
```bash
npm run build
node dist/merge.js
```

---

## 🔍 How the Merge Works
We use the **two-pointer merge technique** (same as the merge step in Merge Sort):
1. Reverse `collection_2` → ascending  
2. Merge `collection_1` and reversed `collection_2` → ascending  
3. Merge result with `collection_3` → ascending  

Complexity: **O(n + m + k)** where n, m, k are sizes of the three arrays.  

---

## 📖 Commands Reference
- `npm install` → install dependencies  
- `npm run build` → compile TypeScript → JavaScript  
- `npm test` → run all unit tests  
