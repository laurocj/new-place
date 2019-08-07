import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/_service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  public id : number
  public nome : string = '';
  public email : string = '';
  public senha : any[]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService : UsuarioService) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id');
    if(id != null) {
      this.usuarioService.getById(id)
      .subscribe(usuario => {this.usuario = usuario });
    }
  }

  set usuario(usuario : any){
    console.log(usuario);
    this.id = usuario['id'];
    this.nome = usuario['nome'];
    this.email = usuario['email'];
    this.senha = usuario['senha'];
  }

  public save() {
    if(isNaN(this.id)) {
      this.usuarioService.save({nome:this.nome,email: this.email , senha:this.senha})
      .subscribe(
        res => {
          this.id = res.id;
          this.gotoUsuarios();
        },
        error => console.log(error)
      );
    } else {
      this.usuarioService.update(this.id,{nome:this.nome,email: this.email , senha:this.senha})
      .subscribe(
        res => {
          this.id = res.id;
          this.gotoUsuarios();
        },
        error => console.log(error)
      );
    }
  }

  gotoUsuarios() {
    this.router.navigate(['/usuarios']);
  }

}
