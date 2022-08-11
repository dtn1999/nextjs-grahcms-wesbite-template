import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineLocationOn, MdMailOutline, MdPhone } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import BackgroundImage from "src/components/common/BgImage/BackgroundImage";

const Footer: React.FC = React.memo(function footer(props) {
  const { title, description, columns, secondaryLinks } = props as any;
  return (
    <footer className="relative h-screen w-full">
      <BackgroundImage src="/images/footer-bg-image.jpg" />
      <div className="absolute inset-y-0 left-0 h-screen w-full bg-[rgba(51,151,93,0.68)]" />
      {/* green overlay */}
      <div className="absolute flex h-full w-full flex-col justify-between px-10 text-white md:py-[41px] xl:px-[145px]">
        <div className="grid items-start justify-around md:grid-cols-2 md:flex-wrap lg:grid-cols-3">
          <div className="flex justify-center pr-2">
            {/* wrapper */}
            <div className="mb-8 flex w-fit flex-col items-start lg:items-start">
              <h1 className="text-[38px] font-bold">
                {title.split(" ")[0]}
                <br />
                {title.split(" ").slice(1)}
              </h1>
              <p className="text-[19px] font-normal">{description}</p>
            </div>
          </div>
          <div
            key={columns[0].id}
            className="mb-8 flex w-full flex-col items-start lg:items-center"
          >
            <div>
              <h2 className="text-[31px] font-bold capitalize">
                {columns[0].title}
              </h2>
              <div className="mt-[24px] flex w-full flex-col items-start space-y-[12px]">
                {columns[0]?.pages.map((page: any) => (
                  <Link href={`/${page.slug}`} key={page.id}>
                    <a className="flex items-center space-x-[8px] underline-offset-2 transition-transform duration-500 hover:translate-x-2 hover:text-white hover:underline">
                      <span>
                        <MdArrowForwardIos size={20} />
                      </span>
                      <span className="text-2xl font-normal text-white">
                        {page.label}
                      </span>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div
            key={columns[1].id}
            className="mb-8 flex w-full flex-col  space-y-[12px] md:items-start lg:items-center"
          >
            <div>
              <h2 className="text-[31px] font-bold capitalize">
                {columns[1].title}
              </h2>
              <div className="mt-[24px] flex w-full flex-col items-start space-y-[12px]">
                <article className="flex cursor-pointer items-center space-x-[12px]">
                  <span className="block text-white">
                    <MdMailOutline size={25} />
                  </span>
                  <p>{columns[1]?.contactCard.email}</p>
                </article>
                <article className="flex cursor-pointer items-center space-x-[12px]">
                  <span className="block text-white">
                    <MdPhone size={25} />
                  </span>
                  <p>{columns[1]?.contactCard.phoneNumber}</p>
                </article>
                <article className="flex cursor-pointer items-center space-x-[12px]">
                  <span className="block text-white">
                    <MdOutlineLocationOn size={25} />
                  </span>
                  <p>{columns[1]?.contactCard.address}</p>
                </article>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <hr className="my-[21px] bg-white" />
          <div className="-mt-2 flex flex-wrap justify-between">
            <span className="mt-2">&copy; 2022 VKII Ruhrbezirk e.v</span>
            <div className="mt-2 space-x-[30px] pb-6 capitalize">
              {secondaryLinks.map(({ label, href, id }: any) => (
                <Link key={id} href={href}>
                  <a className="mt-2">{label}</a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
