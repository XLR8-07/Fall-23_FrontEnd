import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserCredDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userService.getUserByID(+id);
  }

  @Post('login')
  userLogin(@Body() userCredential: UserCredDTO): any {
    return this.userService.userAuth(userCredential);
  }
}
