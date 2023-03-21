import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

// Model: Representação do objeto que trafega entre banco e nossa aplicação.
//Schema: Representação da tabela de fato no banco de dados,
//Definição da tabela em si.

class User extends Model {
  static table = "users";
  @field("user_id")
  user_id: string;

  @field("name")
  name: string;

  @field("email")
  email: string;

  @field("driver_license")
  driver_license: string;

  @field("avatar")
  avatar: string;

  @field("token")
  token: string;
}

export { User };
