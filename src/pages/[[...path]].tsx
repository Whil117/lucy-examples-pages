/* eslint-disable @next/next/no-css-tags */
import useProject from "@/hook/useProject";
import { css } from "@emotion/react";
import { atom, useAtom } from "jotai";
import { AtomInput, AtomLoader, AtomWrapper } from "lucy-nxtjs";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  hostname: string;
  path: string;
};

export const isLocalOrURL = [
  "localhost:3000",
  "lucy-examples-pages.vercel.app",
];

export const ProjectIdAtom = atom("9b4b96e3-6a69-4777-8d5b-f583a365ee43");

const BrowserRoutesStatic = dynamic(() => import("@/components/@routes"), {
  ssr: false,
  loading: () => <AtomLoader type="fullscreen" colorLoad="#202020" isLoading />,
});

const DynamicPage: FC<Props> = ({ hostname }) => {
  const { AllRoutes, router } = useProject();

  const [projectId, setProjectId] = useAtom(ProjectIdAtom);
  return (
    <AtomWrapper
      backgroundColor="#fafbfc"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <BrowserRoutesStatic />
      {isLocalOrURL.includes(hostname ?? "") && (
        <AtomWrapper
          maxWidth="max-content"
          customCSS={() => css`
            flex-direction: row;
            position: fixed;
            right: 20px;
            bottom: 10px;
          `}
          height="auto"
        >
          <AtomInput
            type="select"
            options={() =>
              AllRoutes?.map((val) => ({
                id: val.prod,
                label: val.name,
                value: val.prod,
              }))
            }
            value={projectId}
            customCSS={() => css`
              font-family: Graphik Web;
              font-size: 18px;
              div {
                border: 1px solid #0073fc;
              }
              background-color: white;
            `}
            onChange={(e) => {
              setProjectId(e.target.value);
              router.push(`/`);
            }}
          />
        </AtomWrapper>
      )}
    </AtomWrapper>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const path = decodeURIComponent(
    context.resolvedUrl.split("?")[0] ?? context.resolvedUrl
  );

  return {
    props: {
      path,
      hostname: context.req.headers.host,
    },
  };
};

export default DynamicPage;
