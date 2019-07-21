import inter from '@/mocks/languageInterface'

const lang = localStorage.getItem('lang')
const dictionary = label => inter[lang][label]

export const formMock = [
  {
    name: 'email',
    label: dictionary('emailLabel'),
    placeholder: 'some@incodewetrust.ru',
    type: 'Input',
    position: 'md-12'
  },
  {
    name: 'phone',
    label: dictionary('phoneLabel'),
    placeholder: '+7 (777) 777-77-77',
    type: 'Input',
    position: 'md-12'
  },
  {
    name: 'fullname',
    label: dictionary('fullNameLabel'),
    placeholder: dictionary('namePlaceholder'),
    type: 'Input',
    position: 'md-12'
  },
  {
    name: 'story',
    label: dictionary('descriptionLabel'),
    placeholder: dictionary('descriptionPlaceholder'),
    type: 'Textarea',
    position: 'md-12'
  }
]
