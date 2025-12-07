import { groq } from 'next-sanity'

export const FAQS_QUERY = groq`
  *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer,
    category,
    order
  }
`

export const BRANCHES_QUERY = groq`
  *[_type == "branch"] | order(order asc) {
    _id,
    name,
    address,
    mapQuery,
    phone,
    order
  }
`

export const SOCIAL_MEDIA_QUERY = groq`
  *[_type == "socialMedia"] | order(order asc) {
    _id,
    name,
    url,
    icon,
    order
  }
`

export const SERVICES_QUERY = groq`
  *[_type == "service" && isActive == true] | order(order asc) {
    _id,
    title,
    slug,
    description,
    icon,
    images[] {
      image {
        asset {
          _id,
          url
        }
      },
      alt,
      type
    },
    order,
    isActive
  }
`