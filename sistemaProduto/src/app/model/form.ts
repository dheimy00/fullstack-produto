import { FormControl, FormGroup, Validators } from "@angular/forms";

export class ProdutoFormControl extends FormControl {
    label: string;
    property:string;
    modelProperty: string;

    constructor(label:string, property:string, value: any, validator: any) {
        super(value, validator);
        this.property = property
        this.label = label;
        this.modelProperty = property;
    }

    getValidarMensagens() {
        let mensagens: string[] = [];
        if (this.errors) {
            for (let errorName in this.errors) {
                switch (errorName) {
                    case "required":
                        mensagens.push(`O campo ${this.property} obrigatório`);
                        break;
                    case "minlength":
                        mensagens.push(`Um ${this.property} deve ter pelo menos
                            ${this.errors['minlength'].requiredLength}
                            caracteres`);
                        break;
                    case "maxlength":
                        mensagens.push(`Um ${this.property} não deve ter mais de 
                        ${this.errors['maxlength'].requiredLength} caracteres`);
                        break;
                    case "pattern":
                        mensagens.push(`O ${this.property} contém caracteres ilegais `);
                        break;
                }
            }
        }
        return mensagens;
    }
}

export class ProdutoFormGroup extends FormGroup {

    constructor() {
        super({
            nome: new ProdutoFormControl("Nome", "nome", "",
            Validators.compose([Validators.required,
                Validators.pattern("^[A-Za-z ]+$"),
                Validators.minLength(5),
                Validators.maxLength(10)])),
            descricao: new ProdutoFormControl("Descrição", "descrição", "",
                Validators.compose([Validators.required,
                    Validators.pattern("^[A-Za-z ]+$"),
                    Validators.minLength(5),
                    Validators.maxLength(20)])),
    
        });
    }



}