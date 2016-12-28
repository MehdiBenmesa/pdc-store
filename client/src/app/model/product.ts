export abstract class Product {
  constructor(
    public id : string,
    public name : string,
    public price : number,
    public image : string,
    public description : string,
    public file : string
  ){}
}
