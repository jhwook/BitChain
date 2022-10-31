import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateAccountInput } from './dtos/create-account.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => Boolean)
  hi() {
    return true;
  }

  @Mutation((returns) => Boolean)
  async createAccount(@Args('input') createAccountInput: CreateAccountInput) {
    return this.userService.createAccount(createAccountInput);
  }
}
