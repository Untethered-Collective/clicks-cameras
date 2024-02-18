import clsx from 'clsx';

import SanityFooter from '~/components/global/SanityFooter';
import {Link} from '~/components/Link';
import PortableText from '~/components/portableText/PortableText';
import type {SanityLink} from '~/lib/sanity';
import {useRootLoaderData} from '~/root';

/**
 * A component that specifies the content of the footer on the website
 */
export default function Footer() {
  const {layout} = useRootLoaderData();
  const {footer} = layout || {};
  const footerText = layout?.footerText;

  const renderLinks = footer?.links?.map((link: SanityLink) => {
    if (link._type === 'linkExternal') {
      return (
        <div key={link._key}>
          <a
            className="linkTextNavigation"
            href={link.url}
            rel="noreferrer"
            target={link.newWindow ? '_blank' : '_self'}
          >
            {link.title}
          </a>
        </div>
      );
    }
    if (link._type === 'linkInternal') {
      if (!link.slug) {
        return null;
      }

      return (
        <div key={link._key}>
          <Link className="linkTextNavigation" to={link.slug}>
            {link.title}
          </Link>
        </div>
      );
    }
    return null;
  });

  return (
    <footer className="-mt-overlap" role="contentinfo">
      {/* AVKA Footer */}
      <div
        className={clsx(
          'align-start relative overflow-hidden rounded-xl bg-peach px-4 py-8', //
          'md:px-8 md:py-10',
        )}
      >
        <div
          className={clsx(
            'flex flex-col justify-center', //
            'md:flex-row',
          )}
        >

          <div
            className={clsx(
              'w-full text-center max-w-[22rem] self-center text-md font-bold',
              'md:my-0 md:max-w-[27rem]',
            )}
          >
            {renderLinks}
          </div>
        </div>
      </div>

      {/* Sanity Footer */}
      <SanityFooter footerText={footerText}/>
    </footer>
  );
}
