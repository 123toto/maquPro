export class Cliente {
    key?: string;
    prenom?: string;
    nom?: string; 
    typeCliente?: string;
    birthday?: Date;
    telephone?: Telephone = new Telephone();    
    adresse?: Adresse = new Adresse();
    prestations?: Array<string>;
}

export class Adresse {
    numero?: string;
    complement?: string;
    rue?: string;
    codePostal?: string;
    ville?: string;
    notes?: string;
}

export class Telephone {
    num1?: number;
    num2?: number;    
}