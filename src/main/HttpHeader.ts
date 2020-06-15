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

export enum HttpHeader {

  /**
   * The HTTP Accept header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7231#section-5.3.2|Section 5.3.2 of RFC 7231}
   */
  ACCEPT = 'Accept',

  /**
   * The HTTP Accept-Charset header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7231#section-5.3.3|Section 5.3.3 of RFC 7231}
   */
  ACCEPT_CHARSET = 'Accept-Charset',

  /**
   * The HTTP Accept-Encoding header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7231#section-5.3.4|Section 5.3.4 of RFC 7231}
   */
  ACCEPT_ENCODING = 'Accept-Encoding',

  /**
   * The HTTP Accept-Language header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7231#section-5.3.5|Section 5.3.5 of RFC 7231}
   */
  ACCEPT_LANGUAGE = 'Accept-Language',

  /**
   * The HTTP Accept-Ranges header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7233#section-2.3|Section 5.3.5 of RFC 7233}
   */
  ACCEPT_RANGES = 'Accept-Ranges',

  /**
   * The CORS Access-Control-Allow-Credentials response header field name.
   *
   * More info available here:
   * {@link https://www.w3.org/TR/cors/|CORS W3C recommendation}
   */
  ACCESS_CONTROL_ALLOW_CREDENTIALS = 'Access-Control-Allow-Credentials',

  /**
   * The CORS Access-Control-Allow-Headers response header field name.
   *
   * More info available here:
   * {@link https://www.w3.org/TR/cors/|CORS W3C recommendation}
   */
  ACCESS_CONTROL_ALLOW_HEADERS = 'Access-Control-Allow-Headers',

  /**
   * The CORS Access-Control-Allow-Methods response header field name.
   *
   * More info available here:
   * {@link https://www.w3.org/TR/cors/|CORS W3C recommendation}
   */
  ACCESS_CONTROL_ALLOW_METHODS = 'Access-Control-Allow-Methods',

  /**
   * The CORS Access-Control-Allow-Origin response header field name.
   *
   * More info available here:
   * {@link https://www.w3.org/TR/cors/|CORS W3C recommendation}
   */
  ACCESS_CONTROL_ALLOW_ORIGIN = 'Access-Control-Allow-Origin',

  /**
   * The CORS Access-Control-Expose-Headers response header field name.
   *
   * More info available here:
   * {@link https://www.w3.org/TR/cors/|CORS W3C recommendation}
   */
  ACCESS_CONTROL_EXPOSE_HEADERS = 'Access-Control-Expose-Headers',

  /**
   * The CORS Access-Control-Max-Age response header field name.
   *
   * More info available here:
   * {@link https://www.w3.org/TR/cors/|CORS W3C recommendation}
   */
  ACCESS_CONTROL_MAX_AGE = 'Access-Control-Max-Age',

  /**
   * The CORS Access-Control-Request-Headers request header field name.
   *
   * More info available here:
   * {@link https://www.w3.org/TR/cors/|CORS W3C recommendation}
   */
  ACCESS_CONTROL_REQUEST_HEADERS = 'Access-Control-Request-Headers',

  /**
   * The CORS Access-Control-Request-Method request header field name.
   *
   * More info available here:
   * {@link https://www.w3.org/TR/cors/|CORS W3C recommendation}
   */
  ACCESS_CONTROL_REQUEST_METHOD = 'Access-Control-Request-Method',

  /**
   * The HTTP Age header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7234#section-5.1|Section 5.1 of RFC 7234}
   */
  AGE = 'Age',

  /**
   * The HTTP Allow header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7231#section-7.4.1|Section 7.4.1 of RFC 7231}
   */
  ALLOW = 'Allow',

  /**
   * The HTTP Authorization header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7235#section-4.2|Section 4.2 of RFC 7235}
   */
  AUTHORIZATION = 'Authorization',

  /**
   * The HTTP Cache-Control header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7234#section-5.2|Section 5.2 of RFC 7234}
   */
  CACHE_CONTROL = 'Cache-Control',

  /**
   * The HTTP Connection header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7230#section-6.1|Section 6.1 of RFC 7230}
   */
  CONNECTION = 'Connection',

  /**
   * The HTTP Content-Encoding header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7231#section-3.1.2.2|Section 3.1.2.2 of RFC 7231}
   */
  CONTENT_ENCODING = 'Content-Encoding',

  /**
   * The HTTP Content-Disposition header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc6266|RFC 6266}
   */
  CONTENT_DISPOSITION = 'Content-Disposition',

  /**
   * The HTTP Content-Language header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7231#section-3.1.3.2|Section 3.1.3.2 of RFC 7231}
   */
  CONTENT_LANGUAGE = 'Content-Language',

  /**
   * The HTTP Content-Length header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7230#section-3.3.2|Section 3.3.2 of RFC 7230}
   */
  CONTENT_LENGTH = 'Content-Length',

  /**
   * The HTTP Content-Location header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7231#section-3.1.4.2|Section 3.1.4.2 of RFC 7231}
   */
  CONTENT_LOCATION = 'Content-Location',

  /**
   * The HTTP Content-Range header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7233#section-4.2|Section 4.2 of RFC 7233}
   */
  CONTENT_RANGE = 'Content-Range',

  /**
   * The HTTP Content-Type header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7231#section-3.1.1.5|Section 3.1.1.5 of RFC 7231}
   */
  CONTENT_TYPE = 'Content-Type',

  /**
   * The HTTP Cookie header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc2109#section-4.3.4|Section 4.3.4 of RFC 2109}
   */
  COOKIE = 'Cookie',

  /**
   * The HTTP Date header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7231#section-7.1.1.2|Section 7.1.1.2 of RFC 7231}
   */
  DATE = 'Date',

  /**
   * The HTTP ETag header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7232#section-2.3|Section 2.3 of RFC 7232}
   */
  ETAG = 'ETag',

  /**
   * The HTTP Expect header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7231#section-5.1.1|Section 5.1.1 of RFC 7231}
   */
  EXPECT = 'Expect',

  /**
   * The HTTP Expires header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7234#section-5.3|Section 5.3 of RFC 7234}
   */
  EXPIRES = 'Expires',

  /**
   * The HTTP From header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7231#section-5.5.1|Section 5.5.1 of RFC 7231}
   */
  FROM = 'From',

  /**
   * The HTTP Host header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7230#section-5.4|Section 5.4 of RFC 7230}
   */
  HOST = 'Host',

  /**
   * The HTTP If-Match header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7232#section-3.1|Section 3.1 of RFC 7232}
   */
  IF_MATCH = 'If-Match',

  /**
   * The HTTP If-Modified-Since header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7232#section-3.3|Section 3.3 of RFC 7232}
   */
  IF_MODIFIED_SINCE = 'If-Modified-Since',

  /**
   * The HTTP If-None-Match header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7232#section-3.2|Section 3.2 of RFC 7232}
   */
  IF_NONE_MATCH = 'If-None-Match',

  /**
   * The HTTP If-Range header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7233#section-3.2|Section 3.2 of RFC 7233}
   */
  IF_RANGE = 'If-Range',

  /**
   * The HTTP If-Unmodified-Since header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7232#section-3.4|Section 3.4 of RFC 7232}
   */
  IF_UNMODIFIED_SINCE = 'If-Unmodified-Since',

  /**
   * The HTTP Last-Modified header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7232#section-2.2|Section 2.2 of RFC 7232}
   */
  LAST_MODIFIED = 'Last-Modified',

  /**
   * The HTTP Link header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc5988|RFC 5988}
   */
  LINK = 'Link',

  /**
   * The HTTP Location header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7231#section-7.1.2|Section 7.1.2 of RFC 7231}
   */
  LOCATION = 'Location',

  /**
   * The HTTP Max-Forwards header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7231#section-5.1.2|Section 5.1.2 of RFC 7231}
   */
  MAX_FORWARDS = 'Max-Forwards',

  /**
   * The HTTP Origin header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc6454|RFC 6454}
   */
  ORIGIN = 'Origin',

  /**
   * The HTTP Pragma header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7234#section-5.4|Section 5.4 of RFC 7234}
   */
  PRAGMA = 'Pragma',

  /**
   * The HTTP Proxy-Authenticate header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7235#section-4.3|Section 4.3 of RFC 7235}
   */
  PROXY_AUTHENTICATE = 'Proxy-Authenticate',

  /**
   * The HTTP Proxy-Authorization header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7235#section-4.4|Section 4.4 of RFC 7235}
   */
  PROXY_AUTHORIZATION = 'Proxy-Authorization',

  /**
   * The HTTP Range header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7233#section-3.1|Section 3.1 of RFC 7233}
   */
  RANGE = 'Range',

  /**
   * The HTTP Referer header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7231#section-5.5.2|Section 5.5.2 of RFC 7231}
   */
  REFERER = 'Referer',

  /**
   * The HTTP Retry-After header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7231#section-7.1.3|Section 7.1.3 of RFC 7231}
   */
  RETRY_AFTER = 'Retry-After',

  /**
   * The HTTP Server header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7231#section-7.4.2|Section 7.4.2 of RFC 7231}
   */
  SERVER = 'Server',

  /**
   * The HTTP Set-Cookie header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc2109#section-4.2.2|Section 4.2.2 of RFC 2109}
   */
  SET_COOKIE = 'Set-Cookie',

  /**
   * The HTTP Set-Cookie2 header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc2965|RFC 2965}
   */
  SET_COOKIE2 = 'Set-Cookie2',

  /**
   * The HTTP TE header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7230#section-4.3|Section 4.3 of RFC 7230}
   */
  TE = 'TE',

  /**
   * The HTTP Trailer header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7230#section-4.4|Section 4.4 of RFC 7230}
   */
  TRAILER = 'Trailer',

  /**
   * The HTTP Transfer-Encoding header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7230#section-3.3.1|Section 3.3.1 of RFC 7230}
   */
  TRANSFER_ENCODING = 'Transfer-Encoding',

  /**
   * The HTTP Upgrade header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7230#section-6.7|Section 6.7 of RFC 7230}
   */
  UPGRADE = 'Upgrade',

  /**
   * The HTTP User-Agent header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7231#section-5.5.3|Section 5.5.3 of RFC 7231}
   */
  USER_AGENT = 'User-Agent',

  /**
   * The HTTP Vary header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7231#section-7.1.4|Section 7.1.4 of RFC 7231}
   */
  VARY = 'Vary',

  /**
   * The HTTP Via header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7230#section-5.7.1|Section 5.7.1 of RFC 7230}
   */
  VIA = 'Via',

  /**
   * The HTTP Warning header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7234#section-5.5|Section 5.5 of RFC 7234}
   */
  WARNING = 'Warning',

  /**
   * The HTTP WWW-Authenticate header field name.
   *
   * More info available here:
   * {@link https://tools.ietf.org/html/rfc7235#section-4.1|Section 4.1 of RFC 7235}
   */
  WWW_AUTHENTICATE = 'WWW-Authenticate',
}
