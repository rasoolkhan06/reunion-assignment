import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
} from 'typeorm';
import { User } from './user.entity';
import { Post } from './post.entity';

@Entity({ name: "comment" })
export class Comment {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column("varchar", { length: 225, nullable: false })
    text: string;

    @ManyToOne(() => User)
    user: User;

    @ManyToOne(() => Post)
    post: Post;

    @CreateDateColumn({ default: () => "now()" })
    createdAt: Date;

    @UpdateDateColumn({ nullable: true })
    updatedAt: Date;
}
