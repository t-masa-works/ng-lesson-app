const express = require('express')
const router = express.Router()
const Product = require('../model/products')


router.get('', function(req, res) {
  // Product.find()の非同期処理をPromiseを使って扱う
  Product.find({})
    .then(foundProducts => {
      // データベースから取得したデータを含むレスポンスを送信
      res.json(foundProducts);
    })
    .catch(err => {
      // エラーがあればエラーレスポンスを送信
      res.status(500).json({ error: 'Internal Server Error' });
    });
  });
  
  //DB上のIDで単体検索
  router.get('/:productId', function(req, res) {
    const productId = req.params.productId
    // Product.find()の非同期処理をPromiseを使って扱う
    Product.findById(productId)
      .then(foundProduct => {
        // データベースから取得したデータを含むレスポンスを送信
        res.json(foundProduct);
      })
      .catch(err => {
        // エラーがあればエラーレスポンスを送信
        res.status(500).json({ error: 'Internal Server Error' });
      });
    });

module.exports = router