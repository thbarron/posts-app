import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class Post {

  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  contents: string;
}
