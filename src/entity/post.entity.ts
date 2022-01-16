import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
} from 'typeorm';
import { User } from './user.entity';

@Entity({ name: "post" })
export class Post {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne(() => User)
    owner: User;

    @Column("varchar", { length: 225, nullable: false })
    title: string;

    @Column("varchar", { length: 225, nullable: false })
    description: string;

    @Column()
    likeCount: number = 0;

    @Column()
    commentCount: number = 0;

    @CreateDateColumn({ default: () => "now()" })
    createdAt: Date;

    @UpdateDateColumn({ nullable: true })
    updatedAt: Date;
}
