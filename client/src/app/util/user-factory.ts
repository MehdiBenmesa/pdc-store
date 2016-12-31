import { User } from "../model/user";
import { PremuimUser } from "../model/premuim-user";
export class UserFactory {
  public static createUser(user):User{
    switch(user.type){
      case 'simple' : return new User(user._id, user.username, user.email);
      case 'premuim' : return new PremuimUser(user._id, user.username, user.email);
      default : return null;
    }
  }
}
