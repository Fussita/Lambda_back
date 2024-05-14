import * as admin from 'firebase-admin';
import { TokenNotification } from 'src/common/Application/notifier/dto/token-notification.dto';
import { INotifier } from 'src/common/Application/notifier/notifier.application';
import { Result } from 'src/common/Application/result-handler/Result';

export class GoodDayNotifier implements INotifier<string> {
    variable: string = 'none'
    setVariable(variable: string): void { this.variable = variable }
    async sendNotification(data: TokenNotification): Promise<Result<string>> {
        let err = false
        const message = { 
            notification: { title: "Good new Day!", body: 'be Happy, my budy' }, 
            token: data.token
        }
        try { const res = await admin.messaging().send(message)
        } catch(e) { err = true } 
        if ( !err ) return Result.success<string>('mensaje enviado', 200)
        return Result.fail<string>(new Error('error enviando token'), 500, 'error enviando push')
    }
} 