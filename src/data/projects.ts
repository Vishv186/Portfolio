import type { ProjectHighlighted, ProjectOther } from '../types/projects.types';

export const projectsHighlighted: ProjectHighlighted[] = [
    {
        id: 'HireHub',
        title: 'HireHub',
        description:
            'A Job bidding platform connecting job seekers and Recruiters',
        image: 'HireHub',
        tech: [
            'Javascript',
            'React.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Mongoose',
            'HTML and CSS',
            'npm',
            'Nodemon',
        ],
        github: 'https://github.com/Vishv186/HireHub',
        site: '',
        tag: 'SaaS',
    },

    {
        id: 'Blockchain-Based Crowdfunding Platform',
        title: 'Blockchain-Based Crowdfunding Platform',
        description:
            'Decentralized crowdfunding platform using blockchain smart contracts.',
        image: 'Crowdfunding',
        tech: [
            'Javascript',
            'React.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Solidity',
            'HTML and CSS',
            'Ethereum / EVM Blockchain',
            'Web3.js / Ethers.js',
            'MetaMask',
        ],
        github: 'https://github.com/Vishv186/Blochain-based-Crowdfunding-Platform',
        site: '',
        tag: 'SaaS',
    },
];

export const projectsOther: ProjectOther[] = [];
