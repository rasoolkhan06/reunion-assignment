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

    hashPassword() {
        this.hash = bcrypt.hashSync(this.hash, 12);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.hash);
    }
}
