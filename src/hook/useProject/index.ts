/* eslint-disable react-hooks/exhaustive-deps */
import RoutesConfig from "@/lucy/config.types";
import RamotionConfig from "@/lucy/ramotion/routes";
import WhilConfig from "@/lucy/whil/routes";
import { isLocalOrURL, ProjectIdAtom } from "@/pages/[[...path]]";
import { useAtomValue } from "jotai";
import { NextRouter, useRouter } from "next/router";
import { useMemo } from "react";

const allRoutes = [RamotionConfig, WhilConfig];

type RouterWithComponents = NextRouter & {
  components: {
    ["/[[...path]]"]: {
      props: {
        pageProps: {
          hostname: string;
          path: string;
        };
      };
    };
  };
};

type UseProjectProps = {
  project: RoutesConfig;
  router: NextRouter;
  path: string;
  hostname: string;
  View: RoutesConfig["routes"];
  AllRoutes: RoutesConfig[];
};

const useProject = (): UseProjectProps => {
  const router = useRouter() as RouterWithComponents;

  const projectId = useAtomValue(ProjectIdAtom);
  return useMemo(() => {
    const pageProps = router.components?.["/[[...path]]"]?.props?.pageProps;

    const hostname = pageProps?.hostname;
    const path = pageProps?.path;
    const isHost = isLocalOrURL?.includes(hostname);

    const findProject = allRoutes?.find((item) =>
      [item.prod, item.dev]?.includes(isHost ? projectId : hostname)
    );

    return {
      project: findProject as RoutesConfig,
      router,
      path,
      hostname,
      View: findProject?.routes as RoutesConfig["routes"],
      AllRoutes: allRoutes,
    };
  }, [router]);
};

export default useProject;
