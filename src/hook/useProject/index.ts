/* eslint-disable react-hooks/exhaustive-deps */
import RoutesConfig from "@/lucy/config.types";
import { allRoutes, onlyWithRoute } from "@/lucy/main.routes";
import { isLocalOrURL, ProjectIdAtom } from "@/pages/[[...path]]";
import { useAtomValue } from "jotai";
import { NextRouter, useRouter } from "next/router";
import { useMemo } from "react";

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

const chooseTypeProject = (
  isHostLocal: boolean,
  projectId: string,
  hostname: string
) => {
  return isHostLocal
    ? allRoutes?.find((item) => [item.prod, item.dev]?.includes(projectId))
    : onlyWithRoute?.[hostname];
};

const useProject = (): UseProjectProps => {
  const router = useRouter() as RouterWithComponents;

  const pageProps = router.components?.["/[[...path]]"]?.props?.pageProps;

  const hostname = pageProps?.hostname;
  const path = pageProps?.path;

  const projectId = useAtomValue(ProjectIdAtom);
  const isHost = isLocalOrURL?.includes(hostname);

  return useMemo(() => {
    const findProject = chooseTypeProject(isHost, projectId, hostname);

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
