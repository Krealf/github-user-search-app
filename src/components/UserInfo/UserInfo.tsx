import styles from "./UserInfo.module.scss";
import type { LocalGithubUser } from "@/types";
import { InfoItem, type InfoItemProps } from "@/components/InfoItem";

import TwitterIcon from "@/assets/icon-twitter.svg?react"
import LocationIcon from "@/assets/icon-location.svg?react"
import BlogIcon from "@/assets/icon-website.svg?react"
import CompanyIcon from "@/assets/icon-company.svg?react"

interface UserInfoProps extends Pick<
  LocalGithubUser,
  "blog" | "company" | "location" | "twitter"
> {}

export const UserInfo = ({
  blog,
  company,
  twitter,
  location,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <BlogIcon />,
      text: blog,
      isLink: true,
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    }
  ]

  return <div className={styles.userInfo}>
    {items.map((item, index) => <InfoItem {...item} key={index}/>)}
  </div>;
};
