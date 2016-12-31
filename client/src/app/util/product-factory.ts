import { Product } from './../model/product';
import { VideoProduct } from './../model/video-product';
import { AudioProduct } from './../model/audio-product';
import { DocumentProdcut } from './../model/document-prodcut';

export class ProductFactory {

   public static createProduct(p): Product{
       switch(p.type){
          case 'audio' : return new AudioProduct(p._id, p.name, p.price, p.image, p.description, p.file);
          case 'video' : return new VideoProduct(p._id, p.name, p.price, p.image, p.description, p.file);
          case 'document' :
          case 'book': return new DocumentProdcut(p._id, p.name, p.price, p.image, p.description, p.file);
          default : return null;
       }
   }

   public static createProducts(productsJson): Product[] {
     let products : Product[] = [];
     for(let i = 0, len = productsJson.length ; i < len; i++){
        products.push(this.createProduct(productsJson[i]));
     }
     return products;
   }
}
