export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        {
            name: 'jobTitle',
            title: 'JobTitle',
            type: 'string',
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string',
        },
        {
            name: 'dateStarted',
            title: 'DateStarted',
            type: 'string',
        },
        {
            name: 'dateEnded',
            title: 'DateEnded',
            type: 'string',
        },
        {
            name: 'isCurrentlyWorkingHere',
            title: 'IsCurrentlyWorkingHere',
            type: 'boolean',
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'skill' } }],
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'text',
        },
    ],
}