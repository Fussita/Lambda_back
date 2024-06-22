import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class OdmNotificationAddressEntity extends Document {
  @Prop({ required: true, unique: true })
  token: string;

  @Prop({required: true})  
  user_id: string;

}

export const NotificationAddressSchema = SchemaFactory.createForClass(OdmNotificationAddressEntity);