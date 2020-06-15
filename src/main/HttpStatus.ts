
/*
 * Copyright 2020 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License');

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

import { Response as FetchResponse } from 'node-fetch';

export class HttpStatus {

  // 1xx Informational

  /**
   * 100 Continue.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.2.1|HTTP/1.1: Semantics and Content, section 6.2.1}
   */
  public static readonly CONTINUE = new HttpStatus(100, 'Continue');

  /**
   * 101 Switching Protocols.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.2.2|HTTP/1.1: Semantics and Content, section 6.2.2}
   */
  public static readonly SWITCHING_PROTOCOLS = new HttpStatus(101, 'Switching Protocols');

  /**
   * 102 Processing.
   *
   * {@link https://tools.ietf.org/html/rfc2518#section-10.1|WebDAV}
   */
  public static readonly PROCESSING = new HttpStatus(102, 'Processing');

  /**
   * 103 Checkpoint.
   *
   * {@link https://code.google.com/p/gears/wiki/ResumableHttpRequestsProposal|A proposal for supporting resumable POST/PUT HTTP requests in HTTP/1.0}
   */
  public static readonly CHECKPOINT = new HttpStatus(103, 'Checkpoint');


  // 2xx Success

  /**
   * 200 OK.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.3.1|HTTP/1.1: Semantics and Content, section 6.3.1}
   */
  public static readonly OK = new HttpStatus(200, 'OK');

  /**
   * 201 Created.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.3.2|HTTP/1.1: Semantics and Content, section 6.3.2}
   */
  public static readonly CREATED = new HttpStatus(201, 'Created');

  /**
   * 202 Accepted.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.3.3|HTTP/1.1: Semantics and Content, section 6.3.3}
   */
  public static readonly ACCEPTED = new HttpStatus(202, 'Accepted');

  /**
   * 203 Non-Authoritative Information.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.3.4|HTTP/1.1: Semantics and Content, section 6.3.4}
   */
  public static readonly NON_AUTHORITATIVE_INFORMATION = new HttpStatus(203, 'Non-Authoritative Information');

  /**
   * 204 No Content.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.3.5|HTTP/1.1: Semantics and Content, section 6.3.5}
   */
  public static readonly NO_CONTENT = new HttpStatus(204, 'No Content');

  /**
   * 205 Reset Content.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.3.6|HTTP/1.1: Semantics and Content, section 6.3.6}
   */
  public static readonly RESET_CONTENT = new HttpStatus(205, 'Reset Content');

  /**
   * 206 Partial Content.
   *
   * {@link https://tools.ietf.org/html/rfc7233#section-4.1|HTTP/1.1: Range Requests, section 4.1}
   */
  public static readonly PARTIAL_CONTENT = new HttpStatus(206, 'Partial Content');

  /**
   * 207 Multi-Status.
   *
   * {@link https://tools.ietf.org/html/rfc4918#section-13|WebDAV}
   */
  public static readonly MULTI_STATUS = new HttpStatus(207, 'Multi-Status');

  /**
   * 208 Already Reported.
   *
   * {@link https://tools.ietf.org/html/rfc5842#section-7.1|WebDAV Binding Extensions}
   */
  public static readonly ALREADY_REPORTED = new HttpStatus(208, 'Already Reported');

  /**
   * 226 IM Used.
   *
   * {@link https://tools.ietf.org/html/rfc3229#section-10.4.1|Delta encoding in HTTP}
   */
  public static readonly IM_USED = new HttpStatus(226, 'IM Used');


  // 3xx Redirection

  /**
   * 300 Multiple Choices.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.4.1|HTTP/1.1: Semantics and Content, section 6.4.1}
   */
  public static readonly MULTIPLE_CHOICES = new HttpStatus(300, 'Multiple Choices');

  /**
   * 301 Moved Permanently.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.4.2|HTTP/1.1: Semantics and Content, section 6.4.2}
   */
  public static readonly MOVED_PERMANENTLY = new HttpStatus(301, 'Moved Permanently');

  /**
   * 302 Found.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.4.3|HTTP/1.1: Semantics and Content, section 6.4.3}
   */
  public static readonly FOUND = new HttpStatus(302, 'Found');

  /**
   * 302 Moved Temporarily.
   *
   * {@link https://tools.ietf.org/html/rfc1945#section-9.3|HTTP/1.0, section 9.3}
   * @deprecated in favor of {@link FOUND}.
   */
  public static readonly MOVED_TEMPORARILY = new HttpStatus(302, 'Moved Temporarily');

  /**
   * 303 See Other.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.4.4|HTTP/1.1: Semantics and Content, section 6.4.4}
   */
  public static readonly SEE_OTHER = new HttpStatus(303, 'See Other');

  /**
   * 304 Not Modified.
   *
   * {@link https://tools.ietf.org/html/rfc7232#section-4.1|HTTP/1.1: Conditional Requests, section 4.1}
   */
  public static readonly NOT_MODIFIED = new HttpStatus(304, 'Not Modified');

  /**
   * 305 Use Proxy.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.4.5|HTTP/1.1: Semantics and Content, section 6.4.5}
   * @deprecated due to security concerns regarding in-band configuration of a proxy
   */
  public static readonly USE_PROXY = new HttpStatus(305, 'Use Proxy');

  /**
   * 307 Temporary Redirect.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.4.7|HTTP/1.1: Semantics and Content, section 6.4.7}
   */
  public static readonly TEMPORARY_REDIRECT = new HttpStatus(307, 'Temporary Redirect');

  /**
   * 308 Permanent Redirect.
   *
   * {@link https://tools.ietf.org/html/rfc7238|RFC 7238}
   */
  public static readonly PERMANENT_REDIRECT = new HttpStatus(308, 'Permanent Redirect');


  // --- 4xx Client Error ---

  /**
   * 400 Bad Request.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.5.1|HTTP/1.1: Semantics and Content, section 6.5.1}
   */
  public static readonly BAD_REQUEST = new HttpStatus(400, 'Bad Request');

  /**
   * 401 Unauthorized.
   *
   * {@link https://tools.ietf.org/html/rfc7235#section-3.1|HTTP/1.1: Authentication, section 3.1}
   */
  public static readonly UNAUTHORIZED = new HttpStatus(401, 'Unauthorized');

  /**
   * 402 Payment Required.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.5.2|HTTP/1.1: Semantics and Content, section 6.5.2}
   */
  public static readonly PAYMENT_REQUIRED = new HttpStatus(402, 'Payment Required');

  /**
   * 403 Forbidden.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.5.3|HTTP/1.1: Semantics and Content, section 6.5.3}
   */
  public static readonly FORBIDDEN = new HttpStatus(403, 'Forbidden');

  /**
   * 404 Not Found.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.5.4|HTTP/1.1: Semantics and Content, section 6.5.4}
   */
  public static readonly NOT_FOUND = new HttpStatus(404, 'Not Found');

  /**
   * 405 Method Not Allowed.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.5.5|HTTP/1.1: Semantics and Content, section 6.5.5}
   */
  public static readonly METHOD_NOT_ALLOWED = new HttpStatus(405, 'Method Not Allowed');

  /**
   * 406 Not Acceptable.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.5.6|HTTP/1.1: Semantics and Content, section 6.5.6}
   */
  public static readonly NOT_ACCEPTABLE = new HttpStatus(406, 'Not Acceptable');

  /**
   * 407 Proxy Authentication Required.
   *
   * {@link https://tools.ietf.org/html/rfc7235#section-3.2|HTTP/1.1: Authentication, section 3.2}
   */
  public static readonly PROXY_AUTHENTICATION_REQUIRED = new HttpStatus(407, 'Proxy Authentication Required');

  /**
   * 408 Request Timeout.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.5.7|HTTP/1.1: Semantics and Content, section 6.5.7}
   */
  public static readonly REQUEST_TIMEOUT = new HttpStatus(408, 'Request Timeout');

  /**
   * 409 Conflict.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.5.8|HTTP/1.1: Semantics and Content, section 6.5.8}
   */
  public static readonly CONFLICT = new HttpStatus(409, 'Conflict');

  /**
   * 410 Gone.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.5.9|HTTP/1.1: Semantics and Content, section 6.5.9}
   */
  public static readonly GONE = new HttpStatus(410, 'Gone');

  /**
   * 411 Length Required.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.5.10|HTTP/1.1: Semantics and Content, section 6.5.10}
   */
  public static readonly LENGTH_REQUIRED = new HttpStatus(411, 'Length Required');

  /**
   * 412 Precondition failed.
   *
   * {@link https://tools.ietf.org/html/rfc7232#section-4.2|HTTP/1.1: Conditional Requests, section 4.2}
   */
  public static readonly PRECONDITION_FAILED = new HttpStatus(412, 'Precondition Failed');

  /**
   * 413 Payload Too Large.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.5.11|HTTP/1.1: Semantics and Content, section 6.5.11}
   */
  public static readonly PAYLOAD_TOO_LARGE = new HttpStatus(413, 'Payload Too Large');

  /**
   * 413 Request Entity Too Large.
   *
   * {@link https://tools.ietf.org/html/rfc2616#section-10.4.14|HTTP/1.1, section 10.4.14}
   * @deprecated in favor of {@link PAYLOAD_TOO_LARGE}
   */
  public static readonly REQUEST_ENTITY_TOO_LARGE = new HttpStatus(413, 'Request Entity Too Large');

  /**
   * 414 URI Too Long.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.5.12|HTTP/1.1: Semantics and Content, section 6.5.12}
   */
  public static readonly URI_TOO_LONG = new HttpStatus(414, 'URI Too Long');

  /**
   * 414 Request-URI Too Long.
   *
   * {@link https://tools.ietf.org/html/rfc2616#section-10.4.15|HTTP/1.1, section 10.4.15}
   * @deprecated in favor of {@link URI_TOO_LONG}.
   */
  public static readonly REQUEST_URI_TOO_LONG = new HttpStatus(414, 'Request-URI Too Long');

  /**
   * 415 Unsupported Media Type.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.5.13|HTTP/1.1: Semantics and Content, section 6.5.13}
   */
  public static readonly UNSUPPORTED_MEDIA_TYPE = new HttpStatus(415, 'Unsupported Media Type');

  /**
   * 416 Requested Range Not Satisfiable.
   *
   * {@link https://tools.ietf.org/html/rfc7233#section-4.4|HTTP/1.1: Range Requests, section 4.4}
   */
  public static readonly REQUESTED_RANGE_NOT_SATISFIABLE = new HttpStatus(416, 'Requested range not satisfiable');

  /**
   * 417 Expectation Failed.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.5.14|HTTP/1.1: Semantics and Content, section 6.5.14}
   */
  public static readonly EXPECTATION_FAILED = new HttpStatus(417, 'Expectation Failed');

  /**
   * 418 I'm a teapot.
   *
   * {@link https://tools.ietf.org/html/rfc2324#section-2.3.2|HTCPCP/1.0}
   */
  public static readonly I_AM_A_TEAPOT = new HttpStatus(418, 'I\'m a teapot');

  /**
   * @deprecated See
   * {@link https://tools.ietf.org/rfcdiff?difftype=--hwdiff&url2=draft-ietf-webdav-protocol-06.txt|WebDAV Draft Changes}
   */
  public static readonly INSUFFICIENT_SPACE_ON_RESOURCE = new HttpStatus(419, 'Insufficient Space On Resource');

  /**
   * @deprecated See
   * {@link https://tools.ietf.org/rfcdiff?difftype=--hwdiff&url2=draft-ietf-webdav-protocol-06.txt|WebDAV Draft Changes}
   */
  public static readonly METHOD_FAILURE = new HttpStatus(420, 'Method Failure');

  /**
   * @deprecated See
   * {@link https://tools.ietf.org/rfcdiff?difftype=--hwdiff&url2=draft-ietf-webdav-protocol-06.txt|WebDAV Draft Changes}
   */
  public static readonly DESTINATION_LOCKED = new HttpStatus(421, 'Destination Locked');

  /**
   * 422 Unprocessable Entity.
   *
   * {@link https://tools.ietf.org/html/rfc4918#section-11.2|WebDAV}
   */
  public static readonly UNPROCESSABLE_ENTITY = new HttpStatus(422, 'Unprocessable Entity');

  /**
   * 423 Locked.
   *
   * {@link https://tools.ietf.org/html/rfc4918#section-11.3|WebDAV}
   */
  public static readonly LOCKED = new HttpStatus(423, 'Locked');

  /**
   * 424 Failed Dependency.
   *
   * {@link https://tools.ietf.org/html/rfc4918#section-11.4|WebDAV}
   */
  public static readonly FAILED_DEPENDENCY = new HttpStatus(424, 'Failed Dependency');

  /**
   * 425 Too Early.
   *
   * {@link https://tools.ietf.org/html/rfc8470|RFC 8470}
   */
  public static readonly TOO_EARLY = new HttpStatus(425, 'Too Early');

  /**
   * 426 Upgrade Required.
   *
   * {@link https://tools.ietf.org/html/rfc2817#section-6|Upgrading to TLS Within HTTP/1.1}
   */
  public static readonly UPGRADE_REQUIRED = new HttpStatus(426, 'Upgrade Required');

  /**
   * 428 Precondition Required.
   *
   * {@link https://tools.ietf.org/html/rfc6585#section-3|Additional HTTP Status Codes}
   */
  public static readonly PRECONDITION_REQUIRED = new HttpStatus(428, 'Precondition Required');

  /**
   * 429 Too Many Requests.
   *
   * {@link https://tools.ietf.org/html/rfc6585#section-4|Additional HTTP Status Codes}
   */
  public static readonly TOO_MANY_REQUESTS = new HttpStatus(429, 'Too Many Requests');

  /**
   * 431 Request Header Fields Too Large.
   *
   * {@link https://tools.ietf.org/html/rfc6585#section-5|Additional HTTP Status Codes}
   */
  public static readonly REQUEST_HEADER_FIELDS_TOO_LARGE = new HttpStatus(431, 'Request Header Fields Too Large');

  /**
   * 451 Unavailable For Legal Reasons.
   *
   * {@link https://tools.ietf.org/html/draft-ietf-httpbis-legally-restricted-status-04|An HTTP Status Code to Report Legal Obstacles}
   */
  public static readonly UNAVAILABLE_FOR_LEGAL_REASONS = new HttpStatus(451, 'Unavailable For Legal Reasons');


  // --- 5xx Server Error ---

  /**
   * 500 Internal Server Error.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.6.1|HTTP/1.1: Semantics and Content, section 6.6.1}
   */
  public static readonly INTERNAL_SERVER_ERROR = new HttpStatus(500, 'Internal Server Error');

  /**
   * 501 Not Implemented.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.6.2|HTTP/1.1: Semantics and Content, section 6.6.2}
   */
  public static readonly NOT_IMPLEMENTED = new HttpStatus(501, 'Not Implemented');

  /**
   * 502 Bad Gateway.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.6.3|HTTP/1.1: Semantics and Content, section 6.6.3}
   */
  public static readonly BAD_GATEWAY = new HttpStatus(502, 'Bad Gateway');

  /**
   * 503 Service Unavailable.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.6.4|HTTP/1.1: Semantics and Content, section 6.6.4}
   */
  public static readonly SERVICE_UNAVAILABLE = new HttpStatus(503, 'Service Unavailable');

  /**
   * 504 Gateway Timeout.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.6.5|HTTP/1.1: Semantics and Content, section 6.6.5}
   */
  public static readonly GATEWAY_TIMEOUT = new HttpStatus(504, 'Gateway Timeout');

  /**
   * 505 HTTP Version Not Supported.
   *
   * {@link https://tools.ietf.org/html/rfc7231#section-6.6.6|HTTP/1.1: Semantics and Content, section 6.6.6}
   */
  public static readonly HTTP_VERSION_NOT_SUPPORTED = new HttpStatus(505, 'HTTP Version not supported');

  /**
   * 506 Variant Also Negotiates.
   *
   * {@link https://tools.ietf.org/html/rfc2295#section-8.1|Transparent Content Negotiation}
   */
  public static readonly VARIANT_ALSO_NEGOTIATES = new HttpStatus(506, 'Variant Also Negotiates');

  /**
   * 507 Insufficient Storage.
   *
   * {@link https://tools.ietf.org/html/rfc4918#section-11.5|WebDAV}
   */
  public static readonly INSUFFICIENT_STORAGE = new HttpStatus(507, 'Insufficient Storage');

  /**
   * 508 Loop Detected.
   *
   * {@link https://tools.ietf.org/html/rfc5842#section-7.2|WebDAV Binding Extensions}
    */
  public static readonly LOOP_DETECTED = new HttpStatus(508, 'Loop Detected');

  /**
   * 509 Bandwidth Limit Exceeded.
    */
  public static readonly BANDWIDTH_LIMIT_EXCEEDED = new HttpStatus(509, 'Bandwidth Limit Exceeded');

  /**
   * 510 Not Extended.
   *
   * {@link https://tools.ietf.org/html/rfc2774#section-7|HTTP Extension Framework}
   */
  public static readonly NOT_EXTENDED = new HttpStatus(510, 'Not Extended');

  /**
   * 511 Network Authentication Required.
   *
   * {@link https://tools.ietf.org/html/rfc6585#section-6|Additional HTTP Status Codes}
   */
  public static readonly NETWORK_AUTHENTICATION_REQUIRED = new HttpStatus(511, 'Network Authentication Required');

  public static from (response: FetchResponse): HttpStatus {
    return new HttpStatus(response.status, response.statusText || '');
  }

  private constructor (
    public readonly code: number,
    public readonly text: string
  ) {}
}
