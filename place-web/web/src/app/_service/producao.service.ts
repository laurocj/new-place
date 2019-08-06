import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProducaoService {

  constructor(private http: HttpClient) { }

  public getAll(cursoId:number):Observable<any>{    
    return this.http.get(`${environment.apiUrl}/api/producoes?cursoId=${cursoId}`);
  }

  public getById(id : String):Observable<any>{    
    return this.http.get(`${environment.apiUrl}/api/producoes/${id}`);
  }

  public save(ProducaoJson : Object):Observable<any>{    
    return this.http.post(`${environment.apiUrl}/api/producoes`,
    JSON.stringify(ProducaoJson),
    httpOptions
    );
  }

  public update(id:String,ProducaoJson : String):Observable<any>{    
    return this.http.put(`${environment.apiUrl}/api/producoes/${id}`,
    JSON.stringify(ProducaoJson),
    httpOptions
    );
  }

  public delete(id:String):Observable<any>{    
    return this.http.delete(`${environment.apiUrl}/api/producoes/${id}`);
  }
}
