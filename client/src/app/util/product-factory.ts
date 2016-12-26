import { Response } from '@angular/http';
import { Product } from './../model.product'
export class ProductFactory {
  public static createProduct(res: Response): Product{
    return new Product();
  }
}
