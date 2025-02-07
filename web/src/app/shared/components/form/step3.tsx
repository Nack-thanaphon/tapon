import React, { ChangeEvent } from 'react';
import { useProfileStore } from '@/app/store/profile.store';
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';

const Step3: React.FC = () => {
    const { profile, updateField } = useProfileStore((state) => state);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        updateField(name as keyof typeof profile, value);
    };

    return (
        <div className='space-y-4'>
            <label>Phone:</label>
            <Input name="phone" value={profile.phone} onChange={handleChange} />

            <label>Email:</label>
            <Input name="email" value={profile.email} onChange={handleChange} />

            <label>Website:</label>
            <Input name="website" value={profile.website} onChange={handleChange} />
        </div>
    );
};

export default Step3;