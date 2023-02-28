import { css } from "@emotion/react";
import { AtomButton, AtomImage, AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";
import { useQuery } from "react-query";

type Props = {
  children?: ReactNode;
};

type IAllProducts = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const HomeShopPage: FC<Props> = (props) => {
  const { isLoading, error, data } = useQuery<IAllProducts[]>("products", () =>
    fetch("https://fakestoreapi.com/products").then((res) => res.json())
  );
  return (
    <AtomWrapper alignItems="center" gap="100px" margin="0px 0px 100px 0px">
      <AtomWrapper
        alignItems="center"
        justifyContent="center"
        customCSS={() => css`
          min-height: 620px;
          background-color: #dddddd;
          background-image: url(https://res.cloudinary.com/whil/image/upload/v1677559261/BANNER_bzjcwn.png);
        `}
      >
        <AtomWrapper maxWidth="1440px" padding="0px 90px" gap="20px">
          <AtomText
            fontFamily="Inter"
            color="#003d29"
            fontWeight="bold"
            fontSize="42px"
          >
            Shopping And <br /> Department Store.
          </AtomText>
          <AtomText fontFamily="Inter">
            Shopping is a bit of a relaxing hobby for me, which
            <br /> is sometimes troubling for the bank balance.
          </AtomText>
          <AtomButton
            backgroundColor="#003d29"
            customCSS={() => css`
              font-family: Inter;
              border-radius: 25px;
            `}
          >
            Learn More
          </AtomButton>
        </AtomWrapper>
      </AtomWrapper>
      <AtomWrapper
        flexDirection="column"
        justifyContent="space-between"
        maxWidth="1440px"
        padding="0px 90px"
        gap="20px"
      >
        <AtomText
          customCSS={() => css`
            font-family: Inter;
            font-weight: bold;
            font-size: 22px;
          `}
        >
          Shop Our Top Categories
        </AtomText>
        <AtomWrapper
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {AllCategories?.map((item) => (
            <AtomWrapper
              key={item.id}
              width="auto"
              customCSS={() => css`
                position: relative;
              `}
            >
              <AtomImage
                src={item.image}
                customCSS={() => css`
                  img {
                    /* max-width: 160px; */
                    width: 180px;
                    height: 280px;
                    object-fit: cover;
                    border-radius: 15px;
                  }
                `}
              />
              <AtomText
                customCSS={() => css`
                  font-family: Inter;
                  font-weight: bold;
                  font-size: 22px;
                  position: absolute;
                  color: white;
                  top: 0;
                  padding: 20px;
                `}
              >
                {item.label}
              </AtomText>
            </AtomWrapper>
          ))}
        </AtomWrapper>
      </AtomWrapper>
      <AtomWrapper
        flexDirection="column"
        justifyContent="space-between"
        maxWidth="1440px"
        padding="0px 90px"
        gap="20px"
      >
        <AtomText
          customCSS={() => css`
            font-family: Inter;
            font-weight: bold;
            font-size: 22px;
          `}
        >
          Choose By Brand
        </AtomText>
        <AtomWrapper
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          customCSS={() => css`
            display: grid;
            grid-template-columns: repeat(4, minmax(200px, 1fr));
            gap: 20px;
          `}
        >
          {ChooseByBrand?.map((item) => (
            <AtomWrapper
              key={item.id}
              width="auto"
              customCSS={() => css`
                position: relative;
                background-color: #f5f6f6;
                display: grid;
                grid-template-columns: 120px 1fr;
              `}
            >
              <AtomImage
                src={item.image}
                width="auto"
                customCSS={() => css`
                  img {
                    width: 50px;
                    height: 50px;
                    object-fit: cover;
                    border-radius: 15px;
                  }
                `}
              />
              <AtomWrapper width="auto">
                <AtomText
                  customCSS={() => css`
                    font-family: Inter;
                    font-weight: bold;
                    font-size: 22px;
                    position: absolute;
                    color: black;
                    top: 0;
                    padding: 20px;
                  `}
                >
                  {item.label}
                </AtomText>
                <AtomText
                  customCSS={() => css`
                    font-family: Inter;
                    font-size: 16px;
                    color: black;
                  `}
                >
                  Delivery with in 24 hours
                </AtomText>
              </AtomWrapper>
            </AtomWrapper>
          ))}
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

const ChooseByBrand = [
  {
    id: "d648d020-0e6c-4668-a2fd-b287a8e0586d",
    label: "Staples",
    image:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e560afc2c49da53521_brand%20(3)-min.png",
  },
  {
    id: "93a1d74c-f891-4771-9c1f-8ab405389355",
    label: "Sprouts",
    image:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e58b497e41aa46b801_brand%20(8)-min.png",
  },
  {
    id: "52fcbe12-b997-4261-87dd-a15392f17647",
    label: "Grocery outlet",
    image:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e5eaf8533b0958cefe_brand%20(5)-min.png",
  },
  {
    id: "8f852530-c22d-40c9-b9ad-74675d3f3f48",
    label: "Mollie stones",
    image:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e454ac2e9d497cb531_brand%20(6)-min.png",
  },
  {
    id: "faf3c886-39d3-4cb6-9542-bb8e8bd98b0a",
    label: "Sports Basement",
    image:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4707380971125e685_brand%20(4)-min.png  ",
  },
  {
    id: "5f48e966-67fd-4c3b-a947-78e3248a3f0c",
    label: "Container Store",
    image:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc2193aa53511_brand%20(2)-min.png",
  },
  {
    id: "3707fc38-5838-4363-bb43-478e72d4e719",
    label: "Target",
    image:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4c21faa5e03c209c5_brand%20(1)-min.png",
  },
  {
    id: "771149dc-30a2-4154-a876-2b3bcbc273df",
    label: "Bevmo!",
    image:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e51eb4ad92a3e75673_brand%20(7)-min.png",
  },
];

const AllCategories = [
  {
    id: "001aeb09-a030-4400-bb63-51298b42c97d",
    label: "Furniture",
    image:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png",
  },
  {
    id: "d12890b4-91ec-4319-aa4d-7bb91d15843a",
    label: "Hand Bag",
    image:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png",
  },
  {
    id: "cba66760-8a08-492a-9d1b-d14ee40ad2d4",
    label: "Books",

    image:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc22b7ea53520_books-min.png",
  },
  {
    id: "f4875636-44ea-4706-999c-6dd0eb8ede72",
    label: "Tech",

    image:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e754ac2e32897cb53b_tech-min.png",
  },
  {
    id: "ff3b605d-92dd-4648-9554-840e0242b9bb",
    label: "Sneakers",
    image:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64b769118272f244f_sneakers-min.png ",
  },
  {
    id: "",
    label: "Travel",
    image:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad6d07e7568f_travel-min.png",
  },
];

export default HomeShopPage;
