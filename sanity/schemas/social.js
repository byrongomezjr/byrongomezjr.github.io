import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "title",
      description: "Platform for Social Media",
      type: "string",
    },
    {
      name: "url",
      title: "Url",
      type: "url",
    },
  ],
})
