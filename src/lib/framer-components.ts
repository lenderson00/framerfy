import axios, { AxiosResponse } from "axios";

interface SourceMap {
  sourcesContent: string[];
}

export const getFramerComponent = async (url: string): Promise<string> => {
  const urlMap = url.replace(".js", ".map");
  const { data }: AxiosResponse<SourceMap> = await axios.get(urlMap);
  return data.sourcesContent[0];
};
