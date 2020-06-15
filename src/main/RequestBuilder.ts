
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

import { Headers } from 'node-fetch';
import { Result } from '@xxlabaza/result';
import { HttpMethod } from './HttpMethod';
import { Request } from './Request';
import { Response } from './Response';

export enum Mode {
  CORS = 'cors',
  NO_CORS = 'no-cors',
  SAME_ORIGIN = 'same-origin',
  NAVIGATE = 'navigate'
}

export enum Cache {
  DEFAULT = 'default',
  NO_STORE = 'no-store',
  RELOAD = 'reload',
  NO_CACHE = 'no-cache',
  FORCE_CACHE = 'force-cache',
  ONLY_IF_CACHED = 'only-if-cached'
}

export enum Redirect {
  FOLLOW = 'follow',
  ERROR = 'error',
  MANUAL = ' manual'
}

export class RequestBuilder {

  private _method: HttpMethod = HttpMethod.GET;
  private _queries: {[key in string]: string} = {};
  private _headers: Headers = new Headers();
  private _body: {[key in string]: unknown} | string | null = null;
  private _mode: Mode = Mode.CORS;
  private _cache: Cache = Cache.DEFAULT;
  private _redirect: Redirect = Redirect.FOLLOW;

  constructor (private _resource: string) {}

  public method (value: HttpMethod): RequestBuilder {
    this._method = value;
    return this;
  }

  public header (key: string, value: string): RequestBuilder {
    this._headers.append(key, value);
    return this;
  }

  public headers (obj: {[key in string]: string}): RequestBuilder {
    Object.entries(obj).forEach(([key, value]: [string, string]) =>
      this.header(key, value)
    );
    return this;
  }

  public query (key: string, value: string): RequestBuilder {
    this._queries[key] = value;
    return this;
  }

  public queries (obj: {[key in string]: string}): RequestBuilder {
    Object.entries(obj).forEach(([key, value]: [string, string]) =>
      this.query(key, value)
    );
    return this;
  }

  public json (value: {[key in string]: unknown}): RequestBuilder {
    this._body = JSON.stringify(value);
    return this.header('Content-Type', 'application/json');
  }

  public text (value: string): RequestBuilder {
    this._body = value;
    return this;
  }

  public cache (value: Cache): RequestBuilder {
    this._cache = value;
    return this;
  }

  public redirect (value: Redirect): RequestBuilder {
    this._redirect = value;
    return this;
  }

  public build (): Request {
    const queryString = Object.entries(this._queries)
        .map(entry => entry.map(encodeURIComponent).join('='))
        .join('&');

    if (queryString) {
      if (new URL(this._resource).search === '') {
        this._resource += '?';
      } else {
        this._resource += '&';
      }
      this._resource += queryString;
    }

    return new Request(this._resource, {
      method: this._method,
      headers: this._headers,
      body: this._body,
      mode: this._mode,
      cache: this._cache,
      redirect: this._redirect
    });
  }

  public async execute (): Promise<Result<Response, Error>> {
    return this.build().execute();
  }
}
