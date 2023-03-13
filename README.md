# hello-prisma

## Prisma example projects.

- [Prisma](https://www.prisma.io/)
- [Github](https://github.com/prisma/prisma)

### Usage

docker

```zsh
% docker-compose up -d
```

migration

```zsh
% yarn migrate
```

generate

```zsh
% yarn generate
```

### ERD

- [Views](./ERD.md)

### Tests

```zsh
% yarn test
yarn run v1.22.19
$ ts-node -r tsconfig-paths/register src/index.ts
[
  {
    id: 11,
    email: 'tohpoj@mige.capital',
    name: 'wivmel.tv',
    role: 'USER'
  },
  {
    id: 12,
    email: 'mafconu@cemop.flowers',
    name: 'sobhorec.az',
    role: 'USER'
  }
]
✨  Done in 1.60s.
```
