const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
const FakeDb = require('./fake-db')
const productRoutes = require('./routes/products')

mongoose.Promise = global.Promise;

// MongoDBに接続 キーは、公開しないように、DB_URIに格納しておき、呼び出すようにする
mongoose.connect(config.DB_URI)

  .then(() => {
    const fakeDb = new FakeDb()
    fakeDb.initDb()
  })

  .then(() => {
    console.log('MongoDBに接続しました');
  })

  .catch((err) => {
    console.error('MongoDBへの接続に失敗しました', err);
  });

// 接続が成功した場合のイベント
mongoose.connection.on('connected', () => {
  console.log('MongoDBの接続に成功しました');
});

// 接続が失敗した場合のイベント
mongoose.connection.on('error', (err) => {
  console.error('MongoDBへの接続に失敗しました', err);
});

// 接続が切断された場合のイベント
mongoose.connection.on('disconnected', () => {
  console.log('MongoDBとの接続が切断されました');
});

// アプリケーション終了時にMongoDBとの接続を閉じる
process.on('SIGINT', () => {
  mongoose.connection.close();
    console.log('アプリケーションを終了します');
    process.exit(0);
});

const app = express()
//ルーティングの設定を別ファイルにして、呼び出す
app.use('/api/v1/products', productRoutes)

const PORT = process.env.Port || '3001'

app.listen(PORT, function() {
  console.log('I am running!');
})
