export class PathImage {
    public imagePath : string;
    public desc : string;
    public nom:string;

    constructor(imagePath : string,desc : string,nom:string){
        this.imagePath = imagePath;
        this.desc = desc;
        this.nom = nom;
    }
}