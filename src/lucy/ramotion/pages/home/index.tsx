/* eslint-disable react/no-unescaped-entities */
import { css } from "@emotion/react";
import { AtomIcon, AtomText, AtomWrapper } from "lucy-nxtjs";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const HeaderOptions = [
  {
    id: 1,
    label: "Services",
    link: "#",
  },
  {
    id: 2,
    label: "Work",
    link: "#",
  },
  {
    id: 3,
    label: "About",
    link: "#",
  },
  {
    id: 4,
    label: "Blog",
    link: "#",
  },
  {
    id: 5,
    label: "Contact",
    link: "#",
  },
];

const HomeLandingRamotion: FC<Props> = (props) => {
  const router = useRouter();
  return (
    <>
      <AtomWrapper
        gap="30px"
        customCSS={() => css`
          margin-bottom: 100px;
        `}
      >
        <AtomWrapper
          customCSS={() => css`
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
          `}
        >
          <svg height="30" width="23" fill="currentColor">
            <path
              d="M7.54601227,0 L7.54601227,0 L0,0 L0,24 L15,24
                            L9.20245399,14.6769231 C12.5153374,13.8461538 15,10.9846154 15,7.38461538 L15,7.38461538 L15,7.38461538 C15,3.32307692
                            11.6871166,0 7.54601227,0"
              opacity=".62"
            ></path>
            <polygon points="0 24 15 24 0 0"></polygon>
          </svg>
          <AtomWrapper
            width="auto"
            justifyContent="space-between"
            flexDirection="row"
            gap="25px"
            customCSS={() => css`
              @media (max-width: 980px) {
                display: none;
              }
            `}
          >
            {HeaderOptions?.map((item) => (
              <AtomText
                fontFamily="Graphik Web"
                fontWeight="400"
                key={item.id}
                fontSize="18px"
                color="#1414148f"
              >
                {item.label}
              </AtomText>
            ))}
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper
          customCSS={() => css`
            min-height: 500px;
            align-items: flex-start;
            justify-content: center;
          `}
        >
          <AtomText
            maxWidth="60%"
            customCSS={() => css`
              font-family: Graphik Web;
              font-weight: 700;
              font-size: 82px;
              font-weight: 700;
              letter-spacing: -2px;
              line-height: 86px;
              @media (max-width: 980px) {
                width: auto;
                max-width: max-content;
              }
            `}
          >
            Digital product and brand agency
          </AtomText>
        </AtomWrapper>
        <AtomWrapper
          customCSS={() => css`
            height: 1px;
            background-color: #1414143d;
          `}
        ></AtomWrapper>
        <AtomWrapper
          flexDirection="row"
          gap="25px"
          customCSS={() => css`
            @media (max-width: 980px) {
              flex-wrap: wrap;
            }
          `}
        >
          <AtomWrapper gap="10px">
            <AtomText
              customCSS={() => css`
                font-family: Graphik Web;
                font-weight: 700;
                font-size: 82px;
                font-weight: 700;
                letter-spacing: -2px;
              `}
            >
              For startups
            </AtomText>
            <AtomText
              customCSS={() => css`
                font-family: Graphik Web;
                font-weight: 400;
                font-size: 24px;
              `}
            >
              Since 2009 we’ve been helping startups design their product and
              brands. With more than $3.5B in exits and $750M+ raised by our
              startup clients, our design services have become an inseparable
              part of their success.
            </AtomText>
            {typesMethods?.map((item) => (
              <AtomText
                key={item}
                customCSS={() => css`
                  font-family: Graphik Web;
                  font-size: 24px;
                  border-bottom: 1px solid #00000029;
                `}
              >
                {item}
              </AtomText>
            ))}
          </AtomWrapper>
          <AtomWrapper
            customCSS={() => css`
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              @media (max-width: 980px) {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
              }
            `}
          >
            {companiesLogosTable?.map((item) => (
              <AtomWrapper
                key={item.id}
                customCSS={() => css`
                  border: 1px solid #dbdbdb80;
                  @media (max-width: 980px) {
                    flex-basis: 30%;
                    flex-grow: 1;
                  }
                `}
              >
                <AtomIcon
                  src={item.icon}
                  width="180px"
                  height="100px"
                  color="default"
                />
              </AtomWrapper>
            ))}
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper
          customCSS={() => css`
            height: 1px;
            background-color: #1414143d;
          `}
        ></AtomWrapper>
        <AtomWrapper
          flexDirection="row"
          gap="10px"
          customCSS={() => css`
            @media (max-width: 980px) {
              flex-wrap: wrap;
            }
          `}
        >
          {CaseStudy?.map((item) => (
            <AtomWrapper key={item.label} gap="10px">
              <AtomIcon src={item.logo} width="140px" color="default" />
              <AtomText
                customCSS={() => css`
                  font-family: Graphik Web;
                  font-weight: 700;
                  font-size: 66px;
                  font-weight: 700;
                `}
              >
                {item.price}
              </AtomText>
              <AtomText
                customCSS={() => css`
                  font-family: Graphik Web;
                  font-weight: 700;
                  font-size: 24px;
                `}
              >
                {item.label}
              </AtomText>
              <AtomText
                customCSS={() => css`
                  font-family: Graphik Web;
                  font-weight: 400;
                  font-size: 20px;
                `}
              >
                {item.description}
              </AtomText>
              <AtomText
                customCSS={() => css`
                  font-family: Graphik Web;
                  font-weight: 400;
                  font-size: 20px;
                  border-bottom: 1px solid #00000029;
                `}
              >
                Case study
              </AtomText>
            </AtomWrapper>
          ))}
        </AtomWrapper>
        <AtomWrapper
          customCSS={() => css`
            height: 1px;
            background-color: #1414143d;
          `}
        ></AtomWrapper>
        <AtomWrapper
          flexDirection="row"
          customCSS={() => css`
            @media (max-width: 980px) {
              flex-wrap: wrap;
            }
          `}
        >
          <AtomWrapper>
            <AtomText
              customCSS={() => css`
                font-family: Graphik Web;
                font-weight: 700;
                font-size: 66px;
                font-weight: 700;
                letter-spacing: -2px;
              `}
            >
              For SMBs and Enterprise
            </AtomText>
            <AtomText
              customCSS={() => css`
                font-family: Graphik Web;
                font-weight: 400;
                font-size: 24px;
              `}
            >
              We extend design and development departments of established
              businesses and brands, helping them reflect the current state of
              their business and setup strategy and design foundation for the
              future growth.
            </AtomText>
            {moreSBMS?.map((item) => (
              <AtomText
                key={item.label + item.id}
                customCSS={() => css`
                  font-family: Graphik Web;
                  font-size: 24px;
                  border-bottom: 1px solid #00000029;
                `}
              >
                {item.label}
              </AtomText>
            ))}
          </AtomWrapper>
          <AtomWrapper
            customCSS={() => css`
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              @media (max-width: 980px) {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
              }
            `}
          >
            {SMBSCOMPANIES?.map((item) => (
              <AtomWrapper
                key={item}
                customCSS={() => css`
                  border: 1px solid #dbdbdb80;
                  @media (max-width: 980px) {
                    flex-basis: 30%;
                    flex-grow: 1;
                  }
                `}
              >
                <AtomIcon
                  src={item}
                  width="180px"
                  height="100px"
                  color="default"
                />
              </AtomWrapper>
            ))}
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper
          customCSS={() => css`
            height: 1px;
            background-color: #1414143d;
          `}
        ></AtomWrapper>
        <AtomWrapper
          flexDirection="row"
          gap="10px"
          customCSS={() => css`
            @media (max-width: 980px) {
              flex-wrap: wrap;
            }
          `}
        >
          {newCaseStudy?.map((item) => (
            <AtomWrapper key={item.label} gap="10px">
              <AtomIcon src={item.logo} width="140px" color="default" />
              <AtomText
                customCSS={() => css`
                  font-family: Graphik Web;
                  font-weight: 700;
                  font-size: 66px;
                  font-weight: 700;
                `}
              >
                {item.price}
              </AtomText>
              <AtomText
                customCSS={() => css`
                  font-family: Graphik Web;
                  font-weight: 700;
                  font-size: 24px;
                `}
              >
                {item.label}
              </AtomText>
              <AtomText
                customCSS={() => css`
                  font-family: Graphik Web;
                  font-weight: 400;
                  font-size: 20px;
                `}
              >
                {item.description}
              </AtomText>
              <AtomText
                customCSS={() => css`
                  font-family: Graphik Web;
                  font-weight: 400;
                  font-size: 20px;
                  border-bottom: 1px solid #00000029;
                `}
              >
                Case study
              </AtomText>
            </AtomWrapper>
          ))}
        </AtomWrapper>
        <AtomWrapper
          customCSS={() => css`
            min-height: 420px;
          `}
        >
          <AtomText
            customCSS={() => css`
              font-family: Graphik Web;
              font-weight: 700;
              font-size: 24px;
              font-weight: 700;
            `}
          >
            Shall we chat?
          </AtomText>
          <AtomText
            customCSS={() => css`
              font-family: Graphik Web;
              font-weight: 700;
              font-size: 66px;
              font-weight: 700;
            `}
            width="70%"
          >
            Let's talk about your product
          </AtomText>
        </AtomWrapper>
      </AtomWrapper>
      <AtomWrapper
        flexDirection="column"
        customCSS={() => css`
          min-height: 320px;
          gap: 25px;
        `}
      >
        <AtomWrapper
          flexDirection="row"
          customCSS={() => css`
            @media (max-width: 980px) {
              flex-wrap: wrap;
            }
          `}
        >
          {footerCOlumns?.map((item) => (
            <AtomWrapper key={item.id}>
              <AtomText
                customCSS={() => css`
                  font-family: Graphik Web;
                  font-weight: 700;
                  font-size: 24px;
                  font-weight: 700;
                  color: #1414148f;
                `}
              >
                {item.label}
              </AtomText>
              <AtomWrapper>
                {item?.options?.map((data) => (
                  <AtomText
                    key={data?.id}
                    customCSS={() => css`
                      font-family: Graphik Web;
                      font-weight: 400;
                      font-size: 20px;
                      color: #1414148f;
                      border-bottom: 1px solid #1414143d;
                    `}
                  >
                    {data.label}
                  </AtomText>
                ))}
              </AtomWrapper>
            </AtomWrapper>
          ))}
        </AtomWrapper>

        <AtomText
          customCSS={() => css`
            font-family: Graphik Web;
            font-weight: 400;
            font-size: 20px;
            color: #1414148f;
            border-bottom: 1px solid #1414143d;
          `}
        >
          © 2023, Ramotion Inc. | Sitemap | Privacy Policy | Terms of Use |
          Cookie Policy
        </AtomText>
      </AtomWrapper>
    </>
  );
};

const footerCOlumns = [
  {
    id: "safdsdxk2",
    label: "Locations",
    options: [
      {
        id: "3kdmcik24",
        label: "San franciso",
      },
      {
        id: "xj32",
        label: "Los Angeles, CA",
      },
      {
        id: "imxx2",
        label: "New York, NY",
      },
    ],
  },
  {
    id: "xin3",
    label: "Portfolio",
    options: [
      {
        id: "ex3k",
        label: "Awwwards",
      },
      {
        id: "3nx4",
        label: "Dribble",
      },
      {
        id: "i93m",
        label: "Behance",
      },
      {
        id: "rixm4",
        label: "Github",
      },
    ],
  },
  {
    id: "ij2i",
    label: "Social media",
    options: [
      {
        id: "asmx4",
        label: "Linkedln",
      },
      {
        id: "xin3224izk",
        label: "Twitter",
      },
      {
        id: "id13",
        label: "Instagram",
      },
      {
        id: "8jdsf",
        label: "Facebook",
      },
    ],
  },
  {
    id: "inio23",
    label: "Get in touch",
    options: [
      {
        id: "dnmi34",
        label: "+ 1 111111111",
      },
      {
        id: "821ne",
        label: "Contact us",
      },
    ],
  },
];

const newCaseStudy = [
  {
    logo: "https://www.datocms-assets.com/22695/1635435398-turo.svg",
    label: "Improvement in self-service for Turo",
    price: "58%",
    description:
      "During our collaboration we were able to reduce support overflow by 30%.",
  },
  {
    logo: "https://www.datocms-assets.com/22695/1635435466-ninox.svg",
    label: "Average retention after 29 days of trial",
    price: "30%",
    description:
      "Ongoing design system work for the low-code cloud-based data entry solution.",
  },
];

const SMBSCOMPANIES = [
  "https://www.datocms-assets.com/22695/1582115743-logoadobe.svg",
  "https://www.datocms-assets.com/22695/1657825356-stripe.svg",
  "https://www.datocms-assets.com/22695/1582115800-logonetflix.svg",
  "https://www.datocms-assets.com/22695/1608381389-cbre.svg",
  "https://www.datocms-assets.com/22695/1582115797-logomozilla.svg",
  "https://www.datocms-assets.com/22695/1608381477-okta.svg",
  "https://www.datocms-assets.com/22695/1582115801-logoopera.svg",
  "https://www.datocms-assets.com/22695/1582115802-logooppo.svg",
  "https://www.datocms-assets.com/22695/1582115799-logonbcuniversal.svg",
  "https://www.datocms-assets.com/22695/1582115825-logoturo.svg",
  "https://www.datocms-assets.com/22695/1657825353-clearbit.svg",
  "https://www.datocms-assets.com/22695/1657825351-crunchbase.svg",
  "https://www.datocms-assets.com/22695/1582115834-logoxero.svg",
];

const moreSBMS = [
  {
    id: "kdmsdkf",
    label: "Branding",
  },
  {
    id: "98mcxmxk",
    label: "Marketing websites",
  },
  {
    id: "msdsdu23",
    label: "UI/UX",
  },
  {
    id: "imxl21",
    label: "Design systems",
  },
];

const CaseStudy = [
  {
    logo: "https://www.datocms-assets.com/22695/1670580137-truebill2.svg",
    label: "Acquisition of Truebill",
    price: "$1.27B",
    description:
      "Brand identity design for a platform that manages recurring bills.",
  },
  {
    logo: "https://www.datocms-assets.com/22695/1670594315-cellebrite2.svg",
    label: "IPO for Cellebrite",
    price: "$2.4B",
    description: "Ongoing design partner for the forensics solutions company.",
  },
];

const typesMethods = ["Branding", "Marketing websites", "UI/UX"];

const companiesLogosTable = [
  {
    id: 1232,
    icon: "https://www.datocms-assets.com/22695/1582115762-logodescript.svg",
  },
  {
    id: 2344554,
    icon: "https://www.datocms-assets.com/22695/1628084534-truebill.svg",
  },
  {
    id: 323333,
    icon: "https://www.datocms-assets.com/22695/1608381009-transcend.svg",
  },
  {
    id: 112132323,
    icon: "https://www.datocms-assets.com/22695/1608380895-letter.svg",
  },

  {
    id: 999932,
    icon: "https://www.datocms-assets.com/22695/1582115820-logostreamlit.svg",
  },
  {
    id: 88434,
    icon: "https://www.datocms-assets.com/22695/1582115753-logocafex.svg",
  },
  {
    id: 9387484,
    icon: "https://www.datocms-assets.com/22695/1657896395-nextmv.svg",
  },
  {
    id: 9939393943231223,
    icon: "https://www.datocms-assets.com/22695/1608380684-cypress.svg",
  },
  {
    id: 2334234,
    icon: "https://www.datocms-assets.com/22695/1582115752-logobitmoji.svg",
  },
  {
    id: 54554,
    icon: "https://www.datocms-assets.com/22695/1582115786-logojune.svg",
  },
  {
    id: 77474,
    icon: "https://www.datocms-assets.com/22695/1582115766-logofilecoin.svg",
  },
  {
    id: 44723294,
    icon: "https://www.datocms-assets.com/22695/1582115790-logokyber-network.svg",
  },
  {
    id: 74747,
    icon: "https://www.datocms-assets.com/22695/1582115832-logowyre.svg",
  },
];

export default HomeLandingRamotion;
