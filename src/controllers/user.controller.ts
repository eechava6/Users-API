import { Body, Get, HttpCode, JsonController, Post } from "routing-controllers";
import UserRepository from "../repositories/user.repository";

@JsonController("/user")
class UserController {
  private readonly userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }

  @HttpCode(201)
  @Post("/")
  async createUser(
    @Body() user: any // ToDo create user validator
  ) {
    return this.userRepository.createNewUser(user);
  }
}

export default UserController;
