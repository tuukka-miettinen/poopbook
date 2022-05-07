import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import DateTimePicker from 'react-datetime-picker';

export default function PoopForm() {
    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            date: new Date()
        }
    });

    const onSubmit = data => {
        console.log(data);
        
    } 

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Log new poop</h1>
            <Controller
                name="date"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <DateTimePicker
                    onChange={(x) => console.log(x)}
                    value={field}
                    {...field}
                />}
            />
            <br />
            <input type="submit" />
        </form>
    );
}