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
export class AtividadeService {

  constructor(private http: HttpClient) { }

  public getAll(cursoId:number):Observable<any>{    
    return this.http.get(`${environment.apiUrl}/api/atividades?cursoId=${cursoId}`);
  }

  public getById(id : String):Observable<any>{    
    return this.http.get(`${environment.apiUrl}/api/atividades/${id}`);
  }

  public save(AtividadeJson : Object):Observable<any>{    
    return this.http.post(`${environment.apiUrl}/api/atividades`,
    JSON.stringify(AtividadeJson),
    httpOptions
    );
  }

  public update(id:String,AtividadeJson : String):Observable<any>{    
    return this.http.put(`${environment.apiUrl}/api/atividades/${id}`,
    JSON.stringify(AtividadeJson),
    httpOptions
    );
  }

  public delete(id:String):Observable<any>{    
    return this.http.delete(`${environment.apiUrl}/api/atividades/${id}`);
  }
}
