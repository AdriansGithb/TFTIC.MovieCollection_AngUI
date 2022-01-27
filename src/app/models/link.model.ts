export class Link{
    public title : string;
    public url? : string;
    public children? : Link[];

    constructor(title : string, url? : string, children? : Link[]){
        this.title = title;
        this.url = url;
        this.children = children;
    }
}