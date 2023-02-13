// const address = {
//   de: {
//     items: ['Am Südhang 11', '53809 Ruppichteroth', 'Deutschland'],
//   },
//   en: {
//     items: ['Am Südhang 11', '53809 Ruppichteroth', 'Germany'],
//   },
// } satisfies I18nRecord;

// const profileData = {
//   address,
// } satisfies Record<string, I18nRecord>

const profileData = {
  addressItems: ['Am Südhang 11', '53809 Ruppichteroth', 'Germany'],
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
    addressItems: ['Am Südhang 11', '53809 Ruppichteroth', 'Deutschland'],
    phone: {
      ...profileData.phone,
      title: 'Mobile:',
    },
    mail: {
      ...profileData.mail,
      title: 'E-Mail:',
    },
    birthday: {
      ...profileData.birthday,
      title: 'Geboren am:',
    },
    languages: {
      title: 'Sprachen:',
      items: ['Deutsch (Muttersprache)', 'Englisch (Fließend)', 'Französisch (Grundkenntnisse)'],
    },
  },
};

export default profileDataConfig;
