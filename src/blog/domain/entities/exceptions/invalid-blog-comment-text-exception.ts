import { DomainException } from "src/common/Domain/domain-exception/domain-exception"



export class InvalidBlogCommentTextException extends DomainException{
    constructor(){super("El texto del comentario tiene que ser válido")}
}