
import { Interview, SoundEffect, VideoClip, BackgroundAsset } from './types';

export const MOCK_INTERVIEWS: Interview[] = [
  // ... existing mock interviews ...
  {
    id: 'costco-article-1',
    founderName: 'Samuel Mathew',
    author: 'Samuel Mathew',
    readTime: '4 min read',
    companyName: 'Costco Wholesale',
    position: 'Business Analyst',
    email: 'samuel@business.com',
    title: 'வாடிக்கையாளர்கள் நம்பிக்கை மூலம் பில்லியன் டாலர் வருவாய் ஈட்டிய ‘Costco’ சாம்ராஜ்யத்தின் வெற்றி கதை!',
    description: 'Costco வெறும் ஒரு சில்லறை வர்த்தகக் கிடங்கு அல்ல; அது நம்பிக்கை, நிலைப்பாடு மற்றும் மதிப்பு ஆகியவற்றின் வலுவான கலவையில் செழித்து வளரும் ஒரு தலைசிறந்த வணிக மாதிரி.',
    longContent: `...`,
    thumbnail: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
    category: 'article',
    tags: ['Success Story', 'Business Story', 'Costco Brand Story', 'Success Stories', 'Wholesale Store', 'வெற்றிக்கதை', 'பிசினஸ் கதை', 'Household Store', 'Billion Dollar', 'Wholesale Brand'],
    format: 'horizontal',
    status: 'recorded',
    views: 125400,
    date: 'Dec 17, 2025',
    displayOnHome: true,
  },
  {
    id: 'article-2',
    founderName: 'Arul Kumar',
    author: 'Arul Kumar',
    readTime: '6 min read',
    companyName: 'FinTech TN',
    position: 'CEO',
    email: 'arul@fintech.tn',
    title: 'தமிழ்நாடு அரசு அறிவித்துள்ள "சுற்றுலா புதுமை ஹேக்கத்தான் 2025" - விண்ணப்பிப்பது எப்படி?',
    description: 'சுற்றுலாத் துறையில் புதிய தொழில்நுட்பங்களை புகுத்துவதற்காக தமிழ்நாடு சுற்றுலாத் துறை இந்த மாபெரும் போட்டியை அறிவித்துள்ளது.',
    longContent: `தமிழ்நாடு அரசு சுற்றுலாத் துறையில் டிஜிட்டல் தொழில்நுட்பங்களை மேம்படுத்தவும், புத்தாக்க சிந்தனைகளை ஊக்குவிக்கவும் 'சுற்றுலா புதுமை ஹேக்கத்தான் 2025' என்ற புதிய முன்னெடுப்பை தொடங்கியுள்ளது. இதன் மூலம் தமிழகத்தின் சுற்றுலாத் தளம் உலகத் தரத்திற்கு உயர்த்தப்படும் என எதிர்பார்க்கப்படுகிறது.`,
    thumbnail: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400&auto=format&fit=crop',
    category: 'article',
    tags: ['Govt Scheme', 'Startup TN', 'Tourism'],
    format: 'horizontal',
    status: 'recorded',
    views: 32100,
    date: 'Dec 16, 2025',
    displayOnHome: true,
  },
  {
    id: 'feat-1',
    founderName: 'Aditi Anand',
    companyName: 'Neelam Studios',
    position: 'Co-Founder',
    email: 'aditi@neelam.com',
    title: 'Directors needed to tell true, deep stories - Neelam Studios',
    description: 'Aditi Anand discusses the new wave of narrative filmmaking in Tamil cinema and the hunt for raw talent.',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop',
    category: 'featured',
    format: 'horizontal',
    status: 'recorded',
    views: 85400,
    date: 'Dec 17, 2025',
    displayOnHome: true,
  },
  {
    id: 'news-1',
    founderName: 'Cyber Simman',
    companyName: 'Cyber Defense',
    position: 'Analyst',
    email: 'simman@cyber.com',
    title: 'How to recover from ₹14 Crore fraud - A case study',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop',
    category: 'news',
    format: 'horizontal',
    status: 'recorded',
    views: 12000,
    date: 'Dec 17, 2025',
    displayOnHome: true,
  }
];

export const SOUND_EFFECTS: SoundEffect[] = [
  { id: 'applause', label: 'Applause', icon: 'HandMetal', color: 'bg-yellow-500' },
  { id: 'money', label: 'Cha-Ching', icon: 'DollarSign', color: 'bg-green-500' },
  { id: 'laugh', label: 'Laugh', icon: 'Smile', color: 'bg-blue-500' },
  { id: 'drum', label: 'Ba Dum Tss', icon: 'Music', color: 'bg-purple-500' },
];

export const VIDEO_CLIPS: VideoClip[] = [
  { id: 'v1', label: 'Timer 10s', duration: '0:10', thumbnail: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=200&auto=format&fit=crop', url: '', type: 'clip' },
  { id: 'v2', label: 'Timer 30s', duration: '0:30', thumbnail: 'https://images.unsplash.com/photo-1516331138075-f3adc1e149cd?q=80&w=200&auto=format&fit=crop', url: '', type: 'clip' },
  { id: 'v3', label: 'Thank you', duration: '0:15', thumbnail: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=200&auto=format&fit=crop', url: '', type: 'clip' },
  { id: 'v4', label: 'Stream starting...', duration: '0:15', thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=200&auto=format&fit=crop', url: '', type: 'clip' },
  { id: 'v5', label: 'Be Right Back', duration: '0:15', thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=200&auto=format&fit=crop', url: '', type: 'clip' },
];

export const BACKGROUNDS: BackgroundAsset[] = [
  { id: 'bg1', label: 'Blue Waves', thumbnail: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=200&auto=format&fit=crop' },
  { id: 'bg2', label: 'Black Mountains', thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=200&auto=format&fit=crop' },
  { id: 'bg3', label: 'Purple Waves', thumbnail: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=200&auto=format&fit=crop' },
  { id: 'bg4', label: 'Cyan Sky', thumbnail: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=200&auto=format&fit=crop' },
  { id: 'bg5', label: 'Cyan Waves', thumbnail: 'https://images.unsplash.com/photo-1518117641629-aa2f82392a00?q=80&w=200&auto=format&fit=crop' },
  { id: 'bg6', label: 'Blue Pink Gradient', thumbnail: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=200&auto=format&fit=crop' },
];
