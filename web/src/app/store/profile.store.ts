import { create } from 'zustand';

interface Profile {
  profileName: string;
  details: string;
  reviewUrl: string;
  youtubeUrl: string;
  tiktokUrl: string;
  phone: string;
  email: string;
  website: string;
  photos: string[];
}

interface ProfileState {
  profile: Profile;
  setProfile: (profile: Partial<Profile>) => void;
  clearProfile: () => void;
  initProfile: (profile: Profile) => void;
  updateField: (field: keyof Profile, value: any) => void;
  getProfile: () => Profile;
}

export const useProfileStore = create<ProfileState>((set, get) => ({
  profile: {
    profileName: '',
    details: '',
    reviewUrl: '',
    youtubeUrl: '',
    tiktokUrl: '',
    phone: '',
    email: '',
    website: '',
    photos: [],
  },
  setProfile: (profile) => set((state) => ({
    profile: { ...state.profile, ...profile },
  })),
  getProfile: () => get().profile,
  clearProfile: () => set({
    profile: {
      profileName: '',
      details: '',
      reviewUrl: '',
      youtubeUrl: '',
      tiktokUrl: '',
      phone: '',
      email: '',
      website: '',
      photos: [],
    },
  }),
  initProfile: (profile) => set({
    profile: { ...profile },
  }),
  updateField: (field, value) => set((state) => ({
    profile: { ...state.profile, [field]: value },
  })),
}));