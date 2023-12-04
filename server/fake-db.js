const Product = require('./model/products')

class FakeDb {

  constructor() {
    this.products = [
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heading1: 'サンプルテキスト',
        heading2: 'サンプルテキスト',
        heading3: 'サンプルテキスト',
        headingtext1:'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
        headingtext2: 'これはサンプルですサンプルですサンプルです',
        headingtext3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heading1: 'サンプルテキスト',
        heading2: 'サンプルテキスト',
        heading3: 'サンプルテキスト',
        headingtext1:'サンプルテキストサンプルテキスト',
        headingtext2: 'これはサンプルですサンプルですサンプルです',
        headingtext3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Standard',
        price: 299,
        description: 'これはPhone Standardのdescriptionです',
        heading1: 'サンプルテキスト',
        heading2: 'サンプルテキスト',
        heading3: 'サンプルテキスト',
        headingtext1:'サンプルテキストサンプルテキスト',
        headingtext2: 'これはサンプルですサンプルですサンプルです',
        headingtext3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Spesial',
        price: 9999,
        description: 'A great phone with one of the best cameras',
        heading1: 'サンプルテキスト',
        heading2: 'サンプルテキスト',
        heading3: 'サンプルテキスト',
        headingtext1:'サンプルテキストサンプルテキスト',
        headingtext2: 'これはサンプルですサンプルですサンプルです',
        headingtext3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        
      },
    ];
  }
  //initDb()を呼び出すことで、cleanしてから、pushする
  async initDb() {
    await this.cleanDb() 
      this.pushProductsToDb()
  }

  async cleanDb() {
    //await 処理が終わるまで待つ　空を引き渡すことで、データを初期化する
    await Product.deleteMany({});
  }

  pushProductsToDb() {
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product)
        newProduct.save();
      }
    )
  }
  seeDb() {
    this.pushProductsToDb();
  }
}

module.exports = FakeDb;