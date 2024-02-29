import groq from 'groq';

import {COLOR_THEME} from './fragments/colorTheme';
import {LINKS} from './fragments/links';
import {USP_BAR} from './fragments/uspBar';

export const LAYOUT_QUERY = groq`
  *[_type == 'settings'] | order(_updatedAt desc) [0] {
    seo,
    "menuLinks": menu.links[] {
      ${LINKS}
    },
    uspBar {
      ${USP_BAR}
    },
    footer {
      links[] {
        ${LINKS}
      },
    },
    footerText,
    notFoundPage {
      body,
      "collectionGid": collection->store.gid,
      colorTheme->{
        ${COLOR_THEME}
      },
      title
    }
  }
`;
