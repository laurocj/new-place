import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/usuarios/`);
  }

  public getById(id: String): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/usuarios/${id}`);
  }

  public save(usuarioJson: Object): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/usuarios`,
      JSON.stringify(usuarioJson),
      httpOptions
    );
  }

  public update(id: number, usuarioJson: Object): Observable<any> {
    return this.http.put(`${environment.apiUrl}/api/usuarios/${id}`,
      JSON.stringify(usuarioJson),
      httpOptions
    );
  }

  public delete(id: String): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/api/usuarios/${id}`);
  }
}
