import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
} from 'typeorm';
import { User } from './user.entity';

@Entity({ name: "follower" })
export class Follower {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne(() => User)
    user: User; //followee

    @ManyToOne(() => User)
    follower: User;

    @CreateDateColumn({ default: () => "now()" })
    createdAt: Date;

    @UpdateDateColumn({ nullable: true })
    updatedAt: Date;
}
