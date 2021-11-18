import { FeedPostEntity } from 'src/feed/models/post.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './role.enum';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: Role;

  @OneToMany(() => FeedPostEntity, (FeedPostEntity) => FeedPostEntity.author)
  feedPosts: FeedPostEntity[];

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
