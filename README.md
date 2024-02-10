# archivebox-api

[ArchiveBox](https://github.com/ArchiveBox/ArchiveBox) REST API is [alpha](https://github.com/ArchiveBox/ArchiveBox/issues/496).

This read sqlite db with [bun](https://bun.sh) [sqlite](https://bun.sh/docs/api/sqlite) module and serve with [hono](https://hono.dev/).

## API

### GET `/snapshots`

params

```
page: string
```

returns

```
id: string
title: string
url: string
```

## dev

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.26. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
