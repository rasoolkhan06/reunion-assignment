import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Index,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity({ name: "user" })
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Index({ unique: true })
    @Column("varchar", { length: 225, nullable: false })
    email: string;

    @Column("varchar", { length: 225, nullable: true, select: false })
    hash: string;

    @Column("varchar", { length: 225, nullable: true, select: false })
    name: string;

    @CreateDateColumn({ default: () => "now()" })
    createdAt: Date;

    @UpdateDateColumn({ nullable: true })
    updatedAt: Date;

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.hash);
    }

    constructor(email: string, password: string, name: string) {
        this.email = email;
        this.hash = password;
        this.name = name;
    }
}
