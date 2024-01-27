# NodeJS - Testes unitarios e de integração

### Utilizaçao de ESLINT

```
npm install --save-dev eslint
```

Devemos utilizar o --save-dev pois o linter deve ser utilizado para deixar o código sempre de um único 

### Asserções

As asserções validam se o valor atual recebido de uma função é igual ao valor esperado, como por exemplo a seguinte função

```
import assert from  'node:assert/strict'
```
### Jest

  - toBe()
  - toBeNull()
  - toHavaProperty()
  - toStrictEqual() 
    Usado para testar asserções semelhantes porém com serialização diferente.
  - toThrowError()
  -jest.fn()
    para simular requisiçoes

### Supertest

```
npm install supertest
```

```
  import request from 'supertest';

  await request
    .get(path)
    .post(path)
    .put(path)
    .delete(path)
    .set(headers)
    .send(body)
    .expect(status)
```

