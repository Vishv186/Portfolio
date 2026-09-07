import type { SkillsByCategory } from '../types/skills.types';

export const skillsByCat: SkillsByCategory[] = [
    {
        category: 'Languages',
        list: [
            {
                name: 'JavaScript',
                level: 'core',
            },
            {
                name: 'TypeScript',
                level: 'core',
            },
            {
                name: 'HTML',
                level: 'core',
            },
            {
                name: 'CSS',
                level: 'core',
            },
            {
                name: 'Java',
                level: 'core',
            },
        ],
    },
    {
        category: 'Frontend',
        list: [
            {
                name: 'React',
                level: 'core',
            },
            {
                name: 'Next.js',
                level: 'proficient',
            },
            {
                name: 'Tailwind CSS',
                level: 'core',
            },
        ],
    },
    {
        category: 'Backend',
        list: [
            {
                name: 'SpringBoot',
                level: 'core',
            },
            {
                name: 'Express',
                level: 'proficient',
            },
            {
                name: 'REST APIs',
                level: 'core',
            },
        ],
    },
    {
        category: 'Databases',
        list: [
            {
                name: 'MySQL',
                level: 'core',
            },
            {
                name: 'MongoDB',
                level: 'familiar',
            },
            {
                name: 'Mongoose',
                level: 'familiar',
            },
        ],
    },
];
