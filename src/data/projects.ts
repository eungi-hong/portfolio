export type Project = {
  title: string
  role: string
  summary: string
  imageUrl: string
  stack: string[]
  links?: {
    label: string
    url: string
  }[]
}

export const projects: Project[] = [
  {
    title: 'Binu (Orbital)',
    role: 'Co-Founder & Software Engineer',
    summary:
      'Binu is a social media platform built with a mission to normalize stigma-free discussions around feminine health on campus, backed by a Swift + Firebase architecture. Our flagship feature is the emergency product sharing function, built with Core Bluetooth, which enables women in need of emergency products, such as pads, tampons, and contraceptives, to request help from other women nearby. Binu also supports a forum for discussing feminine health, with ML-driven sentiment tagging, and more!',
    imageUrl:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    stack: ['Swift', 'iOS', 'Firebase', 'BLE'],
    links: [
      {
        label: 'Mobile App Prototype',
        url: 'https://tinyurl.com/binumobileapp',
      },
      {
        label: 'Pitch Deck',
        url: 'https://drive.google.com/file/d/1mAj32ZryXMc9RElFv_5V5NfYUEd-5Jai/view?usp=sharing',
      },
      {
        label: 'User Survey',
        url: 'https://tinyurl.com/BinuUserSurvey',
      },
    ],
  },
  {
    title: 'Pillpal - AI-Driven Pill Verification System',
    role: 'Software Engineer',
    summary:
      'Pillpal is an AI-driven pill verification system addressing medication non-adherence among elderly polypharmacy patients. The MVP was implemented using python-based software with Pytesseract library and YOLO Object Detection, and Raspberry Pi 4-based hardware.',
    imageUrl:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    stack: ['Python', 'Pytesseract', 'YOLO', 'Computer Vision'],
    links: [
      {
        label: 'Hardware Demo Video',
        url: 'https://tinyurl.com/hong-eungi-PILLPAL',
      },
      {
        label: 'Pitch Deck',
        url: 'https://drive.google.com/file/d/1i6yqfNDGb-n3x0LJMlccogXbT_d7wjGL/view?usp=sharing',
      },
    ],
  },
  {
    title: 'NTU Research Program Junior',
    role: 'Researcher',
    summary:
      'Adapted and finetuned an image classification model using mosquito datasets, mentored by NTU professors and earning Bronze at SSEF with findings published on Springer Nature.',
    imageUrl:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    stack: ['Python', 'Model Training', 'Image Classification', 'Research'],
    links: [
      {
        label: 'Publication',
        url: 'https://link.springer.com/chapter/10.1007/978-981-19-7222-5_16?',
      },
    ],
  },
]


