import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CrudOperations } from './crud-operations.interface';
import { Page } from '../model/page.model'; 
import { PageRequest } from '../model/page-request.model'; 
import { filter } from 'rxjs/operators';


export abstract class AbstractCrudService<T, ID> implements CrudOperations<T, ID> {
  constructor(
    protected http: HttpClient,
    protected base: string    
  ){}


 // providers: [{ provide: [{ provide: Logger, useClass: BetterLogger }]}]
 // [{ provide: MessageService}]

  save(t: T): Observable<T> {
    return this.http.post<T>(this.base, t);
  }

  update(id: ID, t: T): Observable<T> {
    return this.http.put<T>(this.base + '/' + id, t, {});
  }

  findOne(id: ID): Observable<T> {
    return this.http.get<T>(this.base + '/' + id);
  }

  findBy(/*field: string, searchParameter: string,*/ fields: Map<string, string>, pageRequest: PageRequest): Observable<Page<T>> {
    const params: {[key: string]: any} = [];
/*
    if (field != null) {
      params[field.toString()] = searchParameter;
      params['sort'] = field + ',asc';
    } else if (fields != null) {*/
      if (fields != null) {
      fields.forEach((value, key) => {
        if (value) {
          params[key] = value;
        }
      });
    }

    params['page'] = pageRequest.page;
    params['size'] = pageRequest.size;
    console.log("olha a url: "+this.base);
    return this.http.get<Page<T>>(`${this.base}`, { params });
  }

  findAll(pageRequest?: PageRequest): Observable<Page<T>> {
    const params: {[key: string]: any} = !pageRequest ? {} : {
      page: pageRequest.page,
      size: pageRequest.size,
      sort: pageRequest.sort.column + ',' + pageRequest.sort.direction
    };
    return this.http.get<Page<T>>(`${this.base}`, { params });
  }

  delete(id: ID): Observable<T> {
    return this.http.delete<T>(this.base + '/' + id);
  }
 

}
