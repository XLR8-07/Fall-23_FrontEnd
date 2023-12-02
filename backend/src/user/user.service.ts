import { Injectable } from '@nestjs/common';
import { UserCredDTO } from './dto/user.dto';
import { Repository } from 'typeorm';
import { User } from 'models/users.model';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  private readonly email: string = 'abc@gmail.com';
  private readonly password: string = 'abc1234';

  constructor(@InjectRepository(User)private userRepository: Repository<User>){}

  userAuth(userCredential: UserCredDTO): boolean {
    if (
      userCredential.email === this.email &&
      userCredential.password === this.password
    ) {
      return true;
    } else {
      return false;
    }
  }

  async getUserByID(id: number)
  {
    return this.userRepository.find({where: {id}});
  }
}
