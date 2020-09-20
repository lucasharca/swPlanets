import mongoose from 'mongoose';

let db: mongoose.Connection;

export const connect = () => {
  const uri = 'mongodb://mongo:27017/starwars'

  mongoose.connect(uri, {
    useNewUrlParser: true
  });

  db = mongoose.connection;
  db.once("open", async () => {
    console.log('connected to database');
  })

  db.on("error", () => {
    console.log('error connecting to database');
  })
}

export const disconnect = () => {
  mongoose.disconnect();
}