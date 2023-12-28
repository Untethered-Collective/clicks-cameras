import clsx from 'clsx';

export default function SanityFooter() {
  return (
    <div className="-my-overlap bg-[#121923] pt-overlap text-white">
      <div
        className={clsx(
          'mx-auto max-w-[47rem] px-4 py-12 text-center text-xl leading-caption', //
          'md:px-8',
        )}
      >
        {/* Intro */}
        <div>
          This demo shows how Sanity.io can power remarkable storefronts on
          Shopify&apos;s Hydrogen framework.
        </div>

      </div>
    </div>
  );
}
