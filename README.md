
# Overview

[![Build Status](https://travis-ci.com/xxlabaza/request.svg?branch=master)](https://travis-ci.com/xxlabaza/request)

`request` - is a set of helper wrappers around `node-fetch`, which provides more convenient and safe approach to reqeust remote `HTTP`/`HTTPS` resources.

## Usage

> installation:
>
> ```bash
> $> npm install --save @xxlabaza/request
> ```

Example:

```typescript
import { Reqeust } from '@xxlabaza/request'

const result = await Reqeust.doGet('http://example.com/resource');
if (result.isFailure()) {
  console.log(result.error);
  process.exit(1);
}

const response = result.value;
console.log(`status=${response.status.code}`);
if (response.hasJson()) {
  console.log(`body=${JSON.stringify(response.json)}`);
} else if (response.hasText()) {
  console.log(`body=${response.text}`);
}
```

`POST` **JSON** request example:

```typescript
import { Request } from '@xxlabaza/request';

const result = await Reqeust.post('http://example.com/resource')
    .header('X-Custom-Header', '123')
    .query('id', '1234')
    .json({ text: 'Hello world!', key: true })
    .execute();
```

The different ways to write the same request:

```typescript
import { Request } from '@xxlabaza/request';

const response = await Request.doGet('http://example.com/resource').orError();
```

```typescript
import { Request } from '@xxlabaza/request';

const result = await Request.doGet('http://example.com/resource');
if (result.isFailure()) {
  throw result.error;
}
const response = result.value;
```

```typescript
import { Request } from '@xxlabaza/request';

const result = await Request.get('http://example.com/resource').execute();
if (result.isFailure()) {
  throw result.error;
}
const response = result.value;
```

```typescript
import { Request } from '@xxlabaza/request';

const request = Request
    .get('http://example.com/resource')
    .build();

const result = await request.execute();
if (result.isFailure()) {
  throw result.error;
}
const response = result.value;
```

```typescript
import { Request, HttpMethod } from '@xxlabaza/request';

const request = Request
    .builder('http://example.com/resource')
    .method(HttpMethod.GET)
    .build();

const result = await request.execute();
if (result.isFailure()) {
  throw result.error;
}
const response = result.value;
```

## Development

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Building

To build the project, do the following:

```bash
$> npm run build
...
```

### Running the tests

To run the project's test, do the following:

```bash
$> npm test

...

 PASS  src/tests/index.test.ts
  server test
    ✓ request empty GET (51 ms)
    ✓ post JSON and read response (11 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        2.846 s
Ran all test suites.
```

## Changelog

To see what has changed in recent versions of the project, see the [changelog](./CHANGELOG.md) file.

## Contributing

Please read [contributing](./CONTRIBUTING.md) file for details on my code of conduct, and the process for submitting pull requests to me.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/appulse-projects/utils-java/tags).

## Authors

* **[Artem Labazin](https://github.com/xxlabaza)** - creator and the main developer

## License

This project is licensed under the Apache License 2.0 License - see the [license](./LICENSE) file for details
