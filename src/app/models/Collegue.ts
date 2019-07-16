export class Collegue{
    constructor (
        public lastName:string,
        public firstName:string,
        public email:string,
        public birthDate:Date,
        public pictureUrl?:string,
        public matricule?:string
    ) {

    }
}