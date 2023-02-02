const profileData = {
  address: {
    title: 'Living in:',
    items: ['Am Südhang 11', '53809 Ruppichteroth', 'Germany'],
  },
  phone: {
    title: 'Phone:',
    items: ['+49 151 68836502'],
  },
  mail: {
    title: 'Mail:',
    items: ['mail@patrick-soellner.de'],
  },
  birthday: {
    title: 'Date of birth:',
    items: ['18.11.1995'],
  },
  languages: {
    title: 'Languages:',
    items: ['German (Native)', 'English (Fluid)', 'French (Basics)'],
  },
};

const profileDataConfig = {
  en: profileData,
  de: {
    ...profileData,
    address: {
      title: 'Anschrift:',
      items: ['Am Südhang 11', '53809 Ruppichteroth', 'Deutschland'],
    },
  },
};

export default profileDataConfig;
