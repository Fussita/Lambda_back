import { EmailSender } from "src/common/Application/email-sender/email-sender.application"

export class WelcomeSender extends EmailSender {
    constructor() {
        super()
        this.subjectText = 'Welcome!'
        this.textPart = 'Greetings!'
        this.htmlPart = 'be welcome dear <h2>null</h2>'
    }

    public setVariable( variable: string ){
        this.setHtmlPart( 
            `be welcome dear <h2>${variable}</h2>`    
        )
    }

    public sendEmail(emailReceiver: string, nameReceiver: string): void {
        super.sendEmail(emailReceiver, nameReceiver)
    }
}