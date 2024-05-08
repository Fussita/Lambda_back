import { IApplicationService } from "src/common/Application/application-services/application-service.interface";
import { Category } from "src/categories/domain/categories";
import { Result } from "src/common/Application/result-handler/Result";
import { ICourseRepository } from "src/course/domain/repositories/course-repository.interface";
import { IBlogRepository } from "src/blog/domain/repositories/blog-repository.interface";
import { Course } from "src/course/domain/course";
import { Blog } from "src/blog/domain/blog";
import { SearchContentByCategoryServiceEntryDto } from "../Dto/param/search-content-by-category-service-entry.dto"
import { SearchContentByCategoryServiceResponseDto } from "../Dto/responses/search-content-by-category-service-response.dto"

export class SearchContentByCategoryApplicationService implements IApplicationService<SearchContentByCategoryServiceEntryDto, SearchContentByCategoryServiceResponseDto> {
    
    private readonly courseRepository: ICourseRepository;
    private readonly blogRepository: IBlogRepository;

    constructor(courseRepository: ICourseRepository, blogRepository: IBlogRepository) {
        this.courseRepository = courseRepository;
        this.blogRepository = blogRepository;
    }
    
    async execute(data: SearchContentByCategoryServiceEntryDto): Promise<Result<SearchContentByCategoryServiceResponseDto>> {
        const { categoryId, pagination } = data;
        const { offset = 0, limit = 10 } = pagination;
        
        const resultCourses = await this.courseRepository.findCoursesByCategory(categoryId, { offset, limit });
        if (!resultCourses.isSuccess()) {
            if (resultCourses.StatusCode != 404) {
                return Result.fail<SearchContentByCategoryServiceResponseDto>(resultCourses.Error, resultCourses.StatusCode, resultCourses.Message);
            }
        }
        const resultBlogs = await this.blogRepository.findBlogsByCategory(categoryId, { offset, limit });
        if (!resultBlogs.isSuccess()) {
            if (resultBlogs.StatusCode != 404) {
                return Result.fail<SearchContentByCategoryServiceResponseDto>(resultBlogs.Error, resultBlogs.StatusCode, resultBlogs.Message);
            }
        }


        return Result.success({ courses: resultCourses.Value, blogs: resultBlogs.Value }, 200);
    }

    get name(): string {
        return this.constructor.name;
    }
}