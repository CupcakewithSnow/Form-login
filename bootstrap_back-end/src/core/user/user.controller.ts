import { Controller, Get, Param } from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { UsersService } from "./user.service";

@Controller('/rest/users')
export class UserController{
    constructor(private readonly UsersService:UsersService){}
    @Get()
    getAllUsers():Promise<UserEntity[]>{
        return this.UsersService.findAll();
    }
    @Get(':id')
    getOneUser(@Param('id') id:string):Promise<UserEntity>{
        return this.UsersService.findOne(id)
    }
}