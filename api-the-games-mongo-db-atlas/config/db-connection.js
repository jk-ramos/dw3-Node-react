// Importando o mongoose
import mongoose from "mongoose";

// usuário e senha do bd
const dbUser = "jkramos";
const dbPassword = "jusHBi7e1WQRp8OJ";
const connect = () => {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.nzlbj.mongodb.net/api-thegames?retryWrites=true&w=majority&appName=Cluster0`
  );
  const connection = mongoose.connection;
  connection.on("error", () => {
    console.log("Erro ao conectar com o mongoDB.");
  });
  connection.on("open", () => {
    console.log("Conectado ao mongoDB com sucesso!");
  });
};
connect();
export default mongoose;