import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {v4 as uuidv4} from 'uuid';

@Schema({timestamps: true})
export class Order extends Document {
    @Prop({type: String, unique: true, default: uuidv4})
    id: string;

    @Prop({type: String, required: true, ref: 'User'})
    user_id: string;

    @Prop({type: String, required: true, ref: 'Address'})
    address_id: string;

    @Prop({type: String, required: true, ref: 'Device'})
    device_id: string;

    @Prop({ type: String, required: true })
    service_type: string;

    @Prop({ type: String, required: false })
    service_details: string;

    @Prop({type: String, required: false, ref: 'DeviceCondition'})
    condition_id: string;

    @Prop({ type: Date, required: true })
    time_slot: Date;

    @Prop({ type: Number, required: false })
    service_duration: number;  // in minutes

    @Prop({ type: String, ref: 'Technician', required: false })
    technician_id: string;

    @Prop({ type: String, ref: 'Store', required: false })
    store_id: string;

    @Prop({ type: String, required: true, enum: ['pending', 'confirmed', 'in-progress', 'completed', 'cancelled'], default: 'pending' })
    status: string;

    @Prop({ type: String, required: true, enum: ['unpaid', 'paid', 'refunded'], default: 'unpaid' })
    payment_status: string;

    @Prop({ type: String, required: true, enum: ['on-site', 'online'] })
    payment_mode: string;

    @Prop({ type: String, required: false })
    payment_method: string;

    @Prop({ type: [String], required: false })
    coupons_code: string[];

    @Prop({type: Number, required: true})
    visiting_charge: number;

    @Prop({type: Number, required: false})
    service_charge: number;

    @Prop({
        type: [
            {
                component_name: {type: String, required: true},
                cost: {type: Number, required: true}
            }
        ],
        required: false
    })
    components_change: { component_name: string; cost: number }[];

    @Prop({ type: Number, required: true })
    total_charges: number;

    @Prop({type: Number, required: false})
    discount: number;

    @Prop({type: Number, required: false})
    total_gst: number;

    @Prop({type: Number, required: true})
    final_amount: number;

    @Prop({ type: String, required: false })
    notes: string;

    @Prop({ type: String, required: false })
    created_by: string;

    @Prop({ type: String, required: false })
    updated_by: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

OrderSchema.index({id: 1}, {unique: true});