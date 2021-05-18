import {Module} from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserEntity } from './user.entity';
import { UsersService } from './user.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([UserEntity])
    ],
    controllers:[UserController],
    providers:[UsersService],
})
export class UserModule{}
