import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
  
@Entity("enderecos")
export default class EnderecoEntity {
  @PrimaryGeneratedColumn()
  id!: number; // esse campo não irá ser inicializado agora
  @Column()
  cidade: string;
  @Column()
  estado: string;
  
  constructor(cidade: string, estado: string) {
    this.estado = estado;
    this.cidade = cidade;
  }
}