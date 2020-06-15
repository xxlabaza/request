
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

// import { Request }  from './Request';

export * from './HttpHeader';
export * from './HttpMethod';
export * from './HttpStatus';
export * from './MimeType';
export * from './Request';
export * from './RequestBuilder';
export * from './Response';

// async function process (request: Request) {
//   const result = await request.execute();

//   if (result.isSuccess()) {
//     console.log('success');

//     const response = result.value;
//     console.log(`status - ${JSON.stringify(response.status)}`);
//     console.log(`headers - ${response.headers.toString()}`);
//     console.log(`json - ${JSON.stringify(response.json)}`);
//     console.log(`text - ${response.text}`);
//   } else {
//     console.log('failure');
//     console.log(result.error);
//   }
// }

// console.log('before');
// (async () => {
//   await process(Request.post('http://localhost:9090/post')
//       .json({ key: 1, hello: true })
//       .build());

//   await process(Request.get('http://localhost:9090/nothing')
//       .build());
// })();
// console.log('after');
