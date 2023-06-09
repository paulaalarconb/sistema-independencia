import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/service/persona.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PersonaComponent implements OnInit{

  formCheckPersona: FormGroup;

  loading = false;
  success = false;

  personas: any;

  tipo_identificacion: any[] = [
    'Rut',
    'Pasaporte',
    'Otro'
  ]

  constructor(private fb: FormBuilder, private personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
    this.formCheckPersona = this.fb.group({
      tipo: '',
      numero_identificacion: ''
    })

    this.personaService.getPersonas().pipe(take(1)).subscribe(data => {this.personas = data;})
  }

  onCheckPersona(): void {
    this.loading = true;

    const numero_identificacion = this.formCheckPersona.value.numero_identificacion;
    console.log(this.formCheckPersona.value)
    console.log(this.personas)
    const tipo_seleccionado = this.formCheckPersona.value.tipo;

    try {
      const result = this.personas.find(item => item.numero_identificacion === numero_identificacion)
      if (typeof result != "undefined") {
        this.success = true
        console.log(result.id)
        console.log(this.formCheckPersona.value.numero_identificacion)
        this.router.navigate(['farmacia/venta'], { queryParams: {id_persona: result.id}})
      } else {
        this.router.navigate(['persona/crear'], { queryParams: {numero_identificacion: numero_identificacion, tipo: tipo_seleccionado }})

      }
    } catch(err) {
      console.log(err)
    }
    this.loading = false;
  }

}
