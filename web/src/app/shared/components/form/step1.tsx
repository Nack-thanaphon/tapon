import { useProfileStore } from '@/app/store/profile.store';
import React, { ChangeEvent } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from '@/components/ui/textarea';
import { getProfileBySlug } from '../../services/superbase.service';

type Step1Props = {
  error: boolean;
  setError: (error: boolean) => void;
};

const Step1: React.FC<Step1Props> = ({ setError, error }) => {
  const { profile, updateField } = useProfileStore((state) => state);

  const handleChange = async (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateField(name as keyof typeof profile, value);
    const { error } = await getProfileBySlug(name);
    if (error) {
      setError(true);
    } else {
      setError(false);
    }
  };



  return (
    <div className='space-y-4'>
      <label>Profile Name:</label>
      <Input name="profileName" value={profile.profileName} onChange={handleChange} />
      {error && <b>พบร้านในระบบเรียบร้อย</b>}
      <label>Details:</label>
      <Textarea name="details" value={profile.details} onChange={handleChange} />
    </div>
  );
};

export default Step1;