import { useMutation } from "@apollo/client";

import destroyProject from "src/graphql/mutations/destroyProject";
import projects from "src/graphql/queries/projects";

export const useDestroyProject = () => {
  const [mutation, mutationState] = useMutation(destroyProject, {
    refetchQueries: [{ query: projects }]
  });

  const mutate = async ({ id }: { id: string }) => {
    const destroyProjectInput = {
      id,
    };

    try {
      await mutation({ variables: { input: destroyProjectInput } });
    } catch (error) {
      console.error(error);
    }
  };

  return [mutate, mutationState] as const;
};
