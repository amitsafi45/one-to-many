export default class ErrorMsg extends Error{
    private status:number=0
    get statuscode():number{
        return this.status
    }
    set statuscode(code:number){
        this.status=code
    }
}
