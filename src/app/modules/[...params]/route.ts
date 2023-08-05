import { getFramerComponent } from "@/lib/framer-components";
import { redirect  } from "next/navigation";

export async function GET(req: Request, context: Record<string, string>) {
  const { params } = context;

  const pathParams = (params as any).params;

  if (pathParams.length !== 3) {
    redirect('/');
  }

  const [projectID, moduleID, compoenent] = pathParams;

  const url = `https://framerusercontent.com/modules/${projectID}/${moduleID}/${compoenent}`;
  try {
    const code = await getFramerComponent(url);
    return new Response(code, {
      headers: {
        "Content-Type": "text/javascript; charset=UTF-8",
      },
    });
  } catch (e) {
    redirect('/');
  }
}
