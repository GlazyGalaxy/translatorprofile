import { AppContent, ExperienceItem, PortfolioItem, EducationItem } from './types';

export const CONTENT: AppContent = {
  nav: {
    home: { en: 'Profile', zh: '个人主页' },
    portfolio: { en: 'Portfolio', zh: '作品展示' },
  },
  hero: {
    title: { en: 'Li Fangyuan', zh: '李芳源' },
    subtitle: {
      en: 'Master of Art in Translation and Interpretation (Candidate)',
      zh: '翻译与口译硕士候选人 / CATTI 二级口笔译',
    },
    location: {
      en: 'Monterey, California / Guangzhou, China',
      zh: '蒙特雷，加州 / 广州，中国',
    },
    cta: { en: 'View Experience', zh: '查看经历' },
  },
  about: {
    title: { en: 'About Me', zh: '关于我' },
    text: {
      en: "I am a dedicated translator and interpreter with a strong academic background and diverse field experience. Currently pursuing a Master's at the Middlebury Institute of International Studies, I specialize in legal, commercial, and technical translation. With CATTI Level 2 certifications in both interpreting and translation and an IELTS score of 8.0, I am committed to bridging linguistic gaps with precision and professionalism.",
      zh: "我是一名专业的翻译与口译人员，拥有扎实的学术背景和丰富的实战经验。目前就读于蒙特雷国际研究学院（MIIS）。我持有 CATTI 二级口译与笔译证书（雅思 8.0 分），擅长法律、商务及技术领域的翻译。我致力于以精准和专业的语言服务，架起跨文化沟通的桥梁。",
    },
    educationTitle: { en: 'Education', zh: '教育背景' },
    skillsTitle: { en: 'Skills & Certificates', zh: '技能与证书' },
    skills: [
      { en: 'CATTI Level 2 Interpreting & Translation', zh: 'CATTI 二级口译 & 笔译证书' },
      { en: 'IELTS 8.0 (L:8.5 R:8.5 W:7.0 S:7.5)', zh: '雅思 8.0 (听阅 8.5)' },
      { en: 'Native Mandarin & Cantonese', zh: '母语：普通话 & 粤语' },
      { en: 'Proficient English', zh: '英语精通' }
    ]
  },
  experience: {
    title: { en: 'Professional Experience', zh: '专业经历' },
  },
  portfolio: {
    title: { en: 'Selected Works', zh: '精选作品' },
  },
  aiDemo: {
    title: { en: 'AI Translation Demo', zh: 'AI 翻译演示' },
    description: {
      en: 'Powered by Gemini 2.5 Flash, this tool demonstrates high-quality translation.',
      zh: '由 Gemini 2.5 Flash 驱动，展示高质量的翻译效果。'
    },
    placeholder: {
      en: 'Enter text to translate...',
      zh: '请输入要翻译的文本...'
    },
    resultLabel: { en: 'Translation Result', zh: '翻译结果' },
    button: { en: 'Translate', zh: '翻译' },
  },
  footer: {
    contactTitle: { en: 'Contact', zh: '联系方式' },
    copyright: { en: '© 2025 Li Fangyuan.', zh: '© 2025 李芳源.' },
  },
};

export const EDUCATION: EducationItem[] = [
  {
    institution: { en: 'Middlebury Institute of International Studies at Monterey', zh: '蒙特雷国际研究学院' },
    degree: { en: 'Master of Art in Translation and Interpretation', zh: '翻译与口译硕士 (MATI)' },
    period: { en: 'Aug 2025 - June 2027', zh: '2025.08 - 2027.06' },
  },
  {
    institution: { en: 'Guangdong University of Foreign Studies', zh: '广东外语外贸大学' },
    degree: { en: 'Bachelor in Translation and Interpreting (GPA: 3.7/4.0)', zh: '翻译专业学士 (GPA: 3.7/4.0)' },
    period: { en: 'Sept 2021 - June 2025', zh: '2021.09 - 2025.06' },
  },
  {
    institution: { en: 'University of Edinburgh', zh: '爱丁堡大学' },
    degree: { en: 'Exchange Student', zh: '交换生' },
    period: { en: 'Sept 2023 - Dec 2023', zh: '2023.09 - 2023.12' },
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: '1',
    role: { en: 'Interpreter', zh: '口译员' },
    company: { en: '2025 World Athletics Relays, Guangzhou', zh: '2025年世界田联接力赛（广州）' },
    period: { en: 'May 2025', zh: '2025.05' },
    description: {
      en: 'Served as interpreter in the media center assisting communication between the local operation committee and international journalists; coordinated press conferences.',
      zh: '在媒体中心担任口译，协助组委会与国际记者沟通，并协调新闻发布会。',
    },
  },
  {
    id: '2',
    role: { en: 'Translation Intern', zh: '翻译实习生' },
    company: { en: 'Dongguan Municipal Foreign Affairs Bureau', zh: '东莞市外事局' },
    period: { en: 'July 2024 - Aug 2024', zh: '2024.07 - 2024.08' },
    description: {
      en: 'Translated correspondence and notes between the municipal government and sister cities, Consulates General, and FDI enterprises.',
      zh: '翻译市政府与友城、总领事馆及外资企业之间的往来信函与照会。',
    },
  },
  {
    id: '3',
    role: { en: 'Liaison Dept. Intern', zh: '联络部实习生' },
    company: { en: 'The 135th China Import and Export Fair (Canton Fair)', zh: '第135届广交会' },
    period: { en: 'April 2024 - May 2024', zh: '2024.04 - 2024.05' },
    description: {
      en: 'Provided language services to exhibitors and buyers; assisted staff in communication with international buyers.',
      zh: '为参展商和采购商提供语言服务，协助工作人员与国际买家沟通。',
    },
  },
  {
    id: '4',
    role: { en: 'Intern Bilingual News Editor', zh: '实习双语新闻编辑' },
    company: { en: 'Southern Finance Omnimedia Corporation', zh: '南方财经全媒体集团' },
    period: { en: 'March 2024 - July 2024', zh: '2024.03 - 2024.07' },
    description: {
      en: 'Translated and wrote bilingual news briefs and articles. Edited and subtitled bilingual news videos.',
      zh: '翻译并撰写双语新闻简报及文章。编辑并制作双语新闻视频字幕。',
    },
  },
  {
    id: '5',
    role: { en: 'Intern Lawyer Assistant', zh: '律师助理实习生' },
    company: { en: 'China Commercial Law Firm', zh: '华商律师事务所' },
    period: { en: 'Jan 2024 - Feb 2024', zh: '2024.01 - 2024.02' },
    description: {
      en: 'Translated English evidence documents into Chinese and vice versa; assisted lawyer in settling international disputes.',
      zh: '负责中英文证据文件的互译，协助律师处理国际纠纷案件。',
    },
  },
  {
    id: '6',
    role: { en: 'Intern', zh: '实习生' },
    company: { en: 'Shenzhen Lufthansa Technik Co., Ltd.', zh: '深圳汉莎技术有限公司' },
    period: { en: 'July 2023 - Aug 2023', zh: '2023.07 - 2023.08' },
    description: {
      en: 'Translated and organized bilingual engineering documents related to aircraft engineering.',
      zh: '翻译并整理与飞机工程相关的双语工程文件。',
    },
  },
  {
    id: '7',
    role: { en: 'Volunteer', zh: '志愿者' },
    company: { en: 'Foreign Affairs Office of Guangzhou Municipality', zh: '广州市人民政府外事办公室' },
    period: { en: 'March 2023 - July 2023', zh: '2023.03 - 2023.07' },
    description: {
      en: 'Translated and reviewed bilingual epidemic announcements; contributed to corpus building.',
      zh: '翻译并审校双语疫情通告，协助语料库建设。',
    },
  },
  {
    id: '8',
    role: { en: 'Team Member', zh: '成员' },
    company: { en: 'Translation Team of SITS', zh: '高级翻译学院翻译队' },
    period: { en: 'Oct 2021 - Present', zh: '2021.10 - 至今' },
    description: {
      en: 'Provide translation and localization services to the University and affiliated organizations.',
      zh: '为大学及其附属机构提供翻译与本地化服务。',
    },
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'gov-report',
    title: { en: 'Government Report Localization (Mock)', zh: '政府工作报告本地化 (模拟)' },
    category: { en: 'Political / Legal', zh: '政治 / 法律' },
    description: {
      en: 'A full-cycle translation project utilizing Trados Studio to ensure terminology consistency and efficiency. The project focused on accurately conveying political concepts and maintaining the solemn tone of the original text.',
      zh: '一个利用 Trados Studio 确保术语一致性和效率的全周期翻译项目。项目重点在于准确传达政治概念并保持原文的庄重基调。',
    },
    imageUrl: 'https://images.unsplash.com/photo-1575320181282-9afab399332c?auto=format&fit=crop&q=80&w=800',
    translationData: {
      sourceLang: 'Chinese',
      targetLang: 'English',
      sourceText: `过去一年，我国发展历程很不平凡。党的二十届三中全会胜利召开，对进一步全面深化改革、推进中国式现代化作出部署。我们隆重庆祝中华人民共和国成立75周年，极大激发了全国各族人民的爱国热情和奋斗精神。一年来，面对外部压力加大、内部困难增多的复杂严峻形势，在以习近平同志为核心的党中央坚强领导下，全国各族人民砥砺奋进、攻坚克难，经济运行总体平稳、稳中有进，全年经济社会发展主要目标任务顺利完成，高质量发展扎实推进，新质生产力稳步发展，我国经济实力、科技实力、综合国力持续增强，中国式现代化迈出新的坚实步伐，更加坚定了我们在新时代新征程全面建设社会主义现代化国家的决心和信心。`,
      targetText: `The year 2024 was a truly remarkable year in China’s development journey. At its third plenary session, the 20th Central Committee of the Communist Party of China (CPC) set forth plans for further deepening reform comprehensively to advance Chinese modernization. We celebrated the 75th anniversary of the founding of the People’s Republic of China, greatly inspiring patriotism and dedication in the Chinese people of all ethnic groups. Over the past year, in the face of complex and challenging developments marked by mounting external pressures and growing domestic difficulties, we, the Chinese people of all ethnic groups, have overcome difficulties and continued to forge ahead under the strong leadership of the CPC Central Committee with Comrade Xi Jinping at its core. We ensured overall stable performance and steady growth of the economy and accomplished the main goals and tasks for economic and social development in 2024. Solid headway was made in pursuing high-quality development and fostering new quality productive forces. China’s economic strength, scientific and technological capabilities, and composite national strength continued to rise, and solid new strides were made in advancing Chinese modernization. These achievements have filled us with even greater confidence and resolve as we press forward on the new journey to build a modern socialist country in all respects in the new era.`
    }
  },
  {
    id: 'tourism-promo',
    title: { en: 'Glacial Express Promotion', zh: '冰川快车旅游推广' },
    category: { en: 'Tourism / Marketing', zh: '旅游 / 营销' },
    description: {
      en: 'Translation of promotional material for the Glacial Express. The challenge was to transcreate the evocative imagery and relaxed pacing of the original English text into engaging Chinese copy that appeals to potential tourists.',
      zh: '冰川快车宣传材料的翻译。挑战在于将原文中富有画面感和悠闲节奏的英语创造性地翻译为吸引潜在游客的中文文案。',
    },
    imageUrl: 'https://images.unsplash.com/photo-1517330357046-3ab5a5dd42a1?auto=format&fit=crop&q=80&w=800',
    translationData: {
      sourceLang: 'English',
      targetLang: 'Chinese',
      sourceText: `Glacial by name and glacial by pace, the train bills itself as the slowest express in the world – which means plenty of time to take in the views.
With a dark hot chocolate in hand, I step out of the Petit Royal cafe onto Bahnhofstrasse in the Swiss mountain village of Zermatt and make the two-minute walk to the railway station, where a sleek red-and-white train is waiting on the platform. Stamping fresh powder snow off my boots, I squint up at the wonky peak of the Matterhorn, a four-sided pyramid glazed with ice. That the most famous mountain in the Pennine Alps is so sharply outlined against an electric-blue sky bodes well for photo opportunities over the eight-hour journey to the village of St Moritz.`,
      targetText: `名字有冰川，速度也像冰川。冰川快车号称“世界上最慢的快车”，乘客有充足的时间来欣赏沿途美景。
手捧一杯热巧克力，我走出瑞士采尔马特的小皇室咖啡馆，来到这座小山村的车站大街，从这里到火车站只需要步行两分钟。在站台上，有一列红白相间、造型优美的火车等着我们。跺掉靴子上的新雪，我眯着眼抬头看崎岖的马特洪峰，像一座被冰块包裹的金字塔。天空碧蓝如洗，把这座本宁阿尔卑斯山脉的名山勾勒得轮廓分明。看来，未来八小时的旅程很适合拍照。`
    }
  }
];