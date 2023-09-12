import React from "react";
import parse from "html-react-parser";
import Image from 'next/image';
import Link from 'next/link';

const UpdateTeaser = ({ data }) => {
  const featuredImage = {
    data: data.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData?.images?.fallback?.src,
    alt: data.featuredImage?.node?.alt || ``,
  };

  return (
    <div className="inner">
      <div className="featured-img">
        {
          !featuredImage.data && <Image src="../assets/no-image.jpg" alt="logo" />
        }
        {featuredImage?.data && (
          <Link href={data.uri.replace(/\/$/, '')} style={{ zIndex: '9999' }}>
            <Image
              src={featuredImage.data}
              width={374}
              height={215}
              alt={featuredImage.alt || ``}
              style={{ zIndex: '9998' }}
            />
          </Link>
        )}
      </div>

      <div className="desc">
        <span>{data.date}</span>
        <h2>
          <Link href={data.uri.replace(/\/$/, '')}>
            <strong>{parse(data.title)}
            </strong>
          </Link>
        </h2>
        {!!data.excerpt && (
          <div className="excerpt">
            <div>
              {(data.excerpt.length > 120) ? parse(data.excerpt.substring(0, 120) + "...") : parse(data.excerpt)}
            </div>
            <div style={{ textAlign: 'right' }}>
              <Link href={data.uri.replace(/\/$/, '')} className='teaserlink'>...more</Link>
            </div>
          </div>
        )}
      </div>
    </div>

  )
};

export default UpdateTeaser

