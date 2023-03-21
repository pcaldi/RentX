import { tableSchema } from "@nozbe/watermelondb";

// Model: Representação do objeto que trafega entre banco e nossa aplicação.
// Schema: Representação da tabela de fato no banco de dados,
//Definição da tabela em si.

const userSchema = tableSchema({
  name: "users",
  columns: [
    {
      name: "user_id",
      type: "string",
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "email",
      type: "string",
    },
    {
      name: "driver_license",
      type: "string",
    },
    {
      name: "avatar",
      type: "string",
    },
    {
      name: "token",
      type: "string",
    },
  ],
});

export { userSchema };
