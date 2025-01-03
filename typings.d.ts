interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: PortableText;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    title: string;
}

export interface Project extends SanityBody {
    title: string;
    _type: "project";
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}

export interface Social extends SanityBody {
    type: "social";
    title: string;
    url: string;
}

interface PortableText {
    split(arg0: string): unknown;
    _type: "block";
    children: Array<{
        _type: "span";
        text: string;
    }>;
}

export interface Experience {
    _id: string;
    jobTitle: string;
    company: string;
    dateStarted: string;
    dateEnded?: string;
    isCurrentlyWorkingHere: boolean;
    summary: string;
    technologies: Technology[];
}
