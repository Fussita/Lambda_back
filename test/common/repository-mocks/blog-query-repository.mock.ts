import { OdmBlogCommentEntity } from "src/blog/infraestructure/entities/odm-entities/odm-blog-comment.entity"
import { OdmBlogEntity } from "src/blog/infraestructure/entities/odm-entities/odm-blog.entity"
import { BlogQueryRepository } from "src/blog/infraestructure/repositories/blog-query-repository.interface"
import { Result } from "src/common/Domain/result-handler/Result"
import { PaginationDto } from "src/common/Infraestructure/dto/entry/pagination.dto"



export class BlogQueryRepositoryMock implements BlogQueryRepository{
    
    private readonly blogs: OdmBlogEntity[] = []
    private readonly blogComments: OdmBlogCommentEntity[] = []
    
    async saveBlog ( blog: OdmBlogEntity ): Promise<void>
    {
        this.blogs.push( blog )   
    }
    async createBlogComment ( blogComment: OdmBlogCommentEntity ): Promise<void>
    {
        this.blogComments.push( blogComment )
    }
    findBlogsByCategory ( categoryId: string, pagination: PaginationDto ): Promise<Result<OdmBlogEntity[]>>
    {
        throw new Error( "Method not implemented." )
    }
    findBlogsByTrainer ( trainerId: string, pagination: PaginationDto ): Promise<Result<OdmBlogEntity[]>>
    {
        throw new Error( "Method not implemented." )
    }
    findBlogComments ( blogId: string, pagination: PaginationDto ): Promise<Result<OdmBlogCommentEntity[]>>
    {
        throw new Error( "Method not implemented." )
    }
    findBlogCommentCount ( blogId: string ): Promise<Result<number>>
    {
        throw new Error( "Method not implemented." )
    }
    findBlogById ( id: string ): Promise<Result<OdmBlogEntity>>
    {
        throw new Error( "Method not implemented." )
    }
    findAllBlogs ( pagination: PaginationDto ): Promise<Result<OdmBlogEntity[]>>
    {
        throw new Error( "Method not implemented." )
    }
    findBlogsByTagsAndTitle ( searchTags: string[], title: string, pagination: PaginationDto ): Promise<Result<OdmBlogEntity[]>>
    {
        throw new Error( "Method not implemented." )
    }
    findBlogCountByTrainer ( trainerId: string ): Promise<Result<number>>
    {
        throw new Error( "Method not implemented." )
    }
    findBlogCountByCategory ( categoryId: string ): Promise<Result<number>>
    {
        throw new Error( "Method not implemented." )
    }
    findBlogTags (): Promise<Result<string[]>>
    {
        throw new Error( "Method not implemented." )
    }

}