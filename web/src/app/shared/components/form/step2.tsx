import React, { ChangeEvent } from 'react';
import { useProfileStore } from '@/app/store/profile.store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Step2: React.FC = () => {
    const { profile, updateField } = useProfileStore((state) => state);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        updateField(name as keyof typeof profile, value);
    };

    return (
        <div className='space-y-4'>
            <div>
                <label>Review URL:</label>
                <Input name="reviewUrl" value={profile.reviewUrl} onChange={handleChange} />
            </div>

            <div>
                <label>YouTube URL:</label>
                <Input name="youtubeUrl" value={profile.youtubeUrl} onChange={handleChange} />
            </div>

            <div>
                <label>TikTok URL:</label>
                <Input name="tiktokUrl" value={profile.tiktokUrl} onChange={handleChange} />
            </div>
        </div>
    );
};

export default Step2;