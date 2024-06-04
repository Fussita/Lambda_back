import { IApplicationService } from "src/common/Application/application-services/application-service.interface";
import { Result } from "src/common/Application/result-handler/Result";
import { IEncryptor } from "../interface/encryptor.interface";
import { ChangePasswordEntryApplicationDto } from "../dto/change-password-entry.application.dto";
import { IInfraUserRepository } from "src/user/infraestructure/repositories/interfaces/orm-infra-user-repository.interface";

export class ChangePasswordUserApplicationService implements IApplicationService<ChangePasswordEntryApplicationDto, any> {
    
    private readonly userRepository: IInfraUserRepository
    private readonly encryptor: IEncryptor; 

    constructor(
        userRepository: IInfraUserRepository,
        encryptor: IEncryptor
    ){
        this.userRepository = userRepository
        this.encryptor = encryptor
    }
    
    async execute(updateDto: ChangePasswordEntryApplicationDto): Promise<Result<any>> {
        const result = await this.userRepository.updateUserPassword(
            updateDto.email,
            await this.encryptor.hashPassword( updateDto.password )
        )
        if ( !result.isSuccess() ) return Result.fail( new Error('Error al cambiar la contraseña'), 500, 'Error al cambiar la contraseña' )
        const answer = {
            email: updateDto.email,
            newPassword: updateDto.password
        }
        return Result.success(answer, 200)
    }
   
    get name(): string { return this.constructor.name }
}