
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

import fetch, { Response as FetchResponse, Headers } from 'node-fetch';
import { Result, failure, success } from '@xxlabaza/result';
import { HttpStatus } from './HttpStatus';
import { Response } from './Response';
import { HttpMethod } from './HttpMethod';
import { RequestBuilder } from './RequestBuilder';


export class Request {

  public static builder (resource: string): RequestBuilder {
    return new RequestBuilder(resource);
  }

  public static get (resource: string): RequestBuilder {
    return Request.builder(resource).method(HttpMethod.GET);
  }

  public static doGet (resource: string): Promise<Result<Response, Error>> {
    return Request.get(resource).execute();
  }

  public static head (resource: string): RequestBuilder {
    return Request.builder(resource).method(HttpMethod.HEAD);
  }

  public static doHead (resource: string): Promise<Result<Response, Error>> {
    return Request.head(resource).execute();
  }

  public static post (resource: string): RequestBuilder {
    return Request.builder(resource).method(HttpMethod.POST);
  }

  public static doPost (resource: string): Promise<Result<Response, Error>> {
    return Request.post(resource).execute();
  }

  public static put (resource: string): RequestBuilder {
    return Request.builder(resource).method(HttpMethod.PUT);
  }

  public static doPut (resource: string): Promise<Result<Response, Error>> {
    return Request.put(resource).execute();
  }

  public static delete (resource: string): RequestBuilder {
    return Request.builder(resource).method(HttpMethod.DELETE);
  }

  public static doDelete (resource: string): Promise<Result<Response, Error>> {
    return Request.delete(resource).execute();
  }

  public static trace (resource: string): RequestBuilder {
    return Request.builder(resource).method(HttpMethod.TRACE);
  }

  public static doTrace (resource: string): Promise<Result<Response, Error>> {
    return Request.trace(resource).execute();
  }

  public static options (resource: string): RequestBuilder {
    return Request.builder(resource).method(HttpMethod.OPTIONS);
  }

  public static doOptions (resource: string): Promise<Result<Response, Error>> {
    return Request.options(resource).execute();
  }

  public static connect (resource: string): RequestBuilder {
    return Request.builder(resource).method(HttpMethod.CONNECT);
  }

  public static doConnect (resource: string): Promise<Result<Response, Error>> {
    return Request.connect(resource).execute();
  }

  public static patch (resource: string): RequestBuilder {
    return Request.builder(resource).method(HttpMethod.PATCH);
  }

  public static doPatch (resource: string): Promise<Result<Response, Error>> {
    return Request.patch(resource).execute();
  }

  constructor (
    private resource: string,
    private options: {[key in string]: unknown} = {}
  ) {}

  public async execute (): Promise<Result<Response, Error>> {
    return fetch(this.resource, this.options)
        .then(async (response: FetchResponse) => {
          const status = HttpStatus.from(response);
          const headers: Headers = response.headers;

          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const json = await response.json();
            return new Response(status, headers, json, null);
          }

          const text = (await response.text()) || null;
          return new Response(status, headers, null, text);
        })
        .then((it: Response) => success(it))
        .catch((error: Error) => failure(error));
  }
}
