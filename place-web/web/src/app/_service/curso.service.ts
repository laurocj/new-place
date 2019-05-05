import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
export class CursoService {

  constructor(private http: HttpClient) { }

  public getAll():Observable<any>{    
    return this.http.get(`${environment.apiUrl}/api/cursos/`);
  }

  public getById(id : String):Observable<any>{    
    return this.http.get(`${environment.apiUrl}/api/cursos/${id}`);
  }

  public save(CursoJson : Object):Observable<any>{    
    return this.http.post(`${environment.apiUrl}/api/cursos`,
    JSON.stringify(CursoJson),
    httpOptions
    );
  }

  public update(id:String,CursoJson : String):Observable<any>{    
    return this.http.put(`${environment.apiUrl}/api/cursos/${id}`,
    JSON.stringify(CursoJson),
    httpOptions
    );
  }

  public delete(id:String):Observable<any>{    
    return this.http.delete(`${environment.apiUrl}/api/cursos/${id}`);
  }
}
