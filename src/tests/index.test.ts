
/*
 * Copyright 2020 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Request } from '../main';
import { Server, createServer } from 'http';


describe('server test', () => {
  let server: Server;

  function host_port (): string {
    const address = server.address();
    if (typeof address === 'string') {
      return `http://${address}`;
    } else {
      return `http://localhost:${address.port}`;
    }
  }

  beforeAll(done => {
    server = createServer((req, res) => {
      // const url = new URL(req.url);
      switch (req.url) {
      case '/empty':
        res.writeHead(200);
        res.end();
        break;
      case '/post':
        let chunks = [];
        req.on('data', chunk => {
          chunks.push(chunk);
        });
        req.on('end', () => {
          const body = Buffer.concat(chunks).toString();
          const json = JSON.parse(body);

          res.writeHead(201, 'object created', {'Content-Type': 'application/json'});
          res.end(JSON.stringify({
            ...json,
            response: true,
            text: 'Hello world!'
          }));
        });
        break;
      default:
        throw new Error();
      }
    });
    server.listen(done);
  });

  afterAll(done => {
    server.close(done);
  });

  it('request empty GET', async () => {
    const result = await Request.doGet(`${host_port()}/empty`);

    const response = result.orError();
    expect(response.status.code).toBe(200);
    expect(response.json).toBeNull();
    expect(response.text).toBeNull();
  });

  it('post JSON and read response', async () => {
    const json = { key: 1, hello: true };
    const result = await Request.post(`${host_port()}/post`)
        .json(json)
        .execute();

    const response = result.orError();
    expect(response.status.code).toBe(201);
    expect(response.status.text).toEqual("object created");
    expect(response.text).toBeNull();
    expect(response.json).toEqual({
      ...json,
      response: true,
      text: 'Hello world!'
    });
  });
});
