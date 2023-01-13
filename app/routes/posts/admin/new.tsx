import type { ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  useActionData,
  useTransition,
} from "@remix-run/react";

//...
import invariant from "tiny-invariant";
// ..
export const action = async ({ request }: ActionArgs) => {
    
    // TODO: remove me
    await new Promise((res) => setTimeout(res, 1000));
  
    // ...
  };

export default function NewPost() {
  const errors = useActionData<typeof action>();

  const transition = useTransition();
  const isCreating = Boolean(transition.submission);

  return (
    <Form method="post">
      {/* ... */}
      <p className="text-right">
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
          disabled={isCreating}
        >
          {isCreating ? "Creating..." : "Create Post"}
        </button>
      </p>
    </Form>
  );
}
