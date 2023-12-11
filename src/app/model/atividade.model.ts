import { Categoria } from "./categoria.enum";

export class Atividade {

    id!: number;
    titulo!: string;
    descricao!: string;
    categoria!: Categoria;
    usuarioId!: number;



}