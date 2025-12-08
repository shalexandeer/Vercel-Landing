import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {faqType} from './faqType'
import {branchType} from './branchType'
import {contactPersonType} from './contactPersonType'
import {socialMediaType} from './socialMediaType'
import {serviceType} from './serviceType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, faqType, branchType, contactPersonType, socialMediaType, serviceType],
}
