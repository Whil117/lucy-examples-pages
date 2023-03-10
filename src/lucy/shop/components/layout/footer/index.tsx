import { css } from "@emotion/react";
import { AtomImage, AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const LayoutFooter: FC<Props> = (props) => {
  return (
    <AtomWrapper alignItems="center" justifyContent="center">
      <AtomWrapper
        flexDirection="column"
        justifyContent="space-between"
        maxWidth="1440px"
        padding="0px 90px"
        gap="20px"
        customCSS={() => css`
          display: grid;
          grid-template-columns: 1fr repeat(4, 0.4fr);
          margin-bottom: 100px;
          @media (max-width: 980px) {
            padding: 0px 30px;
            display: flex;
            flex-direction: column;
            margin-bottom: 50px;
          }
        `}
      >
        <AtomWrapper gap="5px">
          <AtomImage
            width="auto"
            height="50px"
            objectFit="contain"
            src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg"
          />
          <AtomText
            customCSS={() => css`
              font-family: Inter;
            `}
            fontSize="12px"
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </AtomText>
          <AtomText
            customCSS={() => css`
              font-family: Inter;
              font-weight: bold;
            `}
          >
            Accepted Payments
          </AtomText>
          <AtomWrapper
            customCSS={() => css`
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              justify-content: space-between;
              gap: 10px;
            `}
          >
            {payments?.map((item) => (
              <AtomWrapper
                key={item.id}
                customCSS={() => css`
                  align-items: center;
                  border-style: solid;
                  border-width: 0.5px;
                  border-color: #d9d9d9;
                  border-radius: 5px;
                  width: 100%;
                  height: 50px;
                `}
              >
                <AtomImage
                  src={item.logo}
                  key={item.id}
                  customCSS={() => css`
                    width: 30px;
                    height: 30px;
                    img {
                      object-fit: contain;
                    }
                  `}
                />
              </AtomWrapper>
            ))}
          </AtomWrapper>
        </AtomWrapper>
        {DepartamentLinks?.map((item) => (
          <AtomWrapper key={item?.label}>
            <AtomText
              customCSS={() => css`
                font-family: Inter;
                font-weight: bold;
              `}
            >
              {item.label}
            </AtomText>
            <AtomWrapper justifyContent="flex-start">
              {item?.list?.map((item) => (
                <AtomText
                  key={item.id}
                  customCSS={() => css`
                    font-family: Inter;
                  `}
                >
                  {item.label}
                </AtomText>
              ))}
            </AtomWrapper>
          </AtomWrapper>
        ))}
      </AtomWrapper>
    </AtomWrapper>
  );
};

const DepartamentLinks = [
  {
    label: "Department",
    list: [
      {
        id: "dd32mc",
        label: "Fashion",
      },
      {
        id: "5cnd",
        label: "Education Product",
      },
      {
        id: "4nca",
        label: "Frozen Food",
      },
      {
        id: "91nmd",
        label: "Beverages",
      },
      {
        id: "dkfm1",
        label: "Organic Grocery",
      },
      {
        id: "0mde",
        label: "Office Supplies",
      },
      {
        id: "84ddna",
        label: "Beauty Products",
      },
    ],
  },
  {
    label: "About Us",
    list: [
      {
        id: "asd3r",
        label: "About Shopcart",
      },
      {
        id: "xair",
        label: "Careers",
      },
      {
        id: "inrd",
        label: "New & Blog",
      },
      {
        id: "Help",
        label: "Help",
      },
      {
        id: "iun1d",
        label: "Press Center",
      },
      {
        id: "$inew",
        label: "Shop By Location",
      },
      {
        id: "$nasc",
        label: "Shopcart Brands",
      },
      {
        id: "knas",
        label: "Affiliate & Partners",
      },
      {
        id: "89nda",
        label: "Ideas & Guides",
      },
    ],
  },
  {
    label: "Services",
    list: [
      {
        id: "Gift Card",
        label: "Gift Card",
      },
      {
        id: "iasdnf33",
        label: "Mobile App",
      },
      {
        id: "1und",
        label: "Shipping & Delivery",
      },
      {
        id: "84h",
        label: "Order Pickup",
      },
      {
        id: "8dna",
        label: "Account Signup",
      },
    ],
  },
  {
    label: "Help",
    list: [
      {
        id: "nsdsa",
        label: "Shopcart Help",
      },
      {
        id: "i12nasd",
        label: "Returns",
      },
      {
        id: "912hj3",
        label: "Track Orders",
      },
      {
        id: "i91ed",
        label: "Contact Us",
      },
      {
        id: "9jsadf",
        label: "Feedback",
      },
      {
        id: "91121",
        label: "Security & Fraud",
      },
    ],
  },
];

export const payments = [
  {
    id: "xi32",
    logo: "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8816711ebecac46d8_stripe.png",
  },
  {
    id: "9xe",
    logo: "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce82d440b7ab84a993f_visa.png",
  },
  {
    id: "ixndr",
    logo: "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8f032504012a5896b_Mastercard.png",
  },
  {
    id: "0dmaf",
    logo: "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e48b497e6ce846b7ff_Amazon.png",
  },
  {
    id: "9xng",
    logo: "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1f054e419e42aca4a9a2_Klarna.png",
  },
  {
    id: "ioand",
    logo: "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce7c4510cf9a55828a0_PayPal.png",
  },
  {
    id: "9nsdf1",
    logo: "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4707380264b25e680_ApplePay.png",
  },
  {
    id: "xjkas",
    logo: "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1f55dc68c5ee83d0cbf8_GooglePay.png",
  },
];

export default LayoutFooter;
