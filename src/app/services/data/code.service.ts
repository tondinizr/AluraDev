import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Code } from './code';

@Injectable({ providedIn: 'root' })
export class CodeService {
  private codesUrl = 'api/codes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  /** GET codes from the server */
  getCodes(): Observable<Code[]> {
    return this.http.get<Code[]>(this.codesUrl).pipe(
      tap((_) => this.log('fetched codes')),
      catchError(this.handleError<Code[]>('getCodes', []))
    );
  }

  /** GET code by id. Return `undefined` when id not found */
  getCodeNo404<Data>(id: number): Observable<Code> {
    const url = `${this.codesUrl}/?id=${id}`;
    return this.http.get<Code[]>(url).pipe(
      map((codes) => codes[0]), // returns a {0|1} element array
      tap((h) => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} code id=${id}`);
      }),
      catchError(this.handleError<Code>(`getCode id=${id}`))
    );
  }

  /** GET code by id. Will 404 if id not found */
  getCode(id: number): Observable<Code> {
    const url = `${this.codesUrl}/${id}`;
    return this.http.get<Code>(url).pipe(
      tap((_) => this.log(`fetched code id=${id}`)),
      catchError(this.handleError<Code>(`getCode id=${id}`))
    );
  }

  /* GET codes whose name contains search term */
  searchCodes(term: string): Observable<Code[]> {
    if (!term.trim()) {
      // if not search term, return empty code array.
      return of([]);
    }
    return this.http.get<Code[]>(`${this.codesUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found codes matching "${term}"`)
          : this.log(`no codes matching "${term}"`)
      ),
      catchError(this.handleError<Code[]>('searchCodes', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new code to the server */
  addCode(code: Code): Observable<Code> {
    return this.http.post<Code>(this.codesUrl, code, this.httpOptions).pipe(
      tap((newCode: Code) => this.log(`added code w/ id=${newCode.id}`)),
      catchError(this.handleError<Code>('addCode'))
    );
  }

  /** DELETE: delete the code from the server */
  deleteCode(id: number): Observable<Code> {
    const url = `${this.codesUrl}/${id}`;

    return this.http.delete<Code>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted code id=${id}`)),
      catchError(this.handleError<Code>('deleteCode'))
    );
  }

  /** PUT: update the code on the server */
  updateCode(code: Code): Observable<any> {
    return this.http.put(this.codesUrl, code, this.httpOptions).pipe(
      tap((_) => this.log(`updated code id=${code.id}`)),
      catchError(this.handleError<any>('updateCode'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  // tslint:disable-next-line: typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CodeService message with the MessageService */
  // tslint:disable-next-line: typedef
  private log(message: string) {
    console.log(`CodeService: ${message}`);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
