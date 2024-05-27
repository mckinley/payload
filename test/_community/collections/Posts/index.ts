import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

import { mediaSlug } from '../Media'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  fields: [
    {
      name: 'hiddenField',
      type: 'text',
      hidden: true,
    },
  ],
  access: {
    read: () => {
      return {
        hiddenField: {
          equals: 'value',
        },
      }
    },
  },
  versions: {
    drafts: true,
  },
  slug: postsSlug,
}
